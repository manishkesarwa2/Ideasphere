import { Metadata } from "next";
import { workProcess } from "@/data/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Process - How Ideasphere Builds Products",
  description: "Our 5-step product development process: Discovery, Design, Build, Launch, Grow. From idea to shipped product.",
};

export default function HowWeWorkPage() {
  return (
    <div className="bg-dark-900">
      {/* Hero Section */}
      <section className="bg-dark-pattern py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="gradient-text">Process</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            How we take your product from idea to launch and beyond — in 5 clear steps
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              {workProcess.map((step, idx) => (
                <div key={step.step} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary-500 text-white flex items-center justify-center text-2xl font-bold shadow-lg btn-glow">
                      {step.step}
                    </div>
                    <div className="text-sm font-semibold text-gray-300 mt-2 text-center">
                      {step.title}
                    </div>
                  </div>
                  {idx < workProcess.length - 1 && (
                    <div className="hidden md:block w-12 h-1 bg-primary-500/30 mx-2" />
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
                    <div className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center text-xl font-bold mr-4 btn-glow">
                      {step.step}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">
                        {step.title}
                      </h2>
                      <p className="text-sm text-primary-400 font-semibold">
                        {step.duration}
                      </p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-300 mb-6">{step.description}</p>
                  <div className="bg-dark-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                    <h3 className="font-semibold text-white mb-3">
                      Deliverables:
                    </h3>
                    <ul className="space-y-2">
                      {step.deliverables.map((deliverable, didx) => (
                        <li key={didx} className="flex items-start">
                          <span className="text-primary-400 mr-3 mt-1">✓</span>
                          <span className="text-gray-300">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={idx % 2 === 1 ? "md:order-1" : ""}>
                  <div className="bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl h-96 flex flex-col items-center justify-center p-8 border border-gray-700">
                    <div className="text-8xl mb-4">{step.icon}</div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-white">{step.title}</p>
                      <p className="text-gray-300 mt-2">Step {step.step} of 5</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 bg-dark-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How We Think
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Principles that guide every product we build
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "👤",
                title: "User-First",
                desc: "Start with the user problem, not the technology",
              },
              {
                icon: "⚡",
                title: "Ship Weekly",
                desc: "Deploy often, demo weekly, iterate constantly",
              },
              {
                icon: "📊",
                title: "Data-Driven",
                desc: "Measure everything, decide based on evidence",
              },
              {
                icon: "🔄",
                title: "Iterate Fast",
                desc: "Launch lean, learn quickly, improve relentlessly",
              },
            ].map((principle, idx) => (
              <div key={idx} className="bg-dark-700/50 backdrop-blur-sm p-6 rounded-xl text-center shadow-sm border border-gray-700 hover:border-primary-500 transition-all">
                <div className="text-5xl mb-4">{principle.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {principle.title}
                </h3>
                <p className="text-gray-300">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Typical Timeline
            </h2>
            <p className="text-lg text-gray-300">
              From kickoff to live product
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl p-8 border border-gray-700">
            <div className="space-y-6">
              {[
                { week: "Week 1-2", title: "Discovery & Research", desc: "User research, competitive analysis, and product brief" },
                { week: "Week 3-5", title: "Design & Prototype", desc: "Wireframes, UI design, and clickable prototype" },
                { week: "Week 6-16", title: "Build & Ship", desc: "Agile development with weekly demos and deployments" },
                { week: "Week 17-18", title: "Launch & Optimize", desc: "Production launch, monitoring, and initial optimization" },
                { week: "Ongoing", title: "Grow & Iterate", desc: "Feature iteration, growth experiments, and scaling" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="w-32 flex-shrink-0 font-semibold text-primary-400">
                    {item.week}
                  </div>
                  <div className="flex-1 bg-dark-700 rounded-lg p-4 shadow-sm border border-gray-700">
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="text-sm text-gray-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark-pattern relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Building?
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Let&apos;s kick off with a discovery call and map out your product
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors btn-glow"
          >
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </div>
  );
}
