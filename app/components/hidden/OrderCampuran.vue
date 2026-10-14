<script setup lang="ts">
import { Motion } from 'motion-v'
import type { HiddenSection } from '~/data/hidden'
import { ORDER_MIXES, ORDER_CAMPURAN_BADGES, ORDER_SERVABLE, ORDER_CAMPURAN_NOTE } from '~/data/order'

defineProps<{ section: HiddenSection }>()

/** Gerak masuk berjenjang, pola sama dengan slide deck. */
const t = (i: number) => ({ type: 'spring', stiffness: 260, damping: 20, delay: 0.06 + i * 0.07 } as const)
</script>

<template>
  <div class="relative flex min-h-full w-full min-w-0 flex-col justify-center gap-2">
    <LightGridSvg :id="`oc-${section.ref}`" class="absolute inset-0 -z-10 opacity-70" />

    <!-- Lencana margin dan harga. -->
    <Motion :initial="{ opacity: 0, y: -10 }" :animate="{ opacity: 1, y: 0 }" :transition="t(0)">
      <div class="flex w-full flex-wrap items-center gap-1.5">
        <span
          v-for="b in ORDER_CAMPURAN_BADGES"
          :key="b"
          class="rounded-full border-2 border-gm-line bg-white px-3 py-1 text-left text-base font-semibold text-gm-ink"
        >{{ b }}</span>
      </div>
    </Motion>

    <!-- Tabel rincian tiga campuran pesanan 100 unit. -->
    <Motion :initial="{ opacity: 0, y: 16 }" :animate="{ opacity: 1, y: 0 }" :transition="t(1)">
      <div class="w-full overflow-hidden rounded-3xl border-2 border-gm-line">
        <table class="w-full table-fixed border-collapse text-left">
          <thead>
            <tr class="bg-gm-ink text-white">
              <th scope="col" class="w-[14%] px-3 py-1 text-left font-headline text-base font-extrabold leading-snug">Campuran</th>
              <th scope="col" class="w-[17%] px-3 py-1 text-left font-headline text-base font-extrabold leading-snug">Pods / Tech / Add-on</th>
              <th scope="col" class="w-[21%] px-3 py-1 text-left font-headline text-base font-extrabold leading-snug">Orang-bulan</th>
              <th scope="col" class="w-[13%] px-3 py-1 text-left font-headline text-base font-extrabold leading-snug">Pendapatan</th>
              <th scope="col" class="w-[13%] px-3 py-1 text-left font-headline text-base font-extrabold leading-snug">Laba kotor</th>
              <th scope="col" class="w-[22%] px-3 py-1 text-left font-headline text-base font-extrabold leading-snug">Lini terberat</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="m in ORDER_MIXES"
              :key="m.key"
              class="border-t-2 border-gm-line"
              :class="m.hot ? 'bg-gm-mist' : 'bg-white'"
            >
              <td class="px-3 py-1 align-middle font-headline text-base font-extrabold leading-snug text-gm-ink">{{ m.name }}</td>
              <td class="px-3 py-1 align-middle text-base font-semibold tabular-nums text-gm-ink">{{ m.units }}</td>
              <td class="px-3 py-1 align-middle text-base font-semibold tabular-nums text-gm-ink">{{ m.pm }}</td>
              <td class="px-3 py-1 align-middle font-headline text-base font-extrabold tabular-nums text-gm-ink">{{ m.revenue }}</td>
              <td class="px-3 py-1 align-middle font-headline text-base font-extrabold tabular-nums text-gm-primary">{{ m.profit }}</td>
              <td class="px-3 py-1 align-middle text-base leading-snug text-gm-muted">{{ m.fit }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Motion>

    <!-- Strip pesanan kecil yang siap dilayani. -->
    <Motion :initial="{ opacity: 0, y: 14 }" :animate="{ opacity: 1, y: 0 }" :transition="t(2)">
      <div class="flex w-full flex-col gap-1 rounded-3xl bg-gm-ink px-3.5 py-2 text-left text-white">
        <div class="flex w-full flex-wrap items-center gap-x-2 gap-y-1.5">
          <span class="flex shrink-0 items-center gap-1.5 font-headline text-base font-extrabold">
            <Icon name="lucide:package-check" class="size-4 shrink-0 text-emerald-300" />{{ ORDER_SERVABLE.label }}
          </span>
          <template v-for="(s, i) in ORDER_SERVABLE.items" :key="s.value">
            <Icon
              v-if="i > 0"
              name="lucide:arrow-right"
              class="size-4 shrink-0 text-white/50"
            />
            <span class="rounded-full bg-white/10 px-3 py-1 font-headline text-base font-bold">
              {{ s.value }} <span class="tabular-nums text-emerald-300">{{ s.span }}</span>
            </span>
          </template>
        </div>
        <p class="text-base leading-snug text-white/70">{{ ORDER_CAMPURAN_NOTE }}</p>
      </div>
    </Motion>
  </div>
</template>
