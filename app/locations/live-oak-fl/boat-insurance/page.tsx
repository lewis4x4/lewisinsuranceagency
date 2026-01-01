import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Live Oak",
    state: "FL",
    citySlug: "live-oak-fl",
    serviceName: "Boat Insurance",
    serviceSlug: "boat-insurance",

    title: "Live Oak Boat Insurance | Suwannee County FL",
    description: "Boat insurance in Live Oak, FL. Independent agents compare marine coverage for Suwannee County boaters. Suwannee River to the Gulf since 1981.",

    headline: "Live Oak Boat Insurance",
    subheadline: "From the Suwannee River to coastal waters, Suwannee County boaters need coverage that matches how they use the water. We compare boat insurance to find protection that fits.",

    overview: [
        "Live Oak sits near some of Florida's best waterways. The Suwannee River offers fishing, kayaking, and boating just minutes from town, while Spirit of the Suwannee Music Park draws visitors to the water year-round. Whether you fish locally or trailer to the coast, boat insurance protects your investment.",
        "Boat insurance varies based on your vessel, how you use it, and where you navigate. Suwannee County boaters may need coverage for freshwater rivers, saltwater coastal trips, or both. Your policy should reflect your actual boating habits without paying for coverage you don't need.",
        "Lewis Insurance Agency has helped Live Oak boaters since 1981. We work with marine carriers who understand Florida waterways and can cover everything from bass boats to offshore fishing vessels. As an independent agency, we compare options to find competitive rates.",
    ],

    whyNeeded: [
        {
            title: "Liability on the Water",
            content: "Boating accidents happen. If you're responsible for injuries or damage to others, boat insurance liability coverage protects your assets. This is essential coverage that every boat owner needs.",
        },
        {
            title: "Physical Damage Protection",
            content: "Your boat faces risks from collisions, submerged objects, weather, theft, and vandalism. Coverage protects your vessel whether you're on the Suwannee River, at the coast, or stored at home.",
        },
        {
            title: "Trailer and Transport Coverage",
            content: "Live Oak boaters frequently trailer their boats on US-129 and US-90 to reach different waterways. Your boat policy should cover the trailer and protect against accidents during transport.",
        },
        {
            title: "Equipment and Personal Effects",
            content: "Fishing gear, electronics, trolling motors, and personal items add up quickly. Boat insurance can cover this equipment that your auto or homeowners policy may not.",
        },
    ],

    localConsiderations: [
        "Coverage for Suwannee River and freshwater use",
        "Coastal navigation if you trailer to Gulf waters",
        "Hurricane and storm storage considerations",
        "Trailer coverage for transport on highways",
        "Agreed value vs. actual cash value options",
        "Fishing and personal effects coverage",
        "Towing and on-water assistance",
    ],

    coverageHighlights: [
        { title: "Hull Coverage", description: "Physical damage to your boat" },
        { title: "Liability Protection", description: "Injuries or damage you cause" },
        { title: "Medical Payments", description: "Passenger injury coverage" },
        { title: "Uninsured Boater", description: "Protection from uninsured operators" },
        { title: "Trailer Coverage", description: "Your boat trailer" },
        { title: "Personal Effects", description: "Gear and equipment" },
    ],

    faqs: [
        {
            question: "What information do you need to quote boat insurance?",
            answer: "We'll need your boat's year, make, model, length, and hull type. We'll also ask about your boating experience, where you'll operate, storage arrangements, and any safety equipment or boater training you've completed.",
        },
        {
            question: "Can you shop multiple carriers for boat insurance?",
            answer: "Yes. As an independent agency, we work with several marine insurance carriers. We compare options to find coverage and rates that fit your specific boat and usage in Suwannee County.",
        },
        {
            question: "What affects boat insurance rates in Live Oak?",
            answer: "Rates depend on boat value, type, size, your experience, navigation area, storage method, and claims history. Boater safety courses and multi-policy discounts often help reduce premiums.",
        },
        {
            question: "Does boat insurance cover the Suwannee River and Gulf?",
            answer: "Most policies allow you to specify your navigation area. If you boat both the Suwannee River and trailer to coastal waters, we'll make sure your policy covers all the areas where you operate.",
        },
        {
            question: "Is my boat covered while trailering?",
            answer: "Boat policies typically include trailer coverage and protect your boat during transport. Your auto insurance may provide some coverage while towing, but a boat policy ensures comprehensive protection.",
        },
        {
            question: "What's the difference between agreed value and actual cash value?",
            answer: "Agreed value pays a set amount if your boat is totaled—you and the carrier agree on the value upfront. Actual cash value pays market value at the time of loss, which includes depreciation. Agreed value costs more but provides clearer protection.",
        },
    ],

    relatedServices: [
        { title: "Live Oak Auto Insurance", href: "/locations/live-oak-fl/auto-insurance", description: "Coverage for your tow vehicle" },
        { title: "Live Oak Homeowners Insurance", href: "/locations/live-oak-fl/homeowners-insurance", description: "Protect home and property" },
        { title: "Suwannee County Insurance", href: "/locations/live-oak-fl", description: "All insurance services" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function LiveOakBoatInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
