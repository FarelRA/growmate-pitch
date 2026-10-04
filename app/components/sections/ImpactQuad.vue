<script setup lang="ts">
const quads = [
  { icon: 'lucide:leaf', title: 'Planet', desc: 'Bodi rPLA, kayu limbah, kemasan honeycomb dan jerami, plus putaran refurbish.' },
  { icon: 'lucide:coins', title: 'Profit', desc: 'Hardware lokal plus langganan AI mengungguli impor, dengan purnajual nyata.' },
  { icon: 'lucide:users', title: 'People', desc: 'Floral membimbing pemula. Komunitas mengantar panen ke pembeli.' },
  { icon: 'lucide:target', title: 'Purpose', desc: 'Asta Cita butir 2, Indonesia Emas 2045, dan SDGs tujuan 12.' },
]
</script>

<template>
  <DeckShell section="quad">
    <div class="flex w-full flex-1 flex-col items-center justify-center gap-2.5">
      <DeckAutoGrid :cols="4">
        <Reveal v-for="(q, i) in quads" :key="q.title" :delay="i * 0.07" class="h-full">
          <UiInfoCard :icon="q.icon" :title="q.title" :desc="q.desc" />
        </Reveal>
      </DeckAutoGrid>
      <Reveal :delay="0.2" class="w-full">
        <UiPhotoFigure src="/photos/roadmap.webp" alt="Unit Tech bekerja di sawah mitra" ratio="32 / 9" />
      </Reveal>
    </div>
  </DeckShell>
</template>
