import Link from "next/link"
import { Printer } from "lucide-react"
import LanguageToggle from "./language-toggle"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <Printer className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-primary">Raja Ganapathi Offset Printers</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {["Home", "Services", "Specialties", "Process", "Contact"].map((item) => (
              <li key={item}>
                <Link href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-primary transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <LanguageToggle />
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 font-medium text-white hover:bg-primary/90 transition-colors"
          >
            Get a Quote
          </Link>
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

