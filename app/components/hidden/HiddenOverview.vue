<script setup lang="ts">
import { useDeckStore } from '~/stores/deck'
import { HIDDEN_SECTIONS } from '~/data/hidden'

const store = useDeckStore()

const icon: Record<string, string> = {
  cover: 'lucide:archive',
  product: 'lucide:box',
  app: 'lucide:smartphone',
  graph: 'lucide:workflow',
}
</script>

<template>
  <div class="absolute inset-0 z-10 flex flex-col bg-white/97 backdrop-blur-sm">
    <div class="mx-auto grid w-full max-w-[1600px] flex-1 auto-rows-min grid-cols-2 content-center gap-2 p-4 sm:grid-cols-3 md:grid-cols-4 md:p-6">
      <button
        v-for="(s, i) in HIDDEN_SECTIONS"
        :key="s.id"
        type="button"
        class="flex min-w-0 flex-col items-start justify-start gap-1 rounded-2xl border-2 p-2.5 text-left transition-all"
        :class="i === store.hIndex ? 'border-gm-primary bg-gm-amberbg shadow-md' : 'border-gm-line bg-white hover:border-gm-primary/50'"
        @click="store.hGo(i)"
      >
        <span class="flex w-full items-center justify-between gap-2">
          <span class="flex min-w-0 items-center gap-1.5">
            <Icon :name="icon[s.kind]" class="size-4 shrink-0" :class="i === store.hIndex ? 'text-gm-amber' : 'text-gm-primary'" />
            <span class="truncate font-headline text-base font-extrabold" :class="i === store.hIndex ? 'text-gm-amber' : 'text-gm-ink'">{{ s.title }}</span>
          </span>
          <span class="shrink-0 font-mono text-base font-bold text-gm-ink/30">{{ String(i + 1).padStart(2, '0') }}</span>
        </span>
        <span class="line-clamp-2 w-full text-left text-base leading-snug text-gm-muted">{{ s.sub }}</span>
      </button>
    </div>
  </div>
</template>
