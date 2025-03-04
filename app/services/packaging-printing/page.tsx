import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function PackagingPrintingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <Link href="/#services" className="inline-flex items-center text-primary hover:underline mb-4">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Services
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Packaging Printing</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Custom Packaging Solutions</h2>
            <p className="text-gray-700 mb-6">
              Our packaging printing services help your products stand out on the shelf and protect them during
              shipping. We offer a wide range of customizable options to suit various industries and product types.
            </p>
            <h3 className="text-xl font-semibold mb-4">Why Choose Our Packaging Printing?</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>High-quality printing for eye-catching designs</li>
              <li>Variety of materials including cardboard, corrugated board, and flexible packaging</li>
              <li>Custom sizes and shapes to fit your product perfectly</li>
              <li>Eco-friendly packaging options available</li>
              <li>Prototyping services for product development</li>
              <li>Bulk printing capabilities for large orders</li>
            </ul>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1589758438368-0ad531db3366?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFja2FnaW5nfGVufDB8fDB8fHww"
              alt="Packaging Printing"
              width={600}
              height={400}
              className="rounded-lg shadow-lg mb-6"
            />
            <h3 className="text-xl font-semibold mb-4">Our Packaging Printing Expertise</h3>
            <p className="text-gray-700 mb-6">
              We use advanced printing techniques and finishing processes to create packaging that not only looks great
              but also performs well. From food-safe materials to luxury finishes, we can accommodate a wide range of
              packaging requirements.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Ready to Elevate Your Product Packaging?</h3>
              <p className="text-gray-700 mb-4">
                Contact us today to discuss your packaging printing needs and how we can help create packaging that
                enhances your product and brand.
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

