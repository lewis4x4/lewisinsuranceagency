import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { Header, Footer, MobileCTA } from "@/components/layout"
import { LiveChatWidget } from "@/components/sections"
import { Toaster } from "@/components/ui/sonner"
import { siteConfig } from "@/config/site"
import { organizationSchema } from "@/lib/schema"
import { GoogleTagManagerScript, GoogleTagManagerNoScript, PhoneClickTracker } from "@/components/analytics"

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
    images: [
      {
        url: "https://lewisinsurance.com/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Lewis Insurance — Florida insurance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: ["https://lewisinsurance.com/images/og-default.png"],
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
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

        {/* Google Tag Manager (only when NEXT_PUBLIC_GTM_ID is set) */}
        <GoogleTagManagerScript />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <GoogleTagManagerNoScript />
        <PhoneClickTracker />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCTA />
        <LiveChatWidget />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
