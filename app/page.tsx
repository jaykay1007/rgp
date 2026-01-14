"use client"

import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Specialties from "@/components/Specialties"
import PrintingProcess from "@/components/printing-process"
import WhyChooseUs from "@/components/WhyChooseUs"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Specialties />
        <PrintingProcess />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

