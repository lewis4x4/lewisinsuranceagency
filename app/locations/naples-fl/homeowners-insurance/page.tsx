import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Naples",
    state: "FL",
    citySlug: "naples-fl",
    serviceName: "Homeowners Insurance",
    serviceSlug: "homeowners-insurance",

    title: "Naples Homeowners Insurance | Compare Quotes",
    description: "Naples homeowners insurance from independent Florida agents. Compare quotes from multiple carriers for hurricane, wind, and flood coverage. Serving Collier County.",

    headline: "Naples Homeowners Insurance",
    subheadline: "Protect your Naples home with comprehensive coverage designed for Southwest Florida's coastal environment. We compare rates from multiple carriers to find the best protection for your property.",

    overview: [
        "Naples homeowners face significant insurance challenges due to the area's Gulf Coast location and hurricane exposure. From beachfront estates in Port Royal to family homes in North Naples, every Collier County property needs robust protection against wind, storm surge, and the unexpected.",
        "As an independent insurance agency, we work with multiple carriers—including admitted and surplus lines insurers—to find homeowners coverage that fits your Naples property and budget. We navigate the unique challenges of insuring high-value coastal homes and help you maximize wind mitigation discounts.",
        "The Naples insurance market has experienced significant changes following recent hurricanes. We stay current with carrier availability and help Naples homeowners find coverage options, understand their policies, and protect their substantial real estate investments.",
    ],

    whyNeeded: [
        {
            title: "Hurricane and Wind Protection",
            content: "Naples' Gulf Coast location makes it vulnerable to hurricanes approaching from the west. Recent storms have demonstrated the importance of comprehensive wind coverage with appropriate hurricane deductibles.",
        },
        {
            title: "High Property Values",
            content: "Naples has some of Florida's most valuable real estate. Adequate dwelling coverage is essential to ensure you can rebuild at current construction costs—which have increased significantly in recent years.",
        },
        {
            title: "Liability Protection",
            content: "With pools, waterfront access, and frequent entertaining common in Naples, liability coverage protects your assets if someone is injured on your property.",
        },
        {
            title: "Estate and Luxury Home Coverage",
            content: "High-value Naples homes often need specialized coverage for custom features, fine art, jewelry, and wine collections that standard policies don't adequately cover.",
        },
    ],

    localConsiderations: [
        "Hurricane deductibles typically range from 2-5% of dwelling coverage",
        "Roof age and condition significantly impact insurability and rates",
        "Wind mitigation features are essential for Naples coastal properties",
        "High-value homes may require surplus lines or specialized carriers",
        "Flood insurance is separate and critical for Collier County properties",
        "Impact-resistant windows and hurricane shutters provide substantial discounts",
    ],

    coverageHighlights: [
        { title: "Dwelling Coverage", description: "Protects your home's structure from covered perils" },
        { title: "Personal Property", description: "Covers belongings, with options for valuables" },
        { title: "Liability Protection", description: "Covers injuries or damage you cause to others" },
        { title: "Loss of Use", description: "Pays living expenses if your home is uninhabitable" },
        { title: "Other Structures", description: "Covers guest houses, pool equipment, and docks" },
        { title: "Scheduled Items", description: "Additional coverage for jewelry, art, and valuables" },
    ],

    faqs: [
        {
            question: "How much does homeowners insurance cost in Naples?",
            answer: "Naples homeowners insurance costs vary significantly based on property value, location (beachfront vs. inland), construction, roof age, and coverage limits. High-value coastal properties pay substantially more. Comparing quotes from multiple carriers is essential for finding competitive rates.",
        },
        {
            question: "Can you insure high-value Naples homes?",
            answer: "Yes. We work with specialized carriers that insure high-value and luxury homes in Naples. These carriers understand unique coverage needs like custom construction, fine art, and extended replacement cost coverage.",
        },
        {
            question: "Do I need flood insurance in Naples?",
            answer: "Absolutely. Flood damage is excluded from homeowners policies, and Naples' coastal location and recent hurricane history make flood insurance essential. Many Naples properties are in high-risk flood zones requiring coverage for mortgages.",
        },
        {
            question: "What's a hurricane deductible in Naples?",
            answer: "Hurricane deductibles are separate from regular deductibles and apply when named hurricanes cause damage. They're typically 2-5% of dwelling coverage. On a $1 million Naples home, a 2% hurricane deductible means $20,000 out of pocket before coverage kicks in.",
        },
        {
            question: "How do wind mitigation features help in Naples?",
            answer: "Wind mitigation features like hurricane shutters, impact windows, hip roofs, and roof-to-wall straps can earn substantial premium discounts—often saving thousands annually on Naples coastal properties. A wind mitigation inspection documents these features.",
        },
    ],

    relatedServices: [
        { title: "Naples Flood Insurance", href: "/locations/naples-fl/flood-insurance", description: "Essential Gulf Coast coverage" },
        { title: "Naples Condo Insurance", href: "/locations/naples-fl/condo-insurance", description: "HO-6 coverage for Naples condos" },
        { title: "Collier County Insurance", href: "/locations/naples-fl", description: "All insurance services" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function NaplesHomeownersInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
