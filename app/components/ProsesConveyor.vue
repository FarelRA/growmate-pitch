<script setup lang="ts">
import gsap from 'gsap'

const emit = defineEmits<{ (e: 'gate', v: number): void }>()

const trackEl = ref<HTMLElement | null>(null)
const hParcel = ref<HTMLElement | null>(null)
const vParcel = ref<HTMLElement | null>(null)
const active = ref(0)

const labels = ['Pra', 'Produksi', 'Pasca']

let ctx: gsap.Context | null = null

onMounted(() => {
  emit('gate', 0)
  ctx = gsap.context(() => {
    const prog = { p: 0 }
    gsap.fromTo(
      prog,
      { p: 0 },
      {
        p: 1,
        duration: 6,
        ease: 'none',
        repeat: -1,
        onUpdate() {
          const p = prog.p
          if (hParcel.value) hParcel.value.style.left = `${6 + p * 88}%`
          if (vParcel.value) vParcel.value.style.top = `${4 + p * 92}%`
          const g = p < 0.34 ? 0 : p < 0.68 ? 1 : 2
          if (g !== active.value) {
            active.value = g
            emit('gate', g)
          }
        },
      },
    )
  }, trackEl.value ?? undefined)
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <div ref="trackEl" class="w-full min-w-0">
    <div class="relative hidden h-10 w-full overflow-hidden rounded-xl border-2 border-gm-line bg-gm-panel md:block">
      <svg class="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 1000 40" aria-hidden="true">
        <rect x="0" y="24" width="1000" height="7" rx="3.5" fill="#e5e8e3" />
        <line x1="12" y1="27.5" x2="988" y2="27.5" stroke="#006e1c" stroke-width="2.5" stroke-linecap="round" class="anim-flow" />
      </svg>
      <div
        v-for="(lb, i) in labels"
        :key="lb"
        class="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-t-lg rounded-b-sm border-2 border-b-0 px-2 pb-3 pt-1 text-center transition-all duration-300"
        :style="{ left: i === 0 ? '16%' : i === 1 ? '50%' : '84%' }"
        :class="active === i ? 'scale-[1.03] border-gm-primary bg-gm-mist' : 'border-gm-line bg-white'"
      >
        <span class="block font-headline text-[10px] font-extrabold uppercase leading-none tracking-wide" :class="active === i ? 'text-gm-primary' : 'text-gm-muted'">{{ lb }}</span>
      </div>
      <div ref="hParcel" class="absolute top-1/2 z-10 -translate-x-1/2 -translate-y-1/2" style="left: 6%">
        <span class="relative grid size-7 place-items-center rounded-full bg-gm-primary shadow-md ring-4 ring-gm-mist">
          <Icon name="lucide:package" class="size-4 text-white" />
          <span class="absolute -right-1 -top-1 grid size-3.5 place-items-center rounded-full bg-white shadow">
            <Icon name="lucide:sprout" class="size-2.5 text-gm-primary" />
          </span>
        </span>
      </div>
    </div>
    <div class="flex gap-2.5 rounded-2xl border-2 border-gm-line bg-gm-panel p-2 md:hidden">
      <div class="relative w-9 shrink-0 overflow-hidden rounded-xl bg-white">
        <svg class="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 36 300" aria-hidden="true">
          <rect x="15" y="4" width="6" height="292" rx="3" fill="#e5e8e3" />
          <line x1="18" y1="8" x2="18" y2="292" stroke="#006e1c" stroke-width="2.5" stroke-linecap="round" class="anim-flow" />
        </svg>
        <div ref="vParcel" class="absolute left-1/2 z-10 -translate-x-1/2" style="top: 4%">
          <span class="relative grid size-7 place-items-center rounded-full bg-gm-primary shadow-md ring-4 ring-gm-mist">
            <Icon name="lucide:package" class="size-4 text-white" />
            <span class="absolute -right-1 -top-1 grid size-3.5 place-items-center rounded-full bg-white shadow">
              <Icon name="lucide:sprout" class="size-2.5 text-gm-primary" />
            </span>
          </span>
        </div>
      </div>
      <div class="flex min-w-0 flex-1 flex-col gap-1.5">
        <div
          v-for="(lb, i) in labels"
          :key="lb"
          class="flex items-center gap-2 rounded-xl border-2 px-2 py-1.5 text-left transition-all duration-300"
          :class="active === i ? 'scale-[1.03] border-gm-primary bg-gm-mist' : 'border-gm-line bg-white'"
        >
          <span class="grid size-6 shrink-0 place-items-center rounded-full font-mono text-[11px] font-bold" :class="active === i ? 'bg-gm-primary text-white' : 'bg-gm-mist text-gm-primary'">{{ i + 1 }}</span>
          <span class="font-headline text-xs font-extrabold" :class="active === i ? 'text-gm-primary' : 'text-gm-ink'">{{ lb }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
