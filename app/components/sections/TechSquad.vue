<template>
  <DeckShell section="tech">
    <DeckSplitPanel>
      <template #primary>
        <Reveal class="w-full">
          <TechDiagram />
        </Reveal>
      </template>
      <template #secondary>
        <Reveal :delay="0.1" class="w-full">
          <UiPhotoFigure
            src="/photos/tech-field.webp"
            alt="GrowMate Tech di sawah"
            ratio="17 / 9"
          />
        </Reveal>
        <Reveal :delay="0.18" class="w-full">
          <DeckAutoGrid :cols="2" class="mt-2 md:mt-2.5">
            <UiStatCard value="Rp2.083 jt" label="Tech • lokasi PLN" tone="ink" />
            <UiStatCard value="Rp2.409 jt" label="Tech Add-on • surya + LTE" tone="brand" />
          </DeckAutoGrid>
        </Reveal>
        <Reveal :delay="0.24" class="w-full">
          <UiCalloutBanner icon="lucide:package-check" tone="brand" class="mt-2.5 md:mt-3">
            Dikirim dalam kardus daur ulang + honeycomb + jerami, beserta QR manual dan kartu garansi.
          </UiCalloutBanner>
        </Reveal>
      </template>
    </DeckSplitPanel>
  </DeckShell>
</template>
