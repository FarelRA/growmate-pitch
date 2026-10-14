<script setup lang="ts">
import { Motion } from 'motion-v'
import type { HiddenSection } from '~/data/hidden'
import {
  KALIB_TABS,
  KALIB_PIPE,
  KALIB_PIPE_NOTE,
  PODS_SENSORS,
  PODS_TOTAL,
  TECH_SENSORS,
  TECH_TOTAL,
  ADDON_PLACE,
  ADDON_SENSORS,
  ADDON_TOTAL,
  ADDON_UNITS,
  FLORAL_TAG,
  FLORAL_DECIDE,
  FLORAL_RETRAIN_TITLE,
  FLORAL_RETRAIN,
  FLORAL_SHORT_TITLE,
  FLORAL_SHORT,
  FLORAL_PLAN_TITLE,
  FLORAL_PLAN,
  MANGSA_TAG,
  MANGSA_GROUPS,
  MANGSA_LEBAT,
  MANGSA_PIPE,
  MANGSA_STATS,
  MANGSA_MOTTO,
  type SensorRow,
} from '~/data/kalibrasi'

defineProps<{ section: HiddenSection }>()

/** Tab aktif, mulai dari Pods. */
const tab = ref('pods')

/** Gerak masuk berjenjang, pola sama dengan slide deck. */
const t = (i: number) => ({ type: 'spring', stiffness: 260, damping: 20, delay: 0.06 + i * 0.07 } as const)

/** Baris sensor untuk tab kalibrasi aktif. */
const sensorRows = computed<SensorRow[]>(() => {
  if (tab.value === 'tech') return TECH_SENSORS
  if (tab.value === 'addon') return ADDON_SENSORS
  return PODS_SENSORS
})

/** Total titik tab kalibrasi aktif. */
const sensorTotal = computed(() => {
  if (tab.value === 'tech') return TECH_TOTAL
  if (tab.value === 'addon') return ADDON_TOTAL
  return PODS_TOTAL
})

/** Tiga tab pertama memakai pita alur bersama. */
const isCalib = computed(() => tab.value === 'pods' || tab.value === 'tech' || tab.value === 'addon')
</script>

<template>
  <div class="relative flex min-h-full w-full min-w-0 flex-col justify-center gap-2">
    <LightGridSvg :id="`kb-${section.ref}`" class="absolute inset-0 -z-10 opacity-70" />

    <!-- Bilah lima tab. -->
    <div class="flex w-full shrink-0 flex-wrap items-center gap-1.5">
      <button
        v-for="tb in KALIB_TABS"
        :key="tb.key"
        type="button"
        :aria-pressed="tab === tb.key"
        class="flex items-center gap-1.5 rounded-full border-2 px-3 py-1 font-headline text-base font-extrabold transition-all"
        :class="tab === tb.key ? 'border-gm-primary bg-gm-primary text-white' : 'border-gm-line bg-white text-gm-muted'"
        @click="tab = tb.key"
      >
        <Icon :name="tb.icon" class="size-4 shrink-0" />{{ tb.label }}
      </button>
    </div>

    <template v-if="isCalib">
      <!-- Pita alur bersama tiga tab kalibrasi. -->
      <Motion :initial="{ opacity: 0, y: -8 }" :animate="{ opacity: 1, y: 0 }" :transition="t(0)" :key="`pipe-${tab}`">
        <div class="flex w-full flex-wrap items-center gap-x-1.5 gap-y-1 rounded-3xl border-2 border-gm-line bg-white px-3 py-1.5 text-left">
          <template v-for="(s, i) in KALIB_PIPE" :key="s.n">
            <Icon v-if="i > 0" name="lucide:arrow-right" class="size-4 shrink-0 text-gm-primary" />
            <span class="flex items-center gap-1.5 text-base">
              <span class="grid size-5 shrink-0 place-items-center rounded-full bg-gm-primary font-headline text-base font-extrabold tabular-nums text-white">{{ s.n }}</span>
              <span class="font-semibold text-gm-ink">{{ s.text }}</span>
            </span>
          </template>
          <span class="text-base font-bold text-gm-primary">{{ KALIB_PIPE_NOTE }}</span>
        </div>
      </Motion>

      <!-- Konteks lokasi Add-on. -->
      <p v-if="tab === 'addon'" class="w-full text-left text-base font-bold text-gm-primary">{{ ADDON_PLACE }}</p>

      <!-- Baris sensor: nama, 3 kondisi, referensi, catatan. -->
      <Motion :initial="{ opacity: 0, y: 12 }" :animate="{ opacity: 1, y: 0 }" :transition="t(1)" :key="`rows-${tab}`">
        <div class="flex w-full flex-col gap-1">
          <div
            v-for="s in sensorRows"
            :key="s.name"
            class="flex w-full flex-wrap items-center gap-1.5 rounded-2xl border-2 border-gm-line bg-white px-2.5 py-1 text-left"
          >
            <span class="w-24 shrink-0 font-headline text-base font-extrabold text-gm-ink">{{ s.name }}</span>
            <span
              v-for="c in s.conds"
              :key="c"
              class="rounded-full bg-gm-mist px-2.5 py-0.5 text-base font-semibold text-gm-ink"
            >{{ c }}</span>
            <span class="rounded-full border-2 border-gm-primary px-2.5 py-0.5 text-base font-bold text-gm-primary">vs {{ s.ref }}</span>
            <span
              v-if="s.note"
              class="rounded-full bg-gm-amber px-2.5 py-0.5 text-base font-bold text-white"
            >{{ s.note }}</span>
          </div>
        </div>
      </Motion>

      <!-- Strip unit Add-on. -->
      <div v-if="tab === 'addon'" class="flex w-full flex-wrap items-center gap-1.5">
        <span
          v-for="u in ADDON_UNITS"
          :key="u"
          class="rounded-full border-2 border-gm-line bg-white px-3 py-0.5 text-base font-semibold text-gm-ink"
        >{{ u }}</span>
      </div>

      <!-- Total titik tab aktif. -->
      <Motion :initial="{ opacity: 0, y: 10 }" :animate="{ opacity: 1, y: 0 }" :transition="t(2)" :key="`tot-${tab}`">
        <div class="flex w-full items-center gap-1.5 rounded-3xl bg-gm-ink px-3.5 py-1.5 text-left text-white">
          <Icon name="lucide:crosshair" class="size-4 shrink-0 text-emerald-300" />
          <span class="font-headline text-base font-extrabold tabular-nums">{{ sensorTotal }}</span>
        </div>
      </Motion>
    </template>

    <template v-else-if="tab === 'floral'">
      <!-- Penanda lapisan keputusan. -->
      <p class="w-full text-left font-headline text-base font-extrabold text-gm-primary">{{ FLORAL_TAG }}</p>

      <!-- Alur keputusan. -->
      <Motion :initial="{ opacity: 0, y: -8 }" :animate="{ opacity: 1, y: 0 }" :transition="t(0)">
        <div class="flex w-full flex-wrap items-center gap-x-1.5 gap-y-1 rounded-3xl border-2 border-gm-line bg-white px-3 py-1.5 text-left">
          <template v-for="(d, i) in FLORAL_DECIDE" :key="d">
            <Icon v-if="i > 0" name="lucide:arrow-right" class="size-4 shrink-0 text-gm-primary" />
            <span class="rounded-full bg-gm-mist px-2.5 py-0.5 text-base font-semibold text-gm-ink">{{ d }}</span>
          </template>
        </div>
      </Motion>

      <!-- Klarifikasi latih ulang dan peta jalan. -->
      <Motion :initial="{ opacity: 0, y: 12 }" :animate="{ opacity: 1, y: 0 }" :transition="t(1)">
        <div class="grid w-full grid-cols-1 items-stretch gap-2 sm:grid-cols-2">
          <div class="flex h-full flex-col gap-1 rounded-3xl border-2 border-gm-line bg-white p-3 text-left">
            <span class="flex items-center gap-1.5 font-headline text-base font-extrabold text-gm-ink">
              <Icon name="lucide:refresh-ccw" class="size-4 shrink-0 text-gm-primary" />{{ FLORAL_RETRAIN_TITLE }}
            </span>
            <span v-for="p in FLORAL_RETRAIN" :key="p" class="block text-base leading-snug text-gm-ink">• {{ p }}</span>
          </div>
          <div class="flex h-full flex-col gap-1 rounded-3xl border-2 border-gm-line bg-white p-3 text-left">
            <span class="flex items-center gap-1.5 font-headline text-base font-extrabold text-gm-ink">
              <Icon name="lucide:map" class="size-4 shrink-0 text-gm-primary" />{{ FLORAL_SHORT_TITLE }}
            </span>
            <span class="flex flex-wrap gap-1.5">
              <span v-for="p in FLORAL_SHORT" :key="p" class="rounded-full bg-gm-mist px-2.5 py-0.5 text-base font-semibold text-gm-ink">{{ p }}</span>
            </span>
            <span class="mt-1 flex items-center gap-1.5 font-headline text-base font-extrabold text-gm-ink">
              <Icon name="lucide:telescope" class="size-4 shrink-0 text-gm-amber" />{{ FLORAL_PLAN_TITLE }}
            </span>
            <span class="flex flex-wrap gap-1.5">
              <span v-for="p in FLORAL_PLAN" :key="p" class="rounded-full bg-gm-amberbg px-2.5 py-0.5 text-base font-bold text-gm-amber">{{ p }}</span>
            </span>
          </div>
        </div>
      </Motion>
    </template>

    <template v-else>
      <!-- Penanda konteks musim. -->
      <p class="w-full text-left font-headline text-base font-extrabold text-gm-primary">{{ MANGSA_TAG }}</p>

      <!-- Tiga kelompok 12 mangsa. -->
      <Motion :initial="{ opacity: 0, y: -8 }" :animate="{ opacity: 1, y: 0 }" :transition="t(0)">
        <div class="flex w-full flex-col gap-1">
          <div
            v-for="g in MANGSA_GROUPS"
            :key="g.label"
            class="flex w-full flex-wrap items-center gap-1.5 rounded-2xl border-2 px-2.5 py-1 text-left"
            :class="g.hot ? 'border-gm-amber bg-gm-amberbg' : 'border-gm-line bg-white'"
          >
            <span class="w-24 shrink-0 font-headline text-base font-extrabold" :class="g.hot ? 'text-gm-amber' : 'text-gm-ink'">{{ g.label }}</span>
            <span class="text-base font-semibold text-gm-ink">{{ g.names }}</span>
            <span v-if="g.hot" class="rounded-full bg-gm-amber px-2.5 py-0.5 text-base font-bold text-white">{{ MANGSA_LEBAT }}</span>
          </div>
        </div>
      </Motion>

      <!-- Alur validasi dan hasil. -->
      <Motion :initial="{ opacity: 0, y: 12 }" :animate="{ opacity: 1, y: 0 }" :transition="t(1)">
        <div class="grid w-full grid-cols-1 items-stretch gap-2 sm:grid-cols-2">
          <div class="flex h-full flex-col gap-1 rounded-3xl border-2 border-gm-line bg-white p-3 text-left">
            <span v-for="p in MANGSA_PIPE" :key="p" class="block text-base leading-snug text-gm-ink">• {{ p }}</span>
          </div>
          <div class="flex h-full flex-row items-center gap-2 rounded-3xl bg-gm-ink p-3 text-left text-white">
            <div v-for="s in MANGSA_STATS" :key="s.label" class="flex min-w-0 flex-1 flex-col">
              <span class="font-headline text-xl font-extrabold tabular-nums text-emerald-300">{{ s.value }}</span>
              <span class="text-base leading-snug text-white/80">{{ s.label }}</span>
            </div>
            <span class="shrink-0 font-headline text-base font-extrabold text-white">{{ MANGSA_MOTTO }}</span>
          </div>
        </div>
      </Motion>
    </template>
  </div>
</template>
