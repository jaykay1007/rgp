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
      className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors"
      aria-label={`Switch to ${language === "english" ? "Tamil" : "English"}`}
    >
      <Globe className="h-5 w-5" />
      <span className="text-sm font-medium">{language === "english" ? "தமிழ்" : "English"}</span>
    </button>
  )
}

