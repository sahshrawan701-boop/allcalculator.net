// @ts-nocheck
"use client";
import { useEffect, useState, useMemo, useCallback, useRef } from "react";
import CalculatorActions from "@/components/CalculatorActions";
import { useCurrency } from "@/hooks/useCurrency";
import { useTheme } from "@/components/ThemeProvider";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// ─── Helpers ──────────────────────────────────────────────────────────────────
const LOAN_TYPES = [
  "Personal Loan",
  "Auto Loan",
  "Mortgage",
  "Student Loan",
  "Business Loan",
  "HELOC",
  "Construction Loan",
  "Custom",
];
const PAYMENT_FREQUENCIES = ["Monthly", "Biweekly", "Weekly", "Quarterly"];
const COMPOUND_FREQUENCIES = [
  "Monthly",
  "Quarterly",
  "Semi-Annual",
  "Annual",
  "Daily",
];

function fmt(n: number, symbol = "$", decimals = 2) {
  if (isNaN(n) || !isFinite(n)) return `${symbol}0.00`;
  return `${symbol}${Math.abs(n).toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}`;
}
function fmtShort(n: number, symbol = "$") {
  if (n >= 1e6) return `${symbol}${(n / 1e6).toFixed(2)}M`;
  if (n >= 1e3) return `${symbol}${(n / 1e3).toFixed(1)}K`;
  return fmt(n, symbol);
}

function calcMonthlyPayment(principal: number, annualRate: number, months: number) {
  if (annualRate === 0) return principal / months;
  const r = annualRate / 100 / 12;
  return (
    (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1)
  );
}

function buildAmortization(
  principal: number,
  annualRate: number,
  months: number,
  extraMonthly = 0,
  extraAnnual = 0,
  lumpSum = 0,
  lumpSumMonth = 0,
) {
  const r = annualRate / 100 / 12;
  const basePayment = calcMonthlyPayment(principal, annualRate, months);
  let balance = principal;
  let cumInterest = 0,
    cumPrincipal = 0;
  const rows = [];
  const startDate = new Date();
  for (let i = 1; i <= months && balance > 0.005; i++) {
    const date = new Date(startDate);
    date.setMonth(date.getMonth() + i);
    const interest = balance * r;
    let payment = basePayment + extraMonthly;
    if (i % 12 === 0) payment += extraAnnual;
    if (i === lumpSumMonth && lumpSum > 0) payment += lumpSum;
    const principal_paid = Math.min(payment - interest, balance);
    balance = Math.max(balance - principal_paid, 0);
    cumInterest += interest;
    cumPrincipal += principal_paid;
    rows.push({
      num: i,
      date: date.toLocaleDateString("en-US", {
        month: "short",
        year: "2-digit",
      }),
      beginBalance: balance + principal_paid,
      payment: principal_paid + interest,
      extraPayment:
        extraMonthly +
        (i % 12 === 0 ? extraAnnual : 0) +
        (i === lumpSumMonth ? lumpSum : 0),
      principalPaid: principal_paid,
      interest,
      endBalance: balance,
      cumInterest,
      cumPrincipal,
    });
    if (balance < 0.005) break;
  }
  return rows;
}

function computeInsights(inputs, results, fmt) {
  const { loanAmount, rate, termYears, extraMonthly } = inputs;
  const { monthlyPayment, totalInterest, totalPayment, schedule } = results;
const insights = [];

  insights.push({
    icon: "💡",
    text: `You will pay ${fmt(totalInterest)} in total interest over the life of this loan.`,
  });
  insights.push({
    icon: "📅",
    text: `Your loan will be fully paid off in ${schedule.length} months (${(schedule.length / 12).toFixed(1)} years).`,
  });

  // Extra payment savings
  if (extraMonthly === 0) {
    const extra200 = buildAmortization(loanAmount, rate, termYears * 12, 200);
    const saved = totalInterest - extra200.reduce((s, r) => s + r.interest, 0);
    const monthsSaved = schedule.length - extra200.length;
    if (saved > 0)
      insights.push({
        icon: "⚡",
        text: `Adding ${fmt(200, 0)}/month would save ${fmt(saved)} in interest and pay off ${Math.round((monthsSaved / 12) * 10) / 10} years sooner.`,
      });
  }

  // Biweekly
  const biweeklyPayoff = Math.round(termYears * 12 * (12 / 13));
  const biweeklyInterest = buildAmortization(
    loanAmount,
    rate,
    biweeklyPayoff,
  ).reduce((s, r) => s + r.interest, 0);
  const biweeklySaved = totalInterest - biweeklyInterest;
  if (biweeklySaved > 100)
    insights.push({
      icon: "📆",
      text: `Switching to biweekly payments could save approximately ${fmt(biweeklySaved)} and pay off ${Math.round(((termYears * 12 - biweeklyPayoff) / 12) * 10) / 10} years earlier.`,
    });

  // Refinance at lower rate
  if (rate > 4) {
    const newRate = rate - 1.5;
    const refSchedule = buildAmortization(loanAmount, newRate, termYears * 12);
    const refInterest = refSchedule.reduce((s, r) => s + r.interest, 0);
    const refSaved = totalInterest - refInterest;
    insights.push({
      icon: "🔁",
      text: `Refinancing at ${newRate.toFixed(1)}% (1.5% lower) could save approximately ${fmt(refSaved)} in total interest.`,
    });
  }

  // Cost per day/month
  const costPerDay = totalPayment / (termYears * 365);
  insights.push({
    icon: "📊",
    text: `This loan costs you ${fmt(costPerDay)} per day, or ${fmt(monthlyPayment)} per month.`,
  });

  // Interest ratio
  const interestRatio = (totalInterest / loanAmount) * 100;
  insights.push({
    icon: "📈",
    text: `You will pay ${interestRatio.toFixed(0)}% of the original loan amount in interest — for every ${fmt(1, 0)} borrowed, you pay ${fmt(1 + totalInterest / loanAmount, 2)} total.`,
  });

  // High rate warning
  if (rate > 15)
    insights.push({
      icon: "⚠️",
      text: `Your interest rate of ${rate}% is quite high. Even a small rate reduction could save thousands. Consider improving your credit score before borrowing.`,
    });

  // Large down payment advice
  insights.push({
    icon: "🏦",
    text: `Increasing your down payment reduces the principal, directly cutting total interest paid. A ${fmt(loanAmount * 0.1, 0)} larger down payment would save roughly ${fmt(loanAmount * 0.1 * (totalInterest / loanAmount))} in interest.`,
  });

  // APR vs rate
  const approxAPR = rate + 0.25;
  insights.push({
    icon: "📋",
    text: `The stated interest rate of ${rate}% becomes an effective APR of approximately ${approxAPR.toFixed(2)}% when fees and costs are included.`,
  });

  // First year interest heavy
  if (schedule.length > 12) {
    const firstYearInterest = schedule
      .slice(0, 12)
      .reduce((s, r) => s + r.interest, 0);
    const firstYearPct = ((firstYearInterest / totalInterest) * 100).toFixed(0);
    insights.push({
      icon: "📉",
      text: `In the first year alone, ${fmt(firstYearInterest)} (${firstYearPct}% of year-1 payments) goes toward interest rather than principal.`,
    });
  }

  // Opportunity cost
  const investReturn = 7;
  const futureValue =
    totalInterest * Math.pow(1 + investReturn / 100, termYears);
  insights.push({
    icon: "💰",
    text: `If invested at 7% annual return, the ${fmt(totalInterest)} in interest could grow to ${fmt(futureValue)} over ${termYears} years.`,
  });

  return insights.slice(0, 12);
}

// ─── Sub-components ────────────────────────────────────────────────────────────
function StatCard({ label, value, sub, accent }) {
  return (
    <div
      style={{
        background: accent || "var(--clr-surface)",
        border: "1px solid var(--clr-border)",
        borderRadius: 16,
        padding: "20px 24px",
        minWidth: 0,
      }}
    >
      <div
        style={{
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: accent ? "rgba(255,255,255,0.75)" : "var(--clr-muted)",
          marginBottom: 6,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
          fontWeight: 800,
          color: accent ? "#fff" : "var(--clr-text)",
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
        }}
      >
        {value}
      </div>
      {sub && (
        <div
          style={{
            fontSize: 12,
            color: accent ? "rgba(255,255,255,0.6)" : "var(--clr-muted)",
            marginTop: 4,
          }}
        >
          {sub}
        </div>
      )}
    </div>
  );
}

function InputField({
  label,
  value,
  onChange,
  prefix,
  suffix,
  type = "number",
  min,
  max,
  step,
  note,
}: {
  label: React.ReactNode;
  value: number | string;
  onChange: (val: number) => void;
  prefix?: string;
  suffix?: string;
  type?: string;
  min?: number;
  max?: number;
  step?: number | string;
  note?: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: "var(--clr-muted)",
          letterSpacing: "0.04em",
        }}
      >
        {label}
      </label>
      <div
        style={{ position: "relative", display: "flex", alignItems: "center" }}
      >
        {prefix && (
          <span
            style={{
              position: "absolute",
              left: 14,
              color: "var(--clr-muted)",
              fontSize: 14,
              fontWeight: 500,
              pointerEvents: "none",
            }}
          >
            {prefix}
          </span>
        )}
        <input
          type={type}
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          style={{
            width: "100%",
            padding: prefix
              ? "12px 14px 12px 28px"
              : suffix
                ? "12px 36px 12px 14px"
                : "12px 14px",
            border: "1.5px solid var(--clr-border)",
            borderRadius: 10,
            fontSize: 15,
            fontWeight: 600,
            background: "var(--clr-bg)",
            color: "var(--clr-text)",
            outline: "none",
            fontFamily: "'DM Mono', monospace",
            transition: "border-color 0.2s",
          }}
          onFocus={(e) => (e.target.style.borderColor = "var(--clr-accent)")}
          onBlur={(e) => (e.target.style.borderColor = "var(--clr-border)")}
        />
        {suffix && (
          <span
            style={{
              position: "absolute",
              right: 14,
              color: "var(--clr-muted)",
              fontSize: 14,
              pointerEvents: "none",
            }}
          >
            {suffix}
          </span>
        )}
      </div>
      {note && (
        <div style={{ fontSize: 11, color: "var(--clr-muted)", marginTop: -2 }}>
          {note}
        </div>
      )}
    </div>
  );
}

function SelectField({ label, value, onChange, options }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: "var(--clr-muted)",
          letterSpacing: "0.04em",
        }}
      >
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          padding: "12px 14px",
          border: "1.5px solid var(--clr-border)",
          borderRadius: 10,
          fontSize: 14,
          fontWeight: 500,
          background: "var(--clr-bg)",
          color: "var(--clr-text)",
          outline: "none",
          cursor: "pointer",
        }}
      >
        {options.map((o: any) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function SectionTitle({ children, sub }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <h2
        style={{
          fontSize: 20,
          fontWeight: 800,
          color: "var(--clr-text)",
          margin: 0,
          letterSpacing: "-0.02em",
        }}
      >
        {children}
      </h2>
      {sub && (
        <p
          style={{ fontSize: 13, color: "var(--clr-muted)", margin: "4px 0 0" }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

const COLORS = ["#4f8ef7", "#f5a623", "#34d399", "#f87171", "#a78bfa"];

// ─── Main Component ─────────────────────────────────────────────────────────────
export default function LoanCalculator() {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const dataParam = params.get('data');
      if (dataParam) {
        try {
          const data = JSON.parse(decodeURIComponent(dataParam));
          if (data.loanType !== undefined) setLoanType(data.loanType);
          if (data.loanAmount !== undefined) setLoanAmount(data.loanAmount);
          if (data.purchasePrice !== undefined) setPurchasePrice(data.purchasePrice);
          if (data.downPayment !== undefined) setDownPayment(data.downPayment);
          if (data.rate !== undefined) setRate(data.rate);
          if (data.termYears !== undefined) setTermYears(data.termYears);
          if (data.payFreq !== undefined) setPayFreq(data.payFreq);
          if (data.compoundFreq !== undefined) setCompoundFreq(data.compoundFreq);
          if (data.extraMonthly !== undefined) setExtraMonthly(data.extraMonthly);
          if (data.extraAnnual !== undefined) setExtraAnnual(data.extraAnnual);
          if (data.lumpSum !== undefined) setLumpSum(data.lumpSum);
          if (data.lumpSumMonth !== undefined) setLumpSumMonth(data.lumpSumMonth);
          if (data.origFee !== undefined) setOrigFee(data.origFee);
          if (data.closingCosts !== undefined) setClosingCosts(data.closingCosts);
          if (data.insurance !== undefined) setInsurance(data.insurance);
          if (data.propTax !== undefined) setPropTax(data.propTax);
          if (data.pmi !== undefined) setPmi(data.pmi);
          if (data.hoa !== undefined) setHoa(data.hoa);
          if (data.maintenance !== undefined) setMaintenance(data.maintenance);
          if (data.amortPage !== undefined) setAmortPage(data.amortPage);
          if (data.showAll !== undefined) setShowAll(data.showAll);
          // Remove query param from URL without refreshing
          window.history.replaceState({}, '', window.location.pathname);
        } catch(e) {}
      }
    }
  }, []);

  const { fmt, fmtShort, symbol: sym } = useCurrency();
  const [loanType, setLoanType] = useState("Personal Loan");
  const [loanAmount, setLoanAmount] = useState(250000);
  const [purchasePrice, setPurchasePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(50000);
  const [rate, setRate] = useState(6.5);
  const [termYears, setTermYears] = useState(30);
  const [payFreq, setPayFreq] = useState("Monthly");
  const [compoundFreq, setCompoundFreq] = useState("Monthly");
  const [extraMonthly, setExtraMonthly] = useState(0);
  const [extraAnnual, setExtraAnnual] = useState(0);
  const [lumpSum, setLumpSum] = useState(0);
  const [lumpSumMonth, setLumpSumMonth] = useState(12);
  const [origFee, setOrigFee] = useState(0);
  const [closingCosts, setClosingCosts] = useState(0);
  const [insurance, setInsurance] = useState(0);
  const [propTax, setPropTax] = useState(0);
  const [pmi, setPmi] = useState(0);
  const [hoa, setHoa] = useState(0);
  const [maintenance, setMaintenance] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");
  const [amortPage, setAmortPage] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const PAGE_SIZE = 24;
const results = useMemo(() => {
    const months = termYears * 12;
    const monthly = calcMonthlyPayment(loanAmount, rate, months);
    const schedule = buildAmortization(
      loanAmount,
      rate,
      months,
      extraMonthly,
      extraAnnual,
      lumpSum,
      lumpSumMonth,
    );
    const totalInterest = schedule.reduce((s, r) => s + r.interest, 0);
    const totalPayment =
      schedule.reduce((s, r) => s + r.payment, 0) + origFee + closingCosts;
    const totalMonthly =
      monthly + insurance + propTax / 12 + pmi + hoa + maintenance;
    const apr =
      rate + ((origFee + closingCosts) / loanAmount / termYears) * 100;
    const apy = (Math.pow(1 + rate / 100 / 12, 12) - 1) * 100;

    // yearly summary
    const yearlySummary = [];
    for (let y = 1; y <= termYears; y++) {
      const slice = schedule.filter(
        (r) => r.num > (y - 1) * 12 && r.num <= y * 12,
      );
      if (!slice.length) break;
      const totalPaid = slice.reduce((s, r) => s + r.payment, 0);
      const intPaid = slice.reduce((s, r) => s + r.interest, 0);
      const prinPaid = slice.reduce((s, r) => s + r.principalPaid, 0);
      yearlySummary.push({
        year: y,
        openBal: slice[0].beginBalance,
        totalPaid,
        intPaid,
        prinPaid,
        closeBal: slice[slice.length - 1].endBalance,
        intPct: ((intPaid / totalPaid) * 100).toFixed(0),
        prinPct: ((prinPaid / totalPaid) * 100).toFixed(0),
      });
    }

    // chart data
    const balanceData = schedule
      .filter((_, i) => i % 12 === 0)
      .map((r) => ({
        year: `Y${Math.ceil(r.num / 12)}`,
        balance: Math.round(r.endBalance),
        cumInterest: Math.round(r.cumInterest),
        cumPrincipal: Math.round(r.cumPrincipal),
      }));

    const yearlyChart = yearlySummary.map((y) => ({
      year: `Y${y.year}`,
      principal: Math.round(y.prinPaid),
      interest: Math.round(y.intPaid),
    }));

    const pieData = [
      { name: "Principal", value: Math.round(loanAmount) },
      { name: "Interest", value: Math.round(totalInterest) },
      { name: "Taxes", value: Math.round(propTax * termYears) },
      { name: "Insurance", value: Math.round(insurance * 12 * termYears) },
      { name: "Fees", value: Math.round(origFee + closingCosts) },
    ].filter((d) => d.value > 0);

    return {
      monthly,
      totalInterest,
      totalPayment,
      totalMonthly,
      apr,
      apy,
      schedule,
      yearlySummary,
      balanceData,
      yearlyChart,
      pieData,
    };
  }, [
    loanAmount,
    rate,
    termYears,
    extraMonthly,
    extraAnnual,
    lumpSum,
    lumpSumMonth,
    origFee,
    closingCosts,
    insurance,
    propTax,
    pmi,
    hoa,
    maintenance,
  ]);

  const insights = useMemo(
    () =>
      computeInsights({ loanAmount, rate, termYears, extraMonthly }, { ...results }, fmt),
    [results],
  );

  const exportCSV = useCallback(() => {
    const header =
      "Payment,Date,Begin Balance,Payment,Extra,Principal,Interest,End Balance,Cum Interest\n";
    const rows = results.schedule
      .map(
        (r) =>
          `${r.num},${r.date},${r.beginBalance.toFixed(2)},${r.payment.toFixed(2)},${r.extraPayment.toFixed(2)},${r.principalPaid.toFixed(2)},${r.interest.toFixed(2)},${r.endBalance.toFixed(2)},${r.cumInterest.toFixed(2)}`,
      )
      .join("\n");
    const blob = new Blob([header + rows], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "amortization.csv";
    a.click();
  }, [results.schedule]);

  const theme = {
    "--clr-bg": "#f8f9fc",
    "--clr-surface": "#ffffff",
    "--clr-border": "#e2e8f0",
    "--clr-text": "#0f172a",
    "--clr-muted": "#64748b",
    "--clr-accent": "#4f8ef7",
    "--clr-accent-light": "rgba(79,142,247,0.08)",
  };

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "charts", label: "Charts" },
    { id: "amortization", label: "Schedule" },
    { id: "insights", label: "Insights" },
    { id: "compare", label: "Compare" },
  ];

  const pagedSchedule = results.schedule.slice(
    amortPage * PAGE_SIZE,
    (amortPage + 1) * PAGE_SIZE,
  );
  const totalPages = Math.ceil(results.schedule.length / PAGE_SIZE);

  return (
    <div
      style={{
        ...theme,
        fontFamily: "'DM Sans', -apple-system, sans-serif",
        background: "var(--clr-bg)",
        minHeight: "100vh",
        color: "var(--clr-text)",
        transition: "background 0.3s",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap');
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: var(--clr-border); border-radius: 3px; }
        input[type=number]::-webkit-inner-spin-button { opacity: 0.4; }
        select option { background: #1a1d27; }
        .tab-btn { padding: 8px 18px; border: none; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; font-family: inherit; }
        .tab-btn.active { background: var(--clr-accent); color: #fff; }
        .tab-btn:not(.active) { background: transparent; color: var(--clr-muted); }
        .tab-btn:not(.active):hover { background: var(--clr-accent-light); color: var(--clr-accent); }
        .insight-card { background: var(--clr-surface); border: 1px solid var(--clr-border); border-radius: 12px; padding: 14px 18px; display: flex; gap: 12px; align-items: flex-start; transition: border-color 0.2s; }
        .insight-card:hover { border-color: var(--clr-accent); }
        .tbl-row:hover td { background: var(--clr-accent-light) !important; }
        .cta-btn { padding: 10px 20px; border: 1.5px solid var(--clr-border); border-radius: 10px; background: var(--clr-surface); color: var(--clr-text); font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; font-family: inherit; display: inline-flex; align-items: center; gap: 8px; }
        .cta-btn:hover { border-color: var(--clr-accent); color: var(--clr-accent); }
        .primary-btn { background: var(--clr-accent); color: #fff; border-color: var(--clr-accent); padding: 14px 28px; font-size: 15px; border-radius: 12px; }
        .primary-btn:hover { opacity: 0.9; transform: translateY(-1px); }
      `}</style>

      {/* HERO */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #1e3a5f 0%, #0f2040 50%, #162845 100%)",
          padding: "40px 24px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(79,142,247,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(52,211,153,0.1) 0%, transparent 40%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>


          {/* Quick stats bar */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: 1,
              background: "rgba(255,255,255,0.06)",
              borderRadius: "16px 16px 0 0",
              overflow: "hidden",
            }}
          >
            {[
              { label: "Monthly Payment", val: fmt(results.totalMonthly) },
              { label: "Total Interest", val: fmt(results.totalInterest) },
              { label: "Total Cost", val: fmt(results.totalPayment) },
              { label: "APR", val: `${results.apr.toFixed(2)}%` },
              {
                label: "Payoff In",
                val: `${(results.schedule.length / 12).toFixed(1)} yrs`,
              },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  padding: "20px 24px",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.4)",
                    marginBottom: 4,
                  }}
                >
                  {s.label}
                </div>
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: "#fff",
                    letterSpacing: "-0.02em",
                    fontFamily: "'DM Mono', monospace",
                  }}
                >
                  {s.val}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div
        style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 16px 48px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "clamp(280px, 35%, 380px) 1fr",
            gap: 24,
            alignItems: "start",
          }}
        >
          {/* ─── LEFT PANEL: Inputs ─── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Loan Type */}
            <div
              style={{
                background: "var(--clr-surface)",
                border: "1px solid var(--clr-border)",
                borderRadius: 16,
                padding: 20,
              }}
            >
              <SectionTitle>Loan Type</SectionTitle>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {LOAN_TYPES.map((t) => (
                  <button
                    key={t}
                    onClick={() => setLoanType(t)}
                    style={{
                      padding: "6px 14px",
                      borderRadius: 8,
                      border: `1.5px solid ${loanType === t ? "var(--clr-accent)" : "var(--clr-border)"}`,
                      background:
                        loanType === t
                          ? "var(--clr-accent-light)"
                          : "transparent",
                      color:
                        loanType === t
                          ? "var(--clr-accent)"
                          : "var(--clr-muted)",
                      fontSize: 12,
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.2s",
                      fontFamily: "inherit",
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Core Inputs */}
            <div
              style={{
                background: "var(--clr-surface)",
                border: "1px solid var(--clr-border)",
                borderRadius: 16,
                padding: 20,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <SectionTitle>Core Loan Details</SectionTitle>
              {loanType === "Mortgage" && (
                <>
                  <InputField
                    label="Purchase Price"
                    value={purchasePrice}
                    onChange={(v) => {
                      setPurchasePrice(v);
                      setLoanAmount(Math.max(0, v - downPayment));
                    }}
                    prefix={sym}
                    step={1000}
                  />
                  <InputField
                    label="Down Payment"
                    value={downPayment}
                    onChange={(v) => {
                      setDownPayment(v);
                      setLoanAmount(Math.max(0, purchasePrice - v));
                    }}
                    prefix={sym}
                    step={1000}
                    note={`${((downPayment / purchasePrice) * 100).toFixed(1)}% down`}
                  />
                </>
              )}
              <InputField
                label="Loan Amount"
                value={loanAmount}
                onChange={setLoanAmount}
                prefix={sym}
                step={1000}
                min={100}
              />
              <InputField
                label="Annual Interest Rate"
                value={rate}
                onChange={setRate}
                suffix="%"
                step={0.1}
                min={0}
                max={40}
              />
              <div>
                <label
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--clr-muted)",
                    letterSpacing: "0.04em",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  Loan Term
                </label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {[5, 10, 15, 20, 25, 30].map((y) => (
                    <button
                      key={y}
                      onClick={() => setTermYears(y)}
                      style={{
                        padding: "7px 14px",
                        borderRadius: 8,
                        border: `1.5px solid ${termYears === y ? "var(--clr-accent)" : "var(--clr-border)"}`,
                        background:
                          termYears === y ? "var(--clr-accent)" : "transparent",
                        color: termYears === y ? "#fff" : "var(--clr-muted)",
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 0.2s",
                        fontFamily: "inherit",
                      }}
                    >
                      {y}yr
                    </button>
                  ))}
                  <InputField
                    label=""
                    value={termYears}
                    onChange={setTermYears}
                    suffix="yr"
                    step={1}
                    min={1}
                    max={50}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                }}
              >
                <SelectField
                  label="Payment Frequency"
                  value={payFreq}
                  onChange={setPayFreq}
                  options={PAYMENT_FREQUENCIES}
                />
                <SelectField
                  label="Compounding"
                  value={compoundFreq}
                  onChange={setCompoundFreq}
                  options={COMPOUND_FREQUENCIES}
                />
              </div>
            </div>

            {/* Extra Payments */}
            <div
              style={{
                background: "var(--clr-surface)",
                border: "1px solid var(--clr-border)",
                borderRadius: 16,
                padding: 20,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <SectionTitle sub="Accelerate payoff and reduce interest">
                Extra Payments
              </SectionTitle>
              <InputField
                label="Extra Monthly"
                value={extraMonthly}
                onChange={setExtraMonthly}
                prefix={sym}
                step={50}
              />
              <InputField
                label="Extra Annual"
                value={extraAnnual}
                onChange={setExtraAnnual}
                prefix={sym}
                step={100}
              />
              <InputField
                label="One-Time Lump Sum"
                value={lumpSum}
                onChange={setLumpSum}
                prefix={sym}
                step={1000}
              />
              {lumpSum > 0 && (
                <InputField
                  label="Lump Sum at Month #"
                  value={lumpSumMonth}
                  onChange={setLumpSumMonth}
                  step={1}
                  min={1}
                />
              )}
            </div>

            {/* Fees & Costs */}
            <div
              style={{
                background: "var(--clr-surface)",
                border: "1px solid var(--clr-border)",
                borderRadius: 16,
                padding: 20,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <SectionTitle sub="All costs for true total cost">
                Fees & Additional Costs
              </SectionTitle>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                }}
              >
                <InputField
                  label="Origination Fee"
                  value={origFee}
                  onChange={setOrigFee}
                  prefix={sym}
                  step={100}
                />
                <InputField
                  label="Closing Costs"
                  value={closingCosts}
                  onChange={setClosingCosts}
                  prefix={sym}
                  step={100}
                />
                <InputField
                  label="Monthly Insurance"
                  value={insurance}
                  onChange={setInsurance}
                  prefix={sym}
                  step={10}
                />
                <InputField
                  label="Property Tax/yr"
                  value={propTax}
                  onChange={setPropTax}
                  prefix={sym}
                  step={100}
                />
                <InputField
                  label="PMI/month"
                  value={pmi}
                  onChange={setPmi}
                  prefix={sym}
                  step={10}
                />
                <InputField
                  label="HOA/month"
                  value={hoa}
                  onChange={setHoa}
                  prefix={sym}
                  step={10}
                />
                <InputField
                  label="Maintenance/mo"
                  value={maintenance}
                  onChange={setMaintenance}
                  prefix={sym}
                  step={25}
                />
              </div>
            </div>

            {/* Export */}
            <div
              style={{
                background: "var(--clr-surface)",
                border: "1px solid var(--clr-border)",
                borderRadius: 16,
                padding: 20,
              }}
            >
              <SectionTitle sub="Save your calculations">
                Export & Share
              </SectionTitle>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                <button className="cta-btn" onClick={exportCSV}>
                  📊 CSV
                </button>
                <button className="cta-btn" onClick={() => window.print()}>
                  🖨️ Print
                </button>
                <button
                  className="cta-btn"
                  onClick={() =>
                    navigator.clipboard?.writeText(window.location.href)
                  }
                >
                  🔗 Copy Link
                </button>
              </div>
            </div>
          </div>

          {/* ─── RIGHT PANEL: Results ─── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              minWidth: 0,
            }}
          >
            {/* Tabs */}
            <div
              style={{
                background: "var(--clr-surface)",
                border: "1px solid var(--clr-border)",
                borderRadius: 12,
                padding: "6px",
                display: "flex",
                gap: 4,
                flexWrap: "wrap",
              }}
            >
              {tabs.map((t) => (
                <button
                  key={t.id}
                  className={`tab-btn ${activeTab === t.id ? "active" : ""}`}
                  onClick={() => setActiveTab(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* ── OVERVIEW TAB ── */}
            {activeTab === "overview" && (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                    gap: 12,
                  }}
                >
                  <StatCard
                    label="Monthly Payment"
                    value={fmt(results.monthly)}
                    sub="Principal + Interest"
                    accent="#1d4ed8"
                  />
                  <StatCard
                    label="Total Monthly"
                    value={fmt(results.totalMonthly)}
                    sub="All costs included"
                  />
                  <StatCard
                    label="Total Interest"
                    value={fmt(results.totalInterest)}
                    sub={`${((results.totalInterest / loanAmount) * 100).toFixed(0)}% of principal`}
                  />
                  <StatCard
                    label="Total Paid"
                    value={fmtShort(results.totalPayment)}
                    sub="Including all fees"
                  />
                  <StatCard
                    label="APR"
                    value={`${results.apr.toFixed(2)}%`}
                    sub="Effective annual rate"
                  />
                  <StatCard
                    label="APY"
                    value={`${results.apy.toFixed(2)}%`}
                    sub="Annual percentage yield"
                  />
                  <StatCard
                    label="Payoff Date"
                    value={`${(results.schedule.length / 12).toFixed(1)} yrs`}
                    sub={`${results.schedule.length} payments`}
                  />
                  <StatCard
                    label="Cost Per Day"
                    value={fmt(results.totalPayment / (termYears * 365))}
                    sub="Lifetime average"
                  />
                </div>

                {/* Payment breakdown bar */}
                <div
                  style={{
                    background: "var(--clr-surface)",
                    border: "1px solid var(--clr-border)",
                    borderRadius: 16,
                    padding: 24,
                  }}
                >
                  <h3
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      marginBottom: 16,
                      color: "var(--clr-text)",
                    }}
                  >
                    Payment Breakdown
                  </h3>
                  {[
                    {
                      label: "Principal",
                      amount:
                        results.monthly -
                        (results.monthly * (rate / 100 / 12)) /
                          (1 - Math.pow(1 + rate / 100 / 12, -termYears * 12)),
                      color: "#4f8ef7",
                    },
                    {
                      label: "Interest",
                      amount:
                        (results.monthly * (rate / 100 / 12)) /
                          (1 -
                            Math.pow(1 + rate / 100 / 12, -(termYears * 12))) -
                        results.monthly,
                      color: "#f5a623",
                    },
                    ...(insurance > 0
                      ? [
                          {
                            label: "Insurance",
                            amount: insurance,
                            color: "#34d399",
                          },
                        ]
                      : []),
                    ...(propTax > 0
                      ? [
                          {
                            label: "Property Tax",
                            amount: propTax / 12,
                            color: "#a78bfa",
                          },
                        ]
                      : []),
                    ...(pmi > 0
                      ? [{ label: "PMI", amount: pmi, color: "#f87171" }]
                      : []),
                    ...(hoa > 0
                      ? [{ label: "HOA", amount: hoa, color: "#fb923c" }]
                      : []),
                  ].map((item) => {
                    const pct = (item.amount / results.totalMonthly) * 100;
                    return (
                      <div key={item.label} style={{ marginBottom: 12 }}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: 4,
                            fontSize: 13,
                          }}
                        >
                          <span
                            style={{
                              color: "var(--clr-muted)",
                              fontWeight: 500,
                            }}
                          >
                            {item.label}
                          </span>
                          <span
                            style={{
                              fontWeight: 700,
                              fontFamily: "'DM Mono', monospace",
                            }}
                          >
                            {fmt(Math.abs(item.amount))}{" "}
                            <span
                              style={{
                                color: "var(--clr-muted)",
                                fontWeight: 400,
                              }}
                            >
                              ({isNaN(pct) ? 0 : Math.abs(pct).toFixed(0)}%)
                            </span>
                          </span>
                        </div>
                        <div
                          style={{
                            height: 8,
                            background: "var(--clr-bg)",
                            borderRadius: 4,
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              height: "100%",
                              width: `${Math.min(100, Math.abs(isNaN(pct) ? 0 : pct))}%`,
                              background: item.color,
                              borderRadius: 4,
                              transition: "width 0.6s ease",
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Cost summary table */}
                <div
                  style={{
                    background: "var(--clr-surface)",
                    border: "1px solid var(--clr-border)",
                    borderRadius: 16,
                    padding: 24,
                  }}
                >
                  <h3
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      marginBottom: 16,
                      color: "var(--clr-text)",
                    }}
                  >
                    Total Cost of Ownership
                  </h3>
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      fontSize: 14,
                    }}
                  >
                    <tbody>
                      {[
                        ["Loan Principal", fmt(loanAmount)],
                        ["Total Interest", fmt(results.totalInterest)],
                        ["Origination Fee", fmt(origFee)],
                        ["Closing Costs", fmt(closingCosts)],
                        [
                          "Insurance (lifetime)",
                          fmt(insurance * 12 * termYears),
                        ],
                        [
                          "Property Tax (lifetime)",
                          fmt(propTax * termYears),
                        ],
                        ["PMI (lifetime)", fmt(pmi * 12 * termYears)],
                        ["HOA (lifetime)", fmt(hoa * 12 * termYears)],
                        [
                          "Maintenance (lifetime)",
                          fmt(maintenance * 12 * termYears),
                        ],
                      ]
                        .filter(([, v]) => v !== fmt(0))
                        .map(([label, val], i) => (
                          <tr
                            key={label}
                            style={{
                              borderTop:
                                i > 0 ? "1px solid var(--clr-border)" : "none",
                            }}
                          >
                            <td
                              style={{
                                padding: "10px 0",
                                color: "var(--clr-muted)",
                              }}
                            >
                              {label}
                            </td>
                            <td
                              style={{
                                padding: "10px 0",
                                textAlign: "right",
                                fontWeight: 600,
                                fontFamily: "'DM Mono', monospace",
                              }}
                            >
                              {val}
                            </td>
                          </tr>
                        ))}
                      <tr style={{ borderTop: "2px solid var(--clr-border)" }}>
                        <td
                          style={{
                            padding: "12px 0",
                            fontWeight: 800,
                            fontSize: 15,
                          }}
                        >
                          Total Cost
                        </td>
                        <td
                          style={{
                            padding: "12px 0",
                            textAlign: "right",
                            fontWeight: 800,
                            fontSize: 15,
                            color: "var(--clr-accent)",
                            fontFamily: "'DM Mono', monospace",
                          }}
                        >
                          {fmt(
                            results.totalPayment +
                              insurance * 12 * termYears +
                              propTax * termYears +
                              pmi * 12 * termYears +
                              hoa * 12 * termYears +
                              maintenance * 12 * termYears,  )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ── CHARTS TAB ── */}
            {activeTab === "charts" && (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                {/* Pie */}
                <div
                  style={{
                    background: "var(--clr-surface)",
                    border: "1px solid var(--clr-border)",
                    borderRadius: 16,
                    padding: 24,
                  }}
                >
                  <h3
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      marginBottom: 4,
                      color: "var(--clr-text)",
                    }}
                  >
                    Total Cost Breakdown
                  </h3>
                  <p
                    style={{
                      fontSize: 12,
                      color: "var(--clr-muted)",
                      marginBottom: 16,
                    }}
                  >
                    What you pay over the life of the loan
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 20,
                      alignItems: "center",
                    }}
                  >
                    <div style={{ width: 200, height: 200, flexShrink: 0 }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={results.pieData}
                            cx="50%"
                            cy="50%"
                            innerRadius={50}
                            outerRadius={80}
                            dataKey="value"
                            paddingAngle={3}
                          >
                            {results.pieData.map((_, i) => (
                              <Cell key={i} fill={COLORS[i % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(v) => fmt(v)} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                      }}
                    >
                      {results.pieData.map((d, i) => (
                        <div
                          key={d.name}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                          }}
                        >
                          <div
                            style={{
                              width: 12,
                              height: 12,
                              borderRadius: 3,
                              background: COLORS[i % COLORS.length],
                              flexShrink: 0,
                            }}
                          />
                          <span
                            style={{
                              fontSize: 13,
                              color: "var(--clr-muted)",
                              minWidth: 70,
                            }}
                          >
                            {d.name}
                          </span>
                          <span
                            style={{
                              fontSize: 13,
                              fontWeight: 700,
                              fontFamily: "'DM Mono', monospace",
                            }}
                          >
                            {fmt(d.value)}
                          </span>
                          <span
                            style={{ fontSize: 11, color: "var(--clr-muted)" }}
                          >
                            (
                            {(
                              (d.value /
                                results.pieData.reduce(
                                  (s, x) => s + x.value,
                                  0,
                                )) *
                              100
                            ).toFixed(0)}
                            %)
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Balance over time */}
                <div
                  style={{
                    background: "var(--clr-surface)",
                    border: "1px solid var(--clr-border)",
                    borderRadius: 16,
                    padding: 24,
                  }}
                >
                  <h3
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      marginBottom: 4,
                      color: "var(--clr-text)",
                    }}
                  >
                    Remaining Balance Over Time
                  </h3>
                  <p
                    style={{
                      fontSize: 12,
                      color: "var(--clr-muted)",
                      marginBottom: 16,
                    }}
                  >
                    Principal reduction year by year
                  </p>
                  <div style={{ height: 260 }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={results.balanceData}
                        margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                      >
                        <defs>
                          <linearGradient
                            id="balGrad"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="#4f8ef7"
                              stopOpacity={0.3}
                            />
                            <stop
                              offset="95%"
                              stopColor="#4f8ef7"
                              stopOpacity={0.02}
                            />
                          </linearGradient>
                        </defs>
                        <CartesianGrid
                          strokeDasharray="3 3"
                          stroke={"#f0f0f0"}
                        />
                        <XAxis
                          dataKey="year"
                          tick={{ fontSize: 11, fill: "#64748b" }}
                        />
                        <YAxis
                          tickFormatter={(v) => fmtShort(v)}
                          tick={{ fontSize: 11, fill: "#64748b" }}
                        />
                        <Tooltip
                          formatter={(v) => fmt(v)}
                          labelStyle={{ color: "var(--clr-text)" }}
                          contentStyle={{
                            background: "var(--clr-surface)",
                            border: "1px solid var(--clr-border)",
                            borderRadius: 8,
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="balance"
                          stroke="#4f8ef7"
                          strokeWidth={2}
                          fill="url(#balGrad)"
                          name="Remaining Balance"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Yearly principal vs interest */}
                <div
                  style={{
                    background: "var(--clr-surface)",
                    border: "1px solid var(--clr-border)",
                    borderRadius: 16,
                    padding: 24,
                  }}
                >
                  <h3
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      marginBottom: 4,
                      color: "var(--clr-text)",
                    }}
                  >
                    Principal vs Interest by Year
                  </h3>
                  <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        fontSize: 12,
                        color: "var(--clr-muted)",
                      }}
                    >
                      <span
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: 2,
                          background: "#4f8ef7",
                          display: "inline-block",
                        }}
                      />{" "}
                      Principal
                    </span>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        fontSize: 12,
                        color: "var(--clr-muted)",
                      }}
                    >
                      <span
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: 2,
                          background: "#f5a623",
                          display: "inline-block",
                        }}
                      />{" "}
                      Interest
                    </span>
                  </div>
                  <div style={{ height: 260 }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={results.yearlyChart}
                        margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                      >
                        <CartesianGrid
                          strokeDasharray="3 3"
                          stroke={"#f0f0f0"}
                        />
                        <XAxis
                          dataKey="year"
                          tick={{ fontSize: 11, fill: "#64748b" }}
                        />
                        <YAxis
                          tickFormatter={(v) => fmtShort(v)}
                          tick={{ fontSize: 11, fill: "#64748b" }}
                        />
                        <Tooltip
                          formatter={(v) => fmt(v)}
                          contentStyle={{
                            background: "var(--clr-surface)",
                            border: "1px solid var(--clr-border)",
                            borderRadius: 8,
                          }}
                        />
                        <Bar
                          dataKey="principal"
                          fill="#4f8ef7"
                          name="Principal"
                          radius={[3, 3, 0, 0]}
                        />
                        <Bar
                          dataKey="interest"
                          fill="#f5a623"
                          name="Interest"
                          radius={[3, 3, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Cumulative payments */}
                <div
                  style={{
                    background: "var(--clr-surface)",
                    border: "1px solid var(--clr-border)",
                    borderRadius: 16,
                    padding: 24,
                  }}
                >
                  <h3
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      marginBottom: 4,
                      color: "var(--clr-text)",
                    }}
                  >
                    Cumulative Payments
                  </h3>
                  <div style={{ height: 260 }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={results.balanceData}
                        margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                      >
                        <defs>
                          <linearGradient
                            id="prinGrad"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="#34d399"
                              stopOpacity={0.3}
                            />
                            <stop
                              offset="95%"
                              stopColor="#34d399"
                              stopOpacity={0.02}
                            />
                          </linearGradient>
                          <linearGradient
                            id="intGrad2"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="#f5a623"
                              stopOpacity={0.3}
                            />
                            <stop
                              offset="95%"
                              stopColor="#f5a623"
                              stopOpacity={0.02}
                            />
                          </linearGradient>
                        </defs>
                        <CartesianGrid
                          strokeDasharray="3 3"
                          stroke={"#f0f0f0"}
                        />
                        <XAxis
                          dataKey="year"
                          tick={{ fontSize: 11, fill: "#64748b" }}
                        />
                        <YAxis
                          tickFormatter={(v) => fmtShort(v)}
                          tick={{ fontSize: 11, fill: "#64748b" }}
                        />
                        <Tooltip
                          formatter={(v) => fmt(v)}
                          contentStyle={{
                            background: "var(--clr-surface)",
                            border: "1px solid var(--clr-border)",
                            borderRadius: 8,
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="cumPrincipal"
                          stroke="#34d399"
                          fill="url(#prinGrad)"
                          strokeWidth={2}
                          name="Cumulative Principal"
                        />
                        <Area
                          type="monotone"
                          dataKey="cumInterest"
                          stroke="#f5a623"
                          fill="url(#intGrad2)"
                          strokeWidth={2}
                          name="Cumulative Interest"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            )}

            {/* ── AMORTIZATION TAB ── */}
            {activeTab === "amortization" && (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 12,
                  }}
                >
                  <div>
                    <h2
                      style={{
                        fontSize: 18,
                        fontWeight: 800,
                        color: "var(--clr-text)",
                      }}
                    >
                      Amortization Schedule
                    </h2>
                    <p style={{ fontSize: 12, color: "var(--clr-muted)" }}>
                      {results.schedule.length} payments ·{" "}
                      {fmt(results.totalInterest)} total interest
                    </p>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button
                      className="cta-btn"
                      onClick={() => setShowAll((s) => !s)}
                    >
                      {showAll ? "Paginate" : "Show All"}
                    </button>
                    <button className="cta-btn" onClick={exportCSV}>
                      📊 Export CSV
                    </button>
                  </div>
                </div>

                <div
                  style={{
                    overflowX: "auto",
                    borderRadius: 12,
                    border: "1px solid var(--clr-border)",
                  }}
                >
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      fontSize: 12,
                      minWidth: 700,
                    }}
                  >
                    <thead>
                      <tr
                        style={{ background: "#f8fafc" }}
                      >
                        {[
                          "#",
                          "Date",
                          "Beg. Balance",
                          "Payment",
                          "Principal",
                          "Interest",
                          "End Balance",
                          "Cum. Interest",
                        ].map((h) => (
                          <th
                            key={h}
                            style={{
                              padding: "10px 12px",
                              textAlign:
                                h === "#" || h === "Date" ? "left" : "right",
                              fontWeight: 700,
                              fontSize: 11,
                              color: "var(--clr-muted)",
                              letterSpacing: "0.05em",
                              textTransform: "uppercase",
                              whiteSpace: "nowrap",
                              borderBottom: "1px solid var(--clr-border)",
                              position: "sticky",
                              top: 0,
                              background: "#f8fafc",
                            }}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {(showAll ? results.schedule : pagedSchedule).map(
                        (r, i) => (
                          <tr
                            key={r.num}
                            className="tbl-row"
                            style={{
                              background:
                                i % 2 === 0
                                  ? "transparent"
                                  : (typeof document !== "undefined" && document.documentElement.classList.contains("dark"))
                                    ? "rgba(255,255,255,0.02)"
                                    : "rgba(0,0,0,0.01)",
                            }}
                          >
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--clr-muted)",
                                fontWeight: 600,
                              }}
                            >
                              {r.num}
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--clr-muted)",
                              }}
                            >
                              {r.date}
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                textAlign: "right",
                                fontFamily: "'DM Mono', monospace",
                              }}
                            >
                              {fmt(r.beginBalance)}
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                textAlign: "right",
                                fontWeight: 600,
                                fontFamily: "'DM Mono', monospace",
                              }}
                            >
                              {fmt(r.payment)}
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                textAlign: "right",
                                color: "#4f8ef7",
                                fontFamily: "'DM Mono', monospace",
                              }}
                            >
                              {fmt(r.principalPaid)}
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                textAlign: "right",
                                color: "#f5a623",
                                fontFamily: "'DM Mono', monospace",
                              }}
                            >
                              {fmt(r.interest)}
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                textAlign: "right",
                                fontFamily: "'DM Mono', monospace",
                              }}
                            >
                              {fmt(r.endBalance)}
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                textAlign: "right",
                                color: "var(--clr-muted)",
                                fontFamily: "'DM Mono', monospace",
                              }}
                            >
                              {fmt(r.cumInterest)}
                            </td>
                          </tr>
                        ),
                      )}
                    </tbody>
                  </table>
                </div>

                {!showAll && totalPages > 1 && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <button
                      className="cta-btn"
                      disabled={amortPage === 0}
                      onClick={() => setAmortPage((p) => p - 1)}
                    >
                      ← Prev
                    </button>
                    <span style={{ fontSize: 13, color: "var(--clr-muted)" }}>
                      Page {amortPage + 1} of {totalPages}
                    </span>
                    <button
                      className="cta-btn"
                      disabled={amortPage >= totalPages - 1}
                      onClick={() => setAmortPage((p) => p + 1)}
                    >
                      Next →
                    </button>
                  </div>
                )}

                {/* Annual Summary */}
                <div style={{ marginTop: 8 }}>
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: "var(--clr-text)",
                      marginBottom: 12,
                    }}
                  >
                    Annual Summary
                  </h3>
                  <div
                    style={{
                      overflowX: "auto",
                      borderRadius: 12,
                      border: "1px solid var(--clr-border)",
                    }}
                  >
                    <table
                      style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        fontSize: 12,
                        minWidth: 600,
                      }}
                    >
                      <thead>
                        <tr
                          style={{
                            background: "#f8fafc",
                          }}
                        >
                          {[
                            "Year",
                            "Open Balance",
                            "Total Paid",
                            "Principal",
                            "Interest",
                            "Close Balance",
                            "Int%",
                            "Pri%",
                          ].map((h) => (
                            <th
                              key={h}
                              style={{
                                padding: "10px 12px",
                                textAlign: h === "Year" ? "left" : "right",
                                fontWeight: 700,
                                fontSize: 11,
                                color: "var(--clr-muted)",
                                letterSpacing: "0.05em",
                                textTransform: "uppercase",
                                borderBottom: "1px solid var(--clr-border)",
                              }}
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {results.yearlySummary.map((y, i) => (
                          <tr
                            key={y.year}
                            className="tbl-row"
                            style={{
                              background:
                                i % 2 === 0
                                  ? "transparent"
                                  : (typeof document !== "undefined" && document.documentElement.classList.contains("dark"))
                                    ? "rgba(255,255,255,0.02)"
                                    : "rgba(0,0,0,0.01)",
                            }}
                          >
                            <td
                              style={{
                                padding: "9px 12px",
                                fontWeight: 700,
                                color: "var(--clr-muted)",
                              }}
                            >
                              Year {y.year}
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                textAlign: "right",
                                fontFamily: "'DM Mono', monospace",
                              }}
                            >
                              {fmt(y.openBal)}
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                textAlign: "right",
                                fontWeight: 600,
                                fontFamily: "'DM Mono', monospace",
                              }}
                            >
                              {fmt(y.totalPaid)}
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                textAlign: "right",
                                color: "#4f8ef7",
                                fontFamily: "'DM Mono', monospace",
                              }}
                            >
                              {fmt(y.prinPaid)}
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                textAlign: "right",
                                color: "#f5a623",
                                fontFamily: "'DM Mono', monospace",
                              }}
                            >
                              {fmt(y.intPaid)}
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                textAlign: "right",
                                fontFamily: "'DM Mono', monospace",
                              }}
                            >
                              {fmt(y.closeBal)}
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                textAlign: "right",
                                color: "#f5a623",
                              }}
                            >
                              {y.intPct}%
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                textAlign: "right",
                                color: "#4f8ef7",
                              }}
                            >
                              {y.prinPct}%
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* ── INSIGHTS TAB ── */}
            {activeTab === "insights" && (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                <div style={{ marginBottom: 8 }}>
                  <h2
                    style={{
                      fontSize: 18,
                      fontWeight: 800,
                      color: "var(--clr-text)",
                    }}
                  >
                    Financial Insights
                  </h2>
                  <p style={{ fontSize: 13, color: "var(--clr-muted)" }}>
                    AI-powered analysis of your loan
                  </p>
                </div>
                {insights.map((ins, i) => (
                  <div key={i} className="insight-card">
                    <span style={{ fontSize: 20, flexShrink: 0 }}>
                      {ins.icon}
                    </span>
                    <p
                      style={{
                        fontSize: 14,
                        color: "var(--clr-text)",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {ins.text}
                    </p>
                  </div>
                ))}

                {/* Refinance comparison */}
                <div
                  style={{
                    background: "var(--clr-surface)",
                    border: "1px solid var(--clr-border)",
                    borderRadius: 16,
                    padding: 24,
                    marginTop: 8,
                  }}
                >
                  <h3
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      marginBottom: 16,
                      color: "var(--clr-text)",
                    }}
                  >
                    Rate Comparison Table
                  </h3>
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      fontSize: 13,
                    }}
                  >
                    <thead>
                      <tr
                        style={{ background: "#f8fafc" }}
                      >
                        {[
                          "Rate",
                          "Monthly Payment",
                          "Total Interest",
                          "Total Cost",
                          "vs Current",
                        ].map((h) => (
                          <th
                            key={h}
                            style={{
                              padding: "8px 12px",
                              textAlign: h === "Rate" ? "left" : "right",
                              fontWeight: 700,
                              fontSize: 11,
                              color: "var(--clr-muted)",
                              letterSpacing: "0.05em",
                              textTransform: "uppercase",
                              borderBottom: "1px solid var(--clr-border)",
                            }}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[rate - 2, rate - 1, rate, rate + 1, rate + 2]
                        .filter((r) => r > 0)
                        .map((r, i) => {
                          const m = calcMonthlyPayment(
                            loanAmount,
                            r,
                            termYears * 12,
                          );
                          const t = m * termYears * 12;
                          const ti = t - loanAmount;
                          const diff = ti - results.totalInterest;
                          const isCurrent = Math.abs(r - rate) < 0.001;
                          return (
                            <tr
                              key={r}
                              style={{
                                background: isCurrent
                                  ? (typeof document !== "undefined" && document.documentElement.classList.contains("dark"))
                                    ? "rgba(79,142,247,0.1)"
                                    : "rgba(79,142,247,0.05)"
                                  : "transparent",
                              }}
                            >
                              <td
                                style={{
                                  padding: "10px 12px",
                                  fontWeight: isCurrent ? 800 : 500,
                                  color: isCurrent
                                    ? "var(--clr-accent)"
                                    : "var(--clr-text)",
                                }}
                              >
                                {r.toFixed(2)}%{isCurrent ? " ←" : ""}
                              </td>
                              <td
                                style={{
                                  padding: "10px 12px",
                                  textAlign: "right",
                                  fontFamily: "'DM Mono', monospace",
                                }}
                              >
                                {fmt(m)}
                              </td>
                              <td
                                style={{
                                  padding: "10px 12px",
                                  textAlign: "right",
                                  fontFamily: "'DM Mono', monospace",
                                }}
                              >
                                {fmt(ti)}
                              </td>
                              <td
                                style={{
                                  padding: "10px 12px",
                                  textAlign: "right",
                                  fontFamily: "'DM Mono', monospace",
                                }}
                              >
                                {fmt(t)}
                              </td>
                              <td
                                style={{
                                  padding: "10px 12px",
                                  textAlign: "right",
                                  color:
                                    diff > 0
                                      ? "#f87171"
                                      : diff < 0
                                        ? "#34d399"
                                        : "var(--clr-muted)",
                                  fontWeight: 600,
                                  fontFamily: "'DM Mono', monospace",
                                }}
                              >
                                {isCurrent
                                  ? "—"
                                  : (diff > 0 ? "+" : "") + fmt(diff)}
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ── COMPARE TAB ── */}
            {activeTab === "compare" && (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <div>
                  <h2
                    style={{
                      fontSize: 18,
                      fontWeight: 800,
                      color: "var(--clr-text)",
                    }}
                  >
                    Loan Scenario Comparison
                  </h2>
                  <p style={{ fontSize: 13, color: "var(--clr-muted)" }}>
                    Compare different term lengths and rates
                  </p>
                </div>

                {/* Term comparison */}
                <div
                  style={{
                    background: "var(--clr-surface)",
                    border: "1px solid var(--clr-border)",
                    borderRadius: 16,
                    padding: 24,
                  }}
                >
                  <h3
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      marginBottom: 16,
                      color: "var(--clr-text)",
                    }}
                  >
                    Different Loan Terms at {rate}%
                  </h3>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(140px, 1fr))",
                      gap: 12,
                    }}
                  >
                    {[10, 15, 20, 25, 30].map((y) => {
                      const m = calcMonthlyPayment(loanAmount, rate, y * 12);
                      const ti = m * y * 12 - loanAmount;
                      const isCurrent = y === termYears;
                      return (
                        <div
                          key={y}
                          onClick={() => setTermYears(y)}
                          style={{
                            border: `2px solid ${isCurrent ? "var(--clr-accent)" : "var(--clr-border)"}`,
                            borderRadius: 12,
                            padding: 16,
                            cursor: "pointer",
                            background: isCurrent
                              ? "var(--clr-accent-light)"
                              : "transparent",
                            transition: "all 0.2s",
                          }}
                        >
                          <div
                            style={{
                              fontSize: 20,
                              fontWeight: 800,
                              color: isCurrent
                                ? "var(--clr-accent)"
                                : "var(--clr-text)",
                              fontFamily: "'DM Mono', monospace",
                            }}
                          >
                            {y}yr
                          </div>
                          <div
                            style={{
                              fontSize: 12,
                              color: "var(--clr-muted)",
                              marginTop: 8,
                              marginBottom: 4,
                            }}
                          >
                            Monthly
                          </div>
                          <div
                            style={{
                              fontSize: 15,
                              fontWeight: 700,
                              fontFamily: "'DM Mono', monospace",
                            }}
                          >
                            {fmt(m)}
                          </div>
                          <div
                            style={{
                              fontSize: 11,
                              color: "#f5a623",
                              marginTop: 6,
                            }}
                          >
                            Interest: {fmtShort(ti)}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Extra payment scenarios */}
                <div
                  style={{
                    background: "var(--clr-surface)",
                    border: "1px solid var(--clr-border)",
                    borderRadius: 16,
                    padding: 24,
                  }}
                >
                  <h3
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      marginBottom: 16,
                      color: "var(--clr-text)",
                    }}
                  >
                    Extra Payment Impact
                  </h3>
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      fontSize: 13,
                    }}
                  >
                    <thead>
                      <tr>
                        {[
                          "Extra/Month",
                          "Payoff",
                          "Total Interest",
                          "Interest Saved",
                          "Months Saved",
                        ].map((h) => (
                          <th
                            key={h}
                            style={{
                              padding: "8px 12px",
                              textAlign: h === "Extra/Month" ? "left" : "right",
                              fontWeight: 700,
                              fontSize: 11,
                              color: "var(--clr-muted)",
                              letterSpacing: "0.05em",
                              textTransform: "uppercase",
                              borderBottom: "1px solid var(--clr-border)",
                            }}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[0, 100, 200, 500, 1000].map((extra, i) => {
                        const sched = buildAmortization(
                          loanAmount,
                          rate,
                          termYears * 12,
                          extra,
                        );
                        const ti = sched.reduce((s, r) => s + r.interest, 0);
                        const saved = results.totalInterest - ti;
                        const monthsSaved =
                          results.schedule.length - sched.length;
                        const isCurrent = extra === extraMonthly;
                        return (
                          <tr
                            key={extra}
                            className="tbl-row"
                            style={{
                              background: isCurrent
                                ? (typeof document !== "undefined" && document.documentElement.classList.contains("dark"))
                                  ? "rgba(79,142,247,0.1)"
                                  : "rgba(79,142,247,0.05)"
                                : i % 2 === 0
                                  ? "transparent"
                                  : (typeof document !== "undefined" && document.documentElement.classList.contains("dark"))
                                    ? "rgba(255,255,255,0.02)"
                                    : "rgba(0,0,0,0.01)",
                            }}
                          >
                            <td
                              style={{ padding: "10px 12px", fontWeight: 600 }}
                            >
                              {fmt(extra, 0)}
                              {isCurrent ? " ←" : ""}
                            </td>
                            <td
                              style={{
                                padding: "10px 12px",
                                textAlign: "right",
                              }}
                            >
                              {(sched.length / 12).toFixed(1)} yrs
                            </td>
                            <td
                              style={{
                                padding: "10px 12px",
                                textAlign: "right",
                                fontFamily: "'DM Mono', monospace",
                              }}
                            >
                              {fmt(ti)}
                            </td>
                            <td
                              style={{
                                padding: "10px 12px",
                                textAlign: "right",
                                color: "#34d399",
                                fontWeight: 600,
                                fontFamily: "'DM Mono', monospace",
                              }}
                            >
                              {saved > 0 ? fmt(saved) : "—"}
                            </td>
                            <td
                              style={{
                                padding: "10px 12px",
                                textAlign: "right",
                                color: "#34d399",
                              }}
                            >
                              {monthsSaved > 0 ? `${monthsSaved} mo` : "—"}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Debt payoff methods */}
                <div
                  style={{
                    background: "var(--clr-surface)",
                    border: "1px solid var(--clr-border)",
                    borderRadius: 16,
                    padding: 24,
                  }}
                >
                  <h3
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      marginBottom: 8,
                      color: "var(--clr-text)",
                    }}
                  >
                    Payoff Strategies
                  </h3>
                  <p
                    style={{
                      fontSize: 12,
                      color: "var(--clr-muted)",
                      marginBottom: 16,
                    }}
                  >
                    Comparing common debt reduction methods
                  </p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: 12,
                    }}
                  >
                    {[
                      {
                        name: "Standard",
                        extra: 0,
                        desc: "Regular monthly payments",
                      },
                      {
                        name: "Biweekly",
                        extra: results.monthly / 26,
                        desc: "Pay half monthly every 2 weeks",
                      },
                      {
                        name: "Round Up",
                        extra:
                          Math.ceil(results.monthly / 100) * 100 -
                          results.monthly,
                        desc: "Round up to nearest $100",
                      },
                      {
                        name: "Extra $500/mo",
                        extra: 500,
                        desc: "Aggressive paydown strategy",
                      },
                    ].map((s) => {
                      const sched = buildAmortization(
                        loanAmount,
                        rate,
                        termYears * 12,
                        s.extra,
                      );
                      const ti = sched.reduce((r, x) => r + x.interest, 0);
                      const saved = results.totalInterest - ti;
                      return (
                        <div
                          key={s.name}
                          style={{
                            border: "1px solid var(--clr-border)",
                            borderRadius: 12,
                            padding: 16,
                          }}
                        >
                          <div
                            style={{
                              fontWeight: 700,
                              fontSize: 14,
                              marginBottom: 4,
                            }}
                          >
                            {s.name}
                          </div>
                          <div
                            style={{
                              fontSize: 11,
                              color: "var(--clr-muted)",
                              marginBottom: 12,
                            }}
                          >
                            {s.desc}
                          </div>
                          <div
                            style={{ fontSize: 12, color: "var(--clr-muted)" }}
                          >
                            Payoff
                          </div>
                          <div
                            style={{
                              fontWeight: 700,
                              fontFamily: "'DM Mono', monospace",
                            }}
                          >
                            {(sched.length / 12).toFixed(1)} yrs
                          </div>
                          <div
                            style={{
                              fontSize: 12,
                              color: "var(--clr-muted)",
                              marginTop: 8,
                            }}
                          >
                            Total Interest
                          </div>
                          <div
                            style={{
                              fontWeight: 700,
                              color: "#f5a623",
                              fontFamily: "'DM Mono', monospace",
                            }}
                          >
                            {fmt(ti)}
                          </div>
                          {saved > 100 && (
                            <div
                              style={{
                                marginTop: 8,
                                fontSize: 12,
                                color: "#34d399",
                                fontWeight: 600,
                              }}
                            >
                              Saves {fmt(saved)}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Related calculators */}
            <div
              style={{
                background: "var(--clr-surface)",
                border: "1px solid var(--clr-border)",
                borderRadius: 16,
                padding: 24,
                marginTop: 8,
              }}
            >
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  marginBottom: 16,
                  color: "var(--clr-text)",
                }}
              >
                Related Calculators
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {[
                  "Mortgage Calculator",
                  "Auto Loan Calculator",
                  "APR Calculator",
                  "Refinance Calculator",
                  "Debt Payoff Calculator",
                  "Investment Calculator",
                  "Retirement Calculator",
                  "Interest Calculator",
                ].map((name) => (
                  <button
                    key={name}
                    className="cta-btn"
                    style={{ fontSize: 12 }}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SEO CONTENT */}
        <div
          style={{
            marginTop: 64,
            borderTop: "1px solid var(--clr-border)",
            paddingTop: 48,
            display: "flex",
            flexDirection: "column",
            gap: 40,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 32,
            }}
          >
            {[
              {
                title: "How Loan Interest Works",
                body: "When you borrow money, lenders charge interest as the cost of the loan. Your interest rate is applied to your remaining balance each month. Early in a loan's life, most of your payment goes toward interest — over time, more goes to principal as the balance decreases. This is called front-loaded amortization.",
              },
              {
                title: "APR vs. Interest Rate",
                body: "The interest rate is the basic cost of borrowing. APR (Annual Percentage Rate) includes fees and costs, giving a truer picture of your total borrowing cost. Always compare APRs when shopping for loans — a lower rate with higher fees may cost more than a higher rate with no fees.",
              },
              {
                title: "How to Pay Off Loans Faster",
                body: "The most effective strategies are: making extra principal payments, switching to biweekly payments (makes one extra payment per year), rounding up payments, applying tax refunds and bonuses to principal, and refinancing to a lower rate. Even $50/month extra can save thousands in interest.",
              },
              {
                title: "Understanding Amortization",
                body: "Amortization is the process of paying off debt through scheduled payments. Each payment covers interest accrued since the last payment, then the rest reduces principal. An amortization schedule shows exactly how much of each payment goes to interest versus principal.",
              },
              {
                title: "Common Loan Mistakes",
                body: "1) Only looking at monthly payment, not total cost. 2) Ignoring APR and fees. 3) Making minimum payments only. 4) Not comparing multiple lenders. 5) Borrowing more than needed. 6) Missing the impact of credit score on rates. 7) Not reading the fine print on variable rates.",
              },
              {
                title: "Loan FAQs",
                body: "Q: What credit score do I need? Most lenders prefer 620+. Q: What's a good interest rate? For personal loans, 6-12% is good; mortgages currently range 6-8%. Q: Can I pay off early? Most loans allow prepayment — check for prepayment penalties. Q: What's debt-to-income ratio? Your monthly debt payments divided by gross income; lenders prefer under 43%.",
              },
            ].map((sec) => (
              <article key={sec.title}>
                <h2
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "var(--clr-text)",
                    marginBottom: 10,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {sec.title}
                </h2>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--clr-muted)",
                    lineHeight: 1.8,
                  }}
                >
                  {sec.body}
                </p>
              </article>
            ))}
          </div>
          <div
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "var(--clr-muted)",
              borderTop: "1px solid var(--clr-border)",
              paddingTop: 24,
            }}
          >
            This calculator is for educational and informational purposes only.
            It does not constitute financial advice. Consult a qualified
            financial advisor before making loan decisions. Calculations are
            estimates and may vary from actual lender quotes.
          </div>
        </div>
      
        <CalculatorActions
          calculatorId="loan-calculator"
          calculatorName="Loan Calculator"
          inputData={{ loanType, loanAmount, purchasePrice, downPayment, rate, termYears, payFreq, compoundFreq, extraMonthly, extraAnnual, lumpSum, lumpSumMonth, origFee, closingCosts, insurance, propTax, pmi, hoa, maintenance, amortPage, showAll }}
          resultData={results || {}}
          resultRef={resultRef}
        />
      </div>
    </div>
  );
}