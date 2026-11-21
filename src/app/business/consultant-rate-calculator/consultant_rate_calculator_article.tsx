import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function ConsultantRateArticle() {
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
          <span className="meta-tag">Business · Professional Services</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Consultant Rate Calculator: Set Your Billable Hourly Rate
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for consultants and freelancers
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You want to earn $100,000 annually as a consultant. After accounting for 2 weeks of vacation and 10 holidays, you have 2,000 billable hours available. But you'll only actually bill about 1,200 hours due to non-billable work. To hit your income goal, you need to charge $83 per hour. If you want to earn $150,000, that rate jumps to $125 per hour.
          </p>
          <p className="mb-5">
            Setting your consulting rate requires more than picking a number that sounds good. It involves calculating your target income, understanding your billable capacity, accounting for expenses, and positioning yourself in the market. Get it wrong, and you'll either price yourself out of work or burn out for insufficient pay.
          </p>
          <p className="mb-5">
            But your rate isn't static — it should evolve with your experience, expertise, and market demand. Understanding the factors that influence consulting rates helps you set appropriate pricing and negotiate confidently with clients.
          </p>
          <p>
            The consultant rate calculator above helps you determine your required hourly rate based on your income goals, expenses, and available billable hours. Use it to ensure your pricing supports your financial objectives.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Consultant Rate Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Your required hourly rate is calculated by dividing your target annual income by your billable hours. But it's not that simple — you must account for non-billable time, business expenses, and desired profit margin.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Rate Formula:
          </p>
          <div className="formula-block">
            <pre>Hourly Rate = (Target Income + Expenses) / Billable Hours</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Target Annual Income", "$100,000"],
              ["Business Expenses", "$20,000"],
              ["Total Required", "$120,000"],
              ["Total Working Hours", "2,080 (52 weeks × 40 hours)"],
              ["Billable Percentage", "60%"],
              ["Billable Hours", "1,248 hours"],
              ["Required Hourly Rate", "$120,000 / 1,248 = $96/hour"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, you need to charge $96 per hour to achieve your income goal. If you only bill 50% of your time, the rate jumps to $115 per hour. Understanding your actual billable percentage is critical for accurate rate calculation.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── BILLABLE HOURS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Understanding Billable Hours
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Not all working hours are billable. Marketing, administration, professional development, and business development consume significant time. Understanding your actual billable percentage is essential for accurate rate calculation.
          </p>

          {[
            {
              heading: "High Billable Percentage (70-80%)",
              rows: [
                ["Characteristics", "Minimal non-billable work, established client base"],
                ["Typical For", "Specialized consultants with recurring clients"],
                ["Rate Implication", "Lower hourly rate needed to hit income goals"],
              ],
              note: "High billable percentages are achievable for established consultants with steady client relationships and minimal business development needs. This allows lower hourly rates while maintaining target income.",
            },
            {
              heading: "Medium Billable Percentage (50-70%)",
              rows: [
                ["Characteristics", "Mix of billable and non-billable work"],
                ["Typical For", "Most independent consultants"],
                ["Rate Implication", "Moderate hourly rate required"],
              ],
              note: "Most consultants fall in this range. Balancing client work with business development, marketing, and administration is normal. Rates must account for this non-billable time to achieve income goals.",
            },
            {
              heading: "Low Billable Percentage (30-50%)",
              rows: [
                ["Characteristics", "Significant non-billable time, active business building"],
                ["Typical For", "New consultants, those expanding services"],
                ["Rate Implication", "Higher hourly rate needed to compensate"],
              ],
              note: "New consultants or those expanding into new areas spend more time on business development. Higher rates compensate for lower billable hours. As client base grows, billable percentage typically increases.",
            },
          ].map((scenario: { heading: string; rows: string[][]; note: string }) => (
            <div key={scenario.heading} className="state-card">
              <h3>{scenario.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {scenario.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{scenario.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── RATE FACTORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors That Influence Consulting Rates
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Your rate should reflect your value, not just your income needs. Multiple factors influence what clients will pay and what you should charge.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Experience and expertise",
                body: "Senior consultants with specialized expertise command higher rates. Years of experience, industry knowledge, and proven results justify premium pricing. Junior consultants may start lower but should increase rates as expertise grows.",
              },
              {
                n: "2",
                title: "Industry and specialization",
                body: "Some industries pay higher consulting rates due to complexity, regulation, or value delivered. Specialized expertise in high-value areas like technology, healthcare, or finance commands premium rates.",
              },
              {
                n: "3",
                title: "Project scope and duration",
                body: "Longer engagements often justify lower hourly rates through volume discounts. Short-term, high-impact projects may command premium rates. Consider total project value rather than just hourly rate.",
              },
              {
                n: "4",
                title: "Client size and budget",
                body: "Enterprise clients typically have larger budgets and expect higher rates. Small businesses may have budget constraints but often value personalized service. Adjust your approach based on client context.",
              },
              {
                n: "5",
                title: "Geographic location",
                body: "Rates vary by location and cost of living. Major cities and tech hubs typically support higher rates. Remote work allows accessing higher-rate markets regardless of location.",
              },
              {
                n: "6",
                title: "Demand and availability",
                body: "High demand and limited availability justify premium rates. If you're fully booked, raising rates filters clients and increases income. Low availability signals value and justifies higher pricing.",
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

        {/* ── PRICING MODELS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Consulting Pricing Models
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Hourly billing is common but not the only option. Different pricing models suit different situations and client preferences.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Model</th>
                <th className="dark:text-slate-100">Best For</th>
                <th className="dark:text-slate-100">Pros</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Hourly Rate", "Variable scope, ongoing work", "Flexible, simple to implement"],
                ["Project Fee", "Defined scope, fixed deliverables", "Predictable costs, outcome-focused"],
                ["Retainer", "Ongoing advisory, availability", "Stable income, client commitment"],
                ["Value-Based", "High-impact, measurable outcomes", "Aligns incentives, higher potential"],
              ].map(([model, best, pros]) => (
                <tr key={model}>
                  <td className="dark:text-slate-100">{model}</td>
                  <td className="dark:text-slate-100">{best}</td>
                  <td className="dark:text-slate-100">{pros}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Consider offering multiple pricing options. Some clients prefer the predictability of project fees, while others want the flexibility of hourly billing. Value-based pricing can significantly increase earnings for high-impact work.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Consultant Pricing Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Even experienced consultants make pricing mistakes that cost income or damage client relationships. Here's what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Underestimating non-billable time",
                body: "Assuming 80% billable time when reality is 50% leads to underpricing. Track your actual time for several weeks to understand your true billable percentage. Use real data, not optimistic estimates.",
              },
              {
                n: "2",
                title: "Not accounting for all expenses",
                body: "Forgetting business expenses like software, insurance, marketing, and professional development leads to rates that don't cover actual costs. Include all business expenses in rate calculations.",
              },
              {
                n: "3",
                title: "Setting rates based on competitors",
                body: "Competitor rates provide context but shouldn't determine your pricing. Your value, expertise, and costs are unique. Price based on your value, not market averages.",
              },
              {
                n: "4",
                title: "Not raising rates regularly",
                body: "Failing to increase rates as you gain experience leaves money on the table. Review and adjust rates annually. Regular small increases are easier than large jumps.",
              },
              {
                n: "5",
                title: "Being afraid to discuss money",
                body: "Hesitation to discuss rates signals insecurity. Discuss pricing confidently and transparently. Clear communication about rates prevents misunderstandings and builds trust.",
              },
              {
                n: "6",
                title: "Offering discounts too readily",
                body: "Quick discounts devalue your services. Only offer discounts for legitimate reasons like long-term commitments or volume. Position discounts strategically rather than giving them away.",
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
            Practical Tips for Setting Consultant Rates
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — calculate your required rate based on goals</>],
              [<><strong>Track your time</strong> — understand your actual billable percentage</>],
              [<><strong>Include all expenses</strong> — business costs, insurance, taxes, benefits</>],
              [<><strong>Research market rates</strong> — understand industry benchmarks</>],
              [<><strong>Consider value delivered</strong> — price based on impact, not just hours</>],
              [<><strong>Review annually</strong> — adjust rates as experience grows</>],
              [<><strong>Offer multiple models</strong> — hourly, project, retainer options</>],
              [<><strong>Communicate confidently</strong> — discuss rates without hesitation</>],
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
                q: "How do I calculate my consulting rate?",
                a: "Calculate your required annual income including salary, business expenses, taxes, and profit margin. Divide by your estimated billable hours (typically 50-70% of total working hours). The calculator above automates this calculation.",
              },
              {
                q: "What is a typical consulting hourly rate?",
                a: "Consulting rates vary widely by industry, experience, and location. Junior consultants typically charge $50-100/hour. Mid-level consultants charge $100-200/hour. Senior specialists may charge $200-500+/hour. Focus on your value rather than averages.",
              },
              {
                q: "What percentage of hours should be billable?",
                a: "Most consultants bill 50-70% of their time. The remainder goes to business development, marketing, administration, and professional development. Track your actual time to understand your billable percentage and price accordingly.",
              },
              {
                q: "How often should I raise my rates?",
                a: "Review and potentially raise your rates annually. As you gain experience, expertise, and client testimonials, your value increases. Regular small increases (5-10%) are easier to implement than large jumps.",
              },
              {
                q: "Should I charge hourly or by project?",
                a: "Both models have merits. Hourly billing works well for variable scope or ongoing work. Project fees suit defined deliverables and provide predictability. Consider offering both options to accommodate client preferences.",
              },
              {
                q: "How do I justify higher rates to clients?",
                a: "Focus on value delivered, not hours worked. Demonstrate ROI, show case studies, highlight specialized expertise, and explain how your work solves expensive problems. Value-based pricing justifies premium rates.",
              },
              {
                q: "What expenses should I include in rate calculation?",
                a: "Include all business expenses: software and tools, insurance, marketing, professional development, legal and accounting services, equipment, and home office costs. Don't forget self-employment taxes and benefits.",
              },
              {
                q: "Should I offer discounts?",
                a: "Offer discounts strategically for legitimate reasons like long-term commitments, volume work, or non-profit clients. Avoid discounting out of fear or habit. Position discounts as special arrangements rather than standard practice.",
              },
              {
                q: "How do I handle rate increases with existing clients?",
                a: "Provide advance notice (30-60 days), explain the reason (increased expertise, market rates), and offer options. Most clients accept reasonable increases if communicated professionally. Grandfathering existing clients for a period is common.",
              },
              {
                q: "What's the difference between rate and effective rate?",
                a: "Your stated rate is what you charge per hour. Your effective rate is what you actually earn after accounting for non-billable time. If you charge $100/hour but only bill 50% of time, your effective rate is $50/hour. Focus on effective rate for income planning.",
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
            Setting your consulting rate is both a mathematical calculation and a strategic decision. Understanding your costs, billable capacity, and market value ensures your pricing supports your financial goals while remaining competitive.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you determine your required rate based on income goals and billable hours. But the real value comes from understanding your unique value proposition and pricing confidently based on the results you deliver.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're new to consulting or an established professional, regular rate review and adjustment is essential. Your value increases with experience — your pricing should reflect that.
          </p>
          <div className="pull-quote mt-8">
            Price based on value, not hours. The right rate compensates you fairly while reflecting the impact you create for clients.
          </div>
        </section>

      </div>
    </article>
  );
}
