import Link from "next/link";
import Image from "next/image";
import { services, products, workProcess, caseStudies } from "@/data/content";

export default function Home() {
  return (
    <div className="bg-dark-900">
      {/* Hero Section */}
      <section className="relative bg-dark-pattern py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Building Next-Generation Businesses
              <br />
              <span className="gradient-text">for Humanity & Planet</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We co-build future-ready ventures by transforming skills, ideas, and
              businesses using AI and modern strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-all btn-glow"
              >
                Explore Our Products
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-transparent hover:bg-dark-700 text-white border-2 border-primary-500 rounded-lg font-semibold transition-all"
              >
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Summary */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-300 mb-4">
                Ideasphere is a <strong className="text-white">Venture Transformation Studio</strong> dedicated
                to helping people and businesses create next-generation, impact-driven
                businesses.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                We combine deep expertise in AI, technology, product design, and growth
                strategy to transform ideas and businesses into scalable ventures that
                create positive impact.
              </p>
              <Link
                href="/about"
                className="inline-block px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors btn-glow"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
              <Image
                src="/ideasphere-office.jpg"
                alt="Ideasphere Venture Transformation Studio - Team collaborating with futuristic technology"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-dark-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              End-to-end capabilities to transform your ideas into thriving businesses
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-2xl hover:shadow-primary-500/20 transition-all border border-gray-700 hover:border-primary-500 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors btn-glow"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Products
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Internal platforms and tools we've built to power modern businesses
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 6).map((product) => (
              <div
                key={product.id}
                className="group relative bg-dark-700/50 backdrop-blur-sm rounded-xl p-6 border-2 border-gray-700 hover:border-primary-500 transition-all hover:shadow-xl hover:shadow-primary-500/20 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">
                      {product.name}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        product.status === "Live"
                          ? "bg-green-500/20 text-green-300 border border-green-500/50"
                          : product.status === "Beta"
                          ? "bg-blue-500/20 text-blue-300 border border-blue-500/50"
                          : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/50"
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-primary-500/20 text-primary-300 rounded text-xs border border-primary-500/30"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-block px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors btn-glow"
            >
              Explore All Products
            </Link>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 bg-dark-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How We Work
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our proven 5-step methodology to transform ideas into successful ventures
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {workProcess.map((step) => (
              <div
                key={step.step}
                className="group bg-dark-700/50 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-xl hover:shadow-primary-500/20 transition-all relative hover:-translate-y-1 border border-gray-700 hover:border-primary-500"
              >
                <div className="text-3xl mb-3">{step.icon}</div>
                <div className="text-sm font-semibold text-primary-400 mb-2">
                  Step {step.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-300 mb-3">{step.description}</p>
                <div className="text-xs text-gray-400">{step.duration}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/how-we-work"
              className="inline-block px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors btn-glow"
            >
              Learn Our Methodology
            </Link>
          </div>
        </div>
      </section>

      {/* Impact / Case Studies Preview */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Real results from ventures we've helped transform
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="group bg-dark-700/50 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary-500/20 transition-all hover:-translate-y-1 border border-gray-700 hover:border-primary-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary-400 font-semibold mb-2">
                    {study.industry}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {study.title}
                  </h3>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {Object.entries(study.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-primary-400">
                          {value}
                        </div>
                        <div className="text-xs text-gray-400 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/impact"
              className="inline-block px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors btn-glow"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Careers / Join Us */}
      <section className="py-16 bg-dark-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Join Our Mission
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Be part of building the next generation of impact-driven businesses.
              We&apos;re always looking for passionate builders, designers, and strategists.
            </p>
            <Link
              href="/careers"
              className="inline-block px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors btn-glow"
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-dark-pattern relative overflow-hidden border-t border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-accent-500/5 to-primary-600/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Let&apos;s discuss how we can help transform your idea or business into a
            thriving venture.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors btn-glow"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
