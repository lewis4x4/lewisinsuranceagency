import Link from "next/link"
import { Calculator, ClipboardList, CloudRain, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CTABand } from "@/components/sections"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Insurance Tools & Calculators | Lewis Insurance",
    description: "Free insurance tools for Florida homeowners and drivers. Calculate coverage needs, create home inventory, and prepare for hurricane season.",
}

const tools = [
    {
        title: "Coverage Needs Calculator",
        description: "Calculate how much homeowners, auto, flood, and umbrella insurance you need based on your specific situation.",
        href: "/tools/coverage-calculator",
        icon: Calculator,
        features: [
            "Dwelling coverage recommendations",
            "Auto coverage analysis",
            "Liability assessment",
            "Flood insurance guidance",
            "Umbrella policy recommendations",
        ],
    },
    {
        title: "Home Inventory Checklist",
        description: "Create a detailed inventory of your belongings room-by-room. Essential for insurance claims and coverage decisions.",
        href: "/tools/home-inventory",
        icon: ClipboardList,
        features: [
            "Room-by-room organization",
            "Track values and serial numbers",
            "Running totals",
            "Download and print",
            "Cloud-safe storage tips",
        ],
    },
    {
        title: "Hurricane Prep Checklist",
        description: "Interactive checklist to prepare for hurricane season. Covers insurance, documents, home protection, and supplies.",
        href: "/tools/hurricane-prep",
        icon: CloudRain,
        features: [
            "Insurance preparation steps",
            "Document checklist",
            "Home protection tips",
            "Supply recommendations",
            "Progress tracking",
        ],
    },
]

export default function ToolsPage() {
    return (
        <>
            {/* Hero */}
            <section className="hero-gradient py-16 md:py-20">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-lewis-ink mb-4">Insurance Tools & Calculators</h1>
                        <p className="text-xl text-lewis-body">
                            Free tools to help you understand your coverage needs, document your belongings,
                            and prepare for Florida&apos;s unique risks.
                        </p>
                    </div>
                </div>
            </section>

            {/* Tools Grid */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {tools.map((tool) => {
                            const Icon = tool.icon
                            return (
                                <Card key={tool.href} className="h-full flex flex-col">
                                    <CardHeader>
                                        <div className="w-14 h-14 rounded-2xl bg-lewis-blue/10 flex items-center justify-center mb-4">
                                            <Icon className="h-7 w-7 text-lewis-blue" />
                                        </div>
                                        <CardTitle className="text-xl">{tool.title}</CardTitle>
                                        <p className="text-lewis-body">{tool.description}</p>
                                    </CardHeader>
                                    <CardContent className="flex-1 flex flex-col">
                                        <ul className="space-y-2 mb-6 flex-1">
                                            {tool.features.map((feature) => (
                                                <li key={feature} className="flex items-start gap-2 text-sm text-lewis-body">
                                                    <span className="text-lewis-blue mt-1">•</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <Button asChild className="w-full btn-primary rounded-full">
                                            <Link href={tool.href}>
                                                Use Tool
                                                <ArrowRight className="h-4 w-4 ml-2" />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-lewis-ink mb-4">Why Use These Tools?</h2>
                        <p className="text-lewis-body mb-8">
                            Understanding your insurance needs starts with knowing what you have and what risks you face.
                            These free tools help you make informed decisions about your coverage.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                            <div className="bg-white p-6 rounded-xl">
                                <h3 className="font-semibold text-lewis-ink mb-2">Avoid Gaps</h3>
                                <p className="text-sm text-lewis-body">
                                    Calculate proper coverage limits so you&apos;re not underinsured when you need protection most.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl">
                                <h3 className="font-semibold text-lewis-ink mb-2">Speed Up Claims</h3>
                                <p className="text-sm text-lewis-body">
                                    A detailed home inventory makes filing claims faster and helps ensure you receive full compensation.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl">
                                <h3 className="font-semibold text-lewis-ink mb-2">Be Prepared</h3>
                                <p className="text-sm text-lewis-body">
                                    Hurricane prep isn&apos;t just about supplies—it&apos;s about having your insurance in order before the storm.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTABand />
        </>
    ),
    alternates: {
        canonical: `https://lewisinsurance.com/tools`,
    },
}
