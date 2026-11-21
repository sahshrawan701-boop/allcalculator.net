import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function WeightLossArticle() {
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
            Weight Loss Calculator: Plan Your Weight Loss Journey
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for weight loss calculation
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You want to lose weight, but you&apos;re not sure how long it will take or how many calories you should eat. Understanding the math behind weight loss helps you set realistic goals and create a sustainable plan for success.
          </p>
          <p className="mb-5">
            Weight loss fundamentally comes down to creating a calorie deficit — burning more calories than you consume. The weight loss calculator above estimates how long it will take to reach your goal based on your current weight, target weight, and planned calorie deficit.
          </p>
          <p className="mb-5">
            Sustainable weight loss requires a balanced approach that includes appropriate calorie reduction, adequate nutrition, and regular physical activity. The calculator provides a timeline to help you plan your journey.
          </p>
          <p>
            Use the weight loss calculator to understand your timeline, set realistic goals, and create a sustainable plan for achieving your weight loss objectives.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Weight Loss Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator uses the standard approximation that one pound of body weight equals approximately 3,500 calories. By calculating your total calorie deficit needed and dividing by your daily deficit, it estimates your timeline.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Weight Loss Formula:
          </p>
          <div className="formula-block">
            <pre>Weight Loss (lbs) = Total Calorie Deficit ÷ 3,500</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Recommended deficit ranges:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Conservative", "300-500 calories/day"],
              ["Moderate", "500-750 calories/day"],
              ["Aggressive", "750-1000 calories/day"],
              ["Maximum", "1000+ calories/day (medical supervision)"],
            ].map(([item, val]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {val}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            A moderate deficit of 500 calories per day typically results in about 1 pound of weight loss per week. This is considered a sustainable and healthy rate for most people.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── SETTING GOALS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Setting Realistic Weight Loss Goals
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Setting appropriate goals is crucial for long-term success. Unrealistic expectations can lead to frustration and abandonment of your weight loss efforts.
          </p>

          {[
            {
              heading: "Rate of Loss",
              rows: [
                ["Recommended", "0.5-2 lbs per week"],
                ["Safe Maximum", "1% of body weight per week"],
                ["Sustainable", "1 lb per week average"],
              ],
              note: "Faster weight loss is possible but often unsustainable and may include muscle loss. Slow, steady weight loss is more likely to be maintained long-term.",
            },
            {
              heading: "Target Weight",
              rows: [
                ["BMI Range", "18.5-24.9 for healthy weight"],
                ["Individual Factors", "Muscle mass, body composition"],
                ["Health Focus", "Metrics beyond the scale"],
              ],
              note: "BMI is a general guideline. Your ideal weight may differ based on muscle mass, bone structure, and other factors. Focus on health improvements rather than a specific number.",
            },
            {
              heading: "Timeline Expectations",
              rows: [
                ["Plateaus", "Normal and expected"],
                ["Non-linear Progress", "Weight fluctuates naturally"],
                ["Lifestyle Integration", "Permanent changes needed"],
              ],
              note: "Weight loss is not linear. You'll have weeks of no progress despite doing everything right. This is normal. Focus on long-term trends rather than daily fluctuations.",
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

        {/* ── CREATING DEFICIT ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Creating a Calorie Deficit
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Creating a calorie deficit involves both reducing calorie intake and increasing calorie expenditure through physical activity. A balanced approach is most sustainable.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Reduce calorie intake",
                body: "Focus on nutrient-dense foods that provide volume and satiety for fewer calories. Prioritize protein, fiber-rich foods, and whole foods. Avoid empty calories from sugary drinks and processed foods.",
              },
              {
                n: "2",
                title: "Increase physical activity",
                body: "Exercise burns calories and preserves muscle mass during weight loss. Aim for 150-300 minutes of moderate exercise per week. Include both cardio and strength training for optimal results.",
              },
              {
                n: "3",
                title: "Combine both approaches",
                body: "The most sustainable approach combines moderate calorie reduction with increased activity. This creates your deficit while preserving muscle and supporting overall health.",
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

        {/* ── MAINTAINING MUSCLE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Preserving Muscle During Weight Loss
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Preserving muscle mass during weight loss is crucial for maintaining metabolism and achieving a healthy body composition.
          </p>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Strategy</th>
                <th className="dark:text-slate-100">Implementation</th>
                <th className="dark:text-slate-100">Benefit</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Adequate Protein", "1.6-2.2g per kg body weight", "Supports muscle maintenance"],
                ["Strength Training", "2-3 sessions per week", "Stimulates muscle preservation"],
                ["Moderate Deficit", "Avoid extreme calorie restriction", "Reduces muscle breakdown"],
                ["Sufficient Sleep", "7-9 hours per night", "Supports recovery and hormones"],
                ["Progressive Overload", "Gradually increase training intensity", "Maintains muscle stimulus"],
              ].map(([strategy, implementation, benefit]) => (
                <tr key={strategy}>
                  <td className="dark:text-slate-100">{strategy}</td>
                  <td className="dark:text-slate-100">{implementation}</td>
                  <td className="dark:text-slate-100">{benefit}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Muscle is metabolically active tissue. Preserving muscle during weight loss helps maintain your metabolic rate, making it easier to keep the weight off long-term.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── TIPS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-5 leading-snug">
            Practical Tips for Successful Weight Loss
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — plan your timeline</>],
              [<><strong>Focus on habits</strong> — sustainable changes over quick fixes</>],
              [<><strong>Track your intake</strong> — awareness is key</>],
              [<><strong>Prioritize protein</strong> — supports satiety and muscle</>],
              [<><strong>Stay hydrated</strong> — water supports weight loss</>],
              [<><strong>Get adequate sleep</strong> — sleep affects hunger hormones</>],
              [<><strong>Be patient</strong> — sustainable weight loss takes time</>],
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
                q: "How is weight loss calculated?",
                a: "Weight loss is calculated based on the approximation that one pound of body weight equals 3,500 calories. The calculator determines your total weight to lose, converts it to calories, and divides by your daily calorie deficit to estimate your timeline.",
              },
              {
                q: "How fast should I lose weight?",
                a: "A safe and sustainable rate is 0.5-2 pounds per week, or about 1% of your body weight per week. Faster weight loss is possible but often unsustainable and may include muscle loss.",
              },
              {
                q: "Why do weight loss plateaus happen?",
                a: "Plateaus occur as your body adapts to your new weight and calorie intake. Your metabolism may slow slightly, and you may burn fewer calories at a lower weight. Adjusting your calorie deficit or increasing activity can help overcome plateaus.",
              },
              {
                q: "Is the 3,500 calories per pound rule accurate?",
                a: "It&apos;s an approximation that works reasonably well for planning purposes. Actual calorie content of body tissue varies, and individual metabolism differs. Use it as a planning tool but adjust based on your actual progress.",
              },
              {
                q: "Should I lose weight faster with a larger deficit?",
                a: "Larger deficits can lead to faster weight loss but are harder to sustain and may cause muscle loss. A moderate deficit of 500-750 calories is recommended for most people. Larger deficits should only be used under medical supervision.",
              },
              {
                q: "How do I maintain weight after losing?",
                a: "Maintenance requires continuing the habits that helped you lose weight. Most people need to eat slightly more than during weight loss but less than their pre-loss intake. Regular monitoring and adjusting as needed helps maintain success.",
              },
              {
                q: "Does exercise speed up weight loss?",
                a: "Exercise increases calorie expenditure and helps preserve muscle during weight loss. While exercise alone rarely creates a large enough deficit for significant weight loss, it&apos;s crucial for sustainable results and overall health.",
              },
              {
                q: "What if I'm not losing weight at the expected rate?",
                a: "You may be underestimating calorie intake, overestimating calorie burn, or your metabolism may differ from estimates. Track your intake accurately, consider a slightly larger deficit, and focus on non-scale victories like how clothes fit and energy levels.",
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
            Weight loss is a journey that requires patience, consistency, and a balanced approach. The calculator above provides a timeline to help you plan your journey and set realistic expectations.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that sustainable weight loss is about creating permanent lifestyle changes, not temporary restrictions. Focus on building habits that you can maintain long-term for lasting success.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Your health is more important than a number on the scale. Celebrate non-scale victories, focus on how you feel, and prioritize overall well-being throughout your weight loss journey.
          </p>
          <div className="pull-quote mt-8">
            The best weight loss plan is one you can stick to for life. Build sustainable habits, be patient with yourself, and celebrate progress along the way.
          </div>
        </section>

      </div>
    </article>
  );
}
