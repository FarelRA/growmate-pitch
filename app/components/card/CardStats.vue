<script setup lang="ts">
import { CARD_STATS } from '~/data/card'
</script>

<template>
  <section id="angka" class="relative mx-auto w-full max-w-5xl scroll-mt-6 px-4 py-8 sm:px-6 md:py-12">
    <Reveal>
      <h2 class="text-center font-headline text-3xl font-extrabold text-white md:text-4xl">Angka Bicara</h2>
      <p class="mt-2 text-center text-white/60 md:text-lg">Hasil uji lapangan Oktober sampai Desember 2025.</p>
    </Reveal>
    <div class="mt-5 grid grid-cols-2 gap-3 md:mt-7 md:grid-cols-4 md:gap-5">
      <Reveal v-for="(s, i) in CARD_STATS" :key="s.label" :delay="i * 0.07" class="h-full">
        <div class="flex h-full flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/[0.07] p-5 text-center backdrop-blur md:p-7">
          <div class="font-headline text-3xl font-extrabold tabular-nums text-emerald-300 md:text-4xl">{{ s.value }}</div>
          <div class="mt-1 text-sm text-white/65 md:text-base">{{ s.label }}</div>
        </div>
      </Reveal>
    </div>
  </section>
</template>
