import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Lake City",
    state: "FL",
    citySlug: "lake-city-fl",
    serviceName: "Mobile Home Insurance",
    serviceSlug: "mobile-home-insurance",

    title: "Lake City Mobile Home Insurance | Columbia County",
    description: "Mobile home insurance in Lake City, FL. Independent agents compare carriers for manufactured housing coverage. Serving Columbia County since 1981.",

    headline: "Lake City Mobile Home Insurance",
    subheadline: "Protect your manufactured home with coverage designed for mobile and modular homes in Columbia County. We compare options from carriers that specialize in mobile home insurance.",

    overview: [
        "Mobile homes and manufactured housing require specialized insurance that standard homeowners policies don't provide. In Lake City and throughout Columbia County, many families choose manufactured housing for affordability and flexibility. Your insurance should be just as practical—coverage that protects your home without overpaying.",
        "Florida's weather presents unique challenges for mobile homes. From summer storms to the occasional tropical system, manufactured homes face different risks than site-built structures. Carriers evaluate factors like tie-downs, skirting, roof type, and the year your home was built when determining coverage and rates.",
        "Lewis Insurance Agency has helped Lake City families insure their mobile homes since 1981. As an independent agency, we work with multiple carriers that specialize in manufactured housing, helping you find coverage that fits your home and budget.",
    ],

    whyNeeded: [
        {
            title: "Florida Weather Exposure",
            content: "Mobile homes in Columbia County face wind, rain, and storm risks. Proper coverage protects against weather damage that can affect manufactured structures differently than traditional homes.",
        },
        {
            title: "Specialized Coverage Requirements",
            content: "Standard homeowners policies typically exclude mobile homes. You need a policy designed for manufactured housing that covers the structure, personal property, and liability appropriately.",
        },
        {
            title: "Lender and Park Requirements",
            content: "If you finance your mobile home or live in a community, you may have specific insurance requirements. We help ensure your coverage meets lender and park standards.",
        },
        {
            title: "Replacement Cost Considerations",
            content: "Mobile home values depreciate differently than traditional homes. We help you understand the difference between actual cash value and replacement cost coverage for your situation.",
        },
    ],

    localConsiderations: [
        "Tie-down certification may affect rates and coverage availability",
        "Roof type and age impact premium calculations",
        "Year manufactured affects carrier eligibility",
        "Wind mitigation features can reduce premiums",
        "Contents coverage for personal belongings inside",
        "Liability protection for injuries on your property",
        "Additional structures like sheds and carports",
    ],

    coverageHighlights: [
        { title: "Dwelling Coverage", description: "Protects the mobile home structure itself" },
        { title: "Personal Property", description: "Covers furniture, appliances, and belongings" },
        { title: "Liability Protection", description: "Covers injuries to others on your property" },
        { title: "Other Structures", description: "Sheds, carports, and detached buildings" },
        { title: "Loss of Use", description: "Living expenses if home is uninhabitable" },
        { title: "Medical Payments", description: "Minor injury coverage regardless of fault" },
    ],

    faqs: [
        {
            question: "What information do you need to quote mobile home insurance?",
            answer: "We'll need the year, make, and dimensions of your home, along with its location, whether you own or rent the land, tie-down certification status, and details about any upgrades or additions. This helps us find carriers that cover your specific home.",
        },
        {
            question: "Can you shop multiple carriers at renewal time?",
            answer: "Absolutely. As an independent agency, we regularly review your coverage at renewal to ensure you're still getting competitive rates. Mobile home insurance markets change, and we can compare options from multiple carriers.",
        },
        {
            question: "What affects my mobile home insurance rate in Lake City?",
            answer: "Key factors include the age and size of your home, roof type and condition, tie-down status, your location within Columbia County, claims history, and the coverage limits you choose. Newer homes with proper tie-downs typically qualify for better rates.",
        },
        {
            question: "Does mobile home insurance cover hurricane damage?",
            answer: "Wind coverage is typically included, though you may have a separate wind or hurricane deductible. Flood damage requires a separate flood policy. We'll help you understand exactly what's covered and recommend appropriate protection for Lake City's weather risks.",
        },
        {
            question: "Is mobile home insurance required in Florida?",
            answer: "While not legally required if you own your home outright, lenders require coverage if you have a loan. Even without a loan, insurance protects your investment. Mobile home communities may also require proof of insurance.",
        },
        {
            question: "How quickly can I get proof of insurance?",
            answer: "Once your policy is bound, we can provide proof of insurance immediately. If you need documentation for a lender, park, or closing, we handle that paperwork directly.",
        },
    ],

    relatedServices: [
        { title: "Lake City Auto Insurance", href: "/locations/lake-city-fl/auto-insurance", description: "Bundle auto coverage for savings" },
        { title: "Lake City Flood Insurance", href: "/locations/lake-city-fl/flood-insurance", description: "Separate flood protection" },
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

export default function LakeCityMobileHomeInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
