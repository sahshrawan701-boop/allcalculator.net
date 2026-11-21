import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/contact",
  },
  title: "Contact Us",
  description: "Get in touch with the allcalculator.net team. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-16">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold text-slate-900 dark:text-slate-100 mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-slate-800 dark:text-slate-400 max-w-2xl mx-auto">
          Have a question, feedback, or suggestion? We&apos;d love to hear from you.
          Fill out the form below and we&apos;ll get back to you as soon as possible.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,.08)] dark:shadow-[0_10px_30px_rgba(0,0,0,.3)] border border-slate-200 dark:border-slate-800">
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-800 dark:text-slate-100 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-800 dark:text-slate-100 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
                placeholder="your@email.com"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-800 dark:text-slate-100 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
                placeholder="What's this about?"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-800 dark:text-slate-100 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow resize-none"
                placeholder="Tell us more..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 dark:focus-visible:ring-offset-slate-900 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Additional Contact Info */}
      <section className="max-w-2xl mx-auto mt-12 text-center">
        <p className="text-slate-800 dark:text-slate-400 text-sm">
          Or reach us directly at{" "}
          <a
            href="mailto:contact@allcalculator.net"
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            contact@allcalculator.net
          </a>
        </p>
      </section>

      {/* Back to Home */}
      <div className="text-center mt-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          <i className="fas fa-arrow-left text-xs" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
