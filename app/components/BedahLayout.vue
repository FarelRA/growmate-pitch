<script setup lang="ts">
import type { BedahData } from '~/data/produk'
import BlowupViewer from '~/components/BlowupViewer.vue'

const props = defineProps<{ data: BedahData }>()

const activeIdx = ref(-1)

const gridRef = ref<HTMLElement | null>(null)
const photoRef = ref<HTMLElement | null>(null)
const photoImgRef = ref<HTMLImageElement | null>(null)
const dotPos = ref<{ x: number; y: number }[]>([])
const cardEls = ref<HTMLElement[]>([])
const box = ref({ w: 0, h: 0 })
const paths = ref<{ i: number; pts: string }[]>([])
const wide = useMediaQuery('(min-width: 1024px)')

const sideOf = (x: number) => (x < 52 ? 'L' : 'R')

// Setengah diameter titik sorot size-5 (20px). Garis penghubung mulai dari
// tepi titik, bukan dari tengah, supaya tidak menimpa angka di dalam titik.
const DOT_R = 10

function setCardEl(i: number, el: unknown) {
  if (el) cardEls.value[i] = el as HTMLElement
}

interface Link {
  i: number
  side: 'L' | 'R'
  x0: number
  y0: number
  edgeX: number
  cardY: number
  cardEdgeX: number
}

function measure() {
  const g = gridRef.value
  const p = photoRef.value
  if (!g || !p) {
    paths.value = []
    return
  }
  const gr = g.getBoundingClientRect()
  // Kotak isi foto (object-contain bisa ber-letterbox), supaya titik selalu tepat di gambar.
  const im = photoImgRef.value
  const ir = (im ?? p).getBoundingClientRect()
  let cw = ir.width
  let ch = ir.height
  if (im && im.naturalWidth > 0 && ir.width > 0 && ir.height > 0) {
    const k = Math.min(ir.width / im.naturalWidth, ir.height / im.naturalHeight)
    cw = im.naturalWidth * k
    ch = im.naturalHeight * k
  }
  const ox = ir.left + (ir.width - cw) / 2
  const oy = ir.top + (ir.height - ch) / 2
  const hr = p.getBoundingClientRect()
  dotPos.value = props.data.dots.map((d) => ({
    x: ox - hr.left + (d.x / 100) * cw,
    y: oy - hr.top + (d.y / 100) * ch,
  }))
  box.value = { w: gr.width, h: gr.height }
  if (!wide.value) {
    paths.value = []
    return
  }

  const links: Link[] = []
  props.data.dots.forEach((d, i) => {
    const c = cardEls.value[i]
    if (!c) return
    const cr = c.getBoundingClientRect()
    const side = sideOf(d.x)
    links.push({
      i,
      side,
      x0: ox - gr.left + (d.x / 100) * cw,
      y0: oy - gr.top + (d.y / 100) * ch,
      edgeX: (side === 'L' ? ox : ox + cw) - gr.left,
      cardY: cr.top - gr.top + cr.height / 2,
      cardEdgeX: (side === 'L' ? cr.right : cr.left) - gr.left,
    })
  })

  const rank = new Map<number, number>()
  ;(['L', 'R'] as const).forEach((side) => {
    links
      .filter((l) => l.side === side)
      .sort((a, b) => a.y0 - b.y0)
      .forEach((l, r) => rank.set(l.i, r))
  })

  paths.value = links.map((l) => {
    const r = rank.get(l.i) ?? 0
    const spine = l.side === 'L' ? l.edgeX - (14 + r * 5) : l.edgeX + (14 + r * 5)
    const sx = l.x0 + (l.side === 'L' ? -DOT_R : DOT_R)
    return {
      i: l.i,
      pts: `${sx},${l.y0} ${spine},${l.y0} ${spine},${l.cardY} ${l.cardEdgeX},${l.cardY}`,
    }
  })
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
  useResizeObserver(gridRef, () => measure())
  useResizeObserver(photoRef, () => measure())
  useResizeObserver(photoImgRef, () => measure())
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
  window.removeEventListener('resize', onResize)
})

watch(wide, (v) => {
  if (v) nextTick(() => trackFor(500))
})
watch(() => props.data, () => nextTick(() => trackFor(500)))
</script>

<template>
  <div class="flex min-h-full w-full min-w-0 flex-col justify-center gap-1.5">
    <div ref="gridRef" class="relative grid w-full min-w-0 grow grid-cols-1 items-stretch gap-2.5 lg:grid-cols-12">
      <div class="min-w-0 [contain:size] lg:col-span-4">
        <Reveal class="h-full min-h-[210px]">
          <BlowupViewer :src="props.data.model.src" :title="props.data.model.title" class="h-full" />
        </Reveal>
      </div>
      <div class="min-w-0 lg:col-span-4">
        <Reveal :delay="0.08" class="flex h-full flex-col overflow-hidden rounded-3xl border-2 border-gm-line bg-white p-1.5 text-left">
          <div ref="photoRef" class="relative mx-auto flex min-h-[170px] w-full flex-1 items-center justify-center overflow-hidden [contain:size] 2xl:min-h-[240px]">
            <img
              ref="photoImgRef"
              :src="props.data.src"
              :alt="props.data.alt"
              class="absolute inset-0 block h-full w-full rounded-2xl object-contain"
              draggable="false"
              @load="measure"
            />
            <button
              v-for="(d, i) in props.data.dots"
              :key="d.title"
              type="button"
              :aria-label="`Sorot ${d.title}`"
              class="absolute z-20 grid size-5 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full font-headline text-xs font-extrabold tabular-nums text-white shadow-md transition-transform"
              :class="activeIdx === i ? 'scale-125 bg-gm-amber' : 'bg-gm-primary'"
              :style="dotPos[i] ? { left: `${dotPos[i]!.x}px`, top: `${dotPos[i]!.y}px` } : { left: `${d.x}%`, top: `${d.y}%` }"
              @mouseenter="activeIdx = i"
              @mouseleave="activeIdx = -1"
              @focus="activeIdx = i"
              @blur="activeIdx = -1"
            >
              <span class="relative">{{ i + 1 }}</span>
            </button>
          </div>
          <div class="mt-2 flex w-full flex-wrap items-center justify-center gap-0.5 2xl:gap-1">
            <span v-for="c in props.data.chips" :key="c" class="whitespace-nowrap rounded-full border-2 border-gm-line bg-white px-0.5 py-0.5 font-headline 2xl:px-2 text-base font-extrabold tabular-nums text-gm-ink">{{ c }}</span>
          </div>
        </Reveal>
      </div>
      <div class="min-w-0 lg:col-span-4">
        <Reveal :delay="0.16" class="flex h-full flex-col overflow-hidden rounded-3xl border-2 border-gm-line bg-white p-1.5 text-left">
          <p class="px-1 pb-1 font-headline text-base font-extrabold text-gm-ink">Kemasan ritel</p>
          <div class="relative min-h-0 flex-1 overflow-hidden rounded-2xl bg-gm-panel [contain:size] min-h-[190px] 2xl:min-h-[230px]">
            <img :src="props.data.packPhoto.src" :alt="props.data.packPhoto.alt" class="absolute inset-0 block h-full w-full object-contain" draggable="false" loading="lazy" />
          </div>
          <p class="px-1 pt-1.5 text-base leading-snug text-gm-muted">{{ props.data.packPhoto.caption }}</p>
        </Reveal>
      </div>
      <svg
        v-if="wide && paths.length"
        class="pointer-events-none absolute inset-0 z-10 h-full w-full"
        :viewBox="`0 0 ${box.w} ${box.h}`"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <marker id="bedah-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="3.4" markerHeight="3.4" orient="auto-start-reverse">
            <path d="M 0 1 L 9 5 L 0 9 z" fill="#006e1c" />
          </marker>
        </defs>
        <polyline
          v-for="p in paths"
          :key="p.i"
          :points="p.pts"
          fill="none"
          stroke="#006e1c"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          marker-end="url(#bedah-arrow)"
          :opacity="activeIdx === -1 || activeIdx === p.i ? 1 : 0.25"
        />
      </svg>
    </div>
    <ol class="grid w-full grid-cols-1 gap-1.5 sm:grid-cols-2" :class="props.data.dots.length > 5 ? 'lg:grid-cols-6' : 'lg:grid-cols-5'">
      <li
        v-for="(d, i) in props.data.dots"
        :key="d.title"
        :ref="(el) => setCardEl(i, el)"
        class="flex w-full min-w-0 items-start justify-start gap-2 rounded-2xl border-2 p-1 text-left transition-all"
        :class="activeIdx === i ? 'border-gm-primary bg-gm-amberbg/60 shadow-md' : 'border-gm-line bg-white'"
        @mouseenter="activeIdx = i"
        @mouseleave="activeIdx = -1"
      >
        <span
          class="grid size-8 shrink-0 place-items-center rounded-full font-headline text-base font-extrabold tabular-nums text-white"
          :class="activeIdx === i ? 'bg-gm-amber' : 'bg-gm-primary'"
        >{{ i + 1 }}</span>
        <span class="min-w-0">
          <span class="block font-headline text-base font-extrabold leading-tight text-gm-ink">{{ d.title }}</span>
          <span class="mt-0.5 block text-base leading-tight text-gm-muted">{{ d.desc }}</span>
        </span>
      </li>
    </ol>
    <ol class="grid w-full grid-cols-2 gap-1.5 lg:grid-cols-4">
      <li v-for="(s, i) in props.data.steps" :key="s.title" class="flex w-full items-center justify-start gap-2 rounded-2xl bg-gm-ink p-1 text-left text-white">
        <span class="grid size-9 shrink-0 place-items-center rounded-xl bg-white/10 font-mono text-base font-bold tabular-nums text-emerald-300">{{ i + 1 }}</span>
        <span class="min-w-0">
          <span class="flex items-center justify-start gap-1.5 font-headline text-base font-extrabold leading-tight">
            <Icon :name="s.icon" class="size-5 shrink-0 text-emerald-300" />{{ s.title }}
          </span>
          <span class="mt-0.5 block text-base leading-tight text-white/75">{{ s.desc }}</span>
        </span>
      </li>
    </ol>
  </div>
</template>
