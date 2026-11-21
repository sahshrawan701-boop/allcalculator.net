import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function PaceArticle() {
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
          <span className="meta-tag">Health · Running & Fitness</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Pace Calculator: Plan Your Running Pace
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for running pace calculation
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You're training for a race or just trying to improve your running. Knowing your pace helps you plan your workouts, set realistic goals, and track your progress over time. But pace calculations can be confusing with minutes per mile, minutes per kilometer, and speed in miles per hour.
          </p>
          <p className="mb-5">
            Running pace is typically expressed as minutes per mile or minutes per kilometer. This tells you how long it takes to cover a given distance. Understanding your pace helps you plan training runs, race strategies, and estimate finish times.
          </p>
          <p className="mb-5">
            The pace calculator above converts between different pace formats, calculates finish times for various distances, and helps you plan your training based on your goals.
          </p>
          <p>
            Use the pace calculator to understand your running pace, plan your race strategy, and set realistic goals for your training and racing.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Pace Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Pace is calculated as time divided by distance. The calculator can convert between different pace formats and calculate finish times based on your pace for various distances.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Pace Formula:
          </p>
          <div className="formula-block">
            <pre>Pace = Time ÷ Distance</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Common pace formats:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Minutes per Mile", "Standard in US races"],
              ["Minutes per Kilometer", "Standard internationally"],
              ["Miles per Hour", "Speed format"],
              ["Kilometers per Hour", "Speed format internationally"],
            ].map(([item, val]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {val}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            Pace and speed are inversely related — faster pace means higher speed. A 10-minute mile pace equals 6.0 mph. Understanding both helps you communicate with runners using different systems.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── PACE CATEGORIES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Running Pace Categories
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Running paces are often categorized by intensity level. Understanding these categories helps you structure your training appropriately for different goals.
          </p>

          {[
            {
              heading: "Easy/Recovery Pace",
              rows: [
                ["Intensity", "Very low"],
                ["Purpose", "Recovery, building aerobic base"],
                ["Conversation", "Can hold full conversation"],
              ],
              note: "This is the foundation of training. Most of your running should be at this easy pace. It builds aerobic capacity without excessive stress.",
            },
            {
              heading: "Steady/Tempo Pace",
              rows: [
                ["Intensity", "Moderate"],
                ["Purpose", "Building endurance, stamina"],
                ["Conversation", "Short sentences only"],
              ],
              note: "This is comfortably hard running. You can sustain it for extended periods but it requires concentration. It improves your lactate threshold.",
            },
            {
              heading: "Threshold/Interval Pace",
              rows: [
                ["Intensity", "Hard"],
                ["Purpose", "Improving speed, race performance"],
                ["Conversation", "Cannot talk"],
              ],
              note: "This is fast running that you can sustain for limited periods. It's used for interval training and improves your maximum aerobic capacity.",
            },
            {
              heading: "Sprint Pace",
              rows: [
                ["Intensity", "Maximum effort"],
                ["Purpose", "Power, speed development"],
                ["Conversation", "Impossible"],
              ],
              note: "This is all-out effort for short distances. It develops power and speed but is very stressful. Use sparingly in training.",
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

        {/* ── TRAINING PACES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Training Paces by Goal
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different race distances and goals require different training approaches. Understanding the appropriate paces for your goal helps you train effectively.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "5K training",
                body: "Focus on threshold and interval training. Include weekly speed work at goal race pace or slightly faster. Easy runs should make up about 70% of training.",
              },
              {
                n: "2",
                title: "10K training",
                body: "Similar to 5K but with more emphasis on tempo runs. Build endurance through longer easy runs. Include threshold work to improve lactate threshold.",
              },
              {
                n: "3",
                title: "Half marathon training",
                body: "Emphasize long runs and tempo runs. Build aerobic base with easy runs. Include some threshold work but focus more on endurance than speed.",
              },
              {
                n: "4",
                title: "Marathon training",
                body: "Most training should be easy pace. Long runs are crucial. Include some marathon goal pace work in long runs to practice race pace.",
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

        {/* ── IMPROVING PACE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Improve Your Running Pace
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Improving running pace requires a combination of different training approaches. Consistency and proper progression are key to sustainable improvement.
          </p>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Method</th>
                <th className="dark:text-slate-100">Implementation</th>
                <th className="dark:text-slate-100">Benefit</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Interval Training", "Short bursts at fast pace with recovery", "Improves speed and VO2 max"],
                ["Tempo Runs", "Sustained effort at threshold pace", "Improves lactate threshold"],
                ["Hill Training", "Running uphill repeats", "Builds strength and power"],
                ["Long Runs", "Extended distance at easy pace", "Builds aerobic endurance"],
                ["Speed Work", "Short sprints at maximum effort", "Improves running economy"],
                ["Consistency", "Regular training schedule", "Adaptation and improvement"],
              ].map(([method, implementation, benefit]) => (
                <tr key={method}>
                  <td className="dark:text-slate-100">{method}</td>
                  <td className="dark:text-slate-100">{implementation}</td>
                  <td className="dark:text-slate-100">{benefit}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Most improvement comes from consistent training at appropriate intensities. Avoid the temptation to run too fast too often. About 80% of training should be at easy pace.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── TIPS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-5 leading-snug">
            Practical Tips for Pace Training
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — calculate your target paces</>],
              [<><strong>Start easy</strong> — build base before speed work</>],
              [<><strong>Use a GPS watch</strong> — track pace accurately</>],
              [<><strong>Run by feel</strong> — learn effort levels</>],
              [<><strong>Progress gradually</strong> — increase intensity slowly</>],
              [<><strong>Recover adequately</strong> — rest is essential</>],
              [<><strong>Stay consistent</strong> — regular training yields results</>],
              [<><strong>Listen to your body</strong> — avoid overtraining</>],
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
                q: "How is running pace calculated?",
                a: "Running pace is calculated by dividing time by distance. For example, if you run 3 miles in 30 minutes, your pace is 10 minutes per mile. The calculator handles conversions between different pace formats.",
              },
              {
                q: "What is a good running pace?",
                a: "Good pace depends on your fitness level, age, and goals. A recreational runner might average 10-12 minutes per mile, while competitive runners run much faster. Focus on your own improvement rather than comparing to others.",
              },
              {
                q: "How do I determine my race pace?",
                a: "Use recent race times or time trials to establish your current pace. For goal setting, aim for realistic improvements based on your training progression. The calculator can estimate finish times based on your pace.",
              },
              {
                q: "Should I always run at the same pace?",
                a: "No. Effective training includes running at different paces. Easy runs should be slow, while workouts should be faster. Variety in training pace leads to better overall fitness.",
              },
              {
                q: "How often should I do speed work?",
                a: "Most runners benefit from 1-2 speed sessions per week. More experienced runners may handle 3. Always allow adequate recovery between hard sessions. Beginners should focus on building aerobic base first.",
              },
              {
                q: "What is negative split running?",
                a: "Negative split means running the second half of a race or workout faster than the first half. This is often an effective racing strategy, as it prevents going out too fast and fading later.",
              },
              {
                q: "How does elevation affect pace?",
                a: "Running uphill significantly slows pace, while downhill allows faster paces. When training on hills, focus on effort rather than pace. Adjust your expectations for hilly courses.",
              },
              {
                q: "Can I improve my pace without speed work?",
                a: "Yes, to an extent. Simply running consistently will improve pace initially. However, to reach your potential, you'll eventually need to include some faster training to stimulate adaptation.",
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
            Understanding your running pace helps you train effectively and race strategically. The calculator above provides tools for pace calculation, conversion, and race planning.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that improvement comes from consistent training at appropriate intensities. Most of your running should be at easy pace, with targeted faster work to stimulate adaptation.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Focus on gradual progression and listen to your body. Sustainable improvement takes time, but with patience and smart training, you can achieve your running goals.
          </p>
          <div className="pull-quote mt-8">
            The best pace is the one that helps you achieve your goals while staying healthy and injury-free. Train smart, not just hard.
          </div>
        </section>

      </div>
    </article>
  );
}
