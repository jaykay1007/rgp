import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function LargeFormatPrintingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <Link href="/#services" className="inline-flex items-center text-primary hover:underline mb-4">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Services
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Large Format Printing</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Eye-Catching Large Scale Prints</h2>
            <p className="text-gray-700 mb-6">
              Our large format printing services deliver high-impact visuals for your marketing and advertising needs.
              From banners and posters to trade show displays, we bring your designs to life on a grand scale.
            </p>
            <h3 className="text-xl font-semibold mb-4">Why Choose Our Large Format Printing?</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>High-resolution prints for maximum visual impact</li>
              <li>Wide range of materials including vinyl, fabric, and rigid substrates</li>
              <li>Durable, weather-resistant options for outdoor use</li>
              <li>Custom sizes to fit your specific needs</li>
              <li>Quick turnaround times for time-sensitive projects</li>
              <li>Expert finishing and installation services available</li>
            </ul>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFyZ2UlMjBmb3JtYXQlMjBwcmludGluZ3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Large Format Printing"
              width={600}
              height={400}
              className="rounded-lg shadow-lg mb-6"
            />
            <h3 className="text-xl font-semibold mb-4">Our Large Format Printing Capabilities</h3>
            <p className="text-gray-700 mb-6">
              Our advanced large format printers can handle a variety of materials and sizes, ensuring that your message
              stands out whether it's displayed indoors or outdoors. We use high-quality inks that resist fading,
              ensuring your prints look great for longer.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Ready to Make a Big Impression?</h3>
              <p className="text-gray-700 mb-4">
                Contact us today to discuss your large format printing project and how we can help you create impactful
                visual communications.
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

