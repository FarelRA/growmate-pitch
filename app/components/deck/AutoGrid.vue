<script setup lang="ts">
/** Evenly spaced responsive grid. Every cell stretches to equal height. */
const props = withDefaults(defineProps<{ cols?: 2 | 3 | 4 }>(), { cols: 3 })

const colsClass = computed(() => ({
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 xl:grid-cols-3',
  4: 'sm:grid-cols-2 xl:grid-cols-4',
}[props.cols]))
</script>

<template>
  <div class="grid w-full grid-cols-1 items-stretch justify-items-stretch gap-2.5 md:gap-4" :class="colsClass">
    <slot />
  </div>
</template>
