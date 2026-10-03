<script setup lang="ts">
/** Rounded pill tag with icon. */
withDefaults(defineProps<{ icon: string; tone?: 'tint' | 'amber' }>(), { tone: 'tint' })
</script>

<template>
  <span
    class="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 font-headline text-sm font-bold md:px-5 md:py-2.5 md:text-base"
    :class="tone === 'amber' ? 'bg-gm-amberbg text-gm-amber' : 'bg-gm-mist text-gm-deep'"
  >
    <Icon :name="icon" class="size-5 md:size-6" />
    <slot />
  </span>
</template>
