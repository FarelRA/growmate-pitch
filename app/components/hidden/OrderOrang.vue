<script setup lang="ts">
import { Motion } from 'motion-v'
import type { HiddenSection } from '~/data/hidden'
import { ORDER_CREW, ORDER_ORANG_BADGES, ORDER_ORANG_NOTE } from '~/data/order'

defineProps<{ section: HiddenSection }>()

/** Gerak masuk berjenjang, pola sama dengan slide deck. */
const t = (i: number) => ({ type: 'spring', stiffness: 260, damping: 20, delay: 0.06 + i * 0.07 } as const)

const HEADS = ['Kru', 'Pods saja', 'Tech saja', 'Add-on saja', 'Contoh campuran 1 bulan']
</script>

<template>
  <div class="relative flex min-h-full w-full min-w-0 flex-col justify-center gap-2">
    <LightGridSvg :id="`oo-${section.ref}`" class="absolute inset-0 -z-10 opacity-70" />

    <!-- Lencana aturan orang-bulan. -->
    <Motion :initial="{ opacity: 0, y: -10 }" :animate="{ opacity: 1, y: 0 }" :transition="t(0)">
      <div class="flex w-full flex-wrap items-center gap-1.5">
        <span
          v-for="b in ORDER_ORANG_BADGES"
          :key="b"
          class="rounded-full border-2 border-gm-line bg-white px-3 py-1 text-left text-base font-semibold text-gm-ink"
        >{{ b }}</span>
      </div>
    </Motion>

    <!-- Tabel tradeoff bulanan tiap ukuran kru. -->
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
                :class="i === 0 ? 'w-[24%]' : i === 4 ? 'w-[40%]' : 'w-[12%]'"
              >{{ h }}</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="r in ORDER_CREW"
              :key="r.key"
              class="border-t-2 border-gm-line"
              :class="r.hot ? 'bg-gm-mist' : 'bg-white'"
            >
              <td class="px-3 py-1 align-middle font-headline text-base font-extrabold leading-snug text-gm-ink">{{ r.name }}</td>
              <td class="px-3 py-1 align-middle font-headline text-base font-extrabold tabular-nums text-gm-primary">{{ r.pods }}</td>
              <td class="px-3 py-1 align-middle text-base font-semibold tabular-nums text-gm-ink">{{ r.tech }}</td>
              <td class="px-3 py-1 align-middle text-base font-semibold tabular-nums text-gm-ink">{{ r.addon }}</td>
              <td class="px-3 py-1 align-middle text-base leading-snug text-gm-muted">{{ r.example }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Motion>

    <!-- Cara membaca tabel. -->
    <Motion :initial="{ opacity: 0, y: 14 }" :animate="{ opacity: 1, y: 0 }" :transition="t(2)">
      <p class="w-full text-left text-base leading-snug text-gm-muted">{{ ORDER_ORANG_NOTE }}</p>
    </Motion>
  </div>
</template>
