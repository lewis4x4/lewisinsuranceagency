import { siteConfig } from "@/config/site"

const baseUrl = `https://${siteConfig.domain}`

// Organization schema - used globally
export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "@id": `${baseUrl}/#organization`,
    name: siteConfig.name,
    description: siteConfig.seo.defaultDescription,
    url: baseUrl,
    telephone: siteConfig.contact.phone.main,
    email: siteConfig.contact.email.info,
    address: {
        "@type": "PostalAddress",
        streetAddress: "1313 W US Highway 90",
        addressLocality: "Lake City",
        addressRegion: "FL",
        postalCode: "32055",
        addressCountry: "US",
    },
    areaServed: siteConfig.serviceAreas.map(city => ({
        "@type": "City",
        name: city,
        containedInPlace: {
            "@type": "State",
            name: "Florida",
        },
    })),
    sameAs: [
        siteConfig.social.facebook,
        siteConfig.social.linkedin,
        siteConfig.social.google,
    ],
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "17:00",
        },
    ],
}

// Website schema for homepage
export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: siteConfig.name,
    url: baseUrl,
    publisher: {
        "@id": `${baseUrl}/#organization`,
    },
    potentialAction: {
        "@type": "SearchAction",
        target: {
            "@type": "EntryPoint",
            urlTemplate: `${baseUrl}/contact?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
    },
}

// Service schema generator
export function generateServiceSchema(data: {
    name: string
    description: string
    slug: string
    category: "personal" | "business"
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${baseUrl}/${data.category}/${data.slug}/#service`,
        name: data.name,
        description: data.description,
        provider: {
            "@id": `${baseUrl}/#organization`,
        },
        areaServed: {
            "@type": "State",
            name: "Florida",
            "@id": "https://en.wikipedia.org/wiki/Florida",
        },
        serviceType: "Insurance",
        url: `${baseUrl}/${data.category}/${data.slug}`,
    }
}

// FAQ schema generator
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(faq => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    }
}

// Breadcrumb schema generator
export function generateBreadcrumbSchema(
    items: { name: string; url: string }[]
) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    }
}

// LocalBusiness schema for city pages
export function generateLocalBusinessSchema(data: {
    city: string
    state: string
    county?: string
    slug: string
}) {
    return {
        "@context": "https://schema.org",
        "@type": "InsuranceAgency",
        "@id": `${baseUrl}/locations/${data.slug}/#localbusiness`,
        name: `${siteConfig.name} - ${data.city}`,
        description: `Independent insurance agency serving ${data.city}, ${data.state}. Compare home, auto, flood, and business insurance quotes from multiple carriers.`,
        url: `${baseUrl}/locations/${data.slug}`,
        telephone: siteConfig.contact.phone.main,
        email: siteConfig.contact.email.info,
        address: {
            "@type": "PostalAddress",
            streetAddress: "1313 W US Highway 90",
            addressLocality: "Lake City",
            addressRegion: "FL",
            postalCode: "32055",
            addressCountry: "US",
        },
        areaServed: {
            "@type": "City",
            name: data.city,
            containedInPlace: {
                "@type": "State",
                name: "Florida",
            },
        },
        parentOrganization: {
            "@id": `${baseUrl}/#organization`,
        },
        openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "17:00",
        },
        priceRange: "$$",
    }
}

// City+Service page schema
export function generateCityServiceSchema(data: {
    city: string
    state: string
    serviceName: string
    serviceSlug: string
    citySlug: string
    description: string
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${baseUrl}/locations/${data.citySlug}/${data.serviceSlug}/#service`,
        name: `${data.serviceName} in ${data.city}, ${data.state}`,
        description: data.description,
        provider: {
            "@id": `${baseUrl}/#organization`,
        },
        areaServed: {
            "@type": "City",
            name: data.city,
            containedInPlace: {
                "@type": "State",
                name: "Florida",
            },
        },
        serviceType: "Insurance",
        url: `${baseUrl}/locations/${data.citySlug}/${data.serviceSlug}`,
    }
}

// Blog article schema
export function generateArticleSchema(data: {
    title: string
    description: string
    slug: string
    datePublished: string
    dateModified: string
    authorName: string
    authorTitle?: string
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `${baseUrl}/blog/${data.slug}/#article`,
        headline: data.title,
        description: data.description,
        url: `${baseUrl}/blog/${data.slug}`,
        datePublished: data.datePublished,
        dateModified: data.dateModified,
        author: {
            "@type": "Person",
            name: data.authorName,
            jobTitle: data.authorTitle || "Licensed Insurance Agent",
        },
        publisher: {
            "@id": `${baseUrl}/#organization`,
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${baseUrl}/blog/${data.slug}`,
        },
    }
}

// Helper to render schema as script tag
export function SchemaScript({ schema }: { schema: object }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

// Helper to render multiple schemas
export function SchemaScripts({ schemas }: { schemas: object[] }) {
    return (
        <>
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </>
    )
}
