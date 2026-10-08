<script setup lang="ts">
import gsap from 'gsap'

const root = ref<HTMLElement | null>(null)
let ctx: gsap.Context | null = null

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  ctx = gsap.context(() => {
    gsap.fromTo(
      '.stp-chev',
      { opacity: 0.2, y: -5 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.35, delay: 0.45, ease: 'power2.out' },
    )
    gsap.fromTo(
      '.stp-chev',
      { color: '#c9cfc8' },
      { color: '#006e1c', duration: 0.4, stagger: 0.35, delay: 0.45, ease: 'power1.out' },
    )
  }, root.value ?? undefined)
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <DeckShell section="stp">
    <div ref="root" class="stp-scope flex min-h-full w-full min-w-0 flex-col justify-center overflow-x-clip">
      <DeckSplitPanel>
        <template #primary>
          <div class="relative w-full min-w-0 pl-5 lg:pl-0">
            <span aria-hidden="true" class="absolute bottom-2 left-2 top-2 border-l-2 border-dashed border-gm-line lg:hidden" />
            <div class="flex w-full min-w-0 flex-col justify-center gap-1 md:gap-1.5">
              <Reveal :delay="0" class="w-full min-w-0">
                <StpStep
                  letter="S"
                  icon="lucide:users"
                  title="Segmentasi"
                  desc="Tech farmer, properti dan kantor DIY yang sibuk dan melek teknologi."
                  variant="segment"
                />
              </Reveal>
              <div aria-hidden="true" class="stp-chev flex items-center justify-start py-0.5 pl-4 md:pl-5">
                <Icon name="lucide:chevrons-down" class="size-6" />
              </div>
              <Reveal :delay="0.1" class="w-full min-w-0">
                <StpStep
                  letter="T"
                  icon="lucide:crosshair"
                  title="Targeting"
                  desc="Kuasai DIY dengan purnajual penuh, capai 5% SAM nasional."
                  variant="target"
                />
              </Reveal>
              <div aria-hidden="true" class="stp-chev flex items-center justify-start py-0.5 pl-4 md:pl-5">
                <Icon name="lucide:chevrons-down" class="size-6" />
              </div>
              <Reveal :delay="0.2" class="w-full min-w-0">
                <StpStep
                  letter="P"
                  icon="lucide:flag"
                  title="Positioning"
                  desc="Pelopor smart farming IoT dan AI Agen lokal. Praktis, hijau, terjangkau."
                  variant="position"
                />
              </Reveal>
            </div>
          </div>
        </template>
        <template #secondary>
          <Reveal class="w-full min-w-0">
            <div class="grid w-full grid-cols-2 gap-2">
              <UiPhotoFigure src="/photos/stp-stan.webp" alt="Demo stan GrowMate bersama pengunjung" ratio="1 / 1" />
              <UiPhotoFigure src="/photos/dok-demo.webp" alt="Founder demo unit GrowMate ke pengunjung" ratio="1 / 1" />
            </div>
          </Reveal>
          <Reveal :delay="0.4" class="w-full min-w-0">
            <UiCalloutBanner icon="lucide:flag" tone="brand" class="banner-compact mt-2">
              Semangat posisi kami: Petani Makmur, Tanpa Lumpur.
            </UiCalloutBanner>
          </Reveal>
        </template>
      </DeckSplitPanel>
    </div>
  </DeckShell>
</template>

<style scoped>
:deep(.stp-scope .min-w-0 .font-headline) {
  font-size: 1rem;
  line-height: 1.3;
}
:deep(.stp-scope .min-w-0 p) {
  font-size: 1rem;
  line-height: 1.4;
}
:deep(.stp-scope .min-w-0 span) {
  font-size: 1rem;
}
:deep(.banner-compact) {
  padding: 0.875rem 1.25rem;
  border-radius: 1.25rem;
  gap: 0.75rem;
}
:deep(.banner-compact p) {
  font-size: 1rem;
  line-height: 1.4;
  text-align: left;
}
</style>
