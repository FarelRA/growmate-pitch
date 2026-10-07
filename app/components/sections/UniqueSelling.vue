<script setup lang="ts">
import UspDuelStrip from '~/components/UspDuelStrip.vue'
import UspStation from '~/components/UspStation.vue'
</script>

<template>
  <DeckShell section="usp">
    <Reveal :delay="0" class="w-full">
      <UspDuelStrip />
    </Reveal>
    <DeckAutoGrid :cols="3" class="mt-2.5 md:mt-3">
      <Reveal :delay="0.08" class="h-full w-full min-w-0">
        <UspStation
          variant="ink"
          num="01"
          eyebrow="Station 01"
          title="Otak AI lokal"
          desc="Floral Assistant dan Pranata Mangsa. Mengukur tanah tropis lalu bertindak."
          src="/photos/usp-pods-glow.webp"
          alt="Pods indoor menyala dengan bunga soka"
          proofMain="6 sensor presisi"
          proofSub="sensor presisi"
          :countTo="6"
        />
      </Reveal>
      <Reveal :delay="0.16" class="h-full w-full min-w-0">
        <UspStation
          variant="mist"
          num="02"
          eyebrow="Station 02"
          title="Skala fleksibel"
          desc="Pot meja sampai lahan 1 hektar. Satu aplikasi mengendalikan semua."
          src="/photos/usp-tech-box.webp"
          alt="Boks kayu unit GrowMate Tech"
          proofMain="20 cm ke 1 hektar"
          proofSub="satu aplikasi semua skala"
        />
      </Reveal>
      <Reveal :delay="0.24" class="h-full w-full min-w-0">
        <UspStation
          variant="amber"
          num="03"
          eyebrow="Station 03"
          title="Tahan offline"
          desc="Tetap beroperasi saat WiFi mati. Opsi surya dan modem SIM tanpa PLN."
          src="/photos/usp-sensor-sawah.webp"
          alt="Sensor dan sprinkler GrowMate di sawah"
          proofMain="Tetap beroperasi tanpa WiFi"
          proofSub="kerja lokal tanpa internet"
        />
      </Reveal>
    </DeckAutoGrid>
  </DeckShell>
</template>
