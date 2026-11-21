import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function CreditUtilizationArticle() {
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
          <span className="meta-tag">Personal Finance · Credit Health</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Credit Utilization Calculator: The 30% Rule That Can Make or Break Your Score
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for US borrowers
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You have a $10,000 credit limit across your cards and you&apos;re carrying a $3,000 balance. That sounds reasonable —
            you&apos;re using less than a third of your available credit. But what if that $3,000 balance is actually dragging your
            credit score down by 40 points? What if paying it down to $1,000 could push you from &quot;fair&quot; to &quot;good&quot; credit
            territory?
          </p>
          <p className="mb-5">
            This is the power of credit utilization — the second most important factor in your FICO score after payment history.
            It accounts for 30% of your score, and unlike payment history, you can change it in a single billing cycle. Yet most
            people have no idea what their utilization actually is, let alone how to optimize it.
          </p>
          <p className="mb-5">
            The credit utilization calculator above does the math for you instantly. But understanding the why behind the numbers
            is what actually helps you make smarter financial decisions. Let&apos;s break down exactly how utilization works, what
            the ideal range is, and how to use it to your advantage.
          </p>
          <p>
            Your credit score isn&apos;t a mystery — it&apos;s math. And utilization is one of the few variables you can control directly.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── WHAT IS CREDIT UTILIZATION ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            What Is Credit Utilization?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Credit utilization is the percentage of your available credit that you&apos;re currently using. It&apos;s calculated by
            dividing your total credit card balances by your total credit limits and multiplying by 100.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Think of it as a measure of how &quot;maxed out&quot; you appear to lenders. High utilization signals that you&apos;re relying
            heavily on credit — which translates to higher risk. Low utilization suggests you&apos;re using credit as a tool rather
            than a crutch.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            The calculation is simple, but the impact is profound. A person with 80% utilization and perfect payment history can
            have a lower score than someone with 10% utilization and a single missed payment. That&apos;s how much this metric
            matters.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Does Credit Utilization Work?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Credit bureaus calculate utilization in two ways: per-card and overall. Both matter, but overall utilization carries
            more weight in your FICO score.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Here&apos;s what you need to understand:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Overall utilization", "Total balances across all cards ÷ total credit limits across all cards"],
              ["Per-card utilization", "Balance on individual card ÷ credit limit on that card"],
              ["Reporting timing", "Utilization is calculated based on balances reported to bureaus — typically your statement balance"],
              ["Update frequency", "Utilization can change every billing cycle when new balances are reported"],
              ["Score impact", "Utilization accounts for 30% of your FICO score — second only to payment history at 35%"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> – {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The key insight: utilization is a snapshot, not a cumulative measure. You can go from 70% utilization to 10% in a
            single month by paying down balances — and your score can respond just as fast.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Credit Utilization Formula
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            The formula itself is straightforward. The complexity comes from tracking all your cards and understanding when
            balances get reported.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Overall Credit Utilization Formula:
          </p>
          <div className="formula-block">
            <pre>Credit Utilization % = (Total Credit Card Balances ÷ Total Credit Limits) × 100</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Per-card utilization follows the same logic:
          </p>
          <div className="formula-block">
            <pre>Per-Card Utilization % = (Balance on Card ÷ Credit Limit on Card) × 100</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here&apos;s a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Card A", "$2,000 balance / $5,000 limit = 40% utilization"],
              ["Card B", "$1,000 balance / $10,000 limit = 10% utilization"],
              ["Card C", "$500 balance / $3,000 limit = 16.7% utilization"],
              ["Overall", "$3,500 total balance / $18,000 total limit = 19.4% utilization"],
            ].map(([card, calc]) => (
              <li key={card} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-20 shrink-0">{card}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            Even though Card A is at 40% utilization (which is high), the overall utilization of 19.4% is in a healthy range.
            This is why having multiple cards with available credit can help — it dilutes the impact of high utilization on any
            single card.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── IDEAL RANGE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            What Is the Ideal Credit Utilization Range?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            The short answer: under 30% overall, and ideally under 10% for the best scores. But there&apos;s nuance depending on
            your goals and credit profile.
          </p>

          {[
            {
              heading: "0–10%: Excellent",
              rows: [
                ["Score impact", "Maximum positive impact"],
                ["Lender view", "Very low risk, excellent credit management"],
                ["Recommendation", "Maintain this if possible — it's the sweet spot"],
              ],
              note: "This is where the highest credit scores live. If you can consistently keep utilization under 10%, you're giving your score the best possible fuel.",
            },
            {
              heading: "10–30%: Good",
              rows: [
                ["Score impact", "Positive impact, minimal drag"],
                ["Lender view", "Low risk, responsible credit use"],
                ["Recommendation", "This is a healthy, sustainable target"],
              ],
              note: "Most financial experts recommend keeping utilization under 30%. This range shows you're using credit without over-relying on it, and it's achievable for most people.",
            },
            {
              heading: "30–50%: Fair",
              rows: [
                ["Score impact", "Moderate negative impact"],
                ["Lender view", "Moderate risk, room for improvement"],
                ["Recommendation", "Work to pay down balances below 30%"],
              ],
              note: "You're not in dangerous territory yet, but your score is likely being held back. Paying down to under 30% can give you a quick score boost.",
            },
            {
              heading: "50–70%: Poor",
              rows: [
                ["Score impact", "Significant negative impact"],
                ["Lender view", "Elevated risk, over-leveraged"],
                ["Recommendation", "Prioritize paying down balances immediately"],
              ],
              note: "At this level, utilization is actively hurting your score. You may also see higher interest rates on new credit applications. Aggressive paydown is warranted.",
            },
            {
              heading: "70%+: Very Poor",
              rows: [
                ["Score impact", "Severe negative impact"],
                ["Lender view", "High risk, credit-dependent"],
                ["Recommendation", "Emergency-level priority to reduce balances"],
              ],
              note: "This is maxed-out territory. Your score is likely suffering significantly, and lenders may view you as high-risk. Some credit card issuers may even reduce your limits at this level.",
            },
          ].map((range: { heading: string; rows: string[][]; note: string }) => (
            <div key={range.heading} className="state-card">
              <h3>{range.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {range.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{range.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── REAL LIFE EXAMPLES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Real-Life Credit Utilization Scenarios
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Understanding the formula is one thing. Seeing how it plays out in real situations is another. Here are three
            scenarios that illustrate how utilization affects actual people.
          </p>

          {[
            {
              heading: "Scenario 1: The Paydown That Changed Everything",
              rows: [
                ["Starting point", "$8,000 balance / $10,000 limit = 80% utilization"],
                ["Credit score", "642 (Fair category)"],
                ["Action", "Paid $5,000 toward balance over 2 months"],
                ["New utilization", "$3,000 balance / $10,000 limit = 30%"],
                ["New score", "698 (Good category) — 56-point increase"],
              ],
              note: "Sarah's utilization dropped from 80% to 30% in two months by using a tax refund and bonus. Her score jumped 56 points, moving her from fair to good credit. That single change qualified her for a credit card with 8% lower APR.",
            },
            {
              heading: "Scenario 2: The Hidden Cost of a Single Maxed Card",
              rows: [
                ["Card A", "$4,900 balance / $5,000 limit = 98% utilization"],
                ["Card B", "$100 balance / $15,000 limit = 0.7% utilization"],
                ["Overall utilization", "$5,000 balance / $20,000 limit = 25%"],
                ["Credit score", "680 (despite good overall utilization)"],
              ],
              note: "Marcus's overall utilization looks fine at 25%, but one card is nearly maxed out. FICO penalizes high per-card utilization even when overall is healthy. Paying down Card A to $1,000 (20% utilization) could boost his score by 30–40 points.",
            },
            {
              heading: "Scenario 3: The Strategic Balance Increase",
              rows: [
                ["Starting point", "$2,000 balance / $10,000 limit = 20% utilization"],
                ["Credit score", "740 (Very Good)"],
                ["Action", "Request and receive credit limit increase to $20,000"],
                ["New utilization", "$2,000 balance / $20,000 limit = 10%"],
                ["New score", "760+ (Exceptional territory)"],
              ],
              note: "Priya didn't pay down a single dollar — she just increased her available credit. Her utilization dropped from 20% to 10%, and her score moved into exceptional territory. This strategy works when you have a strong payment history and income.",
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

        {/* ── BENEFITS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Benefits of Managing Credit Utilization
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Keeping utilization in check isn&apos;t just about your credit score — it&apos;s about financial flexibility and cost savings.
            Here&apos;s what good utilization management actually gets you.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Higher credit scores",
                body: "Utilization is 30% of your FICO score. Keeping it under 30% — and ideally under 10% — is one of the fastest ways to boost your score. Unlike payment history (which takes months to rebuild), utilization can improve in a single billing cycle.",
              },
              {
                n: "2",
                title: "Lower interest rates on new credit",
                body: "A higher score means better APR offers on credit cards, personal loans, auto loans, and mortgages. The difference between a 680 score and a 740 score can be 3–5 percentage points on a loan — which translates to thousands of dollars in interest over time.",
              },
              {
                n: "3",
                title: "Better credit card approval odds",
                body: "Premium rewards cards and travel cards typically require scores of 700+. Good utilization keeps you in that territory, opening access to cards with better perks, higher limits, and more valuable sign-up bonuses.",
              },
              {
                n: "4",
                title: "Higher credit limits over time",
                body: "Card issuers monitor your utilization. Consistently low utilization signals responsible use, making them more likely to grant limit increases when you request them. Higher limits further improve your utilization — it's a virtuous cycle.",
              },
              {
                n: "5",
                title: "Emergency borrowing capacity",
                body: "When utilization is low, you have available credit to fall back on in an emergency. If your car breaks down or you face a medical bill, having unused credit limits gives you options without scrambling for a high-interest loan.",
              },
              {
                n: "6",
                title: "Avoiding limit reductions",
                body: "Card issuers sometimes reduce limits on accounts with consistently high utilization. Keeping utilization low protects you from unexpected limit cuts that could suddenly spike your utilization and damage your score.",
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

        {/* ── USA SECTION ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Credit Utilization in America: What You Need to Know
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Credit utilization works the same way globally, but the US credit system has some specific characteristics that
            affect how you should think about it.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            Average Credit Utilization in the US
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            According to Experian, the average credit utilization for Americans with credit scores is around 28–30%. People with
            exceptional scores (800+) typically have utilization under 10%. Those with poor scores (below 600) often have
            utilization above 70%.
          </p>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Credit Score Range</th>
                <th className="dark:text-slate-100">Average Utilization</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["800–850 (Exceptional)", "5–7%"],
                ["740–799 (Very Good)", "8–12%"],
                ["670–739 (Good)", "15–25%"],
                ["580–669 (Fair)", "30–45%"],
                ["300–579 (Poor)", "50%+"],
              ].map(([score, util]) => (
                <tr key={score}>
                  <td className="dark:text-slate-100">{score}</td>
                  <td className="dark:text-slate-100">{util}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-8">
            How US Credit Bureaus Report Utilization
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The three major US credit bureaus — Equifax, Experian, and TransUnion — receive utilization data from card issuers
            typically once per month. The balance that gets reported is usually your statement balance, not your current balance.
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              "Statement timing matters: Paying before your statement closes can lower the reported balance",
              "Different cards report at different times: Your utilization might vary across bureaus in the same month",
              "Lenders don't report to all bureaus equally: Some report to all three, others to only one or two",
              "Updates aren't instant: It can take 3–5 days after your statement closes for new data to appear on your reports",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-8">
            Utilization and Mortgage Applications
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            When you apply for a mortgage, lenders pull your credit reports and pay close attention to utilization. High
            utilization can be a red flag even if your score is acceptable. Many mortgage lenders want to see utilization under
            30% at the time of application.
          </p>
          <div className="aside-callout">
            If you&apos;re planning to apply for a mortgage in the next 3–6 months, pay down credit card balances aggressively.
            Even a temporary utilization spike can affect your rate. Aim for under 20% utilization when you submit your application.
          </div>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-8">
            Authorized Users and Utilization
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Being added as an authorized user on someone else&apos;s credit card can help or hurt your utilization depending on
            their habits. If the primary user has high utilization, that high utilization gets added to your credit profile too.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Only become an authorized user on accounts with low utilization and strong payment history. And if you&apos;re the
            primary user adding someone, understand that your utilization behavior affects their credit too.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Credit Utilization Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Even financially responsible people make utilization mistakes. Here&apos;s what to watch out for.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Closing old credit cards",
                body: "When you close a card, you lose its credit limit. If you have $5,000 in balances across $20,000 in limits (25% utilization), and you close a card with a $10,000 limit, your utilization jumps to 50% overnight. Keep old cards open unless there's an annual fee.",
              },
              {
                n: "2",
                title: "Maxing out a card for rewards",
                body: "Some people max out a card to hit a spending bonus, then pay it off immediately. The problem: the statement balance still gets reported as maxed out. That high utilization can stay on your report for a month, dragging down your score.",
              },
              {
                n: "3",
                title: "Ignoring per-card utilization",
                body: "Your overall utilization might be 25%, but if one card is at 90%, FICO still penalizes you. Spread spending across cards rather than concentrating it on one, or pay down the maxed card first.",
              },
              {
                n: "4",
                title: "Requesting limit increases when utilization is high",
                body: "If you're already at 70% utilization, requesting a limit increase might trigger a hard inquiry and could be denied. Wait until utilization is under 30% before asking for more credit.",
              },
              {
                n: "5",
                title: "Paying after the statement closes",
                body: "The balance that gets reported is typically your statement balance. If you pay after the statement closes, the high balance still gets reported. Pay before the statement date to control what gets reported.",
              },
              {
                n: "6",
                title: "Assuming zero utilization is best",
                body: "While very low utilization is great, some lenders like to see at least some credit use. A 1–5% utilization rate shows you're using credit responsibly. Zero utilization can sometimes signal inactivity.",
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
            Practical Tips to Lower Your Credit Utilization
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Pay down balances strategically</strong> — focus on the card with the highest utilization first to maximize score impact</>],
              [<><strong>Pay before your statement closes</strong> — this reduces the balance that gets reported to credit bureaus</>],
              [<><strong>Request credit limit increases</strong> — higher limits lower utilization without changing your spending</>],
              [<><strong>Spread spending across multiple cards</strong> — this prevents any single card from hitting high utilization</>],
              [<><strong>Keep old cards open</strong> — even unused cards contribute to your total credit limit</>],
              [<><strong>Set up automatic payments</strong> — ensure you never miss a payment while working on utilization</>],
              [<><strong>Use multiple payments per month</strong> — paying twice a month can keep mid-cycle balances lower</>],
              [<><strong>Monitor your utilization regularly</strong> — use the calculator above to track your progress month to month</>],
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
                q: "What is a good credit utilization ratio?",
                a: "A good credit utilization ratio is under 30% overall. For the best credit scores, aim for under 10%. Anything under 30% is generally considered healthy, while anything over 50% is likely hurting your score.",
              },
              {
                q: "Does credit utilization affect my credit score immediately?",
                a: "Yes — utilization can change your score within a billing cycle. When your credit card issuer reports a new balance to the bureaus, your utilization updates and your score can respond immediately. This is one of the fastest ways to improve your score.",
              },
              {
                q: "Should I keep a small balance on my credit card?",
                a: "No — you don't need to carry a balance to build credit. In fact, carrying a balance costs you money in interest. Pay your statement balance in full every month. The utilization that gets reported is your statement balance, not whether you carry it forward.",
              },
              {
                q: "Does paying off my credit card lower my utilization immediately?",
                a: "It depends on when you pay relative to your statement date. If you pay before your statement closes, the lower balance gets reported and utilization drops. If you pay after the statement closes, the high balance has already been reported and utilization won't change until the next cycle.",
              },
              {
                q: "How often is credit utilization reported?",
                a: "Credit card issuers typically report utilization once per month, usually shortly after your statement closes. Different cards may report on different days, which is why your utilization can vary slightly across the three credit bureaus.",
              },
              {
                q: "Does closing a credit card hurt my utilization?",
                a: "Yes — closing a card removes its credit limit from your total available credit. If you have balances on other cards, your utilization will increase because you're dividing the same total balance by a smaller total limit. This is why it's generally better to keep old cards open unless they have annual fees.",
              },
              {
                q: "Can I have 0% credit utilization?",
                a: "Yes — 0% utilization means you're not using any of your available credit. While very low utilization is great for your score, some lenders prefer to see at least minimal credit use (1–5%) to show you're actively using credit responsibly. 0% is fine, but 1–5% is often considered ideal.",
              },
              {
                q: "Does requesting a credit limit increase hurt my score?",
                a: "It can trigger a hard inquiry, which may lower your score by 5–10 points temporarily. However, if approved, the higher limit can lower your utilization and potentially raise your score more than the inquiry cost. The net effect is often positive, especially if your utilization is currently high.",
              },
              {
                q: "How does per-card utilization differ from overall utilization?",
                a: "Overall utilization is your total balances divided by total limits across all cards. Per-card utilization is the balance on each individual card divided by that card's limit. Both matter — FICO looks at each — but overall utilization carries more weight. High utilization on a single card can hurt your score even if overall is healthy.",
              },
              {
                q: "Will paying off collections improve my utilization?",
                a: "No — collections accounts are typically from unpaid debts that have already been written off or charged off. Paying a collection doesn't affect your credit utilization because collection accounts aren't revolving credit lines. It can help your score in other ways, but utilization isn't one of them.",
              },
              {
                q: "How much does credit utilization affect my credit score?",
                a: "Credit utilization accounts for 30% of your FICO score — second only to payment history at 35%. It's one of the most significant factors you can control directly. Moving from 70% utilization to 10% can easily add 50–100 points to your score depending on your overall credit profile.",
              },
              {
                q: "Does credit utilization affect mortgage approval?",
                a: "Yes — mortgage lenders review your credit reports and pay close attention to utilization. High utilization can be a red flag even if your score is acceptable. Many lenders prefer to see utilization under 30% at the time of mortgage application, and under 20% is even better for rate purposes.",
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
            Credit utilization is one of the most powerful levers you have over your credit score. It accounts for nearly a third
            of your FICO score, and unlike other factors, you can change it in weeks rather than months or years.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page gives you your current utilization in seconds. But the real value comes from
            understanding what that number means and knowing how to move it in the right direction.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            If your utilization is above 30%, make paying it down a priority. If it&apos;s already under 30%, push for under 10%.
            The difference between good utilization and great utilization can be the difference between a good interest rate and a
            great one — between approval and denial on that credit card or loan application.
          </p>
          <div className="pull-quote mt-8">
            Your credit utilization isn&apos;t just a number — it&apos;s a signal to lenders about how you manage credit. Send the right signal.
          </div>
        </section>

      </div>
    </article>
  );
}
