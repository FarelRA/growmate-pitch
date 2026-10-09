<script setup lang="ts">
// Kanvas grafik: sumber .mmd dirender langsung di browser dengan Mermaid
// menjadi SVG web (bukan gambar), lengkap dengan zoom, pas-pasan, dan geser.
const props = defineProps<{ chartId: string; code: string }>()

const canvas = ref<HTMLElement | null>(null)
const svgRaw = ref('')
const vb = ref({ w: 1200, h: 800 })
const loading = ref(true)
const error = ref('')
const scale = ref(1)
const tx = ref(0)
const ty = ref(0)
const touched = ref(false)

let initP: Promise<void> | null = null
let renderSeq = 0

function ensureMermaid() {
  if (!initP) {
    initP = import('mermaid').then(({ default: m }) => {
      m.initialize({
        startOnLoad: false,
        securityLevel: 'loose',
        theme: 'base',
        themeVariables: {
          fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
          fontSize: '16px',
          background: '#ffffff',
          primaryColor: '#e9f4ea',
          primaryTextColor: '#1a1c1c',
          primaryBorderColor: '#006e1c',
          secondaryColor: '#faf3e3',
          tertiaryColor: '#eef2ff',
          lineColor: '#006e1c',
          clusterBkg: '#f6f8f5',
          clusterBorder: '#e5e8e3',
        },
        flowchart: { htmlLabels: true, curve: 'linear' },
        sequence: { useMaxWidth: false },
        state: { useMaxWidth: false },
        er: { useMaxWidth: false },
        journey: { useMaxWidth: false },
      })
    })
  }
  return initP
}

function clampScale(s: number) {
  return Math.max(0.04, Math.min(4, s))
}

function fit() {
  const c = canvas.value
  if (!c || !vb.value.w) return
  const s = Math.min(c.clientWidth / vb.value.w, c.clientHeight / vb.value.h) * 0.96
  scale.value = clampScale(s)
  tx.value = 0
  ty.value = 0
  touched.value = false
}

function reset() {
  scale.value = 1
  tx.value = 0
  ty.value = 0
  touched.value = false
}

function zoom(f: number) {
  scale.value = clampScale(scale.value * f)
  touched.value = true
}

async function render() {
  loading.value = true
  error.value = ''
  try {
    await ensureMermaid()
    const { default: mermaid } = await import('mermaid')
    const uid = `mmd-${props.chartId}-${++renderSeq}`
    const { svg } = await mermaid.render(uid, props.code)
    svgRaw.value = svg
    const m = svg.match(/viewBox="([-\d.]+)\s+([-\d.]+)\s+([-\d.]+)\s+([-\d.]+)"/)
    if (m) vb.value = { w: Number(m[3]), h: Number(m[4]) }
    loading.value = false
    await nextTick()
    fit()
  } catch (e) {
    error.value = e instanceof Error ? e.message : String(e)
    loading.value = false
  }
}

onMounted(render)

watch(() => props.chartId, () => {
  svgRaw.value = ''
  touched.value = false
  render()
})

function onWheel(e: WheelEvent) {
  e.preventDefault()
  zoom(e.deltaY < 0 ? 1.12 : 1 / 1.12)
}

let dragging = false
let px = 0
let py = 0

function onDown(e: PointerEvent) {
  dragging = true
  px = e.clientX
  py = e.clientY
  ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
}

function onMove(e: PointerEvent) {
  if (!dragging) return
  tx.value += e.clientX - px
  ty.value += e.clientY - py
  px = e.clientX
  py = e.clientY
  touched.value = true
}

function onUp() {
  dragging = false
}

function onResize() {
  if (!touched.value) fit()
}

onMounted(() => window.addEventListener('resize', onResize))
onUnmounted(() => window.removeEventListener('resize', onResize))
</script>

<template>
  <div
    ref="canvas"
    class="graph-canvas relative min-h-0 w-full flex-1 touch-none overflow-hidden rounded-2xl border-2 border-gm-line bg-white"
    @wheel.prevent="onWheel"
    @pointerdown="onDown"
    @pointermove="onMove"
    @pointerup="onUp"
    @pointercancel="onUp"
  >
    <div
      v-if="svgRaw && !error"
      class="absolute left-1/2 top-1/2 origin-center"
      :style="{ width: `${vb.w}px`, height: `${vb.h}px`, transform: `translate(-50%, -50%) translate(${tx}px, ${ty}px) scale(${scale})` }"
      v-html="svgRaw"
    />

    <div v-if="loading" class="absolute inset-0 grid place-items-center">
      <span class="flex items-center gap-2 text-base font-semibold text-gm-muted">
        <Icon name="lucide:loader-circle" class="size-5 animate-spin text-gm-primary" />
        Merender grafik langsung dari sumber Mermaid...
      </span>
    </div>

    <div v-if="error" class="absolute inset-0 grid place-items-center p-6">
      <div class="max-w-xl rounded-2xl border-2 border-gm-danger/30 bg-white p-4 text-left">
        <p class="font-headline text-base font-extrabold text-gm-danger">Grafik gagal dirender</p>
        <p class="mt-1 text-base leading-snug text-gm-muted">{{ error }}</p>
      </div>
    </div>

    <div v-if="svgRaw && !error" class="absolute right-2 top-2 flex items-center gap-1.5">
      <button
        type="button"
        aria-label="Perkecil"
        class="grid size-9 place-items-center rounded-xl border-2 border-gm-line bg-white/95 text-gm-ink transition-colors hover:border-gm-primary"
        @pointerdown.stop
        @click.stop="zoom(1 / 1.25)"
      >
        <Icon name="lucide:zoom-out" class="size-5" />
      </button>
      <button
        type="button"
        aria-label="Perbesar"
        class="grid size-9 place-items-center rounded-xl border-2 border-gm-line bg-white/95 text-gm-ink transition-colors hover:border-gm-primary"
        @pointerdown.stop
        @click.stop="zoom(1.25)"
      >
        <Icon name="lucide:zoom-in" class="size-5" />
      </button>
      <button
        type="button"
        aria-label="Pas-pasan seluruh grafik"
        class="grid size-9 place-items-center rounded-xl border-2 border-gm-line bg-white/95 text-gm-ink transition-colors hover:border-gm-primary"
        @pointerdown.stop
        @click.stop="fit()"
      >
        <Icon name="lucide:maximize" class="size-5" />
      </button>
      <button
        type="button"
        aria-label="Ukuran asli"
        class="grid size-9 place-items-center rounded-xl border-2 border-gm-line bg-white/95 text-base font-bold tabular-nums text-gm-ink transition-colors hover:border-gm-primary"
        @pointerdown.stop
        @click.stop="reset()"
      >
        1:1
      </button>
    </div>

    <span
      v-if="svgRaw && !error"
      class="pointer-events-none absolute bottom-2 left-2 rounded-full border-2 border-gm-line bg-white/95 px-2.5 py-0.5 font-mono text-base font-bold tabular-nums text-gm-muted"
    >
      {{ Math.round(scale * 100) }}%
    </span>
  </div>
</template>
