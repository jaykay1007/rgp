"use client"

import { useLanguage } from "@/contexts/language-context"

interface TranslatedTextProps {
  textKey: string
  className?: string
}

export default function TranslatedText({ textKey, className }: TranslatedTextProps) {
  const { t } = useLanguage()

  return <span className={className}>{t(textKey)}</span>
}

