import type { MetadataRoute } from "next"

// Serves /manifest.webmanifest (the old layout pointed at a non-existent
// /manifest.json). Enables installability + a branded theme.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Raja Ganapathi Offset — Printing Press Bhavani",
    short_name: "RGP Offset",
    description:
      "Multicolour offset printing press in Bhavani, Erode since 1997 — wedding cards, visiting cards, calendars, sticker labels and more.",
    start_url: "/",
    display: "standalone",
    background_color: "#FBF8F2",
    theme_color: "#FBF8F2",
    lang: "en-IN",
    categories: ["business", "shopping"],
    icons: [
      { src: "/icon.png", sizes: "64x64", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  }
}
