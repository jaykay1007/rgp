import { ImageResponse } from "next/og"

export const runtime = "edge"

// Crisp generated favicon (complements the legacy /favicon.ico fallback).
export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #00B5E2, #EC008C, #FFF200)",
          color: "#0a0a0b",
          fontSize: 22,
          fontWeight: 800,
          fontFamily: "sans-serif",
        }}
      >
        R
      </div>
    ),
    { ...size }
  )
}
