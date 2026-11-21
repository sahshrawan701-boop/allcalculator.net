import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function PregnancyArticle() {
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
          <span className="meta-tag">Health · Pregnancy</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Pregnancy Calculator: Track Your Pregnancy Timeline
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for pregnancy tracking
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You're pregnant or planning to be, and you want to understand your pregnancy timeline. Knowing your due date and tracking your pregnancy week by week helps you prepare for each stage and ensures you receive appropriate prenatal care.
          </p>
          <p className="mb-5">
            Pregnancy typically lasts about 40 weeks from the first day of your last menstrual period. The pregnancy calculator above estimates your due date and tracks your progress through each trimester based on this calculation.
          </p>
          <p className="mb-5">
            Understanding your pregnancy timeline helps you schedule prenatal appointments, prepare for baby's arrival, and track your baby's development throughout the journey.
          </p>
          <p>
            Use the pregnancy calculator to determine your due date, understand trimester milestones, and prepare for each stage of your pregnancy.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Pregnancy Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator uses Naegele's rule, the standard method for estimating due date. It calculates 280 days (40 weeks) from the first day of your last menstrual period, assuming a 28-day cycle with ovulation on day 14.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Naegele's Rule Formula:
          </p>
          <div className="formula-block">
            <pre>Due Date = First Day of Last Period + 280 Days</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Trimester breakdown:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["First Trimester", "Weeks 1-12"],
              ["Second Trimester", "Weeks 13-26"],
              ["Third Trimester", "Weeks 27-40"],
            ].map(([item, val]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {val}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            This calculation is an estimate. Only about 5% of babies are born on their exact due date. Most births occur between 37 and 42 weeks. Your healthcare provider will monitor your pregnancy and adjust as needed.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── TRIMESTERS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Understanding Pregnancy Trimesters
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Pregnancy is divided into three trimesters, each with distinct developmental milestones and maternal changes. Understanding these stages helps you know what to expect.
          </p>

          {[
            {
              heading: "First Trimester (Weeks 1-12)",
              rows: [
                ["Baby Development", "Major organs form, heart begins beating"],
                ["Maternal Changes", "Morning sickness, fatigue, breast tenderness"],
                ["Key Milestones", "First heartbeat, organ formation"],
              ],
              note: "The first trimester is a time of rapid development. Many women experience morning sickness and fatigue. Prenatal care typically begins around week 8.",
            },
            {
              heading: "Second Trimester (Weeks 13-26)",
              rows: [
                ["Baby Development", "Baby grows rapidly, movements felt"],
                ["Maternal Changes", "Energy returns, baby bump shows"],
                ["Key Milestones", "Gender determination, quickening"],
              ],
              note: "Often called the honeymoon phase of pregnancy. Many women feel better and have more energy. You'll likely feel the baby move for the first time around week 16-20.",
            },
            {
              heading: "Third Trimester (Weeks 27-40)",
              rows: [
                ["Baby Development", "Final growth, preparation for birth"],
                ["Maternal Changes", "Discomfort increases, nesting instinct"],
                ["Key Milestones", "Viability, full term, due date"],
              ],
              note: "The final stretch as baby prepares for birth. You may experience increased discomfort as baby grows. Prenatal visits become more frequent to monitor for labor.",
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

        {/* ── PREPARATION ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Preparing for Each Trimester
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Each trimester requires different preparations. Understanding what to expect helps you plan ahead for your pregnancy journey.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "First trimester preparation",
                body: "Schedule your first prenatal appointment. Start taking prenatal vitamins with folic acid. Research healthcare providers if you haven't chosen one. Prepare for potential morning sickness.",
              },
              {
                n: "2",
                title: "Second trimester preparation",
                body: "Plan maternity clothes as your bump grows. Consider childbirth classes. Start planning the nursery. Research pediatricians. Many women announce their pregnancy during this trimester.",
              },
              {
                n: "3",
                title: "Third trimester preparation",
                body: "Finalize nursery preparations. Pack your hospital bag. Create a birth plan. Install the car seat. Arrange for help after the baby arrives. Complete any work projects.",
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

        {/* ── IMPORTANT DATES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Important Pregnancy Milestones
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Several key milestones occur throughout pregnancy. Tracking these dates helps you prepare for important events and appointments.
          </p>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Milestone</th>
                <th className="dark:text-slate-100">Timing</th>
                <th className="dark:text-slate-100">Significance</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["First Prenatal Visit", "Week 8-12", "Initial health assessment"],
                ["First Heartbeat", "Week 6-12", "Confirmation of viable pregnancy"],
                ["Gender Reveal", "Week 16-20", "Optional ultrasound"],
                ["Anatomy Scan", "Week 18-22", "Detailed baby development check"],
                ["Viability", "Week 24", "Baby could survive outside womb"],
                ["Full Term", "Week 37", "Baby considered ready for birth"],
                ["Due Date", "Week 40", "Estimated delivery date"],
              ].map(([milestone, timing, significance]) => (
                <tr key={milestone}>
                  <td className="dark:text-slate-100">{milestone}</td>
                  <td className="dark:text-slate-100">{timing}</td>
                  <td className="dark:text-slate-100">{significance}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            These are general timelines. Your healthcare provider will schedule specific appointments based on your individual pregnancy. Always follow your provider's recommendations for prenatal care.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── TIPS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-5 leading-snug">
            Practical Tips for a Healthy Pregnancy
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — track your pregnancy timeline</>],
              [<><strong>Take prenatal vitamins</strong> — start before conception if possible</>],
              [<><strong>Attend prenatal appointments</strong> — regular checkups are essential</>],
              [<><strong>Eat a balanced diet</strong> — nutrient-dense whole foods</>],
              [<><strong>Stay hydrated</strong> — water supports amniotic fluid</>],
              [<><strong>Exercise moderately</strong> — with provider approval</>],
              [<><strong>Get enough rest</strong> — your body needs extra rest</>],
              [<><strong>Avoid harmful substances</strong> — alcohol, tobacco, certain medications</>],
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
                q: "How is the due date calculated?",
                a: "The due date is calculated using Naegele's rule: 280 days from the first day of your last menstrual period. This assumes a 28-day cycle with ovulation on day 14. Adjustments are made for irregular cycles if known.",
              },
              {
                q: "How accurate are due date calculations?",
                a: "Only about 5% of babies are born on their exact due date. Most births occur between 37 and 42 weeks. The calculation is an estimate, not a guarantee. Your provider will monitor progress and adjust expectations.",
              },
              {
                q: "What if I don't know my last period date?",
                a: "If you're unsure of your last period, your healthcare provider can estimate due date using ultrasound measurements taken early in pregnancy. Early ultrasounds are the most accurate method for dating pregnancy.",
              },
              {
                q: "Can due date change during pregnancy?",
                a: "Yes. If early ultrasound measurements indicate a different gestational age than calculated by last period, your due date may be adjusted. This is common and ensures accurate tracking of baby's development.",
              },
              {
                q: "What is considered full term?",
                a: "Full term is 37-42 weeks of pregnancy. Early term is 37-38 weeks, full term is 39-40 weeks, late term is 41 weeks, and post-term is 42+ weeks. Most providers prefer to deliver by 41-42 weeks.",
              },
              {
                q: "How many prenatal appointments will I have?",
                a: "Typically, you'll have monthly appointments until week 28, then every two weeks until week 36, then weekly until delivery. High-risk pregnancies may require more frequent monitoring.",
              },
              {
                q: "When should I tell people I'm pregnant?",
                a: "Many couples wait until after the first trimester (week 12) when the risk of miscarriage decreases significantly. However, this is a personal decision. Some choose to announce earlier or later.",
              },
              {
                q: "What should I do if my cycle is irregular?",
                a: "If you have irregular cycles, the last period method may not be accurate. Your healthcare provider will use early ultrasound measurements to determine gestational age and estimate due date more accurately.",
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
            Understanding your pregnancy timeline helps you prepare for this transformative journey. The calculator above provides estimates based on standard calculations, but every pregnancy is unique.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that due dates are estimates, not deadlines. Babies arrive when they're ready. Focus on staying healthy, attending prenatal appointments, and preparing for your new arrival.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Always consult your healthcare provider for personalized guidance throughout your pregnancy. They will monitor your progress and ensure both you and baby stay healthy.
          </p>
          <div className="pull-quote mt-8">
            Pregnancy is a journey, not a race. Trust your body, follow your healthcare provider's guidance, and prepare for the amazing adventure ahead.
          </div>
        </section>

      </div>
    </article>
  );
}
