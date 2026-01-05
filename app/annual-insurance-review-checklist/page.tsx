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
    Car,
    Shield,
    DollarSign,
    Calendar,
    FileText,
    Users,
    Building,
    Umbrella,
    ClipboardCheck,
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
    title: "Annual Insurance Review Checklist | Lewis Insurance",
    description:
        "Complete annual insurance review checklist. What to check, when to shop, and how to save on home, auto, and life insurance in Florida.",
    alternates: {
        canonical: `${baseUrl}/annual-insurance-review-checklist`,
    },
    openGraph: {
        title: "Annual Insurance Review Checklist | Lewis Insurance",
        description:
            "Annual insurance checkup guide. Review coverage, find savings, and ensure you're properly protected.",
        url: `${baseUrl}/annual-insurance-review-checklist`,
        siteName: siteConfig.name,
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Annual Insurance Review Checklist | Lewis Insurance",
        description:
            "Annual insurance checkup guide. Review coverage, find savings, and ensure you're properly protected.",
    },
}

const whyReviewAnnually = [
    {
        title: "Life Changes Affect Coverage Needs",
        description:
            "Marriage, divorce, new baby, home purchase, retirement—each life event can dramatically change your insurance needs. Coverage that fit last year may not fit today.",
        icon: Users,
    },
    {
        title: "Home Values and Rebuild Costs Change",
        description:
            "Construction costs have risen significantly. If your dwelling coverage hasn't kept pace, you could be underinsured when you need to rebuild.",
        icon: Home,
    },
    {
        title: "Premium Increases May Be Negotiable",
        description:
            "Insurance rates fluctuate. A policy that was competitively priced two years ago might not be today. Reviewing lets you shop intelligently.",
        icon: DollarSign,
    },
    {
        title: "New Discounts Become Available",
        description:
            "Insurers add new discounts regularly. A roof replacement, security system, or even turning 55 could qualify you for savings you're not getting.",
        icon: Shield,
    },
]

const homeownersReview = [
    {
        item: "Dwelling Coverage Limit",
        what: "Compare your dwelling limit to current rebuild costs—not market value. Get a rebuild estimate if you haven't recently.",
        warning: "If rebuild costs exceed your dwelling limit, you're underinsured.",
    },
    {
        item: "Hurricane Deductible",
        what: "Know your percentage (2%, 5%, 10%). Calculate the actual dollar amount based on your dwelling coverage.",
        warning: "A 5% deductible on a $400,000 home = $20,000 out of pocket.",
    },
    {
        item: "Contents Coverage",
        what: "Standard is 50-70% of dwelling coverage. Compare to your home inventory total. Consider scheduled coverage for valuables.",
        warning: "Most people underestimate contents by 20-40%.",
    },
    {
        item: "Liability Limits",
        what: "Standard is $100,000-$300,000. Consider your assets and lawsuit risk. Umbrella policy may be cost-effective.",
        warning: "If someone is seriously injured on your property, $100k won't cover it.",
    },
    {
        item: "Flood Insurance",
        what: "Standard homeowners NEVER covers flood. Review your flood zone and consider private flood if NFIP is expensive.",
        warning: "Even low-risk areas flood—25% of claims come from outside flood zones.",
    },
    {
        item: "Wind Mitigation Credits",
        what: "If you've improved your roof or added hurricane protections, you may qualify for discounts. Get a wind mitigation inspection.",
        warning: "Missing credits can cost hundreds per year.",
    },
    {
        item: "Loss of Use Coverage",
        what: "This pays living expenses if your home is uninhabitable. Verify the limit would cover temporary housing in your area.",
        warning: "Post-hurricane, rental costs spike. Ensure adequate coverage.",
    },
]

const autoReview = [
    {
        item: "Liability Limits",
        what: "Florida minimum (10/20/10) is dangerously low. Consider 100/300/100 or higher based on your assets.",
        warning: "At-fault accidents can result in lawsuits exceeding minimum coverage.",
    },
    {
        item: "Uninsured/Underinsured Motorist",
        what: "Covers you when the other driver has no insurance or not enough. ~20% of Florida drivers are uninsured.",
        warning: "This is critical protection. Don't skip it to save money.",
    },
    {
        item: "Comprehensive Coverage",
        what: "Covers non-collision damage: theft, vandalism, weather, animals. Essential for newer vehicles.",
        warning: "Without comprehensive, hurricane damage to your car isn't covered.",
    },
    {
        item: "Collision Deductible",
        what: "Higher deductible = lower premium. But can you afford the deductible if you have a claim?",
        warning: "Don't set deductibles higher than your emergency fund.",
    },
    {
        item: "Vehicle Value Changes",
        what: "Your car depreciates. At some point, comprehensive and collision may cost more than the car is worth.",
        warning: "Consider dropping full coverage on vehicles worth under $5,000.",
    },
    {
        item: "Usage Changes",
        what: "Working from home? Driving less? Your rate should reflect actual usage. Also check for telematics discounts.",
        warning: "Overstating mileage means overpaying for coverage.",
    },
]

const lifeChanges = [
    {
        event: "Got Married or Divorced",
        action: "Update beneficiaries on all policies. Review coverage amounts. Consider bundling policies (married) or separating (divorced).",
    },
    {
        event: "Had a Baby or Adopted",
        action: "Increase life insurance. Add child to policies. Review beneficiary designations. Consider disability insurance.",
    },
    {
        event: "Bought or Sold a Home",
        action: "New home needs new policy. Update address on all policies. Review coverage limits. Bundle home and auto.",
    },
    {
        event: "Started a Business",
        action: "Personal policies don't cover business activities. Get proper commercial coverage. Review home-based business exclusions.",
    },
    {
        event: "Child Got Driver's License",
        action: "Add teen to auto policy. Review good student and driver's ed discounts. Consider their vehicle's coverage level.",
    },
    {
        event: "Child Moved Out",
        action: "Remove from policies. They may need their own renters and auto insurance. Update life insurance beneficiaries.",
    },
    {
        event: "Retired",
        action: "Review all coverage needs. May qualify for mature driver discounts. Consider reducing life insurance as needs change.",
    },
    {
        event: "Inherited Assets",
        action: "Increase liability coverage. Consider umbrella policy. Update property coverage for inherited items. Review estate plans.",
    },
]

const discountsToAsk = [
    { discount: "Multi-policy bundle", description: "Home + auto with same company" },
    { discount: "Multi-car discount", description: "Multiple vehicles on one policy" },
    { discount: "Good driver discount", description: "Clean driving record (3-5 years)" },
    { discount: "Defensive driving course", description: "Completion certificate required" },
    { discount: "Good student discount", description: "B average or better for students" },
    { discount: "Mature driver discount", description: "Typically age 55 or 60+" },
    { discount: "Telematics/usage-based", description: "App or device tracks driving habits" },
    { discount: "Paid-in-full discount", description: "Pay annual premium upfront" },
    { discount: "Paperless/autopay discount", description: "Digital billing and auto-deduct" },
    { discount: "Security system discount", description: "Monitored alarm in home" },
    { discount: "Smoke detector discount", description: "Working smoke alarms" },
    { discount: "Wind mitigation credits", description: "Hurricane-resistant features" },
    { discount: "Claim-free discount", description: "No claims for 3-5 years" },
    { discount: "New home discount", description: "Recently built homes" },
    { discount: "Loyalty discount", description: "Multiple years with same company" },
    { discount: "Professional/alumni discount", description: "Certain employers or schools" },
]

const reviewTimeline = [
    {
        timing: "60-90 Days Before Renewal",
        tasks: [
            "Request current declarations pages",
            "Review coverage limits and deductibles",
            "Identify any life changes since last year",
            "Start shopping if considering a switch",
        ],
    },
    {
        timing: "30-60 Days Before Renewal",
        tasks: [
            "Get comparison quotes from other carriers",
            "Ask about new discounts you may qualify for",
            "Request any needed inspections (wind mit, 4-point)",
            "Make coverage adjustment decisions",
        ],
    },
    {
        timing: "Before Renewal Date",
        tasks: [
            "Confirm final coverage selections",
            "Set up payment method",
            "Update beneficiaries if needed",
            "Store new policy documents safely",
        ],
    },
]

const faqs = [
    {
        question: "How often should I review my insurance policies?",
        answer: "At minimum, review annually before each policy renewal. Also review after major life events: marriage, divorce, new baby, home purchase, retirement, or significant asset changes. Set a calendar reminder 60-90 days before your renewal date.",
    },
    {
        question: "Should I shop my insurance every year?",
        answer: "Not necessarily. If your current coverage is adequate and competitively priced, switching frequently can work against you—many carriers offer loyalty discounts. However, if your premium increased significantly or you haven't shopped in 3+ years, comparing quotes is worthwhile.",
    },
    {
        question: "How do I know if I have enough homeowners coverage?",
        answer: "Your dwelling coverage should equal the cost to rebuild your home—not its market value or purchase price. Request a rebuild estimate from your insurer or hire an appraiser. Construction costs have risen sharply; many homeowners are now underinsured.",
    },
    {
        question: "What's the biggest mistake people make with insurance?",
        answer: "Underinsuring to save on premiums. Saving $200/year on lower coverage means nothing when you can't fully rebuild your home or cover a serious accident. Insurance should protect your assets and lifestyle—price it accordingly.",
    },
    {
        question: "When should I increase my deductibles?",
        answer: "Higher deductibles lower premiums, but you must be able to pay the deductible if you have a claim. Don't set deductibles higher than your emergency fund. For most people, $1,000-$2,500 is reasonable for home and auto; hurricane deductibles are percentage-based.",
    },
    {
        question: "Do I need umbrella insurance?",
        answer: "Consider umbrella insurance if you have significant assets to protect, own rental property, have a pool or trampoline, employ household help, or are at higher risk of lawsuits (teen drivers, dog ownership, high-profile career). Umbrella coverage is surprisingly affordable—often $150-$300/year for $1 million.",
    },
    {
        question: "How can I lower my insurance premiums without reducing coverage?",
        answer: "Ask about all available discounts. Bundle policies. Increase deductibles (if you have savings to cover them). Improve your home's hurricane resistance. Maintain good credit. Install security systems. Consider telematics for auto. Shop quotes every 2-3 years.",
    },
    {
        question: "What documents should I gather for my insurance review?",
        answer: "Gather declarations pages for all policies, recent claim history, your home inventory, beneficiary forms, any inspection reports (wind mitigation, 4-point), and information about any home improvements or life changes since your last review.",
    },
]

const relatedResources = [
    {
        title: "Home Inventory Checklist",
        href: "/home-inventory-checklist",
        description: "Document your belongings",
    },
    {
        title: "4-Point Inspection",
        href: "/4-point-inspection-guide",
        description: "What you need to know",
    },
    {
        title: "Wind Mitigation Guide",
        href: "/wind-mitigation-inspection-guide",
        description: "Save on homeowners insurance",
    },
    {
        title: "Contact Us",
        href: "/contact",
        description: "Schedule your free review",
    },
]

export default function AnnualInsuranceReviewChecklistPage() {
    const faqSchema = generateFAQSchema(faqs)

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Annual Insurance Review Checklist", url: `${baseUrl}/annual-insurance-review-checklist` },
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
                        <li className="text-lewis-blue font-medium">Annual Insurance Review</li>
                    </ol>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-gradient py-16 md:py-24">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <Badge className="mb-4 bg-blue-100 text-blue-800">Annual Checkup</Badge>
                        <h1 className="text-lewis-ink mb-6">Annual Insurance Review Checklist</h1>

                        {/* Answer Box */}
                        <div className="bg-white rounded-xl shadow-sm border border-lewis-border p-6 text-left mb-8">
                            <div className="flex items-start gap-3">
                                <ClipboardCheck className="h-6 w-6 text-lewis-blue flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-lg text-lewis-ink font-medium mb-2">
                                        Your Insurance Needs Change Every Year
                                    </p>
                                    <p className="text-lewis-body">
                                        Life changes, home values shift, and insurance rates fluctuate. An annual review
                                        ensures you&apos;re properly covered without overpaying. This checklist walks you through
                                        everything to check before your policies renew.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Key Takeaways */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                <span>Review 60-90 days before renewal</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                <span>Check for new discounts</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                <span>Update after life changes</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="btn-primary rounded-full">
                                <Link href="/contact">
                                    Schedule My Review
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

            {/* Why Review Annually */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-lewis-ink text-center mb-8">
                            Why an Annual Review Matters
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {whyReviewAnnually.map((item, index) => (
                                <Card key={index}>
                                    <CardContent className="p-5">
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 rounded-full bg-lewis-blue/10 flex items-center justify-center flex-shrink-0">
                                                <item.icon className="h-5 w-5 text-lewis-blue" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lewis-ink text-sm mb-1">
                                                    {item.title}
                                                </h3>
                                                <p className="text-lewis-body text-xs">{item.description}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Review Timeline */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-3 bg-green-100 text-green-800">When to Start</Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">Review Timeline</h2>
                        </div>
                        <div className="space-y-4">
                            {reviewTimeline.map((phase, index) => (
                                <Card key={index}>
                                    <CardContent className="p-5">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                                <Calendar className="h-5 w-5 text-green-700" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-lewis-ink mb-2">{phase.timing}</h3>
                                                <ul className="space-y-1">
                                                    {phase.tasks.map((task, taskIndex) => (
                                                        <li
                                                            key={taskIndex}
                                                            className="flex items-center gap-2 text-sm text-lewis-body"
                                                        >
                                                            <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                                                            {task}
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

            {/* Homeowners Review */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-3 bg-blue-100 text-blue-800">
                                <Home className="h-3 w-3 mr-1 inline" />
                                Homeowners
                            </Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">Homeowners Insurance Review</h2>
                        </div>
                        <div className="space-y-4">
                            {homeownersReview.map((item, index) => (
                                <Card key={index}>
                                    <CardContent className="p-5">
                                        <h3 className="font-semibold text-lewis-ink mb-2">{item.item}</h3>
                                        <p className="text-lewis-body text-sm mb-2">{item.what}</p>
                                        <div className="flex items-start gap-2 text-sm text-amber-700 bg-amber-50 p-2 rounded">
                                            <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                                            {item.warning}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Auto Review */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-3 bg-blue-100 text-blue-800">
                                <Car className="h-3 w-3 mr-1 inline" />
                                Auto
                            </Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">Auto Insurance Review</h2>
                        </div>
                        <div className="space-y-4">
                            {autoReview.map((item, index) => (
                                <Card key={index}>
                                    <CardContent className="p-5">
                                        <h3 className="font-semibold text-lewis-ink mb-2">{item.item}</h3>
                                        <p className="text-lewis-body text-sm mb-2">{item.what}</p>
                                        <div className="flex items-start gap-2 text-sm text-amber-700 bg-amber-50 p-2 rounded">
                                            <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                                            {item.warning}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Life Changes */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-3 bg-purple-100 text-purple-800">Life Events</Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">
                                Insurance Actions for Life Changes
                            </h2>
                            <p className="text-lewis-body mt-2">
                                Major life events trigger insurance reviews. Here&apos;s what to do.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {lifeChanges.map((item, index) => (
                                <Card key={index}>
                                    <CardContent className="p-5">
                                        <h3 className="font-semibold text-lewis-ink mb-2">{item.event}</h3>
                                        <p className="text-lewis-body text-sm">{item.action}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Discounts */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-3 bg-green-100 text-green-800">
                                <DollarSign className="h-3 w-3 mr-1 inline" />
                                Savings
                            </Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">Discounts to Ask About</h2>
                            <p className="text-lewis-body mt-2">
                                Many discounts aren&apos;t automatically applied. Ask your agent about these.
                            </p>
                        </div>
                        <Card>
                            <CardContent className="p-6">
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {discountsToAsk.map((item, index) => (
                                        <div key={index} className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <span className="text-sm font-medium text-lewis-ink">
                                                    {item.discount}
                                                </span>
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

            {/* Other Policies */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-lewis-ink">Don&apos;t Forget These Policies</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                            <Card>
                                <CardContent className="p-5 text-center">
                                    <Umbrella className="h-8 w-8 text-lewis-blue mx-auto mb-3" />
                                    <h3 className="font-semibold text-lewis-ink mb-2">Umbrella Insurance</h3>
                                    <p className="text-lewis-body text-sm">
                                        Extra liability protection. Review limits annually as your assets grow.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-5 text-center">
                                    <FileText className="h-8 w-8 text-lewis-blue mx-auto mb-3" />
                                    <h3 className="font-semibold text-lewis-ink mb-2">Life Insurance</h3>
                                    <p className="text-lewis-body text-sm">
                                        Review coverage amounts and update beneficiaries after life events.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-5 text-center">
                                    <Building className="h-8 w-8 text-lewis-blue mx-auto mb-3" />
                                    <h3 className="font-semibold text-lewis-ink mb-2">Business Insurance</h3>
                                    <p className="text-lewis-body text-sm">
                                        If you own a business, review commercial coverage alongside personal.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gather Documents */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <Card className="border-blue-200 bg-blue-50">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <FileText className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-lewis-ink mb-3">
                                            Documents to Gather Before Your Review
                                        </h3>
                                        <ul className="grid md:grid-cols-2 gap-2 text-sm text-lewis-body">
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                                                Current declarations pages (all policies)
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                                                Recent claim history
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                                                Home inventory list
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                                                Wind mitigation report
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                                                4-point inspection (if applicable)
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                                                Home improvement receipts
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                                                Driver&apos;s license info for all drivers
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                                                Vehicle information
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
