<script setup lang="ts">
import { Motion } from 'motion-v'
import type { HiddenSection } from '~/data/hidden'
import {
  INVEST_TIERS,
  INVEST_VARIANTS,
  INVEST_STRIP,
  INVEST_BADGES,
  INVEST_NOTE,
  AVG_NOTE,
  INVEST_SIM_LABEL,
  INVEST_SIM_TAIL,
  INVEST_DASAR,
} from '~/data/econ-invest'

defineProps<{ section: HiddenSection }>()

/** Gerak masuk berjenjang, pola sama dengan slide deck. */
const t = (i: number) => ({ type: 'spring', stiffness: 260, damping: 20, delay: 0.06 + i * 0.07 } as const)

/** Kolom matriks: satu kolom varian, empat kolom tingkat modal. */
const HEADS = ['Varian (Modal x faktor)', ...INVEST_TIERS.map((tier) => `Laba atas ${tier.label}`)]
</script>

<template>
  <div class="relative flex min-h-full w-full min-w-0 flex-col justify-center gap-2 md:gap-2 2xl:gap-4">
    <LightGridSvg :id="`iv-${section.ref}`" class="absolute inset-0 -z-10 opacity-70" />

    <!-- Ikhtisar metode dan tingkat yang dipilih. -->
    <Motion :initial="{ opacity: 0, y: -10 }" :animate="{ opacity: 1, y: 0 }" :transition="t(0)">
      <div class="flex w-full flex-wrap items-center gap-1.5">
        <span
          v-for="b in INVEST_BADGES"
          :key="b"
          class="rounded-full border-2 border-gm-line bg-white px-3 py-1 text-base font-semibold text-gm-ink"
        >{{ b }}</span>
      </div>
    </Motion>

    <!-- Matriks tingkat modal: empat varian menghadap empat tingkat. -->
    <Motion :initial="{ opacity: 0, y: 16 }" :animate="{ opacity: 1, y: 0 }" :transition="t(1)">
      <p class="mb-1 w-full text-left text-base font-semibold leading-snug text-gm-ink">{{ INVEST_NOTE }}</p>
      <div class="w-full overflow-hidden rounded-3xl border-2 border-gm-line">
        <table class="w-full table-fixed border-collapse text-left">
        <thead>
          <tr class="bg-gm-ink text-white">
            <th
              v-for="(h, i) in HEADS"
              :key="h"
              scope="col"
              class="px-3 py-0.5 text-left font-headline text-base font-extrabold leading-snug 2xl:py-3"
              :class="[
                i === 0 ? 'w-[34%]' : 'w-[16.5%]',
                i > 0 && INVEST_TIERS[i - 1]?.hot ? 'bg-gm-primary' : '',
              ]"
            >{{ h }}</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="v in INVEST_VARIANTS"
            :key="v.key"
            class="border-t-2 border-gm-line"
            :class="v.computed ? 'bg-gm-amberbg' : 'bg-white'"
          >
            <!-- Nama varian, faktor ROI, identitas rata-rata. -->
            <td class="px-3 py-0.5 align-middle 2xl:py-3">
              <span class="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <span class="font-headline text-base font-extrabold leading-snug text-gm-ink">{{ v.name }}</span>
                <span
                  class="inline-block rounded-full px-2 py-0.5 font-headline text-base font-extrabold tabular-nums"
                  :class="v.computed ? 'bg-gm-amber text-white' : 'bg-gm-mist text-gm-primary'"
                >faktor {{ v.factorLabel }} = {{ v.roi }}</span>
              </span>
              <span
                v-if="v.computed"
                class="mt-0.5 block text-base leading-snug text-gm-amber"
              >{{ AVG_NOTE }}</span>
            </td>

            <!-- Laba per tahun per tingkat, baris kedua total kembali. -->
            <td
              v-for="(c, i) in v.cells"
              :key="`${v.key}-${i}`"
              class="px-3 py-0.5 align-top 2xl:py-3"
              :class="INVEST_TIERS[i]?.hot && !v.computed ? 'bg-gm-mist' : ''"
            >
              <span
                class="block font-headline text-base font-extrabold leading-snug tabular-nums"
                :class="v.computed ? 'text-gm-amber' : 'text-gm-ink'"
              >{{ c.laba }}</span>
              <span class="mt-0.5 block text-base leading-snug tabular-nums text-gm-muted">kembali {{ c.total }}</span>
            </td>
          </tr>
        </tbody>
        </table>
      </div>
    </Motion>

    <!-- Strip proyeksi: tingkat Rp100 jt memakai faktor per varian. -->
    <Motion :initial="{ opacity: 0, y: 14 }" :animate="{ opacity: 1, y: 0 }" :transition="t(3)">
      <div class="flex w-full flex-col gap-1 rounded-3xl bg-gm-ink px-3.5 py-2 text-left text-white 2xl:px-4 2xl:py-4">
        <div class="flex w-full flex-wrap items-center gap-x-2 gap-y-1.5">
          <span class="flex shrink-0 items-center gap-1.5 font-headline text-base font-extrabold">
            <Icon name="lucide:calculator" class="size-4 shrink-0 text-emerald-300" />{{ INVEST_SIM_LABEL }}
          </span>
          <template v-for="(h, i) in INVEST_STRIP" :key="h.name">
            <Icon
              v-if="i > 0"
              name="lucide:arrow-right"
              class="size-4 shrink-0 text-white/50"
            />
            <span class="rounded-full bg-white/10 px-3 py-1 font-headline text-base font-bold">
              {{ h.name }} <span class="tabular-nums text-emerald-300">{{ h.laba }}</span>
            </span>
          </template>
          <span class="text-base font-semibold text-white/70">{{ INVEST_SIM_TAIL }}</span>
        </div>
        <p class="text-base leading-snug text-white/70">{{ INVEST_DASAR }}</p>
      </div>
    </Motion>
  </div>
</template>
