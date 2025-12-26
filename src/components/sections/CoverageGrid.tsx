import Link from "next/link"
import {
    Home,
    Car,
    Droplets,
    Building2,
    Umbrella,
    Shield,
    Truck,
    Users,
    Laptop,
    Scale,
    ArrowRight,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const personalCoverage = [
    {
        title: "Homeowners Insurance",
        description: "Protect your Florida home from hurricanes, theft, and more.",
        icon: Home,
        href: "/personal/homeowners-insurance-florida",
    },
    {
        title: "Auto Insurance",
        description: "Required Florida coverage plus comprehensive protection.",
        icon: Car,
        href: "/personal/auto-insurance-florida",
    },
    {
        title: "Flood Insurance",
        description: "Essential coverage for Florida's flood-prone areas.",
        icon: Droplets,
        href: "/personal/flood-insurance-florida",
    },
    {
        title: "Condo Insurance",
        description: "Coverage designed for Florida condo owners.",
        icon: Building2,
        href: "/personal/condo-insurance-florida",
    },
    {
        title: "Renters Insurance",
        description: "Affordable protection for your belongings.",
        icon: Shield,
        href: "/personal/renters-insurance-florida",
    },
    {
        title: "Umbrella Insurance",
        description: "Extra liability protection beyond your other policies.",
        icon: Umbrella,
        href: "/personal/umbrella-insurance-florida",
    },
]

const businessCoverage = [
    {
        title: "General Liability",
        description: "Protect your business from third-party claims.",
        icon: Shield,
        href: "/business/general-liability-florida",
    },
    {
        title: "Workers Compensation",
        description: "Required coverage for Florida employers.",
        icon: Users,
        href: "/business/workers-compensation-florida",
    },
    {
        title: "Commercial Auto",
        description: "Coverage for your business vehicles.",
        icon: Truck,
        href: "/business/commercial-auto-florida",
    },
    {
        title: "Business Owners Policy",
        description: "Bundled coverage for small businesses.",
        icon: Building2,
        href: "/business/business-owners-policy-florida",
    },
    {
        title: "Professional Liability",
        description: "E&O coverage for professional services.",
        icon: Scale,
        href: "/business/professional-liability-eo-florida",
    },
    {
        title: "Cyber Liability",
        description: "Protection against data breaches and cyber attacks.",
        icon: Laptop,
        href: "/business/cyber-liability-florida",
    },
]

interface CoverageGridProps {
    variant?: "personal" | "business" | "all"
    limit?: number
    className?: string
}

export function CoverageGrid({ variant = "all", limit, className }: CoverageGridProps) {
    let items = variant === "personal" ? personalCoverage : variant === "business" ? businessCoverage : [...personalCoverage, ...businessCoverage]

    if (limit) {
        items = items.slice(0, limit)
    }

    return (
        <section className={cn("section-wrapper", className)}>
            <div className="container-lg">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-lewis-ink mb-4">
                        {variant === "personal" ? "Personal Insurance" : variant === "business" ? "Business Insurance" : "Our Coverage Options"}
                    </h2>
                    <p className="text-lg text-lewis-body">
                        {variant === "all"
                            ? "We offer a full range of insurance products to protect what matters most to you."
                            : variant === "personal"
                                ? "Protect your family and assets with comprehensive personal insurance."
                                : "Protect your business with the right commercial insurance coverage."}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item) => {
                        const Icon = item.icon
                        return (
                            <Link key={item.href} href={item.href}>
                                <Card className="h-full card-hover group cursor-pointer">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-lewis-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-lewis-blue transition-colors">
                                                <Icon className="h-6 w-6 text-lewis-blue group-hover:text-white transition-colors" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold text-lewis-ink mb-2 group-hover:text-lewis-blue transition-colors">
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm text-lewis-body">{item.description}</p>
                                            </div>
                                            <ArrowRight className="h-5 w-5 text-gray-300 group-hover:text-lewis-blue transition-colors flex-shrink-0 mt-1" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        )
                    })}
                </div>

                {variant === "all" && (
                    <div className="text-center mt-10">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 text-lewis-blue font-medium hover:underline"
                        >
                            Not sure what you need? Let us help
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    )
}
