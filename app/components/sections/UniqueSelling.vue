<script setup lang="ts">
import UspDuelStrip from '~/components/UspDuelStrip.vue'
</script>

<template>
  <DeckShell section="usp">
    <Reveal :delay="0" class="w-full">
      <UspDuelStrip />
    </Reveal>
    <DeckAutoGrid :cols="3" class="mt-2.5 flex-1 md:mt-3">
      <Reveal :delay="0.08" class="h-full w-full min-w-0">
        <article class="relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-gm-ink bg-gm-ink p-4 text-left md:p-5">
          <span aria-hidden="true" class="pointer-events-none absolute -top-3 right-1 select-none font-headline text-[56px] font-extrabold leading-none text-white/10 md:text-[64px]">01</span>
          <div class="relative flex items-center justify-start gap-2.5">
            <span class="grid size-12 shrink-0 place-items-center rounded-2xl bg-white/10">
              <Icon name="lucide:brain" class="anim-float size-7 text-white" />
            </span>
            <div class="min-w-0">
              <p class="font-headline text-base font-extrabold uppercase tracking-[0.08em] text-emerald-300">Poin 01</p>
              <h3 class="font-headline text-xl font-extrabold text-white">AI yang membaca tanah</h3>
            </div>
          </div>
          <div class="relative mt-2 min-h-28 flex-1" aria-hidden="true">
            <svg viewBox="0 0 320 120" class="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet" role="presentation">
              <rect x="10" y="74" width="104" height="38" rx="10" fill="#4a3a28" stroke="#fcd34d" stroke-width="2.5" />
              <line x1="10" y1="88" x2="114" y2="88" stroke="#fcd34d" stroke-width="1.5" opacity="0.45" />
              <line x1="10" y1="100" x2="114" y2="100" stroke="#fcd34d" stroke-width="1.5" opacity="0.3" />
              <line x1="62" y1="34" x2="62" y2="78" stroke="#fcd34d" stroke-width="4" stroke-linecap="round" />
              <circle cx="62" cy="28" r="7" fill="#6ee7b7" />
              <circle class="anim-pulse-dot usp-origin" cx="62" cy="28" r="11" fill="none" stroke="#6ee7b7" stroke-width="2" />
              <path class="usp-arc" d="M78,18 A20,20 0 0 1 78,38" fill="none" stroke="#6ee7b7" stroke-width="3" stroke-linecap="round" />
              <path class="usp-arc usp-arc-b" d="M90,10 A32,32 0 0 1 90,46" fill="none" stroke="#6ee7b7" stroke-width="3" stroke-linecap="round" />
              <path class="usp-arc usp-arc-c" d="M102,2 A44,44 0 0 1 102,54" fill="none" stroke="#6ee7b7" stroke-width="3" stroke-linecap="round" />
              <rect x="140" y="14" width="40" height="28" rx="9" fill="#ffffff" stroke="#004d13" stroke-width="2.5" />
              <circle cx="152" cy="28" r="3.5" fill="#006e1c" />
              <circle cx="168" cy="28" r="3.5" fill="#4caf50" />
              <line x1="160" y1="28" x2="160" y2="28" stroke="#006e1c" stroke-width="2" />
              <line x1="156" y1="22" x2="164" y2="34" stroke="#006e1c" stroke-width="2" stroke-linecap="round" />
              <path class="anim-flow" d="M112,28 H138" fill="none" stroke="#6ee7b7" stroke-width="3" stroke-linecap="round" />
              <path class="anim-flow" d="M182,28 H232" fill="none" stroke="#6ee7b7" stroke-width="3" stroke-linecap="round" />
              <path class="usp-bob" d="M252,34 C244,46 239,52 239,60 A13,13 0 0 0 265,60 C265,52 260,46 252,34 Z" fill="#7cc4e8" />
              <circle class="anim-pulse-dot usp-origin" cx="252" cy="22" r="5" fill="#7cc4e8" />
              <path d="M252,86 C252,78 252,74 252,70" fill="none" stroke="#4caf50" stroke-width="3.5" stroke-linecap="round" />
              <path d="M252,78 C244,76 239,71 238,65 C246,66 251,71 252,78 Z" fill="#4caf50" />
              <path d="M252,82 C260,80 265,75 266,69 C258,70 253,75 252,82 Z" fill="#6ee7b7" />
              <line x1="232" y1="100" x2="272" y2="100" stroke="#6ee7b7" stroke-width="2.5" stroke-linecap="round" opacity="0.6" />
            </svg>
          </div>
          <p class="relative mt-2 text-base font-semibold leading-snug text-white">Floral Assistant membandingkan bacaan sensor tanah dengan ambang tanaman, dengan acuan musim Pranata Mangsa, lalu memerintahkan pompa menyiram. Air keluar hanya saat tanah kering.</p>
          <div class="relative mt-auto pt-2.5">
            <div class="flex items-center justify-start gap-2.5 rounded-xl bg-white/10 px-4 py-2.5 font-headline text-base font-extrabold text-white">
              <span class="anim-pulse-dot size-2.5 shrink-0 rounded-full bg-emerald-300" />
              <Icon name="lucide:badge-check" class="size-6 shrink-0 text-emerald-300" />
              <span>6 sensor presisi</span>
            </div>
          </div>
        </article>
      </Reveal>

      <Reveal :delay="0.16" class="h-full w-full min-w-0">
        <article class="relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-gm-line bg-gm-mist p-4 text-left md:p-5">
          <span aria-hidden="true" class="pointer-events-none absolute -top-3 right-1 select-none font-headline text-[56px] font-extrabold leading-none text-gm-ink/10 md:text-[64px]">02</span>
          <div class="relative flex items-center justify-start gap-2.5">
            <span class="grid size-12 shrink-0 place-items-center rounded-2xl bg-white">
              <Icon name="lucide:ruler" class="anim-float size-7 text-gm-primary" />
            </span>
            <div class="min-w-0">
              <p class="font-headline text-base font-extrabold uppercase tracking-[0.08em] text-gm-primary">Poin 02</p>
              <h3 class="font-headline text-xl font-extrabold text-gm-ink">Satu aplikasi untuk semua skala</h3>
            </div>
          </div>
          <div class="relative mt-2 min-h-28 flex-1" aria-hidden="true">
            <svg viewBox="0 0 320 120" class="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet" role="presentation">
              <path d="M34,52 h44 l-6,34 h-32 Z" fill="#faf3e3" stroke="#b7791f" stroke-width="2.5" stroke-linejoin="round" />
              <rect x="28" y="46" width="56" height="8" rx="4" fill="#b7791f" />
              <path d="M56,46 C56,38 56,34 56,30" fill="none" stroke="#006e1c" stroke-width="3" stroke-linecap="round" />
              <path d="M56,36 C50,34 47,30 46,26 C52,27 55,31 56,36 Z" fill="#4caf50" />
              <path d="M120,52 H172" fill="none" stroke="#006e1c" stroke-width="3" stroke-linecap="round" />
              <path class="anim-flow" d="M120,52 H172" fill="none" stroke="#4caf50" stroke-width="3" stroke-linecap="round" />
              <path d="M164,45 L174,52 L164,59" fill="none" stroke="#006e1c" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <rect x="186" y="18" width="124" height="84" rx="12" fill="#ffffff" stroke="#006e1c" stroke-width="2.5" />
              <path d="M196,34 h104 M196,34 l8,-4 M196,34 l8,4 M300,34 l-8,-4 M300,34 l-8,4" stroke="#006e1c" stroke-width="1.8" stroke-linecap="round" opacity="0.7" />
              <line x1="200" y1="52" x2="296" y2="52" stroke="#006e1c" stroke-width="2" opacity="0.5" />
              <line x1="200" y1="68" x2="296" y2="68" stroke="#006e1c" stroke-width="2" opacity="0.5" />
              <line x1="200" y1="84" x2="296" y2="84" stroke="#006e1c" stroke-width="2" opacity="0.5" />
              <circle cx="222" cy="52" r="4" fill="#4caf50" />
              <circle cx="262" cy="52" r="4" fill="#4caf50" />
              <circle cx="242" cy="68" r="4" fill="#4caf50" />
              <circle cx="282" cy="68" r="4" fill="#4caf50" />
              <circle cx="222" cy="84" r="4" fill="#4caf50" />
              <circle cx="262" cy="84" r="4" fill="#4caf50" />
              <circle class="anim-pulse-dot usp-origin" cx="292" cy="28" r="5" fill="#006e1c" />
            </svg>
          </div>
          <p class="relative mt-2 text-base font-semibold leading-snug text-gm-ink">Satu aplikasi mengendalikan pot di meja sampai lahan 1 hektar.</p>
          <div class="relative mt-auto pt-2.5">
            <div class="flex items-center justify-start gap-2.5 rounded-xl border border-gm-line bg-white px-4 py-2.5 font-headline text-base font-extrabold text-gm-ink">
              <span class="anim-pulse-dot size-2.5 shrink-0 rounded-full bg-gm-primary" />
              <Icon name="lucide:badge-check" class="size-6 shrink-0 text-gm-primary" />
              <span>20 cm ke 1 hektar</span>
            </div>
          </div>
        </article>
      </Reveal>

      <Reveal :delay="0.24" class="h-full w-full min-w-0">
        <article class="relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-gm-line bg-gm-amberbg p-4 text-left md:p-5">
          <span aria-hidden="true" class="pointer-events-none absolute -top-3 right-1 select-none font-headline text-[56px] font-extrabold leading-none text-gm-ink/10 md:text-[64px]">03</span>
          <div class="relative flex items-center justify-start gap-2.5">
            <span class="grid size-12 shrink-0 place-items-center rounded-2xl bg-white">
              <Icon name="lucide:wifi-off" class="anim-float size-7 text-gm-amber" />
            </span>
            <div class="min-w-0">
              <p class="font-headline text-base font-extrabold uppercase tracking-[0.08em] text-gm-amber">Poin 03</p>
              <h3 class="font-headline text-xl font-extrabold text-gm-ink">Jalan saat internet mati</h3>
            </div>
          </div>
          <div class="relative mt-2 min-h-28 flex-1" aria-hidden="true">
            <svg viewBox="0 0 320 120" class="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet" role="presentation">
              <circle cx="80" cy="86" r="6" fill="#b7791f" />
              <path d="M62,72 A26,26 0 0 1 98,72" fill="none" stroke="#b7791f" stroke-width="4" stroke-linecap="round" />
              <path class="usp-arc" d="M50,60 A42,42 0 0 1 110,60" fill="none" stroke="#b7791f" stroke-width="4" stroke-linecap="round" />
              <path class="usp-arc usp-arc-b" d="M38,48 A58,58 0 0 1 122,48" fill="none" stroke="#b7791f" stroke-width="4" stroke-linecap="round" opacity="0.65" />
              <line x1="44" y1="34" x2="116" y2="98" stroke="#c0392b" stroke-width="5" stroke-linecap="round" />
              <g class="usp-spin">
                <circle cx="220" cy="44" r="14" fill="#f4c542" stroke="#b7791f" stroke-width="2.5" />
                <g stroke="#b7791f" stroke-width="3" stroke-linecap="round">
                  <line x1="220" y1="20" x2="220" y2="26" />
                  <line x1="220" y1="62" x2="220" y2="68" />
                  <line x1="196" y1="44" x2="202" y2="44" />
                  <line x1="238" y1="44" x2="244" y2="44" />
                  <line x1="203" y1="27" x2="207" y2="31" />
                  <line x1="233" y1="57" x2="237" y2="61" />
                  <line x1="237" y1="27" x2="233" y2="31" />
                  <line x1="207" y1="57" x2="203" y2="61" />
                </g>
              </g>
              <rect x="196" y="76" width="52" height="26" rx="7" fill="#ffffff" stroke="#006e1c" stroke-width="2.5" />
              <rect x="242" y="82" width="8" height="14" rx="2.5" fill="#006e1c" />
              <rect x="201" y="81" width="24" height="16" rx="4" fill="#4caf50" />
              <rect x="262" y="76" width="34" height="26" rx="7" fill="#ffffff" stroke="#006e1c" stroke-width="2.5" />
              <line x1="268" y1="96" x2="268" y2="86" stroke="#4caf50" stroke-width="3" stroke-linecap="round" />
              <line x1="275" y1="96" x2="275" y2="80" stroke="#4caf50" stroke-width="3" stroke-linecap="round" />
              <line x1="282" y1="96" x2="282" y2="86" stroke="#4caf50" stroke-width="3" stroke-linecap="round" />
              <line x1="289" y1="96" x2="289" y2="80" stroke="#4caf50" stroke-width="3" stroke-linecap="round" />
              <circle class="anim-pulse-dot usp-origin" cx="220" cy="96" r="5" fill="#006e1c" />
            </svg>
          </div>
          <p class="relative mt-2 text-base font-semibold leading-snug text-gm-ink">Unit tetap beroperasi saat WiFi mati; tersedia pilihan surya dan modem SIM untuk lokasi tanpa listrik.</p>
          <div class="relative mt-auto pt-2.5">
            <div class="flex items-center justify-start gap-2.5 rounded-xl border border-gm-line bg-white px-4 py-2.5 font-headline text-base font-extrabold text-gm-ink">
              <span class="anim-pulse-dot size-2.5 shrink-0 rounded-full bg-gm-amber" />
              <Icon name="lucide:badge-check" class="size-6 shrink-0 text-gm-amber" />
              <span>Beroperasi tetap meski WiFi mati</span>
            </div>
          </div>
        </article>
      </Reveal>
    </DeckAutoGrid>
  </DeckShell>
</template>

<style scoped>
@keyframes usp-arc-pulse {
  0%, 100% { opacity: 0.25; }
  50% { opacity: 1; }
}
.usp-arc {
  animation: usp-arc-pulse 1.8s ease-in-out infinite;
}
.usp-arc-b { animation-delay: 0.25s; }
.usp-arc-c { animation-delay: 0.5s; }
@keyframes usp-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}
.usp-bob {
  animation: usp-bob 2.6s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: center;
}
@keyframes usp-spin-slow {
  to { transform: rotate(360deg); }
}
.usp-spin {
  animation: usp-spin-slow 26s linear infinite;
  transform-box: fill-box;
  transform-origin: center;
}
.usp-origin {
  transform-box: fill-box;
  transform-origin: center;
}
@media (prefers-reduced-motion: reduce) {
  .usp-arc, .usp-bob, .usp-spin { animation: none; }
}
</style>
