<script setup lang="ts">
const props = defineProps<{
  quarter: string
  title: string
  desc: string
  icon: string
  index: number
}>()

const cardClass = computed(() => {
  if (props.index === 3) return 'border-gm-ink bg-gm-ink'
  if (props.index === 2) return 'border-gm-primary/30 bg-gm-primary/10'
  if (props.index === 1) return 'border-gm-soft/40 bg-gm-soft/15'
  return 'border-gm-line bg-gm-mist'
})

const badgeClass = computed(() => {
  if (props.index === 3) return 'bg-gm-soft text-gm-ink'
  return 'bg-gm-primary text-white'
})

const iconWrapClass = computed(() => {
  if (props.index === 3) return 'bg-white/10 text-emerald-300'
  return 'bg-white text-gm-primary'
})

const titleClass = computed(() => {
  return props.index === 3 ? 'text-white' : 'text-gm-ink'
})

const descClass = computed(() => {
  return props.index === 3 ? 'text-white/65' : 'text-gm-muted'
})
</script>

<template>
  <div class="scale-step relative w-full overflow-hidden rounded-2xl border-2 p-2 text-left md:p-2.5" :class="cardClass">
    <span aria-hidden="true" class="scale-shine pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent" />
    <div class="relative flex items-center justify-start gap-2">
      <span class="inline-block rounded-full px-2.5 py-0.5 font-headline text-[11px] font-extrabold md:text-xs" :class="badgeClass">{{ quarter }}</span>
      <span class="grid size-7 shrink-0 place-items-center rounded-lg md:size-8" :class="iconWrapClass">
        <Icon :name="icon" class="size-4 md:size-[18px]" />
      </span>
    </div>
    <div class="relative mt-1 font-headline text-sm font-extrabold leading-tight md:text-[15px]" :class="titleClass">{{ title }}</div>
    <p class="relative mt-0.5 text-xs leading-snug md:text-[13px]" :class="descClass">{{ desc }}</p>
  </div>
</template>
