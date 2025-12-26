# Lewis Insurance Website - Developer Notes

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Generate sitemap (run after build)
npx next-sitemap
```

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# Lead Storage (options: local, webhook)
LEADS_DESTINATION=local

# Webhook URL (if using webhook destination)
WEBHOOK_URL=https://your-crm-webhook-url.com/leads

# Site URL (for sitemap generation)
SITE_URL=https://lewisinsurance.com
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   └── lead/          # Lead capture API endpoint
│   ├── personal/          # Personal insurance pages
│   ├── business/          # Business insurance pages
│   ├── locations/         # City/location pages
│   └── ...                # Other pages
├── src/
│   ├── components/
│   │   ├── forms/         # Form components (HeroForm, CTAForm)
│   │   ├── layout/        # Header, Footer, MobileCTA
│   │   ├── sections/      # Homepage sections
│   │   ├── templates/     # Page templates (ServicePageTemplate)
│   │   └── ui/            # shadcn/ui components
│   └── config/
│       └── site.ts        # Site configuration (IMPORTANT)
├── data/                  # Local lead storage (dev only)
├── public/
│   └── brand/             # Logo and brand assets
└── ...
```

## Configuration Files

### Site Config (`src/config/site.ts`)

**This is the most important file for customization.** Update this file to:

- Change contact information (phone, email)
- Update portal URLs
- Modify social media links
- Update service areas
- Change business hours
- Update trust indicators (years in business, review count)

### Navigation

Navigation structure is also defined in `src/config/site.ts`. Update the `navigation` object to:

- Add/remove menu items
- Update footer links
- Modify dropdown menus

## Adding New Pages

### New Service Page

1. Create a new file in `app/personal/[slug]/page.tsx` or `app/business/[slug]/page.tsx`
2. Import the `ServicePageTemplate` and `ServicePageData` type
3. Define your page data following the existing examples
4. Export the metadata and default page component

Example:
```typescript
import { ServicePageTemplate, type ServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: ServicePageData = {
  title: "Your Insurance Type",
  // ... rest of data
}

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
}

export default function YourInsurancePage() {
  return <ServicePageTemplate data={pageData} />
}
```

### New City Page

City pages follow a similar pattern. Create files in `app/locations/[city]-fl/page.tsx`.

## Lead Capture

### API Endpoint

Leads are captured via `POST /api/lead`. The endpoint:
- Validates input with Zod
- Checks honeypot field
- Rate limits (5 requests/minute per IP)
- Stores leads based on `LEADS_DESTINATION` env var

### Storage Options

1. **Local (default)**: Saves to `data/leads.json` - for development only
2. **Webhook**: POSTs to `WEBHOOK_URL` - for CRM integration

### Connecting to Your CRM

Set the following environment variables:
```env
LEADS_DESTINATION=webhook
WEBHOOK_URL=https://your-crm.com/webhook/leads
```

## Google Tag Manager

GTM placeholder is in `app/layout.tsx`. To enable:

1. Get your GTM container ID
2. Uncomment the script blocks in `app/layout.tsx`
3. Replace `GTM-XXXXXXX` with your ID

## Analytics Events

The site is set up to track these events (implement via GTM):

- `form_start` - User focuses first form field
- `form_submit` - Successful form submission
- `form_error` - Form validation error
- `cta_click` - Any CTA button click
- `phone_click` - Click on phone number
- `portal_click` - Click on portal/login links
- `coverage_select` - Click on coverage selector pill

## Styling

### Tailwind CSS v4

This project uses Tailwind CSS v4 with the new `@theme` syntax. Custom colors are defined in `app/globals.css`.

### Brand Colors

```css
Primary Blue:    #1C71E2
Accent Orange:   #FF7A00
Ink (headings):  #111827
Body text:       #4B5563
Border:          #E5E7EB
Page bg:         #F6F7FB
```

### Fonts

- Headings: Plus Jakarta Sans
- Body: Inter

Both are loaded via Google Fonts in `app/layout.tsx`.

## Components

### shadcn/ui

Components are in `components/ui/`. These are from shadcn/ui and can be customized. To add more:

```bash
npx shadcn@latest add [component-name]
```

### Custom Components

- **HeroForm**: Main quote form on homepage
- **CTAForm**: Shorter form in CTA band section
- **ServicePageTemplate**: Reusable template for service pages

## Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy

### Other Platforms

1. Build: `npm run build`
2. Generate sitemap: `npx next-sitemap`
3. Start: `npm start`

## Content Updates

### Logo

Replace placeholder logo by adding your logo to:
- `/public/brand/lewis-logo.svg` (preferred)
- `/public/brand/lewis-logo.png` (fallback)

Then update the Header component to use the actual Image component.

### Hero Image

Replace the placeholder in `app/page.tsx` with actual imagery.

### Carrier Logos

Update the carrier logos in `src/components/sections/TrustBar.tsx`.

### Testimonials

Replace sample testimonials in `src/components/sections/Testimonials.tsx`.

## Performance Tips

- Images should be WebP format
- Use `next/image` for automatic optimization
- Keep JavaScript bundles small
- Test with Lighthouse regularly

## Accessibility

The site is built with accessibility in mind:
- Skip to main content link
- ARIA labels on interactive elements
- Keyboard navigation support
- Semantic HTML structure
- Focus visible states

Test with screen readers and keyboard-only navigation.

## Support

For questions about this codebase, contact your development team.

For business content updates (phone numbers, hours, etc.), update `src/config/site.ts`.
