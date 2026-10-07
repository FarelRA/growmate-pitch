<script setup lang="ts">
</script>

<template>
  <div class="relative overflow-hidden rounded-2xl border-2 border-gm-line bg-white px-5 py-3.5 text-left">
    <div class="grid grid-cols-2 items-center gap-10 sm:gap-16">
      <div class="flex min-w-0 items-center gap-3">
        <span class="grid size-12 shrink-0 place-items-center rounded-xl bg-gm-panel">
          <Icon name="lucide:timer" class="usp-tick size-7 text-gm-muted" />
        </span>
        <p class="min-w-0 leading-tight">
          <span class="block font-headline text-base font-extrabold uppercase tracking-[0.08em] text-gm-muted">Timer biasa</span>
          <span class="block truncate text-base font-medium text-gm-ink">siram tiap jam</span>
        </p>
      </div>
      <div class="flex min-w-0 items-center gap-3">
        <span class="relative grid size-12 shrink-0 place-items-center rounded-xl bg-gm-mist">
          <Icon name="lucide:brain" class="usp-glow size-7 text-gm-primary" />
          <Icon name="lucide:leaf" class="absolute -bottom-0.5 -right-0.5 size-5 rounded-full bg-white text-gm-soft" />
        </span>
        <p class="min-w-0 leading-tight">
          <span class="block font-headline text-base font-extrabold uppercase tracking-[0.08em] text-gm-primary">GrowMate</span>
          <span class="block truncate text-base font-medium text-gm-ink">siram saat tanah butuh</span>
        </p>
      </div>
    </div>
    <div class="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full bg-gm-ink px-4 py-2.5 font-headline text-base font-extrabold uppercase tracking-[0.08em] text-white">
      <Icon name="lucide:zap" class="size-5 text-amber-300" />
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
