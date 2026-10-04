<script setup lang="ts">
</script>

<template>
  <DeckShell section="kompetitor">
    <DeckSplitPanel>
      <template #primary>
        <DuelArena class="w-full" />
      </template>
      <template #secondary>
        <div class="flex w-full flex-col text-left">
          <div class="relative w-full px-3 pb-1 pt-3 md:px-4 md:pt-4">
            <span aria-hidden="true" class="absolute left-0 top-0 h-7 w-7 rounded-tl-xl border-l-4 border-t-4 border-gm-primary" />
            <span aria-hidden="true" class="absolute right-0 top-0 h-7 w-7 rounded-tr-xl border-r-4 border-t-4 border-gm-primary" />
            <span aria-hidden="true" class="absolute bottom-0 left-0 h-7 w-7 rounded-bl-xl border-b-4 border-l-4 border-gm-primary" />
            <span aria-hidden="true" class="absolute bottom-0 right-0 h-7 w-7 rounded-br-xl border-b-4 border-r-4 border-gm-primary" />
            <UiPhotoFigure
              src="/photos/tech-field.webp"
              alt="Perangkat GrowMate Tech terpasang di sawah"
              ratio="16 / 10"
            />
            <p class="mt-1.5 flex items-center justify-start gap-1.5 text-[11px] leading-snug text-gm-muted md:text-xs">
              <span aria-hidden="true" class="size-1.5 shrink-0 rounded-full bg-gm-primary" />
              Terpasang dan bekerja di sawah nyata.
            </p>
          </div>
          <UiCalloutBanner icon="lucide:crown" tone="brand" class="mt-2 md:mt-2.5">
            AI Agen, komunitas, dan marketplace: hanya ada di GrowMate.
          </UiCalloutBanner>
        </div>
      </template>
    </DeckSplitPanel>
  </DeckShell>
</template>
