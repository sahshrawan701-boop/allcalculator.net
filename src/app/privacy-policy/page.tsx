import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/privacy-policy",
  },
  title: "Privacy Policy | Data Protection & Your Privacy",
  description:
    "Learn how Allcalculator.net protects your data and privacy. We don't collect personal information or store your calculations — everything runs in your browser.",
};

const SECTIONS = [
  {
    id: "overview",
    icon: "fa-shield-alt",
    title: "1. Overview",
    content: (
      <>
        <p>
          Welcome to <strong>Allcalculator.net</strong> (&ldquo;we,&rdquo;
          &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We are committed to
          protecting your privacy. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you use our website
          and services.
        </p>
        <p className="mt-3">
          We believe in minimal data collection. Our calculators are designed to
          work entirely in your browser without sending your data to our
          servers.
        </p>
      </>
    ),
  },
  {
    id: "no-collect",
    icon: "fa-ban",
    title: "2. Information We Do NOT Collect",
    content: (
      <>
        <p className="mb-2">
          We practice data minimization. We do <strong>not</strong> collect:
        </p>
        <ul className="space-y-1 list-disc list-inside">
          <li>Calculator inputs or results</li>
          <li>Personal identification information</li>
          <li>Health, financial, or personal data entered into calculators</li>
          <li>Email addresses (unless you contact us voluntarily)</li>
          <li>Payment information of any kind</li>
        </ul>
      </>
    ),
  },
  {
    id: "collect",
    icon: "fa-database",
    title: "3. Information We May Collect",
    content: (
      <>
        <p className="mb-2">
          We may collect limited, anonymous technical data:
        </p>
        <ul className="space-y-1 list-disc list-inside">
          <li>
            <strong>Log Data:</strong> IP address, browser type, pages visited,
            and time stamps (standard server logs)
          </li>
          <li>
            <strong>Analytics:</strong> Aggregate usage statistics to improve
            our services
          </li>
          <li>
            <strong>Theme Preference:</strong> Stored locally in your browser
            via localStorage
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "use",
    icon: "fa-cogs",
    title: "4. How We Use Information",
    content: (
      <ul className="space-y-1 list-disc list-inside">
        <li>
          <strong>Security:</strong> Prevent fraud, abuse, and malicious
          activities
        </li>
        <li>
          <strong>Compliance:</strong> Meet legal obligations and respond to
          legitimate requests
        </li>
        <li>
          <strong>Troubleshooting:</strong> Identify and fix technical issues
        </li>
        <li>
          <strong>Improvement:</strong> Understand how users interact with our
          tools
        </li>
      </ul>
    ),
  },
  {
    id: "cookies",
    icon: "fa-cookie-bite",
    title: "5. Cookies and Similar Technologies",
    content: (
      <>
        <p className="mb-2">
          Our website uses only essential cookies for basic functionality:
        </p>
        <ul className="space-y-1 list-disc list-inside mb-3">
          <li>
            <strong>Theme Preference Cookie:</strong> Remembers your light/dark
            mode setting
          </li>
          <li>
            <strong>Security Cookies:</strong> Protect against cross-site
            request forgery (session-only)
          </li>
        </ul>
        <p className="mb-1">
          We do <strong>not</strong> use:
        </p>
        <ul className="space-y-1 list-disc list-inside">
          <li>Tracking or advertising cookies</li>
          <li>Cross-site tracking</li>
          <li>Third-party analytics cookies</li>
        </ul>
      </>
    ),
  },
  {
    id: "third-party",
    icon: "fa-external-link-alt",
    title: "6. Third-Party Services",
    content: (
      <ul className="space-y-1 list-disc list-inside">
        <li>
          <strong>Security Services:</strong> To protect against DDoS attacks
          and malicious traffic
        </li>
        <li>
          <strong>Font Services:</strong> Google Fonts for typography (anonymous
          usage only)
        </li>
        <li>
          <strong>Icon Libraries:</strong> Font Awesome for interface icons
        </li>
      </ul>
    ),
  },
  {
    id: "security",
    icon: "fa-lock",
    title: "7. Data Security",
    content: (
      <ul className="space-y-1 list-disc list-inside">
        <li>
          <strong>HTTPS Encryption:</strong> All traffic is encrypted in transit
        </li>
        <li>
          <strong>Security Updates:</strong> Regular updates and security
          patches
        </li>
        <li>
          <strong>Minimal Data:</strong> We collect the minimum data necessary
          for operation
        </li>
        <li>
          <strong>Browser-Based Processing:</strong> Calculations happen locally
          in your browser
        </li>
      </ul>
    ),
  },
  {
    id: "children",
    icon: "fa-child",
    title: "8. Children's Privacy",
    content: (
      <p>
        Our services are not directed to children under 13. We do not knowingly
        collect any information from children under 13. If you are a parent or
        guardian and believe your child has provided us with information, please
        contact us at{" "}
        <a
          href="mailto:privacy@allcalculator.net"
          className="text-indigo-500 hover:underline"
        >
          privacy@allcalculator.net
        </a>
        .
      </p>
    ),
  },
  {
    id: "changes",
    icon: "fa-sync-alt",
    title: "9. Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy periodically to reflect changes in our
        practices or legal requirements. We will notify users of significant
        changes by posting a notice on our website and updating the &ldquo;Last
        Updated&rdquo; date.
      </p>
    ),
  },
  {
    id: "contact",
    icon: "fa-envelope",
    title: "10. Contact Us",
    content: (
      <div>
        <p className="mb-3">
          If you have questions about this Privacy Policy, please contact our
          Privacy Team:
        </p>
        <div className="flex flex-col gap-1 text-sm">
          <a
            href="mailto:privacy@allcalculator.net"
            className="inline-flex items-center gap-2 text-indigo-500 hover:underline"
          >
            <i className="fas fa-envelope" /> privacy@allcalculator.net
          </a>
        </div>
      </div>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-[900px] mx-auto px-4 sm:px-8 py-8 pb-16">
      {/* Hero */}
      <section
        className="rounded-2xl overflow-hidden mb-8 text-white py-10 px-8 relative"
        style={{ background: "linear-gradient(135deg, #1e293b, #4f46e5)" }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,.3),transparent_50%)]" />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 text-xs font-semibold mb-3">
            <i className="fas fa-shield-alt" /> Last Updated: January 2025
          </div>
          <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold mb-2">
            Privacy Policy
          </h1>
          <p className="text-white/80">
            Learn how we protect your data and privacy. We believe in
            transparency and minimal data collection — your calculations stay in
            your browser.
          </p>
        </div>
      </section>

      {/* Privacy highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {[
          {
            icon: "fa-ban",
            label: "No Tracking Cookies",
            color: "text-emerald-500",
            bg: "bg-emerald-50 dark:bg-emerald-900/20",
          },
          {
            icon: "fa-user-slash",
            label: "No Personal Data Stored",
            color: "text-blue-500",
            bg: "bg-blue-50 dark:bg-blue-900/20",
          },
          {
            icon: "fa-browser",
            label: "Browser-Based Processing",
            color: "text-violet-500",
            bg: "bg-violet-50 dark:bg-violet-900/20",
          },
        ].map((h) => (
          <div
            key={h.label}
            className={`${h.bg} rounded-xl p-4 border border-slate-200 dark:border-slate-800 flex items-center gap-3`}
          >
            <i className={`fas ${h.icon} ${h.color} text-xl`} />
            <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
              {h.label}
            </span>
          </div>
        ))}
      </div>

      {/* Sections */}
      <div className="space-y-5">
        {SECTIONS.map((s) => (
          <section
            key={s.id}
            id={s.id}
            className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-sm border border-slate-200 dark:border-slate-800"
          >
            <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
              <i className={`fas ${s.icon} text-indigo-500 text-base`} />{" "}
              {s.title}
            </h2>
            <div className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              {s.content}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <Link
          href="/about-us"
          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline"
        >
          <i className="fas fa-arrow-left text-xs" /> About Us
        </Link>
        <Link
          href="/terms-of-use"
          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline"
        >
          Terms of Use <i className="fas fa-arrow-right text-xs" />
        </Link>
      </div>
    </div>
  );
}
