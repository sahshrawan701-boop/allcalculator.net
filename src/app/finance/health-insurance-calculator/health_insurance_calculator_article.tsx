import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function HealthInsuranceArticle() {
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
          <span className="meta-tag">Personal Finance · Healthcare</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Health Insurance Calculator: Decode Your True Healthcare Costs
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for understanding health insurance costs
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You&apos;re comparing two health plans. Plan A has a $300 monthly premium but a $1,000 deductible. Plan B has a $200 monthly premium but a $5,000 deductible. Which is actually cheaper? The answer depends on your health — and your luck.
          </p>
          <p className="mb-5">
            Health insurance costs are deceptively complex. The premium is just the beginning. Deductibles, coinsurance, copays, and out-of-pocket maximums all interact to determine your actual healthcare spending. A plan that looks expensive on paper might be the best deal if you&apos;re healthy — and catastrophic if you&apos;re not.
          </p>
          <p className="mb-5">
            The health insurance calculator above helps you estimate your total annual healthcare costs based on premiums, deductibles, and expected medical expenses. But understanding how these components work together is what actually helps you choose the right plan.
          </p>
          <p>
            Your health insurance isn&apos;t just a monthly bill — it&apos;s financial protection against unpredictable costs. Let&apos;s break down exactly how to calculate your true healthcare costs and choose coverage that actually protects you.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── KEY COMPONENTS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Understanding Health Insurance Components
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Health insurance plans have multiple cost components that work together. Understanding each one is essential for comparing plans accurately.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Here&apos;s what you need to know:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Premium", "Monthly payment to keep insurance active — you pay this regardless of whether you use healthcare"],
              ["Deductible", "Amount you pay before insurance starts covering costs — typically reset annually"],
              ["Coinsurance", "Percentage you pay after meeting deductible — commonly 20% until out-of-pocket max"],
              ["Copay", "Fixed amount for specific services (doctor visits, prescriptions) — may or may not count toward deductible"],
              ["Out-of-pocket max", "Maximum you pay in a year — after this, insurance covers 100% of covered services"],
              ["In-network vs out-of-network", "Using in-network providers costs significantly less — out-of-network may not be covered at all"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> – {desc}</span>
              </li>
            ))}
          </ul>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW COSTS WORK ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Health Insurance Costs Work Together
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Your total healthcare cost is the sum of premiums plus out-of-pocket costs. But out-of-pocket costs depend on how much healthcare you use — which is unpredictable. This is why choosing the right plan requires estimating your expected medical expenses.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Total Annual Cost Formula:
          </p>
          <div className="formula-block">
            <pre>Total Cost = Annual Premium + Out-of-Pocket Costs</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where out-of-pocket costs are calculated as:
          </p>
          <div className="formula-block">
            <pre>Out-of-Pocket = Deductible + Coinsurance (up to Out-of-Pocket Max)</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here&apos;s a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Monthly premium", "$400"],
              ["Annual premium", "$400 × 12 = $4,800"],
              ["Annual deductible", "$1,500"],
              ["Coinsurance rate", "20%"],
              ["Out-of-pocket max", "$6,000"],
              ["Expected medical costs", "$5,000"],
              ["Coinsurance cost", "($5,000 - $1,500) × 20% = $700"],
              ["Total out-of-pocket", "$1,500 + $700 = $2,200"],
              ["Total annual cost", "$4,800 + $2,200 = $7,000"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, the total annual cost is $7,000. If medical costs were $10,000 instead of $5,000, out-of-pocket costs would hit the $6,000 maximum, and total cost would be $10,800. This illustrates why your expected healthcare usage matters so much in plan selection.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── PLAN TYPES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Types of Health Insurance Plans
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different plan structures offer different trade-offs between premiums, deductibles, and provider flexibility. Understanding these types helps you choose based on your priorities.
          </p>

          {[
            {
              heading: "HMO (Health Maintenance Organization)",
              rows: [
                ["Premiums", "Lower than PPOs"],
                ["Deductibles", "Typically lower"],
                ["Network", "Restricted — must use in-network providers"],
                ["Referrals", "Required for specialists"],
                ["Best for", "Healthy individuals who want lower costs and don't mind network restrictions"],
              ],
              note: "HMOs offer the lowest premiums but require you to use their network and get referrals for specialists. They're cost-effective if you're healthy and don't need frequent specialist care.",
            },
            {
              heading: "PPO (Preferred Provider Organization)",
              rows: [
                ["Premiums", "Higher than HMOs"],
                ["Deductibles", "Typically higher"],
                ["Network", "Flexible — can see out-of-network providers (at higher cost)"],
                ["Referrals", "Not required for specialists"],
                ["Best for", "People who want flexibility and don't mind paying more for it"],
              ],
              note: "PPOs offer the most flexibility but at higher cost. You can see any provider without referrals, but out-of-network care costs significantly more. Ideal if you have specific doctors you want to keep.",
            },
            {
              heading: "HDHP with HSA (High-Deductible Health Plan)",
              rows: [
                ["Premiums", "Lowest available"],
                ["Deductibles", "Very high ($1,500+ individual, $3,000+ family)"],
                ["Network", "Varies — often PPO-style"],
                ["HSA eligibility", "Yes — tax-advantaged savings account"],
                ["Best for", "Healthy individuals who want to save for future healthcare costs tax-free"],
              ],
              note: "HDHPs have high deductibles but low premiums and HSA eligibility. HSAs offer triple tax advantages: tax-free contributions, tax-free growth, and tax-free withdrawals for qualified medical expenses.",
            },
            {
              heading: "EPO (Exclusive Provider Organization)",
              rows: [
                ["Premiums", "Lower than PPOs, similar to HMOs"],
                ["Deductibles", "Varies"],
                ["Network", "Restricted — no out-of-network coverage"],
                ["Referrals", "Not required for specialists"],
                ["Best for", "People who want HMO costs without HMO referral requirements"],
              ],
              note: "EPOs combine HMO-style networks with PPO-style flexibility (no referrals). You must use in-network providers, but you don't need referrals for specialists. A middle ground between HMO and PPO.",
            },
          ].map((plan: { heading: string; rows: string[][]; note: string }) => (
            <div key={plan.heading} className="state-card">
              <h3>{plan.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {plan.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{plan.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── COMPARISON SCENARIOS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Real-Life Plan Comparison Scenarios
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Understanding the components is one thing. Seeing how they play out in real situations is another. Here are three scenarios that illustrate how plan choice affects actual costs.
          </p>

          {[
            {
              heading: "Scenario 1: The Healthy Individual",
              rows: [
                ["Expected medical costs", "$500/year"],
                ["Plan A (HMO)", "$300 premium, $1,000 deductible, $3,000 OOP max"],
                ["Plan B (HDHP)", "$200 premium, $3,000 deductible, $6,000 OOP max"],
                ["Plan A total cost", "$3,600 + $500 = $4,100"],
                ["Plan B total cost", "$2,400 + $500 = $2,900"],
              ],
              note: "For a healthy person with minimal healthcare needs, the HDHP is cheaper by $1,200 annually. The high deductible never comes into play, and the lower premium saves money. The HSA eligibility adds additional tax advantages.",
            },
            {
              heading: "Scenario 2: The Chronic Condition",
              rows: [
                ["Expected medical costs", "$8,000/year"],
                ["Plan A (HMO)", "$300 premium, $1,000 deductible, $3,000 OOP max"],
                ["Plan B (HDHP)", "$200 premium, $3,000 deductible, $6,000 OOP max"],
                ["Plan A total cost", "$3,600 + $3,000 (OOP max) = $6,600"],
                ["Plan B total cost", "$2,400 + $5,000 (deductible + coinsurance) = $7,400"],
              ],
              note: "For someone with significant healthcare needs, the HMO is cheaper by $800. The lower deductible and out-of-pocket max provide better protection against high costs. The HDHP's high deductible means paying more out-of-pocket.",
            },
            {
              heading: "Scenario 3: The Unexpected Emergency",
              rows: [
                ["Unexpected medical costs", "$25,000 (surgery, hospitalization)"],
                ["Plan A (HMO)", "$300 premium, $1,000 deductible, $3,000 OOP max"],
                ["Plan B (HDHP)", "$200 premium, $3,000 deductible, $6,000 OOP max"],
                ["Plan A total cost", "$3,600 + $3,000 (OOP max) = $6,600"],
                ["Plan B total cost", "$2,400 + $6,000 (OOP max) = $8,400"],
              ],
              note: "In a catastrophic scenario, the HMO saves $1,800. The lower out-of-pocket max provides better protection. This is why considering worst-case scenarios is crucial — you're not just insuring against expected costs, but unexpected ones too.",
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

        {/* ── CHOOSING A PLAN ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Choose the Right Health Insurance Plan
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Choosing a health plan requires balancing premiums against potential out-of-pocket costs. Here&apos;s a systematic approach to making the right decision.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Estimate your expected healthcare costs",
                body: "Review your healthcare spending from the past 2–3 years. Include doctor visits, prescriptions, procedures, and any ongoing treatments. This gives you a baseline for expected costs. If you're healthy with minimal needs, your expected costs will be low.",
              },
              {
                n: "2",
                title: "Consider worst-case scenarios",
                body: "What if you need surgery? What if you have a serious illness? Calculate the total cost under each plan for a $20,000–$50,000 medical event. The plan with lower premiums might have catastrophic out-of-pocket costs in worst-case scenarios.",
              },
              {
                n: "3",
                title: "Check provider networks",
                body: "If you have doctors you want to keep, verify they're in-network for each plan. Out-of-network care can cost 2–3x more or may not be covered at all. For many people, keeping their current doctors is worth paying a higher premium.",
              },
              {
                n: "4",
                title: "Compare prescription drug coverage",
                body: "Check if your current medications are covered and what the tier placement is. Different plans place drugs on different tiers, which affects your copay or coinsurance. A plan with lower premiums might have higher drug costs.",
              },
              {
                n: "5",
                title: "Factor in HSA eligibility",
                body: "HDHPs with HSAs offer triple tax advantages. If you're healthy and can save in an HSA, the tax benefits can offset higher out-of-pocket costs. HSAs are especially valuable if your employer contributes to them.",
              },
              {
                n: "6",
                title: "Calculate total cost for your situation",
                body: "Use the calculator above to compare total annual costs under each plan based on your expected medical expenses. Don't just compare premiums — compare the total cost including expected out-of-pocket expenses.",
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

        {/* ── USA CONTEXT ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Health Insurance in America: What You Need to Know
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            The US healthcare system is complex, with multiple ways to obtain coverage. Understanding your options is essential for making informed decisions.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            Sources of Health Insurance
          </h3>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Source</th>
                <th className="dark:text-slate-100">Who It's For</th>
                <th className="dark:text-slate-100">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Employer-sponsored", "Most working Americans", "Employer typically pays 50–80% of premium"],
                ["Marketplace (ACA)", "Self-employed, unemployed, or those without employer coverage", "Premium subsidies available based on income"],
                ["Medicare", "People 65+ or with certain disabilities", "Part A (hospital) is free for most, Part B (medical) has premium"],
                ["Medicaid", "Low-income individuals and families", "Income and asset limits apply, varies by state"],
                ["Direct purchase", "Anyone", "No subsidies, but can purchase any plan directly from insurer"],
              ].map(([source, who, notes]) => (
                <tr key={source}>
                  <td className="dark:text-slate-100">{source}</td>
                  <td className="dark:text-slate-100">{who}</td>
                  <td className="dark:text-slate-100">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-8">
            ACA Marketplace Subsidies
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Premium tax credits are available through the ACA marketplace for households with income between 100% and 400% of the federal poverty level. These subsidies cap your premium contribution as a percentage of income.
          </p>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Income Level (% of Federal Poverty Level)</th>
                <th className="dark:text-slate-100">Premium Cap</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["100–138%", "2% of income"],
                ["138–150%", "3–4% of income"],
                ["150–200%", "4–6% of income"],
                ["200–250%", "6–8% of income"],
                ["250–300%", "8–8.5% of income"],
                ["300–400%", "8.5–9.8% of income"],
              ].map(([income, cap]) => (
                <tr key={income}>
                  <td className="dark:text-slate-100">{income}</td>
                  <td className="dark:text-slate-100">{cap}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            If your income is below 138% of the federal poverty level, you may qualify for Medicaid instead of marketplace subsidies. Medicaid eligibility and benefits vary significantly by state.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Health Insurance Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Even financially savvy people make mistakes with health insurance. Here&apos;s what to watch out for.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Choosing based solely on premiums",
                body: "Low premiums often mean high deductibles and out-of-pocket maximums. If you have significant healthcare needs, a plan with higher premiums but lower out-of-pocket costs may actually be cheaper overall.",
              },
              {
                n: "2",
                title: "Ignoring provider networks",
                body: "Your favorite doctor may not be in-network for a cheaper plan. Out-of-network care can cost 2–3x more or may not be covered at all. Always verify your providers are in-network before choosing a plan.",
              },
              {
                n: "3",
                title: "Not checking prescription coverage",
                body: "Different plans place drugs on different tiers, which affects your copay or coinsurance. A plan with lower premiums might have higher drug costs that offset the premium savings.",
              },
              {
                n: "4",
                title: "Underestimating expected healthcare costs",
                body: "People tend to be overly optimistic about their health. Use actual historical spending data, not best-case scenarios. Consider both expected costs and worst-case scenarios.",
              },
              {
                n: "5",
                title: "Missing open enrollment deadlines",
                body: "You can only change plans during open enrollment (typically November–January) or after qualifying life events. Missing the deadline means you're stuck with your current plan for another year.",
              },
              {
                n: "6",
                title: "Not understanding employer contributions",
                body: "Employers typically pay 50–80% of premiums. When comparing plans, focus on your portion of the premium, not the total premium. The employer contribution is effectively part of your compensation.",
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
            Practical Tips for Lowering Healthcare Costs
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use in-network providers</strong> — out-of-network care can cost 2–3x more, always verify network status before receiving care</>],
              [<><strong>Choose generic medications</strong> — generics are typically 80–85% cheaper than brand-name drugs and are therapeutically equivalent</>],
              [<><strong>Use preventive care services</strong> — most plans cover preventive care (checkups, screenings, vaccinations) at 100% with no copay</>],
              [<><strong>Compare costs for procedures</strong> — prices can vary significantly between providers, ask for cost estimates before non-emergency procedures</>],
              [<><strong>Use urgent care instead of ER</strong> — urgent care centers cost 50–70% less than emergency rooms for non-life-threatening issues</>],
              [<><strong>Maximize your HSA</strong> — if you have an HDHP with an HSA, contribute the maximum and invest the balance for long-term growth</>],
              [<><strong>Review medical bills for errors</strong> — medical billing errors are common, review bills carefully and dispute any incorrect charges</>],
              [<><strong>Negotiate when possible</strong> — some providers offer discounts for cash payment or payment plans, ask about options</>],
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
                q: "What is the difference between premium and deductible?",
                a: "Premium is the monthly amount you pay to have insurance, regardless of whether you use it. Deductible is the amount you pay for covered services before insurance starts paying. You pay the premium every month, but you only pay the deductible if you use healthcare services.",
              },
              {
                q: "How do I calculate my total healthcare costs?",
                a: "Total annual cost = (monthly premium × 12) + out-of-pocket costs. Out-of-pocket costs include your deductible, coinsurance, and copays, up to your out-of-pocket maximum. The calculator above helps you estimate this based on your expected medical expenses.",
              },
              {
                q: "What is coinsurance vs copay?",
                a: "Coinsurance is a percentage you pay after meeting your deductible (typically 20%). Copay is a fixed amount you pay for specific services (like $25 for a doctor visit). Copays may or may not count toward your deductible depending on the plan.",
              },
              {
                q: "What happens when I hit my out-of-pocket maximum?",
                a: "Once you've paid your out-of-pocket maximum, your insurance covers 100% of covered services for the rest of the plan year. This is your financial protection against catastrophic healthcare costs. Premiums continue even after hitting the out-of-pocket max.",
              },
              {
                q: "Should I choose an HMO or PPO?",
                a: "Choose an HMO if you want lower premiums and don't mind network restrictions and referrals. Choose a PPO if you want flexibility to see out-of-network providers and don't want referrals. PPOs cost more but offer more freedom.",
              },
              {
                q: "What is an HDHP and who should choose one?",
                a: "HDHPs have high deductibles ($1,500+ individual, $3,000+ family) but low premiums and HSA eligibility. They're ideal for healthy individuals who want to save for future healthcare costs tax-free. If you have significant healthcare needs, a traditional plan may be better.",
              },
              {
                q: "How do HSAs work?",
                a: "HSAs are triple tax-advantaged: contributions are tax-deductible, growth is tax-free, and withdrawals for qualified medical expenses are tax-free. You must have an HDHP to qualify. If your employer contributes, that's free money. Unused balances roll over year to year.",
              },
              {
                q: "What is the ACA marketplace and do I qualify for subsidies?",
                a: "The ACA marketplace is where you can buy individual health insurance. Premium subsidies are available for households with income between 100% and 400% of the federal poverty level. Below 138%, you may qualify for Medicaid instead.",
              },
              {
                q: "How do I compare health insurance plans?",
                a: "Compare total annual cost, not just premiums. Use the calculator above to estimate your total cost based on expected medical expenses. Also compare provider networks, prescription coverage, and out-of-pocket maximums. Consider both expected costs and worst-case scenarios.",
              },
              {
                q: "What is a qualifying life event?",
                a: "Qualifying life events allow you to enroll in or change health insurance outside open enrollment. Examples include marriage, divorce, having a baby, losing other coverage, or moving to a new area. You typically have 60 days after the event to make changes.",
              },
              {
                q: "How much should I budget for healthcare?",
                a: "Budget for your premium plus expected out-of-pocket costs. If you're healthy with minimal needs, budget 5–10% of income for healthcare. If you have chronic conditions or a family, budget 10–15% or more. Always have an emergency fund for unexpected medical costs.",
              },
              {
                q: "Can I change plans outside open enrollment?",
                a: "Only if you have a qualifying life event (marriage, divorce, birth, job loss, etc.) or if you move to an area where your current plan isn't available. Otherwise, you must wait for the annual open enrollment period (typically November–January).",
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
            Health insurance is one of the most important financial decisions you make. It&apos;s not just a monthly bill — it&apos;s protection against potentially catastrophic costs. The right plan balances premiums, deductibles, and coverage to match your health needs and financial situation.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you estimate your total healthcare costs under different scenarios. But the real value comes from understanding your health, your risk tolerance, and your priorities — then choosing a plan that protects you accordingly.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Don't choose based solely on premiums. Don't assume the cheapest plan is the best deal. Consider worst-case scenarios. Verify your providers are in-network. And remember — the best health insurance plan is the one that's there when you need it, at a cost you can afford.
          </p>
          <div className="pull-quote mt-8">
            Health insurance isn't about spending less — it's about protecting yourself from the unpredictable. Choose wisely.
          </div>
        </section>

      </div>
    </article>
  );
}
