<script setup lang="ts">
import { Motion } from 'motion-v'
import type { HiddenSection } from '~/data/hidden'
import { SUPPLY } from '~/data/resilience'
import DurabilityDetail from './DurabilityDetail.vue'
import CoatingDetail from './CoatingDetail.vue'

/**
 * Entri tunggal untuk kind 'resilience': halaman pasokan ditampilkan di sini,
 * dua halaman ketahanan lain didelegasikan supaya registry tetap satu komponen
 * per kind (lihat HiddenLayer).
 */
defineProps<{ section: HiddenSection }>()

const data = SUPPLY

/** Gerak masuk berjenjang, pola sama dengan slide deck. */
const t = (i: number) => ({ type: 'spring', stiffness: 260, damping: 20, delay: 0.06 + i * 0.07 } as const)
</script>

<template>
  <DurabilityDetail v-if="section.ref === 'durability'" :section="section" />
  <CoatingDetail v-else-if="section.ref === 'coating'" :section="section" />

  <div v-else class="relative flex min-h-full w-full min-w-0 flex-col justify-center gap-2 md:gap-2.5">
    <LightGridSvg :id="`sd-${section.ref}`" class="absolute inset-0 -z-10 opacity-70" />

    <!-- Momen turun: dua bulan dan akar masalahnya. -->
    <Motion :initial="{ opacity: 0, y: 16 }" :animate="{ opacity: 1, y: 0 }" :transition="t(0)">
      <div class="grid w-full min-w-0 grid-cols-1 items-stretch gap-1.5 sm:grid-cols-2 lg:grid-cols-12">
        <p class="text-left text-base leading-relaxed text-gm-ink sm:col-span-2 lg:col-span-12 md:text-lg">
          {{ data.lead }}
        </p>

        <div
          v-for="s in data.stats"
          :key="s.month"
          class="flex w-full min-w-0 items-center justify-start gap-3 rounded-2xl border-2 border-gm-line bg-white p-4 text-left lg:col-span-3"
        >
          <span class="grid size-10 shrink-0 place-items-center rounded-xl bg-gm-amberbg" aria-hidden="true">
            <Icon name="lucide:trending-down" class="size-5 text-gm-amber" />
          </span>
          <span class="min-w-0">
            <span class="block text-base font-semibold text-gm-muted">{{ s.month }} • {{ s.units }}</span>
            <span class="block font-headline text-xl font-extrabold leading-tight text-gm-ink 2xl:text-2xl">{{ s.value }}</span>
          </span>
        </div>

        <div class="flex w-full min-w-0 flex-col justify-center gap-1.5 rounded-2xl border-2 border-gm-line bg-gm-amberbg p-4 text-left sm:col-span-2 lg:col-span-6">
          <span class="flex items-center gap-1.5 font-headline text-base font-extrabold uppercase tracking-wide text-gm-amber">
            <Icon name="lucide:cpu" class="size-4 shrink-0" />Kelangkaan komponen
          </span>
          <div class="flex flex-wrap items-center gap-1.5">
            <span
              v-for="c in data.causes"
              :key="c"
              class="rounded-full border-2 border-gm-line bg-white px-2.5 py-0.5 text-base font-semibold text-gm-ink"
            >{{ c }}</span>
          </div>
        </div>
      </div>
    </Motion>

    <!-- Empat langkah mitigasi berurutan. -->
    <Motion :initial="{ opacity: 0, y: 18 }" :animate="{ opacity: 1, y: 0 }" :transition="t(1)">
      <ol class="grid w-full grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-4">
        <li
          v-for="(s, i) in data.steps"
          :key="s.title"
          class="flex h-full w-full items-start justify-start gap-2 rounded-2xl border-2 border-gm-line bg-white p-4 text-left"
        >
          <span class="grid size-8 shrink-0 place-items-center rounded-lg bg-gm-primary font-headline text-base font-extrabold text-white">{{ i + 1 }}</span>
          <span class="min-w-0 flex-1">
            <span class="flex items-center justify-start gap-1.5 font-headline text-base font-extrabold leading-tight text-gm-ink">
              <Icon :name="s.icon" class="size-4 shrink-0 text-gm-primary" />{{ s.title }}
            </span>
            <span class="mt-1 block text-base leading-snug text-gm-muted">{{ s.desc }}</span>
          </span>
        </li>
      </ol>
    </Motion>

    <!-- Penutup: pemulihan September. -->
    <Motion :initial="{ opacity: 0, y: 18 }" :animate="{ opacity: 1, y: 0 }" :transition="t(2)">
      <div class="grid w-full min-w-0 grid-cols-1 items-stretch gap-1.5 lg:grid-cols-12">
        <div class="flex w-full min-w-0 flex-wrap items-center justify-start gap-3 rounded-2xl bg-gm-ink p-4 text-left text-white lg:col-span-5">
          <span class="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10" aria-hidden="true">
            <Icon name="lucide:trending-up" class="size-5 text-emerald-300" />
          </span>
          <span class="min-w-0">
            <span class="block text-base text-white/75">September • {{ data.recover.units }}</span>
            <span class="block font-headline text-xl font-extrabold leading-tight 2xl:text-2xl">{{ data.recover.value }}</span>
          </span>
          <span class="rounded-full bg-emerald-400/20 px-3 py-1 font-headline text-base font-extrabold text-emerald-300">{{ data.recover.note }}</span>
        </div>

        <div class="flex w-full min-w-0 items-center justify-start gap-2 rounded-2xl border-2 border-gm-line bg-gm-mist p-4 text-left lg:col-span-7">
          <Icon name="lucide:shield-check" class="size-5 shrink-0 text-gm-primary" />
          <span class="min-w-0 font-headline text-base font-extrabold leading-snug text-gm-ink">{{ data.close }}</span>
        </div>
      </div>
    </Motion>

    <Motion :initial="{ opacity: 0, y: 14 }" :animate="{ opacity: 1, y: 0 }" :transition="t(3)">
      <p class="text-left text-base leading-snug text-gm-muted">{{ data.source }}</p>
    </Motion>
  </div>
</template>
