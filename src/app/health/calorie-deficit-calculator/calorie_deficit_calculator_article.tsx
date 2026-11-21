import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function CalorieDeficitArticle() {
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
          <span className="meta-tag">Health · Weight Loss</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Calorie Deficit Calculator: Plan Your Weight Loss
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for sustainable weight loss
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You want to lose weight, but how many calories should you cut from your diet? Too little and you won&apos;t see results. Too much and you might slow your metabolism or lose muscle. The sweet spot is a moderate calorie deficit that promotes sustainable fat loss.
          </p>
          <p className="mb-5">
            A calorie deficit occurs when you consume fewer calories than your body burns. This forces your body to use stored fat for energy, resulting in weight loss. The calculator above helps you determine the optimal deficit based on your goals and timeline.
          </p>
          <p className="mb-5">
            But the right deficit varies based on your starting weight, activity level, and how much weight you want to lose. A larger deficit yields faster results but may be harder to sustain. A smaller deficit is more manageable but takes longer.
          </p>
          <p>
            Use the calorie deficit calculator above to determine your ideal daily calorie intake for weight loss, estimate your timeline, and create a sustainable plan that fits your lifestyle.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Calorie Deficit Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator first estimates your Total Daily Energy Expenditure (TDEE) based on your BMR and activity level. Then it subtracts a calorie deficit based on your desired rate of weight loss.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Calorie Deficit Formula:
          </p>
          <div className="formula-block">
            <pre>Daily Calorie Intake = TDEE - Calorie Deficit</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Standard deficit recommendations:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Moderate Deficit", "500 calories/day"],
              ["Weight Loss Rate", "~1 lb per week"],
              ["Aggressive Deficit", "1,000 calories/day"],
              ["Weight Loss Rate", "~2 lbs per week"],
              ["Maximum Safe Deficit", "1,000 calories/day"],
              ["Minimum Intake", "Never below BMR"],
            ].map(([item, val]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {val}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            A deficit of 500 calories per day results in approximately 1 pound of weight loss per week. This is considered a sustainable rate for most people. More aggressive deficits may be appropriate for some but require medical supervision.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── DEFICIT STRATEGIES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Calorie Deficit Strategies
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            There are different approaches to creating a calorie deficit. The best strategy depends on your preferences, lifestyle, and goals.
          </p>

          {[
            {
              heading: "Diet-Only Deficit",
              rows: [
                ["Approach", "Reduce calorie intake through diet"],
                ["Exercise", "Maintain current activity level"],
                ["Best For", "People who dislike exercise or have limited time"],
              ],
              note: "This approach focuses entirely on nutrition. It's effective but may require more significant dietary changes. Combining with exercise allows for a less restrictive diet.",
            },
            {
              heading: "Exercise-Only Deficit",
              rows: [
                ["Approach", "Increase calorie burn through exercise"],
                ["Diet", "Maintain current calorie intake"],
                ["Best For", "People who enjoy exercise and want to eat more"],
              ],
              note: "This approach burns more calories through physical activity. It allows you to eat more while still losing weight. However, it requires time commitment and may be harder to sustain.",
            },
            {
              heading: "Combined Deficit",
              rows: [
                ["Approach", "Reduce intake slightly and increase exercise"],
                ["Balance", "Split deficit between diet and exercise"],
                ["Best For", "Most people seeking sustainable results"],
              ],
              note: "This is the recommended approach for most people. A moderate reduction in calories combined with regular exercise creates a sustainable deficit and provides additional health benefits.",
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
            How to Create a Calorie Deficit
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Creating a calorie deficit requires reducing intake, increasing expenditure, or both. Here are proven strategies for creating and maintaining a deficit.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Track your calories",
                body: "Use a tracking app to understand your current intake. Most people underestimate how much they eat. Awareness is the first step to creating a deficit.",
              },
              {
                n: "2",
                title: "Focus on volume eating",
                body: "Choose foods that are low in calories but high in volume. Vegetables, fruits, and lean proteins allow you to eat more while consuming fewer calories.",
              },
              {
                n: "3",
                title: "Reduce liquid calories",
                body: "Sugary drinks, alcohol, and even fruit juices can add significant calories. Replace with water, unsweetened tea, or black coffee to easily reduce intake.",
              },
              {
                n: "4",
                title: "Increase protein intake",
                body: "Protein is more satiating than carbs or fats and has a higher thermic effect. Aim for 0.8-1 gram of protein per pound of body weight.",
              },
              {
                n: "5",
                title: "Add physical activity",
                body: "Exercise increases calorie burn and preserves muscle mass. Aim for 150-300 minutes of moderate-intensity cardio per week plus strength training.",
              },
              {
                n: "6",
                title: "Prioritize sleep and stress management",
                body: "Poor sleep and high stress increase hunger hormones, making it harder to maintain a deficit. Prioritize 7-9 hours of quality sleep and manage stress.",
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

        {/* ── TIMELINE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Weight Loss Timeline Expectations
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Understanding realistic timelines helps set appropriate expectations. Weight loss is rarely linear, and various factors affect your rate of progress.
          </p>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Weight to Lose</th>
                <th className="dark:text-slate-100">Recommended Rate</th>
                <th className="dark:text-slate-100">Estimated Timeline</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["5-10 lbs", "1-2 lbs per week", "3-10 weeks"],
                ["10-20 lbs", "1-2 lbs per week", "5-20 weeks"],
                ["20-50 lbs", "1-2 lbs per week", "10-50 weeks"],
                ["50+ lbs", "1-2 lbs per week", "6+ months"],
              ].map(([weight, rate, timeline]) => (
                <tr key={weight}>
                  <td className="dark:text-slate-100">{weight}</td>
                  <td className="dark:text-slate-100">{rate}</td>
                  <td className="dark:text-slate-100">{timeline}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Weight loss often slows over time as your body adapts and your BMR decreases. Recalculate your calorie needs periodically as you lose weight. Plateaus are normal and require adjustments to your approach.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── TIPS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-5 leading-snug">
            Practical Tips for Sustainable Weight Loss
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — determine your deficit accurately</>],
              [<><strong>Start moderate</strong> — 500 calorie deficit is sustainable</>],
              [<><strong>Don't go too low</strong> — never eat below BMR</>],
              [<><strong>Focus on protein</strong> — preserves muscle mass</>],
              [<><strong>Exercise regularly</strong> — increases calorie burn</>],
              [<><strong>Track progress</strong> — weight, measurements, photos</>],
              [<><strong>Be patient</strong> — sustainable loss takes time</>],
              [<><strong>Adjust as needed</strong> — recalculate as you lose weight</>],
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
                q: "How is calorie deficit calculated?",
                a: "Calorie deficit is calculated by determining your TDEE (total daily energy expenditure) and subtracting your desired deficit. A 500-calorie deficit typically results in 1 pound of weight loss per week.",
              },
              {
                q: "What is a safe calorie deficit?",
                a: "A safe deficit is generally 500-1,000 calories per day, resulting in 1-2 pounds of weight loss per week. Never go below your BMR. Minimum intake is typically 1,200 calories for women and 1,500 for men.",
              },
              {
                q: "Can I lose weight without counting calories?",
                a: "Yes, some people succeed with portion control, intuitive eating, or specific diets. However, calorie counting provides awareness and accountability that helps many people achieve their goals more reliably.",
              },
              {
                q: "Why is my weight loss slowing down?",
                a: "Weight loss often slows as you lose weight because your BMR decreases. Your body becomes more efficient at using energy. Recalculate your calorie needs periodically and consider adjusting your deficit or increasing activity.",
              },
              {
                q: "Should I exercise while in a calorie deficit?",
                a: "Yes. Exercise preserves muscle mass, increases calorie burn, and provides numerous health benefits. Combine cardio for calorie burning with strength training to maintain muscle while losing fat.",
              },
              {
                q: "What happens if I create too large a deficit?",
                a: "Too large a deficit can slow your metabolism, cause muscle loss, lead to nutrient deficiencies, and be unsustainable. It may also trigger binge eating. Stick to moderate deficits for sustainable results.",
              },
              {
                q: "How do I know if my deficit is working?",
                a: "Track your weight weekly. If you're losing 1-2 pounds per week, your deficit is appropriate. If you're not losing weight, your deficit may be too small or your TDEE estimate may be inaccurate.",
              },
              {
                q: "Can I have cheat days while in a deficit?",
                a: "Yes, but plan for them. A single cheat day won't ruin progress, but frequent overeating can. Consider a refeed day with a moderate calorie increase rather than a full cheat day.",
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
            A calorie deficit is the foundation of weight loss, but sustainable results require a balanced approach. Focus on creating a moderate deficit that you can maintain long-term rather than extreme restrictions.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that weight loss is a journey, not a race. Slow, steady progress is more sustainable than rapid results. Focus on building healthy habits that you can maintain for life.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Use the calculator above as a starting point, but listen to your body and adjust as needed. The best plan is one that fits your lifestyle and supports your overall health and well-being.
          </p>
          <div className="pull-quote mt-8">
            Sustainable weight loss isn't about deprivation — it's about finding a balance you can maintain for life.
          </div>
        </section>

      </div>
    </article>
  );
}
