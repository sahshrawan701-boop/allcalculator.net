import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/terms-of-use",
  },
  title: "Terms of Use | Legal Agreement",
  description:
    "Legal agreement governing the use of Allcalculator.net free online calculators. Please read these terms carefully before using our services.",
};

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    icon: "fa-handshake",
    content:
      'By accessing and using Allcalculator.net ("the Website"), you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services. Your continued use of the Website following the posting of changes to these Terms will mean you accept those changes.',
  },
  {
    title: "2. Description of Service",
    icon: "fa-calculator",
    content:
      "Allcalculator.net provides free online calculators for educational, informational, and planning purposes only. Our calculators include Financial calculators (mortgage, loan, interest, investment), Health calculators (BMI, TDEE, calorie, pregnancy), Math calculators (scientific, algebra, geometry), Science calculators (physics, chemistry formulas), and more. All calculators are provided free of charge without registration requirements.",
  },
  {
    title: "3. Disclaimer of Professional Advice",
    icon: "fa-exclamation-triangle",
    content:
      "The calculators and information provided on this Website are for general informational purposes only and do not constitute financial, legal, or tax advice. For important decisions regarding finances, health, construction, or other critical matters, please consult with qualified professionals. Calculator results are estimates only and should not be solely relied upon for major decisions.",
    highlight: true,
  },
  {
    title: "4. User Responsibilities",
    icon: "fa-user-check",
    content:
      "When using our Website, you agree to: (1) Use the calculators for lawful purposes only; (2) Not attempt to manipulate, reverse-engineer, or exploit our tools; (3) Not use bots, scrapers, or automated tools without prior written permission; (4) Not interfere with the Website's security or other users' experience. You are responsible for any data you input and any decisions you make based on calculator results.",
  },
  {
    title: "5. Intellectual Property",
    icon: "fa-copyright",
    content:
      "All content on this Website — including calculator designs, interfaces, algorithms, formulas, text, graphics, and user experiences — is the property of Allcalculator.net or its licensors, protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without prior written permission.",
  },
  {
    title: "6. Limitation of Liability",
    icon: "fa-balance-scale",
    content:
      "Allcalculator.net shall not be liable for any errors, inaccuracies, or omissions in calculator results; any decisions made based on calculator outputs; any direct, indirect, incidental, or consequential damages arising from use of our Website; or any loss of data, profits, or business opportunities. Use of our calculators is at your own risk.",
  },
  {
    title: "7. Disclaimer of Warranties",
    icon: "fa-exclamation-circle",
    content:
      'The Website and all calculators are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the Website will be available at all times or that calculations will be error-free.',
  },
  {
    title: "8. Third-Party Links",
    icon: "fa-external-link-alt",
    content:
      "The Website may contain links to third-party websites. We do not control or endorse these sites and are not responsible for their content, privacy policies, or practices. Accessing third-party sites through links on our Website is at your own risk.",
  },
  {
    title: "9. Modifications to Terms",
    icon: "fa-sync-alt",
    content:
      'We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on this page. We will update the "Last Updated" date at the top of these Terms. Your continued use of the Website after any changes constitutes acceptance of the modified Terms.',
  },
  {
    title: "10. Governing Law",
    icon: "fa-gavel",
    content:
      "These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions. Any disputes arising under these Terms will be resolved through good-faith negotiation before pursuing formal legal proceedings.",
  },
  {
    title: "11. Termination",
    icon: "fa-ban",
    content:
      "We may terminate or suspend access to our Website immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Website ceases immediately.",
  },
  {
    title: "12. Contact Us",
    icon: "fa-envelope",
    content: "",
    isContact: true,
  },
];

export default function TermsOfUsePage() {
  return (
    <div className="max-w-[900px] mx-auto px-4 sm:px-8 py-8 pb-16">
      {/* Hero */}
      <section
        className="rounded-2xl overflow-hidden mb-8 text-white py-10 px-8 relative"
        style={{ background: "linear-gradient(135deg, #1e293b, #0ea5e9)" }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(14,165,233,.3),transparent_50%)]" />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 text-xs font-semibold mb-3">
            <i className="fas fa-gavel" /> Last Updated: January 2025
          </div>
          <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold mb-2">
            Terms of Use
          </h1>
          <p className="text-white/80">
            Legal agreement governing the use of Allcalculator.net&apos;s free
            online calculators. Please read carefully before using our services.
          </p>
        </div>
      </section>

      {/* Key notice */}
      <div className="mb-8 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-5">
        <div className="flex items-start gap-3">
          <i className="fas fa-exclamation-triangle text-amber-500 text-xl flex-shrink-0 mt-0.5" />
          <div>
            <h2 className="font-bold text-amber-700 dark:text-amber-300 mb-1">
              Important Notice
            </h2>
            <p className="text-sm text-amber-600 dark:text-amber-400">
              Allcalculator.net provides calculators for informational purposes
              only. Our tools are not substitutes for professional advice.
              Always consult qualified professionals for important decisions.
            </p>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-4">
        {SECTIONS.map((s) => (
          <section
            key={s.title}
            className={`rounded-2xl p-6 border shadow-sm ${s.highlight ? "bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-800" : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"}`}
          >
            <h2
              className={`text-base font-bold mb-2 flex items-center gap-2 ${s.highlight ? "text-red-700 dark:text-red-400" : "text-slate-800 dark:text-slate-100"}`}
            >
              <i
                className={`fas ${s.icon} ${s.highlight ? "text-red-500" : "text-blue-500"} text-sm`}
              />
              {s.title}
            </h2>
            {s.isContact ? (
              <div className="text-sm text-slate-500 dark:text-slate-400">
                <p className="mb-3">
                  If you have questions about these Terms, please contact us:
                </p>
                <a
                  href="mailto:legal@allcalculator.net"
                  className="inline-flex items-center gap-2 text-indigo-500 hover:underline font-semibold"
                >
                  <i className="fas fa-envelope" /> legal@allcalculator.net
                </a>
              </div>
            ) : (
              <p
                className={`text-sm leading-relaxed ${s.highlight ? "text-red-600 dark:text-red-400" : "text-slate-500 dark:text-slate-400"}`}
              >
                {s.content}
              </p>
            )}
          </section>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <Link
          href="/privacy-policy"
          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline"
        >
          <i className="fas fa-arrow-left text-xs" /> Privacy Policy
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline"
        >
          Back to Home <i className="fas fa-arrow-right text-xs" />
        </Link>
      </div>
    </div>
  );
}
