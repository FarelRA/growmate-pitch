<script setup lang="ts">
import { Motion } from 'motion-v'
import type { HiddenSection } from '~/data/hidden'
import { COATING } from '~/data/resilience'

defineProps<{ section: HiddenSection }>()

const data = COATING

/** Gerak masuk berjenjang, pola sama dengan slide deck. */
const t = (i: number) => ({ type: 'spring', stiffness: 260, damping: 20, delay: 0.06 + i * 0.07 } as const)
</script>

<template>
  <div class="relative flex min-h-full w-full min-w-0 flex-col justify-center gap-2 md:gap-2.5">
    <LightGridSvg :id="`cd-${section.ref}`" class="absolute inset-0 -z-10 opacity-70" />

    <div class="grid w-full min-w-0 grid-cols-1 items-stretch gap-3 lg:grid-cols-12">
      <!-- Kiri: tangkapan halaman produk, sitasi di bawah foto. -->
      <div class="flex w-full min-w-0 flex-col justify-center gap-2 lg:col-span-5">
        <Motion :initial="{ opacity: 0, y: 20, rotate: 1 }" :animate="{ opacity: 1, y: 0, rotate: 0 }" :transition="t(0)">
          <div class="w-full overflow-hidden rounded-3xl border-2 border-gm-line bg-white p-2 shadow-[0_14px_34px_rgba(26,28,28,0.12)]">
            <img
              :src="data.photo.src"
              :alt="data.photo.alt"
              class="block max-h-[400px] w-full rounded-2xl object-contain 2xl:max-h-[470px]"
              draggable="false"
            />
          </div>
        </Motion>

        <Motion :initial="{ opacity: 0, y: 14 }" :animate="{ opacity: 1, y: 0 }" :transition="t(1)">
          <p class="text-left text-base leading-snug text-gm-muted">{{ data.source }}</p>
        </Motion>
      </div>

      <!-- Kanan: tabel spesifikasi ringkas dan alasan pemilihan. -->
      <div class="flex w-full min-w-0 flex-col justify-center gap-2 lg:col-span-7">
        <Motion :initial="{ opacity: 0, y: 16 }" :animate="{ opacity: 1, y: 0 }" :transition="t(2)">
          <span class="flex items-center gap-1.5 font-headline text-base font-extrabold uppercase tracking-wide text-gm-primary">
            <Icon name="lucide:droplets" class="size-4 shrink-0" />{{ data.specTitle }}
          </span>
          <div class="mt-1.5 grid w-full grid-cols-1 gap-1.5 sm:grid-cols-2">
            <div
              v-for="s in data.specs"
              :key="s.k"
              class="flex min-w-0 items-baseline justify-start gap-2 rounded-xl border-2 border-gm-line bg-white px-3 py-2 text-left"
            >
              <span class="shrink-0 text-base font-semibold text-gm-muted">{{ s.k }}</span>
              <span class="min-w-0 font-headline text-base font-extrabold leading-snug text-gm-ink">{{ s.v }}</span>
            </div>
          </div>
        </Motion>

        <Motion :initial="{ opacity: 0, y: 16 }" :animate="{ opacity: 1, y: 0 }" :transition="t(3)">
          <div class="rounded-2xl border-2 border-gm-line bg-gm-mist p-3 text-left 2xl:p-4">
            <span class="font-headline text-base font-extrabold uppercase tracking-wide text-gm-primary">{{ data.reasonTitle }}</span>
            <ul class="mt-1.5 grid w-full grid-cols-1 gap-1 sm:grid-cols-2">
              <li v-for="r in data.reasons" :key="r" class="flex items-start justify-start gap-2 text-base leading-snug text-gm-ink">
                <Icon name="lucide:check" class="mt-0.5 size-4 shrink-0 text-gm-primary" />
                <span class="min-w-0">{{ r }}</span>
              </li>
            </ul>
          </div>
        </Motion>

        <Motion :initial="{ opacity: 0, y: 16 }" :animate="{ opacity: 1, y: 0 }" :transition="t(4)">
          <div class="flex w-full items-center justify-start gap-2 rounded-2xl bg-gm-ink p-3 text-left text-white 2xl:p-4">
            <Icon name="lucide:shield-check" class="size-5 shrink-0 text-emerald-300" />
            <span class="min-w-0 font-headline text-base font-extrabold leading-snug">{{ data.link }}</span>
          </div>
        </Motion>
      </div>
    </div>
  </div>
</template>
