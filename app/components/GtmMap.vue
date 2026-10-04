<script setup lang="ts">
const props = defineProps<{ kanal: number; ritel: number; agenda: number }>()
</script>

<template>
  <div class="w-full rounded-3xl bg-gm-ink p-2.5 text-left text-white md:p-3">
    <div class="flex items-start justify-between gap-2">
      <div class="flex min-w-0 items-center gap-2">
        <span class="grid size-8 shrink-0 place-items-center rounded-xl bg-gm-amber">
          <Icon name="lucide:map-pin" class="size-4 text-gm-ink" />
        </span>
        <span class="min-w-0">
          <span class="block font-headline text-sm font-extrabold leading-tight text-white md:text-base">Papan komando Bantul</span>
          <span class="block text-[11px] leading-snug text-white/60 md:text-xs">Dari sinyal daring ke bukti luring</span>
        </span>
      </div>
      <div class="flex shrink-0 items-start gap-3 text-left">
        <div>
          <div class="font-headline text-base font-extrabold tabular-nums leading-tight text-white md:text-lg">{{ props.kanal }}</div>
          <div class="text-[10px] leading-tight text-white/60 md:text-[11px]">kanal<br />digital</div>
        </div>
        <div>
          <div class="font-headline text-base font-extrabold tabular-nums leading-tight text-white md:text-lg">{{ props.ritel }}</div>
          <div class="text-[10px] leading-tight text-white/60 md:text-[11px]">ritel<br />konsinyasi</div>
        </div>
        <div>
          <div class="font-headline text-base font-extrabold tabular-nums leading-tight text-white md:text-lg">{{ props.agenda }}</div>
          <div class="text-[10px] leading-tight text-white/60 md:text-[11px]">agenda<br />lapangan</div>
        </div>
      </div>
    </div>

    <svg viewBox="0 0 640 312" class="mt-1 h-auto w-full" role="img" aria-label="Peta misi Bantul dari kanal daring ke titik darat">
      <title>Peta misi Bantul</title>
      <g fill="none" stroke-linecap="round">
        <path d="M-10,232 C120,224 220,206 330,200 C440,196 540,180 650,170" stroke="#e9f4ea" stroke-opacity="0.22" stroke-width="7" />
        <path d="M150,-10 C160,80 130,180 150,322" stroke="#e9f4ea" stroke-opacity="0.16" stroke-width="5" />
        <path d="M492,-10 C478,70 516,140 498,210 C488,252 496,282 492,322" stroke="#e9f4ea" stroke-opacity="0.45" stroke-width="3" stroke-dasharray="8 6" />
      </g>
      <text x="352" y="190" text-anchor="start" font-size="11" fill="#e9f4ea" fill-opacity="0.55">Ruas Bantul</text>
      <text x="518" y="170" text-anchor="start" font-size="11" fill="#e9f4ea" fill-opacity="0.55">Sungai</text>

      <g class="anim-float" opacity="0.55">
        <path d="M64,258 c8,-10 20,-10 26,0 c-6,10 -18,10 -26,0 Z" fill="#4caf50" />
      </g>
      <g class="anim-float" style="animation-delay: 1.2s" opacity="0.55">
        <path d="M578,120 c8,-10 20,-10 26,0 c-6,10 -18,10 -26,0 Z" fill="#4caf50" />
      </g>
      <g class="anim-float" style="animation-delay: 2.1s" opacity="0.55">
        <path d="M258,40 c8,-10 20,-10 26,0 c-6,10 -18,10 -26,0 Z" fill="#4caf50" />
      </g>
      <circle class="gtm-shimmer" cx="82" cy="246" r="2" fill="#ffffff" opacity="0.8" />
      <circle class="gtm-shimmer" cx="592" cy="108" r="2" fill="#ffffff" opacity="0.8" />
      <circle class="gtm-shimmer" cx="274" cy="30" r="1.6" fill="#ffffff" opacity="0.8" />

      <line class="gtm-thread anim-flow" x1="200" y1="6" x2="200" y2="140" stroke="#b7791f" stroke-width="2" stroke-dasharray="6 6" />
      <line class="gtm-thread anim-flow" x1="430" y1="6" x2="430" y2="138" stroke="#b7791f" stroke-width="2" stroke-dasharray="6 6" />
      <circle class="gtm-pulse" cx="200" cy="80" r="4.5" fill="#b7791f" stroke="#faf3e3" stroke-width="1.5" />
      <circle class="gtm-pulse" cx="430" cy="80" r="4.5" fill="#b7791f" stroke="#faf3e3" stroke-width="1.5" />

      <path class="anim-flow" d="M100,70 C200,44 300,96 400,80 C450,72 490,70 528,68" fill="none" stroke="#b7791f" stroke-width="2.5" stroke-dasharray="7 6" stroke-linecap="round" />

      <g class="gtm-pin">
        <path d="M76,80 L88,62 L100,80 Z" fill="#1a1c1c" stroke="#e9f4ea" stroke-width="2" stroke-linejoin="round" />
        <path d="M85,80 L88,72 L91,80 Z" fill="#b7791f" />
        <text x="88" y="100" text-anchor="middle" font-size="12" font-weight="800" fill="#ffffff">Taman Pasty</text>
        <text x="88" y="113" text-anchor="middle" font-size="11" fill="#e9f4ea" fill-opacity="0.7">sosialisasi</text>
      </g>
      <g class="gtm-pin">
        <line x1="540" y1="56" x2="540" y2="78" stroke="#e9f4ea" stroke-width="2.5" stroke-linecap="round" />
        <path d="M540,56 L558,60 L540,64 Z" fill="#b7791f" />
        <text x="552" y="42" text-anchor="end" font-size="12" font-weight="800" fill="#ffffff">Bantul Creative Expo</text>
        <text x="552" y="55" text-anchor="end" font-size="11" fill="#e9f4ea" fill-opacity="0.7">pameran</text>
      </g>

      <g class="gtm-pin">
        <circle cx="200" cy="158" r="14" fill="#b7791f" />
        <path d="M193,158 L200,151 L207,158 Z" fill="#ffffff" />
        <rect x="195" y="158" width="10" height="6" fill="#ffffff" />
        <rect x="198.2" y="159.5" width="3.6" height="4.5" fill="#b7791f" />
        <circle cx="212" cy="146" r="8" fill="#ffffff" />
        <text x="212" y="146" text-anchor="middle" dominant-baseline="central" font-size="11" font-weight="800" fill="#1a1c1c">1</text>
        <text x="200" y="184" text-anchor="middle" font-size="13" font-weight="800" fill="#ffffff">Mulyo Tani</text>
        <text x="200" y="198" text-anchor="middle" font-size="11" fill="#e9f4ea" fill-opacity="0.75">alat dan sarana tani</text>
      </g>
      <g class="gtm-pin">
        <circle cx="430" cy="156" r="14" fill="#b7791f" />
        <path d="M423,156 L430,149 L437,156 Z" fill="#ffffff" />
        <rect x="425" y="156" width="10" height="6" fill="#ffffff" />
        <rect x="428.2" y="157.5" width="3.6" height="4.5" fill="#b7791f" />
        <circle cx="442" cy="144" r="8" fill="#ffffff" />
        <text x="442" y="144" text-anchor="middle" dominant-baseline="central" font-size="11" font-weight="800" fill="#1a1c1c">2</text>
        <text x="430" y="182" text-anchor="middle" font-size="13" font-weight="800" fill="#ffffff">Utama Elektronik</text>
        <text x="430" y="196" text-anchor="middle" font-size="11" fill="#e9f4ea" fill-opacity="0.75">komponen dan rakit</text>
      </g>

      <g>
        <circle class="gtm-ring" cx="315" cy="256" r="22" fill="none" stroke="#b7791f" stroke-width="2" />
        <circle class="gtm-ring" cx="315" cy="256" r="32" fill="none" stroke="#b7791f" stroke-width="1.5" />
        <circle cx="315" cy="256" r="12" fill="#b7791f" />
        <g fill="#ffffff">
          <rect x="309" y="250" width="4.5" height="4.5" />
          <rect x="316.5" y="250" width="4.5" height="4.5" />
          <rect x="309" y="257.5" width="4.5" height="4.5" />
          <rect x="317.5" y="258.5" width="2.5" height="2.5" />
        </g>
        <text x="315" y="288" text-anchor="middle" font-size="12" font-weight="800" fill="#faf3e3">growmate.bond</text>
        <text x="315" y="301" text-anchor="middle" font-size="11" fill="#e9f4ea" fill-opacity="0.75">katalog dan demo live</text>
      </g>
    </svg>

    <div class="mt-1.5 flex flex-wrap items-center justify-start gap-x-3 gap-y-1 text-[11px] text-white/70">
      <span class="flex items-center gap-1.5">
        <span class="h-1 w-5 rounded-full bg-gm-mist/60" aria-hidden="true" /> jalan
      </span>
      <span class="flex items-center gap-1.5">
        <span class="h-0 w-5 border-t-2 border-dashed border-gm-mist/60" aria-hidden="true" /> sungai
      </span>
      <span class="flex items-center gap-1.5">
        <span class="h-0 w-5 border-t-2 border-dashed border-gm-amber" aria-hidden="true" /> alur sinyal
      </span>
      <span class="flex items-center gap-1.5">
        <span class="size-2 rounded-full bg-gm-amber" aria-hidden="true" /> simpul darat
      </span>
    </div>
  </div>
</template>
