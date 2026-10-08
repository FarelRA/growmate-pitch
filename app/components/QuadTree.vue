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
  <div ref="box" aria-hidden="true" class="pointer-events-none w-full shrink-0 overflow-hidden rounded-2xl border border-gm-line">
    <svg viewBox="0 0 1200 300" preserveAspectRatio="none" class="hidden h-[190px] w-full md:block lg:h-[240px] 2xl:h-[300px]">
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
      <rect x="0" y="0" width="1200" height="170" fill="url(#quadSky)" />
      <g transform="translate(470,52)">
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
        <g transform="translate(190,54)">
          <ellipse cx="0" cy="0" rx="22" ry="8" />
          <ellipse cx="-12" cy="2" rx="12" ry="6" />
          <ellipse cx="12" cy="2" rx="13" ry="6.5" />
        </g>
        <g transform="translate(930,50)">
          <ellipse cx="0" cy="0" rx="20" ry="7.5" />
          <ellipse cx="-11" cy="2" rx="11" ry="5.5" />
          <ellipse cx="11" cy="2" rx="12" ry="6" />
        </g>
      </g>
      <g fill="none" stroke="#4a6b4f" stroke-width="2.4" stroke-linecap="round" opacity="0.7">
        <path d="M600 66 q7 -7 14 0 q7 -7 14 0" />
        <path d="M672 52 q6 -6 12 0 q6 -6 12 0" />
        <path d="M540 44 q6 -6 12 0 q6 -6 12 0" />
      </g>
      <rect x="0" y="170" width="1200" height="4" fill="#006e1c" opacity="0.9" />
      <rect x="0" y="174" width="1200" height="20" fill="#3f2f23" />
      <rect x="0" y="194" width="1200" height="30" fill="#5d4630" />
      <rect x="0" y="224" width="1200" height="76" fill="#7a5f42" />
      <line x1="0" y1="194" x2="1200" y2="194" stroke="#ffffff" stroke-width="1" stroke-dasharray="4 5" opacity="0.18" />
      <line x1="0" y1="224" x2="1200" y2="224" stroke="#ffffff" stroke-width="1" stroke-dasharray="4 5" opacity="0.18" />
      <g fill="none" stroke="#ffffff" stroke-width="1.6" stroke-dasharray="3 4" opacity="0.45">
        <path class="quad-link" d="M 150 96 C 150 160 150 230 150 300" />
        <path class="quad-link" d="M 450 80 C 450 150 450 225 450 300" />
        <path class="quad-link" d="M 750 80 C 750 150 750 225 750 300" />
        <path class="quad-link" d="M 1050 96 C 1050 160 1050 230 1050 300" />
      </g>
      <g fill="none" stroke="#3a2c1e" stroke-width="2.2" stroke-linecap="round" opacity="0.6">
        <path class="quad-root" d="M 600 190 C 570 187 545 186 520 185" />
        <path class="quad-root" d="M 600 190 C 585 188 572 187 560 186" />
        <path class="quad-root" d="M 600 190 C 615 188 628 187 640 186" />
        <path class="quad-root" d="M 600 190 C 630 187 655 186 680 185" />
      </g>
      <path
        ref="trunk"
        d="M 600 190 C 600 170 600 148 600 128"
        fill="none"
        stroke="#004d13"
        stroke-width="7"
        stroke-linecap="round"
      />
      <path
        d="M 600 190 C 600 170 600 148 600 128"
        fill="none"
        stroke="#9be0a4"
        stroke-width="2.4"
        stroke-linecap="round"
        opacity="0.9"
        stroke-dasharray="1 8"
        class="anim-flow"
      />
      <g fill="#9be0a4" opacity="0.9">
        <circle cx="597" cy="184" r="2">
          <animate attributeName="cy" values="184;130" dur="1.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.9;0" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="603" cy="184" r="1.7">
          <animate attributeName="cy" values="184;130" dur="1.8s" begin="0.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.9;0" dur="1.8s" begin="0.6s" repeatCount="indefinite" />
        </circle>
        <circle cx="600" cy="184" r="1.4">
          <animate attributeName="cy" values="184;130" dur="1.8s" begin="1.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.9;0" dur="1.8s" begin="1.2s" repeatCount="indefinite" />
        </circle>
      </g>
      <g fill="none" stroke="#006e1c" stroke-width="3.2" stroke-linecap="round" opacity="0.65">
        <path class="quad-branch" d="M 600 134 C 470 132 300 110 162 96" />
        <path class="quad-branch" d="M 600 130 C 555 122 505 100 458 80" />
        <path class="quad-branch" d="M 600 130 C 645 122 695 100 742 80" />
        <path class="quad-branch" d="M 600 134 C 730 132 900 110 1038 96" />
      </g>
      <g opacity="0.75">
        <ellipse class="quad-leaf" cx="560" cy="112" rx="9" ry="4.5" fill="#006e1c" transform="rotate(-14 560 112)" />
        <ellipse class="quad-leaf" cx="585" cy="102" rx="8" ry="4" fill="#4caf50" transform="rotate(-8 585 102)" />
        <ellipse class="quad-leaf" cx="615" cy="102" rx="8" ry="4" fill="#4caf50" transform="rotate(8 615 102)" />
        <ellipse class="quad-leaf" cx="640" cy="112" rx="9" ry="4.5" fill="#006e1c" transform="rotate(14 640 112)" />
        <ellipse class="quad-leaf" cx="600" cy="94" rx="8" ry="4" fill="#006e1c" />
        <ellipse class="quad-leaf" cx="628" cy="94" rx="7" ry="3.5" fill="#4caf50" transform="rotate(12 628 94)" />
        <ellipse class="quad-leaf" cx="572" cy="94" rx="7" ry="3.5" fill="#4caf50" transform="rotate(-12 572 94)" />
        <ellipse class="quad-leaf" cx="350" cy="104" rx="7" ry="3" fill="#006e1c" transform="rotate(-14 350 104)" />
        <ellipse class="quad-leaf" cx="450" cy="96" rx="6" ry="3" fill="#4caf50" transform="rotate(-18 450 96)" />
        <ellipse class="quad-leaf" cx="750" cy="96" rx="6" ry="3" fill="#4caf50" transform="rotate(18 750 96)" />
        <ellipse class="quad-leaf" cx="850" cy="104" rx="7" ry="3" fill="#006e1c" transform="rotate(14 850 104)" />
      </g>
      <g>
        <g class="quad-fruit">
          <circle cx="150" cy="90" r="14" fill="#16a34a" opacity="0.22" />
          <circle cx="150" cy="90" r="7.5" fill="#ffffff" stroke="#16a34a" stroke-width="2.8" />
          <ellipse cx="150" cy="90.5" rx="3.6" ry="2.4" fill="#16a34a" />
          <line x1="146.8" y1="90.5" x2="153.2" y2="90.5" stroke="#ffffff" stroke-width="0.9" stroke-linecap="round" />
          <line x1="150" y1="82.5" x2="150" y2="80.5" stroke="#16a34a" stroke-width="1.6" stroke-linecap="round" />
        </g>
        <g class="quad-fruit">
          <circle cx="450" cy="74" r="14" fill="#b7791f" opacity="0.25" />
          <circle cx="450" cy="74" r="7.5" fill="#ffffff" stroke="#b7791f" stroke-width="2.8" />
          <circle cx="450" cy="74" r="3.4" fill="#f7c948" stroke="#b7791f" stroke-width="1.2" />
          <line x1="450" y1="71.6" x2="450" y2="76.4" stroke="#b7791f" stroke-width="1" stroke-linecap="round" />
        </g>
        <g class="quad-fruit">
          <circle cx="750" cy="74" r="14" fill="#2471a3" opacity="0.22" />
          <circle cx="750" cy="74" r="7.5" fill="#ffffff" stroke="#2471a3" stroke-width="2.8" />
          <path d="M 750 70.6 C 751.8 73 753.2 74.6 753.2 76.2 A 3.2 3.2 0 1 1 746.8 76.2 C 746.8 74.6 748.2 73 750 70.6 Z" fill="#2471a3" />
        </g>
        <g class="quad-fruit">
          <circle cx="1050" cy="90" r="14" fill="#004d13" opacity="0.2" />
          <circle cx="1050" cy="90" r="7.5" fill="#ffffff" stroke="#004d13" stroke-width="2.8" />
          <polygon points="1050,86.6 1050.9,88.9 1053.4,88.9 1051.4,90.5 1052.1,92.9 1050,91.4 1047.9,92.9 1048.6,90.5 1046.6,88.9 1049.1,88.9" fill="#b7791f" stroke="#b7791f" stroke-width="0.6" stroke-linejoin="round" />
        </g>
      </g>
      <g fill="#d9a521">
        <circle cx="120" cy="116" r="1.8">
          <animate attributeName="opacity" values="0.2;1;0.2" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="380" cy="106" r="1.8">
          <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" begin="0.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="820" cy="106" r="1.8">
          <animate attributeName="opacity" values="0.2;1;0.2" dur="2.8s" begin="1s" repeatCount="indefinite" />
        </circle>
        <circle cx="1080" cy="116" r="1.8">
          <animate attributeName="opacity" values="0.2;1;0.2" dur="2.2s" begin="0.3s" repeatCount="indefinite" />
        </circle>
      </g>
      <g class="quad-soilbit">
        <g fill="#cfe3d2" stroke="#8fb896" stroke-width="1">
          <circle cx="138" cy="203" r="2.4" />
          <circle cx="146" cy="202" r="2.4" />
          <circle cx="154" cy="202" r="2.4" />
          <circle cx="162" cy="203" r="2.4" />
          <circle cx="146" cy="207" r="2.4" />
          <circle cx="154" cy="207" r="2.4" />
        </g>
        <g fill="#d9b77c" stroke="#a97f3d" stroke-width="1">
          <rect x="430" y="202" width="9" height="3.6" rx="1" transform="rotate(-14 434 204)" />
          <rect x="441" y="204" width="9" height="3.6" rx="1" transform="rotate(12 445 206)" />
          <rect x="452" y="202" width="9" height="3.6" rx="1" transform="rotate(-8 456 204)" />
        </g>
        <g fill="#f7e3ae" fill-opacity="0.6" stroke="#f0c76a" stroke-width="1.1">
          <polygon points="738,202 742,204.5 742,208.5 738,211 734,208.5 734,204.5" />
          <polygon points="748,202 752,204.5 752,208.5 748,211 744,208.5 744,204.5" />
          <polygon points="743,208 747,210.5 747,214.5 743,217 739,214.5 739,210.5" />
        </g>
        <g stroke="#ecd27a" stroke-width="1.8" stroke-linecap="round">
          <line x1="1035" y1="204" x2="1047" y2="202.5" />
          <line x1="1038" y1="208" x2="1051" y2="206.5" />
          <line x1="1043" y1="212" x2="1054" y2="210.5" />
        </g>
      </g>
      <g>
        <rect x="98" y="272" width="104" height="17" rx="8.5" fill="#000000" opacity="0.22" />
        <rect x="398" y="272" width="104" height="17" rx="8.5" fill="#000000" opacity="0.22" />
        <rect x="698" y="272" width="104" height="17" rx="8.5" fill="#000000" opacity="0.22" />
        <rect x="998" y="272" width="104" height="17" rx="8.5" fill="#000000" opacity="0.22" />
      </g>
      <g font-size="16" fill="#ffffff" opacity="0.94" text-anchor="middle" font-family="Inter, sans-serif">
        <text x="150" y="284.5">Pelet rPLA</text>
        <text x="450" y="284.5">Kayu limbah</text>
        <text x="750" y="284.5">Honeycomb</text>
        <text x="1050" y="284.5">Jerami</text>
      </g>
    </svg>
    <svg viewBox="0 0 360 138" preserveAspectRatio="none" class="block h-[150px] w-full md:hidden">
      <rect x="0" y="0" width="360" height="96" fill="#e4f1fa" />
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
      <rect x="0" y="96" width="360" height="3" fill="#006e1c" opacity="0.9" />
      <rect x="0" y="99" width="360" height="15" fill="#3f2f23" />
      <rect x="0" y="114" width="360" height="12" fill="#5d4630" />
      <rect x="0" y="126" width="360" height="12" fill="#7a5f42" />
      <g fill="none" stroke="#ffffff" stroke-width="1.2" stroke-dasharray="2.5 3" opacity="0.4">
        <path class="quad-link" d="M 45 68 C 45 90 45 114 45 138" />
        <path class="quad-link" d="M 135 62 C 135 88 135 113 135 138" />
        <path class="quad-link" d="M 225 62 C 225 88 225 113 225 138" />
        <path class="quad-link" d="M 315 68 C 315 90 315 114 315 138" />
      </g>
      <g fill="none" stroke="#3a2c1e" stroke-width="1.8" stroke-linecap="round" opacity="0.6">
        <path class="quad-root" d="M 180 106 C 168 104 158 103 148 102" />
        <path class="quad-root" d="M 180 106 C 192 104 202 103 212 102" />
      </g>
      <path
        ref="trunkMob"
        d="M 180 106 C 180 94 180 82 180 70"
        fill="none"
        stroke="#004d13"
        stroke-width="5.5"
        stroke-linecap="round"
      />
      <path
        d="M 180 106 C 180 94 180 82 180 70"
        fill="none"
        stroke="#9be0a4"
        stroke-width="2"
        stroke-linecap="round"
        stroke-dasharray="1 7"
        class="anim-flow"
        opacity="0.9"
      />
      <g fill="none" stroke="#006e1c" stroke-width="2.4" stroke-linecap="round" opacity="0.65">
        <path class="quad-branch" d="M 180 76 C 150 74 110 68 52 60" />
        <path class="quad-branch" d="M 180 74 C 168 68 156 62 142 56" />
        <path class="quad-branch" d="M 180 74 C 192 68 204 62 218 56" />
        <path class="quad-branch" d="M 180 76 C 210 74 250 68 308 60" />
      </g>
      <g opacity="0.6">
        <ellipse class="quad-leaf" cx="168" cy="72" rx="7" ry="3.5" fill="#006e1c" />
        <ellipse class="quad-leaf" cx="192" cy="72" rx="7" ry="3.5" fill="#006e1c" />
        <ellipse class="quad-leaf" cx="180" cy="64" rx="6" ry="3" fill="#4caf50" />
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
        <circle cx="95" cy="84" r="1.4">
          <animate attributeName="opacity" values="0.2;1;0.2" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="265" cy="84" r="1.4">
          <animate attributeName="opacity" values="0.2;1;0.2" dur="2.6s" begin="0.7s" repeatCount="indefinite" />
        </circle>
      </g>
      <g font-size="16" fill="#ffffff" opacity="0.92" text-anchor="middle" font-family="Inter, sans-serif">
        <text x="45" y="134.5" textLength="72" lengthAdjust="spacingAndGlyphs">Pelet rPLA</text>
        <text x="135" y="134.5" textLength="72" lengthAdjust="spacingAndGlyphs">Kayu limbah</text>
        <text x="225" y="134.5" textLength="72" lengthAdjust="spacingAndGlyphs">Honeycomb</text>
        <text x="315" y="134.5" textLength="60" lengthAdjust="spacingAndGlyphs">Jerami</text>
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
