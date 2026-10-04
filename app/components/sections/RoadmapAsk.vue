<script setup lang="ts">
import gsap from 'gsap'
import { useTransition } from '@vueuse/core'

const steps = [
  { q: 'Q4 26', title: '3x pilot lahan', desc: 'Cabai dan sayuran daun di lahan mitra. Uji surya dan LTE di lumpur nyata.', icon: 'lucide:sprout' },
  { q: 'Q1 27', title: 'Dataset 50 tanaman', desc: 'Kalibrasi ambang per tanaman dari telemetri pilot. Umumkan papan peringkat.', icon: 'lucide:database' },
  { q: 'Q2 27', title: 'Marketplace kalibrasi', desc: 'Agronomis menjual profil tanaman. Pekebun memasang sekali ketuk.', icon: 'lucide:store' },
  { q: 'Q3 27', title: 'Tech v2 dan Pods v2', desc: 'Sensor arus AC, otonomi tangki lebih lama, Pods di bawah Rp700 rb.', icon: 'lucide:cpu' },
]

const pads = ['pl-0', 'pl-2 md:pl-8', 'pl-4 md:pl-14', 'pl-6 md:pl-20']

const root = ref<HTMLElement | null>(null)
let ctx: gsap.Context | null = null

const aimUnits = ref(0)
const tUnits = useTransition(aimUnits, { duration: 1400 })
const flagText = computed(() => `${Math.round(tUnits.value)}`)

const glOk = ref(true)
onErrorCaptured(() => {
  glOk.value = false
  return false
})

onMounted(() => {
  aimUnits.value = 36
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  ctx = gsap.context(() => {
    gsap.fromTo('.scale-step', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power2.out' })
    gsap.fromTo('.scale-shine', { xPercent: -260 }, { xPercent: 380, duration: 0.9, stagger: 0.15, delay: 0.2, ease: 'power2.inOut' })
    gsap.fromTo('.scale-summit', { y: -14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, ease: 'power2.out' })
    gsap.fromTo('.scale-ticket', { x: 44, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, delay: 0.5, ease: 'power2.out' })
  }, root.value ?? undefined)
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <DeckShell section="scaleup">
    <div ref="root" class="grid w-full max-w-full grid-cols-1 gap-2.5 overflow-x-clip lg:grid-cols-[1.05fr_0.95fr] lg:gap-5">
      <div class="scale-summit order-1 min-w-0 lg:col-start-2">
        <div class="flex w-full items-stretch gap-2">
          <div class="h-32 min-w-0 flex-1 overflow-hidden rounded-2xl md:h-36">
            <ClientOnly>
              <CaseViewer v-if="glOk" />
              <UiPhotoFigure v-else src="/photos/roadmap.webp" alt="Unit Tech di sawah mitra" ratio="21 / 9" />
              <template #fallback>
                <UiPhotoFigure src="/photos/roadmap.webp" alt="Unit Tech di sawah mitra" ratio="21 / 9" />
              </template>
            </ClientOnly>
          </div>
          <div class="flex w-20 shrink-0 flex-col items-start justify-center rounded-2xl border-2 border-gm-amber/60 bg-gm-amberbg p-2 text-left md:w-24 md:p-2.5">
            <Icon name="lucide:flag" class="size-4 text-gm-amber md:size-5" />
            <div class="mt-1 font-headline text-2xl font-extrabold tabular-nums text-gm-ink md:text-3xl">{{ flagText }}</div>
            <div class="text-[11px] font-bold leading-tight text-gm-muted">unit di puncak</div>
          </div>
        </div>
      </div>

      <div class="order-2 min-w-0 lg:order-1 lg:row-span-2">
        <div class="relative w-full max-w-[calc(100vw-2rem)]">
          <span aria-hidden="true" class="absolute bottom-2 left-[7px] top-2 w-0.5 rounded-full bg-gm-line lg:hidden" />
          <div class="flex w-full flex-col gap-1.5">
            <div v-for="(s, i) in steps" :key="s.q" class="w-full max-w-full" :class="pads[i] ?? 'pl-0'">
              <ScaleStep :quarter="s.q" :title="s.title" :desc="s.desc" :icon="s.icon" :index="i" />
            </div>
          </div>
        </div>
      </div>

      <div class="order-3 min-w-0 lg:col-start-2">
        <ScaleTicket />
      </div>
    </div>
  </DeckShell>
</template>
