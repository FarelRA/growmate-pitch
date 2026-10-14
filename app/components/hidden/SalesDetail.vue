<script setup lang="ts">
import { Motion } from 'motion-v'
import type { HiddenSection } from '~/data/hidden'
import {
  PRODUCT_SALES,
  UNIT_SERIES,
  AI_CARDS,
  TOP_SELLER,
  PRICE_NOTE,
  SALES_FOOTNOTE,
} from '~/data/econ-sales'

defineProps<{ section: HiddenSection }>()

const products = PRODUCT_SALES
const units = UNIT_SERIES
const maxUnit = Math.max(...units.map(u => u.unit))

/** Gerak masuk berjenjang, pola sama dengan slide deck. */
const t = (i: number) => ({ type: 'spring', stiffness: 260, damping: 20, delay: 0.06 + i * 0.07 } as const)

/** Format angka gaya Indonesia, dua desimal. */
function jt(n: number) {
  return n.toFixed(2).replace('.', ',')
}

/** Format persen gaya Indonesia, satu desimal. */
function pct(n: number) {
  return n.toFixed(1).replace('.', ',')
}

/** Tinggi batang relatif terhadap bulan tersibuk. */
function barPct(n: number) {
  return Math.max(8, Math.round((n / maxUnit) * 100))
}
</script>

<template>
  <div class="relative flex min-h-full w-full min-w-0 flex-col gap-2">
    <LightGridSvg :id="`sd-${section.id}`" class="absolute inset-0 -z-10 opacity-60" />

    <!-- Tiga kartu varian: unit, pendapatan, dan porsinya. -->
    <Motion
      :initial="{ opacity: 0, y: -12 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="t(0)"
      class="grid w-full flex-auto grid-cols-1 gap-2 sm:grid-cols-3"
    >
      <div
        v-for="p in products"
        :key="p.key"
        class="flex h-full min-w-0 flex-col justify-between gap-2 rounded-3xl border-2 p-3 text-left"
        :class="p.hot ? 'border-gm-primary bg-gm-mist' : 'border-gm-line bg-white'"
      >
        <div class="flex items-center justify-between gap-2">
          <span class="flex min-w-0 items-center gap-1.5 font-headline text-base font-extrabold text-gm-ink">
            <Icon :name="p.icon" class="size-4 shrink-0" :class="p.hot ? 'text-gm-primary' : 'text-gm-muted'" />
            <span class="truncate">{{ p.name }}</span>
          </span>
          <span class="shrink-0 rounded-full bg-gm-ink px-2 py-0.5 text-base font-bold text-white">{{ p.code }}</span>
        </div>

        <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span class="font-headline text-2xl font-extrabold tabular-nums text-gm-ink">{{ p.unit }} unit</span>
          <span
            class="font-headline text-2xl font-extrabold tabular-nums"
            :class="p.hot ? 'text-gm-primary' : 'text-gm-ink'"
          >Rp{{ jt(p.pendapatan) }} jt</span>
        </div>

        <div class="flex min-w-0 items-center gap-2">
          <span class="shrink-0 text-base text-gm-muted">Porsi pendapatan</span>
          <span class="h-3 min-w-6 flex-1 overflow-hidden rounded-full bg-gm-line">
            <span
              class="block h-full rounded-full"
              :class="p.hot ? 'bg-gm-primary' : 'bg-gm-soft'"
              :style="{ width: p.sharePendapatan + '%' }"
            />
          </span>
          <span class="shrink-0 font-headline text-base font-extrabold tabular-nums text-gm-ink">{{ pct(p.sharePendapatan) }}%</span>
        </div>

        <div class="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5 text-base text-gm-muted">
          <span>{{ p.harga }} <span class="font-semibold text-gm-ink">per unit</span></span>
          <span>{{ pct(p.shareUnit) }}% unit</span>
        </div>
      </div>
    </Motion>

    <!-- Jawaban juri: varian paling laris. -->
    <Motion
      :initial="{ opacity: 0, y: 14 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="t(1)"
      class="w-full shrink-0"
    >
      <div class="flex w-full items-center gap-2.5 rounded-3xl border-2 border-gm-ink bg-gm-ink px-3 py-2 text-left">
        <Icon name="lucide:trophy" class="size-5 shrink-0 text-gm-amber" />
        <p class="min-w-0 text-base leading-snug text-white/85">
          <span class="font-headline font-extrabold text-gm-amber">{{ TOP_SELLER.title }}. </span>
          <span>{{ TOP_SELLER.desc }}</span>
        </p>
      </div>
    </Motion>

    <!-- Seri unit per bulan dan kartu langganan AI. -->
    <Motion
      :initial="{ opacity: 0, y: 16 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="t(2)"
      class="econ-grow econ-split grid min-h-0 w-full grid-cols-1 gap-2"
    >
      <div class="flex h-full min-h-0 min-w-0 flex-col rounded-3xl border-2 border-gm-line bg-white p-3 text-left">
        <div class="flex shrink-0 flex-wrap items-center justify-between gap-x-2 gap-y-1">
          <span class="font-headline text-base font-extrabold text-gm-ink">Unit terjual per bulan</span>
          <span class="rounded-full bg-gm-mist px-2.5 py-0.5 text-base font-bold text-gm-primary">36 unit, Jan s/d Sep 2026</span>
        </div>
        <div class="mt-2 flex min-h-0 flex-1 items-end gap-1.5 sm:gap-2">
          <div
            v-for="m in units"
            :key="m.key"
            class="flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-1"
          >
            <span class="shrink-0 font-headline text-base font-extrabold leading-none tabular-nums text-gm-ink">{{ m.unit }}</span>
            <span class="flex w-full min-h-2 flex-1 items-end">
              <span
                class="w-full rounded-md"
                :class="m.key === 'sep' ? 'bg-gm-deep' : 'bg-gm-primary'"
                :style="{ height: barPct(m.unit) + '%' }"
              />
            </span>
            <span class="shrink-0 text-base leading-none text-gm-muted">{{ m.label }}</span>
          </div>
        </div>
      </div>

      <div class="flex h-full min-h-0 min-w-0 flex-col rounded-3xl border-2 border-gm-line bg-gm-panel p-3 text-left">
        <div class="flex shrink-0 flex-wrap items-center justify-between gap-x-2 gap-y-1">
          <span class="flex items-center gap-1.5 font-headline text-base font-extrabold text-gm-ink">
            <Icon name="lucide:sparkles" class="size-4 shrink-0 text-gm-primary" />Langganan AI
          </span>
          <span class="rounded-full bg-gm-primary px-2.5 py-0.5 text-base font-bold text-white">Floral Assistant Advance</span>
        </div>

        <div class="mt-2 flex min-h-0 flex-1 flex-col gap-1.5">
          <div
            v-for="c in AI_CARDS"
            :key="c.label"
            class="flex min-h-10 flex-1 items-center justify-between gap-2 rounded-xl border-2 border-gm-line bg-white px-2.5 py-1.5"
          >
            <span class="flex min-w-0 items-center gap-1.5 text-base text-gm-muted">
              <Icon :name="c.icon" class="size-4 shrink-0 text-gm-primary" />
              <span class="truncate">{{ c.label }}</span>
            </span>
            <span class="shrink-0 font-headline text-base font-extrabold tabular-nums text-gm-ink">{{ c.value }}</span>
          </div>
        </div>
      </div>
    </Motion>

    <!-- Catatan harga dan sumber. -->
    <Motion
      :initial="{ opacity: 0, y: 14 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="t(3)"
      class="w-full shrink-0"
    >
      <p class="text-left text-base font-bold leading-snug text-gm-primary">{{ PRICE_NOTE }}</p>
      <p class="mt-1 text-left text-base leading-snug text-gm-muted">{{ SALES_FOOTNOTE }}</p>
    </Motion>
  </div>
</template>

<style scoped>
/* Bagian grafik mengambil sisa tinggi bingkai supaya halaman selalu pas,
   dan di layar lebar menjadi dua kolom. Keduanya dikunci di CSS. */
.econ-grow {
  flex: 1.6 1 auto;
}
@media (min-width: 1024px) {
  .econ-split {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  }
}
</style>
