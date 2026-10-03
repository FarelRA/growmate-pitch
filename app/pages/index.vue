<script setup lang="ts">
import { useDeckStore } from '~/stores/deck'
import { SECTIONS } from '~/data/deck'
import CoverHero from '~/components/sections/CoverHero.vue'
import ProblemStory from '~/components/sections/ProblemStory.vue'
import MarketAlternatives from '~/components/sections/MarketAlternatives.vue'
import SystemOverview from '~/components/sections/SystemOverview.vue'
import PodsShowcase from '~/components/sections/PodsShowcase.vue'
import TechSquad from '~/components/sections/TechSquad.vue'
import ProductionLine from '~/components/sections/ProductionLine.vue'
import FirmwareLoop from '~/components/sections/FirmwareLoop.vue'
import FloralBrain from '~/components/sections/FloralBrain.vue'
import MangsaEngine from '~/components/sections/MangsaEngine.vue'
import FieldProof from '~/components/sections/FieldProof.vue'
import HeadToHead from '~/components/sections/HeadToHead.vue'
import BusinessTraction from '~/components/sections/BusinessTraction.vue'
import FieldVoices from '~/components/sections/FieldVoices.vue'
import MarketScope from '~/components/sections/MarketScope.vue'
import GoToMarket from '~/components/sections/GoToMarket.vue'
import PartnerGrid from '~/components/sections/PartnerGrid.vue'
import UnitEconomics from '~/components/sections/UnitEconomics.vue'
import ImpactQuad from '~/components/sections/ImpactQuad.vue'
import OfficialEvidence from '~/components/sections/OfficialEvidence.vue'
import RoadmapAsk from '~/components/sections/RoadmapAsk.vue'
import BusinessCanvas from '~/components/sections/BusinessCanvas.vue'
import SwotMatrix from '~/components/sections/SwotMatrix.vue'
import ClosingCall from '~/components/sections/ClosingCall.vue'

const store = useDeckStore()

const registry: Record<string, Component> = {
  cover: CoverHero,
  problem: ProblemStory,
  alternatives: MarketAlternatives,
  system: SystemOverview,
  pods: PodsShowcase,
  tech: TechSquad,
  produksi: ProductionLine,
  loop: FirmwareLoop,
  brain: FloralBrain,
  mangsa: MangsaEngine,
  proof: FieldProof,
  versus: HeadToHead,
  business: BusinessTraction,
  suara: FieldVoices,
  market: MarketScope,
  jangkau: GoToMarket,
  mitra: PartnerGrid,
  economics: UnitEconomics,
  impact: ImpactQuad,
  evidence: OfficialEvidence,
  roadmap: RoadmapAsk,
  kanvas: BusinessCanvas,
  swot: SwotMatrix,
  closing: ClosingCall,
}

const current = computed(() => registry[SECTIONS[store.index]?.id ?? 'cover'] ?? CoverHero)

// The deck boots on a hash route (#/n) that only exists on the client,
// while SSR prerenders the first section. Render slide content only after
// mount so hydration matches and no component swaps mid-hydration.
const hydrated = ref(false)
onMounted(() => {
  hydrated.value = true
})

useHead({ title: 'Pitch Deck GrowMate' })
</script>

<template>
  <DeckStage>
    <Transition name="deck" mode="out-in">
      <component v-if="hydrated" :is="current" :key="store.index" :active="true" />
      <div v-else key="boot" class="grid flex-1 place-items-center">
        <img src="/logo.svg" alt="GrowMate" class="anim-float size-20 rounded-3xl object-cover" draggable="false" />
      </div>
    </Transition>
  </DeckStage>
</template>
