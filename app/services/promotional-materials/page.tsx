import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function PromotionalMaterialsPage() {
  const promotionalItems = [
    { name: "Branded Pens", description: "High-quality pens with your company logo for everyday use." },
    { name: "Custom T-Shirts", description: "Comfortable t-shirts with your designs for events or merchandise." },
    { name: "Promotional Flyers", description: "Eye-catching flyers to advertise your products or events." },
    { name: "Branded Mugs", description: "Durable mugs with your logo for office use or giveaways." },
    { name: "Customized Notebooks", description: "Practical notebooks with your branding for meetings or gifts." },
    { name: "Promotional Banners", description: "Large format banners for trade shows and outdoor advertising." },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <Link href="/#services" className="inline-flex items-center text-primary hover:underline mb-4">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Services
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Promotional Materials</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Promotional Products</h2>
            <p className="text-gray-700 mb-6">
              Boost your brand visibility with our range of high-quality promotional materials. From everyday items to
              event-specific products, we've got you covered.
            </p>
            <ul className="space-y-4">
              {promotionalItems.map((item, index) => (
                <li key={index} className="bg-white rounded-lg shadow p-4">
                  <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1621844061203-3f31a2a7d6ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvbW90aW9uYWwlMjBtYXRlcmlhbHN8ZW58MHx8MHx8fDA%3D"
              alt="Promotional Materials Samples"
              width={600}
              height={400}
              className="rounded-lg shadow-lg mb-6"
            />
            <h2 className="text-2xl font-semibold mb-4">Why Choose Our Promotional Materials?</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Wide range of customizable products</li>
              <li>High-quality printing and materials</li>
              <li>Bulk order discounts available</li>
              <li>Fast turnaround times</li>
              <li>Expert advice on effective promotional strategies</li>
              <li>Eco-friendly options for sustainable marketing</li>
            </ul>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Ready to Promote Your Brand?</h3>
              <p className="text-gray-700 mb-4">
                Contact us today to discuss your promotional needs and how we can help boost your brand visibility.
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

