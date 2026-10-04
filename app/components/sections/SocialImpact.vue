<script setup lang="ts">
const points = [
  { icon: 'lucide:sprout', title: 'Regenerasi tech farmer', desc: 'Mentor AI membimbing anak muda mengambil keputusan berbasis data. Minat bertani kembali tumbuh.' },
  { icon: 'lucide:users', title: 'Transfer antargenerasi', desc: 'Komunitas GrowMate menjadi wadah tukar pengetahuan petani senior dan junior.' },
  { icon: 'lucide:wallet', title: 'Biaya operasional turun', desc: 'Waktu rawat 45 menit menjadi 5 menit sehari. Air dan pupuk tepat sasaran, tanpa boros.' },
]
</script>

<template>
  <DeckShell section="sosial">
    <DeckSplitPanel>
      <template #primary>
        <div class="flex w-full flex-col justify-center gap-2.5">
          <Reveal v-for="(p, i) in points" :key="p.title" :delay="i * 0.07" class="w-full">
            <div class="flex w-full items-center justify-start gap-3 rounded-3xl border-2 border-gm-line bg-white p-3 text-left md:p-3.5">
              <span class="grid size-11 shrink-0 place-items-center rounded-2xl bg-gm-mist md:size-12">
                <Icon :name="p.icon" class="size-6 text-gm-primary md:size-7" />
              </span>
              <div>
                <div class="font-headline text-base font-extrabold text-gm-ink md:text-lg">{{ p.title }}</div>
                <div class="text-sm text-gm-muted">{{ p.desc }}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </template>
      <template #secondary>
        <Reveal class="w-full">
          <UiPhotoFigure src="/photos/farmer.webp" alt="Petani mitra memegang unit GrowMate Tech" ratio="16 / 10" />
        </Reveal>
        <Reveal :delay="0.14" class="w-full">
          <DeckAutoGrid :cols="2" class="mt-2.5 md:mt-3">
            <UiStatCard value="45→5" label="menit rawat per hari" tone="ink" />
            <UiStatCard value="8" label="testimoni terdokumentasi" tone="brand" />
          </DeckAutoGrid>
        </Reveal>
      </template>
    </DeckSplitPanel>
  </DeckShell>
</template>
