"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { useCurrency } from "@/hooks/useCurrency";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmtNum(n: number, dp = 2): string {
  if (!isFinite(n) || isNaN(n)) return "0.00";
  return n.toLocaleString("en-US", {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  });
}

function fmtPct(n: number, dp = 1): string {
  if (!isFinite(n) || isNaN(n)) return "0%";
  return n.toFixed(dp) + "%";
}

// ─── Preset Discount Percentages ──────────────────────────────────────────────

const QUICK_DISCOUNTS = [10, 15, 20, 25, 30, 40, 50, 70];

// ─── Sub-Components ───────────────────────────────────────────────────────────

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm transition-all duration-200 hover:shadow-md ${className}`}
    >
      {children}
    </div>
  );
}

function CardHead({
  icon,
  title,
  subtitle,
  badge,
  color = "indigo",
}: {
  icon: string;
  title: string;
  subtitle?: string;
  badge?: string;
  color?: "indigo" | "emerald" | "amber" | "violet" | "rose" | "blue";
}) {
  const colors = {
    indigo:
      "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border-indigo-100 dark:border-indigo-800/50",
    emerald:
      "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800/50",
    amber:
      "bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-800/50",
    violet:
      "bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 border-violet-100 dark:border-violet-800/50",
    rose:
      "bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border-rose-100 dark:border-rose-800/50",
    blue:
      "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-800/50",
  };

  return (
    <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-800/70">
      <div className="flex items-center gap-3">
        <span
          className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm border ${colors[color]}`}
        >
          <i className={`fas ${icon}`} aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-tight">
            {title}
          </h3>
          {subtitle && (
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      {badge && (
        <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
          {badge}
        </span>
      )}
    </div>
  );
}

function InputField({
  id,
  label,
  sub,
  value,
  onChange,
  prefix,
  suffix,
  min = 0,
  step = 1,
  error,
}: {
  id: string;
  label: string;
  sub?: string;
  value: number | "";
  onChange: (v: number | "") => void;
  prefix?: string;
  suffix?: string;
  min?: number;
  step?: number;
  error?: string;
}) {
  const [local, setLocal] = useState(value === "" ? "" : String(value));

  useEffect(() => {
    setLocal(value === "" ? "" : String(value));
  }, [value]);

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="text-xs font-semibold text-slate-700 dark:text-slate-200"
        >
          {label}
        </label>
        {sub && (
          <span className="text-[11px] text-slate-400 dark:text-slate-400">
            {sub}
          </span>
        )}
      </div>

      <div className="relative group">
        {prefix && (
          <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-sm font-semibold text-slate-400 dark:text-slate-400 group-focus-within:text-blue-500 transition-colors">
            {prefix}
          </span>
        )}
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={min}
          step={step}
          value={local}
          onChange={(e) => {
            const text = e.target.value;
            setLocal(text);
            if (text === "") {
              onChange("");
            } else {
              const v = parseFloat(text);
              if (!isNaN(v)) onChange(v);
            }
          }}
          onBlur={() => {
            if (local === "") {
              onChange(min);
              setLocal(String(min));
              return;
            }
            const v = parseFloat(local);
            if (!isNaN(v)) {
              onChange(v);
              setLocal(String(v));
            } else {
              setLocal(value === "" ? "" : String(value));
            }
          }}
          className={`w-full h-11 rounded-xl border ${
            error
              ? "border-rose-300 dark:border-rose-700 focus:ring-rose-500/20 focus:border-rose-500"
              : "border-slate-200 dark:border-slate-700/80 focus:ring-blue-500/20 focus:border-blue-500"
          } bg-white dark:bg-slate-900 text-sm font-semibold text-slate-900 dark:text-slate-100 placeholder-slate-400 outline-none transition-all focus:ring-4 hover:border-slate-300 dark:hover:border-slate-600 ${
            prefix ? "pl-8" : "pl-3.5"
          } ${suffix ? "pr-12" : "pr-3.5"}`}
        />
        {suffix && (
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-xs font-medium text-slate-400 dark:text-slate-400">
            {suffix}
          </span>
        )}
      </div>

      {error && (
        <p className="text-[11px] text-rose-500 dark:text-rose-400 flex items-center gap-1 pt-0.5">
          <i className="fas fa-circle-exclamation text-[10px]" />
          {error}
        </p>
      )}
    </div>
  );
}

// ─── Visual Price Breakdown Bar ───────────────────────────────────────────────

function PriceBreakdownBar({
  originalPrice,
  finalPrice,
  discountAmount,
  taxAmount,
  symbol,
}: {
  originalPrice: number;
  finalPrice: number;
  discountAmount: number;
  taxAmount: number;
  symbol: string;
}) {
  const base = Math.max(originalPrice, 1);
  const payPercent = Math.min(100, Math.max(0, ((finalPrice - taxAmount) / base) * 100));
  const savePercent = Math.min(100, Math.max(0, (discountAmount / base) * 100));
  const taxPercent = taxAmount > 0 ? (taxAmount / base) * 100 : 0;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs font-semibold">
        <span className="text-slate-600 dark:text-slate-400">Price Structure</span>
        <span className="text-slate-900 dark:text-slate-100 font-mono">
          Original: {symbol}{fmtNum(originalPrice)}
        </span>
      </div>

      {/* Progress Bar Container */}
      <div className="h-4 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden flex shadow-inner">
        <div
          style={{ width: `${payPercent}%` }}
          className="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-300 relative group"
          title={`You Pay: ${fmtPct(payPercent)}`}
        />
        {taxPercent > 0 && (
          <div
            style={{ width: `${taxPercent}%` }}
            className="h-full bg-amber-500 transition-all duration-300"
            title={`Sales Tax: ${symbol}${fmtNum(taxAmount)}`}
          />
        )}
        <div
          style={{ width: `${savePercent}%` }}
          className="h-full bg-emerald-500 transition-all duration-300"
          title={`Discount Savings: ${fmtPct(savePercent)}`}
        />
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-4 text-[11px] pt-1">
        <span className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-500" />
          You Pay ({fmtPct(payPercent)})
        </span>
        <span className="flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          Discount Savings ({fmtPct(savePercent)})
        </span>
        {taxAmount > 0 && (
          <span className="flex items-center gap-1.5 font-medium text-amber-600 dark:text-amber-400">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            Sales Tax ({symbol}{fmtNum(taxAmount)})
          </span>
        )}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function DiscountCalculator() {
  const { symbol, fmt } = useCurrency();

  // Mode Selection: "standard" | "bogo" | "reverse"
  const [mode, setMode] = useState<"standard" | "bogo" | "reverse">("standard");

  // Mode 1: Standard / Stacked Inputs
  const [originalPrice, setOriginalPrice] = useState<number>(100);
  const [discountType, setDiscountType] = useState<"percentage" | "fixed">("percentage");
  const [discountValue, setDiscountValue] = useState<number>(20);
  const [hasExtraDiscount, setHasExtraDiscount] = useState<boolean>(false);
  const [extraDiscountType, setExtraDiscountType] = useState<"percentage" | "fixed">("percentage");
  const [extraDiscountValue, setExtraDiscountValue] = useState<number>(10);
  const [salesTaxPercent, setSalesTaxPercent] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);

  // Mode 2: BOGO Inputs
  const [bogoBuyQty, setBogoBuyQty] = useState<number>(1);
  const [bogoGetQty, setBogoGetQty] = useState<number>(1);
  const [bogoGetDiscountPercent, setBogoGetDiscountPercent] = useState<number>(100); // 100 = Free, 50 = Half Off
  const [bogoUnitPrice, setBogoUnitPrice] = useState<number>(40);

  // Mode 3: Reverse Inputs
  const [reverseMode, setReverseMode] = useState<"findOriginal" | "findPercent">("findOriginal");
  const [revFinalPrice, setRevFinalPrice] = useState<number>(80);
  const [revDiscountPercent, setRevDiscountPercent] = useState<number>(20);
  const [revOrigPrice, setRevOrigPrice] = useState<number>(100);

  // Toast feedback state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  }, []);

  // Reset function
  const handleReset = useCallback(() => {
    setOriginalPrice(100);
    setDiscountType("percentage");
    setDiscountValue(20);
    setHasExtraDiscount(false);
    setExtraDiscountType("percentage");
    setExtraDiscountValue(10);
    setSalesTaxPercent(0);
    setQuantity(1);
    setBogoBuyQty(1);
    setBogoGetQty(1);
    setBogoGetDiscountPercent(100);
    setBogoUnitPrice(40);
    setRevFinalPrice(80);
    setRevDiscountPercent(20);
    setRevOrigPrice(100);
    showToast("Calculator reset to defaults");
  }, [showToast]);

  // Calculations: Mode 1 (Standard / Stacked)
  const standardCalc = useMemo(() => {
    const qty = Math.max(1, quantity);
    const orig = Math.max(0, originalPrice);

    // Primary discount
    let disc1 = 0;
    if (discountType === "percentage") {
      disc1 = orig * (Math.min(100, Math.max(0, discountValue)) / 100);
    } else {
      disc1 = Math.min(orig, Math.max(0, discountValue));
    }

    const priceAfter1 = Math.max(0, orig - disc1);

    // Extra stacked discount (applied on discounted price)
    let disc2 = 0;
    if (hasExtraDiscount) {
      if (extraDiscountType === "percentage") {
        disc2 = priceAfter1 * (Math.min(100, Math.max(0, extraDiscountValue)) / 100);
      } else {
        disc2 = Math.min(priceAfter1, Math.max(0, extraDiscountValue));
      }
    }

    const totalItemDiscount = disc1 + disc2;
    const finalItemPricePreTax = Math.max(0, orig - totalItemDiscount);

    // Sales Tax
    const taxRate = Math.max(0, salesTaxPercent);
    const itemTax = finalItemPricePreTax * (taxRate / 100);
    const finalItemPrice = finalItemPricePreTax + itemTax;

    // Multi-unit totals
    const totalOriginal = orig * qty;
    const totalDiscount = totalItemDiscount * qty;
    const totalPreTax = finalItemPricePreTax * qty;
    const totalTax = itemTax * qty;
    const totalFinal = finalItemPrice * qty;
    const savingsPercent = totalOriginal > 0 ? (totalDiscount / totalOriginal) * 100 : 0;

    return {
      disc1,
      disc2,
      totalItemDiscount,
      finalItemPrice,
      itemTax,
      totalOriginal,
      totalDiscount,
      totalPreTax,
      totalTax,
      totalFinal,
      savingsPercent,
      qty,
    };
  }, [
    originalPrice,
    discountType,
    discountValue,
    hasExtraDiscount,
    extraDiscountType,
    extraDiscountValue,
    salesTaxPercent,
    quantity,
  ]);

  // Calculations: Mode 2 (BOGO)
  const bogoCalc = useMemo(() => {
    const p = Math.max(0, bogoUnitPrice);
    const buy = Math.max(1, bogoBuyQty);
    const get = Math.max(1, bogoGetQty);
    const discPct = Math.min(100, Math.max(0, bogoGetDiscountPercent));

    const totalItems = buy + get;
    const fullPriceTotal = totalItems * p;

    // You pay: 'buy' items at full price + 'get' items at discounted price
    const discountedItemPrice = p * (1 - discPct / 100);
    const totalPaid = buy * p + get * discountedItemPrice;
    const totalSavings = fullPriceTotal - totalPaid;
    const effectiveUnitPrice = totalItems > 0 ? totalPaid / totalItems : 0;
    const overallDiscountPercent =
      fullPriceTotal > 0 ? (totalSavings / fullPriceTotal) * 100 : 0;

    return {
      totalItems,
      fullPriceTotal,
      totalPaid,
      totalSavings,
      effectiveUnitPrice,
      overallDiscountPercent,
    };
  }, [bogoUnitPrice, bogoBuyQty, bogoGetQty, bogoGetDiscountPercent]);

  // Calculations: Mode 3 (Reverse)
  const reverseCalc = useMemo(() => {
    if (reverseMode === "findOriginal") {
      const sale = Math.max(0, revFinalPrice);
      const disc = Math.min(99.99, Math.max(0, revDiscountPercent));
      const orig = disc < 100 ? sale / (1 - disc / 100) : sale;
      const saved = orig - sale;
      return {
        calculatedOriginal: orig,
        calculatedSavings: saved,
      };
    } else {
      const orig = Math.max(0, revOrigPrice);
      const sale = Math.max(0, revFinalPrice);
      const saved = Math.max(0, orig - sale);
      const percent = orig > 0 ? (saved / orig) * 100 : 0;
      return {
        calculatedOriginal: orig,
        calculatedSavings: saved,
        calculatedPercent: percent,
      };
    }
  }, [reverseMode, revFinalPrice, revDiscountPercent, revOrigPrice]);

  // Copy Summary Handler
  const handleCopySummary = useCallback(() => {
    let text = "";
    if (mode === "standard") {
      text = [
        "=== DISCOUNT CALCULATION SUMMARY ===",
        `Original Price: ${fmt(standardCalc.totalOriginal)} (${standardCalc.qty} item${standardCalc.qty > 1 ? "s" : ""})`,
        `Discount Applied: ${discountValue}${discountType === "percentage" ? "%" : symbol}`,
        ...(hasExtraDiscount
          ? [`Extra Coupon: ${extraDiscountValue}${extraDiscountType === "percentage" ? "%" : symbol}`]
          : []),
        `Total Savings: ${fmt(standardCalc.totalDiscount)} (${fmtPct(standardCalc.savingsPercent)})`,
        ...(salesTaxPercent > 0 ? [`Sales Tax (${salesTaxPercent}%): ${fmt(standardCalc.totalTax)}`] : []),
        `Final Out-of-Pocket Price: ${fmt(standardCalc.totalFinal)}`,
        ...(standardCalc.qty > 1 ? [`Per Item Price: ${fmt(standardCalc.finalItemPrice)}`] : []),
        "Calculated on allcalculator.net",
      ].join("\n");
    } else if (mode === "bogo") {
      text = [
        "=== BOGO DEAL CALCULATION ===",
        `Deal: Buy ${bogoBuyQty}, Get ${bogoGetQty} at ${bogoGetDiscountPercent}% Off`,
        `Unit Price: ${fmt(bogoUnitPrice)}`,
        `Total Items: ${bogoCalc.totalItems}`,
        `Total Original Value: ${fmt(bogoCalc.fullPriceTotal)}`,
        `You Pay: ${fmt(bogoCalc.totalPaid)}`,
        `You Save: ${fmt(bogoCalc.totalSavings)} (${fmtPct(bogoCalc.overallDiscountPercent)})`,
        `Effective Price Per Item: ${fmt(bogoCalc.effectiveUnitPrice)}`,
        "Calculated on allcalculator.net",
      ].join("\n");
    } else {
      text = [
        "=== REVERSE DISCOUNT CALCULATION ===",
        `Sale Price: ${fmt(revFinalPrice)}`,
        `Calculated Original Price: ${fmt(reverseCalc.calculatedOriginal)}`,
        `Calculated Savings: ${fmt(reverseCalc.calculatedSavings)}`,
        "Calculated on allcalculator.net",
      ].join("\n");
    }

    navigator.clipboard.writeText(text).then(
      () => showToast("Summary copied to clipboard!"),
      () => showToast("Failed to copy.")
    );
  }, [
    mode,
    standardCalc,
    discountValue,
    discountType,
    hasExtraDiscount,
    extraDiscountValue,
    extraDiscountType,
    salesTaxPercent,
    bogoBuyQty,
    bogoGetQty,
    bogoGetDiscountPercent,
    bogoUnitPrice,
    bogoCalc,
    revFinalPrice,
    reverseCalc,
    fmt,
    symbol,
    showToast,
  ]);

  // Comparison matrix for common discount tiers
  const discountTiers = useMemo(() => {
    const orig = Math.max(0, originalPrice);
    return [10, 20, 25, 30, 40, 50, 60, 75].map((pct) => {
      const saved = orig * (pct / 100);
      const finalP = orig - saved;
      return {
        pct,
        saved,
        finalP,
        isCurrent: discountType === "percentage" && discountValue === pct,
      };
    });
  }, [originalPrice, discountType, discountValue]);

  return (
    <div className="w-full">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold shadow-2xl animate-fade-in">
          <i className="fas fa-check-circle text-emerald-400 dark:text-emerald-600" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ── Mode Selection Navigation Bar ────────────────────────────────────── */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80">
        <div className="flex flex-wrap items-center gap-1">
          <button
            onClick={() => setMode("standard")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              mode === "standard"
                ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            <i className="fas fa-percent text-xs" />
            <span>Standard &amp; Stacked Discount</span>
          </button>

          <button
            onClick={() => setMode("bogo")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              mode === "bogo"
                ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            <i className="fas fa-tags text-xs" />
            <span>BOGO &amp; Multi-Buy Deal</span>
          </button>

          <button
            onClick={() => setMode("reverse")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              mode === "reverse"
                ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            <i className="fas fa-rotate text-xs" />
            <span>Reverse Discount Finder</span>
          </button>
        </div>

        <button
          onClick={handleReset}
          className="text-xs font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 px-3 py-1.5 flex items-center gap-1.5 transition"
        >
          <i className="fas fa-rotate-left text-[11px]" />
          Reset
        </button>
      </div>

      {/* ── Main Workspace Grid ──────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* ── LEFT COLUMN: Inputs (7 Cols) ─────────────────────────────────────── */}
        <div className="lg:col-span-7 space-y-5">
          {/* MODE 1: Standard & Stacked Discount */}
          {mode === "standard" && (
            <>
              <Card>
                <CardHead
                  icon="fa-tag"
                  title="Price &amp; Primary Discount"
                  subtitle="Enter the original item price and discount rate"
                  color="blue"
                  badge="Instant"
                />

                <div className="p-6 space-y-6">
                  {/* Original Price */}
                  <div>
                    <InputField
                      id="originalPrice"
                      label="Original Price"
                      sub="Pre-discount retail price"
                      value={originalPrice}
                      onChange={(v) => setOriginalPrice(typeof v === "number" ? v : 0)}
                      prefix={symbol}
                      min={0}
                      step={0.5}
                    />

                    {/* Quick percentage pills */}
                    <div className="mt-3">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1.5">
                        Quick Discount Presets
                      </span>
                      <div className="flex flex-wrap items-center gap-1.5">
                        {QUICK_DISCOUNTS.map((pct) => (
                          <button
                            key={pct}
                            type="button"
                            onClick={() => {
                              setDiscountType("percentage");
                              setDiscountValue(pct);
                            }}
                            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition ${
                              discountType === "percentage" && discountValue === pct
                                ? "bg-blue-600 text-white shadow-sm"
                                : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                            }`}
                          >
                            {pct}% Off
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Discount Type Toggle */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-2">
                      Discount Format
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setDiscountType("percentage")}
                        className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold border transition-all ${
                          discountType === "percentage"
                            ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border-blue-300 dark:border-blue-700 shadow-sm"
                            : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-slate-300"
                        }`}
                      >
                        <i className="fas fa-percent text-xs" />
                        <span>Percentage (%) Off</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setDiscountType("fixed")}
                        className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold border transition-all ${
                          discountType === "fixed"
                            ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border-blue-300 dark:border-blue-700 shadow-sm"
                            : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-slate-300"
                        }`}
                      >
                        <i className="fas fa-dollar-sign text-xs" />
                        <span>Fixed Amount ({symbol}) Off</span>
                      </button>
                    </div>
                  </div>

                  {/* Discount Value with Interactive Slider */}
                  <div>
                    <InputField
                      id="discountValue"
                      label={`Discount ${discountType === "percentage" ? "Rate" : "Amount"}`}
                      value={discountValue}
                      onChange={(v) => setDiscountValue(typeof v === "number" ? v : 0)}
                      prefix={discountType === "fixed" ? symbol : undefined}
                      suffix={discountType === "percentage" ? "%" : undefined}
                      min={0}
                      step={discountType === "percentage" ? 1 : 0.5}
                    />

                    {discountType === "percentage" && (
                      <div className="pt-2 px-1">
                        <input
                          type="range"
                          min={0}
                          max={100}
                          step={1}
                          value={Math.min(100, Math.max(0, discountValue))}
                          onChange={(e) => setDiscountValue(parseFloat(e.target.value))}
                          className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none"
                        />
                        <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                          <span>0%</span>
                          <span>25%</span>
                          <span>50%</span>
                          <span>75%</span>
                          <span>100%</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>

              {/* Extra Discounts & Tax (Stacking Card) */}
              <Card>
                <CardHead
                  icon="fa-layer-group"
                  title="Coupons, Taxes &amp; Quantity"
                  subtitle="Stack extra coupon codes, sales tax, or purchase multiple units"
                  color="emerald"
                />

                <div className="p-6 space-y-5">
                  {/* Stacked Extra Discount Toggle */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                          Stack Additional Coupon / Discount
                        </div>
                        <div className="text-[11px] text-slate-400">
                          e.g. Extra 10% VIP coupon applied on sale price
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={hasExtraDiscount}
                          onChange={(e) => setHasExtraDiscount(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-10 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500" />
                      </label>
                    </div>

                    {hasExtraDiscount && (
                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                        <div className="flex gap-2 text-xs">
                          <button
                            type="button"
                            onClick={() => setExtraDiscountType("percentage")}
                            className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                              extraDiscountType === "percentage"
                                ? "bg-emerald-600 text-white"
                                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                            }`}
                          >
                            Extra % Off
                          </button>
                          <button
                            type="button"
                            onClick={() => setExtraDiscountType("fixed")}
                            className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                              extraDiscountType === "fixed"
                                ? "bg-emerald-600 text-white"
                                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                            }`}
                          >
                            Extra {symbol} Off
                          </button>
                        </div>
                        <InputField
                          id="extraDiscountValue"
                          label="Additional Coupon Value"
                          value={extraDiscountValue}
                          onChange={(v) => setExtraDiscountValue(typeof v === "number" ? v : 0)}
                          prefix={extraDiscountType === "fixed" ? symbol : undefined}
                          suffix={extraDiscountType === "percentage" ? "%" : undefined}
                          min={0}
                          step={1}
                        />
                      </div>
                    )}
                  </div>

                  {/* Quantity & Tax Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <InputField
                      id="quantity"
                      label="Quantity"
                      sub="Number of items"
                      value={quantity}
                      onChange={(v) => setQuantity(typeof v === "number" ? v : 1)}
                      min={1}
                      step={1}
                    />

                    <InputField
                      id="salesTaxPercent"
                      label="Sales Tax Rate (%)"
                      sub="Applied to discounted price"
                      value={salesTaxPercent}
                      onChange={(v) => setSalesTaxPercent(typeof v === "number" ? v : 0)}
                      suffix="%"
                      min={0}
                      step={0.25}
                    />
                  </div>
                </div>
              </Card>
            </>
          )}

          {/* MODE 2: BOGO Deal */}
          {mode === "bogo" && (
            <Card>
              <CardHead
                icon="fa-basket-shopping"
                title="BOGO &amp; Multi-Buy Deal Calculator"
                subtitle="Evaluate Buy X, Get Y Free or at a discount"
                color="violet"
              />

              <div className="p-6 space-y-5">
                <InputField
                  id="bogoUnitPrice"
                  label="Item Regular Unit Price"
                  value={bogoUnitPrice}
                  onChange={(v) => setBogoUnitPrice(typeof v === "number" ? v : 0)}
                  prefix={symbol}
                  min={0}
                  step={0.5}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField
                    id="bogoBuyQty"
                    label="Buy Quantity (Full Price)"
                    value={bogoBuyQty}
                    onChange={(v) => setBogoBuyQty(typeof v === "number" ? v : 1)}
                    min={1}
                    step={1}
                  />

                  <InputField
                    id="bogoGetQty"
                    label="Get Quantity (Discounted)"
                    value={bogoGetQty}
                    onChange={(v) => setBogoGetQty(typeof v === "number" ? v : 1)}
                    min={1}
                    step={1}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-2">
                    Discount on the &quot;Get&quot; Item(s)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: "100% Off (Free!)", val: 100 },
                      { label: "50% Off (Half Price)", val: 50 },
                      { label: "25% Off", val: 25 },
                      { label: "30% Off", val: 30 },
                    ].map((opt) => (
                      <button
                        key={opt.val}
                        type="button"
                        onClick={() => setBogoGetDiscountPercent(opt.val)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                          bogoGetDiscountPercent === opt.val
                            ? "bg-violet-600 text-white shadow-sm"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* MODE 3: Reverse Discount Finder */}
          {mode === "reverse" && (
            <Card>
              <CardHead
                icon="fa-calculator"
                title="Reverse Discount Calculator"
                subtitle="Calculate the original price or determine the discount percentage"
                color="amber"
              />

              <div className="p-6 space-y-5">
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <button
                    type="button"
                    onClick={() => setReverseMode("findOriginal")}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition ${
                      reverseMode === "findOriginal"
                        ? "bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-700"
                        : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700"
                    }`}
                  >
                    Find Original Price
                  </button>

                  <button
                    type="button"
                    onClick={() => setReverseMode("findPercent")}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition ${
                      reverseMode === "findPercent"
                        ? "bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-700"
                        : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700"
                    }`}
                  >
                    Find Discount %
                  </button>
                </div>

                {reverseMode === "findOriginal" ? (
                  <>
                    <InputField
                      id="revFinalPrice"
                      label="Sale / Final Price Paid"
                      value={revFinalPrice}
                      onChange={(v) => setRevFinalPrice(typeof v === "number" ? v : 0)}
                      prefix={symbol}
                      min={0}
                    />

                    <InputField
                      id="revDiscountPercent"
                      label="Discount Percentage Applied"
                      value={revDiscountPercent}
                      onChange={(v) => setRevDiscountPercent(typeof v === "number" ? v : 0)}
                      suffix="%"
                      min={0}
                    />
                  </>
                ) : (
                  <>
                    <InputField
                      id="revOrigPrice"
                      label="Original Starting Price"
                      value={revOrigPrice}
                      onChange={(v) => setRevOrigPrice(typeof v === "number" ? v : 0)}
                      prefix={symbol}
                      min={0}
                    />

                    <InputField
                      id="revFinalPrice2"
                      label="Final Sale Price"
                      value={revFinalPrice}
                      onChange={(v) => setRevFinalPrice(typeof v === "number" ? v : 0)}
                      prefix={symbol}
                      min={0}
                    />
                  </>
                )}
              </div>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition"
            >
              <i className="fas fa-rotate-left" />
              Reset Defaults
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopySummary}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 transition"
              >
                <i className="fas fa-copy" />
                Copy Summary
              </button>
              <button
                onClick={() => window.print()}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition"
              >
                <i className="fas fa-print" />
                Print
              </button>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN: Results & Breakdowns (5 Cols) ───────────────────────── */}
        <div className="lg:col-span-5 space-y-5">
          {/* Main Hero Results Gradient Card */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-6 text-white shadow-xl shadow-blue-500/10">
            <div className="absolute top-0 right-0 -mt-6 -mr-6 w-36 h-36 rounded-full bg-white/10 blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-widest text-blue-200">
                  {mode === "standard"
                    ? "Final Price to Pay"
                    : mode === "bogo"
                    ? "Total Deal Cost"
                    : reverseMode === "findOriginal"
                    ? "Calculated Original Price"
                    : "Effective Discount %"}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white/15 text-white backdrop-blur-sm">
                  {mode === "standard"
                    ? `${fmtPct(standardCalc.savingsPercent)} Total Savings`
                    : mode === "bogo"
                    ? `${fmtPct(bogoCalc.overallDiscountPercent)} Savings`
                    : "Reverse Calculation"}
                </span>
              </div>

              {/* Primary Large Number */}
              <div className="mt-4">
                <div className="text-4xl sm:text-5xl font-extrabold tracking-tight font-mono tabular-nums">
                  {mode === "standard"
                    ? `${symbol}${fmtNum(standardCalc.totalFinal)}`
                    : mode === "bogo"
                    ? `${symbol}${fmtNum(bogoCalc.totalPaid)}`
                    : reverseMode === "findOriginal"
                    ? `${symbol}${fmtNum(reverseCalc.calculatedOriginal)}`
                    : fmtPct(reverseCalc.calculatedPercent ?? 0)}
                </div>
                <div className="text-blue-100 text-xs font-medium mt-1">
                  {mode === "standard" && standardCalc.qty > 1
                    ? `${symbol}${fmtNum(standardCalc.finalItemPrice)} per item across ${standardCalc.qty} units`
                    : mode === "bogo"
                    ? `${symbol}${fmtNum(bogoCalc.effectiveUnitPrice)} effective price across ${bogoCalc.totalItems} items`
                    : "Calculated instantly"}
                </div>
              </div>

              {/* Secondary Metrics */}
              <div className="mt-6 pt-5 border-t border-white/15 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-200 block">
                    Total Savings
                  </span>
                  <span className="text-2xl font-bold font-mono tabular-nums text-emerald-300">
                    {mode === "standard"
                      ? `${symbol}${fmtNum(standardCalc.totalDiscount)}`
                      : mode === "bogo"
                      ? `${symbol}${fmtNum(bogoCalc.totalSavings)}`
                      : `${symbol}${fmtNum(reverseCalc.calculatedSavings)}`}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-200 block">
                    Original Value
                  </span>
                  <span className="text-2xl font-bold font-mono tabular-nums text-slate-200 line-through">
                    {mode === "standard"
                      ? `${symbol}${fmtNum(standardCalc.totalOriginal)}`
                      : mode === "bogo"
                      ? `${symbol}${fmtNum(bogoCalc.fullPriceTotal)}`
                      : reverseMode === "findOriginal"
                      ? `${symbol}${fmtNum(reverseCalc.calculatedOriginal)}`
                      : `${symbol}${fmtNum(revOrigPrice)}`}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Price Breakdown Visual Bar (Standard Mode) */}
          {mode === "standard" && (
            <Card>
              <div className="p-5">
                <PriceBreakdownBar
                  originalPrice={standardCalc.totalOriginal}
                  finalPrice={standardCalc.totalFinal}
                  discountAmount={standardCalc.totalDiscount}
                  taxAmount={standardCalc.totalTax}
                  symbol={symbol}
                />
              </div>
            </Card>
          )}

          {/* Detailed Price Breakdown Table */}
          <Card>
            <CardHead
              icon="fa-receipt"
              title="Receipt Breakdown"
              subtitle="Itemized discount calculation"
              color="indigo"
            />
            <div className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
              {mode === "standard" ? (
                <>
                  <div className="flex items-center justify-between px-5 py-3 text-slate-700 dark:text-slate-300">
                    <span>Original Price {standardCalc.qty > 1 ? `(${standardCalc.qty}x)` : ""}</span>
                    <span className="font-semibold text-slate-900 dark:text-slate-100 font-mono">
                      {symbol}{fmtNum(standardCalc.totalOriginal)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between px-5 py-3 text-emerald-600 dark:text-emerald-400 font-medium">
                    <span>
                      Primary Discount ({discountValue}
                      {discountType === "percentage" ? "%" : symbol})
                    </span>
                    <span className="font-semibold font-mono">
                      −{symbol}{fmtNum(standardCalc.disc1 * standardCalc.qty)}
                    </span>
                  </div>

                  {hasExtraDiscount && (
                    <div className="flex items-center justify-between px-5 py-3 text-emerald-600 dark:text-emerald-400 font-medium">
                      <span>
                        Extra Coupon ({extraDiscountValue}
                        {extraDiscountType === "percentage" ? "%" : symbol})
                      </span>
                      <span className="font-semibold font-mono">
                        −{symbol}{fmtNum(standardCalc.disc2 * standardCalc.qty)}
                      </span>
                    </div>
                  )}

                  {salesTaxPercent > 0 && (
                    <div className="flex items-center justify-between px-5 py-3 text-amber-600 dark:text-amber-400 font-medium">
                      <span>Sales Tax ({salesTaxPercent}%)</span>
                      <span className="font-semibold font-mono">
                        +{symbol}{fmtNum(standardCalc.totalTax)}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between px-5 py-3.5 bg-slate-50 dark:bg-slate-800/50 font-bold text-slate-900 dark:text-slate-100">
                    <span>Final Amount Due</span>
                    <span className="text-sm font-mono text-blue-600 dark:text-blue-400">
                      {symbol}{fmtNum(standardCalc.totalFinal)}
                    </span>
                  </div>
                </>
              ) : mode === "bogo" ? (
                <>
                  <div className="flex items-center justify-between px-5 py-3 text-slate-700 dark:text-slate-300">
                    <span>Full Price Items ({bogoBuyQty}x)</span>
                    <span className="font-semibold text-slate-900 dark:text-slate-100 font-mono">
                      {symbol}{fmtNum(bogoBuyQty * bogoUnitPrice)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between px-5 py-3 text-emerald-600 dark:text-emerald-400">
                    <span>
                      Discounted Items ({bogoGetQty}x at {bogoGetDiscountPercent}% off)
                    </span>
                    <span className="font-semibold font-mono">
                      {symbol}{fmtNum(bogoGetQty * bogoUnitPrice * (1 - bogoGetDiscountPercent / 100))}
                    </span>
                  </div>
                  <div className="flex items-center justify-between px-5 py-3.5 bg-slate-50 dark:bg-slate-800/50 font-bold text-slate-900 dark:text-slate-100">
                    <span>Total Deal Cost</span>
                    <span className="text-sm font-mono text-blue-600 dark:text-blue-400">
                      {symbol}{fmtNum(bogoCalc.totalPaid)}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between px-5 py-3 text-slate-700 dark:text-slate-300">
                    <span>Original Calculated Price</span>
                    <span className="font-semibold text-slate-900 dark:text-slate-100 font-mono">
                      {symbol}{fmtNum(reverseCalc.calculatedOriginal)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between px-5 py-3 text-emerald-600 dark:text-emerald-400">
                    <span>Amount Saved</span>
                    <span className="font-semibold font-mono">
                      {symbol}{fmtNum(reverseCalc.calculatedSavings)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between px-5 py-3.5 bg-slate-50 dark:bg-slate-800/50 font-bold text-slate-900 dark:text-slate-100">
                    <span>Sale Price</span>
                    <span className="text-sm font-mono text-blue-600 dark:text-blue-400">
                      {symbol}{fmtNum(revFinalPrice)}
                    </span>
                  </div>
                </>
              )}
            </div>
          </Card>
        </div>
      </div>

      {/* ── Quick Discount Tiers Schedule ────────────────────────────────────── */}
      <div className="mt-8">
        <Card>
          <CardHead
            icon="fa-table-cells"
            title="Discount Comparison Matrix"
            subtitle={`Compare what ${symbol}${fmtNum(originalPrice)} costs across standard promotional tiers`}
            color="blue"
            badge="Cheat Sheet"
          />

          <div className="p-5 overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">
                  <th className="pb-3 px-3">Discount Tier</th>
                  <th className="pb-3 px-3">Original Price</th>
                  <th className="pb-3 px-3 text-emerald-600 dark:text-emerald-400">You Save</th>
                  <th className="pb-3 px-3 text-blue-600 dark:text-blue-400">Final Price</th>
                  <th className="pb-3 px-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80 font-mono">
                {discountTiers.map((tier) => (
                  <tr
                    key={tier.pct}
                    className={`transition-colors ${
                      tier.isCurrent
                        ? "bg-blue-50/80 dark:bg-blue-950/40 font-bold"
                        : "hover:bg-slate-50 dark:hover:bg-slate-800/40"
                    }`}
                  >
                    <td className="py-3 px-3 font-sans font-semibold text-slate-800 dark:text-slate-200">
                      {tier.pct}% Off
                    </td>
                    <td className="py-3 px-3 text-slate-500">
                      {symbol}{fmtNum(originalPrice)}
                    </td>
                    <td className="py-3 px-3 text-emerald-600 dark:text-emerald-400 font-semibold">
                      −{symbol}{fmtNum(tier.saved)}
                    </td>
                    <td className="py-3 px-3 text-blue-600 dark:text-blue-400 font-bold text-sm">
                      {symbol}{fmtNum(tier.finalP)}
                    </td>
                    <td className="py-3 px-3 text-center">
                      <button
                        type="button"
                        onClick={() => {
                          setMode("standard");
                          setDiscountType("percentage");
                          setDiscountValue(tier.pct);
                          showToast(`Applied ${tier.pct}% discount`);
                        }}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-sans font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition"
                      >
                        Apply
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
