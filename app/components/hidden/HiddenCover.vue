<script setup lang="ts">
import { HIDDEN_SECTIONS } from '~/data/hidden'
import { GRAPHS } from '~/data/graphs'

const products = HIDDEN_SECTIONS.filter(s => s.kind === 'product')
const apps = HIDDEN_SECTIONS.filter(s => s.kind === 'app')
const graphs = HIDDEN_SECTIONS.filter(s => s.kind === 'graph')
</script>

<template>
  <div class="flex min-h-full w-full min-w-0 flex-col justify-center gap-2.5 md:gap-3">
    <div class="grid w-full min-w-0 grid-cols-1 gap-3 lg:grid-cols-12">
      <div class="flex w-full min-w-0 flex-col gap-2 lg:col-span-4">
        <div class="rounded-3xl border-2 border-gm-line bg-gm-amberbg p-3 text-left">
          <p class="font-headline text-lg font-extrabold text-gm-amber">Grafik web, bukan gambar</p>
          <p class="mt-1 text-base leading-relaxed text-gm-muted">
            Keempat belas grafik platform dirender langsung dari sumber Mermaid di
            peramban menjadi SVG yang dapat diperbesar dan digeser, bukan gambar tempel.
            Data produk dan spesifikasi diambil dari dokumen rekayasa yang sama dengan deck.
          </p>
        </div>

        <div class="rounded-3xl border-2 border-gm-line bg-white p-3 text-left">
          <p class="font-headline text-base font-extrabold uppercase tracking-wide text-gm-primary">
            Detail produk • {{ products.length }} halaman
          </p>
          <div class="mt-1.5 grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-1">
            <div v-for="p in products" :key="p.id" class="rounded-xl bg-gm-panel p-2">
              <span class="block font-headline text-base font-extrabold text-gm-ink">{{ p.title }}</span>
              <span class="mt-0.5 block line-clamp-2 text-base leading-snug text-gm-muted">{{ p.sub }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex w-full min-w-0 flex-col gap-2 lg:col-span-8">
        <div class="rounded-3xl border-2 border-gm-line bg-white p-3 text-left">
          <p class="font-headline text-base font-extrabold uppercase tracking-wide text-gm-primary">
            Detail aplikasi • {{ apps.length }} halaman
          </p>
          <div class="mt-1.5 grid grid-cols-2 gap-1.5 sm:grid-cols-3">
            <div v-for="a in apps" :key="a.id" class="rounded-xl bg-gm-panel px-2 py-2">
              <span class="block font-headline text-base font-extrabold text-gm-ink">{{ a.title.replace('Layar ', '') }}</span>
            </div>
          </div>
        </div>

        <div class="rounded-3xl border-2 border-gm-line bg-white p-3 text-left">
          <p class="font-headline text-base font-extrabold uppercase tracking-wide text-gm-primary">
            Grafik platform • {{ graphs.length }} halaman
          </p>
          <div class="mt-1.5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <template v-for="(g, i) in graphs" :key="g.id">
              <span class="flex min-w-0 items-baseline gap-1.5">
                <span class="shrink-0 font-mono text-base font-bold text-gm-amber">{{ GRAPHS.find(x => x.id === g.ref)?.label }}</span>
                <span class="text-base leading-snug text-gm-ink">{{ g.title }}</span>
              </span>
              <span v-if="i < graphs.length - 1" class="text-base text-gm-ink/25" aria-hidden="true">|</span>
            </template>
          </div>
        </div>

        <div class="rounded-3xl border-2 border-gm-line bg-gm-mist p-3 text-left">
          <p class="font-headline text-base font-extrabold uppercase tracking-wide text-gm-primary">
            Keterangan grafik
          </p>
          <div class="mt-1.5 flex flex-wrap items-center gap-1.5">
            <span
              v-for="c in [
                ['People & Value', '#7c3aed'],
                ['Experience', '#2563eb'],
                ['Intelligence', '#d97706'],
                ['Transport', '#0d9488'],
                ['Edge & Physical', '#16a34a'],
                ['Interlocks', '#dc2626'],
              ]"
              :key="c[0]"
              class="flex items-center gap-1.5 rounded-full border-2 border-gm-line bg-white px-2.5 py-0.5 text-base font-semibold text-gm-ink"
            >
              <span class="size-3 shrink-0 rounded-sm" :style="{ background: c[1] }" aria-hidden="true" />
              {{ c[0] }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
