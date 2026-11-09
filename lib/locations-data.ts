// Town/area landing pages for local SEO. Each renders at
// /printing-press/[slug] via a single data-driven template.
// Bhavani is intentionally excluded here — it has its own flagship authority
// page at /printing-press-bhavani-erode.

export type LocationFAQ = { q: string; a: string }

export type Location = {
  slug: string
  /** Town name in English */
  name: string
  /** Town name in Tamil (for alternateName + intro) */
  tamilName: string
  /** ~how far / how we reach them from the Bhavani press */
  reach: string
  /** Hero subtitle */
  tagline: string
  /** Card + meta description seed */
  summary: string
  /** Detail-page intro paragraph */
  intro: string
  /** Neighbourhoods / nearby areas we also serve from here */
  nearbyAreas: string[]
  /** Service slugs (from services-data) most requested here */
  popular: string[]
  faqs: LocationFAQ[]
  keywords: string[]
}

const HERO =
  "https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?w=1400&auto=format&fit=crop&q=80"

export const LOCATION_HERO = HERO

export const locations: Location[] = [
  {
    slug: "erode",
    name: "Erode",
    tamilName: "ஈரோடு",
    reach: "Same-day pickup & next-day delivery across Erode city",
    tagline: "Offset & commercial printing for Erode — wedding cards, visiting cards, brochures and bulk runs.",
    summary:
      "Trusted printing press serving Erode city with offset printing, wedding cards, visiting cards, calendars and sticker labels — delivered fast.",
    intro:
      `Erode businesses, textile houses and families have relied on Raja Ganapathi Offset for over ${new Date().getFullYear() - 1997} years. From our Bhavani press — minutes from Erode — we print true CMYK offset, wedding invitations, visiting cards, calendars, sticker labels, brochures and bill books, with same-day pickup and next-day delivery across the city.`,
    nearbyAreas: ["Erode Bus Stand", "Surampatti", "Veerappanchatram", "Chithode", "Solar", "Periya Semur"],
    popular: ["wedding-invitations", "visiting-cards", "multicolour-offset-printing", "brochures"],
    faqs: [
      { q: "Do you deliver printing to Erode?", a: "Yes — we offer same-day pickup and next-day delivery across Erode city from our Bhavani press." },
      { q: "Can I get wedding cards printed for an Erode wedding?", a: "Absolutely. We design and print multicolour wedding invitations in Tamil, English and bilingual layouts for Erode customers." },
      { q: "Do you handle bulk offset orders for Erode businesses?", a: "Yes, our multicolour offset press handles runs from 1,000 to several lakh sheets with consistent quality." },
    ],
    keywords: ["printing press erode", "offset printing erode", "wedding card printing erode", "visiting card printing erode"],
  },
  {
    slug: "komarapalayam",
    name: "Komarapalayam",
    tamilName: "கோமாரபாளையம்",
    reach: "Regular delivery to Komarapalayam's textile cluster",
    tagline: "Printing for Komarapalayam's textile trade — sample books, shade cards, labels and brochures.",
    summary:
      "Printing press serving Komarapalayam — textile sample books, shade cards, labels, brochures, visiting cards and offset printing.",
    intro:
      "Komarapalayam's powerloom and textile businesses trust us for the printed material that moves their products — fabric sample books, shade cards, hang-tags, labels and product brochures, alongside everyday visiting cards and bill books. We deliver regularly to the Komarapalayam cluster from our Bhavani press.",
    nearbyAreas: ["Pallipalayam", "Mohanur Road", "Komarapalayam Bus Stand", "Velur", "Tiruchengode Road"],
    popular: ["textile-sample-books", "sticker-labels", "brochures", "visiting-cards"],
    faqs: [
      { q: "Do you print textile sample books for Komarapalayam mills?", a: "Yes — windowed swatch books, shade cards and sample folders built for heavy buyer use." },
      { q: "Can you print product labels and hang-tags?", a: "Yes, we print die-cut sticker labels and hang-tags on paper, vinyl and transparent stocks, in any shape." },
      { q: "How do orders reach Komarapalayam?", a: "We deliver regularly to the Komarapalayam textile cluster, or you can collect from our Bhavani shop." },
    ],
    keywords: ["printing press komarapalayam", "textile sample book printing komarapalayam", "label printing komarapalayam", "shade card printing"],
  },
  {
    slug: "gobichettipalayam",
    name: "Gobichettipalayam",
    tamilName: "கோபிசெட்டிபாளையம்",
    reach: "Delivery across Gobi (Gobichettipalayam) and nearby towns",
    tagline: "Wedding cards, business stationery and offset printing for Gobichettipalayam (Gobi).",
    summary:
      "Printing press serving Gobichettipalayam (Gobi) — wedding invitations, visiting cards, business stationery and multicolour offset printing.",
    intro:
      "From weddings to businesses, Gobichettipalayam (Gobi) chooses Raja Ganapathi Offset for quality print. We craft Tamil wedding invitations, digital & PVC visiting cards, calendars, letterheads, bill books and brochures, with delivery across Gobi and the surrounding towns from our Bhavani press.",
    nearbyAreas: ["Gobi Bus Stand", "Nambiyur", "Kolappalur", "Karattadipalayam", "Modakkurichi"],
    popular: ["wedding-invitations", "visiting-cards", "business-stationery", "brochures"],
    faqs: [
      { q: "Do you print wedding cards for Gobi weddings?", a: "Yes — traditional and modern multicolour wedding invitations with die-cut options, in Tamil and English." },
      { q: "Can you supply business stationery to Gobi shops?", a: "Yes, letterheads, bill books, visiting cards and envelopes, colour-matched and easy to reorder." },
      { q: "Is delivery available to Gobichettipalayam?", a: "Yes, we deliver across Gobi and nearby towns; pickup is also available at our Bhavani shop." },
    ],
    keywords: ["printing press gobi", "printing press gobichettipalayam", "wedding card printing gobi", "offset printing gobi"],
  },
  {
    slug: "anthiyur",
    name: "Anthiyur",
    tamilName: "அந்தியூர்",
    reach: "On-time delivery to Anthiyur and surrounding villages",
    tagline: "Wedding cards, visiting cards and commercial printing for Anthiyur.",
    summary:
      "Printing press serving Anthiyur — wedding invitations, visiting cards, bill books, brochures and offset printing with on-time delivery.",
    intro:
      "Anthiyur families and businesses rely on us for dependable, affordable printing. We print wedding invitations, visiting cards, bill books, pamphlets and brochures, with on-time delivery to Anthiyur and the surrounding villages from our nearby Bhavani press.",
    nearbyAreas: ["Anthiyur Bus Stand", "Bhavanisagar", "Kanjikoil Road", "Mettukadai"],
    popular: ["wedding-invitations", "visiting-cards", "promotional-materials", "stationery-printing"],
    faqs: [
      { q: "Do you deliver printing to Anthiyur?", a: "Yes — we provide on-time delivery to Anthiyur and the surrounding villages." },
      { q: "Can I order wedding cards from Anthiyur?", a: "Yes, share your details by WhatsApp or visit our Bhavani shop to choose designs and paper." },
      { q: "Do you print pamphlets and posters for local events?", a: "Yes, we print bulk flyers, pamphlets and posters with quick turnaround." },
    ],
    keywords: ["printing press anthiyur", "wedding card printing anthiyur", "offset printing anthiyur", "pamphlet printing anthiyur"],
  },
  {
    slug: "sathyamangalam",
    name: "Sathyamangalam",
    tamilName: "சத்தியமங்கலம்",
    reach: "Delivery to Sathyamangalam (Sathy) and nearby areas",
    tagline: "Offset printing, wedding cards and calendars for Sathyamangalam (Sathy).",
    summary:
      "Printing press serving Sathyamangalam (Sathy) — wedding cards, visiting cards, calendars, sticker labels and multicolour offset printing.",
    intro:
      "Sathyamangalam (Sathy) businesses, farms and families trust Raja Ganapathi Offset for quality printing at fair prices — wedding invitations, visiting cards, calendars, food and produce sticker labels, and bulk offset runs, delivered to Sathy and nearby areas.",
    nearbyAreas: ["Sathy Bus Stand", "Bhavanisagar", "Germalam", "Kuttagam"],
    popular: ["wedding-invitations", "calendar-printing", "sticker-labels", "multicolour-offset-printing"],
    faqs: [
      { q: "Do you deliver to Sathyamangalam?", a: "Yes — we deliver to Sathyamangalam (Sathy) and nearby areas from our Bhavani press." },
      { q: "Can you print labels for food and farm produce?", a: "Yes — die-cut sticker labels in any shape, with waterproof and oil-resistant options for food products." },
      { q: "Do you print bulk wedding and event cards?", a: "Yes, multicolour wedding invitations and event cards in any quantity, in Tamil or English." },
    ],
    keywords: ["printing press sathyamangalam", "printing press sathy", "wedding card printing sathyamangalam", "calendar printing sathyamangalam"],
  },
  {
    slug: "perundurai",
    name: "Perundurai",
    tamilName: "பெருந்துறை",
    reach: "Delivery to Perundurai, SIPCOT and nearby industrial areas",
    tagline: "Commercial & industrial printing for Perundurai — stationery, labels and brochures.",
    summary:
      "Printing press serving Perundurai & SIPCOT — business stationery, sticker labels, calendars, brochures and offset printing for industries.",
    intro:
      "Perundurai's industries and SIPCOT units choose Raja Ganapathi Offset for professional commercial printing — letterheads, bill books, sticker labels, calendars, catalogues and brochures — with reliable delivery to Perundurai and the surrounding industrial areas.",
    nearbyAreas: ["Perundurai SIPCOT", "Perundurai Bus Stand", "Vijayamangalam", "Chennimalai Road", "Thoppupalayam"],
    popular: ["business-stationery", "sticker-labels", "calendar-printing", "multicolour-offset-printing"],
    faqs: [
      { q: "Do you serve Perundurai SIPCOT industries?", a: "Yes — we supply business stationery, sticker labels, calendars and catalogues to Perundurai and SIPCOT units." },
      { q: "Can you print product and barcode labels?", a: "Yes — die-cut sticker labels with barcode, MRP and batch details, on paper, vinyl or transparent stocks." },
      { q: "Is delivery available to Perundurai?", a: "Yes, we deliver reliably to Perundurai and the surrounding industrial areas." },
    ],
    keywords: ["printing press perundurai", "sticker label printing perundurai", "commercial printing perundurai", "business stationery perundurai"],
  },
]

export const locationSlugs = locations.map((l) => l.slug)

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug)
}
