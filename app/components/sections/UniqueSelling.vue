<script setup lang="ts">
const points = [
  { src: '/photos/hero.webp', alt: 'GrowMate Pods dengan tanaman soka', title: 'Otak AI lokal', desc: 'Floral Assistant plus Pranata Mangsa. Mengukur tanah tropis, memikirkannya, lalu bertindak.' },
  { src: '/photos/tech.webp', alt: 'Unit GrowMate Tech dan kemasan ritel', title: 'Skala fleksibel', desc: 'Satu pot meja 20x30 cm sampai lahan di atas 1 hektar. Satu aplikasi mengendalikan semua.' },
  { src: '/photos/tech-field.webp', alt: 'GrowMate Tech terpasang di sawah', title: 'Tahan offline', desc: 'Logika lokal saat WiFi mati. Opsi panel surya dan modem SIM untuk lokasi tanpa PLN.' },
]
</script>

<template>
  <DeckShell section="usp">
    <DeckAutoGrid :cols="3">
      <Reveal v-for="(p, i) in points" :key="p.title" :delay="i * 0.08" class="h-full">
        <div class="flex h-full flex-col rounded-3xl border-2 border-gm-line bg-white p-3 text-left md:p-3.5">
          <UiPhotoFigure :src="p.src" :alt="p.alt" ratio="16 / 10" />
          <div class="mt-2.5 font-headline text-base font-extrabold text-gm-ink md:mt-3 md:text-lg">{{ p.title }}</div>
          <div class="mt-0.5 text-sm text-gm-muted">{{ p.desc }}</div>
        </div>
      </Reveal>
    </DeckAutoGrid>
  </DeckShell>
</template>
