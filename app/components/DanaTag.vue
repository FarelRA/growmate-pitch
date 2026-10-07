<script setup lang="ts">
/** Label harga model luggage tag dengan lubang tali di sisi kiri. */
withDefaults(
  defineProps<{ name: string; price: string; forWho: string; icon: string; hot?: boolean }>(),
  { hot: false },
)
</script>

<template>
  <div
    class="relative flex h-full items-center gap-3 overflow-hidden rounded-2xl border-2 py-1.5 pl-10 pr-4 text-left md:py-2"
    :class="hot
      ? 'border-gm-primary bg-gm-primary text-white shadow-[0_10px_28px_rgba(0,77,19,0.4)]'
      : 'border-gm-line bg-white text-gm-ink'"
  >
    <span
      class="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 rounded-full border-2"
      :class="hot ? 'border-white/60 bg-gm-deep' : 'border-gm-line bg-[#eef1ec]'"
      aria-hidden="true"
    />
    <span
      class="absolute bottom-2.5 left-[32px] top-2.5 border-l-2 border-dashed"
      :class="hot ? 'border-white/30' : 'border-gm-line'"
      aria-hidden="true"
    />
    <span
      class="grid size-11 shrink-0 place-items-center rounded-xl lg:size-12"
      :class="hot ? 'bg-white/15' : 'bg-gm-mist'"
    >
      <Icon :name="icon" class="size-6 lg:size-7" :class="hot ? 'text-white' : 'text-gm-primary'" />
    </span>
    <span class="min-w-0">
      <span
        class="block font-headline text-base font-extrabold uppercase tracking-[0.12em]"
        :class="hot ? 'text-white/75' : 'text-gm-muted'"
      >{{ name }}</span>
      <span class="block font-headline text-2xl font-extrabold leading-tight">{{ price }}</span>
      <span
        class="mt-0.5 block text-base leading-snug"
        :class="hot ? 'text-white/75' : 'text-gm-muted'"
      >{{ forWho }}</span>
    </span>
  </div>
</template>
