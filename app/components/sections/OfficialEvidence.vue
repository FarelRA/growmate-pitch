<script setup lang="ts">
import gsap from 'gsap'

const pages = [
  { src: '/bukti/uji2p-1.webp', label: 'Uji produk • hal 1', alt: 'Formulir uji kelayakan produk GrowMate halaman 1, DKPP Bantul' },
  { src: '/bukti/uji2p-2.webp', label: 'Uji produk • hal 2', alt: 'Formulir uji kelayakan produk GrowMate halaman 2, DKPP Bantul' },
  { src: '/bukti/uji2p-3.webp', label: 'Uji produk • hal 3', alt: 'Formulir uji kelayakan produk GrowMate halaman 3, DKPP Bantul' },
  { src: '/bukti/uji2s-1.webp', label: 'Uji sistem • hal 1', alt: 'Formulir uji kelayakan sistem GrowMate halaman 1, DKPP Bantul' },
  { src: '/bukti/uji2s-2.webp', label: 'Uji sistem • hal 2', alt: 'Formulir uji kelayakan sistem GrowMate halaman 2, DKPP Bantul' },
]

const sel = ref(0)

function nextDoc() {
  if (typeof document !== 'undefined' && document.hidden) return
  sel.value = (sel.value + 1) % pages.length
}

const { pause: pauseCycle, resume: resumeCycle } = useIntervalFn(nextDoc, 3000)

function selectDoc(i: number) {
  sel.value = i
  pauseCycle()
  resumeCycle()
}

const root = ref<HTMLElement | null>(null)
let ctx: gsap.Context | null = null

onMounted(() => {
  if (!root.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  ctx = gsap.context(() => {
    gsap.fromTo(
      '.legal-scores',
      { boxShadow: '0 0 0 0 rgba(0, 110, 28, 0)' },
      { boxShadow: '0 0 0 6px rgba(0, 110, 28, 0.14)', duration: 0.4, delay: 1.4, yoyo: true, repeat: 1, ease: 'sine.inOut' },
    )
  }, root.value)
})

onUnmounted(() => {
  pauseCycle()
  ctx?.revert()
})
</script>

<template>
  <DeckShell section="legalitas">
    <div ref="root" class="w-full">
      <DeckSplitPanel>
        <template #primary>
          <Reveal :y="-40" class="flex w-full flex-col">
            <div class="mb-2 flex w-full justify-start lg:hidden">
              <LegalStamp size="sm" :burst="false" />
            </div>
            <div
              class="flex w-full flex-col rounded-3xl border-2 border-gm-line bg-gm-panel p-3 md:p-4"
              style="background-image: radial-gradient(120% 90% at 50% 0%, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0) 60%);"
            >
              <div
                class="grid min-h-56 w-full place-items-center overflow-hidden rounded-2xl border-2 border-gm-line bg-white p-2 sm:min-h-80"
                style="transform: perspective(900px) rotateY(-4deg);"
              >
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
              <div class="mt-1.5 flex h-1.5 items-center justify-center gap-1.5" aria-hidden="true">
                <span
                  v-for="(p, i) in pages"
                  :key="p.src"
                  class="h-1.5 rounded-full transition-all duration-300"
                  :class="i === sel ? 'w-6 bg-gm-primary' : 'w-1.5 bg-gm-line'"
                />
              </div>
              <div class="mt-2 grid w-full grid-cols-5 gap-2">
                <button
                  v-for="(p, i) in pages"
                  :key="p.src"
                  class="overflow-hidden rounded-xl border-2 transition-all"
                  :class="i === sel ? 'border-gm-primary shadow-md' : 'border-gm-line opacity-70 hover:opacity-100'"
                  :aria-label="`Lihat ${p.label}`"
                  @click="selectDoc(i)"
                >
                  <img :src="p.src" :alt="p.label" class="h-12 w-full object-cover object-top sm:h-14" draggable="false" />
                </button>
              </div>
              <p class="mt-2 text-center text-sm font-semibold text-gm-muted md:text-base">
                {{ pages[sel]!.label }} • DKPP Kabupaten Bantul
              </p>
            </div>
          </Reveal>
        </template>
        <template #secondary>
          <Reveal :delay="0.1" class="w-full">
            <div class="legal-scores relative w-full rounded-3xl border-2 border-gm-line bg-white p-2.5 md:p-3">
              <div class="flex items-center justify-start gap-2.5">
                <LegalStamp size="sm" :burst="true" />
                <p class="font-headline text-xs font-extrabold uppercase tracking-[0.1em] text-gm-primary">Hasil uji kelayakan DKPP</p>
              </div>
              <div class="mt-1 grid w-full grid-cols-2 gap-2">
                <LegalGauge :value="60" :max="64" label="Fisik Sangat Baik" caption="Skor uji produk" />
                <LegalGauge :value="43" :max="48" label="Sistem Sangat Layak" caption="Skor uji sistem" />
              </div>
            </div>
          </Reveal>
          <Reveal :delay="0.2" class="w-full">
            <div class="mt-2.5 w-full rounded-3xl bg-gm-ink p-2.5 text-white md:mt-3 md:p-3">
              <div class="flex items-center gap-2 font-headline text-sm font-extrabold md:text-base">
                <Icon name="lucide:award" class="size-5 shrink-0 text-emerald-300" />
                Kekayaan intelektual terdaftar
              </div>
              <div class="mt-2 grid w-full grid-cols-1 gap-2 sm:grid-cols-2">
                <div class="anim-float flex items-center gap-2.5 rounded-2xl bg-white/[0.07] p-2.5 text-left">
                  <span class="relative mb-2 grid size-11 shrink-0 place-items-center rounded-full bg-gm-amberbg ring-2 ring-gm-amber" aria-hidden="true">
                    <Icon name="lucide:medal" class="size-5 text-gm-amber" />
                    <span class="absolute -bottom-2 left-1/2 flex -translate-x-1/2 gap-0.5">
                      <span class="block h-2.5 w-1.5 rotate-[18deg] bg-gm-amber/80" />
                      <span class="block h-2.5 w-1.5 rotate-[-18deg] bg-gm-amber/80" />
                    </span>
                  </span>
                  <span class="min-w-0">
                    <span class="block font-headline text-xs font-extrabold md:text-sm">Hak Cipta</span>
                    <span class="block truncate font-mono text-xs text-emerald-300">EC002026055570</span>
                  </span>
                </div>
                <div class="anim-float flex items-center gap-2.5 rounded-2xl bg-white/[0.07] p-2.5 text-left" style="animation-delay: 1.4s;">
                  <span class="relative mb-2 grid size-11 shrink-0 place-items-center rounded-full bg-gm-amberbg ring-2 ring-gm-amber" aria-hidden="true">
                    <Icon name="lucide:medal" class="size-5 text-gm-amber" />
                    <span class="absolute -bottom-2 left-1/2 flex -translate-x-1/2 gap-0.5">
                      <span class="block h-2.5 w-1.5 rotate-[18deg] bg-gm-amber/80" />
                      <span class="block h-2.5 w-1.5 rotate-[-18deg] bg-gm-amber/80" />
                    </span>
                  </span>
                  <span class="min-w-0">
                    <span class="block font-headline text-xs font-extrabold md:text-sm">Desain Industri</span>
                    <span class="block truncate font-mono text-xs text-emerald-300">100202601768</span>
                  </span>
                </div>
              </div>
              <p class="mt-2 text-center text-[11px] leading-snug text-white/70">Salinan pindaian tersedia untuk verifikasi panitia.</p>
            </div>
          </Reveal>
        </template>
      </DeckSplitPanel>
    </div>
  </DeckShell>
</template>
