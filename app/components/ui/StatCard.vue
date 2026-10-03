<script setup lang="ts">
/** Centered headline stat. Tones: light card, brand fill, ink fill. */
const props = withDefaults(defineProps<{ value: string; label: string; tone?: 'light' | 'brand' | 'ink' }>(), { tone: 'light' })

const toneClass = computed(() => ({
  light: 'border-gm-line bg-white text-gm-ink',
  brand: 'border-gm-primary bg-gm-primary text-white',
  ink: 'border-gm-ink bg-gm-ink text-white',
}[props.tone]))
</script>

<template>
  <div class="flex h-full flex-col items-center justify-center rounded-3xl border-2 p-3 text-center md:p-4" :class="toneClass">
    <div class="font-headline text-2xl font-extrabold tabular-nums md:text-3xl">{{ value }}</div>
    <div class="mt-1 text-xs leading-snug md:text-sm" :class="tone === 'light' ? 'text-gm-muted' : 'text-white/75'">{{ label }}</div>
  </div>
</template>
