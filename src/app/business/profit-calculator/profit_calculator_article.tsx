import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function ProfitCalculatorArticle() {
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
          <span className="meta-tag">Business · Financial Analysis</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Profit Calculator: Calculate Business Profit
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for financial analysis and profitability
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Your business generated $500,000 in revenue last year. Cost of goods sold was $300,000, operating expenses were $100,000, interest expense was $10,000, and taxes were $18,000. Your gross profit was $200,000 ($500,000 - $300,000). Your operating profit was $100,000 ($200,000 - $100,000). Your net profit was $72,000 ($100,000 - $10,000 - $18,000), representing a 14.4% net profit margin.
          </p>
          <p className="mb-5">
            Profit is the financial gain when revenue exceeds expenses. It's the ultimate measure of business success and the foundation for growth, investment, and shareholder returns. Understanding profit calculation is essential for financial management.
          </p>
          <p className="mb-5">
            But profit varies by business model, industry, and cost structure. Understanding different profit types (gross, operating, net) and how to calculate them helps assess financial health and make strategic decisions.
          </p>
          <p>
            The profit calculator above helps you calculate gross profit, operating profit, net profit, and profit margins.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Profit Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Profit is calculated by subtracting expenses from revenue. Different profit measures subtract different types of expenses: gross profit subtracts COGS, operating profit subtracts operating expenses, and net profit subtracts all expenses including taxes.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Net Profit Formula:
          </p>
          <div className="formula-block">
            <pre>Net Profit = Revenue - COGS - Operating Expenses - Interest - Taxes</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Revenue", "$500,000"],
              ["COGS", "$300,000"],
              ["Gross Profit", "$500,000 - $300,000 = $200,000"],
              ["Operating Expenses", "$100,000"],
              ["Operating Profit", "$200,000 - $100,000 = $100,000"],
              ["Interest", "$10,000"],
              ["Taxes", "$18,000"],
              ["Net Profit", "$100,000 - $10,000 - $18,000 = $72,000"],
              ["Net Margin", "$72,000 / $500,000 = 14.4%"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, the business generates $72,000 in net profit on $500,000 revenue. The 14.4% net margin indicates the business keeps 14.4 cents of every revenue dollar as profit after all expenses.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── PROFIT TYPES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Types of Profit
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different profit measures provide different insights into business performance. Understanding each type helps assess operational efficiency and overall profitability.
          </p>

          {[
            {
              heading: "Gross Profit",
              rows: [
                ["Formula", "Revenue - COGS"],
                ["Measures", "Production efficiency"],
                ["Best For", "Pricing, cost management"],
              ],
              note: "Gross profit measures profit after direct production costs. It indicates whether pricing covers production costs. Low gross profit indicates pricing or production cost issues.",
            },
            {
              heading: "Operating Profit",
              rows: [
                ["Formula", "Gross Profit - Operating Expenses"],
                ["Measures", "Core business profitability"],
                ["Best For", "Operational efficiency assessment"],
              ],
              note: "Operating profit measures profit from core operations excluding interest and taxes. It indicates how profitable the core business is before financing and tax considerations.",
            },
            {
              heading: "Net Profit",
              rows: [
                ["Formula", "Operating Profit - Interest - Taxes"],
                ["Measures", "Overall profitability"],
                ["Best For", "Financial health, shareholder returns"],
              ],
              note: "Net profit is the bottom line after all expenses. It's the true measure of overall profitability and what's available for reinvestment or distribution to shareholders.",
            },
          ].map((profitType: { heading: string; rows: string[][]; note: string }) => (
            <div key={profitType.heading} className="state-card">
              <h3>{profitType.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {profitType.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{profitType.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── PROFIT MARGIN ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Profit Margin Analysis
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Profit margin expresses profit as a percentage of revenue, enabling comparison across time periods and businesses. Different margins provide different insights.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Margin Type</th>
                <th className="dark:text-slate-100">Formula</th>
                <th className="dark:text-slate-100">Typical Range</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Gross Margin", "Gross Profit / Revenue", "25-60%"],
                ["Operating Margin", "Operating Profit / Revenue", "10-30%"],
                ["Net Margin", "Net Profit / Revenue", "5-20%"],
              ].map(([type, formula, range]) => (
                <tr key={type}>
                  <td className="dark:text-slate-100">{type}</td>
                  <td className="dark:text-slate-100">{formula}</td>
                  <td className="dark:text-slate-100">{range}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Gross margin is typically highest, net margin lowest. The difference between gross and net margin indicates operating, interest, and tax burden. Track margin trends to identify improvement or deterioration.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── IMPROVING PROFITABILITY ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Improve Profitability
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Improving profitability requires increasing revenue, reducing costs, or both. Here are proven strategies to boost profit margins.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Increase prices strategically",
                body: "Small price increases significantly impact profit if demand is inelastic. Test price elasticity and increase prices where possible. Premium pricing for differentiated products also improves margins.",
              },
              {
                n: "2",
                title: "Reduce cost of goods sold",
                body: "Negotiate better supplier terms, optimize production processes, and reduce waste. Lower COGS directly increases gross profit. Focus on high-volume items where savings compound.",
              },
              {
                n: "3",
                title: "Optimize operating expenses",
                body: "Review all operating expenses and eliminate waste. Negotiate better terms with vendors, implement automation to reduce labor costs, and optimize overhead. Every dollar saved flows to profit.",
              },
              {
                n: "4",
                title: "Focus on high-margin products",
                body: "Analyze margin by product and prioritize high-margin items. Allocate marketing and sales resources to products with the best margins. Consider discontinuing low-margin products.",
              },
              {
                n: "5",
                title: "Increase sales volume",
                body: "Higher sales volume spreads fixed costs over more units, improving profit per unit. Invest in marketing and sales to drive volume. Volume improvements can significantly impact profitability.",
              },
              {
                n: "6",
                title: "Reduce returns and defects",
                body: "Returns and defects directly erode profit. Improve quality control, provide accurate product descriptions, and optimize packaging. Fewer returns mean higher effective margins.",
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

        {/* ── PROFIT BY INDUSTRY ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Typical Profit Margins by Industry
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Profit margins vary significantly by industry due to cost structures, competition, and business models. Understanding industry benchmarks helps assess your performance.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Industry</th>
                <th className="dark:text-slate-100">Typical Net Margin</th>
                <th className="dark:text-slate-100">Key Factors</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Software/SaaS", "20-35%", "Low marginal cost, high scalability"],
                ["Professional Services", "10-20%", "Time-based, low material cost"],
                ["Retail", "2-5%", "Inventory costs, competition"],
                ["Manufacturing", "5-10%", "Material and labor costs"],
                ["Restaurants", "3-5%", "Food costs, high labor/overhead"],
                ["Construction", "5-10%", "Material costs, project risks"],
              ].map(([industry, margin, factors]) => (
                <tr key={industry}>
                  <td className="dark:text-slate-100">{industry}</td>
                  <td className="dark:text-slate-100">{margin}</td>
                  <td className="dark:text-slate-100">{factors}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Software and SaaS have the highest margins due to low marginal costs. Retail and restaurants have the lowest margins due to high costs and competition. Know your industry to assess performance appropriately.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Profit Calculation Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Many businesses calculate profit incorrectly or focus on the wrong metrics. Here's what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Confusing revenue with profit",
                body: "Revenue is not profit. High revenue with high costs can result in low or negative profit. Always calculate profit by subtracting all expenses. Revenue is vanity, profit is sanity.",
              },
              {
                n: "2",
                title: "Not including all expenses",
                body: "Missing expenses overstates profit. Include all costs: COGS, operating expenses, interest, taxes, and depreciation. Accurate expense accounting is essential for true profit calculation.",
              },
              {
                n: "3",
                title: "Ignoring cash flow",
                body: "Profit does not equal cash flow. A profitable business can still fail due to cash flow problems. Monitor both profit and cash flow. Cash flow is the lifeblood; profit is the scorecard.",
              },
              {
                n: "4",
                title: "Not tracking margin trends",
                body: "Single-point profit measurements have limited value. Track profit margins over time to identify trends. Declining margins indicate problems; improving margins indicate success.",
              },
              {
                n: "5",
                title: "Focusing only on net profit",
                body: "Net profit is important, but gross and operating profit provide operational insights. Analyze all profit types to identify where improvements are needed. Each metric reveals different problems.",
              },
              {
                n: "6",
                title: "Not adjusting for seasonality",
                body: "Many businesses have seasonal profit patterns. Compare year-over-year rather than month-over-month for seasonal businesses. Adjust for seasonality to assess true performance.",
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
            Practical Tips for Profit Management
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — calculate profit accurately</>],
              [<><strong>Track all expenses</strong> — complete cost accounting</>],
              [<><strong>Monitor margins</strong> — gross, operating, net</>],
              [<><strong>Analyze trends</strong> — month-over-month, year-over-year</>],
              [<><strong>Reduce costs</strong> — COGS and operating expenses</>],
              [<><strong>Increase prices</strong> — strategic pricing</>],
              [<><strong>Focus on high-margin</strong> — product mix optimization</>],
              [<><strong>Monitor cash flow</strong> — profit is not cash</>],
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
                q: "How do I calculate profit?",
                a: "Profit = Revenue - Expenses. For net profit: Net Profit = Revenue - COGS - Operating Expenses - Interest - Taxes. Subtract all costs from revenue to arrive at profit. The calculator above automates this calculation.",
              },
              {
                q: "What is the difference between gross and net profit?",
                a: "Gross profit subtracts only cost of goods sold from revenue. Net profit subtracts all expenses including COGS, operating expenses, interest, and taxes. Gross profit measures production efficiency; net profit measures overall profitability.",
              },
              {
                q: "How do I calculate profit margin?",
                a: "Profit Margin = Profit / Revenue × 100. For net margin: Net Profit / Revenue × 100. Margin expresses profit as a percentage of revenue, enabling comparison across time periods and businesses.",
              },
              {
                q: "What is a good profit margin?",
                a: "Good margins vary by industry: Software 20-35%, Services 10-20%, Retail 2-5%, Manufacturing 5-10%. Compare to your industry benchmarks. Generally, net margins above 10% are considered healthy.",
              },
              {
                q: "How can I increase my profit?",
                a: "Increase prices strategically, reduce COGS through negotiation and efficiency, optimize operating expenses, focus on high-margin products, increase sales volume, and reduce returns and defects.",
              },
              {
                q: "What is operating profit?",
                a: "Operating profit = Gross Profit - Operating Expenses. It measures profit from core business operations excluding interest and taxes. Operating profit indicates how profitable core operations are.",
              },
              {
                q: "Why is my business profitable but has no cash?",
                a: "Profit does not equal cash flow. Common causes: accounts receivable not collected, inventory buildup, debt payments, or capital expenditures. Monitor cash flow separately from profit.",
              },
              {
                q: "How often should I calculate profit?",
                a: "Calculate profit monthly for active businesses and quarterly for strategic planning. Track profit margins over time to identify trends. Regular calculation enables timely decision-making.",
              },
              {
                q: "What is EBITDA vs net profit?",
                a: "EBITDA (Earnings Before Interest, Taxes, Depreciation, Amortization) excludes financing and non-cash expenses. Net profit includes all expenses. EBITDA is useful for comparison; net profit is the true bottom line.",
              },
              {
                q: "Should I focus on revenue or profit?",
                a: "Focus on profit. High revenue with low profit is unsustainable. Profit is what matters for business survival and growth. Revenue is important for scale, but profit is essential for sustainability.",
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
            Profit is the ultimate measure of business success. Understanding profit calculation, tracking margins, and implementing improvement strategies drives financial health and sustainable growth.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you calculate profit and margins. But the real value comes from using this information to identify improvement opportunities, optimize operations, and build a more profitable business.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're running a startup or established business, accurate profit calculation provides the foundation for financial decisions. Calculate precisely, optimize continuously, and build a profitable enterprise.
          </p>
          <div className="pull-quote mt-8">
            Revenue is vanity, profit is sanity, cash is reality. Focus on profit, manage cash, and build a sustainable business.
          </div>
        </section>

      </div>
    </article>
  );
}
