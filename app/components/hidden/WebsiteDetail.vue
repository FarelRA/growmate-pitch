<script setup lang="ts">
import { Motion } from 'motion-v'
import type { HiddenSection } from '~/data/hidden'
import { WEBSITE } from '~/data/hidden'

const props = defineProps<{ section: HiddenSection }>()

const site = computed(() => WEBSITE[props.section.ref]!)

/** Gerak masuk berjenjang, pola sama dengan slide deck. */
const t = (i: number) => ({ type: 'spring', stiffness: 260, damping: 20, delay: 0.06 + i * 0.07 } as const)
</script>

<template>
  <div class="relative flex min-h-full w-full min-w-0 flex-col justify-center gap-2 md:gap-2.5">
    <LightGridSvg :id="`wd-${section.ref}`" class="absolute inset-0 -z-10 opacity-70" />

    <div class="grid w-full min-w-0 grid-cols-1 items-center gap-3 lg:grid-cols-12">
      <!-- Dua bingkai: desktop (peramban) dan mobile (ponsel). -->
      <div class="flex w-full min-w-0 items-center justify-center gap-2 lg:col-span-7">
        <Motion
          :initial="{ opacity: 0, y: 20, rotate: -1 }"
          :animate="{ opacity: 1, y: 0, rotate: 0 }"
          :transition="t(0)"
          class="min-w-0 flex-[3]"
        >
          <div class="w-full overflow-hidden rounded-2xl border-2 border-gm-line bg-white shadow-[0_14px_34px_rgba(26,28,28,0.12)]">
            <div class="flex items-center gap-1.5 border-b-2 border-gm-line bg-gm-panel px-2.5 py-1.5">
              <span class="flex shrink-0 items-center gap-1" aria-hidden="true">
                <span class="size-2 rounded-full bg-gm-amber" />
                <span class="size-2 rounded-full bg-gm-primary/60" />
                <span class="size-2 rounded-full bg-gm-line" />
              </span>
              <span class="flex min-w-0 flex-1 items-center justify-start gap-1 rounded-full bg-white px-2 py-0.5 text-left">
                <Icon name="lucide:lock" class="size-3.5 shrink-0 text-gm-primary" />
                <span class="truncate text-base font-semibold text-gm-ink">{{ site.url }}</span>
              </span>
            </div>
            <div class="p-1.5">
              <img
                :src="site.desktop.src"
                :alt="site.desktop.alt"
                class="block w-full rounded-lg object-cover"
                style="aspect-ratio: 16 / 10"
                draggable="false"
              />
            </div>
          </div>
        </Motion>

        <Motion
          :initial="{ opacity: 0, y: 24, rotate: 2 }"
          :animate="{ opacity: 1, y: 0, rotate: 0 }"
          :transition="t(1)"
          class="w-[132px] shrink-0 md:w-[150px] 2xl:w-[172px]"
        >
          <div class="w-full overflow-hidden rounded-[1.5rem] border-2 border-gm-ink bg-white shadow-[0_18px_40px_rgba(26,28,28,0.16)]">
            <div class="flex flex-col items-center gap-1 border-b-2 border-gm-line bg-gm-panel px-2 pb-1.5 pt-2">
              <span class="h-1.5 w-14 shrink-0 rounded-full bg-gm-ink" aria-hidden="true" />
              <span class="flex w-full min-w-0 items-center justify-start gap-1 rounded-full bg-white px-2 py-0.5 text-left">
                <Icon name="lucide:lock" class="size-3 shrink-0 text-gm-primary" />
                <span class="truncate text-base font-semibold text-gm-ink">{{ site.url }}</span>
              </span>
            </div>
            <div class="p-1.5">
              <img
                :src="site.mobile.src"
                :alt="site.mobile.alt"
                class="block w-full rounded-lg object-cover"
                style="aspect-ratio: 9 / 16"
                draggable="false"
              />
            </div>
          </div>
        </Motion>
      </div>

      <!-- Uraian bagian demi bagian. -->
      <div class="flex w-full min-w-0 flex-col gap-2 lg:col-span-5">
        <Motion :initial="{ opacity: 0, y: 16 }" :animate="{ opacity: 1, y: 0 }" :transition="t(2)">
          <p class="text-left text-base leading-relaxed text-gm-ink">{{ site.lead }}</p>
        </Motion>

        <Motion :initial="{ opacity: 0, y: 16 }" :animate="{ opacity: 1, y: 0 }" :transition="t(3)">
          <div class="grid w-full grid-cols-1 gap-1.5">
            <div
              v-for="s in site.sees"
              :key="s.k"
              class="rounded-xl border-2 border-gm-line bg-white p-2.5 text-left"
            >
              <span class="flex items-center gap-1.5 font-headline text-base font-extrabold leading-tight text-gm-primary">
                <Icon name="lucide:monitor-smartphone" class="size-4 shrink-0" />{{ s.k }}
              </span>
              <span class="mt-1 block text-base leading-snug text-gm-muted">{{ s.v }}</span>
            </div>
          </div>
        </Motion>

        <Motion :initial="{ opacity: 0, y: 14 }" :animate="{ opacity: 1, y: 0 }" :transition="t(4)">
          <div class="flex flex-wrap items-center gap-1.5">
            <span
              v-for="c in site.chips"
              :key="c"
              class="rounded-full border-2 border-gm-line bg-gm-mist px-3 py-1 font-headline text-base font-extrabold text-gm-primary"
            >{{ c }}</span>
          </div>
        </Motion>
      </div>
    </div>
  </div>
</template>
