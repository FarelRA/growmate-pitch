<script setup lang="ts">
import gsap from 'gsap'
import { useTransition } from '@vueuse/core'

const photos = [
  {
    src: '/photos/gt-mulyo.webp',
    alt: 'Penandatanganan konsinyasi Mulyo Tani',
    no: '1',
    title: 'Konsinyasi Mulyo Tani',
    desc: 'alat dan sarana tani di Bantul',
  },
  {
    src: '/photos/gt-expo.webp',
    alt: 'Stan GrowMate di Bantul Creative Expo',
    no: '2',
    title: 'Stan Bantul Creative Expo',
    desc: 'pameran dan demo live',
  },
]

const root = ref<HTMLElement | null>(null)
let ctx: gsap.Context | null = null

const nKanal = ref(0)
const nRitel = ref(0)
const nAgenda = ref(0)
const tKanal = useTransition(nKanal, { duration: 1200 })
const tRitel = useTransition(nRitel, { duration: 1200 })
const tAgenda = useTransition(nAgenda, { duration: 1200 })
const cKanal = computed(() => Math.round(tKanal.value))
const cRitel = computed(() => Math.round(tRitel.value))
const cAgenda = computed(() => Math.round(tAgenda.value))

onMounted(() => {
  nKanal.value = 5
  nRitel.value = 2
  nAgenda.value = 2
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
    tl.fromTo('.gtm-orbit-node', { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.35, stagger: 0.08 }, 0)
      .fromTo('.gtm-thread', { opacity: 0 }, { opacity: 1, duration: 0.5 }, 0.25)
      .fromTo('.gtm-pin', { scale: 0, opacity: 0, transformOrigin: '50% 100%' }, { scale: 1, opacity: 1, duration: 0.4, stagger: 0.12 }, 0.4)
      .fromTo('.gtm-banner', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.45 }, 0.55)
      .fromTo('.gtm-banner', { boxShadow: '0 0 0 0 rgba(183, 121, 31, 0)' }, { boxShadow: '0 0 0 6px rgba(183, 121, 31, 0.35)', duration: 0.32, yoyo: true, repeat: 1 }, 1.0)
    gsap.fromTo('.gtm-pulse', { opacity: 0 }, { opacity: 1, duration: 0.4, delay: 0.7 })
    if (!reduce) {
      gsap.to('.gtm-pulse', { y: 10, duration: 0.9, ease: 'sine.inOut', yoyo: true, repeat: -1, stagger: 0.25, delay: 1 })
      gsap.fromTo('.gtm-ring', { scale: 0.65, opacity: 0.8, transformOrigin: '50% 50%' }, { scale: 1.5, opacity: 0, duration: 1.8, ease: 'sine.out', repeat: -1, stagger: 0.6 })
      gsap.to('.gtm-shimmer', { opacity: 0.15, duration: 1.2, ease: 'sine.inOut', yoyo: true, repeat: -1, stagger: 0.4 })
    }
  }, root.value ?? undefined)
})
onUnmounted(() => ctx?.revert())
</script>

<template>
  <DeckShell section="pemasaran">
    <div ref="root" class="w-full">
      <DeckSplitPanel>
        <template #primary>
          <div class="flex w-full flex-col justify-center gap-2 text-left md:gap-2.5">
            <GtmOrbit />
            <GtmMap :kanal="cKanal" :ritel="cRitel" :agenda="cAgenda" />
          </div>
        </template>
        <template #secondary>
          <div class="flex w-full flex-col justify-center text-left">
            <div class="grid w-full grid-cols-2 gap-2 md:gap-2.5">
              <Reveal v-for="(p, i) in photos" :key="p.src" :delay="0.15 + i * 0.1" class="w-full">
                <div class="flex w-full flex-col items-center">
                  <span class="h-3 w-px bg-gm-line" aria-hidden="true" />
                  <figure class="relative w-full rounded-2xl border-2 border-gm-line bg-white p-1.5 text-left shadow-sm">
                    <span class="absolute -top-2 left-1/2 z-10 size-3 -translate-x-1/2 rounded-full bg-gm-amber ring-2 ring-white" aria-hidden="true" />
                    <span class="absolute -left-2 -top-2 z-10 grid size-6 place-items-center rounded-full bg-gm-ink font-headline text-xs font-extrabold text-white" aria-hidden="true">{{ p.no }}</span>
                    <img :src="p.src" :alt="p.alt" class="aspect-[4/3] w-full rounded-xl object-cover" loading="lazy" decoding="async" draggable="false" />
                    <figcaption class="px-1 pb-1 pt-1.5">
                      <span class="block text-[11px] font-extrabold leading-snug text-gm-ink md:text-xs">{{ p.title }}</span>
                      <span class="block text-[11px] leading-snug text-gm-muted">{{ p.desc }}</span>
                    </figcaption>
                  </figure>
                </div>
              </Reveal>
            </div>
            <div class="gtm-banner mt-2 w-full md:mt-2.5">
              <Reveal :delay="0.35" class="w-full">
                <UiCalloutBanner icon="lucide:qr-code" tone="brand">
                  Katalog dan demo live selalu terbuka di growmate.bond.
                </UiCalloutBanner>
              </Reveal>
            </div>
          </div>
        </template>
      </DeckSplitPanel>
    </div>
  </DeckShell>
</template>
