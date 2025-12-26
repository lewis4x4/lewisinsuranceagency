import Link from "next/link"
import { CheckCircle, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { siteConfig } from "@/config/site"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Thank You",
    description: "Thank you for your inquiry. We'll be in touch soon!",
    robots: {
        index: false,
        follow: false,
    },
}

export default function ThankYouPage() {
    return (
        <section className="hero-gradient min-h-[80vh] flex items-center">
            <div className="container-lg py-16">
                <Card className="max-w-2xl mx-auto shadow-xl">
                    <CardContent className="p-8 md:p-12 text-center">
                        {/* Success Icon */}
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                            <CheckCircle className="h-12 w-12 text-green-600" />
                        </div>

                        {/* Heading */}
                        <h1 className="text-3xl md:text-4xl font-bold text-lewis-ink mb-4">
                            Thank You!
                        </h1>

                        <p className="text-lg text-lewis-body mb-8 max-w-md mx-auto">
                            We've received your inquiry and a member of our team will be in touch within 24 hours.
                        </p>

                        {/* What to Expect */}
                        <div className="bg-lewis-page rounded-xl p-6 mb-8 text-left">
                            <h2 className="font-semibold text-lewis-ink mb-4">What happens next?</h2>
                            <ol className="space-y-3 text-sm text-lewis-body">
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-lewis-blue text-white text-xs flex items-center justify-center font-medium">
                                        1
                                    </span>
                                    <span>
                                        One of our licensed agents will review your information and prepare personalized quotes.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-lewis-blue text-white text-xs flex items-center justify-center font-medium">
                                        2
                                    </span>
                                    <span>
                                        We'll reach out via phone or email to discuss your coverage options.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-lewis-blue text-white text-xs flex items-center justify-center font-medium">
                                        3
                                    </span>
                                    <span>
                                        You'll review and choose the policy that's right for you—no pressure, no obligation.
                                    </span>
                                </li>
                            </ol>
                        </div>

                        {/* Need Immediate Help */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                            <p className="text-sm text-lewis-body">Need immediate assistance?</p>
                            <a
                                href={`tel:${siteConfig.contact.phone.main.replace(/[^0-9]/g, "")}`}
                                className="inline-flex items-center gap-2 text-lewis-blue font-medium hover:underline"
                            >
                                <Phone className="h-4 w-4" />
                                {siteConfig.contact.phone.main}
                            </a>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button asChild variant="outline" className="rounded-full">
                                <Link href="/">
                                    Return to Home
                                </Link>
                            </Button>
                            <Button asChild className="btn-primary rounded-full">
                                <Link href="/resources">
                                    Explore Resources
                                    <ArrowRight className="h-4 w-4 ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Conversion Tracking Script Placeholder */}
                {/* 
          Add your conversion tracking scripts here.
          Example: Google Ads, Facebook Pixel, etc.
          
          <Script id="conversion-tracking">
            {`
              gtag('event', 'conversion', {
                'send_to': 'AW-XXXXXXXXX/XXXXXXXXXXXXX',
              });
            `}
          </Script>
        */}
            </div>
        </section>
    )
}
