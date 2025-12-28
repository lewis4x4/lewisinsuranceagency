import type { BlogPost } from "./types"
import { loadAllMarkdownPosts } from "./markdown-loader"

// Hardcoded blog posts (original content)
const hardcodedPosts: BlogPost[] = [
    {
        slug: "florida-homeowners-insurance-guide-2025",
        title: "Florida Homeowners Insurance Guide 2025",
        description: "Everything Florida homeowners need to know about home insurance in 2025. Learn about coverage types, hurricane deductibles, wind mitigation, and how to find affordable rates.",
        excerpt: "Navigating Florida homeowners insurance can be challenging. This comprehensive guide explains coverage options, hurricane deductibles, and how to find competitive rates in today's market.",
        content: `
## Understanding Florida Homeowners Insurance

Florida's homeowners insurance market is unique. Our coastal location, hurricane exposure, and recent market challenges mean Florida homeowners pay more than most states—but understanding your options can help you find the right coverage at a competitive price.

### What Does Homeowners Insurance Cover?

A standard Florida homeowners policy (HO-3) includes several types of coverage:

**Dwelling Coverage**
This covers your home's structure—walls, roof, floors, and built-in appliances. Your dwelling limit should reflect the cost to rebuild your home at current construction prices, not your purchase price or tax value.

**Other Structures**
Covers detached structures like garages, fences, sheds, and pool equipment. Typically 10% of your dwelling coverage.

**Personal Property**
Protects your belongings—furniture, clothing, electronics, and more—from covered perils. Consider whether you need replacement cost or actual cash value coverage.

**Liability Protection**
If someone is injured on your property and you're held responsible, liability coverage protects you. Most policies include at least $100,000, but higher limits are often recommended.

**Loss of Use**
If your home is damaged and you can't live there during repairs, this pays for temporary housing and additional living expenses.

### What's NOT Covered

Standard Florida homeowners policies exclude several important perils:

- **Flood damage** - Requires separate flood insurance
- **Earthquake damage** - Rare in Florida but excluded
- **Maintenance issues** - Neglect and wear-and-tear
- **Intentional damage** - Self-inflicted damage
- **Certain dog breeds** - Some carriers exclude specific breeds

### Understanding Hurricane Deductibles

Florida homeowners policies have separate deductibles for hurricane damage:

- **Percentage-based**: Typically 2-5% of your dwelling coverage
- **Example**: On a $400,000 home with a 2% hurricane deductible, you'd pay $8,000 out of pocket before coverage kicks in

Hurricane deductibles only apply when the National Weather Service names a hurricane. For other wind events, your regular deductible applies.

### Wind Mitigation: Save Money on Premiums

Florida law requires insurers to offer discounts for hurricane-resistant features. A wind mitigation inspection documents:

- Roof shape and covering
- Roof deck attachment
- Roof-to-wall connections
- Opening protection (shutters, impact windows)
- Secondary water resistance

These discounts can save hundreds or even thousands annually. If you haven't had a wind mitigation inspection, schedule one.

### Tips for Finding Affordable Coverage

1. **Shop multiple carriers** - Rates vary significantly between companies
2. **Increase your deductible** - Higher deductibles mean lower premiums
3. **Bundle policies** - Combine home and auto for discounts
4. **Maintain your roof** - Roof age is a major rating factor
5. **Install protective devices** - Security systems and water leak detectors can earn discounts
6. **Work with an independent agent** - We can compare rates from multiple carriers

### The Florida Insurance Market

Florida's insurance market has faced challenges including:

- Carriers leaving the state
- Rate increases across the industry
- Roof age requirements tightening
- Increased reliance on Citizens (state insurer)

Despite these challenges, coverage is available. Working with an independent agent who understands the market can help you find options.

## Frequently Asked Questions

### How much homeowners insurance do I need?

Your dwelling coverage should reflect the cost to rebuild your home at current construction costs. This is usually different from your purchase price or tax assessment. We can help you estimate an appropriate amount.

### Is flood insurance included?

No. Flood damage is specifically excluded from all homeowners policies in Florida. You need a separate flood insurance policy, available through the NFIP or private insurers.

### How can I lower my premium?

Wind mitigation discounts, higher deductibles, security systems, bundling with auto, and maintaining your roof in good condition can all help reduce premiums. Shopping multiple carriers annually is also important.

### What if my roof is old?

Many carriers won't insure roofs over 15-20 years old. If your roof is aging, consider replacement before it becomes a coverage issue. Some carriers offer extended coverage for well-maintained older roofs.

---

*Need help finding Florida homeowners insurance? Contact Lewis Insurance for a free quote. We'll compare rates from multiple carriers to find coverage that fits your needs and budget.*
        `,
        author: {
            name: "Lewis Insurance Team",
            title: "Licensed Florida Insurance Agents",
        },
        publishedAt: "2025-01-15",
        updatedAt: "2025-01-15",
        category: "guides",
        tags: ["homeowners insurance", "florida", "hurricane", "wind mitigation"],
        featured: true,
    },
    {
        slug: "hurricane-season-insurance-checklist",
        title: "Hurricane Season Insurance Checklist for Florida Homeowners",
        description: "Prepare for hurricane season with this insurance checklist. Review your coverage, understand your deductibles, and know what to do before and after a storm.",
        excerpt: "Hurricane season runs June through November. Make sure your insurance is ready with this comprehensive checklist for Florida homeowners.",
        content: `
## Get Ready for Hurricane Season

Atlantic hurricane season officially runs from June 1 through November 30, though storms can form outside this window. Now is the time to review your insurance coverage and make sure you're prepared.

### Before Hurricane Season: Insurance Review

#### Review Your Homeowners Policy

- **Dwelling coverage**: Does it reflect current rebuild costs?
- **Hurricane deductible**: Do you understand your percentage?
- **Personal property**: Is your coverage adequate?
- **Loss of use**: Will it cover temporary housing if needed?

#### Check Your Flood Insurance

- **Do you have it?** Homeowners policies exclude flood damage
- **Coverage limits**: Are they adequate for your property?
- **Waiting period**: New policies have a 30-day wait
- **Don't delay**: You can't buy coverage when a storm threatens

#### Consider Additional Coverage

- **Umbrella policy**: Extra liability protection
- **Valuable items**: Scheduled coverage for jewelry, art, collectibles
- **Flood insurance**: If you don't have it, consider it

### Understanding Your Hurricane Deductible

Florida hurricane deductibles are different from your regular deductible:

| Dwelling Value | 2% Deductible | 5% Deductible |
|---------------|---------------|---------------|
| $300,000 | $6,000 | $15,000 |
| $400,000 | $8,000 | $20,000 |
| $500,000 | $10,000 | $25,000 |

**Important**: Hurricane deductibles only apply when a named hurricane causes damage. For tropical storms or other wind events, your regular deductible applies.

### Document Your Property

Before a storm threatens:

1. **Video walkthrough**: Record every room, closets, garage
2. **Photos of valuables**: Document serial numbers when possible
3. **Receipts and appraisals**: Store copies off-site or in cloud
4. **Home inventory app**: Consider using one to organize everything
5. **Store safely**: Keep documentation in waterproof container or cloud

### If a Hurricane Threatens

**Before the Storm:**
- Review your policy documents
- Know your insurance company's claims phone number
- Prepare to document any damage
- Protect your property (board windows, secure outdoor items)

**After the Storm:**
- Document all damage with photos and video immediately
- Prevent further damage if safely possible (tarping roof, etc.)
- Don't throw away damaged items until adjuster sees them
- Contact your insurance company promptly
- Keep receipts for temporary repairs and living expenses

### Filing a Hurricane Claim

1. **Report promptly**: Call your insurer as soon as safely possible
2. **Document everything**: Photos, video, written descriptions
3. **Make temporary repairs**: Prevent further damage, keep receipts
4. **Keep damaged items**: Don't dispose until adjuster approves
5. **Get multiple contractor estimates**: Don't rush into repairs
6. **Review settlement carefully**: Make sure it's adequate before accepting

### Common Hurricane Claim Mistakes

- Waiting too long to report damage
- Not documenting damage immediately
- Throwing away damaged items
- Making permanent repairs before adjuster visit
- Accepting first settlement without review
- Not understanding what's covered vs. excluded

### Wind vs. Flood: Know the Difference

**Wind damage** (covered by homeowners):
- Roof damage from wind
- Broken windows from debris
- Structural damage from wind pressure
- Rain entering through wind-caused openings

**Flood damage** (requires separate flood policy):
- Storm surge
- Rising water from any source
- Mudflow
- Water entering from ground level

During hurricanes, you may have both types of damage. If you have both policies, you may file claims with both insurers.

## Frequently Asked Questions

### When is hurricane season?

Atlantic hurricane season runs June 1 through November 30, with peak activity typically August through October.

### Can I buy flood insurance during hurricane season?

You can purchase anytime, but there's typically a 30-day waiting period before coverage begins. You cannot purchase when a storm is threatening.

### What if I disagree with my claim settlement?

You have options including requesting re-inspection, hiring a public adjuster, or consulting with an attorney. Contact us if you need guidance.

### Does my homeowners policy cover my car?

No. Vehicle damage from hurricanes is covered by your auto insurance's comprehensive coverage, not your homeowners policy.

---

*Have questions about your hurricane coverage? Contact Lewis Insurance for a free policy review. We'll make sure you're prepared before storm season.*
        `,
        author: {
            name: "Lewis Insurance Team",
            title: "Licensed Florida Insurance Agents",
        },
        publishedAt: "2025-01-10",
        updatedAt: "2025-01-10",
        category: "tips",
        tags: ["hurricane", "preparedness", "claims", "florida"],
        featured: false,
    },
    {
        slug: "wind-mitigation-inspection-guide",
        title: "Wind Mitigation Inspections: Save Money on Florida Home Insurance",
        description: "Learn how wind mitigation inspections can save you hundreds on Florida homeowners insurance. What inspectors look for and how to maximize your discounts.",
        excerpt: "Wind mitigation inspections document hurricane-resistant features in your home and can save Florida homeowners hundreds or thousands on insurance premiums.",
        content: `
## What Is a Wind Mitigation Inspection?

A wind mitigation inspection is a detailed assessment of your home's ability to withstand hurricane-force winds. Florida law requires insurance companies to offer premium discounts for homes with hurricane-resistant features.

The inspection documents specific construction features that reduce wind damage risk, and the resulting discounts can be substantial—often saving homeowners hundreds or even thousands of dollars annually.

### What Does the Inspector Look For?

Wind mitigation inspectors evaluate seven key areas:

#### 1. Roof Covering
- **Age of roof**: When was it installed?
- **Type of covering**: Shingles, tile, metal?
- **FBC (Florida Building Code) compliance**: Was it installed to current codes?

#### 2. Roof Deck Attachment
How is your roof deck (plywood/OSB) attached to the trusses?
- **Staples**: Minimal credit
- **6d nails**: Some credit
- **8d nails (6" spacing)**: Better credit
- **8d nails (4" spacing)**: Best credit

#### 3. Roof-to-Wall Attachment
How is your roof connected to the walls?
- **Toe nails**: Minimal credit
- **Clips**: Moderate credit
- **Single wraps**: Good credit
- **Double wraps**: Best credit

#### 4. Roof Geometry
- **Hip roof**: Best credit (slopes on all four sides)
- **Gable roof**: Less credit (vertical ends)
- **Flat roof**: Varies

Hip roofs perform better in hurricanes because wind flows over them rather than catching flat surfaces.

#### 5. Secondary Water Resistance (SWR)
If your roof covering blows off, is there a secondary barrier?
- **Sealed roof deck**: Significant credit
- **Self-adhering modified bitumen**: Significant credit
- **No SWR**: No credit for this feature

#### 6. Opening Protection
Are your windows, doors, and garage doors protected?
- **Hurricane shutters**: Good credit
- **Impact-resistant windows/doors**: Best credit
- **No protection**: No credit

All openings must be protected to receive credit.

#### 7. Garage Door
- **Wind-rated garage door**: Credit available
- **Standard garage door**: No credit

Garage doors are often the weakest point in homes during hurricanes.

### How Much Can You Save?

Savings vary based on your home and insurer, but examples include:

| Feature | Potential Annual Savings |
|---------|-------------------------|
| Hip roof | $200-500 |
| Hurricane shutters (all openings) | $300-800 |
| Roof-to-wall clips/straps | $200-600 |
| Secondary water resistance | $100-400 |
| Overall (multiple features) | $500-2,000+ |

Homes built after 2002 to the Florida Building Code often have many of these features built-in.

### How to Get a Wind Mitigation Inspection

1. **Find a qualified inspector**: Must be licensed Florida home inspector, general contractor, architect, or engineer
2. **Schedule the inspection**: Usually takes 30-60 minutes
3. **Provide access**: Inspector needs to see attic/roof structure
4. **Receive your report**: OIR-B1-1802 form
5. **Submit to insurer**: Your agent can help

#### Inspection Costs

Wind mitigation inspections typically cost $75-150. Given potential savings of hundreds or thousands annually, the return on investment is excellent.

### Maximizing Your Discounts

**Already have good features?**
Make sure you've had a recent inspection. If your last inspection is more than 5 years old, consider a new one—especially if you've made improvements.

**Want to improve your discounts?**
Consider these upgrades:
- Installing hurricane shutters or impact windows
- Reinforcing garage doors
- Adding roof straps (during re-roofing)
- Adding secondary water resistance (during re-roofing)

### Common Questions

**How often do I need an inspection?**
Inspections don't expire automatically, but insurers may require a new one after 5 years or if you make changes. A new roof always warrants a new inspection.

**Do all insurers accept wind mitigation discounts?**
Yes—Florida law requires it. However, the discount amounts vary by insurer.

**My home was built after 2002. Do I still need an inspection?**
Yes. While newer homes often have good features, you need documentation (the OIR form) to receive discounts.

**What if my home doesn't have any wind mitigation features?**
You won't receive discounts, but you won't be penalized either. Consider upgrades that provide both protection and premium savings.

## Frequently Asked Questions

### Is a wind mitigation inspection the same as a home inspection?

No. A wind mitigation inspection focuses specifically on hurricane-resistant features. A standard home inspection covers general condition but doesn't generate the OIR form needed for insurance discounts.

### Can I do my own wind mitigation inspection?

No. The form must be completed by a licensed Florida professional—home inspector, general contractor, architect, or engineer.

### How long does the inspection take?

Typically 30-60 minutes. The inspector needs attic access to view roof structure and connections.

### When should I get a wind mitigation inspection?

When you first purchase insurance, after any roof work, when switching insurers, or if you haven't had one in 5+ years.

---

*Need help understanding your wind mitigation options? Contact Lewis Insurance for a free consultation. We can recommend inspectors and help you maximize your premium savings.*
        `,
        author: {
            name: "Lewis Insurance Team",
            title: "Licensed Florida Insurance Agents",
        },
        publishedAt: "2025-01-05",
        updatedAt: "2025-01-05",
        category: "guides",
        tags: ["wind mitigation", "discounts", "homeowners insurance", "florida"],
        featured: false,
    },
    {
        slug: "understanding-flood-insurance-florida",
        title: "Understanding Flood Insurance in Florida: Complete Guide",
        description: "Everything Florida homeowners need to know about flood insurance. NFIP vs private flood, coverage limits, costs, and why you need it even outside flood zones.",
        excerpt: "Florida experiences more flooding than any other state. Learn why your homeowners insurance doesn't cover floods and how to protect your property.",
        content: `
## Why Florida Homeowners Need Flood Insurance

Here's the most important thing to understand: **Standard homeowners insurance policies exclude flood damage entirely.** No exceptions.

When your home floods from storm surge, rising rivers, heavy rainfall, or overflowing drainage systems—your homeowners policy pays nothing. Every dollar of damage comes out of your pocket unless you have flood insurance.

### Florida's Flood Statistics

The numbers make the case clear:

- Florida accounts for over 35% of all National Flood Insurance Program (NFIP) policies
- The state has experienced $17+ billion in flood insurance claims since 1978
- Average flood claim payouts exceed $50,000
- Just one inch of floodwater causes approximately $25,000 in damage
- **25% of flood claims come from properties outside high-risk flood zones**

### Flooding Happens Outside Flood Zones

Many Florida homeowners assume they're safe because they're not in a designated flood zone. This is a dangerous misconception. If it can rain, it can flood.

---

## NFIP vs. Private Flood Insurance

### National Flood Insurance Program (NFIP)

The federal government created the NFIP because private insurers wouldn't cover flood risk.

**NFIP Coverage Limits**:
- Building coverage: Up to $250,000 (residential)
- Contents coverage: Up to $100,000 (residential)
- 30-day waiting period before coverage takes effect

### Private Flood Insurance

Private flood insurers offer alternatives that may provide:
- Higher coverage limits (above NFIP caps)
- Replacement cost coverage for contents
- Shorter waiting periods (10-14 days)
- Additional living expenses coverage
- Lower premiums for some properties

---

## What Flood Insurance Covers

### Building Coverage
- Foundation and walls
- Electrical and plumbing systems
- HVAC equipment
- Built-in appliances
- Permanently installed carpeting

### Contents Coverage
- Furniture and electronics
- Clothing and appliances
- Washer and dryer
- Artwork and jewelry (limited)

**Important**: Contents coverage must be purchased separately from building coverage.

### What's NOT Covered
- Vehicles (covered by auto insurance)
- Landscaping, pools, fences, patios
- Temporary housing (NFIP)
- Currency and precious metals
- Basement improvements (NFIP)

---

## Florida Flood Zones Explained

### High-Risk Zones (Special Flood Hazard Areas)

**Zone AE**: Most common high-risk zone in Florida. 1% annual flood risk with base flood elevations determined.

**Zone VE**: Coastal areas with additional storm wave hazards. Highest-risk designation.

**Mandatory Purchase Requirement**: If you have a federally-backed mortgage in zones A or V, flood insurance is required.

### Moderate-to-Low Risk Zones

**Zone X**: Less than 1% annual flood risk. No requirement, but still at risk—remember, 25% of claims come from these zones.

---

## How Much Does Flood Insurance Cost?

**Average NFIP Premiums in Florida**:
- Low-risk zones: $400-$800/year
- Moderate-risk zones: $700-$1,500/year
- High-risk zones: $1,500-$4,000+/year

Factors affecting your premium include flood zone, elevation, building type, coverage amount, and deductible choice.

### The 30-Day Waiting Period

NFIP policies have a 30-day waiting period before coverage takes effect. **Don't wait until hurricane season**—buying in June won't protect you from a July storm.

---

## Frequently Asked Questions

### Is flood insurance required in Florida?

Required if you have a federally-backed mortgage in a high-risk zone. Even without a requirement, every Florida homeowner should consider flood coverage.

### Does flood insurance cover hurricane damage?

Flood insurance covers water damage from flooding, including storm surge. Wind damage is covered by homeowners insurance. You need both for complete protection.

### Can I get flood insurance if I've flooded before?

Yes, though properties with repetitive losses may face higher premiums. The NFIP cannot deny coverage based on flood history.

---

*Need help understanding your flood insurance options? Lewis Insurance quotes both NFIP and private flood carriers to find the right coverage for your property.*
        `,
        author: {
            name: "Lewis Insurance Team",
            title: "Licensed Florida Insurance Agents",
        },
        publishedAt: "2024-12-20",
        updatedAt: "2024-12-20",
        category: "guides",
        tags: ["flood insurance", "NFIP", "florida", "hurricane"],
        featured: true,
    },
    {
        slug: "florida-auto-insurance-requirements",
        title: "Florida Auto Insurance Requirements: What You Need to Know",
        description: "Understand Florida's unique no-fault auto insurance system, minimum requirements, and recommended coverage levels to protect yourself on the road.",
        excerpt: "Florida's no-fault insurance system differs from most states. Learn what coverage you're required to carry and what you should add for real protection.",
        content: `
## Florida Auto Insurance: The Basics

Florida operates under a "no-fault" auto insurance system. After an accident, your own insurance pays for your injuries regardless of who caused the crash—up to your policy limits.

This creates specific insurance requirements that differ from most other states.

---

## Florida's Minimum Requirements

### Personal Injury Protection (PIP) — $10,000 Required

PIP, or "no-fault" coverage, pays for your medical expenses and lost wages regardless of fault.

**What PIP Covers**:
- 80% of medical expenses up to $10,000
- 60% of lost wages
- Death benefits up to $5,000

**Important Rules**:
- You must seek medical treatment within 14 days of the accident
- Non-emergency conditions may be limited to $2,500 coverage
- Emergency Medical Conditions receive the full $10,000

### Property Damage Liability (PDL) — $10,000 Required

Covers damage you cause to other people's property—their vehicles, fences, buildings.

**$10,000 Is Often Not Enough**: The average new car costs over $48,000. If you cause an accident, $10,000 won't cover most vehicle repairs. You're personally responsible for the remainder.

---

## What Florida Does NOT Require (But You Should Have)

### Bodily Injury Liability (BI)

Florida doesn't require BI coverage until after certain violations. But if you injure someone seriously without BI coverage, you're personally liable for their medical bills, lost wages, and pain and suffering.

**Recommended minimum**: $100,000 per person / $300,000 per accident

### Collision Coverage

If you cause an accident, nothing in Florida's required coverages pays to repair your car. Collision coverage fills this gap.

### Comprehensive Coverage

Covers non-collision events: theft, vandalism, fire, flood, hurricane wind, hail, and animal strikes. Essential for Florida's hurricane exposure.

### Uninsured/Underinsured Motorist (UM/UIM)

Florida has one of the highest uninsured motorist rates—approximately 20% of drivers. UM coverage protects you when hit by uninsured or underinsured drivers.

---

## Recommended Coverage Levels

| Coverage | FL Minimum | Recommended |
|----------|-----------|-------------|
| PIP | $10,000 | $10,000 (max) |
| PDL | $10,000 | $50,000-100,000 |
| Bodily Injury | Not required | $100,000/$300,000 |
| UM/UIM | Not required | Match BI limits |
| Collision | Not required | Based on vehicle value |
| Comprehensive | Not required | Based on vehicle value |

---

## Florida Auto Insurance Discounts

### Driver-Based Discounts
- Good driver (clean record)
- Defensive driving course
- Good student (B average)
- Low mileage

### Policy-Based Discounts
- Multi-policy bundling (home + auto)
- Multi-vehicle
- Pay-in-full
- Paperless/autopay

### Usage-Based Programs

Many insurers offer telematics programs monitoring your driving. Safe drivers can save 10-30%.

---

## SR-22 Insurance in Florida

An SR-22 is a certificate proving you carry required insurance. Florida requires it for:
- Driving without insurance violations
- DUI/DWI convictions
- Excessive points on license

You must maintain continuous coverage for typically 3 years. If coverage lapses, your license is suspended.

---

## Frequently Asked Questions

### What happens if I drive without insurance?

First offense: License and registration suspended for up to 3 years. Reinstatement requires proof of insurance and fees ($150-500).

### Does Florida require bodily injury liability?

Not initially, but it's required after certain violations. Smart drivers carry it from the start.

### How does PIP work if someone else hits me?

You still file with your own PIP for medical expenses—that's the no-fault system.

### What is stacked vs. non-stacked UM coverage?

Stacked UM multiplies your coverage by vehicles on your policy. More protection but higher cost.

---

*Florida's minimal requirements leave dangerous gaps. Work with Lewis Insurance to compare quotes and build a policy that truly protects you.*
        `,
        author: {
            name: "Lewis Insurance Team",
            title: "Licensed Florida Insurance Agents",
        },
        publishedAt: "2024-12-15",
        updatedAt: "2024-12-15",
        category: "guides",
        tags: ["auto insurance", "florida", "PIP", "no-fault"],
        featured: false,
    },
    {
        slug: "business-insurance-101-florida",
        title: "Business Insurance 101: Essential Coverage for Florida Business Owners",
        description: "A complete guide to business insurance for Florida companies. Learn about general liability, workers comp requirements, commercial property, and more.",
        excerpt: "Every Florida business faces risks that could threaten survival. Learn what coverage you need to protect your company, employees, and livelihood.",
        content: `
## Why Business Insurance Matters

Consider these scenarios:

- A customer slips on your wet floor—medical bills and lawsuit could exceed $100,000
- A fire destroys your inventory—without coverage, you absorb the entire loss
- An employee is injured on the job—Florida law requires you to cover their costs
- You make an error that costs a client money—they sue for damages

Any of these events could force an uninsured business to close.

### Business Insurance vs. Personal Insurance

Your personal policies do NOT cover business activities:
- Homeowners insurance excludes home-based business operations
- Personal auto excludes business use of vehicles
- Personal umbrella policies typically exclude business liability

---

## Essential Types of Business Insurance

### General Liability Insurance

The foundation of business insurance. Protects against:

**Bodily Injury**: Someone injured on your premises or by your operations
**Property Damage**: You damage someone else's property
**Personal/Advertising Injury**: Libel, slander, copyright infringement

**Who Needs It**: Every business. Required by most leases and contracts.

### Commercial Property Insurance

Protects your business property:
- Building (if owned)
- Furniture and fixtures
- Equipment and inventory
- Computers and signage

**Florida Note**: Ensure wind/hurricane coverage is included—some policies exclude it.

### Business Owner's Policy (BOP)

Bundles general liability and commercial property into one cost-effective package. Best for small to mid-sized businesses.

### Professional Liability (E&O)

Protects against claims of negligence, errors, or failure to perform professional duties.

**Who Needs It**: Consultants, accountants, attorneys, IT professionals, real estate agents, any service-based business.

### Workers' Compensation Insurance

Covers employees injured on the job.

**Florida Requirements**:
| Industry | Employee Threshold |
|----------|-------------------|
| Construction | 1+ employees |
| Non-construction | 4+ employees |

**Penalties for Non-Compliance**: Stop-work orders, fines of $1,000+/day, personal liability for all medical costs.

### Commercial Auto Insurance

Covers vehicles used for business. Personal auto doesn't cover business use—if an employee causes an accident while working, your personal policy won't pay.

### Cyber Liability Insurance

Protects against data breaches and cyberattacks. Any business that stores customer data, processes credit cards, or relies on computer systems needs this coverage.

---

## Florida-Specific Considerations

### Hurricane Coverage

Ensure your property coverage includes:
- Windstorm and hurricane coverage
- Understand your hurricane deductible (often 2-5%)
- Business interruption for hurricane-related closure

### Flood Insurance for Businesses

Standard property policies exclude flood. Consider:
- NFIP commercial flood (up to $500,000 building + $500,000 contents)
- Private flood for higher limits

### Workers' Compensation

Florida strictly enforces requirements with severe penalties for non-compliance.

---

## How Much Coverage Do You Need?

| Coverage Type | Recommended Minimum |
|---------------|---------------------|
| General Liability | $1M per occurrence |
| Property | Full replacement cost |
| Professional Liability | $1M per claim |
| Commercial Auto | $1M combined single limit |
| Cyber | $1M |
| Umbrella | $1M-$2M |

---

## Frequently Asked Questions

### Do I need business insurance if I work from home?

Yes. Homeowners insurance excludes business activities. You need at least general liability coverage.

### What's the difference between general and professional liability?

General liability covers physical injuries and property damage. Professional liability covers financial losses from errors in professional services.

### How much does business insurance cost?

Small businesses might pay $500-$3,000 annually for basic coverage. Costs vary by industry, size, and needs.

### Can I get coverage with bad credit?

Yes, though it may affect pricing. Work with an independent agent to find flexible carriers.

---

*Protect your Florida business. Contact Lewis Insurance to compare options and build comprehensive coverage for your company.*
        `,
        author: {
            name: "Lewis Insurance Team",
            title: "Licensed Florida Insurance Agents",
        },
        publishedAt: "2024-12-10",
        updatedAt: "2024-12-10",
        category: "guides",
        tags: ["business insurance", "florida", "workers comp", "liability"],
        featured: false,
    },
]

/**
 * Get all blog posts from both hardcoded and markdown sources
 * Markdown posts are loaded from content/blog/ directory
 */
function getAllBlogPosts(): BlogPost[] {
    const markdownPosts = loadAllMarkdownPosts()
    const allPosts = [...hardcodedPosts, ...markdownPosts]

    // Dedupe by slug (prefer hardcoded over markdown if duplicate)
    const seenSlugs = new Set<string>()
    return allPosts.filter((post) => {
        if (seenSlugs.has(post.slug)) return false
        seenSlugs.add(post.slug)
        return true
    })
}

// Export for backward compatibility
export const blogPosts = getAllBlogPosts()

export function getAllPosts(): BlogPost[] {
    return getAllBlogPosts().sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
}

export function getPostBySlug(slug: string): BlogPost | undefined {
    return getAllBlogPosts().find((post) => post.slug === slug)
}

export function getFeaturedPosts(): BlogPost[] {
    return getAllBlogPosts().filter((post) => post.featured)
}

export function getPostsByCategory(category: BlogPost["category"]): BlogPost[] {
    return getAllBlogPosts()
        .filter((post) => post.category === category)
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
    const allPosts = getAllBlogPosts()
    const current = allPosts.find((post) => post.slug === currentSlug)
    if (!current) return []

    return allPosts
        .filter((post) => post.slug !== currentSlug)
        .filter((post) => post.tags.some((tag) => current.tags.includes(tag)))
        .slice(0, limit)
}
