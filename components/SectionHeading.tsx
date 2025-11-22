"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow?: string
  eyebrowIcon?: ReactNode
  title: ReactNode
  description?: ReactNode
  align?: "left" | "center"
  className?: string
}

export default function SectionHeading({
  eyebrow,
  eyebrowIcon,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-5 text-white",
        align === "center" ? "mx-auto max-w-4xl text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="glass-pill inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-white/70">
          {eyebrowIcon ?? <span className="h-2 w-2 rounded-full bg-secondary" />}
          {eyebrow}
        </span>
      )}
      <div className={cn("space-y-4", align === "center" ? "text-balance" : "text-left")}>{title}</div>
      {description && (
        <p className={cn("text-base text-white/70", align === "center" ? "mx-auto max-w-3xl" : "max-w-2xl")}>{description}</p>
      )}
    </div>
  )
}
