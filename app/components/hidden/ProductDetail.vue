<script setup lang="ts">
import type { HiddenSection } from '~/data/hidden'
import { PRODUCTS } from '~/data/hidden'
import { BEDAH_PODS, BEDAH_TECH, BEDAH_ADDON, type BedahData } from '~/data/produk'

const props = defineProps<{ section: HiddenSection }>()

const product = computed(() => PRODUCTS[props.section.ref]!)

const bedahMap: Record<string, BedahData> = {
  pods: BEDAH_PODS,
  tech: BEDAH_TECH,
  addon: BEDAH_ADDON,
}

const bedah = computed(() => bedahMap[props.section.ref]!)
</script>

<template>
  <div class="flex min-h-full w-full min-w-0 flex-col justify-center gap-2">
    <div class="grid w-full min-w-0 grid-cols-1 items-start gap-3 lg:grid-cols-12">
      <div class="flex w-full min-w-0 flex-col gap-2 lg:col-span-4">
        <div class="overflow-hidden rounded-3xl border-2 border-gm-line bg-gm-panel p-2">
          <img
            :src="product.src"
            :alt="product.alt"
            class="max-h-[180px] w-full object-contain lg:max-h-[200px] 2xl:max-h-[320px]"
            draggable="false"
          />
        </div>
        <div class="flex flex-wrap items-center gap-1.5">
          <span class="rounded-full bg-gm-ink px-3 py-1 font-headline text-base font-extrabold text-white">{{ product.code }}</span>
          <span
            v-for="c in bedah.chips"
            :key="c"
            class="rounded-full border-2 border-gm-line bg-white px-3 py-1 font-headline text-base font-extrabold text-gm-ink"
          >{{ c }}</span>
        </div>
        <p class="text-left text-base leading-snug text-gm-muted">{{ product.audience }}</p>
      </div>

      <div class="flex w-full min-w-0 flex-col gap-2 lg:col-span-8">
        <div class="grid w-full grid-cols-2 gap-1.5 sm:grid-cols-3">
          <div
            v-for="s in product.specs"
            :key="s.k"
            class="flex min-w-0 items-baseline justify-start gap-2 rounded-lg border-2 border-gm-line bg-white px-2.5 py-1.5 text-left"
          >
            <span class="shrink-0 text-base font-semibold text-gm-muted">{{ s.k }}</span>
            <span class="min-w-0 font-headline text-base font-extrabold leading-snug text-gm-ink">{{ s.v }}</span>
          </div>
        </div>

        <div class="grid w-full grid-cols-1 gap-1.5 sm:grid-cols-2">
          <div class="rounded-xl border-2 border-gm-line bg-gm-mist p-2 text-left">
            <span class="font-headline text-base font-extrabold uppercase tracking-wide text-gm-primary">Mengindra</span>
            <div class="mt-1 flex flex-wrap gap-1.5">
              <span v-for="s in product.senses" :key="s" class="rounded-full bg-white px-2.5 py-0.5 text-base font-semibold text-gm-ink">{{ s }}</span>
            </div>
          </div>
          <div class="rounded-xl border-2 border-gm-line bg-gm-amberbg p-2 text-left">
            <span class="font-headline text-base font-extrabold uppercase tracking-wide text-gm-amber">Menggerakkan</span>
            <div class="mt-1 flex flex-wrap gap-1.5">
              <span v-for="c in product.commands" :key="c" class="rounded-full bg-white px-2.5 py-0.5 text-base font-semibold text-gm-ink">{{ c }}</span>
            </div>
          </div>
        </div>

        <div class="grid w-full grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(d, i) in bedah.dots"
            :key="d.title"
            class="flex w-full items-start justify-start gap-2 rounded-lg border-2 border-gm-line bg-white p-1.5 text-left"
          >
            <span class="grid size-7 shrink-0 place-items-center rounded-full bg-gm-primary font-headline text-base font-extrabold text-white">{{ i + 1 }}</span>
            <span class="min-w-0">
              <span class="block font-headline text-base font-extrabold leading-tight text-gm-ink">{{ d.title }}</span>
              <span class="mt-0.5 block text-base leading-snug text-gm-muted">{{ d.desc }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <ol class="grid w-full grid-cols-2 gap-1.5 lg:grid-cols-4">
      <li
        v-for="(s, i) in bedah.steps"
        :key="s.title"
        class="flex w-full items-center justify-start gap-2 rounded-xl bg-gm-ink p-2 text-left text-white"
      >
        <span class="grid size-8 shrink-0 place-items-center rounded-lg bg-white/10 font-mono text-base font-bold text-emerald-300">{{ i + 1 }}</span>
        <span class="min-w-0 flex-1">
          <span class="flex items-center justify-start gap-1.5 font-headline text-base font-extrabold leading-tight">
            <Icon :name="s.icon" class="size-4 shrink-0 text-emerald-300" />{{ s.title }}
          </span>
          <span class="mt-0.5 block truncate text-base leading-snug text-white/75">{{ s.desc }}</span>
        </span>
      </li>
    </ol>
  </div>
</template>
