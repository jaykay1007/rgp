"use client"

import { motion } from "framer-motion"
import { CheckCircle, Target, Eye, Award, Users } from "lucide-react"
import Image from "next/image"

export default function About() {
  const features = [
    { icon: CheckCircle, title: "Quality Assurance", desc: "ISO certified printing process" },
    { icon: Target, title: "On-Time Delivery", desc: "Meeting deadlines without compromise" },
    { icon: Eye, title: "Attention to Detail", desc: "Perfection in every print" },
    { icon: Award, title: "Industry Excellence", desc: "27+ years of expertise" }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            About Our Legacy
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Trusted Printing Partner Since 1997
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Raja Ganapathi Offset has been serving Bhavani, Erode, and surrounding areas with premium printing solutions for over 27 years
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg"
                alt="Raja Ganapathi Offset - Printing Excellence"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl shadow-xl">
                <Users className="w-8 h-8 mb-2" />
                <div className="text-3xl font-bold">15,000+</div>
                <div className="text-sm">Happy Clients</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Excellence in Every Print
            </h3>
            <p className="text-gray-600 mb-8">
              At Raja Ganapathi Offset, we combine traditional craftsmanship with modern technology to deliver exceptional printing services. 
              Our state-of-the-art facility in Bhavani is equipped with the latest offset and digital printing machinery, ensuring vibrant colors 
              and crisp details in every project.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
              <Award className="w-8 h-8 text-amber-600" />
              <div>
                <p className="font-semibold text-gray-900">Certified Excellence</p>
                <p className="text-sm text-gray-600">ISO 9001:2015 Certified Printing Process</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
