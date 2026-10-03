<script setup lang="ts">
defineProps<{ active?: boolean }>()
</script>

<template>
  <DeckShell section="mangsa">
    <Reveal class="w-full">
      <MangsaStrip />
    </Reveal>
  </DeckShell>
</template>
