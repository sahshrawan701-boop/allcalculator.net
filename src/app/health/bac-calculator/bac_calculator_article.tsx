import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function BACArticle() {
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
          <span className="meta-tag">Health · Alcohol Safety</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            BAC Calculator: Understand Your Blood Alcohol Content
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for responsible drinking
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You have two drinks at dinner. You feel fine, so you decide to drive home. But your blood alcohol content (BAC) might already be at or above the legal limit. The BAC calculator above helps you estimate your level of impairment based on drinks consumed, body weight, and time elapsed.
          </p>
          <p className="mb-5">
            Blood Alcohol Content (BAC) is a measure of the amount of alcohol in your bloodstream. It&apos;s expressed as a percentage — the higher the percentage, the more impaired you are. Understanding BAC is essential for making safe decisions about drinking and driving.
          </p>
          <p className="mb-5">
            But BAC varies significantly based on individual factors. Your weight, gender, metabolism, and drinking pattern all affect how alcohol affects you. The calculator provides an estimate, but individual responses can vary.
          </p>
          <p>
            Use this BAC calculator to estimate your blood alcohol content, understand how long it takes to sober up, and make informed decisions about when it&apos;s safe to drive.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How BAC Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            BAC is calculated using the Widmark formula, which estimates blood alcohol concentration based on alcohol consumed, body weight, gender, and time. The formula accounts for differences in body composition between men and women.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Widmark Formula:
          </p>
          <div className="formula-block">
            <pre>BAC = [(Alcohol in grams / (Body weight in grams × r)) × 100] - (Metabolism rate × Hours elapsed)</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where r is the alcohol distribution ratio (approximately 0.68 for men, 0.55 for women).
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Alcohol in grams", "Standard drink × 14 grams (US)"],
              ["Body weight in grams", "Weight in pounds × 453.6"],
              ["r (men)", "0.68 (alcohol distributes in total body water)"],
              ["r (women)", "0.55 (higher body fat percentage)"],
              ["Metabolism rate", "~0.015% per hour (average)"],
            ].map(([item, val]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {val}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            The body eliminates alcohol at a relatively constant rate, regardless of how much you drink. Coffee, cold showers, and other myths do not speed up this process. Only time reduces BAC.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── BAC LEVELS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            BAC Levels and Their Effects
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different BAC levels produce different effects on the body and behavior. Understanding these levels helps recognize impairment and make safe decisions.
          </p>

          {[
            {
              heading: "0.02% - 0.05%: Mild Impairment",
              rows: [
                ["Effects", "Slight mood elevation, mild relaxation"],
                ["Judgment", "Minimally affected"],
                ["Driving", "Legal in most jurisdictions, but impairment begins"],
              ],
              note: "At this level, you may feel relaxed but impairment is measurable. Reaction time begins to slow, and judgment may be subtly affected.",
            },
            {
              heading: "0.05% - 0.08%: Noticeable Impairment",
              rows: [
                ["Effects", "Increased relaxation, lowered inhibition"],
                ["Judgment", "Noticeably affected"],
                ["Driving", "Legal limit in many jurisdictions"],
              ],
              note: "This is the legal limit in many US states. Coordination, reaction time, and judgment are significantly impaired. Driving at this level is dangerous.",
            },
            {
              heading: "0.08% - 0.10%: Significant Impairment",
              rows: [
                ["Effects", "Slurred speech, loss of coordination"],
                ["Judgment", "Poor decision-making"],
                ["Driving", "Illegal in all US states"],
              ],
              note: "At 0.08%, you are legally intoxicated in all US states. Coordination, balance, and reaction time are severely impaired. Driving is extremely dangerous.",
            },
            {
              heading: "0.10% - 0.15%: Severe Impairment",
              rows: [
                ["Effects", "Significant motor impairment, nausea possible"],
                ["Judgment", "Severely compromised"],
                ["Driving", "Dangerous, illegal everywhere"],
              ],
              note: "At this level, you are clearly intoxicated. Vomiting, loss of balance, and blackouts become possible. Driving is life-threatening.",
            },
            {
              heading: "0.15% - 0.30%: Dangerous Impairment",
              rows: [
                ["Effects", "Severe confusion, potential unconsciousness"],
                ["Judgment", "Non-existent"],
                ["Driving", "Life-threatening, impossible"],
              ],
              note: "This level is dangerous. Loss of consciousness, memory blackouts, and alcohol poisoning are real risks. Medical attention may be needed.",
            },
            {
              heading: "0.30%+: Potentially Lethal",
              rows: [
                ["Effects", "Unconsciousness, coma, death possible"],
                ["Judgment", "None"],
                ["Driving", "Impossible"],
              ],
              note: "This level is life-threatening. Respiratory depression, coma, and death are possible. Immediate medical attention is critical.",
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

        {/* ── FACTORS AFFECTING BAC ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors That Affect BAC
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            BAC is not just about how much you drink. Multiple factors influence how alcohol affects your body. Understanding these factors helps you make safer decisions.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Body weight",
                body: "Heavier people generally have lower BAC for the same amount of alcohol because alcohol distributes in a larger volume of body water. Lighter people reach higher BAC faster.",
              },
              {
                n: "2",
                title: "Gender",
                body: "Women typically reach higher BAC than men for the same amount of alcohol. This is due to differences in body composition — women generally have a higher percentage of body fat and less body water.",
              },
              {
                n: "3",
                title: "Food consumption",
                body: "Eating before or while drinking slows alcohol absorption. Food in the stomach delays alcohol entering the bloodstream, resulting in a lower peak BAC. Drinking on an empty stomach leads to faster absorption.",
              },
              {
                n: "4",
                title: "Drinking speed",
                body: "Drinking quickly leads to a higher peak BAC because the liver cannot metabolize alcohol fast enough. Sipping slowly allows your body to process alcohol more effectively.",
              },
              {
                n: "5",
                title: "Medications",
                body: "Some medications interact with alcohol and can enhance impairment. Even over-the-counter medications can have dangerous interactions. Always check medication labels.",
              },
              {
                n: "6",
                title: "Fatigue and stress",
                body: "Being tired or stressed can enhance alcohol&apos;s effects. Fatigue slows reaction time and judgment, compounding alcohol impairment. Stress can also affect how alcohol is metabolized.",
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

        {/* ── SOBERING UP ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Long Does sobering Up Take?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The liver metabolizes alcohol at a relatively constant rate. On average, the human body eliminates about 0.015% BAC per hour. This rate varies somewhat between individuals but is relatively consistent for each person.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here&apos;s what this means in practical terms:
          </p>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Starting BAC</th>
                <th className="dark:text-slate-100">Time to reach 0.00%</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["0.02%", "~1.3 hours"],
                ["0.05%", "~3.3 hours"],
                ["0.08%", "~5.3 hours"],
                ["0.10%", "~6.7 hours"],
                ["0.15%", "~10 hours"],
                ["0.20%", "~13.3 hours"],
              ].map(([bac, time]) => (
                <tr key={bac}>
                  <td className="dark:text-slate-100">{bac}</td>
                  <td className="dark:text-slate-100">{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Nothing speeds up this process. Coffee, cold showers, exercise, and vomiting do not reduce BAC. Only time allows your liver to metabolize alcohol. Plan ahead and never rely on quick fixes.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── TIPS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-5 leading-snug">
            Practical Tips for Responsible Drinking
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — estimate your BAC accurately</>],
              [<><strong>Eat before drinking</strong> — food slows absorption</>],
              [<><strong>Drink water</strong> — stay hydrated</>],
              [<><strong>Pace yourself</strong> — limit to one drink per hour</>],
              [<><strong>Plan transportation</strong> — designate a driver</>],
              [<><strong>Know your limits</strong> — everyone is different</>],
              [<><strong>Avoid mixing</strong> — alcohol and medications are dangerous</>],
              [<><strong>Get enough sleep</strong> — fatigue enhances impairment</>],
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
                q: "How is BAC calculated?",
                a: "BAC is calculated using the Widmark formula, which considers alcohol consumed, body weight, gender, and time. The formula estimates blood alcohol concentration based on these factors. The calculator above uses this formula to provide an estimate.",
              },
              {
                q: "What is the legal BAC limit for driving?",
                a: "In the United States, the legal BAC limit for driving is 0.08% in all states. Some states have lower limits for commercial drivers (0.04%) and drivers under 21 (0.00% or 0.02%). Always check your local laws.",
              },
              {
                q: "How long does alcohol stay in your system?",
                a: "Alcohol can be detected in your system for varying periods depending on the test. Blood tests detect alcohol for up to 12 hours, urine tests for 1-3 days, and hair tests for up to 90 days. However, impairment lasts only while BAC is elevated.",
              },
              {
                q: "Does coffee sober you up?",
                a: "No. Coffee may make you feel more alert due to caffeine, but it does not reduce BAC or speed up alcohol metabolism. Only time eliminates alcohol from your system. Never rely on coffee to make it safe to drive.",
              },
              {
                q: "How many drinks is 0.08% BAC?",
                a: "It varies by individual. For an average man, about 4 drinks in one hour can reach 0.08%. For an average woman, about 3 drinks in one hour can reach 0.08%. Body weight, food consumption, and other factors affect this significantly.",
              },
              {
                q: "Can you speed up sobering up?",
                a: "No. The liver metabolizes alcohol at a constant rate. Nothing — not coffee, cold showers, exercise, or vomiting — speeds up this process. Only time reduces BAC. Plan ahead and never rely on myths.",
              },
              {
                q: "Is BAC the same for everyone?",
                a: "No. BAC varies significantly based on body weight, gender, body composition, food consumption, and individual metabolism. Two people drinking the same amount can have very different BAC levels.",
              },
              {
                q: "What is a standard drink?",
                a: "In the United States, a standard drink contains about 14 grams of pure alcohol. This is equivalent to 12 ounces of beer (5% alcohol), 5 ounces of wine (12% alcohol), or 1.5 ounces of distilled spirits (40% alcohol).",
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
            Understanding BAC is essential for making safe decisions about alcohol. The calculator above provides an estimate, but individual responses vary. Always err on the side of caution.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The safest approach is to plan ahead. Designate a driver, use rideshare services, or stay where you are if you&apos;ve been drinking. Never rely on quick fixes or myths about sobering up.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that impairment begins before you feel drunk. Even at low BAC levels, judgment and reaction time are affected. If you&apos;ve been drinking, don&apos;t drive — period.
          </p>
          <div className="pull-quote mt-8">
            The only thing that sobers you up is time. Plan ahead, make responsible choices, and never drink and drive.
          </div>
        </section>

      </div>
    </article>
  );
}
