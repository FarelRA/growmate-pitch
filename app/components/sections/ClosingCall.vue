<template>
  <DeckBare>
    <DeckSplitPanel>
      <template #primary>
        <div class="flex h-full w-full flex-col justify-center text-left">
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
          <div class="mt-3 flex flex-wrap items-center justify-start gap-2.5">
            <span class="flex items-center gap-2 rounded-full bg-gm-mist px-5 py-3 font-mono text-lg font-bold text-gm-deep">
              <Icon name="lucide:mail" class="size-6" /> contact@growmate.bond
            </span>
            <span class="flex items-center gap-2 rounded-full bg-gm-mist px-5 py-3 font-headline text-lg font-bold text-gm-deep">
              <Icon name="lucide:school" class="size-6" /> SMAN 1 Bantul · FIKSI 2026
            </span>
          </div>
        </Reveal>
        <Reveal :delay="0.28" class="w-full">
          <p class="mt-3 font-headline text-2xl font-bold text-gm-muted">Matur nuwun. Terima kasih.</p>
        </Reveal>
        <Reveal :delay="0.34" class="w-full">
          <div class="mt-3 flex items-center justify-start gap-3">
            <div class="w-28 shrink-0 md:w-32">
              <UiPhotoFigure src="/photos/closing-petani.webp" alt="Petani mitra memegang unit Tech" ratio="11 / 14" />
            </div>
            <div class="min-w-0 text-left">
              <div class="font-headline text-xl font-extrabold text-gm-ink">Petani mitra, Bantul</div>
              <div class="text-base text-gm-muted">memegang unit Tech pertamanya</div>
            </div>
          </div>
        </Reveal>
        </div>
      </template>
      <template #secondary>
        <div class="flex h-full w-full flex-col justify-center gap-3 text-left">
          <Reveal :delay="0.12" class="w-full">
            <UiQrFigure class="[&>div:first-child]:size-32 md:[&>div:first-child]:size-40 [&>div:last-child]:text-left [&>div:last-child>div:first-child]:text-xl" text="https://growmate.bond" label="Demo live" sub="growmate.bond, ganti URL bila perlu" />
          </Reveal>
          <Reveal :delay="0.2" class="w-full">
            <UiQrFigure class="[&>div:first-child]:size-32 md:[&>div:first-child]:size-40 [&>div:last-child]:text-left [&>div:last-child>div:first-child]:text-xl" text="https://growmate.bond/dashboard" label="Aplikasi web" sub="dasbor, asisten, marketplace" />
          </Reveal>
          <Reveal :delay="0.28" class="w-full">
            <UiQrFigure class="[&>div:first-child]:size-32 md:[&>div:first-child]:size-40 [&>div:last-child]:text-left [&>div:last-child>div:first-child]:text-xl" text="https://instagram.com" label="Ikuti pembangunan" sub="tautan Instagram + TikTok + Shopee" />
          </Reveal>
        </div>
      </template>
    </DeckSplitPanel>
  </DeckBare>
</template>
