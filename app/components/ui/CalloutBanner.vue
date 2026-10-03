<script setup lang="ts">
/** Tinted callout banner with icon, centered content. */
const props = withDefaults(defineProps<{ icon: string; tone?: 'amber' | 'brand' | 'ink' }>(), { tone: 'amber' })

const toneClass = computed(() => ({
  amber: 'border-gm-amber bg-gm-amberbg text-gm-ink',
  brand: 'border-gm-primary bg-gm-mist text-gm-ink',
  ink: 'border-gm-ink bg-gm-ink text-white',
}[props.tone]))
</script>

<template>
  <div class="flex w-full items-center justify-center gap-3 rounded-3xl border-2 p-3 text-center md:p-4" :class="toneClass">
    <Icon :name="icon" class="size-6 shrink-0 md:size-7" :class="tone === 'ink' ? 'text-emerald-300' : tone === 'amber' ? 'text-gm-amber' : 'text-gm-primary'" />
    <p class="text-body-fluid leading-snug"><slot /></p>
  </div>
</template>
