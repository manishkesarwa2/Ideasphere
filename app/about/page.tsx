import { team } from "@/data/content";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="gradient-text">Ideasphere</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a Venture Transformation Studio on a mission to help people and
            businesses create next-generation, impact-driven businesses.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl">
              <div className="text-4xl mb-4">🎯</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To democratize entrepreneurship by making world-class venture building
                capabilities accessible to everyone. We believe that with the right
                guidance, tools, and technology, anyone can build businesses that create
                positive impact for humanity and the planet.
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent-50 to-white p-8 rounded-2xl">
              <div className="text-4xl mb-4">🌟</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                A world where every great idea has the opportunity to become a thriving,
                sustainable business. We envision an entrepreneurial ecosystem powered by
                AI and modern technology, where innovation is accelerated and impact is
                amplified.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're not just consultants or developers - we're your co-builders
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Co-Building Approach
              </h3>
              <p className="text-gray-600">
                We don't just advise - we roll up our sleeves and build alongside you,
                sharing both risk and reward.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                AI-First Methodology
              </h3>
              <p className="text-gray-600">
                We leverage cutting-edge AI and automation to accelerate every phase of
                venture building.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Impact-Driven Focus
              </h3>
              <p className="text-gray-600">
                Every venture we build is designed to create positive impact for people,
                communities, and the planet.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Rapid Execution
              </h3>
              <p className="text-gray-600">
                Our proven methodology helps launch MVPs in weeks, not months, so you can
                validate and iterate quickly.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Knowledge Transfer
              </h3>
              <p className="text-gray-600">
                We don't create dependency - we empower your team with skills and systems
                to thrive independently.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Ecosystem Access
              </h3>
              <p className="text-gray-600">
                Tap into our network of mentors, investors, partners, and fellow founders
                to accelerate growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team - Hidden */}
      {/* <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced builders, designers, and strategists passionate about creating
              impact
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="h-64 bg-gradient-to-br from-primary-200 to-accent-200 flex items-center justify-center">
                  <div className="text-6xl">👤</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Values */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "💪", value: "Ownership", desc: "We take full responsibility" },
              { icon: "🚀", value: "Speed", desc: "Move fast, learn faster" },
              { icon: "🎨", value: "Excellence", desc: "Quality in every detail" },
              { icon: "🌍", value: "Impact", desc: "Build for positive change" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.value}</h3>
                <p className="opacity-90">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Want to Build With Us?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's explore how we can help transform your idea or business.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors"
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </div>
  );
}
