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
