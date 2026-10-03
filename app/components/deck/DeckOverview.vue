<script setup lang="ts">
import Lenis from 'lenis'
import { useDeckStore } from '~/stores/deck'
import { SECTIONS, sectionNumber } from '~/data/deck'

const store = useDeckStore()
const scroller = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!scroller.value) return
  const lenis = new Lenis({ wrapper: scroller.value, smoothWheel: true })
  let raf = 0
  const loop = (time: number) => {
    lenis.raf(time)
    raf = requestAnimationFrame(loop)
  }
  raf = requestAnimationFrame(loop)
  onUnmounted(() => {
    cancelAnimationFrame(raf)
    lenis.destroy()
  })
})
</script>

<template>
  <div class="absolute inset-0 z-[60] bg-gm-ink/60 p-[3%] backdrop-blur-sm" @click.self="store.overview = false">
    <div class="mx-auto flex h-full max-w-[1400px] flex-col overflow-hidden rounded-3xl bg-white p-4 md:p-8">
      <div class="mb-4 flex items-center justify-between md:mb-5">
        <h2 class="font-headline text-2xl font-extrabold text-gm-ink md:text-[26px]">Semua slide</h2>
        <button
          aria-label="Tutup ikhtisar"
          class="grid size-11 place-items-center rounded-full bg-gm-panel text-gm-ink transition hover:bg-gm-primary hover:text-white md:size-[52px]"
          @click="store.overview = false"
        >
          <Icon name="lucide:x" class="size-5 md:size-[26px]" />
        </button>
      </div>
      <div ref="scroller" class="nice-scroll grid flex-1 grid-cols-1 gap-3 overflow-y-auto pr-1 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
        <button
          v-for="(s, i) in SECTIONS"
          :key="s.id"
          class="rounded-2xl border-2 p-4 text-left transition hover:-translate-y-1 md:p-5"
          :class="i === store.index ? 'border-gm-primary bg-gm-mist' : 'border-gm-line bg-white hover:border-gm-soft'"
          @click="store.go(i)"
        >
          <div class="font-headline text-xs font-bold uppercase tracking-wide text-gm-primary md:text-[12px]">
            {{ sectionNumber(i) }} • {{ s.kicker }}
          </div>
          <div class="mt-1 font-headline text-lg font-extrabold leading-tight text-gm-ink md:text-[18px]">{{ s.title }}</div>
        </button>
      </div>
    </div>
  </div>
</template>
