<script setup lang="ts">
/**
 * Bingkai penampil ledakan 3D: judul, tombol Ledakan/Rakit, kanvas,
 * dan catatan kaki. Kanvas dimuat malas dan hanya di klien.
 * Demo lingkar jalan otomatis: rakit 4 detik, meledak 5 detik, berulang.
 * Interaksi pengguna menghentikan demo 4 detik lalu demo lanjut lagi.
 * Gerak otomatis mati saat prefers-reduced-motion.
 */
const props = withDefaults(
  defineProps<{ src: string; title: string; note?: string; compact?: boolean }>(),
  { note: 'Warna hanya pembeda bagian, bukan warna asli produk.', compact: false },
)

const Canvas = defineAsyncComponent(() => import('~/components/BlowupCanvas.vue'))

const RAKIT_MS = 4000
const MELEDAK_MS = 5000
const JEDA_IDLE_MS = 4000

const exploded = ref(false)
const partCount = ref(0)
const reduced = ref(false)

let timer: ReturnType<typeof setTimeout> | null = null
let gone = false

const clearTimer = () => {
  if (timer) clearTimeout(timer)
  timer = null
}

/** Satu langkah mesin status: jadwalkan peralihan fase berikut. */
const step = () => {
  clearTimer()
  if (gone || reduced.value) return
  timer = setTimeout(() => {
    if (gone || reduced.value) return
    exploded.value = !exploded.value
    step()
  }, exploded.value ? MELEDAK_MS : RAKIT_MS)
}

/** Jeda demo lalu mulai lagi dari fase sesuai wujud rakitan saat ini. */
const pauseResume = () => {
  clearTimer()
  if (gone || reduced.value) return
  timer = setTimeout(() => {
    if (!gone && !reduced.value) step()
  }, JEDA_IDLE_MS)
}

const onInteract = () => pauseResume()
const onToggle = () => {
  exploded.value = !exploded.value
  pauseResume()
}

onMounted(() => {
  reduced.value = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
  if (!reduced.value) step()
})

onUnmounted(() => {
  gone = true
  clearTimer()
})
</script>

<template>
  <div
    class="flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border-2 border-gm-line bg-white text-left"
    :data-exploded="exploded ? 'true' : 'false'"
  >
    <div class="flex items-center justify-between gap-2" :class="props.compact ? 'px-2 pt-1.5' : 'px-3 pt-2.5'">
      <p class="min-w-0 truncate font-headline text-base font-extrabold text-gm-ink">{{ props.title }}</p>
      <button
        type="button"
        :aria-pressed="exploded ? 'true' : 'false'"
        :aria-label="exploded ? 'Rakit kembali model' : 'Tampilkan ledakan model per bagian'"
        class="inline-flex shrink-0 items-center gap-1.5 rounded-full border-2 font-headline text-base font-extrabold transition-colors"
        :class="[
          props.compact ? 'px-2 py-0.5' : 'px-3 py-1',
          exploded ? 'border-gm-primary bg-gm-primary text-white' : 'border-gm-line bg-gm-mist text-gm-primary',
        ]"
        @click="onToggle"
      >
        <Icon :name="exploded ? 'lucide:group' : 'lucide:ungroup'" class="size-4" />
        {{ exploded ? 'Rakit' : 'Ledakan' }}
      </button>
    </div>
    <div class="relative mx-2 mt-1.5 min-h-0 flex-1 overflow-hidden rounded-2xl bg-gm-panel" :class="props.compact ? 'mb-1.5' : ''">
      <ClientOnly>
        <component
          :is="Canvas"
          :src="props.src"
          :exploded="exploded"
          :spin="!reduced"
          class="absolute inset-0"
          @ready="partCount = $event"
          @interact="onInteract"
        />
        <template #fallback>
          <div class="grid h-full min-h-[220px] place-items-center text-base text-gm-muted">Memuat 3D…</div>
        </template>
      </ClientOnly>
    </div>
    <p v-if="!props.compact" class="px-3 py-2 text-base leading-snug text-gm-muted">
      <span v-if="partCount > 0" class="font-headline font-extrabold tabular-nums text-gm-ink">{{ partCount }} bagian</span>
      <span v-if="partCount > 0"> • </span>Seret untuk memutar. {{ props.note }}
    </p>
  </div>
</template>
