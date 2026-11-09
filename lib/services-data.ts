// Single source of truth for every printing service.
// Drives the homepage service grid, the /services index, each /services/[slug]
// detail page, the header mega-menu, the footer and the sitemap.
//
// NOTE: This is a multicolour offset printing shop. "Large Format / Banners &
// Flex", packaging/carton printing and specialty finishes (foil, embossing,
// spot UV) are intentionally NOT offered — keep them out of copy and data.

export type ServiceImage = { src: string; alt: string }

export type ServiceFAQ = { q: string; a: string }

export type Service = {
  slug: string
  name: string
  /** Grouping used on the /services index page */
  category: string
  /** Small badge shown on cards */
  tag?: string
  /** Hero subtitle */
  tagline: string
  /** One-line description used on cards */
  summary: string
  /** Longer intro paragraph on the detail page */
  overview: string
  hero: ServiceImage
  gallery: ServiceImage[]
  /** Headline capabilities */
  features: string[]
  /** "What we print" chips */
  craft: string[]
  /** Optional detailed breakdown (types, sizes, finishing) shown on the detail page */
  specs?: { title: string; items: string[] }[]
  faqs: ServiceFAQ[]
  /** Related service slugs */
  related: string[]
  keywords: string[]
  /** Tailwind gradient stops for card overlays */
  accent: string
  /** Hex tint used for glows/accents */
  tint: string
  /** Featured on the homepage primary grid */
  featured?: boolean
}

// Curated, relevant imagery — each picture genuinely depicts the work.
const IMG = {
  weddingSuite:
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1400&auto=format&fit=crop&q=80",
  cards:
    "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1400&auto=format&fit=crop&q=80",
  press:
    "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1400&auto=format&fit=crop&q=80",
  pressSheets:
    "https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?w=1400&auto=format&fit=crop&q=80",
  brochure:
    "https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?w=1400&auto=format&fit=crop&q=80",
  books:
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1400&auto=format&fit=crop&q=80",
  bagsWedding:
    "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=1400&auto=format&fit=crop&q=80",
  bagsFestival:
    "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=1400&auto=format&fit=crop&q=80",
  bagsJute:
    "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=1400&auto=format&fit=crop&q=80",
  letterhead:
    "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=1400&auto=format&fit=crop&q=80",
  stationery:
    "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=1400&auto=format&fit=crop&q=80",
  billbooks:
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&auto=format&fit=crop&q=80",
} as const

// First-party work photography served from /public — preferred over stock
// wherever we have a real shot of the craft.
const WORK = {
  weddingSuiteSeal: "/images/works/wedding-invitation-suite-letterpress-wax-seal.jpg",
  booksHardcover: "/images/works/book-printing-hardcover-offset-press-floor.jpg",
  brochurePressRun: "/images/works/brochure-catalog-offset-press-run.jpg",
  toteBag: "/images/works/cotton-canvas-tote-bag-printing.jpg",
} as const

// Tamil-language sample designs (illustrated mock-ups) from /public — swap for
// real photographs of finished jobs as they become available.
const SAMPLE = {
  weddingTamil: "/images/samples/wedding-invitation-tamil.jpg",
  cardsTamil: "/images/samples/visiting-cards-digital-pvc-tamil.jpg",
  calendarDaily: "/images/samples/calendar-daily-tamil.jpg",
  calendarMonthly: "/images/samples/calendar-monthly-tamil.jpg",
  stickers: "/images/samples/die-cut-sticker-labels-tamil.jpg",
  productLabels: "/images/samples/product-labels-tamil.jpg",
} as const

export const services: Service[] = [
  {
    slug: "multicolour-offset-printing",
    name: "Multicolour Offset Printing",
    category: "Offset, Calendars & Labels",
    tag: "Multicolour offset",
    tagline: "True CMYK + Pantone sheet-fed offset — built for runs from 1,000 to lakhs of sheets.",
    summary:
      "Vibrant 4-colour offset printing for bulk commercial runs, with sharp registration and consistent colour.",
    overview:
      "Our sheet-fed multicolour offset press is the heart of the shop. We print true CMYK plus Pantone spot colours with tight registration and consistent ink density across the entire run — a finish digital simply cannot match at volume.",
    hero: { src: IMG.press, alt: "Multicolour offset printing press running at Raja Ganapathi Offset, Bhavani" },
    gallery: [
      { src: IMG.pressSheets, alt: "Freshly printed CMYK offset sheets" },
      { src: SAMPLE.calendarMonthly, alt: "Tamil monthly wall calendar printed in multicolour offset" },
      { src: IMG.brochure, alt: "Multicolour brochures printed on the offset press" },
    ],
    features: [
      "4-colour CMYK + Pantone spot colours",
      "Computer-to-plate (CTP) plate making",
      "Consistent ink density across long runs",
      "Stocks from 70gsm text to 400gsm board",
      "In-house colour proofing before the run",
      "Bulk runs from 1,000 to 10,00,000 sheets",
    ],
    craft: ["Brochures & catalogues", "Magazines & books", "Posters & handbills", "Monthly & daily calendars", "Letterheads & forms", "Die-cut sticker labels"],
    faqs: [
      { q: "What is the minimum quantity for offset printing?", a: "Offset becomes cost-effective from around 1,000 sheets; below that we suggest a short-run option." },
      { q: "Can you match a specific Pantone colour?", a: "Yes — we mix Pantone spot inks and proof them before the full run so your brand colour is exact." },
      { q: "How long does a bulk offset job take?", a: "Most multicolour runs are ready in 3–6 working days depending on finishing; rush jobs can be accommodated." },
    ],
    related: ["calendar-printing", "sticker-labels", "brochures"],
    keywords: ["multicolour offset printing bhavani", "cmyk printing erode", "offset press tamil nadu", "bulk printing erode district"],
    accent: "from-violet-500/30 via-indigo-500/20 to-transparent",
    tint: "#5E5CE6",
    featured: true,
  },
  {
    slug: "wedding-invitations",
    name: "Wedding Invitations",
    category: "Celebrations & Events",
    tag: "Most loved",
    tagline: "Multicolour wedding cards in Tamil, English and bilingual layouts — designed and printed in Bhavani.",
    summary:
      "Tamil, English and bilingual wedding invitations, printed in rich multicolour on premium card stocks.",
    overview:
      "From traditional Tamil thirumana azhaippithal (திருமண அழைப்பிதழ்) to modern minimalist suites, we design and print wedding invitations that feel as special as the occasion — rich multicolour printing on premium and pearl card stocks, with die-cut shapes, matching envelopes and inserts.",
    hero: { src: SAMPLE.weddingTamil, alt: "Tamil wedding invitation (thirumana azhaippithal) with envelope and reception card, printed in Bhavani" },
    gallery: [
      { src: WORK.weddingSuiteSeal, alt: "Wedding invitation suite with RSVP and insert cards" },
      { src: IMG.weddingSuite, alt: "Printed wedding invitation cards and envelopes" },
      { src: IMG.pressSheets, alt: "Wedding cards on the offset press" },
    ],
    features: [
      "Rich multicolour offset printing",
      "Tamil, English & bilingual typesetting",
      "Traditional & modern designs for every community",
      "Die-cut shapes & window cards",
      "Pearl, textured & premium card stocks",
      "Matching envelopes, inserts & thank-you tags",
    ],
    craft: ["Hindu wedding cards", "Muslim & Christian invitations", "Engagement & reception cards", "Save-the-date cards", "Thank-you & return-gift tags", "RSVP & insert cards"],
    faqs: [
      { q: "Do you print invitations in Tamil?", a: "Yes — we typeset in Tamil, English and bilingual layouts with both traditional and modern fonts." },
      { q: "Can I see a sample before printing?", a: "Absolutely. We share a colour proof and can show physical paper samples at our Bhavani shop." },
      { q: "What is the lead time for wedding cards?", a: "Plan for 5–7 days after design approval; die-cut designs may need a little longer." },
    ],
    related: ["bag-printing", "visiting-cards", "sticker-labels"],
    keywords: ["wedding card printing bhavani", "marriage invitation tamil", "tamil wedding card design", "thirumana azhaippithal printing erode"],
    accent: "from-rose-500/30 via-fuchsia-500/20 to-transparent",
    tint: "#EC008C",
    featured: true,
  },
  {
    slug: "visiting-cards",
    name: "Digital & PVC Visiting Cards",
    category: "Business Identity",
    tag: "From ₹399",
    tagline: "Digital-printed paper cards and waterproof PVC visiting cards — sharp full colour, ready fast.",
    summary:
      "Full-colour digital visiting cards and durable, waterproof PVC cards for shops, clinics and businesses.",
    overview:
      "A visiting card is a handshake in paper. Choose digital-printed cards on 300–350gsm stock with matte or gloss lamination for quick, sharp short runs — or PVC visiting cards that are waterproof, tear-proof and last for years in a wallet. Tamil, English or bilingual, with your logo and a QR code.",
    hero: { src: SAMPLE.cardsTamil, alt: "Tamil digital visiting card and PVC clinic visiting card printed at Raja Ganapathi Offset, Bhavani" },
    gallery: [
      { src: IMG.cards, alt: "Stack of printed visiting cards" },
      { src: IMG.letterhead, alt: "Visiting card with matching business stationery" },
      { src: IMG.stationery, alt: "Finished full-colour visiting cards" },
    ],
    features: [
      "Digital full-colour, single or double-sided",
      "PVC cards — waterproof & tear-proof",
      "300–350gsm card stocks for paper cards",
      "Matte & gloss lamination",
      "Rounded corners & QR codes",
      "Tamil, English & bilingual layouts",
    ],
    craft: ["Shop & business cards", "Doctor & clinic cards", "Textile & showroom cards", "PVC visiting cards", "Tamil & bilingual cards", "QR-code visiting cards"],
    faqs: [
      { q: "What is a PVC visiting card?", a: "A plastic card — similar in feel to an ATM card — that is waterproof, tear-proof and lasts far longer than paper. Ideal for clinics, shops and anyone who hands out cards every day." },
      { q: "What's the minimum order?", a: "Digital printing has no large minimum — a standard box of 100 cards is fine for both paper and PVC cards." },
      { q: "Do you design the card too?", a: "Yes — our in-house team can design from scratch in Tamil or English, or refine your existing artwork." },
    ],
    related: ["business-stationery", "stationery-printing", "sticker-labels"],
    keywords: ["visiting card printing bhavani", "pvc visiting card erode", "digital visiting card printing", "tamil visiting card design"],
    accent: "from-blue-500/30 via-cyan-500/20 to-transparent",
    tint: "#0071e3",
    featured: true,
  },
  {
    slug: "calendar-printing",
    name: "Calendar Printing",
    category: "Offset, Calendars & Labels",
    tag: "Monthly & daily",
    tagline: "All types of monthly and daily calendars, in every size — Tamil, English or bilingual.",
    summary:
      "Monthly wall calendars, daily tear-off calendars, desk and pocket calendars in all sizes — branded for your shop.",
    overview:
      "A calendar stays on the wall all year — the best-value advertising a shop, textile house, jeweller, school or temple can buy. We print every type: 12-page, 6-page and single-sheet monthly wall calendars, daily tear-off (date-pad) calendars on a branded header board, desk calendars and pocket calendars. Any standard size or a custom size, with Tamil months, festivals and holidays, your logo, photos and contact details.",
    hero: { src: SAMPLE.calendarDaily, alt: "Tamil daily tear-off calendar with branded header board, printed in Bhavani" },
    gallery: [
      { src: SAMPLE.calendarMonthly, alt: "Tamil monthly wall calendar with shop branding and January date grid" },
      { src: IMG.press, alt: "Calendar sheets printing on the multicolour offset press" },
      { src: IMG.pressSheets, alt: "Printed calendar sheets before binding" },
    ],
    features: [
      "Monthly wall calendars — 12-page, 6-page & single-sheet",
      "Daily tear-off calendars with branded header board",
      "Desk / table & pocket calendars",
      "All sizes — standard or fully custom",
      "Tamil, English & bilingual date panels",
      "Metal-strip, wiro & hanging-hole finishing",
    ],
    craft: ["Monthly wall calendars", "Daily tear-off calendars", "Single-sheet calendars", "Desk & table calendars", "Pocket calendars", "Shop & temple calendars"],
    specs: [
      {
        title: "Monthly calendars",
        items: [
          "12-page wall calendar — one month per page",
          "6-page wall calendar — two months per page",
          "Single-sheet 12-month wall calendar",
          "Monthly desk / table calendar",
        ],
      },
      {
        title: "Daily calendars",
        items: [
          "Daily tear-off date pad — a sheet for every day",
          "Multicolour branded header board",
          "Tamil month, festival & holiday details",
          "Hanging hole or wall-mount finish",
        ],
      },
      {
        title: "Sizes",
        items: [
          "Wall: 12×18, 15×20, 18×23 & 20×30 inches",
          "Daily board: small, medium & large",
          "Desk: A5 & custom sizes",
          "Pocket: wallet / card size",
          "Any custom size on request",
        ],
      },
      {
        title: "Finishing",
        items: [
          "Metal strip (tin) binding",
          "Wiro / spiral binding",
          "Hanging hole & loop",
          "Matte or gloss laminated covers",
        ],
      },
    ],
    faqs: [
      { q: "What types of calendars do you print?", a: "Monthly wall calendars (12-page, 6-page and single-sheet), daily tear-off calendars, desk/table calendars and pocket calendars — all customised with your branding." },
      { q: "What sizes are available?", a: "All popular wall sizes such as 12×18, 15×20, 18×23 and 20×30 inches, small to large daily calendar boards, desk and pocket calendars — or any custom size." },
      { q: "Can the calendar be in Tamil?", a: "Yes — Tamil, English or bilingual date panels with Tamil months, festivals and government holidays." },
      { q: "When should I order for the new year?", a: "Calendar season peaks in November and December. Confirm your design by October–November so calendars are delivered well before January." },
    ],
    related: ["multicolour-offset-printing", "promotional-materials", "sticker-labels"],
    keywords: ["calendar printing bhavani", "daily calendar printing erode", "monthly calendar printing tamil nadu", "tamil calendar printing", "wall calendar printing erode"],
    accent: "from-red-500/30 via-rose-500/20 to-transparent",
    tint: "#DC2626",
    featured: true,
  },
  {
    slug: "brochures",
    name: "Brochures & Catalogs",
    category: "Marketing & Publishing",
    tag: "Marketing",
    tagline: "Tri-folds, A4 catalogues, leaflets and corporate booklets that move the needle.",
    summary:
      "Tri-fold brochures, product catalogues and corporate booklets designed to sell, on premium art stocks.",
    overview:
      "Whether it's a single tri-fold or a 64-page product catalogue, we help you tell your story in print. Crisp offset colour, clean folds, and binding that lies flat and lasts.",
    hero: { src: WORK.brochurePressRun, alt: "Freshly printed catalogue stacks beside the offset press in Bhavani, Erode" },
    gallery: [
      { src: IMG.brochure, alt: "Tri-fold brochures and catalogues" },
      { src: IMG.press, alt: "Brochures on the multicolour offset press" },
      { src: IMG.pressSheets, alt: "Printed brochure sheets before folding" },
    ],
    features: [
      "Tri-fold, gate-fold & Z-fold options",
      "A4, A5 & custom catalogue sizes",
      "Saddle-stitch & perfect binding",
      "Art, matte & textured paper stocks",
      "Matte & gloss laminated covers",
      "Design & layout assistance in-house",
    ],
    craft: ["Tri-fold brochures", "Product catalogues", "Corporate profiles", "Leaflets & flyers", "Annual reports", "Menu cards"],
    faqs: [
      { q: "Can you design my brochure?", a: "Yes, our design team handles layout, copy formatting and print-ready artwork." },
      { q: "What binding do you recommend for catalogues?", a: "Saddle-stitch for up to ~48 pages, perfect binding for thicker catalogues." },
      { q: "Do you do small quantities?", a: "Yes — short runs for samples, offset for bulk distribution." },
    ],
    related: ["promotional-materials", "multicolour-offset-printing", "book-printing"],
    keywords: ["brochure printing bhavani", "catalog printing erode", "tri-fold brochure", "company profile printing"],
    accent: "from-amber-500/30 via-orange-500/20 to-transparent",
    tint: "#FF8A00",
    featured: true,
  },
  {
    slug: "book-printing",
    name: "Book Printing",
    category: "Marketing & Publishing",
    tag: "Publishing",
    tagline: "Textbooks, magazines and perfect-bound publications — printed locally, bound to last.",
    summary:
      "Perfect-bound and saddle-stitched books, magazines and journals with durable, lay-flat binding.",
    overview:
      "From self-published authors to schools and magazines, we print and bind books that hold up to daily use. Choose paperback or hardcase binding, full colour or economical black-and-white interiors.",
    hero: { src: WORK.booksHardcover, alt: "Hardcover books stacked on pallets beside the offset press at Raja Ganapathi Offset" },
    gallery: [
      { src: IMG.books, alt: "Perfect-bound books ready for delivery" },
      { src: IMG.press, alt: "Book pages printing on the offset press" },
      { src: IMG.pressSheets, alt: "Book signatures before binding" },
    ],
    features: [
      "Perfect, section-sewn & hardcase binding",
      "Full-colour or B&W interiors",
      "Art, maplitho & bond text stocks",
      "Matte & gloss laminated covers",
      "ISBN & barcode placement",
      "Short and bulk print runs",
    ],
    craft: ["Textbooks & guides", "Novels & literature", "Magazines & journals", "Souvenirs & temple books", "Annual magazines", "Recipe & coffee-table books"],
    faqs: [
      { q: "Do you do hardcover binding?", a: "Yes — we offer hardcase, section-sewn and perfect binding." },
      { q: "Can you print a single author's small run?", a: "Yes, we support short runs for self-publishers as well as bulk." },
      { q: "Will you place the ISBN barcode?", a: "We position the ISBN and barcode correctly on the cover at no extra design cost." },
    ],
    related: ["educational-materials", "brochures", "multicolour-offset-printing"],
    keywords: ["book printing tamil nadu", "perfect binding erode", "magazine printing bhavani", "textbook printing"],
    accent: "from-emerald-500/30 via-teal-500/20 to-transparent",
    tint: "#34C759",
    featured: true,
  },
  {
    slug: "bag-printing",
    name: "Bag Printing",
    category: "Celebrations & Events",
    tag: "Sustainable",
    tagline: "Cotton, jute and non-woven bags for weddings, festivals and retail — carry your brand.",
    summary:
      "Custom-printed cotton, jute and non-woven bags for weddings, festivals, return-gifts and retail.",
    overview:
      "Carry your brand and celebrate your moments. We screen and digitally print on cotton, jute, canvas and non-woven bags — from wedding return-gift bags to eco-friendly shopping bags for shops and supermarkets.",
    hero: { src: WORK.toteBag, alt: "Natural cotton canvas tote bag ready for custom printing in Bhavani" },
    gallery: [
      { src: IMG.bagsWedding, alt: "Personalised wedding return-gift bags" },
      { src: IMG.bagsFestival, alt: "Festival and pooja bags with traditional prints" },
      { src: IMG.bagsJute, alt: "Eco-friendly jute katta pai bags" },
    ],
    features: [
      "Cotton, jute, canvas & non-woven fabrics",
      "Custom sizes from gift to shopping bags",
      "Full-colour & screen printing",
      "Eco-friendly, reusable materials",
      "Names, dates & motifs for weddings",
      "Bulk pricing with fast turnaround",
    ],
    craft: ["Wedding & engagement bags", "Festival & pooja bags", "Cotton shopping bags", "Katta pai (jute bags)", "Return-gift bags", "Retail & branded bags"],
    faqs: [
      { q: "Can you print names and dates for weddings?", a: "Yes — we personalise wedding bags with names, dates and traditional motifs." },
      { q: "Which fabrics can you print on?", a: "Cotton, jute, canvas and non-woven — choose by budget and use." },
      { q: "Is there a minimum order?", a: "Bag printing is most economical in bulk; share your quantity for a quote." },
    ],
    related: ["wedding-invitations", "promotional-materials", "sticker-labels"],
    keywords: ["bag printing bhavani", "cotton bag printing erode", "jute bag printing", "wedding return gift bags"],
    accent: "from-teal-500/30 via-emerald-500/20 to-transparent",
    tint: "#0E9F8E",
    featured: true,
  },
  {
    slug: "business-stationery",
    name: "Business Stationery",
    category: "Business Identity",
    tagline: "Letterheads, envelopes and corporate identity sets that look the part.",
    summary:
      "Letterheads, envelopes, folders and complete corporate identity sets on premium stocks.",
    overview:
      "Consistent stationery builds trust. We print cohesive identity sets — letterheads, envelopes, folders and compliment slips — colour-matched to your brand and ready to reorder anytime.",
    hero: { src: IMG.letterhead, alt: "Corporate letterhead and stationery set printed in Erode" },
    gallery: [
      { src: IMG.stationery, alt: "Branded business stationery" },
      { src: IMG.cards, alt: "Matching visiting cards and stationery" },
      { src: IMG.press, alt: "Letterheads printing on the press" },
    ],
    features: [
      "Letterheads on bond & executive stocks",
      "Window & cover envelopes (all sizes)",
      "Presentation folders with pockets",
      "Compliment slips & note cards",
      "Brand colour-matched printing",
      "Artwork kept on file for easy reorders",
    ],
    craft: ["Letterheads", "Envelopes & covers", "Presentation folders", "Compliment slips", "ID & badge cards", "Rubber-stamp artwork"],
    faqs: [
      { q: "Can you match our brand colours?", a: "Yes — we colour-match to your logo and keep the file for consistent reorders." },
      { q: "Do you print envelopes of all sizes?", a: "We print standard and custom envelope sizes including window covers." },
      { q: "Can I reorder easily?", a: "We keep your artwork on file so reorders are quick and identical." },
    ],
    related: ["visiting-cards", "stationery-printing", "brochures"],
    keywords: ["letterhead printing erode", "envelope printing bhavani", "corporate stationery", "business stationery printing"],
    accent: "from-blue-500/30 via-sky-500/20 to-transparent",
    tint: "#0071e3",
  },
  {
    slug: "stationery-printing",
    name: "Bill Books & Stationery",
    category: "Business Identity",
    tagline: "Bill books, invoice books and receipt pads — numbered, carbonless and ready to use.",
    summary:
      "Numbered bill books, invoice and receipt pads in duplicate/triplicate with carbonless options.",
    overview:
      "The everyday paperwork that keeps a business running. We print bill books, invoice books, delivery challans and receipt pads — sequentially numbered, perforated, and bound in duplicate or triplicate.",
    hero: { src: IMG.billbooks, alt: "Numbered bill books and invoice pads printed in Bhavani" },
    gallery: [
      { src: IMG.letterhead, alt: "Business stationery and bill books" },
      { src: IMG.stationery, alt: "Receipt and invoice pads" },
      { src: IMG.press, alt: "Bill books printing on the press" },
    ],
    features: [
      "Duplicate & triplicate sets",
      "Sequential numbering & perforation",
      "Carbon and carbonless (NCR) paper",
      "Gum-pad or stapled binding",
      "GST-ready invoice formats",
      "Bulk pads at economical rates",
    ],
    craft: ["Bill & invoice books", "Receipt & cash books", "Delivery challans", "Estimate & quotation books", "Token & coupon books", "Prescription pads"],
    faqs: [
      { q: "Do you do carbonless (NCR) bill books?", a: "Yes — both carbon-interleaved and carbonless NCR options are available." },
      { q: "Can books be numbered in sequence?", a: "Yes, we add sequential numbering and perforation as standard." },
      { q: "Can you format a GST invoice for me?", a: "We set up GST-ready invoice and challan formats to your requirement." },
    ],
    related: ["business-stationery", "visiting-cards", "multicolour-offset-printing"],
    keywords: ["bill book printing bhavani", "invoice book erode", "receipt pad printing", "ncr bill books"],
    accent: "from-indigo-500/30 via-blue-500/20 to-transparent",
    tint: "#4f46e5",
  },
  {
    slug: "sticker-labels",
    name: "Die-Cut Sticker Labels",
    category: "Offset, Calendars & Labels",
    tag: "All shapes",
    tagline: "Die-cut sticker labels in any shape and size — round, oval, square or your own custom outline.",
    summary:
      "Die-cut sticker labels for products, shops and brands — paper, vinyl and transparent stocks, cut to any shape.",
    overview:
      "Every label, cut to fit. We print multicolour sticker labels and die-cut them to any shape — round, oval, square, rectangle, star or a custom outline that follows your logo. Paper, vinyl, transparent and waterproof stocks, supplied on sheets or rolls so they are easy to peel and apply. Tamil, English or bilingual.",
    hero: { src: SAMPLE.stickers, alt: "Sheet of Tamil die-cut sticker labels in round, oval, star, heart and barcode shapes" },
    gallery: [
      { src: SAMPLE.productLabels, alt: "Tamil product labels on honey, ghee, sesame oil and turmeric jars" },
      { src: IMG.pressSheets, alt: "Printed sticker label sheets before die-cutting" },
      { src: IMG.press, alt: "Sticker labels printing on the multicolour offset press" },
    ],
    features: [
      "Die-cut to any shape & size",
      "Round, oval, square, star & custom outlines",
      "Paper, vinyl & transparent stocks",
      "Waterproof & oil-resistant options",
      "Easy-peel sheets or rolls",
      "Barcode, MRP & batch details",
    ],
    craft: ["Product & jar labels", "Logo stickers", "Shop & brand stickers", "Barcode & MRP labels", "Wedding & gift stickers", "Temple & festival stickers"],
    faqs: [
      { q: "Can you cut stickers to a custom shape?", a: "Yes — we make a die for your exact outline, from a simple circle to the shape of your logo." },
      { q: "Are the stickers waterproof?", a: "Choose vinyl or laminated stocks for waterproof, oil-resistant labels — ideal for ghee, oil, honey and other food products." },
      { q: "What sizes can you print?", a: "Any size — from small logo stickers to large product labels. Share your size and quantity for a quote." },
    ],
    related: ["multicolour-offset-printing", "visiting-cards", "calendar-printing"],
    keywords: ["die cut sticker printing bhavani", "sticker label printing erode", "product label printing tamil nadu", "custom shape stickers erode"],
    accent: "from-orange-500/30 via-amber-500/20 to-transparent",
    tint: "#FB923C",
  },
  {
    slug: "promotional-materials",
    name: "Promotional Materials",
    category: "Marketing & Publishing",
    tagline: "Posters, flyers, danglers and handbills that get your brand seen.",
    summary:
      "Posters, flyers, danglers and standees for campaigns and store branding.",
    overview:
      "Everything you need to run a campaign in print. From handbill flyers and posters to danglers, standees and table-tents — bold colour and quick turnaround to keep your brand visible.",
    hero: { src: IMG.brochure, alt: "Promotional posters, flyers and calendars printed in Bhavani" },
    gallery: [
      { src: IMG.press, alt: "Promotional flyers on the press" },
      { src: IMG.cards, alt: "Printed danglers and table-tents" },
      { src: IMG.pressSheets, alt: "Poster sheets fresh off the press" },
    ],
    features: [
      "Posters in A3 to large sizes",
      "Flyers & handbills in bulk",
      "Danglers, standees & table-tents",
      "Notices & menu cards",
      "Coupons, tickets & door-hangers",
      "Fast turnaround for campaigns",
    ],
    craft: ["Posters & handbills", "Pamphlets & flyers", "Danglers & buntings", "Coupons & tickets", "Standees & table-tents", "Notice & menu cards"],
    faqs: [
      { q: "How quickly can you print flyers?", a: "Bulk flyers are typically ready in 1–3 days depending on quantity." },
      { q: "Do you print calendars?", a: "Yes — monthly, daily, desk and pocket calendars in all sizes. See our dedicated calendar printing service." },
      { q: "Can you do very large posters?", a: "We print large poster sizes on paper stocks for indoor display and campaigns." },
    ],
    related: ["brochures", "calendar-printing", "bag-printing"],
    keywords: ["poster printing bhavani", "flyer printing erode", "notice printing bhavani", "pamphlet printing tamil nadu"],
    accent: "from-fuchsia-500/30 via-pink-500/20 to-transparent",
    tint: "#EC008C",
  },
  {
    slug: "educational-materials",
    name: "Educational Materials",
    category: "Marketing & Publishing",
    tagline: "School diaries, workbooks, question papers and lab records — bound for the year.",
    summary:
      "School diaries, workbooks, question papers and progress cards for schools and colleges.",
    overview:
      "Schools and colleges across Erode district trust us for the printed material that runs the academic year — diaries, workbooks, question papers, lab records and progress cards, delivered on time for term.",
    hero: { src: IMG.books, alt: "School diaries, workbooks and educational material printed in Erode" },
    gallery: [
      { src: IMG.brochure, alt: "Printed workbooks and guides" },
      { src: IMG.press, alt: "Educational books on the press" },
      { src: IMG.pressSheets, alt: "Question paper sheets before binding" },
    ],
    features: [
      "School diaries & almanacs",
      "Workbooks & practice sheets",
      "Question papers (confidential handling)",
      "Lab records & observation books",
      "Progress & report cards",
      "Certificates & ID cards",
    ],
    craft: ["School diaries", "Workbooks & guides", "Question papers", "Lab & record books", "Progress cards", "Certificates"],
    faqs: [
      { q: "Do you handle question papers confidentially?", a: "Yes — confidential jobs are handled discreetly with secure delivery." },
      { q: "Can you deliver before term begins?", a: "We schedule academic jobs to land well before your term start." },
      { q: "Do you print school diaries with our logo?", a: "Yes, fully customised diaries with your school branding and calendar." },
    ],
    related: ["book-printing", "brochures", "business-stationery"],
    keywords: ["school diary printing", "workbook printing erode", "question paper printing", "educational printing bhavani"],
    accent: "from-emerald-500/30 via-green-500/20 to-transparent",
    tint: "#34C759",
  },
  {
    slug: "textile-sample-books",
    name: "Textile Sample Books",
    category: "Specialised",
    tagline: "Fabric swatch books and shade cards for Komarapalayam's textile houses.",
    summary:
      "Fabric swatch books, shade cards and sample folders for textile and garment businesses.",
    overview:
      "Built for the textile belt of Erode and Komarapalayam. We produce fabric swatch books, shade cards and sample folders that present your collection beautifully and survive heavy use by buyers and agents.",
    hero: { src: IMG.pressSheets, alt: "Textile sample books and shade cards printed in Komarapalayam" },
    gallery: [
      { src: IMG.books, alt: "Bound fabric swatch books" },
      { src: IMG.brochure, alt: "Textile collection catalogue" },
      { src: IMG.stationery, alt: "Shade and colour cards" },
    ],
    features: [
      "Swatch books with fabric windows",
      "Shade & colour cards",
      "Hard-wearing covers & binding",
      "Custom sizes for sample dimensions",
      "Numbered & indexed pages",
      "Bulk sets for sales teams",
    ],
    craft: ["Fabric swatch books", "Shade cards", "Sample folders", "Yarn & thread cards", "Collection catalogues", "Order booklets"],
    faqs: [
      { q: "Can you bind actual fabric swatches?", a: "Yes — we create windowed pages and binding designed to hold fabric samples." },
      { q: "Do you make shade cards?", a: "Yes, precise shade and colour cards for your collection." },
      { q: "Can you produce sets for a sales team?", a: "We print matched bulk sets so every rep carries the same collection." },
    ],
    related: ["book-printing", "bhavani-jamakkalam-brochures", "brochures"],
    keywords: ["textile sample book printing", "shade card printing", "fabric swatch books", "komarapalayam textile printing"],
    accent: "from-violet-500/30 via-purple-500/20 to-transparent",
    tint: "#7C3AED",
  },
  {
    slug: "bhavani-jamakkalam-brochures",
    name: "Bhavani Jamakkalam Brochures",
    category: "Specialised",
    tagline: "Marketing collateral that carries Bhavani's GI-tagged handloom heritage.",
    summary:
      "Brochures, catalogues and tags that market Bhavani's famous GI-tagged jamakkalam handloom.",
    overview:
      "Bhavani Jamakkalam carries a GI tag and centuries of heritage — its marketing should too. We craft brochures, catalogues, hang-tags and lookbooks that present the weave, colour and story of your handloom to buyers near and far.",
    hero: { src: IMG.brochure, alt: "Bhavani Jamakkalam handloom brochures and catalogues" },
    gallery: [
      { src: IMG.pressSheets, alt: "Jamakkalam catalogue sheets" },
      { src: IMG.books, alt: "Handloom lookbook" },
      { src: IMG.stationery, alt: "Hang-tags and product cards" },
    ],
    features: [
      "Heritage-led brochure & catalogue design",
      "Hang-tags & product labels",
      "Lookbooks & weave catalogues",
      "Rich colour reproduction of fabric",
      "Bilingual Tamil/English copy",
      "Export-ready presentation sets",
    ],
    craft: ["Product brochures", "Weave catalogues", "Hang-tags & labels", "Lookbooks", "Exhibition flyers", "Story cards"],
    faqs: [
      { q: "Can you reproduce fabric colours accurately?", a: "We colour-tune so the printed weave matches your actual product closely." },
      { q: "Do you write the content too?", a: "We help with bilingual Tamil/English copy that tells the jamakkalam story." },
      { q: "Can you make export presentation sets?", a: "Yes — polished sets suited to buyers and export exhibitions." },
    ],
    related: ["textile-sample-books", "brochures", "promotional-materials"],
    keywords: ["bhavani jamakkalam brochure", "handloom catalogue printing", "jamakkalam marketing", "textile brochure bhavani"],
    accent: "from-blue-500/30 via-indigo-500/20 to-transparent",
    tint: "#0071e3",
  },
]

// Order categories appear on the /services index page
export const SERVICE_CATEGORIES = [
  "Celebrations & Events",
  "Business Identity",
  "Marketing & Publishing",
  "Offset, Calendars & Labels",
  "Specialised",
] as const

export const featuredServices = services.filter((s) => s.featured)

export const serviceSlugs = services.map((s) => s.slug)

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getRelatedServices(slug: string): Service[] {
  const svc = getService(slug)
  if (!svc) return []
  return svc.related
    .map((s) => getService(s))
    .filter((s): s is Service => Boolean(s))
}

export function getServicesByCategory(): { category: string; items: Service[] }[] {
  return SERVICE_CATEGORIES.map((category) => ({
    category,
    items: services.filter((s) => s.category === category),
  })).filter((g) => g.items.length > 0)
}
