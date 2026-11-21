import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function AlimonyArticle() {
  return (
    <article
      className={`w-full max-w-[75ch] mx-auto px-6 py-16 text-[18px] leading-[1.8] font-sans text-slate-800 dark:text-slate-100 ${inter.variable}`}
    >
      <style>{`
        .article-root { font-family: var(--font-inter), sans-serif; }
        .display-font { font-family: var(--font-inter), sans-serif; }
        .article-root h2 { font-family: var(--font-inter), sans-serif; }
        .article-root h3 { font-family: var(--font-inter), sans-serif; }
        .article-root h4 { font-family: var(--font-inter), sans-serif; }

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

        .ornament {
          display: block;
          text-align: center;
          color: #94a3b8;
          letter-spacing: 0.5em;
          font-size: 0.75rem;
          margin: 2.5rem 0;
        }
        .dark .ornament { color: #64748b; }

        .formula-block {
          font-family: 'Courier New', monospace;
          background: #f8fafc;
          border-left: 3px solid var(--primary-dk);
          padding: 1.25rem 1.5rem;
          margin: 1.5rem 0;
          font-size: 1rem;
          color: #1e293b;
          overflow-x: auto;
        }
        .dark .formula-block {
          background: #1e293b;
          border-left-color: var(--primary);
          color: #e2e8f0;
        }
        .formula-block pre {
          margin: 0;
          font-family: inherit;
          white-space: pre-wrap;
        }

        .aside-callout {
          border-left: 3px solid var(--primary);
          padding: 1rem 1.25rem;
          background: #eef2ff;
          margin: 1.5rem 0;
          font-size: 0.95rem;
          font-style: italic;
          color: var(--primary-dk);
        }
        .dark .aside-callout {
          background: #312e81;
          color: #a5b4fc;
        }

        .state-card {
          border: 1px solid #e2e8f0;
          border-top: 3px solid var(--primary-dk);
          padding: 1.5rem;
          margin: 1.5rem 0;
          background: #f8fafc;
        }
        .dark .state-card {
          border-color: #475569;
          border-top-color: var(--primary);
          background: #1e293b;
        }
        .state-card h3 {
          font-size: 1.05rem !important;
          margin-bottom: 0.75rem !important;
          color: var(--primary-dk) !important;
          letter-spacing: 0.02em;
        }
        .dark .state-card h3 { color: #a5b4fc !important; }

        .styled-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.9rem;
          margin: 1rem 0;
        }
        .styled-table th {
          text-align: left;
          font-family: var(--font-inter), sans-serif;
          font-weight: 600;
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 0.5rem 0.75rem;
          border-bottom: 2px solid #cbd5e1;
          color: #475569;
        }
        .dark .styled-table th {
          border-bottom-color: #475569;
          color: #cbd5e1;
        }
        .styled-table td {
          padding: 0.5rem 0.75rem;
          border-bottom: 1px solid #e2e8f0;
          color: #1e293b;
        }
        .dark .styled-table td {
          border-bottom-color: #334155;
          color: #e2e8f0;
        }
        .styled-table tr:last-child td {
          border-bottom: none;
          font-weight: 600;
          color: var(--primary-dk);
          background: #e0e7ff;
        }
        .dark .styled-table tr:last-child td {
          color: #a5b4fc;
          background: #312e81;
        }

        .styled-table-plain tr:last-child td {
          font-weight: inherit;
          color: inherit;
          background: none;
          border-bottom: 1px solid #e2e8f0;
        }
        .dark .styled-table-plain tr:last-child td {
          border-bottom-color: #334155;
        }
        .styled-table-plain th { background: #f1f5f9; }
        .dark .styled-table-plain th { background: #334155; }

        .pull-quote {
          border-top: 1px solid #cbd5e1;
          border-bottom: 1px solid #cbd5e1;
          padding: 1.5rem 2rem;
          margin: 2.5rem 0;
          font-family: var(--font-inter), sans-serif;
          font-size: 1.4rem;
          font-style: italic;
          line-height: 1.5;
          color: #334155;
          text-align: center;
        }
        .dark .pull-quote {
          border-color: #475569;
          color: #cbd5e1;
        }

        .numbered-section {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
          align-items: flex-start;
        }
        .numbered-section .num {
          font-family: var(--font-inter), sans-serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: #cbd5e1;
          line-height: 1;
          min-width: 2rem;
          padding-top: 0.1rem;
        }
        .dark .numbered-section .num { color: #475569; }

        .tip-list li {
          padding: 0.6rem 0;
          border-bottom: 1px solid #f1f5f9;
          padding-left: 1.25rem;
          position: relative;
        }
        .dark .tip-list li { border-bottom-color: #334155; }
        .tip-list li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--primary);
          font-style: normal;
        }
        .dark .tip-list li::before { color: #818cf8; }

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
        {/* ── HEADER ── */}
        <header className="mb-12 text-center">
          <span className="meta-tag">Lifestyle · Legal & Family</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Alimony Calculator: Estimate Spousal Support Payments
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to understanding alimony calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Alimony, also known as spousal support or maintenance, is a legal
            obligation to provide financial support to a spouse after divorce
            or separation. The goal is to help the lower-earning spouse maintain
            a standard of living similar to what they enjoyed during the marriage.
            Calculating alimony can be complex, as it involves multiple factors
            and varies significantly by jurisdiction.
          </p>
          <p className="mb-5">
            An Alimony Calculator provides estimates based on common guidelines,
            helping you understand potential payment amounts before consulting
            with legal professionals. While these calculations are not legally
            binding, they offer valuable insight into what to expect during
            divorce proceedings.
          </p>
          <p>
            Understanding how alimony is calculated can help you prepare for
            negotiations and make informed decisions about your financial future.
            This guide explains the key factors, common formulas, and important
            considerations in alimony determination.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── DISCLAIMER ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Important Legal Disclaimer
          </h2>
          <div className="aside-callout">
            <strong>This calculator provides estimates only and is not legal advice.</strong>
            Alimony calculations vary significantly by state and country. Actual
            payments are determined by courts based on numerous factors including
            but not limited to income, marriage length, and individual circumstances.
            Always consult with a qualified family law attorney for accurate
            calculations specific to your situation.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Does the Alimony Calculator Work?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator uses simplified formulas based on common guidelines to
            estimate potential alimony payments. It considers the income difference
            between spouses and the length of the marriage to provide a rough
            estimate of monthly payments and duration.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            To use the calculator:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              [
                "Enter Spouse 1 Income",
                "Input the monthly income of the first spouse (after taxes).",
              ],
              [
                "Enter Spouse 2 Income",
                "Input the monthly income of the second spouse (after taxes).",
              ],
              [
                "Marriage Length",
                "Enter the total number of years the marriage lasted.",
              ],
              [
                "View Estimate",
                "See the estimated monthly payment, percentage applied, and duration.",
              ],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">
                  ◆
                </span>
                <span>
                  <strong>{label}</strong> – {desc}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The calculator identifies the higher and lower earner, calculates the
            income difference, and applies a percentage based on marriage length
            to estimate the payment amount.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── KEY FACTORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Key Factors in Alimony Determination
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Courts consider multiple factors when determining alimony:
          </p>
          
          {[
            {
              heading: "Income Disparity",
              description: "The difference in income between spouses is the primary factor. Larger disparities typically result in higher alimony payments.",
            },
            {
              heading: "Length of Marriage",
              description: "Longer marriages generally result in longer alimony duration and potentially higher payments. Short marriages may have limited or no alimony.",
            },
            {
              heading: "Standard of Living",
              description: "Courts aim to help the lower-earning spouse maintain a standard of living similar to what was enjoyed during the marriage.",
            },
            {
              heading: "Age and Health",
              description: "The age and physical/mental health of both spouses can affect alimony, particularly regarding ability to work and earn income.",
            },
            {
              heading: "Financial Needs",
              description: "The reasonable financial needs of each spouse, including housing, healthcare, and living expenses, are carefully considered.",
            },
            {
              heading: "Contributions to Marriage",
              description: "Non-financial contributions such as homemaking, child-rearing, and supporting a spouse's education or career are valued.",
            },
          ].map(({ heading, description }) => (
            <div key={heading} className="state-card">
              <h3>{heading}</h3>
              <p className="text-sm text-slate-800 dark:text-slate-300 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── DURATION GUIDELINES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Alimony Duration Guidelines
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            While duration varies by jurisdiction, general guidelines include:
          </p>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Marriage Length</th>
                <th className="dark:text-slate-100">Typical Duration</th>
                <th className="dark:text-slate-100">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Under 5 years", "Up to 50% of marriage length", "Short-term marriages often have limited alimony"],
                ["5-9 years", "Up to 60% of marriage length", "Moderate duration with transitional support"],
                ["10-19 years", "Up to 70% of marriage length", "Longer marriages may receive extended support"],
                ["20+ years", "Long-term or permanent", "Very long marriages may result in indefinite support"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} className="dark:text-slate-100">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <hr className="rule-divider" />

        {/* ── FAQS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {[
              {
                q: "Is alimony always awarded in divorce?",
                a: "No, alimony is not automatic. Courts award it based on specific circumstances including income disparity, marriage length, and financial need. Many divorces involve no alimony at all.",
              },
              {
                q: "Can alimony be modified later?",
                a: "Yes, alimony can often be modified if there's a significant change in circumstances such as job loss, illness, or substantial income change for either party.",
              },
              {
                q: "Does fault in the divorce affect alimony?",
                a: "In most jurisdictions, fault (infidelity, abuse, etc.) does not affect alimony calculations. Alimony is based on financial factors rather than the reasons for divorce.",
              },
              {
                q: "Is alimony tax-deductible?",
                a: "Tax laws vary and have changed significantly in recent years. Consult a tax professional to understand current tax implications of alimony in your jurisdiction.",
              },
              {
                q: "What happens if the paying spouse remarries?",
                a: "The paying spouse's remarriage typically does not affect alimony obligations. However, if the receiving spouse remarries, alimony usually terminates.",
              },
              {
                q: "Can alimony be paid in a lump sum?",
                a: "Yes, parties can agree to a lump-sum payment instead of monthly installments. This is often negotiated during divorce settlements and may have tax implications.",
              },
              {
                q: "How accurate is this calculator?",
                a: "This calculator provides rough estimates based on common guidelines. Actual alimony is determined by courts based on numerous factors and varies significantly by jurisdiction.",
              },
              {
                q: "Should I hire a lawyer for alimony negotiations?",
                a: "Absolutely. Alimony calculations are complex and have long-term financial implications. A qualified family law attorney can protect your interests and ensure fair outcomes.",
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

        {/* ── CONCLUSION ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Conclusion
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Alimony calculations are complex and highly dependent on individual
            circumstances and local laws. While this calculator provides helpful
            estimates, it should only serve as a starting point for understanding
            potential financial obligations.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The most important step is to consult with a qualified family law
            attorney who can provide accurate calculations based on your specific
            situation and jurisdiction. Professional legal guidance is essential
            for ensuring fair outcomes and protecting your financial future.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Use this calculator as an educational tool to understand the factors
            involved in alimony determination, but always rely on professional
            legal advice for actual divorce proceedings and financial planning.
          </p>
        </section>
      </div>
    </article>
  );
}
