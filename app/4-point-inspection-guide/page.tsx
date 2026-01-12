import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    CheckCircle2,
    AlertTriangle,
    Phone,
    ArrowRight,
    Shield,
    Home,
    DollarSign,
    Zap,
    Droplets,
    Flame,
    Clock,
} from "lucide-react"
import { CTABand } from "@/components/sections"
import { siteConfig } from "@/config/site"
import {
    generateFAQSchema,
    generateBreadcrumbSchema,
    SchemaScripts,
    organizationSchema,
} from "@/lib/schema"

const baseUrl = `https://${siteConfig.domain}`

export const metadata: Metadata = {
    title: "Florida 4-Point Inspection Guide: Cost & Tips",
    description: "What is a 4-point inspection in Florida? Costs $75-$150. Required for homes 20+ years old. Learn what inspectors check and how to prepare.",
    alternates: {
        canonical: `${baseUrl}/4-point-inspection-guide`,
    },
    openGraph: {
        title: "Florida 4-Point Inspection Guide | Cost & Requirements",
        description:
            "Complete guide to Florida 4-point inspections. What they check, typical costs, and how to prepare for your inspection.",
        url: `${baseUrl}/4-point-inspection-guide`,
        siteName: siteConfig.name,
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Florida 4-Point Inspection Guide | Cost & Requirements",
        description:
            "Complete guide to Florida 4-point inspections. What they check, typical costs, and how to prepare.",
    },
}

const fourPoints = [
    {
        title: "Roof",
        icon: Home,
        description: "The most critical component. Inspectors evaluate the roof's age, material, condition, and remaining useful life.",
        whatTheyCheck: [
            "Roof covering material and installation method",
            "Age of roof (permit records or estimated)",
            "Signs of damage, wear, or leaks",
            "Flashing, gutters, and drainage",
            "Visible structural issues",
        ],
        redFlags: [
            "Roof over 20 years old (varies by material)",
            "Multiple layers of shingles",
            "Active leaks or water staining",
            "Missing or damaged shingles/tiles",
            "Sagging or structural concerns",
        ],
        color: "blue",
    },
    {
        title: "Electrical",
        icon: Zap,
        description: "Evaluates the safety and capacity of your electrical system, including the panel, wiring type, and overall condition.",
        whatTheyCheck: [
            "Panel type and amperage capacity",
            "Wiring type (copper, aluminum, knob-and-tube)",
            "Proper grounding and bonding",
            "Visible safety hazards",
            "Double-tapped breakers or other issues",
        ],
        redFlags: [
            "Federal Pacific or Zinsco panels",
            "Aluminum branch wiring (pre-1972)",
            "Knob-and-tube wiring",
            "Undersized service (60 amp or less)",
            "Fuses instead of breakers",
        ],
        color: "yellow",
    },
    {
        title: "Plumbing",
        icon: Droplets,
        description: "Reviews the plumbing supply and drain systems, water heater, and visible piping throughout the home.",
        whatTheyCheck: [
            "Supply pipe material (copper, PVC, PEX, galvanized, polybutylene)",
            "Drain pipe material and condition",
            "Water heater age and condition",
            "Visible leaks or water damage",
            "Shutoff valve functionality",
        ],
        redFlags: [
            "Polybutylene (gray plastic) pipes",
            "Galvanized steel pipes (corrosion risk)",
            "Water heater over 12-15 years old",
            "Active leaks or water stains",
            "Cast iron drain pipes with deterioration",
        ],
        color: "cyan",
    },
    {
        title: "HVAC",
        icon: Flame,
        description: "Inspects your heating and cooling system for age, condition, and proper operation.",
        whatTheyCheck: [
            "System age and type",
            "Heating and cooling capacity",
            "General condition and maintenance",
            "Ductwork condition (if visible)",
            "Safety controls and operation",
        ],
        redFlags: [
            "System over 15-20 years old",
            "Signs of improper maintenance",
            "Rust, corrosion, or deterioration",
            "Non-functional heating or cooling",
            "Missing or damaged components",
        ],
        color: "orange",
    },
]

const costBreakdown = [
    {
        service: "4-Point Inspection Only",
        priceRange: "$75 - $150",
        notes: "Standard standalone inspection",
    },
    {
        service: "Wind Mitigation Only",
        priceRange: "$75 - $125",
        notes: "For insurance premium discounts",
    },
    {
        service: "4-Point + Wind Mit Bundle",
        priceRange: "$150 - $200",
        notes: "Best value - saves $25-$50",
    },
    {
        service: "Full Home Inspection + 4-Point",
        priceRange: "$350 - $500+",
        notes: "4-point often included free with full inspection",
    },
]

const northFloridaPricing = [
    { area: "Lake City / Columbia County", fourPoint: "$75 - $125", windMit: "$75 - $100", bundle: "$125 - $175" },
    { area: "Jacksonville / Duval County", fourPoint: "$100 - $150", windMit: "$100 - $125", bundle: "$150 - $200" },
    { area: "Gainesville / Alachua County", fourPoint: "$100 - $150", windMit: "$85 - $125", bundle: "$150 - $200" },
    { area: "Live Oak / Suwannee County", fourPoint: "$75 - $125", windMit: "$75 - $100", bundle: "$125 - $175" },
    { area: "Fernandina / Nassau County", fourPoint: "$75 - $125", windMit: "$75 - $100", bundle: "$125 - $175" },
]

const preparationTips = [
    {
        title: "Ensure Access to All Areas",
        description: "The inspector needs access to your electrical panel, water heater, HVAC system, and attic. Clear paths to these areas.",
    },
    {
        title: "Gather Documentation",
        description: "Have receipts, permits, or invoices for any recent repairs or replacements to the roof, electrical, plumbing, or HVAC systems.",
    },
    {
        title: "Know Your Roof Age",
        description: "The roof is the most scrutinized item. Know when it was installed or last replaced. Permit records are the best documentation.",
    },
    {
        title: "Check for Obvious Issues",
        description: "Fix minor issues beforehand if possible: dripping faucets, exposed wiring, or HVAC filters. Some inspectors note maintenance items.",
    },
    {
        title: "Be Home During Inspection",
        description: "You can answer questions, provide documentation, and learn about any issues directly from the inspector.",
    },
]

const faqs = [
    {
        question: "What is a 4-point inspection in Florida?",
        answer: "A 4-point inspection is a limited evaluation of four major home systems: roof, electrical, plumbing, and HVAC. It's not a full home inspection—it's specifically designed for insurance underwriting to assess the condition and insurability of older homes. Insurance companies use it to evaluate risk before issuing or renewing a policy.",
    },
    {
        question: "How much does a 4-point inspection cost in Florida?",
        answer: "A 4-point inspection typically costs $75-$150 in Florida, with North Florida prices generally on the lower end ($75-$125). When bundled with a wind mitigation inspection, you can often get both for $150-$200, saving $25-$50 compared to booking them separately.",
    },
    {
        question: "When is a 4-point inspection required?",
        answer: "Most Florida insurance companies require a 4-point inspection for homes 20 years old or older (some use 25 or 30 years). It's typically required when: getting a new policy on an older home, switching insurance companies, or sometimes at renewal if your home has aged past the threshold.",
    },
    {
        question: "What's the difference between a 4-point and a full home inspection?",
        answer: "A 4-point inspection only evaluates four systems (roof, electrical, plumbing, HVAC) for insurance purposes. A full home inspection is much more comprehensive, covering structure, foundation, windows, doors, insulation, and more. Full inspections are typically done when buying a home; 4-point inspections are for insurance.",
    },
    {
        question: "How long is a 4-point inspection valid?",
        answer: "Most insurance companies accept a 4-point inspection for 1-5 years, but policies vary by carrier. Some accept them for new policies only, others for renewals too. If you make significant updates to any of the four systems, get a new inspection to document the improvements.",
    },
    {
        question: "What happens if my home fails a 4-point inspection?",
        answer: "A 4-point inspection doesn't technically 'pass' or 'fail'—it documents conditions. However, certain findings may make your home uninsurable with standard carriers: polybutylene pipes, Federal Pacific panels, roofs over a certain age, or major deficiencies. You may need to make repairs or seek coverage through Citizens or specialty markets.",
    },
    {
        question: "Should I get a 4-point and wind mitigation inspection together?",
        answer: "Yes—bundling saves money and time. Many inspectors offer package pricing ($150-$200 for both). The 4-point is required for insurability; the wind mitigation inspection can save you hundreds annually on your premium. Get both done at once.",
    },
    {
        question: "Can I do a 4-point inspection myself?",
        answer: "No. The inspection must be performed by a licensed professional—typically a licensed home inspector, general contractor, architect, or engineer. Insurance companies will not accept self-inspections or inspections from unlicensed individuals.",
    },
]

const relatedResources = [
    {
        title: "Wind Mitigation Guide",
        href: "/wind-mitigation-inspection-guide",
        description: "Save on your premium",
    },
    {
        title: "Homeowners Checklist",
        href: "/homeowners-coverage-checklist",
        description: "Review your coverage",
    },
    {
        title: "Homeowners Insurance",
        href: "/personal/homeowners-insurance-florida",
        description: "Florida coverage options",
    },
    {
        title: "Get a Quote",
        href: "/contact",
        description: "Free insurance review",
    },
]

export default function FourPointInspectionGuidePage() {
    const faqSchema = generateFAQSchema(faqs)

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "4-Point Inspection Guide", url: `${baseUrl}/4-point-inspection-guide` },
    ])

    return (
        <>
            <SchemaScripts schemas={[organizationSchema, faqSchema, breadcrumbSchema]} />

            {/* Breadcrumbs */}
            <nav className="bg-white border-b border-lewis-border" aria-label="Breadcrumb">
                <div className="container-lg py-3">
                    <ol className="flex items-center gap-2 text-sm">
                        <li>
                            <Link href="/" className="text-lewis-body hover:text-lewis-blue">
                                Home
                            </Link>
                        </li>
                        <li className="text-lewis-border">/</li>
                        <li className="text-lewis-blue font-medium">4-Point Inspection Guide</li>
                    </ol>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-gradient py-16 md:py-24">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <Badge className="mb-4 bg-blue-100 text-blue-800">
                            Insurance Requirement
                        </Badge>
                        <h1 className="text-lewis-ink mb-6">
                            Florida 4-Point Inspection Guide
                        </h1>

                        {/* Answer Box */}
                        <div className="bg-white rounded-xl shadow-sm border border-lewis-border p-6 text-left mb-8">
                            <div className="flex items-start gap-3">
                                <Shield className="h-6 w-6 text-lewis-blue flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-lg text-lewis-ink font-medium mb-2">
                                        What Is a 4-Point Inspection?
                                    </p>
                                    <p className="text-lewis-body">
                                        A 4-point inspection evaluates your home&apos;s roof, electrical, plumbing,
                                        and HVAC systems. Required by most Florida insurers for homes 20+ years old,
                                        it determines whether your home is insurable and at what terms. Cost: $75-$150.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Key Takeaways */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <DollarSign className="h-4 w-4 text-green-600" />
                                <span>Cost: $75-$150</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <Clock className="h-4 w-4 text-lewis-blue" />
                                <span>Takes 30-60 minutes</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <Home className="h-4 w-4 text-amber-600" />
                                <span>Required for homes 20+ years</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="btn-primary rounded-full">
                                <Link href="/contact">
                                    Get Insurance Quote
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="rounded-full">
                                <a href={`tel:${siteConfig.contact.phone.main.replace(/[^0-9]/g, "")}`}>
                                    <Phone className="mr-2 h-4 w-4" />
                                    {siteConfig.contact.phone.main}
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Four Points */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-10">
                            <Badge className="mb-3 bg-lewis-blue/10 text-lewis-blue">The Inspection</Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">
                                The 4 Systems Inspectors Evaluate
                            </h2>
                            <p className="text-lewis-body mt-2">
                                Each system is evaluated for age, condition, and potential issues that could affect insurability.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {fourPoints.map((point, index) => (
                                <Card key={index} className="overflow-hidden">
                                    <div className={`h-2 bg-${point.color}-500`} style={{ backgroundColor: point.color === 'blue' ? '#3b82f6' : point.color === 'yellow' ? '#eab308' : point.color === 'cyan' ? '#06b6d4' : '#f97316' }} />
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-lewis-blue/10 flex items-center justify-center">
                                                <point.icon className="h-5 w-5 text-lewis-blue" />
                                            </div>
                                            <div>
                                                <span className="text-xs font-medium text-lewis-blue">Point {index + 1}</span>
                                                <h3 className="font-semibold text-lewis-ink text-lg">{point.title}</h3>
                                            </div>
                                        </div>
                                        <p className="text-lewis-body text-sm mb-4">{point.description}</p>

                                        <div className="space-y-4">
                                            <div className="bg-gray-50 rounded-lg p-3">
                                                <p className="text-xs font-medium text-lewis-ink mb-2">What They Check:</p>
                                                <ul className="text-xs text-lewis-body space-y-1">
                                                    {point.whatTheyCheck.slice(0, 3).map((item, i) => (
                                                        <li key={i} className="flex items-start gap-1">
                                                            <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="bg-red-50 rounded-lg p-3">
                                                <p className="text-xs font-medium text-red-800 mb-2">Red Flags:</p>
                                                <ul className="text-xs text-red-700 space-y-1">
                                                    {point.redFlags.slice(0, 3).map((item, i) => (
                                                        <li key={i} className="flex items-start gap-1">
                                                            <AlertTriangle className="h-3 w-3 text-red-500 mt-0.5 flex-shrink-0" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Cost Section */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-3 bg-green-100 text-green-800">Pricing</Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">
                                How Much Does a 4-Point Inspection Cost?
                            </h2>
                            <p className="text-lewis-body mt-2">
                                Costs vary by location and provider. Bundling with wind mitigation saves money.
                            </p>
                        </div>

                        {/* General Pricing */}
                        <Card className="mb-8">
                            <CardContent className="p-0">
                                <table className="w-full">
                                    <thead className="bg-lewis-blue text-white">
                                        <tr>
                                            <th className="text-left p-4 text-sm font-semibold">Service</th>
                                            <th className="text-right p-4 text-sm font-semibold">Price Range</th>
                                            <th className="text-right p-4 text-sm font-semibold hidden sm:table-cell">Notes</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-lewis-border">
                                        {costBreakdown.map((item, index) => (
                                            <tr key={index} className={index === 2 ? "bg-green-50" : ""}>
                                                <td className="p-4 text-sm text-lewis-ink font-medium">{item.service}</td>
                                                <td className="p-4 text-sm text-right font-semibold text-lewis-blue">{item.priceRange}</td>
                                                <td className="p-4 text-sm text-right text-lewis-body hidden sm:table-cell">{item.notes}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </CardContent>
                        </Card>

                        {/* North Florida Pricing */}
                        <h3 className="text-lg font-semibold text-lewis-ink mb-4 text-center">
                            North Florida Inspection Costs (2025)
                        </h3>
                        <Card>
                            <CardContent className="p-0 overflow-x-auto">
                                <table className="w-full min-w-[500px]">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="text-left p-3 text-xs font-semibold text-lewis-ink">Area</th>
                                            <th className="text-center p-3 text-xs font-semibold text-lewis-ink">4-Point</th>
                                            <th className="text-center p-3 text-xs font-semibold text-lewis-ink">Wind Mit</th>
                                            <th className="text-center p-3 text-xs font-semibold text-green-700">Bundle</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-lewis-border">
                                        {northFloridaPricing.map((item, index) => (
                                            <tr key={index}>
                                                <td className="p-3 text-xs text-lewis-ink">{item.area}</td>
                                                <td className="p-3 text-xs text-center text-lewis-body">{item.fourPoint}</td>
                                                <td className="p-3 text-xs text-center text-lewis-body">{item.windMit}</td>
                                                <td className="p-3 text-xs text-center font-medium text-green-700">{item.bundle}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </CardContent>
                        </Card>
                        <p className="text-xs text-lewis-body text-center mt-3">
                            *Prices are estimates based on 2025 market rates and may vary by provider.
                        </p>
                    </div>
                </div>
            </section>

            {/* When Required */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-lewis-ink mb-6 text-center">
                            When Is a 4-Point Inspection Required?
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <Card className="border-green-200 bg-green-50">
                                <CardContent className="p-6">
                                    <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                                        <CheckCircle2 className="h-5 w-5" />
                                        Typically Required
                                    </h3>
                                    <ul className="space-y-2 text-green-700 text-sm">
                                        <li>• Homes 20+ years old (some carriers use 25-30)</li>
                                        <li>• Obtaining a new insurance policy</li>
                                        <li>• Switching insurance companies</li>
                                        <li>• Rental and investment properties</li>
                                        <li>• Sometimes at policy renewal</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card className="border-gray-200">
                                <CardContent className="p-6">
                                    <h3 className="font-semibold text-lewis-ink mb-3 flex items-center gap-2">
                                        <Home className="h-5 w-5 text-lewis-blue" />
                                        Usually Not Required
                                    </h3>
                                    <ul className="space-y-2 text-lewis-body text-sm">
                                        <li>• Homes less than 15-20 years old</li>
                                        <li>• New construction</li>
                                        <li>• Recently renovated homes (with documentation)</li>
                                        <li>• Condos (association handles building)</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>

                        <Card className="border-amber-200 bg-amber-50">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-lewis-ink mb-2">
                                            Important: Roof Age Matters Most
                                        </h3>
                                        <p className="text-lewis-body text-sm">
                                            The roof is the #1 factor in Florida insurability. Many carriers won&apos;t insure
                                            homes with roofs over 15-20 years old, regardless of condition. Some will
                                            issue policies but with actual cash value (depreciated) roof coverage instead
                                            of replacement cost. Know your roof&apos;s age before the inspection.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Preparation */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-3 bg-amber-100 text-amber-800">Preparation</Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">
                                How to Prepare for Your Inspection
                            </h2>
                        </div>
                        <div className="grid gap-4">
                            {preparationTips.map((tip, index) => (
                                <Card key={index}>
                                    <CardContent className="p-5">
                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                                                <span className="text-amber-700 font-bold text-sm">{index + 1}</span>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lewis-ink mb-1">
                                                    {tip.title}
                                                </h3>
                                                <p className="text-lewis-body text-sm">
                                                    {tip.description}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Bundle Recommendation */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <Card className="border-lewis-blue/20 bg-lewis-blue/5">
                            <CardContent className="p-8 text-center">
                                <DollarSign className="h-12 w-12 text-lewis-blue mx-auto mb-4" />
                                <h2 className="text-xl font-bold text-lewis-ink mb-3">
                                    Save Money: Bundle Your Inspections
                                </h2>
                                <p className="text-lewis-body mb-6">
                                    Getting a 4-point inspection? Add a wind mitigation inspection at the same time.
                                    You&apos;ll save $25-$50 on inspection costs, and the wind mitigation can save you
                                    hundreds annually on your insurance premium.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button asChild className="btn-primary rounded-full">
                                        <Link href="/wind-mitigation-inspection-guide">
                                            Learn About Wind Mitigation
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-lewis-ink text-center mb-8">
                            Frequently Asked Questions
                        </h2>
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`faq-${index}`}>
                                    <AccordionTrigger className="text-left text-lewis-ink hover:text-lewis-blue">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-lewis-body">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* Related Resources */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <h2 className="text-2xl font-bold text-lewis-ink text-center mb-8">
                        Related Resources
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {relatedResources.map((resource) => (
                            <Link key={resource.href} href={resource.href} className="group">
                                <Card className="h-full transition-shadow hover:shadow-md">
                                    <CardContent className="pt-6">
                                        <h3 className="font-semibold text-lewis-ink group-hover:text-lewis-blue transition-colors mb-2">
                                            {resource.title}
                                        </h3>
                                        <p className="text-sm text-lewis-body">{resource.description}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTABand />
        </>
    )
}
