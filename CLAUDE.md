# CLAUDE.md — Lewis Insurance Website

## Project Overview

Marketing website for Lewis Insurance Agency (lewisinsurance.com). Florida-based independent agency. Drives lead generation and routes existing clients to portal at lewisinsurance.ai.

**Never mention health insurance anywhere on the site.**

---

## Tech Stack

- Next.js 14+ (App Router)
- TypeScript (strict mode)
- TailwindCSS
- shadcn/ui components
- react-hook-form + zod
- next-sitemap

---

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run lint         # ESLint
npm run type-check   # TypeScript check
```

---

## Project Structure

```
/src
  /app
    /api/lead/route.ts       # Lead submission endpoint
    /(marketing)             # Public pages group
      /page.tsx              # Homepage
      /personal/page.tsx     # Personal insurance hub
      /business/page.tsx     # Business insurance hub
      /locations/[city]/page.tsx
    /thank-you/page.tsx      # Post-submission (conversion fires here)
    /portal/page.tsx         # 302 redirect to lewisinsurance.ai
    layout.tsx
  /components
    /ui                      # shadcn components
    /forms                   # Form components
    /sections                # Page sections (Hero, CTA, FAQ, etc.)
    Header.tsx
    Footer.tsx
  /config
    site.ts                  # ALL placeholders centralized here
  /lib
    utils.ts
    schemas.ts               # Zod schemas
  /styles
    globals.css
/public
  /brand
    lewis-logo.svg
    lewis-logo.png
```

---

## Site Config Location

All placeholder values live in `/src/config/site.ts`. Never hardcode contact info, URLs, or business details elsewhere.

Update these when real values provided:
- Phone numbers
- Email addresses
- Physical address
- Social media URLs
- Portal URLs
- Carrier partner info

---

## Design Tokens

```
Primary Blue:    #1C71E2
Accent Orange:   #FF7A00
Ink:             #111827
Body:            #4B5563
Border:          #E5E7EB
Card BG:         #FFFFFF
Page BG:         #F6F7FB
Gradient Start:  #EAF2FF
Gradient End:    #FFE9E1
```

Fonts: Plus Jakarta Sans (headings), Inter (body)

---

## Content Rules

| Page Type | Min Words | FAQ Required |
|-----------|-----------|--------------|
| Service page | 800 | Yes (5+ questions) |
| City page | 500 | No |
| City+service page | 600 | Yes (3+ questions) |

**Tone**: Confident, calm, helpful. Short sentences. No fluff. Clear next actions.

**Prohibited**:
- Health insurance mentions
- "Lowest price" claims (use "compare options")
- Fake reviews (label as sample)
- Hardcoded contact info outside site.ts

**Florida-specific**:
- Explain flood vs homeowners
- Mention wind mitigation / 4-point inspections as "may be needed"
- Reference hurricane preparedness where relevant

---

## Form Requirements

All forms must have:
- Honeypot field (hidden, reject if filled)
- Privacy policy checkbox
- Inline validation errors (not alerts)
- Loading state on submit
- Redirect to /thank-you on success

**Standard fields**:
- Zip: `type="text" pattern="[0-9]{5}" inputMode="numeric"`
- Phone: `type="tel"`
- Email: `type="email"`

---

## API: /api/lead

POST endpoint. Environment-controlled storage:

```
LEADS_DESTINATION=local    # /data/leads.json (dev)
LEADS_DESTINATION=sqlite   # Prisma SQLite
LEADS_DESTINATION=webhook  # POST to WEBHOOK_URL
```

Required in submission:
- consentTimestamp (ISO string)
- source (page path)
- UTM params if present

Rate limit: 5/min per IP. Reject if honeypot filled.

---

## SEO Checklist

Every page needs:
- [ ] Unique title (50-60 chars)
- [ ] Unique meta description (150-160 chars)
- [ ] Canonical URL
- [ ] OG tags
- [ ] Single H1
- [ ] Breadcrumbs (if not root)
- [ ] JSON-LD schema (see below)

**Schema by page type**:
- All pages: Organization, LocalBusiness
- Service pages: Service, FAQPage, BreadcrumbList
- Location pages: LocalBusiness with serviceArea, BreadcrumbList
- Reviews page: AggregateRating, Review

---

## Internal Linking

- Service pages → link to 2-3 related services in "Related Coverage" section
- City pages → link to all services with city context
- All pages → breadcrumbs to parent
- Footer → all hub pages

---

## Accessibility Requirements

- Single H1 per page
- Logical heading hierarchy (H2 → H3 → H4)
- Labels on all form inputs (not placeholder-only)
- Focus visible on interactive elements
- Skip to main content link
- aria-describedby on error messages
- Touch targets 44x44px minimum
- prefers-reduced-motion support

---

## Performance Targets

- Lighthouse Performance: 90+
- Lighthouse Accessibility: 95+
- LCP < 2.5s
- CLS < 0.1

**Enforce**:
- Images: WebP, srcset, lazy-load below fold
- Fonts: preload critical, font-display: swap
- No layout shift from images (set dimensions)

---

## Mobile Requirements

- Sticky "Get Quote" button at viewport bottom
- Click-to-call phone in header
- FAQ accordions default closed
- Appropriate input types on form fields

---

## Routes Reference

### Core
| Route | Notes |
|-------|-------|
| `/` | Homepage |
| `/personal` | Hub |
| `/business` | Hub |
| `/contact` | Form page |
| `/about` | Company info |
| `/client-tools` | Service center links |
| `/claims` | Claims help |
| `/portal` | 302 → lewisinsurance.ai |
| `/thank-you` | Conversion tracking |
| `/privacy-policy` | Required |
| `/terms` | Required |

### Personal Insurance
- `/personal/homeowners-insurance-florida`
- `/personal/auto-insurance-florida`
- `/personal/flood-insurance-florida`
- `/personal/condo-insurance-florida`
- `/personal/renters-insurance-florida`
- `/personal/umbrella-insurance-florida`

### Business Insurance
- `/business/general-liability-florida`
- `/business/workers-compensation-florida`
- `/business/commercial-auto-florida`
- `/business/business-owners-policy-florida`
- `/business/professional-liability-eo-florida`
- `/business/cyber-liability-florida`

### Locations
- `/locations` (directory)
- `/locations/miami-fl`
- `/locations/fort-lauderdale-fl`
- `/locations/west-palm-beach-fl`
- `/locations/tampa-fl`
- `/locations/orlando-fl`
- `/locations/jacksonville-fl`
- `/locations/naples-fl`
- `/locations/sarasota-fl`

### City+Service (create for top 3 cities)
- `/locations/miami-fl/homeowners-insurance`
- `/locations/miami-fl/flood-insurance`
- `/locations/miami-fl/auto-insurance`
- `/locations/fort-lauderdale-fl/homeowners-insurance`
- `/locations/fort-lauderdale-fl/flood-insurance`
- `/locations/tampa-fl/homeowners-insurance`
- `/locations/tampa-fl/flood-insurance`

---

## Analytics Events

Track these via GTM dataLayer:
- `form_start` — first field focus
- `form_submit` — successful submission
- `form_error` — validation error
- `cta_click` — CTA button clicks
- `phone_click` — phone number clicks
- `portal_click` — portal/login clicks

Preserve UTM params through forms. Pass to /thank-you for conversion attribution.

---

## Component Patterns

**CTA Button (Primary)**:
```tsx
<Button className="bg-accent-orange hover:bg-accent-orange/90 text-white rounded-full px-8">
  Get My Quote
</Button>
```

**Card**:
```tsx
<Card className="rounded-2xl shadow-sm border-border bg-card">
```

**Section Spacing**:
```tsx
<section className="py-16 md:py-24">
```

**Container**:
```tsx
<div className="container mx-auto px-4 max-w-7xl">
```

---

## Error Handling

- Form errors: inline below field
- API errors: toast with retry option
- 404: helpful message + search + popular links
- Error boundary: support contact display

---

## Security

- Honeypot on all forms
- Rate limit /api/lead (5/min/IP)
- Sanitize all inputs
- Hash IP before storing (never store raw)
- CSRF protection on mutations

---

## Pre-Commit Checklist

Before committing any page:
- [ ] Mobile responsive
- [ ] Keyboard navigable
- [ ] No hardcoded placeholders outside site.ts
- [ ] SEO metadata complete
- [ ] Schema JSON-LD present
- [ ] Forms have honeypot + privacy checkbox
- [ ] Images have alt text
- [ ] No TypeScript errors
- [ ] No ESLint errors


---
name: ceo-code-copilot
description: Expert code review and enhancement advisor for full-stack applications. Triggers on "Review My Code Base" or similar requests like "audit my repo", "find issues in my code", "how can I improve this app", "code review", "find bottlenecks". Performs comprehensive analysis of frontend (React/TypeScript), backend (Supabase, Edge Functions, APIs), and infrastructure (RLS policies, database schema, indexes). Delivers prioritized findings with actionable code fixes to elevate apps from basic to production-grade.
---

# CEO Code Copilot

Expert code review system that identifies issues, bottlenecks, and enhancement opportunities across the full stack.

## Review Workflow

### Phase 1: Repository Discovery

Scan the codebase structure to understand architecture:
```bash
# Get project structure
find . -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" -o -name "*.sql" -o -name "*.json" \) | head -100

# Check for Supabase
ls -la supabase/ 2>/dev/null || echo "No supabase directory"

# Check package.json for dependencies
cat package.json 2>/dev/null | head -50
```

Identify:
- Framework (React, Next.js, Vite)
- State management (Zustand, Redux, Context)
- Database (Supabase, PostgreSQL)
- Key dependencies and their versions

### Phase 2: Systematic Review

Review in priority order.

**Priority 1: Performance**
- Bundle size and code splitting
- Re-render patterns in React components
- Database query efficiency (N+1, missing indexes)
- API call optimization (caching, batching)
- Image and asset optimization

**Priority 2: UI/UX Improvements**
- Loading states and skeleton screens
- Error boundaries and user feedback
- Responsive design gaps
- Accessibility issues
- Animation and micro-interactions

**Priority 3: Scalability**
- Database schema design
- Caching strategies
- Connection pooling
- Rate limiting
- Horizontal scaling readiness

**Priority 4: Security**
- RLS policy coverage
- Input validation
- Auth flow vulnerabilities
- API endpoint protection
- Secrets management

**Priority 5: Code Maintainability**
- Type safety gaps
- Component decomposition
- Naming conventions
- Dead code
- Documentation gaps

**Priority 6: Error Handling/Resilience**
- Try-catch coverage
- Graceful degradation
- Retry logic
- Logging and monitoring hooks

### Phase 3: Enhancement Identification

Look for opportunities to add:
- Optimistic updates
- Real-time subscriptions
- Offline support
- Progressive loading
- Smart prefetching
- Background sync

### Phase 4: Supabase-Specific Review

If Supabase detected, check:
- RLS policies on all tables
- Index coverage for common queries
- Edge function efficiency
- Realtime subscription optimization
- Storage bucket policies

## Output Format

Structure findings as:
```markdown
# Code Review: [Project Name]

## Executive Summary
[2-3 sentence overview of codebase health and top priorities]

## Critical Issues (Fix Immediately)
### [Issue Title]
**Impact**: [Performance/Security/etc] | **Effort**: [Low/Medium/High]
**Location**: `path/to/file.ts:lineNumber`
**Problem**: [Concise description]
**Fix**:
\`\`\`typescript
// Before
[problematic code]

// After
[fixed code]
\`\`\`

## High Priority Enhancements
[Same format, ordered by impact]

## Medium Priority Improvements
[Same format]

## Nice-to-Have Optimizations
[Same format]

## Architecture Recommendations
[Bigger-picture suggestions for scaling]
```

## Review Commands

Quick scans to run during review:
```bash
# Find large components (potential split candidates)
wc -l $(find . -name "*.tsx" -o -name "*.ts") 2>/dev/null | sort -rn | head -20

# Find TODO/FIXME comments
grep -rn "TODO\|FIXME\|HACK\|XXX" --include="*.ts" --include="*.tsx" .

# Check for console.log statements
grep -rn "console.log" --include="*.ts" --include="*.tsx" . | wc -l

# Find any usage patterns
grep -rn "useEffect" --include="*.tsx" . | wc -l

# Check for inline styles (should use Tailwind)
grep -rn "style={{" --include="*.tsx" . | head -10

# Find components without memo
grep -rL "memo\|useMemo\|useCallback" --include="*.tsx" src/components/ 2>/dev/null | head -10
```

## Standards to Enforce

### Naming Conventions
- Components: PascalCase (`UserProfile.tsx`)
- Hooks: camelCase with `use` prefix (`useAuth.ts`)
- Utilities: camelCase (`formatDate.ts`)
- Types: PascalCase with descriptive suffix (`UserProfileProps`, `ApiResponse`)
- Constants: SCREAMING_SNAKE_CASE (`MAX_RETRY_COUNT`)
- Database tables: snake_case (`user_profiles`)

### File Structure
```
src/
├── components/      # Reusable UI components
│   ├── ui/          # Base components (Button, Input, etc.)
│   └── features/    # Feature-specific components
├── hooks/           # Custom React hooks
├── lib/             # Utilities and helpers
├── services/        # API calls and external integrations
├── stores/          # State management
├── types/           # TypeScript types/interfaces
└── pages/           # Route components (if not using file-based routing)
```

### Error Handling Pattern
```typescript
// Service layer - throw typed errors
export async function fetchUser(id: string): Promise<User> {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) throw new DatabaseError('Failed to fetch user', { cause: error });
  if (!data) throw new NotFoundError('User not found');
  return data;
}

// Component layer - handle with error boundary or try-catch
try {
  const user = await fetchUser(id);
} catch (err) {
  if (err instanceof NotFoundError) {
    // Handle 404
  }
  // Log and show generic error
  console.error('fetchUser failed:', err);
  toast.error('Something went wrong');
}
```

### Logging Standard
```typescript
// Use structured logging
logger.info('User action', { 
  action: 'login',
  userId: user.id,
  timestamp: new Date().toISOString()
});

// Error logging with context
logger.error('Operation failed', {
  operation: 'createOrder',
  input: { productId, quantity },
  error: err.message,
  stack: err.stack
});
```

---
name: seo-audit
description: Comprehensive SEO audit for Next.js websites. Triggers on "SEO audit", "analyze SEO", "check SEO", "SEO issues", "improve SEO", "SEO review", "search engine optimization". Performs deep analysis of metadata, structured data, technical SEO, content optimization, and indexability. Delivers prioritized findings with specific file paths and code fixes.
---

# SEO Audit Skill

Comprehensive SEO analysis system for Next.js applications. Identifies issues across technical SEO, on-page optimization, structured data, and indexability.

## Audit Workflow

### Phase 1: Technical SEO Foundation

**1.1 Robots.txt & Sitemap**
```bash
# Check robots.txt configuration
cat app/robots.ts 2>/dev/null || cat public/robots.txt 2>/dev/null

# Check sitemap configuration
cat next-sitemap.config.js 2>/dev/null
cat app/sitemap.ts 2>/dev/null

# Verify excluded routes match private pages
grep -r "noindex\|disallow" app/ --include="*.ts" --include="*.tsx"
```

Verify:
- All private routes excluded (portal, admin, thank-you, API)
- Sitemap URL correctly configured
- No important pages accidentally blocked

**1.2 Canonical URLs**
```bash
# Find pages missing canonical URLs
grep -rL "canonical\|alternates" app/**/page.tsx 2>/dev/null | head -20

# Check for proper canonical implementation
grep -rn "alternates" app/ --include="*.tsx" -A2
```

Verify:
- Every public page has a canonical URL
- Canonical URLs use absolute paths with domain
- No duplicate content issues

**1.3 Metadata Coverage**
```bash
# Find pages without metadata export
for f in $(find app -name "page.tsx" -type f); do
  if ! grep -q "export const metadata\|generateMetadata" "$f"; then
    echo "Missing metadata: $f"
  fi
done

# Check metadata completeness
grep -rn "title:\|description:" app/ --include="*.tsx" | head -30
```

Required for every page:
- `title` (50-60 characters)
- `description` (150-160 characters)
- `alternates.canonical`
- `openGraph` (title, description, url, type, locale)
- `twitter` (card, title, description)

### Phase 2: Structured Data (JSON-LD)

**2.1 Schema Coverage by Page Type**

| Page Type | Required Schemas |
|-----------|-----------------|
| Homepage | Organization, WebSite, LocalBusiness |
| Service pages | Service, FAQPage, BreadcrumbList |
| Location pages | LocalBusiness (with serviceArea), BreadcrumbList |
| Blog posts | Article, BreadcrumbList |
| Contact page | LocalBusiness, ContactPage |
| About page | Organization, AboutPage |

```bash
# Find schema implementation
cat src/lib/schema.tsx 2>/dev/null | head -100

# Check which pages use schemas
grep -rn "SchemaScripts\|json-ld\|application/ld+json" app/ --include="*.tsx"

# Verify Organization schema exists
grep -rn "InsuranceAgency\|Organization\|LocalBusiness" src/lib/schema.tsx
```

**2.2 Schema Validation Checklist**
- [ ] Organization schema has: name, url, logo, address, phone, email
- [ ] LocalBusiness has: geo coordinates, openingHours, priceRange
- [ ] Service schemas have: provider, areaServed, description
- [ ] FAQ schemas have: question/answer pairs matching visible FAQs
- [ ] BreadcrumbList matches visible breadcrumb navigation
- [ ] Article schemas have: author, datePublished, dateModified

### Phase 3: On-Page SEO

**3.1 Heading Hierarchy**
```bash
# Check for multiple H1s or heading issues
grep -rn "<h1\|<H1" app/ --include="*.tsx" | wc -l

# Find components with headings
grep -rn "className.*text-.*mb" app/ --include="*.tsx" | grep -i "h1\|h2\|h3"
```

Verify:
- Single H1 per page
- Logical hierarchy (H1 → H2 → H3, no skipping)
- H1 contains primary keyword
- H2s contain secondary keywords

**3.2 Image Optimization**
```bash
# Find images without alt text
grep -rn "<Image\|<img" app/ --include="*.tsx" | grep -v "alt="

# Check for missing sizes attribute
grep -rn "<Image" app/ --include="*.tsx" | grep -v "sizes="

# Find large images that should be optimized
find public -name "*.jpg" -o -name "*.png" | xargs ls -la 2>/dev/null | awk '$5 > 500000'
```

Requirements:
- All images have descriptive `alt` text
- Images use Next.js `<Image>` component
- `sizes` attribute for responsive images
- `priority` on above-fold images
- WebP format preferred

**3.3 Internal Linking**
```bash
# Find orphan pages (no internal links pointing to them)
grep -roh 'href="[^"]*"' app/ --include="*.tsx" | sort | uniq -c | sort -rn

# Check for broken internal links
grep -rn 'href="/[^"]*"' app/ --include="*.tsx" | grep -v "http"
```

Verify:
- Service pages link to 2-3 related services
- Location pages link to relevant services
- Breadcrumbs on all non-root pages
- Footer contains links to all hub pages
- No orphan pages

### Phase 4: Indexability

**4.1 Page Accessibility to Crawlers**
```bash
# Check for noindex on public pages (should NOT have)
grep -rn "noindex\|nofollow" app/ --include="*.tsx" | grep -v "portal\|thank-you\|admin"

# Check for client-only rendering issues
grep -rn "'use client'" app/**/page.tsx | head -20
```

**4.2 Dynamic vs Static**
```bash
# Find pages with dynamic exports
grep -rn "export const dynamic\|force-dynamic\|force-static" app/ --include="*.tsx"

# Check generateStaticParams for dynamic routes
grep -rn "generateStaticParams" app/ --include="*.tsx"
```

### Phase 5: Performance Impact on SEO

**5.1 Core Web Vitals Factors**
```bash
# Check for layout shift causes (images without dimensions)
grep -rn "<Image" app/ --include="*.tsx" | grep -v "width=\|height=\|fill"

# Find render-blocking resources
grep -rn "import.*css\|@import" app/ --include="*.tsx" --include="*.css"

# Check font loading
grep -rn "font-display\|preload.*font" app/ --include="*.tsx" --include="*.css"
```

**5.2 Mobile Optimization**
```bash
# Check viewport meta
grep -rn "viewport" app/layout.tsx

# Find touch target issues (buttons < 44px)
grep -rn "h-8\|w-8\|p-1\|p-2" app/ --include="*.tsx" | grep -i "button\|link\|a "
```

### Phase 6: Content Quality Signals

**6.1 Content Length by Page Type**
| Page Type | Minimum Words |
|-----------|--------------|
| Service page | 800 |
| City page | 500 |
| City+service page | 600 |
| Blog post | 1000 |

**6.2 FAQ Coverage**
```bash
# Check FAQ sections exist
grep -rn "AccordionItem\|faq\|FAQ" app/ --include="*.tsx" | wc -l

# Verify FAQ schema matches visible FAQs
grep -rn "generateFAQSchema" app/ --include="*.tsx"
```

## Output Format

```markdown
# SEO Audit Report: [Site Name]

## Executive Summary
[Health score: X/100]
[Top 3 priorities with impact]

## Critical Issues (Fix Immediately)
### [Issue Title]
**Category**: [Technical SEO/Metadata/Schema/Content]
**Impact**: [High/Medium/Low] | **Pages Affected**: [count]
**Location**: `path/to/file.tsx:lineNumber`
**Problem**: [Description]
**Fix**:
\`\`\`typescript
// Before
[problematic code]

// After
[fixed code]
\`\`\`

## High Priority Issues
[Same format]

## Medium Priority Issues
[Same format]

## Opportunities
[Enhancement suggestions for ranking improvement]

## Passed Checks ✓
[List of things done correctly]
```

## Quick Audit Commands

```bash
# Full metadata scan
echo "=== Pages Missing Metadata ===" && \
for f in $(find app -name "page.tsx" -type f 2>/dev/null); do \
  grep -q "export const metadata\|generateMetadata" "$f" || echo "$f"; \
done

# Schema coverage
echo "=== Schema Usage ===" && \
grep -rn "SchemaScripts" app/ --include="*.tsx" 2>/dev/null | wc -l

# Canonical URL coverage
echo "=== Pages Missing Canonical ===" && \
grep -rL "canonical\|alternates" app/**/page.tsx 2>/dev/null | wc -l

# Image alt text
echo "=== Images Missing Alt ===" && \
grep -rn "<Image" app/ --include="*.tsx" 2>/dev/null | grep -v "alt=" | wc -l

# OpenGraph coverage
echo "=== Pages Missing OG Tags ===" && \
grep -rL "openGraph" app/**/page.tsx 2>/dev/null | wc -l

# Check robots exclusions
echo "=== Robots.txt Disallow ===" && \
grep -n "disallow" app/robots.ts 2>/dev/null
```

## SEO Metadata Template

For pages missing proper metadata, use this pattern:

```typescript
import type { Metadata } from "next"
import { siteConfig } from "@/config/site"

const baseUrl = `https://${siteConfig.domain}`

export const metadata: Metadata = {
    title: "Page Title | Lewis Insurance",
    description: "150-160 character description with primary keyword.",
    alternates: {
        canonical: `${baseUrl}/page-path`,
    },
    openGraph: {
        title: "Page Title | Lewis Insurance",
        description: "Description for social sharing.",
        url: `${baseUrl}/page-path`,
        siteName: siteConfig.name,
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Page Title | Lewis Insurance",
        description: "Description for Twitter.",
    },
}
```

## Schema Template

For pages missing structured data:

```typescript
import { SchemaScripts, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema"

// In component
<SchemaScripts schemas={[
    generateServiceSchema({ name, description, slug, category }),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Category", url: `${baseUrl}/category` },
        { name: "Page", url: `${baseUrl}/category/page` },
    ]),
]} />
```

## Priority Matrix

| Issue Type | SEO Impact | Fix Effort | Priority |
|------------|-----------|------------|----------|
| Missing title/description | Critical | Low | P0 |
| No canonical URL | High | Low | P0 |
| Missing OG tags | Medium | Low | P1 |
| No JSON-LD schema | High | Medium | P1 |
| Multiple H1s | Medium | Low | P1 |
| Images without alt | Medium | Low | P1 |
| Missing Twitter cards | Low | Low | P2 |
| Suboptimal title length | Low | Low | P2 |
| Missing breadcrumbs | Low | Medium | P2 |
| Content too short | Medium | High | P3 |

---
name: florida-insurance-blog-publisher
description: Automated blog post creation and publishing for Florida insurance content. Triggers on "write blog post", "publish insurance article", "create content about Florida insurance", or "research and publish". Performs web research on Florida personal auto and homeowners insurance trends, writes SEO-optimized content, publishes to website, and commits to GitHub.
---

# Florida Insurance Blog Publisher

Automated workflow for researching, writing, and publishing SEO-optimized blog posts about Florida personal auto and homeowners insurance.

## Trigger Phrases

- "Write a new blog post"
- "Publish insurance article"
- "Research Florida insurance trends and publish"
- "Create content about [topic]"
- "What's trending in Florida insurance?"

## Complete Workflow

### Phase 1: Research Current Florida Insurance Trends

**Step 1: Web Research**

Search for recent news and trends (last 30-90 days):
```
# Research queries to execute via web search tool
# Personal Auto:
- "Florida auto insurance rates 2025"
- "Florida PIP reform latest"
- "Florida no-fault insurance changes"
- "Florida uninsured motorist rates"
- "Florida auto insurance crisis"

# Homeowners:
- "Florida homeowners insurance crisis 2025"
- "Citizens Property Insurance Florida"
- "Florida hurricane insurance rates"
- "Florida roof age insurance requirements"
- "Florida insurance company insolvencies"
- "My Safe Florida Home program"
```

**Step 2: Source Prioritization**

Prioritize these authoritative sources:
1. Florida Office of Insurance Regulation (FLOIR)
2. Insurance Information Institute (III)
3. Florida Association of Insurance Agents (FAIA)
4. AM Best ratings/reports
5. Major carriers' Florida announcements
6. Florida Legislature bill tracking
7. Local news: Tampa Bay Times, Miami Herald, Orlando Sentinel, Sun Sentinel

### Phase 2: Content Planning

**Keyword Research Structure:**
```
[State] + [Insurance Type] + [Topic] + [Year/Modifier]

Examples:
- "Florida homeowners insurance rates 2025"
- "Florida auto insurance reform"
- "Florida hurricane deductible explained"
- "Florida Citizens Insurance eligibility"
```

**Content Outline Template:**
```markdown
# [H1: Primary Keyword - Compelling Title Under 60 chars]

Meta Description: [150-160 chars with primary keyword, benefit, CTA]

## Introduction (100-150 words)
- Hook with recent stat or news
- State the problem/topic
- Preview what reader will learn

## [H2: What's Happening / The Current Situation]
- Latest developments
- Key statistics
- Timeline of changes

## [H2: How This Affects Florida Homeowners/Drivers]
- Direct consumer impact
- Cost implications
- Coverage changes

## [H2: What You Can Do About It]
- Actionable steps
- Shopping tips
- Coverage recommendations

## [H2: How Lewis Insurance Can Help]
- Services offered
- Local expertise
- CTA to contact

## Conclusion + CTA

## FAQ Section (3-5 questions for schema)
```

### Phase 3: Write SEO-Optimized Content

**Content Requirements:**

| Element | Requirement |
|---------|-------------|
| Word Count | 1,200-2,000 words |
| Title | Under 60 characters, primary keyword first |
| Meta Description | 150-160 characters with keyword and CTA |
| H1 | One per page, matches/relates to title |
| H2s | 4-6 sections with keywords |
| Keyword Density | 1-2% for primary, natural for secondary |
| Internal Links | 2-3 to relevant service pages |
| External Links | 1-2 to authoritative sources |
| CTA | Clear call-to-action in intro and conclusion |

**Writing Style:**
- Write at 8th grade reading level
- Use active voice
- Short paragraphs (2-4 sentences)
- Bullet points for lists of 3+ items
- Bold key terms and statistics
- Include local Florida references
- Demonstrate E-E-A-T (Experience, Expertise, Authority, Trust)
- Avoid insurance jargon or explain when used

### Phase 4: Generate Blog Post Files

**Detect Existing Blog Structure:**
```bash
# Check for blog posts location
ls -la src/lib/blog/ 2>/dev/null
cat src/lib/blog/posts.ts 2>/dev/null | head -50
```

**Add to Posts Array:**
Add new post to `src/lib/blog/posts.ts` following existing format:
```typescript
{
    slug: "[url-friendly-slug]",
    title: "[Title Under 60 chars]",
    description: "[150-160 char description]",
    content: `[Full markdown content]`,
    date: "[YYYY-MM-DD]",
    author: "Lewis Insurance Team",
    category: "florida-homeowners" | "florida-auto" | "insurance-tips",
    featured: false,
    tags: ["florida insurance", "[topic]"],
}
```

### Phase 5: SEO Optimization Check

Run before publishing:
```bash
npm run type-check
npm run lint
```

**SEO Checklist:**
- [ ] Title tag under 60 characters
- [ ] Meta description 150-160 characters
- [ ] Single H1 tag with primary keyword
- [ ] Primary keyword in first 100 words
- [ ] Internal links to 2-3 service pages
- [ ] FAQ section with 3-5 questions
- [ ] No spelling/grammar errors
- [ ] Statistics are current and sourced

### Phase 6: Commit and Push

```bash
git add src/lib/blog/posts.ts
git commit -m "feat(blog): Add article - [Short Title]

- Topic: [Primary topic]
- Keywords: [primary keyword]
- Word count: [X] words
- Category: [category]

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
"

git push origin main
```

## Content Calendar Topics

### Personal Auto (Florida)

| Topic | Keyword | Best Timing |
|-------|---------|-------------|
| PIP Coverage Explained | florida pip insurance | Evergreen |
| Uninsured Motorist | florida uninsured motorist coverage | Evergreen |
| Rate Increases | florida auto insurance rates [year] | January |
| Hurricane Prep for Vehicles | florida car hurricane insurance | May-June |
| Teen Driver Costs | florida teen driver insurance | August |

### Homeowners (Florida)

| Topic | Keyword | Best Timing |
|-------|---------|-------------|
| Hurricane Deductibles | florida hurricane deductible | May-June |
| Roof Age Requirements | florida roof insurance requirements | Evergreen |
| Citizens Eligibility | florida citizens insurance eligibility | Evergreen |
| Flood Insurance | florida flood insurance requirements | May-June |
| Wind Mitigation | florida wind mitigation inspection | Evergreen |
| My Safe Florida Home | my safe florida home program | After updates |

## Output Deliverables

After running this skill:

1. ✅ Research notes compiled
2. ✅ SEO-optimized blog post added to posts.ts
3. ✅ Article schema generated automatically via existing schema lib
4. ✅ Git commit with descriptive message
5. ✅ Push to remote repository
6. ✅ Site rebuilds automatically on Netlify