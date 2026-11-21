import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function EarnedIncomeCreditArticle() {
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
          <span className="meta-tag">Tax · Credits</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Earned Income Credit Calculator: Calculate EIC
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to earned income credit calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            The Earned Income Credit (EIC) is a refundable tax credit for low-to-moderate
            income working individuals and families. For 2024, the maximum credit ranges
            from $600 to $7,830 depending on filing status and number of qualifying
            children. The EIC is designed to encourage and reward work while providing
            financial assistance to eligible taxpayers.
          </p>
          <p className="mb-5">
            An Earned Income Credit Calculator estimates your credit based on income,
            filing status, and number of qualifying children. This tool is essential
            for eligible taxpayers to understand their potential tax refund and plan
            their finances accordingly.
          </p>
          <p>
            The EIC can significantly reduce your tax liability or provide a refund,
            making it one of the most valuable tax credits for eligible workers.
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
                q: "Who qualifies for the Earned Income Credit?",
                a: "You must have earned income, file a tax return, meet income limits (varies by filing status and children), have a valid Social Security number, and be a U.S. citizen or resident alien for the entire tax year.",
              },
              {
                q: "What are the 2024 income limits for EIC?",
                a: "For 2024, single filers with no children can earn up to $18,590. Limits increase with children: up to $49,084 with one child, $55,768 with two children, and $59,899 with three or more children.",
              },
              {
                q: "What is the maximum EIC for 2024?",
                a: "Maximum credits for 2024 are $600 with no children, $3,995 with one child, $6,604 with two children, and $7,830 with three or more children. These are subject to income phase-out.",
              },
              {
                q: "How do I claim the Earned Income Credit?",
                a: "File Form 1040 and complete Schedule EIC. The credit is calculated automatically based on your income and qualifying children. You may need to provide documentation for qualifying children.",
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
            Use the Earned Income Credit Calculator to estimate your potential tax
            credit. The EIC is a valuable benefit for eligible workers that can
            significantly reduce tax liability or provide a refund.
          </p>
        </section>
      </div>
    </article>
  );
}
