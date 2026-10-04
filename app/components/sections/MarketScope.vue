<script setup lang="ts">
const tiers = [
  { name: 'TAM', full: 'Total pasar nasional', big: '6.183.009', unit: 'petani + 770 properti' },
  { name: 'SAM', full: 'Terjangkau di DIY', big: '57.006', unit: 'petani + 27 properti aktif' },
  { name: 'SOM', full: 'Pijakan awal 2026', big: '80 + 3', unit: 'tech farmer + properti' },
]
</script>

<template>
  <DeckShell section="tamsamsom">
    <div class="flex w-full flex-1 flex-col items-center justify-center gap-3 md:gap-4">
      <DeckAutoGrid :cols="3">
        <Reveal v-for="(t, i) in tiers" :key="t.name" :delay="i * 0.08" class="h-full">
          <div class="flex h-full flex-col items-center justify-center rounded-3xl border-2 p-4 text-center md:p-5" :class="i === 2 ? 'border-gm-primary bg-gm-primary text-white shadow-[0_20px_60px_rgba(0,110,28,0.35)]' : 'border-gm-line bg-white'">
            <span class="rounded-xl px-3 py-1.5 font-headline text-lg font-extrabold" :class="i === 2 ? 'bg-white/15 text-white' : 'bg-gm-ink text-white'">{{ t.name }}</span>
            <span class="mt-1 font-headline text-base font-bold" :class="i === 2 ? 'text-white/80' : 'text-gm-muted'">{{ t.full }}</span>
            <span class="mt-2 font-headline text-3xl font-extrabold tabular-nums md:text-4xl" :class="i === 2 ? 'text-white' : 'text-gm-primary'">{{ t.big }}</span>
            <span class="font-headline text-base font-bold md:text-lg" :class="i === 2 ? 'text-white/90' : 'text-gm-ink'">{{ t.unit }}</span>
          </div>
        </Reveal>
      </DeckAutoGrid>
      <Reveal :delay="0.24" class="w-full">
        <UiCalloutBanner icon="lucide:map-pin" tone="brand">
          Pijakan 0,14% DIY hari ini, target operasional 2.850 tech farmer atau 5% SAM, lalu ekspansi nasional bertahap.
        </UiCalloutBanner>
      </Reveal>
    </div>
  </DeckShell>
</template>
