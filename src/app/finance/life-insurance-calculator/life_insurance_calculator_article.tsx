import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function LifeInsuranceArticle() {
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
            Life Insurance Calculator: Protect Your Family's Financial Future
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for understanding life insurance needs
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You're 35, married, with two young children. You earn $75,000 annually. Your spouse earns $50,000. You have a $200,000 mortgage, $15,000 in car loans, and $10,000 in credit card debt. If you died tomorrow, would your family be financially secure? The answer depends on whether you have adequate life insurance.
          </p>
          <p className="mb-5">
            Life insurance is one of the most important financial products you'll ever purchase. It's not for you — it's for the people who depend on you. The life insurance calculator above helps you estimate how much coverage you need based on your income, debts, expenses, and future goals.
          </p>
          <p className="mb-5">
            But understanding how much coverage you need is just the first step. Knowing what type of insurance to buy, when to buy it, and how to optimize your coverage is what actually protects your family without overpaying for premiums.
          </p>
          <p>
            Life insurance isn't one-size-fits-all. Your needs depend on your age, family situation, income, debts, and goals. Let's break down exactly how life insurance works and how to ensure your family is protected without breaking your budget.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── WHAT IS LIFE INSURANCE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            What Is Life Insurance?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Life insurance is a contract between you and an insurance company. You pay premiums, and the insurer pays a tax-free death benefit to your beneficiaries when you die. The death benefit can be used for any purpose: replacing income, paying debts, covering final expenses, funding education, or leaving a legacy.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Life insurance is designed to protect people who depend on your income. If you're single with no dependents, you may not need life insurance. If you're married with children, have a mortgage, or support aging parents, life insurance is essential to ensure your loved ones can maintain their lifestyle if you're no longer there to provide for them.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            The two main types of life insurance are term and permanent. Term insurance provides coverage for a specific period (10, 20, or 30 years) and is significantly cheaper. Permanent insurance provides coverage for your entire life and includes a cash value component, but costs much more. For most people, term insurance is sufficient.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW MUCH COVERAGE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Much Life Insurance Do You Need?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            There's no one-size-fits-all answer, but there are several methods to calculate your coverage needs. The calculator above uses a comprehensive approach that considers income replacement, debts, expenses, and future goals.
          </p>

          {[
            {
              heading: "Income Replacement Method",
              rows: [
                ["Calculation", "Annual income × years of coverage needed"],
                ["Typical multiplier", "10–15 years of income"],
                ["Example", "$75,000 × 10 years = $750,000 coverage"],
                ["Best for", "Primary earners with dependents"],
              ],
              note: "This method replaces your income for a specific period. Choose a coverage period until your youngest child is financially independent or your spouse reaches retirement age. This is the most common and straightforward approach.",
            },
            {
              heading: "DIME Method",
              rows: [
                ["D - Debt", "Mortgage, car loans, credit cards, other debts"],
                ["I - Income", "Income replacement for specified years"],
                ["M - Mortgage", "Pay off mortgage in full"],
                ["E - Education", "College fund for children"],
                ["Total", "Sum of all four components"],
              ],
              note: "The DIME method is comprehensive and ensures all major financial obligations are covered. It's more detailed than simple income replacement and accounts for specific debts and goals. Use this method if you have significant debts or specific financial objectives.",
            },
            {
              heading: "Human Life Value Method",
              rows: [
                ["Calculation", "Present value of future earnings"],
                ["Factors", "Age, income, inflation, investment returns"],
                ["Complexity", "Requires financial calculator or advisor"],
                ["Best for", "High earners with complex finances"],
              ],
              note: "This method calculates the economic value of your life based on your future earning potential. It's more complex but provides a precise coverage amount. This method is typically used by high-net-worth individuals or those with complex financial situations.",
            },
          ].map((method: { heading: string; rows: string[][]; note: string }) => (
            <div key={method.heading} className="state-card">
              <h3>{method.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {method.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{method.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── TERM VS PERMANENT ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Term vs Permanent Life Insurance
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            The most important decision in life insurance is choosing between term and permanent coverage. The right choice depends on your needs, budget, and financial goals.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Feature</th>
                <th className="dark:text-slate-100">Term Insurance</th>
                <th className="dark:text-slate-100">Permanent Insurance</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Coverage period", "Specific term (10–30 years)", "Lifetime"],
                ["Premium cost", "Low ($20–$100/month)", "High ($100–$500+/month)"],
                ["Cash value", "None", "Builds over time"],
                ["Investment component", "None", "Yes (in some policies)"],
                ["Best for", "Most families", "Estate planning, high net worth"],
                ["Complexity", "Simple", "Complex"],
                ["Flexibility", "Limited", "High"],
              ].map(([feature, term, permanent]) => (
                <tr key={feature}>
                  <td className="dark:text-slate-100">{feature}</td>
                  <td className="dark:text-slate-100">{term}</td>
                  <td className="dark:text-slate-100">{permanent}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            For 95% of people, term life insurance is the right choice. It's affordable, simple, and provides the protection your family needs. Permanent insurance makes sense only if you have estate planning needs, want to leave a tax-free inheritance, or have maxed out all other tax-advantaged investment options.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── WHEN TO BUY ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            When Should You Buy Life Insurance?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            The best time to buy life insurance is when you're young and healthy. Premiums increase with age, and health issues can make you uninsurable or significantly more expensive to insure.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "When you get married",
                body: "Marriage creates financial interdependence. If your spouse depends on your income, you need life insurance to ensure they can maintain their lifestyle if you die prematurely.",
              },
              {
                n: "2",
                title: "When you have children",
                body: "Children are the most common reason people buy life insurance. You need coverage to replace your income until your children are financially independent, typically until they graduate college.",
              },
              {
                n: "3",
                title: "When you buy a home",
                body: "A mortgage is a significant debt that your family would struggle to pay without your income. Life insurance can pay off the mortgage, ensuring your family can stay in their home.",
              },
              {
                n: "4",
                title: "When you have significant debts",
                body: "If you have substantial debts (car loans, credit cards, personal loans), life insurance ensures these debts don't become a burden on your family after your death.",
              },
              {
                n: "5",
                title: "When you support aging parents",
                body: "If you financially support aging parents, life insurance ensures they can continue receiving care if you're no longer there to provide for them.",
              },
              {
                n: "6",
                title: "When you're young and healthy",
                body: "Buy when you're young and healthy to lock in low rates. Every year you wait, premiums increase and health issues can make you uninsurable. The best time to buy is now.",
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

        {/* ── REDUCING COSTS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Reduce Life Insurance Costs
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Life insurance premiums can vary significantly based on multiple factors. Here's how to get the coverage you need at the lowest possible cost.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Buy term insurance",
                body: "Term insurance costs 5–10 times less than permanent insurance for the same coverage amount. Unless you have specific estate planning needs, term insurance is the most cost-effective choice.",
              },
              {
                n: "2",
                title: "Buy young and healthy",
                body: "Premiums increase with age. Lock in low rates by buying in your 20s or 30s. Every year you wait, premiums increase. Health issues can also make you uninsurable or significantly more expensive.",
              },
              {
                n: "3",
                title: "Shop around and compare",
                body: "Premiums vary significantly between insurers. Get quotes from at least 5–10 companies including both traditional insurers and online providers. Competition can save you hundreds annually.",
              },
              {
                n: "4",
                title: "Choose the right term length",
                body: "Don't buy more term than you need. If your youngest child is 5, a 20-year term covers them until age 25. Buying a 30-year term when you only need 20 wastes money on unnecessary coverage.",
              },
              {
                n: "5",
                title: "Improve your health",
                body: "Insurers charge more for smokers, obesity, and certain health conditions. Quit smoking, maintain a healthy weight, and manage chronic conditions to qualify for preferred rates.",
              },
              {
                n: "6",
                title: "Avoid unnecessary riders",
                body: "Riders add cost and complexity. Avoid riders you don't need like accidental death, return of premium, or waiver of premium unless you have specific reasons for them.",
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
            Common Life Insurance Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Even financially savvy people make mistakes with life insurance. Here's what to watch out for.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Buying too little coverage",
                body: "Underinsuring is worse than having no insurance because it gives a false sense of security. Use the calculator above to ensure you have adequate coverage. It's better to have too much than too little.",
              },
              {
                n: "2",
                title: "Buying permanent insurance when term suffices",
                body: "Permanent insurance costs 5–10 times more than term. Unless you have estate planning needs or want to leave a tax-free inheritance, term insurance is sufficient. The money saved on premiums can be invested elsewhere.",
              },
              {
                n: "3",
                title: "Waiting too long to buy",
                body: "Every year you wait, premiums increase and health issues can make you uninsurable. Buy when you're young and healthy to lock in low rates. The best time to buy life insurance is now.",
              },
              {
                n: "4",
                title: "Not reviewing coverage regularly",
                body: "Your insurance needs change over time. Review your coverage every 3–5 years or after major life events (marriage, children, home purchase). Adjust coverage as your needs change.",
              },
              {
                n: "5",
                title: "Naming the wrong beneficiaries",
                body: "Name specific individuals, not \"my estate.\" Naming the estate can trigger probate and delay payment. Update beneficiaries after major life events like marriage, divorce, or having children.",
              },
              {
                n: "6",
                title: "Lying on the application",
                body: "Be honest about your health and lifestyle. Insurers investigate claims and can deny benefits if they discover misrepresentation. Honesty ensures your beneficiaries receive the death benefit when they need it most.",
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
            Practical Tips for Buying Life Insurance
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — estimate your coverage needs based on income, debts, expenses, and goals</>],
              [<><strong>Buy term insurance</strong> — it's 5–10 times cheaper than permanent and sufficient for most families</>],
              [<><strong>Buy young and healthy</strong> — lock in low rates before age and health issues increase premiums</>],
              [<><strong>Shop around</strong> — get quotes from at least 5–10 insurers before committing</>],
              [<><strong>Choose the right term length</strong> — match coverage to when your dependents become financially independent</>],
              [<><strong>Name specific beneficiaries</strong> — avoid naming "my estate" to prevent probate delays</>],
              [<><strong>Review coverage regularly</strong> — update every 3–5 years or after major life events</>],
              [<><strong>Be honest on applications</strong> — misrepresentation can result in denied claims</>],
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
                q: "How much life insurance do I need?",
                a: "A common rule of thumb is 10–15 times your annual income, but the right amount depends on your specific situation. Use the calculator above to account for income replacement, debts, final expenses, college funds, and existing coverage. The goal is to ensure your family can maintain their lifestyle without your income.",
              },
              {
                q: "What's the difference between term and permanent life insurance?",
                a: "Term insurance provides coverage for a specific period (10–30 years) and is significantly cheaper. Permanent insurance provides coverage for your entire life and includes a cash value component, but costs 5–10 times more. For most people, term insurance is sufficient and more cost-effective.",
              },
              {
                q: "Should I buy life insurance if I'm single?",
                a: "If you're single with no dependents, you may not need life insurance. However, if you support aging parents, have significant debts, or want to leave money to charity or loved ones, life insurance can still make sense. Buy only if someone would suffer financially without your income.",
              },
              {
                q: "How long should my term life insurance last?",
                a: "Choose a term that covers your dependents until they're financially independent. If your youngest child is 5, a 20-year term covers them until age 25. If you're 30 with no children, a 10-year term may suffice until your situation changes. Match the term to your specific needs.",
              },
              {
                q: "Can I have multiple life insurance policies?",
                a: "Yes, you can have multiple policies from different insurers. This is called laddering and can be cost-effective. For example, you might have a $500,000 20-year policy to cover your children and a $250,000 30-year policy to cover your spouse's retirement. Laddering provides flexibility and can save money.",
              },
              {
                q: "What happens if I miss a premium payment?",
                a: "Most policies have a grace period (typically 30 days) during which coverage remains in effect. If you don't pay within the grace period, the policy lapses and coverage ends. You can typically reinstate a lapsed policy within a certain period by paying back premiums, but this gets more difficult over time.",
              },
              {
                q: "Do I need a medical exam to get life insurance?",
                a: "Most traditional life insurance policies require a medical exam, but some insurers offer no-exam policies up to certain coverage amounts. No-exam policies are more convenient but typically cost more and may have stricter underwriting. If you're healthy, taking the medical exam usually results in lower premiums.",
              },
              {
                q: "Can I change my life insurance beneficiary?",
                a: "Yes, you can change your beneficiary at any time by contacting your insurance company and completing a beneficiary change form. Update beneficiaries after major life events like marriage, divorce, having children, or if your primary beneficiary dies. Keep beneficiary designations current.",
              },
              {
                q: "Is life insurance payout taxable?",
                a: "Life insurance death benefits are generally income tax-free to beneficiaries. However, if the policy is owned by someone other than the insured (such as a business partner), the death benefit may be subject to estate tax. Consult a tax professional for complex situations involving business ownership or large estates.",
              },
              {
                q: "What riders should I consider adding to my policy?",
                a: "Most people don't need riders. Common riders include waiver of premium (waives premiums if you become disabled), accelerated death benefit (pays part of the death benefit if you're terminally ill), and guaranteed insurability (allows you to buy more coverage without a medical exam). Only add riders if you have specific needs for them.",
              },
              {
                q: "Should I buy life insurance through my employer?",
                a: "Employer-provided life insurance is a nice benefit, but it's usually insufficient as your only coverage. Employer policies typically provide 1–2 times your salary, which is rarely enough. Additionally, coverage ends if you leave your job. Buy individual life insurance to supplement employer coverage and ensure continuous protection.",
              },
              {
                q: "How often should I review my life insurance coverage?",
                a: "Review your coverage every 3–5 years or after major life events: marriage, divorce, having children, buying a home, significant income changes, or when children become financially independent. Your insurance needs change over time, and regular reviews ensure you have appropriate coverage.",
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
            Life insurance is one of the most important financial decisions you'll make. It's not about you — it's about the people who depend on you. Adequate coverage ensures your family can maintain their lifestyle, pay debts, and achieve their goals even if you're not there to provide for them.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you estimate your coverage needs. But the real work happens in the details: choosing term over permanent, buying young and healthy, shopping around for the best rates, and reviewing coverage regularly. These steps ensure your family is protected without overpaying for premiums.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Life insurance is a gift to your loved ones. It provides financial security when they need it most. Don't wait — buy life insurance while you're young and healthy, and ensure your family's future is protected no matter what happens.
          </p>
          <div className="pull-quote mt-8">
            The best life insurance is the one that pays out when your family needs it most. The second best is the one you never have to use.
          </div>
        </section>

      </div>
    </article>
  );
}
