import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function FreelancerTaxArticle() {
  return (
    <article
      className={`w-full max-w-[75ch] mx-auto px-6 py-16 text-[18px] leading-[1.8] font-sans text-slate-800 dark:text-slate-100 ${inter.variable}`}
    >
      <style>{`
        .article-root { font-family: var(--font-inter), sans-serif; }
        .display-font { font-family: var(--font-inter), sans-serif; }
        .article-root h2 { font-family: var(--font-inter), sans-serif; }
        .article-root h3 { font-family: var(--font-inter), sans-serif; }

        .dropcap::first-letter {
          font-family: var(--font-inter), sans-serif;
          font-size: 4.5rem;
          font-weight: 700;
          float: left;
          line-height: 0.8;
          margin-right: 0.12em;
          margin-top: 0.08em;
          color: var(--primary-dk);
        }
        .dark .dropcap::first-letter { color: var(--primary); }

        .rule-divider {
          border: none;
          border-top: 1px solid #cbd5e1;
          margin: 3rem 0;
        }
        .dark .rule-divider { border-top-color: #475569; }

        .faq-item {
          border-top: 1px solid #e2e8f0;
          padding: 1.25rem 0;
        }
        .dark .faq-item { border-top-color: #334155; }
        .faq-item h3 {
          font-size: 1rem !important;
          margin-bottom: 0.5rem !important;
          color: #1e293b !important;
        }
        .dark .faq-item h3 { color: #e2e8f0 !important; }

        .meta-tag {
          display: inline-block;
          font-size: 0.72rem;
          font-family: sans-serif;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--primary-dk);
          background: #e0e7ff;
          padding: 0.25rem 0.6rem;
          border-radius: 2px;
        }
        .dark .meta-tag {
          color: #a5b4fc;
          background: #312e81;
        }

        strong { font-weight: 600; }
        em { font-style: italic; }
      `}</style>

      <div className="article-root">
        <header className="mb-12 text-center">
          <span className="meta-tag">Tax · Freelancing</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Freelancer Tax Calculator: Calculate Freelancer Taxes
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to freelancer tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Freelancers are considered self-employed by the IRS, which means they're
            responsible for both income tax and self-employment tax (Social Security and
            Medicare). Unlike employees, freelancers don't have taxes withheld from
            payments, so they must make quarterly estimated tax payments. Understanding
            freelancer tax obligations is essential for financial stability.
          </p>
          <p className="mb-5">
            A Freelancer Tax Calculator estimates your total tax liability including
            income tax, self-employment tax, and quarterly estimated payments. This
            tool is essential for freelancers and independent contractors to plan their
            finances and avoid underpayment penalties.
          </p>
          <p>
            Proper tax planning helps freelancers set aside enough money for taxes
            and maintain cash flow throughout the year.
          </p>
        </section>

        <hr className="rule-divider" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {[
              {
                q: "What taxes do freelancers pay?",
                a: "Freelancers pay income tax on net earnings plus 15.3% self-employment tax (12.4% Social Security + 2.9% Medicare). You may also owe state income tax and local taxes depending on your location.",
              },
              {
                q: "How much should I set aside for taxes?",
                a: "A common rule is to set aside 25-30% of your freelance income for taxes. This covers both income tax and self-employment tax. Adjust based on your tax bracket and state tax rates.",
              },
              {
                q: "When are quarterly estimated taxes due?",
                a: "Estimated taxes are due April 15, June 15, September 15, and January 15 of the following year. Each payment covers income earned during that quarter.",
              },
              {
                q: "What expenses can freelancers deduct?",
                a: "Ordinary and necessary business expenses are deductible, including home office, equipment, software, marketing, travel, meals (50%), insurance, and professional services. Keep detailed records.",
              },
            ].map((faq, i) => (
              <div key={i} className="faq-item">
                <h3>{faq.q}</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule-divider" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Conclusion
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Use the Freelancer Tax Calculator to estimate your tax liability and plan
            quarterly payments. Proper tax planning is essential for freelancer
            financial stability and compliance.
          </p>
        </section>
      </div>
    </article>
  );
}
