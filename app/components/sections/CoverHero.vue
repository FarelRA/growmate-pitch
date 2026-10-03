<script setup lang="ts">
import { Motion } from 'motion-v'

const stats = [
  { value: '−42,8%', label: 'air' },
  { value: '72→94%', label: 'kesintasan' },
  { value: '373%', label: 'ROI' },
  { value: '−88,9%', label: 'waktu rawat' },
]
</script>

<template>
  <DeckBare>
    <DeckSplitPanel>
      <template #primary>
        <div class="flex w-full flex-col items-center text-center">
        <Reveal class="w-full">
          <img src="/logo.svg" alt="Logo GrowMate" class="mx-auto size-20 rounded-2xl object-cover shadow-lg md:size-24" draggable="false" />
        </Reveal>
        <Reveal class="w-full">
          <h2 class="text-display font-headline font-extrabold tracking-tight text-gm-ink">
            Petani Makmur,<br />
            <span class="text-gm-primary">Tanpa Lumpur.</span>
          </h2>
        </Reveal>
        <Reveal :delay="0.1" class="w-full">
          <p class="text-lead mx-auto mt-3 max-w-2xl text-gm-muted md:mt-4">
            Sejahtera tanpa harus berkubang. Pertanian presisi AI + IoT yang disesuaikan untuk iklim tropis dengan harga terjangkau.
          </p>
        </Reveal>
        <Reveal :delay="0.2" class="w-full">
          <div class="mt-4 flex flex-wrap items-center justify-center gap-2.5 md:mt-6">
            <UiPillTag icon="lucide:flower-2">Pods • Dalam ruang</UiPillTag>
            <UiPillTag icon="lucide:tractor">Tech • Lahan luas</UiPillTag>
            <UiPillTag icon="lucide:sparkles" tone="amber">Floral Assistant • AI</UiPillTag>
          </div>
        </Reveal>
        <Reveal :delay="0.3" class="w-full">
          <DeckAutoGrid :cols="4" class="mt-4 md:mt-6">
            <UiStatCard v-for="s in stats" :key="s.label" :value="s.value" :label="s.label" />
          </DeckAutoGrid>
        </Reveal>
        </div>
      </template>
      <template #secondary>
        <Reveal :delay="0.15" class="relative w-full">
          <UiPhotoFigure
            src="/photos/hero.webp"
            alt="GrowMate Pods dengan bunga soka"
            ratio="4 / 3.4"
          />
          <Motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :animate="{ opacity: 1, scale: 1 }"
            :transition="{ delay: 0.5, duration: 0.5 }"
            class="absolute left-2 top-[6%] text-left md:top-[8%]"
          >
            <Motion :animate="{ y: [0, -10, 0] }" :transition="{ duration: 4, repeat: Infinity, ease: 'easeInOut' }" class="rounded-2xl bg-white px-3.5 py-2.5 shadow-[0_16px_50px_rgba(0,0,0,0.18)]">
              <div class="flex items-center gap-2.5">
                <Icon name="lucide:droplets" class="size-6 text-gm-sky" />
                <div>
                  <div class="font-headline text-base font-extrabold text-gm-ink">Tanah 62%</div>
                  <div class="font-mono text-xs text-gm-muted">GPIO13 • mentah 2411</div>
                </div>
              </div>
            </Motion>
          </Motion>
          <Motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :animate="{ opacity: 1, scale: 1 }"
            :transition="{ delay: 0.65, duration: 0.5 }"
            class="absolute bottom-[10%] right-2 text-left"
          >
            <Motion :animate="{ y: [0, 10, 0] }" :transition="{ duration: 5, repeat: Infinity, ease: 'easeInOut' }" class="rounded-2xl bg-white px-3.5 py-2.5 shadow-[0_16px_50px_rgba(0,0,0,0.18)]">
              <div class="flex items-center gap-2.5">
                <Icon name="lucide:sparkles" class="size-6 text-gm-primary" />
                <div>
                  <div class="font-headline text-base font-extrabold text-gm-ink">Floral: Jangan disiram</div>
                  <div class="font-mono text-xs text-gm-muted">Hujan Kanem • siram dibatalkan</div>
                </div>
              </div>
            </Motion>
          </Motion>
        </Reveal>
      </template>
    </DeckSplitPanel>
  </DeckBare>
</template>
