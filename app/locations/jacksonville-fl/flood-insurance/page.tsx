import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Jacksonville",
    state: "FL",
    citySlug: "jacksonville-fl",
    serviceName: "Flood Insurance",
    serviceSlug: "flood-insurance",

    title: "Jacksonville Flood Insurance | NFIP & Private Options",
    description: "Get flood insurance for Jacksonville properties. Compare NFIP and private flood coverage for Duval County homes near the St. Johns River and beaches.",

    headline: "Jacksonville Flood Insurance",
    subheadline: "Protect your Jacksonville property from flood damage. Compare NFIP and private flood insurance options for Northeast Florida homes.",

    overview: [
        "Jacksonville's geography—sitting on the St. Johns River with Atlantic beaches to the east—creates flood risk throughout Duval County. From the beaches to riverside neighborhoods, flood insurance provides essential protection not included in your homeowners policy.",
        "We offer flood insurance from both the National Flood Insurance Program (NFIP) and private flood insurers. Private policies can often provide higher coverage limits and competitive rates, especially for properties that don't fit standard NFIP pricing.",
        "The St. Johns River is one of the few rivers that flows north, and it can back up during heavy rain and coastal storms. Properties throughout Jacksonville can experience flooding from river rise, storm surge, and heavy rain.",
    ],

    whyNeeded: [
        {
            title: "St. Johns River Flooding",
            content: "The St. Johns River can flood during heavy rain events and hurricanes. Properties near the river throughout Jacksonville face flood risk that requires separate flood insurance.",
        },
        {
            title: "Coastal Storm Surge",
            content: "Jacksonville's beaches and coastal areas face hurricane storm surge risk. Flood insurance covers storm surge damage that's excluded from homeowners policies.",
        },
        {
            title: "Homeowners Policy Exclusions",
            content: "Your homeowners policy specifically excludes flood damage. Water entering your home from rising flood waters requires separate flood insurance for protection.",
        },
        {
            title: "Heavy Rain Flooding",
            content: "Jacksonville's summer thunderstorms can overwhelm drainage systems. Even properties not near water can flood from heavy rain, especially in low-lying areas.",
        },
    ],

    localConsiderations: [
        "St. Johns River can flood properties far from the coast",
        "Beach properties face combined river and ocean flood exposure",
        "Downtown and Riverside areas near the river have flood risk",
        "Private flood insurance may offer better options than NFIP for some properties",
        "Elevation certificates help determine accurate risk and rates",
        "Even properties outside flood zones can experience flooding",
    ],

    faqs: [
        {
            question: "Is flood insurance required in Jacksonville?",
            answer: "If your property is in a FEMA Special Flood Hazard Area with a federally-backed mortgage, yes. Many properties near the St. Johns River and beaches fall into these zones. Even if not required, we recommend flood insurance for most Jacksonville properties.",
        },
        {
            question: "How much does Jacksonville flood insurance cost?",
            answer: "Costs vary based on flood zone, elevation, construction, and coverage limits. Beach and riverside properties pay more. We'll compare NFIP and private options to find the most competitive rate for your property.",
        },
        {
            question: "Does the St. Johns River really flood?",
            answer: "Yes. The St. Johns River can rise significantly during heavy rain and hurricanes, flooding properties along its banks throughout Jacksonville. Recent storms have caused notable river flooding in the area.",
        },
        {
            question: "NFIP vs. private flood insurance for Jacksonville?",
            answer: "The NFIP is a federal program with standardized coverage and rates. Private insurers can offer higher limits, additional coverages, and sometimes better rates. We compare both to find the best fit for your Jacksonville property.",
        },
    ],

    relatedServices: [
        { title: "Jacksonville Homeowners Insurance", href: "/locations/jacksonville-fl/homeowners-insurance", description: "Comprehensive home protection" },
        { title: "All Jacksonville Coverage", href: "/locations/jacksonville-fl", description: "View all options" },
        { title: "Florida Flood Insurance", href: "/personal/flood-insurance-florida", description: "Statewide flood info" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function JacksonvilleFloodPage() {
    return <CityServicePageTemplate data={pageData} />
}
