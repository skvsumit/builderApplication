import Link from "next/link";
import { FaBuilding, FaHammer, FaRulerCombined } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Building Your Dream Spaces
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Professional architectural design and construction services tailored to your vision
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <FaRulerCombined className="text-5xl text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Expert Design</h3>
              <p className="text-gray-600">
                Innovative architectural designs that blend functionality with aesthetics
              </p>
            </div>
            <div className="text-center p-6">
              <FaHammer className="text-5xl text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quality Construction</h3>
              <p className="text-gray-600">
                Superior craftsmanship and attention to detail in every project
              </p>
            </div>
            <div className="text-center p-6">
              <FaBuilding className="text-5xl text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Complete Solutions</h3>
              <p className="text-gray-600">
                From concept to completion, we handle every aspect of your project
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your architectural vision to life
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
