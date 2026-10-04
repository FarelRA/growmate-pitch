<script setup lang="ts">
withDefaults(
  defineProps<{ pulse?: boolean }>(),
  { pulse: false },
)
</script>

<template>
  <div
    class="relative hidden w-7 shrink-0 self-center lg:block xl:w-9"
    aria-hidden="true"
  >
    <svg viewBox="0 0 40 12" class="block h-3 w-full" fill="none">
      <line
        x1="2"
        y1="6"
        x2="38"
        y2="6"
        stroke="#4caf50"
        stroke-width="2.5"
        stroke-linecap="round"
        class="anim-flow"
      />
    </svg>
    <span
      v-if="pulse"
      class="anim-pulse-dot absolute left-0 top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-gm-primary"
    />
    <span
      v-if="pulse"
      class="anim-pulse-dot absolute right-0 top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-gm-primary"
    />
  </div>
  <div class="flex items-center justify-center lg:hidden" aria-hidden="true">
    <span class="block h-6 w-0 border-l-2 border-dashed border-gm-soft" />
  </div>
</template>
