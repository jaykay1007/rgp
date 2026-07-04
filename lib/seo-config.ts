// SEO Configuration for Raja Ganapathi Offset Press
// Centralized SEO constants and utilities for consistent optimization

export const SITE_CONFIG = {
  name: "Raja Ganapathi Offset",
  legalName: "Raja Ganapathi Offset Printers",
  tagline: "Premium Offset Printing Press in Bhavani",
  domain: "https://www.rajaganapathioffset.in",
  foundingYear: 1997,
  yearsInBusiness: new Date().getFullYear() - 1997,
} as const;

export const CONTACT_INFO = {
  phone: "+91 9994466277",
  phoneFormatted: "+919994466277",
  email: "rgpbvn@gmail.com",
  whatsapp: "919994466277",
  address: {
    street: "24 Palani Andavar Kovil Street",
    landmark: "Opposite CSI School",
    city: "Bhavani",
    district: "Erode",
    state: "Tamil Nadu",
    pincode: "638301",
    country: "India",
    countryCode: "IN",
  },
  geo: {
    latitude: 11.4500,
    longitude: 77.6833,
  },
  googleMapsUrl: "https://maps.app.goo.gl/7bUZMaUAAN2VSYibA",
} as const;

export const BUSINESS_HOURS = {
  days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  morning: { opens: "09:30", closes: "14:00" },
  evening: { opens: "16:00", closes: "20:00" },
  sunday: "Closed",
} as const;

// Primary keywords targeting #1 position
export const PRIMARY_KEYWORDS = [
  "printing press bhavani",
  "offset printing bhavani",
  "rajaganapathi offset press",
  "raja ganapathi press bhavani",
  "best printing press bhavani",
  "multicolor printing bhavani",
  "wedding card printing bhavani",
  "visiting card printing bhavani",
] as const;

// Secondary location-based keywords
export const LOCATION_KEYWORDS = [
  "printing press erode",
  "offset printing erode district",
  "printing services komarapalayam",
  "offset printing anthiyur",
  "printing press gobi",
  "commercial printing moorodu",
  "multicolor printing erode",
  "wedding cards erode",
  "printing near bhavani bus stand",
] as const;

// Service-specific keywords
export const SERVICE_KEYWORDS = [
  "wedding invitation printing",
  "marriage card printing tamil nadu",
  "business card printing bhavani",
  "visiting cards offset printing",
  "letterhead printing erode",
  "bill book printing bhavani",
  "brochure printing services",
  "catalog printing erode",
  "packaging printing bhavani",
  "label printing erode district",
  "poster printing bhavani",
  "pamphlet printing erode",
  "book printing tamil nadu",
  "textile sample book printing",
  "turmeric packaging printing",
  "bhavani jamakkalam brochures",
] as const;

// Long-tail keywords for better targeting
export const LONGTAIL_KEYWORDS = [
  "best quality offset printing press in bhavani",
  "affordable wedding card printing bhavani erode",
  "multicolor offset printing services near me",
  "professional visiting card printing bhavani",
  "bulk printing services erode district",
  "custom wedding invitation design bhavani",
  "commercial printing solutions tamil nadu",
  "trusted printing press since 1997 bhavani",
] as const;

// All keywords combined
export const ALL_KEYWORDS = [
  ...PRIMARY_KEYWORDS,
  ...LOCATION_KEYWORDS,
  ...SERVICE_KEYWORDS,
  ...LONGTAIL_KEYWORDS,
] as const;

// Service areas for local SEO
export const SERVICE_AREAS = [
  { name: "Bhavani", priority: 1.0, slug: "bhavani" },
  { name: "Erode", priority: 0.95, slug: "erode" },
  { name: "Komarapalayam", priority: 0.9, slug: "komarapalayam" },
  { name: "Anthiyur", priority: 0.85, slug: "anthiyur" },
  { name: "Gobi", priority: 0.85, slug: "gobi" },
  { name: "Moorodu", priority: 0.8, slug: "moorodu" },
  { name: "Sathyamangalam", priority: 0.75, slug: "sathyamangalam" },
  { name: "Perundurai", priority: 0.75, slug: "perundurai" },
] as const;

// NOTE: the service catalogue lives in lib/services-data.ts (single source of
// truth for routes, sitemap, schema and navigation). Do not re-add a parallel
// SERVICES list here — the two lists drifted apart once already.

// FAQ data for FAQ schema
export const FAQ_DATA = [
  {
    question: "What types of printing services do you offer in Bhavani?",
    answer: "We offer comprehensive printing services including multicolor offset printing, wedding invitations, visiting cards, business stationery (letterheads, bill books, envelopes), brochures, catalogs, packaging printing, book printing, bag printing, promotional materials, and specialized services like textile sample books, turmeric packaging and Bhavani Jamakkalam brochures.",
  },
  {
    question: "How long has Raja Ganapathi Offset been in business?",
    answer: `Raja Ganapathi Offset has been serving customers in Bhavani and Erode district since 1997. With over ${new Date().getFullYear() - 1997} years of experience, we are one of the most trusted printing presses in the region.`,
  },
  {
    question: "What areas do you serve from your Bhavani location?",
    answer: "We serve customers across Erode district including Bhavani, Erode, Komarapalayam, Anthiyur, Gobi, Moorodu, Sathyamangalam, and Perundurai. We also accept orders from across Tamil Nadu with delivery options available.",
  },
  {
    question: "What are your business hours?",
    answer: "We are open Monday to Saturday from 9:30 AM to 2:00 PM and 4:00 PM to 8:00 PM. We are closed on Sundays. For urgent orders, please contact us via WhatsApp at +91 9994466277.",
  },
  {
    question: "Do you offer custom wedding card designs?",
    answer: "Yes, we specialize in custom wedding invitation designs. We offer various styles including traditional Tamil designs, modern minimalist, luxury foil stamping, and embossed designs. Our team can help create personalized invitations that match your wedding theme.",
  },
  {
    question: "What is the minimum order quantity for visiting cards?",
    answer: "For offset printing, we typically require a minimum of 500 visiting cards for cost-effectiveness. For smaller quantities, we also offer quick short-run printing with no large minimum order.",
  },
  {
    question: "How do I start a printing project with you?",
    answer: "The best way is to visit our press floor at 24 Palani Andavar Kovil Street, Bhavani. You can feel the paper stocks, see real samples of our work, and plan your project face-to-face with our team — no appointment needed. Prefer to start remotely? Call us at +91 9994466277, message us on WhatsApp, or email rgpbvn@gmail.com with your project details and we'll guide you from there.",
  },
  {
    question: "Do you offer express or urgent printing services?",
    answer: "Yes, we offer express printing services for urgent orders. Turnaround time depends on the complexity and quantity of the order. Contact us directly to discuss your timeline and we will do our best to accommodate your needs.",
  },
  {
    question: "What paper quality options are available?",
    answer: "We offer a wide range of paper options including art paper, maplitho, bond paper, card stock, textured papers, and specialty papers. For premium products like wedding cards, we also offer metallic, handmade, and imported papers.",
  },
  {
    question: "Where is Raja Ganapathi Offset located in Bhavani?",
    answer: "We are located at 24 Palani Andavar Kovil Street, Bhavani - 638301 (Opposite CSI School). We are easily accessible from the main Bhavani bus stand and have been a landmark printing press in the area since 1997.",
  },
] as const;

// Reviews/Testimonials for Review schema
export const REVIEWS = [
  {
    author: "Senthil Kumar",
    location: "Bhavani",
    rating: 5,
    review: "Excellent quality wedding cards. The foiling work was outstanding. Highly recommended for wedding invitations in Bhavani area.",
    date: "2024-12-15",
  },
  {
    author: "Lakshmi Textiles",
    location: "Komarapalayam",
    rating: 5,
    review: "We have been getting our textile sample books printed here for 5 years. Consistent quality and timely delivery every time.",
    date: "2024-11-20",
  },
  {
    author: "Dr. Ramesh",
    location: "Erode",
    rating: 5,
    review: "Best printing quality in Erode district. Got my clinic stationery including letterheads, prescription pads, and visiting cards. Very professional.",
    date: "2024-10-08",
  },
  {
    author: "Murugan Stores",
    location: "Anthiyur",
    rating: 5,
    review: "Affordable prices with premium quality. Their packaging printing for our products is always perfect. Trusted press for commercial printing.",
    date: "2024-09-25",
  },
  {
    author: "Priya & Karthik",
    location: "Gobi",
    rating: 5,
    review: "Our wedding cards were absolutely beautiful! The team helped us design unique invitations. Thank you Raja Ganapathi Offset!",
    date: "2024-08-30",
  },
] as const;

// Generate full address string
export const getFullAddress = () => {
  const addr = CONTACT_INFO.address;
  return `${addr.street}, ${addr.landmark}, ${addr.city} - ${addr.pincode}, ${addr.district}, ${addr.state}`;
};

// Generate meta description with keywords
export const generateMetaDescription = (page?: string) => {
  const base = `Raja Ganapathi Offset - Premier offset printing press in Bhavani since 1997. `;
  
  switch (page) {
    case "home":
      return `${base}Specializing in wedding invitations, visiting cards, business stationery, brochures, and packaging. Serving Bhavani, Erode, Komarapalayam, Anthiyur, Gobi. Call +91 9994466277.`;
    case "services":
      return `Explore our comprehensive printing services - multicolor offset printing, wedding cards, visiting cards, letterheads, brochures, packaging, and more. Quality printing in Bhavani, Erode district.`;
    case "contact":
      return `Contact Raja Ganapathi Offset Press in Bhavani. Address: 24 Palani Andavar Kovil Street, Bhavani 638301. Phone: +91 9994466277. Email: rgpbvn@gmail.com. Get quotes for all printing needs.`;
    default:
      return `${base}Quality printing services for wedding cards, business cards, brochures, packaging in Bhavani, Erode, Tamil Nadu. ${SITE_CONFIG.yearsInBusiness}+ years of excellence.`;
  }
};

// Generate page title with branding
export const generatePageTitle = (pageTitle?: string) => {
  const brand = "Raja Ganapathi Offset | Printing Press Bhavani";
  if (!pageTitle) {
    return `${brand} | Wedding Cards, Visiting Cards, Offset Printing Since 1997`;
  }
  return `${pageTitle} | ${brand}`;
};
