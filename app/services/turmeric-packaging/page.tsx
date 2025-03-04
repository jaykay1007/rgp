import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function TurmericPackagingPage() {
  const packagingOptions = [
    { name: "Retail Pouches", description: "Attractive, resealable pouches for consumer-sized quantities." },
    { name: "Bulk Packaging", description: "Large, durable bags for wholesale distribution." },
    { name: "Premium Gift Boxes", description: "Elegant packaging for high-grade turmeric, perfect for gifting." },
    {
      name: "Eco-Friendly Packaging",
      description: "Biodegradable and recyclable options for environmentally conscious brands.",
    },
    {
      name: "Custom Branded Containers",
      description: "Unique packaging shapes and designs to make your brand stand out.",
    },
    { name: "Export-Ready Packaging", description: "Compliant with international standards for global distribution." },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <Link href="/#services" className="inline-flex items-center text-primary hover:underline mb-4">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Services
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Packaging for Turmeric</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Turmeric Packaging Options</h2>
            <p className="text-gray-700 mb-6">
              Create eye-catching packaging for Erode's famous turmeric with our specialized printing services. We offer
              a range of packaging solutions to showcase the quality of your turmeric products.
            </p>
            <ul className="space-y-4">
              {packagingOptions.map((option, index) => (
                <li key={index} className="bg-white rounded-lg shadow p-4">
                  <h3 className="font-semibold text-lg mb-2">{option.name}</h3>
                  <p className="text-gray-600">{option.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHVybWVyaWN8ZW58MHx8MHx8fDA%3D"
              alt="Turmeric Packaging"
              width={600}
              height={400}
              className="rounded-lg shadow-lg mb-6"
            />
            <h2 className="text-2xl font-semibold mb-4">Why Choose Our Turmeric Packaging?</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Designs that highlight the quality of Erode turmeric</li>
              <li>High-quality materials to preserve product freshness</li>
              <li>Vibrant color printing to make your products stand out</li>
              <li>Customizable sizes and shapes</li>
              <li>Options for different price points and market segments</li>
              <li>Compliance with food packaging regulations</li>
            </ul>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Ready to Elevate Your Turmeric Packaging?</h3>
              <p className="text-gray-700 mb-4">
                Contact us today to discuss your turmeric packaging needs and request samples of our packaging options.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-white hover:bg-primary/90 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

