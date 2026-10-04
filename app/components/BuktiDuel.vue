<script setup lang="ts">
// Ilustrasi murni SVG untuk strip duel dua pot. Tanpa foto.
</script>

<template>
  <div class="w-full max-w-full overflow-hidden rounded-2xl border border-gm-line bg-gm-panel px-2 py-1">
    <svg
      viewBox="0 0 800 96"
      class="h-[88px] w-full max-w-full md:h-[96px]"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="8" y="8" width="336" height="80" rx="14" fill="#f3ede3" />
      <rect x="456" y="8" width="336" height="80" rx="14" fill="#e6f3ea" />

      <text x="28" y="28" font-size="11" font-weight="800" fill="#7d6a58" letter-spacing="1">Sebelum</text>
      <text x="476" y="28" font-size="11" font-weight="800" fill="#006e1c" letter-spacing="1">Sesudah</text>

      <g>
        <ellipse cx="150" cy="64" rx="40" ry="7" fill="#6b5d4f" />
        <path d="M130 63 L140 66 L149 62 L160 66 L172 62" stroke="#3e352d" stroke-width="1.5" fill="none" stroke-linecap="round" />
        <path d="M110 68 L118 88 L182 88 L190 68 Z" fill="#a08a76" stroke="#7d6a58" stroke-width="2" stroke-linejoin="round" />
        <rect x="106" y="61" width="88" height="10" rx="3" fill="#8a7561" />
        <path d="M150 62 C130 58 105 60 88 74" stroke="#8a9a83" stroke-width="7" stroke-linecap="round" fill="none" />
        <ellipse cx="86" cy="75" rx="12" ry="7" fill="#9aa88f" transform="rotate(-24 86 75)" />
        <path d="M150 62 C170 58 195 60 212 74" stroke="#8a9a83" stroke-width="7" stroke-linecap="round" fill="none" />
        <ellipse cx="214" cy="75" rx="12" ry="7" fill="#9aa88f" transform="rotate(24 214 75)" />
        <path d="M150 62 C148 48 138 42 122 37" stroke="#8a9a83" stroke-width="6" stroke-linecap="round" fill="none" />
        <ellipse cx="120" cy="36" rx="10" ry="6" fill="#a7b59d" transform="rotate(-28 120 36)" />
        <path d="M150 62 C155 50 165 45 178 46 L170 58 Z" fill="#d8d5cc" stroke="#b9b6ac" stroke-width="1.5" />
      </g>

      <g>
        <circle cx="272" cy="40" r="15" fill="#ffffff" stroke="#b9c1b8" stroke-width="2" />
        <path d="M272 40 L272 31 M272 40 L279 43" stroke="#5a6658" stroke-width="2" stroke-linecap="round" />
        <text x="272" y="72" text-anchor="middle" font-size="11" font-weight="700" fill="#5a6658">45 menit per hari</text>
        <text x="272" y="85" text-anchor="middle" font-size="10" font-weight="600" fill="#8a9389">layu dan kering</text>
      </g>

      <g>
        <circle cx="748" cy="24" r="12" fill="#ffcf5c" />
        <g stroke="#ffcf5c" stroke-width="2" stroke-linecap="round">
          <path d="M748 6 L748 10 M730 24 L734 24 M762 24 L766 24 M735 11 L738 14 M761 11 L758 14" />
        </g>
        <ellipse cx="636" cy="64" rx="46" ry="7" fill="#3a2e26" />
        <path d="M588 68 L596 88 L676 88 L684 68 Z" fill="#c96f2e" stroke="#9a5220" stroke-width="2" stroke-linejoin="round" />
        <rect x="584" y="61" width="104" height="10" rx="3" fill="#b35f26" />
        <path d="M636 62 C630 40 622 28 606 16 C622 14 638 28 642 52 Z" fill="#0f7a2e" />
        <path d="M638 62 C640 38 646 26 662 16 C668 30 656 48 644 60 Z" fill="#1a9a3c" />
        <path d="M636 62 C626 44 624 30 628 18 C640 24 644 42 640 58 Z" fill="#2fb457" />
        <path d="M640 62 C648 44 650 30 646 18 C658 24 656 44 646 60 Z" fill="#4caf6d" />
        <path d="M612 32 c3 4 5 6.5 5 9 a5 5 0 0 1 -10 0 c0 -2.5 2 -5 5 -9z" fill="#2aa7de" />
        <path d="M664 30 c2.5 3.5 4 5.5 4 7.5 a4 4 0 0 1 -8 0 c0 -2 1.5 -4 4 -7.5z" fill="#2aa7de" opacity="0.9" />
        <path d="M588 36 c2 3 3.5 4.8 3.5 6.8 a3.5 3.5 0 0 1 -7 0 c0 -2 1.5 -3.8 3.5 -6.8z" fill="#5cc0e8" />
      </g>

      <g>
        <circle cx="712" cy="52" r="12" fill="#ffffff" stroke="#9ec7a8" stroke-width="2" />
        <path d="M712 52 L712 45 M712 52 L717 54" stroke="#006e1c" stroke-width="2" stroke-linecap="round" />
        <text x="706" y="74" text-anchor="middle" font-size="11" font-weight="700" fill="#006e1c">5 menit per hari</text>
        <text x="706" y="86" text-anchor="middle" font-size="10" font-weight="600" fill="#4a7a58">segar dan tegak</text>
      </g>

      <line x1="400" y1="14" x2="400" y2="84" stroke="#c9cfc8" stroke-width="2" />
      <rect x="384" y="8" width="32" height="16" rx="8" fill="#006e1c" />
      <text x="400" y="20" text-anchor="middle" font-size="10" font-weight="800" fill="#ffffff">VS</text>
      <g>
        <path d="M400 30 c7 9 12 15 12 21.5 a12 12 0 0 1 -24 0 c0 -6.5 5 -12.5 12 -21.5z" fill="#2aa7de" stroke="#157aa5" stroke-width="2" />
        <circle cx="395.5" cy="50" r="2.2" fill="#ffffff" />
        <circle cx="404.5" cy="50" r="2.2" fill="#ffffff" />
        <circle cx="395.8" cy="50.2" r="1" fill="#123" />
        <circle cx="404.8" cy="50.2" r="1" fill="#123" />
        <path d="M396 55.5 Q400 58.5 404 55.5" stroke="#ffffff" stroke-width="1.6" fill="none" stroke-linecap="round" />
      </g>
    </svg>
  </div>
</template>
