<script setup lang="ts">
import { Motion } from 'motion-v'
import type { HiddenSection } from '~/data/hidden'
import { DURABILITY } from '~/data/resilience'

defineProps<{ section: HiddenSection }>()

const data = DURABILITY

/** Gerak masuk berjenjang, pola sama dengan slide deck. */
const t = (i: number) => ({ type: 'spring', stiffness: 260, damping: 20, delay: 0.06 + i * 0.07 } as const)
</script>

<template>
  <div class="relative flex min-h-full w-full min-w-0 flex-col justify-center gap-2 md:gap-2.5">
    <LightGridSvg :id="`dd-${section.ref}`" class="absolute inset-0 -z-10 opacity-70" />

    <div class="grid w-full min-w-0 grid-cols-1 items-stretch gap-3 lg:grid-cols-12">
      <!-- Kiri: cerita penuaan lalu pertahanannya. -->
      <div class="flex w-full min-w-0 flex-col justify-center gap-2 lg:col-span-7">
        <Motion :initial="{ opacity: 0, y: 16 }" :animate="{ opacity: 1, y: 0 }" :transition="t(0)">
          <div class="rounded-2xl border-2 border-gm-line bg-gm-amberbg p-3 text-left 2xl:p-4">
            <span class="flex items-center gap-1.5 font-headline text-base font-extrabold uppercase tracking-wide text-gm-amber">
              <Icon name="lucide:activity" class="size-4 shrink-0" />{{ data.agingTitle }}
            </span>
            <ul class="mt-1.5 grid w-full grid-cols-1 gap-1">
              <li v-for="a in data.aging" :key="a" class="flex items-start justify-start gap-2 text-base leading-snug text-gm-muted">
                <Icon name="lucide:arrow-right" class="mt-0.5 size-4 shrink-0 text-gm-amber" />
                <span class="min-w-0">{{ a }}</span>
              </li>
            </ul>
          </div>
        </Motion>

        <Motion :initial="{ opacity: 0, y: 18 }" :animate="{ opacity: 1, y: 0 }" :transition="t(1)">
          <div class="flex w-full flex-wrap items-center justify-start gap-1.5">
            <span class="font-headline text-base font-extrabold uppercase tracking-wide text-gm-primary">{{ data.defenseTitle }}</span>
            <span class="rounded-full bg-gm-primary px-2.5 py-0.5 font-headline text-base font-extrabold text-white">{{ data.defenseTag }}</span>
          </div>

          <ol class="mt-1.5 grid w-full grid-cols-1 gap-1.5">
            <li
              v-for="(p, i) in data.points"
              :key="p.title"
              class="flex w-full items-start justify-start gap-2 rounded-xl border-2 border-gm-line bg-white p-2 text-left"
            >
              <span class="grid size-7 shrink-0 place-items-center rounded-full bg-gm-mist font-headline text-base font-extrabold text-gm-primary">{{ i + 1 }}</span>
              <span class="min-w-0 flex-1">
                <span class="flex items-center justify-start gap-1.5 font-headline text-base font-extrabold leading-tight text-gm-ink">
                  <Icon :name="p.icon" class="size-4 shrink-0 text-gm-primary" />{{ p.title }}
                </span>
                <span class="mt-0.5 block text-base leading-snug text-gm-muted">{{ p.desc }}</span>
              </span>
            </li>
          </ol>
        </Motion>
      </div>

      <!-- Kanan: naskah jurnal di samping teks, sitasi di bawahnya. -->
      <div class="flex w-full min-w-0 flex-col justify-center gap-2 lg:col-span-5">
        <Motion :initial="{ opacity: 0, y: 20, rotate: -1 }" :animate="{ opacity: 1, y: 0, rotate: 0 }" :transition="t(2)">
          <div class="w-full overflow-hidden rounded-3xl border-2 border-gm-line bg-white p-2 shadow-[0_14px_34px_rgba(26,28,28,0.12)]">
            <img
              :src="data.photo.src"
              :alt="data.photo.alt"
              class="block max-h-[240px] w-full rounded-2xl object-contain 2xl:max-h-[330px]"
              draggable="false"
            />
          </div>
        </Motion>

        <Motion :initial="{ opacity: 0, y: 14 }" :animate="{ opacity: 1, y: 0 }" :transition="t(3)">
          <p class="text-left text-base leading-snug text-gm-muted">{{ data.citation }}</p>
        </Motion>

        <Motion :initial="{ opacity: 0, y: 16 }" :animate="{ opacity: 1, y: 0 }" :transition="t(4)">
          <div class="flex w-full flex-wrap items-center justify-start gap-1.5">
            <span class="flex items-center gap-1.5 rounded-full bg-gm-ink px-3 py-1 font-headline text-base font-extrabold text-white">
              <Icon name="lucide:shield-check" class="size-4 shrink-0 text-emerald-300" />{{ data.badge }}
            </span>
            <span class="rounded-full border-2 border-gm-line bg-gm-amberbg px-2.5 py-0.5 font-headline text-base font-extrabold text-gm-amber">{{ data.badgeNote }}</span>
          </div>
          <div class="mt-1.5 flex w-full flex-wrap items-center justify-start gap-1.5">
            <span
              v-for="a in data.assumptions"
              :key="a"
              class="rounded-full border-2 border-gm-line bg-gm-mist px-2.5 py-0.5 text-base font-semibold text-gm-ink"
            >{{ a }}</span>
          </div>
        </Motion>
      </div>
    </div>
  </div>
</template>
