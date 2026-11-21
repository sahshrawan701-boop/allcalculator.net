import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function PassiveIncomeCalculatorArticle() {
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
          <span className="meta-tag">Investing · Passive Income</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Passive Income Calculator: Plan Your Income Streams
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide to building passive income
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Passive income is money earned with minimal ongoing effort, allowing you to build wealth while focusing on other priorities. The Passive Income Calculator helps you project your potential earnings from various income streams, including dividends, rental income, interest, and other investments.
          </p>
          <p className="mb-5">
            Understanding your passive income potential is essential for financial planning and achieving financial independence. This calculator shows how different investment amounts and yield rates can generate monthly and annual income, helping you plan your path to financial freedom.
          </p>
          <p className="mb-5">
            The calculator provides estimates for your total passive income, income by source, and the investment required to reach your income goals, helping you make informed decisions about building your income streams.
          </p>
          <p>
            Use the Passive Income Calculator to plan your income strategy and understand how to build sustainable wealth through passive income streams.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How the Passive Income Calculator Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator calculates your passive income by multiplying your investment amounts by their respective yield rates. It sums income from multiple sources to provide your total passive income, both monthly and annually.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Here&apos;s what you&apos;ll typically need to input:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Dividend investments", "Amount invested in dividend-paying stocks"],
              ["Rental properties", "Value of rental real estate holdings"],
              ["Bonds and CDs", "Amount in fixed-income investments"],
              ["REITs", "Investment in real estate investment trusts"],
              ["Other income sources", "Additional passive income investments"],
              ["Target monthly income", "Your desired monthly passive income"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> – {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The calculator then displays your total passive income, income by source, and the additional investment needed to reach your target income.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Passive Income Formula
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Passive income is calculated by multiplying investment amounts by their respective yield rates.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Income Formula:
          </p>
          <div className="formula-block">
            <pre>Passive_Income = Investment_Amount × Yield_Rate</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Investment Required Formula:
          </p>
          <div className="formula-block">
            <pre>Investment_Required = Target_Income / Yield_Rate</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Passive_Income", "Annual income from the investment"],
              ["Investment_Amount", "Total capital invested"],
              ["Yield_Rate", "Annual return percentage (decimal)"],
              ["Target_Income", "Desired annual income"],
              ["Investment_Required", "Capital needed to achieve target"],
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{sym}</span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            The 4% rule is a common guideline for safe withdrawal rates from investment portfolios. To generate $40,000 annually at a 4% yield, you would need $1 million invested.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors Affecting Passive Income
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Several factors influence your passive income potential. Understanding these variables helps you optimize your income strategy.
          </p>

          {[
            {
              heading: "Yield Rate",
              rows: [
                ["Dividend stocks", "2% - 6% annually"],
                ["Rental real estate", "5% - 12% annually"],
                ["Bonds and CDs", "1% - 5% annually"],
                ["REITs", "4% - 8% annually"],
              ],
              note: "Higher yields typically come with higher risk. Balance yield with risk tolerance and diversification. Real estate often offers higher yields but requires more active management.",
            },
            {
              heading: "Investment Amount",
              rows: [
                ["Starting capital", "Initial amount available to invest"],
                ["Regular additions", "Ongoing contributions to investments"],
                ["Growth over time", "Compound growth increases income potential"],
              ],
              note: "The more capital you have invested, the more passive income you can generate. Start with what you can afford and increase investments over time.",
            },
            {
              heading: "Income Source Diversity",
              rows: [
                ["Single source", "Higher concentration risk"],
                ["Multiple sources", "Reduced risk, stable income"],
                ["Reinvestment", "Can grow income over time"],
              ],
              note: "Diversifying across multiple income sources reduces risk and provides more stable income. Consider a mix of dividends, rental income, and interest payments.",
            },
            {
              heading: "Tax Efficiency",
              rows: [
                ["Qualified dividends", "Taxed at lower capital gains rates"],
                ["Ordinary dividends", "Taxed at ordinary income rates"],
                ["Municipal bonds", "Often tax-free at federal level"],
              ],
              note: "Tax treatment significantly impacts your after-tax passive income. Consider tax-advantaged accounts and tax-efficient investments to maximize after-tax returns.",
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
            Passive Income Strategies
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different strategies can help you build passive income. Choose approaches that align with your skills, capital, and goals.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Dividend investing",
                body: "Invest in dividend-paying stocks and ETFs for regular income. Focus on companies with consistent dividend growth and sustainable payout ratios. Reinvest dividends to accelerate wealth building.",
              },
              {
                n: "2",
                title: "Rental real estate",
                body: "Purchase rental properties for monthly rental income. Consider property management to minimize active involvement. Real estate offers potential for both income and appreciation.",
              },
              {
                n: "3",
                title: "REIT investing",
                body: "Invest in real estate investment trusts for exposure to real estate without property management. REITs are required to distribute most income to shareholders, providing regular dividends.",
              },
              {
                n: "4",
                title: "Bond laddering",
                body: "Create a ladder of bonds with different maturities for regular interest income. This strategy provides predictable income and reduces interest rate risk.",
              },
              {
                n: "5",
                title: "Peer-to-peer lending",
                body: "Lend money through P2P platforms for interest income. Higher yields than traditional savings but with increased risk. Diversify across many loans to manage risk.",
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
            Practical Tips for Building Passive Income
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Start early</strong> — time allows compound growth to work</>],
              [<><strong>Diversify sources</strong> — spread risk across income streams</>],
              [<><strong>Reinvest earnings</strong> — accelerate growth through compounding</>],
              [<><strong>Focus on quality</strong> — choose reliable income-generating assets</>],
              [<><strong>Consider taxes</strong> — optimize for after-tax income</>],
              [<><strong>Monitor performance</strong> — review income sources regularly</>],
              [<><strong>Reinvest strategically</strong> — balance income with growth</>],
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
                q: "What is passive income?",
                a: "Passive income is money earned with minimal ongoing effort after the initial investment or setup. Common sources include dividends, rental income, interest payments, and royalties. It provides financial freedom and flexibility.",
              },
              {
                q: "How much do I need to invest for passive income?",
                a: "The amount depends on your target income and expected yield. Using the 4% rule, to generate $40,000 annually, you would need $1 million invested. Higher yields require less capital but often come with higher risk.",
              },
              {
                q: "What is a good passive income yield?",
                a: "Good yields vary by investment type. Dividend stocks typically yield 2-6%, rental real estate 5-12%, bonds 1-5%, and REITs 4-8%. Balance yield with risk tolerance and investment goals.",
              },
              {
                q: "Is rental income truly passive?",
                a: "Rental income can be relatively passive with property management, but it requires some oversight. Direct ownership involves maintenance, tenant management, and property upkeep. REITs offer more purely passive real estate exposure.",
              },
              {
                q: "Should I reinvest passive income?",
                a: "Reinvesting passive income accelerates wealth building through compounding. However, if you need current income, taking distributions may be appropriate. Consider your financial goals and timeline.",
              },
              {
                q: "How do I calculate passive income?",
                a: "Multiply your investment amount by the annual yield rate. For example, $100,000 invested at a 5% yield generates $5,000 annually. Sum income from all sources for total passive income.",
              },
              {
                q: "What are the tax implications of passive income?",
                a: "Tax treatment varies by income type. Qualified dividends are taxed at capital gains rates, ordinary dividends at income rates, rental income is subject to various deductions, and municipal bond interest may be tax-free.",
              },
              {
                q: "Can I live on passive income?",
                a: "Yes, many people achieve financial independence through passive income. The amount needed depends on your lifestyle expenses. Calculate your required income and build investments to generate that amount.",
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
            The Passive Income Calculator helps you understand how to build sustainable income streams and achieve financial independence. Visualizing your potential income motivates strategic investment decisions and consistent wealth building.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that building meaningful passive income requires significant capital and time. Start with realistic expectations and focus on gradually increasing your investments. Diversification across multiple income sources reduces risk and provides stability.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Use the calculator regularly to track your progress, model different scenarios, and adjust your strategy as needed. The combination of consistent investing, smart asset selection, and time can build substantial passive income streams.
          </p>
          <div className="pull-quote mt-8">
            &quot;Wealth is not the man that has it, but the man that lives it.&quot;
          </div>
        </section>

      </div>
    </article>
  );
}
