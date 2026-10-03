<script setup lang="ts">
import { useDeckNav } from '~/composables/useDeckNav'

const stage = ref<HTMLElement | null>(null)
const scroller = ref<HTMLElement | null>(null)
const { store } = useDeckNav(stage, scroller)
</script>

<template>
  <div ref="stage" class="fixed inset-0 flex flex-col overflow-hidden bg-white">
    <main ref="scroller" class="nice-scroll min-h-0 flex-1 overflow-y-auto overscroll-contain">
      <div class="mx-auto flex min-h-full w-full max-w-[1600px] flex-col">
        <slot />
      </div>
    </main>
    <DeckOverview v-if="store.overview" />
  </div>
</template>
