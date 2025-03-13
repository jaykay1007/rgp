"use client"

import type React from "react"
import { useEffect, useRef } from "react"

const BubbleAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const bubbles: Bubble[] = []
    const numBubbles = 75 // Increased from 50

    class Bubble {
      private canvas: HTMLCanvasElement;
      x: number
      y: number
      size: number
      speedY: number
      color: string

      constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.x = Math.random() * this.canvas.width
        this.y = this.canvas.height + Math.random() * 100
        this.size = Math.random() * 12 + 4 // Increased size range
        this.speedY = Math.random() * 0.5 + 0.1
        this.color = `hsla(${Math.random() * 60 + 180}, 100%, 75%, ${Math.random() * 0.4 + 0.2})` // Blue-cyan hue range with increased opacity
      }

      update() {
        this.y -= this.speedY
        if (this.y + this.size < 0) {
          this.y = this.canvas.height + this.size
        }
      }

      draw() {
        if (!ctx) return
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size)
        gradient.addColorStop(0, this.color)
        gradient.addColorStop(
          1,
          `hsla(${Number.parseInt(this.color.split(",")[0].split("(")[1]) + 20}, 100%, 50%, 0.1)`,
        )

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        ctx.strokeStyle = "rgba(255, 255, 255, 0.3)"
        ctx.lineWidth = 0.5
        ctx.stroke()
      }
    }

    for (let i = 0; i < numBubbles; i++) {
      bubbles.push(new Bubble(canvas))
    }

    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      bubbles.forEach((bubble) => {
        bubble.update()
        bubble.draw()
      })
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}

export default BubbleAnimation
