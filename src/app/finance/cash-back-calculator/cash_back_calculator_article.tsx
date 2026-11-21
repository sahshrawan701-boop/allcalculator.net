import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function CashBackArticle() {
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

        strong { font-weight: 600; }
        em { font-style: italic; }
      `}</style>

      <div className="article-root">
        {/* ── HEADER ── */}
        <header className="mb-12 text-center">
          <span className="meta-tag">Personal Finance · Rewards</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Cash Back Calculator: Maximize Your Credit Card Rewards
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to optimizing credit card spending
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Every time you use a debit card or pay with literal cash, you are effectively leaving free money on the table. In the modern financial ecosystem, credit card issuers are fiercely competing for your transactions, and their primary weapon is cash back.
          </p>
          <p className="mb-5">
            Cash back credit cards return a percentage of your total spending directly to your account. Whether you are buying groceries, filling up your gas tank, or booking a flight, optimizing which card you use can generate hundreds or even thousands of dollars in passive annual income.
          </p>
          <p className="mb-5">
            However, navigating tiered rewards, rotating categories, and annual fees can be a mathematical headache. A Cash Back Calculator cuts through the marketing noise. It allows you to input your exact monthly spending habits to determine mathematically which credit card—or combination of cards—will yield the highest net return.
          </p>
          <p>
            Whether you prefer a simple flat-rate card or want to juggle multiple cards to maximize 5% categories, using a calculator ensures your strategy is actually profitable after any annual fees are paid.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Does the Cash Back Calculator Work?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator works by simulating your annual spending across various categories and applying the specific reward rates of your chosen credit card. It then subtracts any annual fees to provide your true "net" cash back.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            To get a highly accurate projection, you need to input data specific to your lifestyle:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Monthly Spending by Category", "How much you spend on groceries, gas, dining, travel, and 'everything else'."],
              ["Card Reward Rates", "The specific percentages the card offers for each category (e.g., 3% on dining, 1% on all other purchases)."],
              ["Annual Fee", "The yearly cost just to hold the card in your wallet (e.g., $0, $95, or $250)."],
              ["Sign-up Bonus (Optional)", "A one-time lump sum of cash back awarded for hitting a spending minimum in the first 3 months."]
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> – {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The calculator will aggregate these inputs to show you exactly how much money the card will generate over a 1-year, 2-year, or 5-year period.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Cash Back Formula Explained
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Calculating cash back manually requires summing the rewards generated across each individual spending tier and subtracting the cost of holding the card.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            The Net Cash Back Formula:
          </p>
          <div className="formula-block">
            <pre>Net Rewards = (Σ (Category Spend × Category Rate)) - Annual Fee</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4 mt-5">
            What each piece means:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Category Spend", "The total amount of money spent in a specific category (e.g., $6,000/year on groceries)."],
              ["Category Rate", "The percentage back offered for that specific category (e.g., 3% or 0.03)."],
              ["Σ (Sum)", "Adding the rewards generated from all different categories together."],
              ["Annual Fee", "The fixed cost deducted from your total rewards to determine true profitability."]
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-36 shrink-0">{sym}</span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            <strong>The Golden Rule of Cash Back:</strong> Cash back is only profitable if you pay your credit card statement balance in full every single month. If you carry a balance, the 20%+ interest rate will instantly wipe out the 2% or 3% cash back you earned.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── STEP BY STEP ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Step-by-Step Guide: How to Use the Calculator
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Break down your budget",
                content: "Estimate your monthly spending across major categories: Groceries, Dining out, Gas/Transit, Travel, and General Spending (everything else)."
              },
              {
                step: "2",
                title: "Input the card's reward rates",
                content: "Find the card's specific multiplier for each category. For example, enter 3% for dining, 2% for groceries, and 1% for general spending."
              },
              {
                step: "3",
                title: "Enter the annual fee",
                content: "If the card is free, enter $0. If it is a premium card, enter the fee (e.g., $95). This is critical for calculating net value."
              },
              {
                step: "4",
                title: "Add a sign-up bonus",
                content: "If the card offers $200 cash back for spending $1,000 in the first 3 months, and you know you will hit that target, include it to see your Year 1 return."
              },
              {
                step: "5",
                title: "Review and Compare",
                content: "Look at the final Net Annual Cash Back figure. You can run the numbers again with a flat 2% cash back card to see which strategy yields more money for your specific lifestyle."
              }
            ].map(({ step, title, content }) => (
              <div key={step} className="numbered-section">
                <span className="num">{step}</span>
                <div className="flex-1 bg-stone-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-sm">
                  <p className="font-semibold text-slate-800 dark:text-slate-100 text-sm uppercase tracking-wide font-sans">
                    Step {step}: {title}
                  </p>
                  <p className="text-slate-800 dark:text-slate-100 text-sm mt-2">{content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── WORKED EXAMPLES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Real-World Cash Back Examples
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Is it better to have a simple 2% flat-rate card, or a card with an annual fee that offers 6% on groceries? Let's run the math on two different household profiles.
          </p>

          {[
            {
              heading: "Scenario 1: The Simplicity Seeker (No Annual Fee, Flat Rate)",
              rows: [
                ["Card Type", "Flat 2% on everything"],
                ["Total Annual Spend", "$30,000"],
                ["Annual Fee", "$0"],
                ["Gross Cash Back ($30k × 0.02)", "$600"],
                ["Net Annual Value", "$600"],
              ],
              note: "This user doesn't want to think about categories. They put every single purchase on one free card and walk away with a guaranteed $600 a year.",
            },
            {
              heading: "Scenario 2: The Family Optimizer (Tiered Rates, $95 Fee)",
              rows: [
                ["Card Type", "6% Groceries, 3% Gas, 1% Other"],
                ["Grocery Spend", "$8,000/yr (Earns $480)"],
                ["Gas Spend", "$3,000/yr (Earns $90)"],
                ["Other Spend", "$19,000/yr (Earns $190)"],
                ["Gross Cash Back", "$760"],
                ["Annual Fee", "-$95"],
                ["Net Annual Value", "$665"],
              ],
              note: "Despite paying a $95 annual fee, this family spends so much on groceries that the 6% multiplier makes this card more profitable ($665 net) than the free 2% flat-rate card ($600 net).",
            },
            {
              heading: "Scenario 3: The Low Spender Trap",
              rows: [
                ["Card Type", "4% Dining, 1% Other"],
                ["Dining Spend", "$1,200/yr (Earns $48)"],
                ["Other Spend", "$5,000/yr (Earns $50)"],
                ["Gross Cash Back", "$98"],
                ["Annual Fee", "-$95"],
                ["Net Annual Value", "$3"],
              ],
              note: "Because this user doesn't spend very much money overall, the $95 annual fee almost entirely wipes out the rewards generated by the 4% dining multiplier.",
            },
          ].map(({ heading, rows, note }) => (
            <div key={heading} className="state-card">
              <h3>{heading}</h3>
              <table className="styled-table">
                <tbody>
                  {rows.map(([item, val]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── RESULT INTERPRETATION ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Interpreting Your Results
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            A high Gross Cash Back number looks great, but evaluating a credit card requires looking at the Net figures.
          </p>
          <ul className="space-y-4 text-slate-800 dark:text-slate-100 text-base">
            <li>
              <strong>Positive Net Value:</strong> If your Net Annual Value is positive, the card is paying for itself and generating profit. The higher this number, the better the card fits your lifestyle.
            </li>
            <li>
              <strong>Negative Net Value (Year 2+):</strong> If you get a negative number, it means your spending is too low to justify the card's annual fee. You are actually paying the bank for the privilege of using their card. Look for a $0 annual fee alternative.
            </li>
            <li>
              <strong>Year 1 vs. Year 2 Distortion:</strong> Sign-up bonuses often make Year 1 look incredibly profitable (e.g., $500 Net). Be sure to calculate Year 2 without the bonus to ensure the card is a good long-term hold.
            </li>
          </ul>
        </section>

        <hr className="rule-divider" />

        {/* ── REFERENCE TABLE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Flat Rate vs. Tiered Cards by Monthly Spend
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            This table shows the breaking point where an annual fee card (with high grocery/gas multipliers) overtakes a free 2% flat-rate card, assuming 35% of total spend goes toward high-multiplier categories.
          </p>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Total Monthly Spend</th>
                <th className="dark:text-slate-100">Free 2% Flat Card (Net/Yr)</th>
                <th className="dark:text-slate-100">$95 Fee Tiered Card (Net/Yr)</th>
                <th className="dark:text-slate-100">The Winner</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["$1,000/mo", "$240", "$175", "Free Card Wins"],
                ["$2,000/mo", "$480", "$445", "Free Card Wins"],
                ["$3,000/mo", "$720", "$715", "Tie / Free Card"],
                ["$4,000/mo", "$960", "$985", "Tiered Card Wins"],
                ["$5,000/mo", "$1,200", "$1,255", "Tiered Card Wins"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => <td key={j} className="dark:text-slate-100">{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">Conclusion: High-fee, high-multiplier cards only benefit heavy spenders. Low spenders are always better off with a free flat-rate card.</p>
        </section>

        <hr className="rule-divider" />

        {/* ── REAL WORLD APPLICATIONS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Real-World Strategies for Maximizing Cash Back
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Personal finance enthusiasts often employ advanced strategies to extract the absolute maximum value from credit card issuers:
          </p>
          <ul className="tip-list space-y-3 text-slate-800 dark:text-slate-100">
            <li><strong>The "Trifecta" Setup:</strong> Holding three no-fee cards simultaneously. Card A gets 3% on dining, Card B gets 3% on groceries, and Card C gets 2% on everything else. By using the right card at the right register, the user's average return jumps to 2.5% or higher.</li>
            <li><strong>Sign-up Bonus Churning:</strong> Some individuals routinely open new credit cards solely to trigger massive $200–$500 welcome bonuses, then close or downgrade the cards before the second annual fee hits.</li>
            <li><strong>Investing the Rewards:</strong> Instead of using cash back as statement credits to buy more stuff, savvy users automatically transfer their cash back into an index fund or IRA, allowing that "free money" to compound over decades.</li>
            <li><strong>Paying Large Bills:</strong> Routing insurance, utilities, and phone bills through a 2% cash back card (assuming no credit card processing fees) generates massive passive returns on mandatory life expenses.</li>
          </ul>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES & ADVANTAGES & LIMITATIONS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Mistakes to Avoid
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              { title: "Carrying a Balance", desc: "If you pay 22% in credit card interest, earning 2% cash back is completely irrelevant. You are losing money rapidly." },
              { title: "Spending to Earn", desc: "Buying a $100 jacket you don't need just to earn $2 in cash back means you are down $98. Never spend just for the rewards." },
              { title: "Ignoring Processing Fees", desc: "Using a 2% cash back card to pay your taxes or rent is a mistake if the vendor charges a 3% credit card processing fee." },
              { title: "Forgetting Rotating Categories", desc: "If your card requires you to 'activate' 5% rotating categories every quarter and you forget, you default to a measly 1%." },
              { title: "Hoarding Cash Back", desc: "Cash back does not earn interest while sitting in your credit card account. Redeem it frequently as statement credits or deposit it into a bank account." },
              { title: "Applying for Too Many Cards", desc: "Rapidly applying for multiple cards results in hard credit inquiries that can significantly lower your credit score." },
              { title: "Ignoring Annual Fees", desc: "Automatically renewing a $95 annual fee card even after your lifestyle changes and you no longer spend enough on groceries to justify the cost." },
              { title: "Missing Sign-up Bonus Deadlines", desc: "Missing the spending minimum to trigger a $300 bonus by $10 because you didn't track the exact 90-day deadline." }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-4 border border-slate-200 dark:border-slate-700 rounded-sm">
                <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 mt-12 leading-snug">
            Advantages of Cash Back Cards
          </h2>
          <ul className="tip-list space-y-3 text-slate-800 dark:text-slate-100 mb-10">
            <li>Generate passive income on money you were already going to spend anyway.</li>
            <li>Cash is king: Unlike airline miles or hotel points, cash back can be used for absolutely anything.</li>
            <li>Cash back never suffers from blackout dates or points devaluation algorithms.</li>
            <li>Provides an automatic 1% to 2% discount on virtually every item you purchase.</li>
            <li>Cash back is generally not considered taxable income by the IRS (it is viewed as a rebate).</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Limitations to Keep in Mind
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-slate-800 dark:text-slate-100">
            <li><strong>Requires Excellent Discipline:</strong> To benefit, you must treat your credit card like a debit card and pay it off completely every month.</li>
            <li><strong>Category Caps:</strong> Many 5% and 6% cards cap your rewards (e.g., "6% back on up to $6,000 spent per year, then 1%").</li>
            <li><strong>Lower Upside Than Travel Cards:</strong> While simple, cash back cards rarely yield the massive outsized value that premium travel hackers get from redeeming points for first-class international flights.</li>
          </ul>
        </section>

        <hr className="rule-divider" />

        {/* ── FAQS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {[
              {
                q: "Is cash back taxable?",
                a: "In most cases, no. The IRS views cash back earned from everyday credit card spending as a rebate or discount on the purchase price, not as taxable income. However, cash bonuses from opening a bank account (without spending requirements) are usually taxable."
              },
              {
                q: "Is it better to get statement credit or a direct deposit?",
                a: "Mathematically, it is slightly better to get a direct deposit into your bank account. If you take a statement credit, you don't earn cash back on the portion of the bill the credit paid for. If you deposit it to your bank, you earn cash back on the entire credit card bill, then pay it with bank funds."
              },
              {
                q: "What is a flat-rate cash back card?",
                a: "A card that offers the exact same percentage (usually 1.5% or 2%) on every single purchase you make, regardless of the category. It requires zero mental energy to optimize."
              },
              {
                q: "What are rotating categories?",
                a: "Some cards offer 5% cash back in specific categories that change every 3 months (e.g., groceries in Q1, gas stations in Q2). You usually have to manually 'activate' the category in the bank's app to earn the 5%."
              },
              {
                q: "Do I lose my cash back if I close the card?",
                a: "Yes. If you close a credit card account, you forfeit any unredeemed cash back attached to it. Always redeem your balance down to $0 before requesting an account closure."
              },
              {
                q: "Does earning cash back hurt my credit score?",
                a: "No. Earning rewards has no impact on your credit score. In fact, if you are using the card frequently and paying it off entirely every month, your credit score will improve due to excellent payment history."
              },
              {
                q: "Why do banks give away free money via cash back?",
                a: "Banks charge merchants (like grocery stores) a swipe fee of 1.5% to 3% on every transaction. They use a portion of that fee to fund your cash back, keeping the rest as profit. They also make massive profits off users who fail to pay their balances and incur 20%+ interest."
              },
              {
                q: "Can I earn cash back on a balance transfer?",
                a: "No. Balance transfers, cash advances, and buying cash equivalents (like money orders) generally do not earn any cash back."
              },
              {
                q: "Should I pay an annual fee for a cash back card?",
                a: "Only if the calculator proves that the higher multipliers (like 6% on groceries) will generate more money than a free 2% card, even after subtracting the fee. If you are a low spender, avoid annual fees."
              },
              {
                q: "What happens to cash back if I return an item?",
                a: "If you return an item to a store and the refund goes back to your credit card, the bank will claw back (subtract) the cash back you earned on that original purchase from your rewards balance."
              },
              {
                q: "Is 1.5% cash back good?",
                a: "It is decent, but 2% flat-rate cards with no annual fee are now widely available from major issuers. You should aim for a minimum baseline of 2% on general purchases."
              },
              {
                q: "How soon can I redeem my cash back?",
                a: "Most issuers allow you to redeem cash back at the end of the billing cycle in which it was earned. Some cards allow redemption at any time, while a few have a minimum redemption threshold (e.g., must have at least $25 to redeem)."
              },
              {
                q: "Can I use multiple cash back cards?",
                a: "Yes, this is highly recommended for optimization. Use a 5% card for gas, a 3% card for dining, and a 2% card for everything else to maximize your average return."
              },
              {
                q: "Does cash back expire?",
                a: "Usually, cash back does not expire as long as your account remains open and in good standing. However, check your specific card's terms and conditions to be sure."
              },
              {
                q: "Can I buy gift cards to earn cash back?",
                a: "Yes, buying gift cards at a grocery store with a card that earns 5% on groceries will earn cash back. However, banks frown upon buying thousands of dollars in Visa prepaid cards specifically to harvest rewards, and may shut down your account if they suspect abuse."
              }
            ].map((faq, i) => (
              <div key={i} className="faq-item">
                <h3>{faq.q}</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── RELATED CALCULATORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Related Financial Calculators
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Ensure you are maximizing your entire financial strategy with these related tools.
          </p>
          <div className="space-y-4">
            {[
              {
                name: "Credit Card Payoff Calculator",
                desc: "If you are carrying a balance, use this calculator to see exactly how much 22% interest is destroying your 2% cash back gains."
              },
              {
                name: "Budget Calculator",
                desc: "Break down your monthly expenses so you can accurately input your spending categories into the cash back calculator."
              },
              {
                name: "Expense Tracker Calculator",
                desc: "Track every swipe of your credit card to ensure you aren't overspending just to hit a sign-up bonus minimum."
              },
              {
                name: "Savings Calculator",
                desc: "Model how much money you will have if you take your credit card cash back and automatically invest it into a high-yield account."
              },
              {
                name: "Balance Transfer Calculator",
                desc: "If you are trapped by credit card debt, calculate how much you can save by moving that debt to a 0% introductory APR card."
              }
            ].map((calc, i) => (
              <div key={i} className="bg-stone-50 dark:bg-slate-800/50 p-4 border border-slate-200 dark:border-slate-700 rounded-sm">
                <h4 className="font-bold text-indigo-700 dark:text-indigo-400 mb-1">{calc.name}</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">{calc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── CONCLUSION ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Conclusion
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Credit cards are a double-edged sword. If you lack financial discipline and carry a balance, the bank will charge you exorbitant interest rates. However, if you treat your credit card like a debit card and pay the statement balance in full every month, the bank essentially pays you to use their product.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Using a Cash Back Calculator allows you to strip away the flashy marketing and focus strictly on the math. It reveals whether an annual fee is actually worth paying, and whether holding multiple cards is worth the mental effort for your specific budget.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            By optimizing your wallet based on hard data, you can effortlessly generate hundreds of dollars in passive income every year—money that can be redirected toward your savings, investments, or next vacation.
          </p>
        </section>

      </div>
    </article>
  );
}
