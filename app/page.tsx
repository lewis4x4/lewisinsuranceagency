import type { Metadata } from "next"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { HeroForm } from "@/components/forms"
import { CanopyConnectButton } from "@/components/canopy"
import {
  CoverageSelector,
  TrustBar,
  CoverageGrid,
  WhyLewis,
  Testimonials,
  MeetTheTeam,
  FAQSection,
  CTABand,
} from "@/components/sections"
import { Check, Shield, MapPin, Clock } from "lucide-react"
import { websiteSchema } from "@/lib/schema"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Florida Insurance Made Simple | Lewis Insurance",
  description:
    "Compare home, auto, flood, and business insurance quotes from multiple Florida carriers. Independent agency with 44+ years of local expertise. Free quotes in minutes.",
  alternates: {
    canonical: `https://${siteConfig.domain}`,
  },
  openGraph: {
    title: "Florida Insurance Made Simple | Lewis Insurance",
    description:
      "Compare home, auto, flood, and business insurance quotes from multiple Florida carriers. Independent agency with 44+ years of local expertise.",
    url: `https://${siteConfig.domain}`,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Florida Insurance Made Simple | Lewis Insurance",
    description:
      "Compare home, auto, flood, and business insurance quotes from multiple Florida carriers.",
  },
}

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Schema Markup for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="container-lg py-12 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content & Form */}
            <div className="space-y-8">
              {/* Trust Badge */}
              <Badge className="bg-green-50 text-green-700 border-green-200 px-4 py-1.5">
                <Shield className="h-4 w-4 mr-2" />
                Licensed Florida Insurance Agency
              </Badge>

              {/* Headline */}
              <div className="space-y-4">
                <h1 className="text-balance">
                  Florida Insurance Made{" "}
                  <span className="text-lewis-blue">Simple</span>
                </h1>
                <p className="text-xl text-lewis-body max-w-lg">
                  Compare quotes from multiple carriers in minutes. Local expertise,
                  personalized service, competitive rates.
                </p>
              </div>

              {/* Quick Benefits */}
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 text-lewis-body">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Free quotes</span>
                </div>
                <div className="flex items-center gap-2 text-lewis-body">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Multiple carriers</span>
                </div>
                <div className="flex items-center gap-2 text-lewis-body">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Local service</span>
                </div>
              </div>

              {/* Hero Form */}
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-md relative">
                <div className="absolute -top-3 left-6">
                  <Badge className="bg-lewis-orange text-white border-lewis-orange shadow-md">
                    Get Your Free Quote
                  </Badge>
                </div>

                {/* Canopy Connect - Prominent CTA at Top */}
                <div className="mb-6 pt-2">
                  <CanopyConnectButton
                    variant="default"
                    size="lg"
                    className="w-full rounded-xl bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-bold text-base py-4 shadow-lg hover:shadow-xl transition-all"
                  >
                    Already Have Coverage? Import Your Policy
                  </CanopyConnectButton>
                  <p className="text-xs text-center text-lewis-body mt-2">
                    Instantly import your current policy for faster quotes
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-3 text-lewis-body font-medium">Or get a new quote</span>
                  </div>
                </div>

                <HeroForm source="homepage-hero" className="pt-4" />
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="hidden lg:block relative">
              <div className="relative">
                {/* Main Image Card */}
                <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] relative">
                  <Image
                    src="/images/lewis-office-hero.jpg"
                    alt="Lewis Insurance Agency Office in Lake City, Florida"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating Trust Chip */}
                <div className="absolute -bottom-4 -left-4 trust-badge shadow-lg">
                  <Clock className="h-4 w-4 text-lewis-orange" />
                  <span>Fast help</span>
                  <span className="text-lewis-border">•</span>
                  <MapPin className="h-4 w-4 text-lewis-blue" />
                  <span>Florida experts</span>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-lewis-orange/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-lewis-blue/20 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Coverage Selector */}
        <div className="container-lg pb-8">
          <div className="flex justify-center">
            <CoverageSelector />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Coverage Options */}
      <CoverageGrid variant="all" limit={6} />

      {/* Why Lewis Insurance */}
      <WhyLewis />

      {/* Testimonials */}
      <Testimonials />

      {/* Meet the Team */}
      <MeetTheTeam />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Band */}
      <CTABand />
    </>
  )
}
