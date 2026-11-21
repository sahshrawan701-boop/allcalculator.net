import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function PresentValueCalculatorArticle() {
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
          color: #33455;
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
          <span className="meta-tag">Investing · Present Value</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Present Value Calculator: Understand Time Value of Money
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide to present value calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Present value is a fundamental concept in finance that calculates what a future sum of money is worth today, given a specified rate of return. The Present Value Calculator helps you determine the current worth of future cash flows, which is essential for investment decisions, loan calculations, and financial planning.
          </p>
          <p className="mb-5">
            Understanding present value is crucial for comparing investment opportunities, evaluating loan terms, and making informed financial decisions. This calculator shows how discount rates and time periods affect the value of future money in today&apos;s terms.
          </p>
          <p className="mb-5">
            The calculator provides estimates for the present value of single sums, annuities, and series of cash flows, helping you understand the time value of money and make better financial decisions.
          </p>
          <p>
            Use the Present Value Calculator to evaluate investments, compare loan options, and understand the true cost of future payments.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How the Present Value Calculator Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator discounts future cash flows back to their present value using a specified discount rate. This accounts for the time value of money—the principle that money available today is worth more than the same amount in the future due to its potential earning capacity.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Here&apos;s what you&apos;ll typically need to input:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Future value", "Amount you will receive in the future"],
              ["Discount rate (%)", "Rate used to discount future cash flows"],
              ["Time period", "Number of years until receipt"],
              ["Payment frequency", "How often payments occur (for annuities)"],
              ["Payment amount", "Regular payment amount (for annuities)"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> – {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The calculator then displays the present value, showing what the future amount is worth in today&apos;s dollars.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Present Value Formula
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Present value is calculated by discounting future cash flows back to their current value.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Present Value Formula (lump sum):
          </p>
          <div className="formula-block">
            <pre>PV = FV / (1 + r)^t</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Present Value Formula (annuity):
          </p>
          <div className="formula-block">
            <pre>PV = PMT × (1 - (1 + r)^(-n)) / r</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["PV", "Present value"],
              ["FV", "Future value"],
              ["PMT", "Payment amount per period"],
              ["r", "Discount rate per period (decimal)"],
              ["t", "Number of years"],
              ["n", "Total number of payment periods"],
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{sym}</span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            Higher discount rates result in lower present values, as future cash flows are discounted more heavily. Longer time periods also reduce present value, as money has more time to lose value due to the discount rate.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors Affecting Present Value
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Several factors influence the present value of future cash flows. Understanding these variables helps you make better financial decisions.
          </p>

          {[
            {
              heading: "Discount Rate",
              rows: [
                ["Higher rates", "Lower present value"],
                ["Lower rates", "Higher present value"],
                ["Risk relationship", "Higher risk typically requires higher discount rates"],
              ],
              note: "The discount rate reflects the opportunity cost of capital and risk. Higher discount rates reduce present value more significantly, reflecting the greater cost of waiting for money.",
            },
            {
              heading: "Time Period",
              rows: [
                ["Shorter periods", "Higher present value"],
                ["Longer periods", "Lower present value"],
                ["Exponential effect", "Impact compounds over time"],
              ],
              note: "The longer the time period, the greater the discounting effect. Money received far in the future is worth significantly less in present value terms due to the time value of money.",
            },
            {
              heading: "Cash Flow Timing",
              rows: [
                ["Earlier payments", "Higher present value"],
                ["Later payments", "Lower present value"],
                ["Frequency", "More frequent payments increase present value"],
              ],
              note: "The timing of cash flows significantly affects present value. Money received sooner is more valuable than the same amount received later, all else being equal.",
            },
            {
              heading: "Cash Flow Amount",
              rows: [
                ["Larger amounts", "Higher present value"],
                ["Smaller amounts", "Lower present value"],
                ["Proportional relationship", "Present value scales with cash flow"],
              ],
              note: "Present value is directly proportional to the cash flow amount. Larger future cash flows have proportionally larger present values, assuming the same discount rate and time period.",
            },
          ].map(({ heading, rows, note }) => (
            <div key={heading} className="state-card">
              <h3>{heading}</h3>
              <table className="styled-table">
                <tbody>
                  {rows.map(([item, val]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── STRATEGY ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Present Value Applications
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Present value calculations are used in various financial scenarios. Understanding these applications helps you make informed decisions.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Investment evaluation",
                body: "Compare the present value of expected future cash flows to the initial investment cost. If PV exceeds cost, the investment may be worthwhile. This is the basis for net present value (NPV) analysis.",
              },
              {
                n: "2",
                title: "Loan comparison",
                body: "Calculate the present value of loan payments to determine the true cost of borrowing. Compare different loan terms by discounting all payments back to present value at your opportunity cost.",
              },
              {
                n: "3",
                title: "Retirement planning",
                body: "Calculate the present value of future retirement needs to determine how much you need to save today. This helps set realistic savings goals based on your expected future expenses.",
              },
              {
                n: "4",
                title: "Bond pricing",
                body: "Determine the fair price of a bond by discounting its future coupon payments and principal repayment back to present value using the required rate of return.",
              },
              {
                n: "5",
                title: "Business valuation",
                body: "Value a business by discounting its expected future cash flows to present value. This discounted cash flow (DCF) method is a fundamental approach to business valuation.",
              },
            ].map(({ n, title, body }) => (
              <div key={n} className="numbered-section">
                <span className="num">{n}</span>
                <div className="flex-1">
                  <p className="font-semibold text-slate-800 dark:text-slate-100 mb-1">{title}</p>
                  <p className="text-base leading-relaxed text-slate-800 dark:text-slate-100">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── TIPS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-5 leading-snug">
            Practical Tips for Present Value Calculations
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Choose appropriate discount rates</strong> — reflect risk and opportunity cost</>],
              [<><strong>Consider inflation</strong> — use real rates for inflation-adjusted calculations</>],
              [<><strong>Be conservative</strong> — use higher discount rates for uncertain cash flows</>],
              [<><strong>Compare alternatives</strong> — calculate PV for all options</>],
              [<><strong>Account for timing</strong> — be precise about when cash flows occur</>],
              [<><strong>Use consistent periods</strong> — match rate and time period frequency</>],
              [<><strong>Sensitivity analysis</strong> — test different discount rate scenarios</>],
              [<><strong>Use the calculator</strong> — model different scenarios regularly</>],
            ].map((item, i) => (
              <li key={i}>{item[0]}</li>
            ))}
          </ul>
        </section>

        <hr className="rule-divider" />

        {/* ── FAQ ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2 leading-snug">
            Frequently Asked Questions
          </h2>
          <div className="mt-4">
            {[
              {
                q: "What is present value?",
                a: "Present value is the current worth of a future sum of money or stream of cash flows, given a specified rate of return. It represents how much a future amount is worth in today&apos;s dollars, accounting for the time value of money.",
              },
              {
                q: "How is present value different from future value?",
                a: "Present value calculates what a future amount is worth today, while future value calculates what a current amount will be worth in the future. They are inverse concepts related by the discount rate and time period.",
              },
              {
                q: "What discount rate should I use?",
                a: "The discount rate should reflect your opportunity cost of capital and the risk of the cash flows. For safe investments, use a rate similar to risk-free returns. For risky investments, use a higher rate to account for risk.",
              },
              {
                q: "How does inflation affect present value?",
                a: "Inflation reduces the purchasing power of money over time. To account for inflation, use real discount rates (nominal rate minus inflation) or adjust future cash flows to real terms before discounting.",
              },
              {
                q: "What is net present value (NPV)?",
                a: "NPV is the sum of present values of all cash flows (both inflows and outflows) associated with an investment. Positive NPV indicates the investment is expected to create value, while negative NPV suggests it destroys value.",
              },
              {
                q: "Why is present value important?",
                a: "Present value allows you to compare cash flows occurring at different times by converting them to a common point in time. This is essential for investment decisions, loan comparisons, and financial planning.",
              },
              {
                q: "How do I calculate present value of an annuity?",
                a: "The present value of an annuity is calculated by discounting each payment back to present value and summing them. The formula is PMT × (1 - (1 + r)^(-n)) / r, where PMT is payment, r is rate per period, and n is number of periods.",
              },
              {
                q: "Can present value be negative?",
                a: "Yes, present value can be negative for cash outflows (payments you make). In NPV calculations, outflows are negative present values and inflows are positive. The NPV is the sum of all present values.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="faq-item">
                <h3>{q}</h3>
                <p className="text-base leading-relaxed text-slate-800 dark:text-slate-400">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FINAL THOUGHTS ── */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Final Thoughts
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The Present Value Calculator helps you understand the time value of money and make informed financial decisions. Calculating present value is essential for comparing investment opportunities, evaluating loans, and planning for the future.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that present value calculations depend on the discount rate you choose. Higher discount rates result in lower present values, reflecting greater risk or opportunity cost. Be conservative when discounting uncertain cash flows.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Use the calculator regularly to evaluate investments, compare loan options, and understand the true cost of future payments. Understanding present value is a fundamental skill for financial literacy and smart money management.
          </p>
          <div className="pull-quote mt-8">
            &quot;A dollar today is worth more than a dollar tomorrow.&quot;
          </div>
        </section>

      </div>
    </article>
  );
}
