import { services } from "@/data/content";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="bg-dark-900">
      {/* Hero Section */}
      <section className="bg-dark-pattern py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive capabilities to take your venture from idea to scale
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, idx) => (
              <div
                key={service.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-300 mb-6">{service.description}</p>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-white">Key Capabilities:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start">
                          <span className="text-primary-400 mr-3 mt-1">✓</span>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={idx % 2 === 1 ? "md:order-1" : ""}>
                  <div className="bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl h-80 flex items-center justify-center border border-gray-700">
                    <div className="text-8xl opacity-50">{service.icon}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-dark-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How We Deliver
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our flexible engagement models designed to meet your needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-dark-700/50 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-gray-700 hover:border-primary-500 transition-all">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Project-Based
              </h3>
              <p className="text-gray-300 mb-4">
                Fixed scope and timeline for specific initiatives like MVP development or
                growth campaigns.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Clear deliverables</li>
                <li>• Defined timeline</li>
                <li>• Fixed investment</li>
              </ul>
            </div>
            <div className="bg-dark-700/50 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-gray-700 hover:border-primary-500 transition-all">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Retainer Partnership
              </h3>
              <p className="text-gray-300 mb-4">
                Ongoing support and strategic guidance as an extension of your team.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Monthly engagement</li>
                <li>• Flexible scope</li>
                <li>• Strategic support</li>
              </ul>
            </div>
            <div className="bg-dark-700/50 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-gray-700 hover:border-primary-500 transition-all">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Venture Co-Building
              </h3>
              <p className="text-gray-300 mb-4">
                Partner with us to build new ventures with shared equity and commitment.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Equity partnership</li>
                <li>• Deep involvement</li>
                <li>• Shared success</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-900/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Venture?
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Let&apos;s discuss which services can help you achieve your goals
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors btn-glow"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
