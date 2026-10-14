<script setup lang="ts">
import { Motion } from 'motion-v'
import type { HiddenSection } from '~/data/hidden'
import {
  CONSIGN_BADGES,
  CONSIGN_BY_PRODUCT,
  CONSIGN_CROSS_LEGEND,
  CONSIGN_CROSS_TITLE,
  CONSIGN_FOOTNOTE,
  CONSIGN_NOTES,
  CONSIGN_OUTLETS,
} from '~/data/consign'

defineProps<{ section: HiddenSection }>()

/** Gerak masuk berjenjang, pola sama dengan slide deck. */
const t = (i: number) => ({ type: 'spring', stiffness: 260, damping: 20, delay: 0.06 + i * 0.07 } as const)

/** Lebar batang: tepi kanan track selalu target, kelebihan berhenti di tepi. */
function width(sold: number, target: number) {
  const w = (sold / target) * 100
  return `${Math.max(6, Math.min(100, w))}%`
}

/** Batang terisi penuh bila target tercapai atau terlampaui. */
function fill(sold: number, target: number) {
  return sold >= target ? 'bg-gm-deep' : 'bg-gm-soft'
}

/** Capaian penuh memakai lencana hijau, sisanya netral. */
function chip(sold: number, target: number) {
  return sold >= target
    ? 'bg-gm-primary text-white'
    : 'border-2 border-gm-line bg-gm-panel text-gm-ink'
}
</script>

<template>
  <div class="relative flex min-h-full w-full min-w-0 flex-col gap-2">
    <LightGridSvg :id="`cd-${section.id}`" class="absolute inset-0 -z-10 opacity-60" />

    <!-- Empat lencana ringkas: toko, target, terjual, efektivitas. -->
    <Motion
      :initial="{ opacity: 0, y: -12 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="t(0)"
      class="w-full shrink-0"
    >
      <div class="grid w-full grid-cols-2 gap-1.5 sm:grid-cols-4">
        <span
          v-for="b in CONSIGN_BADGES"
          :key="b.value"
          class="flex min-w-0 items-center justify-start gap-2 rounded-full border-2 border-gm-line bg-white px-3 py-1 text-left"
        >
          <Icon :name="b.icon" class="size-4 shrink-0 text-gm-primary" />
          <span v-if="b.lead" class="truncate text-base text-gm-muted">{{ b.lead }}</span>
          <span class="font-headline text-base font-extrabold tabular-nums text-gm-ink">{{ b.value }}</span>
        </span>
      </div>
    </Motion>

    <!-- Dua kartu toko: capaian besar lalu tabel mini per produk. -->
    <Motion
      :initial="{ opacity: 0, y: 16 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="t(1)"
      class="grid min-h-0 w-full flex-1 grid-cols-1 gap-2 lg:grid-cols-2"
    >
      <div
        v-for="o in CONSIGN_OUTLETS"
        :key="o.key"
        class="flex h-full min-w-0 flex-col gap-2 rounded-3xl border-2 p-3 text-left"
        :class="o.hot ? 'border-gm-primary bg-gm-mist' : 'border-gm-line bg-white'"
      >
        <!-- Nama toko dan total unit. -->
        <div class="flex shrink-0 items-center justify-between gap-2">
          <span class="flex min-w-0 items-center gap-1.5 font-headline text-base font-extrabold text-gm-ink">
            <Icon :name="o.icon" class="size-4 shrink-0" :class="o.hot ? 'text-gm-primary' : 'text-gm-muted'" />
            <span class="truncate">{{ o.name }}</span>
          </span>
          <span class="shrink-0 rounded-full bg-gm-ink px-2 py-0.5 text-base font-bold tabular-nums text-white">
            {{ o.sold }} dari {{ o.target }} unit
          </span>
        </div>

        <!-- Capaian toko dalam persen dan batang. -->
        <div class="shrink-0">
          <div class="flex items-end justify-between gap-2">
            <span class="text-base text-gm-muted">Efektivitas toko</span>
            <span
              class="font-headline text-2xl font-extrabold leading-none tabular-nums"
              :class="o.hot ? 'text-gm-primary' : 'text-gm-ink'"
            >{{ o.pct }}</span>
          </div>
          <span class="mt-1.5 block h-3 w-full overflow-hidden rounded-full bg-gm-line">
            <span
              class="block h-full rounded-full"
              :class="o.hot ? 'bg-gm-primary' : 'bg-gm-soft'"
              :style="{ width: width(o.sold, o.target) }"
            />
          </span>
        </div>

        <!-- Tabel mini: target dan terjual tiap produk. -->
        <div class="flex min-h-0 flex-1 flex-col gap-1.5">
          <div class="consign-head hidden shrink-0 items-center gap-2 rounded-xl bg-gm-panel px-2.5 py-1 md:grid">
            <span class="min-w-0 truncate font-headline text-base font-extrabold text-gm-ink">Produk</span>
            <span class="min-w-0 truncate text-base text-gm-muted">Menuju target</span>
            <span class="min-w-0 truncate text-base text-gm-muted">Terjual/Target</span>
            <span class="min-w-0 truncate text-base text-gm-muted">Capaian</span>
          </div>

          <div
            v-for="p in o.products"
            :key="p.key"
            class="consign-row flex min-h-10 flex-1 flex-wrap items-center gap-x-2 gap-y-1 rounded-xl border-2 border-gm-line bg-white px-2.5 py-1.5 md:grid md:flex-nowrap"
          >
            <span class="flex min-w-0 items-center gap-1.5 text-base font-semibold text-gm-ink">
              <Icon :name="p.icon" class="size-4 shrink-0 text-gm-muted" />
              <span class="truncate">{{ p.name }}</span>
            </span>

            <span class="relative h-3 min-w-0 overflow-hidden rounded-full bg-gm-line" aria-hidden="true">
              <span
                class="absolute inset-y-0 left-0 rounded-full"
                :class="fill(p.sold, p.target)"
                :style="{ width: width(p.sold, p.target) }"
              />
            </span>

            <span class="text-base tabular-nums text-gm-muted">
              <span class="font-bold text-gm-ink">{{ p.sold }}</span> / {{ p.target }}
            </span>

            <span
              class="ml-auto justify-self-end rounded-full px-2 py-0.5 text-base font-headline font-extrabold tabular-nums"
              :class="chip(p.sold, p.target)"
            >{{ p.pct }}</span>
          </div>
        </div>
      </div>
    </Motion>

    <!-- Capaian lintas toko dan kesimpulan singkat. -->
    <Motion
      :initial="{ opacity: 0, y: 14 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="t(2)"
      class="grid w-full shrink-0 grid-cols-1 gap-2"
    >
      <div class="flex w-full flex-wrap items-center justify-between gap-x-2 gap-y-1">
        <span class="flex items-center gap-1.5 font-headline text-base font-extrabold text-gm-ink">
          <Icon name="lucide:layers" class="size-4 shrink-0 text-gm-primary" />{{ CONSIGN_CROSS_TITLE }}
        </span>
        <span class="rounded-full bg-gm-mist px-2.5 py-0.5 text-base font-bold text-gm-primary">{{ CONSIGN_CROSS_LEGEND }}</span>
      </div>

      <div class="grid w-full grid-cols-3 gap-1.5">
        <div
          v-for="c in CONSIGN_BY_PRODUCT"
          :key="c.key"
          class="flex min-w-0 flex-col gap-1 rounded-2xl border-2 border-gm-line bg-white p-2 text-left"
        >
          <div class="flex items-center justify-between gap-1.5">
            <span class="flex min-w-0 items-center gap-1.5 text-base font-bold text-gm-ink">
              <Icon :name="c.icon" class="size-4 shrink-0 text-gm-primary" />
              <span class="truncate">{{ c.name }}</span>
            </span>
            <span class="shrink-0 text-base tabular-nums text-gm-muted">{{ c.sold }}/{{ c.target }} unit</span>
          </div>

          <div class="flex items-center gap-2">
            <span class="relative h-3 min-w-6 flex-1 overflow-hidden rounded-full bg-gm-line" aria-hidden="true">
              <span
                class="absolute inset-y-0 left-0 rounded-full"
                :class="fill(c.sold, c.target)"
                :style="{ width: width(c.sold, c.target) }"
              />
            </span>
            <span
              class="shrink-0 rounded-full px-2 py-0.5 text-base font-headline font-extrabold tabular-nums"
              :class="chip(c.sold, c.target)"
            >{{ c.pct }}</span>
          </div>
        </div>
      </div>

      <ul class="grid w-full grid-cols-1 gap-1.5 sm:grid-cols-3">
        <li
          v-for="n in CONSIGN_NOTES"
          :key="n.text"
          class="flex min-w-0 items-center gap-2 rounded-2xl border-2 border-gm-line bg-gm-panel px-3 py-1.5 text-left"
        >
          <Icon :name="n.icon" class="size-5 shrink-0 text-gm-primary" />
          <span class="min-w-0 text-base font-bold leading-snug text-gm-ink">{{ n.text }}</span>
        </li>
      </ul>
    </Motion>

    <!-- Catatan kaki netral. -->
    <Motion
      :initial="{ opacity: 0, y: 12 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="t(3)"
      class="w-full shrink-0"
    >
      <p class="text-left text-base leading-snug text-gm-muted">{{ CONSIGN_FOOTNOTE }}</p>
    </Motion>
  </div>
</template>

<style scoped>
/* Kolom tabel mini dikunci di CSS supaya lebar tiap kolom selalu sama.
   Di bawah 768px baris menumpuk tanpa kepala tabel. */
@media (min-width: 768px) {
  .consign-head,
  .consign-row {
    grid-template-columns:
      minmax(0, 1.1fr) minmax(0, 1.7fr) minmax(0, 0.9fr) minmax(0, 0.7fr);
  }
}
</style>
