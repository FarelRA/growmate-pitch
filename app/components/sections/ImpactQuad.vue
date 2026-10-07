<script setup lang="ts">
import { Motion } from 'motion-v'

const quads = [
  {
    icon: 'lucide:leaf',
    eyebrow: 'Buah 01',
    title: 'Planet',
    desc: 'Bodi rPLA, kayu limbah, honeycomb, jerami, plus guna ulang.',
    border: 'border-gm-primary',
    badge: 'bg-gm-mist text-gm-primary',
    dot: 'bg-gm-primary',
  },
  {
    icon: 'lucide:coins',
    eyebrow: 'Buah 02',
    title: 'Profit',
    desc: 'Hardware lokal dan langganan AI kalahkan impor bergaransi.',
    border: 'border-gm-amber',
    badge: 'bg-gm-amberbg text-gm-amber',
    dot: 'bg-gm-amber',
  },
  {
    icon: 'lucide:users',
    eyebrow: 'Buah 03',
    title: 'People',
    desc: 'Floral membimbing pemula. Komunitas mengantar panen ke pembeli.',
    border: 'border-gm-sky',
    badge: 'bg-gm-panel text-gm-sky',
    dot: 'bg-gm-sky',
  },
  {
    icon: 'lucide:target',
    eyebrow: 'Buah 04',
    title: 'Purpose',
    desc: 'Asta Cita butir 2, Indonesia Emas 2045, dan SDGs tujuan 12.',
    border: 'border-gm-deep',
    badge: 'bg-gm-mist text-gm-deep',
    dot: 'bg-gm-deep',
  },
]

const tilts = ['-1.2deg', '1deg', '-0.9deg', '1.2deg']
</script>

<template>
  <DeckShell section="quad">
    <div class="flex w-full flex-1 flex-col justify-center gap-1 overflow-x-clip overflow-y-clip md:gap-1">
      <QuadTree />
      <DeckAutoGrid :cols="4">
        <Motion
          v-for="(q, i) in quads"
          :key="q.title"
          :initial="{ opacity: 0, scale: 0.85, y: 16 }"
          :animate="{ opacity: 1, scale: 1, y: 0 }"
          :transition="{ type: 'spring', stiffness: 260, damping: 18, delay: 0.5 + i * 0.08 }"
          class="h-full min-h-0"
        >
          <div
            class="flex h-full min-h-0 flex-col items-start rounded-2xl border-2 bg-white p-2.5 text-left shadow-[0_8px_20px_rgba(0,77,19,0.07)]"
            :class="q.border"
            :style="{ transform: `rotate(${tilts[i]})` }"
          >
            <span aria-hidden="true" class="mx-auto block h-1 w-px shrink-0 bg-[#c9cfc8]" />
            <span aria-hidden="true" class="mx-auto grid size-3 shrink-0 place-items-center rounded-full border-2 bg-white" :class="q.border">
              <span class="size-1 rounded-full bg-[#c9cfc8]" />
            </span>
            <span class="mt-1 grid size-7 shrink-0 place-items-center rounded-xl" :class="q.badge">
              <Icon :name="q.icon" class="size-5" />
            </span>
            <p class="mt-1 text-base font-bold uppercase leading-none tracking-[0.12em] text-gm-muted">{{ q.eyebrow }}</p>
            <div class="mt-1 flex items-center gap-1.5 font-headline text-base font-extrabold leading-tight">
              <span class="size-1.5 shrink-0 rounded-full" :class="q.dot" />
              <span>{{ q.title }}</span>
              <Icon v-if="q.title === 'Purpose'" name="lucide:star" class="anim-pulse-dot size-4 text-gm-amber" />
            </div>
            <p class="mt-0.5 text-base leading-[1.35] text-gm-muted">{{ q.desc }}</p>
          </div>
        </Motion>
      </DeckAutoGrid>
    </div>
  </DeckShell>
</template>
