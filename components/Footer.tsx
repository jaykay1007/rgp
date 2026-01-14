"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

const footerLinks = {
  services: [
    { label: "Business Cards", href: "/services/visiting-cards" },
    { label: "Brochures", href: "/services/brochures" },
    { label: "Offset Printing", href: "/services/multicolour-offset-printing" },
    { label: "Packaging", href: "/services/packaging-printing" },
    { label: "Book Printing", href: "/services/book-printing" },
  ],
  company: [
    { label: "About", href: "#why-choose-us" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
  locations: [
    { label: "Bhavani", href: "#" },
    { label: "Erode", href: "#" },
    { label: "Komarapalayam", href: "#" },
    { label: "Anthiyur", href: "#" },
  ],
}

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7]/50">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-[12px] font-semibold text-[#1d1d1f] uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[12px] text-[#86868b] hover:text-[#1d1d1f] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-semibold text-[#1d1d1f] uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[12px] text-[#86868b] hover:text-[#1d1d1f] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-semibold text-[#1d1d1f] uppercase tracking-wider mb-4">
              Locations
            </h3>
            <ul className="space-y-3">
              {footerLinks.locations.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[12px] text-[#86868b] hover:text-[#1d1d1f] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-semibold text-[#1d1d1f] uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919994466277"
                  className="text-[12px] text-[#86868b] hover:text-[#1d1d1f] transition-colors"
                >
                  +91 99944 66277
                </a>
              </li>
              <li>
                <a
                  href="mailto:rgpbvn@gmail.com"
                  className="text-[12px] text-[#86868b] hover:text-[#1d1d1f] transition-colors"
                >
                  rgpbvn@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919994466277"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] text-[#86868b] hover:text-[#1d1d1f] transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-[#d2d2d7]/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <p className="text-[12px] text-[#86868b]">
                © {new Date().getFullYear()} Raja Ganapathi Offset Printers.
              </p>
              <span className="hidden md:inline text-[#d2d2d7]">|</span>
              <p className="text-[12px] text-[#86868b]">
                24 Palani Andavar Kovil Street, Bhavani - 638301
              </p>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-[12px] text-[#86868b] hover:text-[#1d1d1f] transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-[12px] text-[#86868b] hover:text-[#1d1d1f] transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

