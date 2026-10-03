<template>
  <DeckShell section="suara">
    <DeckSplitPanel>
      <template #primary>
        <Reveal class="h-full w-full">
          <VoiceCarousel />
        </Reveal>
      </template>
      <template #secondary>
        <Reveal :delay="0.1" class="w-full">
          <div class="flex w-full flex-col justify-center gap-2 rounded-3xl bg-gm-ink p-3.5 text-left text-white md:p-4">
            <span class="flex items-center gap-2 font-headline text-base font-extrabold md:text-lg">
              <Icon name="lucide:compass" class="size-6 text-emerald-300" /> Posisi kami di pasar
            </span>
            <p class="text-sm leading-snug text-white/80 md:text-base">
              Pelopor smart farming IoT dan AI Agen lokal yang praktis, ramah lingkungan, dan terjangkau. Menyasar tech farmer serta pengembang properti dan perkantoran di DIY.
            </p>
            <p class="font-headline text-sm font-bold text-emerald-300 md:text-base">Semangat: Petani Makmur, Tanpa Lumpur.</p>
          </div>
        </Reveal>
        <Reveal :delay="0.18" class="w-full">
          <DeckAutoGrid :cols="3" class="mt-2.5 md:mt-3">
            <UiStatCard value="8" label="Testimoni terdokumentasi" tone="brand" />
            <UiStatCard value="4" label="Instansi resmi mendukung" tone="brand" />
            <UiStatCard value="2" label="Segmen pengguna aktif" tone="brand" />
          </DeckAutoGrid>
        </Reveal>
      </template>
    </DeckSplitPanel>
  </DeckShell>
</template>
