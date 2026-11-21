import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function CPMCalculatorArticle() {
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
            CPM Calculator: Measure Your Cost Per Thousand Impressions
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for brand advertisers and marketers
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You spend $5,000 on a display advertising campaign that generates 1,000,000 impressions. Your Cost Per Thousand (CPM) is $5. If your click-through rate is 0.5%, you'll receive 5,000 clicks. At $2 CPC equivalent, you're paying effectively $10,000 for those clicks. But if you can improve CTR to 1% through better creative, the same impressions yield 10,000 clicks — halving your effective cost per click.
          </p>
          <p className="mb-5">
            CPM measures how much you pay for every 1,000 ad impressions. It's the standard pricing model for brand awareness campaigns and display advertising where the goal is reach rather than immediate action. Understanding CPM helps you compare media costs and optimize budget allocation.
          </p>
          <p className="mb-5">
            But CPM alone doesn't tell the complete story. The relationship between CPM, click-through rate, and conversion rate determines actual campaign performance. Low CPM with poor engagement may be more expensive than higher CPM with strong performance.
          </p>
          <p>
            The CPM calculator above helps you track impression costs, compare media efficiency, and understand the impact of creative performance on effective costs.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How CPM Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            CPM is calculated by dividing total ad spend by the number of impressions (in thousands). It's the standard metric for comparing costs across different media channels and formats.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            CPM Formula:
          </p>
          <div className="formula-block">
            <pre>CPM = (Total Ad Spend / Total Impressions) × 1,000</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Total Ad Spend", "$5,000"],
              ["Total Impressions", "1,000,000"],
              ["CPM", "($5,000 / 1,000,000) × 1,000 = $5"],
              ["Click-Through Rate", "0.5%"],
              ["Clicks", "5,000"],
              ["Effective CPC", "$5,000 / 5,000 = $1"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, a $5 CPM with 0.5% CTR yields an effective CPC of $1. Improving CTR to 1% would double clicks to 10,000, reducing effective CPC to $0.50. Better creative dramatically improves efficiency at the same CPM.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── CPM BY CHANNEL ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            CPM Benchmarks by Channel
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different advertising channels have vastly different CPMs due to audience quality, ad format, and inventory scarcity. Understanding channel benchmarks helps set realistic expectations.
          </p>

          {[
            {
              heading: "Display Advertising",
              rows: [
                ["Typical CPM", "$2-$10"],
                ["Characteristics", "Broad reach, visual formats"],
                ["Best For", "Brand awareness and retargeting"],
              ],
              note: "Display advertising typically offers the lowest CPMs due to abundant inventory and broad reach. While inexpensive, display often has lower engagement rates. Best suited for brand awareness and retargeting rather than direct response.",
            },
            {
              heading: "Social Media Feed",
              rows: [
                ["Typical CPM", "$5-$15"],
                ["Characteristics", "Native placement, social context"],
                ["Best For", "Brand awareness and consideration"],
              ],
              note: "Social media feed ads have moderate CPMs with better engagement than display. Native placement in social context improves performance. Facebook, Instagram, and LinkedIn offer sophisticated targeting at reasonable CPMs.",
            },
            {
              heading: "Video Advertising",
              rows: [
                ["Typical CPM", "$10-$30"],
                ["Characteristics", "Engaging format, higher production costs"],
                ["Best For", "Brand storytelling and awareness"],
              ],
              note: "Video advertising commands higher CPMs due to engaging format and limited inventory. Video ads drive strong brand recall and engagement. Justify higher CPMs with superior brand impact and engagement metrics.",
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

        {/* ── IMPROVING CPM EFFICIENCY ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Improve CPM Efficiency
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            While you can't always control CPM, you can dramatically improve efficiency through better creative, targeting, and engagement. Focus on effective cost per action rather than just CPM.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Improve click-through rate",
                body: "Better CTR directly reduces effective cost per click at the same CPM. Test different creative elements — headlines, images, and calls-to-action. Small CTR improvements compound into significant efficiency gains.",
              },
              {
                n: "2",
                title: "Refine audience targeting",
                body: "Better targeting improves relevance and engagement, which improves CTR and conversion rates. Use demographic, behavioral, and contextual targeting to reach audiences most likely to engage. Quality over quantity.",
              },
              {
                n: "3",
                title: "Optimize ad placement",
                body: "Premium placements often have higher CPMs but better performance. Test different placements and environments. Sometimes higher CPM placements deliver better effective costs due to superior engagement.",
              },
              {
                n: "4",
                title: "Use frequency capping",
                body: "Excessive impressions to the same users waste budget and reduce CTR. Implement frequency capping to limit impressions per user. This improves CTR and reduces wasted spend on overexposed audiences.",
              },
              {
                n: "5",
                title: "Leverage programmatic buying",
                body: "Programmatic platforms optimize CPM through real-time bidding. Use programmatic buying with clear targeting and performance goals. Automated optimization often achieves better CPMs than direct buys.",
              },
              {
                n: "6",
                title: "Focus on effective metrics",
                body: "Don't optimize for low CPM alone. Focus on cost per click, cost per conversion, and return on ad spend. A higher CPM with excellent performance may be more efficient than low CPM with poor results.",
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

        {/* ── CPM VS CPC ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            CPM vs CPC: Choosing the Right Model
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            CPM and CPC serve different campaign objectives. Understanding when to use each model ensures you pay for what matters to your goals.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Factor</th>
                <th className="dark:text-slate-100">CPM</th>
                <th className="dark:text-slate-100">CPC</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Charges For", "Impressions (views)", "Clicks"],
                ["Best For", "Brand awareness, reach", "Direct response, conversions"],
                ["Risk", "Pay for views without clicks", "Pay only for engagement"],
                ["Control", "Control reach and frequency", "Control cost per action"],
                ["Typical Use", "Display, video, social", "Search, retargeting"],
              ].map(([factor, cpm, cpc]) => (
                <tr key={factor}>
                  <td className="dark:text-slate-100">{factor}</td>
                  <td className="dark:text-slate-100">{cpm}</td>
                  <td className="dark:text-slate-100">{cpc}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Choose CPM for brand awareness campaigns where reach and impressions matter. Choose CPC for direct response campaigns where clicks and conversions are the goal. Many campaigns use both models at different funnel stages.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common CPM Optimization Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Focusing solely on low CPM can lead to poor campaign performance. Here's what to avoid when optimizing CPM campaigns.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Optimizing only for low CPM",
                body: "Low CPM doesn't guarantee efficiency. Cheap impressions with poor engagement waste budget. Focus on effective cost per action rather than just CPM. Sometimes higher CPM delivers better results.",
              },
              {
                n: "2",
                title: "Ignoring click-through rate",
                body: "CTR directly impacts effective cost per click at the same CPM. Poor CTR means you're paying for impressions that don't engage. Improve creative and targeting to boost CTR and efficiency.",
              },
              {
                n: "3",
                title: "Overexposing audiences",
                body: "Too many impressions to the same user reduces CTR and wastes budget. Use frequency capping to limit impressions per user. This improves engagement and reduces wasted spend on overexposed audiences.",
              },
              {
                n: "4",
                title: "Not testing creative",
                body: "Poor creative has low CTR, making even low CPM expensive. Continuously test different creative elements. Better performing creative improves CTR and effective costs at any CPM.",
              },
              {
                n: "5",
                title: "Targeting too broadly",
                body: "Broad targeting lowers CPM but also reduces relevance and CTR. Focus on quality over quantity. Better targeting improves engagement and effective costs even at higher CPM.",
              },
              {
                n: "6",
                title: "Not tracking conversion metrics",
                body: "CPM campaigns still need conversion tracking. Measure cost per acquisition and return on ad spend. Brand campaigns should track brand lift and awareness metrics. Don't optimize in a vacuum.",
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
            Practical Tips for CPM Optimization
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — track CPM by campaign and placement</>],
              [<><strong>Improve CTR</strong> — test creative to boost engagement</>],
              [<><strong>Refine targeting</strong> — focus on quality over quantity</>],
              [<><strong>Use frequency capping</strong> — limit overexposure</>],
              [<><strong>Test placements</strong> — find high-performance environments</>],
              [<><strong>Focus on effective costs</strong> — not just low CPM</>],
              [<><strong>Track conversions</strong> — measure actual ROI</>],
              [<><strong>Use programmatic buying</strong> — leverage automated optimization</>],
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
                q: "How do I calculate CPM?",
                a: "CPM = (Total Ad Spend / Total Impressions) × 1,000. For example, if you spend $5,000 for 1,000,000 impressions, your CPM is $5. The calculator above automates this calculation and helps track CPM over time.",
              },
              {
                q: "What is a good CPM?",
                a: "Good CPM varies by channel, format, and targeting. Display advertising typically sees $2-$10 CPM. Social media feed ads see $5-$15. Video advertising sees $10-$30. Focus on effective cost per action rather than absolute CPM.",
              },
              {
                q: "What is the difference between CPM and CPC?",
                a: "CPM charges per 1,000 impressions regardless of clicks. CPC charges only when users click. CPM is for brand awareness and reach. CPC is for direct response and conversions. Choose based on campaign objectives.",
              },
              {
                q: "How does CTR affect CPM efficiency?",
                a: "CTR directly impacts effective cost per click at the same CPM. Higher CTR means more clicks for the same impressions, reducing effective CPC. Improving CTR from 0.5% to 1% doubles clicks and halves effective CPC.",
              },
              {
                q: "When should I use CPM bidding?",
                a: "Use CPM for brand awareness campaigns, reach objectives, and situations where impressions matter more than clicks. CPM is ideal for display advertising, video ads, and social media feed placements focused on visibility.",
              },
              {
                q: "How can I reduce my CPM?",
                a: "Refine targeting to improve relevance, use programmatic buying for automated optimization, test different placements, and negotiate direct buys for premium inventory. However, focus on efficiency rather than just low CPM.",
              },
              {
                q: "What is frequency capping?",
                a: "Frequency capping limits how many times the same user sees your ad. Excessive impressions reduce CTR and waste budget. Implement frequency capping to improve engagement and reduce wasted spend on overexposed audiences.",
              },
              {
                q: "Should I focus on low CPM?",
                a: "Not necessarily. Low CPM with poor engagement may be more expensive than higher CPM with strong performance. Focus on effective cost per click, cost per conversion, and return on ad spend rather than just CPM.",
              },
              {
                q: "How does programmatic buying affect CPM?",
                a: "Programmatic platforms use real-time bidding to optimize CPM based on your targeting and goals. Automated optimization often achieves better CPMs than manual buying. Set clear targeting and performance objectives for best results.",
              },
              {
                q: "How do I measure CPM campaign success?",
                a: "Track CPM alongside CTR, effective CPC, cost per conversion, and return on ad spend. For brand campaigns, measure brand lift, awareness metrics, and recall. Don't optimize CPM campaigns in isolation from business outcomes.",
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
            CPM is the standard metric for comparing media costs and planning brand awareness campaigns. Understanding CPM helps you budget effectively and compare options across channels. But efficiency matters more than low costs.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you track impression costs and calculate effective metrics. But the real value comes from optimizing creative, targeting, and placement to improve engagement and reduce effective costs.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're running display campaigns, video ads, or social media awareness campaigns, understanding your CPM provides the foundation for media planning. Focus on effective costs and business results, not just impression prices.
          </p>
          <div className="pull-quote mt-8">
            The best media strategy balances reach, engagement, and efficiency. Optimize CPM intelligently, but never lose sight of actual business outcomes.
          </div>
        </section>

      </div>
    </article>
  );
}
