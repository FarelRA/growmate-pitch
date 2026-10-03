<script setup lang="ts">
const pages = [
  { src: '/bukti/uji2p-1.webp', label: 'Uji produk • hal 1', alt: 'Formulir uji kelayakan produk GrowMate halaman 1, DKPP Bantul' },
  { src: '/bukti/uji2p-2.webp', label: 'Uji produk • hal 2', alt: 'Formulir uji kelayakan produk GrowMate halaman 2, DKPP Bantul' },
  { src: '/bukti/uji2p-3.webp', label: 'Uji produk • hal 3', alt: 'Formulir uji kelayakan produk GrowMate halaman 3, DKPP Bantul' },
  { src: '/bukti/uji2s-1.webp', label: 'Uji sistem • hal 1', alt: 'Formulir uji kelayakan sistem GrowMate halaman 1, DKPP Bantul' },
  { src: '/bukti/uji2s-2.webp', label: 'Uji sistem • hal 2', alt: 'Formulir uji kelayakan sistem GrowMate halaman 2, DKPP Bantul' },
]

const sel = ref(0)
</script>

<template>
  <DeckShell section="evidence">
    <DeckSplitPanel>
      <template #primary>
        <Reveal class="flex w-full flex-col">
          <div class="flex w-full flex-col rounded-3xl border-2 border-gm-line bg-gm-panel p-3 md:p-4">
            <div class="grid min-h-56 w-full place-items-center overflow-hidden rounded-2xl border-2 border-gm-line bg-white p-2 sm:min-h-80">
              <Transition name="deck" mode="out-in">
                <img
                  :key="sel"
                  :src="pages[sel]!.src"
                  :alt="pages[sel]!.alt"
                  class="max-h-72 w-auto object-contain sm:max-h-96"
                  draggable="false"
                />
              </Transition>
            </div>
            <div class="mt-3 grid w-full grid-cols-5 gap-2">
              <button
                v-for="(p, i) in pages"
                :key="p.src"
                class="overflow-hidden rounded-xl border-2 transition-all"
                :class="i === sel ? 'border-gm-primary shadow-md' : 'border-gm-line opacity-70 hover:opacity-100'"
                :aria-label="`Lihat ${p.label}`"
                @click="sel = i"
              >
                <img :src="p.src" :alt="p.label" class="h-14 w-full object-cover object-top sm:h-16" draggable="false" />
              </button>
            </div>
            <p class="mt-2.5 text-center text-sm font-semibold text-gm-muted md:text-base">
              {{ pages[sel]!.label }} • DKPP Kabupaten Bantul
            </p>
          </div>
        </Reveal>
      </template>
      <template #secondary>
        <Reveal :delay="0.1" class="w-full">
          <DeckAutoGrid :cols="2">
            <UiStatCard value="60/64" label="FISIK SANGAT BAIK" tone="brand" />
            <UiStatCard value="43/48" label="SISTEM SANGAT LAYAK" tone="brand" />
          </DeckAutoGrid>
        </Reveal>
        <Reveal :delay="0.16" class="w-full">
          <div class="mt-3 flex w-full flex-col gap-2 rounded-3xl bg-gm-ink p-3 text-center text-white md:mt-4 md:p-4">
            <div class="flex items-center justify-center gap-2.5 font-headline text-lg font-extrabold">
              <Icon name="lucide:award" class="size-7 shrink-0 text-emerald-300" />
              Kekayaan intelektual terdaftar
            </div>
            <div class="rounded-xl bg-white/[0.07] p-3.5">
              <div class="font-headline text-base font-extrabold">Hak Cipta</div>
              <div class="font-mono text-sm text-emerald-300">EC002026055570</div>
            </div>
            <div class="rounded-xl bg-white/[0.07] p-3.5">
              <div class="font-headline text-base font-extrabold">Desain Industri</div>
              <div class="font-mono text-sm text-emerald-300">100202601768</div>
            </div>
          </div>
        </Reveal>
      </template>
    </DeckSplitPanel>
  </DeckShell>
</template>
