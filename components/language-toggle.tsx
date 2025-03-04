"use client"

import { useState } from "react"
import { Globe } from "lucide-react"

export default function LanguageToggle() {
  const [language, setLanguage] = useState("english")

  const toggleLanguage = () => {
    setLanguage(language === "english" ? "tamil" : "english")
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors"
    >
      <Globe className="h-5 w-5" />
      <span className="text-sm font-medium">{language === "english" ? "தமிழ்" : "English"}</span>
    </button>
  )
}

