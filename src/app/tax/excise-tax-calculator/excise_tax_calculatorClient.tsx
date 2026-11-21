"use client";

import { useState, useMemo } from "react";

import { useCurrency } from '@/hooks/useCurrency';
// ─── formatting utilities ───────────────────────────────────────────────────────

const fmtPct = (n: number, decimals = 2) => `${n.toFixed(decimals)}%`;

// ─── excise tax calculation utilities ─────────────────────────────────────

type ProductType = "alcohol" | "tobacco" | "fuel" | "other";

// Federal excise tax rates (2024)
const FEDERAL_EXCISE_RATES = {
  alcohol: {
    beer: 0.58, // per gallon
    wine: 1.07, // per gallon
    spirits: 13.50, // per gallon
  },
  tobacco: {
    cigarettes: 1.01, // per pack of 20
    cigars: 0.525, // per thousand cigars
    smokeless: 1.51, // per pound
  },
  fuel: {
    gasoline: 0.184, // per gallon
    diesel: 0.244, // per gallon
    jetFuel: 0.219, // per gallon
  },
  other: {
    airlineTicket: 11.20, // per round trip
    firearms: 0.10, // 10% of sale price
  },
};

function calculateExciseTax(
  productType: ProductType,
  product: string,
  quantity: number,
  unitPrice: number,
  stateTaxRate: number
) {
  let federalTaxRate = 0;
  let federalTax = 0;
  let stateTax = 0;
  let totalTax = 0;
  let totalCost = 0;

  // Get federal tax rate based on product
  if (productType === "alcohol" && product in FEDERAL_EXCISE_RATES.alcohol) {
    federalTaxRate = FEDERAL_EXCISE_RATES.alcohol[product as keyof typeof FEDERAL_EXCISE_RATES.alcohol];
    federalTax = quantity * federalTaxRate;
  } else if (productType === "tobacco" && product in FEDERAL_EXCISE_RATES.tobacco) {
    federalTaxRate = FEDERAL_EXCISE_RATES.tobacco[product as keyof typeof FEDERAL_EXCISE_RATES.tobacco];
    federalTax = quantity * federalTaxRate;
  } else if (productType === "fuel" && product in FEDERAL_EXCISE_RATES.fuel) {
    federalTaxRate = FEDERAL_EXCISE_RATES.fuel[product as keyof typeof FEDERAL_EXCISE_RATES.fuel];
    federalTax = quantity * federalTaxRate;
  } else if (productType === "other" && product === "firearms") {
    federalTaxRate = FEDERAL_EXCISE_RATES.other.firearms;
    federalTax = unitPrice * quantity * federalTaxRate;
  } else if (productType === "other" && product === "airlineTicket") {
    federalTaxRate = FEDERAL_EXCISE_RATES.other.airlineTicket;
    federalTax = quantity * federalTaxRate;
  }

  // Calculate state excise tax (simplified - assumes same rate as federal)
  stateTax = federalTax * stateTaxRate;

  // Total tax
  totalTax = federalTax + stateTax;

  // Total cost (base price + taxes)
  const basePrice = unitPrice * quantity;
  totalCost = basePrice + totalTax;

  // Effective tax rate
  const effectiveTaxRate = basePrice > 0 ? (totalTax / basePrice) * 100 : 0;

  return {
    productType,
    product,
    quantity,
    unitPrice,
    federalTaxRate,
    federalTax,
    stateTaxRate,
    stateTax,
    totalTax,
    basePrice,
    totalCost,
    effectiveTaxRate,
  };
}

// ─── input components ────────────────────────────────────────────────────────────

function InputField({
  label,
  value,
  onChange,
  prefix = "",
  suffix = "",
  step = "1",
  min = "0",
  helper = "",
  type = "number",
}: {
  label: string;
  value: number | string;
  onChange: (value: number) => void;
  prefix?: string;
  suffix?: string;
  step?: string;
  min?: string;
  helper?: string;
  type?: string;
}) {
  const inputId = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={inputId}
        className="text-xs font-semibold text-slate-800 dark:text-slate-400 uppercase tracking-wide"
      >
        {label}
        {helper && (
          <span className="ml-2 font-normal text-slate-400 dark:text-slate-400 normal-case">
            ({helper})
          </span>
        )}
      </label>
      <div className="relative">
        {prefix && (
          <span
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 font-medium"
            aria-hidden="true"
          >
            {prefix}
          </span>
        )}
        <input
          id={inputId}
          type={type}
          value={value}
          min={min}
          step={step}
          onChange={(e) => onChange(Number(e.target.value))}
          aria-label={label}
          className={`w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-800 dark:text-slate-100 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all ${prefix ? "pl-8" : ""} ${suffix ? "pr-8" : ""}`}
        />
        {suffix && (
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 font-medium"
            aria-hidden="true"
          >
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

// ─── main component ───────────────────────────────────────────────────────────

export default function ExciseTaxCalculatorClient() {
  const { fmt, fmtShort, symbol } = useCurrency();
  const [productType, setProductType] = useState<ProductType>("alcohol");
  const [product, setProduct] = useState("beer");
  const [quantity, setQuantity] = useState(100);
  const [unitPrice, setUnitPrice] = useState(5);
  const [stateTaxRate, setStateTaxRate] = useState(0);

  const taxResults = useMemo(
    () => calculateExciseTax(productType, product, quantity, unitPrice, stateTaxRate / 100),
    [productType, product, quantity, unitPrice, stateTaxRate]
  );

  const PRODUCT_OPTIONS = {
    alcohol: [
      { value: "beer", label: "Beer", unit: "gallons" },
      { value: "wine", label: "Wine", unit: "gallons" },
      { value: "spirits", label: "Spirits", unit: "gallons" },
    ],
    tobacco: [
      { value: "cigarettes", label: "Cigarettes", unit: "packs (20)" },
      { value: "cigars", label: "Cigars", unit: "thousands" },
      { value: "smokeless", label: "Smokeless Tobacco", unit: "pounds" },
    ],
    fuel: [
      { value: "gasoline", label: "Gasoline", unit: "gallons" },
      { value: "diesel", label: "Diesel", unit: "gallons" },
      { value: "jetFuel", label: "Jet Fuel", unit: "gallons" },
    ],
    other: [
      { value: "airlineTicket", label: "Airline Ticket", unit: "round trips" },
      { value: "firearms", label: "Firearms", unit: "units" },
    ],
  };

  const currentProductOptions = PRODUCT_OPTIONS[productType];
  const currentProduct = currentProductOptions.find((p) => p.value === product);

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8">
      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Input Section */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          {/* Product Selection */}
          <section
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
            aria-labelledby="product-selection-heading"
          >
            <h2
              id="product-selection-heading"
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4 flex items-center gap-2"
            >
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <span
                  className="text-sm sm:text-base text-emerald-600 dark:text-emerald-400"
                  aria-hidden="true"
                >
                  📦
                </span>
              </span>
              Product Selection
            </h2>

            <div className="space-y-3 sm:space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-800 dark:text-slate-400 uppercase tracking-wide mb-2 block">
                  Product Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(["alcohol", "tobacco", "fuel", "other"] as ProductType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setProductType(type);
                        setProduct(PRODUCT_OPTIONS[type][0].value);
                      }}
                      className={`p-2.5 sm:p-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                        productType === type
                          ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
                          : "border-slate-200 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-600"
                      }`}
                    >
                      <div className="text-sm font-medium text-slate-800 dark:text-slate-100 capitalize">
                        {type}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-800 dark:text-slate-400 uppercase tracking-wide mb-2 block">
                  Specific Product
                </label>
                <select
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-800 dark:text-slate-100 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                >
                  {currentProductOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label} ({option.unit})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          {/* Quantity and Price */}
          <section
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
            aria-labelledby="quantity-heading"
          >
            <h2
              id="quantity-heading"
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4 flex items-center gap-2"
            >
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <span
                  className="text-sm sm:text-base text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                >
                  🔢
                </span>
              </span>
              Quantity & Price
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <InputField
                label="Quantity"
                value={quantity}
                onChange={setQuantity}
                step="1"
                min="0"
                helper={currentProduct?.unit}
              />
              <InputField
                label="Unit Price"
                value={unitPrice}
                onChange={setUnitPrice}
                prefix={symbol}
                step="0.01"
                min="0"
                helper="per unit"
              />
              <InputField
                label="State Tax Rate"
                value={stateTaxRate}
                onChange={setStateTaxRate}
                suffix="%"
                step="1"
                min="0"
                helper="of federal"
              />
            </div>
          </section>

          {/* Tax Breakdown */}
          <section
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
            aria-labelledby="tax-breakdown-heading"
          >
            <h2
              id="tax-breakdown-heading"
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4 flex items-center gap-2"
            >
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <span
                  className="text-sm sm:text-base text-purple-600 dark:text-purple-400"
                  aria-hidden="true"
                >
                  📊
                </span>
              </span>
              Tax Breakdown
            </h2>

            <div className="space-y-2 sm:space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  Base Price
                </span>
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  {fmt(taxResults.basePrice)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  Federal Excise Tax
                </span>
                <span className="font-medium text-red-600 dark:text-red-400">
                  {fmt(taxResults.federalTax)}
                </span>
              </div>
              {taxResults.stateTax > 0 && (
                <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-sm text-slate-800 dark:text-slate-400">
                    State Excise Tax
                  </span>
                  <span className="font-medium text-red-600 dark:text-red-400">
                    {fmt(taxResults.stateTax)}
                  </span>
                </div>
              )}
              <div className="flex justify-between items-center py-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl px-3">
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                  Total Excise Tax
                </span>
                <span className="font-bold text-lg text-red-600 dark:text-red-400">
                  {fmt(taxResults.totalTax)}
                </span>
              </div>
            </div>
          </section>
        </div>

        {/* Results Section */}
        <div className="space-y-4 sm:space-y-6">
          {/* Key Results */}
          <section
            className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-4 sm:p-6 text-white shadow-lg"
            aria-labelledby="results-heading"
          >
            <h2
              id="results-heading"
              className="text-base sm:text-lg font-bold mb-3 sm:mb-4 flex items-center gap-2"
            >
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <span className="text-sm" aria-hidden="true">
                  📈
                </span>
              </span>
              Your Results
            </h2>

            <div className="space-y-3 sm:space-y-4">
              <div>
                <div className="text-emerald-100 text-[10px] sm:text-xs uppercase tracking-wide mb-1">
                  Total Cost
                </div>
                <div className="text-2xl sm:text-3xl font-bold">
                  {fmt(taxResults.totalCost)}
                </div>
                <div className="text-emerald-200 text-[10px] sm:text-xs mt-1">
                  including taxes
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-white/20">
                <div>
                  <div className="text-emerald-100 text-[10px] sm:text-xs uppercase tracking-wide mb-1">
                    Effective Tax Rate
                  </div>
                  <div className="text-lg sm:text-xl font-bold">
                    {fmtPct(taxResults.effectiveTaxRate)}
                  </div>
                </div>
                <div>
                  <div className="text-emerald-100 text-[10px] sm:text-xs uppercase tracking-wide mb-1">
                    Federal Tax Rate
                  </div>
                  <div className="text-lg sm:text-xl font-bold">
                    {fmt(taxResults.federalTaxRate)}/unit
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tax Rate Info */}
          <section
            className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-4 sm:p-5 border border-amber-200 dark:border-amber-800"
            role="alert"
            aria-live="polite"
          >
            <div className="flex items-start gap-3">
              <span className="text-xl sm:text-2xl" aria-hidden="true">
                💡
              </span>
              <div>
                <h3 className="font-bold text-amber-800 dark:text-amber-300 text-sm mb-1">
                  Federal Excise Tax Rate
                </h3>
                <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
                  The federal excise tax rate for <strong>{currentProduct?.label}</strong> is <strong>{fmt(taxResults.federalTaxRate)}</strong> per {currentProduct?.unit}.
                </p>
              </div>
            </div>
          </section>

          {/* Tax Tips */}
          <section
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-3 flex items-center gap-2">
              <span className="text-lg" aria-hidden="true">
                📝
              </span>
              Tax Tips
            </h3>
            <ul className="text-xs text-slate-800 dark:text-slate-400 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Excise taxes are typically included in the retail price of goods.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>State excise taxes vary significantly by state and product.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Some products have additional local excise taxes.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Consult tax authorities for exact rates in your jurisdiction.</span>
              </li>
            </ul>
          </section>
        </div>
      </div>

      {/* Disclaimer */}
      <footer className="mt-6 sm:mt-8 p-3 sm:p-4 bg-slate-50 dark:bg-slate-900/30 rounded-xl border border-slate-200 dark:border-slate-800">
        <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          <strong className="text-slate-800 dark:text-slate-100">
            Disclaimer:
          </strong>{" "}
          This excise tax calculator is for educational purposes only and does not
          constitute tax advice. Calculations are based on 2024 federal excise tax rates and simplified
          assumptions. Actual tax liability may vary based on state-specific rules, local taxes,
          product classifications, and changes in tax laws. Always consult with a qualified tax
          professional for accurate excise tax calculations.
        </p>
      </footer>
    </div>
  );
}
