import { Metadata } from "next";
import { portfolio } from "@/data/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Work - Products Built by Ideasphere",
  description: "See the digital products we've designed, built, and scaled for startups and businesses across India.",
};

export default function WorkPage() {
  return (
    <div className="bg-dark-900">
      {/* Hero Section */}
      <section className="bg-dark-pattern py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="gradient-text">Work</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Products we&apos;ve designed, built, and shipped — with real results
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((project) => (
              <div
                key={project.id}
                className="group bg-dark-700/50 backdrop-blur-sm border-2 border-gray-700 rounded-xl overflow-hidden hover:border-primary-500 hover:shadow-2xl hover:shadow-primary-500/20 transition-all glass glass-hover"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-primary-500/20 text-primary-400 border border-primary-500/50 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {project.client}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.url ? (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                        {project.name} ↗
                      </a>
                    ) : project.name}
                  </h3>
                  <p className="text-gray-300 mb-6">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">
                      Built with:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-dark-800 text-gray-400 rounded-full text-xs border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="pt-4 border-t border-gray-700">
                    <div className="flex items-center">
                      <span className="text-green-400 mr-2">📊</span>
                      <p className="text-primary-400 font-semibold text-sm">
                        {project.results}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-dark-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We Build For
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Deep experience across sectors that matter
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: "🎓", name: "EdTech" },
              { icon: "🏥", name: "HealthTech" },
              { icon: "🌾", name: "AgriTech" },
              { icon: "💰", name: "FinTech" },
              { icon: "👗", name: "Fashion" },
              { icon: "🛒", name: "E-Commerce" },
              { icon: "🏘️", name: "PropTech" },
              { icon: "🚗", name: "Mobility" },
              { icon: "🏭", name: "Manufacturing" },
              { icon: "📱", name: "SaaS" },
              { icon: "🤖", name: "AI / ML" },
              { icon: "🌍", name: "Climate" },
            ].map((industry, idx) => (
              <div
                key={idx}
                className="bg-dark-700/50 backdrop-blur-sm p-4 rounded-xl text-center hover:border-primary-500 transition-all border border-gray-700 glass glass-hover"
              >
                <div className="text-3xl mb-2">{industry.icon}</div>
                <p className="font-semibold text-white text-sm">{industry.name}</p>
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
            Want to Be Our Next Success Story?
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Tell us about your product idea — we&apos;ll show you how we can bring it to life
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
