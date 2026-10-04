<script setup lang="ts">
const stages = [
  { src: '/photos/prod-bench.webp', alt: 'Purwarupa breadboard tahap konsep', n: 'Tahap 1', title: 'Validasi Konsep', desc: 'Sirkuit terbuka di breadboard. Satu sensor statis dan aktuasi relai manual.' },
  { src: '/photos/prod-alpha.webp', alt: 'Purwarupa modular tahap integrasi', n: 'Tahap 2', title: 'Integrasi Modular', desc: 'PCB permanen dalam housing awal. Jaringan baca meluas ke 6 titik sensor.' },
  { src: '/photos/tech.webp', alt: 'Produk final GrowMate Tech dan kemasan', n: 'Tahap 3', title: 'Produk Final', desc: 'Offline fallback, UI dan AI terintegrasi. Siap diproduksi massal.' },
]
</script>

<template>
  <DeckShell section="kembang">
    <DeckAutoGrid :cols="3">
      <Reveal v-for="(s, i) in stages" :key="s.n" :delay="i * 0.08" class="h-full">
        <div class="flex h-full flex-col rounded-3xl border-2 border-gm-line bg-white p-3 text-left md:p-3.5">
          <UiPhotoFigure :src="s.src" :alt="s.alt" ratio="4 / 3" />
          <span class="mt-2.5 inline-block w-fit rounded-full bg-gm-primary px-3 py-1 font-headline text-xs font-extrabold text-white md:mt-3 md:text-sm">{{ s.n }} • {{ s.title }}</span>
          <div class="mt-1.5 text-sm text-gm-muted">{{ s.desc }}</div>
        </div>
      </Reveal>
    </DeckAutoGrid>
  </DeckShell>
</template>
