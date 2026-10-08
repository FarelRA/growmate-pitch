<script setup lang="ts">
import gsap from 'gsap'

// Fakta singkat tentang situs. Foto desktop asli sudah tersedia,
// bingkai mobile masih berupa slot sampai aset mentah dipasok.
const facts = [
  { icon: 'lucide:layout-grid', text: 'Katalog Pods, Tech, dan Floral Assistant tersusun rapi per kategori.' },
  { icon: 'lucide:radio', text: 'Demo live Flora AI terbuka langsung dari beranda situs.' },
  { icon: 'lucide:shopping-bag', text: 'Tautan Shopee dan WhatsApp tersedia di setiap halaman.' },
]

const root = ref<HTMLElement | null>(null)
let ctx: gsap.Context | null = null

onMounted(() => {
  ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
    tl.fromTo('.situs-frame', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.08 }, 0.1)
      .fromTo('.situs-fact', { opacity: 0, x: 8 }, { opacity: 1, x: 0, duration: 0.35, stagger: 0.08 }, 0.25)
      .fromTo('.situs-banner', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.45 }, 0.45)
  }, root.value ?? undefined)
})
onUnmounted(() => ctx?.revert())
</script>

<template>
  <DeckShell section="situs">
    <div ref="root" class="flex min-h-full w-full flex-col justify-center gap-2">
      <div class="flex w-full items-center justify-center gap-3">
        <Reveal :delay="0.1" class="w-full min-w-0 max-w-[560px]">
          <div class="situs-frame w-full overflow-hidden rounded-3xl border-2 border-gm-line bg-white">
            <div class="flex items-center gap-1.5 border-b-2 border-gm-line bg-gm-panel px-2.5 py-1.5">
              <span class="flex shrink-0 items-center gap-1" aria-hidden="true">
                <span class="size-2.5 rounded-full bg-gm-amber" />
                <span class="size-2.5 rounded-full bg-gm-primary/60" />
                <span class="size-2.5 rounded-full bg-gm-line" />
              </span>
              <span class="flex min-w-0 flex-1 items-center justify-start gap-1 rounded-full bg-white px-2.5 py-1 text-left">
                <Icon name="lucide:lock" class="size-4 shrink-0 text-gm-primary" />
                <span class="truncate text-base font-semibold text-gm-ink">growmate.bond</span>
              </span>
            </div>
            <div class="p-1.5">
              <UiPhotoFigure src="/photos/gtm-situs.webp" alt="Beranda situs growmate.bond" ratio="16 / 10" />
            </div>
          </div>
        </Reveal>
        <Reveal :delay="0.2" class="w-[170px] shrink-0 md:w-[190px]">
          <div class="situs-frame w-full overflow-hidden rounded-[1.75rem] border-2 border-gm-ink bg-white">
            <div class="flex flex-col items-center gap-1 border-b-2 border-gm-line bg-gm-panel px-2 pb-1.5 pt-2">
              <span class="h-1.5 w-16 shrink-0 rounded-full bg-gm-ink" aria-hidden="true" />
              <span class="flex w-full min-w-0 items-center justify-start gap-1 rounded-full bg-white px-2 py-0.5 text-left">
                <Icon name="lucide:lock" class="size-3.5 shrink-0 text-gm-primary" />
                <span class="truncate text-base font-semibold text-gm-ink">growmate.bond</span>
              </span>
            </div>
            <div class="p-1.5">
              <UiPhotoFigure src="/photos/gtm-situs-mobile.webp" alt="Tampilan mobile situs growmate.bond" ratio="9 / 16" />
            </div>
          </div>
        </Reveal>
      </div>
      <div class="grid w-full grid-cols-1 gap-1.5 sm:grid-cols-3">
        <Reveal v-for="(f, i) in facts" :key="f.text" :delay="0.25 + i * 0.07" class="situs-fact w-full">
          <span class="flex h-full w-full items-start justify-start gap-2 rounded-2xl border-2 border-gm-line bg-white p-2 text-left">
            <span class="grid size-8 shrink-0 place-items-center rounded-xl bg-gm-mist">
              <Icon :name="f.icon" class="size-4 text-gm-primary" />
            </span>
            <span class="min-w-0 text-base font-medium leading-snug text-gm-ink">{{ f.text }}</span>
          </span>
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
  text-align: left !important;
  align-items: flex-start !important;
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
