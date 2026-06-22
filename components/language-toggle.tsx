"use client"

import { Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "english" ? "tamil" : "english")
  }

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center gap-1.5 text-[12px] text-ink-800/80 hover:text-ink-800 transition-colors font-normal"
      aria-label={`Switch to ${language === "english" ? "Tamil" : "English"}`}
    >
      <Globe className="h-3.5 w-3.5" strokeWidth={1.5} />
      <span>{language === "english" ? "தமிழ்" : "English"}</span>
    </button>
  )
}
