<script setup lang="ts">
const shots = [
  { src: '/photos/gt-expo.webp', alt: 'Stan GrowMate di Bantul Creative Expo' },
  { src: '/photos/gt-mulyo.webp', alt: 'Penandatanganan konsinyasi Mulyo Tani' },
  { src: '/photos/mitra-matra.webp', alt: 'Dokumentasi kemitraan Matra 3D' },
  { src: '/photos/mitra-toolsku.webp', alt: 'Dokumentasi kemitraan Toolsku 3D Printing' },
  { src: '/photos/prod-solder.webp', alt: 'Perakitan dan penyolderan unit' },
  { src: '/photos/prod-printer.webp', alt: 'Cetak bodi dengan printer 3D' },
]
</script>

<template>
  <DeckShell section="dokumentasi">
    <div class="grid w-full flex-1 grid-cols-2 content-center gap-2.5 md:grid-cols-3">
      <Reveal v-for="(s, i) in shots" :key="s.src" :delay="i * 0.05" class="h-full">
        <UiPhotoFigure :src="s.src" :alt="s.alt" ratio="16 / 10" />
      </Reveal>
    </div>
  </DeckShell>
</template>
