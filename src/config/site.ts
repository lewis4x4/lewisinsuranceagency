export const siteConfig = {
    name: "Lewis Insurance",
    tagline: "Your Florida Insurance Experts",
    domain: "lewisinsurance.com",
    portalDomain: "lewisinsurance.ai",

    contact: {
        phone: {
            main: "(386) 755-0050",
            claims: "(386) 755-0050",
        },
        email: {
            info: "info@lewisinsurance.com",
            claims: "claims@lewisinsurance.com",
            quotes: "quotes@lewisinsurance.com",
        },
        address: "1313 W US Highway 90, Lake City, FL 32055",
    },

    hours: {
        weekdays: "9:00 AM - 5:00 PM",
        saturday: "By Appointment",
        sunday: "Closed",
    },

    social: {
        facebook: "https://facebook.com/lewisinsurance", // PLACEHOLDER
        linkedin: "https://linkedin.com/company/lewisinsurance", // PLACEHOLDER
        google: "https://g.page/lewisinsurance", // PLACEHOLDER
    },

    portal: {
        login: "https://lewisinsurance.ai/login",
        makePayment: "https://lewisinsurance.ai/payment",
        fileClaim: "https://lewisinsurance.ai/claims",
        viewPolicy: "https://lewisinsurance.ai/policies",
        requestChange: "https://lewisinsurance.ai/changes",
    },

    serviceAreas: [
        "Lake City", "Jacksonville", "Gainesville", "Ocala", "Tallahassee",
        "Miami", "Fort Lauderdale", "West Palm Beach", "Tampa",
        "Orlando", "Naples", "Sarasota"
    ],

    licensedStates: ["Florida"],

    // SEO defaults
    seo: {
        titleTemplate: "%s | Lewis Insurance - Florida Insurance Experts",
        defaultTitle: "Lewis Insurance - Your Florida Insurance Experts",
        defaultDescription: "Lewis Insurance is an independent Florida insurance agency. Compare quotes from multiple carriers for home, auto, flood, and business insurance. Local experts, personalized service.",
    },

    // Trust indicators
    trust: {
        yearsInBusiness: "XX", // PLACEHOLDER
        reviewCount: "XXX", // PLACEHOLDER
        averageRating: "4.9",
        carrierCount: "20+",
    },
}

// Insurance types for forms
export const insuranceTypes = [
    { value: "home", label: "Home Insurance" },
    { value: "auto", label: "Auto Insurance" },
    { value: "flood", label: "Flood Insurance" },
    { value: "condo", label: "Condo Insurance" },
    { value: "renters", label: "Renters Insurance" },
    { value: "umbrella", label: "Umbrella Insurance" },
    { value: "business", label: "Business Insurance" },
    { value: "other", label: "Other" },
] as const

// Navigation structure
export const navigation = {
    main: [
        { name: "Home", href: "/" },
        {
            name: "Personal",
            href: "/personal",
            children: [
                { name: "Homeowners Insurance", href: "/personal/homeowners-insurance-florida" },
                { name: "Auto Insurance", href: "/personal/auto-insurance-florida" },
                { name: "Flood Insurance", href: "/personal/flood-insurance-florida" },
                { name: "Condo Insurance", href: "/personal/condo-insurance-florida" },
                { name: "Renters Insurance", href: "/personal/renters-insurance-florida" },
                { name: "Umbrella Insurance", href: "/personal/umbrella-insurance-florida" },
            ]
        },
        {
            name: "Business",
            href: "/business",
            children: [
                { name: "General Liability", href: "/business/general-liability-florida" },
                { name: "Workers Compensation", href: "/business/workers-compensation-florida" },
                { name: "Commercial Auto", href: "/business/commercial-auto-florida" },
                { name: "Business Owners Policy", href: "/business/business-owners-policy-florida" },
                { name: "Professional Liability", href: "/business/professional-liability-eo-florida" },
                { name: "Cyber Liability", href: "/business/cyber-liability-florida" },
            ]
        },
        { name: "Resources", href: "/resources" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ],
    utility: [
        { name: "Client Portal", href: "/portal" },
        { name: "Login", href: "/portal" },
    ],
    footer: {
        personal: [
            { name: "Homeowners Insurance", href: "/personal/homeowners-insurance-florida" },
            { name: "Auto Insurance", href: "/personal/auto-insurance-florida" },
            { name: "Flood Insurance", href: "/personal/flood-insurance-florida" },
            { name: "Condo Insurance", href: "/personal/condo-insurance-florida" },
            { name: "Renters Insurance", href: "/personal/renters-insurance-florida" },
            { name: "Umbrella Insurance", href: "/personal/umbrella-insurance-florida" },
        ],
        business: [
            { name: "General Liability", href: "/business/general-liability-florida" },
            { name: "Workers Compensation", href: "/business/workers-compensation-florida" },
            { name: "Commercial Auto", href: "/business/commercial-auto-florida" },
            { name: "Business Owners Policy", href: "/business/business-owners-policy-florida" },
            { name: "Professional Liability", href: "/business/professional-liability-eo-florida" },
            { name: "Cyber Liability", href: "/business/cyber-liability-florida" },
        ],
        company: [
            { name: "About Us", href: "/about" },
            { name: "Contact", href: "/contact" },
            { name: "Carriers", href: "/carriers" },
            { name: "Reviews", href: "/reviews" },
            { name: "Client Portal", href: "/portal" },
        ],
        legal: [
            { name: "Privacy Policy", href: "/privacy-policy" },
            { name: "Terms of Service", href: "/terms" },
        ],
    },
}

export type InsuranceType = typeof insuranceTypes[number]["value"]
