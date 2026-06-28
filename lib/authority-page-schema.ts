import { SITE_CONFIG, CONTACT_INFO, getFullAddress } from "./seo-config"

export const generateAuthorityPageSchema = () => {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.domain}/printing-press-bhavani-erode#webpage`,
      "url": `${SITE_CONFIG.domain}/printing-press-bhavani-erode`,
      "name": "Best Offset Printing Press in Bhavani, Erode | Raja Ganapathi Offset",
      "description": "Raja Ganapathi Offset - #1 Printing Press in Bhavani since 1997. Expert in offset printing, wedding cards, visiting cards, brochures, packaging, bag printing. Serving Bhavani, Erode, Komarapalayam, Anthiyur, Gobi.",
      "inLanguage": "en",
      "isPartOf": {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.domain}/#website`
      },
      "about": {
        "@type": "LocalBusiness",
        "@id": `${SITE_CONFIG.domain}/#localbusiness`
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": SITE_CONFIG.domain
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Printing Press Bhavani Erode",
            "item": `${SITE_CONFIG.domain}/printing-press-bhavani-erode`
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${SITE_CONFIG.domain}/#localbusiness`,
      "name": SITE_CONFIG.legalName,
      "alternateName": [
        "Raja Ganapathi Offset",
        "Rajaganapathi Offset Press",
        "Raja Ganapathi Press Bhavani",
        "RGP Offset Bhavani",
        "Best Printing Press Bhavani",
        "Printing Press Bhavani",
        "Offset Printing Bhavani"
      ],
      "description": `Premier offset printing press in Bhavani since ${SITE_CONFIG.foundingYear}. Specializing in multicolor offset printing, wedding invitations, visiting cards, business stationery, brochures, packaging printing, bag printing, and all commercial printing services. Serving Bhavani, Erode, Komarapalayam, Anthiyur, Gobichettipalayam, Perundurai, Sathyamangalam, Mettur, Sankagiri, Salem, Namakkal, and surrounding areas in Tamil Nadu.`,
      "url": SITE_CONFIG.domain,
      "telephone": CONTACT_INFO.phone,
      "email": CONTACT_INFO.email,
      "foundingDate": `${SITE_CONFIG.foundingYear}`,
      "priceRange": "₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, UPI, Bank Transfer, Online Payment",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": `${CONTACT_INFO.address.street}, ${CONTACT_INFO.address.landmark}`,
        "addressLocality": CONTACT_INFO.address.city,
        "addressRegion": CONTACT_INFO.address.state,
        "postalCode": CONTACT_INFO.address.pincode,
        "addressCountry": CONTACT_INFO.address.countryCode
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": CONTACT_INFO.geo.latitude,
        "longitude": CONTACT_INFO.geo.longitude
      },
      "hasMap": CONTACT_INFO.googleMapsUrl,
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:30",
          "closes": "14:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "16:00",
          "closes": "20:00"
        }
      ],
      "areaServed": [
        { "@type": "City", "name": "Bhavani", "containedInPlace": { "@type": "State", "name": "Tamil Nadu" } },
        { "@type": "City", "name": "Erode", "containedInPlace": { "@type": "State", "name": "Tamil Nadu" } },
        { "@type": "City", "name": "Komarapalayam", "containedInPlace": { "@type": "State", "name": "Tamil Nadu" } },
        { "@type": "City", "name": "Anthiyur", "containedInPlace": { "@type": "State", "name": "Tamil Nadu" } },
        { "@type": "City", "name": "Gobichettipalayam", "containedInPlace": { "@type": "State", "name": "Tamil Nadu" } },
        { "@type": "City", "name": "Perundurai", "containedInPlace": { "@type": "State", "name": "Tamil Nadu" } },
        { "@type": "City", "name": "Sathyamangalam", "containedInPlace": { "@type": "State", "name": "Tamil Nadu" } },
        { "@type": "City", "name": "Mettur", "containedInPlace": { "@type": "State", "name": "Tamil Nadu" } },
        { "@type": "City", "name": "Sankagiri", "containedInPlace": { "@type": "State", "name": "Tamil Nadu" } },
        { "@type": "City", "name": "Salem", "containedInPlace": { "@type": "State", "name": "Tamil Nadu" } },
        { "@type": "City", "name": "Namakkal", "containedInPlace": { "@type": "State", "name": "Tamil Nadu" } },
        { "@type": "City", "name": "Tiruchengode", "containedInPlace": { "@type": "State", "name": "Tamil Nadu" } },
        { "@type": "City", "name": "Pallipalayam", "containedInPlace": { "@type": "State", "name": "Tamil Nadu" } }
      ],
      "sameAs": [
        "https://www.facebook.com/rajaganapathioffset",
        "https://www.instagram.com/rajaganapathioffset",
        `https://wa.me/${CONTACT_INFO.whatsapp}`
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500",
        "bestRating": "5",
        "worstRating": "1"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Printing Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Offset Printing Services",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Multicolor Offset Printing" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Printing" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bulk Printing Services" } }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Wedding & Invitation Cards",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wedding Card Printing" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Marriage Invitation Printing" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Foil Stamping & Embossing" } }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Business Stationery",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Visiting Card Printing" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Letterhead Printing" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bill Book Printing" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Envelope Printing" } }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Marketing Materials",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brochure Printing" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Catalog Printing" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Poster Printing" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Calendar Printing" } }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Packaging & Bags",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Packaging Printing" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Box Printing" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Paper Bag Printing" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cloth Bag Printing" } }
            ]
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What types of printing services does Raja Ganapathi Offset offer in Bhavani?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer comprehensive printing services including multicolor offset printing, wedding card printing, visiting card printing, business stationery (letterheads, bill books, envelopes), brochure printing, catalog printing, packaging printing, bag printing (paper, cloth, jute, non-woven), book printing, poster printing, sticker printing, label printing, certificate printing, ID card printing, calendar printing, and all finishing services like lamination, foiling, embossing, and binding."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas do you serve from your Bhavani location?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We serve customers across Bhavani, Erode, Komarapalayam, Anthiyur, Gobichettipalayam (Gobi), Perundurai, Sathyamangalam, Mettur, Sankagiri, Salem nearby areas, Namakkal border areas, Tiruchengode, Pallipalayam, Chithode, Modakurichi, Kavindapadi, Ammapet, and all surrounding towns and villages in Erode district and Tamil Nadu. Delivery services available."
          }
        },
        {
          "@type": "Question",
          "name": "How long has Raja Ganapathi Offset been in business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Raja Ganapathi Offset was established in 1997 and has been serving customers in Bhavani and Erode district for over 27 years. We are one of the most trusted and experienced printing presses in the region with thousands of satisfied customers."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer custom wedding card design services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we specialize in custom wedding invitation design and printing. Our services include traditional Tamil wedding cards, modern minimalist designs, luxury foil stamping (gold, silver, holographic), embossing and debossing, laser cut invitations, and complete design consultation. We work with you to create unique invitations that match your wedding theme and budget."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide express or urgent printing services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer express printing services for urgent orders. Turnaround time depends on the complexity, quantity, and type of printing required. For simple jobs, we can deliver within 24-48 hours. Contact us directly at +91 9994466277 to discuss your timeline."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer bag printing services for businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer comprehensive bag printing services including paper bag printing (all sizes), cloth bag printing, cotton bag printing, jute bag printing, non-woven bag printing, carry bag printing, shopping bag printing, logo bag printing, gift bag printing, and promotional bag printing. We can print your logo, brand name, and designs on eco-friendly bags for businesses, events, and promotional purposes."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Comprehensive Printing Services in Bhavani",
      "description": "Complete list of printing services offered by Raja Ganapathi Offset in Bhavani, Erode district",
      "numberOfItems": 50,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Multicolor Offset Printing" },
        { "@type": "ListItem", "position": 2, "name": "Short-run Offset Printing" },
        { "@type": "ListItem", "position": 3, "name": "Wedding Card Printing" },
        { "@type": "ListItem", "position": 4, "name": "Visiting Card Printing" },
        { "@type": "ListItem", "position": 5, "name": "Letterhead Printing" },
        { "@type": "ListItem", "position": 6, "name": "Bill Book Printing" },
        { "@type": "ListItem", "position": 7, "name": "Brochure Printing" },
        { "@type": "ListItem", "position": 8, "name": "Catalog Printing" },
        { "@type": "ListItem", "position": 9, "name": "Packaging Printing" },
        { "@type": "ListItem", "position": 10, "name": "Bag Printing" },
        { "@type": "ListItem", "position": 11, "name": "Poster Printing" },
        { "@type": "ListItem", "position": 12, "name": "Dangler & Standee Printing" },
        { "@type": "ListItem", "position": 13, "name": "Sticker Printing" },
        { "@type": "ListItem", "position": 14, "name": "Label Printing" },
        { "@type": "ListItem", "position": 15, "name": "Envelope Printing" },
        { "@type": "ListItem", "position": 16, "name": "Calendar Printing" },
        { "@type": "ListItem", "position": 17, "name": "Certificate Printing" },
        { "@type": "ListItem", "position": 18, "name": "ID Card Printing" },
        { "@type": "ListItem", "position": 19, "name": "Book Printing" },
        { "@type": "ListItem", "position": 20, "name": "Box Printing" }
      ]
    }
  ]
}

export const getAuthorityPageSchemaJSON = () => {
  return JSON.stringify(generateAuthorityPageSchema())
}
