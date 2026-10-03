<script setup lang="ts">
defineProps<{ active?: boolean }>()
</script>

<template>
  <DeckShell section="loop">
    <Reveal class="w-full">
      <LoopTimeline :active="active" />
    </Reveal>
  </DeckShell>
</template>
