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
    Users,
    FileText,
    Heart,
    Baby,
    UserX,
    Scale,
    Building,
    RefreshCw,
    Shield,
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
    title: "Life Insurance Beneficiary Guide | Lewis Insurance",
    description:
        "How to choose and update life insurance beneficiaries. Avoid common mistakes that delay payouts or send money to the wrong person.",
    alternates: {
        canonical: `${baseUrl}/life-insurance-beneficiary-guide`,
    },
    openGraph: {
        title: "Life Insurance Beneficiary Guide | Lewis Insurance",
        description:
            "Choose the right beneficiaries and avoid costly mistakes. Complete guide to life insurance designations.",
        url: `${baseUrl}/life-insurance-beneficiary-guide`,
        siteName: siteConfig.name,
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Life Insurance Beneficiary Guide | Lewis Insurance",
        description:
            "Choose the right beneficiaries and avoid costly mistakes. Complete guide to life insurance designations.",
    },
}

const whyItMatters = [
    {
        title: "Beneficiary Overrides Your Will",
        description:
            "Your beneficiary designation controls who gets the money—not your will. Even if your will says something different, the insurance company pays the named beneficiary.",
        icon: FileText,
    },
    {
        title: "Outdated Designations Cause Problems",
        description:
            "An ex-spouse still listed as beneficiary? They'll receive the death benefit. Forgot to add a child born after the policy? They may get nothing.",
        icon: AlertTriangle,
    },
    {
        title: "Delays Can Last Months or Years",
        description:
            "Unclear or contested beneficiary designations can delay payouts for months or years while lawyers sort it out—exactly when your family needs money most.",
        icon: RefreshCw,
    },
    {
        title: "Tax Consequences Vary",
        description:
            "How you structure beneficiary designations can affect estate taxes and how quickly beneficiaries receive funds. Proper planning matters.",
        icon: Scale,
    },
]

const beneficiaryTypes = [
    {
        type: "Primary Beneficiary",
        description:
            "The person (or people) who receive the death benefit first. If you name multiple primary beneficiaries, specify the percentage each receives.",
        example: "Spouse receives 100%, or Spouse receives 50% and two children receive 25% each.",
    },
    {
        type: "Contingent (Secondary) Beneficiary",
        description:
            "Receives the death benefit only if all primary beneficiaries have died or can't be located. This is your backup plan.",
        example: "If spouse predeceases you, adult children become beneficiaries.",
    },
    {
        type: "Per Stirpes Designation",
        description:
            "If a beneficiary dies before you, their share passes to their descendants (your grandchildren) rather than to your other beneficiaries.",
        example: "If you leave 50% to each of two children and one dies, their children inherit their parent's 50%.",
    },
    {
        type: "Per Capita Designation",
        description:
            "If a beneficiary dies before you, their share is divided equally among your surviving beneficiaries, not their descendants.",
        example: "If you leave 50% to each of two children and one dies, the surviving child receives 100%.",
    },
]

const whoCanBeBeneficiary = [
    {
        category: "Individuals",
        options: ["Spouse or domestic partner", "Adult children", "Parents or siblings", "Friends or other relatives", "Minor children (with considerations—see below)"],
        icon: Users,
    },
    {
        category: "Organizations",
        options: ["Charitable organizations", "Religious institutions", "Educational institutions", "Non-profit organizations"],
        icon: Heart,
    },
    {
        category: "Entities",
        options: ["Trusts (revocable or irrevocable)", "Your estate (generally not recommended)", "Business entities (for business purposes)"],
        icon: Building,
    },
]

const commonMistakes = [
    {
        mistake: "Naming an Ex-Spouse",
        problem: "Divorce doesn't automatically remove your ex as beneficiary. Many states don't void these designations, and some policies specifically state the designation survives divorce.",
        solution: "Update your beneficiary designation after any divorce, even if you believe state law voids it.",
    },
    {
        mistake: "Naming Minor Children Directly",
        problem: "Insurance companies can't pay large sums directly to minors. The court will appoint a guardian to manage the money—which may not be who you'd choose.",
        solution: "Use a trust, name a custodian under UTMA/UGMA, or specify a guardian in your designation.",
    },
    {
        mistake: "Forgetting to Add New Children",
        problem: "Children born after you created the policy aren't automatically included. If you die, they may receive nothing while other children receive everything.",
        solution: "Update your beneficiary designation after each birth or adoption. Review annually.",
    },
    {
        mistake: "Naming Your Estate",
        problem: "Proceeds paid to your estate go through probate—which is slow, public, expensive, and may expose the money to creditors.",
        solution: "Name specific individuals or a trust instead of your estate.",
    },
    {
        mistake: "Not Naming Contingent Beneficiaries",
        problem: "If your primary beneficiary dies before you and there's no contingent, the money goes to your estate (see above problems).",
        solution: "Always name at least one contingent beneficiary as a backup.",
    },
    {
        mistake: "Using Unclear Language",
        problem: "Saying 'my children' without names can create confusion if you have stepchildren, adopted children, or children from multiple relationships.",
        solution: "Name beneficiaries specifically: full legal names, dates of birth, and relationships.",
    },
    {
        mistake: "Never Updating",
        problem: "Life changes—marriages, divorces, births, deaths—but many people never update their beneficiaries after the initial designation.",
        solution: "Review beneficiaries annually and after every major life event.",
    },
]

const whenToUpdate = [
    {
        event: "Marriage",
        action: "Add your new spouse as primary beneficiary (if desired). Update contingent beneficiaries to reflect new family structure.",
        icon: Heart,
    },
    {
        event: "Divorce",
        action: "Remove your ex-spouse immediately. Don't assume divorce automatically voids the designation—update it yourself.",
        icon: UserX,
    },
    {
        event: "Birth or Adoption",
        action: "Add new children to your beneficiary list. Decide how to split benefits among all children.",
        icon: Baby,
    },
    {
        event: "Death of a Beneficiary",
        action: "Name a replacement. If the deceased was your primary, decide whether to promote contingents or name new primary.",
        icon: Users,
    },
    {
        event: "Annually",
        action: "Review all beneficiary designations at least once a year—even if nothing has changed. Set a calendar reminder.",
        icon: RefreshCw,
    },
]

const minorChildrenOptions = [
    {
        option: "Establish a Trust",
        description:
            "Create a trust and name it as beneficiary. The trustee manages the money according to your instructions until children reach the age you specify.",
        pros: "Maximum control over how money is used and when children receive it",
        cons: "Requires attorney, ongoing administration costs",
    },
    {
        option: "UTMA/UGMA Custodian",
        description:
            "Name a custodian to manage funds under the Uniform Transfers to Minors Act. Simpler than a trust but less flexible.",
        pros: "Simpler and cheaper than a trust",
        cons: "Child receives full control at 18-21 depending on state",
    },
    {
        option: "Name a Guardian in the Policy",
        description:
            "Some policies allow you to name a guardian to manage funds for minor beneficiaries directly in the beneficiary designation.",
        pros: "No separate legal documents needed",
        cons: "Limited control, varies by policy",
    },
]

const faqs = [
    {
        question: "Does my will override my life insurance beneficiary?",
        answer: "No. Your beneficiary designation controls who receives life insurance proceeds—your will does not. Even if your will says something different, the insurance company will pay whoever is named on the beneficiary form. This is why keeping beneficiary designations current is so important.",
    },
    {
        question: "What happens if I don't name a beneficiary?",
        answer: "The proceeds will be paid to your estate and go through probate. This is slow (often 6-12 months), public, expensive (legal fees), and may expose the money to your creditors. Always name at least a primary and contingent beneficiary.",
    },
    {
        question: "Can I change my beneficiary at any time?",
        answer: "Usually yes, unless you've made an irrevocable beneficiary designation (rare and typically done for specific legal or business reasons). Most beneficiary designations are revocable, meaning you can change them whenever you want by filing a new form with your insurance company.",
    },
    {
        question: "Does divorce automatically remove my ex-spouse as beneficiary?",
        answer: "It depends on your state and policy. Some states have laws that void spousal beneficiary designations upon divorce, but these laws vary and may not apply to all policy types (especially employer-sponsored policies governed by federal ERISA law). Don't rely on automatic revocation—always update your designation after divorce.",
    },
    {
        question: "Can I name a minor child as beneficiary?",
        answer: "You can, but it creates complications. Insurance companies can't pay large sums directly to minors, so a court-appointed guardian will manage the funds—which may not be who you'd choose. Better options: establish a trust, use a UTMA custodial designation, or name an adult to hold funds for the child.",
    },
    {
        question: "What's the difference between per stirpes and per capita?",
        answer: "Per stirpes means if a beneficiary dies before you, their share goes to their descendants (your grandchildren). Per capita means if a beneficiary dies before you, their share is split among your surviving beneficiaries. Per stirpes keeps money in family 'branches'; per capita redistributes equally among survivors.",
    },
    {
        question: "How do I update my beneficiary designation?",
        answer: "Contact your insurance company or agent and request a beneficiary change form. Complete and sign the form—most require your signature to be witnessed or notarized. Keep a copy for your records. Some companies now allow online changes, but always verify the change was processed.",
    },
    {
        question: "Should I name my estate as beneficiary?",
        answer: "Generally no. Naming your estate means the proceeds go through probate—which is slow, public, expensive, and may expose the money to creditors. It's almost always better to name specific individuals, a trust, or charitable organizations directly.",
    },
]

const relatedResources = [
    {
        title: "Annual Insurance Review",
        href: "/annual-insurance-review-checklist",
        description: "Complete review checklist",
    },
    {
        title: "Umbrella Insurance",
        href: "/personal/umbrella-insurance-florida",
        description: "Extra liability protection",
    },
    {
        title: "Homeowners Insurance",
        href: "/personal/homeowners-insurance-florida",
        description: "Protect your Florida home",
    },
    {
        title: "Contact Us",
        href: "/contact",
        description: "Review your coverage",
    },
]

export default function LifeInsuranceBeneficiaryGuidePage() {
    const faqSchema = generateFAQSchema(faqs)

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Life Insurance Beneficiary Guide", url: `${baseUrl}/life-insurance-beneficiary-guide` },
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
                        <li className="text-lewis-blue font-medium">Beneficiary Guide</li>
                    </ol>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-gradient py-16 md:py-24">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <Badge className="mb-4 bg-blue-100 text-blue-800">Life Insurance</Badge>
                        <h1 className="text-lewis-ink mb-6">Life Insurance Beneficiary Guide</h1>

                        {/* Answer Box */}
                        <div className="bg-white rounded-xl shadow-sm border border-lewis-border p-6 text-left mb-8">
                            <div className="flex items-start gap-3">
                                <Users className="h-6 w-6 text-lewis-blue flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-lg text-lewis-ink font-medium mb-2">
                                        Who Gets Your Life Insurance Money?
                                    </p>
                                    <p className="text-lewis-body">
                                        Your beneficiary designation—not your will—controls who receives your life insurance
                                        death benefit. Outdated designations can send money to the wrong person, delay payouts,
                                        or create family conflicts. This guide helps you choose beneficiaries correctly and
                                        avoid common costly mistakes.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Key Takeaways */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                <span>Beneficiary overrides your will</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                <span>Review after life events</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                <span>Always name contingents</span>
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

            {/* Why It Matters */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-lewis-ink text-center mb-8">
                            Why Beneficiary Designations Matter
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {whyItMatters.map((item, index) => (
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

            {/* Types of Beneficiaries */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-3 bg-green-100 text-green-800">Understanding Options</Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">Types of Beneficiary Designations</h2>
                        </div>
                        <div className="space-y-4">
                            {beneficiaryTypes.map((item, index) => (
                                <Card key={index}>
                                    <CardContent className="p-5">
                                        <h3 className="font-semibold text-lewis-ink mb-2">{item.type}</h3>
                                        <p className="text-lewis-body text-sm mb-2">{item.description}</p>
                                        <div className="bg-blue-50 p-3 rounded text-sm text-blue-800">
                                            <strong>Example:</strong> {item.example}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Who Can Be Beneficiary */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-lewis-ink">Who Can Be a Beneficiary?</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                            {whoCanBeBeneficiary.map((category, index) => (
                                <Card key={index}>
                                    <CardContent className="p-5">
                                        <div className="flex items-center gap-2 mb-3">
                                            <category.icon className="h-5 w-5 text-lewis-blue" />
                                            <h3 className="font-semibold text-lewis-ink">{category.category}</h3>
                                        </div>
                                        <ul className="space-y-2">
                                            {category.options.map((option, optIndex) => (
                                                <li
                                                    key={optIndex}
                                                    className="flex items-start gap-2 text-sm text-lewis-body"
                                                >
                                                    <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                    {option}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Common Mistakes */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-3 bg-red-100 text-red-800">Avoid These</Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">Common Beneficiary Mistakes</h2>
                            <p className="text-lewis-body mt-2">
                                These errors can delay payouts, send money to the wrong person, or create legal battles.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {commonMistakes.map((item, index) => (
                                <Card key={index} className="border-red-100">
                                    <CardContent className="p-5">
                                        <h3 className="font-semibold text-lewis-ink mb-2 flex items-center gap-2">
                                            <AlertTriangle className="h-4 w-4 text-red-500" />
                                            {item.mistake}
                                        </h3>
                                        <p className="text-lewis-body text-sm mb-2">
                                            <strong>Problem:</strong> {item.problem}
                                        </p>
                                        <div className="bg-green-50 p-3 rounded text-sm text-green-800">
                                            <strong>Solution:</strong> {item.solution}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* When to Update */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-3 bg-purple-100 text-purple-800">Life Events</Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">When to Update Your Beneficiaries</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {whenToUpdate.map((item, index) => (
                                <Card key={index}>
                                    <CardContent className="p-5">
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                                                <item.icon className="h-5 w-5 text-purple-700" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lewis-ink text-sm mb-1">
                                                    {item.event}
                                                </h3>
                                                <p className="text-lewis-body text-xs">{item.action}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Minor Children */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-3 bg-amber-100 text-amber-800">Special Considerations</Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">Naming Minor Children as Beneficiaries</h2>
                            <p className="text-lewis-body mt-2">
                                If your children are minors, you have several options for managing their inheritance.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {minorChildrenOptions.map((item, index) => (
                                <Card key={index}>
                                    <CardContent className="p-5">
                                        <h3 className="font-semibold text-lewis-ink mb-2">{item.option}</h3>
                                        <p className="text-lewis-body text-sm mb-3">{item.description}</p>
                                        <div className="grid md:grid-cols-2 gap-2">
                                            <div className="bg-green-50 p-2 rounded text-xs text-green-800">
                                                <strong>Pros:</strong> {item.pros}
                                            </div>
                                            <div className="bg-amber-50 p-2 rounded text-xs text-amber-800">
                                                <strong>Cons:</strong> {item.cons}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Best Practices */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <Card className="border-blue-200 bg-blue-50">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <Shield className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-lewis-ink mb-3">
                                            Beneficiary Designation Best Practices
                                        </h3>
                                        <ul className="grid md:grid-cols-2 gap-2 text-sm text-lewis-body">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                                Use full legal names, not just &quot;my spouse&quot;
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                                Include dates of birth and relationships
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                                Always name contingent beneficiaries
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                                Specify percentages, not dollar amounts
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                                Review annually (set calendar reminder)
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                                Update after any major life event
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                                Keep copies of beneficiary forms
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                                Verify changes were processed
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* How to Update */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-lewis-ink">How to Update Your Beneficiaries</h2>
                        </div>
                        <Card>
                            <CardContent className="p-6">
                                <ol className="space-y-4">
                                    <li className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-lewis-blue text-white flex items-center justify-center flex-shrink-0 font-bold">
                                            1
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lewis-ink">Contact Your Insurance Company or Agent</h4>
                                            <p className="text-lewis-body text-sm">
                                                Request a beneficiary change form. Some companies allow changes online through your account portal.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-lewis-blue text-white flex items-center justify-center flex-shrink-0 font-bold">
                                            2
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lewis-ink">Complete the Form Carefully</h4>
                                            <p className="text-lewis-body text-sm">
                                                Provide full legal names, dates of birth, Social Security numbers (if requested), relationships, and percentage allocations.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-lewis-blue text-white flex items-center justify-center flex-shrink-0 font-bold">
                                            3
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lewis-ink">Sign and Witness</h4>
                                            <p className="text-lewis-body text-sm">
                                                Most forms require your signature, and some require witnessing or notarization. Follow the instructions exactly.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-lewis-blue text-white flex items-center justify-center flex-shrink-0 font-bold">
                                            4
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lewis-ink">Submit and Confirm</h4>
                                            <p className="text-lewis-body text-sm">
                                                Submit the form and request written confirmation that the change was processed. Keep copies in a safe place.
                                            </p>
                                        </div>
                                    </li>
                                </ol>
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
