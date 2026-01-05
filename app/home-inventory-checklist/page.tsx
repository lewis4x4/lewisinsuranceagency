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
    Camera,
    Sofa,
    Shirt,
    Tv,
    Utensils,
    Wrench,
    Car,
    Gem,
    FileText,
    Smartphone,
    Download,
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
    title: "Home Inventory Checklist for Insurance | Lewis Insurance",
    description:
        "Complete home inventory checklist for insurance claims. Room-by-room guide to document your belongings. Free tips for Florida homeowners.",
    alternates: {
        canonical: `${baseUrl}/home-inventory-checklist`,
    },
    openGraph: {
        title: "Home Inventory Checklist for Insurance | Lewis Insurance",
        description:
            "Document your belongings room-by-room. Essential for insurance claims after fire, theft, or storm damage.",
        url: `${baseUrl}/home-inventory-checklist`,
        siteName: siteConfig.name,
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Home Inventory Checklist for Insurance | Lewis Insurance",
        description:
            "Document your belongings room-by-room. Essential for insurance claims after fire, theft, or storm damage.",
    },
}

const whyItMatters = [
    {
        title: "Faster Claims Settlement",
        description:
            "When you have documentation ready, your insurance company can process your claim faster. No waiting while you try to remember what you owned.",
    },
    {
        title: "Accurate Claim Amounts",
        description:
            "Most people underestimate their belongings by 20-40%. A proper inventory ensures you claim everything you're entitled to—not just what you remember.",
    },
    {
        title: "Proof of Ownership",
        description:
            "After a total loss, proving you owned specific items can be challenging. Photos, receipts, and serial numbers provide evidence insurance companies accept.",
    },
    {
        title: "Coverage Gap Identification",
        description:
            "Creating an inventory often reveals you own more than your policy's contents limit. Better to discover this now than after a loss.",
    },
]

const livingRoom = [
    "Sofas, loveseats, recliners",
    "Coffee tables, end tables",
    "Entertainment center/TV stand",
    "Television(s) with size and brand",
    "Sound system/speakers",
    "Gaming consoles and accessories",
    "Lamps and lighting fixtures",
    "Rugs and carpets",
    "Curtains, blinds, window treatments",
    "Artwork, wall décor, mirrors",
    "Books, bookcases, shelving",
    "Fireplace accessories",
    "Decorative items and collectibles",
]

const kitchen = [
    "Refrigerator (size, brand, features)",
    "Stove/range and oven",
    "Dishwasher",
    "Microwave",
    "Small appliances (mixer, blender, coffee maker, toaster, etc.)",
    "Pots, pans, bakeware",
    "Dishes, glassware, mugs",
    "Silverware and utensils",
    "Food storage containers",
    "Kitchen table and chairs",
    "Knife sets and specialty tools",
    "Specialty cookware (cast iron, copper, etc.)",
]

const bedrooms = [
    "Beds and bed frames (note size: twin, queen, king)",
    "Mattresses and box springs",
    "Dressers and nightstands",
    "Desks and chairs",
    "Bedding (comforters, sheets, pillows)",
    "Lamps and lighting",
    "Closet contents (see clothing section)",
    "TVs and electronics",
    "Jewelry boxes (contents inventoried separately)",
    "Mirrors and artwork",
]

const clothing = [
    "Everyday clothing by category (shirts, pants, dresses, etc.)",
    "Formal wear and suits",
    "Outerwear (coats, jackets, rain gear)",
    "Shoes and boots (athletic, dress, casual)",
    "Accessories (belts, ties, scarves, hats)",
    "Handbags and wallets",
    "Watches",
    "Specialty clothing (uniforms, costumes, sports gear)",
]

const bathrooms = [
    "Towels and linens",
    "Small appliances (hair dryer, electric razor, etc.)",
    "Medicine cabinet contents",
    "Toiletries and personal care items",
    "Storage cabinets and contents",
]

const garage = [
    "Power tools (drill, saw, sander, etc.)",
    "Hand tools",
    "Tool chests and storage",
    "Lawn mower and yard equipment",
    "Gardening tools",
    "Ladders",
    "Bicycles",
    "Sports equipment",
    "Holiday decorations",
    "Automotive supplies and accessories",
    "Workbench",
    "Storage shelving and contents",
]

const electronics = [
    "Computers (desktop, laptop) with specs",
    "Tablets and e-readers",
    "Smartphones (keep separate from carrier records)",
    "Printers and scanners",
    "Cameras and lenses",
    "Smart home devices (thermostat, doorbell, speakers)",
    "WiFi routers and networking equipment",
    "External hard drives and storage",
    "Headphones and earbuds",
]

const valuables = [
    "Jewelry (rings, necklaces, bracelets, watches)",
    "Fine art and antiques",
    "Collectibles (coins, stamps, sports memorabilia)",
    "Musical instruments",
    "Firearms (with serial numbers)",
    "Furs",
    "Silver, china, crystal",
]

const documentationTips = [
    {
        title: "Take Photos and Video",
        description:
            "Walk through every room recording video. Open drawers, closets, and cabinets. Zoom in on brand names and model numbers. Take still photos of valuable items.",
        icon: Camera,
    },
    {
        title: "Record Serial Numbers",
        description:
            "For electronics, appliances, tools, and firearms, record serial numbers. These prove ownership and can help recover stolen items.",
        icon: FileText,
    },
    {
        title: "Save Receipts",
        description:
            "Keep receipts for major purchases. Digital copies work—email yourself receipts or use a receipt-scanning app. Credit card statements can also document purchases.",
        icon: Download,
    },
    {
        title: "Use an Inventory App",
        description:
            "Apps like Sortly, Encircle, or your insurance company's app make inventories easier. They store photos, values, and receipts in one place.",
        icon: Smartphone,
    },
    {
        title: "Store Copies Off-Site",
        description:
            "Your inventory won't help if it's destroyed with your home. Store copies in the cloud, email them to yourself, or keep a copy at another location.",
        icon: Download,
    },
    {
        title: "Update Annually",
        description:
            "Review and update your inventory once a year. Add new purchases, remove items you've sold or donated, and update values for appreciated items.",
        icon: CheckCircle2,
    },
]

const faqs = [
    {
        question: "How detailed should my home inventory be?",
        answer: "The more detail, the better. For everyday items, category counts work (e.g., '15 dress shirts, $50 average'). For valuables, document each item individually with photos, receipts, and appraisals. Electronics should include brand, model, serial number, and purchase date.",
    },
    {
        question: "What's the best way to document my belongings?",
        answer: "A combination of video walkthrough, photographs, and a written spreadsheet works best. Video captures everything quickly; photos provide detail for valuable items; a spreadsheet lets you track values and update easily. Store all three in the cloud.",
    },
    {
        question: "How often should I update my home inventory?",
        answer: "At minimum, update annually—many people do this when they renew their homeowners policy. Also update after major purchases, gifts, or life events like inheritance. Set a calendar reminder so you don't forget.",
    },
    {
        question: "Do I need receipts for an insurance claim?",
        answer: "Receipts help but aren't always required. Insurance companies accept photos showing ownership, credit card statements, and your detailed inventory as evidence. For high-value items like jewelry or art, professional appraisals strengthen your claim.",
    },
    {
        question: "Should I include clothing in my home inventory?",
        answer: "Yes. Clothing adds up quickly—most families have $5,000-$20,000 or more in clothing. You don't need to photograph every shirt, but document categories with approximate counts and average values. Include designer items and formal wear individually.",
    },
    {
        question: "What about items in storage units or at other locations?",
        answer: "Your homeowners policy typically provides some off-premises coverage (usually 10% of contents coverage). Document items in storage units, at vacation homes, or stored with family. Let your insurance agent know about significant off-site property.",
    },
    {
        question: "How do I inventory inherited or antique items?",
        answer: "Get professional appraisals for valuable antiques, art, and inherited jewelry. Standard homeowners policies have sub-limits for these categories—you may need scheduled personal property coverage (a floater) for full protection.",
    },
    {
        question: "Does my home inventory affect my insurance premium?",
        answer: "Creating an inventory doesn't affect your premium, but it might reveal you need more coverage. If your inventory shows $100,000 in belongings but your policy only covers $50,000, you're underinsured. Increasing coverage will affect your premium.",
    },
]

const relatedResources = [
    {
        title: "Hurricane Checklist",
        href: "/hurricane-preparation-checklist",
        description: "Prepare for hurricane season",
    },
    {
        title: "Homeowners Insurance",
        href: "/personal/homeowners-insurance-florida",
        description: "Florida homeowners coverage",
    },
    {
        title: "4-Point Inspection",
        href: "/4-point-inspection-guide",
        description: "What inspectors check",
    },
    {
        title: "Contact Us",
        href: "/contact",
        description: "Get a free coverage review",
    },
]

export default function HomeInventoryChecklistPage() {
    const faqSchema = generateFAQSchema(faqs)

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Home Inventory Checklist", url: `${baseUrl}/home-inventory-checklist` },
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
                        <li className="text-lewis-blue font-medium">Home Inventory Checklist</li>
                    </ol>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-gradient py-16 md:py-24">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <Badge className="mb-4 bg-blue-100 text-blue-800">Insurance Tool</Badge>
                        <h1 className="text-lewis-ink mb-6">
                            Home Inventory Checklist for Insurance
                        </h1>

                        {/* Answer Box */}
                        <div className="bg-white rounded-xl shadow-sm border border-lewis-border p-6 text-left mb-8">
                            <div className="flex items-start gap-3">
                                <Camera className="h-6 w-6 text-lewis-blue flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-lg text-lewis-ink font-medium mb-2">
                                        Document Before Disaster Strikes
                                    </p>
                                    <p className="text-lewis-body">
                                        A home inventory is your proof of ownership for insurance claims. After a fire,
                                        theft, or storm, you&apos;ll need to list everything you lost. This checklist helps you
                                        document your belongings room-by-room so you&apos;re prepared.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Key Takeaways */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                <span>Speeds up claims</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                <span>Proves ownership</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                <span>Identifies coverage gaps</span>
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
                            Why a Home Inventory Matters
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {whyItMatters.map((item, index) => (
                                <Card key={index}>
                                    <CardContent className="p-5">
                                        <h3 className="font-semibold text-lewis-ink mb-2">{item.title}</h3>
                                        <p className="text-lewis-body text-sm">{item.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Room by Room */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-10">
                            <Badge className="mb-3 bg-green-100 text-green-800">Room-by-Room Guide</Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">What to Document</h2>
                            <p className="text-lewis-body mt-2">
                                Work through your home systematically. Don&apos;t forget closets, cabinets, and storage areas.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Living Room */}
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-lewis-blue/10 flex items-center justify-center">
                                            <Sofa className="h-5 w-5 text-lewis-blue" />
                                        </div>
                                        <h3 className="font-semibold text-lewis-ink text-lg">Living Room</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {livingRoom.map((item, index) => (
                                            <li key={index} className="flex items-start gap-2 text-sm text-lewis-body">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Kitchen */}
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-lewis-blue/10 flex items-center justify-center">
                                            <Utensils className="h-5 w-5 text-lewis-blue" />
                                        </div>
                                        <h3 className="font-semibold text-lewis-ink text-lg">Kitchen</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {kitchen.map((item, index) => (
                                            <li key={index} className="flex items-start gap-2 text-sm text-lewis-body">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Bedrooms */}
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-lewis-blue/10 flex items-center justify-center">
                                            <Sofa className="h-5 w-5 text-lewis-blue" />
                                        </div>
                                        <h3 className="font-semibold text-lewis-ink text-lg">Bedrooms</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {bedrooms.map((item, index) => (
                                            <li key={index} className="flex items-start gap-2 text-sm text-lewis-body">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Clothing */}
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-lewis-blue/10 flex items-center justify-center">
                                            <Shirt className="h-5 w-5 text-lewis-blue" />
                                        </div>
                                        <h3 className="font-semibold text-lewis-ink text-lg">Clothing & Accessories</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {clothing.map((item, index) => (
                                            <li key={index} className="flex items-start gap-2 text-sm text-lewis-body">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Garage */}
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-lewis-blue/10 flex items-center justify-center">
                                            <Wrench className="h-5 w-5 text-lewis-blue" />
                                        </div>
                                        <h3 className="font-semibold text-lewis-ink text-lg">Garage & Outdoor</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {garage.map((item, index) => (
                                            <li key={index} className="flex items-start gap-2 text-sm text-lewis-body">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Electronics */}
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-lewis-blue/10 flex items-center justify-center">
                                            <Tv className="h-5 w-5 text-lewis-blue" />
                                        </div>
                                        <h3 className="font-semibold text-lewis-ink text-lg">Electronics</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {electronics.map((item, index) => (
                                            <li key={index} className="flex items-start gap-2 text-sm text-lewis-body">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Bathrooms - smaller */}
                        <Card className="mt-6">
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-lewis-ink text-lg mb-4">Bathrooms</h3>
                                <div className="flex flex-wrap gap-4">
                                    {bathrooms.map((item, index) => (
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

            {/* High-Value Items */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-3 bg-amber-100 text-amber-800">Important</Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">High-Value Items Need Extra Attention</h2>
                            <p className="text-lewis-body mt-2">
                                Standard homeowners policies have sub-limits for certain categories. Document these carefully
                                and discuss coverage with your agent.
                            </p>
                        </div>

                        <Card className="border-amber-200 bg-amber-50">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <Gem className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-lewis-ink mb-3">
                                            Items That May Need Scheduled Coverage
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {valuables.map((item, index) => (
                                                <div key={index} className="flex items-center gap-2 text-sm text-lewis-body">
                                                    <AlertTriangle className="h-4 w-4 text-amber-600 flex-shrink-0" />
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-sm text-lewis-body mt-4">
                                            Most homeowners policies limit jewelry to $1,500-$2,500, firearms to $2,500,
                                            and collectibles to $1,000. If you own valuable items, you may need a personal
                                            articles floater for full protection.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Documentation Tips */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-3 bg-blue-100 text-blue-800">How-To</Badge>
                            <h2 className="text-2xl font-bold text-lewis-ink">Documentation Best Practices</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {documentationTips.map((tip, index) => (
                                <Card key={index}>
                                    <CardContent className="p-5">
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 rounded-full bg-lewis-blue/10 flex items-center justify-center flex-shrink-0">
                                                <tip.icon className="h-5 w-5 text-lewis-blue" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lewis-ink text-sm mb-1">{tip.title}</h3>
                                                <p className="text-lewis-body text-xs">{tip.description}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Don't Forget */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <Card className="border-green-200 bg-green-50">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <Car className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-lewis-ink mb-2">
                                            Don&apos;t Forget These Often-Missed Items
                                        </h3>
                                        <ul className="grid md:grid-cols-2 gap-2 text-sm text-lewis-body">
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                                Items in attic or basement
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                                Items stored at other locations
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                                Children&apos;s belongings
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                                Holiday decorations
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                                Cleaning supplies and pantry items
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                                Pet supplies and equipment
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                                Books and media collections
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                                Hobby equipment and supplies
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
