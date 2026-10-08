<script setup lang="ts">
import type { BedahData } from '~/data/produk'

const props = defineProps<{ data: BedahData }>()

const activeIdx = ref(-1)

const sideOf = (x: number) => (x < 52 ? 'L' : 'R')

const leftDots = computed(() => props.data.dots
  .map((d, i) => ({ ...d, i }))
  .filter((d) => sideOf(d.x) === 'L'))

const rightDots = computed(() => props.data.dots
  .map((d, i) => ({ ...d, i }))
  .filter((d) => sideOf(d.x) === 'R'))
</script>

<template>
  <div class="flex min-h-full w-full min-w-0 flex-col justify-center gap-2 md:gap-2.5">
    <div class="grid w-full min-w-0 grid-cols-1 items-center gap-3 lg:grid-cols-12">
      <ol class="order-2 grid w-full min-w-0 grid-cols-1 gap-1.5 sm:grid-cols-2 lg:order-1 lg:col-span-3 lg:flex lg:flex-col lg:justify-center">
        <li
          v-for="d in leftDots"
          :key="d.title"
          class="flex w-full items-start justify-start gap-2 rounded-2xl border-2 p-2 text-left transition-all"
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
        <div class="relative mx-auto w-full max-w-[552px] overflow-hidden rounded-3xl border-2 border-gm-line bg-gm-panel 2xl:max-w-[660px]">
          <img :src="props.data.src" :alt="props.data.alt" class="block h-auto w-full" draggable="false" />
          <svg class="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <marker id="bedah-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="3.2" markerHeight="3.2" orient="auto-start-reverse">
                <path d="M 0 1 L 9 5 L 0 9 z" fill="#006e1c" />
              </marker>
            </defs>
            <line
              v-for="(d, i) in props.data.dots"
              :key="d.title"
              :x1="d.x"
              :y1="d.y"
              :x2="sideOf(d.x) === 'L' ? 1 : 99"
              :y2="d.y"
              stroke="#006e1c"
              stroke-width="0.45"
              stroke-dasharray="1.6 1"
              vector-effect="non-scaling-stroke"
              marker-end="url(#bedah-arrow)"
              :opacity="activeIdx === -1 || activeIdx === i ? 0.9 : 0.25"
            />
          </svg>
          <button
            v-for="(d, i) in props.data.dots"
            :key="d.title"
            type="button"
            :aria-label="`Sorot ${d.title}`"
            class="absolute grid size-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full font-headline text-base font-extrabold text-white shadow-md transition-transform"
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
          class="flex w-full items-start justify-start gap-2 rounded-2xl border-2 p-2 text-left transition-all"
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
