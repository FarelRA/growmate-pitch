<script setup lang="ts">
const tiers = [
  { name: 'TAM', full: 'Total pasar Indonesia', w: '100%', c: 'bg-gm-line', big: '6.183.009', unit: 'petani + 770 properti', d: 'Seluruh usaha tani dan properti hijau nasional yang bisa memakai tani presisi.' },
  { name: 'SAM', full: 'Pasar terjangkau DIY', w: '46%', c: 'bg-gm-soft', big: '57.006', unit: 'petani + 27 properti aktif', d: 'Petani dan properti di Yogyakarta yang terjangkau tim dan layanan purnajual.' },
  { name: 'SOM', full: 'Pijakan awal kami', w: '22%', c: 'bg-gm-primary', big: '80 + 3', unit: 'tech farmer + properti', d: '0,14% DIY. Target operasional: 2.850 tech farmer atau 5% SAM.' },
]
const segments = [
  { icon: 'lucide:smartphone', title: 'B2C • tech farmer Gen-Z', desc: 'Pods + Advance AI untuk pehobi dan petani muda.' },
  { icon: 'lucide:building-2', title: 'B2B • gedung hijau', desc: 'Tech + dasbor untuk atap, lobi, dan kawasan.' },
]
</script>

<template>
  <DeckShell section="market">
    <DeckSplitPanel>
      <template #primary>
        <div class="flex w-full flex-col justify-center gap-3 md:gap-4">
          <Reveal v-for="(t, i) in tiers" :key="t.name" :delay="i * 0.08" class="w-full">
            <div class="w-full rounded-3xl border-2 border-gm-line bg-white p-3 text-center md:p-4">
              <div class="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
                <span class="rounded-xl bg-gm-ink px-3 py-1.5 font-headline text-lg font-extrabold text-white">{{ t.name }}</span>
                <span class="font-headline text-base font-bold text-gm-muted">{{ t.full }}</span>
              </div>
              <div class="mt-2 flex flex-wrap items-baseline justify-center gap-x-2.5">
                <span class="font-headline text-3xl font-extrabold tabular-nums text-gm-primary">{{ t.big }}</span>
                <span class="font-headline text-lg font-bold text-gm-ink">{{ t.unit }}</span>
              </div>
              <div class="mx-auto mt-2 h-5 max-w-xl overflow-hidden rounded-full bg-gm-panel">
                <div class="h-full rounded-full transition-all duration-1000" :class="t.c" :style="{ width: t.w }" />
              </div>
              <p class="mx-auto mt-2 max-w-xl text-[12px] leading-snug text-gm-muted">{{ t.d }}</p>
            </div>
          </Reveal>
        </div>
      </template>
      <template #secondary>
        <Reveal :delay="0.1" class="w-full">
          <UiStatCard value="2.850" label="target 5% SAM · tech farmer dalam jangkauan layanan" tone="brand" />
        </Reveal>
        <div class="mt-3 grid w-full grid-cols-1 gap-3 md:mt-4">
          <Reveal v-for="(s, i) in segments" :key="s.title" :delay="0.16 + i * 0.07" class="w-full">
            <UiInfoCard :icon="s.icon" :title="s.title" :desc="s.desc" />
          </Reveal>
          <Reveal :delay="0.3" class="w-full">
            <UiInfoCard icon="lucide:map-pin" title="Cakupan layanan" desc="DIY penuh + ekspansi nasional bertahap." tone="tint" />
          </Reveal>
        </div>
      </template>
    </DeckSplitPanel>
  </DeckShell>
</template>
