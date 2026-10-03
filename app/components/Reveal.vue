<script setup lang="ts">
import { Motion } from 'motion-v'

withDefaults(
  defineProps<{ delay?: number; y?: number; x?: number }>(),
  { delay: 0, y: 28, x: 0 },
)
</script>

<template>
  <Motion
    :initial="{ opacity: 0, y, x, filter: 'blur(6px)' }"
    :animate="{ opacity: 1, y: 0, x: 0, filter: 'blur(0px)' }"
    :transition="{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }"
  >
    <slot />
  </Motion>
</template>
