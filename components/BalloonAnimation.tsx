"use client"

import type React from "react"
import { useEffect, useRef } from "react"

const BalloonAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const balloons: Balloon[] = []

    class Balloon {
      x: number
      y: number
      radius: number
      color: string
      speed: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = canvas.height + Math.random() * 50
        this.radius = Math.random() * 20 + 10
        this.color = `hsl(${Math.random() * 360}, 70%, 50%)`
        this.speed = Math.random() * 2 + 1
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.closePath()

        // Draw string
        ctx.beginPath()
        ctx.moveTo(this.x, this.y + this.radius)
        ctx.lineTo(this.x, this.y + this.radius + 20)
        ctx.strokeStyle = "rgba(0,0,0,0.5)"
        ctx.stroke()
        ctx.closePath()
      }

      update() {
        this.y -= this.speed
        if (this.y + this.radius < 0) {
          this.y = canvas.height + this.radius
        }
      }
    }

    for (let i = 0; i < 15; i++) {
      balloons.push(new Balloon())
    }

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      balloons.forEach((balloon) => {
        balloon.update()
        balloon.draw()
      })
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      // Cleanup
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
}

export default BalloonAnimation

