<script setup lang="ts">
import { Motion } from 'motion-v'
import type { HiddenSection } from '~/data/hidden'
import {
  RISKS,
  RISK_AXIS_X,
  RISK_KATEGORI,
  RISK_SCALE,
  RISK_SOURCE,
  RISK_ZONES,
  type RiskItem,
  type RiskLevel,
} from '~/data/risk-matrix'

defineProps<{ section: HiddenSection }>()

/** Gerak masuk berjenjang, pola sama dengan slide deck. */
const t = (i: number) => ({ type: 'spring', stiffness: 260, damping: 20, delay: 0.06 + i * 0.07 } as const)

/** Lencana nomor masuk berurutan mengikuti nomor risiko. */
const badgeT = (i: number) => ({ type: 'spring', stiffness: 320, damping: 18, delay: 0.3 + i * 0.06 } as const)

/** Dampak dibaca dari atas: 5 di baris teratas sampai 1 di baris terbawah. */
const yRows = [5, 4, 3, 2, 1]

function zoneOf(skor: number): RiskLevel {
  return RISK_ZONES.find(z => skor >= z.min && skor <= z.max)!.level
}

interface Cell {
  dampak: number
  kemungkinan: number
  skor: number
  level: RiskLevel
  risks: RiskItem[]
}

/** Dua puluh lima sel, urut per baris dari dampak 5 sampai dampak 1. */
const cells: Cell[] = []
for (const dampak of yRows) {
  for (let kemungkinan = 1; kemungkinan <= 5; kemungkinan++) {
    const skor = dampak * kemungkinan
    cells.push({
      dampak,
      kemungkinan,
      skor,
      level: zoneOf(skor),
      risks: RISKS.filter(r => r.dampak === dampak && r.kemungkinan === kemungkinan),
    })
  }
}

/** Isi sel mengikuti zona, tanda (lencana, chip, titik) memakai warna pekatnya. */
const cellClass: Record<RiskLevel, string> = {
  hijau: 'bg-gm-mist',
  kuning: 'bg-gm-amberbg',
  oranye: 'bg-[#fbe7d5]',
  merah: 'bg-[#f9dedd]',
}

const markClass: Record<RiskLevel, string> = {
  hijau: 'bg-gm-primary',
  kuning: 'bg-gm-amber',
  oranye: 'bg-[#d97706]',
  merah: 'bg-gm-danger',
}
</script>

<template>
  <div class="relative flex min-h-full w-full min-w-0 flex-col justify-center gap-2 md:gap-2.5">
    <LightGridSvg :id="`rm-${section.id}`" class="absolute inset-0 -z-10 opacity-70" />

    <div class="grid w-full min-w-0 grid-cols-1 items-center gap-3 lg:grid-cols-12">
      <!-- Matriks 5 x 5: sumbu kemungkinan melawan sumbu dampak. -->
      <Motion
        :initial="{ opacity: 0, y: 18 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="t(0)"
        class="w-full min-w-0 lg:col-span-7"
      >
        <div class="w-full rounded-3xl border-2 border-gm-line bg-white p-2.5 text-left">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <span class="flex items-center gap-1.5 font-headline text-base font-extrabold leading-none text-gm-ink">
              <Icon name="lucide:layout-grid" class="size-4 shrink-0 text-gm-primary" />Matriks risiko 5 × 5
            </span>
            <span class="flex flex-wrap items-center gap-1.5">
              <span
                v-for="z in RISK_ZONES"
                :key="z.level"
                class="flex items-center gap-1.5 rounded-full border-2 border-gm-line bg-gm-panel px-2 py-1 text-base font-semibold leading-none text-gm-ink"
              >
                <span class="size-2.5 shrink-0 rounded-full" :class="markClass[z.level]" aria-hidden="true" />
                {{ z.label }} {{ z.min }}-{{ z.max }}
              </span>
            </span>
          </div>

          <!-- Baris isi: label sumbu Y, tangga label, lalu kisi 5 x 5. -->
          <div class="mt-2 flex items-stretch gap-1.5">
            <span class="rm-ytitle grid w-6 shrink-0 place-items-center font-headline text-base font-extrabold uppercase leading-none tracking-[0.08em] text-gm-muted">
              Dampak
            </span>

            <div class="flex w-[112px] shrink-0 flex-col gap-1">
              <div
                v-for="d in yRows"
                :key="d"
                class="flex h-16 flex-col items-end justify-center gap-1 pr-1 text-right"
              >
                <span class="font-headline text-base font-extrabold leading-none tabular-nums text-gm-ink">{{ d }}</span>
                <span class="text-base leading-none text-gm-muted">{{ RISK_SCALE[d - 1] }}</span>
              </div>
            </div>

            <div class="grid min-w-0 flex-1 grid-cols-5 gap-1">
              <div
                v-for="c in cells"
                :key="`${c.dampak}-${c.kemungkinan}`"
                class="relative flex h-16 items-end justify-center rounded-md pb-1.5"
                :class="cellClass[c.level]"
              >
                <span class="absolute left-1.5 top-1 font-headline text-base font-extrabold leading-none tabular-nums text-gm-ink/40">
                  {{ c.skor }}
                </span>
                <span class="flex items-center gap-1.5">
                  <Motion
                    v-for="r in c.risks"
                    :key="r.no"
                    :initial="{ opacity: 0, scale: 0.5 }"
                    :animate="{ opacity: 1, scale: 1 }"
                    :transition="badgeT(r.no - 1)"
                    class="grid size-7 shrink-0 place-items-center rounded-full font-headline text-base font-extrabold leading-none tabular-nums text-white"
                    :class="markClass[r.level]"
                  >
                    {{ r.no }}
                  </Motion>
                </span>
              </div>
            </div>
          </div>

          <!-- Label kemungkinan 1 sampai 5 di bawah kisi. -->
          <div class="mt-1 flex items-start gap-1.5">
            <span class="w-6 shrink-0" aria-hidden="true" />
            <span class="w-[112px] shrink-0" aria-hidden="true" />
            <div class="grid min-w-0 flex-1 grid-cols-5 gap-1">
              <div v-for="(label, i) in RISK_SCALE" :key="label" class="flex flex-col items-center gap-1">
                <span class="font-headline text-base font-extrabold leading-none tabular-nums text-gm-ink">{{ i + 1 }}</span>
                <span class="text-base leading-none text-gm-muted">{{ label }}</span>
              </div>
            </div>
          </div>

          <div class="mt-1.5 flex items-center gap-1.5 text-base leading-tight">
            <Icon name="lucide:arrow-right" class="size-4 shrink-0 text-gm-primary" />
            <span class="font-headline font-extrabold text-gm-ink">{{ RISK_AXIS_X.title }}</span>
            <span class="text-gm-muted">{{ RISK_AXIS_X.from }} sampai {{ RISK_AXIS_X.to }}</span>
          </div>
        </div>

        <p class="mt-2 flex items-center gap-1.5 text-left text-base leading-tight text-gm-muted">
          <Icon name="lucide:file-text" class="size-4 shrink-0" />{{ RISK_SOURCE }}
        </p>
      </Motion>

      <!-- Daftar risiko: nomor, nama, skor, dan mitigasi singkat. -->
      <Motion
        :initial="{ opacity: 0, y: 16 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="t(1)"
        class="flex w-full min-w-0 flex-col gap-1.5 lg:col-span-5"
      >
        <div class="flex w-full flex-wrap items-center justify-between gap-1.5">
          <span class="flex items-center gap-1.5 font-headline text-base font-extrabold leading-tight text-gm-ink">
            <Icon name="lucide:list-checks" class="size-4 shrink-0 text-gm-primary" />Sembilan risiko utama
          </span>
          <span class="rounded-full border-2 border-gm-line bg-gm-amberbg px-2.5 py-0.5 font-headline text-base font-extrabold leading-none tabular-nums text-gm-amber">
            Skor tertinggi 12
          </span>
        </div>

        <ul class="flex w-full min-w-0 flex-col rounded-3xl border-2 border-gm-line bg-white p-1.5">
          <li
            v-for="r in RISKS"
            :key="r.no"
            class="flex w-full min-w-0 items-center gap-2 border-b border-gm-line/70 px-1.5 py-1 last:border-b-0"
          >
            <span
              class="grid size-7 shrink-0 place-items-center rounded-full font-headline text-base font-extrabold leading-none tabular-nums text-white"
              :class="markClass[r.level]"
            >{{ r.no }}</span>

            <span class="min-w-0 flex-1 text-left">
              <span class="flex w-full min-w-0 items-center gap-1.5">
                <span class="min-w-0 flex-1 truncate text-base font-semibold leading-tight text-gm-ink">{{ r.nama }}</span>
                <span
                  class="shrink-0 rounded-full px-2 py-0.5 font-headline text-base font-extrabold leading-none tabular-nums text-white"
                  :class="markClass[r.level]"
                >{{ r.skor }}</span>
              </span>

              <span class="mt-0.5 flex w-full min-w-0 items-center gap-1.5">
                <span class="shrink-0 rounded-full bg-gm-mist px-1.5 py-0.5 font-headline text-base font-extrabold leading-none text-gm-primary">
                  {{ RISK_KATEGORI[r.kategori].short }}
                </span>
                <span class="min-w-0 flex-1 truncate text-base leading-tight text-gm-muted">{{ r.mitigasi }}</span>
              </span>
            </span>
          </li>
        </ul>
      </Motion>
    </div>
  </div>
</template>

<style scoped>
/* Label sumbu tegak: dibaca dari bawah ke atas, lebar tetap 24px. */
.rm-ytitle {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}
</style>
