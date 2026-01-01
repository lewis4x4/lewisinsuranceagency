import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Lake City",
    state: "FL",
    citySlug: "lake-city-fl",
    serviceName: "Boat Insurance",
    serviceSlug: "boat-insurance",

    title: "Lake City Boat Insurance | Columbia County FL",
    description: "Boat insurance in Lake City, FL. Independent agents compare marine coverage for Columbia County boaters. Lake DeSoto to the Gulf—coverage since 1981.",

    headline: "Lake City Boat Insurance",
    subheadline: "From Lake DeSoto to the Suwannee River and beyond, Columbia County boaters need coverage that matches how they use the water. We compare boat insurance options to find the right protection.",

    overview: [
        "Lake City sits at the heart of North Florida's waterways. Whether you fish Lake DeSoto, kayak the springs, or trailer your boat to the coast, the right boat insurance protects your investment and covers liability when you're on the water.",
        "Boat insurance isn't one-size-fits-all. Your coverage needs depend on your vessel type, how you use it, where you navigate, and how you store it. Columbia County boaters face different considerations than coastal owners—we help you find coverage that fits your actual boating life.",
        "Lewis Insurance Agency has served Lake City since 1981. We work with carriers that understand Florida boating, from bass boats and pontoons to offshore vessels. As an independent agency, we compare options to find coverage that protects without overcharging.",
    ],

    whyNeeded: [
        {
            title: "On-Water Liability",
            content: "Accidents happen on the water. Boat insurance provides liability coverage if you're responsible for injuries or damage to others—protection that can prevent a boating accident from becoming a financial disaster.",
        },
        {
            title: "Physical Damage Protection",
            content: "Your boat faces risks from collisions, storms, theft, and vandalism. Coverage protects your investment whether you're on the water, trailering on I-75, or stored at home.",
        },
        {
            title: "Uninsured Boater Coverage",
            content: "Just like on the road, not every boater carries adequate insurance. Uninsured boater coverage protects you when others don't have proper protection.",
        },
        {
            title: "Trailer and Equipment",
            content: "Your trailer, trolling motor, electronics, and fishing gear represent significant value. Comprehensive boat policies can cover equipment that auto insurance doesn't.",
        },
    ],

    localConsiderations: [
        "Coverage for freshwater lakes, rivers, and coastal waters",
        "Hurricane and storm haul-out considerations",
        "Trailer coverage for transport on I-75 and local roads",
        "Agreed value vs. actual cash value options",
        "Fishing tournament and equipment coverage available",
        "Personal effects and tackle protection",
        "Towing and assistance coverage on the water",
    ],

    coverageHighlights: [
        { title: "Hull Coverage", description: "Physical damage to your boat" },
        { title: "Liability Protection", description: "Injuries or damage you cause to others" },
        { title: "Medical Payments", description: "Injuries to passengers on your boat" },
        { title: "Uninsured Boater", description: "Protection from uninsured operators" },
        { title: "Trailer Coverage", description: "Your boat trailer protection" },
        { title: "Personal Effects", description: "Gear, electronics, and equipment" },
    ],

    faqs: [
        {
            question: "What information do you need to quote boat insurance?",
            answer: "We'll need details about your boat including year, make, model, length, and hull type. We'll also ask about your boating experience, where you'll operate, how you store the vessel, and any safety equipment or training you have.",
        },
        {
            question: "Can you shop multiple carriers at renewal?",
            answer: "Yes. As an independent agency, we review your boat insurance at renewal to compare rates and coverage. Marine insurance markets vary, and we can often find better options by shopping multiple carriers.",
        },
        {
            question: "What affects my boat insurance rate in Lake City?",
            answer: "Rates depend on your boat's value, type, and age, plus your experience, navigation area, storage method, and safety features. Boater safety courses and claims-free history often qualify for discounts.",
        },
        {
            question: "Does boat insurance cover hurricane damage?",
            answer: "Most policies cover storm damage, but some have hurricane exclusions or separate deductibles. We'll review your policy's storm coverage and discuss haul-out requirements that may apply during named storms.",
        },
        {
            question: "Do I need separate insurance for my boat trailer?",
            answer: "Boat policies typically include trailer coverage. Your auto insurance may provide some protection while towing, but a boat policy offers more comprehensive trailer coverage. We'll make sure you're not double-paying or leaving gaps.",
        },
        {
            question: "What's the difference between agreed value and actual cash value?",
            answer: "Agreed value pays a predetermined amount if your boat is totaled—no depreciation deducted. Actual cash value pays market value at the time of loss, which may be less than you expect. We can explain which makes sense for your boat.",
        },
    ],

    relatedServices: [
        { title: "Lake City Auto Insurance", href: "/locations/lake-city-fl/auto-insurance", description: "Coverage for your tow vehicle" },
        { title: "Lake City Homeowners Insurance", href: "/locations/lake-city-fl/homeowners-insurance", description: "Protect your home and property" },
        { title: "Columbia County Insurance", href: "/locations/lake-city-fl", description: "All insurance services" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function LakeCityBoatInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
