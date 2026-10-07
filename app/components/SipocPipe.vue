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
    <svg viewBox="0 0 44 16" class="block h-4 w-full" fill="none">
      <rect x="1" y="4" width="42" height="8" rx="4" class="sipoc-tube" />
      <line
        x1="6"
        y1="8"
        x2="38"
        y2="8"
        stroke="#4caf50"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-dasharray="6 8"
        class="anim-flow"
      />
      <path d="M34 4.5 L40 8 L34 11.5" stroke="#006e1c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
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
  <div class="flex items-center justify-center py-0.5 lg:hidden" aria-hidden="true">
    <svg viewBox="0 0 12 26" class="block h-6 w-3" fill="none">
      <rect x="3" y="1" width="6" height="24" rx="3" class="sipoc-tube" />
      <line
        x1="6"
        y1="5"
        x2="6"
        y2="21"
        stroke="#4caf50"
        stroke-width="2"
        stroke-linecap="round"
        stroke-dasharray="4 6"
        class="anim-flow"
      />
      <path d="M3.5 17 L6 21 L8.5 17" stroke="#006e1c" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </div>
</template>

<style scoped>
.sipoc-tube {
  fill: #e9f4ea;
  stroke: #e5e8e3;
  stroke-width: 1.2;
}
</style>
