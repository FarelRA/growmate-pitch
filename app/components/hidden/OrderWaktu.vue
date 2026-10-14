<script setup lang="ts">
import { Motion } from 'motion-v'
import type { HiddenSection } from '~/data/hidden'
import { ORDER_TIMES, ORDER_WAKTU_BADGES, ORDER_WAKTU_NOTE } from '~/data/order'

defineProps<{ section: HiddenSection }>()

/** Gerak masuk berjenjang, pola sama dengan slide deck. */
const t = (i: number) => ({ type: 'spring', stiffness: 260, damping: 20, delay: 0.06 + i * 0.07 } as const)

const HEADS = ['Kru', 'Campuran A (30/40/30)', 'Campuran B (70/10/20)', 'Campuran C (50/20/30)']
</script>

<template>
  <div class="relative flex min-h-full w-full min-w-0 flex-col justify-center gap-2">
    <LightGridSvg :id="`ow-${section.ref}`" class="absolute inset-0 -z-10 opacity-70" />

    <!-- Lencana ikhtisar waktu kirim. -->
    <Motion :initial="{ opacity: 0, y: -10 }" :animate="{ opacity: 1, y: 0 }" :transition="t(0)">
      <div class="flex w-full flex-wrap items-center gap-1.5">
        <span
          v-for="b in ORDER_WAKTU_BADGES"
          :key="b"
          class="rounded-full border-2 border-gm-line bg-white px-3 py-1 text-left text-base font-semibold text-gm-ink"
        >{{ b }}</span>
      </div>
    </Motion>

    <!-- Tabel waktu kirim 100 unit tiap kru untuk tiap campuran. -->
    <Motion :initial="{ opacity: 0, y: 16 }" :animate="{ opacity: 1, y: 0 }" :transition="t(1)">
      <div class="w-full overflow-hidden rounded-3xl border-2 border-gm-line">
        <table class="w-full table-fixed border-collapse text-left">
          <thead>
            <tr class="bg-gm-ink text-white">
              <th
                v-for="(h, i) in HEADS"
                :key="h"
                scope="col"
                class="px-3 py-1 text-left font-headline text-base font-extrabold leading-snug"
                :class="i === 0 ? 'w-[22%]' : 'w-[26%]'"
              >{{ h }}</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="r in ORDER_TIMES"
              :key="r.key"
              class="border-t-2 border-gm-line"
              :class="r.hot ? 'bg-gm-mist' : 'bg-white'"
            >
              <td class="px-3 py-1 align-middle font-headline text-base font-extrabold leading-snug text-gm-ink">{{ r.name }}</td>
              <td
                v-for="c in [r.a, r.b, r.c]"
                :key="r.key + c.months"
                class="px-3 py-1 align-top"
              >
                <span class="block font-headline text-base font-extrabold leading-snug tabular-nums text-gm-primary">{{ c.months }}</span>
                <span class="mt-0.5 block text-base leading-snug tabular-nums text-gm-muted">{{ c.range }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Motion>

    <!-- Cara membaca tabel. -->
    <Motion :initial="{ opacity: 0, y: 14 }" :animate="{ opacity: 1, y: 0 }" :transition="t(2)">
      <p class="w-full text-left text-base leading-snug text-gm-muted">{{ ORDER_WAKTU_NOTE }}</p>
    </Motion>
  </div>
</template>
