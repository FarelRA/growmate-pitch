<script setup lang="ts">
export type FoeLevel = 'yes' | 'mid' | 'no'

const props = withDefaults(defineProps<{ label: string; tag?: string; foe?: FoeLevel }>(), {
  foe: 'no',
})

const foeWidth = computed(() => (props.foe === 'yes' ? 82 : props.foe === 'mid' ? 42 : 7))
</script>

<template>
  <div class="duel-row min-w-0 text-left">
    <div class="flex min-w-0 items-center gap-1.5">
      <p class="min-w-0 flex-1 font-headline text-[11px] font-bold leading-tight text-gm-ink md:text-xs">
        {{ label }}
      </p>
      <span
        v-if="tag"
        class="shrink-0 rounded-full border border-gm-primary/30 bg-gm-mist px-1.5 py-px font-headline text-[9px] font-extrabold uppercase tracking-[0.08em] text-gm-primary md:text-[10px]"
      >
        {{ tag }}
      </span>
    </div>
    <div class="mt-1 grid grid-cols-2 gap-1.5 md:gap-2">
      <div class="flex h-2 items-center justify-end overflow-hidden rounded-full bg-gm-line/70 md:h-2.5">
        <div class="duel-foe-fill h-full rounded-full bg-[#9aa3a0]" :style="{ width: foeWidth + '%' }" />
      </div>
      <div class="flex h-2 items-center justify-start overflow-hidden rounded-full bg-gm-mist md:h-2.5">
        <div
          class="duel-gm-fill h-full rounded-full bg-gradient-to-r from-gm-deep via-gm-primary to-gm-soft shadow-[0_0_10px_rgba(76,175,80,0.65)]"
          style="width: 100%"
        />
      </div>
    </div>
  </div>
</template>
