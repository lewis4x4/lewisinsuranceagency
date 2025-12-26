# Lewis Insurance Website

A modern, conversion-optimized marketing website for Lewis Insurance, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Lead Capture Forms** - HeroForm and CTAForm with validation, honeypot protection, and multiple destinations
- **Service Pages** - Template-based pages for all insurance products
- **Location Pages** - City-specific pages for geo-targeted SEO
- **Responsive Design** - Mobile-first design with sticky CTAs
- **SEO Optimized** - Meta tags, structured data, sitemap generation
- **Accessibility** - WCAG 2.1 AA compliant

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
```

## Environment Variables

Create a `.env.local` file:

```env
# Lead Storage (options: local, webhook)
LEADS_DESTINATION=local

# Webhook URL for CRM integration
WEBHOOK_URL=https://your-crm.com/webhook

# Site URL for sitemap
SITE_URL=https://lewisinsurance.com
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── api/lead/          # Lead capture API
│   ├── personal/          # Personal insurance pages
│   ├── business/          # Business insurance pages
│   └── locations/         # City/location pages
├── src/
│   ├── components/
│   │   ├── forms/         # Form components
│   │   ├── layout/        # Header, Footer
│   │   ├── sections/      # Homepage sections
│   │   └── templates/     # Page templates
│   └── config/
│       └── site.ts        # Site configuration
└── public/
    └── brand/             # Logo and assets
```

## Configuration

Edit `src/config/site.ts` to update:
- Contact information
- Business hours
- Service areas
- Navigation
- Trust indicators

## Deployment

### Netlify (Recommended)

1. **Connect Repository:**
   - Log in to [Netlify](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository

2. **Configure Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - The `netlify.toml` file will configure the rest automatically

3. **Set Environment Variables:**
   In Netlify dashboard → Site settings → Environment variables:
   ```
   LEADS_DESTINATION=webhook
   WEBHOOK_URL=https://your-crm.com/webhook
   SITE_URL=https://your-domain.com
   ```

4. **Deploy:**
   - Click "Deploy site"
   - Set up custom domain in Domain settings

### Manual Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy (from project directory)
netlify deploy --prod
```

## Support

For technical questions, see `DEVELOPER-NOTES.md`.
