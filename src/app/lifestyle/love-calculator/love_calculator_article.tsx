import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function LoveArticle() {
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
          <span className="meta-tag">Lifestyle · Fun & Entertainment</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Love Calculator: Fun Compatibility Test for Couples
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A playful guide to the classic love compatibility calculation game
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Love calculators have been a source of entertainment for decades,
            offering couples and friends a playful way to test their "compatibility"
            based on nothing more than their names. While these calculations are
            purely for fun and have no scientific basis, they've become a beloved
            part of internet culture and social entertainment.
          </p>
          <p className="mb-5">
            The concept behind a love calculator is simple: input two names, and
            the algorithm generates a compatibility percentage. Whether you're
            testing your relationship with a partner, checking compatibility with
            a celebrity crush, or just having fun with friends, this tool provides
            instant entertainment and conversation starters.
          </p>
          <p>
            This guide explores the playful world of love calculators, how they work,
            their cultural significance, and most importantly, why they should be
            taken as nothing more than a fun game rather than a serious relationship
            assessment tool.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Does the Love Calculator Work?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Love calculators use various algorithms to generate compatibility scores,
            typically based on the letters in the names entered. The most common
            method involves converting letters to numerical values and applying
            mathematical operations to produce a percentage between 0% and 100%.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            To use the love calculator:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              [
                "Enter Your Name",
                "Type your first name (or any name you want to test) in the first field.",
              ],
              [
                "Enter Partner's Name",
                "Input the second name you want to test compatibility with.",
              ],
              [
                "Click Calculate",
                "The algorithm processes both names and generates a compatibility percentage.",
              ],
              [
                "View Results",
                "See your compatibility score along with a playful message based on the result.",
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
            The results are displayed with colorful indicators and fun messages,
            making the experience engaging and entertaining regardless of the score.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── DISCLAIMER ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Important Disclaimer: For Entertainment Only
          </h2>
          <div className="aside-callout">
            <strong>This is purely for fun and entertainment purposes only.</strong>
            Love calculators have no scientific basis and should never be used to make
            serious relationship decisions. Real compatibility depends on communication,
            shared values, mutual respect, emotional connection, and countless other
            factors that cannot be measured by a simple name-based algorithm.
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4 mt-5">
            While love calculators can be a fun way to break the ice or spark conversation,
            they should be taken with a grain of salt. A low score doesn't mean a
            relationship won't work, and a high score doesn't guarantee success.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Use this tool for entertainment, laughter, and playful moments with friends
            and partners—but always remember that real love and compatibility are far
            more complex than any algorithm can capture.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── SCORE INTERPRETATION ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Interpreting the Compatibility Score
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            While the scores are meaningless in reality, here's how they're typically
            presented for entertainment purposes:
          </p>
          
          {[
            {
              heading: "90-100%: Soulmates!",
              description: "The highest possible compatibility score. In the context of this fun game, this represents a 'perfect match'—though in reality, it's just a random number generation.",
              color: "text-pink-500",
            },
            {
              heading: "70-89%: Great Compatibility",
              description: "A high score suggesting strong compatibility. This range often comes with enthusiastic messages about the potential for a great relationship.",
              color: "text-rose-500",
            },
            {
              heading: "50-69%: Good Match",
              description: "A moderate score indicating decent compatibility. The message might suggest that with effort and understanding, the relationship could work well.",
              color: "text-amber-500",
            },
            {
              heading: "30-49%: Challenge Ahead",
              description: "A lower score suggesting the relationship might face challenges. Remember, this is just for fun—real relationships overcome challenges every day.",
              color: "text-orange-500",
            },
            {
              heading: "0-29%: Difficult Match",
              description: "The lowest scores, often accompanied by playful warnings. In the entertainment context, this suggests the names don't 'align' well in the algorithm.",
              color: "text-slate-500",
            },
          ].map(({ heading, description, color }) => (
            <div key={heading} className="state-card">
              <h3 className={color}>{heading}</h3>
              <p className="text-sm text-slate-800 dark:text-slate-300 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── FUN USES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Fun Ways to Use the Love Calculator
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Beyond testing your own relationship, here are some entertaining ways
            to use this tool:
          </p>
          <ul className="tip-list space-y-3 text-slate-800 dark:text-slate-100">
            <li>
              <strong>Ice Breaker at Parties:</strong> A great conversation starter
              at gatherings or social events. Everyone enjoys seeing their compatibility
              with friends, celebrities, or fictional characters.
            </li>
            <li>
              <strong>Celebrity Crush Testing:</strong> Ever wondered how compatible
              you'd be with your favorite celebrity? Test it out for a laugh.
            </li>
            <li>
              <strong>Fictional Character Pairings:</strong> Test compatibility between
              characters from movies, books, or TV shows. It's fun to see which
              fictional couples the algorithm 'approves' of.
            </li>
            <li>
              <strong>Name Game with Friends:</strong> Compete with friends to see
              who can get the highest compatibility score with various names.
            </li>
            <li>
              <strong>Couple's Entertainment:</strong> Couples can use it as a playful
              activity to laugh together, especially if they get a funny or unexpected result.
            </li>
            <li>
              <strong>Social Media Content:</strong> Share funny results on social media
              (with consent from the other person if it's a real relationship) for
              engagement and laughs.
            </li>
          </ul>
        </section>

        <hr className="rule-divider" />

        {/* ── HISTORY & CULTURE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The History of Love Calculators
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Love calculators have evolved significantly over the decades:
          </p>
          <ul className="space-y-3 text-slate-800 dark:text-slate-100 text-base mb-4">
            <li>
              <strong>Pre-Internet Era:</strong> Before the internet, love compatibility
              tests appeared in magazines, newspapers, and fortune-telling books,
              often using simple letter-based calculations.
            </li>
            <li>
              <strong>Early Internet:</strong> In the 1990s and early 2000s, love
              calculators became popular on early websites and were often shared
              via email and instant messaging.
            </li>
            <li>
              <strong>Social Media Era:</strong> With the rise of social media,
              love calculators became viral content, with people sharing their results
              and challenging friends to try them.
            </li>
            <li>
              <strong>Modern Apps:</strong> Today, love calculators exist as mobile
              apps and web tools with enhanced graphics and more sophisticated
              (though still meaningless) algorithms.
            </li>
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Despite their lack of scientific validity, love calculators remain popular
              because they tap into our universal fascination with love, relationships,
              and the desire to understand compatibility—even if just for fun.
          </p>
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
                q: "Is the love calculator accurate?",
                a: "No, not at all. Love calculators are purely for entertainment and have no scientific basis. Real relationship compatibility depends on complex factors that cannot be measured by a simple name algorithm.",
              },
              {
                q: "Should I take my score seriously?",
                a: "Absolutely not. Whether you get 10% or 95%, the score has no bearing on real relationship success or compatibility. Use it for fun and laughter only.",
              },
              {
                q: "Can I use any names?",
                a: "Yes! You can test any combination of names—your own, friends', celebrities', fictional characters', or even made-up names. It's all for entertainment.",
              },
              {
                q: "Why do different love calculators give different results?",
                a: "Each love calculator uses its own algorithm. Some might use different letter-to-number conversions, mathematical operations, or random elements, leading to different results for the same names.",
              },
              {
                q: "Is this appropriate for children?",
                a: "Yes, love calculators are generally family-friendly and appropriate for all ages. They're often used by teenagers and adults alike for harmless fun.",
              },
              {
                q: "Can I share my results online?",
                a: "Yes, you can share results for entertainment purposes. However, if testing with a real person's name, it's polite to get their consent before sharing publicly.",
              },
              {
                q: "What if I get a low score with my partner?",
                a: "Laugh it off! Remember, this is just a fun game with no real meaning. A low score doesn't predict anything about your actual relationship.",
              },
              {
                q: "How is the score calculated?",
                a: "Most love calculators use algorithms that convert letters to numbers, perform mathematical operations, and generate a percentage. The exact method varies by calculator, but none are scientifically valid.",
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
            Love calculators are a delightful example of how simple algorithms can
            create engaging entertainment. While they have no scientific merit and
            should never influence real relationship decisions, they provide moments
            of fun, laughter, and social connection.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're testing your compatibility with a partner, checking how
            well you'd match with a celebrity, or just enjoying the playful nature
            of the game, remember to keep it light-hearted. Real love and compatibility
            are built on communication, trust, shared values, and genuine connection—not
            on a percentage generated from names.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Use the love calculator above for entertainment, share laughs with friends,
            and enjoy the playful side of relationship testing—just don't forget that
            the most important compatibility test is the one you build together
            through real experiences and mutual understanding.
          </p>
        </section>
      </div>
    </article>
  );
}
