<script setup lang="ts">
import gsap from 'gsap'

const ROUTE_D = 'M 90 115 C 180 95 250 135 340 115 C 430 95 500 135 590 115 C 660 100 740 100 806 115 C 860 130 840 210 760 240 C 640 280 480 250 350 290 C 260 315 150 330 90 355 C 180 375 250 335 340 355 C 430 375 500 335 590 355 C 660 370 740 370 806 355'
const END_X = 806
const END_Y = 355

const reduced = usePreferredReducedMotion()
const box = ref<HTMLElement | null>(null)
let ctx: gsap.Context | null = null

onMounted(() => {
  if (reduced.value === 'reduce') return
  ctx = gsap.context(() => {
    const el = box.value?.querySelector<SVGPathElement>('#dok-route-main')
    if (!el) return
    const len = el.getTotalLength()
    gsap.set(el, { strokeDasharray: len, strokeDashoffset: len })
    gsap.to(el, {
      strokeDashoffset: 0,
      duration: 1.2,
      ease: 'power2.out',
      delay: 0.15,
      onComplete: () => {
        el.style.strokeDasharray = ''
        el.style.strokeDashoffset = ''
        el.classList.add('anim-flow')
      },
    })
  }, box.value ?? undefined)
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <div ref="box" aria-hidden="true" class="pointer-events-none absolute inset-0 z-0">
    <svg viewBox="0 0 896 470" preserveAspectRatio="none" class="hidden h-full w-full md:block">
      <g fill="none" stroke="#b7791f" stroke-width="1.5" opacity="0.14">
        <path d="M 60 60 C 120 20 220 30 260 90 C 300 150 220 200 150 180 C 80 160 20 120 60 60 Z" />
        <path d="M 90 80 C 130 55 200 60 220 100 C 240 140 190 165 145 150 C 100 135 60 110 90 80 Z" />
        <path d="M 640 360 C 700 330 800 340 830 390 C 860 440 780 465 710 450 C 640 435 590 395 640 360 Z" />
        <path d="M 670 378 C 710 360 770 365 790 395 C 808 422 760 442 715 432 C 672 422 640 398 670 378 Z" />
      </g>
      <path
        id="dok-route-main"
        :d="ROUTE_D"
        fill="none"
        stroke="#b7791f"
        stroke-width="3"
        stroke-linecap="round"
        :class="reduced === 'reduce' ? 'anim-flow' : ''"
      />
      <circle :cx="END_X" :cy="END_Y" r="11" fill="#b7791f" class="dok-rest" />
      <circle v-if="reduced !== 'reduce'" r="7" fill="#b7791f" stroke="#faf6ec" stroke-width="2.5">
        <animateMotion dur="2.5s" fill="freeze">
          <mpath href="#dok-route-main" />
        </animateMotion>
      </circle>
      <circle v-else :cx="END_X" :cy="END_Y" r="7" fill="#b7791f" stroke="#faf6ec" stroke-width="2.5" />
    </svg>
    <div class="absolute bottom-3 left-[17px] top-3 w-[3px] md:hidden">
      <div class="dok-rail absolute inset-0 rounded-full bg-gm-amber/70" />
      <div class="dok-drop absolute top-1 size-3.5 rounded-full border-2 border-white bg-gm-amber shadow" />
    </div>
  </div>
</template>

<style scoped>
.dok-rest {
  opacity: 0;
  transform-box: fill-box;
  transform-origin: center;
  animation: dok-rest-in 0.4s ease 2.5s forwards, gm-pulse-dot 1.8s ease-in-out 2.9s infinite;
}
@keyframes dok-rest-in {
  to { opacity: 0.25; }
}
.dok-rail {
  transform-origin: top;
  animation: dok-grow 1.2s ease-out 0.15s both;
}
@keyframes dok-grow {
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
}
.dok-drop {
  left: 50%;
  margin-left: -7px;
  animation: dok-drop 2.5s ease-in-out 0.2s both, gm-pulse-dot 1.8s ease-in-out 2.7s infinite;
}
@keyframes dok-drop {
  from { top: 4px; }
  to { top: calc(100% - 18px); }
}
@media (prefers-reduced-motion: reduce) {
  .dok-rail, .dok-drop, .dok-rest {
    animation: none !important;
  }
  .dok-rail { transform: none; }
  .dok-rest { opacity: 0.25; }
  .dok-drop { top: calc(100% - 18px); }
}
</style>
