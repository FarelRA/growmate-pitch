<script setup lang="ts">
withDefaults(
  defineProps<{ title: string; sub?: string; icon: string; items: string[]; hero?: boolean }>(),
  { sub: '', hero: false },
)
</script>

<template>
  <article
    class="kanvas-plot flex h-full min-w-0 flex-col rounded-xl border-2 p-2 text-left md:p-2.5"
    :class="hero ? 'border-gm-primary bg-gm-primary text-white shadow-xl' : 'border-gm-line bg-white text-gm-ink'"
  >
    <div class="flex min-w-0 items-center gap-1.5">
      <span
        class="grid shrink-0 place-items-center rounded-lg p-1"
        :class="hero ? 'bg-white/15' : 'bg-gm-mist'"
      >
        <Icon :name="icon" :class="hero ? 'size-4 text-white' : 'size-4 text-gm-primary'" />
      </span>
      <div class="min-w-0">
        <h3
          class="font-headline text-[11px] font-extrabold uppercase leading-tight tracking-wide md:text-xs"
          :class="hero ? 'text-white' : 'text-gm-primary'"
        >
          {{ title }}
        </h3>
        <p
          v-if="sub"
          class="text-[9px] font-bold uppercase leading-tight tracking-[0.14em]"
          :class="hero ? 'text-white/75' : 'text-gm-primary/60'"
        >
          {{ sub }}
        </p>
      </div>
    </div>
    <ul class="mt-1 space-y-0.5">
      <li
        v-for="item in items"
        :key="item"
        class="flex items-start gap-1 text-[11px] leading-snug"
        :class="hero ? 'text-white/95' : 'text-gm-ink'"
      >
        <span aria-hidden="true" :class="hero ? 'text-gm-amberbg' : 'text-gm-soft'">•</span>
        <span class="min-w-0 break-words">{{ item }}</span>
      </li>
    </ul>
  </article>
</template>
