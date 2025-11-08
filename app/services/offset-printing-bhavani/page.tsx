import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Phone, CheckCircle, Clock, MapPin, Star, ArrowRight, Shield, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Offset Printing Services in Bhavani, Erode | Raja Ganapathi Press",
  description: "Premium offset printing services in Bhavani, Erode. Multicolor printing, wedding cards, brochures, packaging. Best quality & prices. Call 9994466277",
  keywords: [
    "offset printing bhavani",
    "offset printing erode",
    "multicolor printing bhavani",
    "commercial printing erode",
    "printing press bhavani",
    "raja ganapathi press bhavani",
    "offset printing komarapalayam",
    "printing services anthiyur",
    "printing press gobi"
  ],
  openGraph: {
    title: "Offset Printing Services - Raja Ganapathi Press Bhavani",
    description: "Expert offset printing in Bhavani & Erode. Wedding cards, business cards, brochures. Quality guaranteed. Call 9994466277",
    images: ["/services/offset-printing.jpg"],
  },
  alternates: {
    canonical: 'https://www.rajaganapathibhavani.com/services/offset-printing-bhavani',
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Offset Printing Services',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Raja Ganapathi Press',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '24 Palani Andavar Kovil Street',
      addressLocality: 'Bhavani',
      addressRegion: 'Tamil Nadu',
      postalCode: '638301',
      addressCountry: 'IN'
    },
    telephone: '+919994466277',
  },
  areaServed: ['Bhavani', 'Erode', 'Komarapalayam', 'Anthiyur', 'Gobi'],
  description: 'Premium offset printing services including multicolor printing, wedding invitations, brochures, and commercial printing.',
}

export default function OffsetPrintingBhavani() {
  const features = [
    "High-quality CMYK + Spot color printing",
    "Large volume printing capability (1000 to 100,000+ copies)",
    "Pantone color matching for brand consistency",
    "Premium paper options (70 GSM to 400 GSM)",
    "UV coating and lamination options",
    "Perfect binding and saddle stitching",
    "Die cutting and embossing services",
    "Express delivery available"
  ]

  const services = [
    { name: "Wedding Invitations", description: "Premium wedding cards with foiling and embossing" },
    { name: "Business Cards", description: "Professional visiting cards that make impressions" },
    { name: "Brochures & Catalogs", description: "Marketing materials that sell" },
    { name: "Letterheads & Bill Books", description: "Official stationery for businesses" },
    { name: "Packaging Materials", description: "Custom boxes and product packaging" },
    { name: "Posters & Flyers", description: "Promotional materials for events" }
  ]

  const testimonials = [
    {
      name: "Textile Business Owner",
      location: "Bhavani",
      text: "Best offset printing quality in Bhavani. They handle our catalogs perfectly!",
      rating: 5
    },
    {
      name: "Wedding Planner",
      location: "Erode",
      text: "Raja Ganapathi Press delivered stunning wedding cards on time. Highly recommended!",
      rating: 5
    },
    {
      name: "Shop Owner",
      location: "Komarapalayam",
      text: "Excellent service and competitive prices. Our go-to printing partner.",
      rating: 5
    }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
          <div className="container mx-auto px-4">
            <nav className="mb-6">
              <Link href="/#services" className="inline-flex items-center text-primary hover:underline">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Services
              </Link>
            </nav>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Offset Printing Services in{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Bhavani & Erode
                  </span>
                </h1>
                
                <p className="text-xl text-gray-700 mb-8">
                  Premium multicolor offset printing with state-of-the-art machinery. 
                  Serving Bhavani, Erode, Komarapalayam, Anthiyur, and Gobi with excellence since 1998.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-500" />
                    <span className="font-semibold">Quality Guaranteed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    <span className="font-semibold">Express Delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <span className="font-semibold">On-Time Always</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+919994466277"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call: 9994466277
                  </a>
                  <a
                    href="https://wa.me/919994466277?text=Hi, I need offset printing services"
                    className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white rounded-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                  >
                    WhatsApp Quote
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?q=80&w=2070"
                  alt="Offset Printing Services in Bhavani - Raja Ganapathi Press"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Serving Areas:</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Bhavani • Erode • Komarapalayam • Anthiyur • Gobi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Why Choose Our Offset Printing Services?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Our Offset Printing Services
            </h2>
            <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
              From wedding invitations to commercial catalogs, we offer comprehensive offset printing solutions
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link href="#contact" className="inline-flex items-center text-primary hover:underline font-medium">
                    Get Quote <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Our Offset Printing Process
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Design Approval", desc: "Share your design or let us create one" },
                { step: "2", title: "Pre-Press", desc: "Color separation and plate making" },
                { step: "3", title: "Printing", desc: "High-quality offset printing" },
                { step: "4", title: "Finishing", desc: "Cutting, binding, and delivery" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              What Our Customers Say
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="text-sm">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Offset Printing Project?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Get the best offset printing services in Bhavani and Erode
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919994466277"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: 9994466277
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Visit Our Shop
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-lg font-semibold mb-2">Raja Ganapathi Press</p>
              <p className="text-gray-300">
                24 Palani Andavar Kovil Street, Bhavani (638301)<br />
                (CSI School Opposite) • Open Mon-Sat: 9:30 AM - 8:00 PM
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
