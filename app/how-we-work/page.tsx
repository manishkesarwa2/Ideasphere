import { workProcess } from "@/data/content";
import Link from "next/link";

export default function HowWeWorkPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How We <span className="gradient-text">Work</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 5-step methodology to transform ideas into successful,
            sustainable ventures
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              {workProcess.map((step, idx) => (
                <div key={step.step} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                      {step.step}
                    </div>
                    <div className="text-sm font-semibold text-gray-700 mt-2 text-center">
                      {step.title}
                    </div>
                  </div>
                  {idx < workProcess.length - 1 && (
                    <div className="hidden md:block w-12 h-1 bg-primary-200 mx-2" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Steps */}
          <div className="space-y-16">
            {workProcess.map((step, idx) => (
              <div
                key={step.step}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold mr-4">
                      {step.step}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        {step.title}
                      </h2>
                      <p className="text-sm text-primary-600 font-semibold">
                        {step.duration}
                      </p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Deliverables:
                    </h3>
                    <ul className="space-y-2">
                      {step.deliverables.map((deliverable, didx) => (
                        <li key={didx} className="flex items-start">
                          <span className="text-primary-500 mr-3 mt-1">✓</span>
                          <span className="text-gray-600">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={idx % 2 === 1 ? "md:order-1" : ""}>
                  <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl h-96 flex flex-col items-center justify-center p-8">
                    <div className="text-8xl mb-4">{step.icon}</div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-gray-800">{step.title}</p>
                      <p className="text-gray-600 mt-2">Step {step.step} of 5</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Guiding Principles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What makes our methodology effective and unique
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🎯",
                title: "Human-Centered",
                desc: "Start with people, not technology",
              },
              {
                icon: "⚡",
                title: "Rapid Iteration",
                desc: "Build fast, learn faster, adapt quickly",
              },
              {
                icon: "📊",
                title: "Data-Driven",
                desc: "Make decisions based on insights, not assumptions",
              },
              {
                icon: "🌱",
                title: "Sustainable Growth",
                desc: "Build for long-term impact, not quick wins",
              },
            ].map((principle, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl text-center shadow-sm">
                <div className="text-5xl mb-4">{principle.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {principle.title}
                </h3>
                <p className="text-gray-600">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Typical Timeline
            </h2>
            <p className="text-lg text-gray-600">
              From first conversation to launch and beyond
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8">
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-32 flex-shrink-0 font-semibold text-primary-700">
                  Week 0-2
                </div>
                <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                  <p className="font-semibold text-gray-900">Discovery & Mapping</p>
                  <p className="text-sm text-gray-600">
                    Skill assessment and opportunity identification
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-32 flex-shrink-0 font-semibold text-primary-700">
                  Week 3-5
                </div>
                <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                  <p className="font-semibold text-gray-900">Ideation & Strategy</p>
                  <p className="text-sm text-gray-600">
                    Idea generation and business model design
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-32 flex-shrink-0 font-semibold text-primary-700">
                  Week 6-18
                </div>
                <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                  <p className="font-semibold text-gray-900">Build & Launch</p>
                  <p className="text-sm text-gray-600">
                    MVP development and market entry
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-32 flex-shrink-0 font-semibold text-primary-700">
                  Ongoing
                </div>
                <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                  <p className="font-semibold text-gray-900">Growth & Scale</p>
                  <p className="text-sm text-gray-600">
                    Continuous optimization and expansion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss how our methodology can help transform your venture
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white hover:bg-gray-100 text-primary-600 rounded-lg font-semibold transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/impact"
              className="px-8 py-4 bg-transparent hover:bg-white/10 text-white border-2 border-white rounded-lg font-semibold transition-colors"
            >
              See Our Results
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
