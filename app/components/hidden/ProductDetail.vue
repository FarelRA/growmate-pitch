<script setup lang="ts">
import { Motion } from 'motion-v'
import BlowupViewer from '~/components/BlowupViewer.vue'
import PodsShowcase from '~/components/sections/PodsShowcase.vue'
import TechSquad from '~/components/sections/TechSquad.vue'
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

/** Tab kedua menampung komponen pamer yang dulu tidak terpasang. */
const tab = ref(0)
const hasPamer = computed(() => props.section.ref === 'pods' || props.section.ref === 'tech')
const pamerLabel = computed(() => (props.section.ref === 'pods' ? 'Skema pin dan daftar komponen' : 'Lapangan dan kemas'))

/** Gerak masuk berjenjang, pola sama dengan slide deck. */
const t = (i: number) => ({ type: 'spring', stiffness: 260, damping: 20, delay: 0.06 + i * 0.07 } as const)
</script>

<template>
  <div class="relative flex min-h-full w-full min-w-0 flex-col justify-center gap-2">
    <LightGridSvg :id="`pd-${section.ref}`" class="absolute inset-0 -z-10 opacity-70" />

    <!-- Tab pamer: memakai ulang komponen showcase yang dulu tidak terpasang. -->
    <div v-if="hasPamer" class="flex w-full shrink-0 flex-wrap items-center gap-1.5">
      <button
        type="button"
        :aria-pressed="tab === 0"
        class="rounded-full border-2 px-3 py-1 font-headline text-base font-extrabold transition-all"
        :class="tab === 0 ? 'border-gm-primary bg-gm-primary text-white' : 'border-gm-line bg-white text-gm-muted'"
        @click="tab = 0"
      >
        Ikhtisar
      </button>
      <button
        type="button"
        :aria-pressed="tab === 1"
        class="rounded-full border-2 px-3 py-1 font-headline text-base font-extrabold transition-all"
        :class="tab === 1 ? 'border-gm-primary bg-gm-primary text-white' : 'border-gm-line bg-white text-gm-muted'"
        @click="tab = 1"
      >
        {{ pamerLabel }}
      </button>
    </div>

    <div v-if="hasPamer && tab === 1" class="flex min-h-0 w-full min-w-0 flex-1 flex-col">
      <PodsShowcase v-if="props.section.ref === 'pods'" />
      <TechSquad v-else />
    </div>

    <div v-if="tab === 0" class="grid w-full min-w-0 grid-cols-1 items-start gap-2 lg:grid-cols-12">
      <Motion :initial="{ opacity: 0, y: 18, scale: 0.97 }" :animate="{ opacity: 1, y: 0, scale: 1 }" :transition="t(0)" class="lg:col-span-4">
        <div class="relative overflow-hidden rounded-3xl border-2 border-gm-line bg-gm-panel p-1">
          <span class="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-gm-primary/10 blur-2xl" aria-hidden="true" />
          <img
            :src="product.src"
            :alt="product.alt"
            class="relative max-h-[180px] w-full object-contain lg:max-h-[136px] 2xl:max-h-[220px]"
            draggable="false"
          />
        </div>
        <div class="mt-1.5 h-[88px] overflow-hidden rounded-3xl border-2 border-gm-line bg-white 2xl:h-[170px]">
          <BlowupViewer :src="bedah.model.src" :title="bedah.model.title" compact class="h-full" />
        </div>
        <div class="mt-1.5 grid grid-cols-2 gap-1.5">
          <figure class="overflow-hidden rounded-2xl border-2 border-gm-line bg-white text-left">
            <img :src="bedah.src" :alt="bedah.alt" class="block h-10 w-full bg-gm-panel object-cover 2xl:h-20" draggable="false" loading="lazy" />
            <figcaption class="px-2 py-0.5 font-headline text-base font-extrabold text-gm-ink">2 • Foto produk</figcaption>
          </figure>
          <figure class="overflow-hidden rounded-2xl border-2 border-gm-line bg-white text-left">
            <img :src="bedah.packPhoto.src" :alt="bedah.packPhoto.alt" class="block h-10 w-full bg-gm-panel object-cover 2xl:h-20" draggable="false" loading="lazy" />
            <figcaption class="px-2 py-0.5 font-headline text-base font-extrabold text-gm-ink">3 • Kemasan ritel</figcaption>
          </figure>
        </div>
        <div class="mt-1.5 flex flex-wrap items-center gap-1">
          <span class="rounded-full bg-gm-ink px-2.5 py-0.5 font-headline text-base font-extrabold text-white">{{ product.code }}</span>
          <span
            v-for="c in bedah.chips"
            :key="c"
            class="whitespace-nowrap rounded-full border-2 border-gm-line bg-white px-2 py-0.5 font-headline text-base font-extrabold text-gm-ink"
          >{{ c }}</span>
        </div>
        <p class="mt-1 text-left text-base leading-snug text-gm-muted">{{ product.audience }}</p>
      </Motion>

      <div class="flex w-full min-w-0 flex-col gap-1.5 lg:col-span-8">
        <Motion :initial="{ opacity: 0, y: 16 }" :animate="{ opacity: 1, y: 0 }" :transition="t(1)">
          <div class="grid w-full grid-cols-2 gap-1.5 sm:grid-cols-3">
            <div
              v-for="s in product.specs"
              :key="s.k"
              class="flex min-w-0 items-baseline justify-start gap-2 rounded-lg border-2 border-gm-line bg-white px-2 py-0.5 text-left"
            >
              <span class="shrink-0 text-base font-semibold text-gm-muted">{{ s.k }}</span>
              <span class="min-w-0 font-headline text-base font-extrabold leading-snug text-gm-ink">{{ s.v }}</span>
            </div>
          </div>
        </Motion>

        <Motion :initial="{ opacity: 0, y: 16 }" :animate="{ opacity: 1, y: 0 }" :transition="t(2)">
          <div class="grid w-full grid-cols-1 gap-1 sm:grid-cols-2">
            <div class="rounded-xl border-2 border-gm-line bg-gm-mist p-1 text-left">
              <span class="font-headline text-base font-extrabold uppercase tracking-wide text-gm-primary">Mengindra</span>
              <div class="mt-1 flex flex-wrap gap-1.5">
                <span v-for="s in product.senses" :key="s" class="rounded-full bg-white px-2 py-0.5 text-base font-semibold text-gm-ink">{{ s }}</span>
              </div>
            </div>
            <div class="rounded-xl border-2 border-gm-line bg-gm-amberbg p-1 text-left">
              <span class="font-headline text-base font-extrabold uppercase tracking-wide text-gm-amber">Menggerakkan</span>
              <div class="mt-1 flex flex-wrap gap-1.5">
                <span v-for="c in product.commands" :key="c" class="rounded-full bg-white px-2 py-0.5 text-base font-semibold text-gm-ink">{{ c }}</span>
              </div>
            </div>
          </div>
        </Motion>

        <Motion :initial="{ opacity: 0, y: 16 }" :animate="{ opacity: 1, y: 0 }" :transition="t(3)">
          <div class="grid w-full grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="(d, i) in bedah.dots"
              :key="d.title"
              class="flex w-full items-start justify-start gap-2 rounded-lg border-2 border-gm-line bg-white p-1 text-left"
            >
              <span class="grid size-7 shrink-0 place-items-center rounded-full bg-gm-primary font-headline text-base font-extrabold text-white">{{ i + 1 }}</span>
              <span class="min-w-0">
                <span class="block font-headline text-base font-extrabold leading-tight text-gm-ink">{{ d.title }}</span>
                <span class="mt-0.5 block text-base leading-tight text-gm-muted">{{ d.desc }}</span>
              </span>
            </div>
          </div>
        </Motion>
      </div>
    </div>

    <Motion :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }" :transition="t(4)">
      <ol v-if="tab === 0" class="grid w-full grid-cols-2 gap-1 lg:grid-cols-4">
        <li
          v-for="(s, i) in bedah.steps"
          :key="s.title"
          class="flex w-full items-center justify-start gap-2 rounded-xl bg-gm-ink p-1 text-left text-white"
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
    </Motion>
  </div>
</template>
