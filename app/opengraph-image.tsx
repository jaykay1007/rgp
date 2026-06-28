import { ImageResponse } from "next/og"

export const runtime = "edge"

// Default Open Graph + Twitter image for the whole site (children inherit it
// unless they set their own). Generated at the edge — always 200, never a 404.
export const alt = "Raja Ganapathi Offset — Premium Offset Printing Press in Bhavani, Erode"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0a0a0b 0%, #16161c 100%)",
          padding: "72px",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 46,
              height: 46,
              borderRadius: 999,
              background: "linear-gradient(135deg, #00B5E2, #EC008C, #FFF200)",
            }}
          />
          <div style={{ fontSize: 28, fontWeight: 600 }}>Raja Ganapathi Offset</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, maxWidth: 980 }}>
            Premium Offset Printing Press in Bhavani, Erode
          </div>
          <div style={{ marginTop: 24, fontSize: 30, color: "rgba(255,255,255,0.66)", maxWidth: 900 }}>
            Wedding cards · Visiting cards · Brochures · Packaging — since 1997
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", height: 14, width: 360, borderRadius: 999, overflow: "hidden" }}>
            <div style={{ flex: 1, background: "#00B5E2" }} />
            <div style={{ flex: 1, background: "#EC008C" }} />
            <div style={{ flex: 1, background: "#FFF200" }} />
            <div style={{ flex: 1, background: "#3a3a3c" }} />
          </div>
          <div style={{ fontSize: 26, color: "rgba(255,255,255,0.82)" }}>+91 99944 66277</div>
        </div>
      </div>
    ),
    { ...size }
  )
}
