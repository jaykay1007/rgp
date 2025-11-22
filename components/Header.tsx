"use client"

import Link from "next/link"
import { Printer, Menu, X, Phone, Mail, MapPin } from "lucide-react"
import LanguageToggle from "./language-toggle"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import TranslatedText from "@/components/translated-text"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { key: "nav.home", href: "#home" },
    { key: "nav.services", href: "#services" },
    { key: "nav.portfolio", href: "#portfolio" },
    { key: "nav.process", href: "#process" },
    { key: "nav.contact", href: "#contact" }
  ]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      {/* Top Bar - Only on Desktop */}
      <div className="hidden md:block border-b border-white/10 bg-gradient-to-r from-[#050b16] via-[#020713] to-[#050b16]">
        <div className="container flex items-center justify-between py-2 text-[0.65rem] uppercase tracking-[0.4em] text-white/60">
          <div className="flex items-center gap-6">
            <a href="tel:+919994466277" className="flex items-center gap-2 transition text-white/70 hover:text-white">
              <Phone className="h-3.5 w-3.5" />
              <span>9994466277</span>
            </a>
            <a href="mailto:rgpbvn@gmail.com" className="flex items-center gap-2 transition text-white/70 hover:text-white">
              <Mail className="h-3.5 w-3.5" />
              <span>rgpbvn@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" />
            <span>Bhavani · Erode · Komarapalayam</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 border-b border-white/10 transition-all duration-500 ease-out $${
          scrolled
            ? " bg-[#030712]/90 shadow-[0_30px_80px_rgba(1,6,18,0.65)] backdrop-blur-2xl"
            : " bg-transparent backdrop-blur"
        }`}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-white/03 to-transparent" />
          <div className="absolute inset-x-0 top-0 mx-auto h-px w-3/5 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </div>

        <div className="container flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary to-[#f5dca1] opacity-30 transition group-hover:opacity-70" />
              <Printer className="relative z-10 h-8 w-8 text-secondary" />
            </motion.div>
            <div>
              <span className="text-xl font-semibold text-white">Raja Ganapathi Press</span>
              <span className="hidden sm:block text-[0.6rem] uppercase tracking-[0.45em] text-white/60">Offset atelier</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.key}>
                  <Link 
                    href={item.href} 
                    className="group/link relative text-sm font-semibold tracking-[0.2em] uppercase text-white/60 transition hover:text-white"
                  >
                    <TranslatedText textKey={item.key} />
                    <span className="pointer-events-none absolute -bottom-2 left-0 h-[2px] w-0 bg-gradient-to-r from-secondary to-transparent transition-all group-hover/link:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageToggle />
            <Link
              href="tel:+919994466277"
              className="gold-border w-auto"
            >
              <span className="inline-flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary" />
                Call now
              </span>
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-2 text-sm font-semibold text-white/70 transition hover:border-white hover:text-white"
            >
              <TranslatedText textKey="nav.getQuote" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden rounded-full border border-white/20 p-2 text-white/80 transition hover:border-white hover:text-white"
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-white/10 bg-[#02040a]/95 backdrop-blur-2xl"
            >
              <nav className="container mx-auto px-4 py-4">
                <ul className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.key}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/70 transition hover:text-white"
                      >
                        <TranslatedText textKey={item.key} />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                
                {/* Mobile Contact Info */}
                <div className="mt-4 space-y-3 border-t border-white/10 pt-4 text-white/70">
                  <a 
                    href="tel:+919994466277" 
                    className="flex items-center gap-3 hover:text-white transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>9994466277</span>
                  </a>
                  <a 
                    href="mailto:rgpbvn@gmail.com" 
                    className="flex items-center gap-3 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>rgpbvn@gmail.com</span>
                  </a>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-1" />
                    <span className="text-sm">24 Palani Andavar Kovil Street, Bhavani (638301)</span>
                  </div>
                </div>
                
                {/* Mobile CTA */}
                <div className="mt-4 space-y-2">
                  <Link
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full rounded-full bg-gradient-to-r from-[#d9b351] to-[#f5dca1] px-6 py-3 text-center font-semibold text-black shadow-glow"
                  >
                    <TranslatedText textKey="nav.getQuote" />
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

