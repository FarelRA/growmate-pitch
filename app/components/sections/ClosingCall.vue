<script setup lang="ts">
// Kartu Nama menunjuk ke halaman /card pada domain yang sama dengan deck ini.
const cardUrl = ref('')

onMounted(() => {
  cardUrl.value = `${window.location.origin}/card`
})
</script>

<template>
  <DeckBare>
    <DeckSplitPanel>
      <template #primary>
        <div class="flex h-full w-full flex-col justify-center text-left">
        <Reveal class="w-full">
          <h2 class="text-display font-headline font-extrabold tracking-tight text-gm-ink">
            Hubungi<br /><span class="text-gm-primary">tim GrowMate.</span>
          </h2>
        </Reveal>
        <Reveal :delay="0.1" class="w-full">
          <p class="text-lead mt-3 max-w-2xl text-gm-muted">
            Mulai dari pilot di lokasi Anda, penataan atap hijau, atau pertanyaan lanjutan; setiap masukan menjadi data latih untuk model tanaman.
          </p>
        </Reveal>
        <Reveal :delay="0.2" class="w-full">
          <div class="mt-3 flex flex-wrap items-center justify-start gap-2.5">
            <span class="flex items-center gap-2 rounded-full bg-gm-mist px-5 py-3 font-mono text-lg font-bold text-gm-deep">
              <Icon name="lucide:mail" class="size-6" /> contact@growmate.bond
            </span>
            <span class="flex items-center gap-2 rounded-full bg-gm-mist px-5 py-3 font-headline text-lg font-bold text-gm-deep">
              <Icon name="lucide:school" class="size-6" /> SMAN 1 Bantul · GrowMate 2026
            </span>
          </div>
        </Reveal>
        <Reveal :delay="0.28" class="w-full">
          <p class="mt-3 font-headline text-2xl font-bold text-gm-muted">Matur nuwun. Terima kasih.</p>
        </Reveal>
        <Reveal :delay="0.34" class="w-full">
          <div class="mt-3 flex items-center justify-start gap-3">
            <div class="w-28 shrink-0 md:w-32">
              <UiPhotoFigure src="/images/impact/closing-petani.webp" alt="Petani mitra memegang unit Tech" ratio="11 / 14" />
            </div>
            <div class="min-w-0 text-left">
              <div class="font-headline text-xl font-extrabold text-gm-ink">Petani mitra, Bantul</div>
              <div class="text-base text-gm-muted">menerima unit Tech pertamanya</div>
            </div>
          </div>
        </Reveal>
        </div>
      </template>
      <template #secondary>
        <div class="flex h-full w-full flex-col justify-center gap-3 text-left">
          <Reveal :delay="0.12" class="w-full">
            <UiQrFigure class="[&>div:first-child]:size-32 md:[&>div:first-child]:size-40 [&>div:last-child]:text-left [&>div:last-child>div:first-child]:text-xl" text="https://growmate.bond" label="Landing Page" sub="halaman utama situs GrowMate" />
          </Reveal>
          <Reveal :delay="0.2" class="w-full">
            <UiQrFigure class="[&>div:first-child]:size-32 md:[&>div:first-child]:size-40 [&>div:last-child]:text-left [&>div:last-child>div:first-child]:text-xl" text="https://growmate.bond/demo/477b149699ac2dce44a87571e5244ad019ceb7ddadf8afb861e162e11336d565" label="Akun Demo" sub="dasbor, asisten, dan marketplace" />
          </Reveal>
          <Reveal :delay="0.28" class="w-full">
            <UiQrFigure class="[&>div:first-child]:size-32 md:[&>div:first-child]:size-40 [&>div:last-child]:text-left [&>div:last-child>div:first-child]:text-xl" :text="cardUrl" label="Kartu Nama" sub="kartu nama GrowMate dan tim" />
          </Reveal>
        </div>
      </template>
    </DeckSplitPanel>
  </DeckBare>
</template>
