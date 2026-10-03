<script setup lang="ts">
function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

useHead({ title: 'Kartu Nama GrowMate' })
</script>

<template>
  <div class="relative w-full overflow-hidden bg-gm-ink">
    <CardHero @scroll="scrollTo" />
    <CardStats />
    <CardGallery />
    <CardTeam />
  </div>
</template>
