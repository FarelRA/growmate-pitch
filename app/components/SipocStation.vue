<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  items: string[]
  hero?: boolean
}>()
</script>

<template>
  <article
    class="sipoc-station relative flex h-full min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border-2 p-2.5 text-left md:p-3"
    :class="hero ? 'border-gm-primary bg-gm-primary text-white shadow-md' : 'border-gm-line bg-white'"
  >
    <Icon
      v-if="hero"
      name="lucide:cog"
      class="sipoc-gear pointer-events-none absolute -right-3 -top-3 size-12 text-white/15"
      aria-hidden="true"
    />
    <div class="relative flex items-center justify-start gap-2">
      <span class="grid size-10 shrink-0 place-items-center rounded-full bg-gm-mist">
        <Icon :name="icon" class="size-5 text-gm-primary" aria-hidden="true" />
      </span>
      <h3
        class="font-headline text-xs font-extrabold uppercase tracking-wide md:text-sm"
        :class="hero ? 'text-white' : 'text-gm-primary'"
      >
        {{ title }}
      </h3>
    </div>
    <ul
      class="relative mt-2 space-y-1 border-t pt-2"
      :class="hero ? 'border-white/20' : 'border-gm-line'"
    >
      <li
        v-for="it in items"
        :key="it"
        class="flex items-start justify-start gap-1.5 text-left text-xs leading-snug md:text-[13px]"
        :class="hero ? 'text-white/90' : 'text-gm-ink'"
      >
        <span
          class="mt-1.5 size-1 shrink-0 rounded-full"
          :class="hero ? 'bg-white/70' : 'bg-gm-soft'"
          aria-hidden="true"
        />
        <span class="min-w-0">{{ it }}</span>
      </li>
    </ul>
  </article>
</template>

<style scoped>
@keyframes sipoc-gear {
  to {
    transform: rotate(360deg);
  }
}
.sipoc-gear {
  animation: sipoc-gear 12s linear infinite;
}
@media (prefers-reduced-motion: reduce) {
  .sipoc-gear {
    animation: none;
  }
}
</style>
