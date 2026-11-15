// Printed work shown as the fanned "deck" in the homepage hero and inner-page
// heroes. First-party images only, and only work we actually offer — no foil,
// embossing or other finishes the press does not do (see services-data.ts).

export type HeroPrint = {
  src: string
  alt: string
  /** CSS object-position for the 3:4 portrait crop (default: center) */
  position?: string
}

export const HERO_PRINTS: HeroPrint[] = [
  {
    src: "/images/samples/wedding-invitation-tamil.jpg",
    alt: "Tamil wedding invitation printed by Raja Ganapathi Offset",
    position: "66% 50%",
  },
  {
    src: "/images/calendars/monthly-sheet-calendar-6004-hand-watch.jpg",
    alt: "Tamil monthly sheet calendar printed by Raja Ganapathi Offset",
    position: "top",
  },
  {
    src: "/images/calendars/daily-sheet-calendar-board-sri-saai-bramma-engineerings.jpg",
    alt: "Custom daily calendar board printed by Raja Ganapathi Offset",
    position: "top",
  },
  {
    src: "/images/samples/visiting-cards-digital-pvc-tamil.jpg",
    alt: "Tamil digital and PVC visiting cards printed by Raja Ganapathi Offset",
    position: "42% 50%",
  },
  {
    src: "/images/samples/die-cut-sticker-labels-tamil.jpg",
    alt: "Tamil die-cut sticker labels printed by Raja Ganapathi Offset",
    position: "38% 50%",
  },
]

/**
 * Build a five-card deck that leads with the given images (first-party only —
 * remote stock photos are skipped) and tops up from the general set.
 */
export function buildHeroDeck(preferred: HeroPrint[]): HeroPrint[] {
  const deck: HeroPrint[] = []
  for (const p of [...preferred, ...HERO_PRINTS]) {
    if (deck.length === 5) break
    if (!p.src.startsWith("/")) continue
    if (deck.some((d) => d.src === p.src)) continue
    deck.push(p)
  }
  // Put the lead image in the middle of the fan, where it is fully visible.
  const [a, b, c, d, e] = deck
  return [d, b, a, c, e].filter(Boolean)
}

// ---------------------------------------------------------------------------
// Service-page heroes
//
// Several services in services-data.ts still carry a generic stock photo as
// their `hero` (remote URL) that does not show the work. On the service page
// we never use those: we show a first-party photo of the closest real work
// instead, or a fan of prints led by the most relevant pieces.
// Remove an entry here once the service has its own photograph.

const PRESS_RUN = "/images/works/brochure-catalog-offset-press-run.jpg"
const BOOKS_FLOOR = "/images/works/book-printing-hardcover-offset-press-floor.jpg"

const SERVICE_HERO_IMAGE: Record<string, { src: string; alt: string }> = {
  "multicolour-offset-printing": {
    src: PRESS_RUN,
    alt: "Freshly printed multicolour offset sheets stacked beside the press at Raja Ganapathi Offset, Bhavani",
  },
  "educational-materials": {
    src: BOOKS_FLOOR,
    alt: "Bound books stacked on the press floor at Raja Ganapathi Offset, Bhavani",
  },
  "textile-sample-books": {
    src: PRESS_RUN,
    alt: "Printed catalogue stacks beside the offset press at Raja Ganapathi Offset, Bhavani",
  },
  "bhavani-jamakkalam-brochures": {
    src: PRESS_RUN,
    alt: "Printed brochure and catalogue stacks beside the offset press in Bhavani",
  },
}

const SERVICE_HERO_DECK: Record<string, HeroPrint[]> = {
  "promotional-materials": [
    {
      src: "/images/collections/gold-finance-poster-tamil.jpg",
      alt: "Tamil gold finance promotional poster printed by Raja Ganapathi Offset",
      position: "top",
    },
    {
      src: "/images/collections/product-label-sticker-tea-stall-festive.jpg",
      alt: "Festive Tamil tea stall promotional print by Raja Ganapathi Offset",
    },
    {
      src: "/images/collections/product-label-sticker-tea-stall-classic.jpg",
      alt: "Classic Tamil tea stall promotional print by Raja Ganapathi Offset",
    },
    { src: PRESS_RUN, alt: "Printed brochure stacks beside the offset press in Bhavani" },
  ],
  "business-stationery": [
    {
      src: "/images/samples/visiting-cards-digital-pvc-tamil.jpg",
      alt: "Tamil visiting cards printed by Raja Ganapathi Offset",
      position: "42% 50%",
    },
    { src: PRESS_RUN, alt: "Printed stationery stacks beside the offset press in Bhavani" },
  ],
}

export function getServiceHeroVisual(
  slug: string,
  hero: { src: string; alt: string },
): { image?: { src: string; alt: string }; deck?: HeroPrint[] } {
  if (SERVICE_HERO_DECK[slug]) return { deck: buildHeroDeck(SERVICE_HERO_DECK[slug]) }
  if (SERVICE_HERO_IMAGE[slug]) return { image: SERVICE_HERO_IMAGE[slug] }
  if (hero.src.startsWith("/")) return { image: hero }
  // Stock photo with no first-party replacement yet — show our real work instead.
  return { deck: HERO_PRINTS }
}
