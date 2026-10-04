<script setup lang="ts">
defineProps<{ icon: string; title: string; desc: string }>()
</script>

<template>
  <div class="flex w-full items-center justify-start gap-3 rounded-3xl border-2 border-gm-line bg-white p-3 text-left md:p-3.5">
    <span class="relative grid size-11 shrink-0 place-items-center rounded-2xl bg-gm-mist md:size-12">
      <Icon :name="icon" class="size-6 text-gm-primary md:size-7" />
      <span class="anim-pulse-dot absolute -right-1 -top-1 size-2.5 rounded-full bg-gm-soft ring-2 ring-white" />
    </span>
    <div class="min-w-0">
      <div class="font-headline text-base font-extrabold text-gm-ink md:text-lg">{{ title }}</div>
      <div class="text-sm leading-snug text-gm-muted">{{ desc }}</div>
    </div>
  </div>
</template>
