import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
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
    Car,
    TrendingDown,
    TrendingUp,
    Shield,
    DollarSign,
    FileText,
    Zap,
    Users,
    Calendar,
    Building,
    Smartphone,
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
    title: "Auto Insurance in 2026: What Florida Drivers Need to Know | Lewis Insurance",
    description:
        "Florida auto insurance guide for 2026. Rate trends, PIP changes, coverage requirements, and proven ways to save. Expert advice for North Florida drivers.",
    alternates: {
        canonical: `${baseUrl}/auto-insurance-florida-2026`,
    },
    openGraph: {
        title: "Auto Insurance in 2026: Florida Driver's Guide | Lewis Insurance",
        description:
            "Complete guide to Florida auto insurance in 2026. Rate trends, upcoming PIP changes, and strategies to lower your premium.",
        url: `${baseUrl}/auto-insurance-florida-2026`,
        siteName: siteConfig.name,
        locale: "en_US",
        type: "article",
        images: [
            {
                url: `${baseUrl}/images/2026_Auto_Insurance_Review.jpg`,
                width: 1200,
                height: 630,
                alt: "Auto Insurance in 2026 - What Florida Drivers Need to Know",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Auto Insurance in 2026: Florida Driver's Guide | Lewis Insurance",
        description:
            "Complete guide to Florida auto insurance in 2026. Rate trends, upcoming PIP changes, and strategies to lower your premium.",
        images: [`${baseUrl}/images/2026_Auto_Insurance_Review.jpg`],
    },
}

const rateTrends = [
    { year: "2023", increase: "12%", note: "Post-pandemic surge" },
    { year: "2024", increase: "16.5%", note: "Peak increase year" },
    { year: "2025", increase: "7.5%", note: "Beginning to stabilize" },
    { year: "2026", increase: "~4%", note: "Continued stabilization" },
]

const whyRatesIncrease = [
    {
        title: "Repair Costs",
        description: "Sensors, cameras, and EV components make even minor body work expensive.",
        icon: Car,
    },
    {
        title: "Medical & Legal Costs",
        description: "Bodily injury claims and associated legal costs remain elevated.",
        icon: FileText,
    },
    {
        title: "Driving Behavior",
        description: "Higher speeds and distracted driving increase accident severity.",
        icon: AlertTriangle,
    },
    {
        title: "Weather Exposure",
        description: "Hurricane risk affects comprehensive coverage costs statewide.",
        icon: TrendingUp,
    },
]

const floridaRequirements = [
    {
        coverage: "Personal Injury Protection (PIP)",
        amount: "$10,000",
        description: "Pays 80% of your medical expenses and lost wages regardless of fault",
    },
    {
        coverage: "Property Damage Liability (PDL)",
        amount: "$10,000",
        description: "Pays for damage you cause to other people's property",
    },
]

const proposedRequirements = [
    {
        coverage: "Bodily Injury Liability",
        amount: "$25,000/$50,000",
        description: "Per person/per accident coverage for injuries you cause to others",
    },
    {
        coverage: "Medical Payments (MedPay)",
        amount: "$5,000",
        description: "Covers your medical expenses regardless of fault",
    },
    {
        coverage: "Property Damage Liability",
        amount: "$10,000",
        description: "Same as current requirement",
    },
]

const recommendedCoverage = [
    {
        coverage: "Bodily Injury Liability",
        recommendation: "$100,000/$300,000",
        why: "Medical costs in serious accidents easily exceed minimums. Protects your assets from lawsuits.",
    },
    {
        coverage: "Uninsured/Underinsured Motorist",
        recommendation: "Match your BI limits",
        why: "~27% of Florida drivers lack adequate coverage. Essential protection when at-fault driver can't pay.",
    },
    {
        coverage: "Comprehensive",
        recommendation: "Required for loans/leases",
        why: "Covers theft, vandalism, weather damage, and animal strikes. Critical in hurricane-prone Florida.",
    },
    {
        coverage: "Collision",
        recommendation: "Required for loans/leases",
        why: "Covers damage to your vehicle from accidents regardless of fault.",
    },
    {
        coverage: "Medical Payments (MedPay)",
        recommendation: "$5,000-$10,000",
        why: "Covers the 20% PIP doesn't pay and expenses exceeding PIP limits.",
    },
]

const savingStrategies = [
    {
        strategy: "Bundle Your Policies",
        savings: "15-20%",
        description: "Combine auto and homeowners/renters with the same carrier.",
        icon: Building,
    },
    {
        strategy: "Telematics Programs",
        savings: "Up to 40%",
        description: "Usage-based programs reward safe driving habits.",
        icon: Smartphone,
    },
    {
        strategy: "Clean Driving Record",
        savings: "Varies",
        description: "Avoid accidents and violations for 3-5 years for safe driver discounts.",
        icon: Shield,
    },
    {
        strategy: "Improve Credit Score",
        savings: "Up to 88%",
        description: "Drivers with poor credit pay significantly more in Florida.",
        icon: TrendingDown,
    },
    {
        strategy: "Raise Deductibles",
        savings: "10-25%",
        description: "Increasing from $500 to $1,000 can lower premiums significantly.",
        icon: DollarSign,
    },
    {
        strategy: "Shop Regularly",
        savings: "Varies",
        description: "Compare rates every 1-2 years. Rates vary significantly between companies.",
        icon: Users,
    },
]

const commonDiscounts = [
    { discount: "Multi-vehicle", description: "Multiple cars on same policy" },
    { discount: "Good student", description: "B average or higher" },
    { discount: "Defensive driving course", description: "10-15% savings" },
    { discount: "Vehicle safety features", description: "Anti-lock brakes, airbags, anti-theft" },
    { discount: "Low mileage", description: "Drive fewer than average miles" },
    { discount: "Paid-in-full", description: "Pay annual premium upfront" },
    { discount: "Autopay/Paperless", description: "Electronic billing discounts" },
    { discount: "Loyalty", description: "Long-term customer rewards" },
    { discount: "Military/Professional", description: "Qualifying occupations" },
]

const telematicsPrograms = [
    { program: "Nationwide SmartRide", discount: "Up to 40%" },
    { program: "State Farm Drive Safe & Save", discount: "Up to 30%" },
    { program: "Progressive Snapshot", discount: "Up to 30%" },
    { program: "Allstate Drivewise", discount: "Up to 25%" },
]

const faqs = [
    {
        question: "Why is Florida auto insurance so expensive?",
        answer: "Florida's high rates result from multiple factors: the no-fault PIP system, approximately 27% of drivers being uninsured, hurricane exposure, dense urban traffic, and historically elevated legal costs. North Florida generally has lower rates than South Florida, but premiums remain above national averages statewide.",
    },
    {
        question: "Is Florida eliminating PIP coverage in 2026?",
        answer: "Pending legislation (HB 1181/SB 1256) would eliminate Florida's no-fault PIP system effective July 1, 2026, replacing it with mandatory bodily injury liability coverage. However, the bill must pass and be signed into law. Contact your agent to discuss how this potential change affects your coverage.",
    },
    {
        question: "What's the minimum auto insurance required in Florida?",
        answer: "Currently, Florida requires $10,000 in Personal Injury Protection (PIP) and $10,000 in Property Damage Liability (PDL). However, these minimums provide inadequate protection. We recommend at least $100,000/$300,000 in bodily injury liability and matching uninsured motorist coverage.",
    },
    {
        question: "How can I lower my auto insurance premium?",
        answer: "Bundle home and auto policies (15-20% savings), enroll in telematics programs (up to 40% for safe drivers), maintain a clean driving record, improve your credit score, raise deductibles if you have emergency savings, and shop your policy every 1-2 years. Ask your agent about all available discounts.",
    },
    {
        question: "Do I need uninsured motorist coverage in Florida?",
        answer: "While not legally required, uninsured motorist coverage is essential in Florida where approximately 27% of drivers lack adequate insurance. If an uninsured driver injures you, this coverage pays your medical bills and lost wages. We strongly recommend it for all Florida drivers.",
    },
    {
        question: "Are telematics programs worth it?",
        answer: "For safe drivers, yes. Programs like Nationwide SmartRide and State Farm Drive Safe & Save offer discounts up to 40% based on your actual driving habits. They track hard braking, rapid acceleration, nighttime driving, and mileage. Most programs won't raise rates for unsafe driving—you simply won't get the discount.",
    },
    {
        question: "How much does a DUI affect insurance rates?",
        answer: "A DUI typically increases auto insurance premiums by approximately 35% on average, though increases vary by carrier. Some insurers won't cover drivers with recent DUIs at all. The impact usually lasts 3-5 years, though some carriers check further back.",
    },
    {
        question: "Is electric vehicle insurance more expensive?",
        answer: "Yes, EV insurance costs approximately 23% more than comparable gas-powered vehicles due to higher repair costs and specialized parts. However, this gap is narrowing. EVs from legacy manufacturers (Ford, VW) typically cost less to insure than EV-only brands. Get insurance quotes before purchasing an EV.",
    },
]

const relatedResources = [
    {
        title: "Auto Insurance",
        href: "/personal/auto-insurance-florida",
        description: "Florida auto coverage options",
    },
    {
        title: "Annual Insurance Review",
        href: "/annual-insurance-review-checklist",
        description: "Review your coverage annually",
    },
    {
        title: "Homeowners Insurance",
        href: "/personal/homeowners-insurance-florida",
        description: "Bundle and save",
    },
    {
        title: "Contact Us",
        href: "/contact",
        description: "Get your free quote",
    },
]

export default function AutoInsuranceFlorida2026Page() {
    const faqSchema = generateFAQSchema(faqs)

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Auto Insurance Florida 2026", url: `${baseUrl}/auto-insurance-florida-2026` },
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
                        <li className="text-lewis-blue font-medium">Auto Insurance 2026</li>
                    </ol>
                </div>
            </nav>

            {/* Header Image */}
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
                <Image
                    src="/images/2026_Auto_Insurance_Review.jpg"
                    alt="Auto Insurance in 2026 - What Florida Drivers Need to Know"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90" />
            </div>

            {/* Hero Section */}
            <section className="hero-gradient py-16 md:py-24">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <Badge className="mb-4 bg-blue-100 text-blue-800">2026 Guide</Badge>
                        <h1 className="text-lewis-ink mb-6">
                            Auto Insurance in 2026: What North Florida Drivers Need to Know
                        </h1>

                        {/* Answer Box */}
                        <div className="bg-white rounded-xl shadow-sm border border-lewis-border p-6 text-left mb-8">
                            <div className="flex items-start gap-3">
                                <Car className="h-6 w-6 text-lewis-blue flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-lg text-lewis-ink font-medium mb-2">
                                        Florida Auto Insurance Is Stabilizing—But Still Expensive
                                    </p>
                                    <p className="text-lewis-body">
                                        After years of double-digit increases, auto insurance rates are finally slowing.
                                        Industry forecasts project approximately 4% increases in 2026, down from 16.5% in 2024.
                                        This guide covers rate trends, Florida&apos;s potential PIP elimination, and proven
                                        strategies to lower your premium.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Key Takeaways */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <TrendingDown className="h-4 w-4 text-green-600" />
                                <span>Rate increases slowing to ~4%</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <AlertTriangle className="h-4 w-4 text-amber-600" />
                                <span>PIP may end July 2026</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <DollarSign className="h-4 w-4 text-green-600" />
                                <span>Multiple ways to save</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="btn-primary rounded-full">
                                <Link href="/contact">
                                    Get My Quote
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

            {/* Rate Trends */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-3 bg-green-100 text-green-800">Good News</Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">
                                Auto Insurance Rate Trends for 2026
                            </h2>
                            <p className="text-lewis-body mt-2">
                                After years of double-digit increases, the market is finally stabilizing.
                            </p>
                        </div>

                        {/* Rate Trend Table */}
                        <Card className="mb-8">
                            <CardContent className="p-0">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-lewis-page">
                                            <tr>
                                                <th className="text-left p-4 font-semibold text-lewis-ink">Year</th>
                                                <th className="text-left p-4 font-semibold text-lewis-ink">National Avg Increase</th>
                                                <th className="text-left p-4 font-semibold text-lewis-ink">Note</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {rateTrends.map((trend, index) => (
                                                <tr key={index} className="border-t border-lewis-border">
                                                    <td className="p-4 font-medium text-lewis-ink">{trend.year}</td>
                                                    <td className="p-4">
                                                        <span className={`font-semibold ${trend.year === "2026" ? "text-green-600" : "text-red-600"}`}>
                                                            {trend.increase}
                                                        </span>
                                                    </td>
                                                    <td className="p-4 text-lewis-body text-sm">{trend.note}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* What's Driving Increases */}
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="font-semibold text-lewis-ink mb-4 flex items-center gap-2">
                                        <TrendingUp className="h-5 w-5 text-red-500" />
                                        What&apos;s Driving Continued Increases
                                    </h3>
                                    <div className="space-y-3">
                                        {whyRatesIncrease.map((item, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <item.icon className="h-4 w-4 text-lewis-blue flex-shrink-0 mt-1" />
                                                <div>
                                                    <span className="font-medium text-lewis-ink text-sm">{item.title}:</span>
                                                    <span className="text-lewis-body text-sm ml-1">{item.description}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Good News */}
                            <Card className="border-green-200 bg-green-50">
                                <CardContent className="p-6">
                                    <h3 className="font-semibold text-lewis-ink mb-4 flex items-center gap-2">
                                        <TrendingDown className="h-5 w-5 text-green-600" />
                                        Good News for Safe Drivers
                                    </h3>
                                    <ul className="space-y-2 text-sm text-lewis-body">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                            Several major insurers have filed for rate reductions
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                            Companies moving toward more targeted, risk-based pricing
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                            Clean records and good credit increasingly rewarded
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                            Gap between standard and high-risk pricing widening
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Florida Costs */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-lewis-ink">
                                Florida Auto Insurance Costs in 2026
                            </h2>
                        </div>

                        <Card className="mb-6">
                            <CardContent className="p-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="text-center p-4 bg-red-50 rounded-lg">
                                        <p className="text-sm text-lewis-body mb-1">Florida Average (Full Coverage)</p>
                                        <p className="text-3xl font-bold text-red-600">$3,200+</p>
                                        <p className="text-xs text-lewis-body mt-1">per year</p>
                                    </div>
                                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                                        <p className="text-sm text-lewis-body mb-1">National Average</p>
                                        <p className="text-3xl font-bold text-lewis-blue">$2,637</p>
                                        <p className="text-xs text-lewis-body mt-1">per year</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="grid md:grid-cols-2 gap-4">
                            <Card>
                                <CardContent className="p-5">
                                    <h3 className="font-semibold text-lewis-ink mb-3">Why Florida Costs More</h3>
                                    <ul className="space-y-2 text-sm text-lewis-body">
                                        <li className="flex items-start gap-2">
                                            <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                                            No-fault PIP system complexities
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                                            ~27% uninsured driver rate
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                                            Hurricane and weather exposure
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                                            Dense urban traffic areas
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                                            Historically elevated legal costs
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-green-200 bg-green-50">
                                <CardContent className="p-5">
                                    <h3 className="font-semibold text-lewis-ink mb-3">Recent Market Improvements</h3>
                                    <ul className="space-y-2 text-sm text-lewis-body">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                            60% of top 10 carriers expanding business
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                            40% have filed for rate decreases
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                            Avg increase dropped from 21% to 0.2%
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                            GEICO, Progressive, State Farm filing 6-10.5% reductions
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Current Requirements */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-3 bg-blue-100 text-blue-800">Current Law</Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">
                                Florida Auto Insurance Requirements
                            </h2>
                            <p className="text-lewis-body mt-2">
                                Florida operates as a no-fault state with some of the lowest minimum requirements in the nation.
                            </p>
                        </div>

                        <Card className="mb-6">
                            <CardContent className="p-0">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-lewis-page">
                                            <tr>
                                                <th className="text-left p-4 font-semibold text-lewis-ink">Coverage</th>
                                                <th className="text-left p-4 font-semibold text-lewis-ink">Minimum</th>
                                                <th className="text-left p-4 font-semibold text-lewis-ink">What It Covers</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {floridaRequirements.map((req, index) => (
                                                <tr key={index} className="border-t border-lewis-border">
                                                    <td className="p-4 font-medium text-lewis-ink">{req.coverage}</td>
                                                    <td className="p-4 text-lewis-blue font-semibold">{req.amount}</td>
                                                    <td className="p-4 text-lewis-body text-sm">{req.description}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-amber-200 bg-amber-50">
                            <CardContent className="p-5">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-semibold text-lewis-ink mb-2">Important PIP Limitations</h3>
                                        <ul className="space-y-1 text-sm text-lewis-body">
                                            <li>• The $10,000 PIP minimum applies only to &quot;emergency medical conditions&quot;</li>
                                            <li>• Non-emergency injuries may cap at just $2,500</li>
                                            <li>• Treatment must begin within 14 days of the accident</li>
                                            <li>• These limitations make additional coverage essential</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* PIP Changes */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-3 bg-red-100 text-red-800">
                                <Calendar className="h-3 w-3 mr-1 inline" />
                                Potential Change
                            </Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">
                                Florida May End PIP in July 2026
                            </h2>
                            <p className="text-lewis-body mt-2">
                                Pending legislation would eliminate Florida&apos;s no-fault system—the most significant change in 50+ years.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <Card>
                                <CardContent className="p-5">
                                    <h3 className="font-semibold text-lewis-ink mb-3">Proposed New Requirements</h3>
                                    <p className="text-xs text-lewis-body mb-3">HB 1181 / SB 1256 — Effective July 1, 2026 (if passed)</p>
                                    <div className="space-y-3">
                                        {proposedRequirements.map((req, index) => (
                                            <div key={index} className="flex justify-between items-start">
                                                <div>
                                                    <span className="font-medium text-lewis-ink text-sm">{req.coverage}</span>
                                                    <p className="text-xs text-lewis-body">{req.description}</p>
                                                </div>
                                                <span className="text-lewis-blue font-semibold text-sm">{req.amount}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-5">
                                    <h3 className="font-semibold text-lewis-ink mb-3">What This Means for You</h3>
                                    <ul className="space-y-2 text-sm text-lewis-body">
                                        <li className="flex items-start gap-2">
                                            <ArrowRight className="h-4 w-4 text-lewis-blue flex-shrink-0 mt-0.5" />
                                            Your insurance would cover injuries you cause to others (not yourself first)
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ArrowRight className="h-4 w-4 text-lewis-blue flex-shrink-0 mt-0.5" />
                                            Your health insurance becomes primary for your own medical bills
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ArrowRight className="h-4 w-4 text-lewis-blue flex-shrink-0 mt-0.5" />
                                            Uninsured/underinsured motorist coverage becomes more critical
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ArrowRight className="h-4 w-4 text-lewis-blue flex-shrink-0 mt-0.5" />
                                            Premium impacts remain uncertain (estimates vary from +13% to -$349/year)
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>

                        <Card className="border-blue-200 bg-blue-50">
                            <CardContent className="p-5">
                                <h3 className="font-semibold text-lewis-ink mb-2">What Lake City Drivers Should Do Now</h3>
                                <div className="grid md:grid-cols-2 gap-2 text-sm text-lewis-body">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-blue-600" />
                                        Review your current policy with your agent
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-blue-600" />
                                        Understand how coverage would change
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-blue-600" />
                                        Consider increasing UM/UIM coverage now
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-blue-600" />
                                        Ensure adequate health insurance is in place
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Coverage Recommendations */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-3 bg-green-100 text-green-800">Our Recommendation</Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">
                                Coverage Recommendations for Florida Drivers
                            </h2>
                            <p className="text-lewis-body mt-2">
                                Florida&apos;s minimums provide inadequate protection. Here&apos;s what we recommend.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {recommendedCoverage.map((item, index) => (
                                <Card key={index}>
                                    <CardContent className="p-5">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-lewis-ink">{item.coverage}</h3>
                                                <p className="text-lewis-body text-sm">{item.why}</p>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-lewis-blue font-bold">{item.recommendation}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Ways to Save */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-3 bg-green-100 text-green-800">
                                <DollarSign className="h-3 w-3 mr-1 inline" />
                                Save Money
                            </Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">
                                Proven Ways to Save on Auto Insurance in 2026
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                            {savingStrategies.map((item, index) => (
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

                        {/* Telematics Deep Dive */}
                        <Card className="mb-6">
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-lewis-ink mb-4 flex items-center gap-2">
                                    <Smartphone className="h-5 w-5 text-lewis-blue" />
                                    Telematics Programs: Up to 40% Savings
                                </h3>
                                <p className="text-lewis-body text-sm mb-4">
                                    Usage-based programs track your driving habits and reward safe drivers. Most programs won&apos;t raise
                                    your rates for unsafe driving—you simply won&apos;t receive the discount.
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="font-medium text-lewis-ink text-sm mb-2">Popular Programs</h4>
                                        <div className="space-y-2">
                                            {telematicsPrograms.map((prog, index) => (
                                                <div key={index} className="flex justify-between text-sm">
                                                    <span className="text-lewis-body">{prog.program}</span>
                                                    <span className="text-green-600 font-medium">{prog.discount}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-lewis-ink text-sm mb-2">Best Candidates</h4>
                                        <ul className="space-y-1 text-sm text-lewis-body">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                Steady speeds, avoid hard braking
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                Primarily daytime drivers
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                Low-mileage, short commutes
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                Confident in safe driving habits
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Discounts Grid */}
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-lewis-ink mb-4">Discounts to Ask About</h3>
                                <div className="grid md:grid-cols-3 gap-3">
                                    {commonDiscounts.map((item, index) => (
                                        <div key={index} className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <span className="text-sm font-medium text-lewis-ink">{item.discount}</span>
                                                <p className="text-xs text-lewis-body">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* EV Insurance */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <Zap className="h-6 w-6 text-lewis-blue flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-lewis-ink mb-2">Electric Vehicle Insurance in 2026</h3>
                                        <p className="text-lewis-body text-sm mb-3">
                                            EV insurance costs remain approximately 23% higher than comparable gas-powered vehicles due to
                                            specialized parts and repair costs. However, this gap is narrowing.
                                        </p>
                                        <ul className="space-y-1 text-sm text-lewis-body">
                                            <li className="flex items-start gap-2">
                                                <ArrowRight className="h-4 w-4 text-lewis-blue flex-shrink-0 mt-0.5" />
                                                EVs from legacy manufacturers (Ford, VW) cost ~25% less to insure than EV-only brands
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ArrowRight className="h-4 w-4 text-lewis-blue flex-shrink-0 mt-0.5" />
                                                Tesla Cybertruck and Rivian R1 remain among the most expensive to insure
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ArrowRight className="h-4 w-4 text-lewis-blue flex-shrink-0 mt-0.5" />
                                                Get insurance quotes before purchasing an EV
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* What To Do If Rates Increase */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-lewis-ink">What to Do If Your Rates Increase</h2>
                        </div>
                        <Card>
                            <CardContent className="p-6">
                                <ol className="space-y-4">
                                    <li className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-lewis-blue text-white flex items-center justify-center flex-shrink-0 font-bold">
                                            1
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lewis-ink">Review Your Declarations Page</h4>
                                            <p className="text-lewis-body text-sm">
                                                Understand what changed. Sometimes coverage adjustments or removed discounts cause
                                                increases rather than base rate changes.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-lewis-blue text-white flex items-center justify-center flex-shrink-0 font-bold">
                                            2
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lewis-ink">Contact Your Agent</h4>
                                            <p className="text-lewis-body text-sm">
                                                There may be discounts you&apos;re missing or coverage adjustments that fit your situation better.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-lewis-blue text-white flex items-center justify-center flex-shrink-0 font-bold">
                                            3
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lewis-ink">Shop Your Policy</h4>
                                            <p className="text-lewis-body text-sm">
                                                An increase from your current insurer doesn&apos;t mean all companies raised rates equally.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-lewis-blue text-white flex items-center justify-center flex-shrink-0 font-bold">
                                            4
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lewis-ink">Consider Telematics</h4>
                                            <p className="text-lewis-body text-sm">
                                                A usage-based program might offset the increase for safe drivers.
                                            </p>
                                        </div>
                                    </li>
                                </ol>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Commercial Auto */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <Card className="border-blue-200">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <Building className="h-6 w-6 text-lewis-blue flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-lewis-ink mb-2">Commercial Auto Insurance</h3>
                                        <p className="text-lewis-body text-sm mb-3">
                                            Business owners face additional challenges—commercial auto remains one of the most pressured
                                            insurance lines with rising repair costs, driver shortages, and increased claim severity.
                                        </p>
                                        <p className="text-lewis-body text-sm mb-3">
                                            Carriers increasingly reward strong risk management:
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-2 text-sm text-lewis-body">
                                            <div className="flex items-center gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                                                Telematics usage
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                                                Dashcam documentation
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                                                Formal driver training programs
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                                                Documented maintenance schedules
                                            </div>
                                        </div>
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
