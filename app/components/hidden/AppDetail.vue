<script setup lang="ts">
import type { HiddenSection } from '~/data/hidden'
import { APPS } from '~/data/hidden'

const props = defineProps<{ section: HiddenSection }>()

const app = computed(() => APPS[props.section.ref]!)
</script>

<template>
  <div class="flex min-h-full w-full min-w-0 flex-col justify-center gap-2 md:gap-2.5">
    <div class="grid w-full min-w-0 grid-cols-1 items-center gap-3 lg:grid-cols-12">
      <div class="mx-auto w-full min-w-0 max-w-[300px] lg:col-span-4 2xl:max-w-[340px]">
        <div class="w-full overflow-hidden rounded-[1.75rem] border-2 border-gm-ink bg-white">
          <div class="flex flex-col items-center gap-1 border-b-2 border-gm-line bg-gm-panel px-2 pb-1.5 pt-2">
            <span class="h-1.5 w-16 shrink-0 rounded-full bg-gm-ink" aria-hidden="true" />
            <span class="flex w-full min-w-0 items-center justify-start gap-1 rounded-full bg-white px-2 py-0.5 text-left">
              <Icon name="lucide:sprout" class="size-3.5 shrink-0 text-gm-primary" />
              <span class="truncate text-base font-semibold text-gm-ink">{{ app.title }} • GrowMate App</span>
            </span>
          </div>
          <div class="p-1.5">
            <img
              :src="app.src"
              :alt="app.alt"
              class="max-h-[380px] w-full object-contain 2xl:max-h-[470px]"
              draggable="false"
            />
          </div>
        </div>
      </div>

      <div class="flex w-full min-w-0 flex-col gap-2 lg:col-span-8">
        <p class="text-left text-base leading-relaxed text-gm-ink md:text-lg">{{ app.lead }}</p>

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

        <div class="flex flex-wrap items-center gap-1.5">
          <span
            v-for="c in app.chips"
            :key="c"
            class="rounded-full border-2 border-gm-line bg-gm-mist px-3 py-1 font-headline text-base font-extrabold text-gm-primary"
          >{{ c }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
