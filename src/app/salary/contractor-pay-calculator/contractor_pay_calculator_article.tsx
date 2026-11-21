import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function ContractorPayArticle() {
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
          <span className="meta-tag">Salary · Contract Work</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Contractor Pay Calculator: Calculate Contract Earnings
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to contractor and freelance compensation
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Contractor and freelance work offers flexibility and autonomy but requires
            careful financial planning. Unlike traditional employment, contractors must
            handle their own taxes, benefits, and business expenses. Understanding your
            true hourly rate and annual earnings is crucial for sustainable freelance
            work.
          </p>
          <p className="mb-5">
            A Contractor Pay Calculator helps independent contractors and freelancers
            estimate their earnings based on hourly or project rates, accounting for
            billable hours and time off. This tool is essential for setting rates and
            planning income.
          </p>
          <p>
            Understanding the difference between gross and net earnings as a contractor
            helps you set appropriate rates and maintain financial stability.
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
                q: "How much should I charge as a contractor?",
                a: "Contractor rates should typically be 2-3 times your equivalent employee wage to cover taxes, benefits, overhead, and business expenses. Consider your industry, experience, and location.",
              },
              {
                q: "What expenses do contractors need to cover?",
                a: "Contractors must pay self-employment tax (15.3%), health insurance, retirement savings, business insurance, equipment, software, and other business expenses.",
              },
              {
                q: "How do I calculate annual contractor income?",
                a: "Multiply your hourly rate by billable hours per week, then by weeks worked annually. Account for non-billable time, holidays, and vacation.",
              },
              {
                q: "What's the difference between W-2 and 1099?",
                a: "W-2 employees have taxes withheld and receive benefits. 1099 contractors are self-employed, handle their own taxes, and receive no employer-provided benefits.",
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
            Use the Contractor Pay Calculator to understand your earnings potential
            and set appropriate rates. Proper rate calculation ensures sustainable
            freelance income.
          </p>
        </section>
      </div>
    </article>
  );
}
