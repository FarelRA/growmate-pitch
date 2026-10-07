<script setup lang="ts">
defineProps<{ src: string; alt: string }>()
</script>

<template>
  <figure class="w-full text-left">
    <div class="relative mx-2 mt-2">
      <span aria-hidden="true" class="absolute -left-2 -top-2 z-10 size-5 rounded-tl-lg border-l-[3px] border-t-[3px] border-gm-amber" />
      <span aria-hidden="true" class="absolute -right-2 -top-2 z-10 size-5 rounded-tr-lg border-r-[3px] border-t-[3px] border-gm-amber" />
      <span aria-hidden="true" class="absolute -bottom-2 -left-2 z-10 size-5 rounded-bl-lg border-b-[3px] border-l-[3px] border-gm-amber" />
      <span aria-hidden="true" class="absolute -bottom-2 -right-2 z-10 size-5 rounded-br-lg border-b-[3px] border-r-[3px] border-gm-amber" />
      <UiPhotoFigure :src="src" :alt="alt" ratio="16 / 10" />
    </div>
  </figure>
</template>
