import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function CPCCalculatorArticle() {
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
          <span className="meta-tag">Business · Advertising Metrics</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            CPC Calculator: Measure Your Cost Per Click
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for digital advertisers and marketers
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You spend $1,000 on a Google Ads campaign and receive 2,000 clicks. Your Cost Per Click (CPC) is $0.50. If your landing page converts at 3%, you'll get 60 conversions. At $50 profit per conversion, you'll earn $3,000 — a 3x return on ad spend. But if you can reduce CPC to $0.40 through better Quality Scores, the same budget yields 2,500 clicks and 75 conversions.
          </p>
          <p className="mb-5">
            CPC measures how much you pay each time someone clicks your ad. It's a fundamental metric for pay-per-click advertising that directly impacts campaign efficiency and budget utilization. Understanding CPC helps you optimize bids and maximize return on investment.
          </p>
          <p className="mb-5">
            But CPC varies by platform, industry, keyword competitiveness, and ad quality. What constitutes a good CPC depends on your conversion rate, profit margins, and customer lifetime value. The key is ensuring CPC supports profitable acquisition.
          </p>
          <p>
            The CPC calculator above helps you track click costs, compare platform performance, and optimize your bidding strategy. Use it to make data-driven decisions about your PPC advertising.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How CPC Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            CPC is calculated by dividing total ad spend by the number of clicks received. In auction-based advertising platforms like Google Ads, CPC is determined through real-time bidding based on your maximum bid and Quality Score.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            CPC Formula:
          </p>
          <div className="formula-block">
            <pre>CPC = Total Ad Spend / Number of Clicks</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Total Ad Spend", "$1,000"],
              ["Clicks Received", "2,000"],
              ["CPC", "$1,000 / 2,000 = $0.50 per click"],
              ["Conversion Rate", "3%"],
              ["Conversions", "60"],
              ["Profit per Conversion", "$50"],
              ["Total Profit", "$3,000"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, each click costs $0.50. Reducing CPC to $0.40 through Quality Score improvements would yield 2,500 clicks from the same budget — 25% more traffic and potential conversions without increasing spend.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── CPC BY PLATFORM ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            CPC Benchmarks by Platform
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different advertising platforms have vastly different CPCs due to audience intent, competition levels, and bidding dynamics. Understanding platform benchmarks helps set realistic expectations.
          </p>

          {[
            {
              heading: "Google Search Ads",
              rows: [
                ["Typical CPC", "$1.00-$3.00"],
                ["Characteristics", "High intent, competitive bidding"],
                ["Best For", "Bottom-of-funnel, high-intent searches"],
              ],
              note: "Google Search typically has higher CPCs due to high user intent and competitive bidding. Users actively searching for solutions convert well, justifying higher click costs. Quality Score significantly impacts actual CPC.",
            },
            {
              heading: "Facebook/Instagram Ads",
              rows: [
                ["Typical CPC", "$0.50-$2.00"],
                ["Characteristics", "Visual, interest-based targeting"],
                ["Best For", "Awareness, consideration, and retargeting"],
              ],
              note: "Social media CPCs are generally lower than search but vary by audience and creative. Facebook and Instagram offer sophisticated targeting options. Visual creative quality significantly impacts CPC and performance.",
            },
            {
              heading: "LinkedIn Ads",
              rows: [
                ["Typical CPC", "$3.00-$8.00"],
                ["Characteristics", "Professional audience, B2B focus"],
                ["Best For", "B2B lead generation and brand awareness"],
              ],
              note: "LinkedIn has the highest CPCs due to professional audience quality and B2B focus. While expensive, LinkedIn delivers high-value B2B prospects. Justify higher CPCs with higher conversion values and LTV.",
            },
          ].map((benchmark: { heading: string; rows: string[][]; note: string }) => (
            <div key={benchmark.heading} className="state-card">
              <h3>{benchmark.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {benchmark.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{benchmark.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── REDUCING CPC ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Reduce CPC
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Lowering CPC improves campaign efficiency and allows more clicks for the same budget. Here are proven strategies to reduce click costs.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Improve Quality Score",
                body: "Quality Score directly impacts CPC in Google Ads. Improve click-through rates, landing page relevance, and ad copy quality. Higher Quality Scores can reduce CPC by 50% or more while maintaining ad position.",
              },
              {
                n: "2",
                title: "Refine keyword targeting",
                body: "Broad match keywords attract irrelevant clicks and higher CPCs. Use phrase and exact match for precision. Add negative keywords to exclude irrelevant searches. Better targeting improves relevance and lowers CPC.",
              },
              {
                n: "3",
                title: "Optimize ad copy and creative",
                body: "Strong ad copy improves click-through rates, which improves Quality Score and lowers CPC. Test different headlines, descriptions, and calls-to-action. Better performing creative costs less per click.",
              },
              {
                n: "4",
                title: "Improve landing page experience",
                body: "Landing page quality affects Quality Score and CPC. Ensure fast load times, mobile optimization, relevant content, and clear calls-to-action. Better landing pages improve ad performance and reduce costs.",
              },
              {
                n: "5",
                title: "Use ad scheduling and bid adjustments",
                body: "Identify peak performance times and days. Increase bids during high-conversion periods and decrease or pause during low-performance times. Strategic scheduling improves overall efficiency and reduces average CPC.",
              },
              {
                n: "6",
                title: "Leverage automated bidding strategies",
                body: "Use platform bidding strategies like maximize clicks with a CPC cap or target CPA. Automated bidding optimizes in real-time based on performance data, often achieving better CPCs than manual bidding.",
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

        {/* ── CPC VS CONVERSION ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            CPC vs Conversion Value
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Low CPC doesn't guarantee profitability. The relationship between CPC, conversion rate, and conversion value determines campaign success.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Metric</th>
                <th className="dark:text-slate-100">Campaign A</th>
                <th className="dark:text-slate-100">Campaign B</th>
                <th className="dark:text-slate-100">Winner</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["CPC", "$0.50", "$1.00", "Campaign A"],
                ["Conversion Rate", "1%", "5%", "Campaign B"],
                ["Cost Per Conversion", "$50", "$20", "Campaign B"],
                ["Conversion Value", "$60", "$80", "Campaign B"],
                ["Profit per Conversion", "$10", "$60", "Campaign B"],
              ].map(([metric, a, b, winner]) => (
                <tr key={metric}>
                  <td className="dark:text-slate-100">{metric}</td>
                  <td className="dark:text-slate-100">{a}</td>
                  <td className="dark:text-slate-100">{b}</td>
                  <td className="dark:text-slate-100">{winner}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Campaign B has double the CPC but delivers 6x the profit per conversion due to higher conversion rates and conversion values. Focus on profitability, not just CPC. The cheapest click isn't always the best click.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common CPC Optimization Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Even experienced advertisers make mistakes that increase CPC or reduce campaign effectiveness. Here's what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Focusing only on low CPC",
                body: "Low CPC doesn't matter if conversions don't generate profit. Focus on cost per conversion and return on ad spend rather than just CPC. Cheap clicks that don't convert waste budget.",
              },
              {
                n: "2",
                title: "Ignoring Quality Score",
                body: "Quality Score directly impacts CPC in Google Ads. Ignoring it means paying more for the same ad position. Monitor and improve Quality Score through better ads, landing pages, and relevance.",
              },
              {
                n: "3",
                title: "Using broad match exclusively",
                body: "Broad match keywords attract irrelevant searches and higher CPCs. Use phrase and exact match for precision. Add negative keywords to exclude irrelevant traffic. Better targeting reduces CPC.",
              },
              {
                n: "4",
                title: "Not testing ad creative",
                body: "Poor ad creative has low click-through rates, which increases CPC. Continuously test headlines, descriptions, and images. Better performing creative costs less per click.",
              },
              {
                n: "5",
                title: "Neglecting landing page quality",
                body: "Poor landing pages hurt Quality Score and increase CPC. Ensure fast load times, mobile optimization, and relevance. Better landing pages improve ad performance and reduce costs.",
              },
              {
                n: "6",
                title: "Not using bid adjustments",
                body: "Not adjusting bids by device, location, or time misses optimization opportunities. Use bid adjustments to increase efficiency during high-performance periods and reduce waste during low-performance times.",
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
            Practical Tips for CPC Optimization
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — track CPC by campaign and keyword</>],
              [<><strong>Monitor Quality Score</strong> — improve to reduce CPC</>],
              [<><strong>Refine keyword targeting</strong> — use phrase and exact match</>],
              [<><strong>Add negative keywords</strong> — exclude irrelevant traffic</>],
              [<><strong>Test ad creative</strong> — improve click-through rates</>],
              [<><strong>Optimize landing pages</strong> — improve relevance and speed</>],
              [<><strong>Use bid adjustments</strong> — optimize by time and device</>],
              [<><strong>Focus on profitability</strong> — not just low CPC</>],
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
                q: "How do I calculate CPC?",
                a: "CPC = Total Ad Spend / Number of Clicks. For example, if you spend $1,000 and receive 2,000 clicks, your CPC is $0.50. The calculator above automates this calculation and helps track CPC over time.",
              },
              {
                q: "What is a good CPC?",
                a: "Good CPC varies by platform, industry, and keyword competitiveness. Google Search typically sees $1-$3 CPC. Facebook/Instagram sees $0.50-$2. LinkedIn sees $3-$8. Focus on profitability rather than absolute CPC — a higher CPC with better conversions may be more profitable.",
              },
              {
                q: "How does Quality Score affect CPC?",
                a: "Quality Score directly impacts CPC in Google Ads. Higher Quality Scores (10/10) can reduce CPC by 50% or more compared to low scores. Improve Quality Score through better click-through rates, relevant ad copy, and high-quality landing pages.",
              },
              {
                q: "What is the difference between CPC and CPM?",
                a: "CPC (Cost Per Click) charges when users click your ad. CPM (Cost Per Thousand Impressions) charges per 1,000 ad views regardless of clicks. CPC is performance-based, while CPM is awareness-based. Choose based on campaign goals.",
              },
              {
                q: "How can I reduce my CPC?",
                a: "Improve Quality Score, refine keyword targeting, add negative keywords, optimize ad creative, improve landing page quality, use bid adjustments strategically, and leverage automated bidding strategies. Continuous optimization reduces CPC over time.",
              },
              {
                q: "Should I focus on low CPC?",
                a: "Not necessarily. Low CPC doesn't guarantee profitability. Focus on cost per conversion and return on ad spend. A higher CPC with excellent conversion rates may be more profitable than a low CPC with poor conversions.",
              },
              {
                q: "What is max CPC bid?",
                a: "Maximum CPC bid is the most you're willing to pay per click. In auction-based systems like Google Ads, you often pay less than your max bid depending on competition and Quality Score. Set max bids strategically based on conversion value.",
              },
              {
                q: "How does ad scheduling affect CPC?",
                a: "CPC varies by time of day and day of week due to competition and user behavior. Use ad scheduling to increase bids during high-performance periods and decrease during low-performance times. Strategic scheduling improves overall efficiency.",
              },
              {
                q: "What is average CPC vs actual CPC?",
                a: "Average CPC is the mean cost across all clicks in a campaign. Actual CPC is what you pay for each individual click, which varies based on auction dynamics. Average CPC provides a campaign-level view for budgeting and analysis.",
              },
              {
                q: "How often should I monitor CPC?",
                a: "Monitor CPC daily for active campaigns, especially when starting new campaigns or making significant changes. Review trends weekly and conduct deeper analysis monthly. Regular monitoring helps catch issues quickly and optimize performance.",
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
            CPC is a fundamental metric for pay-per-click advertising efficiency. Understanding and optimizing CPC helps maximize campaign performance and budget utilization. But CPC alone doesn't determine success — profitability matters most.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you track click costs and analyze campaign performance. But the real value comes from optimizing Quality Score, targeting, and creative to reduce costs while maintaining or improving conversion quality.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're running search ads, social media campaigns, or display advertising, understanding your CPC provides the clarity needed to make data-driven bidding decisions. Focus on profitability, not just low click costs.
          </p>
          <div className="pull-quote mt-8">
            The best PPC strategy balances cost, quality, and conversion. Optimize CPC relentlessly, but never lose sight of profitability.
          </div>
        </section>

      </div>
    </article>
  );
}
