<script setup lang="ts">
/** Label harga model luggage tag dengan lubang tali di sisi kiri. */
withDefaults(
  defineProps<{ name: string; price: string; forWho: string; icon: string; hot?: boolean }>(),
  { hot: false },
)
</script>

<template>
  <div
    class="relative flex h-full items-center gap-2.5 overflow-hidden rounded-2xl border-2 py-2 pl-8 pr-3 text-left md:gap-3 md:py-2.5 md:pl-9 md:pr-4"
    :class="hot
      ? 'border-gm-primary bg-gm-primary text-white shadow-[0_10px_28px_rgba(0,77,19,0.4)]'
      : 'border-gm-line bg-white text-gm-ink'"
  >
    <span
      class="absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 rounded-full border-2 md:left-3"
      :class="hot ? 'border-white/60 bg-gm-deep' : 'border-gm-line bg-[#eef1ec]'"
      aria-hidden="true"
    />
    <span
      class="absolute bottom-2 left-[26px] top-2 border-l-2 border-dashed md:left-[30px]"
      :class="hot ? 'border-white/30' : 'border-gm-line'"
      aria-hidden="true"
    />
    <span
      class="grid size-9 shrink-0 place-items-center rounded-xl md:size-10"
      :class="hot ? 'bg-white/15' : 'bg-gm-mist'"
    >
      <Icon :name="icon" class="size-4 md:size-5" :class="hot ? 'text-white' : 'text-gm-primary'" />
    </span>
    <span class="min-w-0">
      <span
        class="block font-headline text-[10px] font-extrabold uppercase tracking-[0.12em] md:text-[11px]"
        :class="hot ? 'text-white/75' : 'text-gm-muted'"
      >{{ name }}</span>
      <span class="block font-headline text-base font-extrabold leading-tight md:text-lg">{{ price }}</span>
      <span
        class="block text-[11px] leading-snug md:text-xs"
        :class="hot ? 'text-white/75' : 'text-gm-muted'"
      >{{ forWho }}</span>
    </span>
  </div>
</template>
