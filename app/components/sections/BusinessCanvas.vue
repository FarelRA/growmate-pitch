<script setup lang="ts">
import { Motion } from 'motion-v'
</script>

<template>
  <DeckShell section="bmc">
    <div class="flex min-h-0 w-full flex-1 flex-col overflow-hidden">
      <Motion
        :initial="{ opacity: 0, scale: 0.96, y: 16 }"
        :animate="{ opacity: 1, scale: 1, y: 0 }"
        :transition="{ type: 'spring', stiffness: 240, damping: 20, delay: 0.2 }"
        class="relative min-h-0 w-full flex-1 overflow-hidden rounded-3xl border-2 border-gm-primary bg-gm-cream shadow-[0_8px_20px_rgba(0,77,19,0.07)]"
      >
        <img
          src="/images/market/bmc-premade.webp"
          alt="Gambar kanvas model bisnis GrowMate dengan sembilan blok, dari key partners sampai revenue streams"
          draggable="false"
          class="absolute inset-0 h-full w-full object-contain"
        />
      </Motion>
    </div>
  </DeckShell>
</template>
