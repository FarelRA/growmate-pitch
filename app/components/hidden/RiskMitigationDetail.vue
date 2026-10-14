<script setup lang="ts">
import { Motion } from 'motion-v'
import type { HiddenSection } from '~/data/hidden'
import { RISK_ANALYSIS } from '~/data/risk-analysis'
import { RISK_ZONES, type RiskLevel } from '~/data/risk-matrix'

defineProps<{ section: HiddenSection }>()

/** Gerak masuk berjenjang, pola sama dengan tetangganya di lapisan detail. */
const t = (i: number) => ({ type: 'spring', stiffness: 260, damping: 20, delay: 0.06 + i * 0.07 } as const)

/** Ikhtisar dihitung dari data supaya angka pada lencana selalu benar. */
const total = RISK_ANALYSIS.length
const skorTertinggi = Math.max(...RISK_ANALYSIS.map(r => r.skorAwal))
const sisaTertinggi = Math.max(...RISK_ANALYSIS.filter(r => r.skorAwal === skorTertinggi).map(r => r.skorSisa))
const penurunanRata = RISK_ANALYSIS.reduce((sum, r) => sum + r.skorAwal - r.skorSisa, 0) / total
const jumlahZona = (level: RiskLevel) => RISK_ANALYSIS.filter(r => r.levelSisa === level).length

const satuDesimal = (n: number) => n.toFixed(1).replace('.', ',')

const badges = [
  { icon: 'lucide:shield-check', text: `${total} risiko dianalisis` },
  { icon: 'lucide:trending-down', text: `Skor tertinggi ${skorTertinggi} menjadi ${sisaTertinggi}` },
  { icon: 'lucide:gauge', text: `Rata-rata turun ${satuDesimal(penurunanRata)} poin` },
  { icon: 'lucide:circle-check', text: `${jumlahZona('hijau')} hijau, ${jumlahZona('kuning')} kuning setelah mitigasi` },
]

/** Warna pekat per zona, sama dengan halaman matriks risiko. */
const markClass: Record<RiskLevel, string> = {
  hijau: 'bg-gm-primary',
  kuning: 'bg-gm-amber',
  oranye: 'bg-[#d97706]',
  merah: 'bg-gm-danger',
}

/** Warna redup untuk chip skor sisa. */
const softClass: Record<RiskLevel, string> = {
  hijau: 'bg-gm-mist text-gm-primary',
  kuning: 'bg-gm-amberbg text-gm-amber',
  oranye: 'bg-[#fbe7d5] text-[#b45309]',
  merah: 'bg-[#f9dedd] text-gm-danger',
}
</script>

<template>
  <div class="relative flex min-h-full w-full min-w-0 flex-col justify-center gap-2">
    <LightGridSvg :id="`rma-${section.id}`" class="absolute inset-0 -z-10 opacity-70" />

    <!-- Ringkasan analisis dalam empat lencana. -->
    <Motion
      :initial="{ opacity: 0, y: 16 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="t(0)"
      class="flex w-full flex-wrap items-center gap-2"
    >
      <span
        v-for="b in badges"
        :key="b.text"
        class="flex items-center gap-1.5 rounded-full border-2 border-gm-line bg-white px-3 py-1 font-headline text-base font-extrabold leading-none tabular-nums text-gm-ink"
      >
        <Icon :name="b.icon" class="size-4 shrink-0 text-gm-primary" />{{ b.text }}
      </span>
    </Motion>

    <!-- Tabel analisis: nomor, risiko, skor awal, mitigasi, dan skor sisa. -->
    <Motion
      :initial="{ opacity: 0, y: 16 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="t(1)"
      class="w-full min-w-0"
    >
      <div class="w-full rounded-3xl border-2 border-gm-line bg-white p-2.5 text-left">
        <div class="flex w-full flex-wrap items-center justify-between gap-x-3 gap-y-1">
          <span class="flex items-center gap-1.5 font-headline text-base font-extrabold leading-none text-gm-ink">
            <Icon name="lucide:arrow-right-left" class="size-4 shrink-0 text-gm-primary" />Mitigasi dan estimasi skor sisa
          </span>
          <span class="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-base leading-none text-gm-muted">
            <span v-for="z in RISK_ZONES" :key="z.level" class="flex items-center gap-1">
              <span class="size-2.5 shrink-0 rounded-full" :class="markClass[z.level]" aria-hidden="true" />
              {{ z.label }} {{ z.min }}-{{ z.max }}
            </span>
          </span>
        </div>

        <!-- Baris judul kolom. -->
        <div class="rm-grid mt-1.5 items-end gap-x-2 border-b-2 border-gm-line pb-1.5">
          <span class="text-center font-headline text-base font-extrabold leading-none text-gm-muted">No</span>
          <span class="font-headline text-base font-extrabold leading-none text-gm-muted">Risiko</span>
          <span class="text-center font-headline text-base font-extrabold leading-tight text-gm-muted">Skor awal</span>
          <span class="font-headline text-base font-extrabold leading-none text-gm-muted">Mitigasi</span>
          <span class="col-span-2 text-right font-headline text-base font-extrabold leading-tight text-gm-muted">
            Skor sisa (estimasi setelah mitigasi)
          </span>
        </div>

        <!-- Sembilan baris analisis, datar tanpa pengelompokan. -->
        <div
          v-for="r in RISK_ANALYSIS"
          :key="r.no"
          class="rm-grid items-center gap-x-2 border-b border-gm-line/70 py-1.5 last:border-b-0"
        >
          <span
            class="mx-auto grid size-7 shrink-0 place-items-center rounded-full font-headline text-base font-extrabold leading-none tabular-nums text-white"
            :class="markClass[r.levelAwal]"
          >{{ r.no }}</span>

          <span class="min-w-0 truncate text-base font-semibold leading-tight text-gm-ink">{{ r.nama }}</span>

          <span class="flex justify-center">
            <span
              class="rounded-full px-2.5 py-1 font-headline text-base font-extrabold leading-none tabular-nums text-white"
              :class="markClass[r.levelAwal]"
            >{{ r.skorAwal }}</span>
          </span>

          <span class="min-w-0 truncate text-base leading-tight text-gm-muted">{{ r.mitigasi }}</span>

          <Icon name="lucide:arrow-right" class="size-4 shrink-0 text-gm-primary" />

          <span class="flex justify-end">
            <span
              class="rounded-full px-2.5 py-1 font-headline text-base font-extrabold leading-none tabular-nums"
              :class="softClass[r.levelSisa]"
            >{{ r.skorSisa }}</span>
          </span>
        </div>
      </div>
    </Motion>

    <!-- Catatan kaki: skor sisa adalah estimasi, bukan hasil pengukuran. -->
    <Motion
      :initial="{ opacity: 0, y: 12 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="t(2)"
      class="flex w-full items-center gap-1.5 text-base leading-tight text-gm-muted"
    >
      <Icon name="lucide:info" class="size-4 shrink-0" />Analisis mitigasi internal GrowMate; skor sisa adalah estimasi setelah mitigasi dijalankan, bukan hasil pengukuran.
    </Motion>
  </div>
</template>

<style scoped>
/* Enam kolom tetap: nomor, risiko, skor awal, mitigasi, panah, dan skor sisa. */
.rm-grid {
  display: grid;
  grid-template-columns: 2rem minmax(0, 1fr) 4.75rem minmax(0, 1.18fr) 1.5rem 11rem;
}
</style>
