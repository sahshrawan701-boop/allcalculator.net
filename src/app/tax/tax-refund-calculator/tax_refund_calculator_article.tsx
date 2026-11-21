import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function TaxRefundArticle() {
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
          <span className="meta-tag">Tax · Refund</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Tax Refund Calculator: Calculate Your Tax Refund
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to tax refund calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            A tax refund occurs when you've paid more in taxes throughout the year than
            you actually owe. This typically happens when too much is withheld from your
            paycheck or you make estimated payments that exceed your liability. While a
            refund feels like a bonus, it's essentially an interest-free loan to the
            government. Understanding your refund helps with financial planning.
          </p>
          <p className="mb-5">
            A Tax Refund Calculator estimates your potential refund based on your
            income, withholding, deductions, and credits. This tool helps you
            understand whether you'll receive a refund or owe additional taxes at
            filing time.
          </p>
          <p>
            Adjusting your withholding can help you get more money in each paycheck
            instead of waiting for a large refund.
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
                q: "How is my tax refund calculated?",
                a: "Tax refund = Total payments (withholding + estimated taxes) - Total tax liability. If payments exceed liability, you receive a refund. If liability exceeds payments, you owe additional taxes.",
              },
              {
                q: "When will I receive my tax refund?",
                a: "The IRS typically issues most refunds within 21 days of filing electronically. Paper returns take longer (6-8 weeks). You can track your refund status using the IRS Where's My Refund tool.",
              },
              {
                q: "Is a large tax refund good?",
                a: "While a refund feels good, it means you overpaid taxes throughout the year and gave the government an interest-free loan. Consider adjusting your W-4 to have more take-home pay if you consistently receive large refunds.",
              },
              {
                q: "How can I increase my tax refund?",
                a: "Strategies include maximizing deductions and credits, contributing to retirement accounts (401k, IRA), using health savings accounts (HSA), and ensuring you're claiming all eligible tax credits like the Child Tax Credit or Earned Income Credit.",
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
            Use the Tax Refund Calculator to estimate your potential refund or tax
            owed. Understanding your refund helps with financial planning and
            withholding adjustments.
          </p>
        </section>
      </div>
    </article>
  );
}
