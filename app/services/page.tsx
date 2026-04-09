import { Metadata } from "next";
import { services } from "@/data/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services - Ideasphere Product Studio",
  description: "Product strategy, full-stack development, AI solutions, and growth engineering. We build digital products end-to-end.",
};

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
            Everything you need to go from idea to shipped product — design, development, AI, and growth
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
                    <h3 className="font-semibold text-white">What&apos;s included:</h3>
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

      {/* Engagement Models */}
      <section className="py-16 bg-dark-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How We Engage
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Flexible models to fit your stage and budget
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-dark-700/50 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-gray-700 hover:border-primary-500 transition-all">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Fixed-Scope Project
              </h3>
              <p className="text-gray-300 mb-4">
                Best for MVPs and defined features. Clear scope, fixed timeline, fixed price.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Defined deliverables</li>
                <li>• Fixed timeline & cost</li>
                <li>• Ideal for MVPs</li>
              </ul>
            </div>
            <div className="bg-dark-700/50 backdrop-blur-sm p-8 rounded-xl shadow-sm border-2 border-primary-500 transition-all relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary-500 text-white text-xs font-bold rounded-full">
                Most Popular
              </div>
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Monthly Retainer
              </h3>
              <p className="text-gray-300 mb-4">
                Ongoing product team as a service. We embed with your team and iterate continuously.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Dedicated team hours</li>
                <li>• Flexible priorities</li>
                <li>• Continuous delivery</li>
              </ul>
            </div>
            <div className="bg-dark-700/50 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-gray-700 hover:border-primary-500 transition-all">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Equity Co-Build
              </h3>
              <p className="text-gray-300 mb-4">
                We invest our time and expertise for equity. For founders with high-potential ideas.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Equity partnership</li>
                <li>• Full product ownership</li>
                <li>• Selective — apply to qualify</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Tech Stack
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Modern, proven technologies for production-grade products
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { category: "Frontend", tools: "React, Next.js, React Native, Tailwind CSS" },
              { category: "Backend", tools: "Node.js, Python, PostgreSQL, MongoDB" },
              { category: "AI / ML", tools: "OpenAI, LangChain, PyTorch, TensorFlow" },
              { category: "Cloud & DevOps", tools: "AWS, Vercel, Docker, CI/CD" },
            ].map((stack, idx) => (
              <div key={idx} className="bg-dark-700/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-primary-500 transition-all text-center">
                <h3 className="text-lg font-bold text-primary-400 mb-3">
                  {stack.category}
                </h3>
                <p className="text-gray-300 text-sm">{stack.tools}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-900/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your Product?
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Tell us what you need. We&apos;ll put together a plan and team.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors btn-glow"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
}
