<script setup lang="ts">
/**
 * Symmetric two-column panel. Stacks on small screens,
 * centers both columns vertically on large screens.
 */
const props = withDefaults(defineProps<{ reverse?: boolean }>(), { reverse: false })
</script>

<template>
  <div class="grid h-full w-full grid-cols-1 items-stretch justify-items-stretch gap-3 md:gap-4 lg:grid-cols-2 lg:gap-6">
    <div class="flex w-full flex-col justify-center text-left">
      <slot name="primary" />
    </div>
    <div class="flex w-full flex-col justify-center" :class="reverse ? 'lg:order-first' : ''">
      <slot name="secondary" />
    </div>
  </div>
</template>
