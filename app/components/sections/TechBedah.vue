<script setup lang="ts">
import BedahLayout from '~/components/BedahLayout.vue'
import { BEDAH_TECH } from '~/data/produk'
</script>

<template>
  <DeckShell section="tech">
    <BedahLayout :data="BEDAH_TECH" />
  </DeckShell>
</template>
