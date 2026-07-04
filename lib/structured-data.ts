// Comprehensive JSON-LD Structured Data for Maximum SEO Impact
import {
  SITE_CONFIG,
  CONTACT_INFO,
  BUSINESS_HOURS,
  FAQ_DATA,
  REVIEWS,
  SERVICE_AREAS,
} from "./seo-config";
import { services } from "./services-data";

// LocalBusiness Schema - Primary for local SEO
export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_CONFIG.domain}/#localbusiness`,
  name: SITE_CONFIG.legalName,
  alternateName: [
    "Raja Ganapathi Offset",
    "Rajaganapathi Offset Press",
    "Raja Ganapathi Press Bhavani",
    "RGP Offset Bhavani",
  ],
  description: `Premier offset printing press in Bhavani since ${SITE_CONFIG.foundingYear}. Specializing in wedding invitations, visiting cards, business stationery, brochures, packaging, and commercial printing. Serving Bhavani, Erode, Komarapalayam, Anthiyur, Gobi and surrounding areas in Tamil Nadu.`,
  url: SITE_CONFIG.domain,
  telephone: CONTACT_INFO.phone,
  email: CONTACT_INFO.email,
  foundingDate: `${SITE_CONFIG.foundingYear}`,
  image: [
    `${SITE_CONFIG.domain}/opengraph-image`,
    `${SITE_CONFIG.domain}/images/workspace/press-1.jpg`,
    `${SITE_CONFIG.domain}/images/samples/wedding-invitation.jpg`,
  ],
  logo: `${SITE_CONFIG.domain}/apple-icon`,
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Bank Transfer",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${CONTACT_INFO.address.street}, ${CONTACT_INFO.address.landmark}`,
    addressLocality: CONTACT_INFO.address.city,
    addressRegion: CONTACT_INFO.address.state,
    postalCode: CONTACT_INFO.address.pincode,
    addressCountry: CONTACT_INFO.address.countryCode,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: CONTACT_INFO.geo.latitude,
    longitude: CONTACT_INFO.geo.longitude,
  },
  hasMap: CONTACT_INFO.googleMapsUrl,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: BUSINESS_HOURS.days,
      opens: BUSINESS_HOURS.morning.opens,
      closes: BUSINESS_HOURS.morning.closes,
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: BUSINESS_HOURS.days,
      opens: BUSINESS_HOURS.evening.opens,
      closes: BUSINESS_HOURS.evening.closes,
    },
  ],
  areaServed: SERVICE_AREAS.map((area) => ({
    "@type": "City",
    name: area.name,
    containedInPlace: {
      "@type": "State",
      name: "Tamil Nadu",
    },
  })),
  sameAs: [
    "https://www.facebook.com/rajaganapathioffset",
    "https://www.instagram.com/rajaganapathioffset",
    "https://wa.me/919994466277",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: CONTACT_INFO.phone,
    contactType: "customer service",
    availableLanguage: ["Tamil", "English"],
    areaServed: "IN",
  },
  // Ratings/reviews live on the one canonical LocalBusiness node — a separate
  // LocalBusiness "#reviews" entity would split the business into two entities.
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: REVIEWS.length.toString(),
    bestRating: "5",
    worstRating: "1",
  },
  review: REVIEWS.map((review) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.author,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    reviewBody: review.review,
    datePublished: review.date,
  })),
});

// Organization Schema
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_CONFIG.domain}/#organization`,
  name: SITE_CONFIG.legalName,
  url: SITE_CONFIG.domain,
  logo: `${SITE_CONFIG.domain}/apple-icon`,
  foundingDate: `${SITE_CONFIG.foundingYear}`,
  description: `Established in ${SITE_CONFIG.foundingYear}, Raja Ganapathi Offset is a trusted offset printing press in Bhavani, Tamil Nadu. With ${SITE_CONFIG.yearsInBusiness}+ years of experience, we provide quality printing services.`,
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT_INFO.address.street,
    addressLocality: CONTACT_INFO.address.city,
    addressRegion: CONTACT_INFO.address.state,
    postalCode: CONTACT_INFO.address.pincode,
    addressCountry: CONTACT_INFO.address.countryCode,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: CONTACT_INFO.phone,
    contactType: "customer service",
    email: CONTACT_INFO.email,
  },
});

// Services ItemList Schema — derived from lib/services-data.ts (the single
// source of truth for routes) so every listed URL is a real, live page.
export const generateServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE_CONFIG.domain}/#services`,
  name: "Printing Services",
  description: "Comprehensive printing services offered by Raja Ganapathi Offset Press",
  numberOfItems: services.length,
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      "@id": `${SITE_CONFIG.domain}/services/${service.slug}`,
      name: service.name,
      description: service.summary,
      url: `${SITE_CONFIG.domain}/services/${service.slug}`,
    },
  })),
});

// FAQ Schema
export const generateFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_CONFIG.domain}/#faq`,
  mainEntity: FAQ_DATA.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

// BreadcrumbList Schema
export const generateBreadcrumbSchema = (
  items: Array<{ name: string; url: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// WebSite Schema with SearchAction
export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_CONFIG.domain}/#website`,
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.domain,
  description: `Official website of ${SITE_CONFIG.legalName} - Premier offset printing press in Bhavani, Tamil Nadu since ${SITE_CONFIG.foundingYear}.`,
  publisher: {
    "@type": "Organization",
    "@id": `${SITE_CONFIG.domain}/#organization`,
  },
  // No SearchAction: the site has no /search route, and pointing Google at a
  // nonexistent endpoint invalidates the sitelinks-searchbox markup.
  inLanguage: ["en", "ta"],
});

// WebPage Schema
export const generateWebPageSchema = (
  title: string,
  description: string,
  url: string
) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${url}#webpage`,
  url: url,
  name: title,
  description: description,
  isPartOf: {
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.domain}/#website`,
  },
  about: {
    "@type": "LocalBusiness",
    "@id": `${SITE_CONFIG.domain}/#localbusiness`,
  },
  inLanguage: "en",
});

// Site-wide entity graph (WebSite + Organization + LocalBusiness). Safe on
// every page — these describe the business, not any specific page's content.
export const getSiteWideStructuredData = () =>
  JSON.stringify([
    generateWebsiteSchema(),
    generateOrganizationSchema(),
    generateLocalBusinessSchema(),
  ]);

// Homepage-only schemas. FAQPage markup must appear only on pages where the
// FAQ content is visible (Google guideline), so this is injected by app/page.tsx
// — not the root layout.
export const getHomePageStructuredData = () =>
  JSON.stringify([generateServiceSchema(), generateFAQSchema()]);
