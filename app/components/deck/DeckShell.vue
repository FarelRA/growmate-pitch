<script setup lang="ts">
import { useDeckStore } from '~/stores/deck'
import { SECTIONS, sectionNumber } from '~/data/deck'

const props = defineProps<{ section: string }>()

const store = useDeckStore()
const meta = computed(() => SECTIONS.find(s => s.id === props.section)!)
</script>

<template>
  <section class="mx-auto flex w-full max-w-[1600px] flex-1 flex-col px-4 py-3 sm:px-6 md:px-10 md:py-3">
    <header class="flex items-center justify-between gap-3">
      <div class="flex min-w-0 items-center gap-2.5 md:gap-4">
        <span class="grid size-9 shrink-0 place-items-center overflow-hidden rounded-xl bg-gm-primary md:size-11 md:rounded-2xl">
          <img src="/logo.svg" alt="Logo GrowMate" class="size-full object-cover" draggable="false" />
        </span>
        <span class="font-headline text-sm font-bold uppercase leading-tight tracking-[0.08em] text-gm-primary md:text-lg md:leading-normal">
          {{ sectionNumber(store.index) }} • {{ meta.kicker }}
        </span>
      </div>
      <span class="shrink-0 font-headline text-sm font-bold tabular-nums text-gm-ink/30 md:text-lg">
        {{ sectionNumber(store.index) }} / {{ store.total }}
      </span>
    </header>

    <div class="mt-3 md:mt-4">
      <h1 class="text-display font-headline font-extrabold tracking-tight text-gm-ink">
        {{ meta.title }}
      </h1>
      <p v-if="meta.sub" class="text-lead mt-2 max-w-4xl text-gm-muted md:mt-3">
        {{ meta.sub }}
      </p>
    </div>

    <div class="mx-auto mt-3 grid w-full flex-1 place-items-center md:mt-4">
      <div class="w-full">
        <slot />
      </div>
    </div>
  </section>
</template>
