import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function DiceRollerArticle() {
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

        strong { font-weight: 600; }
        em { font-style: italic; }
      `}</style>

      <div className="article-root">
        {/* ── HEADER ── */}
        <header className="mb-12 text-center">
          <span className="meta-tag">Lifestyle · Gaming & Probability</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Dice Roller: Roll Virtual Dice for Games & Probability
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to using virtual dice for games and simulations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Dice have been used for thousands of years as tools for gaming,
            decision-making, and generating random outcomes. From ancient board
            games to modern tabletop RPGs, the simple roll of a die has shaped
            entertainment and probability theory alike. Today, digital dice rollers
            bring this timeless tool into the digital age.
          </p>
          <p className="mb-5">
            A Dice Roller provides instant, fair random results for any dice-based
            activity. Whether you're playing Dungeons & Dragons, teaching probability
            concepts in a classroom, or making random decisions, this tool eliminates
            the need for physical dice while ensuring true randomness.
          </p>
          <p>
            Beyond gaming, dice rollers are invaluable for educational purposes,
            statistical simulations, and even decision-making processes. This guide
            explores the various types of dice, their uses, and how to make the most
            of virtual dice rolling tools.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Does the Dice Roller Work?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The dice roller uses a cryptographically secure random number generator
            to simulate fair dice rolls. When you click roll, the system generates
            random numbers within the specified range for each die, ensuring that
            every outcome is equally likely.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            To use the dice roller, you can customize:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              [
                "Dice Type",
                "Choose from standard polyhedral dice: d4, d6, d8, d10, d12, d20, or d100.",
              ],
              [
                "Number of Dice",
                "Roll multiple dice simultaneously, from 1 to 10 dice at once.",
              ],
              [
                "Instant Results",
                "See individual die results plus the total sum for quick calculations.",
              ],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">
                  ◆
                </span>
                <span>
                  <strong>{label}</strong> – {desc}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The results are displayed instantly with visual feedback, making it easy
            to read individual rolls and calculate totals for game mechanics or
            probability experiments.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── DICE TYPES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Understanding Different Dice Types
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Different games and applications require different types of dice. Here's
            a breakdown of the most common polyhedral dice and their typical uses:
          </p>
          
          {[
            {
              heading: "d4 (Four-Sided Die)",
              description: "A tetrahedron-shaped die with values 1-4. Commonly used in role-playing games for small damage rolls and determining minor outcomes.",
              typicalRange: "1-4",
            },
            {
              heading: "d6 (Six-Sided Die)",
              description: "The classic cube die, the most recognizable and widely used. Essential for board games, craps, and many RPG systems.",
              typicalRange: "1-6",
            },
            {
              heading: "d8 (Eight-Sided Die)",
              description: "An octahedron die used in RPGs for medium damage rolls and ability checks. Popular in Dungeons & Dragons.",
              typicalRange: "1-8",
            },
            {
              heading: "d10 (Ten-Sided Die)",
              description: "A pentagonal trapezohedron used for percentage rolls (often paired as 2d10 for d100) and damage in RPGs.",
              typicalRange: "1-10",
            },
            {
              heading: "d12 (Twelve-Sided Die)",
              description: "A dodecahedron die used for larger damage rolls and time-based calculations in role-playing games.",
              typicalRange: "1-12",
            },
            {
              heading: "d20 (Twenty-Sided Die)",
              description: "The iconic icosahedron, central to D&D and many RPG systems for attack rolls, skill checks, and saving throws.",
              typicalRange: "1-20",
            },
            {
              heading: "d100 (Percentile Die)",
              description: "Used for percentage-based rolls, critical hit tables, and probability determinations. Often simulated with 2d10.",
              typicalRange: "1-100",
            },
          ].map(({ heading, description, typicalRange }) => (
            <div key={heading} className="state-card">
              <h3>{heading} <span className="text-sm font-normal text-slate-500 dark:text-slate-400 ml-2">({typicalRange})</span></h3>
              <p className="text-sm text-slate-800 dark:text-slate-300 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── USE CASES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Use Cases for Dice Rolling
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Virtual dice rollers serve numerous purposes beyond traditional gaming:
          </p>
          <ul className="tip-list space-y-3 text-slate-800 dark:text-slate-100">
            <li>
              <strong>Tabletop RPGs:</strong> Essential for Dungeons & Dragons,
              Pathfinder, and other role-playing games where dice determine outcomes
              of actions, damage, and story progression.
            </li>
            <li>
              <strong>Board Games:</strong> Replace lost or damaged dice from classic
              games like Monopoly, Risk, or Yahtzee without interrupting game night.
            </li>
            <li>
              <strong>Education:</strong> Teach probability concepts, statistics,
              and random distribution in classrooms with visual, repeatable experiments.
            </li>
            <li>
              <strong>Decision Making:</strong> Use dice to make random choices when
              you're indecisive about options, from what to eat for dinner to which
              movie to watch.
            </li>
            <li>
              <strong>Game Development:</strong> Test game mechanics and balance
              by simulating thousands of dice rolls quickly and efficiently.
            </li>
            <li>
              <strong>Writing & Creativity:</strong> Generate random prompts, character
              traits, or story elements using dice-based tables and systems.
            </li>
          </ul>
        </section>

        <hr className="rule-divider" />

        {/* ── PROBABILITY BASICS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Understanding Dice Probability
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Understanding the probability of different outcomes can help you make
            strategic decisions in games and better understand random events.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Basic Probability Formula:
          </p>
          <div className="formula-block">
            <pre>{`Probability of Specific Outcome = 1 / Number of Sides

Example (d6):
Probability of rolling a 3 = 1/6 ≈ 16.67%

Example (2d6):
Probability of rolling 7 = 6/36 = 1/6 ≈ 16.67%`}</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4 mt-5">
            When rolling multiple dice, the probability distribution changes. The
            most common total when rolling 2d6 is 7, while rolling 1 on a d20 has
            the same probability as rolling any other number.
          </p>
          <div className="aside-callout">
            <strong>Law of Large Numbers:</strong> While individual rolls are random,
            over many rolls, the distribution of results will approach the theoretical
            probability. This is why dice rollers are excellent for teaching statistics.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FAQS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {[
              {
                q: "Are virtual dice rollers truly random?",
                a: "Yes, modern dice rollers use cryptographically secure random number generators that produce results statistically indistinguishable from physical dice rolls.",
              },
              {
                q: "Can I roll multiple dice at once?",
                a: "Absolutely. The dice roller supports rolling up to 10 dice simultaneously, showing individual results and calculating the total sum automatically.",
              },
              {
                q: "What's the difference between d10 and d100?",
                a: "A d10 has values 1-10, while d100 (percentile die) has values 1-100. In tabletop gaming, d100 is often simulated by rolling two d10 dice and reading them as tens and units.",
              },
              {
                q: "Why would I use a virtual dice roller instead of physical dice?",
                a: "Virtual dice are always available, never get lost, can roll any number of dice instantly, and are perfect for online gaming or when physical dice aren't practical.",
              },
              {
                q: "Can this be used for educational purposes?",
                a: "Yes, dice rollers are excellent for teaching probability, statistics, and random distribution concepts. Students can run experiments quickly and analyze results.",
              },
              {
                q: "How do I simulate a d100 roll with d10 dice?",
                a: "Roll two d10 dice. Designate one as the tens place (0-9, where 0 represents 10) and the other as the units place. Combine them for a result from 1-100.",
              },
              {
                q: "What's the most common roll in 2d6?",
                a: "The number 7 is the most common result when rolling 2d6, with a probability of 16.67%. The least common results are 2 and 12, each with a 2.78% probability.",
              },
              {
                q: "Can I use this for making random decisions?",
                a: "Definitely! Assign options to dice results and roll to make decisions randomly. It's a fun and fair way to choose when you're undecided.",
              },
            ].map((faq, i) => (
              <div key={i} className="faq-item">
                <h3>{faq.q}</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── CONCLUSION ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Conclusion
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're a dedicated tabletop gamer, an educator teaching probability,
            or someone who needs to make random decisions, a digital Dice Roller provides
            a convenient, fair, and always-available solution.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The ability to roll multiple dice of various types instantly makes this tool
            invaluable for both casual and serious applications. From critical hits in
            D&D to statistical experiments in the classroom, virtual dice bring the
            timeless randomness of physical dice into the digital age.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Use the dice roller above for your next game, experiment, or decision-making
            need, and experience the convenience of always having the perfect die at
            your fingertips.
          </p>
        </section>
      </div>
    </article>
  );
}
