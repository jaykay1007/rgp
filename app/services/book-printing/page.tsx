import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function BookPrintingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <Link href="/#services" className="inline-flex items-center text-primary hover:underline mb-4">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Services
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Book Printing</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Professional Book Printing and Binding</h2>
            <p className="text-gray-700 mb-6">
              Our book printing services cater to authors, publishers, and businesses looking to produce high-quality
              books, manuals, and catalogs. We offer a range of binding options and paper choices to suit your specific
              needs.
            </p>
            <h3 className="text-xl font-semibold mb-4">Why Choose Our Book Printing Services?</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>High-quality printing for crisp text and vibrant images</li>
              <li>Multiple binding options including perfect binding, saddle-stitching, and hardcover</li>
              <li>Wide range of paper stocks to choose from</li>
              <li>Short-run and print-on-demand capabilities</li>
              <li>Expert assistance with layout and design</li>
              <li>Competitive pricing for both small and large print runs</li>
            </ul>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMHByaW50aW5nfGVufDB8fDB8fHww"
              alt="Book Printing"
              width={600}
              height={400}
              className="rounded-lg shadow-lg mb-6"
            />
            <h3 className="text-xl font-semibold mb-4">Our Book Printing Process</h3>
            <p className="text-gray-700 mb-6">
              From manuscript to finished product, we guide you through every step of the book printing process. Our
              team of experts ensures that your book meets the highest standards of quality, from paper selection to
              color management and binding.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Ready to Bring Your Book to Life?</h3>
              <p className="text-gray-700 mb-4">
                Contact us today to discuss your book printing project and how we can help you create a professional,
                high-quality publication.
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

