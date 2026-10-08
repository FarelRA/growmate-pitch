<script setup lang="ts">
import { useDeckStore } from '~/stores/deck'
import { SECTIONS } from '~/data/deck'
import CoverHero from '~/components/sections/CoverHero.vue'
import ProblemSolution from '~/components/sections/ProblemSolution.vue'
import UniqueSelling from '~/components/sections/UniqueSelling.vue'
import PodsBedah from '~/components/sections/PodsBedah.vue'
import TechBedah from '~/components/sections/TechBedah.vue'
import AddonBedah from '~/components/sections/AddonBedah.vue'
import ProductionLine from '~/components/sections/ProductionLine.vue'
import ProductEvolution from '~/components/sections/ProductEvolution.vue'
import MarketScope from '~/components/sections/MarketScope.vue'
import StpBrief from '~/components/sections/StpBrief.vue'
import CompetitorDuel from '~/components/sections/CompetitorDuel.vue'
import GoToMarket from '~/components/sections/GoToMarket.vue'
import SiteShowcase from '~/components/sections/SiteShowcase.vue'
import AplikasiFitur from '~/components/sections/AplikasiFitur.vue'
import SocialImpact from '~/components/sections/SocialImpact.vue'
import ImpactQuad from '~/components/sections/ImpactQuad.vue'
import BusinessTraction from '~/components/sections/BusinessTraction.vue'
import FieldProof from '~/components/sections/FieldProof.vue'
import BusinessCanvas from '~/components/sections/BusinessCanvas.vue'
import SwotMatrix from '~/components/sections/SwotMatrix.vue'
import SipocMap from '~/components/sections/SipocMap.vue'
import OfficialEvidence from '~/components/sections/OfficialEvidence.vue'
import DocGallery from '~/components/sections/DocGallery.vue'
import FieldVoices from '~/components/sections/FieldVoices.vue'
import RoadmapAsk from '~/components/sections/RoadmapAsk.vue'
import ClosingCall from '~/components/sections/ClosingCall.vue'

const store = useDeckStore()

const registry: Record<string, Component> = {
  cover: CoverHero,
  latar: ProblemSolution,
  usp: UniqueSelling,
  pods: PodsBedah,
  tech: TechBedah,
  addon: AddonBedah,
  proses: ProductionLine,
  kembang: ProductEvolution,
  tamsamsom: MarketScope,
  stp: StpBrief,
  kompetitor: CompetitorDuel,
  pemasaran: GoToMarket,
  situs: SiteShowcase,
  aplikasi: AplikasiFitur,
  sosial: SocialImpact,
  quad: ImpactQuad,
  keuangan: BusinessTraction,
  efektivitas: FieldProof,
  bmc: BusinessCanvas,
  swot: SwotMatrix,
  sipoc: SipocMap,
  legalitas: OfficialEvidence,
  dokumentasi: DocGallery,
  testimoni: FieldVoices,
  scaleup: RoadmapAsk,
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
