<script setup lang="ts">
import { useTransition } from '@vueuse/core'

const reduced = usePreferredReducedMotion()
const countDur = reduced.value === 'reduce' ? 0 : 1200
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

const src = ref(45)
const shown = useTransition(src, { duration: countDur, easing: easeOut })
const rounded = computed(() => Math.round(shown.value))
const barPct = computed(() => Math.max(9, Math.min(100, (shown.value / 45) * 100)))

onMounted(() => {
  window.setTimeout(() => {
    src.value = 5
  }, 260)
})
</script>

<template>
  <div class="relative overflow-hidden rounded-2xl border-2 border-gm-ink bg-gm-ink p-4 text-left text-white" style="transform: rotate(1deg)">
    <Icon name="lucide:droplet" class="anim-float pointer-events-none absolute right-10 top-2 size-6 text-sky-300/50" aria-hidden="true" />
    <Icon name="lucide:droplet" class="anim-float pointer-events-none absolute right-4 top-6 size-5 text-emerald-300/50" style="animation-delay: 1.1s" aria-hidden="true" />
    <div class="relative flex items-center justify-start gap-2.5">
      <span class="grid size-11 shrink-0 place-items-center rounded-xl bg-white/10 lg:size-12">
        <Icon name="lucide:timer" class="size-6 text-emerald-300 lg:size-7" />
      </span>
      <p class="font-headline text-base font-bold uppercase tracking-wide text-white/70">Waktu rawat harian</p>
      <span class="ml-auto flex shrink-0 items-center gap-1.5">
        <span class="rounded-full bg-white/10 px-2.5 py-1 font-mono text-base font-bold text-white/70">awal 45</span>
        <Icon name="lucide:arrow-down" class="size-5 text-emerald-300" />
        <span class="rounded-full bg-gm-soft/25 px-2.5 py-1 font-mono text-base font-bold text-emerald-300">kini 5</span>
      </span>
    </div>
    <div class="relative mt-2 flex items-end justify-start gap-3">
      <span class="font-headline text-6xl font-extrabold leading-none tabular-nums 2xl:text-7xl">{{ rounded }}</span>
      <span class="pb-1 text-base leading-snug text-white/70">menit<br />rawat per hari</span>
    </div>
    <div class="relative mt-2 flex items-center justify-start gap-2.5">
      <Icon name="lucide:droplets" class="size-6 shrink-0 text-sky-300" />
      <div class="h-2.5 min-w-0 flex-1 overflow-hidden rounded-full bg-white/15">
        <div class="h-full rounded-full bg-sky-300" :style="{ width: `${barPct}%` }" />
      </div>
    </div>
    <p class="relative mt-2 text-left text-base leading-snug text-white/60">Air dan pupuk tepat sasaran.</p>
  </div>
</template>
