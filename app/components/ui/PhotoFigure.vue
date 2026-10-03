<script setup lang="ts">
/**
 * Photo figure with fixed aspect ratio so grids stay symmetric.
 * Clean image only. No overlays, no captions.
 */
withDefaults(defineProps<{ src: string; alt: string; ratio?: string }>(), {
  ratio: '16 / 10',
})
</script>

<template>
  <div class="relative w-full overflow-hidden rounded-3xl border-2 border-gm-line bg-gm-panel" :style="{ aspectRatio: ratio }">
    <img :src="src" :alt="alt" class="absolute inset-0 size-full object-cover" loading="lazy" decoding="async" draggable="false" />
  </div>
</template>
