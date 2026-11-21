import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function IdealWeightArticle() {
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
          <span className="meta-tag">Health · Weight Management</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Ideal Weight Calculator: Find Your Target Weight
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for ideal weight assessment
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You want to know what your ideal weight should be. But ideal weight isn&apos;t a single number — different formulas give different results, and individual factors like body composition, frame size, and muscle mass all play a role. Understanding these variations helps you set realistic goals.
          </p>
          <p className="mb-5">
            Ideal weight formulas have been developed over decades to estimate what weight is associated with the lowest health risks. These formulas consider height, gender, and sometimes frame size to provide a target weight.
          </p>
          <p className="mb-5">
            The ideal weight calculator above uses several established formulas to give you a range of ideal weights. Comparing results from different formulas provides a more complete picture than relying on a single calculation.
          </p>
          <p>
            Use the ideal weight calculator to understand different formula results, learn about the history of ideal weight calculations, and set realistic weight goals for your health journey.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Ideal Weight Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Ideal weight formulas use height and gender to estimate a target weight. Some formulas also account for frame size. Each formula was developed based on different populations and methodologies, which is why results vary.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Common ideal weight formulas:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Devine Formula (1974)", "Based on height and gender, widely used"],
              ["Robinson Formula (1983)", "Modification of Devine formula"],
              ["Miller Formula (1983)", "Developed for modern populations"],
              ["Hamwi Formula (1964)", "Traditional formula still used"],
              ["BMI Method", "Weight for BMI of 21.7 (midpoint of healthy range)"],
            ].map(([item, val]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {val}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            Different formulas give different results because they were developed using different methodologies and populations. Use the range as a guide rather than a strict target. Individual factors like muscle mass significantly affect what&apos;s ideal for you.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA COMPARISON ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Comparing Ideal Weight Formulas
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Each formula has its strengths and limitations. Understanding these differences helps you interpret the results appropriately.
          </p>

          {[
            {
              heading: "Devine Formula",
              rows: [
                ["Year", "1974"],
                ["Basis", "Height and gender"],
                ["Use Case", "Medication dosing, general reference"],
              ],
              note: "The Devine formula is one of the most widely used ideal weight formulas. It was originally developed for calculating medication doses but is now used for general weight assessment.",
            },
            {
              heading: "Robinson Formula",
              rows: [
                ["Year", "1983"],
                ["Basis", "Height and gender"],
                ["Use Case", "Medical reference, clinical settings"],
              ],
              note: "The Robinson formula is a modification of the Devine formula. It tends to give slightly lower results than Devine and is commonly used in clinical settings.",
            },
            {
              heading: "Miller Formula",
              rows: [
                ["Year", "1983"],
                ["Basis", "Height and gender"],
                ["Use Case", "Modern populations, updated standards"],
              ],
              note: "The Miller formula was developed using data from more modern populations. It tends to give higher results than older formulas, reflecting changes in average body sizes.",
            },
            {
              heading: "Hamwi Formula",
              rows: [
                ["Year", "1964"],
                ["Basis", "Height, gender, and frame size"],
                ["Use Case", "Dietary planning, weight management"],
              ],
              note: "The Hamwi formula includes frame size adjustments, making it more personalized. It's commonly used by dietitians for weight management planning.",
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

        {/* ── FRAME SIZE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Understanding Body Frame Size
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Body frame size affects ideal weight calculations. People with larger frames naturally weigh more than those with smaller frames at the same height. Frame size is typically determined by wrist circumference.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Small frame",
                body: "Wrist circumference below 6.5 inches for men or 5.5 inches for women. People with small frames should aim for the lower end of the ideal weight range.",
              },
              {
                n: "2",
                title: "Medium frame",
                body: "Wrist circumference 6.5-7.5 inches for men or 5.5-6.5 inches for women. Most people fall into this category. Standard formulas work well for medium frames.",
              },
              {
                n: "3",
                title: "Large frame",
                body: "Wrist circumference above 7.5 inches for men or 6.5 inches for women. People with large frames can carry more weight healthily and should aim for the higher end of the range.",
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

        {/* ── LIMITATIONS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Limitations of Ideal Weight Formulas
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Ideal weight formulas have significant limitations. They don't account for many important factors that affect what a healthy weight looks like for an individual.
          </p>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Factor</th>
                <th className="dark:text-slate-100">Why It Matters</th>
                <th className="dark:text-slate-100">Impact on Formula</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Muscle Mass", "Muscle weighs more than fat", "Athletes may be above ideal weight but healthy"],
                ["Body Composition", "Fat vs muscle ratio affects health", "Two people at same weight can have very different health"],
                ["Age", "Body composition changes with age", "Older adults may have different ideal weights"],
                ["Ethnicity", "Different populations have different builds", "Formulas based on specific populations may not generalize"],
                ["Bone Density", "Denser bones weigh more", "Individual variation in bone structure affects weight"],
              ].map(([factor, why, impact]) => (
                <tr key={factor}>
                  <td className="dark:text-slate-100">{factor}</td>
                  <td className="dark:text-slate-100">{why}</td>
                  <td className="dark:text-slate-100">{impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Ideal weight formulas are estimates, not prescriptions. Focus on overall health markers like blood pressure, cholesterol, and fitness level rather than achieving a specific weight from a formula.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── TIPS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-5 leading-snug">
            Practical Tips for Using Ideal Weight
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — compare multiple formulas</>],
              [<><strong>Consider frame size</strong> — adjust for your build</>],
              [<><strong>Focus on range</strong> — not a single number</>],
              [<><strong>Account for muscle</strong> — athletes weigh more</>],
              [<><strong>Check health markers</strong> — more important than weight</>],
              [<><strong>Set realistic goals</strong> — sustainable changes</>],
              [<><strong>Consult professionals</strong> — personalized guidance</>],
              [<><strong>Focus on health</strong> — not just the scale</>],
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
                q: "How is ideal weight calculated?",
                a: "Ideal weight is calculated using formulas that consider height and gender. Some formulas also account for frame size. Common formulas include Devine, Robinson, Miller, and Hamwi. Each gives slightly different results.",
              },
              {
                q: "Why do different formulas give different results?",
                a: "Different formulas were developed using different methodologies, populations, and time periods. Some were based on insurance data, others on medical data. This is why comparing multiple formulas gives a more complete picture.",
              },
              {
                q: "What is the most accurate ideal weight formula?",
                a: "No single formula is most accurate for everyone. The Hamwi formula accounts for frame size, which makes it more personalized. However, all formulas have limitations and don't account for muscle mass or body composition.",
              },
              {
                q: "Should I try to reach my ideal weight?",
                a: "Ideal weight is a reference point, not a strict target. Focus on reaching a healthy weight range and improving overall health markers. If you're significantly above ideal weight, working toward it can improve health.",
              },
              {
                q: "How does frame size affect ideal weight?",
                a: "People with larger frames naturally weigh more than those with smaller frames at the same height. Frame size is typically measured by wrist circumference. Large-framed individuals should aim for the higher end of the ideal weight range.",
              },
              {
                q: "Can athletes be above their ideal weight?",
                a: "Yes. Athletes often have higher muscle mass, which weighs more than fat. An athlete may be above their ideal weight according to formulas but still be very healthy and fit. Body composition is more important than weight alone.",
              },
              {
                q: "Is ideal weight the same as healthy weight?",
                a: "Similar but not identical. Healthy weight typically refers to a BMI range of 18.5-24.9. Ideal weight formulas often target a specific BMI point (usually around 21.7) within the healthy range.",
              },
              {
                q: "How often should ideal weight be recalculated?",
                a: "Ideal weight based on height and gender doesn't change significantly for adults. However, as you age, your body composition changes, and what's ideal may shift. Recalculate if you have significant changes in muscle mass.",
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
            Ideal weight formulas provide useful reference points, but they're estimates rather than prescriptions. The calculator above shows results from multiple formulas to give you a comprehensive view.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that individual factors like muscle mass, body composition, frame size, and overall health are more important than achieving a specific number from a formula.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Focus on building healthy habits that support overall well-being. A balanced diet, regular physical activity, adequate sleep, and stress management are the foundations of health, regardless of what any formula says your ideal weight should be.
          </p>
          <div className="pull-quote mt-8">
            Your ideal weight is the weight at which you feel healthy, energetic, and confident. Let that be your guide rather than a formula.
          </div>
        </section>

      </div>
    </article>
  );
}
