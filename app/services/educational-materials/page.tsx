import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function EducationalMaterialsPage() {
  const materialTypes = [
    { name: "Textbooks", description: "High-quality printed textbooks for various subjects and educational levels." },
    { name: "Workbooks and Practice Books", description: "Interactive workbooks with exercises and problem sets." },
    {
      name: "Exam Papers and Answer Sheets",
      description: "Secure and standardized exam materials for schools and colleges.",
    },
    { name: "Educational Posters and Charts", description: "Visually appealing learning aids for classrooms." },
    {
      name: "Student Planners and Diaries",
      description: "Customized planners to help students organize their academic year.",
    },
    {
      name: "Certificates and Diplomas",
      description: "High-quality certificates and diplomas for academic achievements.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <Link href="/#services" className="inline-flex items-center text-primary hover:underline mb-4">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Services
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">School & College Materials</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Educational Material Options</h2>
            <p className="text-gray-700 mb-6">
              We offer comprehensive printing services for educational institutions in Erode, including a wide range of
              materials to support learning and academic administration.
            </p>
            <ul className="space-y-4">
              {materialTypes.map((type, index) => (
                <li key={index} className="bg-white rounded-lg shadow p-4">
                  <h3 className="font-semibold text-lg mb-2">{type.name}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1473"
              alt="Educational Materials"
              width={600}
              height={400}
              className="rounded-lg shadow-lg mb-6"
            />
            <h2 className="text-2xl font-semibold mb-4">Why Choose Our Educational Printing Services?</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>High-quality printing for clear and legible materials</li>
              <li>Durable binding options for long-lasting use</li>
              <li>Customizable designs to match school or college branding</li>
              <li>Eco-friendly paper options available</li>
              <li>Bulk printing discounts for large orders</li>
              <li>Quick turnaround times to meet academic schedules</li>
            </ul>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Ready to Enhance Your Educational Materials?</h3>
              <p className="text-gray-700 mb-4">
                Contact us today to discuss your school or college's printing needs and how we can support your
                educational goals.
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

