import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Tampa",
    state: "FL",
    citySlug: "tampa-fl",
    serviceName: "Flood Insurance",
    serviceSlug: "flood-insurance",

    title: "Tampa Flood Insurance | NFIP & Private Options",
    description: "Get flood insurance for Tampa Bay properties. Compare NFIP and private flood coverage for Hillsborough County homes near the bay and flood zones.",

    headline: "Tampa Flood Insurance",
    subheadline: "Protect your Tampa property from flood damage. Compare NFIP and private flood insurance options for Tampa Bay area homes.",

    overview: [
        "Tampa Bay's geography—surrounded by water on three sides—creates significant flood risk for homeowners throughout the region. Recent hurricanes have demonstrated just how vulnerable Tampa properties can be to storm surge and flooding.",
        "Flood insurance is not included in your homeowners policy. Whether you're in a designated flood zone or not, separate flood coverage is the only way to protect your home from rising water, storm surge, and heavy rain flooding.",
        "We offer flood insurance from both the National Flood Insurance Program (NFIP) and private flood insurers. Private policies can often provide higher limits and competitive pricing for Tampa Bay properties.",
    ],

    whyNeeded: [
        {
            title: "Storm Surge Vulnerability",
            content: "Tampa Bay's funnel shape can amplify hurricane storm surge. Areas that haven't flooded in decades could experience significant flooding during the right storm. Flood insurance protects against this risk.",
        },
        {
            title: "Homeowners Policy Exclusions",
            content: "Your homeowners policy specifically excludes flood damage. Water entering your home from rising flood waters—including hurricane storm surge—requires separate flood insurance.",
        },
        {
            title: "Recent Storm Reminders",
            content: "Recent hurricanes reminded Tampa residents of their flood vulnerability after decades of near-misses. Don't wait for the next storm—get flood coverage now.",
        },
        {
            title: "30-Day Waiting Period",
            content: "Flood insurance typically has a 30-day waiting period before coverage begins. You can't buy coverage when a storm is approaching—act now while you can.",
        },
    ],

    localConsiderations: [
        "Tampa Bay's shape can amplify storm surge during hurricanes",
        "Many properties near the bay, rivers, and low-lying areas are in flood zones",
        "Even properties outside high-risk zones can flood from heavy rain",
        "Private flood insurance may offer better options than NFIP for some properties",
        "Elevation certificates help determine accurate flood risk and rates",
        "South Tampa and waterfront areas face the highest flood exposure",
    ],

    faqs: [
        {
            question: "Is flood insurance required in Tampa?",
            answer: "If your property is in a FEMA Special Flood Hazard Area with a federally-backed mortgage, yes. Even if not required, we strongly recommend flood insurance for most Tampa properties given the bay's storm surge risk.",
        },
        {
            question: "How much does Tampa flood insurance cost?",
            answer: "Costs vary based on flood zone, elevation, construction, and coverage limits. Properties in high-risk zones near the bay will pay more. We'll compare NFIP and private options to find the most competitive rate.",
        },
        {
            question: "What areas of Tampa flood the most?",
            answer: "South Tampa, Davis Islands, and areas near the bay and rivers face the highest flood risk. However, any low-lying area can flood from heavy rain, and storm surge can reach far inland during major hurricanes.",
        },
        {
            question: "NFIP vs. private flood insurance for Tampa?",
            answer: "The NFIP is a federal program with standardized coverage. Private insurers can often provide higher limits and competitive rates. We'll compare both to find the best fit for your Tampa property.",
        },
    ],

    relatedServices: [
        { title: "Tampa Homeowners Insurance", href: "/locations/tampa-fl/homeowners-insurance", description: "Comprehensive home protection" },
        { title: "Tampa Auto Insurance", href: "/locations/tampa-fl/auto-insurance", description: "Coverage for your vehicles" },
        { title: "All Tampa Coverage", href: "/locations/tampa-fl", description: "View all options" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function TampaFloodPage() {
    return <CityServicePageTemplate data={pageData} />
}
