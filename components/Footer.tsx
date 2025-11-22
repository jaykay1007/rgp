import Link from "next/link"
import { Mail, MapPin, Phone, Printer } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
]

const serviceLinks = [
  "Luxury Wedding Invites",
  "Corporate Stationery",
  "Premium Brochures",
  "Packaging Suites",
  "Event Collateral",
  "Coffee Table Books",
]

const contactDetails = [
  {
    icon: MapPin,
    label: "Visit",
    value: "24 Palani Andavar Kovil Street, Bhavani 638301 (Opp. CSI School)",
  },
  { icon: Phone, label: "Call", value: "+91 99944 66277" },
  { icon: Mail, label: "Email", value: "rgpbvn@gmail.com" },
]

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Behance", href: "https://behance.net" },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#010409] to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]" />

      <div className="container relative z-10 py-24">
        <div className="glass-card flex flex-col gap-6 rounded-3xl border border-white/10 px-8 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-white/60">Concierge printing</p>
            <h3 className="mt-3 font-display text-3xl md:text-4xl leading-tight">
              Ready to craft your signature print experience?
            </h3>
          </div>
          <div className="flex flex-col gap-3 text-sm text-white/70">
            <span>Vip production desk · Instant callbacks</span>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#d9b351] to-[#f5dca1] px-6 py-3 text-base font-semibold tracking-wide text-black"
            >
              Book a private consult
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-4">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                <Printer className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-white/60">RGP</p>
                <p className="text-lg font-semibold">Raja Ganapathi Press</p>
              </div>
            </div>
            <p className="text-white/70 text-base leading-relaxed">
              A family atelier crafting heirloom-quality prints with obsessive control over every finish, foil, and fold.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <Link key={social.label} href={social.href} className="glass-pill text-sm text-white/70">
                  {social.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Navigation</p>
            <ul className="mt-6 space-y-3 text-white/80">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link className="transition hover:text-secondary" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Signature services</p>
            <ul className="mt-6 space-y-3 text-white/80">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link className="transition hover:text-secondary" href="#services">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Concierge</p>
            <ul className="mt-6 space-y-5 text-white/80">
              {contactDetails.map((detail) => (
                <li key={detail.label} className="flex items-start gap-4">
                  <detail.icon className="mt-1 h-5 w-5 text-secondary" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-white/50">{detail.label}</p>
                    <p className="mt-1 text-base leading-relaxed">{detail.value}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-white/60">Monday – Saturday · 9 AM – 7 PM</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Raja Ganapathi Offset Printers. All rights reserved.</p>
          <div className="flex gap-6">
            <Link className="hover:text-secondary" href="#">Privacy Policy</Link>
            <Link className="hover:text-secondary" href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

