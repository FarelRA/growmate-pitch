<script setup lang="ts">
const quads = [
  { icon: 'lucide:leaf', title: 'Planet', desc: 'Bodi rPLA, panel kayu limbah, kemasan honeycomb + jerami, putaran refurbish GrowMate Recycle.' },
  { icon: 'lucide:coins', title: 'Profit', desc: 'Hardware lokal + langganan Advance AI mengungguli impor, dengan purnajual nyata.' },
  { icon: 'lucide:users', title: 'People', desc: 'Floral membimbing pemula. Komunitas + marketplace mengantar panen ke pembeli.' },
  { icon: 'lucide:target', title: 'Purpose', desc: 'Swasembada pangan Asta Cita butir 2, Indonesia Emas 2045, SDGs tujuan 12 konsumsi bertanggung jawab.' },
]
const eco = ['PLA daur ulang', 'kayu limbah', 'kardus daur ulang', 'kertas honeycomb', 'jerami organik', 'manual QR', 'program Recycle']
</script>

<template>
  <DeckShell section="impact">
    <div class="flex w-full flex-col items-center gap-3 md:gap-5">
      <DeckAutoGrid :cols="4">
        <Reveal v-for="(q, i) in quads" :key="q.title" :delay="i * 0.07" class="h-full">
          <UiInfoCard :icon="q.icon" :title="q.title" :desc="q.desc" />
        </Reveal>
      </DeckAutoGrid>
      <Reveal :delay="0.2" class="w-full">
        <div class="flex w-full flex-wrap items-center justify-center gap-2 rounded-3xl bg-gm-panel p-3.5 text-center md:p-5">
          <span class="mr-1 font-headline text-base font-extrabold text-gm-ink md:text-xl">Jejak hijau:</span>
          <span v-for="e in eco" :key="e" class="rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-gm-deep shadow-sm md:text-base">{{ e }}</span>
          <span class="flex items-center gap-1.5 rounded-full bg-gm-primary px-3.5 py-1.5 text-xs font-bold text-white md:text-base"><Icon name="lucide:arrow-right" class="size-4" /> dokumen resmi di slide berikut</span>
        </div>
      </Reveal>
    </div>
  </DeckShell>
</template>
