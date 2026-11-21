import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RevenueCalculatorArticle() {
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
            Revenue Calculator: Calculate Business Revenue
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for revenue calculation and analysis
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Your business sells 1,000 units per month at $50 per unit. Your monthly revenue is $50,000 (1,000 × $50). Annually, that's $600,000 ($50,000 × 12). If you increase price to $55 while maintaining volume, revenue increases to $660,000 annually. If you increase volume to 1,200 units while maintaining price, revenue increases to $720,000. Revenue growth comes from price increases, volume increases, or both.
          </p>
          <p className="mb-5">
            Revenue is the total income generated from sales of goods or services. It's the top line of the income statement and the foundation for all financial analysis. Understanding revenue calculation is essential for business planning and performance tracking.
          </p>
          <p className="mb-5">
            But revenue varies by business model, pricing strategy, and market conditions. Understanding how to calculate revenue, track it over time, and analyze growth patterns helps assess business performance and make strategic decisions.
          </p>
          <p>
            The revenue calculator above helps you calculate revenue from units sold and price, and analyze revenue growth over time.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Revenue Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Revenue is calculated by multiplying the number of units sold by the price per unit. For service businesses, revenue is calculated by multiplying the number of customers by the average revenue per customer or by hours billed times hourly rate.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Revenue Formula:
          </p>
          <div className="formula-block">
            <pre>Revenue = Units Sold × Price Per Unit</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Units Sold", "1,000 units"],
              ["Price Per Unit", "$50"],
              ["Monthly Revenue", "1,000 × $50 = $50,000"],
              ["Annual Revenue", "$50,000 × 12 = $600,000"],
              ["New Price", "$55"],
              ["New Annual Revenue", "1,000 × $55 × 12 = $660,000"],
              ["Growth", "($660,000 - $600,000) / $600,000 = 10%"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, a 10% price increase ($50 to $55) results in 10% revenue growth. Price increases directly impact revenue assuming volume remains constant. Volume increases also drive revenue growth.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── REVENUE TYPES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Types of Revenue
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different revenue types provide different insights into business performance. Understanding each type helps assess the health and sustainability of revenue streams.
          </p>

          {[
            {
              heading: "Gross Revenue",
              rows: [
                ["Definition", "Total sales before deductions"],
                ["Calculation", "Units × Price"],
                ["Best For", "Total sales measurement"],
              ],
              note: "Gross revenue is total sales before any deductions. It represents the full value of sales. Gross revenue is the starting point for all revenue analysis.",
            },
            {
              heading: "Net Revenue",
              rows: [
                ["Definition", "Revenue after returns and discounts"],
                ["Calculation", "Gross Revenue - Returns - Discounts"],
                ["Best For", "Actual revenue recognition"],
              ],
              note: "Net revenue is revenue after accounting for returns, allowances, and discounts. It represents the actual revenue recognized. Net revenue is more accurate for performance analysis.",
            },
            {
              heading: "Recurring Revenue",
              rows: [
                ["Definition", "Predictable, recurring income"],
                ["Calculation", "MRR × 12 or ARR"],
                ["Best For", "Subscription businesses"],
              ],
              note: "Recurring revenue is predictable income from subscriptions or contracts. It's highly valued by investors and provides business stability. MRR (Monthly Recurring Revenue) and ARR (Annual Recurring Revenue) are key metrics.",
            },
            {
              heading: "Non-Recurring Revenue",
              rows: [
                ["Definition", "One-time sales income"],
                ["Calculation", "One-time transactions"],
                ["Best For", "Project-based businesses"],
              ],
              note: "Non-recurring revenue comes from one-time transactions. It's less predictable than recurring revenue but can be significant. Project-based businesses rely heavily on non-recurring revenue.",
            },
          ].map((revType: { heading: string; rows: string[][]; note: string }) => (
            <div key={revType.heading} className="state-card">
              <h3>{revType.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {revType.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{revType.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── REVENUE GROWTH ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Revenue Growth Strategies
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Revenue growth drives business value and provides resources for investment. Here are proven strategies to increase revenue.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Increase prices",
                body: "Strategic price increases directly impact revenue if demand is inelastic. Test price elasticity and increase prices where possible. Premium pricing for differentiated products also increases revenue per unit.",
              },
              {
                n: "2",
                title: "Increase sales volume",
                body: "Sell more units through marketing, sales efforts, and distribution expansion. Higher volume directly increases revenue. Invest in sales and marketing to drive volume growth.",
              },
              {
                n: "3",
                title: "Expand to new markets",
                body: "Enter new geographic markets or customer segments. New markets provide additional revenue streams. Market expansion diversifies revenue and reduces dependence on existing markets.",
              },
              {
                n: "4",
                title: "Launch new products",
                body: "Introduce new products or services to existing customers. New products provide additional revenue opportunities. Product line expansion increases total addressable market.",
              },
              {
                n: "5",
                title: "Improve customer retention",
                body: "Retaining existing customers is more cost-effective than acquiring new ones. Improve customer satisfaction and loyalty to increase lifetime value and recurring revenue.",
              },
              {
                n: "6",
                title: "Upsell and cross-sell",
                body: "Encourage customers to purchase more or additional products. Upselling increases average order value. Cross-selling introduces customers to complementary products.",
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

        {/* ── REVENUE METRICS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Key Revenue Metrics
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Tracking the right revenue metrics provides insights into business performance and growth potential. Here are the most important metrics to monitor.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Metric</th>
                <th className="dark:text-slate-100">Formula</th>
                <th className="dark:text-slate-100">Significance</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["MRR", "Monthly Recurring Revenue", "Subscription business health"],
                ["ARR", "Annual Recurring Revenue", "Long-term subscription value"],
                ["ARPU", "Average Revenue Per User", "Revenue per customer"],
                ["Churn Rate", "Customers Lost / Total Customers", "Customer retention"],
                ["Revenue Growth", "(New Revenue - Old Revenue) / Old Revenue", "Growth rate"],
                ["Revenue per Employee", "Total Revenue / Employee Count", "Productivity"],
              ].map(([metric, formula, significance]) => (
                <tr key={metric}>
                  <td className="dark:text-slate-100">{metric}</td>
                  <td className="dark:text-slate-100">{formula}</td>
                  <td className="dark:text-slate-100">{significance}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            For subscription businesses, MRR and ARR are critical. For all businesses, revenue growth rate and ARPU provide insights into performance. Track metrics consistently to identify trends and opportunities.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Revenue Calculation Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Many businesses calculate revenue incorrectly or focus on the wrong metrics. Here's what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Confusing revenue with profit",
                body: "Revenue is not profit. High revenue with high costs can result in low or negative profit. Always calculate profit by subtracting expenses from revenue. Revenue is vanity, profit is sanity.",
              },
              {
                n: "2",
                title: "Not accounting for returns",
                body: "Returns reduce actual revenue. Calculate net revenue by subtracting returns from gross revenue. Failing to account for returns overstates actual revenue and performance.",
              },
              {
                n: "3",
                title: "Ignoring seasonality",
                body: "Many businesses have seasonal revenue patterns. Compare year-over-year rather than month-over-month for seasonal businesses. Adjust for seasonality to assess true performance.",
              },
              {
                n: "4",
                title: "Not tracking revenue by channel",
                body: "Revenue varies by sales channel. Track revenue by channel to identify high-performing channels and optimize allocation. Channel-level analysis reveals optimization opportunities.",
              },
              {
                n: "5",
                title: "Focusing only on gross revenue",
                body: "Gross revenue doesn't account for returns and discounts. Net revenue is more accurate for performance analysis. Always use net revenue for business decisions.",
              },
              {
                n: "6",
                title: "Not forecasting revenue",
                body: "Revenue forecasting is essential for planning and cash flow management. Use historical data, market trends, and sales pipeline to forecast revenue. Regular forecasts enable proactive management.",
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
            Practical Tips for Revenue Management
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — calculate revenue accurately</>],
              [<><strong>Track net revenue</strong> — account for returns and discounts</>],
              [<><strong>Monitor growth</strong> — month-over-month, year-over-year</>],
              [<><strong>Segment revenue</strong> — by product, channel, customer</>],
              [<><strong>Forecast regularly</strong> — use data and pipeline</>],
              [<><strong>Focus on retention</strong> — keep existing customers</>],
              [<><strong>Diversify streams</strong> — multiple revenue sources</>],
              [<><strong>Price strategically</strong> — test and optimize</>],
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
                q: "How do I calculate revenue?",
                a: "Revenue = Units Sold × Price Per Unit. For service businesses: Revenue = Hours Billed × Hourly Rate or Customers × Average Revenue Per Customer. The calculator above automates this calculation.",
              },
              {
                q: "What is the difference between gross and net revenue?",
                a: "Gross revenue is total sales before deductions. Net revenue is revenue after subtracting returns, allowances, and discounts. Net revenue represents the actual revenue recognized and is more accurate for performance analysis.",
              },
              {
                q: "What is MRR?",
                a: "MRR (Monthly Recurring Revenue) is the predictable revenue expected monthly from subscriptions. MRR = Sum of all monthly subscription revenue. MRR is a critical metric for subscription businesses and investors.",
              },
              {
                q: "How do I calculate revenue growth?",
                a: "Revenue Growth = ((New Revenue - Old Revenue) / Old Revenue) × 100. For example, growing from $100,000 to $120,000: (($120,000 - $100,000) / $100,000) × 100 = 20% growth.",
              },
              {
                q: "What is ARPU?",
                a: "ARPU (Average Revenue Per User) = Total Revenue / Total Users. It measures the average revenue generated per customer. ARPU helps assess pricing effectiveness and customer value.",
              },
              {
                q: "How can I increase my revenue?",
                a: "Increase prices strategically, increase sales volume through marketing and sales, expand to new markets, launch new products, improve customer retention, and implement upselling and cross-selling strategies.",
              },
              {
                q: "Why is my revenue growing but profit declining?",
                a: "Possible causes: increasing costs, pricing pressure, or product mix shift to lower-margin items. Analyze cost structure and margin by product. Revenue growth without cost control can lead to declining profits.",
              },
              {
                q: "How often should I track revenue?",
                a: "Track revenue monthly for all businesses and weekly for fast-growing or seasonal businesses. Real-time tracking is ideal for e-commerce and subscription businesses. Regular tracking enables timely decision-making.",
              },
              {
                q: "What is the difference between revenue and income?",
                a: "Revenue is the total income from sales. Income (or profit) is revenue minus expenses. Revenue is the top line; income is the bottom line. Both are important but measure different things.",
              },
              {
                q: "Should I focus on revenue or profit?",
                a: "Focus on both. Revenue growth is essential for scale and market position. Profit is essential for sustainability and value creation. Balance growth with profitability for long-term success.",
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
            Revenue is the foundation of business performance. Understanding revenue calculation, tracking growth, and implementing growth strategies drives business success and value creation.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you calculate revenue and analyze growth. But the real value comes from using this information to identify growth opportunities, optimize pricing, and build a sustainable revenue engine.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're running a startup or established business, accurate revenue calculation provides the foundation for financial planning. Calculate precisely, grow strategically, and build a thriving business.
          </p>
          <div className="pull-quote mt-8">
            Revenue is the lifeblood of business. Grow it wisely, manage it carefully, and build a sustainable enterprise.
          </div>
        </section>

      </div>
    </article>
  );
}
