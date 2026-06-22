"use client"

import { forwardRef, ReactNode, useRef, useState, MouseEvent } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  strength?: number
  as?: "button" | "a" | "div"
  href?: string
  onClick?: () => void
  ariaLabel?: string
}

const MagneticButton = forwardRef<HTMLDivElement, MagneticButtonProps>(
  ({ children, className, strength = 0.35, as = "div", href, onClick, ariaLabel }, _ref) => {
    const ref = useRef<HTMLDivElement>(null)
    const [pos, setPos] = useState({ x: 0, y: 0 })

    const handleMove = (e: MouseEvent<HTMLDivElement>) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      setPos({ x: x * strength, y: y * strength })
    }

    const reset = () => setPos({ x: 0, y: 0 })

    const inner = (
      <motion.div
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: "spring", stiffness: 260, damping: 20, mass: 0.6 }}
        className={cn("inline-flex items-center justify-center", className)}
      >
        {children}
      </motion.div>
    )

    if (as === "a" && href) {
      return (
        <a
          href={href}
          aria-label={ariaLabel}
          ref={ref as unknown as React.RefObject<HTMLAnchorElement>}
          onMouseMove={handleMove}
          onMouseLeave={reset}
          className="inline-block"
        >
          {inner}
        </a>
      )
    }

    return (
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        onClick={onClick}
        role={onClick ? "button" : undefined}
        aria-label={ariaLabel}
        className="inline-block cursor-pointer"
      >
        {inner}
      </div>
    )
  }
)

MagneticButton.displayName = "MagneticButton"

export default MagneticButton
