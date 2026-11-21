import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function GraphingArticle() {
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
          <span className="meta-tag">Math · Graphing & Visualization</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Graphing Calculator: Plot Mathematical Functions
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to graphing functions and analyzing curves
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Graphing functions provides visual insight into mathematical relationships,
            making abstract concepts concrete and understandable. From simple linear
            functions to complex curves, graphing helps identify patterns, intercepts,
            and behavior that equations alone might not reveal.
          </p>
          <p className="mb-5">
            A Graphing Calculator plots mathematical functions, showing their shape,
            intercepts, and key features. This tool is essential for students learning
            functions, engineers analyzing relationships, and scientists visualizing data.
          </p>
          <p>
            Understanding how to read and interpret graphs builds strong analytical
            skills and provides intuition for mathematical relationships across science,
            engineering, and economics.
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
                q: "What types of functions can be graphed?",
                a: "Most graphing calculators handle linear, quadratic, polynomial, trigonometric, exponential, logarithmic, and rational functions. Advanced calculators may also support parametric and polar functions.",
              },
              {
                q: "How do I find intercepts from a graph?",
                a: "X-intercepts occur where the graph crosses the x-axis (y=0). Y-intercepts occur where the graph crosses the y-axis (x=0). These points are key features of the function.",
              },
              {
                q: "What is the domain and range of a function?",
                a: "The domain is all possible input values (x-values) for which the function is defined. The range is all possible output values (y-values) the function can produce.",
              },
              {
                q: "How do I determine if a function is increasing or decreasing?",
                a: "A function is increasing where the graph rises from left to right (positive slope). It's decreasing where the graph falls from left to right (negative slope).",
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
            Use the Graphing Calculator to visualize functions and understand their
            behavior. Mastering graphing is essential for calculus and mathematical
            analysis.
          </p>
        </section>
      </div>
    </article>
  );
}
