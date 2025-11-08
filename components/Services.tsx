"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Printer, CreditCard, BookOpen, Package, FileText, Image as ImageIcon } from "lucide-react"

const services = [
  {
    title: "Offset Printing",
    description: "Premium multicolor offset printing for all commercial needs with vibrant color accuracy.",
    icon: Printer,
    image: "https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?q=80&w=2070",
    color: "from-blue-500 to-cyan-500",
    link: "/services/multicolour-offset-printing",
  },
  {
    title: "Wedding Invitations",
    description: "Elegant wedding cards with gold foiling, embossing, and premium finishes.",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=500",
    color: "from-pink-500 to-rose-500",
    link: "/services/wedding-invitations",
  },
  {
    title: "Visiting Cards",
    description: "Professional business cards with premium quality printing and various finishes.",
    icon: CreditCard,
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500",
    color: "from-purple-500 to-indigo-500",
    link: "/services/visiting-cards",
  },
  {
    title: "Brochures & Catalogs",
    description: "Eye-catching marketing materials with perfect binding and superior print quality.",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?w=500",
    color: "from-green-500 to-emerald-500",
    link: "/services/brochures",
  },
  {
    title: "Product Packaging",
    description: "Custom packaging solutions with die-cut designs and food-safe options.",
    icon: Package,
    image: "https://images.unsplash.com/photo-1589758438368-0ad531db3366?w=500",
    color: "from-orange-500 to-red-500",
    link: "/services/packaging-printing",
  },
  {
    title: "Posters & Banners",
    description: "Large format printing for events, promotions, and outdoor advertising.",
    icon: ImageIcon,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500",
    color: "from-yellow-500 to-orange-500",
    link: "/services/book-printing",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Printing Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete offset and digital printing solutions for businesses and individuals across Bhavani, Erode, and surrounding areas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90 group-hover:opacity-80 transition-opacity z-10`} />
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Icon */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-gray-900" />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {service.description}
                </p>
                
                <Link 
                  href={service.link}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                >
                  Learn More
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-2xl transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all"
          >
            Get a Free Quote
            <ChevronRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

