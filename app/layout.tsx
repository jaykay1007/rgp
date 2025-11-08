import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import { LanguageProvider } from "@/contexts/language-context"
import PageTurnTransition from "@/components/page-turn-transition"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rajaganapathibhavani.com'),
  title: {
    default: "Raja Ganapathi Press Bhavani | Offset Printing, Wedding Cards, Digital Print | Erode, Komarapalayam",
    template: "%s | Raja Ganapathi Press Bhavani"
  },
  description: "Raja Ganapathi Press - Premium offset printing services in Bhavani, Erode. Wedding invitations, visiting cards, brochures, packaging, bill books. Serving Bhavani, Erode, Komarapalayam, Anthiyur, Gobi. Call: 9994466277",
  keywords: [
    "offset printing bhavani",
    "printing press bhavani",
    "printing press erode",
    "wedding cards bhavani",
    "wedding invitation erode",
    "visiting cards bhavani",
    "digital printing bhavani",
    "offset printing erode",
    "raja ganapathi press",
    "printing services komarapalayam",
    "printing press anthiyur",
    "printing services gobi",
    "brochure printing bhavani",
    "packaging printing erode",
    "business cards bhavani",
    "letterheads bhavani",
    "bill books erode",
    "multicolor printing bhavani",
    "commercial printing erode",
    "print shop near me"
  ],
  authors: [{ name: "Raja Ganapathi Press" }],
  creator: "Raja Ganapathi Press",
  publisher: "Raja Ganapathi Press",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.rajaganapathibhavani.com',
  },
  openGraph: {
    title: "Raja Ganapathi Press - Premium Offset Printing Services in Bhavani, Erode",
    description: "Expert offset printing, wedding invitations, visiting cards, and commercial printing services in Bhavani, Erode. Quality printing since years. Call 9994466277",
    url: 'https://www.rajaganapathibhavani.com',
    siteName: "Raja Ganapathi Press",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Raja Ganapathi Press - Offset Printing Services',
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raja Ganapathi Press - Offset Printing in Bhavani",
    description: "Premium printing services in Bhavani, Erode. Wedding cards, visiting cards, brochures & more.",
    images: ["/twitter-image.jpg"],
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
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PrintShop',
    name: 'Raja Ganapathi Press',
    image: 'https://www.rajaganapathibhavani.com/logo.jpg',
    '@id': 'https://www.rajaganapathibhavani.com',
    url: 'https://www.rajaganapathibhavani.com',
    telephone: '+919994466277',
    email: 'rgpbvn@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '24 Palani Andavar Kovil Street',
      addressLocality: 'Bhavani',
      addressRegion: 'Tamil Nadu',
      postalCode: '638301',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 11.4437407,
      longitude: 77.6826523
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        opens: '09:30',
        closes: '20:00'
      }
    ],
    sameAs: [
      'https://www.facebook.com/rajaganapathibhavani',
      'https://www.instagram.com/rajaganapathibhavani'
    ],
    priceRange: '₹₹',
    servesCuisine: 'Printing Services',
    areaServed: [
      {
        '@type': 'City',
        name: 'Bhavani'
      },
      {
        '@type': 'City',
        name: 'Erode'
      },
      {
        '@type': 'City',
        name: 'Komarapalayam'
      },
      {
        '@type': 'City',
        name: 'Anthiyur'
      },
      {
        '@type': 'City',
        name: 'Gobi'
      }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Printing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Offset Printing',
            description: 'High-quality multicolor offset printing for commercial needs'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Wedding Invitations',
            description: 'Premium wedding invitation cards with custom designs'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Visiting Cards',
            description: 'Professional business cards and visiting cards'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Digital Printing',
            description: 'Fast digital printing for urgent requirements'
          }
        }
      ]
    }
  }

  return (
    <html lang="en">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <LanguageProvider>
          <PageTurnTransition>
            {children}
          </PageTurnTransition>
        </LanguageProvider>
      </body>
    </html>
  )
}