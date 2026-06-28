import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Specialties from "@/components/Specialties"
import PrintingProcess from "@/components/printing-process"
import WhyChooseUs from "@/components/WhyChooseUs"
import Showcase from "@/components/Showcase"
import FAQ from "@/components/FAQ"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import SmoothScroll from "@/components/smooth-scroll"

export default function Home() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-ink-50 overflow-x-clip">
        <Header />
        <main>
          <Hero />
          <Services />
          <Specialties />
          <Showcase />
          <PrintingProcess />
          <WhyChooseUs />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  )
}
