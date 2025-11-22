"use client"

import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Portfolio from "@/components/Portfolio"
import About from "@/components/About"
import Process from "@/components/Process"
import WhyChooseUs from "@/components/WhyChooseUs"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"
import Faq from "@/components/Faq"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Process />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}

