import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/HeroSection"
import { SocialProofSection } from "@/components/SocialProofSection"
import { ProblemProcessProofSection } from "@/components/ProblemProcessProofSection"
import { LeadCaptureSection } from "@/components/LeadCaptureSection"
import { AboutChrisSection } from "@/components/AboutChrisSection"
import { FAQSection } from "@/components/FAQSection"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutChrisSection />
      <ProblemProcessProofSection />
      <SocialProofSection />
      <LeadCaptureSection />
      <FAQSection />
      <Footer />
    </main>
  )
}