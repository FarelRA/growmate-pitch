<script setup lang="ts">
export type FoeLevel = 'yes' | 'no'

const props = withDefaults(defineProps<{ label: string; foe?: FoeLevel }>(), {
  foe: 'no',
})

const foeWidth = computed(() => (props.foe === 'yes' ? 100 : 6))
</script>

<template>
  <div class="duel-row min-w-0 text-left">
    <div class="flex min-w-0 items-center gap-2">
      <p class="min-w-0 flex-1 truncate font-headline text-base font-bold leading-none text-gm-ink">
        {{ label }}
      </p>
      <span class="flex shrink-0 items-center gap-1.5" aria-hidden="true">
        <Icon
          :name="props.foe === 'yes' ? 'lucide:check' : 'lucide:x'"
          class="size-6"
          :class="props.foe === 'yes' ? 'text-gm-primary' : 'text-red-500'"
        />
        <Icon name="lucide:check" class="size-6 text-gm-primary" />
      </span>
    </div>
    <div class="mt-0.5 grid grid-cols-2 gap-2">
      <div class="flex h-3 items-center justify-end overflow-hidden rounded-full bg-gm-line/70">
        <div
          class="duel-foe-fill h-full rounded-full"
          :class="props.foe === 'yes' ? 'bg-gm-primary/70' : 'bg-[#9aa3a0]'"
          :style="{ width: foeWidth + '%' }"
        />
      </div>
      <div class="flex h-3 items-center justify-start overflow-hidden rounded-full bg-gm-mist">
        <div
          class="duel-gm-fill h-full w-full rounded-full bg-gradient-to-r from-gm-deep via-gm-primary to-gm-soft"
        />
      </div>
    </div>
  </div>
</template>
