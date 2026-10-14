<script setup lang="ts">
import QRCode from 'qrcode'

const props = defineProps<{ text: string; label: string; sub?: string }>()
const url = ref('')

async function render(text: string) {
  try {
    url.value = text
      ? await QRCode.toDataURL(text, {
        width: 480,
        margin: 3,
        color: { dark: '#1a1c1c', light: '#ffffff' },
      })
      : ''
  }
  catch {
    url.value = ''
  }
}

watch(() => props.text, render, { immediate: true })
</script>

<template>
  <div class="flex w-full flex-1 items-center justify-center gap-3 rounded-3xl border-2 border-gm-line bg-white p-3 text-center md:gap-4 md:p-4">
    <div class="grid size-24 shrink-0 place-items-center overflow-hidden rounded-2xl bg-white p-2 ring-2 ring-gm-line md:size-32 md:p-2.5">
      <img v-if="url" :src="url" :alt="label" class="size-full object-contain" draggable="false" />
      <Icon v-else name="lucide:qr-code" class="size-10 text-gm-line" />
    </div>
    <div class="min-w-0 flex-1">
      <div class="font-headline text-lg font-extrabold leading-tight text-gm-ink md:text-xl">{{ label }}</div>
      <div class="mt-1 truncate font-mono text-base text-gm-muted">{{ sub ?? text }}</div>
    </div>
  </div>
</template>
