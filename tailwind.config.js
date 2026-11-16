/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#131C36",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#F3EDE1",
          foreground: "#131C36",
        },
        // Brand accent. Royal blue on paper, gold on dark ink surfaces. The
        // values live in CSS variables (app/globals.css) so they flip by scope.
        accent: {
          DEFAULT: "rgb(var(--accent-rgb) / <alpha-value>)",
          foreground: "#ffffff",
          hover: "rgb(var(--accent-hover-rgb) / <alpha-value>)",
        },
        gold: {
          light: "#E9CE8C",
          DEFAULT: "#C9A24B",
          dark: "#8F6A1A",
        },
        paper: {
          DEFAULT: "#FBF8F2",
          deep: "#F3EDE1",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#F3EDE1",
          foreground: "#7A7264",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Paper-to-ink scale: warm ivory stock at the light end, navy press
        // ink (from the logo) at the dark end.
        ink: {
          50: "#FBF8F2",
          100: "#F3EDE1",
          200: "#E7DFCF",
          300: "#D5CAB5",
          400: "#A39A89",
          500: "#7A7264",
          600: "#5C5548",
          700: "#343A52",
          800: "#131C36",
          900: "#0B1226",
        },

        cmyk: {
          cyan: "#00B5E2",
          magenta: "#EC008C",
          yellow: "#FFF200",
          key: "#0A0A0B",
        },
        apple: {
          blue: "#0071e3",
          gray: {
            100: "#fbfbfd",
            200: "#f5f5f7",
            300: "#d2d2d7",
            400: "#86868b",
            500: "#6e6e73",
            600: "#1d1d1f",
          },
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "var(--font-tamil)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: [
          "var(--font-display)",
          "var(--font-tamil-serif)",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "serif",
        ],
        mono: [
          "SF Mono",
          "JetBrains Mono",
          "ui-monospace",
          "Menlo",
          "Monaco",
          "monospace",
        ],
      },
      fontSize: {
        "hero-xl": ["clamp(56px, 10vw, 140px)", { lineHeight: "0.95", letterSpacing: "-0.045em", fontWeight: "700" }],
        "hero-lg": ["clamp(48px, 8vw, 112px)", { lineHeight: "1.0", letterSpacing: "-0.04em", fontWeight: "700" }],
        "display-xl": ["96px", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display-lg": ["80px", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display-md": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" }],
        "display-sm": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" }],
        "headline-lg": ["40px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "headline-md": ["32px", { lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "600" }],
        "headline-sm": ["24px", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-lg": ["21px", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "400" }],
        "body-md": ["17px", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "400" }],
        "caption": ["12px", { lineHeight: "1.4", letterSpacing: "0", fontWeight: "400" }],
        "eyebrow": ["11px", { lineHeight: "1.4", letterSpacing: "0.12em", fontWeight: "600" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        // Soft, warm, layered: a sheet resting on a table, not a floating UI card.
        "apple-sm": "0 1px 2px rgba(19, 28, 54, 0.05), 0 1px 1px rgba(19, 28, 54, 0.03)",
        "apple-md": "0 1px 2px rgba(19, 28, 54, 0.05), 0 6px 16px -4px rgba(19, 28, 54, 0.08)",
        "apple-lg": "0 2px 4px rgba(19, 28, 54, 0.05), 0 14px 32px -8px rgba(19, 28, 54, 0.12)",
        "apple-xl": "0 2px 6px rgba(19, 28, 54, 0.06), 0 24px 48px -12px rgba(19, 28, 54, 0.16)",
        "apple-2xl": "0 4px 8px rgba(19, 28, 54, 0.06), 0 40px 80px -20px rgba(19, 28, 54, 0.22)",
        "glass": "0 8px 32px rgba(0, 0, 0, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.1)",
        "inner-glow": "inset 0 1px 0 0 rgba(255, 255, 255, 0.08)",
        "ink-glow": "0 0 80px rgba(201, 162, 75, 0.28)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
        "1200": "1200ms",
      },
      transitionTimingFunction: {
        "apple": "cubic-bezier(0.25, 0.1, 0.25, 1)",
        "apple-bounce": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "apple-out": "cubic-bezier(0.16, 1, 0.3, 1)",
        "swift": "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "ink-blue": "linear-gradient(135deg, #1F3F96 0%, #3559B8 55%, #6C8BDD 100%)",
        "ink-magenta": "linear-gradient(135deg, #ec008c 0%, #ff4fab 100%)",
        "ink-rainbow": "linear-gradient(135deg, #00B5E2 0%, #EC008C 33%, #FFF200 66%, #0A0A0B 100%)",
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-up": {
          from: { opacity: 0, transform: "translateY(30px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        "scale-in": {
          from: { opacity: 0, transform: "scale(0.95)" },
          to: { opacity: 1, transform: "scale(1)" },
        },
        "slide-up": {
          from: { opacity: 0, transform: "translateY(100%)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.95)", opacity: "1" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards",
        "fade-in": "fade-in 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) forwards",
        "scale-in": "scale-in 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) forwards",
        "slide-up": "slide-up 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) forwards",
        "float": "float 6s ease-in-out infinite",
        "marquee": "marquee 40s linear infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "spin-slow": "spin-slow 18s linear infinite",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.65, 0, 0.35, 1) infinite",
        "gradient-x": "gradient-x 6s ease infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
