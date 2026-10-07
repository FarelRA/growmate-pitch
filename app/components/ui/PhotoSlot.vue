<script setup lang="ts">
/**
 * Slot bingkai penanda foto yang belum dipasok.
 * Dipakai agar layout final terkunci: rasio, tinggi, dan posisi sudah pas,
 * tinggal ganti UiPhotoSlot dengan UiPhotoFigure berisi foto asli.
 * Satu foto HANYA BOLEH dipakai di SATU slide.
 */
withDefaults(defineProps<{
  ratio?: string
  label: string
  spec?: string
  icon?: string
}>(), {
  ratio: '16 / 10',
  spec: '',
  icon: 'lucide:camera',
})
</script>

<template>
  <div
    class="flex w-full flex-col items-center justify-center gap-1 overflow-hidden rounded-2xl border-2 border-dashed border-gm-primary/40 bg-gm-mist/60 p-2 text-center"
    :style="{ aspectRatio: ratio }"
    role="img"
    :aria-label="`Slot foto: ${label}`"
  >
    <span class="grid size-8 shrink-0 place-items-center rounded-full bg-white shadow-sm">
      <Icon :name="icon" class="size-4 text-gm-primary" />
    </span>
    <p class="font-headline text-[11px] font-extrabold leading-tight text-gm-deep md:text-xs">SLOT FOTO</p>
    <p class="text-[11px] font-bold leading-snug text-gm-ink">{{ label }}</p>
    <p v-if="spec" class="max-w-full text-[10px] leading-snug text-gm-muted">{{ spec }}</p>
  </div>
</template>
