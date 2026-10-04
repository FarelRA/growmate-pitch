<script setup lang="ts">
/* Horizontal valve pipe bridging dry soil to measured soil. Pure SVG, no props. */
</script>

<template>
  <div class="latar-river pointer-events-none" aria-hidden="true">
    <svg viewBox="0 0 200 150" class="h-auto w-full drop-shadow-md" role="presentation">
      <rect x="6" y="72" width="52" height="70" rx="8" fill="#f3e7c8" stroke="#b7791f" stroke-width="2.5" />
      <line x1="6" y1="96" x2="58" y2="96" stroke="#b7791f" stroke-width="1.5" opacity="0.5" />
      <line x1="6" y1="118" x2="58" y2="118" stroke="#b7791f" stroke-width="1.5" opacity="0.35" />
      <polyline class="latar-crack" points="18,76 24,88 20,98 28,108" fill="none" stroke="#b7791f" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      <polyline class="latar-crack" points="42,76 38,90 44,100 40,112" fill="none" stroke="#b7791f" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />

      <rect x="142" y="72" width="52" height="70" rx="8" fill="#d9e8d5" stroke="#006e1c" stroke-width="2.5" />
      <line x1="142" y1="96" x2="194" y2="96" stroke="#006e1c" stroke-width="1.5" opacity="0.4" />
      <line x1="142" y1="118" x2="194" y2="118" stroke="#006e1c" stroke-width="1.5" opacity="0.3" />
      <path d="M168,72 C168,62 168,56 168,48" fill="none" stroke="#006e1c" stroke-width="3" stroke-linecap="round" />
      <path d="M168,56 C160,54 155,48 154,42 C162,43 167,48 168,56 Z" fill="#4caf50" />
      <path d="M168,62 C176,60 181,54 182,48 C174,49 169,54 168,62 Z" fill="#006e1c" />
      <circle class="anim-pulse-dot" cx="186" cy="84" r="4" fill="#006e1c" style="transform-box: fill-box; transform-origin: center;" />

      <rect x="44" y="50" width="112" height="22" rx="11" fill="#ffffff" stroke="#1a1c1c" stroke-width="3" />
      <rect x="41" y="46" width="6" height="30" rx="2.5" fill="#1a1c1c" />
      <rect x="153" y="46" width="6" height="30" rx="2.5" fill="#1a1c1c" />
      <path class="latar-draw" d="M50,61 H150" fill="none" stroke="#4caf50" stroke-width="5" stroke-linecap="round" pathLength="120" style="stroke-dasharray: 120;" />
      <path class="anim-flow" d="M50,61 H150" fill="none" stroke="#006e1c" stroke-width="2.5" stroke-linecap="round" />
      <circle cx="0" cy="0" r="3.5" fill="#006e1c" opacity="0.9">
        <animateMotion dur="1.8s" repeatCount="indefinite" path="M52,61 H148" />
      </circle>
      <circle cx="0" cy="0" r="2.5" fill="#4caf50" opacity="0.9">
        <animateMotion dur="2.6s" begin="-1.2s" repeatCount="indefinite" path="M52,61 H148" />
      </circle>

      <rect x="93" y="42" width="14" height="38" rx="4" fill="#006e1c" stroke="#004d13" stroke-width="2" />
      <line x1="100" y1="30" x2="100" y2="42" stroke="#004d13" stroke-width="4" />
      <g class="latar-valve-wheel" style="transform-box: fill-box; transform-origin: center;">
        <circle cx="100" cy="22" r="13" fill="#ffffff" stroke="#004d13" stroke-width="4" />
        <line x1="100" y1="9" x2="100" y2="35" stroke="#004d13" stroke-width="3" stroke-linecap="round" />
        <line x1="87" y1="22" x2="113" y2="22" stroke="#004d13" stroke-width="3" stroke-linecap="round" />
        <circle cx="100" cy="22" r="3" fill="#004d13" />
      </g>
    </svg>
  </div>
</template>
