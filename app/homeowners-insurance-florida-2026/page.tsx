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
    Home,
    TrendingDown,
    Shield,
    DollarSign,
    FileText,
    Droplets,
    Wind,
    Hammer,
    ClipboardCheck,
    HelpCircle,
    Building,
    Umbrella,
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
    title: "Florida Homeowners Insurance 2026: Review Checklist | Lewis Insurance",
    description:
        "Review your Florida homeowners insurance for 2026. Rate changes, roof requirements, wind mitigation credits, and coverage gaps. Expert advice for North Florida.",
    alternates: {
        canonical: `${baseUrl}/homeowners-insurance-florida-2026`,
    },
    openGraph: {
        title: "Florida Homeowners Insurance 2026 Review | Lewis Insurance",
        description:
            "Complete 2026 Florida homeowners insurance guide. Rate decreases, coverage checklist, and savings strategies for North Florida homeowners.",
        url: `${baseUrl}/homeowners-insurance-florida-2026`,
        siteName: siteConfig.name,
        locale: "en_US",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Florida Homeowners Insurance 2026 Review | Lewis Insurance",
        description:
            "Complete 2026 Florida homeowners insurance guide. Rate decreases, coverage checklist, and savings strategies for North Florida homeowners.",
    },
}

const rateChanges = [
    { carrier: "Citizens Property Insurance", change: "-2.6%", note: "First decrease since 2015" },
    { carrier: "State Farm", change: "-10%", note: "Filed for reduction" },
    { carrier: "Florida Peninsula", change: "-8.4%", note: "Approved" },
    { carrier: "Patriot Select", change: "-11.3%", note: "Filed" },
    { carrier: "Heritage Property", change: "-3.3%", note: "Filed" },
]

const marketHighlights = [
    {
        stat: "385,000",
        label: "Citizens policies",
        detail: "Down from 1.4M peak in 2023",
    },
    {
        stat: "17",
        label: "New carriers",
        detail: "Entered Florida market",
    },
    {
        stat: "546,000",
        label: "Policies transferred",
        detail: "From Citizens to private in 2025",
    },
]

const coverageChecklist = [
    {
        title: "Coverage A: Dwelling Coverage",
        icon: Home,
        what: "Should reflect current cost to rebuild your home—not market value or purchase price.",
        warning: "Construction costs up 5-10% annually. If you haven't updated limits, you may be underinsured.",
        action: "Request a replacement cost estimate from your carrier or agent.",
    },
    {
        title: "Hurricane Deductible",
        icon: Wind,
        what: "Separate from your standard deductible. Typically 2% to 10% of dwelling coverage.",
        warning: "5% deductible on $300,000 home = $15,000 out of pocket before coverage begins.",
        action: "Know your deductible and set aside funds to cover it.",
    },
    {
        title: "Flood Insurance",
        icon: Droplets,
        what: "Standard homeowners NEVER covers flood—even hurricane-caused flooding.",
        warning: "Required if in high-risk zone with federally-regulated mortgage. Wise even in moderate/low-risk areas.",
        action: "Evaluate your flood risk. Consider NFIP or private flood coverage.",
    },
    {
        title: "Roof Age & Condition",
        icon: Hammer,
        what: "Critical factor in Florida insurance. Affects both coverage availability and rates.",
        warning: "Roofs 15+ years may require inspection proving 5 years remaining life.",
        action: "If approaching 15 years, schedule inspection and consider replacement options.",
    },
    {
        title: "Wind Mitigation Credits",
        icon: Shield,
        what: "Florida law requires insurers to offer discounts for hurricane-resistant features.",
        warning: "Missing credits can cost hundreds per year. Inspection costs $75-$200.",
        action: "Get a wind mitigation inspection if you haven't, or if you've made improvements.",
    },
    {
        title: "Personal Property (Coverage C)",
        icon: FileText,
        what: "Review limits and loss settlement type (replacement cost vs actual cash value).",
        warning: "Standard limits may be insufficient for jewelry, electronics, firearms, collections.",
        action: "Document valuables and consider scheduled coverage for expensive items.",
    },
    {
        title: "Liability Coverage",
        icon: Umbrella,
        what: "Coverage E (personal liability) and F (medical payments) protect if someone is injured on your property.",
        warning: "Standard limits may not provide adequate protection for serious injuries.",
        action: "Consider umbrella insurance for additional liability coverage.",
    },
]

const windMitFeatures = [
    "Roof covering type and age",
    "Roof deck attachment method",
    "Roof-to-wall connections (clips vs straps vs toe-nails)",
    "Opening protection (windows and doors)",
    "Roof shape (hip roofs get better credits)",
    "Secondary water resistance",
]

const savingsStrategies = [
    {
        strategy: "Wind Mitigation Inspection",
        savings: "10-45%+",
        description: "Often the single most impactful step. Even older homes may have qualifying features.",
        icon: Wind,
    },
    {
        strategy: "My Safe Florida Home Grants",
        savings: "Up to $10,000",
        description: "Free inspections + matching grants ($2 for every $1 you spend) for hurricane-hardening.",
        icon: Home,
    },
    {
        strategy: "Bundle Policies",
        savings: "5-20%",
        description: "Combine homeowners and auto with same carrier for multi-policy discount.",
        icon: Building,
    },
    {
        strategy: "Increase Deductible",
        savings: "5-15%",
        description: "Raise AOP deductible from $1,000 to $2,500+. Ensure you can afford higher out-of-pocket.",
        icon: DollarSign,
    },
    {
        strategy: "Protective Devices",
        savings: "Varies",
        description: "Security systems, smoke alarms, water shut-off devices, impact-resistant roofing.",
        icon: Shield,
    },
    {
        strategy: "Shop Your Coverage",
        savings: "Varies",
        description: "More carrier options than in years. Independent agents compare multiple companies.",
        icon: ClipboardCheck,
    },
]

const reviewQuestions = [
    "What is my dwelling coverage limit, and when was it last updated? Does it reflect current rebuild costs?",
    "What are my deductibles—both standard AOP and hurricane/named storm? Can I afford these amounts?",
    "Do I have flood insurance? Should I consider it based on my property's location?",
    "When was my roof last inspected or replaced? Do I have documentation of its condition?",
    "Have I had a wind mitigation inspection? Am I receiving all available credits?",
    "What discounts am I currently receiving? Are there others I might qualify for?",
    "How is my personal property covered—replacement cost or actual cash value?",
    "Are my liability limits sufficient? Should I consider umbrella coverage?",
]

const faqs = [
    {
        question: "Are Florida homeowners insurance rates going down in 2026?",
        answer: "Some carriers are filing for rate decreases for the first time since 2015. Citizens Property Insurance filed for a 2.6% decrease, and private carriers like State Farm (-10%), Florida Peninsula (-8.4%), and Patriot Select (-11.3%) have also filed for reductions. However, not every homeowner will see lower premiums—individual rates depend on location, roof age, claims history, and coverage levels.",
    },
    {
        question: "What roof age requirements exist for Florida homeowners insurance?",
        answer: "Under Florida Statute 627.7011, insurers cannot refuse coverage solely because your roof is less than 15 years old. For roofs 15 years or older, you have the right to obtain an inspection proving at least 5 years of remaining useful life. However, many carriers have additional requirements beyond these statutory minimums.",
    },
    {
        question: "What is a wind mitigation inspection and is it worth it?",
        answer: "A wind mitigation inspection evaluates your home's ability to withstand hurricane-force winds and can result in premium reductions of 10% to 45% or more. The inspection typically costs $75-$200 and examines roof covering, deck attachment, roof-to-wall connections, opening protection, roof shape, and secondary water resistance. For most Florida homeowners, it's absolutely worth the investment.",
    },
    {
        question: "Does homeowners insurance cover flood damage in Florida?",
        answer: "No. Standard homeowners insurance never covers flood damage—even when hurricanes cause the flooding. You need a separate flood insurance policy through the NFIP or a private carrier. If your home is in a high-risk flood zone with a federally-regulated mortgage, flood insurance is mandatory. Even moderate/low-risk areas can flood.",
    },
    {
        question: "What is the My Safe Florida Home program?",
        answer: "My Safe Florida Home provides free wind mitigation inspections and matching grants (the program provides $2 for every $1 you spend, up to $10,000) for eligible homeowners to make hurricane-hardening improvements. For 2026, priority is given to low-income seniors. Check eligibility at mysafeflhome.com.",
    },
    {
        question: "Should I stay with Citizens or switch to a private carrier?",
        answer: "It depends on your specific situation. If you receive a take-out offer from a private carrier, have an independent agent review the new carrier's coverage terms, financial stability ratings, and customer service reputation before deciding. More competition in the market means better options may be available, but Citizens provides important consumer protections.",
    },
    {
        question: "How often should I review my homeowners insurance?",
        answer: "Review your policy at least 90-120 days before your renewal date. This gives you time to shop alternatives, make home improvements that could reduce premiums, and ensure coverage limits match your home's current replacement cost. Also review after major home improvements or life changes.",
    },
    {
        question: "What discounts am I missing on my homeowners insurance?",
        answer: "Common missed discounts include wind mitigation credits, multi-policy bundles, protective device discounts (security systems, smoke alarms, water sensors), new home discounts, claims-free discounts, and age-related discounts. Ask your agent to review all available discounts for your carrier.",
    },
]

const relatedResources = [
    {
        title: "Homeowners Insurance",
        href: "/personal/homeowners-insurance-florida",
        description: "Florida coverage options",
    },
    {
        title: "Wind Mitigation Guide",
        href: "/wind-mitigation-inspection-guide",
        description: "Save on your premium",
    },
    {
        title: "Hurricane Checklist",
        href: "/hurricane-preparation-checklist",
        description: "Prepare for storm season",
    },
    {
        title: "Contact Us",
        href: "/contact",
        description: "Get your free review",
    },
]

export default function HomeownersInsuranceFlorida2026Page() {
    const faqSchema = generateFAQSchema(faqs)

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Homeowners Insurance Florida 2026", url: `${baseUrl}/homeowners-insurance-florida-2026` },
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
                        <li className="text-lewis-blue font-medium">Homeowners Insurance 2026</li>
                    </ol>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-gradient py-16 md:py-24">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <Badge className="mb-4 bg-blue-100 text-blue-800">2026 Review Guide</Badge>
                        <h1 className="text-lewis-ink mb-6">
                            Florida Homeowners Insurance 2026: What North Florida Homeowners Need to Know
                        </h1>

                        {/* Answer Box */}
                        <div className="bg-white rounded-xl shadow-sm border border-lewis-border p-6 text-left mb-8">
                            <div className="flex items-start gap-3">
                                <Home className="h-6 w-6 text-lewis-blue flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-lg text-lewis-ink font-medium mb-2">
                                        Good News: Rate Decreases Are Coming
                                    </p>
                                    <p className="text-lewis-body">
                                        After years of double-digit increases, Florida&apos;s property insurance market is stabilizing.
                                        Several major carriers are filing for rate decreases for the first time since 2015.
                                        But not everyone will see lower premiums automatically—your rate depends on location,
                                        roof age, claims history, and coverage levels. Now is the time to review your policy.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Key Takeaways */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <TrendingDown className="h-4 w-4 text-green-600" />
                                <span>First rate decreases since 2015</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <Shield className="h-4 w-4 text-green-600" />
                                <span>17 new carriers in Florida</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <DollarSign className="h-4 w-4 text-green-600" />
                                <span>Wind mit saves 10-45%</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="btn-primary rounded-full">
                                <Link href="/contact">
                                    Get My Free Review
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

            {/* Why 2026 Is Critical */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-3 bg-green-100 text-green-800">Market Update</Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">
                                Why 2026 Is a Critical Year for Florida Homeowners
                            </h2>
                        </div>

                        {/* Market Stats */}
                        <div className="grid md:grid-cols-3 gap-4 mb-8">
                            {marketHighlights.map((item, index) => (
                                <Card key={index} className="text-center">
                                    <CardContent className="p-6">
                                        <p className="text-3xl font-bold text-lewis-blue mb-1">{item.stat}</p>
                                        <p className="font-medium text-lewis-ink">{item.label}</p>
                                        <p className="text-sm text-lewis-body">{item.detail}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Rate Changes Table */}
                        <Card className="mb-6">
                            <CardContent className="p-0">
                                <div className="p-4 border-b border-lewis-border">
                                    <h3 className="font-semibold text-lewis-ink flex items-center gap-2">
                                        <TrendingDown className="h-5 w-5 text-green-600" />
                                        2026 Rate Changes by Carrier
                                    </h3>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-lewis-page">
                                            <tr>
                                                <th className="text-left p-4 font-semibold text-lewis-ink">Carrier</th>
                                                <th className="text-left p-4 font-semibold text-lewis-ink">Rate Change</th>
                                                <th className="text-left p-4 font-semibold text-lewis-ink">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {rateChanges.map((item, index) => (
                                                <tr key={index} className="border-t border-lewis-border">
                                                    <td className="p-4 text-lewis-ink">{item.carrier}</td>
                                                    <td className="p-4">
                                                        <span className="text-green-600 font-semibold">{item.change}</span>
                                                    </td>
                                                    <td className="p-4 text-lewis-body text-sm">{item.note}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-blue-200 bg-blue-50">
                            <CardContent className="p-5">
                                <p className="text-lewis-body text-sm">
                                    <strong className="text-lewis-ink">Important:</strong> Not every homeowner will see lower premiums automatically.
                                    Your individual rate depends on your location, roof age and condition, claims history, and coverage levels.
                                    That&apos;s why a thorough annual review is essential.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Coverage Checklist */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-3 bg-blue-100 text-blue-800">
                                <ClipboardCheck className="h-3 w-3 mr-1 inline" />
                                Review Checklist
                            </Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">
                                Your 2026 Homeowners Insurance Review Checklist
                            </h2>
                            <p className="text-lewis-body mt-2">
                                A thorough policy review covers far more than just your premium amount.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {coverageChecklist.map((item, index) => (
                                <Card key={index}>
                                    <CardContent className="p-5">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-lewis-blue/10 flex items-center justify-center flex-shrink-0">
                                                <item.icon className="h-5 w-5 text-lewis-blue" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-lewis-ink mb-2">{item.title}</h3>
                                                <p className="text-lewis-body text-sm mb-2">{item.what}</p>
                                                <div className="bg-amber-50 p-2 rounded text-sm text-amber-800 mb-2 flex items-start gap-2">
                                                    <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                                                    {item.warning}
                                                </div>
                                                <div className="bg-green-50 p-2 rounded text-sm text-green-800 flex items-start gap-2">
                                                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5" />
                                                    <strong>Action:</strong> {item.action}
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

            {/* Wind Mitigation Deep Dive */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-3 bg-green-100 text-green-800">
                                <Wind className="h-3 w-3 mr-1 inline" />
                                Biggest Savings
                            </Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">
                                Wind Mitigation: Save 10-45% or More
                            </h2>
                        </div>

                        <Card className="mb-6">
                            <CardContent className="p-6">
                                <p className="text-lewis-body mb-4">
                                    A wind mitigation inspection evaluates your home&apos;s ability to withstand hurricane-force
                                    winds and can result in significant premium reductions. The inspection typically costs
                                    $75-$200 and must be performed by a licensed inspector.
                                </p>
                                <h3 className="font-semibold text-lewis-ink mb-3">Features Evaluated:</h3>
                                <div className="grid md:grid-cols-2 gap-2">
                                    {windMitFeatures.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-2 text-sm text-lewis-body">
                                            <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <div className="grid md:grid-cols-2 gap-4">
                            <Card className="border-green-200 bg-green-50">
                                <CardContent className="p-5">
                                    <h3 className="font-semibold text-lewis-ink mb-2">Homes Built After 2002</h3>
                                    <p className="text-lewis-body text-sm">
                                        Automatically receive certain credits due to updated building codes. Still get an
                                        inspection to document and maximize your discounts.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="border-blue-200 bg-blue-50">
                                <CardContent className="p-5">
                                    <h3 className="font-semibold text-lewis-ink mb-2">Older Homes</h3>
                                    <p className="text-lewis-body text-sm">
                                        May still have qualifying features. If you&apos;ve made improvements (new roof,
                                        hurricane shutters, etc.), get a new inspection to update your credits.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Savings Strategies */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-3 bg-green-100 text-green-800">
                                <DollarSign className="h-3 w-3 mr-1 inline" />
                                Save Money
                            </Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">
                                How to Save on Florida Homeowners Insurance in 2026
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {savingsStrategies.map((item, index) => (
                                <Card key={index}>
                                    <CardContent className="p-5">
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                                <item.icon className="h-5 w-5 text-green-700" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lewis-ink text-sm">{item.strategy}</h3>
                                                <p className="text-green-600 font-medium text-sm">{item.savings}</p>
                                                <p className="text-lewis-body text-xs mt-1">{item.description}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Citizens Insurance Section */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-lewis-ink">
                                Understanding Citizens Insurance Changes for 2026
                            </h2>
                        </div>

                        <Card className="mb-6">
                            <CardContent className="p-6">
                                <p className="text-lewis-body mb-4">
                                    Citizens Property Insurance filed for a 2.6% average rate decrease—the first since 2015.
                                    However, actual impacts vary significantly by county and policy type:
                                </p>
                                <ul className="space-y-2 text-sm text-lewis-body">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                        ~60% of personal lines policyholders would see an average 11.5% reduction (~$359)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                                        Commercial lines face a proposed 10.4% increase
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                                        Some counties may still see increases based on housing stock and claims history
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-blue-200 bg-blue-50">
                            <CardContent className="p-5">
                                <h3 className="font-semibold text-lewis-ink mb-2">Receiving a Take-Out Offer?</h3>
                                <p className="text-lewis-body text-sm">
                                    If you&apos;re with Citizens and receive an offer from a private carrier, have an independent
                                    agent review the new carrier&apos;s coverage terms, financial stability ratings, and customer
                                    service reputation before deciding whether to accept or remain with Citizens.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* North Florida Section */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-lewis-ink mb-3 flex items-center gap-2">
                                    <Home className="h-5 w-5 text-lewis-blue" />
                                    North Florida Considerations
                                </h3>
                                <p className="text-lewis-body text-sm mb-4">
                                    Homeowners in Lake City and surrounding North Florida communities face unique considerations.
                                    Our location provides some buffer from coastal hurricane damage, but we&apos;re not immune to
                                    severe weather.
                                </p>
                                <ul className="space-y-2 text-sm text-lewis-body">
                                    <li className="flex items-start gap-2">
                                        <Droplets className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                        The Suwannee River Water Management District is working with FEMA on updated flood
                                        maps for Columbia County
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Droplets className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                        The Suwannee and Santa Fe rivers present flooding risks in our region
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Droplets className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                        Flood zone designations may change—affecting insurance requirements
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Questions to Ask */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-3 bg-purple-100 text-purple-800">
                                <HelpCircle className="h-3 w-3 mr-1 inline" />
                                Be Prepared
                            </Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">
                                Questions to Ask During Your Policy Review
                            </h2>
                        </div>

                        <Card>
                            <CardContent className="p-6">
                                <ol className="space-y-3">
                                    {reviewQuestions.map((question, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-lewis-blue text-white flex items-center justify-center flex-shrink-0 text-sm font-medium">
                                                {index + 1}
                                            </div>
                                            <p className="text-lewis-body text-sm">{question}</p>
                                        </li>
                                    ))}
                                </ol>
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
                                    <AccordionContent className="text-lewis-body">{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* Related Resources */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <h2 className="text-2xl font-bold text-lewis-ink text-center mb-8">Related Resources</h2>
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
