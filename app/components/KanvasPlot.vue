<script setup lang="ts">
withDefaults(
  defineProps<{ title: string; icon: string; items: string[]; hero?: boolean; ribbon?: string }>(),
  { hero: false, ribbon: '' },
)
</script>

<template>
  <article
    :class="[
      'relative flex h-full flex-col rounded-2xl border-2 p-2.5 text-left md:p-3',
      hero
        ? 'border-gm-primary bg-gm-primary text-white shadow-xl md:scale-[1.03]'
        : 'border-gm-line bg-white text-gm-ink',
    ]"
  >
    <span
      v-if="hero && ribbon"
      class="kanvas-ribbon absolute -top-2.5 right-2 rounded-full bg-gm-amber px-2 py-0.5 font-headline text-[10px] font-extrabold uppercase tracking-wide text-white shadow"
    >
      {{ ribbon }}
    </span>
    <div class="flex items-center gap-1.5">
      <span
        :class="[
          'grid shrink-0 place-items-center rounded-lg',
          hero ? 'bg-white/15 p-1' : 'bg-gm-mist p-1',
        ]"
      >
        <Icon :name="icon" :class="hero ? 'size-8 text-white' : 'size-4 text-gm-primary'" />
      </span>
      <h3
        :class="[
          'font-headline text-[11px] font-extrabold uppercase leading-tight tracking-wide md:text-xs',
          hero ? 'text-white' : 'text-gm-primary',
        ]"
      >
        {{ title }}
      </h3>
    </div>
    <ul class="mt-1.5 space-y-0.5">
      <li
        v-for="item in items"
        :key="item"
        class="flex items-start gap-1 text-[11px] leading-snug md:text-xs"
        :class="hero ? 'text-white/95' : 'text-gm-ink'"
      >
        <span aria-hidden="true" :class="hero ? 'text-gm-amberbg' : 'text-gm-soft'">•</span>
        <span class="min-w-0 break-words">{{ item }}</span>
      </li>
    </ul>
  </article>
</template>
