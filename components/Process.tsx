"use client"

import { motion } from "framer-motion"
import { FileText, Palette, Printer, Package, Truck, CheckCircle } from "lucide-react"

export default function Process() {
  const steps = [
    {
      icon: FileText,
      title: "Consultation",
      description: "Discuss your requirements and get expert advice",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "Design & Approval",
      description: "Create or refine designs with your feedback",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Printer,
      title: "Printing",
      description: "High-quality offset or digital printing",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Package,
      title: "Finishing",
      description: "Cutting, binding, lamination as required",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: CheckCircle,
      title: "Quality Check",
      description: "Thorough inspection before delivery",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Truck,
      title: "Delivery",
      description: "Safe and timely delivery to your location",
      color: "from-yellow-500 to-orange-500"
    }
  ]

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            From Concept to Completion
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined printing process ensures quality at every step
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Hidden on mobile */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                {/* Icon Container */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative mb-6"
                >
                  <div className={`w-20 h-20 mx-auto bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-700">
                    {index + 1}
                  </div>
                </motion.div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">24 Hours</div>
              <p className="text-gray-600">Express delivery available</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <p className="text-gray-600">Quality guaranteed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">Free</div>
              <p className="text-gray-600">Design consultation</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
