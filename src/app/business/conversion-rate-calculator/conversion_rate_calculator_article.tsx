import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function ConversionRateArticle() {
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
            Conversion Rate Calculator: Measure Your Marketing Effectiveness
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for marketers and business owners
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Your landing page receives 10,000 visitors. 200 of them complete your signup form. Your conversion rate is 2%. If you improve that to 3% through better copy and design, you'll gain 100 additional signups without increasing traffic. At $50 per customer value, that's $5,000 in additional revenue from the same traffic.
          </p>
          <p className="mb-5">
            Conversion rate is the percentage of visitors who take a desired action — signing up, purchasing, downloading, or any other goal. It's a fundamental metric for understanding marketing effectiveness and website performance.
          </p>
          <p className="mb-5">
            But conversion rates vary widely by industry, traffic source, and offer type. Understanding what constitutes a good conversion rate for your specific situation helps you set realistic goals and identify optimization opportunities.
          </p>
          <p>
            The conversion rate calculator above helps you measure conversion rates, calculate potential revenue impact, and understand the value of optimization efforts.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Conversion Rate Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Conversion rate is calculated by dividing the number of conversions by the total number of visitors or prospects, then multiplying by 100 to get a percentage.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Conversion Rate Formula:
          </p>
          <div className="formula-block">
            <pre>Conversion Rate = (Conversions / Total Visitors) × 100</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Total Visitors", "10,000"],
              ["Conversions (Signups)", "200"],
              ["Conversion Rate", "(200 / 10,000) × 100 = 2%"],
              ["Revenue per Conversion", "$50"],
              ["Total Revenue", "200 × $50 = $10,000"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, improving conversion rate from 2% to 3% yields 100 additional conversions. At $50 per conversion, that's $5,000 additional revenue from the same traffic. Small conversion improvements compound into significant revenue gains.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── BENCHMARKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Conversion Rate Benchmarks by Industry
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Conversion rates vary significantly by industry and conversion type. Understanding benchmarks helps you assess performance and set realistic goals.
          </p>

          {[
            {
              heading: "E-commerce",
              rows: [
                ["Product Page", "1-3%"],
                ["Add to Cart", "3-5%"],
                ["Checkout", "2-4%"],
              ],
              note: "E-commerce conversion rates are typically lower due to purchase friction. Focus on reducing checkout steps, improving product images, and providing social proof to increase conversions.",
            },
            {
              heading: "B2B SaaS",
              rows: [
                ["Free Trial Signup", "2-5%"],
                ["Demo Request", "1-3%"],
                ["Contact Form", "3-7%"],
              ],
              note: "B2B SaaS conversion rates vary by offer complexity. Free trials typically convert higher than demo requests. Clear value propositions and trust signals improve B2B conversion rates.",
            },
            {
              heading: "Lead Generation",
              rows: [
                ["Content Download", "5-10%"],
                ["Webinar Registration", "10-20%"],
                ["Newsletter Signup", "1-5%"],
              ],
              note: "Lead generation conversion rates are typically higher for low-friction offers like content downloads. High-value offers like webinars can achieve 20%+ conversion with strong promotion.",
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

        {/* ── IMPROVING CONVERSIONS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Improve Conversion Rates
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Conversion optimization is about removing friction and building trust. Small improvements in user experience, copy, and design can significantly impact conversion rates.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Simplify the conversion process",
                body: "Reduce form fields, minimize steps, and eliminate unnecessary friction. Every additional field or step reduces conversion. Ask only for essential information, and collect additional details after conversion.",
              },
              {
                n: "2",
                title: "Improve value proposition clarity",
                body: "Clearly communicate what you offer and why it matters. Use headlines that speak to customer pain points and benefits. Confused visitors don't convert — clarity drives action.",
              },
              {
                n: "3",
                title: "Add social proof and trust signals",
                body: "Testimonials, reviews, case studies, and trust badges build credibility. Visitors need reassurance before converting. Place social proof strategically near conversion points.",
              },
              {
                n: "4",
                title: "Optimize call-to-action design",
                body: "Make CTAs prominent, descriptive, and action-oriented. Use contrasting colors, clear copy, and strategic placement. Test different CTA variations to find what performs best.",
              },
              {
                n: "5",
                title: "Reduce page load time",
                body: "Slow pages kill conversions. Every second of delay reduces conversion rates. Optimize images, minimize scripts, and use caching to improve load times. Speed is a conversion factor.",
              },
              {
                n: "6",
                title: "Implement A/B testing",
                body: "Test headlines, copy, design, and CTAs systematically. Small changes can have significant impact. Continuous testing identifies what works and drives incremental improvements.",
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

        {/* ── CONVERSION FUNNEL ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Understanding Conversion Funnels
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Conversion happens through a funnel — awareness, consideration, and action. Understanding where visitors drop off helps identify optimization opportunities.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Funnel Stage</th>
                <th className="dark:text-slate-100">Metric</th>
                <th className="dark:text-slate-100">Optimization Focus</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Awareness", "Traffic sources, bounce rate", "Targeted traffic, compelling headlines"],
                ["Consideration", "Time on page, scroll depth", "Engaging content, clear value proposition"],
                ["Intent", "CTA clicks, form starts", "Strong CTAs, reduced friction"],
                ["Action", "Form completions, purchases", "Simplified process, trust signals"],
              ].map(([stage, metric, focus]) => (
                <tr key={stage}>
                  <td className="dark:text-slate-100">{stage}</td>
                  <td className="dark:text-slate-100">{metric}</td>
                  <td className="dark:text-slate-100">{focus}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Track conversion at each funnel stage to identify where visitors drop off. Focus optimization efforts on the biggest drop-off points for maximum impact. Funnel analysis reveals specific problems to address.",
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Conversion Rate Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Even experienced marketers make mistakes that hurt conversion rates. Here's what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Not defining conversion goals clearly",
                body: "Vague conversion goals lead to unclear measurement. Define specific conversion actions — signup, purchase, download — and track them consistently. Clear goals enable focused optimization.",
              },
              {
                n: "2",
                title: "Ignoring mobile optimization",
                body: "Mobile traffic often converts poorly on desktop-only designs. Ensure your conversion process works seamlessly on mobile. Mobile optimization is essential for modern conversion rates.",
              },
              {
                n: "3",
                title: "Asking for too much information",
                body: "Long forms with unnecessary fields kill conversions. Ask only for essential information initially. Collect additional details after the initial conversion through progressive profiling.",
              },
              {
                n: "4",
                title: "Not testing continuously",
                body: "One-time tests aren't enough. Consumer preferences and best practices change. Implement continuous A/B testing to maintain and improve conversion rates over time.",
              },
              {
                n: "5",
                title: "Focusing only on traffic",
                body: "More traffic doesn't help if conversion rates are low. Improving conversion rate is often more cost-effective than acquiring more traffic. Balance acquisition and optimization efforts.",
              },
              {
                n: "6",
                title: "Not segmenting conversion data",
                body: "Aggregate conversion rates hide insights. Segment by traffic source, device, location, and customer type to identify what works for different audiences. Segmentation reveals optimization opportunities.",
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
            Practical Tips for Conversion Optimization
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — track conversion rate by campaign and channel</>],
              [<><strong>Define clear goals</strong> — specific conversion actions for measurement</>],
              [<><strong>Simplify forms</strong> — reduce fields and steps</>],
              [<><strong>Improve page speed</strong> — optimize load times</>],
              [<><strong>Add social proof</strong> — testimonials, reviews, trust badges</>],
              [<><strong>Test continuously</strong> — A/B test headlines, CTAs, and design</>],
              [<><strong>Optimize for mobile</strong> — ensure mobile conversion works</>],
              [<><strong>Segment your data</strong> — analyze by source and audience</>],
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
                q: "How do I calculate conversion rate?",
                a: "Conversion Rate = (Conversions / Total Visitors) × 100. For example, if you have 200 conversions from 10,000 visitors, your conversion rate is 2%. The calculator above performs this calculation and helps you understand revenue impact.",
              },
              {
                q: "What is a good conversion rate?",
                a: "Good conversion rates vary by industry and conversion type. E-commerce typically sees 1-3% for purchases. B2B SaaS sees 2-5% for free trials. Lead generation can achieve 5-10% for content downloads. Compare to industry benchmarks, but focus on improvement over time.",
              },
              {
                q: "How can I improve my conversion rate?",
                a: "Simplify the conversion process, improve value proposition clarity, add social proof, optimize CTAs, improve page speed, and implement A/B testing. Focus on removing friction and building trust throughout the user journey.",
              },
              {
                q: "What is a conversion funnel?",
                a: "A conversion funnel represents the customer journey from awareness to action. It typically includes stages like awareness, consideration, intent, and action. Tracking conversion at each stage identifies where visitors drop off and where to focus optimization.",
              },
              {
                q: "How often should I measure conversion rate?",
                a: "Measure conversion rate continuously with real-time analytics. Review trends weekly and conduct deeper analysis monthly. Regular tracking helps identify issues quickly and measure the impact of optimization efforts.",
              },
              {
                q: "Should I focus on traffic or conversion rate?",
                a: "Balance both, but prioritize conversion rate if it's low. Improving conversion from 2% to 3% yields 50% more conversions from the same traffic. High conversion rates make acquisition more efficient and cost-effective.",
              },
              {
                q: "What is A/B testing?",
                a: "A/B testing compares two versions of a page or element to see which performs better. Test headlines, CTAs, design, and copy systematically. Continuous A/B testing drives incremental conversion improvements over time.",
              },
              {
                q: "How does mobile affect conversion rate?",
                a: "Mobile traffic often converts lower than desktop if pages aren't optimized. Ensure your conversion process works seamlessly on mobile with responsive design, fast load times, and touch-friendly interfaces. Mobile optimization is essential.",
              },
              {
                q: "What is micro-conversion?",
                a: "Micro-conversions are small steps toward the main conversion goal — clicking a CTA, starting a form, watching a video. Tracking micro-conversions helps understand engagement and identify where visitors drop off before the final conversion.",
              },
              {
                q: "How do I calculate conversion rate by channel?",
                a: "Segment your traffic by source (organic, paid, social, email) and calculate conversion rate for each segment separately. This reveals which channels deliver the best quality traffic and where to focus acquisition efforts.",
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
            Conversion rate is a fundamental metric for marketing effectiveness. Small improvements compound into significant revenue gains without increasing traffic spend. Understanding and optimizing conversion rates is essential for efficient growth.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you measure conversion rates and understand revenue impact. But the real value comes from systematic optimization — testing, learning, and continuously improving the user experience.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're optimizing landing pages, checkout flows, or lead generation forms, focus on removing friction and building trust. Conversion optimization is a continuous process of improvement that pays dividends over time.
          </p>
          <div className="pull-quote mt-8">
            The best conversion strategy combines clear value, simple processes, and continuous testing. Optimize relentlessly, and every visitor becomes more valuable.
          </div>
        </section>

      </div>
    </article>
  );
}
