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
  <div class="relative overflow-hidden rounded-2xl border-2 border-gm-ink bg-gm-ink p-3 text-left text-white md:p-3.5" style="transform: rotate(1deg)">
    <Icon name="lucide:droplet" class="anim-float pointer-events-none absolute right-10 top-2 size-4 text-sky-300/50" aria-hidden="true" />
    <Icon name="lucide:droplet" class="anim-float pointer-events-none absolute right-4 top-6 size-3 text-emerald-300/50" style="animation-delay: 1.1s" aria-hidden="true" />
    <div class="relative flex items-center justify-start gap-2">
      <span class="grid size-7 shrink-0 place-items-center rounded-lg bg-white/10">
        <Icon name="lucide:timer" class="size-4 text-emerald-300" />
      </span>
      <p class="font-headline text-xs font-bold uppercase tracking-wide text-white/70">Waktu rawat harian</p>
      <span class="ml-auto flex shrink-0 items-center gap-1.5">
        <span class="rounded-full bg-white/10 px-2 py-0.5 font-mono text-[11px] font-bold text-white/70">awal 45</span>
        <Icon name="lucide:arrow-down" class="size-3.5 text-emerald-300" />
        <span class="rounded-full bg-gm-soft/25 px-2 py-0.5 font-mono text-[11px] font-bold text-emerald-300">kini 5</span>
      </span>
    </div>
    <div class="relative mt-1 flex items-end justify-start gap-2.5">
      <span class="font-headline text-5xl font-extrabold leading-none tabular-nums md:text-6xl">{{ rounded }}</span>
      <span class="pb-1 text-xs leading-snug text-white/70 md:text-sm">menit<br />rawat per hari</span>
    </div>
    <div class="relative mt-2 flex items-center justify-start gap-2">
      <Icon name="lucide:droplets" class="size-4 shrink-0 text-sky-300" />
      <div class="h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-white/15">
        <div class="h-full rounded-full bg-sky-300" :style="{ width: `${barPct}%` }" />
      </div>
    </div>
    <p class="relative mt-1.5 text-left text-[11px] leading-snug text-white/60 md:text-xs">Air dan pupuk tepat sasaran tanpa boros.</p>
  </div>
</template>
