import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function StationeryPrintingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <Link href="/#services" className="inline-flex items-center text-primary hover:underline mb-4">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Services
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Stationery Printing</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Professional Business Stationery</h2>
            <p className="text-gray-700 mb-6">
              Our stationery printing services help you create a cohesive and professional brand image across all your
              business materials. From business cards to letterheads, we ensure consistent quality and design.
            </p>
            <h3 className="text-xl font-semibold mb-4">Why Choose Our Stationery Printing?</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>High-quality paper stocks for a premium feel</li>
              <li>Consistent color reproduction across all items</li>
              <li>Wide range of finishing options including embossing and foil stamping</li>
              <li>Custom designs to match your brand identity</li>
              <li>Quick turnaround times for urgent orders</li>
              <li>Bulk printing discounts available</li>
            </ul>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhdGlvbmVyeXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Stationery Printing"
              width={600}
              height={400}
              className="rounded-lg shadow-lg mb-6"
            />
            <h3 className="text-xl font-semibold mb-4">Our Stationery Printing Services</h3>
            <p className="text-gray-700 mb-6">
              We offer a comprehensive range of stationery printing services, including business cards, letterheads,
              envelopes, notepads, and presentation folders. Our team can help you create a cohesive set of materials
              that reinforce your brand identity and leave a lasting impression.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Ready to Upgrade Your Business Stationery?</h3>
              <p className="text-gray-700 mb-4">
                Contact us today to discuss your stationery printing needs and how we can help elevate your brand's
                professional image.
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

