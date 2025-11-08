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
      <div className="hidden md:block bg-gradient-to-r from-primary to-secondary text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919994466277" className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
              <Phone className="w-4 h-4" />
              <span>9994466277</span>
            </a>
            <a href="mailto:rgpbvn@gmail.com" className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
              <Mail className="w-4 h-4" />
              <span>rgpbvn@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Bhavani, Erode - Premium Offset Printing</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white shadow-md'
      }`}>
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-20 group-hover:opacity-30 transition-opacity" />
              <Printer className="h-8 w-8 text-primary relative z-10" />
            </motion.div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Raja Ganapathi Press
              </span>
              <span className="hidden sm:block text-xs text-gray-600">Offset Printing Experts</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.key}>
                  <Link 
                    href={item.href} 
                    className="relative text-gray-700 hover:text-primary transition-colors font-medium group"
                  >
                    <TranslatedText textKey={item.key} />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
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
              className="inline-flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">Call Now</span>
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:shadow-lg transition-all hover:scale-105"
            >
              <TranslatedText textKey="nav.getQuote" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
            aria-label="Toggle Menu"
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
              className="lg:hidden border-t border-gray-200 bg-white"
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
                        className="block py-3 px-4 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-all font-medium"
                      >
                        <TranslatedText textKey={item.key} />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                
                {/* Mobile Contact Info */}
                <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
                  <a 
                    href="tel:+919994466277" 
                    className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>9994466277</span>
                  </a>
                  <a 
                    href="mailto:rgpbvn@gmail.com" 
                    className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>rgpbvn@gmail.com</span>
                  </a>
                  <div className="flex items-start gap-3 text-gray-700">
                    <MapPin className="w-5 h-5 mt-1" />
                    <span className="text-sm">24 Palani Andavar Kovil Street, Bhavani (638301)</span>
                  </div>
                </div>
                
                {/* Mobile CTA */}
                <div className="mt-4 space-y-2">
                  <Link
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:shadow-lg transition-all"
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

