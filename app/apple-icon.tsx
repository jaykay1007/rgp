import { ImageResponse } from "next/og"

export const runtime = "edge"

// Replaces the missing /apple-touch-icon.png (was a 404).
export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
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
          fontSize: 110,
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
