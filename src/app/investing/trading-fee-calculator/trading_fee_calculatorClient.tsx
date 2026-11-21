"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import { useCurrency } from '@/hooks/useCurrency';
export default function TradingFeeCalculatorClient() {
  const { fmt, fmtShort, symbol } = useCurrency();
  const [assetType, setAssetType] = useState<"crypto" | "stock">("crypto");
  const [quantity, setQuantity] = useState(1);
  const [buyPrice, setBuyPrice] = useState(50000);
  const [sellPrice, setSellPrice] = useState(55000);
  const [buyFeePercent, setBuyFeePercent] = useState(0.1);
  const [sellFeePercent, setSellFeePercent] = useState(0.1);

  // Results
  const [results, setResults] = useState({
    initialCost: 0,
    buyFeeAmount: 0,
    totalCostBasis: 0,
    grossProceeds: 0,
    sellFeeAmount: 0,
    netProceeds: 0,
    totalFees: 0,
    netProfit: 0,
    roi: 0,
  });

  useEffect(() => {
    calculate();
  }, [assetType, quantity, buyPrice, sellPrice, buyFeePercent, sellFeePercent]);

  function calculate() {
    const q = quantity || 0;
    const bp = buyPrice || 0;
    const sp = sellPrice || 0;
    const bf = buyFeePercent || 0;
    const sf = sellFeePercent || 0;

    const initialCost = q * bp;
    const buyFeeAmount = initialCost * (bf / 100);
    const totalCostBasis = initialCost + buyFeeAmount;

    const grossProceeds = q * sp;
    const sellFeeAmount = grossProceeds * (sf / 100);
    const netProceeds = grossProceeds - sellFeeAmount;

    const totalFees = buyFeeAmount + sellFeeAmount;
    const netProfit = netProceeds - totalCostBasis;
    const roi = totalCostBasis > 0 ? (netProfit / totalCostBasis) * 100 : 0;

    setResults({
      initialCost,
      buyFeeAmount,
      totalCostBasis,
      grossProceeds,
      sellFeeAmount,
      netProceeds,
      totalFees,
      netProfit,
      roi,
    });
  }

  const isProfit = results.netProfit >= 0;

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-8 pb-16">
     

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 mb-10">
        {/* INPUT PANEL */}
        <section className="xl:col-span-5 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200 dark:border-slate-800">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-2">
            <i className="fas fa-sliders-h text-blue-500" aria-hidden="true" />{" "}
            Trade Details
          </h2>

          {/* Asset Type Toggle */}
          <div className="flex bg-slate-50 dark:bg-slate-900 rounded-xl p-1 mb-6">
            {(["crypto", "stock"] as const).map((type) => (
              <button
                key={type}
                onClick={() => {
                  setAssetType(type);
                  if (type === "stock") {
                    setQuantity(100);
                    setBuyPrice(150);
                    setSellPrice(165);
                    setBuyFeePercent(0);
                    setSellFeePercent(0);
                  } else {
                    setQuantity(1);
                    setBuyPrice(50000);
                    setSellPrice(55000);
                    setBuyFeePercent(0.1);
                    setSellFeePercent(0.1);
                  }
                }}
                className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 capitalize flex items-center justify-center gap-2 ${
                  assetType === type
                    ? "bg-blue-500 text-white shadow-sm"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
              >
                <i className={`fas ${type === "crypto" ? "fa-bitcoin" : "fa-chart-line"}`} />
                {type}
              </button>
            ))}
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">
                {assetType === "crypto" ? "Quantity (Coins)" : "Quantity (Shares)"}
              </label>
              <input
                type="number"
                value={quantity === 0 ? "" : quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                min="0"
                step="any"
                className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-medium focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">
                  Buy Price
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">{symbol}</span>
                  <input
                    type="number"
                    value={buyPrice === 0 ? "" : buyPrice}
                    onChange={(e) => setBuyPrice(Number(e.target.value))}
                    min="0"
                    step="any"
                    className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-medium focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">
                  Sell Price
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">{symbol}</span>
                  <input
                    type="number"
                    value={sellPrice === 0 ? "" : sellPrice}
                    onChange={(e) => setSellPrice(Number(e.target.value))}
                    min="0"
                    step="any"
                    className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-medium focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">
                  Buy Fee
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={buyFeePercent === 0 && buyFeePercent.toString() !== "0" ? "" : buyFeePercent}
                    onChange={(e) => setBuyFeePercent(Number(e.target.value))}
                    min="0"
                    step="any"
                    className="w-full pl-4 pr-8 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-medium focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">
                  Sell Fee
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={sellFeePercent === 0 && sellFeePercent.toString() !== "0" ? "" : sellFeePercent}
                    onChange={(e) => setSellFeePercent(Number(e.target.value))}
                    min="0"
                    step="any"
                    className="w-full pl-4 pr-8 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-medium focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">%</span>
                </div>
              </div>
            </div>
            
            <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-100 dark:border-blue-800">
              <i className="fas fa-info-circle text-blue-500 mr-1" />
              <strong>Tip:</strong> Typical crypto exchange fees range from 0.1% to 0.5%. Many traditional stock brokers now offer 0% commission trades.
            </div>
          </div>
        </section>

        {/* RESULTS PANEL */}
        <section className="xl:col-span-7 space-y-6">
          {/* Main Profit Card */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200 dark:border-slate-800">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
              <div className="text-center sm:text-left flex-1">
                <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Net {isProfit ? "Profit" : "Loss"} (After Fees)
                </div>
                <div
                  className={`text-4xl sm:text-5xl font-extrabold ${
                    isProfit ? "text-emerald-500" : "text-red-500"
                  }`}
                >
                  {isProfit ? "+" : ""}{fmt(results.netProfit)}
                </div>
              </div>

              <div className="h-16 w-px bg-slate-200 dark:bg-slate-900 hidden sm:block" />

              <div className="text-center sm:text-right flex-1">
                <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Return on Investment
                </div>
                <div
                  className={`text-4xl sm:text-5xl font-extrabold ${
                    isProfit ? "text-emerald-500" : "text-red-500"
                  }`}
                >
                  {isProfit ? "+" : ""}{results.roi.toFixed(2)}%
                </div>
              </div>
            </div>

            {/* Fee Warning */}
            <div className="flex items-start gap-3 bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 mb-8">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-500">
                <i className="fas fa-hand-holding-usd text-lg" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-1">
                  Total Fees Paid: <span className="text-red-500">{fmt(results.totalFees)}</span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Fees consumed {results.netProfit > 0 ? ((results.totalFees / (results.netProfit + results.totalFees)) * 100).toFixed(1) : "100"}% of your gross profits.
                </div>
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-3 border-b border-slate-200 dark:border-slate-800 pb-2">
                  <i className="fas fa-arrow-down text-blue-500 mr-2" /> Buy Phase
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 dark:text-slate-400">Initial Asset Cost</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-100">{fmt(results.initialCost)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 dark:text-slate-400">Buy Trading Fee</span>
                    <span className="font-semibold text-red-500">+{fmt(results.buyFeeAmount)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm pt-2 border-t border-slate-100 dark:border-slate-800/50">
                    <span className="font-bold text-slate-800 dark:text-slate-100">Total Cost Basis</span>
                    <span className="font-bold text-slate-800 dark:text-white">{fmt(results.totalCostBasis)}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-3 border-b border-slate-200 dark:border-slate-800 pb-2">
                  <i className="fas fa-arrow-up text-emerald-500 mr-2" /> Sell Phase
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 dark:text-slate-400">Gross Proceeds</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-100">{fmt(results.grossProceeds)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 dark:text-slate-400">Sell Trading Fee</span>
                    <span className="font-semibold text-red-500">-{fmt(results.sellFeeAmount)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm pt-2 border-t border-slate-100 dark:border-slate-800/50">
                    <span className="font-bold text-slate-800 dark:text-slate-100">Net Proceeds</span>
                    <span className="font-bold text-slate-800 dark:text-white">{fmt(results.netProceeds)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* About Section */}
      <article className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200 dark:border-slate-800">
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
          <i className="fas fa-book-open text-blue-500" />
          Understanding Trading Fees
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-800 dark:text-slate-400 leading-relaxed">
          <div>
            <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-2">How Fees Impact Profits</h3>
            <p className="mb-4">
              Trading fees can severely eat into your profits, especially for day traders or those executing high-frequency trades with tight margins. A common mistake is calculating profit solely by the difference in asset price, forgetting that you pay a percentage to the exchange on both the way in and the way out.
            </p>
            <p>
              Your <strong>Net Profit</strong> is calculated by taking your final payout (Net Proceeds) and subtracting your true initial investment (Total Cost Basis).
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-2">Maker vs Taker Fees</h3>
            <p className="mb-4">
              Most crypto exchanges use a Maker/Taker fee model. <strong>Makers</strong> provide liquidity to the order book (e.g., placing a limit order) and usually enjoy lower fees. <strong>Takers</strong> consume liquidity (e.g., placing a market order) and usually pay higher fees.
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li><strong>Binance:</strong> 0.1% standard (can be lower with BNB)</li>
              <li><strong>Coinbase Advanced:</strong> ~0.4% maker / 0.6% taker</li>
              <li><strong>Traditional Brokers (Stock):</strong> Often $0 commission, though regulatory fees (like SEC fees) may still apply on sales.</li>
            </ul>
          </div>
        </div>
      </article>

      <div className="mt-8 text-center">
        <Link
          href="/other"
          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline"
        >
          <i className="fas fa-arrow-left text-xs" /> Back to Other Calculators
        </Link>
      </div>
    </div>
  );
}
