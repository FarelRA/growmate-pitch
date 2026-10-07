<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  items: string[]
  hero?: boolean
  slotLabel?: string
  slotSpec?: string
}>()
</script>

<template>
  <article
    class="sipoc-station relative flex h-full min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border-2 p-1.5 text-left md:p-2"
    :class="hero ? 'border-gm-primary bg-gm-primary text-white shadow-md' : 'border-gm-line bg-white'"
  >
    <Icon
      v-if="hero"
      name="lucide:cog"
      class="sipoc-gear pointer-events-none absolute -right-3 -top-3 size-12 text-white/15"
      aria-hidden="true"
    />
    <UiPhotoSlot
      v-if="slotLabel"
      ratio="16 / 10"
      :label="slotLabel"
      :spec="slotSpec"
      class="sipoc-slot mb-1.5"
    />
    <div class="relative flex items-center justify-start gap-1.5">
      <span class="grid size-7 shrink-0 place-items-center rounded-full bg-gm-mist md:size-8">
        <Icon :name="icon" class="size-3.5 text-gm-primary md:size-4" aria-hidden="true" />
      </span>
      <h3
        class="font-headline text-[11px] font-extrabold uppercase tracking-wide md:text-xs"
        :class="hero ? 'text-white' : 'text-gm-primary'"
      >
        {{ title }}
      </h3>
    </div>
    <ul
      class="relative mt-1.5 space-y-0.5 border-t pt-1.5"
      :class="hero ? 'border-white/20' : 'border-gm-line'"
    >
      <li
        v-for="it in items"
        :key="it"
        class="flex items-start justify-start gap-1.5 text-left text-[11px] leading-snug md:text-xs"
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
:deep(.sipoc-slot) {
  padding: 0.375rem;
  gap: 0.125rem;
  border-radius: 0.75rem;
}
:deep(.sipoc-slot p) {
  line-height: 1.25;
}
:deep(.sipoc-slot .size-8) {
  width: 1.25rem;
  height: 1.25rem;
}
:deep(.sipoc-slot .size-4) {
  width: 0.75rem;
  height: 0.75rem;
}
@media (prefers-reduced-motion: reduce) {
  .sipoc-gear {
    animation: none;
  }
}
</style>
