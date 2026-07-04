import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, CheckCircle2, Award, Users, TrendingUp, Star, ArrowRight } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { SITE_CONFIG, CONTACT_INFO, getFullAddress } from "@/lib/seo-config"
import { getAuthorityPageSchemaJSON } from "@/lib/authority-page-schema"

// Computed once so "years of excellence" copy never goes stale.
const YEARS = SITE_CONFIG.yearsInBusiness

export const metadata: Metadata = {
  title: "Best Offset Printing Press in Bhavani, Erode | Raja Ganapathi Offset | Commercial Printing Services",
  description: "Raja Ganapathi Offset - #1 Printing Press in Bhavani since 1997. Expert in offset printing, wedding cards, visiting cards, brochures, packaging, bag printing, bill books, letterheads. Serving Bhavani, Erode, Komarapalayam, Anthiyur, Gobi, Salem. Call +91 9994466277 for quotes.",
  keywords: [
    "printing press bhavani",
    "offset printing bhavani",
    "printing press erode",
    "commercial printing bhavani",
    "multicolor printing bhavani",
    "wedding card printing bhavani",
    "visiting card printing erode",
    "brochure printing komarapalayam",
    "packaging printing anthiyur",
    "bag printing bhavani",
    "bill book printing erode",
    "letterhead printing bhavani",
    "poster printing gobi",
    "catalog printing erode",
    "booklet printing bhavani",
    "sticker printing erode",
    "label printing bhavani",
    "envelope printing komarapalayam",
    "invitation card printing bhavani",
    "calendar printing erode",
    "id card printing bhavani",
    "certificate printing erode",
    "box printing bhavani",
    "paper bag printing erode",
    "menu card printing bhavani",
    "printing press near me",
    "best printing press bhavani",
    "raja ganapathi offset",
    "rajaganapathi press bhavani",
  ],
  openGraph: {
    title: "Raja Ganapathi Offset - Best Printing Press in Bhavani, Erode District | Since 1997",
    description: `Trusted printing press serving Bhavani, Erode, Komarapalayam, Anthiyur, Gobi for ${YEARS}+ years. Expert offset printing, wedding cards, business stationery, packaging, bag printing. Quality guaranteed. Call +91 9994466277`,
    url: `${SITE_CONFIG.domain}/printing-press-bhavani-erode`,
    siteName: SITE_CONFIG.name,
    // OG image inherited from app/opengraph-image.tsx (generated, never 404s).
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Raja Ganapathi Offset - Best Printing Press Bhavani | Offset Printing Erode",
    description: `${YEARS}+ years trusted printing press in Bhavani. Wedding cards, visiting cards, brochures, packaging, bag printing. Serving Erode district. Call +91 9994466277`,
  },
  alternates: {
    canonical: `${SITE_CONFIG.domain}/printing-press-bhavani-erode`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function PrintingPressBhavaniErodePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getAuthorityPageSchemaJSON() }}
      />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HeroSection />
          <IntroSection />
          <ComprehensiveServicesSection />
          <LocationsServedSection />
          <WhyChooseSection />
          <SpecializedServicesSection />
          <ProcessSection />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  )
}

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#0F172A] via-[#1e293b] to-[#0F172A] text-white py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('/images/printing-pattern.svg')] opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-6 py-2 mb-6">
            <Award className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-[#D4AF37] font-semibold">Trusted Since 1997 | {YEARS}+ Years of Excellence</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Raja Ganapathi Offset
            <span className="block text-[#D4AF37] mt-2">Best Printing Press in Bhavani & Erode</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Premier Multicolour Offset & Commercial Printing Solutions Provider
            <span className="block mt-2 text-lg">Serving Bhavani, Erode, Komarapalayam, Anthiyur, Gobi & Surrounding Areas</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href={`tel:${CONTACT_INFO.phoneFormatted}`}
              className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#C4A137] text-[#0F172A] font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Call +91 9994466277
            </a>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105"
            >
              Get Free Quote on WhatsApp
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#D4AF37] mb-1">{YEARS}+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#D4AF37] mb-1">10,000+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#D4AF37] mb-1">50+</div>
              <div className="text-sm text-gray-400">Services Offered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#D4AF37] mb-1">100%</div>
              <div className="text-sm text-gray-400">Quality Guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function IntroSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6 text-center">
            Welcome to Raja Ganapathi Offset - Your Trusted Printing Partner in Bhavani
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed">
              Established in <strong>1997</strong>, <strong>Raja Ganapathi Offset</strong> has been the cornerstone of quality printing services in <strong>Bhavani, Erode district, Tamil Nadu</strong>. With over <strong>{YEARS} years of dedicated service</strong>, we have earned the trust of thousands of businesses, individuals, and organizations across <strong>Bhavani, Erode, Komarapalayam, Anthiyur, Gobichettipalayam, Perundurai, Sathyamangalam, Mettur, Sankagiri, Salem, Namakkal, Tiruchengode, Pallipalayam, Chithode, Modakurichi, Kavindapadi, Ammapet</strong>, and surrounding regions.
            </p>
            
            <p className="text-lg leading-relaxed">
              As the <strong>leading printing press in Bhavani</strong>, we specialize in comprehensive printing solutions including <strong>offset printing, multicolor printing, commercial printing, wedding card printing, visiting card printing, brochure printing, packaging printing, bag printing, bill book printing, letterhead printing</strong>, and much more. Our state-of-the-art printing facility combines traditional craftsmanship with modern technology to deliver exceptional results every time.
            </p>
            
            <p className="text-lg leading-relaxed">
              Whether you need <strong>bulk printing services for commercial purposes</strong>, <strong>premium wedding invitations with foiling and embossing</strong>, <strong>professional business stationery</strong>, <strong>eye-catching marketing materials</strong>, or <strong>custom packaging solutions</strong>, Raja Ganapathi Offset is your one-stop destination for all printing needs in Erode district and beyond.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[#0F172A] to-[#1e293b] p-6 rounded-xl text-white text-center">
              <Award className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Quality Assured</h3>
              <p className="text-gray-300">ISO-standard processes ensuring consistent, superior quality in every print</p>
            </div>
            <div className="bg-gradient-to-br from-[#0F172A] to-[#1e293b] p-6 rounded-xl text-white text-center">
              <Users className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-gray-300">Skilled professionals with decades of combined printing expertise</p>
            </div>
            <div className="bg-gradient-to-br from-[#0F172A] to-[#1e293b] p-6 rounded-xl text-white text-center">
              <TrendingUp className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Modern Technology</h3>
              <p className="text-gray-300">Latest Heidelberg offset printing equipment for perfect results</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ComprehensiveServicesSection() {
  const services = [
    {
      category: "Offset Printing Services",
      items: [
        "Multicolor Offset Printing (CMYK + Spot Colors)",
        "Single Color & Two Color Offset Printing",
        "Short-run Offset Printing for Small Quantities",
        "Commercial Printing Solutions",
        "Bulk Printing Services",
        "Express Printing Services",
      ]
    },
    {
      category: "Business Stationery Printing",
      items: [
        "Letterhead Printing (Single & Multi-color)",
        "Bill Book Printing (Duplicate, Triplicate)",
        "Invoice Printing & Receipt Book Printing",
        "Challan Printing & Voucher Printing",
        "Visiting Card Printing & Business Card Printing",
        "Envelope Printing (All Sizes)",
        "Letter Envelope & Courier Cover Printing",
        "File Cover & Folder Printing",
        "Office File Printing & Corporate Folder Printing",
      ]
    },
    {
      category: "Marketing & Promotional Materials",
      items: [
        "Brochure Printing & Pamphlet Printing",
        "Flyer Printing & Leaflet Distribution Materials",
        "Catalog Printing & Booklet Printing",
        "Poster Printing (Paper Stock)",
        "Dangler Printing & Tent Card Printing",
        "Standee Printing & Display Materials",
        "Menu Card Printing (Restaurant & Hotel)",
        "Calendar Printing & Diary Printing",
        "Bill Folder Printing",
      ]
    },
    {
      category: "Wedding & Invitation Cards",
      items: [
        "Wedding Card Printing (Traditional & Modern)",
        "Marriage Invitation Printing with Foiling",
        "Embossed Wedding Cards & Laser Cut Invitations",
        "Birthday Invitation Printing",
        "Corporate Invitation Printing",
        "Event Invitation Cards",
        "Custom Invitation Design Services",
      ]
    },
    {
      category: "Book & Publication Printing",
      items: [
        "Magazine Printing & Newspaper Printing",
        "Journal Printing & Newsletter Printing",
        "Story Book Printing & Novel Printing",
        "Textbook Printing & Educational Book Printing",
        "Notebook Printing & Exercise Book Printing",
        "Student Diary Printing & School Diary Printing",
        "Report Card Printing & Marksheet Printing",
        "Spiral Binding, Perfect Binding, Saddle Stitching",
      ]
    },
    {
      category: "Certificates & ID Cards",
      items: [
        "Certificate Printing (All Types)",
        "ID Card Printing & Employee ID Cards",
        "PVC Card Printing & Plastic Card Printing",
        "Student ID Cards & Membership Cards",
        "Access Cards & Loyalty Cards",
      ]
    },
    {
      category: "Calendar & Sticker Printing",
      items: [
        "Wall Calendar Printing",
        "Table Calendar Printing & Desk Calendar",
        "Pocket Calendar Printing",
        "Sticker Printing (All Shapes & Sizes)",
        "Label Printing & Product Label Printing",
        "Barcode Label Printing",
        "Vinyl Stickers & Die-Cut Stickers",
      ]
    },
    {
      category: "Packaging & Box Printing",
      items: [
        "Box Printing & Carton Printing",
        "Mono Carton Printing",
        "Corrugated Box Printing",
        "Product Packaging Printing",
        "Food Packaging Printing",
        "Pharmaceutical Packaging",
        "Cosmetic Box Printing",
        "Gift Box Printing",
      ]
    },
    {
      category: "Bag Printing Services",
      items: [
        "Paper Bag Printing (All Sizes)",
        "Cloth Bag Printing & Cotton Bag Printing",
        "Jute Bag Printing & Eco-Friendly Bags",
        "Non-Woven Bag Printing",
        "Carry Bag Printing & Shopping Bag Printing",
        "Logo Bag Printing & Branded Bags",
        "Gift Bag Printing",
        "Promotional Bag Printing",
      ]
    },
    {
      category: "Finishing & Binding Services",
      items: [
        "Lamination (Gloss & Matte)",
        "UV Coating & Spot UV",
        "Embossing & Debossing",
        "Foil Stamping (Gold, Silver, Holographic)",
        "Die Cutting & Laser Cutting",
        "Punching & Perforation",
        "Numbering & Sequential Printing",
        "Spiral Binding & Wire-O Binding",
        "Perfect Binding & Case Binding",
        "Saddle Stitching & Stapling",
      ]
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
            Complete Printing Services in Bhavani & Erode District
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to completion, we offer comprehensive printing solutions for businesses, individuals, and organizations across Tamil Nadu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#0F172A] mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-[#D4AF37]" />
                {service.category}
              </h3>
              <ul className="space-y-2">
                {service.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2 text-gray-700">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LocationsServedSection() {
  const locations = [
    { name: "Bhavani", desc: "Main location - 24 Palani Andavar Kovil Street" },
    { name: "Erode", desc: "Complete printing services across Erode city" },
    { name: "Komarapalayam", desc: "Textile & commercial printing hub" },
    { name: "Anthiyur", desc: "Wedding cards & business stationery" },
    { name: "Gobichettipalayam (Gobi)", desc: "Offset & commercial printing services" },
    { name: "Perundurai", desc: "Packaging & promotional materials" },
    { name: "Sathyamangalam", desc: "All printing solutions available" },
    { name: "Mettur", desc: "Business & commercial printing" },
    { name: "Sankagiri", desc: "Wedding invitations & visiting cards" },
    { name: "Salem", desc: "Nearby areas served with delivery" },
    { name: "Namakkal", desc: "Border areas printing services" },
    { name: "Tiruchengode", desc: "Educational & commercial printing" },
    { name: "Pallipalayam", desc: "Quick printing & express services" },
    { name: "Chithode", desc: "Local printing solutions" },
    { name: "Modakurichi", desc: "Business stationery & packaging" },
    { name: "Kavindapadi", desc: "All printing services available" },
    { name: "Ammapet", desc: "Wedding cards & invitations" },
    { name: "Surrounding Villages", desc: "Delivery available across Tamil Nadu" },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
            Areas We Serve - Printing Press Near You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proudly serving customers across Erode district, Salem, Namakkal, and surrounding regions with quality printing services and timely delivery
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, idx) => (
            <div key={idx} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-all">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#0F172A] mb-1">{location.name}</h3>
                  <p className="text-sm text-gray-600">{location.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-[#0F172A] to-[#1e293b] rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Looking for Printing Services Near You?</h3>
          <p className="text-lg mb-6 text-gray-300">
            We serve all areas in and around Bhavani, Erode district. Contact us for free quotes and delivery options.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${CONTACT_INFO.phoneFormatted}`}
              className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#C4A137] text-[#0F172A] font-bold px-6 py-3 rounded-lg transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Now: +91 9994466277
            </a>
            <a
              href={CONTACT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#0F172A] font-bold px-6 py-3 rounded-lg transition-all"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyChooseSection() {
  const reasons = [
    {
      icon: Award,
      title: `${YEARS}+ Years of Excellence`,
      desc: "Established in 1997, we bring nearly three decades of printing expertise and industry knowledge to every project."
    },
    {
      icon: CheckCircle2,
      title: "Quality Guaranteed",
      desc: "We use premium materials, advanced printing technology, and rigorous quality control to ensure perfect results every time."
    },
    {
      icon: Users,
      title: "10,000+ Satisfied Clients",
      desc: "Trusted by businesses, individuals, and organizations across Erode district for consistent quality and reliable service."
    },
    {
      icon: TrendingUp,
      title: "Competitive Pricing",
      desc: "Best rates in Bhavani and Erode for all printing services without compromising on quality. Bulk discounts available."
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      desc: "Express printing services available. We understand deadlines and deliver on time, every time."
    },
    {
      icon: Star,
      title: "Complete Solutions",
      desc: "From design to delivery, we offer end-to-end printing solutions under one roof. No need to go anywhere else."
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#0F172A] via-[#1e293b] to-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Raja Ganapathi Offset is the Best Printing Press in Bhavani
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover what makes us the preferred choice for thousands of customers across Erode district
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon
            return (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
                <Icon className="w-12 h-12 text-[#D4AF37] mb-4" />
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-gray-300 leading-relaxed">{reason.desc}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Experience the Raja Ganapathi Offset Difference</h3>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for all their printing needs. Quality, reliability, and excellence in every print.
          </p>
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi, I would like to get a quote for printing services`}
            className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#C4A137] text-[#0F172A] font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105"
          >
            Get Free Quote on WhatsApp
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

function SpecializedServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
            Specialized Printing Services for Every Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert solutions tailored to specific industries and requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-xl p-6">
            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Wedding Printing Specialist</h3>
            <p className="text-gray-700 mb-4">
              Make your special day memorable with our premium wedding card printing services. We offer traditional Tamil designs, modern minimalist styles, luxury foil stamping, embossing, laser cutting, and custom design services.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Traditional & Contemporary Designs</li>
              <li>• Gold/Silver Foiling & Embossing</li>
              <li>• Laser Cut Invitations</li>
              <li>• Custom Design Consultation</li>
              <li>• Premium Paper Options</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-100 rounded-xl p-6">
            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Business Printing Solutions</h3>
            <p className="text-gray-700 mb-4">
              Complete corporate stationery and business printing services. From visiting cards to letterheads, bill books to brochures - we handle all your business printing needs professionally.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Professional Visiting Cards</li>
              <li>• Letterheads & Envelopes</li>
              <li>• Bill Books (Duplicate/Triplicate)</li>
              <li>• Corporate Brochures & Catalogs</li>
              <li>• Bulk Order Discounts</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-100 rounded-xl p-6">
            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Packaging & Label Printing</h3>
            <p className="text-gray-700 mb-4">
              Custom packaging solutions for products, food items, pharmaceuticals, and cosmetics. High-quality box printing, carton printing, and label printing services with barcode support.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Product Packaging Design</li>
              <li>• Mono Carton & Corrugated Boxes</li>
              <li>• Barcode Labels & Stickers</li>
              <li>• Food-Grade Packaging</li>
              <li>• Custom Shapes & Sizes</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-100 rounded-xl p-6">
            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Educational Printing</h3>
            <p className="text-gray-700 mb-4">
              Specialized printing services for schools, colleges, and educational institutions. Textbooks, notebooks, diaries, certificates, ID cards, and more at competitive rates.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Textbook & Workbook Printing</li>
              <li>• Student Diaries & Notebooks</li>
              <li>• Certificates & Marksheets</li>
              <li>• Student ID Cards</li>
              <li>• Educational Posters</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-white border-2 border-red-100 rounded-xl p-6">
            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Promotional Material Printing</h3>
            <p className="text-gray-700 mb-4">
              Eye-catching marketing materials to promote your business. Posters, standees, danglers, flyers, calendars and all promotional printing at affordable prices.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Posters & Pamphlets</li>
              <li>• Standees & Danglers</li>
              <li>• Promotional Flyers</li>
              <li>• Calendars & Diaries</li>
              <li>• Event Branding Materials</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-white border-2 border-teal-100 rounded-xl p-6">
            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Bag Printing Services</h3>
            <p className="text-gray-700 mb-4">
              Eco-friendly and branded bag printing for businesses. Paper bags, cloth bags, jute bags, non-woven bags with custom logo printing and designs.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Paper Bag Printing (All Sizes)</li>
              <li>• Cloth & Cotton Bags</li>
              <li>• Jute & Eco-Friendly Bags</li>
              <li>• Non-Woven Shopping Bags</li>
              <li>• Custom Logo & Branding</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  const steps = [
    {
      step: "1",
      title: "Consultation & Quote",
      desc: "Contact us via phone, WhatsApp, or visit our press. Share your requirements and get instant quote."
    },
    {
      step: "2",
      title: "Design & Approval",
      desc: "Our design team creates mockups. Review and approve the design before printing begins."
    },
    {
      step: "3",
      title: "Material Selection",
      desc: "Choose from our wide range of paper quality, finishes, and special effects options."
    },
    {
      step: "4",
      title: "Printing Process",
      desc: "Your order goes into production on our advanced Heidelberg offset printing equipment."
    },
    {
      step: "5",
      title: "Quality Check",
      desc: "Every print undergoes rigorous quality inspection to ensure perfection."
    },
    {
      step: "6",
      title: "Delivery",
      desc: "Collect from our press or opt for delivery to your location across Tamil Nadu."
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
            Our Simple & Transparent Printing Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From inquiry to delivery - experience hassle-free printing with Raja Ganapathi Offset
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((item, idx) => (
            <div key={idx} className="relative bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#D4AF37] text-[#0F172A] rounded-full flex items-center justify-center text-xl font-bold">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3 mt-2">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const faqs = [
    {
      q: "What types of printing services does Raja Ganapathi Offset offer in Bhavani?",
      a: "We offer comprehensive printing services including multicolor offset printing, wedding card printing, visiting card printing, business stationery (letterheads, bill books, envelopes), brochure printing, catalog printing, packaging printing, bag printing (paper, cloth, jute, non-woven), book printing, poster printing, sticker printing, label printing, certificate printing, ID card printing, calendar printing, and all finishing services like lamination, foiling, embossing, and binding."
    },
    {
      q: "Which areas do you serve from your Bhavani location?",
      a: "We serve customers across Bhavani, Erode, Komarapalayam, Anthiyur, Gobichettipalayam (Gobi), Perundurai, Sathyamangalam, Mettur, Sankagiri, Salem nearby areas, Namakkal border areas, Tiruchengode, Pallipalayam, Chithode, Modakurichi, Kavindapadi, Ammapet, and all surrounding towns and villages in Erode district and Tamil Nadu. Delivery services available."
    },
    {
      q: "How long has Raja Ganapathi Offset been in business?",
      a: `Raja Ganapathi Offset was established in 1997 and has been serving customers in Bhavani and Erode district for over ${YEARS} years. We are one of the most trusted and experienced printing presses in the region with thousands of satisfied customers.`
    },
    {
      q: "What are your business hours and contact details?",
      a: "We are open Monday to Saturday from 9:30 AM to 2:00 PM and 4:00 PM to 8:00 PM. Closed on Sundays. You can reach us at +91 9994466277 (Phone/WhatsApp) or email us at rgpbvn@gmail.com. Visit us at 24 Palani Andavar Kovil Street, Bhavani - 638301 (Opposite CSI School)."
    },
    {
      q: "Do you offer custom wedding card design services?",
      a: "Yes, we specialize in custom wedding invitation design and printing. Our services include traditional Tamil wedding cards, modern minimalist designs, luxury foil stamping (gold, silver, holographic), embossing and debossing, laser cut invitations, and complete design consultation. We work with you to create unique invitations that match your wedding theme and budget."
    },
    {
      q: "What is the minimum order quantity for offset printing?",
      a: "For offset printing, we typically recommend a minimum of 500 pieces for cost-effectiveness, as offset printing is ideal for bulk orders. For smaller quantities (less than 500), we also offer quick short-run printing with no large minimum order. Contact us to discuss your specific needs."
    },
    {
      q: "Do you provide express or urgent printing services?",
      a: "Yes, we offer express printing services for urgent orders. Turnaround time depends on the complexity, quantity, and type of printing required. For simple jobs, we can deliver within 24-48 hours. Contact us directly at +91 9994466277 to discuss your timeline and we will do our best to accommodate your urgent requirements."
    },
    {
      q: "What paper quality and finishing options are available?",
      a: "We offer a wide range of paper options including art paper (various GSM), maplitho, bond paper, card stock, textured papers, metallic papers, handmade papers, and imported specialty papers. Finishing options include lamination (gloss/matte), UV coating, spot UV, embossing, debossing, foil stamping (gold, silver, holographic), die cutting, laser cutting, punching, perforation, and various binding methods."
    },
    {
      q: "How can I get a quote for my printing project?",
      a: "Getting a quote is easy! You can call us at +91 9994466277, send a WhatsApp message with your requirements, email us at rgpbvn@gmail.com, or visit our press in person. Please provide details about your project including quantity, size, paper type, colors, and any special finishes required. We will provide a detailed quote promptly."
    },
    {
      q: "Do you offer bag printing services for businesses?",
      a: "Yes, we offer comprehensive bag printing services including paper bag printing (all sizes), cloth bag printing, cotton bag printing, jute bag printing, non-woven bag printing, carry bag printing, shopping bag printing, logo bag printing, gift bag printing, and promotional bag printing. We can print your logo, brand name, and designs on eco-friendly bags for businesses, events, and promotional purposes."
    },
    {
      q: "Can you handle bulk printing orders for businesses?",
      a: "Absolutely! We specialize in bulk printing orders for businesses, organizations, and institutions. Our offset printing technology is perfect for large volume orders, offering consistent quality and competitive pricing. We offer special discounts for bulk orders. Whether you need 1,000 or 100,000 pieces, we have the capacity and expertise to deliver on time."
    },
    {
      q: "What makes Raja Ganapathi Offset different from other printing presses?",
      a: `Our ${YEARS}+ years of experience, commitment to quality, competitive pricing, fast turnaround times, complete in-house facilities, expert design team, modern printing equipment, wide range of services under one roof, and thousands of satisfied customers make us the preferred choice in Bhavani and Erode district. We combine traditional craftsmanship with modern technology to deliver exceptional results every time.`
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
            Frequently Asked Questions About Our Printing Services
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about printing services at Raja Ganapathi Offset
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
              <h3 className="text-lg font-bold text-[#0F172A] mb-3 flex items-start gap-2">
                <span className="text-[#D4AF37] flex-shrink-0">Q{idx + 1}.</span>
                {faq.q}
              </h3>
              <p className="text-gray-700 leading-relaxed pl-8">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-[#0F172A] to-[#1e293b] rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-lg mb-6 text-gray-300">
            Our team is here to help! Contact us for personalized assistance with your printing needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${CONTACT_INFO.phoneFormatted}`}
              className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#C4A137] text-[#0F172A] font-bold px-6 py-3 rounded-lg transition-all"
            >
              <Phone className="w-5 h-5" />
              Call +91 9994466277
            </a>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-lg transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#0F172A] via-[#1e293b] to-[#0F172A] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Start Your Printing Project?
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Experience the quality and service that has made Raja Ganapathi Offset the most trusted printing press in Bhavani for over {YEARS} years
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href={`tel:${CONTACT_INFO.phoneFormatted}`}
            className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#C4A137] text-[#0F172A] font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 text-lg"
          >
            <Phone className="w-6 h-6" />
            Call Now: +91 9994466277
          </a>
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi, I would like to get a quote for printing services`}
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 text-lg"
          >
            Get Free Quote on WhatsApp
          </a>
        </div>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
            <MapPin className="w-6 h-6 text-[#D4AF37]" />
            Visit Our Printing Press
          </h3>
          <p className="text-lg mb-2 font-semibold">Raja Ganapathi Offset</p>
          <p className="text-gray-300 mb-4">{getFullAddress()}</p>
          <div className="flex items-center justify-center gap-2 text-gray-300 mb-4">
            <Clock className="w-5 h-5 text-[#D4AF37]" />
            <span>Mon-Sat: 9:30 AM - 2:00 PM, 4:00 PM - 8:00 PM</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={CONTACT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#0F172A] font-bold px-6 py-3 rounded-lg transition-all"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-6 py-3 rounded-lg transition-all"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
