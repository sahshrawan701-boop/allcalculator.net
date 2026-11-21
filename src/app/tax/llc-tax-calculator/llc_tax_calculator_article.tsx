import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function LLCTaxArticle() {
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
          <span className="meta-tag">Tax · LLC</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            LLC Tax Calculator: Calculate LLC Tax
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to LLC tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Limited Liability Companies (LLCs) offer flexibility in how they're taxed.
            By default, single-member LLCs are taxed as sole proprietorships and
            multi-member LLCs as partnerships. LLCs can also elect to be taxed as
            S corporations or C corporations. Understanding LLC tax options helps
            choose the most tax-efficient structure for your business.
          </p>
          <p className="mb-5">
            An LLC Tax Calculator estimates your tax liability under different tax
            classifications (disregarded entity, partnership, S corp, C corp). This
            tool helps LLC owners compare tax options and choose the optimal structure.
          </p>
          <p>
            Proper LLC tax classification can significantly reduce your self-employment
            tax and overall tax liability.
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
                q: "How are LLCs taxed by default?",
                a: "Single-member LLCs are taxed as sole proprietorships (income on owner's personal return). Multi-member LLCs are taxed as partnerships (each member reports share of income). Both pay self-employment tax on net income.",
              },
              {
                q: "Should my LLC elect S corporation status?",
                a: "S corp election can save self-employment tax on profits beyond reasonable salary. However, it requires payroll, additional paperwork, and may not be beneficial for lower-income businesses.",
              },
              {
                q: "What are the tax benefits of an LLC?",
                a: "LLCs offer liability protection, pass-through taxation (avoiding double taxation), flexibility in profit distribution, and the ability to choose the most advantageous tax classification.",
              },
              {
                q: "What taxes does an LLC pay?",
                a: "LLCs pay income tax on profits, self-employment tax (unless S corp), potentially state LLC fees/franchise taxes, and employment taxes if they have employees. S corp LLCs pay corporate tax on certain income.",
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
            Use the LLC Tax Calculator to compare tax options for your LLC. Choosing
            the right tax classification can significantly reduce your tax liability.
          </p>
        </section>
      </div>
    </article>
  );
}
