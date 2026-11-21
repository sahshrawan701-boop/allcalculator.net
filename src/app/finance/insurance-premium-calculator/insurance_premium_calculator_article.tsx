import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function InsurancePremiumArticle() {
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

        .ornament {
          display: block;
          text-align: center;
          color: #94a3b8;
          letter-spacing: 0.5em;
          font-size: 0.75rem;
          margin: 2.5rem 0;
        }
        .dark .ornament { color: #64748b; }

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

        .styled-table-plain tr:last-child td {
          font-weight: inherit;
          color: inherit;
          background: none;
          border-bottom: 1px solid #e2e8f0;
        }
        .dark .styled-table-plain tr:last-child td {
          border-bottom-color: #334155;
        }
        .styled-table-plain th { background: #f1f5f9; }
        .dark .styled-table-plain th { background: #334155; }

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

        .section-label {
          display: block;
          font-family: sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #94a3b8;
          margin-bottom: 0.5rem;
        }
        .dark .section-label { color: #64748b; }

        strong { font-weight: 600; }
        em { font-style: italic; }
      `}</style>

      <div className="article-root">

        {/* ── HEADER ── */}
        <header className="mb-12 text-center">
          <span className="meta-tag">Personal Finance · Insurance</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Insurance Premium Calculator: Decode Your Coverage Costs
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for understanding insurance premiums
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You pay $300/month for health insurance, $150/month for auto insurance, $120/month for home insurance, and $50/month for life insurance. That's $620/month in insurance premiums — $7,440 annually. Is this too much? Too little? Are you over-insured or under-insured? Most people don't know the answer.
          </p>
          <p className="mb-5">
            Insurance premiums are the price you pay for financial protection. They're a necessary expense, but they can also become a significant portion of your budget if not managed carefully. The insurance premium calculator above helps you understand your total insurance costs and identify where you might be overspending.
          </p>
          <p className="mb-5">
            But understanding your premiums is just the first step. Knowing what affects them, how to reduce them, and what coverage you actually need is what actually protects your finances without draining your budget.
          </p>
          <p>
            Insurance isn't one-size-fits-all. Your needs depend on your age, assets, family situation, and risk tolerance. Let's break down exactly how insurance premiums work and how to optimize your coverage without overpaying.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── WHAT IS PREMIUM ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            What Is an Insurance Premium?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            An insurance premium is the amount you pay to an insurance company for coverage. It's typically paid monthly, quarterly, or annually, and it's the cost of maintaining your insurance policy. If you don't pay your premium, your coverage lapses and you're no longer protected.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Premiums are calculated based on risk factors specific to the type of insurance and your personal situation. Insurance companies use complex algorithms to assess risk and set premiums that reflect the likelihood of you filing a claim and the potential cost of that claim.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            The premium you pay is essentially the price of transferring risk from yourself to the insurance company. In exchange for your premium payments, the insurer agrees to cover certain losses up to policy limits. Understanding how premiums are calculated helps you make informed decisions about coverage and cost.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── TYPES OF INSURANCE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Types of Insurance and Their Premiums
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different types of insurance have different premium structures and risk factors. Understanding each type helps you budget appropriately and identify opportunities to save.
          </p>

          {[
            {
              heading: "Health Insurance",
              rows: [
                ["Typical monthly premium", "$200–$600 (individual), $500–$1,500 (family)"],
                ["Key factors", "Age, location, plan type, tobacco use, family size"],
                ["Employer contribution", "Typically 50–80% of premium"],
                ["Cost-saving tips", "Choose high-deductible plans with HSAs, use in-network providers"],
              ],
              note: "Health insurance premiums vary dramatically based on whether you have employer-sponsored coverage or buy individually. Employer plans are typically much cheaper due to employer contributions. Individual plans can be expensive but may offer more flexibility.",
            },
            {
              heading: "Auto Insurance",
              rows: [
                ["Typical monthly premium", "$80–$200 (varies by state and driver)"],
                ["Key factors", "Age, driving record, vehicle type, location, coverage levels"],
                ["State requirements", "Minimum liability coverage required by law"],
                ["Cost-saving tips", "Bundle with home insurance, maintain good driving record, increase deductibles"],
              ],
              note: "Auto insurance premiums are highly regulated by state law and vary significantly by location. Young drivers and those with poor driving records pay much more. Bundling with home insurance and maintaining a clean driving record are the best ways to reduce premiums.",
            },
            {
              heading: "Home Insurance",
              rows: [
                ["Typical monthly premium", "$80–$200 (varies by location and coverage)"],
                ["Key factors", "Location, home value, construction type, coverage limits, deductibles"],
                ["Mortgage requirement", "Required by lenders if you have a mortgage"],
                ["Cost-saving tips", "Increase deductibles, improve home security, bundle with auto insurance"],
              ],
              note: "Home insurance premiums depend heavily on location — areas prone to natural disasters or high crime rates have much higher premiums. The age and construction of your home also affect rates. Increasing your deductible is the easiest way to reduce premiums.",
            },
            {
              heading: "Life Insurance",
              rows: [
                ["Typical monthly premium", "$20–$100 (term), $100–$500+ (permanent)"],
                ["Key factors", "Age, health, coverage amount, policy type, term length"],
                ["Policy types", "Term (cheaper) vs permanent (more expensive)"],
                ["Cost-saving tips", "Buy term insurance, buy young and healthy, avoid riders you don't need"],
              ],
              note: "Term life insurance is significantly cheaper than permanent insurance and sufficient for most people. Buy term insurance when you're young and healthy to lock in low rates. Avoid expensive permanent policies unless you have specific estate planning needs.",
            },
            {
              heading: "Disability Insurance",
              rows: [
                ["Typical monthly premium", "$30–$100 (varies by occupation and coverage)"],
                ["Key factors", "Occupation, income, health, benefit period, elimination period"],
                ["Coverage types", "Short-term vs long-term disability"],
                ["Cost-saving tips", "Choose longer elimination periods, get coverage through employer if available"],
              ],
              note: "Disability insurance protects your income if you can't work due to illness or injury. Long-term disability is more important than short-term. Employer-sponsored disability insurance is often cheaper than individual policies but may have limited coverage.",
            },
          ].map((insurance: { heading: string; rows: string[][]; note: string }) => (
            <div key={insurance.heading} className="state-card">
              <h3>{insurance.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {insurance.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{insurance.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS AFFECTING PREMIUMS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors That Affect Insurance Premiums
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Insurance companies consider multiple factors when calculating premiums. Understanding these factors helps you anticipate costs and take steps to reduce them.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            Common Factors Across Insurance Types
          </h3>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Factor</th>
                <th className="dark:text-slate-100">Impact</th>
                <th className="dark:text-slate-100">Control</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Age", "Younger and older typically pay more", "Limited"],
                ["Location", "Higher risk areas cost more", "Limited (can move)", "Coverage amount", "Higher coverage costs more", "High"],
                ["Deductible", "Higher deductible = lower premium", "High"],
                ["Claims history", "More claims = higher premium", "Moderate"],
                ["Credit score", "Lower score = higher premium (in most states)", "Moderate"],
                ["Health/lifestyle", "Poor health or risky habits cost more", "Moderate"],
              ].map(([factor, impact, control]) => (
                <tr key={factor}>
                  <td className="dark:text-slate-100">{factor}</td>
                  <td className="dark:text-slate-100">{impact}</td>
                  <td className="dark:text-slate-100">{control}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Some factors like age and location are largely outside your control. Focus on factors you can influence: maintaining good credit, choosing appropriate deductibles, avoiding unnecessary claims, and living a healthy lifestyle can all help reduce your premiums over time.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── REDUCING PREMIUMS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Reduce Your Insurance Premiums
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Insurance is necessary, but that doesn't mean you have to overpay. There are legitimate ways to reduce your premiums without sacrificing essential coverage.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Shop around regularly",
                body: "Insurance premiums vary significantly between companies. Get quotes from at least 3 insurers annually before renewing. Loyalty doesn't always pay — new customers often get better rates than existing ones.",
              },
              {
                n: "2",
                title: "Increase your deductibles",
                body: "Higher deductibles mean lower premiums. If you can afford to pay more out-of-pocket when you file a claim, raising your deductible from $500 to $1,000 can save 10–20% on premiums. Just ensure you have emergency savings to cover the deductible.",
              },
              {
                n: "3",
                title: "Bundle your policies",
                body: "Most insurers offer discounts for bundling multiple policies (home + auto, renters + auto). Bundling can save 10–25% on each policy. If your current insurer doesn't offer bundling, consider switching to one that does.",
              },
              {
                n: "4",
                title: "Maintain good credit",
                body: "In most states, insurers use credit-based insurance scores. Better credit scores correlate with lower premiums. Pay bills on time, keep credit utilization low, and check your credit report regularly for errors.",
              },
              {
                n: "5",
                title: "Review coverage annually",
                body: "Your insurance needs change over time. Review your coverage annually and adjust as needed. You might be paying for coverage you no longer need (like comprehensive coverage on an older car) or underinsured in areas that matter.",
              },
              {
                n: "6",
                title: "Ask about discounts",
                body: "Insurers offer numerous discounts you might not know about: safe driver, good student, home security system, non-smoker, paid-in-full, paperless billing. Ask your insurer about all available discounts and ensure you're getting them.",
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

        {/* ── BUDGETING ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Budgeting for Insurance Premiums
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Insurance premiums should be part of your monthly budget. The calculator above helps you understand your total insurance costs, but you also need to ensure these costs fit within your overall financial plan.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            A common guideline is that total insurance premiums should not exceed 10–15% of your gross monthly income. If you earn $5,000/month, that means $500–$750/month for all insurance combined. If your premiums exceed this range, you may be over-insured or paying too much.
          </p>
          <div className="aside-callout">
            When budgeting for insurance, consider both premiums and out-of-pocket costs. High-deductible health plans have lower premiums but higher out-of-pocket costs when you need care. Factor in potential deductibles and copays when choosing coverage levels.
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-4">
            Automate your insurance premium payments to avoid lapses. A single missed payment can result in coverage cancellation, and reinstating coverage can be expensive or impossible. Set up automatic payments or calendar reminders to ensure you never miss a payment.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Insurance Premium Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Even financially savvy people make mistakes with insurance. Here's what to watch out for.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Over-insuring to feel safe",
                body: "More coverage isn't always better. Insurance is for catastrophic losses, not minor inconveniences. Over-insuring wastes money on premiums for coverage you'll never use. Focus on protecting against genuine financial risks.",
              },
              {
                n: "2",
                title: "Under-insuring to save money",
                body: "Saving a few dollars on premiums can cost thousands if you're underinsured when disaster strikes. Ensure you have adequate coverage for your home, auto, and liability. The cost of being underinsured far exceeds the premium savings.",
              },
              {
                n: "3",
                title: "Not reviewing coverage annually",
                body: "Your insurance needs change over time. Failing to review annually means you might be paying for coverage you no longer need or missing coverage you now require. Review all policies annually and adjust as needed.",
              },
              {
                n: "4",
                title: "Choosing the lowest premium without comparing coverage",
                body: "The cheapest policy isn't always the best value. Compare coverage limits, deductibles, and exclusions, not just premiums. A slightly higher premium for significantly better coverage is often worth it.",
              },
              {
                n: "5",
                title: "Missing available discounts",
                body: "Insurers offer numerous discounts that customers often miss. Ask about all available discounts: safe driver, good student, home security, non-smoker, paid-in-full, paperless. Ensure you're getting every discount you qualify for.",
              },
              {
                n: "6",
                title: "Letting coverage lapse",
                body: "Letting insurance lapse can make it difficult and expensive to get new coverage. Some insurers view lapses as high-risk and charge higher premiums. Maintain continuous coverage even if it means paying a bit more temporarily.",
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
            Practical Tips for Managing Insurance Premiums
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — track your total insurance costs and identify which premiums are highest</>],
              [<><strong>Shop around annually</strong> — get quotes from multiple insurers before renewing any policy</>],
              [<><strong>Bundle policies when possible</strong> — home + auto bundling can save 10–25%</>],
              [<><strong>Increase deductibles strategically</strong> — higher deductibles lower premiums if you have emergency savings</>],
              [<><strong>Maintain good credit</strong> — better credit scores correlate with lower insurance premiums</>],
              [<><strong>Ask about discounts</strong> — insurers offer many discounts you might not know about</>],
              [<><strong>Review coverage annually</strong> — adjust coverage as your life circumstances change</>],
              [<><strong>Automate payments</strong> — avoid lapses by setting up automatic premium payments</>],
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
                q: "How are insurance premiums calculated?",
                a: "Insurance premiums are calculated based on risk factors specific to the type of insurance and your personal situation. Insurers use complex algorithms to assess the likelihood of you filing a claim and the potential cost. Factors include age, location, coverage amount, claims history, and more.",
              },
              {
                q: "What's the difference between premium and deductible?",
                a: "Premium is the amount you pay to maintain insurance coverage, typically monthly or annually. Deductible is the amount you pay out-of-pocket before insurance covers a claim. Higher deductibles typically mean lower premiums, but you pay more when you file a claim.",
              },
              {
                q: "How much should I spend on insurance premiums?",
                a: "A common guideline is that total insurance premiums should not exceed 10–15% of your gross monthly income. If you earn $5,000/month, aim for $500–750/month in total insurance costs. Adjust based on your risk tolerance and asset protection needs.",
              },
              {
                q: "Can I negotiate insurance premiums?",
                a: "You can't typically negotiate the base rate, but you can negotiate discounts. Ask about all available discounts, bundle multiple policies, and compare quotes from multiple insurers. Competition among insurers can work in your favor — use it to get better rates.",
              },
              {
                q: "Should I choose the lowest premium?",
                a: "Not necessarily. The cheapest policy may have inadequate coverage, high deductibles, or poor customer service. Compare coverage limits, deductibles, exclusions, and insurer reputation, not just premiums. Slightly higher premiums for better coverage are often worth it.",
              },
              {
                q: "How often should I review my insurance?",
                a: "Review all insurance policies annually. Your needs change over time, and insurance markets change. Annual reviews ensure you have appropriate coverage, are getting all available discounts, and aren't overpaying compared to current market rates.",
              },
              {
                q: "What happens if I miss a premium payment?",
                a: "Missing a payment can result in coverage lapse. Most insurers offer a grace period (typically 10–30 days), but after that, coverage cancels. Reinstating coverage can be expensive or impossible, and lapses can make future coverage more expensive. Never miss payments.",
              },
              {
                q: "Does my credit score affect my insurance premiums?",
                a: "In most states, yes. Insurers use credit-based insurance scores to predict risk. Better credit scores correlate with fewer claims and lower premiums. Pay bills on time, keep credit utilization low, and check your credit report regularly for errors.",
              },
              {
                q: "Should I bundle my insurance policies?",
                a: "Bundling multiple policies (home + auto, renters + auto) typically saves 10–25% on each policy. It's also more convenient to have one insurer for multiple policies. Compare bundled rates to separate policies to ensure you're actually saving money.",
              },
              {
                q: "How can I lower my auto insurance premium?",
                a: "Maintain a clean driving record, choose a higher deductible, bundle with home insurance, drive a safer car, improve your credit score, ask about all available discounts, and shop around annually. These steps can significantly reduce your auto insurance premiums.",
              },
              {
                q: "What's the difference between term and permanent life insurance premiums?",
                a: "Term life insurance has much lower premiums because it only provides coverage for a specific period. Permanent life insurance (whole life, universal life) has higher premiums because it provides coverage for your entire life and includes a cash value component. Term is sufficient for most people.",
              },
              {
                q: "Should I cancel insurance I don't use?",
                a: "Insurance is for protection against unlikely but catastrophic events, not for regular use. If you have coverage you genuinely don't need (like comprehensive coverage on an old car worth less than the deductible), cancel it. But don't cancel essential coverage just because you haven't used it recently.",
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
            Insurance premiums are a necessary expense, but they don't have to be an excessive one. Understanding what you're paying for, shopping around, and optimizing your coverage can save hundreds or thousands annually without sacrificing protection.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you understand your total insurance costs. But the real work happens in the details: reviewing coverage annually, asking about discounts, bundling policies, and choosing appropriate deductibles. These steps ensure you're protected without overpaying.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Insurance isn't about spending the least — it's about spending wisely. Protect what matters, avoid what doesn't, and never let coverage lapse. Your financial future depends on getting this balance right.
          </p>
          <div className="pull-quote mt-8">
            The best insurance is the one you have when you need it. The second best is the one you don't overpay for.
          </div>
        </section>

      </div>
    </article>
  );
}
