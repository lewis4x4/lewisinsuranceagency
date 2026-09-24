import { CityPageTemplate, type CityPageData } from "@/components/templates"
import { generateCityMetadata } from "@/lib/schema"
import type { Metadata } from "next"

const pageData: CityPageData = {
    city: "Ocala",
    state: "FL",
    county: "Marion",
    slug: "ocala-fl",

    title: "Ocala, FL Insurance Agency | Lewis Insurance",
    description: "Find affordable home, auto, farm, and business insurance in Ocala, FL. Lewis Insurance serves Marion County and the Horse Capital of the World.",

    headline: "Insurance Agents in Ocala, Florida",
    subheadline: "Get personalized insurance coverage for your Ocala home, farm, vehicle, or business. We compare rates from multiple carriers to find you the best deal.",

    overview: [
        "Ocala and Marion County are known as the Horse Capital of the World, with a unique mix of equestrian estates, family farms, suburban developments, and urban commerce. This diversity creates varied insurance needs that require local expertise.",
        "Lewis Insurance serves Ocala and all of Marion County from our nearby Lake City office. We understand the area's unique requirements—from insuring horse farms to protecting new construction in communities like On Top of the World.",
        "Whether you're running a horse operation, own a rural homestead, or have a business serving the local community, we'll help you find appropriate coverage from multiple carriers at competitive rates.",
        "As an independent agency, we're not tied to any single carrier. We shop your coverage to find the best fit for your property and budget.",
    ],

    localFactors: [
        "Horse farms and equestrian operations need specialized farm and liability coverage",
        "Rural properties with acreage may require coverage for outbuildings, equipment, and livestock",
        "Newer 55+ communities like On Top of the World have specific coverage considerations",
        "Sinkhole activity in some areas may warrant additional coverage",
        "Flood risk exists along the Ocklawaha River and in low-lying areas",
        "Growing commercial sector needs various business insurance products",
    ],

    neighborhoods: [
        "Downtown Ocala",
        "On Top of the World",
        "Ocala Palms",
        "Golden Hills",
        "Silver Springs Shores",
        "Belleview",
        "Dunnellon",
        "Marion Oaks",
        "The Villages (Marion County portion)",
        "Ocala Horse Country",
        "Reddick",
        "Anthony",
    ],

    topCoverages: [
        {
            title: "Homeowners Insurance",
            description: "Protect your Ocala home from storms and other risks.",
            href: "/personal/homeowners-insurance-florida",
        },
        {
            title: "Farm & Ranch Insurance",
            description: "Coverage for horse farms and agricultural operations.",
            href: "/business",
        },
        {
            title: "Auto Insurance",
            description: "Coverage for Ocala and I-75 corridor drivers.",
            href: "/personal/auto-insurance-florida",
        },
        {
            title: "Business Insurance",
            description: "Protect your Marion County business.",
            href: "/business",
        },
        {
            title: "Umbrella Insurance",
            description: "Extra liability protection for farm and property owners.",
            href: "/personal/umbrella-insurance-florida",
        },
        {
            title: "Workers Compensation",
            description: "Required coverage for farm and business employers.",
            href: "/business/workers-compensation-florida",
        },
    ],

    faqs: [
        {
            question: "Do you insure horse farms in Ocala?",
            answer: "Yes! We work with carriers that specialize in equestrian operations. Farm policies can cover your home, barns, equipment, liability, and even the horses themselves. Each operation is unique—we'll customize coverage for your specific needs.",
        },
        {
            question: "Is sinkhole coverage needed in Ocala?",
            answer: "Marion County has some sinkhole activity, particularly in certain areas. Standard Florida policies cover 'catastrophic ground cover collapse' but not all sinkhole damage. Additional sinkhole coverage is available—we can discuss whether it's right for your property.",
        },
        {
            question: "Do you work with 55+ communities like On Top of the World?",
            answer: "Absolutely. We serve many residents in Ocala's active adult communities. These often have HOA master policies, so your individual coverage needs differ from standalone homes. We'll review your community's policy to ensure you're properly covered.",
        },
        {
            question: "Can you insure rural properties with acreage?",
            answer: "Yes. Many Ocala properties include significant acreage, outbuildings, barns, and equipment. Standard homeowners policies may not adequately cover these. We work with carriers offering rural property, farm, and hobby farm coverage.",
        },
        {
            question: "How far are you from Ocala?",
            answer: "Our office is in Lake City, about 70 miles north of Ocala. We're happy to meet clients or handle everything by phone and email. We regularly serve Marion County clients and understand the local market.",
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

export default function OcalaPage() {
    return <CityPageTemplate data={pageData} />
}
