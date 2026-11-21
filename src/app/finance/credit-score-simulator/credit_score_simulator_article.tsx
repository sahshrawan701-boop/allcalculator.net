// Meta description (150–160 chars):
// Use our free credit score simulator to see how paying off debt, missing a payment, or opening a new card affects your FICO score — before you act.
"use client";
import { useState } from "react";
export default function CreditScoreArticle() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const s = {
    page: {
      fontFamily: "var(--font-sans)",
      color: "var(--color-text-primary)",
      maxWidth: 740,
      margin: "0 auto",
      padding: "0 1.5rem 4rem",
      lineHeight: 1.75,
    } as React.CSSProperties,
    h1: {
      fontSize: 30,
      fontWeight: 500,
      margin: "2rem 0 0.5rem",
      lineHeight: 1.2,
    } as React.CSSProperties,
    h2: {
      fontSize: 22,
      fontWeight: 500,
      margin: "2.5rem 0 0.75rem",
      color: "var(--color-text-primary)",
    } as React.CSSProperties,
    h3: {
      fontSize: 17,
      fontWeight: 500,
      margin: "1.75rem 0 0.5rem",
    } as React.CSSProperties,
    p: {
      margin: "0 0 1rem",
      fontSize: 15,
    } as React.CSSProperties,
    ul: {
      margin: "0 0 1rem",
      paddingLeft: "1.25rem",
      fontSize: 15,
      lineHeight: 1.85,
    } as React.CSSProperties,
    tip: {
      background: "var(--color-background-info)",
      border: "0.5px solid var(--color-border-info)",
      borderRadius: 8,
      padding: "0.875rem 1rem",
      fontSize: 14,
      color: "var(--color-text-info)",
      margin: "1.25rem 0",
    } as React.CSSProperties,
    warning: {
      background: "var(--color-background-warning)",
      border: "0.5px solid var(--color-border-warning)",
      borderRadius: 8,
      padding: "0.875rem 1rem",
      fontSize: 14,
      color: "var(--color-text-warning)",
      margin: "1.25rem 0",
    } as React.CSSProperties,
    divider: {
      border: "none",
      borderTop: "0.5px solid var(--color-border-tertiary)",
      margin: "2.5rem 0",
    } as React.CSSProperties,
    tableWrap: {
      overflowX: "auto" as const,
      margin: "1rem 0 1.5rem",
    } as React.CSSProperties,
    table: {
      width: "100%",
      borderCollapse: "collapse" as const,
      fontSize: 14,
    } as React.CSSProperties,
    th: {
      padding: "8px 12px",
      textAlign: "left" as const,
      fontWeight: 500,
      fontSize: 12,
      color: "var(--color-text-secondary)",
      borderBottom: "0.5px solid var(--color-border-tertiary)",
      background: "var(--color-background-secondary)",
    } as React.CSSProperties,
    td: {
      padding: "10px 12px",
      borderBottom: "0.5px solid var(--color-border-tertiary)",
      verticalAlign: "top" as const,
    } as React.CSSProperties,
    scenarioCard: {
      border: "0.5px solid var(--color-border-tertiary)",
      borderRadius: 10,
      overflow: "hidden" as const,
      marginBottom: 12,
    } as React.CSSProperties,
    scenarioHeader: {
      padding: "0.875rem 1.125rem",
      borderBottom: "0.5px solid var(--color-border-tertiary)",
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontWeight: 500,
      fontSize: 15,
    } as React.CSSProperties,
    scenarioBody: {
      padding: "0.875rem 1.125rem",
      fontSize: 14,
      color: "var(--color-text-secondary)",
      lineHeight: 1.7,
      margin: 0,
    } as React.CSSProperties,
    faqCard: {
      border: "0.5px solid var(--color-border-tertiary)",
      borderRadius: 10,
      overflow: "hidden" as const,
    } as React.CSSProperties,
    faqItem: {
      borderBottom: "0.5px solid var(--color-border-tertiary)",
    } as React.CSSProperties,
    faqBtn: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 1.25rem",
      cursor: "pointer",
      fontSize: 15,
      fontWeight: 500,
      gap: 12,
      background: "none",
      border: "none",
      width: "100%",
      textAlign: "left" as const,
      color: "var(--color-text-primary)",
    } as React.CSSProperties,
    faqAnswer: {
      padding: "0 1.25rem 1rem",
      fontSize: 14,
      color: "var(--color-text-secondary)",
      lineHeight: 1.7,
      margin: 0,
    } as React.CSSProperties,
    stepRow: {
      display: "flex",
      gap: 14,
      marginBottom: "1.25rem",
      alignItems: "flex-start",
    } as React.CSSProperties,
    stepNum: {
      width: 28,
      height: 28,
      borderRadius: "50%",
      background: "var(--color-background-info)",
      color: "var(--color-text-info)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 13,
      fontWeight: 500,
      flexShrink: 0,
      marginTop: 2,
    } as React.CSSProperties,
    factorRow: {
      marginBottom: "1.25rem",
    } as React.CSSProperties,
    factorBar: {
      height: 6,
      borderRadius: 3,
      marginBottom: 8,
      overflow: "hidden" as const,
      background: "var(--color-background-secondary)",
    } as React.CSSProperties,
    badge: (color: string, bg: string): React.CSSProperties => ({
      padding: "2px 8px",
      borderRadius: 12,
      background: bg,
      color,
      fontSize: 12,
      fontWeight: 500,
      whiteSpace: "nowrap" as const,
    }),
  };

  const SCORE_RANGES = [
    { range: "300–579", label: "Poor",        color: "#A32D2D", bg: "#FCEBEB", lenderView: "Very high risk. Most applications denied.",          apr: "N/A or 20–30%+" },
    { range: "580–669", label: "Fair",        color: "#854F0B", bg: "#FAEEDA", lenderView: "Subprime. Some approvals with high rates.",          apr: "15–25%" },
    { range: "670–739", label: "Good",        color: "#3B6D11", bg: "#EAF3DE", lenderView: "Near-prime. Most lenders approve with decent rates.", apr: "8–15%" },
    { range: "740–799", label: "Very Good",   color: "#185FA5", bg: "#E6F1FB", lenderView: "Low risk. Competitive rates and higher limits.",      apr: "4–8%" },
    { range: "800–850", label: "Exceptional", color: "#3C3489", bg: "#EEEDFE", lenderView: "Best rates, highest limits, easiest approvals.",     apr: "3–5%" },
  ];

  const LOAN_TABLE = [
    { product: "Conventional Mortgage", min: 620, ideal: 740, note: "Under 740 = higher PMI and rate" },
    { product: "FHA Mortgage",          min: 580, ideal: 640, note: "500–579 with 10% down" },
    { product: "Auto Loan (new car)",   min: 600, ideal: 700, note: "Under 660 = subprime rates (10%+)" },
    { product: "Personal Loan",         min: 580, ideal: 670, note: "Most competitive APR at 700+" },
    { product: "Rewards Credit Card",   min: 670, ideal: 720, note: "Top cards prefer 720+" },
    { product: "Apartment Rental",      min: 620, ideal: 680, note: "Varies by landlord and market" },
  ];

  const FACTORS = [
    { factor: "Payment history", weight: "35%", bar: 35, color: "#534AB7", desc: "This is the biggest factor by a mile. One 30-day late payment can drop a score in the 700s by 60–80 points. Pay on time, every time — even the minimum — and this works in your favor." },
    { factor: "Credit utilization", weight: "30%", bar: 30, color: "#378ADD", desc: "How much of your available credit you're using. Under 30% is the general rule; under 10% is where the real score gains live. Carrying $3,000 on a $5,000 limit (60% utilization) costs you more points than most people realize." },
    { factor: "Length of credit history", weight: "15%", bar: 15, color: "#639922", desc: "The longer your accounts have been open, the better. This is why closing old cards can backfire — it can shrink your average account age overnight." },
    { factor: "Credit mix", weight: "10%", bar: 10, color: "#EF9F27", desc: "Having a variety of account types — a credit card, an auto loan, maybe a student loan — signals that you can manage different kinds of debt. You don't need to open accounts just for this, though." },
    { factor: "New credit inquiries", weight: "10%", bar: 10, color: "#E24B4A", desc: "Every time you apply for credit, a hard inquiry hits your report. One inquiry is usually a minor dip (5–10 points). Multiple in a short window can add up — though FICO often groups mortgage and auto loan shopping into a single inquiry." },
  ];

  const SCENARIOS = [
    {
      title: "Paying off a maxed-out credit card",
      type: "success",
      body: "Sarah has a 680 score with 65% utilization on her Citi card. She gets a bonus and pays it to zero. Her utilization drops from 65% to under 10%. Result? Her score likely jumps 50–80 points within one billing cycle. That's potentially the difference between 6.9% and 4.9% on a car loan.",
    },
    {
      title: "Missing one payment by 30 days",
      type: "danger",
      body: "Marcus misses a Capital One payment and doesn't catch it for 35 days. That single late mark can drop a 720 score by 60–110 points, depending on his file. At 650, he may no longer qualify for the mortgage he was planning. The damage fades over 12–24 months of clean payments, but it doesn't disappear from his report for 7 years.",
    },
    {
      title: "Opening a new rewards credit card",
      type: "neutral",
      body: "Priya applies for a Chase Sapphire Preferred. The hard inquiry drops her score 6 points. The new account lowers her average credit age. Short-term hit: maybe 15 points. Long-term, if she keeps utilization low, the extra available credit can help — and the account age impact fades after 12 months.",
    },
    {
      title: "Applying for an auto loan",
      type: "success",
      body: "James is shopping for a Toyota Camry and applies at three dealerships in the same weekend. Good news: FICO groups auto loan inquiries within a 14–45 day window as a single inquiry. He takes a ~8 point dip, not 24. His 720 score stays in the very good range, securing him a 5.9% rate.",
    },
    {
      title: "Closing an old card",
      type: "danger",
      body: "Maria closes a 9-year-old Discover card she doesn't use anymore because it feels like clutter. Her available credit drops by $7,000, pushing utilization from 22% to 38%. Her average account age drops by two years. A 30-point hit — for a card that wasn't costing her anything. She should have left it open.",
    },
    {
      title: "Paying down debt from 75% to 20% utilization",
      type: "success",
      body: "Derek has been carrying balances across three cards totaling 75% utilization. He sells some stuff and channels $4,500 into his cards over three months, pulling utilization to 20%. His score moves from 638 to somewhere in the 690–710 range. Suddenly a good credit card and a decent auto loan rate are both within reach.",
    },
  ];

  const STEPS = [
    { title: "Catch up on any past-due accounts", desc: "This is always step one. Bring delinquent accounts current immediately. The payment history factor is 35% of your score, and a current account is infinitely better than one in default — even if the late mark stays for 7 years." },
    { title: "Pay down credit card balances", desc: "Get your utilization under 30%, then push toward under 10% for a bigger boost. If you have multiple cards, tackle the one with the highest utilization first — not necessarily the highest balance." },
    { title: "Don't close old accounts you're not using", desc: "A paid-off card from 2015 with a $5,000 limit and a $0 balance is pure gold for your score. It's keeping your utilization low and your average account age high. Leave it open." },
    { title: "Limit new credit applications", desc: "Every unnecessary hard inquiry is a small, avoidable hit. If you're planning to apply for a mortgage in the next 6–12 months, now isn't the time to also sign up for five new credit cards." },
    { title: "Dispute errors on your reports", desc: "About 1 in 5 Americans has an error on at least one credit report, according to the FTC. A collection account that isn't yours, a late payment that was actually paid on time — these errors cost you real points and can be disputed online in minutes." },
    { title: "Consider a secured card or credit-builder loan", desc: "If you're building from scratch or recovering from serious damage, a secured card or credit-builder loan from a local credit union gives you a safe way to build positive history without much risk." },
  ];

  const FAQS = [
    { q: "How accurate is a credit score simulator?", a: "A credit score simulator gives you a solid directional estimate — not a guaranteed number. It models the most important FICO factors (payment history, utilization, credit age, mix, and inquiries), but your actual score depends on exact data from Equifax, Experian, and TransUnion. Think of it as a planning tool, not a prophecy." },
    { q: "How much does paying off a credit card raise your score?", a: "It depends on your starting utilization. Going from 80% utilization to under 10% can add anywhere from 40 to 100+ points. Even dropping from 50% to 30% often adds 20–35 points. Utilization is the fastest lever you can pull because it updates every billing cycle." },
    { q: "Does checking my credit score hurt it?", a: "No. Checking your own credit is a soft inquiry and has zero impact on your score. Only hard inquiries — when a lender checks your credit after an application — can cause a small, temporary dip (usually 5–10 points)." },
    { q: "How long does a missed payment stay on your credit report?", a: "A late payment stays on your Equifax, Experian, and TransUnion reports for 7 years. The good news: its impact fades over time, especially if you rebuild a strong payment history around it." },
    { q: "What credit score do I need for a mortgage?", a: "Conventional loans typically require a minimum score of 620. FHA loans can go as low as 500 (with a 10% down payment) or 580 (for 3.5% down). For the best mortgage rates, you'll generally want a 740 or higher." },
    { q: "How fast can I improve my credit score?", a: "Small improvements can happen in 30–60 days, especially if you pay down credit card balances or remove an error. Bigger jumps — like recovering from a missed payment — typically take 12–24 months of consistent on-time payments." },
    { q: "Does closing a credit card hurt your score?", a: "It can. Closing a card reduces your available credit (raising utilization) and can shorten your average credit age. The impact is bigger if it's your oldest card or if you carry balances on other cards. If the card has no annual fee, it's usually safer to keep it open." },
    { q: "What's the difference between FICO and VantageScore?", a: "FICO is the most widely used score by mortgage lenders and banks — 90% of top lenders use it. VantageScore was developed by the three major bureaus together and is commonly used in free credit monitoring apps. They use similar factors but weight them slightly differently, which is why you might see a different number on Credit Karma vs. your bank." },
    { q: "Does income affect your credit score?", a: "No. Your income doesn't appear on your credit report and isn't factored into your credit score at all. Your score is based entirely on how you manage credit — payment history, balances, age, and types of accounts." },
    { q: "What credit score do I need to lease an apartment?", a: "Most landlords and property management companies want to see a score of at least 620–650. In competitive rental markets like NYC or San Francisco, some landlords prefer 700+. Below 620, you may need a co-signer or a larger security deposit." },
    { q: "How many points does a hard inquiry drop your score?", a: "A single hard inquiry typically drops your score by 5–10 points, and the effect usually fades within a few months. If you're rate-shopping for a mortgage or auto loan, multiple inquiries within a 14–45 day window are often counted as a single inquiry by FICO." },
    { q: "Can I get my credit score to 800?", a: "Absolutely. An 800+ score requires years of on-time payments, low utilization (ideally under 10%), a diverse credit mix, a long credit history, and very few or no hard inquiries. It's achievable — it just takes consistent habits over time." },
  ];

  return (
    <div style={s.page}>

      {/* ── H1 + Intro ── */}
      <h1 style={s.h1}>Credit Score Simulator: How Your Financial Moves Affect Your FICO Score</h1>

      <p style={{ ...s.p, color: "var(--color-text-secondary)", fontSize: 14, margin: "0.25rem 0 1.5rem" }}>
        Updated June 2026 · 10-min read · Written for a USA audience
      </p>

      <p style={s.p}>
        You&apos;re three months away from applying for a mortgage and you&apos;re staring at a 694 credit score. Your lender wants 720. You&apos;ve heard that paying down your Amex balance might help — but how much? And what happens if you open that new Delta SkyMiles card first?
      </p>
      <p style={s.p}>
        That&apos;s exactly what a credit score simulator is built for. Before you make any move, you can run the numbers and see an estimate of where your score lands. It&apos;s not a crystal ball, but it&apos;s a whole lot better than guessing.
      </p>
      <p style={s.p}>
        This guide covers everything you need to know — what the simulator does, how scores are actually calculated, what the ranges mean for real lending decisions, and how to start moving your number in the right direction.
      </p>

      <hr style={s.divider} />

      {/* ── What Is a Credit Score Simulator ── */}
      <h2 style={s.h2}>What is a credit score simulator?</h2>
      <p style={s.p}>
        A credit score simulator is a tool that estimates how your FICO or VantageScore might change based on specific financial actions — before you actually take them. Instead of guessing whether paying off that Chase card will finally push you past 700, you plug in your numbers and see an estimate in seconds.
      </p>
      <p style={s.p}>
        Think of it as a flight simulator for your finances. Pilots don&apos;t practice emergency landings on real planes. You shouldn&apos;t have to make an actual financial move to understand its likely impact.
      </p>
      <p style={s.p}>
        Lenders, mortgage brokers, and financial coaches use score simulators constantly when helping clients prepare for major purchases. Now you can do the same thing on your own, for free.
      </p>

      <h3 style={s.h3}>How does a credit score simulator work?</h3>
      <p style={s.p}>
        The simulator applies weighted math based on the same five factors that FICO uses to build your score. You input your current profile — payment history, utilization, account age, credit mix, and recent inquiries — and the model estimates how a change in any of those inputs shifts the final number.
      </p>
      <p style={s.p}>
        It won&apos;t match your exact FICO score because it doesn&apos;t have access to your real credit bureau data. But the directional accuracy is solid enough to help you prioritize what to work on first.
      </p>

      <div style={s.tip}>
        💡 The fastest way to use a credit score simulator: start with your real credit score (check your bank app, Discover, or Credit Karma), then run the scenarios that match your actual situation.
      </div>

      <hr style={s.divider} />

      {/* ── Factors ── */}
      <h2 style={s.h2}>Factors that affect your credit score</h2>
      <p style={s.p}>
        Your FICO score isn&apos;t random — it&apos;s built from five specific ingredients. Here&apos;s how they stack up, and why some matter way more than others.
      </p>

      {FACTORS.map((f, i) => (
        <div key={i} style={s.factorRow}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
            <span style={{ fontWeight: 500, fontSize: 15 }}>{f.factor}</span>
            <span style={{ fontSize: 13, fontWeight: 500, color: "var(--color-text-secondary)" }}>{f.weight}</span>
          </div>
          <div style={s.factorBar}>
            <div style={{ width: `${f.bar * 3}%`, height: "100%", background: f.color, borderRadius: 3 }} />
          </div>
          <p style={{ margin: 0, fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.65 }}>{f.desc}</p>
        </div>
      ))}

      <hr style={s.divider} />

      {/* ── How Scores Are Calculated ── */}
      <h2 style={s.h2}>How credit scores are calculated</h2>

      <h3 style={s.h3}>FICO score</h3>
      <p style={s.p}>
        FICO is the gold standard for American lenders. Over 90% of top lending institutions use some version of FICO when you apply for a mortgage, car loan, or credit card. The most widely used model is FICO 8, though FICO 9 and FICO 10 are gaining ground. Mortgage lenders still frequently use FICO 2, 4, and 5 — older models that can behave differently from what you see in consumer apps.
      </p>
      <p style={s.p}>
        The five factors above are specific to FICO. What matters most is that payment history and credit utilization together account for 65% of your score. Get those two right and you&apos;re most of the way there.
      </p>

      <h3 style={s.h3}>VantageScore</h3>
      <p style={s.p}>
        VantageScore was developed jointly by Equifax, Experian, and TransUnion as an alternative to FICO. It&apos;s the score you&apos;re most likely to see on Credit Karma, NerdWallet, and some bank apps. VantageScore 3.0 and 4.0 are the current versions, and they use the same 300–850 range as FICO.
      </p>
      <p style={s.p}>
        The key difference: VantageScore can score people with as little as one month of credit history, while FICO requires six months. If you&apos;re newer to credit, VantageScore may give you a number when FICO can&apos;t. The two scores are often close but rarely identical — which is why your Credit Karma number and your bank&apos;s FICO might differ by 20–40 points.
      </p>

      <hr style={s.divider} />

      {/* ── Score Ranges ── */}
      <h2 style={s.h2}>Credit score ranges explained</h2>
      <p style={s.p}>
        Not all scores are created equal. A 620 and a 750 aren&apos;t just different numbers — they often mean completely different loan products, interest rates, and approval odds. Here&apos;s what each tier actually means for your financial life.
      </p>

      <div style={s.tableWrap}>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={{ ...s.th, width: "15%" }}>Range</th>
              <th style={{ ...s.th, width: "14%" }}>Category</th>
              <th style={{ ...s.th, width: "45%" }}>What lenders see</th>
              <th style={{ ...s.th, width: "26%" }}>Typical APR</th>
            </tr>
          </thead>
          <tbody>
            {SCORE_RANGES.map((r, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? "transparent" : "var(--color-background-secondary)" }}>
                <td style={{ ...s.td, fontWeight: 500 }}>{r.range}</td>
                <td style={s.td}><span style={s.badge(r.color, r.bg)}>{r.label}</span></td>
                <td style={{ ...s.td, color: "var(--color-text-secondary)" }}>{r.lenderView}</td>
                <td style={s.td}>{r.apr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={s.p}>
        The jump from Fair to Good (580 → 670) is arguably the most impactful threshold for everyday borrowers. That&apos;s often where credit card approvals open up and auto loan rates drop by several percentage points. The jump from Good to Very Good (670 → 740) is where mortgage rates start to get genuinely competitive.
      </p>

      <hr style={s.divider} />

      {/* ── Real-Life Scenarios ── */}
      <h2 style={s.h2}>Step-by-step credit score simulation examples</h2>
      <p style={s.p}>
        Real numbers matter here. The scenarios below are grounded in how FICO scoring actually behaves — not just theory. Use them to understand what&apos;s likely to happen before you make a move.
      </p>

      {SCENARIOS.map((sc, i) => (
        <div key={i} style={s.scenarioCard}>
          <div style={s.scenarioHeader}>
            <span style={{
              display: "inline-block", width: 8, height: 8, borderRadius: "50%", flexShrink: 0,
              background: sc.type === "success" ? "#639922" : sc.type === "danger" ? "#E24B4A" : "#888780",
            }} />
            {sc.title}
          </div>
          <p style={s.scenarioBody}>{sc.body}</p>
        </div>
      ))}

      <hr style={s.divider} />

      {/* ── Benefits ── */}
      <h2 style={s.h2}>Benefits of using a credit score simulator</h2>
      <p style={s.p}>
        The biggest value isn&apos;t getting a magic number — it&apos;s changing how you think about credit decisions. Instead of reacting after the fact, you start planning proactively.
      </p>
      <ul style={s.ul}>
        <li>See which change will move your score the most before you act</li>
        <li>Understand the real cost of a missed payment before it happens</li>
        <li>Plan the timing of a major credit application (mortgage, auto loan) strategically</li>
        <li>Set a realistic timeline for reaching a target score</li>
        <li>Explain score changes to a partner or family member in concrete terms</li>
        <li>Identify which factor is holding your score back most right now</li>
      </ul>
      <p style={s.p}>
        If you&apos;re 60 days away from applying for a home loan and your score is 698, a simulator can tell you whether an aggressive paydown of your Amex balance could realistically push you to 720+ — or whether you&apos;re better off just waiting for a hard inquiry to age off.
      </p>

      <hr style={s.divider} />

      {/* ── Common Mistakes ── */}
      <h2 style={s.h2}>Common credit score mistakes to avoid</h2>
      <div style={s.warning}>
        ⚠ These are the moves that surprise people the most — often because they seem harmless or even financially responsible.
      </div>
      <ul style={s.ul}>
        <li><strong>Closing paid-off credit cards</strong> — You cut the limit, raise your utilization, and potentially shorten your credit age. Triple threat.</li>
        <li><strong>Only paying the minimum</strong> — Won&apos;t hurt your score directly, but keeps utilization high and costs you a fortune in interest over time.</li>
        <li><strong>Applying for multiple cards in a short window</strong> — Each one is a hard inquiry. Several inquiries in a few months signals desperation to lenders.</li>
        <li><strong>Ignoring medical debt</strong> — Medical bills can go to collections. FICO 9 and VantageScore 4.0 treat medical collections more leniently, but older FICO models still ding you for them.</li>
        <li><strong>Assuming your score is fine without checking</strong> — Errors are common. Check AnnualCreditReport.com for free reports from all three bureaus.</li>
        <li><strong>Co-signing without thinking it through</strong> — You&apos;re fully responsible if the other person doesn&apos;t pay. Their late payments hit your score exactly as hard as your own.</li>
        <li><strong>Maxing out a 0% APR promotional card</strong> — The card might be interest-free, but 90%+ utilization still tanks your score.</li>
        <li><strong>Paying off collections thinking it will remove them</strong> — Paying a collection is the right thing to do, but the account usually stays on your report for 7 years. Negotiate a pay-for-delete agreement in writing before you pay if possible.</li>
      </ul>

      <hr style={s.divider} />

      {/* ── USA-Specific Section ── */}
      <h2 style={s.h2}>Credit scores and American lending — what you need to know</h2>

      <h3 style={s.h3}>Mortgage approval credit scores</h3>
      <p style={s.p}>
        For a conventional loan backed by Fannie Mae or Freddie Mac, you typically need a 620 minimum. But that minimum gets you the loan — not a great rate. The real cutoff where rates start to improve meaningfully is around 680, and you want 740+ to access the most competitive pricing.
      </p>
      <p style={s.p}>
        FHA loans are the most accessible government-backed option. With a 580 score, you can put as little as 3.5% down. With a score between 500 and 579, you&apos;ll need 10% down. VA loans (for veterans) and USDA loans (for rural properties) don&apos;t have set minimums, but most lenders still want to see 580–620.
      </p>

      <h3 style={s.h3}>Auto loan credit score requirements</h3>
      <p style={s.p}>
        You can technically get an auto loan with a score in the 500s — but you&apos;ll pay for it. Subprime auto rates can hit 15–25% APR. Getting to 660 makes a meaningful difference, and crossing 700 usually brings you into prime territory with single-digit rates at most credit unions and major banks.
      </p>

      <h3 style={s.h3}>Credit card approval ranges</h3>
      <p style={s.p}>
        Entry-level cards (secured cards, student cards, basic cash-back cards) are accessible around 580–620. Premium rewards cards — Chase Sapphire Preferred, Amex Gold, Citi Double Cash — typically want 700+. The best travel cards (Amex Platinum, Chase Sapphire Reserve) generally look for 720–750+.
      </p>

      <h3 style={s.h3}>Apartment rental credit checks</h3>
      <p style={s.p}>
        Most landlords and property management companies want to see at least 620–650. In competitive rental markets like NYC, LA, or San Francisco, some landlords expect 700+. Below 620, you may be asked for a larger security deposit, a co-signer, or several months of rent upfront. Private landlords tend to have more flexibility than large property management firms.
      </p>

      <h3 style={s.h3}>FICO vs. VantageScore — which one matters?</h3>
      <p style={s.p}>
        For most major lending decisions — mortgages, auto loans, personal loans — lenders use a FICO score. Specifically, mortgage lenders often pull FICO versions 2, 4, and 5 (one from each bureau) and use the middle of the three. VantageScore is more common in free monitoring tools but less common in actual underwriting.
      </p>
      <p style={s.p}>
        The practical takeaway: when you&apos;re preparing for a specific loan, ask your lender which score they use. Then focus on monitoring and improving that version.
      </p>

      <h3 style={s.h3}>Credit bureau differences — Equifax, Experian, and TransUnion</h3>
      <p style={s.p}>
        Your score isn&apos;t the same at all three bureaus. Not every lender reports to all three. A medical collection might show on Experian but not Equifax. A dispute resolved at one bureau might not carry over to the others automatically.
      </p>
      <p style={s.p}>
        For mortgages, lenders typically pull all three and use the middle score. That&apos;s why it&apos;s worth checking all three reports — not just one. AnnualCreditReport.com lets you pull all three for free, weekly. That&apos;s the only federally authorized site.
      </p>

      <div style={s.tableWrap}>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={{ ...s.th, width: "32%" }}>Loan / product</th>
              <th style={{ ...s.th, width: "18%" }}>Min score</th>
              <th style={{ ...s.th, width: "18%" }}>Ideal score</th>
              <th style={{ ...s.th, width: "32%" }}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {LOAN_TABLE.map((row, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? "transparent" : "var(--color-background-secondary)" }}>
                <td style={{ ...s.td, fontWeight: 500 }}>{row.product}</td>
                <td style={s.td}>{row.min}</td>
                <td style={{ ...s.td, color: "#3B6D11", fontWeight: 500 }}>{row.ideal}+</td>
                <td style={{ ...s.td, color: "var(--color-text-secondary)", fontSize: 13 }}>{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr style={s.divider} />

      {/* ── How to Improve ── */}
      <h2 style={s.h2}>How to improve your credit score</h2>
      <p style={s.p}>
        Credit improvement isn&apos;t magic — it&apos; mostly just fixing the specific things dragging your score down. Here&apos;s what actually moves the needle, roughly in order of impact.
      </p>

      {STEPS.map((item, i) => (
        <div key={i} style={s.stepRow}>
          <div style={s.stepNum}>{i + 1}</div>
          <div>
            <p style={{ margin: "0 0 4px", fontWeight: 500, fontSize: 15 }}>{item.title}</p>
            <p style={{ margin: 0, fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.65 }}>{item.desc}</p>
          </div>
        </div>
      ))}

      <h3 style={s.h3}>Credit score recovery strategies after serious damage</h3>
      <p style={s.p}>
        If you&apos;ve been through a bankruptcy, foreclosure, or a string of collections, recovery is slower but very real. Here&apos;s roughly what the timeline looks like:
      </p>
      <ul style={s.ul}>
        <li><strong>Months 1–6:</strong> Bring all accounts current. Get a secured card if needed. Every on-time payment starts rebuilding history.</li>
        <li><strong>Months 6–18:</strong> Score typically moves into the 580–640 range with clean payment history and lowering balances.</li>
        <li><strong>Years 2–4:</strong> Negative marks start to carry less weight. A thin but clean file in the 660–700 range is realistic.</li>
        <li><strong>Years 5–7:</strong> Older derogatory marks age off or approach the 7-year removal window. Scores above 700 become achievable for most people.</li>
      </ul>
      <p style={s.p}>
        Bankruptcy stays for 7 years (Chapter 13) or 10 years (Chapter 7), but its impact on your score fades significantly after the first 3–4 years if you rebuild consistently.
      </p>

      <hr style={s.divider} />

      {/* ── Credit Monitoring ── */}
      <h2 style={s.h2}>Credit monitoring and identity theft</h2>
      <p style={s.p}>
        Running simulations helps you plan, but monitoring your actual reports is what protects you from surprises. Credit monitoring alerts you when new accounts open in your name, when a hard inquiry appears, or when a collection hits your report.
      </p>
      <p style={s.p}>
        If your score suddenly drops 40+ points and you haven&apos;t done anything different, pull your reports immediately. Identity theft — someone opening accounts in your name — is one of the fastest ways a score can crater without warning. Fraud alerts and credit freezes at all three bureaus are free and effective. A freeze prevents new accounts from being opened, period.
      </p>
      <p style={s.p}>
        Most major banks now offer free FICO monitoring as part of their apps (Chase, Citi, Discover, Bank of America). Credit Karma and Experian offer free VantageScore tracking. None of these require a credit card to access, and none of them affect your score.
      </p>

      <div style={s.tip}>
        💡 You&apos;re entitled to free weekly reports from all three bureaus at AnnualCreditReport.com. That&apos;s the only federally authorized site — not the commercial look-alikes with similar names.
      </div>

      <hr style={s.divider} />

      {/* ── FAQ ── */}
      <h2 style={s.h2}>Frequently asked questions</h2>
      <div style={s.faqCard}>
        {FAQS.map((item, i) => (
          <div key={i} style={{ ...s.faqItem, borderBottom: i === FAQS.length - 1 ? "none" : "0.5px solid var(--color-border-tertiary)" }}>
            <button
              style={s.faqBtn}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              aria-expanded={openFaq === i}
            >
              <span>{item.q}</span>
              <span style={{ fontSize: 18, color: "var(--color-text-secondary)", flexShrink: 0 }}>
                {openFaq === i ? "−" : "+"}
              </span>
            </button>
            {openFaq === i && <p style={s.faqAnswer}>{item.a}</p>}
          </div>
        ))}
      </div>

      <hr style={s.divider} />

      {/* ── Final Thoughts ── */}
      <h2 style={s.h2}>Making the most of your score</h2>
      <p style={s.p}>
        Your credit score is one of the most practical financial numbers in your life. It affects the rate on your mortgage, whether you get the apartment, and how much you&apos;ll pay in interest over decades of borrowing. The difference between a 620 and a 760 on a 30-year mortgage can easily be $80,000–$100,000 in total interest. That&apos;s real money.
      </p>
      <p style={s.p}>
        The good news: scores are fixable. Even someone at 520 who starts paying on time, pays down balances, and avoids new mistakes can realistically reach 680–700 in 18–24 months. Getting from 700 to 780 usually takes longer — it&apos;s mostly about time and consistency rather than any single dramatic move.
      </p>
      <p style={s.p}>
        Credit score myths are everywhere. Your income doesn&apos;t affect your score. Checking it doesn&apos;t hurt it. You don&apos;t need to carry a balance to build credit. Closing a card isn&apos;t &quot;responsible&quot; — it&apos;s usually a mistake. The more you understand how the scoring model actually works, the better your decisions get.
      </p>
      <p style={s.p}>
        Use the simulator above to figure out what&apos;s worth your energy right now. Then go do it. The score will follow.
      </p>

    </div>
  );
}