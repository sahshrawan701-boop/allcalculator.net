import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function HeartRateArticle() {
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
          <span className="meta-tag">Health · Cardiovascular</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Heart Rate Calculator: Optimize Your Training Zones
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for heart rate training
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You want to exercise smarter, not harder. Training in the right heart rate zones helps you optimize your workouts for your specific goals — whether that's burning fat, building endurance, or improving performance. Understanding your heart rate zones is key to effective training.
          </p>
          <p className="mb-5">
            Heart rate zones are ranges of heart beats per minute that correspond to different exercise intensities. Each zone serves a specific purpose, from recovery to maximum effort. Training in the appropriate zone helps you achieve your fitness goals efficiently.
          </p>
          <p className="mb-5">
            The heart rate calculator above determines your target heart rate zones based on your age and resting heart rate. This provides personalized training zones that account for your individual fitness level.
          </p>
          <p>
            Use the heart rate calculator to determine your training zones, understand how to train effectively in each zone, and optimize your workouts for your specific fitness goals.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Heart Rate Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator uses the Karvonen formula, which accounts for your resting heart rate to provide more accurate training zones. This method is preferred over simple percentage-based calculations because it considers your individual fitness level.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Karvonen Formula:
          </p>
          <div className="formula-block">
            <pre>Target HR = [(Max HR - Resting HR) × %Intensity] + Resting HR</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Maximum Heart Rate (MHR) estimation:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Fox Formula", "220 - Age"],
              ["Tanaka Formula", "208 - (0.7 × Age)"],
              ["Gellish Formula", "207 - (0.7 × Age)"],
            ].map(([item, val]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {val}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            The Karvonen formula is more accurate for fit individuals because it accounts for resting heart rate. As fitness improves, resting heart rate decreases, which affects your training zones.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── TRAINING ZONES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Heart Rate Training Zones
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Training zones are typically divided into five zones, each serving a specific purpose. Understanding these zones helps you structure your workouts for optimal results.
          </p>

          {[
            {
              heading: "Zone 1: Recovery (50-60% of HRR)",
              rows: [
                ["Intensity", "Very light"],
                ["Purpose", "Active recovery, warm-up, cool-down"],
                ["Benefits", "Promotes blood flow, aids recovery"],
              ],
              note: "This zone is for recovery and warm-up. It's low intensity and should feel easy. Training in this zone helps with recovery between harder sessions.",
            },
            {
              heading: "Zone 2: Aerobic Base (60-70% of HRR)",
              rows: [
                ["Intensity", "Light to moderate"],
                ["Purpose", "Building aerobic base, fat burning"],
                ["Benefits", "Improves endurance, builds capillary density"],
              ],
              note: "This is the foundation zone where most training should occur. It builds aerobic capacity and improves your body's ability to use fat for fuel.",
            },
            {
              heading: "Zone 3: Aerobic (70-80% of HRR)",
              rows: [
                ["Intensity", "Moderate"],
                ["Purpose", "Improving aerobic capacity, endurance"],
                ["Benefits", "Increases stroke volume, improves efficiency"],
              ],
              note: "This zone improves cardiovascular fitness and is comfortable but challenging. You can hold a conversation but with some effort.",
            },
            {
              heading: "Zone 4: Anaerobic Threshold (80-90% of HRR)",
              rows: [
                ["Intensity", "Hard"],
                ["Purpose", "Improving lactate threshold, performance"],
                ["Benefits", "Increases speed, improves race pace"],
              ],
              note: "This is threshold training where you're working hard. It improves your ability to sustain higher intensities for longer periods.",
            },
            {
              heading: "Zone 5: Maximum Effort (90-100% of HRR)",
              rows: [
                ["Intensity", "Very hard to maximum"],
                ["Purpose", "Improving maximum capacity, power"],
                ["Benefits", "Increases VO2 max, improves sprint power"],
              ],
              note: "This zone is for short, intense efforts. It's stressful and should be used sparingly. It improves your maximum aerobic capacity.",
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

        {/* ── MEASURING HEART RATE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Measure Heart Rate
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Accurate heart rate measurement is essential for effective zone training. Several methods are available, ranging from manual measurement to wearable technology.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Manual pulse check",
                body: "Find your pulse at your wrist or neck, count beats for 15 seconds, and multiply by 4. This method is free but less convenient during exercise.",
              },
              {
                n: "2",
                title: "Chest strap monitors",
                body: "Worn around the chest, these provide the most accurate continuous heart rate data. They transmit to watches, phones, or gym equipment.",
              },
              {
                n: "3",
                title: "Optical wrist sensors",
                body: "Found in smartwatches and fitness trackers, these use light to measure blood flow. Convenient but can be less accurate during intense exercise.",
              },
              {
                n: "4",
                title: "Fitness equipment",
                body: "Many treadmills, bikes, and ellipticals have built-in heart rate monitors. These typically use handgrip sensors or can connect to chest straps.",
              },
              {
                n: "5",
                title: "Smartphone apps",
                body: "Some apps use the camera flash to detect pulse. Generally less accurate than dedicated monitors but can be useful for resting heart rate.",
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

        {/* ── TRAINING APPROACH ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Training by Heart Rate Zone
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Effective training involves spending time in different zones based on your goals. Different goals require different zone distributions.
          </p>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Goal</th>
                <th className="dark:text-slate-100">Primary Zones</th>
                <th className="dark:text-slate-100">Training Focus</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Fat Loss", "Zones 2-3", "Long duration, moderate intensity"],
                ["Endurance Building", "Zones 2-3", "Base building, aerobic capacity"],
                ["Performance Improvement", "Zones 3-5", "Threshold training, intervals"],
                ["Speed Development", "Zones 4-5", "High-intensity intervals, sprints"],
                ["Recovery", "Zone 1", "Active recovery, easy sessions"],
              ].map(([goal, zones, focus]) => (
                <tr key={goal}>
                  <td className="dark:text-slate-100">{goal}</td>
                  <td className="dark:text-slate-100">{zones}</td>
                  <td className="dark:text-slate-100">{focus}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Most training should be in Zones 2-3, with limited time in higher zones. A common mistake is training too hard too often, which can lead to overtraining and injury.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── TIPS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-5 leading-snug">
            Practical Tips for Heart Rate Training
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — determine your training zones</>],
              [<><strong>Measure resting HR</strong> — take it first thing in the morning</>],
              [<><strong>Start easy</strong> — build base in lower zones first</>],
              [<><strong>Listen to your body</strong> — HR is one metric among many</>],
              [<><strong>Be consistent</strong> — regular training yields results</>],
              [<><strong>Recover adequately</strong> — Zone 1 is essential</>],
              [<><strong>Adjust for conditions</strong> — heat, humidity affect HR</>],
              [<><strong>Track progress</strong> — watch HR improve over time</>],
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
                q: "How are heart rate zones calculated?",
                a: "Heart rate zones are calculated using the Karvonen formula, which accounts for your maximum heart rate and resting heart rate. Target HR = [(Max HR - Resting HR) × %Intensity] + Resting HR.",
              },
              {
                q: "What is the best heart rate for burning fat?",
                a: "Zone 2 (60-70% of heart rate reserve) is often called the fat-burning zone because your body uses a higher percentage of fat for fuel at this intensity. However, total calorie burn matters more than fuel source.",
              },
              {
                q: "Should I always train in the highest zone?",
                a: "No. Training in higher zones is stressful and should be limited. Most training should be in Zones 2-3 to build aerobic capacity. Higher zone training is for specific performance goals.",
              },
              {
                q: "How do I know my maximum heart rate?",
                a: "The most accurate way is through a professional fitness test. For most people, using the formula 220 - age provides a reasonable estimate. The Tanaka formula (208 - 0.7 × age) is more accurate for older adults.",
              },
              {
                q: "Why does my heart rate vary day to day?",
                a: "Heart rate is affected by hydration, sleep quality, stress, temperature, caffeine, and fatigue. A higher than usual heart rate at a given intensity may indicate fatigue or inadequate recovery.",
              },
              {
                q: "Can I improve my resting heart rate?",
                a: "Yes. Regular aerobic exercise typically lowers resting heart rate as your heart becomes more efficient. A lower resting heart rate is generally associated with better cardiovascular fitness.",
              },
              {
                q: "Is heart rate training accurate for everyone?",
                a: "Heart rate training is generally effective but has limitations. Some people have naturally higher or lower heart rates. Use heart rate as one tool among many, including perceived exertion and performance metrics.",
              },
              {
                q: "How often should I train in each zone?",
                a: "Most training should be in Zones 2-3 (80% of training time). Zone 4-5 sessions should be limited to 1-2 times per week for most athletes. Zone 1 is for recovery and warm-up/cool-down.",
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
            Heart rate training provides a scientific approach to optimizing your workouts. The calculator above gives you personalized training zones based on your age and resting heart rate.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that heart rate is one tool among many. Perceived exertion, performance metrics, and how you feel are also important indicators of training intensity.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Focus on consistency and gradual progression. Building aerobic fitness takes time, but training in the appropriate zones will help you achieve your goals efficiently and safely.
          </p>
          <div className="pull-quote mt-8">
            Train smart, not just hard. Understanding your heart rate zones helps you work smarter and achieve better results.
          </div>
        </section>

      </div>
    </article>
  );
}
