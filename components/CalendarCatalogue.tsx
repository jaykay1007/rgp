"use client"

import { useMemo, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion, useInView } from "framer-motion"
import { ArrowUpRight, ZoomIn } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"

type Kind = "monthly" | "daily" | "ad" | "god"

type CalendarDesign = {
  /** Catalogue design number(s) — mention this when ordering */
  code?: string
  title: string
  kind: Kind
  /** Size · paper · sheet count */
  spec: string
  note?: string
  image: string
}

const DIR = "/images/calendars"

// Custom calendar catalogue — 2027 designs. Shop names shown inside the
// "advertisement" designs are sample artwork; the customer's own ad replaces them.
const designs: CalendarDesign[] = [
  {
    code: "6004 / 6005",
    title: "Hand Watch",
    kind: "monthly",
    spec: "15×20 in · 110 GSM art paper · 12 or 6 sheets",
    image: `${DIR}/monthly-sheet-calendar-6004-hand-watch.jpg`,
  },
  {
    code: "6006 / 6007",
    title: "Four Square",
    kind: "monthly",
    spec: "15×20 in · 110 GSM art paper · 12 or 6 sheets",
    image: `${DIR}/monthly-sheet-calendar-6006-four-square.jpg`,
  },
  {
    code: "6020 / 6021",
    title: "Half Circle",
    kind: "monthly",
    spec: "15×20 in · 110 GSM art paper · 12 or 6 sheets",
    image: `${DIR}/monthly-sheet-calendar-6020-half-circle.jpg`,
  },
  {
    title: "Thodarvandi",
    kind: "monthly",
    spec: "15×20 in · art paper · 12 or 6 sheets",
    image: `${DIR}/monthly-sheet-calendar-thodarvandi.jpg`,
  },
  {
    code: "6026 / 6027",
    title: "NH 47",
    kind: "monthly",
    spec: "15×20 in · 110 GSM art paper · 12 or 6 sheets",
    note: "Viratham, muhurtham & rasi panel",
    image: `${DIR}/monthly-sheet-calendar-6026-nh47.jpg`,
  },
  {
    code: "6010 / 6011",
    title: "Floral Panchangam",
    kind: "monthly",
    spec: "15×20 in · 110 GSM art paper · 12 or 6 sheets",
    image: `${DIR}/monthly-sheet-calendar-6010-floral.jpg`,
  },
  {
    code: "6030 / 6031",
    title: "Daily 5B",
    kind: "daily",
    spec: "15×20 in · 110 GSM art paper · 12 or 6 sheets",
    note: "Every date laid out like a daily sheet",
    image: `${DIR}/daily-sheet-calendar-6030-daily-5b.jpg`,
  },
  {
    title: "Daily calendar board",
    kind: "daily",
    spec: "Printed header board with daily date pad · all sizes",
    note: "Your company name, god picture, products and address on the board",
    image: `${DIR}/daily-sheet-calendar-board-sri-saai-bramma-engineerings.jpg`,
  },
  {
    code: "6032 / 6033",
    title: "Full Advertisement",
    kind: "ad",
    spec: "15×20 in · 110 GSM art paper · 12 or 6 sheets",
    note: "Half the sheet is your advertisement",
    image: `${DIR}/advertisement-calendar-6032-full-ad.jpg`,
  },
  {
    code: "6034 / 6035",
    title: "Half Advertisement",
    kind: "ad",
    spec: "15×20 in · 110 GSM art paper · 12 or 6 sheets",
    note: "Photo-led ad panel above the dates",
    image: `${DIR}/advertisement-calendar-6034-half-ad.jpg`,
  },
  {
    code: "6022 / 6023",
    title: "Header Advertisement",
    kind: "ad",
    spec: "16×22 in · 100 GSM art paper · 12 or 6 sheets",
    note: "Brand banner printed on every sheet",
    image: `${DIR}/advertisement-calendar-6022-header-ad.jpg`,
  },
  {
    code: "6086 / 6087",
    title: "Showroom Special",
    kind: "ad",
    spec: "Large format · art paper · 12 or 6 sheets",
    note: "Made for jewellery, silks & textile showrooms",
    image: `${DIR}/advertisement-calendar-6086-jewellery-silks.jpg`,
  },
  {
    code: "6134 / 6135",
    title: "Arupadai Murugan",
    kind: "god",
    spec: "20×29 in · 130 / 170 GSM art paper · 6 or 3 sheets",
    note: "A different padai veedu on every sheet",
    image: `${DIR}/god-picture-calendar-6134-arupadai-murugan.jpg`,
  },
  {
    code: "6136 / 6137",
    title: "Tirupati Balaji",
    kind: "god",
    spec: "20×29 in · 130 / 170 GSM art paper · 6 or 3 sheets",
    image: `${DIR}/god-picture-calendar-6136-tirupati.jpg`,
  },
  {
    code: "6138 / 6139",
    title: "Vinayagar",
    kind: "god",
    spec: "20×29 in · 130 / 170 GSM art paper · 6 or 3 sheets",
    image: `${DIR}/god-picture-calendar-6138-vinayagar.jpg`,
  },
  {
    code: "6106 / 6107",
    title: "Vinayagar Panchangam",
    kind: "god",
    spec: "20×29 in · 110 GSM art paper · 12 or 6 sheets",
    image: `${DIR}/god-picture-calendar-6106-vinayagar-large.jpg`,
  },
  {
    code: "6008 / 6009",
    title: "Vinayagar Monthly",
    kind: "god",
    spec: "15×20 in · 110 GSM art paper · 12 or 6 sheets",
    image: `${DIR}/god-picture-calendar-6008-vinayagar.jpg`,
  },
]

const tabs: { key: Kind | "all"; label: string; ta: string }[] = [
  { key: "all", label: "All designs", ta: "அனைத்தும்" },
  { key: "monthly", label: "Monthly sheet", ta: "மாத காலண்டர்" },
  { key: "daily", label: "Daily sheet", ta: "தினசரி காலண்டர்" },
  { key: "ad", label: "With your ad", ta: "விளம்பர காலண்டர்" },
  { key: "god", label: "God pictures", ta: "கடவுள் படம்" },
]

const kindLabel: Record<Kind, string> = {
  monthly: "Monthly sheet",
  daily: "Daily sheet",
  ad: "Advertisement",
  god: "God picture",
}

export default function CalendarCatalogue() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" })
  const [tab, setTab] = useState<Kind | "all">("all")
  const [open, setOpen] = useState<CalendarDesign | null>(null)

  const visible = useMemo(() => (tab === "all" ? designs : designs.filter((d) => d.kind === tab)), [tab])

  return (
    <section
      ref={sectionRef}
      id="calendars"
      className="relative py-28 md:py-36 bg-ink-50 overflow-hidden"
      aria-label="Custom daily sheet and monthly sheet calendar catalogue"
    >
      <div className="container-apple-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-end justify-between gap-8 mb-10 flex-wrap"
        >
          <div className="max-w-2xl">
            <p className="text-eyebrow uppercase text-accent mb-5">Custom calendars · 2027 catalogue</p>
            <h2 className="font-display font-semibold text-ink-900 tracking-[-0.025em] text-[clamp(34px,4.6vw,60px)] leading-[1.05] text-balance">
              Daily sheet &amp; monthly sheet,
              <br />
              <span className="text-gradient-warm">with your name on it.</span>
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-ink-600 max-w-xl">
              Pick a design, send us your shop name, logo and photos — we print your advertisement on every
              sheet. Tamil panchangam, festivals and government holidays included.
            </p>
          </div>
          <Link
            href="/services/calendar-printing"
            className="inline-flex items-center gap-1.5 text-accent text-[15px] font-medium hover:gap-2.5 transition-all"
          >
            Calendar printing details <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Filter tabs */}
        <div
          role="tablist"
          aria-label="Calendar type"
          className="flex gap-2 mb-10 overflow-x-auto pb-2 -mx-1 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {tabs.map((t) => {
            const active = tab === t.key
            const count = t.key === "all" ? designs.length : designs.filter((d) => d.kind === t.key).length
            return (
              <button
                key={t.key}
                role="tab"
                aria-selected={active}
                onClick={() => setTab(t.key)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-left transition-colors duration-300 border ${
                  active
                    ? "bg-ink-900 text-white border-ink-900"
                    : "bg-white text-ink-700 border-ink-200 hover:border-ink-400"
                }`}
              >
                <span className="block text-[14px] font-medium leading-tight">
                  {t.label}
                  <span className={`ml-2 text-[12px] ${active ? "text-white/60" : "text-ink-400"}`}>{count}</span>
                </span>
                <span className={`block text-[11px] leading-tight mt-0.5 ${active ? "text-white/70" : "text-ink-500"}`}>
                  {t.ta}
                </span>
              </button>
            )
          })}
        </div>

        {/* Catalogue grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((d, i) => (
              <motion.article
                layout
                key={d.image}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: Math.min(i, 8) * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col rounded-[24px] bg-white border border-ink-100 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpen(d)}
                  aria-label={`View ${d.title} calendar design larger`}
                  className="relative block aspect-[4/5] bg-gradient-to-b from-ink-100/70 to-ink-50 cursor-zoom-in"
                >
                  <span className="absolute inset-3 md:inset-5">
                    <Image
                      src={d.image}
                      alt={`${d.title} — ${kindLabel[d.kind]} calendar design${d.code ? ` no. ${d.code}` : ""}, custom printed by Raja Ganapathi Offset Bhavani`}
                      fill
                      sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 46vw"
                      className="object-contain drop-shadow-[0_10px_18px_rgba(0,0,0,0.18)] transition-transform duration-700 ease-[cubic-bezier(0.16,_1,_0.3,_1)] group-hover:scale-[1.03]"
                    />
                  </span>
                  <span className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-[10px] md:text-[11px] font-medium uppercase tracking-wider text-ink-700 border border-ink-100">
                    {kindLabel[d.kind]}
                  </span>
                  <span className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-ink-900/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="w-4 h-4" />
                  </span>
                </button>

                <div className="flex flex-col flex-1 p-4 md:p-5">
                  {d.code && (
                    <p className="text-[11px] md:text-[12px] font-medium tracking-wide text-accent mb-1">
                      Design no. {d.code}
                    </p>
                  )}
                  <h3 className="font-display font-semibold text-ink-900 text-[16px] md:text-[19px] tracking-[-0.01em] leading-snug">
                    {d.title}
                  </h3>
                  <p className="mt-1.5 text-[12px] md:text-[13px] leading-relaxed text-ink-500">{d.spec}</p>
                  {d.note && <p className="mt-1 text-[12px] md:text-[13px] leading-relaxed text-ink-700">{d.note}</p>}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="mt-10 text-[13px] leading-relaxed text-ink-500 max-w-3xl">
          Shop names shown inside the advertisement designs are sample artwork — your own name, photos and
          address are printed in their place. Most designs are also available on 75 GSM maplitho paper.
          More designs in store.
        </p>
      </div>

      {/* Larger view */}
      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-[min(92vw,640px)] p-4 md:p-6 rounded-[24px]">
          {open && (
            <>
              <div className="relative w-full h-[min(68vh,720px)]">
                <Image src={open.image} alt={`${open.title} calendar design`} fill sizes="640px" className="object-contain" />
              </div>
              <div className="flex items-end justify-between gap-4 flex-wrap">
                <div>
                  <DialogTitle className="font-display text-[20px] text-ink-900">
                    {open.title}
                    {open.code && <span className="ml-2 text-[14px] font-medium text-accent">No. {open.code}</span>}
                  </DialogTitle>
                  <DialogDescription className="text-[13px] text-ink-500 mt-1">{open.spec}</DialogDescription>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
