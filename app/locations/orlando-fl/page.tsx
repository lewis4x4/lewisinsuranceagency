import { CityPageTemplate, type CityPageData } from "@/components/templates"
import { generateCityMetadata } from "@/lib/schema"
import type { Metadata } from "next"

const pageData: CityPageData = {
    city: "Orlando",
    state: "FL",
    county: "Orange",
    slug: "orlando-fl",

    title: "Orlando, FL Insurance Agency | Lewis Insurance",
    description: "Find affordable home, auto, flood, and business insurance in Orlando, FL. Lewis Insurance compares quotes for Central Florida residents and businesses.",

    headline: "Insurance Agents in Orlando, Florida",
    subheadline: "Get personalized insurance coverage for your Orlando home, vehicle, or business. We compare rates from multiple carriers to find you the best deal.",

    overview: [
        "Orlando is the heart of Central Florida—a growing metropolitan area known for world-class attractions, a thriving tech sector, and diverse residential communities. From Lake Nona's medical city to Winter Park's historic charm to downtown's urban renaissance, Orlando offers something for everyone.",
        "Lewis Insurance serves the greater Orlando area, including Orange, Seminole, and Osceola counties. As an independent agency, we work with multiple insurance carriers to find the best coverage and rates for your specific needs—whether you're insuring a new construction home, a classic bungalow, or a growing business.",
        "While Orlando isn't directly on the coast, Central Florida still faces significant hurricane exposure. The 2004 hurricane season reminded residents that damaging storms can reach well inland. We help Orlando clients understand their wind, water, and liability exposures and build appropriate coverage.",
        "Central Florida's growth means new construction, new businesses, and new residents arriving every day. Whether you're relocating from out of state or a longtime Orlando local, we're here to help you navigate Florida insurance and find the protection you need.",
    ],

    localFactors: [
        "Central Florida is inland but still faces significant hurricane exposure from storms moving across the state",
        "Many Orlando neighborhoods have lakes and retention ponds that can flood during heavy rains",
        "New construction in communities like Lake Nona and Horizon West may qualify for insurance discounts",
        "Orlando's tourist traffic increases auto accident risk and congestion",
        "Sinkhole activity in some Central Florida areas may require additional coverage consideration",
        "Business insurance needs range from tourist services to tech companies to professional offices",
    ],

    neighborhoods: [
        "Downtown Orlando",
        "Winter Park",
        "Lake Nona",
        "Dr. Phillips",
        "Windermere",
        "Baldwin Park",
        "Thornton Park",
        "College Park",
        "Horizon West",
        "Celebration",
        "Kissimmee",
        "Altamonte Springs",
    ],

    topCoverages: [
        {
            title: "Homeowners Insurance",
            description: "Protect your Orlando home from storms, theft, and more.",
            href: "/personal/homeowners-insurance-florida",
        },
        {
            title: "Auto Insurance",
            description: "Coverage for I-4 commuters and Orlando traffic.",
            href: "/personal/auto-insurance-florida",
        },
        {
            title: "Flood Insurance",
            description: "Protection for lakefront and low-lying Orlando properties.",
            href: "/personal/flood-insurance-florida",
        },
        {
            title: "Renters Insurance",
            description: "Affordable coverage for Orlando apartment dwellers.",
            href: "/personal/renters-insurance-florida",
        },
        {
            title: "Business Insurance",
            description: "Coverage for Orlando's growing business community.",
            href: "/business",
        },
        {
            title: "Commercial Auto",
            description: "Fleet coverage for delivery and service businesses.",
            href: "/business/commercial-auto-florida",
        },
    ],

    faqs: [
        {
            question: "Does Orlando need hurricane insurance?",
            answer: "Absolutely. While Orlando is 50 miles from the coast, hurricanes regularly impact Central Florida with damaging winds and heavy rain. The 2004 season brought multiple storms through Orlando. All Florida homeowners policies include wind coverage (often with a separate hurricane deductible).",
        },
        {
            question: "Do I need flood insurance in Orlando?",
            answer: "Many people assume inland Orlando doesn't flood, but that's not true. Heavy summer rains, tropical systems, and Orlando's flat terrain with many lakes and retention ponds can cause flooding. If you're near a lake or in a designated flood zone, we strongly recommend flood insurance.",
        },
        {
            question: "Is sinkhole coverage included in Orlando home insurance?",
            answer: "Standard Florida policies include coverage for 'catastrophic ground cover collapse' but not general sinkhole damage. Orlando and Central Florida have some sinkhole activity. Additional sinkhole coverage is available as an endorsement—we can help you determine if it's right for your property.",
        },
        {
            question: "Can you help with vacation rental insurance in Orlando?",
            answer: "Yes. Orlando's tourism industry means many homeowners rent their properties short-term. Standard homeowners policies don't cover this—you need specialized vacation rental or dwelling fire coverage. We work with carriers offering vacation rental insurance in the Orlando area.",
        },
        {
            question: "Do you serve all of Central Florida?",
            answer: "Yes! We serve the entire greater Orlando metro, including Winter Park, Winter Garden, Kissimmee, Sanford, Lake Mary, and surrounding communities. We're licensed throughout Florida and can help wherever you are in the state.",
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

export default function OrlandoPage() {
    return <CityPageTemplate data={pageData} />
}
