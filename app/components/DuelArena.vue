<script setup lang="ts">
import gsap from 'gsap'

interface DuelRow {
  label: string
  foe: 'yes' | 'no'
}

// Tujuh indikator sesuai tabel referensi. Baris 1 dan 2 milik semua.
// Baris 3 sampai 7 hanya milik GrowMate. Skor akhir 7 lawan 2.
const rows: DuelRow[] = [
  { label: 'Otomatisasi', foe: 'yes' },
  { label: 'Konektivitas web dan aplikasi', foe: 'yes' },
  { label: 'Integrasi agen AI', foe: 'no' },
  { label: 'Harga lebih kompetitif', foe: 'no' },
  { label: 'Fleksibilitas ukuran lahan', foe: 'no' },
  { label: 'Fitur komunitas', foe: 'no' },
  { label: 'Fitur Marketplace', foe: 'no' },
]

const root = ref<HTMLElement | null>(null)
const gmNum = ref<HTMLElement | null>(null)
const foeNum = ref<HTMLElement | null>(null)
let ctx: gsap.Context | null = null

onMounted(() => {
  const showFinal = () => {
    if (gmNum.value) gmNum.value.textContent = '7'
    if (foeNum.value) foeNum.value.textContent = '2'
  }
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    showFinal()
    return
  }
  ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
    tl.fromTo(
      '.duel-vs',
      { scale: 0, rotation: -14 },
      { scale: 1, rotation: 0, duration: 0.45, ease: 'back.out(2.2)' },
    )
      .to('.duel-vs', { keyframes: [{ x: -5 }, { x: 5 }, { x: -3 }, { x: 0 }], duration: 0.35 })
      .fromTo(
        '.duel-gm-fill',
        { x: 56, opacity: 0, scaleX: 0.5, transformOrigin: '0% 50%' },
        { x: 0, opacity: 1, scaleX: 1, duration: 0.5, stagger: 0.09 },
        0.35,
      )
      .fromTo(
        '.duel-foe-fill',
        { scaleX: 1.8, opacity: 0, transformOrigin: '100% 50%' },
        { scaleX: 1, opacity: 1, duration: 0.45, stagger: 0.09 },
        0.35,
      )
      .fromTo(
        '.duel-stamp',
        { scale: 2.4, opacity: 0, rotation: -6 },
        { scale: 1, opacity: 1, duration: 0.35, ease: 'power4.in' },
        '-=0.15',
      )
    const score = { gm: 0, foe: 0 }
    gsap.to(score, {
      gm: 7,
      foe: 2,
      duration: 1.2,
      delay: 0.4,
      ease: 'power1.out',
      onUpdate: () => {
        if (gmNum.value) gmNum.value.textContent = String(Math.round(score.gm))
        if (foeNum.value) foeNum.value.textContent = String(Math.round(score.foe))
      },
    })
  }, root.value ?? undefined)
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <div
    ref="root"
    class="relative w-full overflow-hidden rounded-3xl border-2 border-gm-line bg-white p-1.5 text-left"
  >
    <div class="flex flex-wrap items-center justify-start gap-x-2.5 gap-y-1 text-left">
      <span class="font-headline text-base font-extrabold uppercase tracking-[0.14em] text-gm-muted">
        Skor duel
      </span>
      <span
        class="rounded-lg bg-gm-ink px-3 py-1 font-headline text-base font-extrabold tabular-nums text-white"
      >
        <span ref="gmNum">0</span> : <span ref="foeNum">0</span>
      </span>
      <span class="ml-auto break-words text-right text-base text-gm-muted">Ronde 1 melawan Tuya dan Click &amp; Grow.</span>
    </div>

    <div class="mt-1 grid grid-cols-[1fr_auto_1fr] items-stretch gap-1.5">
      <div class="grid min-w-0 grid-cols-2 justify-center gap-1.5 rounded-2xl border border-gm-line bg-gm-panel px-2 py-1">
        <div class="flex min-w-0 flex-col items-start gap-0.5">
          <BrandMark brand="tuya" />
          <div class="flex w-full min-w-0 items-center gap-1">
            <svg viewBox="0 0 48 48" class="size-6 shrink-0" aria-hidden="true">
              <path d="M25 9 C22 7 20 5 19 2.5" fill="none" stroke="#8a918e" stroke-width="2.5" stroke-linecap="round" />
              <circle cx="18.5" cy="2.5" r="1.8" fill="#8a918e" />
              <path d="M39 4 h5 l-5 6 h5" fill="none" stroke="#8a918e" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
              <rect x="9" y="9" width="30" height="28" rx="7" fill="#b9c0bd" />
              <rect x="9" y="9" width="30" height="28" rx="7" fill="none" stroke="#8a918e" stroke-width="2" />
              <line x1="15" y1="20" x2="21" y2="21.5" stroke="#5c6360" stroke-width="2.2" stroke-linecap="round" />
              <line x1="27" y1="21.5" x2="33" y2="20" stroke="#5c6360" stroke-width="2.2" stroke-linecap="round" />
              <line x1="19" y1="30" x2="29" y2="30" stroke="#5c6360" stroke-width="2.2" stroke-linecap="round" />
            </svg>
            <p class="min-w-0 flex-1 break-words font-headline text-base font-extrabold uppercase leading-none tracking-wide text-gm-ink">
              Tuya
            </p>
          </div>
          <p class="w-full break-words text-base font-medium leading-tight text-gm-muted">platform IoT umum</p>
        </div>
        <div class="flex min-w-0 flex-col items-start gap-0.5">
          <BrandMark brand="clickgrow" />
          <div class="flex w-full min-w-0 items-center gap-1">
            <svg viewBox="0 0 48 48" class="size-6 shrink-0" aria-hidden="true">
              <path d="M24 12 C21 7 16 5 12 7 C14 12 19 14 24 12 Z" fill="#9aa3a0" />
              <path d="M24 12 C27 7 32 5 36 7 C34 12 29 14 24 12 Z" fill="#6b7270" />
              <path d="M14 20 h20 l-2.5 18 h-15 Z" fill="#b9c0bd" />
              <path d="M14 20 h20 l-2.5 18 h-15 Z" fill="none" stroke="#6b7270" stroke-width="2" stroke-linejoin="round" />
              <rect x="12" y="16" width="24" height="5" rx="2" fill="#8a918e" />
            </svg>
            <p class="min-w-0 flex-1 break-words font-headline text-base font-extrabold uppercase leading-none tracking-wide text-gm-ink">
              Click &amp; Grow
            </p>
          </div>
          <p class="w-full break-words text-base font-medium leading-tight text-gm-muted">kebun pintar impor</p>
        </div>
      </div>

      <div class="grid place-items-center px-0.5">
        <span
          class="duel-vs grid size-9 place-items-center rounded-full bg-gm-ink font-headline text-xl font-extrabold text-white"
        >
          VS
        </span>
      </div>

      <div class="flex min-w-0 flex-wrap items-center gap-1.5 rounded-2xl border-2 border-gm-primary/40 bg-gm-mist px-2 py-1">
        <svg viewBox="0 0 48 48" class="anim-float size-11 shrink-0" aria-hidden="true">
          <path d="M15 9 a9 9 0 0 1 18 0" fill="none" stroke="#4caf50" stroke-width="2" stroke-linecap="round" />
          <path d="M19 6 a5 5 0 0 1 10 0" fill="none" stroke="#4caf50" stroke-width="1.6" stroke-linecap="round" />
          <path d="M24 13 C20 7 14 6 10 8 C12 13 18 15 24 13 Z" fill="#4caf50" />
          <path d="M24 13 C28 7 34 6 38 8 C36 13 30 15 24 13 Z" fill="#006e1c" />
          <rect x="11" y="14" width="26" height="24" rx="5" fill="#8b5e34" />
          <rect x="11" y="14" width="26" height="24" rx="5" fill="none" stroke="#5e3d1e" stroke-width="2" />
          <line x1="19.5" y1="15" x2="19.5" y2="37" stroke="#5e3d1e" stroke-width="1.4" />
          <line x1="28.5" y1="15" x2="28.5" y2="37" stroke="#5e3d1e" stroke-width="1.4" />
          <path d="M15 22 L22 23.5 L21 26.5 L15 25.5 Z" fill="#fff" />
          <path d="M33 22 L26 23.5 L27 26.5 L33 25.5 Z" fill="#fff" />
          <circle cx="19" cy="24.5" r="1.5" fill="#1a1c1c" />
          <circle cx="29" cy="24.5" r="1.5" fill="#1a1c1c" />
          <path d="M19 32 Q24 35 29 32" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" />
        </svg>
        <div class="min-w-0 flex-1">
          <p class="break-words font-headline text-base font-extrabold uppercase leading-none tracking-wide text-gm-primary">
            GrowMate
          </p>
          <p class="break-words text-base font-medium leading-tight text-gm-muted">AI Agen lokal</p>
        </div>
        <BrandMark brand="growmate" />
      </div>
    </div>

    <div class="mt-1.5 flex flex-col gap-1">
      <DuelBar v-for="r in rows" :key="r.label" :label="r.label" :foe="r.foe" />
    </div>

    <div
      class="duel-stamp pointer-events-none absolute right-2 top-[30%] z-10 max-w-[44%] border-[2.5px] border-gm-amber/70 bg-white/50 px-2 py-1 text-center md:right-3"
      style="transform: rotate(-6deg)"
      aria-hidden="true"
    >
      <p class="font-headline text-base font-extrabold uppercase leading-tight tracking-[0.12em] text-gm-amber/90">
        Unggul 7 lawan 2
      </p>
    </div>
  </div>
</template>
