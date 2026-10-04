<script setup lang="ts">
import gsap from 'gsap'

const box = ref<HTMLElement | null>(null)
const deskPath = ref<SVGPathElement | null>(null)
const mobPath = ref<SVGPathElement | null>(null)
let ctx: gsap.Context | null = null

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  ctx = gsap.context(() => {
    const paths = [deskPath.value, mobPath.value].filter(Boolean) as SVGPathElement[]
    paths.forEach((p, idx) => {
      try {
        const len = p.getTotalLength()
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len })
        gsap.to(p, { strokeDashoffset: 0, duration: idx === 0 ? 1.1 : 0.9, ease: 'power2.out', delay: 0.15 })
      } catch {
        return
      }
    })
    gsap.from('.sosial-leaf', {
      scale: 0,
      transformOrigin: 'center',
      duration: 0.4,
      ease: 'back.out(2)',
      stagger: 0.1,
      delay: 0.6,
      clearProps: 'scale',
    })
    gsap.from('.sosial-node', {
      scale: 0,
      transformOrigin: 'center',
      duration: 0.35,
      ease: 'back.out(2.2)',
      stagger: 0.14,
      delay: 0.4,
      clearProps: 'scale',
    })
  }, box.value ?? undefined)
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <div ref="box" aria-hidden="true" class="pointer-events-none absolute inset-y-0 left-0 w-7 md:w-9">
    <svg viewBox="0 0 80 600" preserveAspectRatio="xMidYMid meet" class="hidden h-full w-full md:block">
      <path
        ref="deskPath"
        d="M 40 4 C 14 110 66 170 40 250 C 14 330 66 390 40 470 C 30 520 36 560 40 596"
        fill="none"
        stroke="#006e1c"
        stroke-width="4"
        stroke-linecap="round"
      />
      <g fill="#006e1c" opacity="0.85">
        <ellipse class="sosial-leaf" cx="24" cy="130" rx="9" ry="4.5" transform="rotate(-28 24 130)" style="transform-box: fill-box; transform-origin: center" />
        <ellipse class="sosial-leaf" cx="56" cy="215" rx="9" ry="4.5" transform="rotate(24 56 215)" style="transform-box: fill-box; transform-origin: center" />
        <ellipse class="sosial-leaf" cx="24" cy="315" rx="9" ry="4.5" transform="rotate(-24 24 315)" style="transform-box: fill-box; transform-origin: center" />
        <ellipse class="sosial-leaf" cx="56" cy="410" rx="9" ry="4.5" transform="rotate(26 56 410)" style="transform-box: fill-box; transform-origin: center" />
        <ellipse class="sosial-leaf" cx="26" cy="500" rx="9" ry="4.5" transform="rotate(-26 26 500)" style="transform-box: fill-box; transform-origin: center" />
      </g>
      <g class="sosial-node" style="transform-box: fill-box; transform-origin: center">
        <circle cx="40" cy="96" r="8" fill="#ffffff" stroke="#006e1c" stroke-width="3" />
        <circle cx="40" cy="296" r="8" fill="#ffffff" stroke="#006e1c" stroke-width="3" />
        <circle cx="40" cy="486" r="8" fill="#ffffff" stroke="#006e1c" stroke-width="3" />
      </g>
    </svg>
    <svg viewBox="0 0 24 600" preserveAspectRatio="xMidYMid meet" class="block h-full w-full md:hidden">
      <path
        ref="mobPath"
        d="M 12 4 L 12 596"
        fill="none"
        stroke="#006e1c"
        stroke-width="3"
        stroke-linecap="round"
      />
      <g fill="#006e1c" opacity="0.85">
        <ellipse class="sosial-leaf" cx="12" cy="150" rx="7" ry="3.5" style="transform-box: fill-box; transform-origin: center" />
        <ellipse class="sosial-leaf" cx="12" cy="330" rx="7" ry="3.5" style="transform-box: fill-box; transform-origin: center" />
        <ellipse class="sosial-leaf" cx="12" cy="480" rx="7" ry="3.5" style="transform-box: fill-box; transform-origin: center" />
      </g>
      <g class="sosial-node" style="transform-box: fill-box; transform-origin: center">
        <circle cx="12" cy="96" r="6" fill="#ffffff" stroke="#006e1c" stroke-width="2.5" />
        <circle cx="12" cy="296" r="6" fill="#ffffff" stroke="#006e1c" stroke-width="2.5" />
        <circle cx="12" cy="486" r="6" fill="#ffffff" stroke="#006e1c" stroke-width="2.5" />
      </g>
    </svg>
  </div>
</template>
