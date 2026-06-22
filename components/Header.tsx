"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X, Menu, ChevronRight, Phone } from "lucide-react"
import LanguageToggle from "./language-toggle"
import { useLanguage } from "@/contexts/language-context"

interface MegaItem {
  label: string
  href: string
  desc?: string
}

const megaMenu: Record<string, MegaItem[]> = {
  Services: [
    { label: "Multicolour Offset Printing", href: "/services/multicolour-offset-printing", desc: "Vibrant CMYK at scale" },
    { label: "Wedding Invitations", href: "/services/wedding-invitations", desc: "Foiled, embossed, unforgettable" },
    { label: "Visiting Cards", href: "/services/visiting-cards", desc: "Premium finishes, lasting impressions" },
    { label: "Brochures & Catalogs", href: "/services/brochures", desc: "Tell your story beautifully" },
    { label: "Business Stationery", href: "/services/business-stationery", desc: "Letterheads, envelopes, bill books" },
    { label: "Packaging Printing", href: "/services/packaging-printing", desc: "Custom boxes & product packaging" },
    { label: "Book Printing", href: "/services/book-printing", desc: "Bound to last" },
    { label: "Digital Printing", href: "/services/digital-printing", desc: "Short-run, same-day" },
    { label: "Large Format", href: "/services/large-format-printing", desc: "Banners, flex, posters" },
    { label: "Bag Printing", href: "/services/bag-printing", desc: "Cotton, jute, festival specials" },
    { label: "Bhavani Jamakkalam Brochures", href: "/services/bhavani-jamakkalam-brochures", desc: "Heritage handloom marketing" },
    { label: "Turmeric Packaging", href: "/services/turmeric-packaging", desc: "Food-grade spice wraps" },
  ],
  Locations: [
    { label: "Bhavani", href: "/printing-press-bhavani-erode", desc: "Our home, since 1997" },
    { label: "Erode", href: "/printing-press-bhavani-erode", desc: "Across the district" },
    { label: "Komarapalayam", href: "/printing-press-bhavani-erode", desc: "Textile capital" },
    { label: "Anthiyur", href: "/printing-press-bhavani-erode", desc: "On-time delivery" },
    { label: "Gobi", href: "/printing-press-bhavani-erode", desc: "Weddings & business" },
    { label: "Sathyamangalam", href: "/printing-press-bhavani-erode", desc: "Trusted partner" },
  ],
}

export default function Header() {
  const { t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { key: "services", label: "Services", href: "#services", mega: "Services" },
    { key: "expertise", label: "Expertise", href: "#expertise" },
    { key: "process", label: "Process", href: "#process" },
    { key: "work", label: "Work", href: "#showcase" },
    { key: "locations", label: "Locations", href: "/printing-press-bhavani-erode", mega: "Locations" },
    { key: "contact", label: "Contact", href: "#contact" },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "nav-blur" : "bg-transparent"
        }`}
        onMouseLeave={() => setOpenMenu(null)}
      >
        <div className="container-apple-wide">
          <div className="flex items-center justify-between h-12">
            <Link
              href="/"
              className="text-[14px] font-semibold tracking-tight text-ink-800 hover:opacity-80 transition-opacity duration-300 inline-flex items-center gap-2"
            >
              <span className="relative inline-flex w-5 h-5 items-center justify-center rounded-full bg-gradient-to-tr from-cmyk-cyan via-cmyk-magenta to-cmyk-yellow">
                <span className="absolute inset-[3px] rounded-full bg-white" />
                <span className="relative text-[8px] font-bold text-ink-800">R</span>
              </span>
              <span>Raja Ganapathi</span>
            </Link>

            <nav className="hidden md:flex items-center gap-7" role="navigation" aria-label="Main navigation">
              {navItems.map((item) => (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => item.mega && setOpenMenu(item.mega)}
                >
                  <Link
                    href={item.href}
                    className="text-[12px] text-ink-800/80 hover:text-ink-800 transition-colors duration-300 font-normal"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <LanguageToggle />
              <a
                href="tel:+919994466277"
                className="inline-flex items-center gap-1.5 text-[12px] text-ink-800/80 hover:text-ink-800 transition-colors"
              >
                <Phone className="w-3 h-3" strokeWidth={2} />
                Call
              </a>
              <Link
                href="#contact"
                className="text-[12px] bg-ink-800 text-white px-4 py-1.5 rounded-full hover:bg-ink-900 transition-all duration-300"
              >
                Get Quote
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 -mr-2 text-ink-800 hover:opacity-60 transition-opacity"
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Mega-menu panel */}
        <AnimatePresence>
          {openMenu && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-0 right-0 top-12 nav-blur border-t border-ink-300/40"
              onMouseLeave={() => setOpenMenu(null)}
            >
              <div className="container-apple-wide py-10">
                <p className="text-eyebrow uppercase text-ink-500 mb-6">{openMenu}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-6">
                  {megaMenu[openMenu]?.map((m) => (
                    <Link
                      key={m.label}
                      href={m.href}
                      className="group block"
                      onClick={() => setOpenMenu(null)}
                    >
                      <p className="text-[15px] font-semibold text-ink-800 tracking-tight group-hover:text-accent transition-colors">
                        {m.label}
                      </p>
                      {m.desc && (
                        <p className="text-[12px] text-ink-500 mt-0.5">{m.desc}</p>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-ink-50"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-6 h-12 border-b border-ink-300/30">
                <span className="text-ink-800 font-semibold text-[14px]">Raja Ganapathi</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 -mr-2 text-ink-800 hover:opacity-60 transition-opacity"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" strokeWidth={1.5} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto py-4" role="navigation" aria-label="Mobile navigation">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between px-6 py-4 text-[28px] font-semibold text-ink-800 tracking-tight hover:text-accent transition-colors border-b border-ink-300/20"
                    >
                      {item.label}
                      <ChevronRight className="w-5 h-5 text-ink-400" strokeWidth={1.5} />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="px-6 py-8 border-t border-ink-300/30">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[14px] text-ink-500">Language</span>
                  <LanguageToggle />
                </div>
                <Link
                  href="tel:+919994466277"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center bg-white border border-ink-300 text-ink-800 py-3.5 rounded-2xl text-[15px] font-medium mb-3"
                >
                  +91 99944 66277
                </Link>
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center bg-ink-800 text-white py-4 rounded-2xl text-[17px] font-medium hover:bg-ink-900 transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
