"use client"

import { useRef, useState, useCallback, useEffect } from "react"
import type { MotionValue } from "framer-motion"
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { CreditCard, Heart, FileText, ShoppingBag, ImagePlus, MessageCircle, ArrowUpRight, X } from "lucide-react"

/* ------------------------------------------------------------------ *
 * Product templates — each renders its own layout in the live preview
 * ------------------------------------------------------------------ */
type ProductId = "visiting-card" | "wedding-invitation" | "letterhead" | "tote-bag"

type Product = {
  id: ProductId
  label: string
  icon: typeof CreditCard
  serviceSlug: string
  /** aspect + max-width for the preview frame */
  frame: string
  /** field guidance */
  nameLabel: string
  line2Label: string
  namePlaceholder: string
  line2Placeholder: string
  /** headline font treatment */
  nameClass: string
  nameSize: string
}

const products: Product[] = [
  {
    id: "visiting-card",
    label: "Visiting card",
    icon: CreditCard,
    serviceSlug: "visiting-cards",
    frame: "aspect-[7/4] max-w-[560px]",
    nameLabel: "Name",
    line2Label: "Title · phone · address",
    namePlaceholder: "Your Name Here",
    line2Placeholder: "Founder · +91 99944 66277",
    nameClass: "font-display font-bold tracking-tight",
    nameSize: "text-[clamp(24px,4.4vw,42px)]",
  },
  {
    id: "wedding-invitation",
    label: "Wedding invite",
    icon: Heart,
    serviceSlug: "wedding-invitations",
    frame: "aspect-[3/4] max-w-[360px]",
    nameLabel: "Couple's names",
    line2Label: "Wedding date & venue",
    namePlaceholder: "Aarav & Priya",
    line2Placeholder: "12 October 2024 · Bhavani",
    nameClass: "font-display font-semibold italic tracking-tight",
    nameSize: "text-[clamp(28px,4vw,40px)]",
  },
  {
    id: "letterhead",
    label: "Letterhead",
    icon: FileText,
    serviceSlug: "business-stationery",
    frame: "aspect-[3/4] max-w-[360px]",
    nameLabel: "Company name",
    line2Label: "Address line",
    namePlaceholder: "Your Company",
    line2Placeholder: "24 Palani Andavar Kovil St, Bhavani",
    nameClass: "font-display font-bold tracking-tight",
    nameSize: "text-[clamp(20px,3vw,30px)]",
  },
  {
    id: "tote-bag",
    label: "Tote bag",
    icon: ShoppingBag,
    serviceSlug: "bag-printing",
    frame: "aspect-[5/6] max-w-[360px]",
    nameLabel: "Brand / text",
    line2Label: "Tagline (optional)",
    namePlaceholder: "YOUR BRAND",
    line2Placeholder: "Carry it proud",
    nameClass: "font-display font-bold tracking-[0.02em]",
    nameSize: "text-[clamp(24px,3.6vw,36px)]",
  },
]

/* ------------------------------------------------------------------ *
 * Finishes — headline treatments tuned for dark vs light surfaces
 * ------------------------------------------------------------------ */
type Finish = {
  id: string
  label: string
  blurb: string
  onDark: string
  onLight: string
  gloss?: boolean
}

const finishes: Finish[] = [
  {
    id: "gold-foil",
    label: "Gold foil",
    blurb: "Metallic foil pressed hot into the paper — catches light from every angle.",
    onDark: "bg-gradient-to-br from-amber-200 via-yellow-500 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(120,80,0,0.4)]",
    onLight: "bg-gradient-to-br from-amber-500 via-yellow-600 to-amber-700 bg-clip-text text-transparent drop-shadow-[0_1px_0_rgba(255,255,255,0.5)]",
  },
  {
    id: "silver-foil",
    label: "Silver foil",
    blurb: "Cool chrome shine on dark stock — the classic premium visiting-card look.",
    onDark: "bg-gradient-to-br from-slate-100 via-slate-400 to-slate-200 bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]",
    onLight: "bg-gradient-to-br from-slate-400 via-slate-600 to-slate-400 bg-clip-text text-transparent drop-shadow-[0_1px_0_rgba(255,255,255,0.6)]",
  },
  {
    id: "emboss",
    label: "Blind emboss",
    blurb: "No ink at all — the design is raised out of the sheet so you read it with your fingertips.",
    onDark: "text-transparent bg-clip-text bg-gradient-to-b from-white/25 to-black/10 [text-shadow:0_1px_1px_rgba(255,255,255,0.35),0_-1px_1px_rgba(0,0,0,0.35)]",
    onLight: "text-transparent bg-clip-text bg-gradient-to-b from-black/15 to-white/50 [text-shadow:0_1px_1px_rgba(255,255,255,0.75),0_-1px_1px_rgba(0,0,0,0.22)]",
  },
  {
    id: "spot-uv",
    label: "Spot UV",
    blurb: "A glass-like gloss printed only where you want it — subtle until the light hits.",
    onDark: "text-white/90",
    onLight: "text-ink-800/90",
    gloss: true,
  },
  {
    id: "letterpress",
    label: "Letterpress",
    blurb: "Type pressed deep into thick cotton paper — a finish you can feel.",
    onDark: "text-white/85 [text-shadow:inset_0_2px_2px_rgba(0,0,0,0.6),0_1px_0_rgba(255,255,255,0.15)]",
    onLight: "text-ink-800/85 [text-shadow:0_1px_0_rgba(255,255,255,0.6),0_-1px_1px_rgba(0,0,0,0.28)]",
  },
]

/* ------------------------------------------------------------------ *
 * Stocks — surface colour + whether it reads as a light surface
 * ------------------------------------------------------------------ */
const stocks = [
  { id: "onyx", label: "Onyx black", card: "bg-gradient-to-br from-ink-800 via-ink-900 to-black", grain: "opacity-[0.12]", light: false, mono: "bg-ink-900", monoText: "text-white", sub: "text-white/45" },
  { id: "ivory", label: "Ivory cotton", card: "bg-gradient-to-br from-[#f4efe6] via-[#ece5d8] to-[#ddd3c0]", grain: "opacity-[0.18]", light: true, mono: "bg-[#efe8da]", monoText: "text-ink-800", sub: "text-ink-500" },
  { id: "kraft", label: "Natural kraft", card: "bg-gradient-to-br from-[#dcc7a4] via-[#cdb389] to-[#bd9f74]", grain: "opacity-[0.22]", light: true, mono: "bg-[#e7d6b6]", monoText: "text-ink-800", sub: "text-ink-700/70" },
] as const

type Stock = (typeof stocks)[number]

function headlineClass(finish: Finish, isLight: boolean) {
  return isLight ? finish.onLight : finish.onDark
}

export default function FinishLab() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const [product, setProduct] = useState<Product>(products[0])
  const [finish, setFinish] = useState<Finish>(finishes[0])
  const [stock, setStock] = useState<Stock>(stocks[0])

  // Personalisation — everything stays in the browser, nothing is uploaded.
  const [name, setName] = useState("")
  const [line2, setLine2] = useState("")
  const [logo, setLogo] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const onLogoChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !file.type.startsWith("image/")) return
    setLogo((prev) => {
      if (prev) URL.revokeObjectURL(prev)
      return URL.createObjectURL(file)
    })
  }, [])

  const clearLogo = useCallback(() => {
    setLogo((prev) => {
      if (prev) URL.revokeObjectURL(prev)
      return null
    })
    if (fileInputRef.current) fileInputRef.current.value = ""
  }, [])

  // Revoke the last object URL on unmount (ref avoids a stale closure).
  const logoRef = useRef<string | null>(null)
  logoRef.current = logo
  useEffect(() => {
    return () => {
      if (logoRef.current) URL.revokeObjectURL(logoRef.current)
    }
  }, [])

  // Pointer-driven tilt + sheen
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rx = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 200, damping: 25 })
  const ry = useSpring(useTransform(mx, [0, 1], [-10, 10]), { stiffness: 200, damping: 25 })
  const sheenX = useTransform(mx, [0, 1], ["-30%", "130%"])

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const r = e.currentTarget.getBoundingClientRect()
      mx.set((e.clientX - r.left) / r.width)
      my.set((e.clientY - r.top) / r.height)
    },
    [mx, my]
  )
  const onPointerLeave = useCallback(() => {
    mx.set(0.5)
    my.set(0.5)
  }, [mx, my])

  const displayName = name.trim() || product.namePlaceholder
  const displayLine2 = line2.trim() || product.line2Placeholder

  const whatsapp = `https://wa.me/919994466277?text=${encodeURIComponent(
    [
      `Hi Raja Ganapathi Offset! I designed a ${product.label.toLowerCase()} in your Finish Lab:`,
      `• Finish: ${finish.label}`,
      `• Stock: ${stock.label}`,
      `• Text: "${displayName}"${displayLine2 ? ` / "${displayLine2}"` : ""}`,
      logo ? "• I have a logo/artwork to share." : null,
      "Can you share a quote?",
    ]
      .filter(Boolean)
      .join("\n")
  )}`

  return (
    <section
      ref={sectionRef}
      id="finish-lab"
      className="relative py-32 md:py-40 bg-ink-900 overflow-hidden"
      aria-label="Interactive print designer — try products, finishes and stocks with your own text and logo"
    >
      <div aria-hidden="true" className="absolute inset-0 press-grid opacity-20" />
      <div aria-hidden="true" className="absolute -top-40 -right-40 w-[560px] h-[560px] bg-cmyk-magenta/10 ink-dot" />
      <div aria-hidden="true" className="absolute -bottom-40 -left-40 w-[560px] h-[560px] bg-cmyk-cyan/10 ink-dot" />

      <div className="container-apple-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="text-eyebrow uppercase text-accent mb-5">The Finish Lab</p>
          <h2 className="font-display font-semibold text-white tracking-[-0.025em] text-[clamp(36px,5vw,64px)] leading-[1.05] text-balance">
            Feel the finish,
            <br />
            <span className="text-gradient-pearl">before we press it.</span>
          </h2>
          <p className="mt-6 text-[clamp(16px,1.3vw,19px)] text-white/60 leading-[1.55]">
            Pick a product, add your own name, details and logo, then try the finishes and
            papers we craft on the press floor. Move your cursor over the preview to watch
            the light play — and send your design straight to our team.
          </p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            {/* Product */}
            <p className="text-[11px] uppercase tracking-widest text-white/40 mb-3">Product</p>
            <div className="grid grid-cols-2 gap-2" role="group" aria-label="Choose a product to design">
              {products.map((p) => {
                const Icon = p.icon
                const active = product.id === p.id
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setProduct(p)}
                    aria-pressed={active}
                    className={`flex items-center gap-2.5 rounded-2xl border px-4 py-3 text-[14px] font-medium transition-all duration-300 ${
                      active
                        ? "bg-white text-ink-900 border-white"
                        : "bg-white/5 text-white/70 border-white/15 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" strokeWidth={1.9} />
                    {p.label}
                  </button>
                )
              })}
            </div>

            {/* Finish */}
            <p className="text-[11px] uppercase tracking-widest text-white/40 mt-7 mb-3">Finish</p>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Choose a print finish">
              {finishes.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFinish(f)}
                  aria-pressed={finish.id === f.id}
                  className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-300 border ${
                    finish.id === f.id
                      ? "bg-white text-ink-900 border-white"
                      : "bg-white/5 text-white/70 border-white/15 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Stock */}
            <p className="text-[11px] uppercase tracking-widest text-white/40 mt-7 mb-3">Paper / material</p>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Choose a paper or material">
              {stocks.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setStock(s)}
                  aria-pressed={stock.id === s.id}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-300 border ${
                    stock.id === s.id
                      ? "bg-white text-ink-900 border-white"
                      : "bg-white/5 text-white/70 border-white/15 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`inline-block w-3 h-3 rounded-full border border-black/10 ${s.card}`}
                  />
                  {s.label}
                </button>
              ))}
            </div>

            {/* Personalise */}
            <p className="text-[11px] uppercase tracking-widest text-white/40 mt-7 mb-3">Make it yours</p>
            <div className="space-y-2.5">
              <label className="block">
                <span className="mb-1 block text-[12px] text-white/45">{product.nameLabel}</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={product.namePlaceholder}
                  maxLength={30}
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-[14px] text-white placeholder:text-white/30 outline-none transition-colors focus:border-accent/70 focus:bg-white/10"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-[12px] text-white/45">{product.line2Label}</span>
                <input
                  type="text"
                  value={line2}
                  onChange={(e) => setLine2(e.target.value)}
                  placeholder={product.line2Placeholder}
                  maxLength={48}
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-[14px] text-white placeholder:text-white/30 outline-none transition-colors focus:border-accent/70 focus:bg-white/10"
                />
              </label>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <input
                  ref={fileInputRef}
                  id="finish-lab-logo"
                  type="file"
                  accept="image/*"
                  onChange={onLogoChange}
                  className="sr-only"
                />
                <label
                  htmlFor="finish-lab-logo"
                  className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-[13px] font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <ImagePlus className="w-4 h-4" strokeWidth={1.75} />
                  {logo ? "Change logo / photo" : "Add logo or photo"}
                </label>
                {logo && (
                  <button
                    type="button"
                    onClick={clearLogo}
                    className="inline-flex items-center gap-1.5 rounded-xl px-3 py-2.5 text-[13px] text-white/50 transition-colors hover:text-white"
                    aria-label="Remove logo"
                  >
                    <X className="w-3.5 h-3.5" /> Remove
                  </button>
                )}
              </div>
              <p className="text-[11px] text-white/35">
                Your text and image stay on your device — nothing is uploaded until you message us.
              </p>
            </div>

            <motion.p
              key={finish.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-7 text-[14px] text-white/55 leading-relaxed border-l-2 border-accent/60 pl-4"
            >
              {finish.blurb}
            </motion.p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 text-white px-7 py-3.5 rounded-full text-[15px] font-medium hover:bg-emerald-600 transition-all duration-300 hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={2} />
                Send my {product.label.toLowerCase()} design
              </a>
              <a
                href={`/services/${product.serviceSlug}`}
                className="inline-flex items-center gap-1.5 text-white/70 text-[14px] font-medium hover:text-white transition-colors"
              >
                Explore {product.label.toLowerCase()}s
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Live preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-center justify-center [perspective:1200px] py-4"
          >
            <motion.div
              key={product.id}
              onPointerMove={onPointerMove}
              onPointerLeave={onPointerLeave}
              style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
              className={`relative w-full ${product.frame} cursor-pointer select-none touch-none`}
              aria-label={`Preview: ${product.label} with ${finish.label} on ${stock.label}`}
            >
              <ProductPreview
                product={product}
                finish={finish}
                stock={stock}
                name={displayName}
                line2={displayLine2}
                logo={logo}
                sheenX={sheenX}
              />
            </motion.div>
            <p className="mt-6 text-[12px] text-white/35">Hover / drag across the preview to see the finish shift.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ *
 * Preview renderer — one layout per product
 * ------------------------------------------------------------------ */
function ProductPreview({
  product,
  finish,
  stock,
  name,
  line2,
  logo,
  sheenX,
}: {
  product: Product
  finish: Finish
  stock: Stock
  name: string
  line2: string
  logo: string | null
  sheenX: MotionValue<string>
}) {
  const isLight = stock.light
  const head = `${product.nameClass} ${product.nameSize} leading-[1.05] ${headlineClass(finish, isLight)} ${finish.gloss ? "relative inline-block" : ""}`
  const radius = product.id === "tote-bag" ? "rounded-[14px]" : "rounded-[18px]"

  const Monogram = (
    <span className={`relative inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-cmyk-cyan via-cmyk-magenta to-cmyk-yellow ${product.id === "letterhead" ? "w-8 h-8" : "w-9 h-9"}`}>
      <span className={`absolute inset-[3px] rounded-full ${stock.mono}`} />
      <span className={`relative text-[11px] font-bold ${stock.monoText}`}>R</span>
    </span>
  )

  const Logo = logo ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logo}
      alt="Your uploaded logo preview"
      className={`object-contain ${product.id === "tote-bag" ? "max-h-16 max-w-[60%]" : "max-h-11 max-w-[46%]"} ${isLight ? "" : "drop-shadow-[0_0_1px_rgba(255,255,255,0.4)]"}`}
    />
  ) : (
    Monogram
  )

  const Gloss = finish.gloss ? (
    <motion.span
      aria-hidden="true"
      style={{ left: sheenX }}
      className="absolute top-0 bottom-0 w-[35%] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none"
    />
  ) : null

  return (
    <>
      {/* Tote handles */}
      {product.id === "tote-bag" && (
        <>
          <span aria-hidden="true" className={`absolute left-[24%] -top-[14%] h-[20%] w-[16%] rounded-t-full border-[7px] border-b-0 ${isLight ? "border-[#c9b088]" : "border-ink-700"}`} />
          <span aria-hidden="true" className={`absolute right-[24%] -top-[14%] h-[20%] w-[16%] rounded-t-full border-[7px] border-b-0 ${isLight ? "border-[#c9b088]" : "border-ink-700"}`} />
        </>
      )}

      <div className={`relative w-full h-full ${radius} ${stock.card} shadow-apple-xl border border-white/10 overflow-hidden`}>
        {/* paper grain */}
        <div
          aria-hidden="true"
          className={`absolute inset-0 ${stock.grain} [background-image:radial-gradient(rgba(255,255,255,0.5)_0.5px,transparent_0.5px)] [background-size:4px_4px]`}
        />
        {/* travelling sheen */}
        <motion.div
          aria-hidden="true"
          style={{ left: sheenX }}
          className="absolute top-[-20%] bottom-[-20%] w-[45%] rotate-12 bg-gradient-to-r from-transparent via-white/22 to-transparent pointer-events-none"
        />

        {/* ---- layouts ---- */}
        {product.id === "visiting-card" && (
          <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between [transform:translateZ(28px)]">
            <div className="flex items-start justify-between">{Logo}</div>
            <div>
              <p className={head}>
                {name}
                {Gloss}
              </p>
              <p className={`mt-2.5 text-[12px] tracking-[0.16em] uppercase ${stock.sub}`}>{line2}</p>
            </div>
          </div>
        )}

        {product.id === "wedding-invitation" && (
          <div className="absolute inset-0 px-8 py-10 flex flex-col items-center justify-center text-center [transform:translateZ(28px)]">
            <p className={`text-[10px] tracking-[0.3em] uppercase mb-6 ${stock.sub}`}>Together with their families</p>
            <div className="mb-6">{Logo}</div>
            <p className={head}>
              {name}
              {Gloss}
            </p>
            <div className={`my-5 h-px w-14 ${isLight ? "bg-ink-400/50" : "bg-white/30"}`} />
            <p className={`text-[12px] tracking-[0.14em] uppercase ${stock.sub}`}>{line2}</p>
          </div>
        )}

        {product.id === "letterhead" && (
          <div className="absolute inset-0 p-8 flex flex-col [transform:translateZ(28px)]">
            <div className="flex items-center gap-3">
              {Logo}
              <div className="min-w-0">
                <p className={head}>
                  {name}
                  {Gloss}
                </p>
              </div>
            </div>
            <p className={`mt-2 text-[11px] tracking-[0.1em] ${stock.sub}`}>{line2}</p>
            <div className={`mt-4 h-px w-full ${isLight ? "bg-ink-300/60" : "bg-white/15"}`} />
            {/* faux letter body */}
            <div className="mt-6 space-y-2.5" aria-hidden="true">
              {[92, 100, 96, 88, 100, 70].map((w, i) => (
                <div
                  key={i}
                  className={`h-[6px] rounded-full ${isLight ? "bg-ink-900/10" : "bg-white/10"}`}
                  style={{ width: `${w}%` }}
                />
              ))}
            </div>
          </div>
        )}

        {product.id === "tote-bag" && (
          <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center [transform:translateZ(28px)]">
            <div className="mb-5">{Logo}</div>
            <p className={head}>
              {name}
              {Gloss}
            </p>
            {line2 && <p className={`mt-3 text-[12px] tracking-[0.16em] uppercase ${stock.sub}`}>{line2}</p>}
          </div>
        )}
      </div>
    </>
  )
}
