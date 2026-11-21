import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/about-us",
  },
  title: "About Us | Our Mission & Free Calculator Tools",
  description:
    "Learn about Allcalculator.net — our mission, team, and commitment to providing free, accurate online calculators for finance, health, math, and science.",
};

const TEAM = [
  {
    icon: "fa-code",
    title: "Development Team",
    desc: "Building responsive, high-performance calculator tools with modern web technologies.",
  },
  {
    icon: "fa-calculator",
    title: "Mathematics Experts",
    desc: "Ensuring algorithm accuracy and formula validation across all calculator categories.",
  },
  {
    icon: "fa-paint-brush",
    title: "UX Designers",
    desc: "Creating intuitive, beautiful interfaces that work on every device.",
  },
];

const FAQS = [
  {
    q: "Are your calculators really free to use?",
    a: "Yes! All our calculators are completely free with no hidden charges. We don't require registration or subscriptions to access any of our tools.",
  },
  {
    q: "How accurate are your calculators?",
    a: "Our calculators are developed using verified formulas and algorithms. Each calculator undergoes rigorous testing before being published. For financial calculators, we clearly state when results are estimates.",
  },
  {
    q: "Can I use these calculators on my mobile device?",
    a: "Absolutely! Allcalculator.net is fully responsive and works perfectly on smartphones, tablets, and desktop computers.",
  },
  {
    q: "Do you store my calculation data?",
    a: "No, we don't store any of your calculation inputs or results. All calculations happen in your browser, ensuring complete privacy.",
  },
  {
    q: "How can I suggest a new calculator?",
    a: "We welcome suggestions! Please email us at suggestions@allcalculator.net with your calculator idea. Our team reviews all suggestions and prioritizes development based on user demand.",
  },
  {
    q: "Why do some calculators show different results?",
    a: "Different calculators may use different methodologies or assumptions (especially financial calculators). We always document the formulas and assumptions used in each calculator's description.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-8 py-8 pb-16">
      {/* Hero Banner */}
      <section
        className="rounded-2xl overflow-hidden mb-10 text-white py-14 px-8 relative"
        style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,.1),transparent_50%)]" />
        <div className="relative z-10">
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-extrabold mb-3">
            About allcalculator.net
          </h1>
          <p className="text-white/90 text-lg max-w-2xl">
            Learn about our mission, team, and commitment to providing free,
            accurate online calculators for finance, health, math, and science.
          </p>
          <div className="flex flex-wrap gap-8 mt-8">
            {[
              { icon: "fa-calculator", num: "100+", label: "Free Calculators" },
              { icon: "fa-users", num: "Millions", label: "Users Worldwide" },
              { icon: "fa-rocket", num: "2025", label: "Founded" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <i className={`fas ${s.icon} text-white`} />
                </div>
                <div>
                  <div className="text-2xl font-extrabold leading-none">
                    {s.num}
                  </div>
                  <div className="text-xs text-white/80">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">
        {/* Main Content */}
        <div className="space-y-6">
          {/* Mission */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-sm border border-slate-200 dark:border-slate-800">
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
              <i className="fas fa-bullseye text-indigo-500" /> Our Mission
            </h2>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              At{" "}
              <strong className="text-slate-800 dark:text-slate-100">
                Allcalculator.net
              </strong>
              , we believe everyone should have access to free, accurate
              calculation tools. Our mission is to provide reliable online
              calculators that help people make informed decisions in their
              daily lives, whether for financial planning, health tracking,
              academic work, or scientific calculations.
            </p>
          </div>

          {/* Story */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-sm border border-slate-200 dark:border-slate-800">
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
              <i className="fas fa-history text-violet-500" /> Our Story
            </h2>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
              Founded in{" "}
              <strong className="text-slate-800 dark:text-slate-100">
                2025
              </strong>
              , Allcalculator.net started as a simple project to create a better
              online calculator experience. What began with a few basic
              calculators has grown into a comprehensive collection of tools
              serving millions of users worldwide.
            </p>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              Our team of developers, mathematicians, and financial experts work
              continuously to expand and improve our offerings, ensuring that we
              stay at the forefront of online calculation tools.
            </p>
          </div>

          {/* What We Offer */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-sm border border-slate-200 dark:border-slate-800">
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
              <i className="fas fa-gift text-emerald-500" /> What We Offer
            </h2>
            <ul className="space-y-2 text-slate-500 dark:text-slate-400">
              {[
                ["100+ Free Calculators", "across multiple categories"],
                ["Accurate Calculations", "with transparent formulas"],
                ["User-Friendly Interfaces", "designed for all skill levels"],
                ["No Registration Required", "use our tools instantly"],
                ["Mobile-Optimized", "for use on any device"],
                ["Privacy-Focused", "we don't store your personal data"],
              ].map(([bold, rest]) => (
                <li key={bold} className="flex items-start gap-2">
                  <i className="fas fa-check-circle text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-slate-800 dark:text-slate-100">
                      {bold}
                    </strong>{" "}
                    — {rest}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Team */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-sm border border-slate-200 dark:border-slate-800">
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
              Our Team
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mb-5">
              Behind Allcalculator.net is a diverse team of professionals
              passionate about making complex calculations simple.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {TEAM.map((t) => (
                <div
                  key={t.title}
                  className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-5 border border-slate-200 dark:border-slate-600 text-center hover:-translate-y-1 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-violet-600 flex items-center justify-center text-white text-xl mx-auto mb-3">
                    <i className={`fas ${t.icon}`} />
                  </div>
                  <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm mb-1">
                    {t.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-sm border border-slate-200 dark:border-slate-800">
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-5">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {FAQS.map((f) => (
                <div
                  key={f.q}
                  className="border-b border-slate-200 dark:border-slate-800 pb-4 last:border-0 last:pb-0"
                >
                  <h3 className="font-semibold text-slate-800 dark:text-slate-100 text-sm mb-1 flex items-center gap-2">
                    <i className="fas fa-question-circle text-indigo-400 flex-shrink-0" />{" "}
                    {f.q}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed pl-5">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl p-7 text-white">
            <h2 className="text-xl font-bold mb-2">Get In Touch</h2>
            <p className="text-white/90 mb-5 text-sm">
              We value your feedback and suggestions. If you have questions
              about our calculators, found a bug, or have ideas for new tools,
              please reach out.
            </p>
            <a
              href="mailto:contact@allcalculator.net"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 font-bold px-5 py-3 rounded-xl hover:bg-indigo-50 transition-colors"
            >
              <i className="fas fa-envelope" /> contact@allcalculator.net
            </a>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-5">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2 text-sm">
              <i className="fas fa-link text-indigo-400" /> Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/sitemap", label: "Calculator Sitemap" },
                {
                  href: "/finance",
                  label: "Financial Calculators",
                },
                {
                  href: "/health",
                  label: "Health Calculators",
                },
                { href: "/math", label: "Math Calculators" },
                { href: "/science", label: "Science Calculators" },
                { href: "/other", label: "Other Calculators" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors flex items-center gap-1.5"
                  >
                    <i className="fas fa-chevron-right text-[10px] text-slate-300 dark:text-slate-800" />{" "}
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2 text-sm">
              <i className="fas fa-shield-alt text-emerald-400" /> Legal
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/terms-of-use", label: "Terms of Use" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors flex items-center gap-1.5"
                  >
                    <i className="fas fa-chevron-right text-[10px] text-slate-300 dark:text-slate-800" />{" "}
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-5 border border-indigo-200 dark:border-indigo-800">
            <h3 className="font-bold text-indigo-700 dark:text-indigo-300 mb-2 text-sm flex items-center gap-2">
              <i className="fas fa-envelope" /> Suggestions?
            </h3>
            <p className="text-xs text-indigo-600 dark:text-indigo-400 mb-3">
              Have an idea for a new calculator?
            </p>
            <a
              href="mailto:suggestions@allcalculator.net"
              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              suggestions@allcalculator.net
            </a>
          </div>
        </aside>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline"
        >
          <i className="fas fa-arrow-left text-xs" /> Back to Home
        </Link>
      </div>
    </div>
  );
}
