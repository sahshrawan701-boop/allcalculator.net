import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RevenueGrowthCalculatorArticle() {
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
            Revenue Growth Calculator: Calculate Revenue Growth Rate
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for growth analysis and planning
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Your business generated $500,000 in revenue last year and $600,000 this year. Your revenue growth is $100,000 ($600,000 - $500,000). Your revenue growth rate is 20% (($100,000 / $500,000) × 100). This growth came from a combination of price increases (5%) and volume increases (14.3%). Maintaining this growth rate for 5 years would result in $1,488,320 in annual revenue ($600,000 × 1.20^5).
          </p>
          <p className="mb-5">
            Revenue growth rate measures the percentage increase in revenue over a period. It's a critical metric for assessing business performance, attracting investors, and planning for the future. Understanding growth rate calculation helps evaluate success and set realistic targets.
          </p>
          <p className="mb-5">
            But growth rates vary by industry, business stage, and market conditions. Understanding how to calculate growth rates, analyze trends, and project future growth helps make strategic decisions and set achievable goals.
          </p>
          <p>
            The revenue growth calculator above helps you calculate growth rates, analyze trends, and project future revenue.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Revenue Growth Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Revenue growth rate is calculated by dividing the change in revenue by the initial revenue, then multiplying by 100 to get a percentage. For compound growth over multiple periods, use the compound annual growth rate (CAGR) formula.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Growth Rate Formula:
          </p>
          <div className="formula-block">
            <pre>Growth Rate = ((New Revenue - Old Revenue) / Old Revenue) × 100</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Last Year Revenue", "$500,000"],
              ["This Year Revenue", "$600,000"],
              ["Revenue Growth", "$600,000 - $500,000 = $100,000"],
              ["Growth Rate", "($100,000 / $500,000) × 100 = 20%"],
              ["CAGR (5 years)", "20% annual growth"],
              ["Projected Year 5", "$600,000 × 1.20^5 = $1,488,320"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, 20% annual growth compounds significantly over time. After 5 years, revenue more than doubles. Understanding compound growth is essential for long-term planning and investor communications.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── GROWTH TYPES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Types of Revenue Growth
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Revenue growth can come from different sources. Understanding the type of growth helps assess sustainability and identify improvement opportunities.
          </p>

          {[
            {
              heading: "Organic Growth",
              rows: [
                ["Source", "Internal business activities"],
                ["Drivers", "New customers, price increases, volume"],
                ["Sustainability", "High, sustainable long-term"],
              ],
              note: "Organic growth comes from internal efforts like marketing, sales, and product development. It's sustainable and indicates strong business fundamentals. Investors value organic growth highly.",
            },
            {
              heading: "Inorganic Growth",
              rows: [
                ["Source", "External acquisitions or mergers"],
                ["Drivers", "Acquiring other businesses"],
                ["Sustainability", "Depends on integration success"],
              ],
              note: "Inorganic growth comes from acquisitions or mergers. It can rapidly increase revenue but requires integration and may not be sustainable. Inorganic growth should complement organic growth.",
            },
            {
              heading: "Price Growth",
              rows: [
                ["Source", "Increasing prices"],
                ["Drivers", "Pricing power, inflation"],
                ["Sustainability", "Limited by market demand"],
              ],
              note: "Price growth comes from increasing prices. It's limited by customer price sensitivity and competition. Price growth should be balanced with volume growth for sustainable revenue growth.",
            },
            {
              heading: "Volume Growth",
              rows: [
                ["Source", "Selling more units"],
                ["Drivers", "Market expansion, customer acquisition"],
                ["Sustainability", "High, scalable"],
              ],
              note: "Volume growth comes from selling more units or acquiring more customers. It's scalable and sustainable if supported by market demand. Volume growth is the primary driver for most businesses.",
            },
          ].map((growthType: { heading: string; rows: string[][]; note: string }) => (
            <div key={growthType.heading} className="state-card">
              <h3>{growthType.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {growthType.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{growthType.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── CAGR ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Compound Annual Growth Rate (CAGR)
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            CAGR measures the mean annual growth rate over a period longer than one year. It smooths out volatility and provides a single growth rate for comparison.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            CAGR Formula:
          </p>
          <div className="formula-block">
            <pre>CAGR = (Ending Value / Beginning Value)^(1 / n) - 1</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Year 1 Revenue", "$500,000"],
              ["Year 5 Revenue", "$1,000,000"],
              ["Number of Years", "5"],
              ["CAGR", "($1,000,000 / $500,000)^(1/5) - 1 = 14.9%"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, revenue doubled over 5 years, representing a 14.9% CAGR. CAGR is useful for comparing growth over different periods and smoothing out year-to-year volatility.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── GROWTH BY STAGE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Revenue Growth by Business Stage
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Revenue growth expectations vary by business stage. Understanding typical growth rates by stage helps set realistic targets and assess performance.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Stage</th>
                <th className="dark:text-slate-100">Typical Growth Rate</th>
                <th className="dark:text-slate-100">Focus</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Startup", "50-100%+", "Product-market fit, customer acquisition"],
                ["Early Stage", "30-50%", "Scaling operations, market expansion"],
                ["Growth Stage", "20-30%", "Market penetration, optimization"],
                ["Mature", "5-15%", "Market share, efficiency"],
                ["Decline", "Negative", "Turnaround or pivot"],
              ].map(([stage, rate, focus]) => (
                <tr key={stage}>
                  <td className="dark:text-slate-100">{stage}</td>
                  <td className="dark:text-slate-100">{rate}</td>
                  <td className="dark:text-slate-100">{focus}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Startups typically have the highest growth rates as they scale from zero. Mature businesses have lower but more stable growth. Compare your growth to stage-appropriate benchmarks, not just absolute numbers.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Revenue Growth Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Many businesses calculate growth incorrectly or focus on the wrong metrics. Here's what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Not adjusting for seasonality",
                body: "Many businesses have seasonal revenue patterns. Compare year-over-year rather than month-over-month for seasonal businesses. Adjust for seasonality to assess true growth performance.",
              },
              {
                n: "2",
                title: "Focusing on short-term growth",
                body: "Short-term growth at the expense of long-term sustainability is dangerous. Avoid sacrificing margins or customer satisfaction for short-term revenue gains. Sustainable growth is better than explosive but unsustainable growth.",
              },
              {
                n: "3",
                title: "Ignoring growth quality",
                body: "Growth from low-margin or unprofitable customers is low-quality growth. Focus on high-quality growth from profitable, loyal customers. Quality growth sustains long-term success.",
              },
              {
                n: "4",
                title: "Not tracking growth by segment",
                body: "Growth varies by product, customer segment, and channel. Track growth by segment to identify what's driving growth and what's lagging. Segment-level analysis reveals optimization opportunities.",
              },
              {
                n: "5",
                title: "Overestimating future growth",
                body: "Past growth doesn't guarantee future growth. Be conservative in growth projections and consider market saturation, competition, and economic conditions. Unrealistic growth expectations lead to poor decisions.",
              },
              {
                n: "6",
                title: "Not forecasting revenue",
                body: "Revenue forecasting is essential for planning and cash flow management. Use historical growth data, market trends, and sales pipeline to forecast revenue. Regular forecasts enable proactive management.",
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
            Practical Tips for Growth Management
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — calculate growth accurately</>],
              [<><strong>Track CAGR</strong> — smooth multi-period growth</>],
              [<><strong>Adjust for seasonality</strong> — year-over-year comparison</>],
              [<><strong>Focus on quality</strong> — profitable, sustainable growth</>],
              [<><strong>Segment analysis</strong> — growth by product/channel</>],
              [<><strong>Forecast conservatively</strong> — realistic projections</>],
              [<><strong>Compare to stage</strong> — appropriate benchmarks</>],
              [<><strong>Balance growth and profit</strong> — sustainable success</>],
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
                q: "How do I calculate revenue growth rate?",
                a: "Growth Rate = ((New Revenue - Old Revenue) / Old Revenue) × 100. For example, growing from $500,000 to $600,000: (($600,000 - $500,000) / $500,000) × 100 = 20% growth.",
              },
              {
                q: "What is CAGR?",
                a: "CAGR (Compound Annual Growth Rate) measures the mean annual growth rate over multiple periods. CAGR = (Ending Value / Beginning Value)^(1/n) - 1, where n is the number of periods. CAGR smooths out volatility.",
              },
              {
                q: "What is a good revenue growth rate?",
                a: "Good growth varies by stage: Startups 50-100%+, Early Stage 30-50%, Growth Stage 20-30%, Mature 5-15%. Compare to your business stage and industry benchmarks. Growth should be sustainable and profitable.",
              },
              {
                q: "How do I project future revenue?",
                a: "Project future revenue using current revenue and expected growth rate: Future Revenue = Current Revenue × (1 + Growth Rate)^n. For example, $600,000 at 20% growth for 3 years: $600,000 × 1.20^3 = $1,036,800.",
              },
              {
                q: "Why is my revenue growing but profit declining?",
                a: "Possible causes: increasing costs, pricing pressure, or product mix shift to lower-margin items. Analyze margin by product and cost structure. Revenue growth without cost control can lead to declining profits.",
              },
              {
                q: "How do I calculate month-over-month growth?",
                a: "MoM Growth = ((This Month - Last Month) / Last Month) × 100. For seasonal businesses, compare year-over-year instead. MoM growth is useful for non-seasonal businesses and short-term trend analysis.",
              },
              {
                q: "What is the difference between organic and inorganic growth?",
                a: "Organic growth comes from internal efforts like marketing and sales. Inorganic growth comes from acquisitions or mergers. Organic growth is sustainable and indicates strong fundamentals. Inorganic growth can rapidly increase revenue but requires integration.",
              },
              {
                q: "How often should I track revenue growth?",
                a: "Track growth monthly for most businesses and weekly for fast-growing startups. Calculate CAGR quarterly or annually for long-term trend analysis. Regular tracking enables timely decision-making.",
              },
              {
                q: "Should I prioritize revenue growth or profitability?",
                a: "Balance both. Early-stage businesses often prioritize growth over profitability. Mature businesses should prioritize profitability. Sustainable long-term success requires both growth and profitability. Balance based on your stage and goals.",
              },
              {
                q: "What is revenue growth quality?",
                a: "Growth quality refers to the sustainability and profitability of growth. High-quality growth comes from profitable, loyal customers and sustainable sources. Low-quality growth comes from unprofitable customers or unsustainable tactics. Focus on quality over quantity.",
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
            Revenue growth is a key indicator of business success and future potential. Understanding growth calculation, tracking trends, and implementing growth strategies drives business value and sustainability.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you calculate growth rates and project future revenue. But the real value comes from using this information to set realistic targets, identify growth drivers, and build a sustainable growth engine.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're a startup seeking rapid growth or a mature business optimizing performance, accurate growth analysis provides the foundation for strategic planning. Calculate precisely, grow sustainably, and build lasting value.
          </p>
          <div className="pull-quote mt-8">
            Growth is not just about getting bigger — it's about getting better. Grow sustainably, profitably, and strategically.
          </div>
        </section>

      </div>
    </article>
  );
}
