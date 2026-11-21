import Link from "next/link";
import Logo from "./Logo";
import DollarIcon from "./DollarIcon";

const CATEGORIES = [
  { label: "Finance", href: "/finance", icon: "fa-dollar-sign" },
  { label: "Health & Fitness", href: "/health", icon: "fa-heartbeat" },
  { label: "Math", href: "/math", icon: "fa-calculator" },
  { label: "Science", href: "/science", icon: "fa-flask" },
  { label: "Business", href: "/business", icon: "fa-briefcase" },
  { label: "Lifestyle", href: "/lifestyle", icon: "fa-spa" },
];

const TOP_CALCULATORS = [
  {
    label: "Mortgage Calculator",
    href: "/mortgage/mortgage-calculator",
    icon: "fa-home",
  },
  {
    label: "BMI Calculator",
    href: "/health/bmi-calculator",
    icon: "fa-heartbeat",
  },
  { label: "Salary Calculators", href: "/salary", icon: "fa-money-bill-wave" },
  {
    label: "Scientific Calculator",
    href: "/math/scientific-calculator",
    icon: "fa-calculator",
  },
  { label: "Tax Calculators", href: "/tax", icon: "fa-file-invoice-dollar" },
  {
    label: "Age Calculator",
    href: "/lifestyle/age-calculator",
    icon: "fa-birthday-cake",
  },
];

const COMPANY = [
  { label: "About Us", href: "/about-us", icon: "fa-info-circle" },
  { label: "Contact", href: "/contact", icon: "fa-envelope" },
];

const LEGAL = [
  { label: "Terms of Use", href: "/terms-of-use", icon: "fa-gavel" },
  { label: "Privacy Policy", href: "/privacy-policy", icon: "fa-shield-alt" },
  { label: "Cookie Policy", href: "/cookie-policy", icon: "fa-cookie" },
  { label: "Sitemap", href: "/sitemap", icon: "fa-sitemap" },
];

const SOCIALS = [
  { icon: "fa-twitter", label: "Twitter", href: "#" },
  { icon: "fa-facebook-f", label: "Facebook", href: "#" },
  { icon: "fa-instagram", label: "Instagram", href: "#" },
  { icon: "fa-youtube", label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full mt-10 lg:mt-15 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 lg:gap-8 mb-8">
          {/* Brand & Newsletter Column (Spans 2 on lg, 4 on md, 2 on sm) */}
          <div className="sm:col-span-2 md:col-span-4 lg:col-span-2">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-slate-800 dark:text-slate-100 text-sm leading-relaxed mb-8 max-w-sm">
              Your trusted source for over 750 free online calculators. We build
              fast, accurate, and easy-to-use tools to help you solve everyday
              problems.
            </p>

            {/* Newsletter Subscription (Visual) */}
            <div className="max-w-sm">
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-3">
                Stay Updated
              </h3>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
                  aria-label="Email address for newsletter"
                />
                <button
                  type="button"
                  className="w-full sm:w-auto px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 dark:focus-visible:ring-offset-slate-900 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>

          {/* Links Columns */}
          <div className="col-span-1">
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-6 uppercase tracking-wider">
              Categories
            </h3>
            <ul className="space-y-4">
              {CATEGORIES.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-800 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-sm transition-colors inline-flex items-center gap-2"
                  >
                    {link.icon === "fa-dollar-sign" ? (
                      <DollarIcon className="w-4 h-4" />
                    ) : (
                      <i
                        className={`fas ${link.icon} text-xs`}
                        aria-hidden="true"
                      />
                    )}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-6 uppercase tracking-wider">
              Top Tools
            </h3>
            <ul className="space-y-4">
              {TOP_CALCULATORS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-800 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-sm transition-colors inline-flex items-center gap-2"
                  >
                    <i
                      className={`fas ${link.icon} text-xs`}
                      aria-hidden="true"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-6 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-4">
              {COMPANY.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-800 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-sm transition-colors inline-flex items-center gap-2"
                  >
                    <i
                      className={`fas ${link.icon} text-xs`}
                      aria-hidden="true"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-6 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-4">
              {LEGAL.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-800 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-sm transition-colors inline-flex items-center gap-2"
                  >
                    <i
                      className={`fas ${link.icon} text-xs`}
                      aria-hidden="true"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-50 dark:bg-[#06090f] border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-sm text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()}{" "}
            <Link
              href="/"
              className="font-semibold text-slate-800 dark:text-slate-100 text-sm hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              allcalculator.net
            </Link>
            . All rights reserved.
          </div>

          {/* Social Icons */}
          {/* <div className="flex items-center gap-4">
            {SOCIALS.map((s) => (
              <a
                key={s.icon}
                href={s.href}
                aria-label={s.label}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-900/30 dark:hover:text-indigo-400 hover:border-indigo-200 dark:hover:border-indigo-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all"
              >
                <i className={`fab ${s.icon}`} aria-hidden="true" />
              </a>
            ))}
          </div> */}

          {/* Trust Badge */}
          <div className="text-sm text-slate-800 dark:text-slate-400 flex items-center gap-1.5 font-medium">
            Built with heart{" "}
            <i className="fas fa-heart text-rose-500" aria-hidden="true" /> for
            everyone
          </div>
        </div>
      </div>
    </footer>
  );
}
