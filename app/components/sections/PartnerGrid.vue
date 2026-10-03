<script setup lang="ts">
const groups = [
  {
    icon: 'lucide:factory',
    title: 'Produksi',
    desc: 'Cetak bodi presisi dan purwarupa cepat.',
    items: ['Matra 3D', 'Toolsku 3D Printing'],
  },
  {
    icon: 'lucide:store',
    title: 'Ritel dan distribusi',
    desc: 'Rak pajang dan jalur suku cadang.',
    items: ['Mulyo Tani', 'Utama Elektronik'],
  },
  {
    icon: 'lucide:landmark',
    title: 'Kelembagaan',
    desc: 'Validasi, binaan, dan jejaring resmi.',
    items: ['DKPP Bantul', 'DKUMPP Bantul', 'Kemenperin', 'Balai Tekkomdik DIY'],
  },
]
</script>

<template>
  <DeckShell section="mitra">
    <DeckSplitPanel>
      <template #primary>
        <div class="flex w-full flex-col justify-center gap-2.5">
          <Reveal v-for="(g, i) in groups" :key="g.title" :delay="i * 0.07" class="w-full">
            <div class="w-full rounded-3xl border-2 border-gm-line bg-white p-3 text-left md:p-3.5">
              <div class="flex items-center justify-start gap-2 font-headline text-base font-extrabold text-gm-ink md:text-lg">
                <Icon :name="g.icon" class="size-6 text-gm-primary" /> {{ g.title }}
              </div>
              <div class="mt-0.5 text-sm text-gm-muted">{{ g.desc }}</div>
              <div class="mt-1.5 flex flex-wrap items-center justify-start gap-1.5">
                <span
                  v-for="it in g.items"
                  :key="it"
                  class="rounded-full bg-gm-mist px-3 py-1 font-headline text-xs font-bold text-gm-deep md:text-sm"
                >
                  {{ it }}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </template>
      <template #secondary>
        <Reveal class="w-full">
          <div class="grid w-full grid-cols-2 gap-2.5">
            <UiPhotoFigure src="/photos/mitra-matra.webp" alt="Dokumentasi kemitraan Matra 3D" ratio="4 / 3" />
            <UiPhotoFigure src="/photos/mitra-toolsku.webp" alt="Dokumentasi kemitraan Toolsku 3D Printing" ratio="4 / 3" />
          </div>
        </Reveal>
        <Reveal :delay="0.14" class="w-full">
          <UiCalloutBanner icon="lucide:handshake" tone="brand" class="mt-2.5 md:mt-3">
            SMAN 1 Bantul menaungi riset. Mitra dan dinas membuka lahan uji.
          </UiCalloutBanner>
        </Reveal>
      </template>
    </DeckSplitPanel>
  </DeckShell>
</template>
