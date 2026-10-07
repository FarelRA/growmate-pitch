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
    <div ref="root" class="w-full">
      <DeckSplitPanel>
        <template #primary>
          <div class="relative w-full pl-6 lg:pl-0">
            <span aria-hidden="true" class="absolute bottom-2 left-2 top-2 border-l-2 border-dashed border-gm-line lg:hidden" />
            <div class="flex w-full flex-col justify-center gap-1 md:gap-1.5">
              <Reveal :delay="0" class="w-full">
                <StpStep
                  letter="S"
                  icon="lucide:users"
                  title="Segmentasi"
                  desc="Tech farmer plus pengembang properti dan perkantoran di DIY. Mereka sibuk, melek teknologi, dan menuntut hasil tanpa repot."
                  variant="segment"
                />
              </Reveal>
              <div aria-hidden="true" class="stp-chev flex items-center justify-start py-0.5 pl-3 md:pl-4">
                <Icon name="lucide:chevrons-down" class="size-4" />
              </div>
              <Reveal :delay="0.1" class="w-full">
                <StpStep
                  letter="T"
                  icon="lucide:crosshair"
                  title="Targeting"
                  desc="Menangkan DIY dahulu dengan layanan purnajual penuh, naik ke 5% SAM, lalu ekspansi nasional bertahap."
                  variant="target"
                />
              </Reveal>
              <div aria-hidden="true" class="stp-chev flex items-center justify-start py-0.5 pl-3 md:pl-4">
                <Icon name="lucide:chevrons-down" class="size-4" />
              </div>
              <Reveal :delay="0.2" class="w-full">
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
          <Reveal class="w-full">
            <UiPhotoFigure src="/photos/stp-stan.webp" alt="Demo stan GrowMate bersama pengunjung" ratio="16 / 10" />
          </Reveal>
          <Reveal :delay="0.3" class="w-full">
            <UiCalloutBanner icon="lucide:flag" tone="brand" class="mt-2 md:mt-2.5">
              Semangat posisi kami: Petani Makmur, Tanpa Lumpur.
            </UiCalloutBanner>
          </Reveal>
        </template>
      </DeckSplitPanel>
    </div>
  </DeckShell>
</template>
