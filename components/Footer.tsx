"use client"

import Link from "next/link"
import { ArrowUpRight, MapPin, Phone, Mail, MessageCircle } from "lucide-react"

const services = [
  { label: "Multicolour Offset Printing", href: "/services/multicolour-offset-printing" },
  { label: "Wedding Invitations", href: "/services/wedding-invitations" },
  { label: "Visiting Cards", href: "/services/visiting-cards" },
  { label: "Business Stationery", href: "/services/business-stationery" },
  { label: "Brochures & Catalogs", href: "/services/brochures" },
  { label: "Book Printing", href: "/services/book-printing" },
  { label: "Packaging Printing", href: "/services/packaging-printing" },
  { label: "Bag Printing", href: "/services/bag-printing" },
  { label: "Digital Printing", href: "/services/digital-printing" },
  { label: "Large Format / Banners", href: "/services/large-format-printing" },
]

const specialized = [
  { label: "Bhavani Jamakkalam Brochures", href: "/services/bhavani-jamakkalam-brochures" },
  { label: "Turmeric Packaging", href: "/services/turmeric-packaging" },
  { label: "Textile Sample Books", href: "/services/textile-sample-books" },
  { label: "Educational Materials", href: "/services/educational-materials" },
  { label: "Stationery Printing", href: "/services/stationery-printing" },
  { label: "Packaging Materials", href: "/services/packaging-materials" },
  { label: "Promotional Materials", href: "/services/promotional-materials" },
]

const locations = [
  { label: "Printing press Bhavani", href: "/printing-press-bhavani-erode" },
  { label: "Offset printing Erode", href: "/printing-press-bhavani-erode" },
  { label: "Printing Komarapalayam", href: "/printing-press-bhavani-erode" },
  { label: "Printing Anthiyur", href: "/printing-press-bhavani-erode" },
  { label: "Printing Gobi", href: "/printing-press-bhavani-erode" },
  { label: "Printing Sathyamangalam", href: "/printing-press-bhavani-erode" },
  { label: "Printing Perundurai", href: "/printing-press-bhavani-erode" },
  { label: "Printing Moorodu", href: "/printing-press-bhavani-erode" },
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
            <p className="text-eyebrow uppercase text-accent mb-5">Get a quote in 1 hour</p>
            <h2 className="font-display font-semibold tracking-[-0.025em] text-[clamp(36px,5vw,72px)] leading-[1.02] text-balance">
              Ready to print
              <br />
              <span className="text-gradient-pearl">something brilliant?</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
            <a
              href="https://wa.me/919994466277"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 text-white px-6 py-3.5 rounded-full text-[15px] font-medium hover:bg-emerald-600 transition-all"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={2} />
              WhatsApp us
            </a>
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
              <span className="relative inline-flex w-7 h-7 items-center justify-center rounded-full bg-gradient-to-tr from-cmyk-cyan via-cmyk-magenta to-cmyk-yellow">
                <span className="absolute inset-[3px] rounded-full bg-ink-900" />
                <span className="relative text-[10px] font-bold text-white">R</span>
              </span>
              <span className="text-[16px] font-display font-semibold tracking-tight">
                Raja Ganapathi Offset
              </span>
            </Link>
            <p className="text-[14px] text-white/55 leading-relaxed max-w-sm">
              Premium offset printing press in Bhavani, Erode — wedding cards, visiting cards,
              brochures, books, packaging and bag printing. Since 1997.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href="https://maps.app.goo.gl/7bUZMaUAAN2VSYibA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-[13px] text-white/65 hover:text-white transition-colors"
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

        {/* SEO-rich tag cloud */}
        <div className="py-10 border-b border-white/10">
          <h3 className="text-[12px] font-semibold text-white/80 uppercase tracking-wider mb-4">
            Popular searches
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "printing press bhavani",
              "offset printing erode",
              "wedding card printing bhavani",
              "visiting card printing erode",
              "best printing press in bhavani",
              "rajaganapathi offset press",
              "multicolor offset printing tamil nadu",
              "bulk printing erode district",
              "bhavani jamakkalam brochure",
              "turmeric packaging printing",
              "marriage card printing bhavani",
              "letterhead printing erode",
              "brochure printing komarapalayam",
              "catalog printing erode",
              "packaging printing bhavani",
            ].map((k) => (
              <Link
                key={k}
                href="/printing-press-bhavani-erode"
                className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-white/55 hover:bg-white/10 hover:text-white transition-all"
              >
                {k}
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-[12px] text-white/50">
            © {new Date().getFullYear()} Raja Ganapathi Offset Printers · Bhavani, Erode · GST 33ABCDE1234F1Z5
          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-[12px] text-white/50 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/" className="text-[12px] text-white/50 hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/printing-press-bhavani-erode" className="text-[12px] text-white/50 hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
