import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { Header, Footer, MobileCTA } from "@/components/layout"
import { Toaster } from "@/components/ui/sonner"
import { siteConfig } from "@/config/site"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.defaultDescription,
  keywords: [
    "Florida insurance",
    "homeowners insurance Florida",
    "auto insurance Florida",
    "flood insurance Florida",
    "business insurance Florida",
    "independent insurance agent",
    "Lewis Insurance",
    ...siteConfig.serviceAreas.map(city => `insurance ${city} FL`),
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `https://${siteConfig.domain}`,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

// JSON-LD Structured Data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: siteConfig.name,
  description: siteConfig.seo.defaultDescription,
  url: `https://${siteConfig.domain}`,
  telephone: siteConfig.contact.phone.main,
  email: siteConfig.contact.email.info,
  areaServed: siteConfig.serviceAreas.map(city => ({
    "@type": "City",
    name: city,
    containedInPlace: {
      "@type": "State",
      name: "Florida",
    },
  })),
  sameAs: [
    siteConfig.social.facebook,
    siteConfig.social.linkedin,
    siteConfig.social.google,
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* GTM Container Placeholder */}
        {/* 
        <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-XXXXXXX"></script>
        */}
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCTA />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
