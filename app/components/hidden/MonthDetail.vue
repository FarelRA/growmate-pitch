<script setup lang="ts">
import { Motion } from 'motion-v'
import type { HiddenSection } from '~/data/hidden'
import { ECON_MONTHS, ECON_BADGES, ECON_HIGHLIGHT, ECON_FOOTNOTE } from '~/data/econ-month'
import SalesDetail from './SalesDetail.vue'

const props = defineProps<{ section: HiddenSection }>()

/**
 * Registry lapisan detail memetakan satu kind ke satu komponen, jadi kind
 * 'econ' melayani dua halaman: pemilihannya berdasar ref bagian.
 */
const isSales = computed(() => props.section.ref === 'econ-sales')

const rows = ECON_MONTHS
const maxRev = Math.max(...rows.map(r => r.pendapatan))

/** Gerak masuk berjenjang, pola sama dengan slide deck. */
const t = (i: number) => ({ type: 'spring', stiffness: 260, damping: 20, delay: 0.06 + i * 0.07 } as const)

/** Format angka gaya Indonesia, dua desimal. */
function jt(n: number | null) {
  return n === null ? 'n/a' : n.toFixed(2).replace('.', ',')
}

/** Format bertanda untuk kolom laba dan kumulatif. */
function signed(n: number | null) {
  if (n === null) return 'n/a'
  const s = n.toFixed(2).replace('.', ',')
  return n > 0 ? `+${s}` : s
}

/** Lebar batang relatif terhadap bulan tertinggi. */
function pct(n: number) {
  return Math.max(6, Math.round((n / maxRev) * 100))
}

function rowClass(mark?: string) {
  if (mark === 'impas') return 'bg-gm-mist'
  if (mark === 'terendah') return 'bg-gm-amberbg'
  if (mark === 'rekor') return 'bg-gm-mist'
  return 'bg-white'
}

function pillClass(mark?: string) {
  if (mark === 'impas') return 'bg-gm-amber text-white'
  if (mark === 'terendah') return 'border-2 border-gm-amber bg-white text-gm-amber'
  if (mark === 'rekor') return 'bg-gm-primary text-white'
  return 'bg-gm-line text-gm-ink'
}

function barClass(mark?: string) {
  if (mark === 'impas') return 'bg-gm-amber'
  if (mark === 'terendah') return 'bg-gm-soft'
  if (mark === 'rekor') return 'bg-gm-deep'
  return 'bg-gm-primary'
}

const HEADERS = ['Bulan', 'Pendapatan (jt)', 'Unit', 'Beban/HPP (jt)', 'Laba (jt)', 'Kumulatif (jt)', 'Batang']
</script>

<template>
  <SalesDetail v-if="isSales" :section="section" />
  <div v-else class="relative flex min-h-full w-full min-w-0 flex-col gap-2">
    <LightGridSvg :id="`em-${section.id}`" class="absolute inset-0 -z-10 opacity-60" />

    <!-- Tiga lencana ringkasan. -->
    <Motion
      :initial="{ opacity: 0, y: -12 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="t(0)"
      class="w-full shrink-0"
    >
      <div class="grid w-full grid-cols-1 gap-1.5 sm:grid-cols-3">
        <span
          v-for="b in ECON_BADGES"
          :key="b.label"
          class="flex min-w-0 items-center justify-center gap-2 rounded-full border-2 border-gm-line bg-white px-3 py-1 text-center"
        >
          <Icon :name="b.icon" class="size-4 shrink-0 text-gm-primary" />
          <span class="font-headline text-base font-extrabold tabular-nums text-gm-ink">{{ b.value }}</span>
          <span class="truncate text-base text-gm-muted">{{ b.label }}</span>
        </span>
      </div>
    </Motion>

    <!-- Tabel sembilan bulan dengan batang pendapatan per baris. -->
    <Motion
      :initial="{ opacity: 0, y: 16 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="t(1)"
      class="flex min-h-0 w-full flex-1 flex-col"
    >
      <div class="flex h-full min-h-0 w-full flex-col rounded-3xl border-2 border-gm-line bg-white p-1.5">
        <div class="econ-head hidden h-10 shrink-0 items-center rounded-xl bg-gm-panel px-1 text-left md:grid">
          <span
            v-for="h in HEADERS"
            :key="h"
            class="min-w-0 truncate px-2 font-headline text-base font-extrabold text-gm-ink"
          >{{ h }}</span>
        </div>

        <div class="flex min-h-0 flex-1 flex-col">
          <div
            v-for="r in rows"
            :key="r.key"
            class="econ-row flex min-h-10 flex-1 flex-wrap items-center gap-x-2 gap-y-0.5 rounded-md border-b border-gm-line/70 px-1 text-left last:border-b-0 md:grid md:gap-0"
            :class="rowClass(r.mark)"
          >
            <!-- Nama bulan dan lencana sorotan. -->
            <div class="flex w-full min-w-0 items-center gap-1.5 px-2 md:w-auto">
              <span class="font-headline text-base font-extrabold text-gm-ink">{{ r.label }}</span>
              <span
                v-if="r.markLabel"
                class="shrink-0 whitespace-nowrap rounded-full px-2 py-0.5 text-base font-bold"
                :class="pillClass(r.mark)"
              >{{ r.markLabel }}</span>
            </div>

            <!-- Pendapatan -->
            <div class="flex min-w-0 items-baseline gap-1.5 px-2">
              <span class="text-base text-gm-muted md:hidden">Pendapatan</span>
              <span
                class="text-base tabular-nums"
                :class="r.mark === 'rekor' ? 'font-headline font-extrabold text-gm-primary' : 'font-semibold text-gm-ink'"
              >
                {{ jt(r.pendapatan) }}<span class="md:hidden"> jt</span>
              </span>
            </div>

            <!-- Unit -->
            <div class="flex min-w-0 items-baseline gap-1.5 px-2">
              <span class="text-base text-gm-muted md:hidden">Unit</span>
              <span class="text-base font-semibold tabular-nums text-gm-ink">{{ r.unit }}</span>
            </div>

            <!-- Beban termasuk HPP -->
            <div class="flex min-w-0 items-baseline gap-1.5 px-2">
              <span class="text-base text-gm-muted md:hidden">Beban</span>
              <span class="text-base tabular-nums" :class="r.beban === null ? 'text-gm-muted' : 'font-semibold text-gm-ink'">
                {{ jt(r.beban) }}<span class="md:hidden"> jt</span>
              </span>
            </div>

            <!-- Laba bulan -->
            <div class="flex min-w-0 items-baseline gap-1.5 px-2">
              <span class="text-base text-gm-muted md:hidden">Laba</span>
              <span class="text-base tabular-nums" :class="r.laba === null ? 'text-gm-muted' : 'font-semibold text-gm-ink'">
                {{ signed(r.laba) }}<span class="md:hidden"> jt</span>
              </span>
            </div>

            <!-- Kumulatif laba -->
            <div class="flex min-w-0 items-baseline gap-1.5 px-2">
              <span class="text-base text-gm-muted md:hidden">Kumulatif</span>
              <span
                class="text-base tabular-nums"
                :class="r.kumulatif === null ? 'text-gm-muted' : (r.mark === 'impas' ? 'font-headline font-extrabold text-gm-primary' : 'font-semibold text-gm-ink')"
              >
                {{ signed(r.kumulatif) }}<span class="md:hidden"> jt</span>
              </span>
            </div>

            <!-- Batang pendapatan -->
            <div class="flex w-full min-w-0 items-center px-2 md:w-auto">
              <span class="relative h-3 w-full overflow-hidden rounded-full bg-gm-line" aria-hidden="true">
                <span
                  class="absolute inset-y-0 left-0 rounded-full"
                  :class="barClass(r.mark)"
                  :style="{ width: pct(r.pendapatan) + '%' }"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Motion>

    <!-- Sorotan dan catatan sumber. -->
    <Motion
      :initial="{ opacity: 0, y: 14 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="t(2)"
      class="w-full shrink-0"
    >
      <p class="text-left text-base font-bold leading-snug text-gm-primary">{{ ECON_HIGHLIGHT }}</p>
      <p class="mt-1 text-left text-base leading-snug text-gm-muted">{{ ECON_FOOTNOTE }}</p>
    </Motion>
  </div>
</template>

<style scoped>
/* Kolom tabel dikunci di CSS supaya lebar tiap kolom selalu sama,
   tanpa bergantung pada kelas arbitrer. Di bawah 768px baris menumpuk. */
@media (min-width: 768px) {
  .econ-head,
  .econ-row {
    grid-template-columns:
      minmax(0, 1.6fr) minmax(0, 1.2fr) minmax(0, 0.6fr) minmax(0, 1.1fr)
      minmax(0, 1.1fr) minmax(0, 1.2fr) minmax(0, 1.6fr);
  }
}
</style>
