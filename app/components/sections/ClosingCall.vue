<template>
  <DeckBare>
    <DeckSplitPanel>
      <template #primary>
        <div class="flex w-full flex-col text-left">
        <Reveal class="w-full">
          <h2 class="text-display font-headline font-extrabold tracking-tight text-gm-ink">
            Tumbuh<br /><span class="text-gm-primary">bersama kami.</span>
          </h2>
        </Reveal>
        <Reveal :delay="0.1" class="w-full">
          <p class="text-lead mt-3 max-w-2xl text-gm-muted">
            Pilot, atap hijau, atau satu pertanyaan tajam. Setiap jalan menumbuhkan dataset, dan dataset menumbuhkan segalanya.
          </p>
        </Reveal>
        <Reveal :delay="0.2" class="w-full">
          <div class="mt-4 flex flex-wrap items-center justify-start gap-2.5">
            <span class="flex items-center gap-2 rounded-full bg-gm-mist px-4 py-2 font-mono text-sm font-bold text-gm-deep md:text-base">
              <Icon name="lucide:mail" class="size-5" /> contact@growmate.bond
            </span>
            <span class="flex items-center gap-2 rounded-full bg-gm-mist px-4 py-2 font-headline text-sm font-bold text-gm-deep md:text-base">
              <Icon name="lucide:school" class="size-5" /> SMAN 1 Bantul · FIKSI 2026
            </span>
          </div>
        </Reveal>
        <Reveal :delay="0.28" class="w-full">
          <p class="mt-4 font-headline text-xl font-bold text-gm-muted">Matur nuwun. Terima kasih.</p>
        </Reveal>
        <Reveal :delay="0.34" class="w-full">
          <div class="mt-4 flex items-center justify-start gap-3.5">
            <div class="w-22 shrink-0 md:w-28">
              <UiPhotoFigure src="/photos/closing-petani.webp" alt="Petani mitra memegang unit Tech" ratio="11 / 14" />
            </div>
            <div>
              <div class="font-headline text-lg font-extrabold text-gm-ink">Petani mitra, Bantul</div>
              <div class="text-sm text-gm-muted">memegang unit Tech pertamanya</div>
            </div>
          </div>
        </Reveal>
        </div>
      </template>
      <template #secondary>
        <div class="flex w-full flex-col justify-center gap-3">
          <Reveal :delay="0.12" class="w-full">
            <UiQrFigure text="https://growmate.bond" label="Demo live" sub="growmate.bond, ganti URL bila perlu" />
          </Reveal>
          <Reveal :delay="0.2" class="w-full">
            <UiQrFigure text="https://growmate.bond/dashboard" label="Aplikasi web" sub="dasbor, asisten, marketplace" />
          </Reveal>
          <Reveal :delay="0.28" class="w-full">
            <UiQrFigure text="https://instagram.com" label="Ikuti pembangunan" sub="tautan Instagram + TikTok + Shopee" />
          </Reveal>
        </div>
      </template>
    </DeckSplitPanel>
  </DeckBare>
</template>
