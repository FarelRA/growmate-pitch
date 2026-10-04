<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useTransition } from '@vueuse/core'

const fromBase = ref(0)
const toBase = ref(72)
const fromShown = useTransition(fromBase, { duration: 1300, transition: [0.33, 1, 0.68, 1] })
const toShown = useTransition(toBase, { duration: 1300, transition: [0.33, 1, 0.68, 1] })
const fromInt = computed(() => Math.round(fromShown.value))
const toInt = computed(() => Math.round(toShown.value))

onMounted(() => {
  fromBase.value = 72
  toBase.value = 94
})
</script>

<template>
  <DeckShell section="efektivitas">
    <div class="flex w-full max-w-full flex-col gap-2 md:gap-2.5">
      <BuktiDuel />
      <DeckSplitPanel>
        <template #primary>
          <Reveal class="flex w-full flex-col">
            <div class="relative flex w-full max-w-full flex-col overflow-hidden rounded-3xl border-2 border-gm-line bg-white p-3 text-left md:p-4">
              <div class="text-left font-headline text-base font-extrabold text-gm-ink md:text-lg">
                Penghematan lawan rawat manual (%)
              </div>
              <div class="relative mt-2 aspect-[16/10] min-h-60 w-full max-w-full sm:aspect-[16/8] lg:aspect-[16/7]">
                <EffChart />
                <div class="anim-float pointer-events-none absolute left-[12%] top-[2%] flex flex-col items-center" aria-hidden="true">
                  <svg viewBox="0 0 24 30" class="h-5 w-4" aria-hidden="true" focusable="false">
                    <path
                      d="M12 2 c4.5 5.5 7 9 7 13 a7 7 0 0 1 -14 0 c0 -4 2.5 -7.5 7 -13z"
                      fill="#2aa7de"
                      stroke="#157aa5"
                      stroke-width="1.5"
                    />
                    <ellipse cx="9.5" cy="15.5" rx="2" ry="3" fill="#ffffff" opacity="0.85" />
                  </svg>
                </div>
              </div>
            </div>
          </Reveal>
        </template>
        <template #secondary>
          <div class="flex w-full max-w-full flex-col gap-2 md:gap-2.5">
            <Reveal :delay="0.1" class="w-full">
              <div class="w-full max-w-full rounded-2xl bg-gm-primary p-3 text-white shadow-md md:p-4">
                <div class="text-center font-headline text-3xl font-extrabold leading-none md:text-4xl">
                  {{ fromInt }}% ke {{ toInt }}%
                </div>
                <p class="mt-1.5 text-left text-xs leading-snug text-white/90 md:text-sm">
                  Kesintasan 60 hari naik 22 poin.
                </p>
              </div>
            </Reveal>
            <Reveal :delay="0.18" class="w-full">
              <div class="grid w-full max-w-full grid-cols-1 gap-2 min-[560px]:grid-cols-2">
                <div class="w-full rounded-2xl border border-gm-line bg-white p-2.5">
                  <div class="text-center font-headline text-xl font-extrabold text-gm-ink">60/64</div>
                  <p class="mt-1 text-left text-[11px] leading-snug text-gm-muted md:text-xs">
                    Sangat baik dan siap dipasarkan.
                  </p>
                </div>
                <div class="w-full rounded-2xl border border-gm-line bg-white p-2.5">
                  <div class="text-center font-headline text-xl font-extrabold text-gm-ink">43/48</div>
                  <p class="mt-1 text-left text-[11px] leading-snug text-gm-muted md:text-xs">
                    Sangat layak dan sangat stabil.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal :delay="0.24" class="w-full">
              <UiCalloutBanner icon="lucide:clipboard-check" tone="amber" class="w-full">
                Formulir ditandatangani DKPP Kab. Bantul.
              </UiCalloutBanner>
            </Reveal>
            <Reveal :delay="0.3" class="w-full">
              <div class="flex w-full max-w-full flex-wrap gap-1.5">
                <span class="inline-flex items-center gap-1.5 rounded-full border border-gm-line bg-white px-2.5 py-1 text-left text-[11px] leading-snug text-gm-ink md:text-xs">
                  <svg viewBox="0 0 24 24" class="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 3 s6 6.2 6 10.5 a6 6 0 0 1 -12 0 C6 9.2 12 3 12 3z" />
                  </svg>
                  Irigasi ambang presisi.
                </span>
                <span class="inline-flex items-center gap-1.5 rounded-full border border-gm-line bg-white px-2.5 py-1 text-left text-[11px] leading-snug text-gm-ink md:text-xs">
                  <svg viewBox="0 0 24 24" class="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <rect x="4" y="5" width="16" height="14" rx="2" />
                    <path d="M4 10 h16 M8 15 c1.2 -1 2.3 1 3.5 0 s2.3 1 3.5 0" />
                  </svg>
                  Tangki terpantau kontinu.
                </span>
                <span class="inline-flex items-center gap-1.5 rounded-full border border-gm-line bg-white px-2.5 py-1 text-left text-[11px] leading-snug text-gm-ink md:text-xs">
                  <svg viewBox="0 0 24 24" class="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M9 18 h6 M10 21 h4 M12 3 a6 6 0 0 0 -3.5 10.9 c.8.6 1.5 1.3 1.5 2.1 h4 c0 -.8.7 -1.5 1.5 -2.1 A6 6 0 0 0 12 3z" />
                  </svg>
                  Lampu 5 sampai 8 jam mengikuti sensor.
                </span>
              </div>
            </Reveal>
          </div>
        </template>
      </DeckSplitPanel>
    </div>
  </DeckShell>
</template>

<style scoped>
@keyframes bukti-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}
.anim-float {
  animation: bukti-float 2.4s ease-in-out infinite;
}
</style>
