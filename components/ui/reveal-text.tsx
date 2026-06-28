"use client"

import { motion, useInView } from "framer-motion"
import { ReactNode, useRef } from "react"
import { cn } from "@/lib/utils"

interface RevealTextProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "div" | "span"
}

/** Splits children string into words and animates each word with a stagger. */
export default function RevealText({
  children,
  className,
  delay = 0,
  as = "h2",
}: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  const text = typeof children === "string" ? children : ""
  const words = text ? text.split(" ") : []

  if (!text) {
    const Tag = motion[as] as any
    return (
      <Tag
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
        className={cn(className)}
      >
        {children}
      </Tag>
    )
  }

  const Tag = as as any

  return (
    <Tag ref={ref} className={cn("inline-block", className)}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            initial={{ y: "110%" }}
            animate={inView ? { y: "0%" } : {}}
            transition={{
              duration: 0.9,
              delay: delay + i * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
          >
            {w}
            {i < words.length - 1 && " "}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
