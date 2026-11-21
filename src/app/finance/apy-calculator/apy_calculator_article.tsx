import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function APYArticle() {
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
        .formula-block pre { margin: 0; font-family: inherit; white-space: pre-wrap; }

        .aside-callout {
          border-left: 3px solid var(--primary);
          padding: 1rem 1.25rem;
          background: #eef2ff;
          margin: 1.5rem 0;
          font-size: 0.95rem;
          font-style: italic;
          color: var(--primary-dk);
        }
        .dark .aside-callout { background: #312e81; color: #a5b4fc; }

        .state-card {
          border: 1px solid #e2e8f0;
          border-top: 3px solid var(--primary-dk);
          padding: 1.5rem;
          margin: 1.5rem 0;
          background: #f8fafc;
        }
        .dark .state-card { border-color: #475569; border-top-color: var(--primary); background: #1e293b; }
        .state-card h3 {
          font-size: 1.05rem !important;
          margin-bottom: 0.75rem !important;
          color: var(--primary-dk) !important;
          letter-spacing: 0.02em;
        }
        .dark .state-card h3 { color: #a5b4fc !important; }

        .styled-table { width: 100%; border-collapse: collapse; font-size: 0.9rem; margin: 1rem 0; }
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
        .dark .styled-table th { border-bottom-color: #475569; color: #cbd5e1; }
        .styled-table td { padding: 0.5rem 0.75rem; border-bottom: 1px solid #e2e8f0; color: #1e293b; }
        .dark .styled-table td { border-bottom-color: #334155; color: #e2e8f0; }
        .styled-table tr:last-child td { border-bottom: none; font-weight: 600; color: var(--primary-dk); background: #e0e7ff; }
        .dark .styled-table tr:last-child td { color: #a5b4fc; background: #312e81; }

        .styled-table-plain tr:last-child td { font-weight: inherit; color: inherit; background: none; border-bottom: 1px solid #e2e8f0; }
        .dark .styled-table-plain tr:last-child td { border-bottom-color: #334155; }
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
        .dark .pull-quote { border-color: #475569; color: #cbd5e1; }

        .numbered-section { display: flex; gap: 1rem; margin-bottom: 1.5rem; align-items: flex-start; }
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
        .tip-list li::before { content: '→'; position: absolute; left: 0; color: var(--primary); font-style: normal; }
        .dark .tip-list li::before { color: #818cf8; }

        .faq-item { border-top: 1px solid #e2e8f0; padding: 1.25rem 0; }
        .dark .faq-item { border-top-color: #334155; }
        .faq-item h3 { font-size: 1rem !important; margin-bottom: 0.5rem !important; color: #1e293b !important; }
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
        .dark .meta-tag { color: #a5b4fc; background: #312e81; }

        strong { font-weight: 600; }
        em { font-style: italic; }
      `}</style>

      <div className="article-root">

        {/* ── HEADER ── */}
        <header className="mb-12 text-center">
          <span className="meta-tag">Personal Finance · Savings</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            APY Calculator: See How Much Your Savings Are Really Earning
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for US savers and investors
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto" />
        </header>

        {/* ── META BOX ── */}
        <div className="mb-10">
          <table className="styled-table">
            <tbody>
              <tr>
                <td>
                  <span className="font-semibold text-slate-800 dark:text-slate-100 not-italic">Meta Description:</span>{" "}
                  <span className="italic">Use our free APY calculator to find out how much your savings actually earn with compound interest. Built for US savers, CDs, and high-yield accounts.</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You open a savings account, drop in $5,000, and the bank says you&apos;ll earn &quot;4.75% APY.&quot; Sounds pretty good, right? But a few months later you check your balance, and the interest deposited doesn&apos;t quite match what you expected. Sound familiar?
          </p>
          <p className="mb-5">
            APY — Annual Percentage Yield — is one of those financial terms that gets thrown around constantly, but most people have only a rough sense of what it actually means. They know a higher number is better. Beyond that? Fuzzy.
          </p>
          <p className="mb-5">
            And that fuzziness costs real money. When you don&apos;t understand how APY works — how compounding frequency changes your actual earnings, or how it differs from the interest rate — you end up leaving gains on the table or misjudging which savings account or CD is actually the better deal.
          </p>
          <p>
            An APY calculator cuts through all of that. Plug in your numbers and you see exactly what you&apos;ll earn over any time period. Let&apos;s break it all down — how APY works, how it&apos;s calculated, and why it matters more than most people realize.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── WHAT IS APY ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            What Is an APY Calculator?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            An APY calculator is a tool that computes how much interest you&apos;ll earn on a deposit over a specific period — accounting for compound interest. It converts a raw interest rate into the actual dollar amount your money will grow to, based on how frequently interest compounds.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Most APY calculators let you enter your starting balance, the APY (or interest rate), the compounding frequency, and the time period. Hit calculate, and you get your ending balance plus the total interest earned.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            The best ones also let you compare multiple accounts or CD terms side by side — which is where they really earn their keep. Not all &quot;4.75% APY&quot; offers are equal once you factor in minimum balances, early withdrawal penalties, or variable vs. fixed rates.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── WHAT DOES APY MEAN ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            What Does APY Mean?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            APY stands for <strong>Annual Percentage Yield</strong>. It tells you how much a deposit will grow over one year when compound interest is factored in. The key word is &quot;yield&quot; — it&apos;s the actual return you get, not just the base rate.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here&apos;s the critical part that trips people up: APY already includes the effect of compounding. So a 4.75% APY on a daily-compounding account will produce more dollars than a 4.75% interest rate compounded annually — even though both show the same number.
          </p>
          <div className="aside-callout">
            <strong>Simple way to think about it:</strong> The interest rate is the starting ingredient. APY is what you actually get after compounding does its work. They&apos;re related but not the same — and the difference adds up fast over years.
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            US law (specifically the Truth in Savings Act) requires banks to disclose APY on savings accounts and CDs so consumers can compare offerings on a level playing field. That&apos;s why you&apos;ll always see APY front-and-center on bank advertisements.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── APY VS APR ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            APY vs. APR: Why the Difference Matters for Your Wallet
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            These two acronyms live on opposite sides of the same coin — and confusing them is one of the most common personal finance mistakes Americans make.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            <strong>APY (Annual Percentage Yield)</strong> applies to money you <em>save or invest</em>. It reflects the full return after compounding. Higher is better — you want high APY on your savings accounts, CDs, and money market accounts.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            <strong>APR (Annual Percentage Rate)</strong> applies to money you <em>borrow</em>. It&apos;s the base annual cost of a loan, generally without compounding. Lower is better — you want low APR on your credit cards, mortgages, and car loans.
          </p>
          <div className="overflow-x-auto">
            <table className="styled-table styled-table-plain">
              <thead>
                <tr>
                  {["Feature", "APY", "APR"].map((h) => (
                    <th key={h} className="dark:text-slate-100">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Applies to",         "Savings, deposits, investments", "Loans, credit cards, mortgages"],
                  ["Includes compounding?", "Yes",                          "No (usually)"],
                  ["You want it to be",  "Higher",                         "Lower"],
                  ["Regulated by",       "Truth in Savings Act",           "Truth in Lending Act (TILA)"],
                  ["Example",           "HYSA, CD, money market",          "Credit card, auto loan, mortgage"],
                ].map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} className="dark:text-slate-100">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The real-world trap: someone opens a credit card with a &quot;4.99% APR&quot; intro offer and deposits money in a &quot;5% APY&quot; savings account, thinking they&apos;re roughly breaking even. But once that intro offer ends and the card jumps to 22% APR, they&apos;re losing money fast — while earning 5% on the savings side.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Does an APY Calculator Work?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            At its core, the APY calculator applies the compound interest formula repeatedly over your chosen time period. Instead of just multiplying your balance by the interest rate, it recalculates earned interest at each compounding interval — daily, monthly, or annually — and adds that interest back to the balance before the next calculation runs.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Here&apos;s what you typically input:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base mb-5">
            {[
              ["Starting balance (principal)", "How much you&apos;re depositing today"],
              ["APY or interest rate",          "The rate the account advertises"],
              ["Compounding frequency",          "Daily, monthly, quarterly, or annually"],
              ["Time period",                    "Months or years you plan to keep the money deposited"],
              ["Additional contributions",       "Regular monthly or yearly deposits (optional but powerful)"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> — {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            The output is your ending balance plus total interest earned. Some calculators also break it down year-by-year or month-by-month, which makes the compounding effect visually obvious — especially over longer periods.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The APY Formula Explained
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            There are two related formulas you&apos;ll encounter. The first converts an interest rate to APY. The second calculates your actual ending balance.
          </p>

          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Formula 1 — Converting Interest Rate to APY:</p>
          <div className="formula-block">
            <pre>APY = (1 + r/n)^n - 1

Where:
  r = nominal annual interest rate (as a decimal)
  n = number of compounding periods per year</pre>
          </div>

          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2 mt-4">Formula 2 — Ending Balance with Compound Interest:</p>
          <div className="formula-block">
            <pre>A = P × (1 + r/n)^(n×t)

Where:
  A = ending balance
  P = principal (starting amount)
  r = annual interest rate (decimal)
  n = compounding periods per year
  t = time in years</pre>
          </div>

          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4 mt-4">
            Compounding periods (n) for common account types:
          </p>
          <table className="styled-table styled-table-plain">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Compounding Frequency</th>
                <th className="dark:text-slate-100">n value</th>
                <th className="dark:text-slate-100">Common Use</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Daily",     "365", "Most online HYSAs, money market accounts"],
                ["Monthly",   "12",  "Many traditional bank savings accounts"],
                ["Quarterly", "4",   "Some CDs and older bank accounts"],
                ["Annually",  "1",   "Certain fixed-rate products"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => <td key={j} className="dark:text-slate-100">{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout mt-4">
            More frequent compounding always produces a higher APY from the same nominal rate. Daily compounding is generally the best deal for savers — it&apos;s one of the hidden advantages of online high-yield savings accounts.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── STEP BY STEP ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Step-by-Step APY Calculation Example
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Let&apos;s say you deposit $10,000 into a high-yield savings account advertising 5.00% APY, compounded daily. You leave it untouched for 2 years. Here&apos;s the math.
          </p>

          {[
            {
              step: "1",
              title: "Convert APY to daily rate",
              content: (
                <div className="formula-block mt-2 text-sm">
                  <pre>{`Daily rate = 5.00% / 365 = 0.01370%`}</pre>
                </div>
              ),
            },
            {
              step: "2",
              title: "Apply the compound interest formula",
              content: (
                <div className="formula-block mt-2 text-sm">
                  <pre>{`A = 10,000 × (1 + 0.05/365)^(365×2)
A = 10,000 × (1.000137)^730
A ≈ $11,051.16`}</pre>
                </div>
              ),
            },
            {
              step: "3",
              title: "Calculate total interest earned",
              content: (
                <ul className="text-slate-800 dark:text-slate-100 space-y-1 text-sm mt-2">
                  <li>Ending balance: <strong>$11,051.16</strong></li>
                  <li>Starting balance: $10,000.00</li>
                  <li className="font-bold text-indigo-700 dark:text-indigo-400 pt-1">Total interest earned: $1,051.16</li>
                </ul>
              ),
            },
            {
              step: "4",
              title: "Compare to simple (non-compounding) interest",
              content: (
                <ul className="text-slate-800 dark:text-slate-100 space-y-1 text-sm mt-2">
                  <li>Simple interest: $10,000 × 5% × 2 years = $1,000.00</li>
                  <li>Compound interest earnings: $1,051.16</li>
                  <li className="font-bold text-indigo-700 dark:text-indigo-400 pt-1">Compounding bonus: +$51.16 — for doing nothing extra</li>
                </ul>
              ),
            },
          ].map(({ step, title, content }) => (
            <div key={step} className="numbered-section">
              <span className="num">{step}</span>
              <div className="flex-1 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-sm">
                <p className="font-semibold text-slate-800 dark:text-slate-100 text-sm uppercase tracking-wide font-sans">
                  Step {step}: {title}
                </p>
                {content}
              </div>
            </div>
          ))}

          <div className="aside-callout">
            That $51 bonus from compounding might not knock your socks off at two years. But stretch this to 20 years and the compounding gap on a $50,000 deposit at 5% APY becomes <strong>$82,485 vs. $100,000+</strong> — a meaningful real-world difference.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── REAL LIFE EXAMPLES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Real-Life APY Savings Examples for US Savers
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            APY plays out differently depending on where you are in life — a college student building an emergency fund, a young couple saving for a house, or a retiree trying to squeeze yield out of a fixed-income portfolio. Here are four realistic scenarios.
          </p>

          {[
            {
              heading: "Student Emergency Fund — $2,000 at 4.75% APY, 1 Year, Daily Compounding",
              rows: [
                ["Starting balance",      "$2,000"],
                ["APY",                   "4.75%"],
                ["Compounding",           "Daily"],
                ["Time",                  "1 year"],
                ["Ending balance",        "$2,097.06"],
                ["Interest earned",       "$97.06"],
              ],
              note: "Nearly $100 in free money for doing literally nothing except parking an emergency fund in a high-yield account instead of a big-bank savings account paying 0.01%. At most traditional banks, that same $2,000 would earn about $0.20 for the year.",
            },
            {
              heading: "Young Professional — $15,000 House Down Payment Fund, 5.00% APY, 3 Years",
              rows: [
                ["Starting balance",       "$15,000"],
                ["Monthly contributions",  "$500"],
                ["APY",                    "5.00%"],
                ["Compounding",            "Daily"],
                ["Time",                   "3 years"],
                ["Estimated ending balance","~$36,400"],
                ["Total contributed",       "$33,000"],
                ["Interest earned",         "~$3,400"],
              ],
              note: "Those regular monthly deposits combined with daily compounding turn a disciplined $500/month habit into $36K+ — with $3,400 you never worked for. This is the exact scenario where an online high-yield savings account crushes a traditional savings account.",
            },
            {
              heading: "Family CD Ladder — $25,000 CD at 5.25% APY, 12 Months",
              rows: [
                ["Deposit",                "$25,000"],
                ["APY",                    "5.25%"],
                ["Compounding",            "Monthly"],
                ["Term",                   "12 months"],
                ["Ending balance",         "$26,332.82"],
                ["Interest earned",        "$1,332.82"],
              ],
              note: "A 1-year CD at 5.25% APY earns over $1,300 on a $25K deposit — guaranteed, FDIC-insured. Families using CD ladders (spreading money across 3-month, 6-month, and 12-month CDs) keep their cash liquid while still capturing near-peak yields.",
            },
            {
              heading: "Retiree Money Market — $100,000 at 4.50% APY, 5 Years",
              rows: [
                ["Starting balance",   "$100,000"],
                ["APY",                "4.50%"],
                ["Compounding",        "Monthly"],
                ["Time",               "5 years"],
                ["Ending balance",     "$125,022.70"],
                ["Interest earned",    "$25,022.70"],
              ],
              note: "Over 5 years, a retiree earns $25,000 in interest on $100K — all from a money market account. No stock market exposure, no sleepless nights. The key is that monthly compounding keeps stacking interest on top of already-earned interest the entire time.",
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

        {/* ── COMPOUND INTEREST ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Compound Interest Affects APY
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Compounding is the mechanism that makes APY more powerful than a simple interest rate. Every time interest is calculated and added to your balance, your new balance becomes the base for the next calculation. You earn interest on your interest. That snowball effect is everything.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            The more frequently interest compounds, the more you earn — even from the exact same nominal rate. Here&apos;s a direct comparison using a $10,000 deposit at 5.00% nominal rate over one year:
          </p>
          <table className="styled-table styled-table-plain">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Compounding Frequency</th>
                <th className="dark:text-slate-100">APY</th>
                <th className="dark:text-slate-100">Ending Balance</th>
                <th className="dark:text-slate-100">Interest Earned</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Annually",  "5.000%", "$10,500.00", "$500.00"],
                ["Quarterly", "5.095%", "$10,509.45", "$509.45"],
                ["Monthly",   "5.116%", "$10,511.62", "$511.62"],
                ["Daily",     "5.127%", "$10,512.67", "$512.67"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => <td key={j} className="dark:text-slate-100">{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The difference is $12.67 over one year between annual and daily compounding on $10,000. Not life-changing at that scale — but scale it to $100,000 over 20 years and daily compounding adds thousands of dollars you didn&apos;t have to work for.
          </p>
          <div className="pull-quote">
            &quot;Compound interest is the eighth wonder of the world. He who understands it, earns it; he who doesn&apos;t, pays it.&quot; — commonly attributed to Einstein (and deeply true regardless)
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── HIGH APY PLACES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Best Places to Earn High APY in the USA
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            The bank you choose matters enormously. The APY spread between the best and worst options in the US market is often 40x or more. Here&apos;s how the main account types and institution types compare.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            High-Yield Savings Accounts (HYSAs)
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Online banks dominate here because they don&apos;t pay rent on thousands of physical branches. Their lower overhead translates directly into higher yields for depositors.
          </p>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Account Type</th>
                <th className="dark:text-slate-100">Typical APY Range (2024)</th>
                <th className="dark:text-slate-100">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Big bank savings (Chase, BofA, Wells)", "0.01%–0.50%",  "Often require minimum balances"],
                ["Credit union savings",                   "1.50%–4.50%", "Membership required; often strong rates"],
                ["Online HYSA (SoFi, Marcus, Ally, etc.)", "4.50%–5.35%","No minimums common; best yields currently"],
                ["Money market accounts",                  "4.00%–5.25%", "Higher min. balance; often more features"],
                ["Treasury-backed savings (I-bonds, T-bills)","Varies",   "Currently competitive; low-to-no fees"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => <td key={j} className="dark:text-slate-100">{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            Certificates of Deposit (CDs)
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            CDs lock your money for a fixed period — 3 months to 5 years — in exchange for a guaranteed, fixed APY. In a high-rate environment like 2023–2024, short-term CDs have offered some of the best guaranteed yields in over a decade.
          </p>
          <table className="styled-table styled-table-plain mb-5">
            <thead>
              <tr>
                <th className="dark:text-slate-100">CD Term</th>
                <th className="dark:text-slate-100">Typical APY (2024)</th>
                <th className="dark:text-slate-100">Best for</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["3-month CD",  "4.75%–5.50%", "Short-term cash you won&apos;t need soon"],
                ["6-month CD",  "4.90%–5.55%", "Known expenses 6 months out"],
                ["1-year CD",   "4.75%–5.50%", "Classic sweet spot for rate + liquidity"],
                ["2-year CD",   "4.25%–5.00%", "Medium-term savings goals"],
                ["5-year CD",   "3.50%–4.50%", "Rate lock-in; good if rates fall"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => <td key={j} className="dark:text-slate-100">{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            CD laddering — splitting your deposit across multiple terms (e.g., $10K each in 3-month, 6-month, 1-year, and 2-year CDs) — gives you the best of both worlds: high yields and regular liquidity as each tier matures.
          </div>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-6">
            Fixed APY vs. Variable APY
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            A <strong>fixed APY</strong> — like what you get on a CD — doesn&apos;t change for the duration of the term. You know exactly what you&apos;ll earn. Predictable, simple.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            A <strong>variable APY</strong> — the kind on most HYSAs and money market accounts — moves with prevailing interest rates, which track the Federal Reserve&apos;s federal funds rate. When the Fed raises rates, variable APYs tend to rise. When the Fed cuts, they fall. For savings, variable APY is neither good nor bad — it just means you need to stay informed about rate trends.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── APY FOR SAVINGS, CDS, INVESTMENTS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            APY for Savings Accounts, CDs, and Investment Accounts
          </h2>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            Savings Accounts
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Your standard savings account is where most Americans keep their emergency fund and short-term cash. The problem: most traditional bank savings accounts pay APYs so low they barely register — Chase&apos;s standard savings account was paying 0.01% APY for years while inflation ran at 4%–8%.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            That gap between APY and inflation is the hidden cost of keeping money idle at the wrong institution. At 0.01% APY on $10,000, you earn $1 per year. At 5.00% APY at an online bank, you earn $500+ per year. The account is free either way — the only cost is inertia.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            Certificates of Deposit
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            CDs are savings products with a fixed term and fixed APY. Once you open one, your rate is locked regardless of what happens to market rates. They&apos;re FDIC-insured up to $250,000 per depositor per bank, making them essentially zero-risk savings vehicles.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The catch is the early withdrawal penalty — usually 90–180 days of interest if you pull your money out before the term ends. This makes CDs best for money you know you won&apos;t need for the specific term you choose.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            Investment Accounts and APY-Adjacent Returns
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Strictly speaking, APY applies to guaranteed savings products, not to investments with variable returns. But the concept of compound growth is universal — it&apos;s the engine behind long-term wealth in any index fund or retirement account.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            The S&P 500 has averaged roughly 10% annual returns over long periods. When you reinvest dividends — essentially letting compound growth work — your effective compound annual growth rate (CAGR) captures the same concept as APY. An APY calculator can approximate this growth, as long as you understand the return isn&apos;t guaranteed the way a CD&apos;s 5.25% APY is.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── BENEFITS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Benefits of Using an APY Calculator
          </h2>
          <div className="space-y-5">
            {[
              { n: "1", title: "Know what you'll actually earn", body: "Banks advertise APY prominently, but most people have no idea what that translates to in real dollars. An APY calculator turns the percentage into an actual number — $1,051 on $10,000 over two years, for example." },
              { n: "2", title: "Compare account offers fairly", body: "One bank offers 4.90% APY compounded monthly. Another offers 4.85% compounded daily. Which is actually better? The calculator gives you the definitive answer without mental gymnastics." },
              { n: "3", title: "Plan toward a specific savings goal", body: "Need $30,000 for a down payment in 3 years? An APY calculator with contribution modeling tells you exactly how much to deposit each month at current rates to hit your target." },
              { n: "4", title: "See the real cost of inflation", body: "Inflation running at 3% while your savings earns 0.5% APY? The calculator makes the real-terms shrinkage of your purchasing power undeniably clear — sometimes that&apos;s the motivation people need to finally move their money." },
              { n: "5", title: "Model CD laddering strategies", body: "Running multiple APY calculations across different CD terms lets you build a ladder structure that maximizes yield while keeping some portion of your savings maturing at regular intervals." },
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

        {/* ── TAX & INFLATION ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Taxes, Inflation, and Your Real APY Return
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Two things quietly chip away at your APY earnings that most calculators don&apos;t account for: taxes and inflation. Understanding both helps you set realistic expectations.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            Taxes on Interest Income
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Interest earned from savings accounts, money market accounts, and CDs is taxable as ordinary income in the US. Banks will send you a 1099-INT if you earn $10 or more in interest for the year. That earnings gets added to your total taxable income.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            If you&apos;re in the 22% federal tax bracket and you earn $1,000 in savings interest, you owe roughly $220 in federal tax on it — bringing your effective after-tax yield down from 5.00% to about 3.90%. For high earners, this gap widens further.
          </p>
          <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 p-4 rounded-sm mb-5">
            <p className="font-semibold text-indigo-900 dark:text-indigo-400 mb-2 font-sans text-sm tracking-wide uppercase">
              Tax-advantaged alternatives to consider:
            </p>
            <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base">
              {[
                "I-bonds — interest is deferred until redemption and exempt from state/local tax",
                "Treasury bills — exempt from state income tax, though subject to federal tax",
                "Municipal bond funds — interest often exempt from federal tax (and sometimes state)",
                "High-yield savings in a Roth IRA — no tax on interest earned inside the account",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-indigo-600 dark:text-indigo-400">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            Inflation vs. APY
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Your real (inflation-adjusted) return is what matters for long-term wealth. If your HYSA earns 5.00% APY but inflation is running at 3.2%, your real return is about 1.8%. Still positive — better than the 0.01% APY crowd who were losing nearly 7% in purchasing power in 2022.
          </p>
          <table className="styled-table styled-table-plain">
            <thead>
              <tr>
                <th className="dark:text-slate-100">APY</th>
                <th className="dark:text-slate-100">Inflation (CPI)</th>
                <th className="dark:text-slate-100">Real Return</th>
                <th className="dark:text-slate-100">Verdict</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["0.01%",  "3.2%", "-3.19%", "Losing purchasing power fast"],
                ["2.00%",  "3.2%", "-1.20%", "Still losing ground"],
                ["4.50%",  "3.2%", "+1.30%", "Breaking even + modest real gain"],
                ["5.25%",  "3.2%", "+2.05%", "Solid positive real return"],
                ["5.50%",  "2.5%", "+3.00%", "Strong real return if inflation cools"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => <td key={j} className="dark:text-slate-100">{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <hr className="rule-divider" />

        {/* ── MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common APY Mistakes to Avoid
          </h2>
          <div className="space-y-5">
            {[
              { n: "1", title: "Confusing APY with APR", body: "Banks sometimes use both terms on the same page in different contexts. APY is what your savings earns. APR is what your debt costs. Never apply APY thinking to borrowing decisions or vice versa." },
              { n: "2", title: "Ignoring the compounding frequency", body: "Two accounts advertising the same APY may actually produce the same yield — but if one quotes a nominal rate as 'APY' and the other quotes the true APY after compounding, the results will differ. Always confirm what you're looking at." },
              { n: "3", title: "Not reading the fine print on variable APYs", body: "High-yield savings accounts can — and do — change their APYs. An account advertised at 5.25% today might be at 4.10% in six months if the Fed cuts rates. For fixed needs, CDs eliminate this uncertainty." },
              { n: "4", title: "Leaving money in a low-APY account out of inertia", body: "This is the single most expensive APY mistake Americans make. Keeping $20,000 in a 0.01% APY account instead of a 5.00% HYSA costs approximately $998 per year in missed earnings. Every year." },
              { n: "5", title: "Forgetting the tax hit", body: "High earners sometimes see 5.00% APY and forget that after-tax it could be closer to 3.40% or 3.60%. This doesn't make HYSAs bad — it just means the comparison to other yield options (like munis or I-bonds) needs to account for taxes." },
              { n: "6", title: "Comparing APY across different time periods", body: "A 5.25% APY CD for 6 months doesn't mean you earn 5.25% at the end of those 6 months. You earn roughly half that — about 2.6%. APY is always annualized, so you need to prorate it for shorter periods." },
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
            Smart APY Strategies for Every Life Stage
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Students:</strong> Open an online HYSA for your emergency fund — even $500 at 5% APY beats 0.01% at a campus bank by 500x</>],
              [<><strong>Young professionals:</strong> Automate a monthly transfer to your HYSA. Even $200/month compounding daily turns into meaningful savings within 2–3 years</>],
              [<><strong>Families:</strong> Use a CD ladder for any cash you&apos;re not touching for 6–24 months — vacation fund, home repair reserves, tuition savings</>],
              [<><strong>Near-retirees:</strong> Shift some cash holdings from big-bank savings to online HYSAs or short CDs before retirement; the yield difference can add $2,000–$5,000/year on a $100K cash position</>],
              [<><strong>Retirees:</strong> Ladder CDs to create predictable monthly cash flow and lock in current rates before potential Fed rate cuts reduce variable APYs</>],
              [<><strong>Everyone:</strong> Check your savings account APY quarterly — online competition has driven frequent changes and new promotional rates worth switching for</>],
              [<><strong>High earners:</strong> Run an after-tax APY comparison before defaulting to the highest-APY account; tax-advantaged options sometimes beat the headline number</>],
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
                q: "What is APY in simple terms?",
                a: "APY (Annual Percentage Yield) is the actual return you earn on a savings deposit in one year, including the effect of compound interest. If your account earns 5.00% APY, a $1,000 deposit will grow to $1,050 by the end of the year — not just $50 added once, but interest building on itself throughout the year.",
              },
              {
                q: "What's the difference between APY and APR?",
                a: "APY applies to savings and investments — it's what you earn, and higher is better. APR applies to loans and debt — it's what you pay, and lower is better. APY includes the effect of compounding; APR typically does not. They're completely different metrics that happen to share some letters.",
              },
              {
                q: "How is APY calculated?",
                a: "APY is calculated using the formula: APY = (1 + r/n)^n - 1, where r is the nominal annual rate and n is the number of compounding periods per year. For a 5% rate compounded daily (n=365): APY = (1 + 0.05/365)^365 - 1 ≈ 5.127%. Your actual dollar earnings then use: A = P × (1 + r/n)^(n×t).",
              },
              {
                q: "Is a higher APY always better?",
                a: "For savings accounts and CDs, yes — a higher APY means more earnings on your deposit. But always check the full picture: minimum balance requirements, monthly fees (which can wipe out interest earnings), early withdrawal penalties for CDs, and whether the APY is promotional (temporary) or ongoing. A 6% APY with a $25 monthly fee might actually earn less than a 4.8% APY with no fees.",
              },
              {
                q: "What is a good APY for a savings account right now?",
                a: "As of 2024, a competitive APY for an online high-yield savings account is in the 4.75%–5.35% range. Traditional big-bank savings accounts typically offer 0.01%–0.50%. Credit unions often fall in between. If your savings account APY starts with a zero, you're almost certainly leaving significant money on the table.",
              },
              {
                q: "How does compounding frequency affect APY?",
                a: "More frequent compounding increases your effective APY. Daily compounding produces slightly more than monthly, which beats quarterly, which beats annual — even if the nominal rate is identical. Most online HYSAs compound daily, which is why they tend to outperform traditional bank accounts even on paper-equal rates.",
              },
              {
                q: "Do I pay taxes on APY earnings?",
                a: "Yes. Interest income from savings accounts, HYSAs, CDs, and money market accounts is taxed as ordinary income at your federal and state tax rates. You'll receive a 1099-INT from your bank if you earn $10 or more in interest during the year. Some alternatives like municipal bonds or I-bonds have tax advantages worth exploring for high-income earners.",
              },
              {
                q: "What is a CD ladder and why does it matter for APY?",
                a: "A CD ladder splits your savings across multiple CDs with different maturity dates — say, $5,000 each in 3-month, 6-month, 1-year, and 2-year CDs. When each tier matures, you either reinvest or access the cash. This strategy lets you capture high fixed APYs without locking all your money away, while maintaining regular liquidity.",
              },
              {
                q: "Can APY change over time?",
                a: "For variable-rate accounts like HYSAs and money market accounts — yes. Banks adjust their APYs in response to Federal Reserve rate changes. When the Fed raises rates, variable APYs typically follow upward; when the Fed cuts, they drop. For CDs, the APY is fixed for the term you choose, giving you rate certainty regardless of what happens in the market.",
              },
              {
                q: "What does the Federal Reserve have to do with my savings APY?",
                a: "The Fed sets the federal funds rate — the benchmark interest rate for the US banking system. When the Fed raises rates (as it did aggressively in 2022–2023), banks tend to raise their deposit APYs to attract savings. When the Fed cuts rates, deposit APYs gradually follow downward. This is why HYSA rates that were 0.50% in 2021 jumped above 5% by 2023.",
              },
              {
                q: "Are high-yield savings accounts safe?",
                a: "Yes, provided the bank is FDIC-insured (or NCUA-insured for credit unions). Deposits are protected up to $250,000 per depositor per institution. All major online banks offering high-yield savings accounts — Ally, Marcus, SoFi, Discover, and others — are FDIC-insured. The only risk is that the APY can change over time, but your principal is always safe up to the insured limit.",
              },
              {
                q: "What's the difference between APY on a savings account and APY on crypto savings?",
                a: "Traditional bank APY is backed by FDIC insurance and regulated by federal law. Crypto savings account 'APY' is not FDIC-insured, not regulated the same way, and the yields (sometimes advertised at 8%–15%+) carry substantial risk — including the possibility of losing your principal entirely. The term APY is used loosely in crypto; it's not equivalent to what your bank means when it says APY.",
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
            APY is one of the most democratizing concepts in personal finance. You don&apos;t need to be a sophisticated investor or understand complex markets to take advantage of compound interest. You just need to put your cash in the right place and let math do the work.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The gap between the best and worst savings options in America right now is extraordinary. We&apos;re talking 5.00% APY at an online HYSA versus 0.01% at a legacy bank — a 500x difference in earnings on the same deposit. The only obstacle between most Americans and that extra yield is the 10 minutes it takes to open a new account.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Use the APY calculator at the top of this page. Enter your balance, run different scenarios, compare accounts side by side. See what your money could actually be earning versus what it&apos;s earning now. That gap — whatever it is — is money sitting on the table.
          </p>
          <div className="pull-quote mt-8">
            Your savings don&apos;t care which account they&apos;re in. But your future self definitely will.
          </div>
        </section>

      </div>
    </article>
  );
}