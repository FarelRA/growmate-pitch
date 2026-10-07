<script setup lang="ts">
import UspDuelStrip from '~/components/UspDuelStrip.vue'
import UspStation from '~/components/UspStation.vue'
</script>

<template>
  <DeckShell section="usp">
    <Reveal :delay="0" class="w-full">
      <UspDuelStrip />
    </Reveal>
    <DeckAutoGrid :cols="3" class="mt-2 md:mt-2.5">
      <Reveal :delay="0.08" class="h-full w-full min-w-0">
        <UspStation
          variant="ink"
          num="01"
          eyebrow="Station 01"
          title="Otak AI lokal"
          desc="Floral Assistant plus Pranata Mangsa. Mengukur tanah tropis, memikirkannya, lalu bertindak."
          slotLabel="Foto close-up Pods indoor menyala"
          slotSpec="Pods dengan tanaman, LED grow light terlihat, 16/10"
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
          desc="Satu pot meja sampai lahan di atas 1 hektar. Satu aplikasi mengendalikan semua."
          slotLabel="Foto unit Tech di lahan terbuka"
          slotSpec="Unit Tech di sawah atau kebun, 16/10"
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
          desc="Logika lokal saat WiFi mati. Opsi panel surya dan modem SIM untuk lokasi tanpa PLN."
          slotLabel="Foto instalasi surya dan LTE"
          slotSpec="Panel surya plus unit Tech di lapangan, 16/10"
          proofMain="Tetap jalan tanpa WiFi"
          proofSub="kerja lokal tanpa internet"
        />
      </Reveal>
    </DeckAutoGrid>
  </DeckShell>
</template>
