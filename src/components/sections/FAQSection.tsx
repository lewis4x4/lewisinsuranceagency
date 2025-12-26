"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { CanopyConnectButton } from "@/components/canopy"

const faqs = [
    {
        question: "What does it mean that you're an independent agent?",
        answer:
            "As an independent insurance agency, we represent multiple insurance carriers rather than just one company. This means we can shop around and compare policies from different insurers to find you the best coverage and rates. Unlike captive agents who can only sell products from their employer, we work for you—not the insurance company.",
    },
    {
        question: "Do I need flood insurance in Florida?",
        answer:
            "While flood insurance isn't legally required for most homeowners, it's highly recommended in Florida. Standard homeowners policies don't cover flood damage, and Florida is one of the most flood-prone states in the country. Even if you're not in a designated flood zone, about 25% of flood claims come from low-to-moderate risk areas. We can help you understand your risk and find affordable flood coverage.",
    },
    {
        question: "How long does it take to get a quote?",
        answer:
            "Most quotes can be provided within 24 hours, and often much faster for straightforward policies. After you submit your information, one of our licensed agents will review your needs, shop multiple carriers, and present you with your best options. For more complex commercial policies, it may take a few days to gather all the necessary information.",
    },
    {
        question: "What if I need to file a claim?",
        answer:
            "When you need to file a claim, contact us and we'll help guide you through the process. We act as your advocate with the insurance company, helping ensure your claim is handled fairly and efficiently. You can also file directly with your carrier, but we're always here to help if you have questions or concerns.",
    },
    {
        question: "Can you bundle my home and auto insurance?",
        answer:
            "Yes! Bundling your home and auto insurance is one of the best ways to save money. Many carriers offer significant discounts for combining policies—often 10-25% off your premiums. We'll compare bundled options from multiple carriers to find you the best combination of coverage and savings.",
    },
    {
        question: "What's the difference between homeowners insurance and flood insurance?",
        answer:
            "Homeowners insurance covers your home and belongings from many risks like fire, theft, and wind damage (including hurricanes). However, it specifically excludes flood damage. Flood insurance is a separate policy that covers water damage from flooding—rising water from storms, overflowing rivers, or storm surge. In Florida, most homeowners should have both policies for complete protection.",
    },
    {
        question: "Can I import my existing insurance information?",
        answer:
            "Yes! We use Canopy Connect to securely import your existing policy information. This helps us provide more accurate quotes and ensures we find coverage that truly meets your needs. Your data is encrypted and only shared with your permission.",
        hasCanopyButton: true,
    },
]

interface FAQSectionProps {
    className?: string
    items?: typeof faqs
}

export function FAQSection({ className, items = faqs }: FAQSectionProps) {
    return (
        <section className={`section-wrapper bg-lewis-page ${className || ""}`}>
            <div className="container-lg">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-lewis-ink mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg text-lewis-body">
                        Get answers to common questions about insurance in Florida.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-4">
                        {items.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-white rounded-lg shadow-sm border border-lewis-border px-6"
                            >
                                <AccordionTrigger className="text-left text-lewis-ink font-medium py-4 hover:no-underline hover:text-lewis-blue">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-lewis-body pb-4">
                                    <p>{faq.answer}</p>
                                    {'hasCanopyButton' in faq && faq.hasCanopyButton && (
                                        <div className="mt-4">
                                            <CanopyConnectButton variant="outline" size="sm" />
                                        </div>
                                    )}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
