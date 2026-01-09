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
    FileText,
    DollarSign,
    Home,
    Building,
    Droplets,
    Wind,
    Calculator,
    FolderOpen,
    XCircle,
    Calendar,
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
    title: "Florida Insurance Tax Documents 2026 | Lewis Insurance",
    description:
        "Learn which insurance documents Florida homeowners receive for tax season 2026, what's deductible, and how to maximize savings. Expert guide from Lewis Insurance.",
    alternates: {
        canonical: `${baseUrl}/florida-insurance-tax-documents-2026`,
    },
    openGraph: {
        title: "Florida Insurance Tax Documents 2026 | Lewis Insurance",
        description:
            "Which insurance costs are tax deductible? What documents do you need? Complete guide for Florida homeowners.",
        url: `${baseUrl}/florida-insurance-tax-documents-2026`,
        siteName: siteConfig.name,
        locale: "en_US",
        type: "article",
        images: [
            {
                url: `${baseUrl}/images/florida-insurance-tax-documents-2026.png`,
                width: 1200,
                height: 630,
                alt: "Florida Insurance Tax Documents 2026 Guide",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Florida Insurance Tax Documents 2026 | Lewis Insurance",
        description:
            "Which insurance costs are tax deductible? What documents do you need? Complete guide for Florida homeowners.",
        images: [`${baseUrl}/images/florida-insurance-tax-documents-2026.png`],
    },
}

const documentsToExpect = [
    {
        document: "Form 1098",
        source: "Mortgage Lender",
        deadline: "January 31",
        description: "Mortgage Interest Statement showing interest paid, PMI premiums, and property taxes from escrow",
    },
    {
        document: "Premium Statement",
        source: "Insurance Company",
        deadline: "Varies",
        description: "Annual statement showing homeowners insurance premiums paid",
    },
    {
        document: "Flood Insurance Statement",
        source: "NFIP or Private Carrier",
        deadline: "Varies",
        description: "Premiums paid for flood coverage (if applicable)",
    },
    {
        document: "Citizens Documentation",
        source: "Citizens Property Insurance",
        deadline: "Varies",
        description: "Surcharges and assessments (1.75% surcharge, potential emergency assessments)",
    },
]

const form1098Boxes = [
    {
        box: "Box 1",
        content: "Mortgage Interest Paid",
        deductible: true,
        note: "Deductible if you itemize (subject to $750K mortgage limit)",
    },
    {
        box: "Box 5",
        content: "Mortgage Insurance Premiums (PMI)",
        deductible: true,
        note: "Deductible for 2026 if income under $100K (One Big Beautiful Bill Act)",
    },
    {
        box: "Box 10",
        content: "Property Taxes from Escrow",
        deductible: true,
        note: "May be deductible if you itemize (subject to SALT cap)",
    },
]

const isDeductible = [
    {
        item: "Home Office Insurance",
        icon: Building,
        description: "Proportional share of homeowners/flood insurance if you use part of your home regularly and exclusively for business.",
        howTo: "Calculate % of home used for business. File Form 8829, transfer to Schedule C.",
    },
    {
        item: "Rental Property Insurance",
        icon: Home,
        description: "Full deduction for insurance premiums on rental properties as a business expense.",
        howTo: "Report on Schedule E with property taxes, repairs, and operating expenses.",
    },
    {
        item: "Casualty Loss (Disasters)",
        icon: AlertTriangle,
        description: "Uninsured losses from federally declared disasters may qualify if they exceed $100 + 10% of AGI.",
        howTo: "File Form 4684. Must be in a federally declared disaster area.",
    },
]

const notDeductible = [
    "Homeowners insurance premiums (personal residence)",
    "Flood insurance premiums (personal residence)",
    "Auto insurance premiums (personal vehicles)",
    "Umbrella liability policy premiums",
    "Citizens surcharges and assessments (for most homeowners)",
]

const mySafeFloridaHome = [
    {
        benefit: "Matching Grants",
        detail: "Up to $10,000 — State provides $2 for every $1 you invest",
    },
    {
        benefit: "Low-Income Grants",
        detail: "May cover 100% of improvement costs for qualifying homeowners",
    },
    {
        benefit: "Premium Savings",
        detail: "Wind mitigation improvements can reduce premiums up to 50%",
    },
    {
        benefit: "Free Inspection",
        detail: "Wind mitigation inspection at no cost through the program",
    },
]

const eligibilityRequirements = [
    "Own a site-built single-family home or townhouse with homestead exemption",
    "Dwelling insured value $700,000 or less",
    "Building permit issued before January 1, 2008",
    "Property located in Florida and serves as primary residence",
]

const qualifyingImprovements = [
    "Impact-resistant windows and doors",
    "Roof-to-wall connection upgrades",
    "Secondary water resistance barriers",
    "Garage door reinforcements",
]

const recordKeepingChecklist = [
    "Policy declarations pages (all coverage types)",
    "Form 1098 from mortgage lender",
    "Escrow account statements",
    "Receipts for home improvements (especially wind mitigation)",
    "Home office measurements and photographs",
    "Business use percentage calculations",
    "Wind mitigation inspection reports",
]

const taxChanges2026 = [
    {
        change: "PMI Deduction Returns",
        detail: "Private mortgage insurance premiums deductible for homeowners earning < $100K annually. Treated as mortgage interest, subject to $750K mortgage debt limit.",
        impact: "positive",
    },
    {
        change: "Energy Efficiency Credits End",
        detail: "Section 25C credits ended for property placed in service after December 31, 2025. Verify eligibility before planning improvements.",
        impact: "negative",
    },
]

const faqs = [
    {
        question: "Is homeowners insurance tax deductible in Florida?",
        answer: "For your primary residence, no—standard homeowners insurance premiums are not tax deductible. However, if you use part of your home for business (home office) or own rental property, you can deduct a proportional share or the full amount respectively.",
    },
    {
        question: "Is flood insurance tax deductible?",
        answer: "Flood insurance premiums for your personal residence are not tax deductible. However, if the property is a rental or you have a qualifying home office, you may deduct a proportional share as a business expense.",
    },
    {
        question: "What is Form 1098 and why do I need it?",
        answer: "Form 1098 is the Mortgage Interest Statement your lender sends by January 31. It shows mortgage interest paid (Box 1), PMI premiums (Box 5), and property taxes from escrow (Box 10). You need it to claim mortgage interest and PMI deductions if you itemize.",
    },
    {
        question: "Is PMI tax deductible in 2026?",
        answer: "Yes, PMI becomes deductible again for tax year 2026 under the One Big Beautiful Bill Act. Homeowners earning less than $100,000 annually can treat PMI premiums as deductible mortgage interest, subject to the $750,000 mortgage debt limit.",
    },
    {
        question: "Can I deduct insurance for my home office?",
        answer: "Yes. Calculate the percentage of your home's square footage used regularly and exclusively for business, then apply that percentage to your homeowners and flood insurance premiums. File using Form 8829 and transfer to Schedule C.",
    },
    {
        question: "What is the My Safe Florida Home program?",
        answer: "My Safe Florida Home provides free wind mitigation inspections and matching grants (up to $10,000) for hurricane-hardening improvements. The state provides $2 for every $1 you invest. While improvements aren't directly tax deductible, they can reduce insurance premiums by up to 50%.",
    },
    {
        question: "Are wind mitigation improvements tax deductible?",
        answer: "Wind mitigation improvements are not directly tax deductible for personal residences. However, they increase your home's cost basis (important when you sell) and can significantly reduce insurance premiums through required insurer credits.",
    },
    {
        question: "Should I consult a tax professional about insurance deductions?",
        answer: "Yes, especially if you have a home office, own rental property, experienced casualty losses, or have complex tax situations. Insurance agents can provide policy documentation but are not tax advisors—always verify deductions with a CPA or tax professional.",
    },
]

const relatedResources = [
    {
        title: "Homeowners Insurance 2026",
        href: "/homeowners-insurance-florida-2026",
        description: "Complete 2026 review guide",
    },
    {
        title: "Wind Mitigation Guide",
        href: "/wind-mitigation-inspection-guide",
        description: "Save on your premium",
    },
    {
        title: "Annual Insurance Review",
        href: "/annual-insurance-review-checklist",
        description: "Review your coverage",
    },
    {
        title: "Contact Us",
        href: "/contact",
        description: "Get policy documents",
    },
]

export default function FloridaInsuranceTaxDocuments2026Page() {
    const faqSchema = generateFAQSchema(faqs)

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Insurance Tax Documents 2026", url: `${baseUrl}/florida-insurance-tax-documents-2026` },
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
                        <li className="text-lewis-blue font-medium">Insurance Tax Documents 2026</li>
                    </ol>
                </div>
            </nav>

            {/* Header Image */}
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
                <Image
                    src="/images/florida-insurance-tax-documents-2026.png"
                    alt="Florida Insurance Tax Documents 2026 Guide"
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
                        <Badge className="mb-4 bg-blue-100 text-blue-800">Tax Season 2026</Badge>
                        <h1 className="text-lewis-ink mb-6">
                            Florida Insurance Tax Documents 2026: What You Need for Tax Season
                        </h1>

                        {/* Answer Box */}
                        <div className="bg-white rounded-xl shadow-sm border border-lewis-border p-6 text-left mb-8">
                            <div className="flex items-start gap-3">
                                <FileText className="h-6 w-6 text-lewis-blue flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-lg text-lewis-ink font-medium mb-2">
                                        Which Insurance Documents Matter for Your Taxes?
                                    </p>
                                    <p className="text-lewis-body">
                                        Standard homeowners and flood insurance premiums are <strong>not</strong> tax deductible
                                        for personal residences. However, home office deductions, rental properties, and
                                        casualty losses have different rules. This guide explains what&apos;s deductible,
                                        what documents you need, and how Florida programs can save you money.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Key Takeaways */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <XCircle className="h-4 w-4 text-red-500" />
                                <span>Personal insurance not deductible</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                <span>Home office/rental IS deductible</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                <span>PMI deductible again in 2026</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="btn-primary rounded-full">
                                <Link href="/contact">
                                    Get Policy Documents
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

            {/* Documents to Expect */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-3 bg-blue-100 text-blue-800">
                                <Calendar className="h-3 w-3 mr-1 inline" />
                                January Documents
                            </Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">
                                Insurance Documents Florida Homeowners Receive
                            </h2>
                        </div>

                        <Card className="mb-6">
                            <CardContent className="p-0">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-lewis-page">
                                            <tr>
                                                <th className="text-left p-4 font-semibold text-lewis-ink">Document</th>
                                                <th className="text-left p-4 font-semibold text-lewis-ink">From</th>
                                                <th className="text-left p-4 font-semibold text-lewis-ink">Deadline</th>
                                                <th className="text-left p-4 font-semibold text-lewis-ink">Contains</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {documentsToExpect.map((doc, index) => (
                                                <tr key={index} className="border-t border-lewis-border">
                                                    <td className="p-4 font-medium text-lewis-ink">{doc.document}</td>
                                                    <td className="p-4 text-lewis-body text-sm">{doc.source}</td>
                                                    <td className="p-4 text-lewis-body text-sm">{doc.deadline}</td>
                                                    <td className="p-4 text-lewis-body text-sm">{doc.description}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Form 1098 Deep Dive */}
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-lewis-ink mb-4 flex items-center gap-2">
                                    <FileText className="h-5 w-5 text-lewis-blue" />
                                    Form 1098: What Each Box Means
                                </h3>
                                <div className="space-y-3">
                                    {form1098Boxes.map((item, index) => (
                                        <div key={index} className="flex items-start gap-3 p-3 bg-lewis-page rounded-lg">
                                            <div className="w-16 flex-shrink-0">
                                                <span className="font-mono font-semibold text-lewis-blue">{item.box}</span>
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-medium text-lewis-ink text-sm">{item.content}</p>
                                                <p className="text-lewis-body text-xs mt-1">{item.note}</p>
                                            </div>
                                            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* What IS Deductible */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-3 bg-green-100 text-green-800">
                                <CheckCircle2 className="h-3 w-3 mr-1 inline" />
                                Deductible
                            </Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">
                                What Insurance Costs ARE Tax Deductible
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {isDeductible.map((item, index) => (
                                <Card key={index} className="border-green-200">
                                    <CardContent className="p-5">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                                <item.icon className="h-5 w-5 text-green-700" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lewis-ink mb-1">{item.item}</h3>
                                                <p className="text-lewis-body text-sm mb-2">{item.description}</p>
                                                <div className="bg-green-50 p-2 rounded text-sm text-green-800">
                                                    <strong>How to claim:</strong> {item.howTo}
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

            {/* What Is NOT Deductible */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-3 bg-red-100 text-red-800">
                                <XCircle className="h-3 w-3 mr-1 inline" />
                                Not Deductible
                            </Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">
                                What Insurance Costs Are NOT Tax Deductible
                            </h2>
                        </div>

                        <Card className="border-red-200 bg-red-50">
                            <CardContent className="p-6">
                                <p className="text-lewis-body text-sm mb-4">
                                    These remain personal expenses regardless of cost increases or Florida&apos;s challenging
                                    insurance market conditions:
                                </p>
                                <ul className="space-y-2">
                                    {notDeductible.map((item, index) => (
                                        <li key={index} className="flex items-center gap-2 text-lewis-ink">
                                            <XCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* My Safe Florida Home */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-3 bg-blue-100 text-blue-800">
                                <Wind className="h-3 w-3 mr-1 inline" />
                                Florida Program
                            </Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">
                                My Safe Florida Home: Indirect Tax Benefits
                            </h2>
                            <p className="text-lewis-body mt-2">
                                While wind mitigation improvements aren&apos;t directly tax deductible, this program offers
                                significant financial benefits.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                            {mySafeFloridaHome.map((item, index) => (
                                <Card key={index}>
                                    <CardContent className="p-5">
                                        <h3 className="font-semibold text-lewis-ink mb-1">{item.benefit}</h3>
                                        <p className="text-lewis-body text-sm">{item.detail}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <Card>
                                <CardContent className="p-5">
                                    <h3 className="font-semibold text-lewis-ink mb-3">Eligibility Requirements</h3>
                                    <ul className="space-y-2">
                                        {eligibilityRequirements.map((req, index) => (
                                            <li key={index} className="flex items-start gap-2 text-sm text-lewis-body">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                {req}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-5">
                                    <h3 className="font-semibold text-lewis-ink mb-3">Qualifying Improvements</h3>
                                    <ul className="space-y-2">
                                        {qualifyingImprovements.map((imp, index) => (
                                            <li key={index} className="flex items-start gap-2 text-sm text-lewis-body">
                                                <Wind className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                                {imp}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-xs text-lewis-body mt-3">
                                        Apply at <strong>mysafeflhome.com</strong>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Record Keeping */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-3 bg-purple-100 text-purple-800">
                                <FolderOpen className="h-3 w-3 mr-1 inline" />
                                Organization
                            </Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">
                                Organizing Your Insurance Records for Tax Season
                            </h2>
                        </div>

                        <Card>
                            <CardContent className="p-6">
                                <p className="text-lewis-body text-sm mb-4">
                                    Create a dedicated folder (physical or digital) containing these documents:
                                </p>
                                <div className="grid md:grid-cols-2 gap-2">
                                    {recordKeepingChecklist.map((item, index) => (
                                        <div key={index} className="flex items-center gap-2 text-sm text-lewis-body">
                                            <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Columbia County Flood */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <Droplets className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-lewis-ink mb-2">
                                            Columbia County Flood Zone Considerations
                                        </h3>
                                        <p className="text-lewis-body text-sm mb-3">
                                            Lake City faces flood risk from the Suwannee and Santa Fe rivers plus ponding
                                            during heavy storms. The Suwannee River Water Management District is working
                                            with FEMA on updated flood maps that could affect insurance requirements.
                                        </p>
                                        <p className="text-lewis-body text-sm mb-3">
                                            Flood insurance premiums for personal residences are <strong>not</strong> deductible.
                                            However, rental property flood insurance is fully deductible as a business expense.
                                        </p>
                                        <p className="text-xs text-lewis-body">
                                            Contact Columbia County Building and Zoning: <strong>386-719-1474</strong> for
                                            flood zone determinations or elevation certificates.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* 2026 Tax Changes */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-3 bg-amber-100 text-amber-800">
                                <Calculator className="h-3 w-3 mr-1 inline" />
                                New for 2026
                            </Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">
                                2026 Tax Changes Affecting Florida Homeowners
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {taxChanges2026.map((item, index) => (
                                <Card
                                    key={index}
                                    className={item.impact === "positive" ? "border-green-200" : "border-amber-200"}
                                >
                                    <CardContent className="p-5">
                                        <div className="flex items-start gap-3">
                                            {item.impact === "positive" ? (
                                                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            ) : (
                                                <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                            )}
                                            <div>
                                                <h3 className="font-semibold text-lewis-ink mb-1">{item.change}</h3>
                                                <p className="text-lewis-body text-sm">{item.detail}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* When to Consult Professional */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <Card className="border-blue-200 bg-blue-50">
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-lewis-ink mb-3">When to Consult a Tax Professional</h3>
                                <p className="text-lewis-body text-sm mb-4">
                                    Consult a qualified tax professional if you:
                                </p>
                                <ul className="grid md:grid-cols-2 gap-2 text-sm text-lewis-body mb-4">
                                    <li className="flex items-center gap-2">
                                        <ArrowRight className="h-4 w-4 text-blue-500" />
                                        Use your home for business purposes
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <ArrowRight className="h-4 w-4 text-blue-500" />
                                        Own rental property
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <ArrowRight className="h-4 w-4 text-blue-500" />
                                        Experienced casualty losses
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <ArrowRight className="h-4 w-4 text-blue-500" />
                                        Have questions about specific deductions
                                    </li>
                                </ul>
                                <p className="text-xs text-lewis-body italic">
                                    Lewis Insurance agents are licensed insurance professionals, not tax advisors.
                                    We can help you obtain policy documentation, but always verify tax implications
                                    with your accountant or CPA.
                                </p>
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
                                    <AccordionContent className="text-lewis-body">{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* Related Resources */}
            <section className="section-wrapper bg-lewis-page">
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
