<script setup lang="ts">
import { Motion } from 'motion-v'
import type { HiddenSection } from '~/data/hidden'
import { ORDER_STEPS, ORDER_CARA_NOTE } from '~/data/order'

defineProps<{ section: HiddenSection }>()

/** Gerak masuk berjenjang, pola sama dengan slide deck. */
const t = (i: number) => ({ type: 'spring', stiffness: 260, damping: 20, delay: 0.06 + i * 0.07 } as const)
</script>

<template>
  <div class="relative flex min-h-full w-full min-w-0 flex-col justify-center gap-2">
    <LightGridSvg :id="`od-${section.ref}`" class="absolute inset-0 -z-10 opacity-70" />

    <!-- Empat langkah cara kerja pesanan besar. -->
    <Motion :initial="{ opacity: 0, y: 14 }" :animate="{ opacity: 1, y: 0 }" :transition="t(0)">
      <div class="grid w-full grid-cols-1 items-stretch gap-2 sm:grid-cols-2">
        <div
          v-for="s in ORDER_STEPS"
          :key="s.key"
          class="flex h-full flex-col rounded-3xl border-2 border-gm-line bg-white p-3 text-left"
        >
          <span class="flex min-w-0 items-center gap-1.5 text-base font-semibold text-gm-muted">
            <Icon :name="s.icon" class="size-4 shrink-0 text-gm-primary" />{{ s.title }}
          </span>
          <span class="mt-0.5 block text-base leading-snug text-gm-ink">{{ s.desc }}</span>
        </div>
      </div>
    </Motion>

    <!-- Catatan metode. -->
    <Motion :initial="{ opacity: 0, y: 14 }" :animate="{ opacity: 1, y: 0 }" :transition="t(1)">
      <p class="w-full text-left text-base leading-snug text-gm-muted">{{ ORDER_CARA_NOTE }}</p>
    </Motion>
  </div>
</template>
