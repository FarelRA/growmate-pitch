<script setup lang="ts">
import { GALLERY } from '~/data/card'
</script>

<template>
  <section class="relative mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 md:py-12">
    <Reveal>
      <h2 class="text-center font-headline text-3xl font-extrabold text-white md:text-4xl">Dari Lapangan</h2>
      <p class="mt-2 text-center text-white/60 md:text-lg">Perangkat asli, lahan asli, petani asli.</p>
    </Reveal>
    <div class="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-7 md:gap-5">
      <Reveal v-for="(g, i) in GALLERY" :key="g.src" :delay="i * 0.07" class="h-full">
        <figure class="group h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05]">
          <div class="h-52 overflow-hidden md:h-64">
            <img :src="g.src" :alt="g.title" class="size-full object-cover transition duration-700 group-hover:scale-105" draggable="false" loading="lazy" decoding="async" />
          </div>
          <figcaption class="p-4 text-center md:p-5">
            <div class="font-headline text-lg font-extrabold text-white md:text-xl">{{ g.title }}</div>
            <div class="text-sm text-white/60 md:text-base">{{ g.desc }}</div>
          </figcaption>
        </figure>
      </Reveal>
    </div>
  </section>
</template>
