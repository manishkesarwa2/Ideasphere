import { Metadata } from "next";
import { caseStudies } from "@/data/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impact & Case Studies - Ideasphere Product Studio",
  description: "Real results from real products. See how we've helped startups and businesses build, launch, and scale digital products.",
};

export default function ImpactPage() {
  return (
    <div className="bg-dark-900">
      {/* Hero Section */}
      <section className="bg-dark-pattern py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="gradient-text">Impact</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real products we&apos;ve designed, built, and scaled
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "20+", label: "Products Shipped", icon: "🚀" },
              { value: "10+", label: "Industries Served", icon: "🏢" },
              { value: "100K+", label: "Users Reached", icon: "👥" },
              { value: "95%", label: "Client Retention", icon: "🤝" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-dark-700/50 backdrop-blur-sm rounded-xl p-8 text-center shadow-sm border border-gray-700 hover:border-primary-500 transition-all"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-dark-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Case Studies
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Deep dives into how we helped our partners build and scale
            </p>
          </div>
          <div className="space-y-16">
            {caseStudies.map((study, idx) => (
              <div
                key={idx}
                className="bg-dark-700/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-gray-700"
              >
                <div className="grid md:grid-cols-2">
                  <div className="p-8 md:p-12">
                    <div className="inline-block px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm font-semibold mb-4">
                      {study.industry}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {study.client}
                    </h3>
                    <p className="text-gray-300 mb-6">{study.challenge}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-3">
                        Our Approach:
                      </h4>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {study.results.map((result, ridx) => (
                        <div
                          key={ridx}
                          className="bg-dark-800 rounded-lg p-3 text-center border border-gray-700"
                        >
                          <div className="text-xl font-bold text-primary-400">
                            {result.split(" ")[0]}
                          </div>
                          <div className="text-xs text-gray-400">
                            {result.split(" ").slice(1).join(" ")}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center p-12">
                    <div className="text-center">
                      <div className="text-6xl mb-4">
                        {study.industry === "HealthTech"
                          ? "🏥"
                          : study.industry === "FinTech"
                          ? "💰"
                          : study.industry === "EdTech"
                          ? "📚"
                          : "🚀"}
                      </div>
                      <h4 className="text-2xl font-bold text-white">
                        {study.client}
                      </h4>
                      <p className="text-primary-400 mt-2">{study.industry}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Clients Say */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Partners Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Ideasphere didn't just build our product — they helped us figure out what to build in the first place. The discovery process saved us months.",
                name: "Founder",
                company: "HealthTech Startup",
              },
              {
                quote:
                  "They shipped our MVP in 8 weeks. Most agencies we talked to quoted 6 months. The speed and quality exceeded our expectations.",
                name: "CTO",
                company: "FinTech Platform",
              },
              {
                quote:
                  "The co-build model is perfect for early-stage startups. They have real skin in the game and care about outcomes, not just billing hours.",
                name: "CEO",
                company: "EdTech Company",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-dark-700/50 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-gray-700"
              >
                <div className="text-primary-400 text-4xl mb-4">&quot;</div>
                <p className="text-gray-300 mb-6 italic">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-400">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark-pattern relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Your product could be our next success story
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors btn-glow"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
