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
// A service page shows its own hero image (a real job, a labelled sample
// design, or a typeset plate). A few services lead with a fan of real prints
// instead, listed here.

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
  ],
}

export function getServiceHeroVisual(
  slug: string,
  hero: { src: string; alt: string },
): { image?: { src: string; alt: string }; deck?: HeroPrint[] } {
  if (SERVICE_HERO_DECK[slug]) return { deck: buildHeroDeck(SERVICE_HERO_DECK[slug]) }
  if (hero.src.startsWith("/")) return { image: hero }
  return { deck: HERO_PRINTS }
}
