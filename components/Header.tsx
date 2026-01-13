"use client"

import Link from "next/link"
import { Printer } from "lucide-react"
import LanguageToggle from "./language-toggle"
import { useLanguage } from "@/contexts/language-context"

export default function Header() {
  const { t } = useLanguage()
  
  const navItems = [
    { key: "home", label: t("nav.home"), href: "#home" },
    { key: "services", label: t("nav.services"), href: "#services" },
    { key: "specialties", label: t("nav.specialties"), href: "#specialties" },
    { key: "process", label: t("nav.process"), href: "#process" },
    { key: "contact", label: t("nav.contact"), href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <Printer className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-primary">Raja Ganapathi Offset Printers</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.key}>
                <Link href={item.href} className="text-gray-700 hover:text-primary transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <LanguageToggle />
          <a
            href="https://wa.me/919994466277?text=Hi!%20I%27m%20interested%20in%20your%20printing%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center gap-2 rounded-md bg-green-500 hover:bg-green-600 px-6 py-2 font-medium text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Chat with Us
          </a>
        </div>
        <button className="block md:hidden text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}

