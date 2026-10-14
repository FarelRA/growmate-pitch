<template>
  <div class="grid min-h-0 w-full min-w-0 grid-cols-1 gap-2 text-left lg:grid-cols-12">
    <Reveal class="w-full min-w-0 lg:col-span-7">
      <TechDiagram />
    </Reveal>
    <div class="flex w-full min-w-0 flex-col gap-2 lg:col-span-5">
      <Reveal :delay="0.1" class="w-full">
        <UiPhotoFigure
          src="/images/products/tech-field.webp"
          alt="GrowMate Tech di sawah"
          ratio="17 / 9"
        />
      </Reveal>
      <Reveal :delay="0.18" class="w-full">
        <DeckAutoGrid :cols="2">
          <UiStatCard value="Rp2.083 jt" label="Tech • lokasi listrik" tone="ink" />
          <UiStatCard value="Rp2.409 jt" label="Tech Add-on • surya + LTE" tone="brand" />
        </DeckAutoGrid>
      </Reveal>
      <Reveal :delay="0.24" class="w-full">
        <UiCalloutBanner icon="lucide:package-check" tone="brand">
          Dikirim dalam kardus daur ulang berlapis honeycomb dan jerami, beserta QR manual dan kartu garansi.
        </UiCalloutBanner>
      </Reveal>
    </div>
  </div>
</template>
