import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function CPAArticle() {
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
          <span className="meta-tag">Business · Marketing Metrics</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            CPA Calculator: Measure Your Cost Per Acquisition
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for digital marketers and advertisers
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You spend $5,000 on a Facebook ad campaign and generate 100 new customers. Your Cost Per Acquisition (CPA) is $50. If each customer generates $200 in lifetime value, you're earning $150 in profit per customer. But if you can reduce CPA to $35 through better targeting, your profit per customer jumps to $165 — a 10% increase in margin.
          </p>
          <p className="mb-5">
            CPA measures how much it costs to acquire a customer through marketing efforts. It's a critical metric for evaluating advertising efficiency, budget allocation, and campaign performance. Understanding CPA helps you optimize spend and maximize return on investment.
          </p>
          <p className="mb-5">
            But CPA varies by channel, industry, and campaign type. What constitutes a good CPA depends on your customer lifetime value, profit margins, and business model. The key is ensuring CPA is sustainable relative to customer value.
          </p>
          <p>
            The CPA calculator above helps you track acquisition costs, compare channel performance, and optimize your marketing spend. Use it to make data-driven decisions about where to invest in customer acquisition.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How CPA Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            CPA is calculated by dividing total marketing spend by the number of acquisitions or conversions. It includes all campaign costs — ad spend, creative production, and agency fees.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            CPA Formula:
          </p>
          <div className="formula-block">
            <pre>CPA = Total Marketing Spend / Number of Conversions</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Ad Spend", "$4,500"],
              ["Creative Production", "$300"],
              ["Agency Fees", "$200"],
              ["Total Marketing Spend", "$5,000"],
              ["Conversions", "100"],
              ["CPA", "$5,000 / 100 = $50 per conversion"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, each conversion costs $50. If your profit per conversion is $100, you're earning $50 in profit. Reducing CPA to $40 increases profit to $60 per conversion — a 20% improvement in profitability without increasing prices.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── CPA BY CHANNEL ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            CPA Benchmarks by Channel
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different marketing channels have vastly different CPAs. Understanding channel benchmarks helps you set realistic expectations and allocate budget efficiently.
          </p>

          {[
            {
              heading: "Search Advertising",
              rows: [
                ["Typical CPA", "$50-$150"],
                ["Characteristics", "High intent, competitive bidding"],
                ["Best For", "Bottom-of-funnel conversions"],
              ],
              note: "Search ads typically have higher CPAs due to competitive bidding but deliver high-intent prospects. Users actively searching for solutions convert well, justifying higher acquisition costs.",
            },
            {
              heading: "Social Media Advertising",
              rows: [
                ["Typical CPA", "$20-$100"],
                ["Characteristics", "Broad reach, visual engagement"],
                ["Best For", "Awareness and consideration"],
              ],
              note: "Social media CPAs vary by platform and targeting. Facebook and Instagram typically offer moderate CPAs with good targeting options. LinkedIn has higher CPAs but delivers B2B audiences.",
            },
            {
              heading: "Display Advertising",
              rows: [
                ["Typical CPA", "$30-$80"],
                ["Characteristics", "Broad reach, lower intent"],
                ["Best For", "Brand awareness and retargeting"],
              ],
              note: "Display ads often have lower CPAs but also lower conversion rates. They work best for brand awareness and retargeting rather than direct acquisition. Combine with other channels for full-funnel strategy.",
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

        {/* ── REDUCING CPA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Reduce CPA
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Lowering CPA improves profitability and allows more efficient use of marketing budget. Here are proven strategies to reduce acquisition costs.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Improve targeting and segmentation",
                body: "Better targeting reduces wasted spend on unqualified prospects. Use demographic, behavioral, and contextual targeting to reach audiences most likely to convert. Refine segments based on performance data.",
              },
              {
                n: "2",
                title: "Optimize ad creative and copy",
                body: "Strong creative improves click-through and conversion rates. Test different headlines, images, and calls-to-action. Better performing creative reduces the cost per acquisition by improving efficiency.",
              },
              {
                n: "3",
                title: "Improve landing page conversion",
                body: "High ad spend with poor landing page conversion wastes money. Optimize landing pages for conversion with clear value propositions, simple forms, and trust signals. Better conversion rates directly reduce CPA.",
              },
              {
                n: "4",
                title: "Use retargeting strategically",
                body: "Retargeting warm prospects typically has lower CPA than cold acquisition. Focus retargeting on visitors who showed intent but didn't convert. This often delivers the best CPA of all channels.",
              },
              {
                n: "5",
                title: "Leverage lookalike audiences",
                body: "Lookalike audiences based on existing customers often convert at similar rates with lower CPA than cold audiences. Use your best customer data to find similar prospects on advertising platforms.",
              },
              {
                n: "6",
                title: "Optimize bidding strategies",
                body: "Use platform bidding strategies like target CPA or maximize conversions. Automated bidding optimizes for your goals and often achieves better CPA than manual bidding. Set appropriate targets and let algorithms optimize.",
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

        {/* ── CPA VS LTV ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            CPA vs Customer Lifetime Value
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            CPA doesn't exist in isolation — it must be evaluated against Customer Lifetime Value (LTV). The relationship between CPA and LTV determines acquisition sustainability.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Scenario</th>
                <th className="dark:text-slate-100">CPA</th>
                <th className="dark:text-slate-100">LTV</th>
                <th className="dark:text-slate-100">Assessment</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Healthy", "$50", "$200", "4:1 LTV:CPA ratio - sustainable"],
                ["Marginal", "$75", "$150", "2:1 LTV:CPA ratio - needs optimization"],
                ["Unsustainable", "$100", "$120", "1.2:1 LTV:CPA ratio - immediate action needed"],
              ].map(([scenario, cpa, ltv, assessment]) => (
                <tr key={scenario}>
                  <td className="dark:text-slate-100">{scenario}</td>
                  <td className="dark:text-slate-100">{cpa}</td>
                  <td className="dark:text-slate-100">{ltv}</td>
                  <td className="dark:text-slate-100">{assessment}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Aim for an LTV:CPA ratio of 3:1 or higher. This means customers generate at least 3x their acquisition cost. Ratios below 2:1 indicate unsustainable acquisition that will drain resources over time.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common CPA Measurement Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Inaccurate CPA measurement leads to poor budget allocation and wasted spend. Here's what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Not including all campaign costs",
                body: "CPA should include all costs — ad spend, creative production, agency fees, and tools. Excluding costs understates CPA and leads to poor decisions. Be comprehensive in cost allocation.",
              },
              {
                n: "2",
                title: "Not tracking by channel",
                body: "Aggregate CPA hides channel performance differences. Track CPA by channel to identify what's working and what isn't. Channel-level tracking enables optimization and budget reallocation.",
              },
              {
                n: "3",
                title: "Ignoring attribution",
                body: "Different attribution models give different CPAs. First-touch, last-touch, and multi-touch attribution all have merits. Choose a model that reflects your customer journey and use it consistently.",
              },
              {
                n: "4",
                title: "Focusing only on CPA",
                body: "Low CPA doesn't matter if customers don't generate value. Always consider CPA alongside LTV, retention, and customer quality. The cheapest acquisition may bring the worst customers.",
              },
              {
                n: "5",
                title: "Not considering time lag",
                body: "Marketing spend and conversions don't always align in time. Account for lag between spend and conversion, especially for longer sales cycles. Monthly CPA may fluctuate due to timing.",
              },
              {
                n: "6",
                title: "Not optimizing continuously",
                body: "CPA optimization is ongoing, not one-time. Markets, competition, and audience behavior change. Continuous testing and optimization are required to maintain and improve CPA over time.",
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
            Practical Tips for CPA Optimization
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — track CPA by channel and campaign</>],
              [<><strong>Include all costs</strong> — ad spend, creative, tools, and fees</>],
              [<><strong>Track by channel</strong> — identify efficient and inefficient channels</>],
              [<><strong>Monitor LTV:CPA</strong> — ensure acquisition costs are sustainable</>],
              [<><strong>Improve targeting</strong> — reach qualified prospects</>],
              [<><strong>Optimize creative</strong> — test headlines, images, and CTAs</>],
              [<><strong>Improve landing pages</strong> — increase conversion rates</>],
              [<><strong>Use retargeting</strong> — convert warm prospects efficiently</>],
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
                q: "How do I calculate CPA?",
                a: "CPA = Total Marketing Spend / Number of Conversions. Include all campaign costs: ad spend, creative production, agency fees, and tools. The calculator above automates this calculation and helps track CPA over time.",
              },
              {
                q: "What is a good CPA?",
                a: "Good CPA depends on your LTV and profit margins. The key metric is LTV:CPA ratio — aim for 3:1 or higher. A $50 CPA is good if LTV is $200 (4:1 ratio) but bad if LTV is $75 (1.5:1 ratio). Focus on the ratio rather than absolute CPA.",
              },
              {
                q: "How does CPA differ from CPC?",
                a: "CPC (Cost Per Click) measures cost per ad click, while CPA measures cost per conversion. CPC is a leading indicator of ad efficiency, while CPA measures actual acquisition cost. Low CPC doesn't guarantee low CPA if conversion rates are poor.",
              },
              {
                q: "What is the difference between CPA and CAC?",
                a: "CPA typically refers to campaign-specific acquisition costs in digital marketing. CAC (Customer Acquisition Cost) is a broader metric that includes all sales and marketing expenses across all channels. CAC provides a complete picture of total acquisition costs.",
              },
              {
                q: "How can I reduce my CPA?",
                a: "Improve targeting, optimize creative and copy, improve landing page conversion, use retargeting strategically, leverage lookalike audiences, and optimize bidding strategies. Continuous testing and optimization reduce CPA over time.",
              },
              {
                q: "Should I track CPA by channel?",
                a: "Yes, tracking CPA by channel is essential for optimization. Different channels have vastly different CPAs. Channel-level tracking helps identify what's working, allocate budget efficiently, and improve overall acquisition efficiency.",
              },
              {
                q: "What is target CPA bidding?",
                a: "Target CPA is an automated bidding strategy where you set a desired cost per acquisition, and the platform algorithm optimizes bids to achieve that target. It's effective when you have conversion data and clear CPA goals.",
              },
              {
                q: "How does attribution affect CPA?",
                a: "Different attribution models assign conversion credit differently, affecting CPA calculation. First-touch attributes to the first interaction, last-touch to the final interaction. Choose an attribution model that reflects your customer journey.",
              },
              {
                q: "What is a good LTV:CPA ratio?",
                a: "A 3:1 LTV:CPA ratio is considered healthy. Ratios above 3:1 indicate excellent unit economics. Ratios between 2:1 and 3:1 are acceptable but need optimization. Ratios below 2:1 are unsustainable and require immediate action.",
              },
              {
                q: "How often should I measure CPA?",
                a: "Measure CPA weekly for most campaigns. Daily measurement may be appropriate for high-volume campaigns. Regular tracking helps identify trends, catch issues early, and measure the impact of optimization efforts.",
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
            CPA is a fundamental metric for digital marketing efficiency. Tracking CPA alongside LTV provides the complete picture of acquisition economics. Understanding and optimizing CPA is essential for profitable growth.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you measure acquisition costs and analyze channel performance. But the real value comes from using this data to optimize targeting, creative, and landing pages for continuous improvement.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're optimizing existing campaigns or testing new channels, understanding your CPA provides the clarity needed to make data-driven decisions. Focus on the LTV:CPA ratio, and let acquisition efficiency drive your marketing strategy.
          </p>
          <div className="pull-quote mt-8">
            The best acquisition strategy balances cost, quality, and scale. Measure CPA relentlessly, optimize continuously, and grow profitably.
          </div>
        </section>

      </div>
    </article>
  );
}
