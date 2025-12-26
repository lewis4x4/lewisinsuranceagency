import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Fort Lauderdale",
    state: "FL",
    citySlug: "fort-lauderdale-fl",
    serviceName: "Flood Insurance",
    serviceSlug: "flood-insurance",

    title: "Fort Lauderdale Flood Insurance | NFIP & Private Options",
    description: "Get flood insurance for Fort Lauderdale properties. Compare NFIP and private flood coverage for Broward County homes near canals and the Intracoastal.",

    headline: "Fort Lauderdale Flood Insurance",
    subheadline: "Essential flood protection for Fort Lauderdale's canal-front properties and coastal homes. Compare NFIP and private flood insurance options.",

    overview: [
        "Fort Lauderdale's Venice of America nickname highlights the city's extensive canal system—and its significant flood risk. Flood insurance is essential for most Fort Lauderdale properties, whether you're on the Intracoastal, a canal, or even in areas that rarely flood.",
        "We offer flood insurance from both the National Flood Insurance Program (NFIP) and private insurers. Private flood policies can often provide higher limits and competitive rates, especially for properties that don't fit standard NFIP pricing.",
        "Standard homeowners insurance doesn't cover flood damage. Given Fort Lauderdale's low elevation and proximity to water, flood insurance should be a priority for every Broward County homeowner.",
    ],

    whyNeeded: [
        {
            title: "Canal System Creates Risk",
            content: "Fort Lauderdale's canals mean many properties are steps from water that can rise during storms. Even properties not directly on canals can flood from drainage backup and rising water tables.",
        },
        {
            title: "Homeowners Insurance Exclusions",
            content: "Your homeowners policy specifically excludes flood damage. Water entering your home from rising flood waters—including hurricane storm surge—requires separate flood insurance.",
        },
        {
            title: "High-Risk Flood Zones",
            content: "Many Fort Lauderdale properties are in FEMA Special Flood Hazard Areas where flood insurance is mandatory for mortgages. Even outside these zones, flooding can occur.",
        },
        {
            title: "30-Day Waiting Period",
            content: "Flood policies typically have a 30-day waiting period. You can't buy coverage when a storm is approaching—protect yourself now while coverage is available.",
        },
    ],

    localConsiderations: [
        "Properties near canals and the Intracoastal face elevated flood exposure",
        "FEMA flood zones determine mandatory insurance requirements and rates",
        "Private flood insurance may offer better rates than NFIP for some properties",
        "Elevation certificates help determine accurate risk and rates",
        "Barrier island properties have extreme flood exposure",
        "Even inland areas can flood from heavy rain and drainage issues",
    ],

    faqs: [
        {
            question: "Is flood insurance required in Fort Lauderdale?",
            answer: "If your property is in a FEMA Special Flood Hazard Area and you have a federally-backed mortgage, yes. Even if not required, we strongly recommend flood insurance for most Fort Lauderdale properties given the area's flood history and risk.",
        },
        {
            question: "What's the difference between NFIP and private flood insurance?",
            answer: "The NFIP is a federal program with standardized rates and coverage limits. Private flood insurers can offer higher limits, additional coverages, and sometimes better rates. We'll compare both options to find the best fit for your property.",
        },
        {
            question: "My property isn't on a canal. Do I still need flood insurance?",
            answer: "Likely yes. Fort Lauderdale's low elevation means even properties not directly on water can flood from heavy rain, drainage issues, and rising water tables. A significant percentage of flood claims come from properties outside high-risk zones.",
        },
        {
            question: "How much does Fort Lauderdale flood insurance cost?",
            answer: "Costs vary based on flood zone, elevation, construction, and coverage limits. Properties in high-risk zones near water will pay more. We'll quote both NFIP and private options to find the most competitive rate for your situation.",
        },
    ],

    relatedServices: [
        { title: "Fort Lauderdale Homeowners Insurance", href: "/locations/fort-lauderdale-fl/homeowners-insurance", description: "Comprehensive home protection" },
        { title: "Fort Lauderdale Auto Insurance", href: "/locations/fort-lauderdale-fl/auto-insurance", description: "Coverage for your vehicles" },
        { title: "All Fort Lauderdale Coverage", href: "/locations/fort-lauderdale-fl", description: "View all options" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function FortLauderdaleFloodPage() {
    return <CityServicePageTemplate data={pageData} />
}
