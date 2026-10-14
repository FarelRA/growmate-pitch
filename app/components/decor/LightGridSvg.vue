<script setup lang="ts">
/**
 * Versi terang dari decor grid deck: garis kisi samar warna merek
 * dengan pudar radial, dipakai sebagai latar halaman detail tersembunyi.
 */
withDefaults(defineProps<{ id?: string; tone?: string }>(), { id: 'light-grid', tone: 'rgba(0,110,28,0.10)' })
</script>

<template>
  <svg class="pointer-events-none absolute inset-0 size-full" aria-hidden="true" focusable="false">
    <defs>
      <pattern :id="id" width="30" height="30" patternUnits="userSpaceOnUse">
        <path d="M30 0H0v30" fill="none" :stroke="tone" stroke-width="1" />
      </pattern>
      <radialGradient :id="`${id}-fade`" cx="70%" cy="15%" r="95%">
        <stop offset="0%" stop-color="white" stop-opacity="0.9" />
        <stop offset="60%" stop-color="white" stop-opacity="0" />
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" :fill="`url(#${id}-fade)`" />
    <rect width="100%" height="100%" :fill="`url(#${id})`" />
  </svg>
</template>
