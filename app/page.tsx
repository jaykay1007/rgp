"use client"

import { SmoothScroll } from "@/components/smooth-scroll"
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
    <div className="flex min-h-screen flex-col">
      <SmoothScroll />
      <Header />
      <main>
        <Hero />
        <Services />
        <Specialties />
        <section id="process" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Printing Process</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                We follow a meticulous process to ensure the highest quality for all your printing needs.
              </p>
            </div>
            <PrintingProcess />
          </div>
        </section>
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

