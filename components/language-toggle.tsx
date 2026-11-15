"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Globe } from "lucide-react"

// The Tamil version of the site lives at /ta (real Tamil content, linked to the
// English homepage with hreflang). The toggle is a plain link between the two,
// so it works without JavaScript and search engines can follow it.
export default function LanguageToggle() {
  const pathname = usePathname() ?? "/"
  const isTamil = pathname === "/ta" || pathname.startsWith("/ta/")

  return (
    <Link
      href={isTamil ? "/" : "/ta"}
      hrefLang={isTamil ? "en-IN" : "ta-IN"}
      lang={isTamil ? "en" : "ta"}
      className="inline-flex items-center gap-1.5 text-[12px] text-ink-800/80 hover:text-ink-800 transition-colors font-normal"
      aria-label={isTamil ? "Switch to English" : "தமிழில் பார்க்க (switch to Tamil)"}
    >
      <Globe className="h-3.5 w-3.5" strokeWidth={1.5} />
      <span>{isTamil ? "English" : "தமிழ்"}</span>
    </Link>
  )
}
