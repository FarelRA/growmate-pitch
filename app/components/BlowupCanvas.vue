<script setup lang="ts">
/**
 * Kanvas 3D imperatif untuk BedahLayout dan arsip produk.
 * Satu jalur pemuatan: GLB glTF 2.0 hasil konversi terbaik (FreeCAD untuk STEP,
 * trimesh untuk OBJ Tinkercad) yang sudah Y-tegak sesuai spesifikasi glTF,
 * bernama per bagian, dan membawa bahan PBR masing-masing.
 * Ledakan antar bagian memakai arah radial plus susun Y dengan animasi redam.
 */
const props = withDefaults(defineProps<{ src: string; exploded: boolean; spin?: boolean }>(), { spin: true })

const emit = defineEmits<{ ready: [parts: number]; interact: [] }>()

const box = ref<HTMLElement | null>(null)
const status = ref<'loading' | 'ready' | 'error' | 'nogl'>('loading')

// Dilepas sinkron di lingkup setup: navigasi antar-slide melepas
// (unmount) BedahLayout, sehingga RAF, listener, dan konteks WebGL
// wajib dibersihkan. Pembersih diisi setelah init asinkron selesai.
let disposeFn: (() => void) | null = null
let gone = false
onUnmounted(() => {
  gone = true
  if (disposeFn) disposeFn()
  disposeFn = null
})

onMounted(async () => {
  const el = box.value
  if (!el || gone) {
    if (!el) status.value = 'error'
    return
  }
  let THREE: typeof import('three')
  try {
    THREE = await import('three')
  } catch {
    if (!gone) status.value = 'error'
    return
  }
  if (gone) return

  let renderer: import('three').WebGLRenderer | null = null
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  } catch {
    status.value = 'nogl'
    return
  }
  if (!renderer.getContext()) {
    status.value = 'nogl'
    return
  }
  renderer.setClearColor(0x000000, 0)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
  renderer.domElement.style.display = 'block'
  renderer.domElement.style.width = '100%'
  renderer.domElement.style.height = '100%'
  renderer.domElement.style.touchAction = 'none'
  el.appendChild(renderer.domElement)

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100)
  scene.add(new THREE.HemisphereLight(0xffffff, 0xdfe9df, 1.15))
  const key = new THREE.DirectionalLight(0xffffff, 2.0)
  key.position.set(4, 6, 5)
  scene.add(key)
  const fill = new THREE.DirectionalLight(0xe9f4ea, 0.7)
  fill.position.set(-5, -2, -4)
  scene.add(fill)

  const PALETTE = ['#006e1c', '#4caf50', '#8a5c14', '#2471a3', '#2f7d33', '#b98a1f', '#5a6b5d', '#004d13']

  const root = new THREE.Group()
  scene.add(root)
  const holders: { obj: import('three').Group; off: import('three').Vector3 }[] = []

  const fitCamera = (spread: number) => {
    const w = Math.max(el.clientWidth, 1)
    const h = Math.max(el.clientHeight, 1)
    const aspect = w / h
    camera.aspect = aspect
    const half = THREE.MathUtils.degToRad(camera.fov / 2)
    const need = Math.max(spread / Math.tan(half), spread / (Math.tan(half) * aspect))
    camera.position.set(0, 0.6, need)
    camera.lookAt(0, 0, 0)
    camera.updateProjectionMatrix()
    renderer!.setSize(w, h, false)
  }

  let raf = 0
  let k = 0
  let yaw = 0.7
  let pitch = 0.32
  let dragging = false
  let lastTouch = 0
  let px = 0
  let py = 0

  const onDown = (e: PointerEvent) => {
    dragging = true
    px = e.clientX
    py = e.clientY
    emit('interact')
    renderer!.domElement.setPointerCapture?.(e.pointerId)
  }
  const onMove = (e: PointerEvent) => {
    if (!dragging) return
    yaw += (e.clientX - px) * 0.0085
    pitch = THREE.MathUtils.clamp(pitch + (e.clientY - py) * 0.006, -1.1, 1.1)
    px = e.clientX
    py = e.clientY
    lastTouch = performance.now()
  }
  const onUp = () => {
    dragging = false
    lastTouch = performance.now()
  }
  renderer.domElement.addEventListener('pointerdown', onDown)
  window.addEventListener('pointermove', onMove)
  window.addEventListener('pointerup', onUp)

  const ro = new ResizeObserver(() => fitCamera(THREE.MathUtils.lerp(1.5, 2.9, k)))
  ro.observe(el)

  const cleanup = () => {
    cancelAnimationFrame(raf)
    ro.disconnect()
    renderer!.domElement.removeEventListener('pointerdown', onDown)
    window.removeEventListener('pointermove', onMove)
    window.removeEventListener('pointerup', onUp)
    root.traverse((o) => {
      const m = o as import('three').Mesh
      if (m.isMesh) {
        m.geometry.dispose()
        const mt = m.material as import('three').Material | import('three').Material[]
        if (Array.isArray(mt)) mt.forEach((x) => x.dispose())
        else mt.dispose()
      }
    })
    renderer!.dispose()
    renderer!.domElement.remove()
  }
  disposeFn = cleanup
  if (gone) {
    cleanup()
    disposeFn = null
    return
  }

  let prev = performance.now()
  const loop = (now: number) => {
    if (gone) return
    raf = requestAnimationFrame(loop)
    const dt = Math.min((now - prev) / 1000, 0.05)
    prev = now
    const target = props.exploded ? 1 : 0
    k += (target - k) * Math.min(dt * 4.5, 1)
    if (Math.abs(target - k) < 0.001) k = target
    for (const h of holders) h.obj.position.copy(h.off).multiplyScalar(k)
    if (props.spin && !dragging && now - lastTouch > 2200) yaw += dt * 0.45
    root.rotation.set(0, yaw, 0)
    root.rotation.x = pitch * 0.35
    fitCamera(THREE.MathUtils.lerp(1.5, 2.9, k))
    renderer!.render(scene, camera)
  }

  /** Bangun mesh per bagian dari geometri BufferGeometry Y-tegak. */
  const buildParts = (geos: { name: string; geo: import('three').BufferGeometry }[]) => {
    const bb = new THREE.Box3()
    const tmp = new THREE.Vector3()
    for (const g of geos) {
      const p = g.geo.getAttribute('position') as import('three').BufferAttribute
      for (let i = 0; i < p.count; i += 1) {
        tmp.fromBufferAttribute(p, i)
        bb.expandByPoint(tmp)
      }
    }
    const center = bb.getCenter(new THREE.Vector3())
    const size = bb.getSize(new THREE.Vector3())
    const scale = 2.9 / Math.max(size.x, size.y, size.z, 1e-6)

    const order = geos
      .map((g, i) => {
        g.geo.computeBoundingBox()
        const c = g.geo.boundingBox!.getCenter(new THREE.Vector3())
        return { i, y: c.y }
      })
      .sort((a, b) => a.y - b.y)
    const rank = new Map(order.map((o, r) => [o.i, geos.length > 1 ? (r / (geos.length - 1)) * 2 - 1 : 0]))

    geos.forEach((g, i) => {
      const mat = new THREE.MeshStandardMaterial({
        color: PALETTE[i % PALETTE.length]!,
        roughness: 0.55,
        metalness: 0.12,
      })
      const mesh = new THREE.Mesh(g.geo, mat)
      mesh.scale.setScalar(scale)
      mesh.position.copy(center).multiplyScalar(-scale)
      const holder = new THREE.Group()
      holder.add(mesh)
      root.add(holder)

      const c = g.geo.boundingBox!.getCenter(new THREE.Vector3()).multiplyScalar(scale).add(mesh.position)
      const dir = c.clone()
      if (dir.length() < 1e-4) dir.set(0, 1, 0)
      dir.normalize()
      const off = dir.multiplyScalar(1.45)
      off.y += (rank.get(i) ?? 0) * 0.55
      holders.push({ obj: holder, off })
    })
    return geos.length
  }

  try {
    const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js')
    const gltf = await new GLTFLoader().loadAsync(props.src)
    if (gone) {
      cleanup()
      disposeFn = null
      return
    }
    gltf.scene.updateMatrixWorld(true)
    const geos: { name: string; geo: import('three').BufferGeometry }[] = []
    let n = 0
    gltf.scene.traverse((o) => {
      const m = o as import('three').Mesh
      if (m.isMesh) {
        const src = m.geometry as import('three').BufferGeometry
        const geo = src.clone().applyMatrix4(m.matrixWorld)
        geo.computeVertexNormals()
        n += 1
        geos.push({ name: (m.name || `Bagian ${n}`).trim() || `Bagian ${n}`, geo })
      }
    })
    if (geos.length === 0) throw new Error('tanpa bagian')
    emit('ready', buildParts(geos))
    status.value = 'ready'
    raf = requestAnimationFrame(loop)
  } catch {
    if (!gone) status.value = 'error'
  }
})
</script>

<template>
  <div ref="box" class="blowup-canvas h-full w-full" @touchstart.stop @touchmove.stop>
    <div
      v-if="status !== 'ready'"
      class="pointer-events-none absolute inset-0 grid place-items-center p-3 text-center text-base leading-snug text-gm-muted"
    >
      <span v-if="status === 'loading'">Memuat model 3D…</span>
      <span v-else-if="status === 'nogl'">Peramban tidak mendukung WebGL sehingga model tidak dapat ditampilkan.</span>
      <span v-else>Berkas model tidak termuat. Periksa koneksi lalu muat ulang.</span>
    </div>
  </div>
</template>
