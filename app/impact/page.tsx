import { caseStudies } from "@/data/content";
import Link from "next/link";

export default function ImpactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Impact</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from ventures we've helped build and transform
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { number: "50+", label: "Ventures Built" },
              { number: "$25M+", label: "Funding Raised" },
              { number: "100K+", label: "Users Impacted" },
              { number: "15+", label: "Industries" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Case Studies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              In-depth looks at how we've helped ventures succeed
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, idx) => (
              <div
                key={study.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <div className={`grid md:grid-cols-2 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  {/* Image */}
                  <div className={`${idx % 2 === 1 ? "md:order-2" : ""}`}>
                    <div className="h-full min-h-[300px] bg-gradient-to-br from-primary-200 to-accent-200 flex items-center justify-center">
                      <div className="text-8xl">📊</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-8 md:p-12 ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                    <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                      {study.industry}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {study.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">{study.client}</p>

                    {/* Challenge */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        The Challenge
                      </h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Our Solution
                      </h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>

                    {/* Results */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, ridx) => (
                          <li key={ridx} className="flex items-start">
                            <span className="text-green-500 mr-2 mt-1">✓</span>
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                      {Object.entries(study.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-primary-600">
                            {value}
                          </div>
                          <div className="text-xs text-gray-500 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We bring deep expertise across multiple sectors
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: "🎓", name: "Education" },
              { icon: "🏥", name: "Healthcare" },
              { icon: "🌾", name: "AgTech" },
              { icon: "👗", name: "Fashion & Retail" },
              { icon: "💰", name: "FinTech" },
              { icon: "🌍", name: "Climate Tech" },
              { icon: "🏘️", name: "PropTech" },
              { icon: "🚗", name: "Mobility" },
              { icon: "🎮", name: "Entertainment" },
              { icon: "🏭", name: "Manufacturing" },
            ].map((industry, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <p className="font-semibold text-gray-900">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Founders Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Ideasphere didn't just build our product - they became our strategic partners. Their methodology and expertise were instrumental in our success.",
                author: "Sarah Chen",
                role: "Founder, LearnSpace",
              },
              {
                quote:
                  "From idea to launch in 90 days. The speed and quality were incredible. Their team truly understands what it takes to build modern businesses.",
                author: "Dr. Amit Kumar",
                role: "CEO, HealthConnect",
              },
              {
                quote:
                  "The co-building model aligned our incentives perfectly. They were as invested in our success as we were. That made all the difference.",
                author: "Maya Patel",
                role: "Co-founder, GreenThreads",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm">
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-primary-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Impact?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Let's build something meaningful together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white hover:bg-gray-100 text-primary-600 rounded-lg font-semibold transition-colors"
            >
              Start Your Journey
            </Link>
            <Link
              href="/how-we-work"
              className="px-8 py-4 bg-transparent hover:bg-white/10 text-white border-2 border-white rounded-lg font-semibold transition-colors"
            >
              See How We Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
