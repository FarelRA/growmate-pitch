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

const fireflies = [
  { left: '8%', top: '18%', delay: '0s' },
  { left: '30%', top: '8%', delay: '1.2s' },
  { left: '55%', top: '14%', delay: '0.6s' },
  { left: '76%', top: '6%', delay: '1.8s' },
  { left: '92%', top: '20%', delay: '0.9s' },
]
</script>

<template>
  <DeckShell section="quad">
    <div class="flex w-full flex-1 flex-col justify-center gap-2 md:gap-2.5">
      <div class="relative w-full">
        <QuadTree />
        <span
          v-for="f in fireflies"
          :key="f.left"
          aria-hidden="true"
          class="anim-float pointer-events-none absolute z-0 hidden size-1 rounded-full bg-gm-amber/60 md:block"
          :style="{ left: f.left, top: f.top, animationDelay: f.delay }"
        />
        <div class="relative z-10 pl-8 md:pl-0">
          <DeckAutoGrid :cols="4">
            <Motion
              v-for="(q, i) in quads"
              :key="q.title"
              :initial="{ opacity: 0, scale: 0.85, y: 16 }"
              :animate="{ opacity: 1, scale: 1, y: 0 }"
              :transition="{ type: 'spring', stiffness: 260, damping: 18, delay: 0.35 + i * 0.08 }"
              class="h-full"
            >
              <div class="flex h-full flex-col items-start rounded-2xl border-2 bg-white p-2.5 text-left md:p-3" :class="q.border">
                <span class="grid size-7 place-items-center rounded-xl md:size-8" :class="q.badge">
                  <Icon :name="q.icon" class="size-3.5 md:size-4" />
                </span>
                <p class="mt-1.5 text-[10px] font-bold uppercase leading-none tracking-[0.12em] text-gm-muted">{{ q.eyebrow }}</p>
                <div class="mt-0.5 flex items-center gap-1.5 font-headline text-sm font-extrabold leading-tight md:text-base">
                  <span class="size-1.5 shrink-0 rounded-full" :class="q.dot" />
                  <span>{{ q.title }}</span>
                  <Icon v-if="q.title === 'Purpose'" name="lucide:star" class="anim-pulse-dot size-3.5 text-gm-amber" />
                </div>
                <p class="mt-1 text-[11px] leading-snug text-gm-muted md:text-xs">{{ q.desc }}</p>
              </div>
            </Motion>
          </DeckAutoGrid>
        </div>
      </div>
      <UiPhotoFigure src="/photos/roadmap.webp" alt="Unit Tech bekerja di sawah mitra" ratio="32 / 9" />
    </div>
  </DeckShell>
</template>
