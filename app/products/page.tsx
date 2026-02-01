import { products } from "@/data/content";
import Link from "next/link";

export default function ProductsPage() {
  const statusColors = {
    Live: "bg-green-500/20 text-green-300 border-green-500/50",
    Beta: "bg-blue-500/20 text-blue-300 border-blue-500/50",
    MVP: "bg-yellow-500/20 text-yellow-300 border-yellow-500/50",
  };

  return (
    <div className="bg-dark-900">
      {/* Hero Section */}
      <section className="bg-dark-pattern py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="gradient-text">Products</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powerful platforms and tools we've built to enable modern businesses
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-dark-700/50 backdrop-blur-sm border-2 border-gray-700 rounded-xl overflow-hidden hover:border-primary-500 hover:shadow-2xl hover:shadow-primary-500/20 transition-all hover:-translate-y-1"
              >
                {/* Product Header */}
                <div className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-accent-600 h-48 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                    <div className="absolute top-5 right-5 w-24 h-24 bg-white rounded-full blur-2xl"></div>
                    <div className="absolute bottom-5 left-5 w-28 h-28 bg-white rounded-full blur-3xl"></div>
                  </div>
                  <div className="relative text-7xl filter drop-shadow-xl">
                    {product.category === "Platform"
                      ? "🚀"
                      : product.category === "AI Tool"
                      ? "🤖"
                      : product.category === "SaaS"
                      ? "💼"
                      : product.category === "HR Tech"
                      ? "👥"
                      : product.category === "ESG"
                      ? "🌱"
                      : "🌐"}
                  </div>
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-sm bg-white/90 ${
                        statusColors[product.status as keyof typeof statusColors]
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-6">
                  <div className="text-sm text-primary-400 font-semibold mb-2">
                    {product.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-white">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-start">
                          <span className="text-primary-400 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors btn-glow">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-dark-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Product Ecosystem
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our products work together to provide end-to-end support for your venture
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                category: "Platforms",
                count: products.filter((p) => p.category === "Platform").length,
                icon: "🚀",
              },
              {
                category: "AI Tools",
                count: products.filter((p) => p.category === "AI Tool").length,
                icon: "🤖",
              },
              {
                category: "SaaS Solutions",
                count: products.filter((p) => p.category === "SaaS").length,
                icon: "💼",
              },
              {
                category: "Specialized",
                count: products.filter(
                  (p) => p.category === "HR Tech" || p.category === "ESG" || p.category === "Community"
                ).length,
                icon: "🎯",
              },
            ].map((cat, idx) => (
              <div key={idx} className="bg-dark-700/50 backdrop-blur-sm p-6 rounded-xl text-center shadow-sm border border-gray-700 hover:border-primary-500 transition-all">
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {cat.category}
                </h3>
                <p className="text-3xl font-bold text-primary-400">{cat.count}</p>
                <p className="text-sm text-gray-400">Products</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Status Legend */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Product Status Guide
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <span className="inline-block px-4 py-2 bg-green-500/20 text-green-300 border border-green-500/50 rounded-full font-semibold mb-3">
                  Live
                </span>
                <p className="text-sm text-gray-300">
                  Fully launched and available for use
                </p>
              </div>
              <div className="text-center">
                <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 border border-blue-500/50 rounded-full font-semibold mb-3">
                  Beta
                </span>
                <p className="text-sm text-gray-300">
                  In testing with select users
                </p>
              </div>
              <div className="text-center">
                <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-300 border border-yellow-500/50 rounded-full font-semibold mb-3">
                  MVP
                </span>
                <p className="text-sm text-gray-300">
                  Minimum viable product in development
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-900/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interested in Our Products?
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Get early access or learn how these tools can accelerate your venture
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors btn-glow"
          >
            Request Demo
          </Link>
        </div>
      </section>
    </div>
  );
}
