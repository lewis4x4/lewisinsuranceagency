/**
 * SEO Keyword Map for Lewis Insurance
 * Centralized keyword definitions for consistent SEO across the site
 */

export interface KeywordGroup {
    primary: string
    secondary: string[]
    longTail: string[]
    localVariants: string[]
}

export interface PageKeywords {
    title: string
    description: string
    h1: string
    keywords: KeywordGroup
}

// Core service keywords
export const serviceKeywords: Record<string, KeywordGroup> = {
    homeowners: {
        primary: "Florida homeowners insurance",
        secondary: [
            "home insurance Florida",
            "homeowners policy Florida",
            "FL homeowners insurance",
            "residential insurance Florida",
        ],
        longTail: [
            "best homeowners insurance in Florida",
            "affordable home insurance Florida",
            "Florida homeowners insurance quotes",
            "hurricane home insurance Florida",
            "wind insurance Florida homes",
        ],
        localVariants: [
            "{city} homeowners insurance",
            "home insurance {city} FL",
            "{city} Florida home insurance",
        ],
    },
    flood: {
        primary: "Florida flood insurance",
        secondary: [
            "flood insurance Florida",
            "NFIP Florida",
            "private flood insurance Florida",
            "flood coverage Florida",
        ],
        longTail: [
            "flood insurance cost Florida",
            "do I need flood insurance in Florida",
            "best flood insurance Florida",
            "flood insurance quotes Florida",
            "flood zone insurance Florida",
        ],
        localVariants: [
            "{city} flood insurance",
            "flood insurance {city} FL",
            "{city} Florida flood coverage",
        ],
    },
    auto: {
        primary: "Florida auto insurance",
        secondary: [
            "car insurance Florida",
            "auto insurance FL",
            "vehicle insurance Florida",
            "Florida car insurance",
        ],
        longTail: [
            "cheap car insurance Florida",
            "best auto insurance Florida",
            "Florida auto insurance quotes",
            "full coverage car insurance Florida",
            "minimum car insurance Florida",
        ],
        localVariants: [
            "{city} auto insurance",
            "car insurance {city} FL",
            "{city} Florida car insurance",
        ],
    },
    condo: {
        primary: "Florida condo insurance",
        secondary: [
            "HO-6 insurance Florida",
            "condominium insurance Florida",
            "condo unit insurance FL",
            "Florida condo coverage",
        ],
        longTail: [
            "condo insurance cost Florida",
            "what does condo insurance cover",
            "HO-6 policy Florida",
            "condo association insurance Florida",
            "condo insurance quotes Florida",
        ],
        localVariants: [
            "{city} condo insurance",
            "condo insurance {city} FL",
            "{city} Florida condo coverage",
        ],
    },
    renters: {
        primary: "Florida renters insurance",
        secondary: [
            "renters insurance FL",
            "tenant insurance Florida",
            "apartment insurance Florida",
            "renter coverage Florida",
        ],
        longTail: [
            "cheap renters insurance Florida",
            "renters insurance cost Florida",
            "do I need renters insurance",
            "renters insurance quotes Florida",
            "best renters insurance Florida",
        ],
        localVariants: [
            "{city} renters insurance",
            "renters insurance {city} FL",
            "{city} Florida renters coverage",
        ],
    },
    umbrella: {
        primary: "Florida umbrella insurance",
        secondary: [
            "umbrella policy Florida",
            "excess liability insurance Florida",
            "personal umbrella Florida",
            "umbrella coverage FL",
        ],
        longTail: [
            "umbrella insurance cost Florida",
            "do I need umbrella insurance",
            "umbrella insurance quotes Florida",
            "how much umbrella insurance do I need",
            "umbrella insurance benefits",
        ],
        localVariants: [
            "{city} umbrella insurance",
            "umbrella insurance {city} FL",
            "{city} Florida umbrella policy",
        ],
    },
    generalLiability: {
        primary: "Florida general liability insurance",
        secondary: [
            "business liability insurance Florida",
            "commercial liability FL",
            "general liability coverage Florida",
            "liability insurance for business Florida",
        ],
        longTail: [
            "general liability insurance cost Florida",
            "small business liability insurance Florida",
            "general liability quotes Florida",
            "how much general liability insurance do I need",
            "contractor liability insurance Florida",
        ],
        localVariants: [
            "{city} general liability insurance",
            "business liability insurance {city} FL",
            "{city} Florida commercial liability",
        ],
    },
    workersComp: {
        primary: "Florida workers compensation insurance",
        secondary: [
            "workers comp Florida",
            "work comp insurance FL",
            "employee injury insurance Florida",
            "Florida workers comp coverage",
        ],
        longTail: [
            "workers comp cost Florida",
            "Florida workers comp requirements",
            "workers compensation quotes Florida",
            "small business workers comp Florida",
            "workers comp exemption Florida",
        ],
        localVariants: [
            "{city} workers compensation",
            "workers comp {city} FL",
            "{city} Florida work comp insurance",
        ],
    },
    commercialAuto: {
        primary: "Florida commercial auto insurance",
        secondary: [
            "business vehicle insurance Florida",
            "commercial vehicle coverage FL",
            "fleet insurance Florida",
            "company car insurance Florida",
        ],
        longTail: [
            "commercial auto insurance cost Florida",
            "commercial truck insurance Florida",
            "commercial auto quotes Florida",
            "business auto insurance Florida",
            "delivery vehicle insurance Florida",
        ],
        localVariants: [
            "{city} commercial auto insurance",
            "business vehicle insurance {city} FL",
            "{city} Florida fleet insurance",
        ],
    },
    bop: {
        primary: "Florida business owners policy",
        secondary: [
            "BOP insurance Florida",
            "business insurance package Florida",
            "small business insurance Florida",
            "commercial package policy FL",
        ],
        longTail: [
            "business owners policy cost Florida",
            "BOP insurance quotes Florida",
            "small business insurance package Florida",
            "what does a BOP cover",
            "business owners policy vs general liability",
        ],
        localVariants: [
            "{city} business owners policy",
            "small business insurance {city} FL",
            "{city} Florida BOP insurance",
        ],
    },
    professionalLiability: {
        primary: "Florida professional liability insurance",
        secondary: [
            "E&O insurance Florida",
            "errors and omissions Florida",
            "professional indemnity Florida",
            "malpractice insurance Florida",
        ],
        longTail: [
            "professional liability cost Florida",
            "E&O insurance quotes Florida",
            "consultant liability insurance Florida",
            "professional liability for contractors Florida",
            "errors and omissions coverage Florida",
        ],
        localVariants: [
            "{city} professional liability insurance",
            "E&O insurance {city} FL",
            "{city} Florida errors and omissions",
        ],
    },
    cyberLiability: {
        primary: "Florida cyber liability insurance",
        secondary: [
            "cyber insurance Florida",
            "data breach insurance Florida",
            "cyber security insurance FL",
            "cyber risk coverage Florida",
        ],
        longTail: [
            "cyber insurance cost Florida",
            "small business cyber insurance Florida",
            "cyber liability quotes Florida",
            "data breach coverage Florida",
            "cyber attack insurance Florida",
        ],
        localVariants: [
            "{city} cyber liability insurance",
            "cyber insurance {city} FL",
            "{city} Florida data breach coverage",
        ],
    },
}

// City-specific data for local SEO
export const cityData: Record<string, {
    name: string
    county: string
    population: string
    region: string
    zipCodes: string[]
    nearbyAreas: string[]
}> = {
    "miami-fl": {
        name: "Miami",
        county: "Miami-Dade",
        population: "450,000+",
        region: "South Florida",
        zipCodes: ["33101", "33109", "33125", "33126", "33127", "33128", "33129", "33130", "33131", "33132"],
        nearbyAreas: ["Miami Beach", "Coral Gables", "Hialeah", "Doral", "Kendall"],
    },
    "fort-lauderdale-fl": {
        name: "Fort Lauderdale",
        county: "Broward",
        population: "180,000+",
        region: "South Florida",
        zipCodes: ["33301", "33304", "33305", "33306", "33308", "33309", "33311", "33312", "33313", "33315"],
        nearbyAreas: ["Hollywood", "Pompano Beach", "Plantation", "Davie", "Sunrise"],
    },
    "west-palm-beach-fl": {
        name: "West Palm Beach",
        county: "Palm Beach",
        population: "115,000+",
        region: "South Florida",
        zipCodes: ["33401", "33402", "33403", "33404", "33405", "33406", "33407", "33409", "33411", "33412"],
        nearbyAreas: ["Palm Beach", "Lake Worth", "Boca Raton", "Boynton Beach", "Jupiter"],
    },
    "tampa-fl": {
        name: "Tampa",
        county: "Hillsborough",
        population: "400,000+",
        region: "Tampa Bay",
        zipCodes: ["33601", "33602", "33603", "33604", "33605", "33606", "33607", "33609", "33610", "33611"],
        nearbyAreas: ["St. Petersburg", "Clearwater", "Brandon", "Temple Terrace", "Wesley Chapel"],
    },
    "orlando-fl": {
        name: "Orlando",
        county: "Orange",
        population: "310,000+",
        region: "Central Florida",
        zipCodes: ["32801", "32803", "32804", "32805", "32806", "32807", "32808", "32809", "32810", "32811"],
        nearbyAreas: ["Kissimmee", "Winter Park", "Altamonte Springs", "Sanford", "Lake Mary"],
    },
    "jacksonville-fl": {
        name: "Jacksonville",
        county: "Duval",
        population: "950,000+",
        region: "Northeast Florida",
        zipCodes: ["32099", "32201", "32202", "32203", "32204", "32205", "32206", "32207", "32208", "32209"],
        nearbyAreas: ["Jacksonville Beach", "Orange Park", "St. Augustine", "Ponte Vedra", "Fleming Island"],
    },
    "naples-fl": {
        name: "Naples",
        county: "Collier",
        population: "22,000+",
        region: "Southwest Florida",
        zipCodes: ["34101", "34102", "34103", "34104", "34105", "34108", "34109", "34110", "34112", "34113"],
        nearbyAreas: ["Marco Island", "Bonita Springs", "Estero", "Fort Myers", "Cape Coral"],
    },
    "sarasota-fl": {
        name: "Sarasota",
        county: "Sarasota",
        population: "55,000+",
        region: "Southwest Florida",
        zipCodes: ["34230", "34231", "34232", "34233", "34234", "34235", "34236", "34237", "34238", "34239"],
        nearbyAreas: ["Bradenton", "Venice", "Siesta Key", "Longboat Key", "North Port"],
    },
}

// Generate localized keywords for a city
export function generateLocalKeywords(
    serviceKey: keyof typeof serviceKeywords,
    citySlug: keyof typeof cityData
): KeywordGroup {
    const service = serviceKeywords[serviceKey]
    const city = cityData[citySlug]

    if (!service || !city) {
        throw new Error(`Invalid service key or city slug: ${serviceKey}, ${citySlug}`)
    }

    return {
        primary: service.localVariants[0].replace("{city}", city.name),
        secondary: service.secondary.map(kw => `${kw} ${city.name}`),
        longTail: [
            ...service.longTail.map(kw => kw.replace("Florida", city.name)),
            `${service.primary.replace("Florida ", "")} near ${city.name}`,
            `best ${service.primary.replace("Florida ", "")} in ${city.name}`,
            `${city.name} ${city.county} County insurance`,
        ],
        localVariants: service.localVariants.map(v => v.replace("{city}", city.name)),
    }
}

// Common SEO-related terms for Florida insurance
export const floridaInsuranceTerms = {
    hurricaneRelated: [
        "hurricane insurance Florida",
        "wind insurance Florida",
        "hurricane deductible Florida",
        "named storm deductible",
        "hurricane preparedness",
        "storm damage coverage",
    ],
    floridaSpecific: [
        "Citizens Insurance Florida",
        "Florida insurance crisis",
        "Florida insurance rates",
        "wind mitigation inspection",
        "4-point inspection Florida",
        "roof inspection Florida insurance",
        "assignment of benefits Florida",
    ],
    floodRelated: [
        "FEMA flood zones Florida",
        "flood zone AE insurance",
        "flood zone X insurance",
        "elevation certificate Florida",
        "flood insurance required Florida",
        "private flood vs NFIP",
    ],
}

// Keyword density targets (for content optimization)
export const keywordDensityTargets = {
    primary: { min: 1.0, max: 2.0 }, // 1-2% density
    secondary: { min: 0.5, max: 1.0 }, // 0.5-1% density
    longTail: { min: 0.2, max: 0.5 }, // 0.2-0.5% density
}
