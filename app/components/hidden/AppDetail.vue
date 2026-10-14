<script setup lang="ts">
import { Motion } from 'motion-v'
import type { HiddenSection } from '~/data/hidden'
import { APPS } from '~/data/hidden'

const props = defineProps<{ section: HiddenSection }>()

const app = computed(() => APPS[props.section.ref]!)

/** Gerak masuk berjenjang, pola sama dengan slide deck. */
const t = (i: number) => ({ type: 'spring', stiffness: 260, damping: 20, delay: 0.06 + i * 0.07 } as const)
</script>

<template>
  <div class="relative flex min-h-full w-full min-w-0 flex-col justify-center gap-2 md:gap-2.5">
    <LightGridSvg :id="`ad-${section.ref}`" class="absolute inset-0 -z-10 opacity-70" />

    <div class="grid w-full min-w-0 grid-cols-1 items-center gap-3 lg:grid-cols-12">
      <Motion
        :initial="{ opacity: 0, y: 20, rotate: -2 }"
        :animate="{ opacity: 1, y: 0, rotate: 0 }"
        :transition="t(0)"
        class="mx-auto w-full min-w-0 max-w-[300px] lg:col-span-4 2xl:max-w-[340px]"
      >
        <div class="relative w-full overflow-hidden rounded-[1.75rem] border-2 border-gm-ink bg-white shadow-[0_18px_40px_rgba(26,28,28,0.16)]">
          <span class="pointer-events-none absolute -left-8 top-1/3 size-32 rounded-full bg-gm-primary/10 blur-2xl" aria-hidden="true" />
          <div class="relative flex flex-col items-center gap-1 border-b-2 border-gm-line bg-gm-panel px-2 pb-1.5 pt-2">
            <span class="h-1.5 w-16 shrink-0 rounded-full bg-gm-ink" aria-hidden="true" />
            <span class="flex w-full min-w-0 items-center justify-start gap-1 rounded-full bg-white px-2 py-0.5 text-left">
              <Icon name="lucide:sprout" class="size-3.5 shrink-0 text-gm-primary" />
              <span class="truncate text-base font-semibold text-gm-ink">{{ app.title }} • GrowMate App</span>
            </span>
          </div>
          <div class="relative p-1.5">
            <img
              :src="app.src"
              :alt="app.alt"
              class="max-h-[380px] w-full object-contain 2xl:max-h-[470px]"
              draggable="false"
            />
          </div>
        </div>
      </Motion>

      <div class="flex w-full min-w-0 flex-col gap-2 lg:col-span-8">
        <Motion :initial="{ opacity: 0, y: 16 }" :animate="{ opacity: 1, y: 0 }" :transition="t(1)">
          <p class="text-left text-base leading-relaxed text-gm-ink md:text-lg">{{ app.lead }}</p>
        </Motion>

        <Motion :initial="{ opacity: 0, y: 16 }" :animate="{ opacity: 1, y: 0 }" :transition="t(2)">
          <div class="grid w-full grid-cols-1 gap-1.5 sm:grid-cols-2">
            <div
              v-for="s in app.sees"
              :key="s.k"
              class="rounded-xl border-2 border-gm-line bg-white p-2.5 text-left"
            >
              <span class="flex items-center gap-1.5 font-headline text-base font-extrabold leading-tight text-gm-primary">
                <Icon name="lucide:mouse-pointer-click" class="size-4 shrink-0" />{{ s.k }}
              </span>
              <span class="mt-1 block text-base leading-snug text-gm-muted">{{ s.v }}</span>
            </div>
          </div>
        </Motion>

        <Motion :initial="{ opacity: 0, y: 14 }" :animate="{ opacity: 1, y: 0 }" :transition="t(3)">
          <div class="flex flex-wrap items-center gap-1.5">
            <span
              v-for="c in app.chips"
              :key="c"
              class="rounded-full border-2 border-gm-line bg-gm-mist px-3 py-1 font-headline text-base font-extrabold text-gm-primary"
            >{{ c }}</span>
          </div>
        </Motion>
      </div>
    </div>
  </div>
</template>
