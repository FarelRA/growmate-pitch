<script setup lang="ts">
const nodes = [
  { icon: 'lucide:instagram', name: 'Instagram', handle: '@grow.mateai' },
  { icon: 'lucide:message-circle', name: 'WhatsApp', handle: '+62 877-8445-4555' },
  { icon: 'lucide:music-2', name: 'TikTok', handle: '@growmate.41' },
  { icon: 'lucide:shopping-bag', name: 'Shopee', handle: 'grow_mate' },
  { icon: 'lucide:globe', name: 'Situs', handle: 'growmate.bond' },
]
</script>

<template>
  <div class="w-full rounded-3xl border-2 border-gm-line bg-white p-2.5 text-left md:p-3">
    <div class="flex items-center justify-start gap-2">
      <span class="grid size-7 shrink-0 place-items-center rounded-lg bg-gm-mist">
        <Icon name="lucide:satellite" class="size-4 text-gm-primary" />
      </span>
      <p class="font-headline text-xs font-extrabold uppercase tracking-[0.08em] text-gm-primary md:text-sm">
        Penemuan daring
      </p>
      <span class="ml-auto flex shrink-0 items-center gap-1.5">
        <span class="anim-pulse-dot size-1.5 rounded-full bg-gm-amber" aria-hidden="true" />
        <span class="text-[11px] font-semibold text-gm-muted">sinyal aktif</span>
      </span>
    </div>
    <div class="relative mt-2">
      <div class="absolute left-[10%] right-[10%] top-4 h-0.5 rounded-full bg-gm-amber/50" aria-hidden="true" />
      <div class="grid grid-cols-5 gap-1 md:gap-1.5">
        <div v-for="n in nodes" :key="n.handle" class="gtm-orbit-node flex min-w-0 flex-col items-center gap-1 text-center">
          <span class="relative z-10 grid size-8 shrink-0 place-items-center rounded-full bg-gm-ink ring-4 ring-white">
            <Icon :name="n.icon" class="size-4 text-gm-amber" />
          </span>
          <span class="min-w-0">
            <span class="block text-[11px] font-extrabold leading-tight text-gm-ink">{{ n.name }}</span>
            <span class="block break-all text-[10px] font-medium leading-tight text-gm-muted md:text-[11px]">{{ n.handle }}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
