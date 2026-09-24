import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/quote',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/get-a-quote',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/',
        permanent: true,
      },
      {
        source: '/hurricane',
        destination: '/hurricane-preparation-checklist',
        permanent: true,
      },
      {
        source: '/hurricane-season',
        destination: '/blog/hurricane-season-insurance-checklist',
        permanent: true,
      },
      {
        source: '/hurricane-preparation',
        destination: '/hurricane-preparation-checklist',
        permanent: true,
      },
      {
        source: '/hurricane-season-insurance-checklist',
        destination: '/blog/hurricane-season-insurance-checklist',
        permanent: true,
      },
      {
        source: '/learn/hurricane-season-insurance-checklist',
        destination: '/blog/hurricane-season-insurance-checklist',
        permanent: true,
      },
      {
        source: '/blog/florida-uninsured-motorist-coverage-essential-protection-in-',
        destination: '/blog/florida-uninsured-motorist-coverage-essential-protection-for',
        permanent: true,
      },
      {
        source: '/blog/florida-uninsured-motorist-coverage-essential-protection-in_',
        destination: '/blog/florida-uninsured-motorist-coverage-essential-protection-for',
        permanent: true,
      },
      {
        source: '/locations/lake-city-fl/workers-compensation',
        destination: 'https://lewisinsurance.com/business/workers-compensation-florida',
        permanent: true,
      },
      {
        source: '/locations/lake-city-fl/workers-comp',
        destination: 'https://lewisinsurance.com/business/workers-compensation-florida',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.usecanopy.com https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https: blob:",
              "connect-src 'self' https://*.supabase.co wss://*.supabase.co https://cdn.usecanopy.com https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com",
              "frame-src 'self' https://cdn.usecanopy.com https://www.googletagmanager.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
