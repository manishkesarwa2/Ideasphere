"use client";

import Link from "next/link";
import { contactInfo } from "@/data/content";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubscribed(true);
        setMessage(data.message);
        setEmail("");
        setTimeout(() => {
          setSubscribed(false);
          setMessage("");
        }, 5000);
      } else {
        setMessage(data.error || "Failed to subscribe");
      }
    } catch (error) {
      setMessage("Failed to subscribe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-dark-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">Ideasphere</h3>
            <p className="text-gray-400 mb-4">
              We design, build, and scale digital products for startups and businesses.
              From idea to launch — we ship production-ready software that drives real results.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📧 {contactInfo.email}</p>
              <p>📱 {contactInfo.phone}</p>
              <p>📍 {contactInfo.address}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-primary-400 transition-colors">
                Our Work
              </Link>
              </li>
              <li>
                <Link href="/how-we-work" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Impact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Get updates on our ventures and insights.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                disabled={loading}
                className="w-full px-4 py-2 rounded-md bg-dark-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-md transition-colors font-medium btn-glow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Subscribing..." : subscribed ? "Subscribed! ✓" : "Subscribe"}
              </button>
              {message && (
                <p className={`text-sm ${subscribed ? "text-green-400" : "text-red-400"}`}>
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2026 Ideasphere Knowledge Partner Pvt Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
