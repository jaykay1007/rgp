import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function DigitalPrintingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <Link href="/#services" className="inline-flex items-center text-primary hover:underline mb-4">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Services
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Digital Printing</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Fast and Efficient Printing Solutions</h2>
            <p className="text-gray-700 mb-6">
              Our digital printing services offer quick turnaround times and high-quality results for short-run and
              variable data printing needs. Perfect for businesses that require flexibility and customization in their
              print materials.
            </p>
            <h3 className="text-xl font-semibold mb-4">Why Choose Our Digital Printing?</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Quick turnaround times for urgent projects</li>
              <li>Cost-effective for small to medium print runs</li>
              <li>High-quality, vibrant color reproduction</li>
              <li>Variable data printing for personalized materials</li>
              <li>Wide range of paper stocks and finishes available</li>
              <li>Ideal for brochures, flyers, business cards, and more</li>
            </ul>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlnaXRhbCUyMHByaW50aW5nfGVufDB8fDB8fHww"
              alt="Digital Printing"
              width={600}
              height={400}
              className="rounded-lg shadow-lg mb-6"
            />
            <h3 className="text-xl font-semibold mb-4">Our Digital Printing Process</h3>
            <p className="text-gray-700 mb-6">
              Our state-of-the-art digital presses ensure crisp text, sharp images, and consistent color throughout your
              print run. We use advanced color management techniques to match your brand colors accurately and deliver
              print materials that truly represent your business.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Ready to Start Your Digital Printing Project?</h3>
              <p className="text-gray-700 mb-4">
                Contact us today to discuss your digital printing needs and how we can help bring your ideas to life
                quickly and efficiently.
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

