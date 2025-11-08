"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  ChevronRight, 
  Printer, 
  Package, 
  BookOpen, 
  CreditCard, 
  FileText, 
  Gift, 
  Palette,
  Layers,
  Zap,
  Shield,
  Clock
} from "lucide-react"
import { useState } from "react"

const offsetServices = [
  {
    id: "multicolor-offset",
    title: "Multicolor Offset Printing",
    description: "High-quality 4-color and spot color printing for commercial needs",
    icon: Printer,
    image: "https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?q=80&w=2070",
    features: ["CMYK + Spot Colors", "Large Volume Capability", "Pantone Matching", "Premium Finishes"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "wedding-invitations",
    title: "Premium Wedding Invitations",
    description: "Elegant wedding cards with foiling, embossing, and custom designs",
    icon: Gift,
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070",
    features: ["Custom Designs", "Gold/Silver Foiling", "Embossing", "Die Cutting"],
    color: "from-pink-500 to-rose-500"
  },
  {
    id: "business-cards",
    title: "Professional Visiting Cards",
    description: "Premium business cards that make lasting impressions",
    icon: CreditCard,
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500",
    features: ["UV Coating", "Matt/Gloss Lamination", "Spot UV", "Multiple Paper Options"],
    color: "from-purple-500 to-indigo-500"
  },
  {
    id: "catalogs-brochures",
    title: "Catalogs & Brochures",
    description: "Eye-catching marketing materials for your business",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?w=500",
    features: ["Perfect Binding", "Saddle Stitching", "Full Color", "Custom Sizes"],
    color: "from-green-500 to-emerald-500"
  },
  {
    id: "packaging",
    title: "Product Packaging",
    description: "Custom boxes and packaging solutions for all products",
    icon: Package,
    image: "https://images.unsplash.com/photo-1589758438368-0ad531db3366?w=500",
    features: ["Custom Die Cuts", "Food Safe Options", "Eco-Friendly", "Window Patching"],
    color: "from-orange-500 to-red-500"
  },
  {
    id: "letterheads-billbooks",
    title: "Letterheads & Bill Books",
    description: "Professional stationery for businesses and organizations",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=500",
    features: ["Watermark Paper", "Sequential Numbering", "Carbon Copies", "Perforations"],
    color: "from-teal-500 to-cyan-500"
  },
  {
    id: "posters-banners",
    title: "Posters & Flex Banners",
    description: "Large format printing for events and advertising",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500",
    features: ["Weather Resistant", "UV Protected", "Large Sizes", "Vibrant Colors"],
    color: "from-yellow-500 to-orange-500"
  },
  {
    id: "labels-stickers",
    title: "Labels & Stickers",
    description: "Custom labels and stickers for products and branding",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1609205807490-89566236ae34?w=500",
    features: ["Die Cut Shapes", "Waterproof Options", "Roll Form", "Sheet Form"],
    color: "from-indigo-500 to-purple-500"
  }
]

export default function EnhancedServices() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", label: "All Services" },
    { id: "commercial", label: "Commercial Printing" },
    { id: "personal", label: "Personal & Events" },
    { id: "packaging", label: "Packaging Solutions" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Our Premium Services
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Expert <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Offset Printing</span> Services
          </h2>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            From wedding invitations to commercial catalogs, we deliver premium quality printing services with state-of-the-art offset technology. Serving Bhavani, Erode, Komarapalayam, and surrounding areas.
          </p>

          {/* Service Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2"
            >
              <Zap className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold">Express Delivery</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2"
            >
              <Shield className="w-5 h-5 text-green-500" />
              <span className="font-semibold">Quality Guaranteed</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2"
            >
              <Clock className="w-5 h-5 text-blue-500" />
              <span className="font-semibold">On-Time Delivery</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {offsetServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80 group-hover:opacity-90 transition-opacity z-10`} />
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-20">
                  <motion.div
                    animate={hoveredService === service.id ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg"
                  >
                    <service.icon className="w-6 h-6 text-gray-900" />
                  </motion.div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                
                {/* Features */}
                <div className="space-y-2 mb-4">
                  {service.features.slice(0, hoveredService === service.id ? 4 : 2).map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <ChevronRight className="w-3 h-3 text-primary" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={`/services/${service.id}`}
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-lg font-medium hover:from-primary hover:to-primary/80 transition-all duration-300"
                >
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              {/* Hover Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: hoveredService === service.id ? 1 : 0, y: hoveredService === service.id ? 0 : 20 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary p-2 text-white text-center text-sm font-semibold"
              >
                Get Instant Quote
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need Custom Printing Solutions?
          </h3>
          <p className="text-gray-700 mb-6">
            We offer customized printing services for all your specific requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+919994466277"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Call: 9994466277
            </Link>
            <Link
              href="https://wa.me/919994466277"
              className="inline-flex items-center justify-center px-8 py-3 bg-green-500 text-white rounded-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              WhatsApp Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
