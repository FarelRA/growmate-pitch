<script setup lang="ts">
import gsap from 'gsap'

// Alur sungai evolusi. Satu garis air mengalir dari tahap satu ke tahap tiga.
// Tahap satu dikelilingi kabel jumper kusut, tahap dua bergeser ke jejak PCB,
// tahap tiga menjadi air jernih bergelembung. Lingkaran aktif berdenyut.
withDefaults(defineProps<{ active?: number }>(), { active: 2 })

const riverBox = ref<HTMLElement | null>(null)
const casing = ref<SVGPathElement | null>(null)
const water = ref<SVGPathElement | null>(null)
let ctx: gsap.Context | null = null

const nodes = [
  { no: '01', x: 240, short: 'Validasi' },
  { no: '02', x: 680, short: 'Integrasi' },
  { no: '03', x: 1090, short: 'Final' },
]

const RIVER_D = 'M 36 94 C 80 94 90 52 150 52 L 330 52 C 400 52 400 84 470 80 C 520 77 540 52 600 52 L 760 52 C 830 52 840 84 910 78 C 950 74 970 52 1030 52 L 1164 52'

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  ctx = gsap.context(() => {
    const hose = casing.value
    if (hose) {
      const len = hose.getTotalLength()
      gsap.set(hose, { strokeDasharray: len, strokeDashoffset: len })
      gsap.to(hose, { strokeDashoffset: 0, duration: 0.9, ease: 'power2.out', delay: 0.15 })
    }
    if (water.value) {
      gsap.fromTo(water.value, { opacity: 0 }, { opacity: 1, duration: 0.45, delay: 0.8, ease: 'power1.out' })
    }
    gsap.from('.kembang-node', {
      scale: 0,
      transformOrigin: 'center',
      duration: 0.5,
      ease: 'back.out(2.2)',
      stagger: 0.12,
      delay: 0.35,
      clearProps: 'scale',
    })
  }, riverBox.value ?? undefined)
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <div ref="riverBox" class="w-full overflow-hidden rounded-3xl border-2 border-gm-line bg-gm-panel px-4 pb-2 pt-2">
    <svg
      viewBox="0 0 1200 112"
      class="block h-auto w-full"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Alur evolusi produk dari tahap satu ke tahap tiga"
    >
      <!-- Kabel jumper kusut di sekitar tahap satu -->
      <g fill="none" stroke-linecap="round" stroke-width="4" opacity="0.85">
        <path d="M 112 86 C 150 50 180 86 220 40 C 245 18 275 26 296 50" stroke="#c0392b" />
        <path d="M 110 72 C 160 72 175 32 225 52 C 265 68 290 38 326 56" stroke="#b7791f" />
        <path d="M 120 94 C 160 86 190 28 240 44 C 280 58 296 82 336 74" stroke="#2471a3" />
      </g>
      <!-- Jejak PCB siku di bawah tahap dua, digeser naik agar tidak menyentuh label -->
      <g fill="none" stroke="#004d13" stroke-width="4">
        <path d="M 600 58 L 600 78 L 660 78" />
        <path d="M 716 58 L 716 74 L 752 74" />
      </g>
      <g fill="#004d13">
        <rect x="653" y="71" width="14" height="14" rx="2" />
        <rect x="745" y="67" width="14" height="14" rx="2" />
        <circle cx="628" cy="78" r="5" />
      </g>
      <!-- Selang bening pembungkus dan air hijau di dalamnya -->
      <path ref="casing" :d="RIVER_D" fill="none" stroke="#dfe6df" stroke-width="26" stroke-linecap="round" />
      <path ref="water" id="kembang-flow" :d="RIVER_D" fill="none" stroke="#006e1c" stroke-width="9" stroke-linecap="round" class="anim-flow" />
      <!-- Gelembung statis di tahap tiga -->
      <g fill="#ffffff" stroke="#006e1c" stroke-width="3">
        <circle cx="985" cy="42" r="8">
          <animate attributeName="cy" values="46;34;46" dur="3.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.55;1;0.55" dur="3.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="1052" cy="36" r="10">
          <animate attributeName="cy" values="40;28;40" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.55;1;0.55" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="1122" cy="44" r="7">
          <animate attributeName="cy" values="48;38;48" dur="2.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.55;1;0.55" dur="2.6s" repeatCount="indefinite" />
        </circle>
      </g>
      <!-- Satu gelembung berjalan dari tahap satu ke tahap tiga tiap empat detik -->
      <circle r="9" fill="#ffffff" stroke="#006e1c" stroke-width="3.5">
        <animateMotion dur="4s" repeatCount="indefinite">
          <mpath href="#kembang-flow" />
        </animateMotion>
      </circle>
      <!-- Simpul bernomor di atas garis -->
      <g v-for="(n, i) in nodes" :key="n.no" class="kembang-node">
        <circle
          v-if="i === active"
          :cx="n.x"
          cy="52"
          r="33"
          fill="none"
          stroke="#006e1c"
          stroke-width="3.5"
          opacity="0.45"
          class="anim-pulse-dot"
          style="transform-box: fill-box; transform-origin: center"
        />
        <circle :cx="n.x" cy="52" r="22" fill="#ffffff" :stroke="i === active ? '#006e1c' : '#1a1c1c'" stroke-width="4" />
        <text :x="n.x" y="52" text-anchor="middle" dy="0.35em" font-size="16" font-weight="800" :fill="i === active ? '#006e1c' : '#1a1c1c'" font-family="Manrope, sans-serif">{{ n.no }}</text>
        <text :x="n.x" y="104" text-anchor="middle" font-size="16" font-weight="700" fill="#3f4a3c" font-family="Manrope, sans-serif">{{ n.short }}</text>
      </g>
    </svg>
  </div>
</template>
