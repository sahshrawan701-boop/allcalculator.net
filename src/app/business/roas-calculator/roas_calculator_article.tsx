import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RoasCalculatorArticle() {
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
          <span className="meta-tag">Business · Marketing Performance</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            ROAS Calculator: Calculate Return on Ad Spend
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for advertising performance analysis
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You spent $10,000 on Facebook ads last month. Those ads generated $50,000 in revenue. Your ROAS is 5:1 ($50,000 / $10,000), meaning for every dollar spent on ads, you earned $5 in return. Your ad profit is $40,000 ($50,000 - $10,000). If your profit margin is 20%, your actual profit after accounting for product costs is $10,000 ($50,000 × 20% - $10,000 = $0). This shows the importance of considering profit margin when evaluating ROAS.
          </p>
          <p className="mb-5">
            ROAS (Return on Ad Spend) measures the revenue generated per dollar spent on advertising. It's a critical metric for evaluating ad performance, optimizing campaigns, and allocating marketing budget. Understanding ROAS helps assess whether advertising is profitable.
          </p>
          <p className="mb-5">
            But ROAS varies by industry, platform, and campaign objective. Understanding how to calculate ROAS, interpret it in context, and optimize campaigns helps maximize advertising ROI.
          </p>
          <p>
            The ROAS calculator above helps you calculate return on ad spend and analyze advertising performance.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How ROAS Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            ROAS is calculated by dividing revenue from ads by ad spend. The result is typically expressed as a ratio (e.g., 5:1) or a percentage (500%). A higher ROAS indicates better ad performance.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            ROAS Formula:
          </p>
          <div className="formula-block">
            <pre>ROAS = Revenue from Ads / Ad Spend</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Ad Spend", "$10,000"],
              ["Revenue from Ads", "$50,000"],
              ["ROAS", "$50,000 / $10,000 = 5:1"],
              ["ROAS Percentage", "5 × 100 = 500%"],
              ["Ad Profit", "$50,000 - $10,000 = $40,000"],
              ["With 20% Margin", "$50,000 × 20% - $10,000 = $0"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, ROAS of 5:1 looks good, but with a 20% profit margin, the actual profit is zero. This demonstrates why ROAS must be evaluated in the context of profit margins. A high ROAS doesn't always mean profitable advertising.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── ROAS BENCHMARKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            ROAS Benchmarks by Industry
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            ROAS varies significantly by industry due to profit margins, customer lifetime value, and competition. Understanding industry benchmarks helps assess your performance.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Industry</th>
                <th className="dark:text-slate-100">Typical ROAS</th>
                <th className="dark:text-slate-100">Key Factors</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["E-commerce", "3:1 to 5:1", "Low margins, high volume"],
                ["SaaS/B2B", "5:1 to 10:1", "High LTV, long sales cycle"],
                ["Professional Services", "8:1 to 15:1", "High margins, low volume"],
                ["Retail", "3:1 to 4:1", "Competitive, low margins"],
                ["Food & Beverage", "2:1 to 3:1", "Very low margins"],
                ["Financial Services", "10:1 to 20:1", "High LTV, high margins"],
              ].map(([industry, roas, factors]) => (
                <tr key={industry}>
                  <td className="dark:text-slate-100">{industry}</td>
                  <td className="dark:text-slate-100">{roas}</td>
                  <td className="dark:text-slate-100">{factors}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Industries with high margins and high customer lifetime value (SaaS, financial services) have higher ROAS benchmarks. Industries with low margins (food, retail) have lower ROAS benchmarks. Compare to your industry, not absolute numbers.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── ROAS VS PROFITABILITY ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            ROAS vs Profitability
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            ROAS measures revenue return, not profit. To assess true advertising profitability, you must consider profit margins. Here's how to calculate break-even ROAS.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Break-Even ROAS Formula:
          </p>
          <div className="formula-block">
            <pre>Break-Even ROAS = 1 / Profit Margin</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Profit Margin", "20%"],
              ["Break-Even ROAS", "1 / 0.20 = 5:1"],
              ["Actual ROAS", "4:1"],
              ["Result", "Below break-even, losing money"],
              ["Actual ROAS", "6:1"],
              ["Result", "Above break-even, profitable"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            With a 20% profit margin, you need a 5:1 ROAS to break even. Any ROAS below 5:1 loses money; any ROAS above 5:1 makes money. Always calculate break-even ROAS based on your profit margins to evaluate true profitability.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── IMPROVING ROAS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Improve ROAS
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Improving ROAS requires optimizing ad spend, targeting, creative, and conversion rates. Here are proven strategies to boost ROAS.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Improve targeting",
                body: "Refine audience targeting to reach high-intent customers. Use lookalike audiences, custom audiences, and demographic targeting. Better targeting reduces wasted spend and increases conversion rates.",
              },
              {
                n: "2",
                title: "Optimize creative",
                body: "Test different ad creatives and optimize for performance. Use compelling visuals, clear value propositions, and strong calls-to-action. Creative optimization significantly impacts click-through and conversion rates.",
              },
              {
                n: "3",
                title: "Improve landing pages",
                body: "Optimize landing pages for conversion. Ensure fast load times, clear messaging, and easy checkout. Landing page optimization increases conversion rates, improving ROAS without increasing ad spend.",
              },
              {
                n: "4",
                title: "Focus on high-value audiences",
                body: "Allocate more budget to audiences with higher customer lifetime value. Prioritize retargeting and high-intent segments. Focusing on high-value customers improves ROAS and overall profitability.",
              },
              {
                n: "5",
                title: "Use bid strategies wisely",
                body: "Choose bid strategies aligned with your goals. Use target ROAS bidding for performance campaigns. Manual bidding may be better for control. Bid strategy optimization maximizes efficiency.",
              },
              {
                n: "6",
                title: "Test and iterate",
                body: "Continuously A/B test ads, audiences, and offers. Use data to identify what works and scale successful campaigns. Testing and iteration drive continuous ROAS improvement.",
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

        {/* ── ROAS BY PLATFORM ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            ROAS by Advertising Platform
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different advertising platforms have different typical ROAS ranges due to audience intent, competition, and ad format. Understanding platform differences helps allocate budget effectively.
          </p>

          {[
            {
              heading: "Google Ads",
              rows: [
                ["Typical ROAS", "3:1 to 6:1"],
                ["Intent", "High (search-based)"],
                ["Best For", "High-intent keywords"],
              ],
              note: "Google Ads typically has higher ROAS due to search intent. Users are actively searching for solutions. Focus on high-intent keywords and negative keywords to maximize ROAS.",
            },
            {
              heading: "Facebook/Instagram",
              rows: [
                ["Typical ROAS", "2:1 to 4:1"],
                ["Intent", "Medium (discovery-based)"],
                ["Best For", "Brand awareness, retargeting"],
              ],
              note: "Facebook and Instagram are discovery platforms with lower intent. Retargeting campaigns typically have higher ROAS than cold audiences. Use creative optimization to stand out.",
            },
            {
              heading: "LinkedIn",
              rows: [
                ["Typical ROAS", "4:1 to 8:1"],
                ["Intent", "High (B2B professional)"],
                ["Best For", "B2B, professional services"],
              ],
              note: "LinkedIn has higher costs but higher intent for B2B. ROAS is typically higher due to professional audience and B2B purchase values. Best for high-ticket B2B offerings.",
            },
            {
              heading: "TikTok",
              rows: [
                ["Typical ROAS", "1.5:1 to 3:1"],
                ["Intent", "Low (entertainment-based)"],
                ["Best For", "Younger demographics, viral products"],
              ],
              note: "TikTok has lower ROAS due to entertainment focus and lower purchase intent. Works well for viral products and younger demographics. Requires authentic, creative content.",
            },
          ].map((platform: { heading: string; rows: string[][]; note: string }) => (
            <div key={platform.heading} className="state-card">
              <h3>{platform.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {platform.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{platform.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common ROAS Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Many marketers calculate or interpret ROAS incorrectly. Here's what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Ignoring profit margins",
                body: "High ROAS doesn't guarantee profitability. Always calculate break-even ROAS based on your profit margins. A 10:1 ROAS with 10% margins is less profitable than 4:1 ROAS with 50% margins.",
              },
              {
                n: "2",
                title: "Not tracking by campaign",
                body: "ROAS varies significantly by campaign, audience, and creative. Track ROAS at the granular level to identify what's working. Aggregate ROAS hides optimization opportunities.",
              },
              {
                n: "3",
                title: "Focusing only on ROAS",
                body: "ROAS is important but not the only metric. Consider customer acquisition cost, lifetime value, and overall profitability. Optimizing only for ROAS may limit growth.",
              },
              {
                n: "4",
                title: "Not considering attribution",
                body: "Attribution affects ROAS calculation. First-click vs last-click attribution changes ROAS significantly. Use consistent attribution and understand its impact on ROAS.",
              },
              {
                n: "5",
                title: "Comparing across platforms",
                body: "Different platforms have different typical ROAS ranges. Don't compare Facebook ROAS to Google ROAS directly. Compare to platform benchmarks and your own historical performance.",
              },
              {
                n: "6",
                title: "Not testing enough",
                body: "Insufficient testing leads to suboptimal ROAS. Test multiple creatives, audiences, and offers. Use statistical significance to determine winners. Continuous testing drives improvement.",
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
            Practical Tips for ROAS Optimization
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — calculate ROAS accurately</>],
              [<><strong>Know break-even</strong> — calculate based on margins</>],
              [<><strong>Track granularly</strong> — by campaign, audience, creative</>],
              [<><strong>Test continuously</strong> — A/B test and iterate</>],
              [<><strong>Optimize landing pages</strong> — improve conversion rates</>],
              [<><strong>Focus on LTV</strong> — not just immediate ROAS</>],
              [<><strong>Use appropriate benchmarks</strong> — industry and platform</>],
              [<><strong>Consider attribution</strong> — understand its impact</>],
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
                q: "How do I calculate ROAS?",
                a: "ROAS = Revenue from Ads / Ad Spend. For example, $50,000 revenue from $10,000 ad spend: $50,000 / $10,000 = 5:1 ROAS. The calculator above automates this calculation.",
              },
              {
                q: "What is a good ROAS?",
                a: "Good ROAS varies by industry: E-commerce 3:1-5:1, SaaS 5:1-10:1, Professional Services 8:1-15:1. The most important metric is whether ROAS exceeds your break-even ROAS based on profit margins.",
              },
              {
                q: "What is break-even ROAS?",
                a: "Break-Even ROAS = 1 / Profit Margin. For 20% margin: 1 / 0.20 = 5:1. This is the ROAS needed to neither profit nor lose money on advertising. Any ROAS above break-even is profitable.",
              },
              {
                q: "How do I improve my ROAS?",
                a: "Improve targeting to reach high-intent customers, optimize creative for better performance, improve landing pages for higher conversion, focus on high-value audiences, use appropriate bid strategies, and continuously test and iterate.",
              },
              {
                q: "What is the difference between ROAS and ROI?",
                a: "ROAS measures revenue return from ad spend. ROI measures profit return from total investment. ROAS = Revenue / Ad Spend. ROI = (Profit - Investment) / Investment. ROAS is specific to advertising; ROI is broader.",
              },
              {
                q: "Why is my ROAS different across platforms?",
                a: "Different platforms have different user intent, competition levels, and ad formats. Google has high search intent; Facebook has discovery intent. Compare to platform benchmarks, not across platforms.",
              },
              {
                q: "Should I optimize for ROAS or conversions?",
                a: "Depends on your goals. For profitability, optimize for ROAS. For growth, optimize for conversions. Balance both: ensure ROAS is above break-even while maximizing conversions. Use target ROAS bidding when possible.",
              },
              {
                q: "How does attribution affect ROAS?",
                a: "Attribution determines which ad gets credit for a conversion. First-click attribution gives credit to the first ad; last-click gives credit to the last ad. Different attribution models change ROAS significantly. Use consistent attribution.",
              },
              {
                q: "What is target ROAS bidding?",
                a: "Target ROAS bidding is an automated bidding strategy where you set a desired ROAS and the platform optimizes bids to achieve it. Use when you have historical data and clear ROAS targets. Helps automate optimization.",
              },
              {
                q: "Should I stop advertising if ROAS is low?",
                a: "Not necessarily. Low ROAS may be due to new campaigns, testing, or brand building. Consider customer lifetime value and long-term benefits. If ROAS is consistently below break-even, investigate and optimize or pause.",
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
            ROAS is a critical metric for advertising performance, but it must be interpreted in the context of profit margins and business goals. Understanding break-even ROAS, optimizing campaigns, and tracking granular performance drives advertising profitability.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you calculate ROAS and assess advertising performance. But the real value comes from using this information to optimize campaigns, allocate budget effectively, and build a profitable advertising strategy.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're managing Google Ads, Facebook campaigns, or multi-channel strategies, accurate ROAS calculation provides the foundation for advertising optimization. Calculate precisely, optimize continuously, and advertise profitably.
          </p>
          <div className="pull-quote mt-8">
            ROAS is not just a number — it's a guide to advertising efficiency. Optimize for profitability, not just revenue, and build sustainable growth.
          </div>
        </section>

      </div>
    </article>
  );
}
