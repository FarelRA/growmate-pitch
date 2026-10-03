<script setup lang="ts">
const steps = [
  { q: 'Q4 26', title: '3× pilot lahan', desc: 'Cabai + sayuran daun di lahan mitra. Uji surya + LTE di lumpur nyata.' },
  { q: 'Q1 27', title: 'Dataset 50 tanaman', desc: 'Kalibrasi ambang per tanaman dari telemetri pilot. Umumkan papan peringkat.' },
  { q: 'Q2 27', title: 'Marketplace kalibrasi', desc: 'Agronomis menjual profil tanaman. Pekebun memasang sekali ketuk.' },
  { q: 'Q3 27', title: 'Tech v2 + Pods v2', desc: 'Sensor arus AC, otonomi tangki lebih lama, Pods di bawah Rp700 rb.' },
]
const asks = [
  { icon: 'lucide:tractor', title: '3 lahan pilot', desc: '6 m² cukup. Hardware kami yang bawa' },
  { icon: 'lucide:building-2', title: '2 mitra properti', desc: 'penghijauan atap + lobi yang menyiram sendiri' },
  { icon: 'lucide:messages-square', title: 'Pertanyaan tersulit Anda', desc: 'tanya jawab adalah sensor terbaik kami' },
]
</script>

<template>
  <DeckShell section="roadmap">
    <DeckSplitPanel>
      <template #primary>
        <div class="flex w-full flex-col justify-center gap-2.5">
          <Reveal v-for="(s, i) in steps" :key="s.q" :delay="i * 0.07" class="w-full">
            <div class="w-full rounded-3xl border-2 border-gm-line bg-white p-3 text-left md:p-3.5">
              <span class="inline-block rounded-full bg-gm-primary px-3.5 py-1 font-headline text-xs font-extrabold text-white md:text-sm">{{ s.q }}</span>
              <div class="mt-1.5 font-headline text-base font-extrabold text-gm-ink md:text-lg">{{ s.title }}</div>
              <div class="mt-0.5 text-sm text-gm-muted">{{ s.desc }}</div>
            </div>
          </Reveal>
        </div>
      </template>
      <template #secondary>
        <Reveal :delay="0.1" class="w-full">
          <UiPhotoFigure
            src="/photos/roadmap.webp"
            alt="Unit Tech di sawah mitra"
            ratio="21 / 9"
          />
        </Reveal>
        <Reveal :delay="0.16" class="w-full">
          <div class="mt-3 flex w-full flex-col justify-center gap-2 rounded-3xl bg-gm-ink p-3 text-left text-white md:mt-4 md:p-4">
            <div class="font-headline text-lg font-extrabold">Yang kami minta hari ini</div>
            <div v-for="a in asks" :key="a.title" class="flex items-center justify-start gap-3 rounded-2xl bg-white/[0.07] p-3 text-left">
              <Icon :name="a.icon" class="size-8 shrink-0 text-emerald-300" />
              <div>
                <div class="font-headline text-base font-extrabold">{{ a.title }}</div>
                <div class="text-sm text-white/65">{{ a.desc }}</div>
              </div>
            </div>
          </div>
        </Reveal>
      </template>
    </DeckSplitPanel>
  </DeckShell>
</template>
