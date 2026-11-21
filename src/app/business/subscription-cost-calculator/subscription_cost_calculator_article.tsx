import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function SubscriptionCostCalculatorArticle() {
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
          <span className="meta-tag">Business · Personal Finance</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Subscription Cost Calculator: Calculate Total Subscription Costs
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for subscription cost analysis and management
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You have 10 monthly subscriptions: Netflix ($15), Spotify ($10), Adobe Creative Cloud ($55), Microsoft 365 ($12), Dropbox ($10), Amazon Prime ($15), gym membership ($50), cloud storage ($20), news subscription ($20), and music production software ($30). Your total monthly subscription cost is $237. Annually, this amounts to $2,844. If you cancel unused subscriptions like the gym ($50) and news subscription ($20), you could save $70 monthly or $840 annually.
          </p>
          <p className="mb-5">
            Subscription costs are recurring expenses for services like streaming, software, memberships, and more. These costs can accumulate significantly over time. Understanding your total subscription spending helps with budgeting and identifying savings opportunities.
          </p>
          <p className="mb-5">
            But subscription costs are often overlooked because they're automatic and small individually. Understanding how to track subscriptions, calculate total costs, and optimize spending helps reduce waste and improve financial health.
          </p>
          <p>
            The subscription cost calculator above helps you calculate total subscription costs and identify savings opportunities.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Subscription Cost Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Subscription costs are calculated by summing all recurring subscription payments. Costs can be monthly, annual, or other periods. Converting all costs to a common period (monthly or annual) provides a clear picture of total spending.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Total Subscription Cost Formula:
          </p>
          <div className="formula-block">
            <pre>Total Cost = Sum of All Subscription Payments</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Netflix", "$15/month"],
              ["Spotify", "$10/month"],
              ["Adobe CC", "$55/month"],
              ["Microsoft 365", "$12/month"],
              ["Dropbox", "$10/month"],
              ["Amazon Prime", "$15/month"],
              ["Gym", "$50/month"],
              ["Cloud Storage", "$20/month"],
              ["News", "$20/month"],
              ["Music Software", "$30/month"],
              ["Total Monthly", "$237/month"],
              ["Total Annual", "$237 × 12 = $2,844/year"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, total subscription spending is $237 monthly or $2,844 annually. This represents significant recurring expense. Regularly reviewing subscriptions can identify savings opportunities.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── SUBSCRIPTION CATEGORIES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Subscription Categories
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Subscriptions fall into various categories. Understanding categories helps organize and analyze spending patterns.
          </p>

          {[
            {
              heading: "Entertainment",
              rows: [
                ["Streaming Services", "$10-$20/month"],
                ["Music Services", "$10-$15/month"],
                ["Gaming Services", "$10-$30/month"],
              ],
              note: "Entertainment subscriptions include streaming platforms like Netflix, music services like Spotify, and gaming services. These are often discretionary and good candidates for cost reduction.",
            },
            {
              heading: "Productivity",
              rows: [
                ["Software Suites", "$10-$60/month"],
                ["Cloud Storage", "$5-$30/month"],
                ["Communication Tools", "$5-$20/month"],
              ],
              note: "Productivity subscriptions include software like Microsoft 365, Adobe Creative Cloud, cloud storage, and communication tools. These may be essential for work but should be reviewed for necessity.",
            },
            {
              heading: "Lifestyle",
              rows: [
                ["Fitness Memberships", "$20-$100/month"],
                ["Food Delivery", "$10-$30/month"],
                ["Shopping Memberships", "$10-$15/month"],
              ],
              note: "Lifestyle subscriptions include gym memberships, food delivery services, and shopping memberships like Amazon Prime. These provide convenience but can add up quickly.",
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

        {/* ── REDUCING COSTS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Reduce Subscription Costs
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Reducing subscription costs frees up cash for other priorities. Here are proven strategies to optimize subscription spending.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Audit all subscriptions",
                body: "List all subscriptions and their costs. Check bank statements and credit card statements for automatic charges. Many people have subscriptions they've forgotten about.",
              },
              {
                n: "2",
                title: "Cancel unused subscriptions",
                body: "Cancel subscriptions you don't use or rarely use. Even small unused subscriptions add up over time. Be ruthless about eliminating unused services.",
              },
              {
                n: "3",
                title: "Share family plans",
                body: "Many services offer family plans that are cheaper per person. Share with family members to reduce individual costs. Family plans often save 30-50%.",
              },
              {
                n: "4",
                title: "Switch to annual billing",
                body: "Annual billing often offers discounts (10-20%). If you'll keep the service, pay annually to save. Ensure you'll use the service for the full year.",
              },
              {
                n: "5",
                title: "Negotiate or switch plans",
                body: "Contact providers to negotiate better rates or switch to lower-tier plans. Many providers offer retention deals. Downgrade plans if you don't need premium features.",
              },
              {
                n: "6",
                title: "Use free alternatives",
                body: "Consider free alternatives for some services. Many free options exist for productivity, storage, and entertainment. Switch to free when possible.",
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

        {/* ── TRACKING ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Track Subscriptions
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Effective subscription tracking prevents forgotten charges and enables cost optimization. Here are methods to track subscriptions.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Use dedicated cards",
                body: "Use a dedicated credit or debit card for all subscriptions. This consolidates charges in one place for easy tracking. Review statements monthly.",
              },
              {
                n: "2",
                title: "Set up alerts",
                body: "Set up banking alerts for recurring charges. Many banks notify you of automatic charges. Alerts help identify unexpected or forgotten subscriptions.",
              },
              {
                n: "3",
                title: "Use subscription management apps",
                body: "Apps like Truebill, Trim, or Bobby track subscriptions automatically. They identify subscriptions and can help cancel unused ones. Automation simplifies tracking.",
              },
              {
                n: "4",
                title: "Maintain a spreadsheet",
                body: "Track subscriptions in a spreadsheet with service name, cost, billing date, and renewal date. Update regularly. Manual tracking provides visibility and control.",
              },
              {
                n: "5",
                title: "Calendar reminders",
                body: "Set calendar reminders for subscription renewal dates. This provides opportunity to evaluate before automatic renewal. Prevents unexpected charges.",
              },
              {
                n: "6",
                title: "Review monthly",
                body: "Review all subscriptions monthly. Assess usage and value. Cancel or downgrade as needed. Regular review prevents subscription creep.",
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
            Common Subscription Cost Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Many people overspend on subscriptions due to common errors. Here's what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Forgetting about subscriptions",
                body: "Automatic charges make subscriptions easy to forget. Forgotten subscriptions continue charging even when unused. Regular auditing prevents this waste.",
              },
              {
                n: "2",
                title: "Not calculating total cost",
                body: "Individual subscriptions seem small, but total can be significant. Calculate total monthly and annual costs to understand true spending impact.",
              },
              {
                n: "3",
                title: "Paying for unused services",
                body: "Many people pay for subscriptions they rarely use. Cancel unused services immediately. Only pay for services you actively use and value.",
              },
              {
                n: "4",
                title: "Ignoring free trials",
                body: "Free trials automatically convert to paid subscriptions. Set reminders to cancel before trials end. Read terms carefully before signing up.",
              },
              {
                n: "5",
                title: "Not sharing family plans",
                body: "Paying individually when family plans are available wastes money. Share family plans when possible to reduce per-person costs.",
              },
              {
                n: "6",
                title: "Failing to negotiate",
                body: "Many providers offer discounts for loyal customers or when threatening to cancel. Don't accept list price without attempting to negotiate.",
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
            Practical Tips for Subscription Management
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — calculate total costs</>],
              [<><strong>Audit regularly</strong> — monthly review</>],
              [<><strong>Cancel unused</strong> — eliminate waste</>],
              [<><strong>Share family plans</strong> — reduce costs</>],
              [<><strong>Use annual billing</strong> — save 10-20%</>],
              [<><strong>Track with dedicated card</strong> — consolidate charges</>],
              [<><strong>Set renewal reminders</strong> — evaluate before auto-renew</>],
              [<><strong>Consider free alternatives</strong> — when possible</>],
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
                q: "How do I calculate subscription costs?",
                a: "Sum all recurring subscription payments. Convert to common period (monthly or annual). For example, $15 Netflix + $10 Spotify + $55 Adobe = $80 monthly. Annual cost = $80 × 12 = $960.",
              },
              {
                q: "How much does the average person spend on subscriptions?",
                a: "Average subscription spending varies but is typically $100-$300 monthly. Streaming, software, and memberships are common categories. Track your actual spending to understand your personal total.",
              },
              {
                q: "How can I find forgotten subscriptions?",
                a: "Review bank and credit card statements for recurring charges. Use subscription management apps. Check email for subscription confirmations. Dedicated cards make tracking easier.",
              },
              {
                q: "Should I use monthly or annual billing?",
                a: "Annual billing typically offers 10-20% discounts. Use annual if you'll keep the service for the full year. Use monthly for new services you might cancel quickly.",
              },
              {
                q: "How do I cancel subscriptions?",
                a: "Cancel through the service's website or app, or contact customer service. Some services make cancellation difficult. Use subscription management apps for assistance. Cancel before renewal dates.",
              },
              {
                q: "What are subscription management apps?",
                a: "Apps like Truebill, Trim, Bobby, and SubscriptMe track subscriptions automatically. They identify charges, help cancel unused services, and find savings. Useful for managing multiple subscriptions.",
              },
              {
                q: "How do I share family plans?",
                a: "Most services allow family plan sharing with household members. Add family members through account settings. Family plans typically cost 2-3x individual but support 4-6 people.",
              },
              {
                q: "What should I do with free trials?",
                a: "Set calendar reminders to cancel before trial ends. Read terms to understand auto-renewal policies. Only convert to paid if you'll use and value the service.",
              },
              {
                q: "How often should I review subscriptions?",
                a: "Review subscriptions monthly. Assess usage and value for each service. Cancel or downgrade unused or underutilized services. Regular review prevents subscription creep.",
              },
              {
                q: "Can I negotiate subscription prices?",
                a: "Yes, many providers offer discounts to retain customers. Contact customer service and mention considering cancellation. Loyalty discounts and promotional rates are often available.",
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
            Subscription costs can accumulate significantly over time. Understanding your total subscription spending, regularly auditing services, and optimizing spending helps reduce waste and improve financial health.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you calculate total subscription costs. But the real value comes from using this information to identify savings opportunities, cancel unused services, and optimize your spending.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're managing personal subscriptions or business software licenses, tracking and optimizing subscription spending frees up cash for what matters most. Track precisely, review regularly, and spend intentionally.
          </p>
          <div className="pull-quote mt-8">
            Subscription costs are silent budget killers. Track them diligently, eliminate waste, and redirect your money toward your goals.
          </div>
        </section>

      </div>
    </article>
  );
}
