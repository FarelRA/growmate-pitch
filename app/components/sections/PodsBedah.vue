<script setup lang="ts">
import BedahLayout from '~/components/BedahLayout.vue'
import { BEDAH_PODS } from '~/data/produk'
</script>

<template>
  <DeckShell section="pods">
    <BedahLayout :data="BEDAH_PODS" />
  </DeckShell>
</template>
