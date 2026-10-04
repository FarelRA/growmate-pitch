<script setup lang="ts">
import gsap from 'gsap'

const box = ref<HTMLElement | null>(null)
const trunk = ref<SVGPathElement | null>(null)
const trunkMob = ref<SVGPathElement | null>(null)
let ctx: gsap.Context | null = null

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  ctx = gsap.context(() => {
    const trunks = [trunk.value, trunkMob.value].filter(Boolean) as SVGPathElement[]
    trunks.forEach((p) => {
      try {
        const len = p.getTotalLength()
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len })
        gsap.to(p, { strokeDashoffset: 0, duration: 0.7, ease: 'power2.out', delay: 0.1 })
      } catch {
        return
      }
    })
    try {
      const branches = box.value?.querySelectorAll('.quad-branch') ?? []
      branches.forEach((p) => {
        const len = (p as SVGPathElement).getTotalLength()
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len })
      })
      gsap.to(branches, { strokeDashoffset: 0, duration: 0.6, ease: 'power2.out', delay: 0.55, stagger: 0.12 })
    } catch {
      return
    }
    gsap.fromTo('.quad-root', { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 1.1, stagger: 0.08 })
    gsap.from('.quad-fruit', {
      scale: 0,
      transformOrigin: 'center',
      duration: 0.4,
      ease: 'back.out(2.2)',
      delay: 0.9,
      stagger: 0.12,
      clearProps: 'scale',
    })
    gsap.from('.quad-leaf', {
      scale: 0,
      transformOrigin: 'center',
      duration: 0.35,
      ease: 'back.out(2)',
      delay: 1.0,
      stagger: 0.07,
      clearProps: 'scale',
    })
  }, box.value ?? undefined)
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <div ref="box" aria-hidden="true" class="pointer-events-none absolute inset-0 z-0">
    <svg viewBox="0 0 1200 240" preserveAspectRatio="xMidYMid meet" class="hidden h-full w-full md:block">
      <path
        ref="trunk"
        d="M 600 238 C 600 212 598 186 600 152"
        fill="none"
        stroke="#004d13"
        stroke-width="6"
        stroke-linecap="round"
      />
      <g fill="none" stroke="#006e1c" stroke-width="3.5" stroke-linecap="round" opacity="0.55">
        <path class="quad-branch" d="M 600 165 C 470 155 290 110 150 42" />
        <path class="quad-branch" d="M 600 160 C 565 140 510 100 452 44" />
        <path class="quad-branch" d="M 600 160 C 635 140 690 100 748 44" />
        <path class="quad-branch" d="M 600 165 C 730 155 910 110 1050 42" />
      </g>
      <g fill="none" stroke="#006e1c" stroke-width="2.5" stroke-linecap="round" opacity="0.45">
        <path class="quad-root" d="M 600 238 C 555 228 515 226 470 222" />
        <path class="quad-root" d="M 600 238 C 575 231 555 229 530 227" />
        <path class="quad-root" d="M 600 238 C 625 231 645 229 670 227" />
        <path class="quad-root" d="M 600 238 C 645 228 685 226 730 222" />
      </g>
      <g font-size="12" fill="#3f4a3c" opacity="0.75" text-anchor="middle" font-family="Inter, sans-serif">
        <text x="418" y="214">PLA daur ulang</text>
        <text x="512" y="220">kayu limbah</text>
        <text x="688" y="220">honeycomb</text>
        <text x="778" y="214">jerami</text>
      </g>
      <g fill="#006e1c" opacity="0.45">
        <ellipse class="quad-leaf anim-float" cx="380" cy="128" rx="10" ry="4.5" transform="rotate(-18 380 128)" style="transform-box: fill-box; transform-origin: center" />
        <ellipse class="quad-leaf anim-float" cx="240" cy="82" rx="10" ry="4.5" transform="rotate(-14 240 82)" style="transform-box: fill-box; transform-origin: center; animation-delay: 0.8s" />
        <ellipse class="quad-leaf anim-float" cx="530" cy="118" rx="9" ry="4" transform="rotate(-24 530 118)" style="transform-box: fill-box; transform-origin: center; animation-delay: 1.6s" />
        <ellipse class="quad-leaf anim-float" cx="672" cy="118" rx="9" ry="4" transform="rotate(24 672 118)" style="transform-box: fill-box; transform-origin: center; animation-delay: 0.4s" />
        <ellipse class="quad-leaf anim-float" cx="820" cy="128" rx="10" ry="4.5" transform="rotate(18 820 128)" style="transform-box: fill-box; transform-origin: center; animation-delay: 1.2s" />
        <ellipse class="quad-leaf anim-float" cx="960" cy="82" rx="10" ry="4.5" transform="rotate(14 960 82)" style="transform-box: fill-box; transform-origin: center; animation-delay: 2s" />
      </g>
      <g style="transform-box: fill-box; transform-origin: center">
        <circle class="quad-fruit" cx="150" cy="42" r="7" fill="#ffffff" stroke="#006e1c" stroke-width="3" />
        <circle class="quad-fruit" cx="452" cy="44" r="7" fill="#ffffff" stroke="#b7791f" stroke-width="3" />
        <circle class="quad-fruit" cx="748" cy="44" r="7" fill="#ffffff" stroke="#2471a3" stroke-width="3" />
        <circle class="quad-fruit" cx="1050" cy="42" r="7" fill="#ffffff" stroke="#004d13" stroke-width="3" />
      </g>
    </svg>
    <svg viewBox="0 0 48 640" preserveAspectRatio="xMidYMid meet" class="block h-full w-full md:hidden">
      <path
        ref="trunkMob"
        d="M 12 8 L 12 632"
        fill="none"
        stroke="#004d13"
        stroke-width="3"
        stroke-linecap="round"
      />
      <g fill="none" stroke="#006e1c" stroke-width="2.5" stroke-linecap="round" opacity="0.55">
        <path class="quad-branch" d="M 12 90 C 20 88 26 86 34 82" />
        <path class="quad-branch" d="M 12 250 C 20 248 26 246 34 242" />
        <path class="quad-branch" d="M 12 410 C 20 408 26 406 34 402" />
        <path class="quad-branch" d="M 12 560 C 20 558 26 556 34 552" />
      </g>
      <g fill="none" stroke="#006e1c" stroke-width="2" stroke-linecap="round" opacity="0.45">
        <path class="quad-root" d="M 12 632 C 18 624 24 620 32 618" />
        <path class="quad-root" d="M 12 632 C 16 626 18 622 22 618" />
      </g>
      <g fill="#006e1c" opacity="0.45">
        <ellipse class="quad-leaf" cx="12" cy="160" rx="6" ry="3" style="transform-box: fill-box; transform-origin: center" />
        <ellipse class="quad-leaf" cx="12" cy="330" rx="6" ry="3" style="transform-box: fill-box; transform-origin: center" />
        <ellipse class="quad-leaf" cx="12" cy="490" rx="6" ry="3" style="transform-box: fill-box; transform-origin: center" />
      </g>
      <g style="transform-box: fill-box; transform-origin: center">
        <circle class="quad-fruit" cx="12" cy="90" r="5" fill="#ffffff" stroke="#006e1c" stroke-width="2.5" />
        <circle class="quad-fruit" cx="12" cy="250" r="5" fill="#ffffff" stroke="#b7791f" stroke-width="2.5" />
        <circle class="quad-fruit" cx="12" cy="410" r="5" fill="#ffffff" stroke="#2471a3" stroke-width="2.5" />
        <circle class="quad-fruit" cx="12" cy="560" r="5" fill="#ffffff" stroke="#004d13" stroke-width="2.5" />
      </g>
    </svg>
  </div>
</template>
