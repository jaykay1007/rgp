export const generateStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Raja Ganapathi Offset Printers",
  "@id": "https://www.rajaganapathioffset.info",
  "url": "https://www.rajaganapathioffset.info",
  "telephone": "+919994466277",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "24 Palani Andavar Kovil Street",
    "addressLocality": "Bhavani",
    "addressRegion": "Tamil Nadu",
    "postalCode": "638301",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "11.4500",
    "longitude": "77.6833"
  },
  "description": "Professional offset printing services in Bhavani, specializing in wedding invitations, visiting cards, letterheads, and commercial printing.",
  "image": "https://www.rajaganapathioffset.info/logo.png",
  "priceRange": "₹₹",
  "hasMap": "https://maps.app.goo.gl/7bUZMaUAAN2VSYibA",
  "sameAs": [
    "https://facebook.com/your-page",
    "https://instagram.com/your-profile"
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "19:00"
  },
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Wedding Card Printing",
        "description": "Custom wedding invitation card printing services"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Commercial Printing",
        "description": "Business cards, letterheads, and commercial printing solutions"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Offset Printing",
        "description": "High-quality offset printing services"
      }
    }
  ]
})