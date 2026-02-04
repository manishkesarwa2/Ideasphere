"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ContactForm() {
  const searchParams = useSearchParams();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: "",
  });

  // Pre-fill interest from URL parameter
  useEffect(() => {
    const interestParam = searchParams.get("interest");
    if (interestParam) {
      setFormData(prev => ({ ...prev, interest: interestParam }));
    }
  }, [searchParams]);

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit contact form');
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          company: "",
          interest: "",
          message: "",
        });
      }, 5000);
    } catch (err) {
      console.error('Error submitting contact form:', err);
      setError('Failed to submit contact form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
    <div className="bg-dark-700/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
      {submitted ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">✓</div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Message Sent!
          </h3>
          <p className="text-gray-300">
            Thank you for reaching out. We'll get back to you within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-white mb-2"
            >
              Your Name *
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

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-white mb-2"
            >
              Email Address *
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
              htmlFor="company"
              className="block text-sm font-semibold text-white mb-2"
            >
              Company / Organization
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-dark-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-400"
            />
          </div>

          <div>
            <label
              htmlFor="interest"
              className="block text-sm font-semibold text-white mb-2"
            >
              I'm Interested In *
            </label>
            <select
              id="interest"
              name="interest"
              required
              value={formData.interest}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-dark-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white"
            >
              <option value="">Select an option</option>
              <option value="venture-transformation">
                Venture Transformation
              </option>
              <option value="co-building">Co-building a Venture</option>
              <option value="product-development">
                Product Development
              </option>
              <option value="growth-strategy">Growth Strategy</option>
              <option value="products">Your Products</option>
              <option value="partnership">Partnership Opportunities</option>
              <option value="career">Career Opportunities</option>
              <option value="training">Training</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-white mb-2"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project or idea..."
              className="w-full px-4 py-3 bg-dark-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-400"
            ></textarea>
          </div>

          {error && (
            <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-300 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors text-lg btn-glow disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
}
