import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import {
  SITE_CONFIG,
  CONTACT_INFO,
  PRIMARY_KEYWORDS,
  LOCATION_KEYWORDS,
  SERVICE_KEYWORDS,
  LONGTAIL_KEYWORDS,
} from "@/lib/seo-config"
import { getSiteWideStructuredData } from "@/lib/structured-data"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: "Raja Ganapathi Offset — Premium Printing Press in Bhavani, Erode | Wedding Cards, Visiting Cards, Brochures, Packaging",
    template: `%s | ${SITE_CONFIG.name} | Printing Press Bhavani Erode`,
  },
  description:
    "South India's most-loved offset printing press in Bhavani, Erode. Wedding invitations, visiting cards, multicolour offset, brochures, books, packaging & jamakkalam printing — since 1997. Get a free quote in 1 hour. Call +91 99944 66277.",
  applicationName: SITE_CONFIG.name,
  keywords: [
    ...PRIMARY_KEYWORDS,
    ...LOCATION_KEYWORDS,
    ...SERVICE_KEYWORDS,
    ...LONGTAIL_KEYWORDS,
    "best offset printing press bhavani",
    "best printing press in erode",
    "wedding card printer bhavani",
    "marriage invitation card bhavani tamil",
    "rajaganapathi offset bhavani erode",
    "raja ganapathi printers bhavani",
    "premium printing tamil nadu",
    "heidelberg offset press bhavani",
    "cmyk offset printing erode",
    "bilingual tamil wedding invitations",
  ],
  authors: [{ name: SITE_CONFIG.legalName, url: SITE_CONFIG.domain }],
  creator: SITE_CONFIG.legalName,
  publisher: SITE_CONFIG.legalName,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title:
      "Raja Ganapathi Offset — Premium Printing Press in Bhavani, Erode (Since 1997)",
    description:
      "Wedding cards, visiting cards, brochures, packaging & multicolour offset printing in Bhavani, Erode. Heidelberg press, CMYK + Pantone, foil, emboss, spot UV. Free quote in 1 hour.",
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.name,
    // OG image is provided by app/opengraph-image.tsx (generated, never 404s).
    locale: "en_IN",
    alternateLocale: ["ta_IN"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Raja Ganapathi Offset — Premium Printing Press in Bhavani, Erode",
    description:
      "Wedding cards, visiting cards, brochures, packaging & offset printing in Bhavani, Erode. Since 1997. Free quote in 1 hour.",
    creator: "@rajaganapathioffset",
    site: "@rajaganapathioffset",
  },
  alternates: {
    canonical: SITE_CONFIG.domain,
    languages: {
      "en-IN": SITE_CONFIG.domain,
      "ta-IN": `${SITE_CONFIG.domain}/ta`,
      "x-default": SITE_CONFIG.domain,
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION || "",
    },
  },
  category: "Printing Services",
  classification: "Offset Printing Press, Commercial Printer, Wedding Card Printer",
  generator: "Next.js",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfbfd" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // WebSite + Organization + LocalBusiness only. Page-specific schemas
  // (FAQPage, ItemList, breadcrumbs…) are injected by each page so markup
  // always matches visible content.
  const structuredData = getSiteWideStructuredData()

  return (
    <html lang="en" prefix="og: http://ogp.me/ns#" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredData }}
        />

        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}

        {/* Geo + locale hints for local SEO */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Bhavani, Erode, Tamil Nadu" />
        <meta name="geo.position" content={`${CONTACT_INFO.geo.latitude};${CONTACT_INFO.geo.longitude}`} />
        <meta name="ICBM" content={`${CONTACT_INFO.geo.latitude}, ${CONTACT_INFO.geo.longitude}`} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Raja Ganapathi Offset" />
        <meta name="format-detection" content="telephone=yes" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />

        {/* favicon.ico fallback; modern icon, apple-icon and web manifest are
            provided by app/icon.tsx, app/apple-icon.tsx and app/manifest.ts */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} bg-ink-50 text-ink-900`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
