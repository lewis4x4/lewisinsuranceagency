import { CityPageTemplate, type CityPageData } from "@/components/templates"
import { generateCityMetadata } from "@/lib/schema"
import type { Metadata } from "next"

const pageData: CityPageData = {
    city: "Jacksonville",
    state: "FL",
    county: "Duval",
    slug: "jacksonville-fl",

    title: "Jacksonville Insurance Agency",
    description: "Find affordable home, auto, flood, and business insurance in Jacksonville, FL. Lewis Insurance compares quotes from multiple carriers for Northeast Florida.",

    headline: "Insurance Agents in Jacksonville, Florida",
    subheadline: "Get personalized insurance coverage for your Jacksonville home, vehicle, or business. We compare rates from multiple carriers to find you the best deal.",

    overview: [
        "Jacksonville is the largest city by area in the continental United States, offering diverse neighborhoods from the beaches to the urban core to sprawling suburbs. This diversity means varied insurance needs—from oceanfront condos at Jax Beach to riverfront homes on the St. Johns to suburban family homes in Mandarin and Fleming Island.",
        "Lewis Insurance serves all of Duval County and Northeast Florida. As an independent agency, we shop your coverage with multiple carriers to find the best combination of coverage and price for your specific property and situation.",
        "Jacksonville's coastal location brings significant hurricane exposure. The beaches face storm surge risk, while the entire area can experience damaging winds from tropical systems. We help Jacksonville residents understand their wind and flood risks and build appropriate coverage.",
        "Whether you're a lifelong Jacksonville resident or new to the First Coast, we're here to provide personalized service and competitive quotes. Experience the difference an independent, local agent can make.",
    ],

    localFactors: [
        "Jacksonville Beaches face oceanfront hurricane and flood risks requiring comprehensive coverage",
        "St. Johns River flooding is a significant risk for riverside and downtown properties",
        "Northeast Florida's frequent thunderstorms mean lighting and water damage claims are common",
        "Large geographic area means auto rates vary—urban core vs. suburban vs. beach communities",
        "Historic neighborhoods like Riverside and Avondale have older homes requiring specialized coverage",
        "Major port and logistics hub creates diverse commercial insurance needs",
    ],

    neighborhoods: [
        "Downtown Jacksonville",
        "Riverside",
        "San Marco",
        "Avondale",
        "Mandarin",
        "Fleming Island",
        "Jacksonville Beach",
        "Neptune Beach",
        "Atlantic Beach",
        "Ponte Vedra",
        "Southside",
        "Arlington",
    ],

    topCoverages: [
        {
            title: "Homeowners Insurance",
            description: "Protect your Jacksonville home from hurricanes and more.",
            href: "/personal/homeowners-insurance-florida",
        },
        {
            title: "Flood Insurance",
            description: "Essential for riverfront and coastal Jacksonville properties.",
            href: "/personal/flood-insurance-florida",
        },
        {
            title: "Auto Insurance",
            description: "Coverage for Jacksonville's extensive road network.",
            href: "/personal/auto-insurance-florida",
        },
        {
            title: "Condo Insurance",
            description: "HO-6 coverage for beachfront and downtown condos.",
            href: "/personal/condo-insurance-florida",
        },
        {
            title: "Business Insurance",
            description: "Coverage for Jacksonville's diverse business community.",
            href: "/business",
        },
        {
            title: "Commercial Auto",
            description: "Fleet coverage for logistics and transportation.",
            href: "/business/commercial-auto-florida",
        },
    ],

    faqs: [
        {
            question: "Are Jacksonville beach homes hard to insure?",
            answer: "Oceanfront and near-beach properties have higher hurricane and flood exposure, which can make them more challenging to insure. However, we work with carriers that specialize in coastal properties. Newer construction with hurricane-resistant features often qualifies for better rates.",
        },
        {
            question: "Do I need flood insurance in Jacksonville?",
            answer: "If your property is near the ocean, St. Johns River, or any of Jacksonville's creeks and tributaries, flood insurance is strongly recommended (and often required by lenders). Even inland properties can flood during heavy rain events. Standard homeowners insurance doesn't cover flood damage.",
        },
        {
            question: "Why does Jacksonville have lower insurance rates than South Florida?",
            answer: "Jacksonville's location in Northeast Florida—farther from the Gulf and facing the Atlantic at an angle that deflects some storms—generally means lower hurricane frequency than South Florida. However, significant storms can and do impact the area. Rates also depend on your specific property and location.",
        },
        {
            question: "Can you insure older Riverside and Avondale homes?",
            answer: "Yes, though older homes often have restrictions. Many carriers require updated roofs, plumbing, electrical, and HVAC. We work with carriers that understand historic properties and can often find coverage—sometimes with conditions about updates. A 4-point inspection will identify any issues.",
        },
        {
            question: "Do you serve all of Northeast Florida?",
            answer: "Yes! We serve Jacksonville and all of Duval County, as well as neighboring St. Johns, Nassau, and Clay counties. Whether you're in Ponte Vedra, Fernandina Beach, Green Cove Springs, or anywhere in the region, we can help.",
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

export default function JacksonvillePage() {
    return <CityPageTemplate data={pageData} />
}
