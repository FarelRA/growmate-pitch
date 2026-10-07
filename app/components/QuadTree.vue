<script setup lang="ts">
import gsap from 'gsap'

const box = ref<HTMLElement | null>(null)
const trunk = ref<SVGPathElement | null>(null)
const trunkMob = ref<SVGPathElement | null>(null)
let ctx: gsap.Context | null = null

function drawPath(p: SVGPathElement, delay: number, duration: number) {
  const len = p.getTotalLength()
  gsap.set(p, { strokeDasharray: len, strokeDashoffset: len })
  gsap.to(p, { strokeDashoffset: 0, duration, ease: 'power2.out', delay })
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  ctx = gsap.context(() => {
    const roots = Array.from(box.value?.querySelectorAll('.quad-root') ?? []) as SVGPathElement[]
    const branches = Array.from(box.value?.querySelectorAll('.quad-branch') ?? []) as SVGPathElement[]
    const links = Array.from(box.value?.querySelectorAll('.quad-link') ?? []) as SVGPathElement[]
    try {
      if (trunk.value) drawPath(trunk.value, 0.1, 0.7)
      if (trunkMob.value) drawPath(trunkMob.value, 0.1, 0.7)
    } catch { /* tampilkan ilustrasi statis bila pengukuran gagal */ }
    try {
      roots.forEach((p) => {
        const len = p.getTotalLength()
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len, opacity: 1 })
      })
      gsap.to(roots, { strokeDashoffset: 0, duration: 0.5, ease: 'power2.out', delay: 0.15, stagger: 0.07 })
    } catch { /* tampilkan ilustrasi statis bila pengukuran gagal */ }
    try {
      branches.forEach((p) => {
        const len = p.getTotalLength()
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len })
      })
      gsap.to(branches, { strokeDashoffset: 0, duration: 0.6, ease: 'power2.out', delay: 0.55, stagger: 0.1 })
    } catch { /* tampilkan ilustrasi statis bila pengukuran gagal */ }
    try {
      links.forEach((p) => {
        const len = p.getTotalLength()
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len, opacity: 1 })
      })
      gsap.to(links, { strokeDashoffset: 0, duration: 0.7, ease: 'power2.out', delay: 1.0, stagger: 0.08 })
    } catch { /* tampilkan ilustrasi statis bila pengukuran gagal */ }
    gsap.from('.quad-fruit', {
      scale: 0,
      transformOrigin: 'center',
      duration: 0.45,
      ease: 'back.out(2.2)',
      delay: 0.95,
      stagger: 0.12,
      clearProps: 'scale',
    })
    gsap.from('.quad-leaf', {
      scale: 0,
      transformOrigin: 'center',
      duration: 0.35,
      ease: 'back.out(2)',
      delay: 1.05,
      stagger: 0.06,
      clearProps: 'scale',
    })
    gsap.from('.quad-soilbit', {
      opacity: 0,
      y: 6,
      duration: 0.4,
      ease: 'power2.out',
      delay: 0.3,
      stagger: 0.05,
      clearProps: 'all',
    })
  }, box.value ?? undefined)
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <div ref="box" aria-hidden="true" class="pointer-events-none w-full overflow-hidden rounded-2xl border border-gm-line">
    <svg viewBox="0 0 1200 180" preserveAspectRatio="none" class="hidden h-[150px] w-full md:block lg:h-[170px]">
      <defs>
        <linearGradient id="quadSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#dceffa" />
          <stop offset="1" stop-color="#f2f6f0" />
        </linearGradient>
        <radialGradient id="quadGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stop-color="#ffffff" stop-opacity="0.9" />
          <stop offset="1" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="1200" height="114" fill="url(#quadSky)" />
      <g transform="translate(470,30)">
        <circle r="20" fill="#f7c948" opacity="0.22" />
        <circle r="11" fill="#f7c948" opacity="0.95" />
        <g stroke="#f7c948" stroke-width="2" stroke-linecap="round" opacity="0.8">
          <line x1="0" y1="-15" x2="0" y2="-20" />
          <line x1="0" y1="15" x2="0" y2="20" />
          <line x1="-15" y1="0" x2="-20" y2="0" />
          <line x1="15" y1="0" x2="20" y2="0" />
          <line x1="-11" y1="-11" x2="-15" y2="-15" />
          <line x1="11" y1="-11" x2="15" y2="-15" />
          <line x1="-11" y1="11" x2="-15" y2="15" />
          <line x1="11" y1="11" x2="15" y2="15" />
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="26s" repeatCount="indefinite" />
        </g>
      </g>
      <g fill="#ffffff" opacity="0.92">
        <g transform="translate(190,32)">
          <ellipse cx="0" cy="0" rx="22" ry="8" />
          <ellipse cx="-12" cy="2" rx="12" ry="6" />
          <ellipse cx="12" cy="2" rx="13" ry="6.5" />
        </g>
        <g transform="translate(930,28)">
          <ellipse cx="0" cy="0" rx="20" ry="7.5" />
          <ellipse cx="-11" cy="2" rx="11" ry="5.5" />
          <ellipse cx="11" cy="2" rx="12" ry="6" />
        </g>
      </g>
      <rect x="0" y="114" width="1200" height="5" fill="#006e1c" opacity="0.9" />
      <rect x="0" y="119" width="1200" height="22" fill="#3f2f23" />
      <rect x="0" y="141" width="1200" height="20" fill="#5d4630" />
      <rect x="0" y="161" width="1200" height="19" fill="#7a5f42" />
      <line x1="0" y1="141" x2="1200" y2="141" stroke="#ffffff" stroke-width="1" stroke-dasharray="4 5" opacity="0.18" />
      <line x1="0" y1="161" x2="1200" y2="161" stroke="#ffffff" stroke-width="1" stroke-dasharray="4 5" opacity="0.18" />
      <g fill="none" stroke="#ffffff" stroke-width="1.6" stroke-dasharray="3 4" opacity="0.45">
        <path class="quad-link" d="M 150 72 C 150 108 150 144 150 180" />
        <path class="quad-link" d="M 450 54 C 450 96 450 138 450 180" />
        <path class="quad-link" d="M 750 54 C 750 96 750 138 750 180" />
        <path class="quad-link" d="M 1050 72 C 1050 108 1050 144 1050 180" />
      </g>
      <g fill="none" stroke="#3a2c1e" stroke-width="2.2" stroke-linecap="round" opacity="0.6">
        <path class="quad-root" d="M 600 132 C 570 129 545 128 520 127" />
        <path class="quad-root" d="M 600 132 C 585 130 572 129 560 128" />
        <path class="quad-root" d="M 600 132 C 615 130 628 129 640 128" />
        <path class="quad-root" d="M 600 132 C 630 129 655 128 680 127" />
      </g>
      <path
        ref="trunk"
        d="M 600 132 C 600 112 600 90 600 70"
        fill="none"
        stroke="#004d13"
        stroke-width="7"
        stroke-linecap="round"
      />
      <path
        d="M 600 132 C 600 112 600 90 600 70"
        fill="none"
        stroke="#9be0a4"
        stroke-width="2.4"
        stroke-linecap="round"
        opacity="0.9"
        stroke-dasharray="1 8"
        class="anim-flow"
      />
      <g fill="#9be0a4" opacity="0.9">
        <circle cx="597" cy="126" r="2">
          <animate attributeName="cy" values="126;72" dur="1.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.9;0" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="603" cy="126" r="1.7">
          <animate attributeName="cy" values="126;72" dur="1.8s" begin="0.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.9;0" dur="1.8s" begin="0.6s" repeatCount="indefinite" />
        </circle>
        <circle cx="600" cy="126" r="1.4">
          <animate attributeName="cy" values="126;72" dur="1.8s" begin="1.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.9;0" dur="1.8s" begin="1.2s" repeatCount="indefinite" />
        </circle>
      </g>
      <g fill="none" stroke="#006e1c" stroke-width="3.2" stroke-linecap="round" opacity="0.65">
        <path class="quad-branch" d="M 600 78 C 470 76 300 70 162 62" />
        <path class="quad-branch" d="M 600 74 C 555 66 505 56 458 46" />
        <path class="quad-branch" d="M 600 74 C 645 66 695 56 742 46" />
        <path class="quad-branch" d="M 600 78 C 730 76 900 70 1038 62" />
      </g>
      <g opacity="0.6">
        <ellipse class="quad-leaf" cx="560" cy="70" rx="8" ry="4" fill="#006e1c" transform="rotate(-14 560 70)" />
        <ellipse class="quad-leaf" cx="585" cy="64" rx="7" ry="3.5" fill="#4caf50" transform="rotate(-8 585 64)" />
        <ellipse class="quad-leaf" cx="615" cy="64" rx="7" ry="3.5" fill="#4caf50" transform="rotate(8 615 64)" />
        <ellipse class="quad-leaf" cx="640" cy="70" rx="8" ry="4" fill="#006e1c" transform="rotate(14 640 70)" />
        <ellipse class="quad-leaf" cx="600" cy="58" rx="7" ry="3.5" fill="#006e1c" />
        <ellipse class="quad-leaf" cx="350" cy="68" rx="7" ry="3" fill="#006e1c" transform="rotate(-14 350 68)" />
        <ellipse class="quad-leaf" cx="450" cy="62" rx="6" ry="3" fill="#4caf50" transform="rotate(-18 450 62)" />
        <ellipse class="quad-leaf" cx="750" cy="62" rx="6" ry="3" fill="#4caf50" transform="rotate(18 750 62)" />
        <ellipse class="quad-leaf" cx="850" cy="68" rx="7" ry="3" fill="#006e1c" transform="rotate(14 850 68)" />
      </g>
      <g>
        <g class="quad-fruit">
          <circle cx="150" cy="58" r="14" fill="#16a34a" opacity="0.22" />
          <circle cx="150" cy="58" r="7.5" fill="#ffffff" stroke="#16a34a" stroke-width="2.8" />
          <ellipse cx="150" cy="58.5" rx="3.6" ry="2.4" fill="#16a34a" />
          <line x1="146.8" y1="58.5" x2="153.2" y2="58.5" stroke="#ffffff" stroke-width="0.9" stroke-linecap="round" />
          <line x1="150" y1="50.5" x2="150" y2="48.5" stroke="#16a34a" stroke-width="1.6" stroke-linecap="round" />
        </g>
        <g class="quad-fruit">
          <circle cx="450" cy="40" r="14" fill="#b7791f" opacity="0.25" />
          <circle cx="450" cy="40" r="7.5" fill="#ffffff" stroke="#b7791f" stroke-width="2.8" />
          <circle cx="450" cy="40" r="3.4" fill="#f7c948" stroke="#b7791f" stroke-width="1.2" />
          <line x1="450" y1="37.6" x2="450" y2="42.4" stroke="#b7791f" stroke-width="1" stroke-linecap="round" />
        </g>
        <g class="quad-fruit">
          <circle cx="750" cy="40" r="14" fill="#2471a3" opacity="0.22" />
          <circle cx="750" cy="40" r="7.5" fill="#ffffff" stroke="#2471a3" stroke-width="2.8" />
          <path d="M 750 36.6 C 751.8 39 753.2 40.6 753.2 42.2 A 3.2 3.2 0 1 1 746.8 42.2 C 746.8 40.6 748.2 39 750 36.6 Z" fill="#2471a3" />
        </g>
        <g class="quad-fruit">
          <circle cx="1050" cy="58" r="14" fill="#004d13" opacity="0.2" />
          <circle cx="1050" cy="58" r="7.5" fill="#ffffff" stroke="#004d13" stroke-width="2.8" />
          <polygon points="1050,54.6 1050.9,56.9 1053.4,56.9 1051.4,58.5 1052.1,60.9 1050,59.4 1047.9,60.9 1048.6,58.5 1046.6,56.9 1049.1,56.9" fill="#b7791f" stroke="#b7791f" stroke-width="0.6" stroke-linejoin="round" />
        </g>
      </g>
      <g fill="#d9a521">
        <circle cx="120" cy="82" r="1.8">
          <animate attributeName="opacity" values="0.2;1;0.2" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="380" cy="72" r="1.8">
          <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" begin="0.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="820" cy="72" r="1.8">
          <animate attributeName="opacity" values="0.2;1;0.2" dur="2.8s" begin="1s" repeatCount="indefinite" />
        </circle>
        <circle cx="1080" cy="82" r="1.8">
          <animate attributeName="opacity" values="0.2;1;0.2" dur="2.2s" begin="0.3s" repeatCount="indefinite" />
        </circle>
      </g>
      <g class="quad-soilbit">
        <g fill="#cfe3d2" stroke="#8fb896" stroke-width="1">
          <circle cx="138" cy="127" r="2.4" />
          <circle cx="146" cy="126" r="2.4" />
          <circle cx="154" cy="126" r="2.4" />
          <circle cx="162" cy="127" r="2.4" />
          <circle cx="146" cy="131" r="2.4" />
          <circle cx="154" cy="131" r="2.4" />
        </g>
        <g fill="#d9b77c" stroke="#a97f3d" stroke-width="1">
          <rect x="430" y="126" width="9" height="3.6" rx="1" transform="rotate(-14 434 128)" />
          <rect x="441" y="128" width="9" height="3.6" rx="1" transform="rotate(12 445 130)" />
          <rect x="452" y="126" width="9" height="3.6" rx="1" transform="rotate(-8 456 128)" />
        </g>
        <g fill="#f7e3ae" fill-opacity="0.6" stroke="#f0c76a" stroke-width="1.1">
          <polygon points="738,126 742,128.5 742,132.5 738,135 734,132.5 734,128.5" />
          <polygon points="748,126 752,128.5 752,132.5 748,135 744,132.5 744,128.5" />
          <polygon points="743,132 747,134.5 747,138.5 743,141 739,138.5 739,134.5" />
        </g>
        <g stroke="#ecd27a" stroke-width="1.8" stroke-linecap="round">
          <line x1="1035" y1="128" x2="1047" y2="126.5" />
          <line x1="1038" y1="132" x2="1051" y2="130.5" />
          <line x1="1043" y1="136" x2="1054" y2="134.5" />
        </g>
      </g>
      <g>
        <rect x="98" y="163" width="104" height="17" rx="8.5" fill="#000000" opacity="0.22" />
        <rect x="398" y="163" width="104" height="17" rx="8.5" fill="#000000" opacity="0.22" />
        <rect x="698" y="163" width="104" height="17" rx="8.5" fill="#000000" opacity="0.22" />
        <rect x="998" y="163" width="104" height="17" rx="8.5" fill="#000000" opacity="0.22" />
      </g>
      <g font-size="12.5" fill="#ffffff" opacity="0.94" text-anchor="middle" font-family="Inter, sans-serif">
        <text x="150" y="175.5">Pelet rPLA</text>
        <text x="450" y="175.5">Kayu limbah</text>
        <text x="750" y="175.5">Honeycomb</text>
        <text x="1050" y="175.5">Jerami</text>
      </g>
    </svg>
    <svg viewBox="0 0 360 140" preserveAspectRatio="none" class="block h-[120px] w-full md:hidden">
      <rect x="0" y="0" width="360" height="102" fill="#e4f1fa" />
      <g transform="translate(140,22)">
        <circle r="13" fill="#f7c948" opacity="0.22" />
        <circle r="8" fill="#f7c948" opacity="0.95" />
      </g>
      <g fill="#ffffff" opacity="0.92">
        <g transform="translate(55,24)">
          <ellipse cx="0" cy="0" rx="14" ry="5" />
          <ellipse cx="-7" cy="1.5" rx="7" ry="3.5" />
        </g>
        <g transform="translate(272,20)">
          <ellipse cx="0" cy="0" rx="13" ry="4.5" />
          <ellipse cx="7" cy="1.5" rx="7" ry="3.2" />
        </g>
      </g>
      <rect x="0" y="102" width="360" height="4" fill="#006e1c" opacity="0.9" />
      <rect x="0" y="106" width="360" height="12" fill="#3f2f23" />
      <rect x="0" y="118" width="360" height="11" fill="#5d4630" />
      <rect x="0" y="129" width="360" height="11" fill="#7a5f42" />
      <g fill="none" stroke="#ffffff" stroke-width="1.2" stroke-dasharray="2.5 3" opacity="0.4">
        <path class="quad-link" d="M 45 68 C 45 92 45 116 45 140" />
        <path class="quad-link" d="M 135 62 C 135 88 135 114 135 140" />
        <path class="quad-link" d="M 225 62 C 225 88 225 114 225 140" />
        <path class="quad-link" d="M 315 68 C 315 92 315 116 315 140" />
      </g>
      <g fill="none" stroke="#3a2c1e" stroke-width="1.8" stroke-linecap="round" opacity="0.6">
        <path class="quad-root" d="M 180 112 C 168 110 158 109 148 108" />
        <path class="quad-root" d="M 180 112 C 192 110 202 109 212 108" />
      </g>
      <path
        ref="trunkMob"
        d="M 180 112 C 180 100 180 86 180 74"
        fill="none"
        stroke="#004d13"
        stroke-width="5.5"
        stroke-linecap="round"
      />
      <path
        d="M 180 112 C 180 100 180 86 180 74"
        fill="none"
        stroke="#9be0a4"
        stroke-width="2"
        stroke-linecap="round"
        stroke-dasharray="1 7"
        class="anim-flow"
        opacity="0.9"
      />
      <g fill="none" stroke="#006e1c" stroke-width="2.4" stroke-linecap="round" opacity="0.65">
        <path class="quad-branch" d="M 180 80 C 150 78 110 72 52 64" />
        <path class="quad-branch" d="M 180 78 C 168 72 156 64 142 58" />
        <path class="quad-branch" d="M 180 78 C 192 72 204 64 218 58" />
        <path class="quad-branch" d="M 180 80 C 210 78 250 72 308 64" />
      </g>
      <g opacity="0.6">
        <ellipse class="quad-leaf" cx="168" cy="76" rx="7" ry="3.5" fill="#006e1c" />
        <ellipse class="quad-leaf" cx="192" cy="76" rx="7" ry="3.5" fill="#006e1c" />
        <ellipse class="quad-leaf" cx="180" cy="68" rx="6" ry="3" fill="#4caf50" />
      </g>
      <g>
        <g class="quad-fruit">
          <circle cx="45" cy="60" r="8.5" fill="#16a34a" opacity="0.22" />
          <circle cx="45" cy="60" r="5" fill="#ffffff" stroke="#16a34a" stroke-width="2.2" />
          <circle cx="45" cy="60" r="1.8" fill="#16a34a" />
        </g>
        <g class="quad-fruit">
          <circle cx="135" cy="54" r="8.5" fill="#b7791f" opacity="0.25" />
          <circle cx="135" cy="54" r="5" fill="#ffffff" stroke="#b7791f" stroke-width="2.2" />
          <circle cx="135" cy="54" r="1.8" fill="#b7791f" />
        </g>
        <g class="quad-fruit">
          <circle cx="225" cy="54" r="8.5" fill="#2471a3" opacity="0.22" />
          <circle cx="225" cy="54" r="5" fill="#ffffff" stroke="#2471a3" stroke-width="2.2" />
          <circle cx="225" cy="54" r="1.8" fill="#2471a3" />
        </g>
        <g class="quad-fruit">
          <circle cx="315" cy="60" r="8.5" fill="#004d13" opacity="0.2" />
          <circle cx="315" cy="60" r="5" fill="#ffffff" stroke="#004d13" stroke-width="2.2" />
          <circle cx="315" cy="60" r="1.8" fill="#b7791f" />
        </g>
      </g>
      <g fill="#d9a521">
        <circle cx="95" cy="88" r="1.4">
          <animate attributeName="opacity" values="0.2;1;0.2" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="265" cy="88" r="1.4">
          <animate attributeName="opacity" values="0.2;1;0.2" dur="2.6s" begin="0.7s" repeatCount="indefinite" />
        </circle>
      </g>
      <g font-size="7.5" fill="#ffffff" opacity="0.92" text-anchor="middle" font-family="Inter, sans-serif">
        <text x="45" y="136.5">Pelet rPLA</text>
        <text x="135" y="136.5">Kayu limbah</text>
        <text x="225" y="136.5">Honeycomb</text>
        <text x="315" y="136.5">Jerami</text>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.quad-leaf {
  transform-box: fill-box;
  transform-origin: center;
  animation: quad-sway 3.8s ease-in-out infinite;
}
.quad-fruit {
  transform-box: fill-box;
  transform-origin: center;
}
@keyframes quad-sway {
  0%, 100% { transform: rotate(-5deg); }
  50% { transform: rotate(6deg); }
}
@media (prefers-reduced-motion: reduce) {
  .quad-leaf { animation: none; }
}
</style>
