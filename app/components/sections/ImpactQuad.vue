<script setup lang="ts">
import { Motion } from 'motion-v'

const quads = [
  {
    icon: 'lucide:leaf',
    eyebrow: 'Buah 01',
    title: 'Planet',
    desc: 'Bodi rPLA, kayu limbah, kemasan honeycomb dan jerami, plus putaran refurbish.',
    border: 'border-gm-primary',
    badge: 'bg-gm-mist text-gm-primary',
    dot: 'bg-gm-primary',
  },
  {
    icon: 'lucide:coins',
    eyebrow: 'Buah 02',
    title: 'Profit',
    desc: 'Hardware lokal plus langganan AI mengungguli impor, dengan purnajual nyata.',
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
    <div class="flex w-full flex-1 flex-col justify-center gap-2 overflow-x-clip md:gap-3">
      <QuadTree />
      <DeckAutoGrid :cols="4">
        <Motion
          v-for="(q, i) in quads"
          :key="q.title"
          :initial="{ opacity: 0, scale: 0.85, y: 16 }"
          :animate="{ opacity: 1, scale: 1, y: 0 }"
          :transition="{ type: 'spring', stiffness: 260, damping: 18, delay: 0.5 + i * 0.08 }"
          class="h-full"
        >
          <div
            class="flex h-full flex-col items-start rounded-2xl border-2 bg-white px-2 pb-2 pt-0 text-left shadow-[0_8px_20px_rgba(0,77,19,0.07)]"
            :class="q.border"
            :style="{ transform: `rotate(${tilts[i]})` }"
          >
            <span aria-hidden="true" class="mx-auto block h-1.5 w-px bg-[#c9cfc8]" />
            <span aria-hidden="true" class="mx-auto grid size-2.5 place-items-center rounded-full border-2 bg-white" :class="q.border">
              <span class="size-1 rounded-full bg-[#c9cfc8]" />
            </span>
            <span class="mt-1 grid size-6 place-items-center rounded-xl" :class="q.badge">
              <Icon :name="q.icon" class="size-3.5" />
            </span>
            <p class="mt-1 text-[9px] font-bold uppercase leading-none tracking-[0.12em] text-gm-muted">{{ q.eyebrow }}</p>
            <div class="mt-0.5 flex items-center gap-1.5 font-headline text-[13px] font-extrabold leading-tight">
              <span class="size-1.5 shrink-0 rounded-full" :class="q.dot" />
              <span>{{ q.title }}</span>
              <Icon v-if="q.title === 'Purpose'" name="lucide:star" class="anim-pulse-dot size-3 text-gm-amber" />
            </div>
            <p class="mt-0.5 text-[11px] leading-[1.35] text-gm-muted">{{ q.desc }}</p>
          </div>
        </Motion>
      </DeckAutoGrid>
    </div>
  </DeckShell>
</template>
