<script setup lang="ts">
import { Motion } from 'motion-v'
import type { HiddenSection } from '~/data/hidden'
import { ECON_PRODUCTS, ECON_SUMMARY, ECON_AI_CHIPS, ECON_AI_NOTE, ECON_BASIS, ECON_SOURCE } from '~/data/econ-unit'

defineProps<{ section: HiddenSection }>()

/** Gerak masuk berjenjang, pola sama dengan slide deck. */
const t = (i: number) => ({ type: 'spring', stiffness: 260, damping: 20, delay: 0.06 + i * 0.07 } as const)
</script>

<template>
  <div class="relative flex min-h-full w-full min-w-0 flex-col justify-center gap-2 md:gap-2">
    <LightGridSvg :id="`eu-${section.ref}`" class="absolute inset-0 -z-10 opacity-70" />

    <!-- Ikhtisar rencana 12 bulan. -->
    <Motion :initial="{ opacity: 0, y: -10 }" :animate="{ opacity: 1, y: 0 }" :transition="t(0)">
      <div class="flex w-full flex-wrap items-center gap-1.5">
        <span
          v-for="b in ECON_SUMMARY"
          :key="b"
          class="rounded-full border-2 border-gm-line bg-white px-3 py-0.5 text-base font-semibold text-gm-ink"
        >{{ b }}</span>
      </div>
    </Motion>

    <!-- Tiga lini produk dengan metrik masing-masing. -->
    <Motion :initial="{ opacity: 0, y: 16 }" :animate="{ opacity: 1, y: 0 }" :transition="t(1)">
      <div class="grid w-full grid-cols-1 items-stretch gap-2 sm:grid-cols-3 md:gap-2.5">
        <div
          v-for="p in ECON_PRODUCTS"
          :key="p.key"
          class="flex h-full flex-col rounded-3xl border-2 p-3 text-left 2xl:p-4"
          :class="p.hot ? 'border-gm-primary bg-gm-primary text-white' : 'border-gm-line bg-white'"
        >
          <div class="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1">
            <span class="font-headline text-xl font-extrabold leading-tight">{{ p.name }}</span>
            <span
              class="rounded-full px-2.5 py-0.5 font-headline text-base font-extrabold tabular-nums"
              :class="p.hot ? 'bg-white/15 text-white' : 'bg-gm-mist text-gm-primary'"
            >{{ p.price }}</span>
          </div>
          <span class="mt-1 text-base font-semibold" :class="p.hot ? 'text-white/75' : 'text-gm-muted'">{{ p.vol }}</span>

          <div class="mt-2 grid grid-cols-2 gap-1.5">
            <div
              v-for="m in p.metrics"
              :key="m.k"
              class="flex items-baseline justify-between gap-1.5 rounded-lg px-2 py-1.5 text-left 2xl:py-2.5"
              :class="p.hot ? 'bg-white/10' : 'bg-gm-panel'"
            >
              <span class="min-w-0 truncate text-base" :class="p.hot ? 'text-white/75' : 'text-gm-muted'">{{ m.k }}</span>
              <span class="shrink-0 font-headline text-base font-extrabold tabular-nums">{{ m.v }}</span>
            </div>
          </div>
        </div>
      </div>
    </Motion>

    <!-- Langganan AI sebagai pendapatan berulang. -->
    <Motion :initial="{ opacity: 0, y: 16 }" :animate="{ opacity: 1, y: 0 }" :transition="t(2)">
      <div class="flex w-full flex-col gap-2 rounded-3xl bg-gm-ink p-3 text-left text-white 2xl:p-4">
        <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span class="flex items-center gap-2 font-headline text-lg font-extrabold">
            <Icon name="lucide:sparkles" class="size-5 shrink-0 text-emerald-300" />Floral Assistant Advance
          </span>
          <span class="rounded-full bg-emerald-400/20 px-2.5 py-0.5 font-headline text-base font-extrabold text-emerald-300">{{ ECON_AI_NOTE }}</span>
        </div>
        <div class="flex flex-wrap items-center gap-1.5">
          <template v-for="(c, i) in ECON_AI_CHIPS" :key="c">
            <span class="rounded-full bg-white/10 px-3 py-1 font-mono text-base font-bold text-white">{{ c }}</span>
            <Icon v-if="i < ECON_AI_CHIPS.length - 1" name="lucide:arrow-right" class="size-4 shrink-0 text-white/50" />
          </template>
        </div>
      </div>
    </Motion>

    <!-- Baris dasar perhitungan dan sumber per blok metrik. -->
    <Motion :initial="{ opacity: 0, y: 14 }" :animate="{ opacity: 1, y: 0 }" :transition="t(3)">
      <p class="w-full text-left font-mono text-base leading-snug text-gm-muted">{{ ECON_BASIS }}</p>
      <p class="mt-1 w-full text-left font-mono text-base leading-snug text-gm-muted">{{ ECON_SOURCE }}</p>
    </Motion>
  </div>
</template>
