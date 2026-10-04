<script setup lang="ts">
</script>

<template>
  <div class="relative overflow-hidden rounded-2xl border-2 border-gm-line bg-white px-3 py-2 text-left">
    <div class="grid grid-cols-2 items-center gap-10 sm:gap-16">
      <div class="flex min-w-0 items-center gap-2">
        <span class="grid size-8 shrink-0 place-items-center rounded-xl bg-gm-panel md:size-9">
          <Icon name="lucide:timer" class="usp-tick size-5 text-gm-muted md:size-6" />
        </span>
        <p class="min-w-0 leading-tight">
          <span class="block font-headline text-[10px] font-extrabold uppercase tracking-[0.08em] text-gm-muted md:text-[11px]">Timer biasa</span>
          <span class="block truncate text-[11px] font-medium text-gm-ink md:text-[13px]">siram tiap jam</span>
        </p>
      </div>
      <div class="flex min-w-0 items-center gap-2">
        <span class="relative grid size-8 shrink-0 place-items-center rounded-xl bg-gm-mist md:size-9">
          <Icon name="lucide:brain" class="usp-glow size-5 text-gm-primary md:size-6" />
          <Icon name="lucide:leaf" class="absolute -bottom-0.5 -right-0.5 size-3.5 rounded-full bg-white text-gm-soft" />
        </span>
        <p class="min-w-0 leading-tight">
          <span class="block font-headline text-[10px] font-extrabold uppercase tracking-[0.08em] text-gm-primary md:text-[11px]">GrowMate</span>
          <span class="block truncate text-[11px] font-medium text-gm-ink md:text-[13px]">siram saat tanah butuh</span>
        </p>
      </div>
    </div>
    <div class="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full bg-gm-ink px-2.5 py-1 font-headline text-[10px] font-extrabold uppercase tracking-[0.08em] text-white md:text-[11px]">
      <Icon name="lucide:zap" class="size-3.5 text-amber-300" />
      <span>Beda</span>
    </div>
  </div>
</template>

<style scoped>
@keyframes usp-tick {
  0%, 100% { transform: rotate(-14deg); }
  50% { transform: rotate(14deg); }
}
.usp-tick {
  animation: usp-tick 1.2s ease-in-out infinite;
  transform-origin: 50% 18%;
}
@keyframes usp-glow {
  0%, 100% { filter: drop-shadow(0 0 0 rgba(76, 175, 80, 0)); }
  50% { filter: drop-shadow(0 0 8px rgba(76, 175, 80, 0.9)); }
}
.usp-glow {
  animation: usp-glow 2.2s ease-in-out infinite;
}
@media (prefers-reduced-motion: reduce) {
  .usp-tick, .usp-glow { animation: none; }
}
</style>
