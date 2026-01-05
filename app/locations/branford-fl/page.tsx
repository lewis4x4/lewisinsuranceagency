import { CityPageTemplate, type CityPageData } from "@/components/templates"
import { generateCityMetadata } from "@/lib/schema"
import type { Metadata } from "next"

const pageData: CityPageData = {
    city: "Branford",
    state: "FL",
    county: "Suwannee",
    slug: "branford-fl",

    title: "Branford, FL Insurance Agency | Lewis Insurance",
    description: "Home, auto, mobile home, and business insurance in Branford, FL. Independent agents serving Suwannee County. Compare quotes.",

    headline: "Insurance Agents Serving Branford, Florida",
    subheadline: "Local independent insurance agency for Branford and the Suwannee River area. We compare carriers to find coverage that protects your family and budget.",

    overview: [
        "Branford occupies one of the most geographically unique locations in North Florida—sitting at the confluence of the Suwannee and Santa Fe rivers. This small Suwannee County community of about 700 residents has become internationally recognized as a premier cave diving destination, with numerous underwater cave systems attracting divers from around the world. Lewis Insurance Agency understands the distinct insurance needs this creates for Branford property owners and businesses.",
        "The dual-river location creates significant flood exposure that property owners must address. Standard homeowners insurance excludes flood damage, making separate flood coverage essential for many Branford properties. Even homes not in designated flood zones can experience flooding from the rivers during heavy rainfall or tropical weather events. We help Branford residents evaluate their flood risk and secure appropriate protection.",
        "Beyond flood considerations, Branford's rural character means many properties include acreage, outbuildings, and features requiring specialized coverage. Mobile and manufactured homes are common throughout the area. Businesses serving the diving and outdoor recreation community need liability coverage appropriate to their activities. We work with carriers that understand these varied needs.",
        "Our Lake City office is just 30 minutes from Branford, allowing us to serve this community with personal attention. As an independent agency since 1981, we compare options from multiple carriers to find home, auto, mobile home, boat, flood, and business insurance that fits your situation. Contact us for quotes tailored to Branford's unique environment.",
    ],

    localFactors: [
        "Suwannee River and Santa Fe River proximity creates flood zone considerations",
        "Many riverfront and rural properties need specialized coverage",
        "Popular area for boating, kayaking, and spring activities",
        "Mobile homes common in the area—we specialize in manufactured home coverage",
        "Small-town atmosphere with personalized service expectations",
        "Agricultural properties may need farm-specific coverage options",
    ],

    neighborhoods: [
        "Downtown Branford",
        "US-27 Corridor",
        "Suwannee River area",
        "Santa Fe River area",
        "Live Oak",
        "Fort White",
        "High Springs",
        "Mayo",
    ],

    topCoverages: [
        {
            title: "Auto Insurance",
            description: "Coverage for Branford drivers on rural and highway roads.",
            href: "/locations/branford-fl/auto-insurance",
        },
        {
            title: "Homeowners Insurance",
            description: "Protect your Branford home from covered perils.",
            href: "/locations/branford-fl/homeowners-insurance",
        },
        {
            title: "Mobile Home Insurance",
            description: "Specialized coverage for manufactured homes.",
            href: "/locations/branford-fl/mobile-home-insurance",
        },
        {
            title: "Boat Insurance",
            description: "Coverage for river and spring boating.",
            href: "/locations/branford-fl/boat-insurance",
        },
        {
            title: "Business Insurance",
            description: "Commercial coverage for local businesses.",
            href: "/locations/branford-fl/business-insurance",
        },
        {
            title: "Flood Insurance",
            description: "Essential for properties near the rivers.",
            href: "/personal/flood-insurance-florida",
        },
    ],

    faqs: [
        {
            question: "Do you have an office in Branford?",
            answer: "Our office is in Lake City, conveniently located for Branford residents. We serve all of Suwannee County and can handle your insurance needs by phone, email, or in person at our Lake City location.",
        },
        {
            question: "Do Branford homes need flood insurance?",
            answer: "Given Branford's location near the Suwannee and Santa Fe rivers, many properties are in flood zones. Even if not required, flood insurance protects against a risk that standard homeowners policies exclude. We can help evaluate your flood exposure.",
        },
        {
            question: "Can you insure riverfront property in Branford?",
            answer: "Yes. Riverfront properties have unique needs—flood coverage, dock structures, and sometimes boat houses. We work with carriers that understand waterfront properties and can find appropriate coverage.",
        },
        {
            question: "What about mobile home insurance in Branford?",
            answer: "We specialize in mobile home and manufactured housing insurance. Whether you own your lot or rent, we can find coverage that protects your home and belongings from Suwannee County weather and other risks.",
        },
        {
            question: "How do I get an insurance quote for Branford?",
            answer: "Call us at (386) 755-0050 or request a quote online. We'll ask about your coverage needs and provide quotes from multiple carriers so you can compare options.",
        },
    ],
}

export const metadata: Metadata = generateCityMetadata({
    city: pageData.city,
    state: pageData.state,
    slug: pageData.slug,
    title: pageData.title,
    description: pageData.description,
})

export default function BranfordPage() {
    return <CityPageTemplate data={pageData} />
}
