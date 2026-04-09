import Link from "next/link";
import Image from "next/image";
import { services, portfolio, workProcess, caseStudies } from "@/data/content";

export default function Home() {
  return (
    <div className="bg-dark-900">
      {/* Hero Section */}
      <section className="relative bg-dark-pattern py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-semibold mb-6 glass glass-shine">
              Product Studio — Delhi, India
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              We Design, Build & Scale
              <br />
              <span className="gradient-text">Digital Products</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              From idea to launch — we build production-ready web apps, AI platforms,
              and mobile products for startups and businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-all btn-glossy"
              >
                See Our Work
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-transparent hover:bg-dark-700 text-white border-2 border-primary-500 rounded-lg font-semibold transition-all"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Bar */}
      <section className="py-8 bg-dark-800 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-400">20+</div>
              <div className="text-sm text-gray-400">Products Shipped</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-400">10+</div>
              <div className="text-sm text-gray-400">Industries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-400">100K+</div>
              <div className="text-sm text-gray-400">End Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-400">95%</div>
              <div className="text-sm text-gray-400">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Your Product Team,
                <br />
                <span className="gradient-text">On Demand</span>
              </h2>
              <p className="text-lg text-gray-300 mb-4">
                Ideasphere is a <strong className="text-white">Product Studio</strong> that
                partners with startups and businesses to design, build, and scale digital
                products.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                We combine deep expertise in AI, full-stack development, product design,
                and growth strategy to ship products that users love and businesses depend on.
              </p>
              <Link
                href="/about"
                className="inline-block px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors btn-glow"
              >
                About Us
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "💻", label: "Web & Mobile Apps" },
                { icon: "🤖", label: "AI Products" },
                { icon: "🎨", label: "Product Design" },
                { icon: "📈", label: "Growth & Scale" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-dark-700/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700 hover:border-primary-500 transition-all glass glass-hover glass-shine"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <p className="text-white font-semibold text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-dark-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              End-to-end product capabilities — from first sketch to scale
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <div
                key={service.id}
                className="group bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-2xl hover:shadow-primary-500/20 transition-all border border-gray-700 hover:border-primary-500 hover:-translate-y-1 glass glass-hover glass-shine"
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
              All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio / Work */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Products We&apos;ve Built
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Real products shipped for real clients — with measurable results
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.slice(0, 6).map((project) => (
              <div
                key={project.id}
                className="group relative bg-dark-700/50 backdrop-blur-sm rounded-xl border-2 border-gray-700 hover:border-primary-500 transition-all hover:shadow-xl hover:shadow-primary-500/20 hover:-translate-y-1 overflow-hidden glass glass-hover"
              >
                <div className="p-6">
                  <div className="text-sm text-primary-400 font-semibold mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {project.url ? (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                        {project.name} ↗
                      </a>
                    ) : project.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">for {project.client}</p>
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-dark-800 text-gray-400 rounded text-xs border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-gray-700">
                    <p className="text-sm text-primary-400 font-semibold">
                      {project.results}
                    </p>
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
              View All Work
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
              Our 5-step process to take your product from idea to scale
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {workProcess.map((step) => (
              <div
                key={step.step}
                className="group bg-dark-700/50 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-xl hover:shadow-primary-500/20 transition-all relative hover:-translate-y-1 border border-gray-700 hover:border-primary-500 glass glass-hover glass-shine"
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
              Learn Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Results That Speak
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Detailed case studies from products we&apos;ve built and scaled
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="group bg-dark-700/50 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary-500/20 transition-all hover:-translate-y-1 border border-gray-700 hover:border-primary-500 glass glass-hover"
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

      {/* Venture Co-Building CTA */}
      <section className="py-16 bg-dark-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-accent-500/20 text-accent-400 border border-accent-500/30 rounded-full text-sm font-semibold mb-4">
                For the Right Ideas
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                We Also Co-Build Ventures
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Beyond client work, we selectively partner with founders to co-build
                ventures with equity. We bring the product, tech, and growth — you
                bring the domain expertise and vision.
              </p>
              <Link
                href="/contact?interest=co-building"
                className="inline-block px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors btn-glow"
              >
                Pitch Your Idea
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { metric: "Equity", desc: "partnership model" },
                { metric: "Full-Stack", desc: "product team" },
                { metric: "0 to 1", desc: "venture building" },
                { metric: "Shared", desc: "risk & reward" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-dark-800/80 backdrop-blur-sm rounded-xl p-5 text-center border border-gray-700 glass glass-shine"
                >
                  <div className="text-xl font-bold text-primary-400 mb-1">
                    {item.metric}
                  </div>
                  <p className="text-sm text-gray-400 capitalize">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark-pattern relative overflow-hidden border-t border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-accent-500/5 to-primary-600/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Have a Product Idea?
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Tell us what you want to build. We&apos;ll show you how we can make it happen.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors btn-glow"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
