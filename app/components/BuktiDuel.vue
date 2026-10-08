<script setup lang="ts">
// Ilustrasi murni SVG untuk strip duel dua pot. Tanpa foto.
</script>

<template>
  <div class="w-full max-w-full overflow-hidden rounded-2xl border border-gm-line bg-gm-panel px-3 py-1.5 text-left">
    <svg
      viewBox="0 0 800 124"
      class="h-[120px] w-full max-w-full lg:h-[132px]"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="8" y="16" width="336" height="92" rx="14" fill="#f3ede3" />
      <rect x="456" y="16" width="336" height="92" rx="14" fill="#e6f3ea" />

      <text x="28" y="36" font-size="16" font-weight="800" fill="#7d6a58" letter-spacing="1">Sebelum</text>
      <text x="476" y="36" font-size="16" font-weight="800" fill="#006e1c" letter-spacing="1">Sesudah</text>

      <g>
        <ellipse cx="150" cy="72" rx="40" ry="7" fill="#6b5d4f" />
        <path d="M130 71 L140 74 L149 70 L160 74 L172 70" stroke="#3e352d" stroke-width="1.5" fill="none" stroke-linecap="round" />
        <path d="M110 76 L118 96 L182 96 L190 76 Z" fill="#a08a76" stroke="#7d6a58" stroke-width="2" stroke-linejoin="round" />
        <rect x="106" y="69" width="88" height="10" rx="3" fill="#8a7561" />
        <path d="M150 70 C130 66 105 68 88 82" stroke="#8a9a83" stroke-width="7" stroke-linecap="round" fill="none" />
        <ellipse cx="86" cy="83" rx="12" ry="7" fill="#9aa88f" transform="rotate(-24 86 83)" />
        <path d="M150 70 C170 66 195 68 212 82" stroke="#8a9a83" stroke-width="7" stroke-linecap="round" fill="none" />
        <ellipse cx="214" cy="83" rx="12" ry="7" fill="#9aa88f" transform="rotate(24 214 83)" />
        <path d="M150 70 C148 56 138 50 122 45" stroke="#8a9a83" stroke-width="6" stroke-linecap="round" fill="none" />
        <ellipse cx="120" cy="44" rx="10" ry="6" fill="#a7b59d" transform="rotate(-28 120 44)" />
        <path d="M150 70 C155 58 165 53 178 54 L170 66 Z" fill="#d8d5cc" stroke="#b9b6ac" stroke-width="1.5" />
      </g>

      <g>
        <circle cx="272" cy="48" r="15" fill="#ffffff" stroke="#b9c1b8" stroke-width="2" />
        <path d="M272 48 L272 39 M272 48 L279 51" stroke="#5a6658" stroke-width="2" stroke-linecap="round" />
        <text x="292" y="78" text-anchor="middle" font-size="16" font-weight="700" fill="#5a6658">45 menit sehari</text>
        <text x="292" y="96" text-anchor="middle" font-size="16" font-weight="600" fill="#8a9389">layu</text>
      </g>

      <g>
        <circle cx="748" cy="30" r="12" fill="#ffcf5c" />
        <g stroke="#ffcf5c" stroke-width="2" stroke-linecap="round">
          <path d="M748 12 L748 16 M730 30 L734 30 M762 30 L766 30 M735 17 L738 20 M761 17 L758 20" />
        </g>
        <ellipse cx="636" cy="72" rx="46" ry="7" fill="#3a2e26" />
        <path d="M588 76 L596 96 L676 96 L684 76 Z" fill="#c96f2e" stroke="#9a5220" stroke-width="2" stroke-linejoin="round" />
        <rect x="584" y="69" width="104" height="10" rx="3" fill="#b35f26" />
        <path d="M636 70 C630 48 622 36 606 24 C622 22 638 36 642 60 Z" fill="#0f7a2e" />
        <path d="M638 70 C640 46 646 34 662 24 C668 38 656 56 644 68 Z" fill="#1a9a3c" />
        <path d="M636 70 C626 52 624 38 628 26 C640 32 644 50 640 66 Z" fill="#2fb457" />
        <path d="M640 70 C648 52 650 38 646 26 C658 32 656 52 646 68 Z" fill="#4caf6d" />
        <path d="M612 40 c3 4 5 6.5 5 9 a5 5 0 0 1 -10 0 c0 -2.5 2 -5 5 -9z" fill="#2aa7de" />
        <path d="M664 38 c2.5 3.5 4 5.5 4 7.5 a4 4 0 0 1 -8 0 c0 -2 1.5 -4 4 -7.5z" fill="#2aa7de" opacity="0.9" />
        <path d="M588 44 c2 3 3.5 4.8 3.5 6.8 a3.5 3.5 0 0 1 -7 0 c0 -2 1.5 -3.8 3.5 -6.8z" fill="#5cc0e8" />
      </g>

      <g>
        <circle cx="712" cy="52" r="12" fill="#ffffff" stroke="#9ec7a8" stroke-width="2" />
        <path d="M712 52 L712 45 M712 52 L717 54" stroke="#006e1c" stroke-width="2" stroke-linecap="round" />
        <text x="740" y="80" text-anchor="middle" font-size="16" font-weight="700" fill="#006e1c">5 menit sehari</text>
        <text x="740" y="96" text-anchor="middle" font-size="16" font-weight="600" fill="#4a7a58">segar</text>
      </g>

      <line x1="400" y1="22" x2="400" y2="102" stroke="#c9cfc8" stroke-width="2" />
      <rect x="384" y="16" width="32" height="18" rx="8" fill="#006e1c" />
      <text x="400" y="29" text-anchor="middle" font-size="16" font-weight="800" fill="#ffffff">VS</text>
      <g>
        <path d="M400 38 c7 9 12 15 12 21.5 a12 12 0 0 1 -24 0 c0 -6.5 5 -12.5 12 -21.5z" fill="#2aa7de" stroke="#157aa5" stroke-width="2" />
        <circle cx="395.5" cy="58" r="2.2" fill="#ffffff" />
        <circle cx="404.5" cy="58" r="2.2" fill="#ffffff" />
        <circle cx="395.8" cy="58.2" r="1" fill="#123" />
        <circle cx="404.8" cy="58.2" r="1" fill="#123" />
        <path d="M396 63.5 Q400 66.5 404 63.5" stroke="#ffffff" stroke-width="1.6" fill="none" stroke-linecap="round" />
      </g>
    </svg>
  </div>
</template>
