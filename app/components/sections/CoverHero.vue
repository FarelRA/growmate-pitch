<script setup lang="ts">
import { Motion } from 'motion-v'
import CoverGridSvg from '~/components/decor/CoverGridSvg.vue'

const reduced = usePreferredReducedMotion()
const noMotion = computed(() => reduced.value === 'reduce')
const t = (delay: number, duration: number) => ({ delay: noMotion.value ? 0 : delay, duration: noMotion.value ? 0 : duration, ease: [0.22, 1, 0.36, 1] })

const COUNT_MS = 1400
const countDuration = reduced.value === 'reduce' ? 0 : COUNT_MS

const airSrc = ref(0)
const liveSrc = ref(72)
const roiSrc = ref(0)
const timeSrc = ref(0)

const airVal = useTransition(airSrc, { duration: countDuration })
const liveVal = useTransition(liveSrc, { duration: countDuration })
const roiVal = useTransition(roiSrc, { duration: countDuration })
const timeVal = useTransition(timeSrc, { duration: countDuration })

const airText = computed(() => `${airVal.value.toFixed(1).replace('.', ',')}%`)
const liveText = computed(() => `72 ke ${Math.round(liveVal.value)}%`)
const roiText = computed(() => `${Math.round(roiVal.value)}%`)
const timeText = computed(() => `${timeVal.value.toFixed(1).replace('.', ',')}%`)

onMounted(() => {
  airSrc.value = 42.8
  liveSrc.value = 94
  roiSrc.value = 373
  timeSrc.value = 88.9
})
</script>

<template>
  <DeckBare>
    <DeckSplitPanel class="cover-split">
      <template #primary>
        <div class="relative w-full min-w-0 overflow-x-clip rounded-[2rem] bg-gm-ink p-6 text-left md:p-8">
          <CoverGridSvg />
          <div class="relative flex w-full min-w-0 flex-col">
            <Motion :initial="{ opacity: 0 }" :animate="{ opacity: 1 }" :transition="t(0, 0.5)">
              <div class="flex w-full min-w-0 flex-wrap items-center gap-2">
                <span class="anim-pulse-dot inline-block size-2.5 shrink-0 rounded-full bg-gm-soft" aria-hidden="true" />
                <span class="rounded-full bg-white/10 px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-white">Live</span>
                <span class="min-w-0 font-mono text-[11px] tracking-wide text-white/70">Sistem aktif memantau 6 titik sensor</span>
              </div>
            </Motion>

            <Motion :initial="{ opacity: 0, y: 18, filter: 'blur(6px)' }" :animate="{ opacity: 1, y: 0, filter: 'blur(0px)' }" :transition="t(0.08, 0.55)">
              <h1 class="text-display mt-3 font-headline font-extrabold tracking-tight text-white">
                <div class="flex flex-wrap gap-x-[0.28em]">
                  <Motion :initial="{ opacity: 0, y: 16, filter: 'blur(6px)' }" :animate="{ opacity: 1, y: 0, filter: 'blur(0px)' }" :transition="t(0.08, 0.5)" class="inline-block">Petani</Motion>
                  <Motion :initial="{ opacity: 0, y: 16, filter: 'blur(6px)' }" :animate="{ opacity: 1, y: 0, filter: 'blur(0px)' }" :transition="t(0.16, 0.5)" class="inline-block">Makmur,</Motion>
                </div>
                <div class="flex flex-wrap gap-x-[0.28em] text-gm-soft">
                  <Motion :initial="{ opacity: 0, y: 16, filter: 'blur(6px)' }" :animate="{ opacity: 1, y: 0, filter: 'blur(0px)' }" :transition="t(0.24, 0.5)" class="inline-block">Tanpa</Motion>
                  <Motion :initial="{ opacity: 0, y: 16, filter: 'blur(6px)' }" :animate="{ opacity: 1, y: 0, filter: 'blur(0px)' }" :transition="t(0.32, 0.5)" class="inline-block">Lumpur.</Motion>
                </div>
              </h1>
            </Motion>

            <Motion :initial="{ opacity: 0, y: 14, filter: 'blur(6px)' }" :animate="{ opacity: 1, y: 0, filter: 'blur(0px)' }" :transition="t(0.35, 0.5)">
              <p class="text-lead mt-2 max-w-xl text-white/70">Pertanian presisi AI dan IoT untuk iklim tropis yang terjangkau dan mudah dirawat.</p>
            </Motion>

            <Motion :initial="{ opacity: 0 }" :animate="{ opacity: 1 }" :transition="t(0.4, 0.4)">
              <div class="mt-3 flex w-full min-w-0 flex-wrap items-center gap-2">
                <Motion :initial="{ opacity: 0, scale: 0.8 }" :animate="{ opacity: 1, scale: 1 }" :transition="t(0.4, 0.4)">
                  <UiPillTag icon="lucide:flower-2">Pods indoor</UiPillTag>
                </Motion>
                <Motion :initial="{ opacity: 0, scale: 0.8 }" :animate="{ opacity: 1, scale: 1 }" :transition="t(0.46, 0.4)">
                  <UiPillTag icon="lucide:tractor">Tech lahan luas</UiPillTag>
                </Motion>
                <Motion :initial="{ opacity: 0, scale: 0.8 }" :animate="{ opacity: 1, scale: 1 }" :transition="t(0.52, 0.4)">
                  <UiPillTag icon="lucide:sparkles" tone="amber">Floral Assistant AI</UiPillTag>
                </Motion>
              </div>
            </Motion>

            <Motion :initial="{ opacity: 0 }" :animate="{ opacity: 1 }" :transition="t(0.55, 0.45)">
              <div class="mt-3 flex w-full min-w-0 flex-wrap items-center gap-1.5">
                <span class="rounded-full bg-gm-mist px-3 py-1 font-headline text-xs font-bold text-gm-deep md:text-sm">Farel Reski Aditiya</span>
                <span class="rounded-full bg-gm-mist px-3 py-1 font-headline text-xs font-bold text-gm-deep md:text-sm">Aulia Anindita Primastiti</span>
                <span class="rounded-full bg-gm-mist px-3 py-1 font-headline text-xs font-bold text-gm-deep md:text-sm">SMAN 1 Bantul</span>
              </div>
            </Motion>

            <Motion :initial="{ opacity: 0, y: 14 }" :animate="{ opacity: 1, y: 0 }" :transition="t(0.6, 0.5)" class="hidden lg:block">
              <div class="mt-4 grid w-full grid-cols-4 gap-2">
                <div class="rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 text-left">
                  <div class="font-headline text-lg font-extrabold tabular-nums text-white xl:text-xl">{{ airText }}</div>
                  <div class="mt-0.5 text-[11px] leading-snug text-white/60">hemat air</div>
                </div>
                <div class="rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 text-left">
                  <div class="font-headline text-lg font-extrabold tabular-nums text-white xl:text-xl">{{ liveText }}</div>
                  <div class="mt-0.5 text-[11px] leading-snug text-white/60">kesintasan</div>
                </div>
                <div class="rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 text-left">
                  <div class="font-headline text-lg font-extrabold tabular-nums text-white xl:text-xl">{{ roiText }}</div>
                  <div class="mt-0.5 text-[11px] leading-snug text-white/60">ROI</div>
                </div>
                <div class="rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 text-left">
                  <div class="font-headline text-lg font-extrabold tabular-nums text-white xl:text-xl">{{ timeText }}</div>
                  <div class="mt-0.5 text-[11px] leading-snug text-white/60">hemat waktu rawat</div>
                </div>
              </div>
            </Motion>
          </div>
        </div>
      </template>

      <template #secondary>
        <div class="flex w-full min-w-0 flex-col items-center overflow-x-clip text-left">
          <Motion :initial="{ opacity: 0, x: 60 }" :animate="{ opacity: 1, x: 0 }" :transition="t(0.25, 0.7)" class="flex w-full justify-center">
            <div class="relative w-full max-w-[360px] xl:max-w-[400px]" style="perspective: 1200px;">
              <div class="anim-float absolute inset-0 translate-x-3 translate-y-3 rounded-[1.75rem] bg-gm-mist" aria-hidden="true" />
              <div class="tilt-inner relative overflow-hidden rounded-[1.75rem] shadow-[0_24px_60px_rgba(0,110,28,0.28)]">
                <UiPhotoFigure src="/photos/hero.webp" alt="GrowMate Pods dengan bunga soka di ruang kendali tani" ratio="4 / 5" />
                <div class="absolute inset-x-3 bottom-3 flex max-w-[calc(100%-1.5rem)] flex-col items-start gap-1.5">
                  <Motion :initial="{ opacity: 0, y: 12 }" :animate="{ opacity: 1, y: 0 }" :transition="t(0.55, 0.45)" class="max-w-full">
                    <div class="flex max-w-full items-center gap-1.5 rounded-full bg-white/95 py-1 pl-2 pr-3 shadow-lg backdrop-blur">
                      <Icon name="lucide:droplets" class="size-3.5 shrink-0 text-gm-sky" />
                      <span class="truncate font-headline text-xs font-extrabold text-gm-ink">Tanah 62%</span>
                      <span class="shrink-0 font-mono text-[10px] text-gm-muted">Sensor GPIO13</span>
                    </div>
                  </Motion>
                  <Motion :initial="{ opacity: 0, y: 12 }" :animate="{ opacity: 1, y: 0 }" :transition="t(0.65, 0.45)" class="max-w-full">
                    <div class="flex max-w-full items-start gap-1.5 rounded-full bg-white/95 px-2.5 py-1.5 text-left shadow-lg backdrop-blur">
                      <Icon name="lucide:sparkles" class="mt-0.5 size-3.5 shrink-0 text-gm-primary" />
                      <span class="min-w-0">
                        <span class="block font-headline text-xs font-extrabold leading-tight text-gm-ink">Floral Assistant: Hujan Kanem terbaca.</span>
                        <span class="block font-mono text-[10px] leading-tight text-gm-muted">Tunda siram hari ini.</span>
                      </span>
                    </div>
                  </Motion>
                </div>
              </div>
            </div>
          </Motion>
        </div>
      </template>
    </DeckSplitPanel>

    <div class="mt-3 grid w-full grid-cols-2 gap-2 lg:hidden">
      <div class="rounded-2xl border-2 border-gm-line bg-white px-3 py-2.5 text-left">
        <div class="font-headline text-lg font-extrabold tabular-nums text-gm-ink">{{ airText }}</div>
        <div class="mt-0.5 text-[11px] leading-snug text-gm-muted">hemat air</div>
      </div>
      <div class="rounded-2xl border-2 border-gm-line bg-white px-3 py-2.5 text-left">
        <div class="font-headline text-lg font-extrabold tabular-nums text-gm-ink">{{ liveText }}</div>
        <div class="mt-0.5 text-[11px] leading-snug text-gm-muted">kesintasan</div>
      </div>
      <div class="rounded-2xl border-2 border-gm-line bg-white px-3 py-2.5 text-left">
        <div class="font-headline text-lg font-extrabold tabular-nums text-gm-ink">{{ roiText }}</div>
        <div class="mt-0.5 text-[11px] leading-snug text-gm-muted">ROI</div>
      </div>
      <div class="rounded-2xl border-2 border-gm-line bg-white px-3 py-2.5 text-left">
        <div class="font-headline text-lg font-extrabold tabular-nums text-gm-ink">{{ timeText }}</div>
        <div class="mt-0.5 text-[11px] leading-snug text-gm-muted">hemat waktu rawat</div>
      </div>
    </div>
  </DeckBare>
</template>

<style scoped>
@media (min-width: 1024px) {
  .cover-split {
    grid-template-columns: 55fr 45fr;
  }
}
.tilt-inner {
  transform: rotateY(-6deg);
  transform-style: preserve-3d;
}
</style>
