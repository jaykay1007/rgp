"use client"

import { useState, useEffect } from "react"
import { CheckCircle2, CircleXIcon as XCircle2 } from "lucide-react"

export default function AvailabilityIndicator() {
  const [isAvailable, setIsAvailable] = useState(true)

  useEffect(() => {
    // Simulate checking availability (replace with actual logic)
    const interval = setInterval(() => {
      setIsAvailable(Math.random() < 0.8) // 80% chance of being available
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-2">
      {isAvailable ? (
        <CheckCircle2 className="h-4 w-4 text-green-500" />
      ) : (
        <XCircle2 className="h-4 w-4 text-red-500" />
      )}
      <span className="text-xs font-medium">{isAvailable ? "Available" : "Currently Unavailable"}</span>
    </div>
  )
}

