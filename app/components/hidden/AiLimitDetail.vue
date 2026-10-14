<script setup lang="ts">
import { Motion } from 'motion-v'
import type { HiddenSection } from '~/data/hidden'
import { AI_LIMIT } from '~/data/ai-econ'

defineProps<{ section: HiddenSection }>()

/** Gerak masuk berjenjang, pola sama dengan slide deck. */
const t = (i: number) => ({ type: 'spring', stiffness: 260, damping: 20, delay: 0.06 + i * 0.07 } as const)

const d = AI_LIMIT
</script>

<template>
  <div class="relative flex min-h-full w-full min-w-0 flex-col justify-center gap-2 md:gap-2.5">
    <LightGridSvg :id="`ai-${section.ref}`" class="absolute inset-0 -z-10 opacity-70" />

    <!-- Strip harga API gelap. -->
    <Motion :initial="{ opacity: 0, y: -12 }" :animate="{ opacity: 1, y: 0 }" :transition="t(0)">
      <div class="flex w-full flex-wrap items-center gap-x-2 gap-y-1.5 rounded-3xl bg-gm-ink px-3.5 py-2.5 text-left text-white">
        <span class="flex shrink-0 items-center gap-1.5 font-headline text-base font-extrabold">
          <Icon name="lucide:coins" class="size-4 shrink-0 text-emerald-300" />{{ d.priceLabel }}
        </span>
        <template v-for="(p, i) in d.price" :key="p.v">
          <Icon
            v-if="i > 0"
            name="lucide:arrow-right"
            class="size-4 shrink-0 text-white/50"
          />
          <span
            class="rounded-full bg-white/10 px-3 py-1 font-headline text-base font-bold text-white"
          >{{ p.v }}</span>
        </template>
      </div>
    </Motion>

    <!-- Stack model di kiri, kuota harian di kanan. -->
    <div class="grid w-full min-w-0 grid-cols-1 items-stretch gap-2 lg:grid-cols-12">
      <Motion
        :initial="{ opacity: 0, y: 16 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="t(1)"
        class="min-w-0 lg:col-span-7"
      >
        <div class="flex h-full flex-col rounded-3xl border-2 border-gm-line bg-white p-3 text-left">
          <span class="flex items-center gap-1.5 font-headline text-base font-extrabold uppercase tracking-wide text-gm-primary">
            <Icon name="lucide:cpu" class="size-4 shrink-0" />{{ d.stackTitle }}
          </span>
          <div class="mt-1.5 flex flex-col gap-1.5">
            <div
              v-for="s in d.stack"
              :key="s.k"
              class="flex min-w-0 items-baseline gap-2 rounded-lg bg-gm-panel px-2.5 py-1"
            >
              <span class="shrink-0 font-headline text-base font-extrabold text-gm-primary">{{ s.k }}</span>
              <span class="min-w-0 text-base leading-snug text-gm-ink">{{ s.v }}</span>
            </div>
          </div>
        </div>
      </Motion>

      <Motion
        :initial="{ opacity: 0, y: 16 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="t(2)"
        class="min-w-0 lg:col-span-5"
      >
        <div class="flex h-full flex-col rounded-3xl border-2 border-gm-line bg-white p-3 text-left">
          <span class="flex items-center gap-1.5 font-headline text-base font-extrabold uppercase tracking-wide text-gm-primary">
            <Icon name="lucide:gauge" class="size-4 shrink-0" />{{ d.quotaTitle }}
          </span>
          <div class="mt-1.5 flex flex-col gap-1.5">
            <div
              v-for="q in d.quota"
              :key="q.k"
              class="flex min-w-0 items-baseline gap-2 rounded-lg px-2.5 py-1"
              :class="q.hot ? 'bg-gm-mist' : 'bg-gm-panel'"
            >
              <span class="shrink-0 font-headline text-base font-extrabold text-gm-primary">{{ q.k }}</span>
              <span class="min-w-0 text-base leading-snug text-gm-ink">{{ q.v }}</span>
            </div>
          </div>
        </div>
      </Motion>
    </div>

    <!-- Empat alasan biaya rendah di kiri, alasan fallback di kanan. -->
    <div class="grid w-full min-w-0 grid-cols-1 items-stretch gap-2 lg:grid-cols-12">
      <Motion
        :initial="{ opacity: 0, y: 16 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="t(3)"
        class="min-w-0 lg:col-span-7"
      >
        <div class="flex h-full flex-col rounded-3xl border-2 border-gm-line bg-white p-3 text-left">
          <span class="flex items-center gap-1.5 font-headline text-base font-extrabold uppercase tracking-wide text-gm-primary">
            <Icon name="lucide:trending-down" class="size-4 shrink-0" />{{ d.cheapTitle }}
          </span>
          <ul class="mt-1.5 flex flex-col gap-1.5">
            <li
              v-for="c in d.cheap"
              :key="c"
              class="flex items-start gap-2 rounded-lg bg-gm-panel px-2.5 py-1"
            >
              <Icon name="lucide:arrow-right" class="size-5 shrink-0 text-gm-primary" />
              <span class="min-w-0 text-base font-bold leading-snug text-gm-ink">{{ c }}</span>
            </li>
          </ul>
        </div>
      </Motion>

      <Motion
        :initial="{ opacity: 0, y: 16 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="t(4)"
        class="min-w-0 lg:col-span-5"
      >
        <div class="flex h-full flex-col rounded-3xl border-2 border-gm-line bg-white p-3 text-left">
          <span class="flex items-center gap-1.5 font-headline text-base font-extrabold uppercase tracking-wide text-gm-amber">
            <Icon name="lucide:shield-check" class="size-4 shrink-0" />{{ d.guardTitle }}
          </span>
          <ul class="mt-1.5 flex flex-col gap-1.5">
            <li
              v-for="g in d.guard"
              :key="g"
              class="flex items-start gap-2 rounded-lg bg-gm-amberbg px-2.5 py-1"
            >
              <Icon name="lucide:arrow-right" class="size-5 shrink-0 text-gm-amber" />
              <span class="min-w-0 text-base font-bold leading-snug text-gm-ink">{{ g }}</span>
            </li>
          </ul>
        </div>
      </Motion>
    </div>

    <Motion :initial="{ opacity: 0, y: 14 }" :animate="{ opacity: 1, y: 0 }" :transition="t(5)">
      <p class="text-left text-base leading-snug text-gm-muted">{{ d.footnote }}</p>
    </Motion>
  </div>
</template>
