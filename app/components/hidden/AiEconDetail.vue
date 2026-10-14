<script setup lang="ts">
import { Motion } from 'motion-v'
import type { HiddenSection } from '~/data/hidden'
import { AI_ECON } from '~/data/ai-econ'
import AiLimitDetail from './AiLimitDetail.vue'

defineProps<{ section: HiddenSection }>()

/** Gerak masuk berjenjang, pola sama dengan slide deck. */
const t = (i: number) => ({ type: 'spring', stiffness: 260, damping: 20, delay: 0.06 + i * 0.07 } as const)

const d = AI_ECON
</script>

<template>
  <!-- Dua halaman berbagi satu kunci registry: isi berganti sesuai ref. -->
  <AiLimitDetail v-if="section.ref === 'stack'" :section="section" />

  <div v-else class="relative flex min-h-full w-full min-w-0 flex-col justify-center gap-2 md:gap-2.5">
    <LightGridSvg :id="`ai-${section.ref}`" class="absolute inset-0 -z-10 opacity-70" />

    <!-- Strip ekonomi gelap, mengikuti pola strip UnitEconomics. -->
    <Motion :initial="{ opacity: 0, y: -12 }" :animate="{ opacity: 1, y: 0 }" :transition="t(0)">
      <div class="flex w-full flex-wrap items-center gap-x-2 gap-y-1.5 rounded-3xl bg-gm-ink px-3.5 py-2.5 text-left text-white">
        <span class="flex shrink-0 items-center gap-1.5 font-headline text-base font-extrabold">
          <Icon name="lucide:sparkles" class="size-4 shrink-0 text-emerald-300" />{{ d.stripLabel }}
        </span>
        <template v-for="(p, i) in d.strip" :key="p.v">
          <Icon
            v-if="i > 0"
            name="lucide:arrow-right"
            class="size-4 shrink-0 text-white/50"
          />
          <span
            class="rounded-full px-3 py-1 font-headline text-base font-bold"
            :class="p.hot ? 'bg-gm-soft/25 text-emerald-300' : 'bg-white/10 text-white'"
          >{{ p.v }}</span>
        </template>
      </div>
    </Motion>

    <!-- Tabel biaya di kiri, pencapaian bisnis di kanan. -->
    <div class="grid w-full min-w-0 grid-cols-1 items-stretch gap-2 lg:grid-cols-12">
      <Motion
        :initial="{ opacity: 0, y: 16 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="t(1)"
        class="min-w-0 lg:col-span-7"
      >
        <div class="flex h-full flex-col rounded-3xl border-2 border-gm-line bg-white p-3 text-left">
          <span class="flex items-center gap-1.5 font-headline text-base font-extrabold uppercase tracking-wide text-gm-primary">
            <Icon name="lucide:receipt" class="size-4 shrink-0" />{{ d.costTitle }}
          </span>
          <table class="mt-1.5 w-full table-fixed border-collapse text-base">
            <thead>
              <tr>
                <th class="w-1/2 border-b-2 border-gm-line py-1.5 pr-2 text-left font-headline text-base font-extrabold leading-snug text-gm-muted">Skenario</th>
                <th class="w-[14%] border-b-2 border-gm-line py-1.5 pr-2 text-left font-headline text-base font-extrabold leading-snug text-gm-muted">Token</th>
                <th class="w-[14%] border-b-2 border-gm-line py-1.5 pr-2 text-left font-headline text-base font-extrabold leading-snug text-gm-muted">Biaya</th>
                <th class="w-[22%] border-b-2 border-gm-line py-1.5 text-left font-headline text-base font-extrabold leading-snug text-gm-muted">80 pengguna</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="r in d.costs" :key="r.s">
                <td class="border-b-2 border-gm-line py-1.5 pr-2 text-base leading-snug text-gm-ink">{{ r.s }}</td>
                <td class="border-b-2 border-gm-line py-1.5 pr-2 text-base leading-snug tabular-nums text-gm-ink">{{ r.tok }}</td>
                <td
                  class="border-b-2 border-gm-line py-1.5 pr-2 font-headline text-base font-extrabold leading-snug tabular-nums"
                  :class="r.bad ? 'text-gm-danger' : 'text-gm-ink'"
                >{{ r.cost }}</td>
                <td
                  class="border-b-2 border-gm-line py-1.5 font-headline text-base font-extrabold leading-snug tabular-nums"
                  :class="r.bad ? 'text-gm-danger' : 'text-gm-ink'"
                >{{ r.tot }}</td>
              </tr>
            </tbody>
          </table>
          <p class="mt-1.5 text-base leading-snug text-gm-muted">{{ d.costNote }}</p>
        </div>
      </Motion>

      <Motion
        :initial="{ opacity: 0, y: 16 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="t(2)"
        class="min-w-0 lg:col-span-5"
      >
        <div class="flex h-full flex-col rounded-3xl border-2 border-gm-line bg-white p-3 text-left">
          <span class="flex items-center gap-1.5 font-headline text-base font-extrabold uppercase tracking-wide text-gm-primary">
            <Icon name="lucide:users" class="size-4 shrink-0" />{{ d.bizTitle }}
          </span>
          <div class="mt-1.5 flex flex-col gap-1.5">
            <div v-for="b in d.biz" :key="b.label" class="rounded-xl border-2 border-gm-line bg-gm-panel px-2.5 py-2">
              <span class="block font-headline text-xl font-extrabold leading-tight tabular-nums text-gm-primary">{{ b.v }}</span>
              <span class="mt-0.5 block text-base leading-snug text-gm-muted">{{ b.label }}</span>
            </div>
          </div>
        </div>
      </Motion>
    </div>

    <!-- Strip skala: beban 80 pengguna terhadap anggaran bulanan. -->
    <Motion :initial="{ opacity: 0, y: 14 }" :animate="{ opacity: 1, y: 0 }" :transition="t(3)">
      <div class="flex w-full flex-wrap items-center gap-x-2 gap-y-1.5 rounded-3xl bg-gm-ink px-3.5 py-2.5 text-left text-white">
        <span class="flex shrink-0 items-center gap-1.5 font-headline text-base font-extrabold">
          <Icon name="lucide:layers" class="size-4 shrink-0 text-emerald-300" />{{ d.scaleLabel }}
        </span>
        <template v-for="(p, i) in d.scale" :key="p.v">
          <Icon
            v-if="i > 0"
            name="lucide:arrow-right"
            class="size-4 shrink-0 text-white/50"
          />
          <span
            class="rounded-full px-3 py-1 font-headline text-base font-bold"
            :class="p.hot ? 'bg-gm-soft/25 text-emerald-300' : 'bg-white/10 text-white'"
          >{{ p.v }}</span>
        </template>
      </div>
    </Motion>

    <!-- Pembanding pasar, kalimat posisi, dan dasar perhitungan. -->
    <Motion :initial="{ opacity: 0, y: 14 }" :animate="{ opacity: 1, y: 0 }" :transition="t(4)">
      <div class="rounded-3xl border-2 border-gm-line bg-gm-panel p-3 text-left">
        <div class="flex flex-wrap items-center gap-1.5">
          <span class="mr-1 font-headline text-base font-extrabold uppercase tracking-wide text-gm-primary">{{ d.marketLabel }}</span>
          <span
            v-for="m in d.market"
            :key="m"
            class="rounded-full border-2 border-gm-line bg-white px-3 py-1 text-base font-semibold text-gm-ink"
          >{{ m }}</span>
        </div>
        <p class="mt-1.5 text-base font-semibold leading-snug text-gm-ink">{{ d.verdict }}</p>
        <p class="mt-1.5 text-base leading-snug text-gm-muted">{{ d.footnote }}</p>
      </div>
    </Motion>
  </div>
</template>
