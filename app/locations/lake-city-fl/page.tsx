import { CityPageTemplate, type CityPageData } from "@/components/templates"
import { generateCityMetadata } from "@/lib/schema"
import type { Metadata } from "next"

const pageData: CityPageData = {
    city: "Lake City",
    state: "FL",
    county: "Columbia",
    slug: "lake-city-fl",

    title: "Lake City, FL Insurance Agency | Lewis Insurance",
    description: "Find affordable home, auto, flood, and business insurance in Lake City, FL. Lewis Insurance - your local North Central Florida insurance experts.",

    headline: "Insurance Agents in Lake City, Florida",
    subheadline: "Your local Lake City insurance agency. We compare rates from multiple carriers to find you the best coverage at competitive prices.",

    overview: [
        "Lewis Insurance is proud to call Lake City home. Located at 1313 W US Highway 90, we've been serving Columbia County and the surrounding North Central Florida region with personalized insurance solutions.",
        "As an independent agency, we're not tied to any single insurance company. This means we can shop your coverage with multiple carriers to find the best rates and coverage for your specific needs—whether you're protecting your home, vehicles, or business.",
        "Lake City and Columbia County offer a mix of rural charm and growing commerce. From family homes to farms, from small businesses to larger commercial operations, we understand the insurance needs of our local community.",
        "Stop by our office on Highway 90, give us a call, or request a quote online. Experience the difference a local, independent insurance agent can make.",
    ],

    localFactors: [
        "North Central Florida location means less hurricane exposure than coastal areas, but storms still impact the region",
        "Rural properties and acreage may need specialized coverage for outbuildings and farm equipment",
        "Flood risk exists along the Suwannee and Santa Fe rivers and low-lying areas",
        "Local knowledge of Columbia County helps us find the right coverage for your property",
        "Small business community needs accessible, personalized commercial insurance",
        "We serve the gateway to North Florida—convenient for Jacksonville, Gainesville, and Tallahassee residents",
    ],

    neighborhoods: [
        "Downtown Lake City",
        "US 90 Corridor",
        "I-75 Area",
        "Lake DeSoto",
        "Five Points",
        "Fort White",
        "High Springs",
        "Live Oak",
        "Wellborn",
        "White Springs",
    ],

    topCoverages: [
        {
            title: "Homeowners Insurance",
            description: "Protect your Lake City home from storms, fire, and theft.",
            href: "/personal/homeowners-insurance-florida",
        },
        {
            title: "Auto Insurance",
            description: "Coverage for Lake City drivers and commuters.",
            href: "/personal/auto-insurance-florida",
        },
        {
            title: "Flood Insurance",
            description: "Protection for properties near rivers and low areas.",
            href: "/personal/flood-insurance-florida",
        },
        {
            title: "Business Insurance",
            description: "Coverage for Lake City businesses large and small.",
            href: "/business",
        },
        {
            title: "Workers Compensation",
            description: "Required coverage for local employers.",
            href: "/business/workers-compensation-florida",
        },
        {
            title: "Commercial Auto",
            description: "Fleet coverage for local businesses.",
            href: "/business/commercial-auto-florida",
        },
    ],

    faqs: [
        {
            question: "Where is Lewis Insurance located?",
            answer: "We're located at 1313 W US Highway 90 in Lake City, FL 32055. Stop by during business hours or call us at (386) 755-0050 to schedule an appointment. We're proud to serve Columbia County and all of North Central Florida.",
        },
        {
            question: "Do Lake City homes need hurricane insurance?",
            answer: "While Lake City is inland, hurricanes and tropical storms still impact North Central Florida with damaging winds and heavy rain. All Florida homeowners policies include wind coverage. We'll help you understand your deductible options and ensure adequate protection.",
        },
        {
            question: "Do I need flood insurance in Lake City?",
            answer: "Properties near the Suwannee River, Santa Fe River, or in low-lying areas may be in flood zones. Even outside designated zones, flooding can occur. We recommend reviewing your flood risk—standard homeowners insurance doesn't cover flood damage.",
        },
        {
            question: "Can you help with farm and rural property insurance?",
            answer: "Yes! Lake City and Columbia County have many rural properties with unique needs—acreage, outbuildings, farm equipment, and livestock. We work with carriers that understand rural and agricultural properties and can find appropriate coverage.",
        },
        {
            question: "What areas do you serve from Lake City?",
            answer: "We serve all of Columbia County and surrounding North Central Florida including Live Oak, High Springs, Fort White, Gainesville, and more. We're also licensed throughout Florida and can help clients anywhere in the state.",
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

export default function LakeCityPage() {
    return <CityPageTemplate data={pageData} />
}
