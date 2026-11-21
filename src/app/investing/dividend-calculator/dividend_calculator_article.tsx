import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function DividendCalculatorArticle() {
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
          <span className="meta-tag">Investing · Dividend Income</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Dividend Calculator: Estimate Your Dividend Income
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for dividend investors
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Dividend investing is a popular strategy for generating passive income and building wealth over time. The Dividend Calculator helps you estimate your potential dividend income based on your investment amount, dividend yield, and payment frequency.
          </p>
          <p className="mb-5">
            Understanding your dividend income is essential for planning your investment strategy and assessing whether dividend-paying stocks align with your financial goals. Dividends can provide regular income stream and potentially grow through dividend increases over time.
          </p>
          <p className="mb-5">
            The calculator provides estimates for annual, quarterly, monthly, and weekly dividend income, helping you understand the cash flow potential of your dividend investments.
          </p>
          <p>
            Use the Dividend Calculator to evaluate different investment scenarios and determine how dividend income can contribute to your overall financial plan.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How the Dividend Calculator Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator estimates your dividend income by applying the dividend yield to your investment amount, then breaking it down by payment frequency. It helps you understand how much cash flow you can expect from your dividend investments.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Here&apos;s what you&apos;ll typically need to input:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Investment amount", "Total amount invested in dividend-paying stocks"],
              ["Dividend yield (%)", "Annual dividend yield as a percentage"],
              ["Payment frequency", "How often dividends are paid (monthly, quarterly, annually)"],
              ["Dividend growth rate (%)", "Expected annual increase in dividends (optional)"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> – {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The calculator then displays your estimated dividend income at various time intervals, including projections for dividend growth if specified.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Dividend Income Formula
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Dividend income is calculated by multiplying your investment amount by the dividend yield.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Annual Dividend Income Formula:
          </p>
          <div className="formula-block">
            <pre>Annual_Dividend = Investment_Amount × (Dividend_Yield / 100)</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Dividend Yield Formula:
          </p>
          <div className="formula-block">
            <pre>Dividend_Yield = (Annual_Dividend_Per_Share / Share_Price) × 100</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Investment_Amount", "Total amount invested"],
              ["Dividend_Yield", "Annual dividend yield percentage"],
              ["Annual_Dividend_Per_Share", "Total dividends paid per share annually"],
              ["Share_Price", "Current price per share"],
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{sym}</span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            Dividend yields can fluctuate based on stock price changes. A falling stock price increases the yield, while a rising stock price decreases the yield, assuming the dividend payment remains constant.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors Affecting Dividend Income
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Several factors determine your actual dividend income. Understanding these variables helps you make better investment decisions.
          </p>

          {[
            {
              heading: "Dividend Yield",
              rows: [
                ["Typical range", "1% - 6% for most dividend stocks"],
                ["High yield", "May indicate higher risk or distressed company"],
                ["Low yield", "May indicate growth-focused company"],
              ],
              note: "Higher yields are not always better. Extremely high yields may signal that the dividend is unsustainable or the stock price has declined significantly.",
            },
            {
              heading: "Payment Frequency",
              rows: [
                ["Monthly", "Some REITs and certain companies"],
                ["Quarterly", "Most common for US companies"],
                ["Semi-annually", "Common for international companies"],
                ["Annually", "Less common, typically for special dividends"],
              ],
              note: "More frequent payments provide smoother cash flow but do not change the total annual dividend amount.",
            },
            {
              heading: "Dividend Growth",
              rows: [
                ["Dividend aristocrats", "25+ years of consecutive increases"],
                ["Growth rate", "Typically 5-10% annually for quality companies"],
                ["Compounding effect", "Growth increases income over time"],
              ],
              note: "Companies that consistently grow dividends often have strong fundamentals and shareholder-friendly management.",
            },
            {
              heading: "Payout Ratio",
              rows: [
                ["Healthy range", "40% - 60% of earnings"],
                ["High ratio", "May limit dividend growth or sustainability"],
                ["Low ratio", "Room for dividend increases"],
              ],
              note: "The payout ratio indicates what percentage of earnings is paid as dividends. A sustainable payout ratio is crucial for long-term dividend stability.",
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
            Dividend Investing Strategies
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different dividend investing strategies offer varying risk-reward profiles. Choose a strategy that matches your income needs and risk tolerance.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "High yield strategy",
                body: "Focus on stocks with above-average dividend yields. This strategy maximizes current income but may involve higher risk and lower growth potential.",
              },
              {
                n: "2",
                title: "Dividend growth strategy",
                body: "Invest in companies with a history of increasing dividends. This strategy focuses on growing income over time rather than maximizing current yield.",
              },
              {
                n: "3",
                title: "Dividend aristocrats",
                body: "Invest in companies with 25+ years of consecutive dividend increases. These are typically large, stable companies with strong competitive advantages.",
              },
              {
                n: "4",
                title: "REIT investing",
                body: "Real Estate Investment Trusts pay high dividends and are required to distribute most income to shareholders. Popular for income-focused investors.",
              },
              {
                n: "5",
                title: "Covered call strategy",
                body: "Generate additional income by selling call options on dividend-paying stocks. This can enhance yield but caps upside potential.",
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
            Practical Tips for Dividend Investors
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Check payout ratios</strong> — ensure dividends are sustainable</>],
              [<><strong>Diversify holdings</strong> — spread risk across multiple sectors</>],
              [<><strong>Reinvest dividends</strong> — compound growth through DRIPs</>],
              [<><strong>Monitor dividend health</strong> — watch for cuts or suspensions</>],
              [<><strong>Consider tax implications</strong> — qualified vs. ordinary dividends</>],
              [<><strong>Focus on quality</strong> — prefer companies with strong fundamentals</>],
              [<><strong>Use the calculator</strong> — project income before investing</>],
              [<><strong>Review regularly</strong> — reassess holdings as conditions change</>],
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
                q: "How often are dividends paid?",
                a: "Most US companies pay dividends quarterly, though some pay monthly or semi-annually. International companies may have different payment schedules. Check each company&apos;s dividend policy for specific payment dates.",
              },
              {
                q: "What is a good dividend yield?",
                a: "A good dividend yield depends on your goals. For income-focused investors, 4-6% may be attractive. For growth investors, 2-3% might be sufficient. Compare yields to sector averages and consider the sustainability of the dividend.",
              },
              {
                q: "Are dividends taxed?",
                a: "Yes, dividends are taxable income. Qualified dividends are taxed at lower capital gains rates (0%, 15%, or 20%), while non-qualified dividends are taxed at ordinary income rates. Tax treatment depends on holding period and the stock issuing the dividend.",
              },
              {
                q: "Should I reinvest dividends?",
                a: "Reinvesting dividends through DRIPs can significantly accelerate wealth building through compounding. This is especially beneficial for long-term investors. However, if you need current income, taking cash dividends may be more appropriate.",
              },
              {
                q: "What is a dividend aristocrat?",
                a: "A dividend aristocrat is a company in the S&amp;P 500 that has increased its dividend for at least 25 consecutive years. These companies are typically large, stable businesses with strong competitive advantages and shareholder-friendly management.",
              },
              {
                q: "Can dividends be cut?",
                a: "Yes, companies can cut or suspend dividends, especially during financial difficulties. Monitor payout ratios and company financial health to assess dividend sustainability. Companies with long dividend increase histories rarely cut unless facing severe problems.",
              },
              {
                q: "What is dividend yield?",
                a: "Dividend yield is the annual dividend payment divided by the stock price, expressed as a percentage. It represents the annual return on investment from dividends alone, excluding any capital appreciation or depreciation.",
              },
              {
                q: "How do I calculate dividend income?",
                a: "Multiply your investment amount by the dividend yield. For example, a $10,000 investment in a stock with a 4% yield would generate $400 in annual dividend income. Divide by the number of payments per year for payment amounts.",
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
            The Dividend Calculator helps you estimate potential income from dividend-paying stocks and plan your investment strategy accordingly. Dividend investing can provide reliable passive income and participate in company growth through capital appreciation.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that dividend yields are not guaranteed and can change based on company performance and stock price movements. Focus on companies with sustainable dividends paid from earnings rather than debt.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Use the calculator regularly to project your dividend income and assess whether your dividend investments align with your financial goals. Consider reinvesting dividends for long-term growth or taking them as income based on your needs.
          </p>
          <div className="pull-quote mt-8">
            &quot;Dividends are the only returns that matter until you sell. Everything else is just paper gains.&quot;
          </div>
        </section>

      </div>
    </article>
  );
}
