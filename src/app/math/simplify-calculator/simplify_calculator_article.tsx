import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function SimplifyArticle() {
  return (
    <article
      className={`w-full max-w-[75ch] mx-auto px-6 py-16 text-[18px] leading-[1.8] font-sans text-slate-800 dark:text-slate-100 ${inter.variable}`}
    >
      <style>{`
        .article-root { font-family: var(--font-inter), sans-serif; }
        .display-font { font-family: var(--font-inter), sans-serif; }
        .article-root h2 { font-family: var(--font-inter), sans-serif; }
        .article-root h3 { font-family: var(--font-inter), sans-serif; }

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
        <header className="mb-12 text-center">
          <span className="meta-tag">Math · Algebra & Simplification</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Simplify Calculator: Simplify Mathematical Expressions
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to simplifying algebraic expressions
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Simplifying mathematical expressions is a fundamental skill that makes complex
            equations more manageable and reveals their underlying structure. From combining
            like terms to factoring, simplification is essential for solving equations
            efficiently and understanding mathematical relationships.
          </p>
          <p className="mb-5">
            A Simplify Calculator reduces complex expressions to their simplest form by
            applying algebraic rules automatically. This tool is invaluable for students
            learning algebra, engineers simplifying formulas, and anyone working with
            mathematical expressions.
          </p>
          <p>
            Mastering simplification techniques builds strong algebraic intuition and
            provides the foundation for solving more complex mathematical problems.
          </p>
        </section>

        <hr className="rule-divider" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {[
              {
                q: "What are the basic simplification rules?",
                a: "Basic rules include combining like terms, applying the distributive property, canceling common factors, and using exponent rules. These reduce expressions to their simplest equivalent form.",
              },
              {
                q: "How do I simplify fractions with variables?",
                a: "Factor the numerator and denominator, then cancel common factors. Remember that variables can be factored like numbers. Always check for common factors first.",
              },
              {
                q: "What does 'simplest form' mean?",
                a: "Simplest form means the expression cannot be reduced further using standard algebraic rules. It has no common factors, combined like terms, and minimal complexity.",
              },
              {
                q: "Can all expressions be simplified?",
                a: "Most expressions can be simplified to some degree. However, some expressions are already in their simplest form, and others may require advanced techniques beyond basic simplification.",
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

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Conclusion
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Use the Simplify Calculator to reduce expressions to their simplest form.
            Mastering simplification is essential for algebra and efficient problem-solving.
          </p>
        </section>
      </div>
    </article>
  );
}
