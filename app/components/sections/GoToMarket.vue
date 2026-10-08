<script setup lang="ts">
import gsap from 'gsap'
import { useTransition } from '@vueuse/core'

// Bingkai tangkapan layar per kanal. Ganti UiPhotoSlot dengan foto asli saat aset tersedia.
const phones = [
  { icon: 'lucide:instagram', label: 'Instagram @grow.mateai', cap: 'Instagram', sub: '@grow.mateai', spec: 'Feed Instagram 9/16', src: '', alt: '' },
  { icon: 'lucide:message-circle', label: 'WhatsApp +62 877-8445-4555', cap: 'WhatsApp', sub: '+62 877-8445-4555', spec: 'Chat WhatsApp 9/16', src: '', alt: '' },
  { icon: 'lucide:music-2', label: 'TikTok @growmate.41', cap: 'TikTok', sub: '@growmate.41', spec: 'Profil TikTok 9/16', src: '/photos/gtm-tiktok.webp', alt: 'Profil TikTok GrowMate' },
  { icon: 'lucide:shopping-bag', label: 'Shopee grow_mate', cap: 'Shopee', sub: 'grow_mate', spec: 'Etalase Shopee 9/16', src: '', alt: '' },
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
    <div ref="root" class="flex min-h-full w-full flex-col justify-center gap-2">
      <div class="mx-auto w-full max-w-5xl">
        <GtmOrbit />
      </div>
      <div class="mx-auto grid w-full max-w-5xl grid-cols-4 gap-2">
        <div v-for="(p, i) in phones" :key="p.label" class="min-w-0">
          <Reveal :delay="0.15 + i * 0.07" class="w-full">
            <div class="mx-auto w-full max-w-[150px]">
              <UiPhotoFigure v-if="p.src" :src="p.src" :alt="p.alt" ratio="9 / 16" class="gtm-frame" />
              <UiPhotoSlot v-else ratio="9 / 16" :label="p.label" :spec="p.spec" :icon="p.icon" class="gtm-frame slot-tight" />
            </div>
            <p class="mx-auto mt-1 w-full max-w-[150px] text-left">
              <span class="block truncate text-base font-extrabold leading-tight text-gm-ink">{{ p.cap }}</span>
              <span class="block truncate text-base font-medium leading-tight text-gm-muted">{{ p.sub }}</span>
            </p>
          </Reveal>
        </div>
      </div>
      <div class="mx-auto grid w-full max-w-5xl grid-cols-1 gap-2 md:grid-cols-3">
        <Reveal :delay="0.2" class="w-full">
          <div class="flex h-full w-full items-center justify-start gap-2 rounded-2xl border-2 border-gm-line bg-white p-2 text-left">
            <span class="grid size-8 shrink-0 place-items-center rounded-xl bg-gm-mist">
              <Icon name="lucide:store" class="size-5 text-gm-primary" />
            </span>
            <span class="min-w-0">
              <span class="block truncate font-headline text-base font-extrabold leading-tight text-gm-ink">Ritel mitra</span>
              <span class="block text-base font-medium leading-snug text-gm-muted">Pajang di Matra dan ToolsKu.</span>
            </span>
          </div>
        </Reveal>
        <Reveal :delay="0.27" class="w-full">
          <div class="flex h-full w-full items-center justify-start gap-2 rounded-2xl border-2 border-gm-line bg-white p-2 text-left">
            <span class="grid size-8 shrink-0 place-items-center rounded-xl bg-gm-mist">
              <Icon name="lucide:calendar-check" class="size-5 text-gm-primary" />
            </span>
            <span class="min-w-0">
              <span class="block truncate font-headline text-base font-extrabold leading-tight text-gm-ink">Agenda Bantul</span>
              <span class="block text-base font-medium leading-snug text-gm-muted">Expo dan demo tani terlaksana.</span>
            </span>
          </div>
        </Reveal>
        <Reveal :delay="0.32" class="w-full">
          <div class="flex h-full w-full items-center justify-start gap-2 rounded-2xl border-2 border-gm-amber/50 bg-gm-amberbg p-2 text-left">
            <span class="gtm-kanal-dot size-2.5 shrink-0 rounded-full bg-gm-amber" aria-hidden="true" />
            <span class="min-w-0 text-base font-semibold leading-snug text-gm-ink"><span class="font-headline text-xl font-extrabold tabular-nums">{{ cKanal }}</span> kanal digital aktif.</span>
          </div>
        </Reveal>
      </div>
      <div class="gtm-banner mx-auto w-full max-w-5xl">
        <Reveal :delay="0.35" class="w-full">
          <UiCalloutBanner icon="lucide:qr-code" tone="brand" class="banner-fix">
            Katalog dan demo live selalu terbuka di growmate.bond.
          </UiCalloutBanner>
        </Reveal>
      </div>
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
