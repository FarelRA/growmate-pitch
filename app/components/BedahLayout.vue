<script setup lang="ts">
import type { BedahData } from '~/data/produk'

const props = defineProps<{ data: BedahData }>()

const activeIdx = ref(-1)

const gridRef = ref<HTMLElement | null>(null)
const photoRef = ref<HTMLElement | null>(null)
const cardEls = ref<HTMLElement[]>([])
const box = ref({ w: 0, h: 0 })
const paths = ref<{ i: number; pts: string }[]>([])
const wide = useMediaQuery('(min-width: 1024px)')

const sideOf = (x: number) => (x < 52 ? 'L' : 'R')

const leftDots = computed(() => props.data.dots
  .map((d, i) => ({ ...d, i }))
  .filter((d) => sideOf(d.x) === 'L'))

const rightDots = computed(() => props.data.dots
  .map((d, i) => ({ ...d, i }))
  .filter((d) => sideOf(d.x) === 'R'))

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
  if (!g || !p || !wide.value) {
    paths.value = []
    return
  }
  const gr = g.getBoundingClientRect()
  const pr = p.getBoundingClientRect()
  box.value = { w: gr.width, h: gr.height }

  const links: Link[] = []
  props.data.dots.forEach((d, i) => {
    const c = cardEls.value[i]
    if (!c) return
    const cr = c.getBoundingClientRect()
    const side = sideOf(d.x)
    links.push({
      i,
      side,
      x0: pr.left - gr.left + (d.x / 100) * pr.width,
      y0: pr.top - gr.top + (d.y / 100) * pr.height,
      edgeX: (side === 'L' ? pr.left : pr.right) - gr.left,
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
    return {
      i: l.i,
      pts: `${l.x0},${l.y0} ${spine},${l.y0} ${spine},${l.cardY} ${l.cardEdgeX},${l.cardY}`,
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
  <div class="flex min-h-full w-full min-w-0 flex-col justify-center gap-2 md:gap-2.5">
    <div ref="gridRef" class="relative grid w-full min-w-0 grid-cols-1 items-center gap-3 lg:grid-cols-12">
      <ol class="order-2 grid w-full min-w-0 grid-cols-1 gap-1.5 sm:grid-cols-2 lg:order-1 lg:col-span-3 lg:flex lg:flex-col lg:justify-center">
        <li
          v-for="d in leftDots"
          :key="d.title"
          :ref="(el) => setCardEl(d.i, el)"
          class="relative flex w-full items-start justify-start gap-2 rounded-2xl border-2 p-2 text-left transition-all"
          :class="activeIdx === d.i ? 'border-gm-primary bg-gm-amberbg/60 shadow-md' : 'border-gm-line bg-white'"
          @mouseenter="activeIdx = d.i"
          @mouseleave="activeIdx = -1"
        >
          <span
            class="grid size-8 shrink-0 place-items-center rounded-full font-headline text-base font-extrabold text-white"
            :class="activeIdx === d.i ? 'bg-gm-amber' : 'bg-gm-primary'"
          >{{ d.i + 1 }}</span>
          <span class="min-w-0">
            <span class="block font-headline text-base font-extrabold leading-tight text-gm-ink">{{ d.title }}</span>
            <span class="mt-0.5 block text-base leading-snug text-gm-muted">{{ d.desc }}</span>
          </span>
        </li>
      </ol>
      <div class="order-1 min-w-0 lg:order-2 lg:col-span-6">
        <div ref="photoRef" class="relative mx-auto w-full max-w-[552px] overflow-hidden rounded-3xl border-2 border-gm-line bg-gm-panel 2xl:max-w-[660px]">
          <img :src="props.data.src" :alt="props.data.alt" class="block h-auto w-full" draggable="false" @load="measure" />
          <button
            v-for="(d, i) in props.data.dots"
            :key="d.title"
            type="button"
            :aria-label="`Sorot ${d.title}`"
            class="absolute z-20 grid size-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full font-headline text-base font-extrabold text-white shadow-md transition-transform"
            :class="activeIdx === i ? 'scale-125 bg-gm-amber' : 'bg-gm-primary'"
            :style="{ left: `${d.x}%`, top: `${d.y}%` }"
            @mouseenter="activeIdx = i"
            @mouseleave="activeIdx = -1"
            @focus="activeIdx = i"
            @blur="activeIdx = -1"
          >
            <span class="relative">{{ i + 1 }}</span>
          </button>
        </div>
        <div class="mt-2 flex w-full flex-wrap items-center justify-center gap-1.5">
          <span v-for="c in props.data.chips" :key="c" class="rounded-full border-2 border-gm-line bg-white px-3 py-1 font-headline text-base font-extrabold text-gm-ink">{{ c }}</span>
        </div>
      </div>
      <ol class="order-3 grid w-full min-w-0 grid-cols-1 gap-1.5 sm:grid-cols-2 lg:col-span-3 lg:flex lg:flex-col lg:justify-center">
        <li
          v-for="d in rightDots"
          :key="d.title"
          :ref="(el) => setCardEl(d.i, el)"
          class="relative flex w-full items-start justify-start gap-2 rounded-2xl border-2 p-2 text-left transition-all"
          :class="activeIdx === d.i ? 'border-gm-primary bg-gm-amberbg/60 shadow-md' : 'border-gm-line bg-white'"
          @mouseenter="activeIdx = d.i"
          @mouseleave="activeIdx = -1"
        >
          <span
            class="grid size-8 shrink-0 place-items-center rounded-full font-headline text-base font-extrabold text-white"
            :class="activeIdx === d.i ? 'bg-gm-amber' : 'bg-gm-primary'"
          >{{ d.i + 1 }}</span>
          <span class="min-w-0">
            <span class="block font-headline text-base font-extrabold leading-tight text-gm-ink">{{ d.title }}</span>
            <span class="mt-0.5 block text-base leading-snug text-gm-muted">{{ d.desc }}</span>
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
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          marker-end="url(#bedah-arrow)"
          :opacity="activeIdx === -1 || activeIdx === p.i ? 1 : 0.25"
        />
      </svg>
    </div>
    <ol class="grid w-full grid-cols-2 gap-1.5 lg:grid-cols-4">
      <li v-for="(s, i) in props.data.steps" :key="s.title" class="flex w-full items-center justify-start gap-2.5 rounded-2xl bg-gm-ink p-2.5 text-left text-white">
        <span class="grid size-9 shrink-0 place-items-center rounded-xl bg-white/10 font-mono text-base font-bold text-emerald-300">{{ i + 1 }}</span>
        <span class="min-w-0">
          <span class="flex items-center justify-start gap-1.5 font-headline text-base font-extrabold leading-tight">
            <Icon :name="s.icon" class="size-5 shrink-0 text-emerald-300" />{{ s.title }}
          </span>
          <span class="mt-0.5 block text-base leading-snug text-white/75">{{ s.desc }}</span>
        </span>
      </li>
    </ol>
  </div>
</template>
