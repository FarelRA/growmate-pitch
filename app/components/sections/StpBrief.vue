<script setup lang="ts">
const rows = [
  { icon: 'lucide:users', title: 'Segmentasi', desc: 'Tech farmer serta pengembang properti dan perkantoran di DIY yang mendambakan kepraktisan dan efisiensi.' },
  { icon: 'lucide:crosshair', title: 'Targeting', desc: 'Menangkan DIY dulu dengan layanan purnajual penuh, lalu naik ke 5% SAM dan ekspansi nasional bertahap.' },
  { icon: 'lucide:compass', title: 'Positioning', desc: 'Pelopor smart farming IoT dan AI Agen lokal yang praktis, hijau, dan terjangkau.' },
]
</script>

<template>
  <DeckShell section="stp">
    <DeckSplitPanel>
      <template #primary>
        <div class="flex w-full flex-col justify-center gap-2.5">
          <Reveal v-for="(r, i) in rows" :key="r.title" :delay="i * 0.07" class="w-full">
            <div class="flex w-full items-center justify-start gap-3 rounded-3xl border-2 border-gm-line bg-white p-3 text-left md:p-3.5">
              <span class="grid size-11 shrink-0 place-items-center rounded-2xl bg-gm-mist md:size-12">
                <Icon :name="r.icon" class="size-6 text-gm-primary md:size-7" />
              </span>
              <div>
                <div class="font-headline text-base font-extrabold text-gm-ink md:text-lg">{{ r.title }}</div>
                <div class="text-sm text-gm-muted">{{ r.desc }}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </template>
      <template #secondary>
        <Reveal class="w-full">
          <UiPhotoFigure src="/photos/gt-expo.webp" alt="Stan GrowMate di Bantul Creative Expo" ratio="16 / 10" />
        </Reveal>
        <Reveal :delay="0.14" class="w-full">
          <UiCalloutBanner icon="lucide:flag" tone="brand" class="mt-2.5 md:mt-3">
            Semangat posisi kami: Petani Makmur, Tanpa Lumpur.
          </UiCalloutBanner>
        </Reveal>
      </template>
    </DeckSplitPanel>
  </DeckShell>
</template>
