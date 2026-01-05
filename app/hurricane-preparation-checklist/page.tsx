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
    CloudRain,
    FileText,
    Home,
    Car,
    Camera,
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
    title: "Florida Hurricane Preparation Checklist | Lewis Insurance",
    description: "Complete Florida hurricane prep checklist. Insurance documents, home protection, evacuation planning, and post-storm claims tips.",
    alternates: {
        canonical: `${baseUrl}/hurricane-preparation-checklist`,
    },
    openGraph: {
        title: "Florida Hurricane Preparation Checklist | Lewis Insurance",
        description:
            "Prepare for hurricane season with our comprehensive Florida checklist. Insurance, home prep, and claims guidance.",
        url: `${baseUrl}/hurricane-preparation-checklist`,
        siteName: siteConfig.name,
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Florida Hurricane Preparation Checklist | Lewis Insurance",
        description:
            "Prepare for hurricane season with our comprehensive Florida checklist. Insurance, home prep, and claims guidance.",
    },
}

const insuranceChecklist = [
    {
        title: "Review Your Homeowners Policy",
        description: "Understand what's covered and what's not. Standard homeowners covers wind damage but NOT flood. Know your dwelling coverage limits and whether they reflect current rebuild costs.",
        icon: FileText,
    },
    {
        title: "Check Your Hurricane Deductible",
        description: "Most Florida policies have a separate hurricane deductible—typically 2%, 5%, or 10% of your dwelling coverage. A 2% deductible on a $400,000 home = $8,000 out of pocket.",
        icon: AlertTriangle,
    },
    {
        title: "Verify Flood Insurance",
        description: "Flood damage requires a separate flood insurance policy. If you don't have one, there's typically a 30-day waiting period—don't wait until a storm is named.",
        icon: CloudRain,
    },
    {
        title: "Document Your Belongings",
        description: "Create a home inventory with photos/video of every room, including closets, garage, and outdoor items. Store copies in the cloud or off-site.",
        icon: Camera,
    },
    {
        title: "Save Policy Documents Digitally",
        description: "Have digital copies of your declarations pages for homeowners, flood, and auto insurance. Know your policy numbers and your agent's contact information.",
        icon: FileText,
    },
    {
        title: "Review Auto Comprehensive Coverage",
        description: "Comprehensive coverage (not collision) covers hurricane damage to your vehicle—flood, wind, falling debris. Verify you have it and know your deductible.",
        icon: Car,
    },
]

const homeProtectionChecklist = [
    {
        title: "Install Hurricane Shutters or Plywood",
        description: "Protect all windows and glass doors. Pre-cut plywood and label each piece so installation is quick when a storm threatens.",
    },
    {
        title: "Secure Outdoor Items",
        description: "Bring in or anchor patio furniture, grills, potted plants, decorations, and anything that could become a projectile in high winds.",
    },
    {
        title: "Trim Trees and Shrubs",
        description: "Remove dead branches and trim trees away from your home and power lines. Do this well before hurricane season starts.",
    },
    {
        title: "Check Your Roof",
        description: "Inspect for loose or damaged shingles. Ensure roof-to-wall connections are secure. Document the condition with photos.",
    },
    {
        title: "Clean Gutters and Drains",
        description: "Clear gutters, downspouts, and yard drains to handle heavy rainfall and reduce flooding risk around your foundation.",
    },
    {
        title: "Know Your Shutoff Locations",
        description: "Know how to turn off water, electricity, and gas. If you evacuate, consider shutting off water to prevent damage from broken pipes.",
    },
    {
        title: "Prepare Your Generator",
        description: "If you have a generator, test it, stock fuel, and know how to operate it safely (never indoors). Consider a transfer switch for safe electrical connections.",
    },
    {
        title: "Protect Important Documents",
        description: "Place original documents (deeds, titles, insurance policies, birth certificates, passports) in a waterproof container or safe deposit box.",
    },
]

const evacuationChecklist = [
    {
        title: "Know Your Evacuation Zone",
        description: "Florida has evacuation zones A through E based on storm surge risk. Know your zone and have a plan for where you'll go if ordered to evacuate.",
    },
    {
        title: "Plan Your Route",
        description: "Identify multiple evacuation routes. Know which roads flood and have backup options. Don't wait until the last minute—traffic can make a 2-hour drive take 10 hours.",
    },
    {
        title: "Prepare an Emergency Kit",
        description: "Water (1 gallon per person per day for 7 days), non-perishable food, medications, first aid kit, flashlights, batteries, phone chargers, cash, and important documents.",
    },
    {
        title: "Plan for Pets",
        description: "Not all shelters accept pets. Know which do, or have a pet-friendly hotel identified along your evacuation route. Bring pet food, medications, and carriers.",
    },
    {
        title: "Fill Prescriptions Early",
        description: "Get at least a 2-week supply of necessary medications before hurricane season. Pharmacies may close or lose power after a storm.",
    },
    {
        title: "Fill Your Gas Tank",
        description: "Keep your vehicle's gas tank at least half full during hurricane season. Gas stations often run out or lose power before and after storms.",
    },
]

const postStormChecklist = [
    {
        title: "Document All Damage",
        description: "Before cleaning up, photograph and video all damage from multiple angles. Document the exterior, interior, personal property, and vehicles.",
    },
    {
        title: "Contact Your Insurance Company",
        description: "Report your claim as soon as possible. Have your policy number ready. Note the claim number and adjuster's name for your records.",
    },
    {
        title: "Make Temporary Repairs",
        description: "Prevent further damage (tarping a roof, boarding broken windows) but don't make permanent repairs until the adjuster has inspected. Keep all receipts.",
    },
    {
        title: "Keep a Claim Diary",
        description: "Document every conversation with your insurance company—date, time, who you spoke with, and what was discussed. Follow up phone calls with emails.",
    },
    {
        title: "Save All Receipts",
        description: "Keep receipts for all expenses: temporary repairs, hotel stays, meals, and any costs related to the damage. These may be reimbursable.",
    },
    {
        title: "Be Wary of Storm Chasers",
        description: "Unlicensed contractors often appear after storms. Verify licenses, get multiple estimates, and never pay the full amount upfront. Ask for references.",
    },
]

const faqs = [
    {
        question: "When should I buy flood insurance before hurricane season?",
        answer: "NFIP flood insurance has a 30-day waiting period before coverage begins. Buy flood insurance well before hurricane season (June 1) to ensure you're protected. Some private flood policies have shorter waiting periods (10-14 days), but you still can't buy coverage once a storm is named.",
    },
    {
        question: "Does my homeowners insurance cover hurricane damage?",
        answer: "Your homeowners policy covers wind damage from hurricanes, but NOT flood damage. Flood requires a separate policy. Hurricane damage often involves both—wind blows off the roof (covered by homeowners) and rain floods the interior (only covered if you have flood insurance).",
    },
    {
        question: "What's the difference between hurricane deductible and regular deductible?",
        answer: "Your regular (AOP) deductible is a flat dollar amount for non-hurricane claims. Your hurricane deductible is typically a percentage of your dwelling coverage—2%, 5%, or 10%. On a $400,000 home, a 2% hurricane deductible = $8,000 out of pocket before insurance pays.",
    },
    {
        question: "Will my auto insurance cover flood damage to my car?",
        answer: "Only if you have comprehensive coverage. Comprehensive covers flood, wind damage, and falling debris. Collision coverage does NOT cover weather damage. Check your auto policy before hurricane season and add comprehensive if you don't have it.",
    },
    {
        question: "How do I file a hurricane claim?",
        answer: "Contact your insurance company immediately—don't wait. Document all damage with photos and video before cleanup. Make temporary repairs to prevent further damage but save receipts. An adjuster will be assigned to inspect the damage. Keep records of all communications.",
    },
    {
        question: "What if my claim is denied or underpaid?",
        answer: "First, ask your insurance company for a detailed explanation in writing. You can request a re-inspection or provide additional documentation. If you disagree with the outcome, you may consider hiring a public adjuster or consulting an attorney who specializes in insurance claims.",
    },
]

const relatedResources = [
    {
        title: "Homeowners Checklist",
        href: "/homeowners-coverage-checklist",
        description: "Review your homeowners coverage",
    },
    {
        title: "Flood Insurance",
        href: "/personal/flood-insurance-florida",
        description: "Why flood coverage matters",
    },
    {
        title: "Homeowners Insurance",
        href: "/personal/homeowners-insurance-florida",
        description: "Florida homeowners coverage",
    },
    {
        title: "Contact Us",
        href: "/contact",
        description: "Get a free insurance review",
    },
]

export default function HurricanePreparationChecklistPage() {
    const faqSchema = generateFAQSchema(faqs)

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Hurricane Preparation Checklist", url: `${baseUrl}/hurricane-preparation-checklist` },
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
                        <li className="text-lewis-blue font-medium">Hurricane Preparation Checklist</li>
                    </ol>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-gradient py-16 md:py-24">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <Badge className="mb-4 bg-blue-100 text-blue-800">
                            Hurricane Season Prep
                        </Badge>
                        <h1 className="text-lewis-ink mb-6">
                            Florida Hurricane Preparation Checklist
                        </h1>

                        {/* Answer Box */}
                        <div className="bg-white rounded-xl shadow-sm border border-lewis-border p-6 text-left mb-8">
                            <div className="flex items-start gap-3">
                                <CloudRain className="h-6 w-6 text-lewis-blue flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-lg text-lewis-ink font-medium mb-2">
                                        Be Prepared Before the Storm
                                    </p>
                                    <p className="text-lewis-body">
                                        Florida hurricane season runs June 1 through November 30. The time to prepare
                                        is now—not when a storm is in the Gulf. This checklist covers insurance
                                        readiness, home protection, evacuation planning, and post-storm claims.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Key Takeaways */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                <span>Flood requires separate policy</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                <span>30-day flood insurance wait</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                <span>Know your hurricane deductible</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="btn-primary rounded-full">
                                <Link href="/contact">
                                    Review My Coverage
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

            {/* Insurance Checklist */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-3 bg-green-100 text-green-800">Step 1</Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">
                                Insurance Readiness
                            </h2>
                            <p className="text-lewis-body mt-2">
                                Review your coverage before hurricane season—not after a storm is named.
                            </p>
                        </div>
                        <div className="grid gap-4">
                            {insuranceChecklist.map((item, index) => (
                                <Card key={index}>
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-lewis-blue/10 flex items-center justify-center flex-shrink-0">
                                                <item.icon className="h-5 w-5 text-lewis-blue" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-lewis-ink mb-2">
                                                    {item.title}
                                                </h3>
                                                <p className="text-lewis-body text-sm">
                                                    {item.description}
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

            {/* Home Protection Checklist */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-3 bg-blue-100 text-blue-800">Step 2</Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">
                                Home Protection
                            </h2>
                            <p className="text-lewis-body mt-2">
                                Prepare your property before the season—these tasks are hard to do last minute.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {homeProtectionChecklist.map((item, index) => (
                                <Card key={index}>
                                    <CardContent className="p-5">
                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-lewis-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Home className="h-3 w-3 text-lewis-blue" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lewis-ink text-sm mb-1">
                                                    {item.title}
                                                </h3>
                                                <p className="text-lewis-body text-xs">
                                                    {item.description}
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

            {/* Evacuation Checklist */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-3 bg-amber-100 text-amber-800">Step 3</Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">
                                Evacuation Planning
                            </h2>
                            <p className="text-lewis-body mt-2">
                                Have a plan before you need it. Know where you&apos;ll go and what you&apos;ll bring.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {evacuationChecklist.map((item, index) => (
                                <Card key={index}>
                                    <CardContent className="p-5">
                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                                                <span className="text-amber-700 font-bold text-sm">{index + 1}</span>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lewis-ink mb-1">
                                                    {item.title}
                                                </h3>
                                                <p className="text-lewis-body text-sm">
                                                    {item.description}
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

            {/* Post-Storm Checklist */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-3 bg-red-100 text-red-800">After the Storm</Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">
                                Filing Your Claim
                            </h2>
                            <p className="text-lewis-body mt-2">
                                What to do immediately after a hurricane to protect your claim.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {postStormChecklist.map((item, index) => (
                                <Card key={index} className="border-red-100">
                                    <CardContent className="p-5">
                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                                <Shield className="h-4 w-4 text-red-700" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lewis-ink mb-1">
                                                    {item.title}
                                                </h3>
                                                <p className="text-lewis-body text-sm">
                                                    {item.description}
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

            {/* Important Warning */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <Card className="border-amber-200 bg-amber-50">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-lewis-ink mb-2">
                                            Critical Reminders
                                        </h3>
                                        <ul className="space-y-2 text-lewis-body text-sm">
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-600 font-bold">-</span>
                                                Flood insurance has a 30-day waiting period—buy it before hurricane season
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-600 font-bold">-</span>
                                                You cannot buy or change coverage once a storm is named for your area
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-600 font-bold">-</span>
                                                Your hurricane deductible is a percentage, not a flat dollar amount
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-600 font-bold">-</span>
                                                Document everything before AND after a storm for claims purposes
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-600 font-bold">-</span>
                                                Don&apos;t let unlicensed contractors pressure you into signing contracts
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
