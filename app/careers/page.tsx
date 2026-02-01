"use client";

import { careers, internships } from "@/data/content";
import { useState } from "react";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    resume: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission
    console.log("Application submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        resume: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-dark-900">
      {/* Hero Section */}
      <section className="bg-dark-pattern py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join <span className="gradient-text">Ideasphere</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build the future with us. Work on cutting-edge ventures, learn from the
            best, and create meaningful impact.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Join Ideasphere?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "Work on Real Ventures",
                desc: "Build actual businesses that create impact, not just projects",
              },
              {
                icon: "📚",
                title: "Learn & Grow",
                desc: "Work with experienced founders and access world-class resources",
              },
              {
                icon: "🌍",
                title: "Remote-First Culture",
                desc: "Work from anywhere with flexible hours and autonomy",
              },
              {
                icon: "💰",
                title: "Competitive Compensation",
                desc: "Great pay plus equity opportunities in ventures you build",
              },
              {
                icon: "🎯",
                title: "Own Your Impact",
                desc: "Take ownership of projects and see your work make a difference",
              },
              {
                icon: "🤝",
                title: "Collaborative Team",
                desc: "Work with talented, passionate people who care about impact",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-dark-700 to-dark-800 p-6 rounded-xl border border-gray-700 hover:border-primary-500 transition-all"
              >
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-dark-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-gray-300">
              Full-time roles for experienced professionals
            </p>
          </div>
          <div className="space-y-6">
            {careers.map((job) => (
              <div
                key={job.id}
                className="bg-dark-700/50 backdrop-blur-sm rounded-xl p-8 shadow-sm hover:shadow-lg border border-gray-700 hover:border-primary-500 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="px-3 py-1 bg-primary-500/20 text-primary-400 border border-primary-500/50 rounded-full font-semibold">
                        {job.type}
                      </span>
                      <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full">
                        📍 {job.location}
                      </span>
                      <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full">
                        {job.department}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      const form = document.getElementById("application-form");
                      form?.scrollIntoView({ behavior: "smooth" });
                      setFormData({ ...formData, position: job.title });
                    }}
                    className="mt-4 md:mt-0 px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors btn-glow"
                  >
                    Apply Now
                  </button>
                </div>
                <p className="text-gray-300 mb-4">{job.description}</p>
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Requirements:
                  </h4>
                  <ul className="space-y-1">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start">
                        <span className="text-primary-400 mr-2">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Programs */}
      <section id="internships" className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Internship Programs
            </h2>
            <p className="text-lg text-gray-300">
              Learn by doing. Build real products. Grow your career.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {internships.map((program) => (
              <div
                key={program.id}
                className="bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-xl p-8 border border-gray-700"
              >
                <h3 className="text-2xl font-bold text-white mb-3">
                  {program.program}
                </h3>
                <div className="text-primary-400 font-semibold mb-4">
                  Duration: {program.duration}
                </div>
                <p className="text-gray-300 mb-6">{program.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">
                    Available Tracks:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {program.tracks.map((track, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-dark-700 text-primary-400 rounded-full text-sm font-semibold border border-primary-500/50"
                      >
                        {track}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {program.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <span className="text-primary-400 mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-16 bg-dark-pattern">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Apply Now
            </h2>
            <p className="text-lg text-gray-300">
              Send us your application and let&apos;s start a conversation
            </p>
          </div>

          <div className="bg-dark-700/50 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-gray-700">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Application Submitted!
                </h3>
                <p className="text-gray-300">
                  Thank you for your interest. We'll review your application and get
                  back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-white mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-400"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-white mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-white mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="position"
                    className="block text-sm font-semibold text-white mb-2"
                  >
                    Position / Program *
                  </label>
                  <select
                    id="position"
                    name="position"
                    required
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white"
                  >
                    <option value="">Select a position or program</option>
                    <optgroup label="Full-time Positions">
                      {careers.map((job) => (
                        <option key={job.id} value={job.title}>
                          {job.title}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Internship Programs">
                      {internships.map((program) => (
                        <option key={program.id} value={program.program}>
                          {program.program}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="resume"
                    className="block text-sm font-semibold text-white mb-2"
                  >
                    Resume / Portfolio URL *
                  </label>
                  <input
                    type="url"
                    id="resume"
                    name="resume"
                    required
                    value={formData.resume}
                    onChange={handleChange}
                    placeholder="https://"
                    className="w-full px-4 py-3 bg-dark-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-white mb-2"
                  >
                    Tell us about yourself *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Why are you interested in Ideasphere? What makes you a great fit?"
                    className="w-full px-4 py-3 bg-dark-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-400"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors text-lg btn-glow"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
