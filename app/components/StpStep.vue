<script setup lang="ts">
import gsap from 'gsap'

const props = withDefaults(
  defineProps<{
    letter: string
    icon: string
    title: string
    desc: string
    variant?: 'segment' | 'target' | 'position'
  }>(),
  { variant: 'segment' },
)

const locked = ref(false)
const crossIcon = ref<HTMLElement | null>(null)
let ctx: gsap.Context | null = null

const chipClass = computed(() => {
  if (props.variant === 'target' && locked.value) return 'bg-gm-primary'
  if (props.variant === 'target') return 'bg-gm-amberbg'
  return 'bg-gm-mist'
})

const iconClass = computed(() => {
  if (props.variant === 'target' && locked.value) return 'text-white'
  if (props.variant === 'target') return 'text-gm-amber'
  return 'text-gm-primary'
})

onMounted(() => {
  if (props.variant !== 'target') return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    locked.value = true
    return
  }
  ctx = gsap.context(() => {
    gsap.fromTo(
      crossIcon.value,
      { rotation: 0 },
      {
        rotation: 360,
        duration: 1.1,
        delay: 0.7,
        ease: 'power2.inOut',
        onComplete: () => {
          locked.value = true
          gsap.fromTo(crossIcon.value, { scale: 0.7 }, { scale: 1, duration: 0.45, ease: 'back.out(2.5)' })
        },
      },
    )
  })
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <div class="relative w-full rounded-2xl border-2 border-gm-line bg-white p-4 text-left">
    <span
      aria-hidden="true"
      class="pointer-events-none absolute right-2 top-1 z-0 select-none font-headline text-[64px] font-extrabold leading-none text-gm-mist lg:right-3 lg:top-1/2 lg:-translate-y-1/2 lg:text-[92px]"
    >
      {{ letter }}
    </span>
    <div class="relative z-10 flex items-center justify-start gap-3 pr-14 lg:pr-24">
      <span class="grid size-11 shrink-0 place-items-center rounded-xl transition-colors duration-500 md:size-12" :class="chipClass">
        <span ref="crossIcon" class="grid place-items-center" :class="variant === 'position' ? 'anim-float' : ''">
          <Icon :name="icon" class="size-6" :class="iconClass" />
        </span>
      </span>
      <div class="min-w-0">
        <div class="font-headline text-base font-extrabold text-gm-ink">{{ title }}</div>
        <p class="text-base leading-snug text-gm-muted">{{ desc }}</p>
        <p v-if="variant === 'target'" class="mt-1 flex h-6 items-center justify-start gap-1.5 text-base font-bold">
          <span v-if="locked" class="flex items-center justify-start gap-1.5 text-gm-primary">
            <span class="anim-pulse-dot size-2 rounded-full bg-gm-primary" />
            Target terkunci
          </span>
          <span v-else class="text-gm-amber">Mengunci target</span>
        </p>
      </div>
    </div>
  </div>
</template>
