"use client";

import { useState } from "react";

// ─── Types ─────────────────────────────────────────────────────────────────────
interface FAQItem {
  q: string;
  a: string;
}

interface ScenarioData {
  title: string;
  icon: string;
  color: string;
  inputs: { label: string; value: string }[];
  result: string;
  breakdown: string;
  lesson: string;
}

interface MistakeItem {
  num: string;
  title: string;
  why: string;
  consequence: string;
  fix: string;
}

// ─── Data ──────────────────────────────────────────────────────────────────────

const FAQS: FAQItem[] = [
  {
    q: "What is the Rule of 72, and how do I use it?",
    a: "The Rule of 72 is a mental shortcut for estimating how long it takes to double your money. Divide 72 by your annual interest rate. At 6%, your money doubles every 12 years (72 ÷ 6 = 12). At 9%, it doubles every 8 years. The rule works for rates between 4% and 15% with reasonable accuracy. It also works in reverse: if you want to double your money in 10 years, you need roughly a 7.2% annual return.",
  },
  {
    q: "What compounding frequency produces the best results?",
    a: "More frequent compounding always produces a higher ending balance, though the difference narrows at lower rates. Daily compounding beats monthly compounding beats annual compounding. On a $10,000 investment at 8% for 20 years: annual compounding produces $46,610; monthly produces $49,268; daily produces $49,530. The practical takeaway is that compounding frequency matters far less than your contribution amount and time horizon. A high-yield savings account compounding daily still underperforms an index fund compounding annually if the rate difference is significant.",
  },
  {
    q: "How much should I invest every month to reach $1 million?",
    a: "It depends entirely on your time horizon and expected return. At 8% annual return: starting at age 25 (40 years), you need to invest about $286/month. Starting at age 35 (30 years), you need $671/month. Starting at age 45 (20 years), you need $1,698/month. Each 10-year delay roughly triples the required monthly contribution. The most powerful lever is starting early — not earning higher returns.",
  },
  {
    q: "Does inflation reduce the real value of compound growth?",
    a: "Yes, and this is one of the most overlooked factors in long-term planning. If your investment grows at 8% per year and inflation runs at 3%, your real (inflation-adjusted) return is roughly 5%. $100,000 growing to $217,000 over 25 years sounds impressive — but if prices also doubled in that time, your real purchasing power only grew to about $108,500. Use the calculator's inflation rate field to model real returns. For long-term goals, always think in real dollars, not nominal ones.",
  },
  {
    q: "Can compound interest genuinely make someone wealthy?",
    a: "Yes — with time, discipline, and realistic expectations. Warren Buffett earned over 99% of his net worth after age 50, almost entirely through decades of compounding. An ordinary investor contributing $500/month from age 25 to 65 at 8% accumulates approximately $1.75 million. The mathematics is straightforward: time and consistency matter more than investment sophistication. What most people lack is not knowledge — it's patience.",
  },
  {
    q: "What is the difference between APR and APY?",
    a: "APR (Annual Percentage Rate) is the stated interest rate without compounding effects. APY (Annual Percentage Yield) reflects the actual return after compounding. A savings account advertising 5% APR compounding monthly has an APY of approximately 5.12%. For borrowers, APR understates the true cost; for savers and investors, APY gives the accurate picture. Always compare APY when evaluating savings accounts or certificates of deposit.",
  },
  {
    q: "Is it better to invest a lump sum or contribute monthly?",
    a: "Mathematically, investing a lump sum immediately produces a higher expected return than spreading the same amount over time — because more money is invested for longer. However, most people do not have large lump sums available, and dollar-cost averaging (regular monthly contributions) removes the emotional difficulty of investing at a potentially bad time. For most investors, consistent monthly contributions are the most practical and psychologically sustainable strategy.",
  },
  {
    q: "How does contribution timing (beginning vs. end of period) affect results?",
    a: "Contributing at the beginning of each period means your money starts compounding immediately. Contributing at the end means each payment misses one compounding period. On $500/month at 8% for 30 years, beginning-of-period contributions produce approximately $754,000 versus $749,000 for end-of-period — a difference of about $5,000. The impact is small but real. Most automatic investment plans contribute at the start of the month.",
  },
  {
    q: "What is a realistic long-term return assumption?",
    a: "The U.S. stock market (S&P 500) has returned approximately 10–11% annually before inflation over the past century, and roughly 7–8% after inflation. However, past returns do not guarantee future results, and most financial planners use 6–8% nominal returns for conservative long-term projections. For bonds, 3–5% is more typical. A diversified portfolio of 70% stocks and 30% bonds has historically returned around 8–9% nominally. Avoid projecting above 10% for planning purposes.",
  },
  {
    q: "What happens to compound growth if I make early withdrawals?",
    a: "Early withdrawals have a disproportionately damaging effect because they remove not just the withdrawn amount but all future compounding on that amount. Withdrawing $10,000 from a retirement account at age 35 does not cost $10,000 — at 8% for 30 years, that $10,000 would have grown to $100,627. The true cost is over $100,000. Additionally, early withdrawals from tax-advantaged accounts typically incur a 10% penalty plus income taxes, compounding the financial setback.",
  },
  {
    q: "How do taxes affect compound interest growth?",
    a: "Taxes significantly reduce compounding efficiency. In a taxable account earning 8%, if gains are taxed at 25% each year, your effective after-tax growth rate drops to 6%. Over 30 years, $10,000 grows to $100,627 at 8% versus $57,435 at an effective 6% — a $43,000 difference. Tax-advantaged accounts (401k, IRA, Roth IRA) allow compounding without annual tax drag. A Roth IRA, where growth and withdrawals are tax-free, is one of the most powerful tools available to long-term investors.",
  },
  {
    q: "What is the effective annual rate (EAR), and why does it matter?",
    a: "The Effective Annual Rate converts any compounding frequency into a single annual equivalent, allowing accurate comparisons between products with different compounding schedules. The formula is: EAR = (1 + r/n)^n − 1, where r is the nominal rate and n is the number of compounding periods per year. A 5% rate compounding monthly has an EAR of 5.116%. A 5% rate compounding daily has an EAR of 5.127%. EAR is always higher than the stated rate for any frequency greater than annual.",
  },
  {
    q: "At what point does compound interest begin to accelerate noticeably?",
    a: 'Compound growth is exponential, meaning the absolute dollar gains in later years dwarf the early years. On a $10,000 investment at 8%, the first year earns $800. Year 10 earns roughly $1,999. Year 20 earns roughly $4,661. Year 30 earns roughly $9,285. Most of the visible "explosion" in wealth happens in the final third of a long investment horizon. This is why financial planners call the late stages of compound growth "the hockey stick" — the curve bends sharply upward.',
  },
  {
    q: "Can I use compound interest to model college savings?",
    a: "Yes. A 529 college savings plan is a tax-advantaged account designed for education expenses. If you invest $250/month from a child's birth at 7% annual return, you accumulate approximately $100,000 by age 18. Starting at age 8 and investing $400/month for 10 years at the same rate produces only about $69,000. The 8-year head start is worth more than the 60% higher monthly contribution. Use the calculator to model specific scenarios for your child's college savings target.",
  },
];

const SCENARIOS: ScenarioData[] = [
  {
    title: "The New Investor",
    icon: "🌱",
    color: "from-emerald-500 to-emerald-700",
    inputs: [
      { label: "Starting amount", value: "$500" },
      { label: "Monthly contribution", value: "$100" },
      { label: "Annual return", value: "8%" },
      { label: "Time horizon", value: "35 years" },
      { label: "Compounding", value: "Monthly" },
    ],
    result: "$224,437",
    breakdown:
      "You invested $42,500 total ($500 + $100 × 420 months). Compound growth added $181,937.",
    lesson:
      "Total contributions represent only 19% of the final balance. The other 81% is pure compounding. Investing $100/month — less than most people spend on subscriptions — creates life-changing wealth over 35 years.",
  },
  {
    title: "The Retirement Saver",
    icon: "🏖️",
    color: "from-blue-500 to-blue-700",
    inputs: [
      { label: "Starting amount", value: "$10,000" },
      { label: "Monthly contribution", value: "$500" },
      { label: "Annual return", value: "7%" },
      { label: "Time horizon", value: "30 years" },
      { label: "Compounding", value: "Monthly" },
    ],
    result: "$621,239",
    breakdown:
      "Total invested: $190,000. Compound growth: $431,239. The last 10 years of compounding account for more than half the final balance.",
    lesson:
      "At this contribution level, maxing out a 401(k) ($23,000/year in 2024) would push this number past $2 million. Tax-advantaged accounts turbocharge compound growth by eliminating annual tax drag.",
  },
  {
    title: "College Savings",
    icon: "🎓",
    color: "from-violet-500 to-violet-700",
    inputs: [
      { label: "Starting amount", value: "$2,000" },
      { label: "Monthly contribution", value: "$250" },
      { label: "Annual return", value: "7%" },
      { label: "Time horizon", value: "18 years" },
      { label: "Compounding", value: "Monthly" },
    ],
    result: "$107,742",
    breakdown:
      "Total invested: $56,000. Compound growth added $51,742. A 529 plan can shelter all gains from federal tax.",
    lesson:
      "Starting a college fund at birth rather than age 8 makes a decisive difference. The same $250/month started at age 8 produces only ~$47,000 by age 18 — less than half the amount — despite running for 10 years.",
  },
  {
    title: "High-Yield Savings",
    icon: "🏦",
    color: "from-amber-500 to-amber-700",
    inputs: [
      { label: "Starting amount", value: "$20,000" },
      { label: "Monthly contribution", value: "$200" },
      { label: "Annual return", value: "4.5%" },
      { label: "Time horizon", value: "10 years" },
      { label: "Compounding", value: "Daily" },
    ],
    result: "$61,858",
    breakdown:
      "Total deposited: $44,000. Interest earned: $17,858. Daily compounding vs. monthly adds approximately $82 over 10 years at this rate.",
    lesson:
      "High-yield savings accounts are ideal for money needed within 5–10 years. For a 10+ year horizon, equity investments typically outperform even the best HYSA rates significantly.",
  },
  {
    title: "Long-Term Index Fund",
    icon: "📈",
    color: "from-indigo-500 to-indigo-700",
    inputs: [
      { label: "Starting amount", value: "$5,000" },
      { label: "Monthly contribution", value: "$600" },
      { label: "Annual return", value: "10%" },
      { label: "Time horizon", value: "40 years" },
      { label: "Compounding", value: "Monthly" },
    ],
    result: "$3,854,166",
    breakdown:
      "Total invested: $293,000. Compound growth: $3,561,166. Growth represents 92.4% of the final balance.",
    lesson:
      "The S&P 500 has returned ~10.5% annually since 1957. Consistent monthly investing in a low-cost index fund over a career is the mechanism behind the majority of retail investor wealth in the United States.",
  },
  {
    title: "The Late Starter",
    icon: "⏳",
    color: "from-rose-500 to-rose-700",
    inputs: [
      { label: "Starting amount", value: "$0" },
      { label: "Monthly contribution", value: "$1,500" },
      { label: "Annual return", value: "8%" },
      { label: "Time horizon", value: "20 years" },
      { label: "Compounding", value: "Monthly" },
    ],
    result: "$879,303",
    breakdown:
      "Total invested: $360,000. Compound growth: $519,303. Starting at 45 with $1,500/month produces less than the early starter investing $500/month from age 25 ($1.24M).",
    lesson:
      "A late start is not fatal — but it requires a significantly higher monthly commitment to achieve comparable results. The late starter here invests 3× more per month but ends with 30% less. Time is the variable you cannot buy back.",
  },
];

const MISTAKES: MistakeItem[] = [
  {
    num: "01",
    title: "Starting Too Late",
    why: 'People assume they have plenty of time, or wait until they feel financially "ready."',
    consequence:
      "Every 10-year delay roughly triples the required monthly contribution to reach the same goal.",
    fix: "Start with whatever you can — even $50/month. The cost of waiting is measured in hundreds of thousands of dollars.",
  },
  {
    num: "02",
    title: "Waiting for Perfect Market Conditions",
    why: 'Fear of investing at a market peak causes paralysis. People wait for a "dip" that may not arrive soon.',
    consequence:
      "Studies consistently show that time in the market beats timing the market. Missing the 10 best trading days in any decade can cut returns by 50%.",
    fix: "Use automatic monthly investments (dollar-cost averaging) and stop watching daily prices.",
  },
  {
    num: "03",
    title: "Ignoring Inflation",
    why: "Calculators default to showing nominal (pre-inflation) figures, and nominal numbers look more impressive.",
    consequence:
      "A $500,000 portfolio 30 years from now may have the purchasing power of only $200,000–250,000 today at 2.5–3% inflation.",
    fix: "Always model real returns. Subtract expected inflation from your return assumption (e.g., 8% – 3% = 5% real return), or use the inflation field in the calculator.",
  },
  {
    num: "04",
    title: "Projecting Unrealistic Returns",
    why: "Crypto gains, hot stock tips, and recent bull markets make 20–30% annual returns feel normal.",
    consequence:
      "A plan built on 15% annual returns that only delivers 7% leaves you with 30% of your projected balance at retirement.",
    fix: "Use 6–8% for conservative projections. Run a pessimistic scenario at 5% and a realistic scenario at 8%. Plan for the middle.",
  },
  {
    num: "05",
    title: "Making Early or Frequent Withdrawals",
    why: "Emergency expenses, lifestyle inflation, and impatience trigger withdrawals from investment accounts.",
    consequence:
      "Withdrawing $20,000 from a retirement account at 40 costs you ~$200,000 by age 65 (at 8% for 25 years). Plus the 10% penalty and income taxes.",
    fix: "Build a 3–6 month emergency fund in a separate high-yield savings account before investing. Never touch investment capital prematurely.",
  },
  {
    num: "06",
    title: "Not Increasing Contributions Over Time",
    why: 'Setting a contribution and forgetting it feels "good enough." Lifestyle inflation absorbs salary increases.',
    consequence:
      "A fixed $200/month contribution never captures your growing earnings capacity. The investor who increases contributions by $50/year accumulates 40–60% more over 30 years.",
    fix: "Each time you receive a raise, commit half of the increase to investments. Automate annual contribution increases of at least 3–5%.",
  },
  {
    num: "07",
    title: "Paying High Investment Fees",
    why: "Investors don't notice fund expense ratios because fees are deducted silently from performance.",
    consequence:
      "A 1.5% annual expense ratio vs. 0.03% (a low-cost index fund) on a $200,000 portfolio over 20 years costs approximately $68,000 in compounded returns.",
    fix: "Use index funds with expense ratios below 0.20%. Vanguard, Fidelity, and Schwab all offer core funds below 0.05%. Fees compound in reverse — every dollar in fees is a dollar not compounding.",
  },
  {
    num: "08",
    title: "Letting Cash Sit in Low-Interest Accounts",
    why: "Inertia. Most people keep savings in traditional bank accounts earning 0.01–0.5% rather than moving to high-yield accounts.",
    consequence:
      "At 0.1% APY vs. 4.5% APY on $50,000 over 5 years: $250 earned vs. $12,298 earned. An effortless $12,000 lost to inaction.",
    fix: "Move emergency funds and short-term savings to a high-yield savings account or money market fund. These accounts are FDIC insured and take 10 minutes to open.",
  },
  {
    num: "09",
    title: "Stopping Contributions During Market Downturns",
    why: 'When portfolios fall 20–30%, the emotional instinct is to stop "throwing money away."',
    consequence:
      "Stopping contributions during downturns means buying nothing when prices are cheapest. The investors who continued contributing through 2008–2009 saw their portfolios fully recover and then soar.",
    fix: "Automate investments so emotions don't make the decision. A market decline is a discount on future wealth, not a reason to pause.",
  },
  {
    num: "10",
    title: "Overlooking Tax-Advantaged Accounts",
    why: "The complexity of retirement accounts (401k, IRA, Roth IRA) deters people from using them optimally.",
    consequence:
      "Investing $6,000/year in a taxable account at a 25% tax rate vs. a Roth IRA over 30 years at 8% produces roughly $170,000 less, assuming all gains would be taxed in the taxable account.",
    fix: "Prioritize tax-advantaged accounts in this order: 401k up to employer match → Roth IRA → 401k to max → taxable accounts.",
  },
];

const RULE_OF_72 = [
  { rate: "2%", years: "36.0", example: "Long-term bonds, CDs" },
  { rate: "3%", years: "24.0", example: "High-yield savings, I-bonds" },
  { rate: "4%", years: "18.0", example: "Conservative portfolio" },
  { rate: "5%", years: "14.4", example: "Balanced fund (60/40)" },
  { rate: "6%", years: "12.0", example: "Conservative stock allocation" },
  { rate: "7%", years: "10.3", example: "Diversified index fund" },
  { rate: "8%", years: "9.0", example: "U.S. equity fund (real return est.)" },
  { rate: "9%", years: "8.0", example: "Growth-oriented portfolio" },
  { rate: "10%", years: "7.2", example: "S&P 500 historical average" },
  { rate: "12%", years: "6.0", example: "Small-cap / high growth" },
];

const GROWTH_TABLE = [
  { years: 1, r5: "10,500", r7: "10,700", r10: "11,000" },
  { years: 5, r5: "12,763", r7: "14,026", r10: "16,105" },
  { years: 10, r5: "16,289", r7: "19,672", r10: "25,937" },
  { years: 15, r5: "20,789", r7: "27,590", r10: "41,772" },
  { years: 20, r5: "26,533", r7: "38,697", r10: "67,275" },
  { years: 25, r5: "33,864", r7: "54,274", r10: "108,347" },
  { years: 30, r5: "43,219", r7: "76,123", r10: "174,494" },
];

const CONTRIBUTION_TABLE = [
  { monthly: "$0", total10: "$16,289", total20: "$26,533", total30: "$43,219" },
  {
    monthly: "$100",
    total10: "$32,724",
    total20: "$57,874",
    total30: "$124,288",
  },
  {
    monthly: "$300",
    total10: "$63,598",
    total20: "$120,558",
    total30: "$285,427",
  },
  {
    monthly: "$500",
    total10: "$94,471",
    total20: "$183,243",
    total30: "$446,565",
  },
  {
    monthly: "$1,000",
    total10: "$172,643",
    total20: "$339,953",
    total30: "$869,912",
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase
      bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 mb-4"
    >
      {children}
    </span>
  );
}

function SectionHeading({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <h2
      id={id}
      className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-50
      tracking-tight leading-tight mb-4 scroll-mt-24"
    >
      {children}
    </h2>
  );
}

function SectionIntro({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 max-w-3xl">
      {children}
    </p>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700
      shadow-sm p-6 ${className}`}
    >
      {children}
    </div>
  );
}

function TableWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
      <table className="w-full text-sm border-collapse min-w-[480px]">
        {children}
      </table>
    </div>
  );
}

function Th({
  children,
  align = "left",
}: {
  children: React.ReactNode;
  align?: string;
}) {
  return (
    <th
      className={`px-4 py-3 text-xs font-bold uppercase tracking-wider
      text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/60
      border-b border-slate-200 dark:border-slate-700 text-${align}`}
    >
      {children}
    </th>
  );
}

function Td({
  children,
  highlight = false,
  align = "left",
}: {
  children: React.ReactNode;
  highlight?: boolean;
  align?: string;
}) {
  return (
    <td
      className={`px-4 py-3 border-b border-slate-100 dark:border-slate-700/60 text-${align}
      ${
        highlight
          ? "font-bold text-indigo-700 dark:text-indigo-400"
          : "text-slate-700 dark:text-slate-300"
      }`}
    >
      {children}
    </td>
  );
}

function FormulaBlock({ formula, label }: { formula: string; label: string }) {
  return (
    <div className="my-4 rounded-xl bg-slate-900 dark:bg-slate-950 border border-slate-700 px-6 py-4 overflow-x-auto">
      <div className="text-xs text-indigo-400 font-semibold tracking-widest uppercase mb-2">
        {label}
      </div>
      <code className="text-indigo-300 font-mono text-base sm:text-lg font-semibold whitespace-nowrap">
        {formula}
      </code>
    </div>
  );
}

function CheckItem({
  children,
  type = "check",
}: {
  children: React.ReactNode;
  type?: "check" | "warn" | "cross";
}) {
  const icons = { check: "✅", warn: "⚠️", cross: "❌" };
  return (
    <li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
      <span className="text-base mt-0.5 shrink-0">{icons[type]}</span>
      <span>{children}</span>
    </li>
  );
}

function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div
      className="flex flex-col divide-y divide-slate-200 dark:divide-slate-700 rounded-2xl
      border border-slate-200 dark:border-slate-700 overflow-hidden"
    >
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left
              bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/50
              transition-colors group"
            aria-expanded={open === i}
          >
            <span
              className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100
              group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
            >
              {item.q}
            </span>
            <span
              className={`text-indigo-500 shrink-0 text-xl font-light transition-transform duration-200
              ${open === i ? "rotate-45" : ""}`}
            >
              +
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-6 pt-2 bg-slate-50 dark:bg-slate-800/60">
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.a}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Main Export ───────────────────────────────────────────────────────────────

export default function CompoundInterestArticle() {
  // Table of contents navigation
  const tocItems = [
    { id: "introduction", label: "Introduction" },
    { id: "decision-framework", label: "For You or Against You?" },
    { id: "formulas", label: "The Formulas Explained" },
    { id: "growth-curves", label: "Growth Curves & Visuals" },
    { id: "scenarios", label: "Real-World Scenarios" },
    { id: "comparison-tables", label: "Comparison Tables" },
    { id: "mistakes", label: "10 Costly Mistakes" },
    { id: "consistency", label: "The Power of Consistency" },
    { id: "inflation", label: "Compound Interest vs Inflation" },
    { id: "retirement", label: "Retirement Planning" },
    { id: "reference-tables", label: "Reference Tables" },
    { id: "faq", label: "FAQ" },
    { id: "methodology", label: "Methodology & EEAT" },
  ];

  return (
    <article
      className="font-sans max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12
      text-slate-800 dark:text-slate-200"
    >
      {/* ── Table of Contents ── */}
      <nav
        aria-label="Article navigation"
        className="mb-12 p-6 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30
          border border-indigo-100 dark:border-indigo-800/40"
      >
        <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4">
          In This Article
        </h2>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 list-none">
          {tocItems.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="flex items-center gap-2 text-sm text-indigo-700 dark:text-indigo-300
                  hover:text-indigo-900 dark:hover:text-indigo-100 no-underline hover:underline transition-colors"
              >
                <span className="text-indigo-300 dark:text-indigo-600 font-mono text-xs">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* ════════════════════════════════════════════════════════════════════
          01 · INTRODUCTION
      ════════════════════════════════════════════════════════════════════ */}
      <section id="introduction" className="mb-16 scroll-mt-24">
        <SectionBadge>Compound Interest Explained</SectionBadge>
        <SectionHeading>How Much Can Your Money Grow Over Time?</SectionHeading>

        {/* Lead stat */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            {
              stat: "$224,437",
              sub: "$100/month for 35 years at 8%",
              color: "border-emerald-500",
            },
            {
              stat: "$42,500",
              sub: "Total amount contributed",
              color: "border-amber-500",
            },
            {
              stat: "$181,937",
              sub: "Pure compound growth",
              color: "border-indigo-500",
            },
          ].map(({ stat, sub, color }) => (
            <div
              key={stat}
              className={`bg-white dark:bg-slate-800 rounded-xl border-l-4 ${color}
                border border-slate-200 dark:border-slate-700 p-5`}
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-1 font-mono">
                {stat}
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                {sub}
              </div>
            </div>
          ))}
        </div>

        <SectionIntro>
          Investing $100 per month — less than most households spend on
          streaming services — produces $224,437 over 35 years at an 8% annual
          return. You contributed $42,500. The remaining $181,937 was generated
          entirely by compound interest: your earnings generating their own
          earnings, month after month, for decades. This is the mechanism behind
          the majority of long-term wealth creation for ordinary investors.
        </SectionIntro>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          <Card>
            <div className="text-2xl mb-3">⏰</div>
            <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 mb-2">
              Why Time Is the Critical Variable
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              An investor who starts at 25 and stops contributing at 35 (10
              years, $12,000 total) ends up with more at 65 than someone who
              starts at 35 and contributes every single year until 65 (30 years,
              $36,000 total) — both at 8%. Starting early beats contributing
              more.
            </p>
          </Card>
          <Card>
            <div className="text-2xl mb-3">🔄</div>
            <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 mb-2">
              Why Reinvestment Frequency Matters
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Every time interest is added to your balance, the next interest
              calculation is performed on a larger number. Monthly compounding
              outperforms annual compounding on the same rate because your
              interest starts earning interest 11 months sooner each year.
            </p>
          </Card>
          <Card>
            <div className="text-2xl mb-3">📅</div>
            <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 mb-2">
              Why Contribution Frequency Matters
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Switching from annual contributions to monthly contributions —
              same total per year — increases your ending balance because each
              monthly payment begins compounding earlier. The effect grows more
              pronounced over longer time horizons.
            </p>
          </Card>
        </div>

        <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40">
          <p className="text-sm font-semibold text-amber-800 dark:text-amber-300 mb-1">
            📌 The Core Insight
          </p>
          <p className="text-sm text-amber-700 dark:text-amber-400 leading-relaxed">
            In compound growth, the final 10 years of a 30-year investment
            typically produce more dollars than the first 20 years combined.
            Patience isn't just a virtue — it's the mechanism of wealth
            creation. Use the calculator above to run your own numbers, then
            return to this guide to understand exactly what you're seeing.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          02 · DECISION FRAMEWORK
      ════════════════════════════════════════════════════════════════════ */}
      <section id="decision-framework" className="mb-16 scroll-mt-24">
        <SectionBadge>Decision Framework</SectionBadge>
        <SectionHeading>
          Is Compound Interest Working For You or Against You?
        </SectionHeading>
        <SectionIntro>
          Compound interest is mathematically neutral. It amplifies whatever
          direction your money is flowing. If you're a saver or investor, it
          builds wealth silently. If you're carrying high-interest debt, it
          drains wealth just as efficiently. Most households have both occurring
          simultaneously — often without realizing it.
        </SectionIntro>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="border-l-4 border-emerald-500">
            <h3 className="font-bold text-lg text-emerald-700 dark:text-emerald-400 mb-4 flex items-center gap-2">
              <span>✅</span> When It's Working FOR You
            </h3>
            <ul className="space-y-3">
              {[
                "High-yield savings account earning 4–5% APY, compounded daily",
                "Index fund contributions growing at 8–10% annually, tax-deferred",
                "Reinvested dividends purchasing more shares, which pay more dividends",
                "401(k) or Roth IRA growing without annual tax drag",
                "Certificate of deposit (CD) earning above-inflation rates",
              ].map((item) => (
                <CheckItem key={item} type="check">
                  {item}
                </CheckItem>
              ))}
            </ul>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <h3 className="font-bold text-lg text-rose-700 dark:text-rose-400 mb-4 flex items-center gap-2">
              <span>❌</span> When It's Working AGAINST You
            </h3>
            <ul className="space-y-3">
              {[
                "Credit card balance at 22–28% APR, compounding daily",
                "Personal loan at 18%, where minimum payments barely cover interest",
                "Student loans accruing interest during deferment periods",
                "Buy-now-pay-later deferred interest plans activating after grace periods",
                "Car loan at 12%+ on a depreciating asset",
              ].map((item) => (
                <CheckItem key={item} type="cross">
                  {item}
                </CheckItem>
              ))}
            </ul>
          </Card>
        </div>

        {/* Self-Assessment Checklist */}
        <Card className="mb-6">
          <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 mb-5">
            🔍 Quick Self-Assessment: Where Do You Stand?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {[
              {
                text: "I have a high-yield savings account earning above 3% APY",
                type: "check" as const,
              },
              {
                text: "I carry a credit card balance from month to month",
                type: "warn" as const,
              },
              {
                text: "I contribute to a 401(k) or IRA regularly",
                type: "check" as const,
              },
              {
                text: "I have personal loans or auto loans above 10% interest",
                type: "warn" as const,
              },
              {
                text: "My investment contributions are automated",
                type: "check" as const,
              },
              {
                text: "My emergency fund sits in a 0.01% savings account",
                type: "warn" as const,
              },
              {
                text: "I reinvest dividends rather than withdrawing them",
                type: "check" as const,
              },
              {
                text: "I&apos;ve made early withdrawals from retirement accounts",
                type: "warn" as const,
              },
            ].map(({ text, type }) => (
              <CheckItem key={text} type={type}>
                {text}
              </CheckItem>
            ))}
          </div>
        </Card>

        <div className="p-5 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/40">
          <p className="text-sm font-semibold text-rose-800 dark:text-rose-300 mb-2">
            ⚠️ Warning Signs
          </p>
          <p className="text-sm text-rose-700 dark:text-rose-400 leading-relaxed">
            If you carry revolving credit card debt while also saving money in a
            low-rate account, compound interest is working against you on a net
            basis. Paying off 22% credit card debt is a guaranteed 22% return —
            better than virtually any investment available. In most cases,
            eliminating high-interest debt before accelerating investment
            contributions produces superior outcomes.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          03 · FORMULAS
      ════════════════════════════════════════════════════════════════════ */}
      <section id="formulas" className="mb-16 scroll-mt-24">
        <SectionBadge>Financial Formulas</SectionBadge>
        <SectionHeading>
          The Compound Interest Formulas — Fully Explained
        </SectionHeading>
        <SectionIntro>
          Four formulas power everything in this calculator. Understanding each
          one — not just mechanically but intuitively — helps you make better
          decisions about rate assumptions, compounding frequency, and
          contribution timing.
        </SectionIntro>

        {/* Formula 1 */}
        <Card className="mb-6">
          <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-1">
            1. Basic Compound Interest
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            The foundational equation — no ongoing contributions, just a lump
            sum growing over time.
          </p>
          <FormulaBlock
            formula="A = P × (1 + r/n)^(n×t)"
            label="Basic Compound Interest Formula"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {[
              { var: "A", desc: "Final amount (what you end up with)" },
              { var: "P", desc: "Principal — the initial investment" },
              {
                var: "r",
                desc: "Annual interest rate as a decimal (e.g., 0.08 for 8%)",
              },
              {
                var: "n",
                desc: "Number of compounding periods per year (12 for monthly)",
              },
              { var: "t", desc: "Time in years" },
            ].map(({ var: v, desc }) => (
              <div key={v} className="flex items-start gap-3">
                <code
                  className="text-indigo-600 dark:text-indigo-400 font-bold font-mono text-base
                  shrink-0 bg-indigo-50 dark:bg-indigo-950/40 px-2 py-0.5 rounded"
                >
                  {v}
                </code>
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {desc}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-900/40 rounded-xl">
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong className="text-slate-800 dark:text-slate-200">
                Example:
              </strong>{" "}
              $10,000 invested at 8% for 20 years, compounding monthly: A =
              $10,000 × (1 + 0.08/12)^(12×20) ={" "}
              <strong className="text-indigo-600 dark:text-indigo-400">
                $49,268
              </strong>
              . Without compounding (simple interest), the same scenario
              produces only $26,000.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              <strong className="text-slate-800 dark:text-slate-200">
                Limitation:
              </strong>{" "}
              This formula only models a single lump-sum investment with no
              additional contributions. Use the formula below for regular
              savings plans.
            </p>
          </div>
        </Card>

        {/* Formula 2 */}
        <Card className="mb-6">
          <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-1">
            2. Compound Interest with Regular Contributions (Future Value of
            Annuity)
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            Used when you make recurring deposits — the most relevant formula
            for monthly savers.
          </p>
          <FormulaBlock
            formula="FV = PMT × [((1 + r/n)^(n×t) − 1) / (r/n)]"
            label="Future Value with Contributions"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {[
              { var: "FV", desc: "Future value of all contributions combined" },
              {
                var: "PMT",
                desc: "Regular payment amount per compounding period",
              },
              {
                var: "r/n",
                desc: "Periodic interest rate (annual rate ÷ periods per year)",
              },
              { var: "n×t", desc: "Total number of compounding periods" },
            ].map(({ var: v, desc }) => (
              <div key={v} className="flex items-start gap-3">
                <code
                  className="text-indigo-600 dark:text-indigo-400 font-bold font-mono text-base
                  shrink-0 bg-indigo-50 dark:bg-indigo-950/40 px-2 py-0.5 rounded"
                >
                  {v}
                </code>
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {desc}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-900/40 rounded-xl">
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong className="text-slate-800 dark:text-slate-200">
                In practice:
              </strong>{" "}
              The complete calculation combines this formula with the basic
              compound interest formula applied to the initial principal. The
              calculator handles this automatically — the formula here shows the
              mathematical structure driving the contributions column in your
              results.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              <strong className="text-slate-800 dark:text-slate-200">
                Beginning vs. end of period:
              </strong>{" "}
              If you contribute at the beginning of each period, multiply the
              result by (1 + r/n) to account for the extra compounding period
              each payment receives.
            </p>
          </div>
        </Card>

        {/* Formula 3 */}
        <Card className="mb-6">
          <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-1">
            3. Effective Annual Rate (EAR / APY)
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            Converts any compounding frequency to a true annual equivalent. This
            is the number that allows fair comparison between products with
            different compounding schedules.
          </p>
          <FormulaBlock
            formula="EAR = (1 + r/n)^n − 1"
            label="Effective Annual Rate Formula"
          />
          <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
            <table className="w-full text-sm border-collapse min-w-[400px]">
              <thead>
                <tr>
                  <Th>Nominal Rate</Th>
                  <Th align="right">Annual</Th>
                  <Th align="right">Quarterly</Th>
                  <Th align="right">Monthly</Th>
                  <Th align="right">Daily</Th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["4%", "4.000%", "4.060%", "4.074%", "4.081%"],
                  ["5%", "5.000%", "5.095%", "5.116%", "5.127%"],
                  ["8%", "8.000%", "8.243%", "8.300%", "8.328%"],
                  ["10%", "10.000%", "10.381%", "10.471%", "10.516%"],
                ].map(([rate, ...vals]) => (
                  <tr
                    key={rate}
                    className="hover:bg-slate-50 dark:hover:bg-slate-700/30"
                  >
                    <Td highlight>{rate}</Td>
                    {vals.map((v, i) => (
                      <Td key={i} align="right">
                        {v}
                      </Td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Formula 4 */}
        <Card>
          <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-1">
            4. Real (Inflation-Adjusted) Return
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            Nominal returns tell you what you earned. Real returns tell you what
            you can buy with it.
          </p>
          <FormulaBlock
            formula="Real Return ≈ Nominal Return − Inflation Rate"
            label="Simplified Real Return (Fisher Approximation)"
          />
          <FormulaBlock
            formula="Real Return = ((1 + nominal) / (1 + inflation)) − 1"
            label="Exact Real Return (Fisher Equation)"
          />
          <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-900/40 rounded-xl">
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong className="text-slate-800 dark:text-slate-200">
                Example:
              </strong>{" "}
              At 8% nominal return and 3% inflation, your real return is
              approximately 4.85% (exact) or 5% (simplified). Over 30 years,
              $10,000 grows to $100,627 nominally — but in today's purchasing
              power, that's equivalent to approximately $42,000. Always model
              retirement goals in real dollars.
            </p>
          </div>
        </Card>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          04 · GROWTH CURVES
      ════════════════════════════════════════════════════════════════════ */}
      <section id="growth-curves" className="mb-16 scroll-mt-24">
        <SectionBadge>Visual Learning</SectionBadge>
        <SectionHeading>
          Growth Curves: What Compound Interest Looks Like Over Time
        </SectionHeading>
        <SectionIntro>
          The growth of compound interest is not linear — it accelerates. The
          following tables show exactly how a $10,000 lump-sum investment
          behaves at three common return rates. The acceleration in the later
          years is the "hockey stick" effect that makes long time horizons so
          powerful.
        </SectionIntro>

        {/* Growth at different rates */}
        <div className="mb-8">
          <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 mb-3">
            $10,000 Lump Sum Growth at 5%, 7%, and 10% (Monthly Compounding)
          </h3>
          <TableWrapper>
            <thead>
              <tr>
                <Th>Year</Th>
                <Th align="right">At 5% APR</Th>
                <Th align="right">At 7% APR</Th>
                <Th align="right">At 10% APR</Th>
                <Th align="right">10% vs 5% Difference</Th>
              </tr>
            </thead>
            <tbody>
              {GROWTH_TABLE.map((row, i) => (
                <tr
                  key={i}
                  className={`hover:bg-slate-50 dark:hover:bg-slate-700/30 ${i % 2 === 0 ? "" : "bg-slate-50/50 dark:bg-slate-800/30"}`}
                >
                  <Td highlight>Year {row.years}</Td>
                  <Td align="right">${row.r5}</Td>
                  <Td align="right">${row.r7}</Td>
                  <Td align="right">${row.r10}</Td>
                  <Td align="right">
                    +$
                    {(
                      parseInt(row.r10.replace(/,/g, "")) -
                      parseInt(row.r5.replace(/,/g, ""))
                    ).toLocaleString()}
                  </Td>
                </tr>
              ))}
            </tbody>
          </TableWrapper>
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
            *Assumes monthly compounding. Initial investment: $10,000. No
            additional contributions.
          </p>
        </div>

        {/* Early vs Late investor visual */}
        <Card className="mb-8">
          <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 mb-5">
            ⏱️ The Decisive Cost of Waiting: Early Investor vs Late Investor
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
            {[
              {
                label: "Early Investor",
                icon: "🌟",
                details:
                  "Invests $200/month from age 22–32 (10 years only), then stops contributing",
                total_invested: "$24,000",
                at65: "$521,682",
                color:
                  "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800/40",
                textColor: "text-emerald-700 dark:text-emerald-400",
              },
              {
                label: "Late Investor",
                icon: "⌛",
                details:
                  "Invests $200/month from age 32–65 (33 years), contributing the entire time",
                total_invested: "$79,200",
                at65: "$367,038",
                color:
                  "bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800/40",
                textColor: "text-rose-700 dark:text-rose-400",
              },
              {
                label: "Both Combined",
                icon: "💡",
                details:
                  "Early investor's 10-year head start advantage over 33 years of contributions",
                total_invested: "+$55,200 invested",
                at65: "Early still wins by $154,644",
                color:
                  "bg-indigo-50 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-800/40",
                textColor: "text-indigo-700 dark:text-indigo-400",
              },
            ].map(
              ({
                label,
                icon,
                details,
                total_invested,
                at65,
                color,
                textColor,
              }) => (
                <div key={label} className={`rounded-xl border p-5 ${color}`}>
                  <div className="text-2xl mb-2">{icon}</div>
                  <div className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-sm">
                    {label}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">
                    {details}
                  </p>
                  <div className="text-xs text-slate-500 dark:text-slate-500 mb-1">
                    Total Contributed
                  </div>
                  <div className="font-bold text-sm text-slate-800 dark:text-slate-200 mb-2">
                    {total_invested}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-500 mb-1">
                    Balance at 65
                  </div>
                  <div className={`font-extrabold text-lg ${textColor}`}>
                    {at65}
                  </div>
                </div>
              ),
            )}
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Assumes 8% annual return, monthly compounding. The early investor
            contributes for only 10 years but invests during the
            highest-compounding years (age 22–32). Despite contributing $55,200
            less, they accumulate $154,644 more.{" "}
            <strong className="text-slate-800 dark:text-slate-200">
              Time in the market is not just important — it is the single most
              powerful variable in the equation.
            </strong>
          </p>
        </Card>

        {/* Contributions impact */}
        <div>
          <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 mb-3">
            💵 Impact of Monthly Contribution Amount ($10,000 Starting Balance,
            5% APR, Monthly Compounding)
          </h3>
          <TableWrapper>
            <thead>
              <tr>
                <Th>Monthly Addition</Th>
                <Th align="right">After 10 Years</Th>
                <Th align="right">After 20 Years</Th>
                <Th align="right">After 30 Years</Th>
                <Th align="right">30yr Total Contributed</Th>
              </tr>
            </thead>
            <tbody>
              {CONTRIBUTION_TABLE.map((row, i) => (
                <tr
                  key={i}
                  className={`hover:bg-slate-50 dark:hover:bg-slate-700/30 ${i % 2 === 0 ? "" : "bg-slate-50/50 dark:bg-slate-800/30"}`}
                >
                  <Td highlight>{row.monthly}</Td>
                  <Td align="right">${row.total10}</Td>
                  <Td align="right">${row.total20}</Td>
                  <Td align="right">${row.total30}</Td>
                  <Td align="right">
                    $
                    {(
                      parseInt(row.monthly.replace(/\$|,/g, "")) * 360 +
                      10000
                    ).toLocaleString()}
                  </Td>
                </tr>
              ))}
            </tbody>
          </TableWrapper>
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
            *Starting balance: $10,000. Annual return: 5%. Monthly compounding.
            Values are approximate.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          05 · REAL-WORLD SCENARIOS
      ════════════════════════════════════════════════════════════════════ */}
      <section id="scenarios" className="mb-16 scroll-mt-24">
        <SectionBadge>Real-World Scenarios</SectionBadge>
        <SectionHeading>6 Realistic Investment Scenarios</SectionHeading>
        <SectionIntro>
          Abstract calculations become meaningful when grounded in real
          situations. These six scenarios cover the most common investor
          profiles — from first-time savers to late starters. Each uses
          conservative, realistic assumptions. Enter any of these into the
          calculator above to verify the results and adjust the parameters to
          your own situation.
        </SectionIntro>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {SCENARIOS.map((s) => (
            <div
              key={s.title}
              className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700
                shadow-sm overflow-hidden"
            >
              <div
                className={`bg-gradient-to-r ${s.color} px-6 py-4 flex items-center gap-3`}
              >
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-white/70 mb-0.5">
                    Scenario
                  </div>
                  <div className="text-base font-extrabold text-white">
                    {s.title}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-4">
                  {s.inputs.map(({ label, value }) => (
                    <div key={label} className="flex flex-col">
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {label}
                      </span>
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-200 font-mono">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-800/40 p-4 mb-4">
                  <div className="text-xs text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider mb-1">
                    Final Balance
                  </div>
                  <div className="text-2xl font-extrabold text-indigo-700 dark:text-indigo-300 font-mono">
                    {s.result}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    {s.breakdown}
                  </p>
                </div>
                <div className="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-100 dark:border-amber-800/30">
                  <p className="text-xs font-semibold text-amber-700 dark:text-amber-400 mb-1">
                    💡 Key Lesson
                  </p>
                  <p className="text-xs text-amber-600 dark:text-amber-400 leading-relaxed">
                    {s.lesson}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          06 · COMPARISON TABLES
      ════════════════════════════════════════════════════════════════════ */}
      <section id="comparison-tables" className="mb-16 scroll-mt-24">
        <SectionBadge>Side-by-Side Comparisons</SectionBadge>
        <SectionHeading>Key Comparison Tables</SectionHeading>
        <SectionIntro>
          The following tables isolate the variables that matter most in
          compound growth. Each comparison holds all other factors constant so
          you can see the precise impact of one decision.
        </SectionIntro>

        {/* Simple vs Compound */}
        <div className="mb-8">
          <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 mb-3">
            Simple Interest vs Compound Interest — $10,000 at 8%
          </h3>
          <TableWrapper>
            <thead>
              <tr>
                <Th>Year</Th>
                <Th align="right">Simple Interest Balance</Th>
                <Th align="right">Compound Interest Balance</Th>
                <Th align="right">Compounding Advantage</Th>
              </tr>
            </thead>
            <tbody>
              {[
                [1, "$10,800", "$10,830", "$30"],
                [5, "$14,000", "$14,898", "$898"],
                [10, "$18,000", "$22,196", "$4,196"],
                [20, "$26,000", "$49,268", "$23,268"],
                [30, "$34,000", "$109,357", "$75,357"],
                [40, "$42,000", "$242,734", "$200,734"],
              ].map(([yr, si, ci, adv], i) => (
                <tr
                  key={i}
                  className={`hover:bg-slate-50 dark:hover:bg-slate-700/30 ${i % 2 === 0 ? "" : "bg-slate-50/50 dark:bg-slate-800/30"}`}
                >
                  <Td highlight>Year {yr}</Td>
                  <Td align="right">{si}</Td>
                  <Td align="right">{ci}</Td>
                  <Td align="right" highlight>
                    {adv as string}
                  </Td>
                </tr>
              ))}
            </tbody>
          </TableWrapper>
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
            Monthly compounding assumed for compound interest column.
          </p>
        </div>

        {/* Compounding frequency */}
        <div className="mb-8">
          <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 mb-3">
            Monthly vs Quarterly vs Annual Compounding — $50,000 at 7% for 25
            Years
          </h3>
          <TableWrapper>
            <thead>
              <tr>
                <Th>Compounding</Th>
                <Th align="right">Periods/Year</Th>
                <Th align="right">EAR</Th>
                <Th align="right">Final Balance</Th>
                <Th align="right">vs Annual</Th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Annual", "1", "7.000%", "$271,372", "—"],
                ["Semi-Annual", "2", "7.123%", "$274,038", "+$2,666"],
                ["Quarterly", "4", "7.186%", "$275,387", "+$4,015"],
                ["Monthly", "12", "7.229%", "$276,295", "+$4,923"],
                ["Daily", "365", "7.250%", "$276,844", "+$5,472"],
              ].map(([freq, n, ear, bal, diff], i) => (
                <tr
                  key={i}
                  className={`hover:bg-slate-50 dark:hover:bg-slate-700/30 ${i % 2 === 0 ? "" : "bg-slate-50/50 dark:bg-slate-800/30"}`}
                >
                  <Td highlight>{freq}</Td>
                  <Td align="right">{n}</Td>
                  <Td align="right">{ear}</Td>
                  <Td align="right">{bal}</Td>
                  <Td align="right">{diff}</Td>
                </tr>
              ))}
            </tbody>
          </TableWrapper>
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
            Takeaway: The difference between daily and annual compounding on
            $50,000 over 25 years is $5,472 — meaningful, but far less important
            than rate or time horizon.
          </p>
        </div>

        {/* Saving more vs higher return */}
        <div className="mb-8">
          <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 mb-3">
            Saving More vs Earning Higher Returns — $1,000/month Baseline, 30
            Years
          </h3>
          <TableWrapper>
            <thead>
              <tr>
                <Th>Strategy</Th>
                <Th align="right">Monthly Contribution</Th>
                <Th align="right">Annual Return</Th>
                <Th align="right">Final Balance</Th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Baseline", "$1,000", "7%", "$1,219,971"],
                ["Save 25% more", "$1,250", "7%", "$1,524,964"],
                ["Earn 1% more", "$1,000", "8%", "$1,490,359"],
                ["Save 50% more", "$1,500", "7%", "$1,829,957"],
                ["Earn 2% more", "$1,000", "9%", "$1,830,743"],
                ["Save 100% more", "$2,000", "7%", "$2,439,942"],
                ["Earn 3% more", "$1,000", "10%", "$2,260,488"],
              ].map(([strat, pmt, ret, bal], i) => (
                <tr
                  key={i}
                  className={`hover:bg-slate-50 dark:hover:bg-slate-700/30 ${i % 2 === 0 ? "" : "bg-slate-50/50 dark:bg-slate-800/30"} ${i === 0 ? "font-semibold" : ""}`}
                >
                  <Td highlight={i === 0}>{strat}</Td>
                  <Td align="right">{pmt}</Td>
                  <Td align="right">{ret}</Td>
                  <Td align="right">{bal}</Td>
                </tr>
              ))}
            </tbody>
          </TableWrapper>
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
            Saving more and earning more are roughly equivalent in impact.
            However, you control your savings rate directly. Chasing higher
            returns introduces risk. Doubling your savings rate is far safer
            than trying to double your return.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          07 · MISTAKES
      ════════════════════════════════════════════════════════════════════ */}
      <section id="mistakes" className="mb-16 scroll-mt-24">
        <SectionBadge>Common Mistakes</SectionBadge>
        <SectionHeading>
          10 Compound Interest Mistakes That Cost Investors Thousands
        </SectionHeading>
        <SectionIntro>
          Most investment underperformance isn't caused by poor stock picks or
          bad timing — it's caused by predictable, avoidable behavioral
          mistakes. Each error below has a specific mathematical consequence.
        </SectionIntro>

        <div className="flex flex-col gap-5">
          {MISTAKES.map((m) => (
            <Card key={m.num}>
              <div className="flex items-start gap-5">
                <div className="text-3xl font-black text-indigo-200 dark:text-indigo-800 font-mono shrink-0 leading-none mt-1">
                  {m.num}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 mb-3">
                    {m.title}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-100 dark:border-amber-900/40">
                      <div className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wide mb-1">
                        Why It Happens
                      </div>
                      <p className="text-xs text-amber-600 dark:text-amber-400 leading-relaxed">
                        {m.why}
                      </p>
                    </div>
                    <div className="p-3 bg-rose-50 dark:bg-rose-950/20 rounded-lg border border-rose-100 dark:border-rose-900/40">
                      <div className="text-xs font-bold text-rose-700 dark:text-rose-400 uppercase tracking-wide mb-1">
                        Long-Term Consequence
                      </div>
                      <p className="text-xs text-rose-600 dark:text-rose-400 leading-relaxed">
                        {m.consequence}
                      </p>
                    </div>
                    <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-100 dark:border-emerald-900/40">
                      <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide mb-1">
                        How to Avoid It
                      </div>
                      <p className="text-xs text-emerald-600 dark:text-emerald-400 leading-relaxed">
                        {m.fix}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          08 · CONSISTENCY / PSYCHOLOGY
      ════════════════════════════════════════════════════════════════════ */}
      <section id="consistency" className="mb-16 scroll-mt-24">
        <SectionBadge>Investing Psychology</SectionBadge>
        <SectionHeading>The Hidden Power of Consistency</SectionHeading>
        <SectionIntro>
          The most underrated edge in investing isn't intelligence, research, or
          market timing — it's consistency. The mathematics of compounding
          rewards uninterrupted growth more than it rewards higher returns
          achieved inconsistently.
        </SectionIntro>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          <Card className="border-t-4 border-t-indigo-500">
            <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 mb-3">
              Time Beats Timing
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
              A Yale study found that investors who tried to time the market
              underperformed buy-and-hold investors by an average of 1.5% per
              year — not because of bad picks, but because missing just 10–20
              peak growth days over a decade decimates long-run returns.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Someone who invested $10,000 in the S&P 500 in 1994 and held
              through 2024 would have approximately $200,000. Someone who tried
              to time the market and missed the 20 best days would have
              approximately $48,000.
            </p>
          </Card>
          <Card className="border-t-4 border-t-emerald-500">
            <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 mb-3">
              Consistency Beats Perfection
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
              Investing $500/month every month for 30 years at 8% produces
              $745,180. Investing $1,000/month perfectly timed (only during the
              best 6 months each year) at 8% produces $714,000 — less, despite
              investing the same total amount, because the irregular timing
              breaks compounding momentum.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Automation removes the decision entirely. Set a recurring
              investment and forget it.
            </p>
          </Card>
          <Card className="border-t-4 border-t-amber-500">
            <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 mb-3">
              Small Deposits Matter — More Than You Think
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
              Adding $50/month to a $500/month investment at 8% over 30 years
              adds $74,518 to your final balance — roughly $895 earned per $1
              extra contributed monthly. Every additional dollar of monthly
              savings earns approximately $17.89 per dollar over 30 years.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Skipping one $15/week coffee shop trip and investing it monthly
              ($65/month) over 30 years adds $96,774 at 8% return. Habits create
              wealth.
            </p>
          </Card>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
          <div className="text-lg font-extrabold mb-3">
            The Consistency Formula
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                label: "Automation",
                desc: "Set recurring investments. Remove emotion from the equation.",
              },
              {
                label: "Escalation",
                desc: "Increase contributions 3–5% annually. Match every salary raise with an investment raise.",
              },
              {
                label: "Inertia",
                desc: "Never touch the balance. Each withdrawal costs 8–10× its face value by retirement.",
              },
            ].map(({ label, desc }) => (
              <div key={label}>
                <div className="text-sm font-bold text-indigo-200 mb-1 uppercase tracking-wide">
                  {label}
                </div>
                <p className="text-sm text-white/80 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          09 · INFLATION
      ════════════════════════════════════════════════════════════════════ */}
      <section id="inflation" className="mb-16 scroll-mt-24">
        <SectionBadge>Inflation & Real Returns</SectionBadge>
        <SectionHeading>
          Compound Interest vs Inflation: The Hidden Tax on Growth
        </SectionHeading>
        <SectionIntro>
          Inflation is compound interest working in reverse. Just as your
          investments compound upward, inflation compounds the price of
          everything you'll want to buy — reducing the purchasing power of every
          dollar you accumulate. Ignoring inflation is the single most common
          planning error in long-term financial modeling.
        </SectionIntro>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 mb-4">
              Nominal vs Real Returns Explained
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    Nominal Return
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    The raw number: if your portfolio grew from $100,000 to
                    $108,000, your nominal return is 8%. This is what the
                    calculator shows by default.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    Real Return
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Nominal return adjusted for inflation. At 8% nominal and 3%
                    inflation, your real return is ~4.85%. Your purchasing power
                    grew by $4,850, not $8,000.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    Purchasing Power
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    What $1 million in 30 years actually buys at 3% inflation:
                    approximately $412,000 worth of today's goods. Always plan
                    retirement targets in today's dollars.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div>
            <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 mb-3">
              $500/Month for 30 Years: Nominal vs Real Ending Balance
            </h3>
            <TableWrapper>
              <thead>
                <tr>
                  <Th>Nominal Return</Th>
                  <Th align="right">Nominal Balance</Th>
                  <Th align="right">Real Balance*</Th>
                  <Th align="right">Purchasing Power Loss</Th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["5%", "$415,830", "$205,380", "−$210,450"],
                  ["7%", "$609,985", "$301,180", "−$308,805"],
                  ["8%", "$745,180", "$367,950", "−$377,230"],
                  ["10%", "$1,130,244", "$558,120", "−$572,124"],
                ].map(([rate, nom, real, loss], i) => (
                  <tr
                    key={i}
                    className={`hover:bg-slate-50 dark:hover:bg-slate-700/30 ${i % 2 === 0 ? "" : "bg-slate-50/50 dark:bg-slate-800/30"}`}
                  >
                    <Td highlight>{rate}</Td>
                    <Td align="right">{nom}</Td>
                    <Td align="right">{real}</Td>
                    <Td align="right">
                      <span className="text-rose-600 dark:text-rose-400">
                        {loss}
                      </span>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
              *Assumes 3% annual inflation. Real balance expressed in today's
              purchasing power.
            </p>

            <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800/40">
              <p className="text-sm text-amber-700 dark:text-amber-400 leading-relaxed">
                <strong>Practical guidance:</strong> Use an inflation rate of
                2.5–3% in the calculator's inflation field for realistic
                long-term projections. Retirement targets should be set in
                today's dollars and then multiplied by the inflation factor: $1M
                target in 30 years at 3% inflation requires accumulating
                approximately $2.43M in nominal terms.
              </p>
            </div>
          </div>
        </div>

        {/* Beating inflation */}
        <Card>
          <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 mb-4">
            Investment Types Ranked by Inflation-Beating Ability
          </h3>
          <div className="space-y-3">
            {[
              {
                type: "U.S. Stock Market (S&P 500)",
                nominal: "~10%",
                real: "~7%",
                verdict: "Strong inflation beater",
                color: "text-emerald-600 dark:text-emerald-400",
              },
              {
                type: "Real Estate (REITs)",
                nominal: "~8–10%",
                real: "~5–7%",
                verdict: "Good inflation hedge",
                color: "text-emerald-600 dark:text-emerald-400",
              },
              {
                type: "Diversified Bond Fund",
                nominal: "~4–5%",
                real: "~1–2%",
                verdict: "Marginally positive",
                color: "text-amber-600 dark:text-amber-400",
              },
              {
                type: "High-Yield Savings (current)",
                nominal: "~4.5%",
                real: "~1.5%",
                verdict: "Slight positive, no risk",
                color: "text-amber-600 dark:text-amber-400",
              },
              {
                type: "Treasury Bills (1-year)",
                nominal: "~4.5–5%",
                real: "~1.5–2%",
                verdict: "Safe but minimal growth",
                color: "text-amber-600 dark:text-amber-400",
              },
              {
                type: "Traditional Savings Account",
                nominal: "~0.01–0.5%",
                real: "~−2.5%",
                verdict: "Loses purchasing power",
                color: "text-rose-600 dark:text-rose-400",
              },
              {
                type: "Cash (no interest)",
                nominal: "0%",
                real: "~−3%",
                verdict: "Guaranteed purchasing power loss",
                color: "text-rose-600 dark:text-rose-400",
              },
            ].map(({ type, nominal, real, verdict, color }) => (
              <div
                key={type}
                className="flex items-center gap-3 py-2 border-b border-slate-100 dark:border-slate-700 last:border-b-0"
              >
                <div className="flex-1 text-sm text-slate-700 dark:text-slate-300">
                  {type}
                </div>
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400 w-16 text-right">
                  {nominal}
                </div>
                <div className="text-xs font-mono w-14 text-right text-slate-600 dark:text-slate-300">
                  {real}
                </div>
                <div
                  className={`text-xs font-semibold w-40 text-right ${color}`}
                >
                  {verdict}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-3">
            *Historical averages. Past performance does not guarantee future
            results. Real returns assume ~3% inflation.
          </p>
        </Card>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          10 · RETIREMENT
      ════════════════════════════════════════════════════════════════════ */}
      <section id="retirement" className="mb-16 scroll-mt-24">
        <SectionBadge>Retirement Planning</SectionBadge>
        <SectionHeading>How Compound Interest Powers Retirement</SectionHeading>
        <SectionIntro>
          Retirement is the highest-stakes application of compound interest. A
          40-year timeline, tax-advantaged accounts, and employer matches
          collectively produce results that are genuinely transformative — but
          only if started early enough and sustained consistently.
        </SectionIntro>

        {/* Account types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {[
            {
              name: "401(k)",
              limit: "$23,000/yr (2024) + $7,500 catch-up",
              tax: "Pre-tax contributions; taxed on withdrawal",
              key: "Employer match is free money — always capture the full match first",
              icon: "🏢",
              color: "border-t-indigo-500",
            },
            {
              name: "Roth IRA",
              limit: "$7,000/yr (2024) + $1,000 catch-up",
              tax: "After-tax contributions; tax-free growth AND withdrawals",
              key: "Best long-term account for most investors. Gains and withdrawals are permanently tax-free",
              icon: "⭐",
              color: "border-t-emerald-500",
            },
            {
              name: "Traditional IRA",
              limit: "$7,000/yr (2024)",
              tax: "May be tax-deductible; taxed on withdrawal",
              key: "Use when you expect to be in a lower tax bracket in retirement than today",
              icon: "🏦",
              color: "border-t-amber-500",
            },
            {
              name: "HSA (Health Savings Account)",
              limit: "$4,150 individual / $8,300 family (2024)",
              tax: "Triple tax advantage: deductible, grows tax-free, withdrawn tax-free for medical",
              key: 'If invested in index funds, acts as a "stealth IRA." After 65, usable for anything penalty-free',
              icon: "🏥",
              color: "border-t-cyan-500",
            },
            {
              name: "529 Education Plan",
              limit: "Up to $18,000/yr gift tax exclusion",
              tax: "After-tax contributions; tax-free growth for qualified education expenses",
              key: "Since 2024, unused 529 funds can be rolled into a Roth IRA (up to $35,000 lifetime)",
              icon: "🎓",
              color: "border-t-violet-500",
            },
            {
              name: "Taxable Brokerage",
              limit: "No limit",
              tax: "No tax advantages; capital gains tax applies",
              key: "Use after maxing tax-advantaged accounts. Long-term capital gains rates (0%, 15%, 20%) are favorable",
              icon: "📊",
              color: "border-t-slate-500",
            },
          ].map(({ name, limit, tax, key, icon, color }) => (
            <Card key={name} className={`border-t-4 ${color}`}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">{icon}</span>
                <span className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                  {name}
                </span>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1 font-semibold uppercase tracking-wide">
                2024 Limit
              </div>
              <div className="text-xs text-slate-700 dark:text-slate-300 mb-3 font-mono">
                {limit}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1 font-semibold uppercase tracking-wide">
                Tax Treatment
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">
                {tax}
              </div>
              <div className="p-2 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg">
                <p className="text-xs text-indigo-700 dark:text-indigo-400 leading-relaxed">
                  {key}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Retirement projections table */}
        <div className="mb-6">
          <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 mb-3">
            How Much Will You Have at Retirement? ($0 Start, 8% Annual Return,
            Monthly Compounding)
          </h3>
          <TableWrapper>
            <thead>
              <tr>
                <Th>Monthly Contribution</Th>
                <Th align="right">20 Years</Th>
                <Th align="right">30 Years</Th>
                <Th align="right">40 Years</Th>
                <Th align="right">Total Contributed (40yr)</Th>
              </tr>
            </thead>
            <tbody>
              {[
                ["$200", "$117,804", "$298,072", "$702,856", "$96,000"],
                ["$500", "$294,510", "$745,180", "$1,757,140", "$240,000"],
                ["$1,000", "$589,020", "$1,490,359", "$3,514,281", "$480,000"],
                ["$1,500", "$883,530", "$2,235,539", "$5,271,421", "$720,000"],
                [
                  "$2,000",
                  "$1,178,040",
                  "$2,980,718",
                  "$7,028,561",
                  "$960,000",
                ],
              ].map(([pmt, y20, y30, y40, contrib], i) => (
                <tr
                  key={i}
                  className={`hover:bg-slate-50 dark:hover:bg-slate-700/30 ${i % 2 === 0 ? "" : "bg-slate-50/50 dark:bg-slate-800/30"}`}
                >
                  <Td highlight>{pmt}</Td>
                  <Td align="right">{y20}</Td>
                  <Td align="right">{y30}</Td>
                  <Td align="right">{y40}</Td>
                  <Td align="right">{contrib}</Td>
                </tr>
              ))}
            </tbody>
          </TableWrapper>
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
            *No initial investment. 8% nominal annual return. Monthly
            compounding. Values are illustrative and not guaranteed.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40">
          <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-300 mb-2">
            🎯 The 4% Rule and Your Target Number
          </p>
          <p className="text-sm text-emerald-700 dark:text-emerald-400 leading-relaxed">
            The 4% Rule (from the Trinity Study) suggests you can sustainably
            withdraw 4% of your portfolio annually in retirement without
            depleting it over 30+ years. To generate $60,000/year in retirement
            income, you need approximately $1.5 million (60,000 ÷ 0.04). To
            generate $100,000/year, you need $2.5 million. Use this to
            reverse-engineer your retirement savings target, then use the
            calculator to find the monthly contribution needed to reach it.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          11 · REFERENCE TABLES
      ════════════════════════════════════════════════════════════════════ */}
      <section id="reference-tables" className="mb-16 scroll-mt-24">
        <SectionBadge>Reference Data</SectionBadge>
        <SectionHeading>Quick Reference Tables</SectionHeading>
        <SectionIntro>
          These tables serve as standalone reference tools — useful even without
          the calculator, for quick back-of-envelope estimates and planning
          benchmarks.
        </SectionIntro>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Rule of 72 */}
          <div>
            <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 mb-3">
              Rule of 72 — Years to Double Your Money
            </h3>
            <TableWrapper>
              <thead>
                <tr>
                  <Th>Annual Return</Th>
                  <Th align="right">Years to Double</Th>
                  <Th>Typical Vehicle</Th>
                </tr>
              </thead>
              <tbody>
                {RULE_OF_72.map((row, i) => (
                  <tr
                    key={i}
                    className={`hover:bg-slate-50 dark:hover:bg-slate-700/30 ${i % 2 === 0 ? "" : "bg-slate-50/50 dark:bg-slate-800/30"}`}
                  >
                    <Td highlight>{row.rate}</Td>
                    <Td align="right">{row.years} years</Td>
                    <Td>{row.example}</Td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
              Divide 72 by your rate to estimate doubling time. Works best
              between 4% and 15%.
            </p>
          </div>

          {/* Historical returns */}
          <div>
            <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 mb-3">
              Historical Asset Class Returns (Long-Term Averages)
            </h3>
            <TableWrapper>
              <thead>
                <tr>
                  <Th>Asset Class</Th>
                  <Th align="right">Nominal Return</Th>
                  <Th align="right">Real Return*</Th>
                  <Th>Risk Level</Th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["U.S. Large Cap Stocks", "~10.5%", "~7.5%", "High"],
                  ["U.S. Small Cap Stocks", "~12%", "~9%", "Very High"],
                  ["International Stocks", "~8%", "~5%", "High"],
                  ["Corporate Bonds", "~5.5%", "~2.5%", "Medium"],
                  ["U.S. Treasury Bonds", "~4.5%", "~1.5%", "Low-Medium"],
                  ["Real Estate (REITs)", "~9%", "~6%", "Medium-High"],
                  ["Gold", "~6%", "~3%", "Medium-High"],
                  ["Cash / T-Bills", "~3.5%", "~0.5%", "Minimal"],
                ].map(([asset, nom, real, risk], i) => (
                  <tr
                    key={i}
                    className={`hover:bg-slate-50 dark:hover:bg-slate-700/30 ${i % 2 === 0 ? "" : "bg-slate-50/50 dark:bg-slate-800/30"}`}
                  >
                    <Td>{asset}</Td>
                    <Td align="right">
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                        {nom}
                      </span>
                    </Td>
                    <Td align="right">{real}</Td>
                    <Td>{risk}</Td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
              *Assumes ~3% average inflation. Source: Damodaran NYU,
              Ibbotson/Morningstar historical data. Past performance does not
              predict future results.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          CTA SECTION
      ════════════════════════════════════════════════════════════════════ */}
      <section className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-900 text-white">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-extrabold mb-3">
            Put the Numbers to Work
          </h2>
          <p className="text-indigo-200 text-sm sm:text-base leading-relaxed mb-6">
            The scenarios above use typical assumptions — but your situation is
            unique. Use the calculator to model your actual numbers. Here are
            four experiments worth running:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: "🧪",
                tip: "Increase your monthly contribution by $100 and observe the 30-year impact. Most people are surprised by the result.",
              },
              {
                icon: "📉",
                tip: "Run your plan at 5% instead of 8%. If the outcome is still acceptable, you&apos;ve built in a margin of safety.",
              },
              {
                icon: "🎯",
                tip: "Work backward: enter your retirement target as the result. Adjust the monthly contribution until the math works.",
              },
              {
                icon: "📆",
                tip: "Compare your current starting age vs. starting 5 years earlier. The gap is almost always motivating.",
              },
            ].map(({ icon, tip }) => (
              <div key={tip} className="flex gap-3 p-4 bg-white/10 rounded-xl">
                <span className="text-xl shrink-0">{icon}</span>
                <p className="text-sm text-indigo-100 leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          12 · FAQ
      ════════════════════════════════════════════════════════════════════ */}
      <section id="faq" className="mb-16 scroll-mt-24">
        <SectionBadge>Frequently Asked Questions</SectionBadge>
        <SectionHeading>Compound Interest FAQ</SectionHeading>
        <SectionIntro>
          High-value answers to the questions investors actually ask — with
          specific numbers, not generic explanations.
        </SectionIntro>
        <FAQAccordion items={FAQS} />
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          13 · METHODOLOGY / EEAT
      ════════════════════════════════════════════════════════════════════ */}
      <section id="methodology" className="mb-8 scroll-mt-24">
        <SectionBadge>Methodology & Editorial Standards</SectionBadge>
        <SectionHeading>
          How This Calculator and Article Were Built
        </SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Methodology */}
          <Card>
            <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
              <span className="text-xl">🔬</span> Calculation Methodology
            </h3>
            <ul className="space-y-2.5">
              {[
                "Standard compound interest formula: A = P(1 + r/n)^(nt)",
                "Contribution calculations use Future Value of Annuity formula",
                "Beginning-of-period contributions multiplied by (1 + r/n)",
                "Inflation adjustment applied monthly: balance ÷ (1 + inflation/12)",
                "Tax applied to gross interest each period, not end balance",
                "EAR calculated as (1 + r/n)^n − 1 for all compounding frequencies",
                "All calculations performed in JavaScript with double-precision floating point",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                >
                  <span className="text-indigo-500 mt-0.5 shrink-0">›</span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          {/* Assumptions */}
          <Card>
            <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
              <span className="text-xl">📋</span> Calculation Assumptions
            </h3>
            <ul className="space-y-2.5">
              {[
                "Returns are assumed constant (actual market returns vary significantly year to year)",
                "Scenarios use historical averages, not guaranteed future performance",
                "Tax calculations do not account for tax-advantaged account types (401k, IRA, Roth)",
                "Inflation figures based on U.S. Federal Reserve 2% long-run target; actual CPI varies",
                "Historical return figures sourced from Damodaran (NYU) and Ibbotson/Morningstar data",
                "Rule of 72 values are mathematical approximations, accurate to within ~1% for 4–15% rates",
                "All dollar figures in U.S. dollars unless otherwise noted",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                >
                  <span className="text-amber-500 mt-0.5 shrink-0">›</span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Author + Editorial */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card>
            <div className="flex items-start gap-4">
              <div
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700
                flex items-center justify-center text-white text-xl font-bold shrink-0"
              >
                Ed
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-0.5">
                  Editorial Team
                </h3>
                <div className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
                  AllCalculator.net
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  This article was developed and reviewed by the
                  AllCalculator.net financial content team, combining
                  backgrounds in financial planning, investment analysis, and
                  technical writing. Content is reviewed for mathematical
                  accuracy prior to publication.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
              <span>✍️</span> Editorial Standards
            </h3>
            <ul className="space-y-2">
              {[
                "All formulas verified against published financial mathematics references",
                "Historical data cross-referenced with academic and institutional sources",
                "No sponsored content or advertiser influence on calculation results",
                "Educational content reviewed for accuracy before publication",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400"
                >
                  <span className="text-emerald-500 mt-0.5 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Disclaimer + Update policy */}
        <div className="p-5 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <div className="flex items-start gap-3">
            <span className="text-slate-400 text-lg shrink-0 mt-0.5">ℹ️</span>
            <div>
              <p className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide mb-1">
                Disclaimer &amp; Update Policy
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-500 leading-relaxed">
                This calculator and accompanying content are provided for
                educational and informational purposes only. They do not
                constitute financial, tax, or investment advice. Past
                performance data cited does not guarantee future results.
                Consult a qualified financial advisor before making investment
                or retirement planning decisions.
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-2 leading-relaxed">
                <strong className="text-slate-600 dark:text-slate-400">
                  Update policy:
                </strong>{" "}
                This article is reviewed annually and updated when contribution
                limits, tax laws, or materially relevant historical data change.
                IRA and 401(k) limits last updated January 2024.
              </p>
            </div>
          </div>
        </div>

        {/* Related calculators */}
        <div className="mt-8">
          <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 mb-4">
            Related Calculators
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              {
                href: "/retirement-calculator.html",
                label: "🏖️ Retirement Calculator",
              },
              {
                href: "/savings-calculator.html",
                label: "💰 Savings Calculator",
              },
              {
                href: "/mortgage-calculator.html",
                label: "🏠 Mortgage Calculator",
              },
              { href: "/loan-calculator.html", label: "📋 Loan Calculator" },
              {
                href: "/investment-calculator.html",
                label: "📈 Investment Calculator",
              },
              {
                href: "/inflation-calculator.html",
                label: "📊 Inflation Calculator",
              },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold
                  no-underline border border-indigo-200 dark:border-indigo-800/60
                  bg-indigo-50 dark:bg-indigo-950/30
                  text-indigo-700 dark:text-indigo-300
                  hover:bg-indigo-100 dark:hover:bg-indigo-900/40
                  transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
