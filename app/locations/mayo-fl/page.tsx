import { CityPageTemplate, type CityPageData } from "@/components/templates"
import { generateCityMetadata } from "@/lib/schema"
import type { Metadata } from "next"

const pageData: CityPageData = {
    city: "Mayo",
    state: "FL",
    county: "Lafayette",
    slug: "mayo-fl",

    title: "Mayo, FL Insurance Agency | Lewis Insurance",
    description: "Home, auto, mobile home, and business insurance in Mayo, FL. Independent agents serving Lafayette County since 1981. Compare carriers.",

    headline: "Insurance Agents Serving Mayo, Florida",
    subheadline: "Local independent insurance for Mayo and Lafayette County. We compare carriers to find coverage protecting your family at competitive rates.",

    overview: [
        "Mayo serves as the county seat of Lafayette County, one of Florida's least populated and most rural counties with just over 8,400 residents countywide. This close-knit agricultural community along US-27 maintains strong farming traditions including dairy, cattle, timber, and row crops. Lewis Insurance Agency understands the insurance needs of rural Mayo residents—from farm coverage to mobile home protection.",
        "Lafayette County's rural character creates unique insurance considerations. Many properties sit on large acreage with outbuildings, barns, and agricultural equipment that need appropriate coverage. Mobile and manufactured homes are prevalent throughout the county, requiring specialized policies that differ from standard homeowners insurance. Distance from fire stations can also affect property insurance rates and options.",
        "The Suwannee River flows along Lafayette County's eastern border, creating flood exposure for some properties. Standard homeowners insurance doesn't cover flood damage—separate flood coverage protects against this often-overlooked risk. Whether you're on a working farm, a rural homestead, or in the small downtown area, understanding your specific risks is essential.",
        "As an independent agency about 40 minutes away in Lake City, we serve Mayo and all of Lafayette County with personal attention. We compare quotes from multiple insurance carriers to find home, auto, mobile home, farm, and business coverage that fits your needs. Since 1981, we've helped North Florida families with the kind of personalized service small-town residents expect. Call us or request a quote online.",
    ],

    localFactors: [
        "Rural Lafayette County properties have unique coverage needs",
        "Mobile homes common—we specialize in manufactured home insurance",
        "Agricultural operations may need farm coverage",
        "US-27 corridor connects to larger communities",
        "Small-town character means personalized service matters",
        "Distance from urban areas affects some coverage factors",
    ],

    neighborhoods: ["Downtown Mayo", "US-27 Corridor", "Branford", "Live Oak", "Lake City", "Perry"],

    topCoverages: [
        { title: "Auto Insurance", description: "Lafayette County drivers.", href: "/locations/mayo-fl/auto-insurance" },
        { title: "Homeowners Insurance", description: "Protect your home.", href: "/locations/mayo-fl/homeowners-insurance" },
        { title: "Mobile Home Insurance", description: "Manufactured homes.", href: "/locations/mayo-fl/mobile-home-insurance" },
        { title: "Boat Insurance", description: "River access coverage.", href: "/locations/mayo-fl/boat-insurance" },
        { title: "Business Insurance", description: "Local businesses.", href: "/locations/mayo-fl/business-insurance" },
        { title: "Flood Insurance", description: "Where needed.", href: "/personal/flood-insurance-florida" },
    ],

    faqs: [
        { question: "Do you serve Mayo?", answer: "Yes! Our Lake City office serves all of Lafayette County. We handle insurance by phone, email, or in-person." },
        { question: "Can you insure rural and farm properties?", answer: "Yes. We understand rural Lafayette County properties with acreage, outbuildings, and agricultural operations." },
        { question: "Mobile home insurance?", answer: "We specialize in manufactured housing insurance for Mayo families." },
        { question: "What about small businesses?", answer: "We insure Mayo businesses with appropriate commercial coverage." },
        { question: "How do I get a quote?", answer: "Call (386) 755-0050 or request online. We'll provide options from multiple carriers." },
    ],
}

export const metadata: Metadata = generateCityMetadata({
    city: pageData.city,
    state: pageData.state,
    slug: pageData.slug,
    title: pageData.title,
    description: pageData.description,
})

export default function MayoPage() {
    return <CityPageTemplate data={pageData} />
}
