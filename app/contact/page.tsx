import { contactInfo } from "@/data/content";
import { Suspense } from "react";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <div className="bg-dark-900">
      {/* Hero Section */}
      <section className="bg-dark-pattern py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a product idea? Let&apos;s talk about how we can design, build, and
            scale it together
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Let&apos;s Build Something Amazing
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Whether you have a product idea, need a development partner, or
                want to explore a co-build — we&apos;d love to hear from you.
              </p>

              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center text-2xl border border-primary-500/50">
                    📧
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-white">Email</h3>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-primary-400 hover:underline"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center text-2xl border border-primary-500/50">
                    📱
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-white">Phone</h3>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-primary-400 hover:underline"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center text-2xl border border-primary-500/50">
                    📍
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-white">Location</h3>
                    <p className="text-gray-300">{contactInfo.address}</p>
                  </div>
                </div>
              </div>

            {/* Contact Form */}
            <Suspense fallback={
              <div className="bg-dark-700/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <div className="animate-pulse space-y-6">
                  <div className="h-10 bg-gray-700 rounded"></div>
                  <div className="h-10 bg-gray-700 rounded"></div>
                  <div className="h-10 bg-gray-700 rounded"></div>
                  <div className="h-32 bg-gray-700 rounded"></div>
                </div>
              </div>
            }>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info */}
      <section className="py-16 bg-dark-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Happens Next?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-dark-700/50 backdrop-blur-sm p-8 rounded-xl text-center border border-gray-700">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-white mb-3">
                1. Initial Consultation
              </h3>
              <p className="text-gray-300">
                We&apos;ll schedule a call to understand your needs, goals, and vision
              </p>
            </div>
            <div className="bg-dark-700/50 backdrop-blur-sm p-8 rounded-xl text-center border border-gray-700">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">
                2. Proposal & Plan
              </h3>
              <p className="text-gray-300">
                We&apos;ll create a tailored proposal with scope, timeline, and investment
              </p>
            </div>
            <div className="bg-dark-700/50 backdrop-blur-sm p-8 rounded-xl text-center border border-gray-700">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-3">
                3. Let&apos;s Build
              </h3>
              <p className="text-gray-300">
                Once aligned, we kick off discovery and start building your product
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
