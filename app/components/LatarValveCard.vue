<script setup lang="ts">
defineProps<{ icon: string; title: string; desc: string }>()
</script>

<template>
  <div class="flex h-full w-full items-center justify-start gap-4 rounded-3xl border-2 border-gm-line bg-white p-4 text-left md:p-5">
    <span class="relative grid size-12 shrink-0 place-items-center rounded-2xl bg-gm-mist">
      <Icon :name="icon" class="size-7 text-gm-primary" />
      <span class="anim-pulse-dot absolute -right-1 -top-1 size-3 rounded-full bg-gm-soft ring-2 ring-white" />
    </span>
    <div class="min-w-0">
      <div class="font-headline text-lg font-extrabold text-gm-ink">{{ title }}</div>
      <div class="text-base leading-snug text-gm-muted">{{ desc }}</div>
    </div>
  </div>
</template>
