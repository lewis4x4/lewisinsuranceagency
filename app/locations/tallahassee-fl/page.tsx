import { CityPageTemplate, type CityPageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityPageData = {
    city: "Tallahassee",
    state: "FL",
    county: "Leon",
    slug: "tallahassee-fl",

    title: "Tallahassee Insurance Agency",
    description: "Find affordable home, auto, flood, and business insurance in Tallahassee, FL. Lewis Insurance serves the Capital City and Big Bend region.",

    headline: "Insurance Agents in Tallahassee, Florida",
    subheadline: "Get personalized insurance coverage for your Tallahassee home, vehicle, or business. We compare rates from multiple carriers to find you the best deal.",

    overview: [
        "Tallahassee is Florida's capital city and the hub of the Big Bend region. Home to Florida State University, Florida A&M University, and state government, Tallahassee offers a unique mix of college town energy, government stability, and Southern charm.",
        "Lewis Insurance serves Tallahassee and Leon County from our nearby Lake City office. As an independent agency, we shop your coverage with multiple carriers to find the best rates—whether you're insuring a historic Midtown home, a Killearn Estates property, or a business serving the capital community.",
        "Tallahassee's location in North Florida means a different risk profile than coastal areas, but the region still faces hurricane exposure from Gulf storms. We help Tallahassee residents understand their wind, flood, and liability risks and build appropriate coverage.",
        "Whether you're a longtime Tallahassee resident, a state employee, a university student or faculty member, or a business owner, we're here to provide personalized insurance guidance at competitive rates.",
    ],

    localFactors: [
        "North Florida location means less hurricane frequency than coastal areas, but Gulf storms still impact the region",
        "Large student rental market near FSU and FAMU requires specialized landlord coverage",
        "Historic neighborhoods like Midtown and Los Robles have older homes needing specialized coverage",
        "State government employment creates stable workforce with varied insurance needs",
        "Flood risk exists in low-lying areas and near lakes and creeks",
        "Growing suburban communities like Killearn and SouthWood have newer construction",
    ],

    neighborhoods: [
        "Downtown Tallahassee",
        "Midtown",
        "Killearn Estates",
        "SouthWood",
        "Betton Hills",
        "Los Robles",
        "College Town",
        "Bradfordville",
        "Centerville",
        "Lake Jackson",
        "Thomasville Road Corridor",
        "Capital Circle Area",
    ],

    topCoverages: [
        {
            title: "Homeowners Insurance",
            description: "Protect your Tallahassee home from storms and more.",
            href: "/personal/homeowners-insurance-florida",
        },
        {
            title: "Auto Insurance",
            description: "Coverage for Tallahassee drivers and I-10 commuters.",
            href: "/personal/auto-insurance-florida",
        },
        {
            title: "Renters Insurance",
            description: "Affordable coverage for students and renters.",
            href: "/personal/renters-insurance-florida",
        },
        {
            title: "Landlord Insurance",
            description: "Coverage for student rental properties.",
            href: "/business",
        },
        {
            title: "Business Insurance",
            description: "Protect your Tallahassee business operations.",
            href: "/business",
        },
        {
            title: "Umbrella Insurance",
            description: "Extra liability protection for property owners.",
            href: "/personal/umbrella-insurance-florida",
        },
    ],

    faqs: [
        {
            question: "Does Tallahassee need hurricane insurance?",
            answer: "Yes. While Tallahassee is inland, hurricanes from the Gulf of Mexico regularly impact the Big Bend region. Hurricane Michael in 2018 caused significant damage in the area. All Florida homeowners policies include wind coverage, though you'll want to understand your hurricane deductible.",
        },
        {
            question: "Do you insure student rental properties in Tallahassee?",
            answer: "Yes! We work with many landlords who rent properties near FSU and FAMU. Student rentals require specialized coverage—standard homeowners policies don't cover rental use. We'll find appropriate landlord/dwelling fire coverage for your investment properties.",
        },
        {
            question: "Can you insure older Midtown homes?",
            answer: "Yes. Tallahassee's historic neighborhoods have beautiful older homes. These may require updated roofs, plumbing, and electrical to qualify for standard coverage. We work with carriers that understand older properties and can often find coverage with appropriate conditions.",
        },
        {
            question: "Do I need flood insurance in Tallahassee?",
            answer: "Some Tallahassee properties near Lake Jackson, lakes, and low-lying areas are in flood zones. Even outside designated zones, flooding can occur during heavy rains. We recommend reviewing your property's flood risk—standard homeowners insurance doesn't cover flood damage.",
        },
        {
            question: "How far are you from Tallahassee?",
            answer: "Our office is in Lake City, about 100 miles east of Tallahassee on I-10. We're happy to meet clients or handle everything by phone, email, and video call. We regularly serve Leon County clients and understand the local market.",
        },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
}

export default function TallahasseePage() {
    return <CityPageTemplate data={pageData} />
}
