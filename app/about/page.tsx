import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Ideasphere - Product Studio | Delhi, India",
  description: "Ideasphere is a Product Studio that designs, builds, and scales digital products. Learn about our team, mission, and approach.",
};

export default function AboutPage() {
  return (
    <div className="bg-dark-900">
      {/* Hero Section */}
      <section className="bg-dark-pattern py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="gradient-text">Ideasphere</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We&apos;re a Product Studio that designs, builds, and scales digital products
            for startups and businesses across India and beyond.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-primary-500/10 to-dark-700 p-8 rounded-2xl border border-gray-700">
              <div className="text-4xl mb-4">🎯</div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To be the product team that startups and businesses trust to turn their
                ideas into shipped software. We believe great products are built by small,
                focused teams that care deeply about craft, speed, and outcomes.
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent-500/10 to-dark-700 p-8 rounded-2xl border border-gray-700">
              <div className="text-4xl mb-4">🌟</div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                To become India&apos;s most trusted product studio — known for shipping
                products that actually work, growing businesses that actually scale, and
                building ventures that actually matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-dark-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Work With Us
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We&apos;re not a dev shop. We&apos;re your product partner.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-dark-700/50 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-gray-700 hover:border-primary-500 transition-all glass glass-hover glass-shine">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold text-white mb-3">
                We Ship, Not Slide
              </h3>
              <p className="text-gray-300">
                No 50-page decks. We ship working software. Weekly demos, continuous
                delivery, and real users from day one.
              </p>
            </div>
            <div className="bg-dark-700/50 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-gray-700 hover:border-primary-500 transition-all glass glass-hover glass-shine">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-3">
                AI-First Approach
              </h3>
              <p className="text-gray-300">
                We use AI in everything — from development (Copilot, Cursor) to the
                products we build. This makes us 3x faster.
              </p>
            </div>
            <div className="bg-dark-700/50 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-gray-700 hover:border-primary-500 transition-all glass glass-hover glass-shine">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Outcome-Focused
              </h3>
              <p className="text-gray-300">
                We don&apos;t just write code. We care about users, metrics, and business
                outcomes. Your success is our KPI.
              </p>
            </div>
            <div className="bg-dark-700/50 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-gray-700 hover:border-primary-500 transition-all glass glass-hover glass-shine">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Fast Execution
              </h3>
              <p className="text-gray-300">
                MVPs in weeks, not months. We move fast because startups can&apos;t
                afford to wait. Neither can enterprises.
              </p>
            </div>
            <div className="bg-dark-700/50 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-gray-700 hover:border-primary-500 transition-all glass glass-hover glass-shine">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Skin in the Game
              </h3>
              <p className="text-gray-300">
                For select ventures, we take equity instead of fees. When we believe
                in your idea, we bet on it.
              </p>
            </div>
            <div className="bg-dark-700/50 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-gray-700 hover:border-primary-500 transition-all glass glass-hover glass-shine">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Knowledge Transfer
              </h3>
              <p className="text-gray-300">
                We don&apos;t create dependency. We document everything, train your team,
                and ensure you can run independently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-dark-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              How we think, build, and operate
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "🚢", value: "Ship It", desc: "Done is better than perfect" },
              { icon: "🚀", value: "Speed", desc: "Move fast, learn faster" },
              { icon: "🎨", value: "Craft", desc: "Quality in every detail" },
              { icon: "📊", value: "Outcomes", desc: "Measure what matters" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.value}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want to Build With Us?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Tell us about your product idea. We&apos;ll show you how to make it real.
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
