<script setup lang="ts">
/** Icon-led info card with centered layout and equal height. */
const props = withDefaults(defineProps<{ icon: string; title: string; desc?: string; tone?: 'light' | 'tint' | 'brand'; compact?: boolean }>(), { tone: 'light', compact: false })

const toneClass = computed(() => ({
  light: 'border-gm-line bg-white text-gm-ink',
  tint: 'border-gm-line bg-gm-panel text-gm-ink',
  brand: 'border-gm-primary bg-gm-primary text-white',
}[props.tone]))
</script>

<template>
  <div class="flex h-full flex-col items-center justify-center rounded-3xl border-2 text-center" :class="[toneClass, compact ? 'p-2.5 md:p-3' : 'p-3 md:p-4']">
    <span class="grid place-items-center rounded-2xl" :class="[tone === 'brand' ? 'bg-white/15' : 'bg-gm-mist', compact ? 'size-9 md:size-10' : 'size-10 md:size-12']">
      <Icon :name="icon" :class="[tone === 'brand' ? 'text-white' : 'text-gm-primary', compact ? 'size-4 md:size-5' : 'size-5 md:size-6']" />
    </span>
    <div class="mt-2 font-headline font-extrabold leading-tight" :class="compact ? 'text-base md:text-lg' : 'text-lg md:text-xl'">{{ title }}</div>
    <p v-if="desc" class="mt-1 text-xs leading-snug md:text-sm" :class="tone === 'brand' ? 'text-white/75' : 'text-gm-muted'">{{ desc }}</p>
    <div v-if="$slots.default" class="mt-2 w-full">
      <slot />
    </div>
  </div>
</template>
