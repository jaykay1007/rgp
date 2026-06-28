import Link from "next/link"
import { ArrowRight, Home } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

// Next returns a 404 status for this route, so it is not indexed.
export default function NotFound() {
  return (
    <div className="min-h-screen bg-ink-50 overflow-x-clip">
      <Header />
      <main className="flex min-h-[70vh] items-center justify-center px-6 py-32 text-center">
        <div className="max-w-xl">
          <p className="text-eyebrow uppercase text-accent mb-5">404 — Page not found</p>
          <h1 className="font-display font-semibold tracking-[-0.03em] text-ink-900 text-[clamp(36px,6vw,64px)] leading-[1.04]">
            This page didn&apos;t make it to print.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-[17px] leading-[1.55] text-ink-500">
            The page you&apos;re looking for may have moved. Explore our printing services
            or head back to the homepage.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-ink-800"
            >
              <Home className="h-4 w-4" strokeWidth={2} />
              Back home
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-ink-300 bg-white px-6 py-3.5 text-[15px] font-medium text-ink-800 transition-colors hover:bg-ink-100"
            >
              Browse services
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
