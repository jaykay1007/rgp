import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import {
  SITE_CONFIG,
  CONTACT_INFO,
  generatePageTitle,
  generateMetaDescription,
  PRIMARY_KEYWORDS,
  LOCATION_KEYWORDS,
} from "@/lib/seo-config"
import { getAllStructuredData } from "@/lib/structured-data"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: generatePageTitle(),
    template: `%s | ${SITE_CONFIG.name} | Printing Press Bhavani`,
  },
  description: generateMetaDescription("home"),
  keywords: [...PRIMARY_KEYWORDS, ...LOCATION_KEYWORDS],
  authors: [{ name: SITE_CONFIG.legalName }],
  creator: SITE_CONFIG.legalName,
  publisher: SITE_CONFIG.legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: generatePageTitle(),
    description: generateMetaDescription("home"),
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - Premier Offset Printing Press in Bhavani`,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: generatePageTitle(),
    description: generateMetaDescription("home"),
    images: ['/images/og-image.jpg'],
    creator: '@rajaganapathioffset',
    site: '@rajaganapathioffset',
  },
  alternates: {
    canonical: SITE_CONFIG.domain,
    languages: {
      'en-IN': SITE_CONFIG.domain,
      'ta-IN': `${SITE_CONFIG.domain}/ta`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION || '',
    },
  },
  category: 'Printing Services',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = getAllStructuredData();
  
  return (
    <html lang="en" prefix="og: http://ogp.me/ns#">
      <head>
        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredData }}
          strategy="beforeInteractive"
        />
        
        {/* Google Analytics */}
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
        
        {/* Additional SEO meta tags */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Bhavani" />
        <meta name="geo.position" content={`${CONTACT_INFO.geo.latitude};${CONTACT_INFO.geo.longitude}`} />
        <meta name="ICBM" content={`${CONTACT_INFO.geo.latitude}, ${CONTACT_INFO.geo.longitude}`} />
        
        {/* Mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0F172A" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        
        {/* PWA manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}