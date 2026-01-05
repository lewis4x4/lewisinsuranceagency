import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Jacksonville",
    state: "FL",
    citySlug: "jacksonville-fl",
    serviceName: "Homeowners Insurance",
    serviceSlug: "homeowners-insurance",

    title: "Jacksonville Homeowners Insurance | Compare Quotes",
    description: "Find affordable homeowners insurance in Jacksonville, FL. Compare quotes for hurricane and wind coverage. Serving Duval County and Northeast Florida.",

    headline: "Jacksonville Homeowners Insurance",
    subheadline: "Protect your Jacksonville home with comprehensive coverage designed for Northeast Florida's needs. Compare rates from multiple carriers.",

    overview: [
        "Jacksonville homeowners need insurance that addresses both hurricane exposure and the area's unique mix of coastal and inland properties. From the beaches of Atlantic Beach and Neptune Beach to the historic neighborhoods of Riverside and Avondale, Duval County homes need proper protection.",
        "As an independent insurance agency, we work with multiple carriers to find homeowners coverage that fits your Jacksonville property. We understand the local market—from older homes that may need updates to qualify for coverage to newer construction in areas like Nocatee.",
        "Jacksonville's size and diversity mean insurance needs vary significantly across the city. We help homeowners throughout Duval County find comprehensive protection at competitive rates.",
    ],

    whyNeeded: [
        {
            title: "Hurricane Protection",
            content: "Jacksonville's Atlantic coast location creates hurricane exposure. While the area hasn't experienced a direct hit in decades, near-misses remind residents that preparation is essential.",
        },
        {
            title: "Property Diversity",
            content: "From historic Riverside homes to new Nocatee construction, Jacksonville's housing stock is diverse. We help match the right coverage to your specific property.",
        },
        {
            title: "River Flooding Risk",
            content: "The St. Johns River can flood during heavy rain and storm events. Properties near the river need to consider flood exposure even if not on the coast.",
        },
        {
            title: "Mortgage Requirements",
            content: "Lenders require homeowners insurance to protect their investment. We ensure your coverage meets requirements while fitting your budget.",
        },
    ],

    localConsiderations: [
        "Beaches and coastal properties face higher hurricane and flood exposure",
        "Historic homes in Riverside, Avondale, and Springfield may need updates for coverage",
        "Newer construction in Nocatee and St. Johns County often qualifies for better rates",
        "St. Johns River flooding affects properties throughout the area",
        "Wind mitigation features can significantly reduce premiums",
        "Flood insurance is separate and recommended for many properties",
    ],

    faqs: [
        {
            question: "How much does Jacksonville homeowners insurance cost?",
            answer: "Jacksonville rates are generally more competitive than South Florida due to lower hurricane risk. Costs depend on location, age, construction, roof condition, and coverage limits. Beach properties cost more than inland homes.",
        },
        {
            question: "Do I need flood insurance in Jacksonville?",
            answer: "It depends on location. Beach properties and those near the St. Johns River face significant flood risk. Even properties not in flood zones can flood from heavy rain. We recommend flood insurance for most Jacksonville properties.",
        },
        {
            question: "Can you insure older Jacksonville homes?",
            answer: "Yes, though historic homes may need updates to electrical, plumbing, or roofing to qualify with standard carriers. We work with carriers that understand older properties and can find appropriate coverage.",
        },
        {
            question: "Does Jacksonville have lower insurance rates than South Florida?",
            answer: "Generally yes. Jacksonville's location in Northeast Florida means lower hurricane risk than Miami or Fort Lauderdale. However, rates still reflect Florida's overall market challenges, and beach properties pay more.",
        },
    ],

    relatedServices: [
        { title: "Jacksonville Flood Insurance", href: "/locations/jacksonville-fl/flood-insurance", description: "Essential flood protection" },
        { title: "All Jacksonville Coverage", href: "/locations/jacksonville-fl", description: "View all options" },
        { title: "Florida Homeowners Insurance", href: "/personal/homeowners-insurance-florida", description: "Statewide coverage info" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function JacksonvilleHomeownersPage() {
    return <CityServicePageTemplate data={pageData} />
}
