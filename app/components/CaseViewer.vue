<script setup lang="ts">
const Canvas = defineAsyncComponent(() => import('~/components/CaseCanvas.vue'))
</script>

<template>
  <div class="relative h-full min-h-[170px] overflow-hidden rounded-2xl border-2 border-gm-line bg-gm-panel md:rounded-[20px]">
    <ClientOnly>
      <component :is="Canvas" class="absolute inset-0" />
      <template #fallback>
        <div class="grid h-full min-h-[170px] place-items-center text-[12px] text-gm-muted md:text-[16px]">Memuat 3D…</div>
      </template>
    </ClientOnly>
  </div>
</template>
