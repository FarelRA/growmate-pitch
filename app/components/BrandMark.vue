<script setup lang="ts">
type BrandKind = 'tuya' | 'clickgrow' | 'growmate'

defineProps<{ brand: BrandKind }>()
</script>

<template>
  <svg
    v-if="brand === 'tuya'"
    viewBox="0 0 92 30"
    class="h-6 w-auto max-w-full shrink-0 md:h-7"
    role="img"
    aria-label="Logo Tuya"
  >
    <title>Logo Tuya</title>
    <rect x="0" y="0" width="92" height="30" rx="15" fill="#22282b" />
    <text
      x="11"
      y="21"
      font-family="Manrope, Inter, ui-sans-serif, system-ui, sans-serif"
      font-size="17"
      font-weight="800"
      letter-spacing="-0.5"
      fill="#f2eee1"
    >tuya</text>
    <circle cx="74.5" cy="19.5" r="1.7" fill="#f2eee1" />
    <path
      d="M70.5 15.8 a6.2 6.2 0 0 1 8 0"
      fill="none"
      stroke="#f2eee1"
      stroke-width="1.6"
      stroke-linecap="round"
    />
    <path
      d="M68 12.8 a10 10 0 0 1 13 0"
      fill="none"
      stroke="#f2eee1"
      stroke-width="1.6"
      stroke-linecap="round"
    />
  </svg>
  <svg
    v-else-if="brand === 'clickgrow'"
    viewBox="0 0 118 30"
    class="h-6 w-auto max-w-full shrink-0 md:h-7"
    role="img"
    aria-label="Logo Click dan Grow"
  >
    <title>Logo Click dan Grow</title>
    <rect x="0" y="0" width="118" height="30" rx="15" fill="#df5a32" />
    <text
      x="59"
      y="19.8"
      text-anchor="middle"
      font-family="Inter, Manrope, ui-sans-serif, system-ui, sans-serif"
      font-size="12.5"
      font-weight="700"
      letter-spacing="-0.2"
      fill="#ffffff"
    >click &amp; grow</text>
  </svg>
  <svg
    v-else
    viewBox="0 0 112 30"
    class="h-6 w-auto max-w-full shrink-0 md:h-7"
    role="img"
    aria-label="Logo GrowMate"
  >
    <title>Logo GrowMate</title>
    <rect x="0" y="0" width="112" height="30" rx="15" fill="#006e1c" />
    <rect x="0" y="0" width="112" height="30" rx="15" fill="none" stroke="#004d13" stroke-width="1.5" />
    <path
      d="M19 23 C19 19 19 16 19 12.5"
      fill="none"
      stroke="#e9f4ea"
      stroke-width="1.6"
      stroke-linecap="round"
    />
    <path
      d="M19 16 C15.5 15.2 12.8 13.2 11.8 10 C15.2 9.2 18.2 11.8 19 16 Z"
      fill="#8fd694"
    />
    <path
      d="M19 13.5 C22.5 12.7 25.2 10.7 26.2 7.5 C22.8 6.7 19.8 9.3 19 13.5 Z"
      fill="#e9f4ea"
    />
    <text
      x="30"
      y="20"
      font-family="Manrope, Inter, ui-sans-serif, system-ui, sans-serif"
      font-size="13.5"
      font-weight="800"
      letter-spacing="-0.3"
      fill="#faf6ec"
    >GrowMate</text>
  </svg>
</template>
