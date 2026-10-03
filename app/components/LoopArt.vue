<script setup lang="ts">
defineProps<{ step: number }>()
</script>

<template>
  <div class="loop-art relative mx-auto h-[148px] w-full max-w-[420px] sm:h-[168px] lg:h-auto lg:min-h-[140px] lg:flex-1" aria-hidden="true">
    <!-- 0 Ukur: pot memancarkan gelombang ukur -->
    <svg v-show="step === 0" viewBox="0 0 420 168" class="absolute inset-0 h-full w-full">
      <g>
        <circle cx="210" cy="118" r="14" fill="none" stroke="#4caf50" stroke-width="3" class="la-ring" />
        <circle cx="210" cy="118" r="14" fill="none" stroke="#4caf50" stroke-width="3" class="la-ring la-d1" />
        <circle cx="210" cy="118" r="14" fill="none" stroke="#4caf50" stroke-width="3" class="la-ring la-d2" />
      </g>
      <path d="M186 118 h48 l-6 34 h-36 z" fill="#3a3f3a" stroke="#4caf50" stroke-width="2.5" />
      <path d="M210 118 v-34 M210 84 q-20 -6 -28 -26 M210 84 q20 -6 28 -26 M210 84 v-30" fill="none" stroke="#4caf50" stroke-width="4" stroke-linecap="round" />
      <circle cx="182" cy="58" r="9" fill="#4caf50" class="la-breathe" />
      <circle cx="238" cy="58" r="9" fill="#4caf50" class="la-breathe la-d1" />
      <circle cx="210" cy="50" r="10" fill="#81c784" class="la-breathe la-d2" />
    </svg>
    <!-- 1 Sambung: lengkung sinyal + hitung 12 detik -->
    <svg v-show="step === 1" viewBox="0 0 420 168" class="absolute inset-0 h-full w-full">
      <circle cx="210" cy="128" r="10" fill="#4caf50" />
      <path d="M188 112 a31 31 0 0 1 44 0" fill="none" stroke="#4caf50" stroke-width="6" stroke-linecap="round" class="la-blink" />
      <path d="M174 98 a51 51 0 0 1 72 0" fill="none" stroke="#4caf50" stroke-width="6" stroke-linecap="round" class="la-blink la-d1" />
      <path d="M160 84 a71 71 0 0 1 100 0" fill="none" stroke="#4caf50" stroke-width="6" stroke-linecap="round" class="la-blink la-d2" />
      <circle cx="210" cy="84" r="30" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="7" />
      <circle cx="210" cy="84" r="30" fill="none" stroke="#81c784" stroke-width="7" stroke-linecap="round" stroke-dasharray="47 142" class="la-spin" style="transform-origin: 210px 84px;" />
      <text x="210" y="95" text-anchor="middle" font-size="26" font-weight="800" fill="#fff" font-family="Manrope, sans-serif">12</text>
    </svg>
    <!-- 2 Lapor: paket naik ke cloud -->
    <svg v-show="step === 2" viewBox="0 0 420 168" class="absolute inset-0 h-full w-full">
      <path d="M210 140 V52" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="3" stroke-dasharray="7 9" class="la-dash" />
      <rect x="192" y="132" width="36" height="24" rx="6" fill="#3a3f3a" stroke="#4caf50" stroke-width="2.5" />
      <g class="la-rise">
        <rect x="200" y="0" width="20" height="20" rx="6" fill="#4caf50" />
        <path d="M204 10 h12 M210 4 v12" stroke="#20241f" stroke-width="3" stroke-linecap="round" />
      </g>
      <g fill="#e9f4ea">
        <ellipse cx="210" cy="40" rx="34" ry="14" />
        <circle cx="188" cy="34" r="14" />
        <circle cx="232" cy="34" r="14" />
      </g>
      <path d="M202 36 l6 6 10 -12" fill="none" stroke="#006e1c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <!-- 3 Kamera: rana memotret -->
    <svg v-show="step === 3" viewBox="0 0 420 168" class="absolute inset-0 h-full w-full">
      <rect x="158" y="52" width="104" height="72" rx="14" fill="#3a3f3a" stroke="#4caf50" stroke-width="2.5" />
      <rect x="196" y="42" width="28" height="12" rx="4" fill="#3a3f3a" stroke="#4caf50" stroke-width="2.5" />
      <g class="la-spin-slow" style="transform-origin: 210px 88px;">
        <circle cx="210" cy="88" r="26" fill="#101310" stroke="#81c784" stroke-width="3" />
        <path d="M210 62 v14 M210 100 v14 M184 88 h14 M222 88 h14 M192 70 l10 10 M218 96 l10 10 M228 70 l-10 10 M202 96 l-10 10" stroke="#81c784" stroke-width="3" stroke-linecap="round" />
      </g>
      <circle cx="210" cy="88" r="8" fill="#4caf50" />
      <circle cx="262" cy="60" r="6" fill="#ffd54f" class="la-flash" />
      <circle cx="262" cy="60" r="6" fill="none" stroke="#ffd54f" stroke-width="2" class="la-ring" />
    </svg>
    <!-- 4 OTA: unduh firmware ke chip -->
    <svg v-show="step === 4" viewBox="0 0 420 168" class="absolute inset-0 h-full w-full">
      <g class="la-drop">
        <path d="M210 18 v34 M198 40 l12 12 12 -12" fill="none" stroke="#81c784" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      <rect x="176" y="76" width="68" height="52" rx="10" fill="#3a3f3a" stroke="#4caf50" stroke-width="2.5" />
      <rect x="192" y="92" width="36" height="20" rx="4" fill="#4caf50" />
      <path d="M176 88 h-12 M176 104 h-12 M176 118 h-12 M244 88 h12 M244 104 h12 M244 118 h12" stroke="#4caf50" stroke-width="4" stroke-linecap="round" />
      <rect x="150" y="140" width="120" height="10" rx="5" fill="rgba(255,255,255,0.15)" />
      <rect x="150" y="140" width="120" height="10" rx="5" fill="#4caf50" class="la-fill" />
    </svg>
    <!-- 5 Siaga: bulan + baterai bernapas -->
    <svg v-show="step === 5" viewBox="0 0 420 168" class="absolute inset-0 h-full w-full">
      <path d="M168 84 a30 30 0 1 0 30 34 a24 24 0 1 1 -30 -34 z" fill="#ffd54f" class="la-breathe" />
      <text x="128" y="52" font-size="24" font-weight="800" fill="rgba(255,255,255,0.7)" font-family="Manrope, sans-serif" class="la-zzz">z</text>
      <text x="142" y="36" font-size="30" font-weight="800" fill="rgba(255,255,255,0.45)" font-family="Manrope, sans-serif" class="la-zzz la-d1">z</text>
      <text x="160" y="18" font-size="36" font-weight="800" fill="rgba(255,255,255,0.25)" font-family="Manrope, sans-serif" class="la-zzz la-d2">z</text>
      <g>
        <rect x="216" y="66" width="96" height="40" rx="10" fill="none" stroke="#4caf50" stroke-width="4" />
        <rect x="314" y="78" width="10" height="16" rx="4" fill="#4caf50" />
        <rect x="224" y="74" width="60" height="24" rx="6" fill="#4caf50" class="la-breathe la-d1" />
      </g>
      <path d="M228 128 h84" stroke="#4caf50" stroke-width="4" stroke-linecap="round" stroke-dasharray="4 14" class="la-dash" />
    </svg>
  </div>
</template>

<style>
.la-ring { transform-box: fill-box; transform-origin: center; animation: la-ring 2.2s ease-out infinite; }
.la-d1 { animation-delay: 0.35s; }
.la-d2 { animation-delay: 0.7s; }
@keyframes la-ring {
  0% { transform: scale(0.5); opacity: 1; }
  100% { transform: scale(3.4); opacity: 0; }
}
.la-breathe { animation: la-breathe 2.4s ease-in-out infinite; }
@keyframes la-breathe {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.45; }
}
.la-blink { animation: la-blink 1.6s ease-in-out infinite; }
@keyframes la-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.25; }
}
.la-spin { animation: la-rot 2s linear infinite; }
.la-spin-slow { animation: la-rot 9s linear infinite; }
@keyframes la-rot { to { transform: rotate(360deg); } }
.la-dash { animation: la-dash 1s linear infinite; }
@keyframes la-dash { to { stroke-dashoffset: -16; } }
.la-rise { animation: la-rise 2s ease-in-out infinite; }
@keyframes la-rise {
  0% { transform: translateY(96px); opacity: 0; }
  25% { opacity: 1; }
  80% { opacity: 1; }
  100% { transform: translateY(8px); opacity: 0; }
}
.la-drop { animation: la-drop 1.8s ease-in-out infinite; }
@keyframes la-drop {
  0%, 100% { transform: translateY(0); opacity: 1; }
  50% { transform: translateY(10px); opacity: 0.6; }
}
.la-fill { transform-box: fill-box; transform-origin: left center; animation: la-fill 2.6s ease-in-out infinite; }
@keyframes la-fill {
  0% { transform: scaleX(0.15); }
  70%, 100% { transform: scaleX(1); }
}
.la-flash { animation: la-flash 2.4s ease-in-out infinite; }
@keyframes la-flash {
  0%, 88%, 100% { opacity: 0.25; }
  92%, 96% { opacity: 1; }
}
.la-zzz { animation: la-zzz 3s ease-in-out infinite; }
@keyframes la-zzz {
  0% { transform: translateY(6px); opacity: 0; }
  40% { opacity: 1; }
  100% { transform: translateY(-8px); opacity: 0; }
}
@media (prefers-reduced-motion: reduce) {
  .loop-art * { animation: none !important; }
}
</style>
