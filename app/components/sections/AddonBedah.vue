<script setup lang="ts">
import BedahLayout from '~/components/BedahLayout.vue'
import { BEDAH_ADDON } from '~/data/produk'
</script>

<template>
  <DeckShell section="addon">
    <BedahLayout :data="BEDAH_ADDON" />
  </DeckShell>
</template>
