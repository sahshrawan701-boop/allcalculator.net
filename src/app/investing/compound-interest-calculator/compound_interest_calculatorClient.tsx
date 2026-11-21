/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface AmortizationRow {
  month: number;
  year: number;
  startingBalance: number;
  contributions: number;
  interest: number;
  tax: number;
  endingBalance: number;
}

interface Results {
  initial: number;
  contributions: number;
  interest: number;
  tax: number;
  balance: number;
}

// ─── Utilities ─────────────────────────────────────────────────────────────────
function parseCurrency(value: string): number {
  return Number(value.replace(/[^0-9.-]+/g, "")) || 0;
}

function formatCurrency(value: number, hasDecimal = false): string {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: hasDecimal ? 2 : 0,
    maximumFractionDigits: hasDecimal ? 2 : 0,
  });
}

// ─── Component ─────────────────────────────────────────────────────────────────
export default function CompoundInterestCalculator() {
  // ── Form state ──
  const [principal, setPrincipal] = useState("10,000");
  const [annualContrib, setAnnualContrib] = useState("0");
  const [monthlyContrib, setMonthlyContrib] = useState("0");
  const [contribTiming, setContribTiming] = useState<"beginning" | "end">(
    "beginning",
  );
  const [interestRate, setInterestRate] = useState("5");
  const [compoundingFrequency, setCompoundingFrequency] = useState("1");
  const [investmentYears, setInvestmentYears] = useState("10");
  const [investmentMonths, setInvestmentMonths] = useState("0");
  const [taxRate, setTaxRate] = useState("0");
  const [inflationRate, setInflationRate] = useState("0");

  // ── Results state ──
  const [results, setResults] = useState<Results>({
    initial: 10000,
    contributions: 0,
    interest: 43562.15,
    tax: 0,
    balance: 53562.15,
  });
  const [calcTime, setCalcTime] = useState("10 years");
  const [amortizationData, setAmortizationData] = useState<AmortizationRow[]>(
    [],
  );
  const [scheduleView, setScheduleView] = useState<"monthly" | "annual">(
    "monthly",
  );

  // ── Chart refs ──
  const barChartRef = useRef<HTMLCanvasElement>(null);
  const pieChartRef = useRef<HTMLCanvasElement>(null);
  const barChartInstance = useRef<any>(null);
  const pieChartInstance = useRef<any>(null);

  // ─── Core calculation ─────────────────────────────────────────────────────
  const getInputValues = useCallback(
    () => ({
      initial: parseCurrency(principal),
      annual: parseCurrency(annualContrib),
      monthly: parseCurrency(monthlyContrib),
      rate: parseCurrency(interestRate) / 100,
      freq: parseInt(compoundingFrequency) || 12,
      timing: contribTiming,
      years: parseInt(investmentYears) || 0,
      months: parseInt(investmentMonths) || 0,
      taxR: parseCurrency(taxRate) / 100,
      inflR: parseCurrency(inflationRate) / 100,
    }),
    [
      principal,
      annualContrib,
      monthlyContrib,
      interestRate,
      compoundingFrequency,
      contribTiming,
      investmentYears,
      investmentMonths,
      taxRate,
      inflationRate,
    ],
  );

  const generateAmortizationSchedule = useCallback(() => {
    const {
      initial,
      annual,
      monthly,
      rate,
      freq,
      timing,
      years,
      months: extraMonths,
      taxR,
      inflR,
    } = getInputValues();
    const totalMonths = years * 12 + extraMonths;
    let balance = initial;
    let totalContribution = initial;
    const rows: AmortizationRow[] = [];

    for (let month = 1; month <= totalMonths; month++) {
      const currentYear = Math.ceil(month / 12);
      let deposit = 0;
      let contributionThisMonth = 0;
      const startingBalance = balance;

      if (timing === "beginning") {
        if (monthly > 0) {
          deposit += monthly;
          contributionThisMonth += monthly;
        }
        if (month % 12 === 1 || month === 1) {
          deposit += annual;
          contributionThisMonth += annual;
        }
        balance += deposit;
        totalContribution += contributionThisMonth;
      }

      const periodicRate = Math.pow(1 + rate / freq, (freq * 1) / 12) - 1;
      let interest = balance * periodicRate;
      let tax = interest * taxR;
      let netInterest = interest - tax;
      balance += netInterest;

      if (timing === "end") {
        if (monthly > 0) {
          deposit += monthly;
          contributionThisMonth += monthly;
        }
        if (month % 12 === 0) {
          deposit += annual;
          contributionThisMonth += annual;
        }
        balance += deposit;
        totalContribution += contributionThisMonth;
      }

      if (inflR > 0) {
        const f = 1 + inflR / 12;
        balance /= f;
        contributionThisMonth /= f;
        interest /= f;
        tax /= f;
      }

      rows.push({
        month,
        year: currentYear,
        startingBalance,
        contributions: contributionThisMonth,
        interest,
        tax,
        endingBalance: balance,
      });
    }

    setAmortizationData(rows);
    return rows;
  }, [getInputValues]);

  const calculate = useCallback(() => {
    const {
      initial,
      annual,
      monthly,
      rate,
      freq,
      timing,
      years,
      months: extraMonths,
      taxR,
      inflR,
    } = getInputValues();

    setCalcTime(
      extraMonths > 0
        ? `${years} years ${extraMonths} months`
        : `${years} years`,
    );

    const totalMonths = years * 12 + extraMonths;
    let balance = initial;
    let totalContribution = initial;
    let totalInterest = 0;
    let totalTaxPaid = 0;
    let totalGrossInterest = 0;

    const labels: string[] = [];
    const principalData: number[] = [];
    const contributionsData: number[] = [];
    const interestData: number[] = [];

    for (let year = 1; year <= years; year++) {
      const yearStartingBalance = balance;
      let yearContributions = 0;
      let yearInterest = 0;
      let yearTax = 0;

      for (let month = 1; month <= 12; month++) {
        const currentMonth = (year - 1) * 12 + month;
        if (currentMonth > totalMonths) break;
        let deposit = 0;
        let contributionThisMonth = 0;

        if (timing === "beginning") {
          if (monthly > 0) {
            deposit += monthly;
            contributionThisMonth += monthly;
          }
          if (month % 12 === 1 || month === 1) {
            deposit += annual;
            contributionThisMonth += annual;
          }
          balance += deposit;
          totalContribution += contributionThisMonth;
          yearContributions += contributionThisMonth;
        }

        const periodicRate = Math.pow(1 + rate / freq, freq / 12) - 1;
        let interest = balance * periodicRate;
        totalGrossInterest += interest;
        yearInterest += interest;
        const tax = interest * taxR;
        const netInterest = interest - tax;
        totalInterest += netInterest;
        totalTaxPaid += tax;
        yearTax += tax;
        balance += netInterest;

        if (timing === "end") {
          if (monthly > 0) {
            deposit += monthly;
            contributionThisMonth += monthly;
          }
          if (month % 12 === 0) {
            deposit += annual;
            contributionThisMonth += annual;
          }
          balance += deposit;
          totalContribution += contributionThisMonth;
          yearContributions += contributionThisMonth;
        }

        if (inflR > 0) {
          const f = 1 + inflR / 12;
          balance /= f;
          totalContribution /= f;
          totalInterest /= f;
          totalTaxPaid /= f;
          totalGrossInterest /= f;
          yearContributions /= f;
          yearInterest /= f;
          yearTax /= f;
        }
      }

      labels.push(`${year}`);
      principalData.push(yearStartingBalance);
      contributionsData.push(yearContributions);
      interestData.push(yearInterest - yearTax);
    }

    if (extraMonths > 0) {
      const remStart = balance;
      let remC = 0,
        remI = 0,
        remT = 0;
      for (let month = 1; month <= extraMonths; month++) {
        let deposit = 0,
          ctm = 0;
        if (timing === "beginning") {
          if (monthly > 0) {
            deposit += monthly;
            ctm += monthly;
          }
          balance += deposit;
          totalContribution += ctm;
          remC += ctm;
        }
        const pr = Math.pow(1 + rate / freq, freq / 12) - 1;
        const interest = balance * pr;
        totalGrossInterest += interest;
        remI += interest;
        const tax = interest * taxR;
        const net = interest - tax;
        totalInterest += net;
        totalTaxPaid += tax;
        remT += tax;
        balance += net;
        if (timing === "end") {
          if (monthly > 0) {
            deposit += monthly;
            ctm += monthly;
          }
          balance += deposit;
          totalContribution += ctm;
          remC += ctm;
        }
        if (inflR > 0) {
          const f = 1 + inflR / 12;
          balance /= f;
          totalContribution /= f;
          totalInterest /= f;
          totalTaxPaid /= f;
          totalGrossInterest /= f;
          remC /= f;
          remI /= f;
          remT /= f;
        }
      }
      labels.push(`${years + 1}`);
      principalData.push(remStart);
      contributionsData.push(remC);
      interestData.push(remI - remT);
    }

    setResults({
      initial,
      contributions: totalContribution - initial,
      interest: totalGrossInterest - totalTaxPaid,
      tax: totalTaxPaid,
      balance,
    });

    createBarChart(labels, principalData, contributionsData, interestData);
    createPieChart(
      initial,
      totalContribution - initial,
      totalGrossInterest - totalTaxPaid,
    );
    generateAmortizationSchedule();
  }, [getInputValues, generateAmortizationSchedule]);

  // ─── Chart creation ───────────────────────────────────────────────────────
  const createBarChart = useCallback(
    (
      labels: string[],
      principalData: number[],
      contributionsData: number[],
      interestData: number[],
    ) => {
      if (!barChartRef.current || !(window as any).Chart) return;
      if (barChartInstance.current) barChartInstance.current.destroy();

      const isDark =
        typeof document !== "undefined" &&
        document.documentElement.classList.contains("dark");
      const textColor = isDark ? "#f8fafc" : "#0f172a";
      const gridColor = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";

      barChartInstance.current = new (window as any).Chart(
        barChartRef.current,
        {
          type: "bar",
          data: {
            labels,
            datasets: [
              {
                label: "Initial Investment",
                data: principalData,
                backgroundColor: "red",
                stack: "investment",
              },
              {
                label: "Contributions",
                data: contributionsData,
                backgroundColor: "blue",
                stack: "investment",
              },
              {
                label: "Interest",
                data: interestData,
                backgroundColor: "green",
                stack: "investment",
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: { position: "top", labels: { color: textColor } },
              title: {
                display: true,
                text: "Compound Interest Growth (Year-wise)",
                color: textColor,
                font: { size: 16, weight: "bold" },
              },
              tooltip: {
                callbacks: {
                  label: (ctx: any) =>
                    `${ctx.dataset.label}: $${ctx.raw.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
                },
              },
            },
            scales: {
              x: {
                stacked: true,
                ticks: { color: textColor },
                grid: { color: gridColor },
              },
              y: {
                stacked: true,
                beginAtZero: true,
                ticks: {
                  color: textColor,
                  callback: (v: number) => "$" + v.toLocaleString(),
                },
                grid: { color: gridColor },
              },
            },
          },
        },
      );
    },
    [],
  );

  const createPieChart = useCallback(
    (initial: number, contributions: number, interest: number) => {
      if (!pieChartRef.current || !(window as any).Chart) return;
      if (pieChartInstance.current) pieChartInstance.current.destroy();

      const isDark =
        typeof document !== "undefined" &&
        document.documentElement.classList.contains("dark");
      const textColor = isDark ? "#f8fafc" : "#0f172a";
      const ChartDataLabels = (window as any).ChartDataLabels;

      pieChartInstance.current = new (window as any).Chart(
        pieChartRef.current,
        {
          type: "pie",
          data: {
            labels: ["Initial Investment", "Contributions", "Total Interest"],
            datasets: [
              {
                data: [initial, contributions, interest],
                backgroundColor: ["red", "blue", "green"],
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: "right",
                labels: { color: textColor, padding: 20 },
              },
              title: {
                display: true,
                text: "Investment Breakdown (%)",
                color: textColor,
                font: { size: 16, weight: "bold" },
                padding: { bottom: 20 },
              },
              tooltip: {
                callbacks: {
                  label: (ctx: any) => {
                    const total = ctx.chart.data.datasets[0].data.reduce(
                      (a: number, b: number) => a + b,
                      0,
                    );
                    const pct = ((ctx.raw / total) * 100).toFixed(1);
                    return `${ctx.label}: $${ctx.raw.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} (${pct}%)`;
                  },
                },
              },
              datalabels: {
                color: "#fff",
                font: { weight: "bold", size: 14 },
                formatter: (value: number, ctx: any) => {
                  const total = ctx.chart.data.datasets[0].data.reduce(
                    (a: number, b: number) => a + b,
                    0,
                  );
                  return ((value / total) * 100).toFixed(1) + "%";
                },
              },
            },
          },
          plugins: ChartDataLabels ? [ChartDataLabels] : [],
        },
      );
    },
    [],
  );

  // ─── Load Chart.js & init ─────────────────────────────────────────────────
  useEffect(() => {
    const loadScript = (src: string): Promise<void> =>
      new Promise((res, rej) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          res();
          return;
        }
        const s = document.createElement("script");
        s.src = src;
        s.onload = () => res();
        s.onerror = rej;
        document.head.appendChild(s);
      });

    Promise.all([
      loadScript(
        "https://cdn.jsdelivr.net/npm/chart.js@4.5.0/dist/chart.umd.min.js",
      ),
      loadScript(
        "https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2/dist/chartjs-plugin-datalabels.min.js",
      ),
    ]).then(() => {
      calculate();
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Re-run calculation whenever inputs change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if ((window as any).Chart) calculate();
  }, [calculate]);

  // ─── Download CSV ─────────────────────────────────────────────────────────
  const downloadExcel = () => {
    let csv =
      "Period,Year,Starting Balance,Contributions,Interest,Tax,Ending Balance\n";
    const data = scheduleView === "annual" ? getAnnualData() : amortizationData;
    data.forEach((item) => {
      const period =
        scheduleView === "monthly"
          ? `Month ${item.month}`
          : `Year ${item.year}`;
      csv += `${period},${item.year},$${formatCurrency(item.startingBalance, true)},$${formatCurrency(item.contributions, true)},$${formatCurrency(item.interest, true)},$${formatCurrency(item.tax, true)},$${formatCurrency(item.endingBalance, true)}\n`;
    });
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "investment_growth_schedule.csv";
    link.click();
  };

  // ─── Annual aggregation ───────────────────────────────────────────────────
  const getAnnualData = useCallback((): AmortizationRow[] => {
    const years = Math.ceil(amortizationData.length / 12);
    const result: AmortizationRow[] = [];
    for (let year = 1; year <= years; year++) {
      const start = (year - 1) * 12;
      const end = Math.min(start + 11, amortizationData.length - 1);
      if (start >= amortizationData.length) break;
      const first = amortizationData[start];
      const last = amortizationData[end];
      let annC = 0,
        annI = 0,
        annT = 0;
      for (let i = start; i <= end; i++) {
        annC += amortizationData[i].contributions;
        annI += amortizationData[i].interest;
        annT += amortizationData[i].tax;
      }
      result.push({
        month: end + 1,
        year,
        startingBalance: first.startingBalance,
        contributions: annC,
        interest: annI,
        tax: annT,
        endingBalance: last.endingBalance,
      });
    }
    return result;
  }, [amortizationData]);

  const tableData =
    scheduleView === "monthly" ? amortizationData : getAnnualData();

  // ─── Currency blur formatter ──────────────────────────────────────────────
  const handleCurrencyBlur =
    (setter: (v: string) => void) =>
    (e: React.FocusEvent<HTMLInputElement>) => {
      const val = parseCurrency(e.target.value);
      setter(formatCurrency(val, e.target.value.includes(".")));
    };

  // ─── Tailwind class helpers ───────────────────────────────────────────────
  const cardBase = `bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300`;
  const inputWrap = `flex items-center bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus-within:border-indigo-500 focus-within:shadow-[0_0_0_3px_rgba(99,102,241,0.1)] transition-all min-h-[52px]`;
  const inputBase = `flex-1 border-none bg-transparent text-sm text-slate-900 dark:text-slate-100 outline-none min-w-0 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none`;
  const labelBase = `font-semibold text-sm text-slate-800 dark:text-slate-100 leading-tight`;
  const suffixBase = `text-slate-400 dark:text-slate-500 text-sm ml-2 min-w-[40px] text-right shrink-0`;

  return (
    <>
      {/* ── Google Fonts ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Inter:wght@300;400;500;600;700;800&display=swap');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
        .font-inter { font-family: 'Inter', sans-serif; }

        /* Result card animation */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .result-card-anim { animation: fadeInUp 0.6s ease-out forwards; opacity: 0; }
        .result-card-anim:nth-child(1) { animation-delay: 0.1s; }
        .result-card-anim:nth-child(2) { animation-delay: 0.2s; }
        .result-card-anim:nth-child(3) { animation-delay: 0.3s; }
        .result-card-anim:nth-child(4) { animation-delay: 0.4s; }
        .result-card-anim:nth-child(5) { animation-delay: 0.5s; }
        /* Scrollbar */
        ::-webkit-scrollbar { width: 10px; height: 10px; }
        ::-webkit-scrollbar-track { background: #e2e8f0; border-radius: 5px; }
        ::-webkit-scrollbar-thumb { background: #6366f1; border-radius: 5px; border: 2px solid #e2e8f0; }
        ::-webkit-scrollbar-thumb:hover { background: #4f46e5; }
        /* select arrow */
        select.custom-select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          background-size: 16px;
          padding-right: 2.5rem !important;
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>

      <div
        className={`font-inter min-h-screen transition-colors duration-300 text-slate-100`}
      >
        {/* ── Main ── */}
        <main className="max-w-[1400px] mx-auto mt-4 px-4 pb-8">
          {/* ── Content grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] gap-6 mb-12">
            {/* ── Calculator Form ── */}
            <div
              className={`${cardBase} transition-shadow hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]`}
            >
              {/* Form grid */}
              <div className="grid grid-cols-1 gap-5 mb-6">
                {/* Initial Investment */}
                <div className="flex flex-col gap-2">
                  <label className={labelBase} htmlFor="principal">
                    Initial Investment*:
                  </label>
                  <div className={inputWrap}>
                    <input
                      id="principal"
                      type="text"
                      placeholder="Enter initial investment"
                      value={principal}
                      onChange={(e) => setPrincipal(e.target.value)}
                      onBlur={handleCurrencyBlur(setPrincipal)}
                      className={inputBase}
                      autoComplete="off"
                    />
                    <span className={suffixBase}>$</span>
                  </div>
                </div>

                {/* Annual Contribution */}
                <div className="flex flex-col gap-2">
                  <label className={labelBase} htmlFor="annualContrib">
                    Annual Contribution:
                  </label>
                  <div className={inputWrap}>
                    <input
                      id="annualContrib"
                      type="text"
                      placeholder="Enter annual contribution"
                      value={annualContrib}
                      onChange={(e) => setAnnualContrib(e.target.value)}
                      onBlur={handleCurrencyBlur(setAnnualContrib)}
                      className={inputBase}
                      autoComplete="off"
                    />
                    <span className={suffixBase}>$</span>
                  </div>
                </div>

                {/* Monthly Contribution */}
                <div className="flex flex-col gap-2">
                  <label className={labelBase} htmlFor="monthlyContrib">
                    Monthly Contribution:
                  </label>
                  <div className={inputWrap}>
                    <input
                      id="monthlyContrib"
                      type="text"
                      placeholder="Enter monthly contribution"
                      value={monthlyContrib}
                      onChange={(e) => setMonthlyContrib(e.target.value)}
                      onBlur={handleCurrencyBlur(setMonthlyContrib)}
                      className={inputBase}
                      autoComplete="off"
                    />
                    <span className={suffixBase}>$</span>
                  </div>
                </div>

                {/* Contribution Timing */}
                <div className="flex flex-col gap-2">
                  <label className={labelBase} htmlFor="contribTiming">
                    Contribution Timing:
                  </label>
                  <select
                    id="contribTiming"
                    value={contribTiming}
                    onChange={(e) =>
                      setContribTiming(e.target.value as "beginning" | "end")
                    }
                    className={`custom-select w-full bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700
                      rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-slate-100 outline-none cursor-pointer
                      focus:border-indigo-500 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)] transition-all min-h-[52px]`}
                  >
                    <option value="beginning">Beginning of Period</option>
                    <option value="end">End of Period</option>
                  </select>
                </div>

                {/* Interest Rate */}
                <div className="flex flex-col gap-2">
                  <label className={labelBase} htmlFor="interestRate">
                    Interest Rate:
                  </label>
                  <div className={inputWrap}>
                    <input
                      id="interestRate"
                      type="text"
                      placeholder="Enter interest rate"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      className={inputBase}
                      autoComplete="off"
                    />
                    <span className={suffixBase}>%</span>
                  </div>
                </div>

                {/* Compounding Frequency */}
                <div className="flex flex-col gap-2">
                  <label className={labelBase} htmlFor="compoundingFrequency">
                    Compound Frequency:
                  </label>
                  <select
                    id="compoundingFrequency"
                    value={compoundingFrequency}
                    onChange={(e) => setCompoundingFrequency(e.target.value)}
                    className={`custom-select w-full bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700
                      rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-slate-100 outline-none cursor-pointer
                      focus:border-indigo-500 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)] transition-all min-h-[52px]`}
                  >
                    <option value="1">Annually</option>
                    <option value="2">Semi-Annually</option>
                    <option value="4">Quarterly</option>
                    <option value="12">Monthly</option>
                    <option value="24">Semi-Monthly</option>
                    <option value="26">Bi-Weekly</option>
                    <option value="52">Weekly</option>
                    <option value="365">Daily</option>
                  </select>
                </div>

                {/* Investment Length */}
                <div className="flex flex-col gap-2">
                  <label className={labelBase}>Investment Length:</label>
                  <div className="grid grid-cols-2 gap-2">
                    <div className={inputWrap}>
                      <input
                        type="text"
                        placeholder="Years"
                        value={investmentYears}
                        onChange={(e) => setInvestmentYears(e.target.value)}
                        className={inputBase}
                        autoComplete="off"
                      />
                      <span className={suffixBase}>yrs</span>
                    </div>
                    <div className={inputWrap}>
                      <input
                        type="text"
                        placeholder="Months"
                        value={investmentMonths}
                        onChange={(e) => setInvestmentMonths(e.target.value)}
                        className={inputBase}
                        autoComplete="off"
                      />
                      <span className={suffixBase}>mos</span>
                    </div>
                  </div>
                </div>

                {/* Tax Rate */}
                <div className="flex flex-col gap-2">
                  <label className={labelBase} htmlFor="taxRate">
                    Tax Rate:
                  </label>
                  <div className={inputWrap}>
                    <input
                      id="taxRate"
                      type="text"
                      placeholder="Enter tax rate"
                      value={taxRate}
                      onChange={(e) => setTaxRate(e.target.value)}
                      className={inputBase}
                      autoComplete="off"
                    />
                    <span className={suffixBase}>%</span>
                  </div>
                </div>

                {/* Inflation Rate */}
                <div className="flex flex-col gap-2">
                  <label className={labelBase} htmlFor="inflationRate">
                    Inflation Rate:
                  </label>
                  <div className={inputWrap}>
                    <input
                      id="inflationRate"
                      type="text"
                      placeholder="Enter inflation rate"
                      value={inflationRate}
                      onChange={(e) => setInflationRate(e.target.value)}
                      className={inputBase}
                      autoComplete="off"
                    />
                    <span className={suffixBase}>%</span>
                  </div>
                </div>
              </div>

              {/* Calculate button */}
              <button
                onClick={calculate}
                className="w-full bg-gradient-to-br from-indigo-500 to-indigo-700 text-white border-none
                  py-4 px-8 rounded-xl text-base font-semibold cursor-pointer
                  flex items-center justify-center gap-2 transition-all duration-300 min-h-[56px]
                  hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(99,102,241,0.3)]"
              >
                <i className="fas fa-calculator" />
                CALCULATE
              </button>
            </div>

            {/* ── Results ── */}
            <div
              className={`bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.3)] overflow-hidden`}
            >
              {/* Results header */}
              <div className="flex flex-col sm:items-center sm:justify-between gap-4 mb-6">
                <h3 className="text-[clamp(1.25rem,4vw,1.5rem)] font-bold text-slate-900 dark:text-slate-100">
                  Investment Growth Results
                </h3>
                <div className="flex gap-3 flex-wrap">
                  <button
                    onClick={downloadExcel}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer
                      bg-purple-100 dark:bg-purple-950/40 text-indigo-600 dark:text-indigo-400
                      transition-all hover:-translate-y-0.5 min-h-[40px]"
                  >
                    <i className="fas fa-file-excel" /> Excel
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer
                      bg-purple-100 dark:bg-purple-950/40 text-indigo-600 dark:text-indigo-400
                      transition-all hover:-translate-y-0.5 min-h-[40px]"
                  >
                    <i className="fas fa-file-pdf" /> PDF
                  </button>
                </div>
              </div>

              {/* Investment Duration */}
              <div className="mb-6 p-4 bg-indigo-50 dark:bg-indigo-950/30 rounded-xl">
                <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                  Investment Duration
                </div>
                <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                  {calcTime}
                </div>
              </div>

              {/* Results grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  {
                    label: "Initial Principal",
                    value: `$${formatCurrency(results.initial, true)}`,
                    border: "border-indigo-500",
                  },
                  {
                    label: "Total Contributions",
                    value: `$${formatCurrency(results.contributions, true)}`,
                    border: "border-indigo-500",
                  },
                  {
                    label: "Total Interest",
                    value: `$${formatCurrency(results.interest, true)}`,
                    border: "border-indigo-500",
                  },
                  {
                    label: "Estimated Tax",
                    value: `$${formatCurrency(results.tax, true)}`,
                    border: "border-indigo-500",
                  },
                  {
                    label: "Ending Balance",
                    value: `$${formatCurrency(results.balance, true)}`,
                    border: "border-indigo-500",
                  },
                ].map(({ label, value, border }) => (
                  <div
                    key={label}
                    className={`result-card-anim bg-white dark:bg-slate-900 rounded-xl p-4 sm:p-6
                      shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-l-4 ${border}
                      transition-all duration-300 hover:-translate-y-1 hover:shadow-xl w-full overflow-hidden`}
                  >
                    <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                      {label}
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 font-mono break-all">
                      {value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Charts */}
              <div className="mb-10">
                <h4 className="text-base font-semibold mb-5 text-slate-800 dark:text-slate-200 text-center">
                  Investment Breakdown
                </h4>
                <div className="flex flex-wrap gap-10 justify-center">
                  <div className="flex-1 min-w-[300px] max-w-[500px]">
                    <canvas
                      ref={barChartRef}
                      style={{ width: "400px", height: "250px" }}
                    />
                  </div>
                  <div className="flex-1 min-w-[250px] max-w-[370px]">
                    <canvas
                      ref={pieChartRef}
                      style={{ width: "100%", maxHeight: "250px" }}
                    />
                  </div>
                </div>
              </div>

              {/* Schedule section */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                  <h4 className="text-base font-semibold text-slate-800 dark:text-slate-200">
                    Investment Growth Schedule
                  </h4>
                  <div className="flex gap-2">
                    {(["monthly", "annual"] as const).map((view) => (
                      <button
                        key={view}
                        onClick={() => setScheduleView(view)}
                        className={`px-4 py-2 rounded-lg border-2 text-sm font-medium cursor-pointer transition-all min-h-[40px] capitalize
                          ${
                            scheduleView === view
                              ? "bg-indigo-500 text-white border-indigo-500"
                              : `border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 hover:border-indigo-300`
                          }`}
                      >
                        {view.charAt(0).toUpperCase() + view.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <div
                  className="overflow-x-auto max-h-[600px] overflow-y-auto mt-1 rounded-lg border border-slate-200 dark:border-slate-700
                  [-webkit-overflow-scrolling:touch]"
                >
                  <table className="w-full border-collapse min-w-[700px] text-sm">
                    <thead>
                      <tr>
                        {[
                          "Period",
                          "Year",
                          "Starting Balance",
                          "Contributions",
                          "Interest",
                          "Tax",
                          "Ending Balance",
                        ].map((h) => (
                          <th
                            key={h}
                            className="sticky top-0 bg-indigo-700 dark:bg-slate-900 text-white px-3.5 py-3.5
                              text-left font-semibold border-r border-slate-300/30 last:border-r-0
                              whitespace-nowrap text-xs tracking-wide z-10"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((item, i) => (
                        <tr
                          key={`${item.month}-${item.year}-${i}`}
                          className="hover:bg-indigo-50 dark:hover:bg-indigo-950/20 transition-colors"
                        >
                          <td className="px-3.5 py-3.5 border-r border-b border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-300 whitespace-nowrap">
                            {scheduleView === "monthly"
                              ? `Month ${item.month}`
                              : `Year ${item.year}`}
                          </td>
                          <td className="px-3.5 py-3.5 border-r border-b border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-300">
                            {item.year}
                          </td>
                          <td className="px-3.5 py-3.5 border-r border-b border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-300 whitespace-nowrap">
                            ${formatCurrency(item.startingBalance, true)}
                          </td>
                          <td className="px-3.5 py-3.5 border-r border-b border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-300 whitespace-nowrap">
                            ${formatCurrency(item.contributions, true)}
                          </td>
                          <td className="px-3.5 py-3.5 border-r border-b border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-300 whitespace-nowrap">
                            ${formatCurrency(item.interest, true)}
                          </td>
                          <td className="px-3.5 py-3.5 border-r border-b border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-300 whitespace-nowrap">
                            ${formatCurrency(item.tax, true)}
                          </td>
                          <td className="px-3.5 py-3.5 border-b border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-300 whitespace-nowrap">
                            ${formatCurrency(item.endingBalance, true)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
