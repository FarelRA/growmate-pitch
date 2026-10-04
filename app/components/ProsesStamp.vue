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
      class="w-full rotate-[-1deg] rounded-xl border-[3px] border-gm-primary bg-white px-3 py-1.5 text-center shadow-sm md:w-auto md:px-6 md:py-2"
    >
      <div class="flex items-center justify-center gap-2">
        <Icon name="lucide:factory" class="size-5 shrink-0 text-gm-primary" />
        <p class="font-headline text-[13px] font-extrabold uppercase leading-tight tracking-wide text-gm-primary md:text-base">
          Lolos tiga gerbang. Garansi 3 bulan ganti baru.
        </p>
        <Icon name="lucide:badge-check" class="size-5 shrink-0 text-gm-primary" />
      </div>
    </div>
  </div>
</template>
