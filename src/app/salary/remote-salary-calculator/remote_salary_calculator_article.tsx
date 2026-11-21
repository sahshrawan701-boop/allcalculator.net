import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RemoteSalaryArticle() {
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
          <span className="meta-tag">Salary · Remote Work</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Remote Salary Calculator: Calculate Remote Work Compensation
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to remote salary calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Remote work has transformed compensation structures, with location-based pay
            becoming increasingly common. Some companies pay based on where employees live,
            while others pay based on market rates regardless of location. Understanding
            remote salary policies helps you evaluate job offers and negotiate fair
            compensation for remote positions.
          </p>
          <p className="mb-5">
            A Remote Salary Calculator helps estimate compensation for remote work based
            on your location, role, and experience. This tool is essential for remote
            workers evaluating job offers and understanding how location affects pay.
          </p>
          <p>
            Understanding remote pay structures helps you make informed decisions about
            remote work opportunities and ensure fair compensation.
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
                q: "How does location affect remote salary?",
                a: "Some companies adjust pay based on cost of living in your location. Others pay based on their headquarters location or national market rates. Policies vary significantly by company.",
              },
              {
                q: "Should I accept location-based pay?",
                a: "Consider total compensation including benefits, flexibility, and savings from remote work. Location-based pay may still be competitive when factoring in lower living costs.",
              },
              {
                q: "Can I negotiate remote salary?",
                a: "Yes, remote salaries are negotiable. Research market rates for your role, emphasize your value regardless of location, and consider total compensation package.",
              },
              {
                q: "What are the advantages of remote work compensation?",
                a: "Advantages include no commute costs, potential tax benefits, flexibility in location, and often better work-life balance. These can offset slightly lower salaries.",
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
            Use the Remote Salary Calculator to understand compensation for remote
            work. Evaluating remote pay structures helps ensure fair compensation
            for your skills and experience.
          </p>
        </section>
      </div>
    </article>
  );
}
