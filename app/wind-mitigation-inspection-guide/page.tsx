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
    ClipboardCheck,
    Wind,
    Hammer,
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
    title: "Florida Wind Mitigation Inspection Guide | Lewis Insurance",
    description: "Learn how a Florida wind mitigation inspection can save you hundreds on homeowners insurance. What inspectors check, costs, and how to prepare.",
    alternates: {
        canonical: `${baseUrl}/wind-mitigation-inspection-guide`,
    },
    openGraph: {
        title: "Florida Wind Mitigation Inspection Guide | Lewis Insurance",
        description:
            "Save up to 45% on Florida homeowners insurance with a wind mitigation inspection. Complete guide to the process and savings.",
        url: `${baseUrl}/wind-mitigation-inspection-guide`,
        siteName: siteConfig.name,
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Florida Wind Mitigation Inspection Guide | Lewis Insurance",
        description:
            "Save up to 45% on Florida homeowners insurance with a wind mitigation inspection. Complete guide to the process and savings.",
    },
}

const inspectionCategories = [
    {
        title: "Roof Covering",
        description: "The type and age of your roof covering. FBC (Florida Building Code) compliant roofs installed after 2002 receive the best credits.",
        whatTheyCheck: [
            "Roof material type (shingle, tile, metal)",
            "Installation date and permit records",
            "FBC compliance status",
            "Condition and remaining useful life",
        ],
        bestCredit: "FBC-compliant roof installed after March 1, 2002",
        icon: Home,
    },
    {
        title: "Roof Deck Attachment",
        description: "How your roof decking (plywood/OSB) is attached to the trusses or rafters. Stronger fastening = better wind resistance.",
        whatTheyCheck: [
            "Nail size and spacing pattern",
            "Type of fastener (staples vs nails)",
            "Spacing between nails (6\" vs 12\")",
            "Presence of ring-shank nails",
        ],
        bestCredit: "8d nails at 6\" spacing on edges and in field",
        icon: Hammer,
    },
    {
        title: "Roof-to-Wall Connection",
        description: "How your roof structure connects to the walls. Hurricane straps/clips provide much stronger connections than toe-nails alone.",
        whatTheyCheck: [
            "Toe-nails only (weakest)",
            "Clips (single-wrap metal connectors)",
            "Single wraps (straps wrapping around truss)",
            "Double wraps (straps on both sides)",
        ],
        bestCredit: "Double wraps on every truss/rafter connection",
        icon: Shield,
    },
    {
        title: "Roof Geometry",
        description: "The shape of your roof. Hip roofs (sloped on all four sides) perform better in high winds than gable roofs.",
        whatTheyCheck: [
            "Hip roof (all sides slope down)",
            "Gable roof (two sloped sides, two flat ends)",
            "Flat roof",
            "Combination designs",
        ],
        bestCredit: "Hip roof with no gable ends, or gables ≤10% of perimeter",
        icon: Home,
    },
    {
        title: "Secondary Water Resistance (SWR)",
        description: "A barrier that prevents water intrusion if shingles blow off. This is a major credit category.",
        whatTheyCheck: [
            "Self-adhering modified bitumen tape at seams",
            "Foam adhesive applied to deck",
            "Peel-and-stick underlayment (full coverage)",
            "No SWR present",
        ],
        bestCredit: "SWR applied to entire roof deck",
        icon: Shield,
    },
    {
        title: "Opening Protection",
        description: "Protection for windows, doors, skylights, and garage doors against wind-borne debris. This is often the biggest discount category.",
        whatTheyCheck: [
            "Impact-rated windows and doors",
            "Hurricane shutters (rated for wind zone)",
            "Plywood (limited or no credit)",
            "Garage door rating (important for large openings)",
        ],
        bestCredit: "All openings protected with rated shutters or impact glass",
        icon: Wind,
    },
    {
        title: "Wall Construction Type",
        description: "The structural material of your exterior walls. Concrete block (CBS) and reinforced masonry provide better wind resistance.",
        whatTheyCheck: [
            "Concrete block (CBS)",
            "Reinforced masonry",
            "Frame construction",
            "Other materials",
        ],
        bestCredit: "Reinforced concrete block or masonry construction",
        icon: Home,
    },
]

const savingsExamples = [
    {
        feature: "Hip roof (vs gable)",
        typicalSavings: "3-8%",
    },
    {
        feature: "Hurricane straps/clips",
        typicalSavings: "5-15%",
    },
    {
        feature: "Opening protection (all windows/doors)",
        typicalSavings: "15-45%",
    },
    {
        feature: "Secondary water resistance",
        typicalSavings: "5-10%",
    },
    {
        feature: "FBC-compliant roof",
        typicalSavings: "5-15%",
    },
    {
        feature: "Reinforced roof deck attachment",
        typicalSavings: "3-8%",
    },
]

const preparationTips = [
    {
        title: "Gather Documentation",
        description: "Have permits, invoices, and receipts for roof installation, hurricane shutters, impact windows, or other upgrades. These help verify installation dates and compliance.",
    },
    {
        title: "Provide Attic Access",
        description: "The inspector needs to access your attic to examine roof-to-wall connections and roof deck attachment. Clear a path to attic access points.",
    },
    {
        title: "Note All Openings",
        description: "Know where all your windows, doors, skylights, and garage doors are. Make sure shutters or impact ratings are visible or documented.",
    },
    {
        title: "Locate Permit Records",
        description: "If you have building permits for roof replacement or window installation, have them ready. This proves FBC compliance and installation dates.",
    },
    {
        title: "Be Home During Inspection",
        description: "Plan to be present so you can answer questions, provide access to all areas, and learn about your home's wind resistance features.",
    },
]

const faqs = [
    {
        question: "How much does a wind mitigation inspection cost in Florida?",
        answer: "A wind mitigation inspection typically costs $75-$150 in Florida, depending on your location and the inspector. Many inspectors offer discounts when combined with a 4-point inspection. The inspection usually pays for itself within the first year through premium savings—often many times over.",
    },
    {
        question: "How much can I save with a wind mitigation inspection?",
        answer: "Savings vary widely based on your home's features. Homes with all opening protection (impact windows/shutters), hurricane straps, hip roofs, and secondary water resistance can save 20-45% on the wind portion of their premium. Even homes with just a few features can save hundreds annually.",
    },
    {
        question: "How long is a wind mitigation inspection valid?",
        answer: "Wind mitigation inspections are valid for 5 years in Florida, unless you make improvements to your home. If you add hurricane shutters, replace your roof, or make other wind-resistant upgrades, get a new inspection to capture the additional credits.",
    },
    {
        question: "What's the difference between a wind mitigation and a 4-point inspection?",
        answer: "A 4-point inspection evaluates your roof, electrical, plumbing, and HVAC for insurability—it's often required for older homes. A wind mitigation inspection specifically documents hurricane-resistant features to qualify for insurance discounts. They serve different purposes and are often done together.",
    },
    {
        question: "Do all Florida insurance companies accept wind mitigation inspections?",
        answer: "Yes. Florida law requires all residential property insurers to provide wind mitigation discounts. The OIR-B1-1802 form is the standard form used by all carriers. Make sure your inspector uses this official form.",
    },
    {
        question: "Can I do a wind mitigation inspection myself?",
        answer: "No. Wind mitigation inspections must be performed by a licensed inspector—typically a licensed home inspector, general contractor, architect, engineer, or building code inspector. Insurance companies will not accept self-inspections.",
    },
    {
        question: "What if my home doesn't have any wind mitigation features?",
        answer: "You may not qualify for discounts currently, but the inspection identifies opportunities for improvement. Adding hurricane straps, impact windows, or a new roof can qualify you for significant savings. We can help you understand which upgrades provide the best return on investment.",
    },
    {
        question: "Do condos need wind mitigation inspections?",
        answer: "For condos, wind mitigation typically applies to the building, not individual units. Your condo association's master policy should have wind mitigation credits based on the building's features. Your HO-6 policy covers your unit's contents and interior, which aren't affected by wind mitigation.",
    },
]

const relatedResources = [
    {
        title: "Homeowners Checklist",
        href: "/homeowners-coverage-checklist",
        description: "Review your coverage",
    },
    {
        title: "Hurricane Prep",
        href: "/hurricane-preparation-checklist",
        description: "Storm preparation guide",
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

export default function WindMitigationInspectionGuidePage() {
    const faqSchema = generateFAQSchema(faqs)

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Wind Mitigation Inspection Guide", url: `${baseUrl}/wind-mitigation-inspection-guide` },
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
                        <li className="text-lewis-blue font-medium">Wind Mitigation Inspection Guide</li>
                    </ol>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-gradient py-16 md:py-24">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <Badge className="mb-4 bg-green-100 text-green-800">
                            Save on Insurance
                        </Badge>
                        <h1 className="text-lewis-ink mb-6">
                            Florida Wind Mitigation Inspection Guide
                        </h1>

                        {/* Answer Box */}
                        <div className="bg-white rounded-xl shadow-sm border border-lewis-border p-6 text-left mb-8">
                            <div className="flex items-start gap-3">
                                <DollarSign className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-lg text-lewis-ink font-medium mb-2">
                                        Save Up to 45% on Your Premium
                                    </p>
                                    <p className="text-lewis-body">
                                        A wind mitigation inspection documents hurricane-resistant features in your
                                        home that qualify you for insurance discounts. For $75-$150, you could save
                                        hundreds—or even thousands—annually on your Florida homeowners insurance.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Key Takeaways */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                <span>Required by FL law to offer discounts</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                <span>Valid for 5 years</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                <span>Pays for itself quickly</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="btn-primary rounded-full">
                                <Link href="/contact">
                                    Get My Discounts Applied
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

            {/* What Is Wind Mitigation */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-lewis-ink mb-6">
                            What Is a Wind Mitigation Inspection?
                        </h2>
                        <div className="prose prose-lg max-w-none text-lewis-body mb-8">
                            <p>
                                A wind mitigation inspection is a certified evaluation of your home&apos;s
                                hurricane-resistant construction features. Florida law requires insurance
                                companies to offer premium discounts for homes with features that reduce
                                wind damage risk.
                            </p>
                            <p>
                                A licensed inspector examines seven specific categories of your home&apos;s
                                construction and documents the findings on the official OIR-B1-1802 form.
                                You submit this form to your insurance company to receive applicable credits.
                            </p>
                            <p>
                                The inspection typically takes 30-60 minutes and costs $75-$150. For most
                                Florida homeowners, the premium savings far exceed the cost of the
                                inspection—often by 10x or more annually.
                            </p>
                        </div>

                        {/* Who Should Get One */}
                        <Card className="mb-8 border-lewis-blue/20 bg-lewis-blue/5">
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-lewis-ink mb-4 flex items-center gap-2">
                                    <ClipboardCheck className="h-5 w-5 text-lewis-blue" />
                                    Who Should Get a Wind Mitigation Inspection?
                                </h3>
                                <ul className="space-y-2 text-lewis-body">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                                        <span><strong>Every Florida homeowner</strong>—even older homes often have some qualifying features</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                                        <span><strong>After any roof replacement</strong>—new roofs often meet FBC standards</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                                        <span><strong>After adding hurricane shutters or impact windows</strong>—major discount opportunity</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                                        <span><strong>Homes built after 2002</strong>—likely FBC compliant with good features</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                                        <span><strong>If your inspection is over 5 years old</strong>—time for a new one</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* The 7 Categories */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-3 bg-blue-100 text-blue-800">The Inspection</Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">
                                7 Categories Inspectors Evaluate
                            </h2>
                            <p className="text-lewis-body mt-2">
                                Each category can qualify you for insurance credits. Here&apos;s what inspectors look for.
                            </p>
                        </div>
                        <div className="space-y-6">
                            {inspectionCategories.map((category, index) => (
                                <Card key={index}>
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-full bg-lewis-blue/10 flex items-center justify-center flex-shrink-0">
                                                <category.icon className="h-6 w-6 text-lewis-blue" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="text-xs font-medium text-lewis-blue bg-lewis-blue/10 px-2 py-0.5 rounded">
                                                        Category {index + 1}
                                                    </span>
                                                </div>
                                                <h3 className="font-semibold text-lewis-ink text-lg mb-2">
                                                    {category.title}
                                                </h3>
                                                <p className="text-lewis-body text-sm mb-4">
                                                    {category.description}
                                                </p>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div className="bg-gray-50 rounded-lg p-3">
                                                        <p className="text-xs font-medium text-lewis-ink mb-2">What They Check:</p>
                                                        <ul className="text-xs text-lewis-body space-y-1">
                                                            {category.whatTheyCheck.map((item, i) => (
                                                                <li key={i} className="flex items-start gap-1">
                                                                    <span className="text-lewis-blue">•</span>
                                                                    {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className="bg-green-50 rounded-lg p-3">
                                                        <p className="text-xs font-medium text-green-800 mb-1">Best Credit:</p>
                                                        <p className="text-xs text-green-700">{category.bestCredit}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Potential Savings */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-3 bg-green-100 text-green-800">Savings</Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">
                                Potential Premium Discounts
                            </h2>
                            <p className="text-lewis-body mt-2">
                                Savings vary by carrier and home characteristics, but here are typical ranges.
                            </p>
                        </div>
                        <Card>
                            <CardContent className="p-0">
                                <table className="w-full">
                                    <thead className="bg-lewis-page">
                                        <tr>
                                            <th className="text-left p-4 text-sm font-semibold text-lewis-ink">Feature</th>
                                            <th className="text-right p-4 text-sm font-semibold text-lewis-ink">Typical Savings</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-lewis-border">
                                        {savingsExamples.map((item, index) => (
                                            <tr key={index}>
                                                <td className="p-4 text-sm text-lewis-body">{item.feature}</td>
                                                <td className="p-4 text-sm text-right font-medium text-green-600">{item.typicalSavings}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </CardContent>
                        </Card>
                        <p className="text-xs text-lewis-body text-center mt-4">
                            *Savings percentages are estimates and vary by insurance carrier, location, and other factors.
                            Discounts apply to the wind portion of your premium.
                        </p>
                    </div>
                </div>
            </section>

            {/* How to Prepare */}
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

            {/* Cost vs Benefit */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-lewis-ink mb-6 text-center">
                            Is It Worth It?
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <Card className="border-red-100 bg-red-50">
                                <CardContent className="p-6">
                                    <h3 className="font-semibold text-red-800 mb-3">Cost</h3>
                                    <ul className="space-y-2 text-red-700 text-sm">
                                        <li>• Inspection fee: $75-$150</li>
                                        <li>• Your time: 30-60 minutes</li>
                                        <li>• One-time cost every 5 years</li>
                                    </ul>
                                    <p className="mt-4 text-2xl font-bold text-red-800">~$100</p>
                                </CardContent>
                            </Card>
                            <Card className="border-green-200 bg-green-50">
                                <CardContent className="p-6">
                                    <h3 className="font-semibold text-green-800 mb-3">Potential Savings</h3>
                                    <ul className="space-y-2 text-green-700 text-sm">
                                        <li>• Annual premium reduction: $200-$2,000+</li>
                                        <li>• Savings compound each year</li>
                                        <li>• 5-year total: $1,000-$10,000+</li>
                                    </ul>
                                    <p className="mt-4 text-2xl font-bold text-green-800">10-100x ROI</p>
                                </CardContent>
                            </Card>
                        </div>
                        <Card className="border-lewis-blue/20 bg-lewis-blue/5">
                            <CardContent className="p-6 text-center">
                                <p className="text-lewis-ink font-medium mb-2">
                                    Even if your home has minimal features, the inspection often pays for itself.
                                </p>
                                <p className="text-lewis-body text-sm">
                                    And you&apos;ll know exactly what upgrades would provide the best ROI if you decide to improve your home&apos;s wind resistance.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Important Notes */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <Card className="border-amber-200 bg-amber-50">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-lewis-ink mb-3">
                                            Important Things to Know
                                        </h3>
                                        <ul className="space-y-2 text-lewis-body text-sm">
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-600 font-bold">-</span>
                                                Make sure your inspector uses the official OIR-B1-1802 form—carriers won&apos;t accept other formats
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-600 font-bold">-</span>
                                                The inspector must be licensed (home inspector, contractor, architect, or engineer)
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-600 font-bold">-</span>
                                                Get a new inspection after any wind-resistant improvements to your home
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-600 font-bold">-</span>
                                                Submit the form to your insurance agent—they&apos;ll apply the credits to your policy
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-600 font-bold">-</span>
                                                Different carriers may weight categories differently—we can help you compare
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-wrapper">
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

            {/* Next Steps */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-lewis-ink mb-4">
                            Ready to Save on Your Premium?
                        </h2>
                        <p className="text-lewis-body mb-8">
                            Get a wind mitigation inspection, then send us the form. We&apos;ll apply your
                            credits and shop carriers to maximize your savings.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="btn-primary rounded-full">
                                <Link href="/contact">
                                    Submit Your Wind Mit Form
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="rounded-full">
                                <a href={`tel:${siteConfig.contact.phone.main.replace(/[^0-9]/g, "")}`}>
                                    <Phone className="mr-2 h-4 w-4" />
                                    Questions? Call Us
                                </a>
                            </Button>
                        </div>
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
