"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X, Menu } from "lucide-react"
import LanguageToggle from "./language-toggle"
import { useLanguage } from "@/contexts/language-context"

export default function Header() {
  const { t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
    { key: "services", label: t("nav.services"), href: "#services" },
    { key: "expertise", label: "Expertise", href: "#expertise" },
    { key: "process", label: t("nav.process"), href: "#process" },
    { key: "contact", label: t("nav.contact"), href: "#contact" },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass border-b border-white/10 shadow-apple-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[980px] mx-auto px-6">
          <div className="flex items-center justify-between h-12">
            <Link
              href="#home"
              className="text-[#1d1d1f] font-semibold text-[14px] tracking-tight hover:opacity-80 transition-opacity duration-300"
            >
              Raja Ganapathi
            </Link>

            <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-[12px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors duration-300 font-normal"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <LanguageToggle />
              <Link
                href="#contact"
                className="text-[12px] bg-[#0071e3] text-white px-4 py-1.5 rounded-full hover:bg-[#0077ed] transition-all duration-300 font-normal"
              >
                Get Quote
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 -mr-2 text-[#1d1d1f] hover:opacity-60 transition-opacity"
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[#fbfbfd]"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-6 h-12 border-b border-[#d2d2d7]/30">
                <span className="text-[#1d1d1f] font-semibold text-[14px]">
                  Raja Ganapathi
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 -mr-2 text-[#1d1d1f] hover:opacity-60 transition-opacity"
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
                      className="block px-6 py-4 text-[28px] font-semibold text-[#1d1d1f] tracking-tight hover:text-[#0071e3] transition-colors border-b border-[#d2d2d7]/20"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="px-6 py-8 border-t border-[#d2d2d7]/30">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[14px] text-[#86868b]">Language</span>
                  <LanguageToggle />
                </div>
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center bg-[#0071e3] text-white py-4 rounded-xl text-[17px] font-medium hover:bg-[#0077ed] transition-colors"
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

