<script setup lang="ts">
/**
 * Chromeless deck view for pages that carry their own composition,
 * such as the cover and the closing. No kicker header, no auto title,
 * no counter, no footer.
 */
</script>

<template>
  <section class="mx-auto flex w-full max-w-[1600px] flex-1 flex-col px-4 py-4 sm:px-6 md:px-10 md:py-5">
    <div class="mx-auto grid w-full flex-1 place-items-center">
      <div class="w-full">
        <slot />
      </div>
    </div>
  </section>
</template>
