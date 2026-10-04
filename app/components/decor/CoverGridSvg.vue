<script setup lang="ts">
withDefaults(defineProps<{ id?: string }>(), { id: 'cover-grid' })
</script>

<template>
  <svg class="pointer-events-none absolute inset-0 size-full" aria-hidden="true" focusable="false">
    <defs>
      <pattern :id="id" width="28" height="28" patternUnits="userSpaceOnUse">
        <path d="M28 0H0v28" fill="none" stroke="rgba(255,255,255,0.09)" stroke-width="1" />
      </pattern>
      <radialGradient id="cover-grid-fade" cx="30%" cy="20%" r="90%">
        <stop offset="0%" stop-color="white" stop-opacity="0.10" />
        <stop offset="55%" stop-color="white" stop-opacity="0" />
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" :fill="`url(#${id})`" />
    <rect width="100%" height="100%" fill="url(#cover-grid-fade)" />
  </svg>
</template>
