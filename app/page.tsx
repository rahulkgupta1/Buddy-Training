'use client'

import HeroSection from '@/components/HeroSection'
import BenefitsSection from '@/components/BenefitsSection'
import ProgramOverview from '@/components/ProgramOverview'
import WhoIsThisFor from '@/components/WhoIsThisFor'
import HowItWorks from '@/components/HowItWorks'
import PricingSection from '@/components/PricingSection'
import SocialProof from '@/components/SocialProof'
import FAQSection from '@/components/FAQSection'
import FinalCTA from '@/components/FinalCTA'
import StickyCTA from '@/components/StickyCTA'

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden pb-16">
      <HeroSection />
      <BenefitsSection />
      <ProgramOverview />
      <WhoIsThisFor />
      <HowItWorks />
      <PricingSection />
      <SocialProof />
      <FAQSection />
      <FinalCTA />
      <StickyCTA />
    </main>
  )
}
