<template>
  <DeckShell section="versus">
    <DeckSplitPanel>
      <template #primary>
        <Reveal class="flex w-full flex-col">
          <div class="flex w-full flex-col rounded-3xl border-2 border-gm-line bg-white p-3 text-center md:p-4">
            <div class="font-headline text-lg font-extrabold text-gm-ink">Catatan insiden 60 hari. Makin kecil makin baik</div>
            <div class="mt-2 aspect-[16/10] min-h-60 w-full sm:aspect-[16/8] lg:aspect-[16/7]">
              <CompareChart />
            </div>
          </div>
        </Reveal>
        <Reveal :delay="0.1" class="w-full">
          <div class="mt-3 flex w-full flex-col gap-2 sm:flex-row md:mt-4">
            <span class="flex-1 rounded-full bg-gm-mist px-4 py-2.5 text-center font-headline text-[12px] font-bold text-gm-deep md:text-lg">kesehatan 87 vs 68 (+27,9%)</span>
            <span class="flex-1 rounded-full bg-gm-mist px-4 py-2.5 text-center font-headline text-[12px] font-bold text-gm-deep md:text-lg">air 6,8 L vs 9,4 L (−27,7%)</span>
          </div>
        </Reveal>
      </template>
      <template #secondary>
        <Reveal :delay="0.08" class="w-full">
          <BeforeAfter stock="/photos/versus.webp" />
        </Reveal>
        <Reveal :delay="0.16" class="w-full">
          <div class="mt-3 w-full md:mt-4">
            <StoryCarousel />
          </div>
        </Reveal>
      </template>
    </DeckSplitPanel>
  </DeckShell>
</template>
