<script setup lang="ts">
import gsap from 'gsap'
import { useTransition } from '@vueuse/core'

// Bingkai tangkapan layar per kanal. Ganti UiPhotoSlot dengan foto asli saat aset tersedia.
const phones = [
  { icon: 'lucide:instagram', label: 'Instagram @grow.mateai', spec: 'Feed Instagram 9/16', src: '/images/market/gtm-instagram.webp', alt: 'Profil Instagram GrowMate berisi pengikut dan bio' },
  { icon: 'lucide:message-circle', label: 'WhatsApp +62 877-8445-4555', spec: 'Chat WhatsApp 9/16', src: '/images/market/gtm-whatsapp.webp', alt: 'Profil WhatsApp Business GrowMate berisi katalog' },
  { icon: 'lucide:music-2', label: 'TikTok @growmate.41', spec: 'Profil TikTok 9/16', src: '/images/market/gtm-tiktok.webp', alt: 'Profil TikTok GrowMate' },
  { icon: 'lucide:shopping-bag', label: 'Shopee grow_mate', spec: 'Etalase Shopee 9/16', src: '/images/market/gtm-shopee.webp', alt: 'Toko Shopee GrowMate berisi daftar harga produk' },
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
    <div ref="root" class="flex min-h-full w-full flex-col justify-center gap-1">
      <div class="mx-auto w-full">
        <GtmOrbit />
      </div>
      <div class="mx-auto grid w-full grid-cols-1 gap-1.5 md:grid-cols-[minmax(0,1fr)_400px]">
        <div class="grid min-w-0 grid-cols-2 gap-1.5 sm:grid-cols-4">
          <div v-for="(p, i) in phones" :key="p.label" class="min-w-0">
            <Reveal :delay="0.15 + i * 0.07" class="w-full">
              <UiPhotoFigure v-if="p.src" :src="p.src" :alt="p.alt" ratio="9 / 16" class="gtm-frame" />
              <UiPhotoSlot v-else ratio="9 / 16" :label="p.label" :spec="p.spec" :icon="p.icon" class="gtm-frame slot-tight" />
              <p class="text-left text-base font-semibold leading-tight text-gm-muted">{{ p.label }}</p>
            </Reveal>
          </div>
        </div>
        <div class="flex min-w-0 flex-col justify-start gap-1">
          <Reveal :delay="0.2" class="w-full">
            <div class="w-full rounded-2xl border-2 border-gm-line bg-white p-1 text-left">
              <div class="flex items-center justify-start gap-2 px-0.5 pb-1 text-left">
                <span class="grid size-8 shrink-0 place-items-center rounded-xl bg-gm-mist">
                  <Icon name="lucide:store" class="size-5 text-gm-primary" />
                </span>
                <span class="min-w-0">
                  <span class="block truncate font-headline text-base font-extrabold leading-tight text-gm-ink">Toko konsinyasi mitra</span>
                  <span class="block text-base font-medium leading-snug text-gm-muted">Terjual 11 unit dari dua toko.</span>
                </span>
              </div>
              <div class="grid grid-cols-2 gap-1.5">
                <div class="min-w-0">
                  <UiPhotoFigure src="/images/events/gt-mulyo.webp" alt="Penandatanganan kerja sama konsinyasi di Toko Mulyo Tani" ratio="4 / 3" class="gtm-frame" />
                  <p class="mt-0.5 text-left text-base font-semibold leading-snug text-gm-muted">Mulyo Tani</p>
                </div>
                <div class="min-w-0">
                  <UiPhotoFigure src="/images/market/utama-elektronik.webp" alt="Naskah kesepakatan bertandatangan dengan Utama Elektronik" ratio="4 / 3" class="gtm-frame" />
                  <p class="mt-0.5 text-left text-base font-semibold leading-snug text-gm-muted">Utama Elektronik</p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal :delay="0.27" class="w-full">
            <div class="flex w-full items-center justify-start gap-2 rounded-2xl border-2 border-gm-line bg-white p-1 text-left">
              <div class="w-28 shrink-0">
                <UiPhotoFigure src="/images/events/gt-expo.webp" alt="Pengunjung memadati stan pameran produk di Bantul" ratio="16 / 10" class="gtm-frame" />
              </div>
              <span class="min-w-0">
                <span class="block truncate font-headline text-base font-extrabold leading-tight text-gm-ink">Agenda Bantul</span>
                <span class="block text-base font-medium leading-snug text-gm-muted">Expo dan demo pertanian terlaksana.</span>
              </span>
            </div>
          </Reveal>
          <Reveal :delay="0.32" class="w-full">
            <div class="flex w-full items-center justify-start gap-2 rounded-2xl border-2 border-gm-amber/50 bg-gm-amberbg p-1 text-left">
              <span class="gtm-kanal-dot size-2.5 shrink-0 rounded-full bg-gm-amber" aria-hidden="true" />
              <span class="min-w-0 text-base font-semibold leading-snug text-gm-ink"><span class="font-headline text-xl font-extrabold tabular-nums">{{ cKanal }}</span> kanal daring aktif.</span>
            </div>
          </Reveal>
          <div class="gtm-banner w-full">
            <Reveal :delay="0.35" class="w-full">
              <UiCalloutBanner icon="lucide:qr-code" tone="brand" class="banner-fix">
                Katalog dan demo langsung tersedia di growmate.bond.
              </UiCalloutBanner>
            </Reveal>
          </div>
        </div>
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
  padding: 0.375rem 0.625rem !important;
  gap: 0.5rem !important;
  border-radius: 1rem !important;
}
:deep(.banner-fix p) {
  font-size: 1rem !important;
  line-height: 1.4;
  text-align: left !important;
}
</style>
