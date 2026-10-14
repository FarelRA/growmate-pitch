<script setup lang="ts">
interface AppShot {
  src: string
  alt: string
  x: number
  y: number
  title: string
  desc: string
}

const shots: AppShot[] = [
  { src: '/images/ui/app-dash.webp', alt: 'Ringkasan bacaan sensor langsung di aplikasi GrowMate', x: 50, y: 72, title: 'Ringkasan', desc: 'Bacaan tanah, cahaya, tangki, dan jadwal secara langsung.' },
  { src: '/images/ui/app-rawat.webp', alt: 'Tombol siram dan daftar rutinitas di aplikasi GrowMate', x: 36, y: 63, title: 'Perawatan', desc: 'Rutinitas terpandu dari tanam sampai panen.' },
  { src: '/images/ui/app-pasar.webp', alt: 'Kartu produk di layar Pasar aplikasi GrowMate', x: 50, y: 58, title: 'Pasar', desc: 'Produk resmi dan lapak dari komunitas.' },
  { src: '/images/ui/app-komunitas.webp', alt: 'Unggahan di feed komunitas GrowMate', x: 50, y: 52, title: 'Komunitas', desc: 'Feed dan papan peringkat pengguna.' },
  { src: '/images/ui/app-asisten.webp', alt: 'Tombol kirim pada chat Floral Assistant di aplikasi GrowMate', x: 78, y: 55, title: 'Floral Assistant', desc: 'Tanyakan gejala, terima dosis dan langkah perawatan.' },
  { src: '/images/ui/app-tanam.webp', alt: 'Foto tanaman di Pustaka Tanaman aplikasi GrowMate', x: 50, y: 16, title: 'Pustaka', desc: 'Profil tiap tanaman per fase tumbuh.' },
]

const activeIdx = ref(-1)

const boardRef = ref<HTMLElement | null>(null)
const tileEls = ref<HTMLElement[]>([])
const cardEls = ref<HTMLElement[]>([])
const box = ref({ w: 0, h: 0 })
const paths = ref<{ i: number; pts: string }[]>([])
const wide = useMediaQuery('(min-width: 1024px)')

function setTileEl(i: number, el: unknown) {
  if (el) tileEls.value[i] = el as HTMLElement
}

function setCardEl(i: number, el: unknown) {
  if (el) cardEls.value[i] = el as HTMLElement
}

function measure() {
  const b = boardRef.value
  if (!b || !wide.value) {
    paths.value = []
    return
  }
  const br = b.getBoundingClientRect()
  box.value = { w: br.width, h: br.height }

  const out: { i: number; pts: string }[] = []
  shots.forEach((s, i) => {
    const t = tileEls.value[i]
    const c = cardEls.value[i]
    if (!t || !c) return
    const tr = t.getBoundingClientRect()
    const cr = c.getBoundingClientRect()
    const x0 = tr.left - br.left + (s.x / 100) * tr.width
    const y0 = tr.top - br.top + (s.y / 100) * tr.height
    const tileBottom = tr.bottom - br.top
    const cardTop = cr.top - br.top
    const cardCx = cr.left - br.left + cr.width / 2
    const midY = tileBottom + (cardTop - tileBottom) / 2
    out.push({ i, pts: `${x0},${y0} ${x0},${midY} ${cardCx},${midY} ${cardCx},${cardTop}` })
  })
  paths.value = out
}

let rafId = 0
let stopAt = 0

function tick() {
  measure()
  if (performance.now() < stopAt) rafId = requestAnimationFrame(tick)
}

function trackFor(ms = 1600) {
  cancelAnimationFrame(rafId)
  stopAt = performance.now() + ms
  rafId = requestAnimationFrame(tick)
}

const onResize = () => measure()

onMounted(() => {
  trackFor()
  window.addEventListener('resize', onResize, { passive: true })
  document.fonts.ready.then(() => measure()).catch(() => {})
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
  window.removeEventListener('resize', onResize)
})

watch(wide, (v) => {
  if (v) nextTick(() => trackFor(500))
})
</script>

<template>
  <DeckShell section="aplikasi">
    <div class="flex min-h-full w-full min-w-0 flex-col justify-center gap-2">
      <div ref="boardRef" class="relative flex w-full min-w-0 flex-col gap-2">
        <ol class="grid w-full grid-cols-3 gap-1.5 sm:grid-cols-6">
          <li
            v-for="(s, i) in shots"
            :key="s.src"
            :ref="(el) => setTileEl(i, el)"
            class="relative w-full min-w-0 overflow-hidden rounded-2xl border-2 bg-gm-panel transition-all"
            :class="activeIdx === i ? 'border-gm-primary shadow-md' : 'border-gm-line'"
            @mouseenter="activeIdx = i"
            @mouseleave="activeIdx = -1"
          >
            <img :src="s.src" :alt="s.alt" class="block h-auto w-full" draggable="false" @load="measure" />
            <span
              class="absolute z-20 grid size-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full font-headline text-base font-extrabold text-white shadow-md transition-transform"
              :class="activeIdx === i ? 'scale-125 bg-gm-amber' : 'bg-gm-primary'"
              :style="{ left: `${s.x}%`, top: `${s.y}%` }"
            >{{ i + 1 }}</span>
          </li>
        </ol>
        <ol class="grid w-full grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-6">
          <li
            v-for="(s, i) in shots"
            :key="s.title"
            :ref="(el) => setCardEl(i, el)"
            class="flex h-full w-full items-start justify-start gap-2 rounded-2xl border-2 p-1 text-left transition-all"
            :class="activeIdx === i ? 'border-gm-primary bg-gm-amberbg/60 shadow-md' : 'border-gm-line bg-white'"
            @mouseenter="activeIdx = i"
            @mouseleave="activeIdx = -1"
          >
            <span
              class="grid size-8 shrink-0 place-items-center rounded-full font-headline text-base font-extrabold text-white"
              :class="activeIdx === i ? 'bg-gm-amber' : 'bg-gm-primary'"
            >{{ i + 1 }}</span>
            <span class="min-w-0">
              <span class="block font-headline text-base font-extrabold leading-tight text-gm-ink">{{ s.title }}</span>
              <span class="mt-0.5 block text-base leading-tight text-gm-muted">{{ s.desc }}</span>
            </span>
          </li>
        </ol>
        <svg
          v-if="wide && paths.length"
          class="pointer-events-none absolute inset-0 z-10 h-full w-full"
          :viewBox="`0 0 ${box.w} ${box.h}`"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <marker id="app-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="3.4" markerHeight="3.4" orient="auto-start-reverse">
              <path d="M 0 1 L 9 5 L 0 9 z" fill="#006e1c" />
            </marker>
          </defs>
          <polyline
            v-for="p in paths"
            :key="p.i"
            :points="p.pts"
            fill="none"
            stroke="#006e1c"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            marker-end="url(#app-arrow)"
            :opacity="activeIdx === -1 || activeIdx === p.i ? 1 : 0.25"
          />
        </svg>
      </div>
    </div>
  </DeckShell>
</template>
