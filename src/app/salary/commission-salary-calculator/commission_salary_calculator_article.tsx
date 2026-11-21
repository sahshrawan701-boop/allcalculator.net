import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function CommissionSalaryArticle() {
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
          <span className="meta-tag">Salary · Commission Structure</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Commission Salary Calculator: Base Salary Plus Commission
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to commission-based salary structures
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Commission-based salary structures combine a guaranteed base salary with
            performance-based commission earnings. This hybrid approach provides income
            stability while incentivizing performance. It's common in sales, real estate,
            and financial services where results directly impact revenue.
          </p>
          <p className="mb-5">
            A Commission Salary Calculator calculates total compensation by combining
            base salary with commission earnings from sales performance. This tool is
            essential for professionals evaluating job offers or planning income based
            on sales targets.
          </p>
          <p>
            Understanding how base salary and commission interact helps you set
            realistic income expectations and create strategies to maximize your total
            compensation.
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
                q: "What is a typical base salary plus commission split?",
                a: "Splits vary widely by industry. Sales roles might offer 50/50, 60/40, or 70/40 splits. Higher base salaries typically have lower commission rates.",
              },
              {
                q: "How do I calculate total commission salary?",
                a: "Total Compensation = Base Salary + (Sales × Commission Rate). For example, $50,000 base + ($200,000 sales × 10%) = $70,000 total.",
              },
              {
                q: "What are the advantages of commission salary?",
                a: "Advantages include income stability from base salary, unlimited earning potential from commissions, and clear alignment between performance and pay.",
              },
              {
                q: "What should I consider in a commission-based offer?",
                a: "Consider the base salary amount, commission rate, sales targets, commission structure (flat vs tiered), and how achievable the targets are.",
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
            Use the Commission Salary Calculator to understand your total compensation
            potential. Evaluating both base salary and commission helps you make
            informed career decisions.
          </p>
        </section>
      </div>
    </article>
  );
}
