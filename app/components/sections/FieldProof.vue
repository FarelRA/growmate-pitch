<template>
  <DeckShell section="efektivitas">
    <DeckSplitPanel>
      <template #primary>
        <Reveal class="flex w-full flex-col">
          <div class="flex w-full flex-col rounded-3xl border-2 border-gm-line bg-white p-3 text-center md:p-4">
            <div class="font-headline text-lg font-extrabold text-gm-ink">Penghematan vs rawat manual (%)</div>
            <div class="mt-2 aspect-[16/10] min-h-60 w-full sm:aspect-[16/8] lg:aspect-[16/7]">
              <EffChart />
            </div>
          </div>
        </Reveal>
      </template>
      <template #secondary>
        <Reveal :delay="0.1" class="w-full">
          <UiStatCard value="72% → 94%" label="+22 poin kesintasan 60 hari · daun baru lebih subur, layu berkurang" tone="brand" />
        </Reveal>
        <Reveal :delay="0.18" class="w-full">
          <DeckAutoGrid :cols="2" class="mt-3 md:mt-4">
            <UiStatCard value="60/64" label="SANGAT BAIK, siap dipasarkan" tone="brand" />
            <UiStatCard value="43/48" label="SANGAT LAYAK, sangat stabil" tone="brand" />
          </DeckAutoGrid>
        </Reveal>
        <Reveal :delay="0.24" class="w-full">
          <UiCalloutBanner icon="lucide:clipboard-check" tone="amber" class="mt-3 md:mt-4">
            Formulir ditandatangani DKPP Kab. Bantul.
          </UiCalloutBanner>
        </Reveal>
        <Reveal :delay="0.3" class="w-full">
          <p class="mt-3 w-full rounded-2xl bg-gm-panel p-3.5 text-center font-mono text-xs leading-relaxed text-gm-muted md:text-sm">
            metode: irigasi ambang (tanpa kelebihan air) · pantau tangki kontinu (tanpa kelebihan pupuk) · lampu 5 sampai 8 jam per hari mengikuti sensor
          </p>
        </Reveal>
      </template>
    </DeckSplitPanel>
  </DeckShell>
</template>
