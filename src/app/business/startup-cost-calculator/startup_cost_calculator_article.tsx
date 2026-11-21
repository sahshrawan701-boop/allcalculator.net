import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function StartupCostCalculatorArticle() {
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
          <span className="meta-tag">Business · Startup Planning</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Startup Cost Calculator: Calculate Startup Costs
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for startup cost estimation and planning
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You're planning to launch a software startup. Your one-time startup costs include $10,000 for legal formation, $15,000 for website development, $5,000 for equipment, and $20,000 for initial inventory. Your monthly recurring costs include $8,000 for salaries, $2,000 for office space, $1,000 for software subscriptions, and $500 for marketing. Total startup costs are $50,000 one-time plus $11,500 monthly. With $100,000 in savings, you have 4.3 months of runway before needing revenue or funding.
          </p>
          <p className="mb-5">
            Startup costs are the expenses incurred to launch a new business. These include one-time costs like legal fees, equipment, and initial inventory, plus recurring costs like rent, salaries, and utilities. Accurately estimating startup costs is essential for budgeting and securing funding.
          </p>
          <p className="mb-5">
            But startup costs vary significantly by business type, location, and scale. Understanding the different cost categories, how to estimate them accurately, and strategies to reduce costs helps launch efficiently and extend runway.
          </p>
          <p>
            The startup cost calculator above helps you estimate one-time and recurring startup costs.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Startup Cost Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Startup costs are categorized as one-time costs (incurred once at launch) and recurring costs (ongoing monthly or annual expenses). Total startup costs are the sum of one-time costs plus recurring costs for the initial period until revenue starts.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Total Startup Cost Formula:
          </p>
          <div className="formula-block">
            <pre>Total Startup Cost = One-Time Costs + (Monthly Recurring Costs × Months Until Revenue)</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["One-Time Costs", "$10,000 + $15,000 + $5,000 + $20,000 = $50,000"],
              ["Monthly Recurring", "$8,000 + $2,000 + $1,000 + $500 = $11,500"],
              ["Months Until Revenue", "4 months"],
              ["Recurring Costs", "$11,500 × 4 = $46,000"],
              ["Total Startup Cost", "$50,000 + $46,000 = $96,000"],
              ["Available Capital", "$100,000"],
              ["Remaining Runway", "$100,000 - $96,000 = $4,000"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, total startup costs are $96,000 for 4 months of operations. With $100,000 capital, you have $4,000 buffer. This demonstrates the importance of accurate cost estimation and having adequate capital.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── COST CATEGORIES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Startup Cost Categories
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Startup costs fall into distinct categories. Understanding each category helps ensure comprehensive cost estimation.
          </p>

          {[
            {
              heading: "One-Time Costs",
              rows: [
                ["Legal Formation", "$500-$5,000"],
                ["Website Development", "$5,000-$50,000"],
                ["Equipment", "$2,000-$50,000"],
                ["Initial Inventory", "$5,000-$100,000"],
              ],
              note: "One-time costs are incurred only at startup. These include legal fees, initial development, equipment purchases, and initial inventory. These costs don't recur but are essential to launch.",
            },
            {
              heading: "Recurring Costs",
              rows: [
                ["Rent/Office", "$500-$5,000/month"],
                ["Salaries", "$5,000-$50,000/month"],
                ["Software/Subscriptions", "$100-$2,000/month"],
                ["Marketing", "$500-$10,000/month"],
              ],
              note: "Recurring costs are ongoing monthly or annual expenses. These include rent, salaries, software subscriptions, marketing, and utilities. These continue after launch and must be covered by revenue.",
            },
          ].map((category: { heading: string; rows: string[][]; note: string }) => (
            <div key={category.heading} className="state-card">
              <h3>{category.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {category.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{category.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── COSTS BY BUSINESS TYPE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Typical Startup Costs by Business Type
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Startup costs vary significantly by business type. Understanding typical costs for your business type helps set realistic expectations.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Business Type</th>
                <th className="dark:text-slate-100">One-Time Costs</th>
                <th className="dark:text-slate-100">Monthly Recurring</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Online Business", "$5,000-$20,000", "$500-$3,000"],
                ["Service Business", "$2,000-$15,000", "$1,000-$5,000"],
                ["Retail Store", "$20,000-$100,000", "$3,000-$15,000"],
                ["Restaurant", "$50,000-$500,000", "$10,000-$50,000"],
                ["Manufacturing", "$25,000-$200,000", "$5,000-$30,000"],
                ["Software/SaaS", "$10,000-$100,000", "$2,000-$20,000"],
              ].map(([type, oneTime, recurring]) => (
                <tr key={type}>
                  <td className="dark:text-slate-100">{type}</td>
                  <td className="dark:text-slate-100">{oneTime}</td>
                  <td className="dark:text-slate-100">{recurring}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Online and service businesses have lower startup costs. Retail and restaurants have higher costs due to physical space and inventory. Software businesses have moderate costs with high recurring development expenses.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── REDUCING COSTS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Reduce Startup Costs
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Reducing startup costs extends runway and reduces financial risk. Here are proven strategies to launch efficiently.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Start lean",
                body: "Launch with minimum viable product (MVP). Focus on core features and defer nice-to-haves. Lean startup reduces initial investment and validates demand before scaling.",
              },
              {
                n: "2",
                title: "Work from home",
                body: "Avoid office rent by working from home initially. Coworking spaces offer flexibility when needed. Remote work significantly reduces fixed costs.",
              },
              {
                n: "3",
                title: "Use freelancers",
                body: "Use freelancers or contractors instead of full-time employees initially. Provides flexibility and reduces fixed salary costs. Scale hiring as revenue grows.",
              },
              {
                n: "4",
                title: "Negotiate everything",
                body: "Negotiate with vendors, landlords, and service providers. Many costs are negotiable, especially for new businesses. Negotiation can save thousands.",
              },
              {
                n: "5",
                title: "Buy used equipment",
                body: "Purchase used equipment and furniture instead of new. Significant savings with minimal impact on operations. Used equipment is often 50-70% cheaper.",
              },
              {
                n: "6",
                title: "Use free software",
                body: "Use free or low-cost software alternatives initially. Many tools have free tiers for startups. Upgrade to paid versions as needs grow.",
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

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Startup Cost Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Many entrepreneurs underestimate startup costs or misallocate resources. Here's what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Underestimating costs",
                body: "Optimistic cost estimates lead to shortfalls. Add 20-30% buffer to all estimates. It's better to overestimate and have surplus than underestimate and run out of cash.",
              },
              {
                n: "2",
                title: "Ignoring hidden costs",
                body: "Hidden costs like permits, insurance, and taxes are often overlooked. Research all potential costs thoroughly. Hidden costs can add 20-50% to estimates.",
              },
              {
                n: "3",
                title: "Overinvesting early",
                body: "Spending too much on non-essentials early wastes capital. Focus spending on revenue-generating activities. Defer nice-to-haves until revenue validates the business.",
              },
              {
                n: "4",
                title: "Not planning for delays",
                body: "Launch delays increase costs. Build in buffer for unexpected delays. Most startups take longer than expected to launch and generate revenue.",
              },
              {
                n: "5",
                title: "Mixing personal and business",
                body: "Mixing personal and business finances causes problems. Separate accounts from day one. Clear separation simplifies accounting and tax preparation.",
              },
              {
                n: "6",
                title: "Not tracking actuals",
                body: "Not tracking actual spending against estimates leads to surprises. Track spending in real-time and compare to budget. Adjust plans as needed based on actuals.",
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
            Practical Tips for Startup Cost Planning
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — estimate costs comprehensively</>],
              [<><strong>Add buffer</strong> — 20-30% contingency</>],
              [<><strong>Research thoroughly</strong> — all cost categories</>],
              [<><strong>Start lean</strong> — MVP approach</>],
              [<><strong>Track actuals</strong> — vs estimates</>],
              [<><strong>Negotiate everything</strong> — reduce costs</>],
              [<><strong>Separate finances</strong> — business accounts</>],
              [<><strong>Plan for delays</strong> — timeline buffer</>],
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
                q: "How do I calculate startup costs?",
                a: "Startup Costs = One-Time Costs + (Monthly Recurring Costs × Months Until Revenue). Include all categories: legal, equipment, inventory, rent, salaries, marketing, and utilities. The calculator above helps estimate these costs.",
              },
              {
                q: "What are typical startup costs?",
                a: "Startup costs vary by business type: Online $5,000-$20,000, Service $2,000-$15,000, Retail $20,000-$100,000, Restaurant $50,000-$500,000. Research your specific business type for accurate estimates.",
              },
              {
                q: "How much buffer should I add?",
                a: "Add 20-30% buffer to all cost estimates. Startups often face unexpected costs and delays. Buffer provides cushion for the unknown and prevents running out of cash.",
              },
              {
                q: "What are one-time vs recurring costs?",
                a: "One-time costs are incurred once at launch: legal fees, equipment, initial inventory. Recurring costs are ongoing: rent, salaries, utilities, subscriptions. Both must be estimated for accurate planning.",
              },
              {
                q: "How can I reduce startup costs?",
                a: "Start lean with MVP, work from home, use freelancers, negotiate with vendors, buy used equipment, and use free software. Focus spending on revenue-generating activities.",
              },
              {
                q: "How long until I need revenue?",
                a: "Calculate runway: Available Capital / Monthly Burn Rate. If you have $100,000 and $10,000 monthly burn, you have 10 months. Plan to generate revenue before runway expires.",
              },
              {
                q: "Should I bootstrap or seek funding?",
                a: "Bootstrap if costs are low and you can self-fund. Seek funding if costs are high or growth requires significant capital. Consider control dilution, repayment terms, and business model.",
              },
              {
                q: "What hidden costs should I expect?",
                a: "Hidden costs include permits, licenses, insurance, taxes, legal fees, accounting, and unexpected delays. Research thoroughly and add buffer for unknown costs.",
              },
              {
                q: "How do I track startup costs?",
                a: "Use accounting software or spreadsheets to track all expenses. Categorize as one-time or recurring. Compare actual spending to estimates monthly. Adjust plans based on actuals.",
              },
              {
                q: "When should I start spending?",
                a: "Start spending only when necessary for launch. Avoid pre-launch spending that doesn't directly contribute to launch. Time spending to maximize runway and minimize waste.",
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
            Accurate startup cost estimation is essential for successful launch and survival. Understanding cost categories, adding appropriate buffers, and planning for contingencies helps ensure adequate capital and extends runway.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you estimate startup costs comprehensively. But the real value comes from using this information to secure adequate funding, plan spending strategically, and launch efficiently.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're bootstrapping or seeking funding, accurate cost planning provides the foundation for startup success. Estimate precisely, spend wisely, and build sustainably.
          </p>
          <div className="pull-quote mt-8">
            Startup costs are not just expenses — they're investments in your future. Plan carefully, spend strategically, and build a business that lasts.
          </div>
        </section>

      </div>
    </article>
  );
}
