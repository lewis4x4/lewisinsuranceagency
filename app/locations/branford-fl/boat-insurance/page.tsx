import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Branford",
    state: "FL",
    citySlug: "branford-fl",
    serviceName: "Boat Insurance",
    serviceSlug: "boat-insurance",

    title: "Branford Boat Insurance | Suwannee County FL",
    description: "Boat insurance in Branford, FL. Marine coverage for Suwannee River and Santa Fe River boaters. Independent agents compare carriers since 1981.",

    headline: "Branford Boat Insurance",
    subheadline: "Coverage for boaters on the Suwannee and Santa Fe rivers. From kayaks to fishing boats, we compare marine insurance to protect your time on the water.",

    overview: [
        "Branford's location at the confluence of the Suwannee and Santa Fe rivers makes it a prime spot for boating, kayaking, and fishing. Whether you're launching at local ramps or paddling to the springs, boat insurance protects your investment and covers liability on the water.",
        "Boat insurance varies based on your vessel, usage, and navigation area. Branford boaters using local rivers have different needs than those who trailer to coastal waters. Your policy should reflect your actual boating habits.",
        "Lewis Insurance Agency has helped Branford area boaters since 1981. We work with marine carriers who understand Florida waterways and can cover everything from jon boats and kayaks to larger vessels. As an independent agency, we compare options for competitive rates.",
    ],

    whyNeeded: [
        {
            title: "River Liability Coverage",
            content: "Accidents happen on the water—collisions, wake damage, or injuries to others. Boat insurance liability protects your assets if you're responsible for damage or injuries.",
        },
        {
            title: "Physical Damage Protection",
            content: "Your boat faces risks from collisions with submerged objects, weather, theft, and transport accidents. Coverage protects your vessel whether on the river or stored at home.",
        },
        {
            title: "Equipment and Gear",
            content: "Fishing equipment, electronics, trolling motors, and personal gear add significant value. Boat insurance can cover equipment your homeowners or auto policy may exclude.",
        },
        {
            title: "Trailer Coverage",
            content: "Branford boaters often trailer their boats to different launch points. Your boat policy should cover the trailer and protect against accidents during transport.",
        },
    ],

    localConsiderations: [
        "Coverage for Suwannee and Santa Fe river navigation",
        "Coastal coverage if you trailer to Gulf waters",
        "Agreed value vs. actual cash value options",
        "Trailer protection for transport",
        "Fishing and personal effects coverage",
        "Towing and assistance on the water",
        "Storage considerations for off-season",
    ],

    coverageHighlights: [
        { title: "Hull Coverage", description: "Physical damage to your boat" },
        { title: "Liability Protection", description: "Injuries or damage you cause" },
        { title: "Medical Payments", description: "Passenger injuries" },
        { title: "Uninsured Boater", description: "Protection from others" },
        { title: "Trailer Coverage", description: "Your boat trailer" },
        { title: "Personal Effects", description: "Gear and equipment" },
    ],

    faqs: [
        {
            question: "What information do you need to quote boat insurance?",
            answer: "We'll need your boat's year, make, model, length, and hull type. We'll also ask about experience, where you operate, storage arrangements, and safety equipment or training.",
        },
        {
            question: "Can you compare carriers for boat insurance?",
            answer: "Yes. As an independent agency, we work with several marine carriers. We compare coverage and rates to find options fitting your specific boat and Suwannee River usage.",
        },
        {
            question: "Does my policy cover both river and coastal use?",
            answer: "Most policies let you specify your navigation area. If you boat the local rivers and also trailer to the Gulf, we'll ensure your policy covers all areas where you operate.",
        },
        {
            question: "What affects boat insurance rates in Branford?",
            answer: "Boat value, type, size, your experience, navigation area, storage method, and claims history all factor in. Boater safety courses and multi-policy discounts often reduce premiums.",
        },
        {
            question: "Is my boat covered while trailering?",
            answer: "Boat policies typically include trailer coverage and protect your boat during transport. We'll ensure comprehensive protection whether you're on water or road.",
        },
        {
            question: "Do I need insurance for a kayak or canoe?",
            answer: "While not required, liability coverage protects you if you cause injury to others. For valuable kayaks or paddleboards, physical damage coverage is worth considering.",
        },
    ],

    relatedServices: [
        { title: "Branford Auto Insurance", href: "/locations/branford-fl/auto-insurance", description: "Tow vehicle coverage" },
        { title: "Branford Homeowners Insurance", href: "/locations/branford-fl/homeowners-insurance", description: "Protect home and property" },
        { title: "Suwannee County Insurance", href: "/locations/branford-fl", description: "All coverage options" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function BranfordBoatInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
