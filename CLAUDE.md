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