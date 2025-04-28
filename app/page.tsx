import Link from "next/link"

import { SiteHeader } from "@/components/landing-page/1-site-header"
import { HeroSection } from "@/components/landing-page/2-hero-section"
import { TrainingOptionsSection } from "@/components/landing-page/3-training-options"
import { AppFeatureSection } from "@/components/landing-page/4-app-feature"
import { TestimonialsSection } from "@/components/landing-page/5-testimonials"
import { CallToActionSection } from "@/components/landing-page/6-call-to-action"
import { SiteFooter } from "@/components/landing-page/7-site-footer"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col dark">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <TrainingOptionsSection />
        <AppFeatureSection />
        <TestimonialsSection />
        <CallToActionSection />
      </main>
      <SiteFooter />
    </div>
  )
}