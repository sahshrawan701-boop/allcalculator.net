import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function EmailMarketingROICalculatorArticle() {
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
            Email Marketing ROI Calculator: Measure Campaign Performance
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for marketers and business owners
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You spend $500 on an email campaign to 10,000 subscribers. The campaign achieves a 20% open rate (2,000 opens) and 5% click-through rate (500 clicks). Of those who click, 10% make a $50 purchase, generating $2,500 in revenue. Your ROI is 400% — you earned $4 for every $1 spent. If you can improve the conversion rate to 15%, revenue jumps to $3,750 with the same spend, increasing ROI to 650%.
          </p>
          <p className="mb-5">
            Email marketing ROI measures the return on your email marketing investment. It's calculated by comparing revenue generated to campaign costs. Understanding ROI helps you evaluate campaign performance and optimize your email strategy.
          </p>
          <p className="mb-5">
            But email ROI depends on multiple factors — list quality, subject lines, content, timing, and offer relevance. Small improvements in open rates, click-through rates, or conversion rates can dramatically impact ROI.
          </p>
          <p>
            The email marketing ROI calculator above helps you calculate campaign ROI, understand key metrics, and identify optimization opportunities.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Email Marketing ROI Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Email ROI is calculated by dividing revenue generated by campaign costs, then multiplying by 100 to get a percentage. The formula accounts for all campaign costs including tools, creative, and labor.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            ROI Formula:
          </p>
          <div className="formula-block">
            <pre>ROI = ((Revenue - Cost) / Cost) × 100</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Campaign Cost", "$500"],
              ["Subscribers", "10,000"],
              ["Open Rate", "20%"],
              ["Click-Through Rate", "5%"],
              ["Conversion Rate", "10%"],
              ["Average Order Value", "$50"],
              ["Conversions", "50"],
              ["Revenue", "$2,500"],
              ["ROI", "((2,500 - 500) / 500) × 100 = 400%"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, a 400% ROI is excellent for email marketing. Improving conversion rate from 10% to 15% increases revenue to $3,750 and ROI to 650%. Small conversion improvements compound into significant ROI gains.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── KEY METRICS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Key Email Marketing Metrics
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Email ROI depends on multiple metrics working together. Understanding each metric helps identify optimization opportunities throughout the email funnel.
          </p>

          {[
            {
              heading: "Open Rate",
              rows: [
                ["Calculation", "Opens / Delivered × 100"],
                ["Benchmark", "15-25% (B2B), 20-30% (B2C)"],
                ["Impact", "Determines audience reach"],
              ],
              note: "Open rate measures subject line effectiveness and sender reputation. Improve through compelling subject lines, optimal send times, and list hygiene. Higher open rates increase potential clicks and conversions.",
            },
            {
              heading: "Click-Through Rate",
              rows: [
                ["Calculation", "Clicks / Opens × 100"],
                ["Benchmark", "2-5% (B2B), 3-8% (B2C)"],
                ["Impact", "Drives traffic to landing pages"],
              ],
              note: "CTR measures content relevance and call-to-action effectiveness. Improve through clear CTAs, compelling copy, and relevant offers. Higher CTR directly increases conversion potential.",
            },
            {
              heading: "Conversion Rate",
              rows: [
                ["Calculation", "Conversions / Clicks × 100"],
                ["Benchmark", "1-5% (varies by offer)"],
                ["Impact", "Determines revenue generation"],
              ],
              note: "Conversion rate measures landing page and offer effectiveness. Improve through optimized landing pages, clear value propositions, and frictionless checkout. This metric has the biggest impact on ROI.",
            },
          ].map((metric: { heading: string; rows: string[][]; note: string }) => (
            <div key={metric.heading} className="state-card">
              <h3>{metric.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {metric.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{metric.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── IMPROVING ROI ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Improve Email Marketing ROI
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Improving email ROI requires optimization at every stage of the funnel. Here are proven strategies to increase your email marketing returns.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Improve subject lines",
                body: "Subject lines determine open rates. Test different approaches — urgency, curiosity, personalization, and benefit-focused. Keep them under 50 characters for mobile. A/B test subject lines to find what works for your audience.",
              },
              {
                n: "2",
                title: "Segment your audience",
                body: "Segmented emails perform better than broadcasts. Segment by demographics, behavior, purchase history, and engagement level. Relevance increases open rates, CTR, and conversions. Send the right message to the right audience.",
              },
              {
                n: "3",
                title: "Optimize send timing",
                body: "Send times impact open rates. Test different days and times to find when your audience is most responsive. B2B often performs best mid-week mornings. B2C may perform better evenings and weekends. Use data, not assumptions.",
              },
              {
                n: "4",
                title: "Improve email content",
                body: "Clear, compelling content drives clicks. Use scannable formatting, strong CTAs, and relevant offers. Personalize content based on subscriber data. Test different content approaches to optimize performance.",
              },
              {
                n: "5",
                title: "Optimize landing pages",
                body: "The landing page determines conversion rate. Ensure message match, clear value proposition, simple forms, and mobile optimization. Small landing page improvements significantly impact ROI.",
              },
              {
                n: "6",
                title: "Clean your email list",
                body: "Remove inactive subscribers to improve deliverability and open rates. Regular list cleaning improves sender reputation and ensures metrics reflect engaged audiences. Quality over quantity.",
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

        {/* ── ROI BENCHMARKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Email Marketing ROI Benchmarks
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            ROI varies by industry, list quality, and offer type. Understanding benchmarks helps assess your performance and set realistic goals.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">ROI Range</th>
                <th className="dark:text-slate-100">Performance Level</th>
                <th className="dark:text-slate-100">Characteristics</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Below 100%", "Poor", "Campaign costs exceed revenue"],
                ["100-200%", "Below Average", "Break-even to modest profit"],
                ["200-400%", "Good", "Healthy return on investment"],
                ["400-600%", "Excellent", "Highly effective campaigns"],
                ["Above 600%", "Outstanding", "Exceptional performance"],
              ].map(([range, level, characteristics]) => (
                <tr key={range}>
                  <td className="dark:text-slate-100">{range}</td>
                  <td className="dark:text-slate-100">{level}</td>
                  <td className="dark:text-slate-100">{characteristics}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Email marketing typically delivers 300-400% ROI for well-executed campaigns. Anything above 400% is excellent. Below 200% indicates need for optimization in list quality, content, or offer.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Email Marketing ROI Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Many email campaigns underperform due to common mistakes. Here's what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Not tracking ROI",
                body: "Focusing on open rates without tracking revenue means missing the big picture. ROI is the ultimate metric. Track revenue, costs, and ROI for every campaign to understand true performance.",
              },
              {
                n: "2",
                title: "Sending to unsegmented lists",
                body: "Broadcasting to entire lists reduces relevance and performance. Segment by behavior, demographics, and engagement. Segmented campaigns consistently outperform one-size-fits-all broadcasts.",
              },
              {
                n: "3",
                title: "Ignoring mobile optimization",
                body: "Over 50% of emails are opened on mobile. If your emails don't render well on mobile, you lose half your audience. Use responsive design and test on mobile devices.",
              },
              {
                n: "4",
                title: "Not A/B testing",
                body: "Assuming what works without testing leads to missed opportunities. A/B test subject lines, content, send times, and offers. Continuous testing identifies what drives ROI.",
              },
              {
                n: "5",
                title: "Neglecting list hygiene",
                body: "Sending to inactive subscribers hurts deliverability and skews metrics. Regularly remove inactive subscribers. Clean lists improve sender reputation and open rates.",
              },
              {
                n: "6",
                title: "Not including clear CTAs",
                body: "Unclear calls-to-action reduce click-through rates. Use clear, action-oriented CTAs with buttons. Make it obvious what you want subscribers to do next.",
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
            Practical Tips for Email Marketing ROI
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — track ROI by campaign</>],
              [<><strong>Track all costs</strong> — tools, creative, labor</>],
              [<><strong>Segment your audience</strong> — relevance drives results</>],
              [<><strong>A/B test consistently</strong> — subject lines, content, timing</>],
              [<><strong>Optimize for mobile</strong> — half of opens on mobile</>],
              [<><strong>Clean your list</strong> — remove inactive subscribers</>],
              [<><strong>Focus on conversion</strong> — not just opens and clicks</>],
              [<><strong>Test landing pages</strong> — optimize for conversions</>],
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
                q: "How do I calculate email marketing ROI?",
                a: "ROI = ((Revenue - Cost) / Cost) × 100. Include all campaign costs: email platform fees, creative production, and labor. The calculator above automates this calculation and helps track ROI over time.",
              },
              {
                q: "What is a good email marketing ROI?",
                a: "Good email marketing ROI is typically 300-400%. Anything above 400% is excellent. ROI below 200% indicates need for optimization. Email marketing generally delivers higher ROI than other channels due to low costs.",
              },
              {
                q: "What is a good email open rate?",
                a: "Good open rates vary by industry: B2B typically 15-25%, B2C 20-30%. Open rates depend on subject lines, sender reputation, and list quality. Focus on improving subject lines and list hygiene to increase opens.",
              },
              {
                q: "How can I improve my email open rate?",
                a: "Improve subject lines through A/B testing, optimize send times, segment your audience for relevance, maintain good sender reputation through list hygiene, and personalize subject lines when possible.",
              },
              {
                q: "What is email click-through rate?",
                a: "CTR = Clicks / Opens × 100. It measures how many people who opened the email clicked a link. Good CTR is 2-5% for B2B, 3-8% for B2C. CTR depends on content relevance and CTA clarity.",
              },
              {
                q: "How often should I send marketing emails?",
                a: "Frequency depends on your audience and content value. B2B typically 1-2 times weekly. B2C can be 2-4 times weekly. Test frequency to find the balance between engagement and unsubscribe rates.",
              },
              {
                q: "Should I buy email lists?",
                a: "No, buying email lists is ineffective and can damage your sender reputation. Build your list organically through website signups, lead magnets, and customer opt-ins. Organic lists have higher engagement and better ROI.",
              },
              {
                q: "How do I calculate email conversion rate?",
                a: "Conversion Rate = Conversions / Clicks × 100. It measures how many people who clicked took the desired action. Conversion rates vary by offer but typically range 1-5%. Optimize landing pages to improve conversions.",
              },
              {
                q: "What costs should I include in ROI calculation?",
                a: "Include email platform fees, creative production costs, labor hours, any software tools, and advertising if promoting the email. Comprehensive cost tracking ensures accurate ROI measurement.",
              },
              {
                q: "How does list segmentation affect ROI?",
                a: "Segmented emails typically deliver 2-3x higher ROI than broadcasts. Segmentation increases relevance, which improves open rates, CTR, and conversions. Segment by behavior, demographics, and engagement level.",
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
            Email marketing ROI is the ultimate measure of campaign success. Understanding ROI, tracking key metrics, and continuously optimizing your email strategy ensures maximum return on your marketing investment.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you calculate ROI and understand campaign performance. But the real value comes from continuous optimization — testing subject lines, segmenting audiences, and improving conversion funnels.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're building a new email program or optimizing an existing one, accurate ROI calculation provides the clarity needed to make data-driven decisions. Focus on relevance, test relentlessly, and maximize your email marketing returns.
          </p>
          <div className="pull-quote mt-8">
            Email marketing delivers the highest ROI of any channel when done right. Optimize every element of your campaigns, and watch your returns compound.
          </div>
        </section>

      </div>
    </article>
  );
}
