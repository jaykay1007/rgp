"use client"

import { ReactNode } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function PageTurnTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <div style={{ perspective: 1200 }} className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ rotateX: 90, y: 40, opacity: 0 }}
          animate={{ rotateX: 0, y: 0, opacity: 1 }}
          exit={{ rotateX: -90, y: -40, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "bottom center", transformStyle: "preserve-3d" as any }}
          className="will-change-transform"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
