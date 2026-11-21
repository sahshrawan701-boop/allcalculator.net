import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/cookie-policy",
  },
  title: "Cookie Policy",
  description: "Learn about how allcalculator.net uses cookies to improve your experience.",
};

export default function CookiePolicyPage() {
  return (
    <div className="max-w-[1000px] mx-auto px-4 sm:px-8 py-16">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold text-slate-900 dark:text-slate-100 mb-4">
          Cookie Policy
        </h1>
        <p className="text-lg text-slate-800 dark:text-slate-400 max-w-2xl mx-auto">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </section>

      {/* Content */}
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            What Are Cookies?
          </h2>
          <p className="text-slate-800 dark:text-slate-100 leading-relaxed mb-4">
            Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            How We Use Cookies
          </h2>
          <p className="text-slate-800 dark:text-slate-100 leading-relaxed mb-4">
            We use cookies for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-800 dark:text-slate-100">
            <li><strong>Essential Cookies:</strong> Required for the website to function properly, including security and basic features.</li>
            <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website by collecting anonymous data.</li>
            <li><strong>Functionality Cookies:</strong> Remember your preferences and settings to provide a more personalized experience.</li>
            <li><strong>Targeting Cookies:</strong> Used to deliver relevant advertisements and track marketing campaigns.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Third-Party Cookies
          </h2>
          <p className="text-slate-800 dark:text-slate-100 leading-relaxed mb-4">
            We may use third-party services that also use cookies, such as Google Analytics for analytics and advertising networks for targeted ads. These third parties have their own privacy policies and cookie policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Managing Cookies
          </h2>
          <p className="text-slate-800 dark:text-slate-100 leading-relaxed mb-4">
            You can control and manage cookies in various ways. Please note that removing or blocking cookies may impact your user experience and parts of our website may no longer be fully accessible.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-800 dark:text-slate-100">
            <li><strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings. You can usually find these options in the &quot;Privacy&quot; or &quot;Security&quot; section of your browser.</li>
            <li><strong>Cookie Preferences:</strong> You can use our cookie consent banner to manage your preferences for non-essential cookies.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Updates to This Policy
          </h2>
          <p className="text-slate-800 dark:text-slate-100 leading-relaxed mb-4">
            We may update this cookie policy from time to time to reflect changes in our practices, technology, or legal requirements. We encourage you to review this policy periodically to stay informed about how we use cookies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Contact Us
          </h2>
          <p className="text-slate-800 dark:text-slate-100 leading-relaxed mb-4">
            If you have any questions about our use of cookies, please contact us at{" "}
            <a
              href="mailto:contact@allcalculator.net"
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              contact@allcalculator.net
            </a>
          </p>
        </section>
      </article>

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
