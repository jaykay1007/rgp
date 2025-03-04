"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function PrintingProcess() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      title: "Design & Consultation",
      description: "We start with understanding your requirements and creating a design that meets your needs.",
      icon: "🎨",
    },
    {
      title: "Pre-Press",
      description: "We prepare your design for printing, ensuring colors, layout, and all elements are perfect.",
      icon: "🖥️",
    },
    {
      title: "Printing",
      description:
        "Using our state-of-the-art offset printing press, we bring your design to life with vibrant colors.",
      icon: "🖨️",
    },
    {
      title: "Finishing",
      description: "We apply any necessary finishing touches like cutting, folding, binding, or laminating.",
      icon: "✂️",
    },
    {
      title: "Quality Check",
      description: "Every printed item undergoes a thorough quality check to ensure it meets our high standards.",
      icon: "✅",
    },
    {
      title: "Delivery",
      description: "We carefully package your printed materials and deliver them to you on time.",
      icon: "🚚",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <ul className="space-y-2">
            {steps.map((step, index) => (
              <li key={index}>
                <button
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                    activeStep === index
                      ? "bg-primary text-white"
                      : index < activeStep
                        ? "bg-primary/10 text-primary"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-white/20">
                    {index < activeStep ? <Check className="h-4 w-4" /> : <span>{index + 1}</span>}
                  </span>
                  <span className="font-medium">{step.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:w-2/3 bg-gray-50 rounded-xl p-6">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="h-full flex flex-col"
          >
            <div className="text-4xl mb-4">{steps[activeStep].icon}</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{steps[activeStep].title}</h3>
            <p className="text-gray-700 mb-6">{steps[activeStep].description}</p>

            <div className="mt-auto flex justify-between">
              <button
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <button
                onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                disabled={activeStep === steps.length - 1}
                className="px-4 py-2 rounded-md bg-primary text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

