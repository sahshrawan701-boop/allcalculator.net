import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function SleepArticle() {
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
          <span className="meta-tag">Health · Sleep & Wellness</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Sleep Calculator: Optimize Your Sleep Schedule
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for sleep calculation
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You want to wake up feeling refreshed and energized, but you&apos;re not sure when to go to bed or when to set your alarm. Understanding sleep cycles and timing your sleep appropriately can make a significant difference in how you feel each day.
          </p>
          <p className="mb-5">
            Sleep occurs in cycles of approximately 90 minutes. Waking up at the end of a sleep cycle, rather than in the middle of one, helps you feel more refreshed. The sleep calculator helps you plan your sleep schedule to align with these natural cycles.
          </p>
          <p className="mb-5">
            The calculator above determines optimal wake-up times based on when you go to bed, or optimal bedtimes based on when you need to wake up. It accounts for the time it takes to fall asleep and complete sleep cycles.
          </p>
          <p>
            Use the sleep calculator to optimize your sleep schedule, understand sleep cycles, and wake up feeling more refreshed and energized.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Sleep Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator uses the 90-minute sleep cycle model, which is the average length of a complete sleep cycle. It adds 15 minutes for the average time it takes to fall asleep and calculates optimal times based on complete cycles.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Sleep Cycle Formula:
          </p>
          <div className="formula-block">
            <pre>Optimal Time = Start Time + (15 min to fall asleep) + (90 min × Number of Cycles)</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Recommended sleep duration:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Adults (18-64)", "7-9 hours"],
              ["Older Adults (65+)", "7-8 hours"],
              ["Teenagers (14-17)", "8-10 hours"],
              ["Children (6-13)", "9-11 hours"],
            ].map(([item, val]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {val}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            Individual sleep needs vary. Some people function well on less sleep, while others need more. Pay attention to how you feel and adjust your sleep duration accordingly.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── SLEEP CYCLES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Understanding Sleep Cycles
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Sleep consists of multiple stages that repeat throughout the night. Each cycle includes light sleep, deep sleep, and REM sleep, each serving different functions for your body and brain.
          </p>

          {[
            {
              heading: "Stage 1: Light Sleep",
              rows: [
                ["Duration", "5-10 minutes"],
                ["Characteristics", "Transition between wake and sleep"],
                ["Function", "Easy to wake from, prepares for deeper sleep"],
              ],
              note: "This is the lightest stage of sleep. You may experience sudden muscle contractions or the sensation of falling. It accounts for about 5% of total sleep time.",
            },
            {
              heading: "Stage 2: Light Sleep",
              rows: [
                ["Duration", "10-25 minutes per cycle"],
                ["Characteristics", "Body temperature drops, heart rate slows"],
                ["Function", "Memory consolidation, energy restoration"],
              ],
              note: "This is the longest sleep stage, accounting for about 50% of total sleep time. Your body prepares for deep sleep during this stage.",
            },
            {
              heading: "Stage 3: Deep Sleep",
              rows: [
                ["Duration", "20-40 minutes per cycle"],
                ["Characteristics", "Slow brain waves, difficult to wake"],
                ["Function", "Physical restoration, immune function"],
              ],
              note: "Also called slow-wave sleep, this stage is crucial for physical recovery and immune function. It's most abundant in the first half of the night.",
            },
            {
              heading: "REM Sleep",
              rows: [
                ["Duration", "10-60 minutes per cycle"],
                ["Characteristics", "Brain activity similar to wakefulness"],
                ["Function", "Memory consolidation, emotional processing"],
              ],
              note: "REM (Rapid Eye Movement) sleep is when dreaming occurs. It's important for cognitive function and emotional regulation. REM periods lengthen throughout the night.",
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

        {/* ── OPTIMIZING SLEEP ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Optimizing Your Sleep Schedule
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Timing your sleep to align with your body&apos;s natural rhythms can improve sleep quality and help you wake up feeling more refreshed.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Consistent schedule",
                body: "Go to bed and wake up at the same time daily, even on weekends. This regulates your body&apos;s internal clock and improves sleep quality over time.",
              },
              {
                n: "2",
                title: "Wake at cycle end",
                body: "Use the calculator to find wake-up times at the end of complete sleep cycles. Waking mid-cycle can leave you feeling groggy and disoriented.",
              },
              {
                n: "3",
                title: "Account for sleep latency",
                body: "Most people take 15-20 minutes to fall asleep. The calculator includes this time, but if you take longer, adjust your bedtime accordingly.",
              },
              {
                n: "4",
                title: "Respect your body clock",
                body: "Some people are naturally early risers, others night owls. Work with your natural tendencies rather than against them for better sleep quality.",
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

        {/* ── SLEEP HYGIENE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Sleep Hygiene Best Practices
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Good sleep hygiene practices support quality sleep and help you fall asleep faster and stay asleep longer.
          </p>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Practice</th>
                <th className="dark:text-slate-100">Implementation</th>
                <th className="dark:text-slate-100">Benefit</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Dark Environment", "Use blackout curtains or eye mask", "Promotes melatonin production"],
                ["Cool Temperature", "Keep bedroom around 65°F (18°C)", "Optimal for sleep initiation"],
                ["Limit Screens", "Avoid screens 1 hour before bed", "Reduces blue light exposure"],
                ["Wind-Down Routine", "Relaxing activities before bed", "Signals body it's time to sleep"],
                ["Avoid Caffeine", "No caffeine after 2 PM", "Prevents sleep disruption"],
                ["Regular Exercise", "Daily physical activity", "Improves sleep quality"],
              ].map(([practice, implementation, benefit]) => (
                <tr key={practice}>
                  <td className="dark:text-slate-100">{practice}</td>
                  <td className="dark:text-slate-100">{implementation}</td>
                  <td className="dark:text-slate-100">{benefit}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Consistency is key for sleep hygiene. These practices work best when applied consistently over time. Start with one or two changes and build from there.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── TIPS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-5 leading-snug">
            Practical Tips for Better Sleep
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — find optimal sleep times</>],
              [<><strong>Be consistent</strong> — same bedtime and wake time</>],
              [<><strong>Create routine</strong> — wind-down before bed</>],
              [<><strong>Optimize environment</strong> — dark, cool, quiet</>],
              [<><strong>Limit stimulants</strong> — caffeine, alcohol before bed</>],
              [<><strong>Get morning light</strong> — natural light exposure</>],
              [<><strong>Exercise regularly</strong> — but not too close to bedtime</>],
              [<><strong>Listen to your body</strong> — adjust based on how you feel</>],
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
                q: "How are sleep cycles calculated?",
                a: "Sleep cycles are calculated based on the average 90-minute cycle length. The calculator adds 15 minutes for the average time to fall asleep and calculates optimal times based on complete cycles (typically 5-6 cycles per night).",
              },
              {
                q: "Why does waking up at cycle end matter?",
                a: "Waking up at the end of a sleep cycle, during light sleep, helps you feel more refreshed. Waking up during deep sleep can leave you feeling groggy and disoriented, a phenomenon called sleep inertia.",
              },
              {
                q: "How many sleep cycles do I need?",
                a: "Most adults need 5-6 complete sleep cycles per night, which equals 7.5-9 hours of sleep. Teenagers and children need more cycles, while some adults may function well on fewer.",
              },
              {
                q: "What if I can't fall asleep in 15 minutes?",
                a: "The 15-minute fall-asleep time is an average. If you take longer, adjust your bedtime accordingly. If you consistently take much longer than 30 minutes to fall asleep, consider consulting a sleep specialist.",
              },
              {
                q: "Can I make up for lost sleep?",
                a: "You can partially recover from sleep debt by getting extra sleep, but you can&apos;t fully make up for chronic sleep deprivation. Consistent adequate sleep is better than occasional catch-up sleep.",
              },
              {
                q: "Does napping affect nighttime sleep?",
                a: "Long or late naps can interfere with nighttime sleep. If you nap, keep it short (20-30 minutes) and early in the day. Avoid napping if you have trouble sleeping at night.",
              },
              {
                q: "What if I wake up naturally before my alarm?",
                a: "If you wake up feeling refreshed, you&apos;ve likely completed a sleep cycle. This is your body&apos;s natural signal that you&apos;ve had enough sleep. Try to adjust your schedule to align with this natural wake time.",
              },
              {
                q: "How does age affect sleep needs?",
                a: "Sleep needs change throughout life. Adults need 7-9 hours, while older adults may need slightly less but often have more fragmented sleep. Children and teenagers need significantly more sleep than adults.",
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
            Quality sleep is essential for health, productivity, and well-being. The sleep calculator above helps you plan your sleep schedule to align with natural sleep cycles for more refreshing mornings.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that sleep needs are individual. Pay attention to how you feel and adjust your sleep duration accordingly. The calculator provides a starting point, but your body&apos;s signals are the ultimate guide.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Prioritize sleep as an essential part of your health routine. Consistent, quality sleep is one of the best investments you can make in your overall health and well-being.
          </p>
          <div className="pull-quote mt-8">
            Good sleep isn&apos;t a luxury—it&apos;s a necessity. Invest in your sleep, and your body and mind will thank you every day.
          </div>
        </section>

      </div>
    </article>
  );
}
