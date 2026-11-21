import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function InflationArticle() {
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
          <span className="meta-tag">Personal Finance · Economics</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Inflation Calculator: The Silent Thief of Your Wealth
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for understanding and protecting against inflation
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You saved $10,000 in 1990. You kept it in a safe deposit box, untouched, for 30 years. In 2020, you opened the box and found the same $10,000. But it wasn't worth $10,000 anymore — it was worth about $5,000 in purchasing power. The other $5,000 disappeared, stolen by inflation.
          </p>
          <p className="mb-5">
            Inflation is the silent thief that erodes the value of money over time. It&apos;s not dramatic like a stock market crash or a job loss. It&apos;s slow, steady, and almost invisible — until you look back and realize how much purchasing power you've lost.
          </p>
          <p className="mb-5">
            The inflation calculator above helps you measure this erosion. It shows you how much money you'd need today to match the purchasing power of a past amount, or how much a current amount will be worth in the future. But understanding why inflation happens and how to protect against it is what actually preserves your wealth.
          </p>
          <p>
            Your money is losing value every day. The question isn't whether inflation will affect you — it's how much it will affect you, and what you're doing about it. Let's break down exactly how inflation works and how to protect yourself from its corrosive effects.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── WHAT IS INFLATION ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            What Is Inflation?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Inflation is the rate at which the general level of prices for goods and services rises over time. When inflation increases, each unit of currency buys fewer goods and services. It's the opposite of deflation, where prices fall and purchasing power increases.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Inflation is typically measured by the Consumer Price Index (CPI), which tracks the price changes of a basket of goods and services that represents what a typical consumer buys. The Bureau of Labor Statistics calculates CPI monthly in the United States.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Moderate inflation is considered normal in a growing economy — typically around 2% annually. High inflation (above 5%) erodes purchasing power quickly, while deflation (negative inflation) can signal economic trouble as consumers delay purchases expecting lower prices.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Inflation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Inflation occurs when there's too much money chasing too few goods. This can happen for several reasons: increased money supply, rising production costs, growing demand, or government policies. The result is the same — prices rise and money loses value.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Inflation Formula:
          </p>
          <div className="formula-block">
            <pre>Future Value = Present Value × (1 + Inflation Rate)^Years</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Present value", "$10,000"],
              ["Inflation rate", "3% annually"],
              ["Time period", "20 years"],
              ["Future value", "$10,000 × (1.03)^20 = $18,061"],
              ["Purchasing power", "$10,000 / $18,061 = 55.4% of original"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, you'd need $18,061 in 20 years to have the same purchasing power as $10,000 today. Conversely, $10,000 in 20 years will only buy what $5,540 buys today. This illustrates why inflation protection is essential for long-term financial planning.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── HISTORICAL CONTEXT ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Historical Inflation in the United States
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Understanding historical inflation helps put current rates in context. The US has experienced periods of both high and low inflation, with significant economic consequences.
          </p>

          {[
            {
              heading: "The Great Depression (1930s)",
              rows: [
                ["Inflation rate", "Deflation of -10% annually"],
                ["Causes", "Bank failures, reduced money supply, falling demand"],
                ["Impact", "Prices fell, wages dropped, unemployment soared"],
              ],
              note: "Deflation during the Great Depression was catastrophic. As prices fell, consumers delayed purchases expecting lower prices, creating a vicious cycle of reduced demand and further price declines.",
            },
            {
              heading: "The Great Inflation (1965–1982)",
              rows: [
                ["Inflation rate", "Peaked at 13.5% in 1980"],
                ["Causes", "Oil shocks, loose monetary policy, wage-price spiral"],
                ["Impact", "Purchasing power halved in 15 years, led to Volcker's tight monetary policy"],
              ],
              note: "This period taught economists that inflation can become entrenched. Breaking it required painful measures — Federal Reserve Chairman Paul Volcker raised interest rates to 20%, causing a recession but ultimately taming inflation.",
            },
            {
              heading: "The Great Moderation (1983–2007)",
              rows: [
                ["Inflation rate", "Averaged 3% annually"],
                ["Causes", "Improved monetary policy, globalization, technology"],
                ["Impact", "Stable prices, predictable economic environment"],
              ],
              note: "This period of low, stable inflation was unprecedented. It allowed for long-term financial planning and contributed to economic growth. The 2008 financial crisis ended this era.",
            },
            {
              heading: "Post-COVID Inflation (2021–2023)",
              rows: [
                ["Inflation rate", "Peaked at 9.1% in June 2022"],
                ["Causes", "Supply chain disruptions, stimulus spending, pent-up demand"],
                ["Impact", "Fastest inflation in 40 years, led to aggressive Fed rate hikes"],
              ],
              note: "The pandemic created a perfect storm for inflation: supply chains broke, governments flooded economies with stimulus, and consumers unleashed pent-up demand. The result was the highest inflation since the early 1980s.",
            },
          ].map((period: { heading: string; rows: string[][]; note: string }) => (
            <div key={period.heading} className="state-card">
              <h3>{period.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {period.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{period.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── REAL LIFE EXAMPLES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Real-Life Inflation Examples
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Inflation affects everything from groceries to housing. Here are some concrete examples of how inflation has impacted purchasing power over time.
          </p>

          {[
            {
              heading: "The Cost of a Gallon of Milk",
              rows: [
                ["1990", "$2.78"],
                ["2000", "$2.78"],
                ["2010", "$3.26"],
                ["2020", "$3.32"],
                ["2024", "$4.00"],
                ["Inflation (1990–2024)", "44% increase"],
              ],
              note: "A gallon of milk cost $2.78 in 1990. By 2024, it cost $4.00. That's a 44% increase over 34 years, averaging about 1.1% annually — below the overall inflation rate, showing how food prices can vary from general inflation.",
            },
            {
              heading: "The Cost of a New Home",
              rows: [
                ["1990", "$122,900"],
                ["2000", "$165,600"],
                ["2010", "$272,900"],
                ["2020", "$389,400"],
                ["2024", "$492,300"],
                ["Inflation (1990–2024)", "300% increase"],
              ],
              note: "Housing has experienced dramatic inflation, far outpacing general inflation. A home that cost $122,900 in 1990 costs $492,300 in 2024 — a 300% increase. This illustrates why housing is often the largest expense category and why real estate has been a good inflation hedge.",
            },
            {
              heading: "The Cost of College Tuition",
              rows: [
                ["1990", "$2,510 (public, in-state)"],
                ["2000", "$3,510"],
                ["2010", "$7,613"],
                ["2020", "$10,560"],
                ["2024", "$11,260"],
                ["Inflation (1990–2024)", "348% increase"],
              ],
              note: "College tuition has experienced hyperinflation, rising 348% since 1990. This far exceeds general inflation and wage growth, making college increasingly unaffordable for many families. It's one of the most significant inflation challenges facing Americans today.",
            },
          ].map((example: { heading: string; rows: string[][]; note: string }) => (
            <div key={example.heading} className="state-card">
              <h3>{example.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {example.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{example.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── PROTECTING AGAINST INFLATION ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Protect Against Inflation
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            You can't stop inflation, but you can protect your wealth from its effects. Here are the most effective strategies for preserving purchasing power over time.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Invest in stocks",
                body: "Historically, stocks have outperformed inflation by 6–7% annually. While volatile in the short term, equities provide long-term growth that preserves purchasing power. The S&P 500 has returned about 10% annually since 1926, well above inflation.",
              },
              {
                n: "2",
                title: "Own real estate",
                body: "Real estate is a classic inflation hedge. Property values and rents typically rise with inflation. Plus, real estate provides rental income that can also increase with inflation. Homeownership has historically been one of the best ways to build wealth and protect against inflation.",
              },
              {
                n: "3",
                title: "Invest in Treasury Inflation-Protected Securities (TIPS)",
                body: "TIPS are US government bonds specifically designed to protect against inflation. The principal adjusts with inflation, and you receive interest on the inflation-adjusted principal. They're risk-free inflation protection backed by the US government.",
              },
              {
                n: "4",
                title: "Diversify with commodities",
                body: "Commodities like gold, silver, and oil often rise during inflationary periods. Gold is particularly popular as an inflation hedge, though it can be volatile. A small allocation to commodities (5–10% of portfolio) can provide inflation protection.",
              },
              {
                n: "5",
                title: "Invest in I Bonds",
                body: "Series I Savings Bonds are inflation-indexed bonds issued by the US Treasury. They pay a fixed rate plus inflation, adjusted semiannually. They're tax-advantaged (state and local tax exempt) and have a $10,000 annual purchase limit per person.",
              },
              {
                n: "6",
                title: "Avoid holding too much cash",
                body: "Cash loses purchasing power every day due to inflation. Keep enough for emergencies (3–6 months of expenses), but invest the rest. Even high-yield savings accounts barely keep pace with inflation — they preserve nominal value, not purchasing power.",
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

        {/* ── INFLATION AND WAGES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Inflation and Wages: The Real Story
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Inflation doesn't just affect prices — it affects wages too. The key question is whether wages keep pace with inflation. When they don't, workers lose purchasing power even if their nominal wages increase.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Real wages are wages adjusted for inflation. If your nominal wage increases 3% but inflation is 4%, your real wage has decreased by 1%. You're earning more money, but you can buy less with it.
          </p>
          <div className="aside-callout">
            From 1979 to 2023, US productivity increased by about 70%, but real wages for typical workers increased by only about 15%. This productivity-wage gap means workers are producing more but capturing less of the value they create — a trend exacerbated by inflation.
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-4">
            Protecting against inflation isn't just about investment returns — it's about ensuring your income keeps pace. This means negotiating raises, developing skills that command higher pay, and seeking employment in industries with strong wage growth.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Inflation Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Even financially savvy people make mistakes when it comes to inflation. Here's what to watch out for.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Confusing nominal and real returns",
                body: "A 5% investment return sounds good, but if inflation is 4%, your real return is only 1%. Always consider inflation when evaluating investment performance. Real returns are what matter for purchasing power.",
              },
              {
                n: "2",
                title: "Holding too much cash",
                body: "Cash is guaranteed to lose purchasing power over time due to inflation. Keep enough for emergencies, but invest the rest. Even low-risk investments like bonds typically outperform cash over the long term.",
              },
              {
                n: "3",
                title: "Ignoring inflation in retirement planning",
                body: "Retirement lasts 20–30 years. Even 3% inflation will cut purchasing power in half over 24 years. Your retirement plan must account for inflation or you'll run out of money sooner than expected.",
              },
              {
                n: "4",
                title: "Assuming inflation is always low",
                body: "The post-2008 era of low inflation was unusual historically. Inflation can spike, as it did in 2021–2023. Plan for higher inflation scenarios, not just the recent past.",
              },
              {
                n: "5",
                title: "Focusing only on nominal wage increases",
                body: "A 3% raise when inflation is 4% is actually a pay cut in real terms. Focus on real wage growth — wage increases above inflation — not just nominal increases.",
              },
              {
                n: "6",
                title: "Underestimating the long-term impact",
                body: "3% inflation doesn't sound like much, but over 30 years, it reduces purchasing power by 60%. Small annual inflation compounds dramatically over time. Take long-term inflation seriously in your financial planning.",
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
            Practical Tips for Inflation Protection
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — calculate how inflation will affect your savings and income over time</>],
              [<><strong>Invest in growth assets</strong> — stocks and real estate historically outperform inflation over long periods</>],
              [<><strong>Consider TIPS or I Bonds</strong> — government-backed inflation protection for risk-averse investors</>],
              [<><strong>Diversify your portfolio</strong> — different asset classes respond differently to inflation, diversification provides protection</>],
              [<><strong>Review your retirement plan</strong> — ensure it accounts for inflation, not just nominal returns</>],
              [<><strong>Negotiate raises regularly</strong> — aim for real wage growth, not just nominal increases</>],
              [<><strong>Develop valuable skills</strong> — skills in high-demand industries command higher wages that can outpace inflation</>],
              [<><strong>Minimize high-interest debt</strong> — inflation can help with fixed-rate debt, but high-interest debt still erodes wealth</>],
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
                q: "What is the current inflation rate?",
                a: "As of 2024, US inflation is around 3–4%, down from the 2022 peak of 9.1%. The Federal Reserve targets 2% inflation as optimal for economic growth. Inflation rates vary by country and can change significantly based on economic conditions.",
              },
              {
                q: "How do I calculate inflation impact on my savings?",
                a: "Use the formula: Future Value = Present Value × (1 + Inflation Rate)^Years. The calculator above does this automatically. For example, $10,000 at 3% inflation for 20 years equals $18,061 in future dollars, meaning your $10,000 today will only buy what $5,540 buys in 20 years.",
              },
              {
                q: "What investments protect against inflation?",
                a: "Stocks, real estate, TIPS, I Bonds, and commodities are traditional inflation hedges. Stocks and real estate have historically outperformed inflation by 6–7% annually. TIPS and I Bonds provide guaranteed inflation protection backed by the US government.",
              },
              {
                q: "Is inflation always bad?",
                a: "Moderate inflation (around 2%) is considered healthy for economic growth. It encourages spending and investment, prevents deflation, and allows for wage adjustments. High inflation (above 5%) erodes purchasing power and creates economic instability. Deflation (negative inflation) can be even worse, causing recessions.",
              },
              {
                q: "How does inflation affect debt?",
                a: "Inflation can help borrowers with fixed-rate debt. If you owe $100,000 at 5% interest and inflation is 4%, the real interest rate is only 1%. Inflation reduces the real value of debt over time. However, variable-rate debt can become more expensive if interest rates rise to combat inflation.",
              },
              {
                q: "What is the difference between CPI and PCE?",
                a: "CPI (Consumer Price Index) measures price changes for a basket of goods and services. PCE (Personal Consumption Expenditures) is the Federal Reserve's preferred measure, which accounts for consumer substitution behavior. PCE typically shows slightly lower inflation than CPI.",
              },
              {
                q: "How does inflation affect retirement planning?",
                a: "Inflation is critical in retirement planning. A 3% inflation rate will halve purchasing power in 24 years. If you need $50,000 annually in retirement today, you'll need about $90,000 in 20 years at 3% inflation. Always plan for inflation in retirement calculations.",
              },
              {
                q: "What is hyperinflation?",
                a: "Hyperinflation is extremely high and typically accelerating inflation, often exceeding 50% per month. It occurs when governments print money to finance spending, destroying the currency's value. Examples include Germany in the 1920s, Zimbabwe in the 2000s, and Venezuela recently.",
              },
              {
                q: "How can I tell if my wages are keeping up with inflation?",
                a: "Compare your wage increase percentage to the inflation rate. If your wages increased 4% and inflation was 3%, your real wages increased 1%. If wages increased 2% and inflation was 3%, your real wages decreased 1%. Real wage growth is what matters for purchasing power.",
              },
              {
                q: "Should I buy gold to protect against inflation?",
                a: "Gold can be part of an inflation hedge strategy, but it's volatile and doesn't generate income. A small allocation (5–10% of portfolio) may provide diversification, but relying solely on gold is risky. Stocks and real estate have historically been more reliable inflation hedges.",
              },
              {
                q: "What is the rule of 72 for inflation?",
                a: "The rule of 72 estimates how long it takes for prices to double at a given inflation rate. Divide 72 by the inflation rate to get the years. At 3% inflation, prices double in 24 years (72 ÷ 3 = 24). At 6% inflation, prices double in 12 years.",
              },
              {
                q: "How does the Federal Reserve control inflation?",
                a: "The Fed primarily controls inflation through interest rates. Higher interest rates slow economic activity and reduce inflation. Lower rates stimulate growth but can increase inflation. The Fed also uses quantitative easing (buying bonds) and tightening (selling bonds) to influence money supply and inflation.",
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
            Inflation is the silent thief that steals your wealth while you sleep. It's not dramatic or attention-grabbing, but it's relentless. Over decades, even moderate inflation can halve your purchasing power. Ignoring it is not an option — it will affect you whether you plan for it or not.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page shows you the math. But the real work is taking action: investing in growth assets, diversifying your portfolio, and ensuring your income keeps pace with inflation. These aren't optional — they're essential for preserving your financial future.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Your money is losing value every day. The question isn't whether inflation will affect you — it's how much you'll let it affect you. Protect your purchasing power, invest for growth, and build wealth that outpaces inflation. Your future self will thank you.
          </p>
          <div className="pull-quote mt-8">
            Inflation doesn't care about your savings. It only cares about the money supply. Protect yourself accordingly.
          </div>
        </section>

      </div>
    </article>
  );
}
