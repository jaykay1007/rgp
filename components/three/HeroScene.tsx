"use client"

import { Suspense, useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import {
  Environment,
  Float,
  MeshTransmissionMaterial,
  PerspectiveCamera,
  Sparkles,
} from "@react-three/drei"
import * as THREE from "three"

/** A single paper sheet plane that gently waves */
function PaperSheet({
  position,
  rotation,
  color,
  delay = 0,
  scale = 1,
}: {
  position: [number, number, number]
  rotation: [number, number, number]
  color: string
  delay?: number
  scale?: number
}) {
  const mesh = useRef<THREE.Mesh>(null!)
  const group = useRef<THREE.Group>(null!)

  useFrame((state) => {
    const t = state.clock.getElapsedTime() + delay
    if (group.current) {
      group.current.rotation.x = rotation[0] + Math.sin(t * 0.4) * 0.06
      group.current.rotation.y = rotation[1] + Math.cos(t * 0.3) * 0.08
      group.current.position.y = position[1] + Math.sin(t * 0.6) * 0.08
    }
    if (mesh.current) {
      const positions = mesh.current.geometry.attributes.position as THREE.BufferAttribute
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i)
        const y = positions.getY(i)
        const wave = Math.sin(x * 1.2 + t * 1.5) * 0.04 + Math.cos(y * 1.6 + t * 1.2) * 0.03
        positions.setZ(i, wave)
      }
      positions.needsUpdate = true
      mesh.current.geometry.computeVertexNormals()
    }
  })

  return (
    <group ref={group} position={position} rotation={rotation} scale={scale}>
      <mesh ref={mesh} castShadow receiveShadow>
        <planeGeometry args={[1.6, 2.2, 36, 48]} />
        <meshStandardMaterial
          color={color}
          roughness={0.55}
          metalness={0.08}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* Subtle printed mark on the paper */}
      <mesh position={[0, 0.2, 0.001]}>
        <planeGeometry args={[1.2, 0.05]} />
        <meshBasicMaterial color="#0a0a0b" opacity={0.55} transparent />
      </mesh>
      <mesh position={[0, 0.05, 0.001]}>
        <planeGeometry args={[1.0, 0.04]} />
        <meshBasicMaterial color="#0a0a0b" opacity={0.35} transparent />
      </mesh>
      <mesh position={[0, -0.1, 0.001]}>
        <planeGeometry args={[1.3, 0.04]} />
        <meshBasicMaterial color="#0a0a0b" opacity={0.35} transparent />
      </mesh>
      <mesh position={[-0.3, -0.5, 0.001]}>
        <planeGeometry args={[0.5, 0.18]} />
        <meshBasicMaterial color="#0071e3" opacity={0.85} transparent />
      </mesh>
    </group>
  )
}

/** CMYK ink droplet using transmission material for a liquid glass feel */
function InkDrop({
  position,
  color,
  scale = 0.4,
}: {
  position: [number, number, number]
  color: string
  scale?: number
}) {
  const ref = useRef<THREE.Mesh>(null!)
  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.getElapsedTime()
    ref.current.rotation.y = t * 0.4
    ref.current.rotation.x = Math.sin(t * 0.5) * 0.3
  })
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} position={position} scale={scale} castShadow>
        <icosahedronGeometry args={[1, 4]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.6}
          roughness={0.05}
          chromaticAberration={0.06}
          anisotropy={0.3}
          distortion={0.4}
          distortionScale={0.2}
          temporalDistortion={0.1}
          color={color}
        />
      </mesh>
    </Float>
  )
}

/** Spinning CMYK halftone disc behind the composition */
function HalftoneDisc() {
  const ref = useRef<THREE.Group>(null!)
  const dots = useMemo(() => {
    const arr: { pos: [number, number, number]; color: string; size: number }[] = []
    const colors = ["#00B5E2", "#EC008C", "#FFF200", "#0A0A0B"]
    for (let r = 0.5; r < 5; r += 0.55) {
      const count = Math.floor(r * 14)
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2
        const jitter = (Math.sin(r * i) * 0.5 + 0.5) * 0.06
        arr.push({
          pos: [Math.cos(angle) * r, Math.sin(angle) * r, 0],
          color: colors[Math.floor((r + i) % 4)],
          size: 0.06 + jitter,
        })
      }
    }
    return arr
  }, [])
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.getElapsedTime() * 0.05
    }
  })
  return (
    <group ref={ref} position={[0, 0, -4]}>
      {dots.map((d, i) => (
        <mesh key={i} position={d.pos}>
          <circleGeometry args={[d.size, 12]} />
          <meshBasicMaterial color={d.color} transparent opacity={0.18} />
        </mesh>
      ))}
    </group>
  )
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5.4]} fov={36} />
      <ambientLight intensity={0.45} />
      <directionalLight
        position={[5, 6, 5]}
        intensity={1.6}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight position={[-6, -2, 4]} intensity={0.4} color="#42a1ec" />
      <pointLight position={[3, 2, 3]} intensity={0.6} color="#ec008c" />

      <HalftoneDisc />

      {/* Layered paper sheets */}
      <PaperSheet
        position={[-1.7, 0.4, -0.4]}
        rotation={[0.18, -0.42, 0.18]}
        color="#ffffff"
        delay={0}
        scale={1.05}
      />
      <PaperSheet
        position={[0, -0.1, 0]}
        rotation={[-0.06, 0.05, -0.04]}
        color="#fbfbfd"
        delay={0.8}
        scale={1.2}
      />
      <PaperSheet
        position={[1.6, 0.5, -0.5]}
        rotation={[0.18, 0.5, -0.2]}
        color="#f5f5f7"
        delay={1.6}
        scale={1.0}
      />

      {/* CMYK ink droplets floating around */}
      <InkDrop position={[-2.4, -0.8, 1.5]} color="#00B5E2" scale={0.45} />
      <InkDrop position={[2.6, -0.4, 1.0]} color="#EC008C" scale={0.55} />
      <InkDrop position={[0.6, 1.5, 0.6]} color="#FFF200" scale={0.35} />
      <InkDrop position={[-1.0, 1.6, 1.6]} color="#0A0A0B" scale={0.28} />

      <Sparkles
        count={48}
        scale={[8, 5, 4]}
        size={1.6}
        speed={0.4}
        opacity={0.6}
        color="#0071e3"
      />

      <Environment preset="city" />
    </>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      gl={{
        antialias: true,
        powerPreference: "high-performance",
        alpha: true,
      }}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
      }}
      shadows
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}
