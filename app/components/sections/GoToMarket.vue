<script setup lang="ts">
import gsap from 'gsap'
import { useTransition } from '@vueuse/core'

// Bingkai tangkapan layar per kanal. Ganti UiPhotoSlot dengan foto asli saat aset tersedia.
const phones = [
  { icon: 'lucide:instagram', label: 'Instagram @grow.mateai', spec: 'Tangkapan feed Instagram grow.mateai, 9/16', src: '', alt: '' },
  { icon: 'lucide:message-circle', label: 'WhatsApp +62 877-8445-4555', spec: 'Tangkapan chat WhatsApp konsultasi, 9/16', src: '', alt: '' },
  { icon: 'lucide:music-2', label: 'TikTok @growmate.41', spec: 'Tangkapan profil TikTok growmate.41, 9/16', src: '/photos/gtm-tiktok.webp', alt: 'Profil TikTok GrowMate' },
  { icon: 'lucide:shopping-bag', label: 'Shopee grow_mate', spec: 'Tangkapan etalase Shopee grow_mate, 9/16', src: '', alt: '' },
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
    <div ref="root" class="w-full">
      <DeckSplitPanel>
        <template #primary>
          <div class="flex w-full flex-col justify-center gap-2 text-left md:gap-2.5">
            <GtmOrbit />
            <div class="grid w-full grid-cols-4 gap-2 md:gap-2.5">
              <Reveal v-for="(p, i) in phones" :key="p.label" :delay="0.15 + i * 0.07" class="w-full">
                <UiPhotoFigure v-if="p.src" :src="p.src" :alt="p.alt" ratio="9 / 16" class="gtm-frame slot-tight" />
                <UiPhotoSlot v-else ratio="9 / 16" :label="p.label" :spec="p.spec" :icon="p.icon" class="gtm-frame slot-tight" />
              </Reveal>
            </div>
            <p class="flex items-center justify-start gap-1.5 text-left text-[11px] font-semibold text-gm-muted md:text-xs">
              <span class="gtm-kanal-dot size-1.5 shrink-0 rounded-full bg-gm-amber" aria-hidden="true" />
              <span><span class="font-headline font-extrabold tabular-nums text-gm-ink">{{ cKanal }}</span> kanal digital aktif dalam satu alur penemuan.</span>
            </p>
          </div>
        </template>
        <template #secondary>
          <div class="flex w-full flex-col justify-center text-left">
            <Reveal :delay="0.2" class="w-full">
              <UiPhotoFigure src="/photos/gtm-situs.webp" alt="Beranda situs growmate.bond" ratio="16 / 10" class="gtm-frame" />
            </Reveal>
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

<style scoped>
:deep(.slot-tight) {
  padding: 0.375rem;
  gap: 0.125rem;
  border-radius: 0.75rem;
}
:deep(.slot-tight p) {
  line-height: 1.25;
}
</style>
