/**
 * City-specific data for expanding location page content
 * Used to add local context and improve thin content pages
 */

export interface CityData {
    slug: string
    city: string
    state: string
    county: string
    population: number
    populationYear: number
    countyPopulation?: number
    distanceFromOffice: string
    driveTime: string
    majorHighways: string[]
    nearbyWaterways?: string[]
    region: "north-florida" | "central-florida" | "south-florida" | "tampa-bay" | "southwest-florida"
    characteristics: string[]
    insuranceRisks: string[]
    industries?: string[]
    additionalFacts?: string[]
}

export const cityData: Record<string, CityData> = {
    // =====================
    // NORTH FLORIDA (Primary Service Area)
    // =====================
    "lake-city-fl": {
        slug: "lake-city-fl",
        city: "Lake City",
        state: "FL",
        county: "Columbia",
        population: 12046,
        populationYear: 2020,
        countyPopulation: 71686,
        distanceFromOffice: "Home office",
        driveTime: "In town",
        majorHighways: ["I-75", "I-10", "US-90", "US-41", "US-441"],
        nearbyWaterways: ["Lake DeSoto", "Suwannee River", "Santa Fe River", "Ichetucknee Springs"],
        region: "north-florida",
        characteristics: [
            "County seat of Columbia County",
            "Major crossroads at I-75 and I-10 intersection",
            "Gateway to North Central Florida",
            "Historic downtown with Lake DeSoto",
            "Home to Florida Gateway College",
            "Proximity to natural springs and state parks",
        ],
        insuranceRisks: [
            "Flood risk near rivers and low-lying areas",
            "Tropical storm and hurricane wind exposure",
            "Heavy traffic from I-75/I-10 interchange increases auto accident risk",
            "Rural properties may need specialized farm coverage",
            "Older homes may require updates for insurance eligibility",
        ],
        industries: [
            "Healthcare (Lake City Medical Center)",
            "Education (Florida Gateway College)",
            "Retail and hospitality serving highway travelers",
            "Agriculture and timber",
            "Distribution and logistics",
        ],
    },

    "jasper-fl": {
        slug: "jasper-fl",
        city: "Jasper",
        state: "FL",
        county: "Hamilton",
        population: 4546,
        populationYear: 2020,
        countyPopulation: 14428,
        distanceFromOffice: "25 miles",
        driveTime: "30 minutes",
        majorHighways: ["I-75", "US-41", "US-129"],
        nearbyWaterways: ["Suwannee River", "Withlacoochee River"],
        region: "north-florida",
        characteristics: [
            "County seat of Hamilton County",
            "Historic small-town Florida community",
            "Agricultural heritage with tobacco and timber history",
            "I-75 corridor provides commercial opportunities",
            "Close to Stephen Foster Folk Culture Center",
            "Near Georgia state line",
        ],
        insuranceRisks: [
            "Rural property risks including outbuildings and acreage",
            "Mobile homes common - specialized coverage needed",
            "Flood risk near Suwannee River",
            "Agricultural exposures for farming operations",
            "Wind and storm damage from tropical systems",
        ],
        industries: [
            "Agriculture (row crops, timber, cattle)",
            "I-75 corridor services (fuel, food, lodging)",
            "Local government services",
            "Forestry and timber operations",
        ],
        additionalFacts: [
            "Named after Sergeant William Jasper, Revolutionary War hero",
            "One of Florida's smallest county seats by population",
        ],
    },

    "live-oak-fl": {
        slug: "live-oak-fl",
        city: "Live Oak",
        state: "FL",
        county: "Suwannee",
        population: 7136,
        populationYear: 2020,
        countyPopulation: 44417,
        distanceFromOffice: "30 miles",
        driveTime: "35 minutes",
        majorHighways: ["I-10", "US-90", "US-129"],
        nearbyWaterways: ["Suwannee River", "Spirit of the Suwannee Music Park"],
        region: "north-florida",
        characteristics: [
            "County seat of Suwannee County",
            "Historic railroad town with preserved downtown",
            "I-10 provides east-west connectivity",
            "Spirit of the Suwannee Music Park hosts major festivals",
            "Strong agricultural community",
            "Gateway to Suwannee River recreation",
        ],
        insuranceRisks: [
            "Suwannee River flooding affects many properties",
            "Mobile home coverage is essential - high percentage of manufactured housing",
            "Agricultural operations need farm liability coverage",
            "Tropical storms bring wind damage inland",
            "Rural properties may be distant from fire stations",
        ],
        industries: [
            "Agriculture (vegetables, poultry, cattle)",
            "Tourism (Spirit of the Suwannee, river recreation)",
            "Healthcare",
            "Retail serving surrounding rural areas",
        ],
        additionalFacts: [
            "Named for the large live oak trees in the area",
            "Spirit of the Suwannee Music Park is one of Florida's premier outdoor venues",
        ],
    },

    "high-springs-fl": {
        slug: "high-springs-fl",
        city: "High Springs",
        state: "FL",
        county: "Alachua",
        population: 5778,
        populationYear: 2020,
        countyPopulation: 269043,
        distanceFromOffice: "35 miles",
        driveTime: "40 minutes",
        majorHighways: ["US-441", "US-41", "SR-45"],
        nearbyWaterways: ["Santa Fe River", "Ichetucknee Springs", "Ginnie Springs", "Blue Springs"],
        region: "north-florida",
        characteristics: [
            "Historic downtown with antique shops and restaurants",
            "Premier destination for cave diving and springs",
            "Close proximity to multiple first-magnitude springs",
            "Growing bedroom community for Gainesville",
            "Ecotourism hub for spring-fed rivers",
            "Small-town charm with tourism economy",
        ],
        insuranceRisks: [
            "Flood zones along Santa Fe River corridor",
            "Properties near springs may have sinkholes",
            "Tourism businesses need appropriate liability coverage",
            "Diving and recreation increase liability exposures",
            "Rural outskirts need coverage for acreage and outbuildings",
        ],
        industries: [
            "Tourism (springs, diving, outdoor recreation)",
            "Retail and hospitality",
            "Agriculture (surrounding areas)",
            "Small business services",
        ],
        additionalFacts: [
            "Known as the 'Antique Capital of North Central Florida'",
            "Santa Fe River is one of the most popular tubing destinations",
        ],
    },

    "fort-white-fl": {
        slug: "fort-white-fl",
        city: "Fort White",
        state: "FL",
        county: "Columbia",
        population: 567,
        populationYear: 2020,
        distanceFromOffice: "15 miles",
        driveTime: "20 minutes",
        majorHighways: ["US-27", "SR-47"],
        nearbyWaterways: ["Santa Fe River", "Ichetucknee Springs State Park"],
        region: "north-florida",
        characteristics: [
            "Small rural community in Columbia County",
            "Gateway to Ichetucknee Springs State Park",
            "Agricultural community with farms and rural properties",
            "Quiet residential area popular with families",
            "Close to O'Leno State Park",
        ],
        insuranceRisks: [
            "Rural property risks - many homes on acreage",
            "Mobile homes require specialized coverage",
            "Flood risk near rivers and springs",
            "Distance from fire stations may affect rates",
            "Agricultural exposures for hobby farms",
        ],
        industries: [
            "Agriculture",
            "Tourism support (springs visitors)",
            "Forestry",
        ],
        additionalFacts: [
            "Named for a fort built during the Second Seminole War",
            "Ichetucknee Springs draws over 100,000 visitors annually",
        ],
    },

    "white-springs-fl": {
        slug: "white-springs-fl",
        city: "White Springs",
        state: "FL",
        county: "Hamilton",
        population: 491,
        populationYear: 2020,
        distanceFromOffice: "20 miles",
        driveTime: "25 minutes",
        majorHighways: ["US-41", "SR-136"],
        nearbyWaterways: ["Suwannee River"],
        region: "north-florida",
        characteristics: [
            "Historic town on the Suwannee River",
            "Home to Stephen Foster Folk Culture Center State Park",
            "Annual Florida Folk Festival destination",
            "Victorian-era history and architecture",
            "Small, tight-knit community",
        ],
        insuranceRisks: [
            "Suwannee River flooding is primary concern",
            "Historic buildings may need special coverage considerations",
            "Rural location affects fire response times",
            "Mobile homes common in surrounding areas",
            "Storm damage from tropical systems",
        ],
        industries: [
            "Tourism (state park, festivals)",
            "Local services",
            "Agriculture",
        ],
        additionalFacts: [
            "Site of the Florida Folk Festival since 1953",
            "Historic mineral springs once made it a health resort destination",
        ],
    },

    "branford-fl": {
        slug: "branford-fl",
        city: "Branford",
        state: "FL",
        county: "Suwannee",
        population: 726,
        populationYear: 2020,
        distanceFromOffice: "25 miles",
        driveTime: "30 minutes",
        majorHighways: ["US-27", "US-129"],
        nearbyWaterways: ["Suwannee River", "Santa Fe River confluence"],
        region: "north-florida",
        characteristics: [
            "Located at confluence of Suwannee and Santa Fe Rivers",
            "Popular destination for divers and river recreation",
            "Historic small-town Florida community",
            "Gateway to numerous springs",
            "Significant cave diving industry",
        ],
        insuranceRisks: [
            "High flood risk - located at river confluence",
            "Cave diving and outdoor recreation increases liability exposures",
            "Rural properties need appropriate coverage",
            "Mobile homes common throughout area",
            "Distance from emergency services",
        ],
        industries: [
            "Cave diving tourism and training",
            "River recreation",
            "Agriculture",
            "Retail serving outdoor enthusiasts",
        ],
        additionalFacts: [
            "Known as one of the top cave diving destinations in the world",
            "Confluence location makes it geographically unique",
        ],
    },

    "mayo-fl": {
        slug: "mayo-fl",
        city: "Mayo",
        state: "FL",
        county: "Lafayette",
        population: 1237,
        populationYear: 2020,
        countyPopulation: 8422,
        distanceFromOffice: "35 miles",
        driveTime: "40 minutes",
        majorHighways: ["US-27", "US-19"],
        nearbyWaterways: ["Suwannee River"],
        region: "north-florida",
        characteristics: [
            "County seat of Lafayette County",
            "One of Florida's least populated counties",
            "Strong agricultural community",
            "Historic downtown area",
            "Close-knit rural community",
            "Suwannee River provides recreation",
        ],
        insuranceRisks: [
            "Rural properties often on large acreage",
            "Mobile homes prevalent - specialized coverage needed",
            "Suwannee River flood risk",
            "Agricultural operations need farm coverage",
            "Distance from fire stations affects ISO ratings",
        ],
        industries: [
            "Agriculture (timber, row crops, cattle)",
            "Dairy farming",
            "Local government",
            "Small retail",
        ],
        additionalFacts: [
            "Lafayette County is one of Florida's smallest by population",
            "Strong Mennonite and Amish community nearby",
        ],
    },

    "macclenny-fl": {
        slug: "macclenny-fl",
        city: "Macclenny",
        state: "FL",
        county: "Baker",
        population: 6374,
        populationYear: 2020,
        countyPopulation: 29210,
        distanceFromOffice: "35 miles",
        driveTime: "40 minutes",
        majorHighways: ["I-10", "US-90", "US-301"],
        region: "north-florida",
        characteristics: [
            "County seat of Baker County",
            "Growing bedroom community for Jacksonville",
            "I-10 corridor provides connectivity",
            "Mix of rural character and suburban growth",
            "Strong community identity",
        ],
        insuranceRisks: [
            "Increasing traffic from Jacksonville commuters raises auto risks",
            "New construction mixed with older homes",
            "Rural properties in surrounding areas need farm coverage",
            "Mobile homes throughout county",
            "Storm exposure from Atlantic systems",
        ],
        industries: [
            "Retail and services for commuters",
            "Healthcare (Ed Fraser Memorial Hospital)",
            "Corrections (Baker Correctional Institution)",
            "Agriculture",
        ],
        additionalFacts: [
            "Named after the McClenny family, early settlers",
            "Fastest-growing bedroom community west of Jacksonville",
        ],
    },

    "gainesville-fl": {
        slug: "gainesville-fl",
        city: "Gainesville",
        state: "FL",
        county: "Alachua",
        population: 141085,
        populationYear: 2020,
        countyPopulation: 269043,
        distanceFromOffice: "45 miles",
        driveTime: "50 minutes",
        majorHighways: ["I-75", "US-441", "US-301", "SR-24", "SR-26"],
        nearbyWaterways: ["Paynes Prairie", "Newnan's Lake", "Lake Alice"],
        region: "north-florida",
        characteristics: [
            "Home to University of Florida",
            "Major regional healthcare hub (UF Health)",
            "Diverse economy beyond university",
            "Cultural and arts destination",
            "Large student population affects rental market",
            "Tech and biotech industry presence",
        ],
        insuranceRisks: [
            "High rental property concentration needs landlord coverage",
            "Student drivers increase auto accident rates",
            "Sinkholes more common in Alachua County karst terrain",
            "Business insurance needs for healthcare and research sectors",
            "Older neighborhoods may have outdated systems",
        ],
        industries: [
            "Higher education (UF)",
            "Healthcare (UF Health, North Florida Regional)",
            "Technology and startups",
            "Retail and hospitality",
            "Biotechnology research",
        ],
        additionalFacts: [
            "University of Florida is one of the nation's largest public universities",
            "Named Tree City USA for over 30 consecutive years",
        ],
    },

    "jacksonville-fl": {
        slug: "jacksonville-fl",
        city: "Jacksonville",
        state: "FL",
        county: "Duval",
        population: 949611,
        populationYear: 2020,
        countyPopulation: 995567,
        distanceFromOffice: "60 miles",
        driveTime: "1 hour",
        majorHighways: ["I-95", "I-10", "I-295", "US-1", "US-17", "US-90"],
        nearbyWaterways: ["St. Johns River", "Atlantic Ocean", "Intracoastal Waterway"],
        region: "north-florida",
        characteristics: [
            "Largest city by area in the contiguous US",
            "Major port and logistics hub",
            "Diverse neighborhoods from urban to suburban to beach",
            "Corporate headquarters (Fidelity National, CSX)",
            "NFL team (Jacksonville Jaguars)",
            "Growing fintech and healthcare sectors",
        ],
        insuranceRisks: [
            "Coastal and riverfront properties need flood coverage",
            "Hurricane and storm surge exposure along coast",
            "High traffic volume increases auto accident rates",
            "Diverse property types require varied coverage approaches",
            "Urban crime rates affect some neighborhoods",
            "Business interruption coverage critical for port-dependent operations",
        ],
        industries: [
            "Port and logistics",
            "Financial services",
            "Healthcare (Mayo Clinic, Baptist, UF Health)",
            "Military (Naval Station Mayport, NAS Jacksonville)",
            "Insurance companies",
        ],
        additionalFacts: [
            "Consolidated city-county government since 1968",
            "Deep-water port is one of the busiest in the Southeast",
        ],
    },

    // =====================
    // SOUTH FLORIDA
    // =====================
    "miami-fl": {
        slug: "miami-fl",
        city: "Miami",
        state: "FL",
        county: "Miami-Dade",
        population: 442241,
        populationYear: 2020,
        countyPopulation: 2716940,
        distanceFromOffice: "350 miles",
        driveTime: "5 hours",
        majorHighways: ["I-95", "I-75", "I-395", "US-1", "Palmetto Expressway", "Dolphin Expressway"],
        nearbyWaterways: ["Biscayne Bay", "Atlantic Ocean", "Miami River"],
        region: "south-florida",
        characteristics: [
            "International gateway and cultural capital",
            "Major cruise port",
            "Global business and finance hub",
            "Diverse multilingual population",
            "World-class beaches and nightlife",
            "Art Deco historic district in Miami Beach",
        ],
        insuranceRisks: [
            "Highest hurricane exposure in Florida",
            "Flood insurance essential - much of area at or below sea level",
            "High-value properties require specialty markets",
            "Auto theft rates among highest in nation",
            "Sea level rise increasingly affects coastal properties",
            "Roof age requirements strictly enforced by carriers",
        ],
        industries: [
            "International trade and banking",
            "Tourism and hospitality",
            "Healthcare",
            "Real estate development",
            "Media and entertainment",
        ],
        additionalFacts: [
            "Port of Miami is the cruise capital of the world",
            "Only major US city founded by a woman (Julia Tuttle)",
        ],
    },

    "fort-lauderdale-fl": {
        slug: "fort-lauderdale-fl",
        city: "Fort Lauderdale",
        state: "FL",
        county: "Broward",
        population: 182760,
        populationYear: 2020,
        countyPopulation: 1944375,
        distanceFromOffice: "320 miles",
        driveTime: "4.5 hours",
        majorHighways: ["I-95", "I-595", "I-75 (Alligator Alley)", "US-1", "US-441"],
        nearbyWaterways: ["Atlantic Ocean", "Intracoastal Waterway", "New River", "Extensive canal system"],
        region: "south-florida",
        characteristics: [
            "Known as the 'Venice of America' for canal system",
            "Major yachting capital",
            "Fort Lauderdale-Hollywood International Airport",
            "Growing business and tech hub",
            "Upscale beach community",
            "Extensive waterfront properties",
        ],
        insuranceRisks: [
            "High hurricane and flood exposure",
            "Many properties in high-risk flood zones",
            "Waterfront homes need higher coverage limits",
            "Boat and yacht insurance common need",
            "Condo associations require HO-6 coverage understanding",
            "High-value homes require specialty markets",
        ],
        industries: [
            "Tourism and hospitality",
            "Marine industry (yachts, boating)",
            "Healthcare",
            "Technology",
            "Financial services",
        ],
        additionalFacts: [
            "Has more than 300 miles of navigable waterways",
            "Host to Fort Lauderdale International Boat Show, largest in-water show in the world",
        ],
    },

    "west-palm-beach-fl": {
        slug: "west-palm-beach-fl",
        city: "West Palm Beach",
        state: "FL",
        county: "Palm Beach",
        population: 117415,
        populationYear: 2020,
        countyPopulation: 1492191,
        distanceFromOffice: "280 miles",
        driveTime: "4 hours",
        majorHighways: ["I-95", "Florida's Turnpike", "US-1", "US-98"],
        nearbyWaterways: ["Lake Worth Lagoon", "Atlantic Ocean", "Intracoastal Waterway"],
        region: "south-florida",
        characteristics: [
            "County seat of Palm Beach County",
            "Cultural center with museums and performing arts",
            "Mix of urban downtown and suburban communities",
            "Proximity to ultra-wealthy Palm Beach Island",
            "Growing downtown with Clematis Street district",
        ],
        insuranceRisks: [
            "Hurricane exposure significant along coast",
            "Flood insurance required for many properties",
            "High-value homes need specialty coverage",
            "Condo coverage important in high-rise market",
            "Equestrian properties in Wellington need specialized coverage",
        ],
        industries: [
            "Professional services",
            "Healthcare (JFK Medical Center, St. Mary's)",
            "Education (Palm Beach Atlantic University)",
            "Tourism and hospitality",
            "Financial services",
        ],
        additionalFacts: [
            "Wellington area is a world-renowned equestrian center",
            "Palm Beach County is Florida's wealthiest county by median income",
        ],
    },

    // =====================
    // CENTRAL FLORIDA
    // =====================
    "orlando-fl": {
        slug: "orlando-fl",
        city: "Orlando",
        state: "FL",
        county: "Orange",
        population: 307573,
        populationYear: 2020,
        countyPopulation: 1393452,
        distanceFromOffice: "150 miles",
        driveTime: "2.5 hours",
        majorHighways: ["I-4", "Florida's Turnpike", "SR-408 (East-West Expressway)", "SR-417", "SR-528 (Beachline)"],
        nearbyWaterways: ["Lake Eola", "Numerous lakes throughout region"],
        region: "central-florida",
        characteristics: [
            "Theme park capital of the world",
            "Major tourism destination",
            "Growing tech and simulation industry",
            "University of Central Florida (largest by enrollment)",
            "International Drive entertainment corridor",
            "Convention and conference destination",
        ],
        insuranceRisks: [
            "High tourism creates significant liability exposure for businesses",
            "Lake properties may have flood and sinkhole risks",
            "Heavy traffic on I-4 corridor increases auto risks",
            "Seasonal worker populations affect rental insurance needs",
            "Central Florida sinkholes more common",
            "Inland location still vulnerable to hurricanes",
        ],
        industries: [
            "Tourism and hospitality (Disney, Universal, SeaWorld)",
            "Technology and simulation",
            "Healthcare (AdventHealth, Orlando Health)",
            "Higher education",
            "Convention and events",
        ],
        additionalFacts: [
            "Most visited destination in the United States",
            "Home to more than a dozen theme parks",
        ],
    },

    // =====================
    // TAMPA BAY
    // =====================
    "tampa-fl": {
        slug: "tampa-fl",
        city: "Tampa",
        state: "FL",
        county: "Hillsborough",
        population: 384959,
        populationYear: 2020,
        countyPopulation: 1451358,
        distanceFromOffice: "200 miles",
        driveTime: "3 hours",
        majorHighways: ["I-75", "I-275", "I-4", "US-41", "Selmon Expressway"],
        nearbyWaterways: ["Tampa Bay", "Hillsborough River", "Gulf of Mexico"],
        region: "tampa-bay",
        characteristics: [
            "Major business hub and port city",
            "Historic Ybor City district",
            "Professional sports teams (Bucs, Lightning, Rays)",
            "Growing tech and finance sector",
            "South Tampa waterfront neighborhoods",
            "MacDill Air Force Base",
        ],
        insuranceRisks: [
            "Tampa Bay storm surge is major hurricane risk",
            "Waterfront properties need flood coverage",
            "Historic homes in Hyde Park may need special considerations",
            "High traffic on I-275 and crossings increases auto risks",
            "Business interruption critical for port operations",
            "Wind mitigation important for older homes",
        ],
        industries: [
            "Port and shipping",
            "Financial services (USAA regional HQ)",
            "Healthcare (Tampa General, Moffitt Cancer Center)",
            "Technology",
            "Tourism and hospitality",
        ],
        additionalFacts: [
            "Port Tampa Bay is Florida's largest port by tonnage",
            "Ybor City was the cigar capital of the world",
        ],
    },

    // =====================
    // SOUTHWEST FLORIDA
    // =====================
    "naples-fl": {
        slug: "naples-fl",
        city: "Naples",
        state: "FL",
        county: "Collier",
        population: 21750,
        populationYear: 2020,
        countyPopulation: 384902,
        distanceFromOffice: "400 miles",
        driveTime: "5.5 hours",
        majorHighways: ["I-75", "US-41 (Tamiami Trail)"],
        nearbyWaterways: ["Gulf of Mexico", "Naples Bay", "Everglades"],
        region: "southwest-florida",
        characteristics: [
            "Upscale Gulf Coast community",
            "High concentration of wealth and retirees",
            "World-class golf courses",
            "Fifth Avenue shopping and dining",
            "Proximity to Everglades",
            "Strong seasonal population fluctuation",
        ],
        insuranceRisks: [
            "High hurricane and flood exposure on Gulf Coast",
            "Many luxury homes require high-value specialty coverage",
            "Flood insurance essential throughout area",
            "Condo market requires comprehensive HO-6 understanding",
            "Hurricane Ian (2022) demonstrated area vulnerability",
            "Seasonal vacancy may affect coverage options",
        ],
        industries: [
            "Real estate and development",
            "Healthcare (NCH Healthcare System)",
            "Professional services",
            "Tourism and hospitality",
            "Golf and recreation",
        ],
        additionalFacts: [
            "Consistently ranked among wealthiest communities in US",
            "Hurricane Ian caused devastating damage in 2022",
        ],
    },

    "sarasota-fl": {
        slug: "sarasota-fl",
        city: "Sarasota",
        state: "FL",
        county: "Sarasota",
        population: 57738,
        populationYear: 2020,
        countyPopulation: 434006,
        distanceFromOffice: "250 miles",
        driveTime: "3.5 hours",
        majorHighways: ["I-75", "US-41 (Tamiami Trail)", "US-301"],
        nearbyWaterways: ["Sarasota Bay", "Gulf of Mexico"],
        region: "southwest-florida",
        characteristics: [
            "Cultural arts center of Florida's Gulf Coast",
            "Ringling Museum and circus heritage",
            "Beautiful barrier island beaches",
            "Strong retiree population",
            "Downtown waterfront living",
            "Siesta Key consistently ranked top beach",
        ],
        insuranceRisks: [
            "Gulf Coast hurricane exposure",
            "Barrier island properties at high flood risk",
            "Waterfront homes need elevated coverage",
            "Many older condos in coastal areas",
            "Wind mitigation critical for premium savings",
            "Flood insurance required for most coastal properties",
        ],
        industries: [
            "Healthcare",
            "Tourism and hospitality",
            "Arts and culture",
            "Professional services",
            "Real estate",
        ],
        additionalFacts: [
            "Home to Ringling Museum of Art",
            "Siesta Key Beach regularly named America's best beach",
        ],
    },
}

/**
 * Get city data by slug
 */
export function getCityData(slug: string): CityData | undefined {
    return cityData[slug]
}

/**
 * Get all cities in a region
 */
export function getCitiesByRegion(region: CityData["region"]): CityData[] {
    return Object.values(cityData).filter((city) => city.region === region)
}

/**
 * Get nearby cities (same region, excluding current city)
 */
export function getNearbyCities(slug: string, limit = 5): CityData[] {
    const currentCity = cityData[slug]
    if (!currentCity) return []

    return Object.values(cityData)
        .filter((city) => city.slug !== slug && city.region === currentCity.region)
        .slice(0, limit)
}
