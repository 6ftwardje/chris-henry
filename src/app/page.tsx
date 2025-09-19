import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/HeroSection"
import { SocialProofSection } from "@/components/SocialProofSection"
import { ProblemProcessProofSection } from "@/components/ProblemProcessProofSection"
import { ProductOfferSection } from "@/components/ProductOfferSection"
import { LeadCaptureSection } from "@/components/LeadCaptureSection"
import { AboutChrisSection } from "@/components/AboutChrisSection"
import { FAQSection } from "@/components/FAQSection"
import { FinalCTASection } from "@/components/FinalCTASection"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SocialProofSection />
      <ProblemProcessProofSection />
      <ProductOfferSection />
      <LeadCaptureSection />
      <AboutChrisSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}