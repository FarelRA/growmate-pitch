<script setup lang="ts">
import gsap from 'gsap'
import { Motion } from 'motion-v'

const props = withDefaults(
  defineProps<{ size?: 'sm' | 'md'; burst?: boolean }>(),
  { size: 'md', burst: true },
)

const stampRef = ref<HTMLElement | null>(null)
let tl: ReturnType<typeof gsap.timeline> | null = null

const boxClass = computed(() => (props.size === 'sm' ? 'size-20' : 'size-24 md:size-28'))

const checks = [
  { x: 64, y: 0 },
  { x: 45, y: -45 },
  { x: 0, y: -64 },
  { x: -45, y: -45 },
  { x: -64, y: 0 },
  { x: -45, y: 45 },
  { x: 0, y: 64 },
  { x: 45, y: 45 },
]

onMounted(() => {
  if (!stampRef.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  tl = gsap.timeline({ delay: 0.6 })
  tl.fromTo(
    stampRef.value,
    { scale: 2.2, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.28, ease: 'power4.in' },
  )
  tl.to(stampRef.value, { x: 6, duration: 0.05, ease: 'none' })
  tl.to(stampRef.value, { x: -6, duration: 0.05, ease: 'none' })
  tl.to(stampRef.value, { x: 3, duration: 0.05, ease: 'none' })
  tl.to(stampRef.value, { x: 0, duration: 0.05, ease: 'none' })
})

onUnmounted(() => {
  tl?.kill()
  tl = null
})
</script>

<template>
  <div class="pointer-events-none relative rotate-[-12deg]" :class="boxClass" aria-hidden="true">
    <div ref="stampRef" class="size-full opacity-95 mix-blend-multiply">
      <svg viewBox="0 0 120 120" class="size-full" aria-hidden="true">
        <circle cx="60" cy="60" r="56" fill="rgba(0, 110, 28, 0.08)" stroke="#006e1c" stroke-width="5" />
        <circle cx="60" cy="60" r="45" fill="none" stroke="#006e1c" stroke-width="2" />
        <path
          d="M60 32 L63.1 40.2 L71.6 40.6 L64.9 45.9 L67.2 54.1 L60 49.2 L52.8 54.1 L55.1 45.9 L48.4 40.6 L56.9 40.2 Z"
          fill="none"
          stroke="#006e1c"
          stroke-width="2.5"
          stroke-linejoin="round"
        />
        <text x="60" y="80" text-anchor="middle" font-size="15.5" font-weight="800" fill="#006e1c" letter-spacing="1.5" font-family="Manrope, sans-serif">LULUS UJI</text>
        <text x="60" y="93" text-anchor="middle" font-size="8" font-weight="700" fill="#006e1c" letter-spacing="2.5" font-family="Manrope, sans-serif">DKPP BANTUL</text>
      </svg>
    </div>
    <template v-if="burst">
      <Motion
        v-for="(c, i) in checks"
        :key="i"
        :initial="{ opacity: 0, scale: 0, x: 0, y: 0 }"
        :animate="{ opacity: 1, scale: 1, x: c.x, y: c.y }"
        :transition="{ duration: 0.45, delay: 0.9 + i * 0.06, ease: [0.22, 1, 0.36, 1] }"
        class="absolute left-1/2 top-1/2 grid size-5 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gm-primary text-white shadow-md"
      >
        <Icon name="lucide:check" class="size-3" />
      </Motion>
    </template>
  </div>
</template>
