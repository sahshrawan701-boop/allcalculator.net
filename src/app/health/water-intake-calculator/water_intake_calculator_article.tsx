import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function WaterIntakeArticle() {
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
          <span className="meta-tag">Health · Hydration</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Water Intake Calculator: Optimize Your Hydration
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for water intake calculation
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Staying properly hydrated is essential for health, but how much water should you actually drink? The answer depends on your body weight, activity level, climate, and individual factors. Understanding your hydration needs helps you maintain optimal health and performance.
          </p>
          <p className="mb-5">
            Water is vital for nearly every bodily function, including temperature regulation, waste removal, and joint lubrication. Dehydration can cause fatigue, headaches, and impaired cognitive function.
          </p>
          <p className="mb-5">
            The water intake calculator above estimates your daily water needs based on your weight, activity level, and other factors. It provides personalized recommendations to help you stay properly hydrated.
          </p>
          <p>
            Use the water intake calculator to understand your hydration needs, recognize signs of dehydration, and build healthy hydration habits.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Water Intake Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator uses established guidelines to estimate daily water needs based on body weight and activity level. It accounts for water lost through normal bodily functions and physical activity.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Basic Water Intake Formula:
          </p>
          <div className="formula-block">
            <pre>Daily Water (oz) = Body Weight (lbs) × 0.5 to 0.7</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Activity adjustments:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Sedentary", "Base amount"],
              ["Light Activity", "+12-20 oz per 30 min exercise"],
              ["Moderate Activity", "+20-30 oz per 30 min exercise"],
              ["Heavy Activity", "+30-40+ oz per 30 min exercise"],
            ].map(([item, val]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {val}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            These are general guidelines. Individual needs vary based on climate, health conditions, and other factors. Listen to your body and adjust your intake accordingly.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS AFFECTING NEEDS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors Affecting Water Needs
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Several factors influence how much water you need each day. Understanding these factors helps you adjust your intake appropriately.
          </p>

          {[
            {
              heading: "Body Weight",
              rows: [
                ["Effect", "Heavier individuals need more water"],
                ["Reason", "More body mass requires more water"],
              ],
              note: "Larger bodies have more cells to hydrate and more surface area for water loss through sweat. The calculator accounts for this by basing recommendations on weight.",
            },
            {
              heading: "Activity Level",
              rows: [
                ["Effect", "Exercise increases water needs"],
                ["Reason", "Sweat increases fluid loss"],
              ],
              note: "Physical activity causes fluid loss through sweat and increased respiration. The more intense and prolonged the exercise, the more water you need to replace.",
            },
            {
              heading: "Climate",
              rows: [
                ["Effect", "Hot/humid weather increases needs"],
                ["Reason", "Increased sweating to regulate temperature"],
              ],
              note: "In hot or humid conditions, your body sweats more to cool down. You may need significantly more water in summer or in hot climates compared to cool weather.",
            },
            {
              heading: "Health Conditions",
              rows: [
                ["Effect", "Some conditions increase needs"],
                ["Reason", "Fever, diarrhea, vomiting cause fluid loss"],
              ],
              note: "Illness and certain health conditions like fever, diabetes, and kidney disease can affect hydration needs. Consult your healthcare provider for personalized recommendations.",
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

        {/* ── SIGNS OF DEHYDRATION ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Recognizing Dehydration
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Recognizing the signs of dehydration helps you address it before it becomes severe. Early recognition allows for prompt rehydration.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Thirst",
                body: "Thirst is not always an early indicator of dehydration. By the time you feel thirsty, you may already be mildly dehydrated. Don't rely solely on thirst as your guide.",
              },
              {
                n: "2",
                title: "Urine color",
                body: "Pale yellow urine indicates good hydration. Dark yellow or amber urine suggests dehydration. Clear urine may indicate overhydration but is generally not a concern.",
              },
              {
                n: "3",
                title: "Fatigue",
                body: "Even mild dehydration can cause fatigue and reduced energy levels. If you feel tired without explanation, consider whether you've been drinking enough water.",
              },
              {
                n: "4",
                title: "Headaches",
                body: "Dehydration is a common trigger for headaches. If you experience frequent headaches, increasing water intake may help reduce their frequency.",
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

        {/* ── HYDRATION STRATEGIES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Effective Hydration Strategies
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Building good hydration habits helps you consistently meet your water needs without it feeling like a chore.
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
                ["Carry a bottle", "Keep water with you throughout the day", "Convenient access encourages drinking"],
                ["Set reminders", "Use phone alarms or apps", "Regular prompts to drink water"],
                ["Drink before meals", "Have water before eating", "Supports digestion and satiety"],
                ["Flavor naturally", "Add lemon, cucumber, mint", "Makes water more appealing"],
                ["Eat hydrating foods", "Fruits and vegetables with high water content", "Contributes to total fluid intake"],
                ["Track intake", "Log your daily water consumption", "Ensures you hit your target"],
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
            Consistency is more important than perfection. Aim to meet your hydration needs most days rather than stressing about hitting an exact target every single day.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── TIPS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-5 leading-snug">
            Practical Tips for Staying Hydrated
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — determine your water needs</>],
              [<><strong>Drink throughout the day</strong> — not all at once</>],
              [<><strong>Start your day with water</strong> — rehydrate after sleep</>],
              [<><strong>Drink before exercise</strong> — pre-hydrate</>],
              [<><strong>Replace sweat losses</strong> — drink during and after exercise</>],
              [<><strong>Limit caffeine</strong> — it has mild diuretic effect</>],
              [<><strong>Listen to your body</strong> — adjust based on thirst and activity</>],
              [<><strong>Don't overdo it</strong> — overhydration is possible but rare</>],
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
                q: "How much water should I drink?",
                a: "General guidelines suggest drinking half your body weight in ounces daily. The calculator provides a personalized estimate based on your weight and activity level. Individual needs vary based on climate, health, and other factors.",
              },
              {
                q: "Can I drink too much water?",
                a: "Yes, but it's rare. Overhydration (hyponatremia) occurs when you drink more water than your kidneys can excrete, diluting blood sodium levels. This is most common in endurance athletes. For most people, drinking to thirst is safe.",
              },
              {
                q: "Does coffee and tea count toward water intake?",
                a: "Yes, they contribute to total fluid intake. While caffeine has a mild diuretic effect, the water in coffee and tea more than offsets this. However, water is still the best choice for hydration.",
              },
              {
                q: "Do other beverages count?",
                a: "Most beverages contribute to hydration, including milk, juice, and herbal tea. Alcohol is dehydrating and doesn't count. Water is the optimal choice because it's calorie-free and readily available.",
              },
              {
                q: "How do I know if I'm drinking enough?",
                a: "Monitor your urine color — pale yellow indicates good hydration. You should rarely feel thirsty, and your energy levels should be consistent. These are better indicators than a specific number.",
              },
              {
                q: "Does food contribute to hydration?",
                a: "Yes, about 20% of daily fluid intake comes from food, especially fruits and vegetables. Water-rich foods like watermelon, cucumber, and oranges contribute to your total hydration.",
              },
              {
                q: "Do I need more water in hot weather?",
                a: "Yes. Hot and humid weather increases sweating, which increases fluid loss. You may need significantly more water in summer or in hot climates to maintain proper hydration.",
              },
              {
                q: "Should I drink water even if I'm not thirsty?",
                a: "Thirst is a reliable indicator for most people, but it's not perfect. If you're exercising heavily, in hot weather, or elderly, you may need to drink before feeling thirsty. Otherwise, thirst is generally a good guide.",
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
            Proper hydration is essential for health and well-being. The water intake calculator above provides personalized recommendations based on your individual factors.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that hydration needs vary based on many factors. Listen to your body and adjust your intake accordingly. Thirst, urine color, and energy levels are good indicators of your hydration status.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Build sustainable hydration habits that fit your lifestyle. Carrying a water bottle, setting reminders, and choosing water over sugary beverages are simple changes that can significantly improve your hydration.
          </p>
          <div className="pull-quote mt-8">
            Proper hydration is one of the simplest yet most powerful things you can do for your health. Drink up and feel the difference.
          </div>
        </section>

      </div>
    </article>
  );
}
