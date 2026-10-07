<script setup lang="ts">
import gsap from 'gsap'

const stamp = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!stamp.value) return
  gsap.fromTo(
    stamp.value,
    { scale: 1.4, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.45, ease: 'power4.in', delay: 0.35 },
  )
})
</script>

<template>
  <div class="flex w-full justify-center">
    <div
      ref="stamp"
      class="w-full rotate-[-1deg] rounded-2xl border-[3px] border-gm-primary bg-white px-6 py-1.5 text-center shadow-md md:w-auto md:px-8 2xl:py-2.5"
    >
      <div class="flex items-center justify-center gap-2">
        <Icon name="lucide:factory" class="size-7 shrink-0 text-gm-primary" />
        <p class="font-headline text-xl font-extrabold uppercase leading-tight tracking-wide text-gm-primary">
          Lolos tiga gerbang. Garansi 3 bulan ganti baru.
        </p>
        <Icon name="lucide:badge-check" class="size-7 shrink-0 text-gm-primary" />
      </div>
    </div>
  </div>
</template>
