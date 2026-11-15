"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, MapPin, Phone, Mail } from "lucide-react"
import { CONTACT_INFO } from "@/lib/seo-config"

const services = [
  { label: "Multicolour Offset Printing", href: "/services/multicolour-offset-printing" },
  { label: "Wedding Invitations", href: "/services/wedding-invitations" },
  { label: "Digital & PVC Visiting Cards", href: "/services/visiting-cards" },
  { label: "Calendar Printing", href: "/services/calendar-printing" },
  { label: "Die-Cut Sticker Labels", href: "/services/sticker-labels" },
  { label: "Business Stationery", href: "/services/business-stationery" },
  { label: "Brochures & Catalogs", href: "/services/brochures" },
  { label: "Book Printing", href: "/services/book-printing" },
  { label: "Bag Printing", href: "/services/bag-printing" },
  { label: "All Services", href: "/services" },
]

const specialized = [
  { label: "Bhavani Jamakkalam Brochures", href: "/services/bhavani-jamakkalam-brochures" },
  { label: "Textile Sample Books", href: "/services/textile-sample-books" },
  { label: "Educational Materials", href: "/services/educational-materials" },
  { label: "Bill Books & Stationery", href: "/services/stationery-printing" },
  { label: "Promotional Materials", href: "/services/promotional-materials" },
]

const locations = [
  { label: "Printing press Bhavani", href: "/printing-press-bhavani-erode" },
  { label: "Printing press Erode", href: "/printing-press/erode" },
  { label: "Printing Komarapalayam", href: "/printing-press/komarapalayam" },
  { label: "Printing Gobichettipalayam", href: "/printing-press/gobichettipalayam" },
  { label: "Printing Anthiyur", href: "/printing-press/anthiyur" },
  { label: "Printing Sathyamangalam", href: "/printing-press/sathyamangalam" },
  { label: "Printing Perundurai", href: "/printing-press/perundurai" },
  { label: "All locations", href: "/printing-press" },
]

export default function Footer() {
  return (
    <footer
      className="relative bg-ink-900 text-white pt-24 pb-10 overflow-hidden"
      aria-label="Site footer"
    >
      <div aria-hidden="true" className="absolute inset-0 press-grid opacity-30" />
      <div aria-hidden="true" className="absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-ink-100 to-ink-900" />

      <div className="container-apple-wide relative">
        {/* Big CTA strap */}
        <div className="mb-20 grid lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <p className="text-eyebrow uppercase text-accent mb-5">Visit our press floor</p>
            <h2 className="font-display font-semibold tracking-[-0.025em] text-[clamp(36px,5vw,72px)] leading-[1.02] text-balance">
              Ready to print
              <br />
              <span className="text-gradient-pearl">something brilliant?</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
            <a
              href="tel:+919994466277"
              className="inline-flex items-center gap-2 bg-white text-ink-900 px-6 py-3.5 rounded-full text-[15px] font-medium hover:bg-ink-100 transition-all"
            >
              <Phone className="w-4 h-4" strokeWidth={2} />
              +91 99944 66277
            </a>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-y-12 gap-x-8 pb-12 border-b border-white/10">
          <div className="col-span-2 md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
              <Image
                src="/images/brand/emblem-64.png"
                alt="Raja Ganapathi Offset Printers"
                width={28}
                height={28}
              />
              <span className="text-[16px] font-display font-semibold tracking-tight">
                Raja Ganapathi Offset
              </span>
            </Link>
            <p className="text-[14px] text-white/55 leading-relaxed max-w-sm">
              Multicolour offset printing press in Bhavani, Erode — wedding cards, visiting cards,
              calendars, sticker labels, brochures and books. Since 1997.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={CONTACT_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-[13px] text-white/65 hover:text-white transition-colors"
                aria-label="Get directions to our shop in Google Maps"
              >
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span>
                  24 Palani Andavar Kovil Street,
                  <br />
                  Bhavani — 638301, Erode District
                </span>
              </a>
              <a
                href="mailto:rgpbvn@gmail.com"
                className="flex items-center gap-3 text-[13px] text-white/65 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
                rgpbvn@gmail.com
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[12px] font-semibold text-white uppercase tracking-wider mb-5">
              Printing Services
            </h3>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/55 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[12px] font-semibold text-white uppercase tracking-wider mb-5">
              Specialized
            </h3>
            <ul className="space-y-3">
              {specialized.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/55 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-[12px] font-semibold text-white uppercase tracking-wider mb-5">
              Locations
            </h3>
            <ul className="space-y-3">
              {locations.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/55 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Popular searches — each anchor points at its own topical page so
            internal link equity is distributed instead of piling onto one URL */}
        <div className="py-10 border-b border-white/10">
          <h3 className="text-[12px] font-semibold text-white/80 uppercase tracking-wider mb-4">
            Popular searches
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              { k: "printing press bhavani", href: "/printing-press-bhavani-erode" },
              { k: "offset printing erode", href: "/printing-press/erode" },
              { k: "wedding card printing bhavani", href: "/services/wedding-invitations" },
              { k: "visiting card printing erode", href: "/services/visiting-cards" },
              { k: "best printing press in bhavani", href: "/printing-press-bhavani-erode" },
              { k: "multicolor offset printing tamil nadu", href: "/services/multicolour-offset-printing" },
              { k: "bulk printing erode district", href: "/services/multicolour-offset-printing" },
              { k: "bhavani jamakkalam brochure", href: "/services/bhavani-jamakkalam-brochures" },
              { k: "calendar printing bhavani", href: "/services/calendar-printing" },
              { k: "daily calendar printing erode", href: "/services/calendar-printing" },
              { k: "letterhead printing erode", href: "/services/business-stationery" },
              { k: "brochure printing komarapalayam", href: "/printing-press/komarapalayam" },
              { k: "catalog printing erode", href: "/services/brochures" },
              { k: "sticker label printing erode", href: "/services/sticker-labels" },
              { k: "pvc visiting card bhavani", href: "/services/visiting-cards" },
              { k: "bag printing bhavani", href: "/services/bag-printing" },
              { k: "bill book printing bhavani", href: "/services/stationery-printing" },
            ].map(({ k, href }) => (
              <Link
                key={k}
                href={href}
                className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-white/55 hover:bg-white/10 hover:text-white transition-all"
              >
                {k}
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-[12px] text-white/50">
            © {new Date().getFullYear()} Raja Ganapathi Offset Printers · Bhavani, Erode · Since 1997
          </div>
          <div className="flex items-center gap-6">
            <Link href="/#faq" className="text-[12px] text-white/50 hover:text-white transition-colors">
              FAQ
            </Link>
            <Link href="/services" className="text-[12px] text-white/50 hover:text-white transition-colors">
              All services
            </Link>
            <a href="/sitemap.xml" className="text-[12px] text-white/50 hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
