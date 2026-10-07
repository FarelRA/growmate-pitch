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
    <div class="flex w-full max-w-full flex-col gap-2.5">
      <BuktiDuel />
      <DeckSplitPanel>
        <template #primary>
          <Reveal class="flex w-full flex-col">
            <div class="relative flex w-full max-w-full flex-col overflow-hidden rounded-2xl border-2 border-gm-line bg-white p-4 text-left">
              <div class="text-left font-headline text-xl font-extrabold text-gm-ink">
                Hemat lawan rawat manual (%)
              </div>
              <div class="relative mt-2 h-[220px] w-full max-w-full sm:h-[240px] lg:h-[260px]">
                <EffChart />
                <div class="anim-float pointer-events-none absolute left-[12%] top-[2%] flex flex-col items-center" aria-hidden="true">
                  <svg viewBox="0 0 24 30" class="h-7 w-5" aria-hidden="true" focusable="false">
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
          <div class="flex w-full max-w-full flex-col gap-2.5">
            <Reveal :delay="0.1" class="w-full">
              <div class="w-full max-w-full rounded-2xl bg-gm-primary p-4 text-left text-white shadow-md">
                <div class="text-left font-headline text-5xl font-extrabold leading-none md:text-6xl">
                  {{ fromInt }}% ke {{ toInt }}%
                </div>
                <p class="mt-2 text-left text-base leading-snug text-white/90">
                  Kesintasan 60 hari naik 22 poin.
                </p>
              </div>
            </Reveal>
            <Reveal :delay="0.18" class="w-full">
              <div class="grid w-full max-w-full grid-cols-1 gap-2.5 min-[560px]:grid-cols-2">
                <div class="w-full rounded-2xl border border-gm-line bg-white p-4 text-left">
                  <div class="text-left font-headline text-3xl font-extrabold text-gm-ink">60/64</div>
                  <p class="mt-2 text-left text-base leading-snug text-gm-muted">
                    Siap dipasarkan.
                  </p>
                </div>
                <div class="w-full rounded-2xl border border-gm-line bg-white p-4 text-left">
                  <div class="text-left font-headline text-3xl font-extrabold text-gm-ink">43/48</div>
                  <p class="mt-2 text-left text-base leading-snug text-gm-muted">
                    Sangat stabil.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal :delay="0.24" class="w-full">
              <UiCalloutBanner icon="lucide:clipboard-check" tone="amber" class="w-full text-left [&]:justify-start [&_p]:!text-left [&_p]:!text-base">
                Formulir ditandatangani DKPP Kab. Bantul.
              </UiCalloutBanner>
            </Reveal>
            <Reveal :delay="0.3" class="w-full">
              <div class="flex w-full max-w-full flex-wrap gap-2">
                <span class="inline-flex items-center gap-2 rounded-full border border-gm-line bg-white px-4 py-2 text-left text-base leading-snug text-gm-ink">
                  <svg viewBox="0 0 24 24" class="size-6 shrink-0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 3 s6 6.2 6 10.5 a6 6 0 0 1 -12 0 C6 9.2 12 3 12 3z" />
                  </svg>
                  Irigasi presisi
                </span>
                <span class="inline-flex items-center gap-2 rounded-full border border-gm-line bg-white px-4 py-2 text-left text-base leading-snug text-gm-ink">
                  <svg viewBox="0 0 24 24" class="size-6 shrink-0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <rect x="4" y="5" width="16" height="14" rx="2" />
                    <path d="M4 10 h16 M8 15 c1.2 -1 2.3 1 3.5 0 s2.3 1 3.5 0" />
                  </svg>
                  Tangki terpantau
                </span>
                <span class="inline-flex items-center gap-2 rounded-full border border-gm-line bg-white px-4 py-2 text-left text-base leading-snug text-gm-ink">
                  <svg viewBox="0 0 24 24" class="size-6 shrink-0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M9 18 h6 M10 21 h4 M12 3 a6 6 0 0 0 -3.5 10.9 c.8.6 1.5 1.3 1.5 2.1 h4 c0 -.8.7 -1.5 1.5 -2.1 A6 6 0 0 0 12 3z" />
                  </svg>
                  Lampu ikut sensor
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
