<script setup lang="ts">
import gsap from 'gsap'

const props = defineProps<{ active: number }>()

/* Same order as the voices in VoiceCarousel.vue. Passive display only, no clicks. */
const items = [
  { photo: '/photos/testi-wabup.webp', name: 'Aris Suharyanto' },
  { photo: '/photos/testi-dkpp.webp', name: 'Joko Waluyo' },
  { photo: '/photos/testi-dkumpp.webp', name: 'Praptanugraha' },
  { photo: '/photos/testi-bunda.webp', name: 'Emi Masruroh Halim' },
  { photo: '/photos/testi-kemenperin.webp', name: 'Benedictus Hermasto' },
  { photo: '/photos/testi-dosen.webp', name: 'Rizki Octavianto' },
  { photo: '/photos/testi-kepsek.webp', name: 'Indrati Sayuto' },
  { photo: '/photos/testi-pegiat.webp', name: 'Rohmat Subekti' },
]

const wrapRef = ref<HTMLElement | null>(null)
const rowRef = ref<HTMLElement | null>(null)
const coneRef = ref<HTMLElement | null>(null)
const glowRef = ref<HTMLElement | null>(null)

/* Gentle arc: edge coins sit lower, center coins sit higher. */
function arcTop(i: number) {
  return Math.round(Math.abs(i - 3.5) * 4)
}

function reducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function layoutSpot(animate: boolean) {
  const wrap = wrapRef.value
  const row = rowRef.value
  const coneEl = coneRef.value
  const glowEl = glowRef.value
  if (!wrap || !row || !coneEl || !glowEl) return
  const safe = Math.min(Math.max(props.active, 0), items.length - 1)
  const coin = row.children[safe] as HTMLElement | undefined
  if (!coin) return
  const wrapBox = wrap.getBoundingClientRect()
  const coinBox = coin.getBoundingClientRect()
  const cx = coinBox.left - wrapBox.left + coinBox.width / 2
  const dur = animate && !reducedMotion() ? 0.7 : 0
  gsap.to(coneEl, { x: cx - coneEl.offsetWidth / 2, duration: dur, ease: 'power3.out', overwrite: 'auto' })
  gsap.to(glowEl, { x: cx - glowEl.offsetWidth / 2, duration: dur, ease: 'power3.out', overwrite: 'auto' })
}

function onResize() {
  layoutSpot(false)
}

onMounted(() => {
  nextTick(() => layoutSpot(false))
  window.addEventListener('resize', onResize)
})

watch(() => props.active, () => layoutSpot(true))

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
  if (coneRef.value) gsap.killTweensOf(coneRef.value)
  if (glowRef.value) gsap.killTweensOf(glowRef.value)
})
</script>

<template>
  <div class="w-full overflow-hidden rounded-2xl border-2 border-gm-line bg-gm-cream px-3 pb-2.5 pt-2 text-left md:px-3.5" aria-label="Tribun delapan saksi">
    <div class="flex items-center justify-between gap-2">
      <p class="flex items-center gap-1.5 font-headline text-[11px] font-extrabold uppercase tracking-[0.12em] text-gm-muted md:text-xs">
        <Icon name="lucide:users" class="size-3.5 text-gm-amber" /> Tribun 8 saksi
      </p>
      <p class="text-[11px] font-semibold text-gm-muted md:text-xs">Mengikuti sorot otomatis</p>
    </div>
    <div ref="wrapRef" class="relative mt-1">
      <div
        ref="coneRef"
        class="pointer-events-none absolute left-0 top-0 h-12 w-14"
        style="background: linear-gradient(to bottom, rgba(183,121,31,0.38), rgba(183,121,31,0.05)); clip-path: polygon(42% 0, 58% 0, 100% 100%, 0 100%)"
        aria-hidden="true"
      />
      <div ref="rowRef" class="relative flex items-start justify-between gap-1">
        <div
          v-for="(p, i) in items"
          :key="p.photo"
          :title="p.name"
          class="relative z-10 grid shrink-0 place-items-center rounded-full bg-white p-0.5 transition-all duration-500 ease-out"
          :class="i === active ? 'size-10 scale-[1.15] ring-2 ring-gm-primary ring-offset-2 ring-offset-gm-cream md:size-11' : 'size-9 opacity-60 ring-1 ring-gm-line md:size-10'"
          :style="{ marginTop: `${arcTop(i)}px` }"
        >
          <img :src="p.photo" :alt="p.name" class="size-full rounded-full object-cover" loading="lazy" decoding="async" draggable="false" />
          <span v-if="i === active" class="anim-pulse-dot absolute -right-0.5 -top-0.5 size-2.5 rounded-full bg-gm-primary ring-2 ring-white" aria-hidden="true" />
        </div>
      </div>
      <div
        ref="glowRef"
        class="pointer-events-none absolute -bottom-0.5 left-0 h-2.5 w-14 rounded-full"
        style="background: radial-gradient(ellipse at center, rgba(183,121,31,0.5), transparent 70%)"
        aria-hidden="true"
      />
    </div>
  </div>
</template>
