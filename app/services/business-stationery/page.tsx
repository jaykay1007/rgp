import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function BusinessStationeryPage() {
  const stationeryItems = [
    { name: "Letterheads", description: "Professional letterheads for all your business correspondence." },
    { name: "Business Cards", description: "High-quality business cards to make a lasting impression." },
    { name: "Envelopes", description: "Custom printed envelopes to complement your letterheads." },
    { name: "Notepads", description: "Branded notepads for internal use or client giveaways." },
    { name: "Folders", description: "Presentation folders to organize and present your documents." },
    { name: "Compliment Slips", description: "Personalized compliment slips for a professional touch." },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <Link href="/#services" className="inline-flex items-center text-primary hover:underline mb-4">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Services
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Business Stationery</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Business Stationery Options</h2>
            <p className="text-gray-700 mb-6">
              Create a cohesive and professional image for your business with our custom stationery items. From
              letterheads to business cards, we've got all your needs covered.
            </p>
            <ul className="space-y-4">
              {stationeryItems.map((item, index) => (
                <li key={index} className="bg-white rounded-lg shadow p-4">
                  <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1473"
              alt="Business Stationery Samples"
              width={600}
              height={400}
              className="rounded-lg shadow-lg mb-6"
            />
            <h2 className="text-2xl font-semibold mb-4">Why Choose Our Business Stationery?</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Consistent branding across all stationery items</li>
              <li>High-quality paper stocks and printing techniques</li>
              <li>Customizable designs to match your brand identity</li>
              <li>Bulk order discounts for cost-effective solutions</li>
              <li>Quick turnaround times to meet your business needs</li>
              <li>Eco-friendly paper options available</li>
            </ul>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Ready to Upgrade Your Business Stationery?</h3>
              <p className="text-gray-700 mb-4">
                Contact us today to discuss your business stationery needs and how we can help enhance your professional
                image.
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

