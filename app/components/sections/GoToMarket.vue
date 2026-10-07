<script setup lang="ts">
import gsap from 'gsap'
import { useTransition } from '@vueuse/core'

// Bingkai tangkapan layar per kanal. Ganti UiPhotoSlot dengan foto asli saat aset tersedia.
const phones = [
  { icon: 'lucide:instagram', label: 'Instagram @grow.mateai', spec: 'Feed Instagram 9/16', src: '', alt: '' },
  { icon: 'lucide:message-circle', label: 'WhatsApp +62 877-8445-4555', spec: 'Chat WhatsApp 9/16', src: '', alt: '' },
  { icon: 'lucide:music-2', label: 'TikTok @growmate.41', spec: 'Profil TikTok 9/16', src: '/photos/gtm-tiktok.webp', alt: 'Profil TikTok GrowMate' },
  { icon: 'lucide:shopping-bag', label: 'Shopee grow_mate', spec: 'Etalase Shopee 9/16', src: '', alt: '' },
]

const root = ref<HTMLElement | null>(null)
let ctx: gsap.Context | null = null

const nKanal = ref(0)
const tKanal = useTransition(nKanal, { duration: 1200 })
const cKanal = computed(() => Math.round(tKanal.value))

onMounted(() => {
  nKanal.value = 5
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
    tl.fromTo('.gtm-orbit-node', { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.35, stagger: 0.08 }, 0)
      .fromTo('.gtm-frame', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.07 }, 0.2)
      .fromTo('.gtm-banner', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.45 }, 0.5)
    if (!reduce) {
      gsap.to('.gtm-kanal-dot', { opacity: 0.35, duration: 0.9, ease: 'sine.inOut', yoyo: true, repeat: -1 })
    }
  }, root.value ?? undefined)
})
onUnmounted(() => ctx?.revert())
</script>

<template>
  <DeckShell section="pemasaran">
    <div ref="root" class="flex min-h-full w-full flex-col justify-center">
      <DeckSplitPanel>
        <template #primary>
          <div class="flex w-full flex-col justify-center gap-1.5 text-left">
            <GtmOrbit />
            <div class="grid w-full max-w-[540px] grid-cols-4 gap-0.5">
              <Reveal v-for="(p, i) in phones" :key="p.label" :delay="0.15 + i * 0.07" class="w-full">
                <UiPhotoFigure v-if="p.src" :src="p.src" :alt="p.alt" ratio="9 / 16" class="gtm-frame" />
                <UiPhotoSlot v-else ratio="9 / 16" :label="p.label" :spec="p.spec" :icon="p.icon" class="gtm-frame slot-tight" />
              </Reveal>
            </div>
            <p class="flex items-center justify-start gap-1.5 text-left text-base font-semibold leading-tight text-gm-muted">
              <span class="gtm-kanal-dot size-2 shrink-0 rounded-full bg-gm-amber" aria-hidden="true" />
              <span><span class="font-headline text-xl font-extrabold tabular-nums text-gm-ink">{{ cKanal }}</span> kanal digital aktif dalam satu alur penemuan.</span>
            </p>
          </div>
        </template>
        <template #secondary>
          <div class="flex w-full flex-col justify-center text-left">
            <Reveal :delay="0.2" class="w-full">
              <UiPhotoFigure src="/photos/gtm-situs.webp" alt="Beranda situs growmate.bond" ratio="16 / 10" class="gtm-frame" />
            </Reveal>
            <div class="gtm-banner mt-1 w-full">
              <Reveal :delay="0.35" class="w-full">
                <UiCalloutBanner icon="lucide:qr-code" tone="brand" class="banner-fix">
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

<style scoped>
:deep(.slot-tight) {
  padding: 0.5rem;
  gap: 0.25rem;
  border-radius: 1rem;
}
:deep(.slot-tight > span:first-child) {
  width: 2.25rem;
  height: 2.25rem;
}
:deep(.slot-tight svg) {
  width: 1.25rem;
  height: 1.25rem;
}
:deep(.slot-tight p) {
  line-height: 1.25;
  font-size: 1rem !important;
  text-align: left !important;
}
:deep(.slot-tight) {
  text-align: left !important;
  align-items: flex-start !important;
}
:deep(.banner-fix) {
  justify-content: flex-start !important;
  text-align: left !important;
  padding: 0.5rem 0.75rem !important;
  gap: 0.5rem !important;
  border-radius: 1rem !important;
}
:deep(.banner-fix p) {
  font-size: 1rem !important;
  line-height: 1.4;
  text-align: left !important;
}
</style>
