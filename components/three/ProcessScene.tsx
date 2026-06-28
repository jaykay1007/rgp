"use client"

import { Suspense, useEffect, useMemo, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import * as THREE from "three"
import type { MotionValue } from "framer-motion"

/* Soft radial dot texture so each particle reads as a printed ink dot */
function makeDotTexture() {
  const size = 64
  const canvas = document.createElement("canvas")
  canvas.width = canvas.height = size
  const ctx = canvas.getContext("2d")!
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  g.addColorStop(0, "rgba(255,255,255,1)")
  g.addColorStop(0.35, "rgba(255,255,255,0.7)")
  g.addColorStop(1, "rgba(255,255,255,0)")
  ctx.fillStyle = g
  ctx.fillRect(0, 0, size, size)
  const tex = new THREE.CanvasTexture(canvas)
  tex.needsUpdate = true
  return tex
}

/* A wide CMYK halftone field that drifts and parallaxes with scroll progress */
function InkField({ progress }: { progress: MotionValue<number> }) {
  const ref = useRef<THREE.Points>(null!)
  const tex = useMemo(makeDotTexture, [])

  const { positions, colors, seeds } = useMemo(() => {
    const COUNT = 620
    const positions = new Float32Array(COUNT * 3)
    const colors = new Float32Array(COUNT * 3)
    const seeds = new Float32Array(COUNT)
    const palette = [
      new THREE.Color("#00B5E2"), // cyan
      new THREE.Color("#EC008C"), // magenta
      new THREE.Color("#FFF200"), // yellow
      new THREE.Color("#0071e3"), // accent blue
      new THREE.Color("#ffffff"), // paper white sparkle
    ]
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 26
      positions[i * 3 + 1] = (Math.random() - 0.5) * 13
      positions[i * 3 + 2] = (Math.random() - 0.5) * 9
      const c = palette[Math.floor(Math.random() * palette.length)]
      colors[i * 3] = c.r
      colors[i * 3 + 1] = c.g
      colors[i * 3 + 2] = c.b
      seeds[i] = Math.random() * Math.PI * 2
    }
    return { positions, colors, seeds }
  }, [])

  const base = useMemo(() => positions.slice(), [positions])

  useFrame((state) => {
    const points = ref.current
    if (!points) return
    const t = state.clock.getElapsedTime()
    const p = progress.get()

    // Gentle living drift on the y axis
    const attr = points.geometry.attributes.position as THREE.BufferAttribute
    for (let i = 0; i < seeds.length; i++) {
      const iy = i * 3 + 1
      attr.array[iy] = base[iy] + Math.sin(t * 0.5 + seeds[i]) * 0.18
    }
    attr.needsUpdate = true

    // Parallax: the whole field eases sideways as you scroll the steps
    points.position.x = THREE.MathUtils.lerp(points.position.x, 4 - p * 8, 0.06)
    points.rotation.z = t * 0.015
    points.rotation.y = Math.sin(t * 0.1) * 0.08 + p * 0.35
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.2}
        map={tex}
        vertexColors
        transparent
        opacity={0.85}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  )
}

/* A glossy CMYK ink bead — echoes the hero, floats and parallaxes on scroll */
function Bead({
  position,
  color,
  scale,
  parallax,
  progress,
}: {
  position: [number, number, number]
  color: string
  scale: number
  parallax: number
  progress: MotionValue<number>
}) {
  const ref = useRef<THREE.Mesh>(null!)
  useFrame((state) => {
    const m = ref.current
    if (!m) return
    const t = state.clock.getElapsedTime()
    const p = progress.get()
    m.rotation.x = t * 0.25
    m.rotation.y = t * 0.18
    m.position.x = THREE.MathUtils.lerp(m.position.x, position[0] + p * parallax, 0.05)
  })
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.1}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 3]} />
        <meshStandardMaterial
          color={color}
          roughness={0.18}
          metalness={0.55}
          emissive={color}
          emissiveIntensity={0.18}
        />
      </mesh>
    </Float>
  )
}

function Scene({ progress }: { progress: MotionValue<number> }) {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 5, 6]} intensity={1.1} />
      <pointLight position={[-5, -2, 3]} intensity={0.6} color="#00B5E2" />
      <pointLight position={[5, 3, 2]} intensity={0.4} color="#EC008C" />

      <InkField progress={progress} />

      <Bead position={[-5.2, 1.6, -1]} color="#00B5E2" scale={0.5} parallax={3} progress={progress} />
      <Bead position={[5, -1.4, 0.5]} color="#EC008C" scale={0.72} parallax={-3.4} progress={progress} />
      <Bead position={[2, 2.2, -2]} color="#FFF200" scale={0.4} parallax={2.2} progress={progress} />
      <Bead position={[-2.6, -2, 1]} color="#0071e3" scale={0.34} parallax={-1.8} progress={progress} />
    </>
  )
}

export default function ProcessScene({ progress }: { progress: MotionValue<number> }) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  // Only render WebGL while the section is near the viewport (perf + battery)
  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), {
      rootMargin: "200px",
    })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={wrapRef} className="absolute inset-0" aria-hidden="true">
      <Canvas
        frameloop={active ? "always" : "never"}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 9.5], fov: 46 }}
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      >
        <Suspense fallback={null}>
          <Scene progress={progress} />
        </Suspense>
      </Canvas>
    </div>
  )
}
