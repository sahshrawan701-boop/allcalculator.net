import React from "react";
import Link from "next/link";
import {
  StateMatchResult,
  generateStateFAQSchema,
  generateStateWebPageSchema,
  fillTemplate,
  getStateCalculatorUrl,
} from "@/lib/seo/state-seo";
import { JsonLd } from "@/components/seo";
import StateCalculatorClient from "./StateCalculatorClient";
import { US_STATES } from "@/data/states";
import { STATE_CALCULATORS } from "@/data/stateCalculators";

function SectionCard({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={`bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

function SectionHead({
  icon,
  title,
  color = "indigo",
}: {
  icon: string;
  title: string;
  color?: "indigo" | "amber" | "emerald" | "violet" | "sky";
}) {
  const colors = {
    indigo: "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
    amber: "bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
    emerald: "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
    violet: "bg-violet-50 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400",
    sky: "bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400",
  };
  const isFontAwesome = icon.startsWith("fa-");

  return (
    <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100 dark:border-slate-800">
      <span
        className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm ${colors[color]}`}
      >
        {isFontAwesome ? <i className={`fas ${icon}`} /> : icon}
      </span>
      <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
        {title}
      </h2>
    </div>
  );
}

export default function StateProgrammaticPage({ match }: { match: StateMatchResult }) {
  const { state, template } = match;
  const currentYear = new Date().getFullYear();

  const h1Title = fillTemplate(template.nameTemplate, state);
  const description = fillTemplate(template.descriptionTemplate, state);

  const faqSchema = generateStateFAQSchema(match);
  const webPageSchema = generateStateWebPageSchema(match);

  // Top benchmark comparison states
  const benchmarkStateIds = ["california", "texas", "florida", "new-york", "washington"];
  const benchmarkStates = US_STATES.filter((s) => benchmarkStateIds.includes(s.id) && s.id !== state.id).slice(0, 4);

  // Other calculators in the same state
  const otherSameStateCalculators = STATE_CALCULATORS.filter((c) => c.id !== template.id).slice(0, 6);

  // Same calculator across top population US states
  const sameCalcAcrossStates = US_STATES.filter((s) => s.id !== state.id).slice(0, 6);

  return (
    <div className="max-w-[1300px] mx-auto px-4 sm:px-6 py-6 sm:py-10">
      {/* Schemas */}
      <JsonLd data={webPageSchema} />
      <JsonLd data={faqSchema} />

      {/* Trust & E-E-A-T Top Banner */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400">
            <i className="fas fa-check-circle" /> Verified for {currentYear}/{currentYear + 1}
          </span>
          <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
          <span>Fact-Checked against {state.agencyName} & IRS Regulations</span>
        </div>
        <div className="text-[11px] font-medium text-slate-500">
          Reviewed by allcalculator.net Financial Team
        </div>
      </div>

      {/* Hero Header */}
      <header className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/60 mb-3">
          <i className="fas fa-map-pin text-[10px]" /> {state.name} ({state.abbreviation})
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-3">
          {h1Title}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl">
          {description}
        </p>

        {/* Quick Jumps */}
        <div className="flex flex-wrap items-center gap-2 mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
          <span className="font-semibold text-slate-400 uppercase tracking-wider text-[10px]">
            Jump to:
          </span>
          <a href="#calculator-tool" className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 transition-colors">
            Calculator Tool
          </a>
          <a href="#state-profile" className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 transition-colors">
            {state.name} Tax Profile
          </a>
          <a href="#detailed-guide" className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 transition-colors">
            Comprehensive Guide
          </a>
          <a href="#worked-example" className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 transition-colors">
            Worked Example
          </a>
          <a href="#benchmark-comparison" className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 transition-colors">
            State Comparison
          </a>
          <a href="#faqs" className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 transition-colors">
            FAQs
          </a>
        </div>
      </header>

      {/* State Financial Profile Stat Grid */}
      <SectionCard id="state-profile" className="mb-8">
        <SectionHead icon="fa-chart-pie" title={`${state.name} Fiscal & Economic Profile (${currentYear})`} color="indigo" />
        <div className="p-5">
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
            {state.descriptionText}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Income Tax</div>
              <div className="text-base font-extrabold text-slate-900 dark:text-slate-100">{state.hasIncomeTax ? state.incomeTaxRate : "0% (None)"}</div>
              <div className="text-[10px] text-slate-500 capitalize mt-0.5">{state.taxSystem} system</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Base Sales Tax</div>
              <div className="text-base font-extrabold text-slate-900 dark:text-slate-100">{state.hasSalesTax ? `${state.baseSalesTax}%` : "0% (None)"}</div>
              <div className="text-[10px] text-slate-500 mt-0.5">Avg combined: {state.combinedSalesTax}%</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Property Tax</div>
              <div className="text-base font-extrabold text-slate-900 dark:text-slate-100">{state.effectivePropertyTaxRate}%</div>
              <div className="text-[10px] text-slate-500 mt-0.5">effective rate</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">State Min Wage</div>
              <div className="text-base font-extrabold text-slate-900 dark:text-slate-100">${state.minWage.toFixed(2)}/hr</div>
              <div className="text-[10px] text-slate-500 mt-0.5">hourly non-exempt</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Median Home</div>
              <div className="text-base font-extrabold text-slate-900 dark:text-slate-100">${(state.medianHomeValue || 350000).toLocaleString()}</div>
              <div className="text-[10px] text-slate-500 mt-0.5">home value</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Tax Agency</div>
              <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 truncate" title={state.agencyName}>
                {state.agencyName.split("(")[1]?.replace(")", "") || state.abbreviation + " DOR"}
              </div>
              <a
                href={state.agencyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:underline flex items-center gap-1 mt-0.5"
              >
                Official Site <i className="fas fa-external-link-alt text-[8px]" />
              </a>
            </div>
          </div>

          {/* Key state tax facts */}
          {state.keyTaxFacts && state.keyTaxFacts.length > 0 && (
            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2.5">
                Key Tax Facts for {state.name} Residents & Workers
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {state.keyTaxFacts.map((fact, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                    <span>{fact}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </SectionCard>

      {/* Main Interactive Tool Card */}
      <div id="calculator-tool" className="mb-10">
        <StateCalculatorClient state={state} template={template} />
      </div>

      {/* In-Depth Editorial Guide (Anti-Thin-Content & E-E-A-T Excellence) */}
      <div id="detailed-guide" className="space-y-8 mb-10">
        {/* Article Section 1: Overview */}
        <SectionCard>
          <SectionHead icon="fa-book-open" title={`Understanding ${template.nameTemplate.replace("{state}", state.name)}`} color="indigo" />
          <div className="p-6 text-sm text-slate-600 dark:text-slate-400 leading-relaxed space-y-4">
            <p>{fillTemplate(template.article.overviewTemplate, state)}</p>
          </div>
        </SectionCard>

        {/* Article Section 2: Mathematical Formula & Methodology */}
        <SectionCard>
          <SectionHead icon="fa-square-root-variable" title="Calculation Methodology & Mathematical Formulas" color="violet" />
          <div className="p-6 text-sm text-slate-600 dark:text-slate-400 leading-relaxed space-y-4">
            <p>{fillTemplate(template.article.formulaDescriptionTemplate, state)}</p>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 font-mono text-xs text-slate-800 dark:text-slate-200 leading-loose">
              <span className="font-bold text-indigo-600 dark:text-indigo-400 block mb-1">
                Mathematical Model ({currentYear} Standard):
              </span>
              {template.id === "paycheck-calculator" || template.id === "salary-calculator" ? (
                <>
                  Net Take-Home Pay = Gross Pay - Pre-Tax Benefits - Federal Withholding - FICA (6.2% SS + 1.45% Medicare) - {state.name} State Tax ({state.incomeTaxRate}) - Local Surcharges
                </>
              ) : template.id === "sales-tax-calculator" ? (
                <>
                  Total Out-of-Pocket Cost = Purchase Price + (Purchase Price × [{state.baseSalesTax}% State Rate + Local Option Surtaxes])
                </>
              ) : template.id === "property-tax-calculator" ? (
                <>
                  Annual Tax Bill = (Assessed Market Value - Homestead Exemption) × {state.effectivePropertyTaxRate}% Effective Rate
                </>
              ) : template.id === "mortgage-calculator" ? (
                <>
                  Monthly Payment (PITI) = Principal & Interest + ({state.name} Property Taxes / 12) + Monthly Insurance + Monthly PMI
                </>
              ) : (
                <>
                  Net Liability = Gross Earnings - Statutory Deductions - Federal Liability - {state.name} State Liability ({state.incomeTaxRate})
                </>
              )}
            </div>
          </div>
        </SectionCard>

        {/* Article Section 3: Worked Example */}
        {template.article.example && (
          <SectionCard id="worked-example">
            <SectionHead icon="fa-file-invoice" title={fillTemplate(template.article.example.title, state)} color="emerald" />
            <div className="p-6 space-y-5">
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {fillTemplate(template.article.example.scenario, state)}
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
                <table className="w-full text-left text-sm divide-y divide-slate-200 dark:divide-slate-700">
                  <thead className="bg-slate-50 dark:bg-slate-800 text-xs uppercase tracking-wider text-slate-500 font-semibold">
                    <tr>
                      <th className="px-4 py-3">Step</th>
                      <th className="px-4 py-3">Description & Statutory Rule</th>
                      <th className="px-4 py-3 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {template.article.example.steps.map((st, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                        <td className="px-4 py-3 font-semibold text-slate-800 dark:text-slate-200">{st.step}</td>
                        <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{fillTemplate(st.explanation, state)}</td>
                        <td className="px-4 py-3 text-right font-bold text-slate-900 dark:text-slate-100 tabular-nums">
                          {st.amount ? fillTemplate(st.amount, state) : "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 text-xs text-emerald-900 dark:text-emerald-300">
                <span className="font-bold">Case Study Summary: </span>
                {fillTemplate(template.article.example.summary, state)}
              </div>
            </div>
          </SectionCard>
        )}

        {/* Article Section 4: Key Statutory Provisions */}
        {template.article.keyProvisions && template.article.keyProvisions.length > 0 && (
          <SectionCard>
            <SectionHead icon="fa-scale-balanced" title={`Key Statutory Rules & Provisions in ${state.name}`} color="amber" />
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {template.article.keyProvisions.map((kp, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1.5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
                    {fillTemplate(kp.title, state)}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {fillTemplate(kp.desc, state)}
                  </p>
                </div>
              ))}
            </div>
          </SectionCard>
        )}

        {/* Article Section 5: Legal Deductions & Optimization Strategies */}
        {template.article.deductionsAndSavings && template.article.deductionsAndSavings.length > 0 && (
          <SectionCard>
            <SectionHead icon="fa-shield-halved" title={`Legal Tax Reduction & Savings Strategies in ${state.name}`} color="sky" />
            <div className="p-6 space-y-3">
              {template.article.deductionsAndSavings.map((ds, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-sky-50/50 dark:bg-sky-950/20 border border-sky-100 dark:border-sky-900/40">
                  <h3 className="text-sm font-bold text-sky-950 dark:text-sky-200 mb-1">
                    {fillTemplate(ds.title, state)}
                  </h3>
                  <p className="text-xs text-sky-900/80 dark:text-sky-300/80 leading-relaxed">
                    {fillTemplate(ds.desc, state)}
                  </p>
                </div>
              ))}
            </div>
          </SectionCard>
        )}
      </div>

      {/* State Benchmark Comparison Table */}
      <SectionCard id="benchmark-comparison" className="mb-10">
        <SectionHead icon="fa-arrows-split-up-and-left" title={`${state.name} vs Top US Benchmark States`} color="indigo" />
        <div className="p-6">
          <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
            See how {state.name} compares against major US states on personal income tax, sales tax, property tax rates, and housing costs:
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
            <table className="w-full text-left text-xs divide-y divide-slate-200 dark:divide-slate-700">
              <thead className="bg-slate-50 dark:bg-slate-800 font-bold uppercase tracking-wider text-slate-500">
                <tr>
                  <th className="px-4 py-3">State</th>
                  <th className="px-4 py-3">Income Tax Rate</th>
                  <th className="px-4 py-3">Base Sales Tax</th>
                  <th className="px-4 py-3">Effective Property Tax</th>
                  <th className="px-4 py-3">Median Home</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {/* Current State Highlighted */}
                <tr className="bg-indigo-50/60 dark:bg-indigo-950/30 font-semibold">
                  <td className="px-4 py-3 text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-600" />
                    {state.name} (This Page)
                  </td>
                  <td className="px-4 py-3 text-slate-900 dark:text-slate-100">{state.hasIncomeTax ? state.incomeTaxRate : "0% (None)"}</td>
                  <td className="px-4 py-3 text-slate-900 dark:text-slate-100">{state.hasSalesTax ? `${state.baseSalesTax}%` : "0%"}</td>
                  <td className="px-4 py-3 text-slate-900 dark:text-slate-100">{state.effectivePropertyTaxRate}%</td>
                  <td className="px-4 py-3 text-slate-900 dark:text-slate-100">${(state.medianHomeValue || 350000).toLocaleString()}</td>
                </tr>

                {/* Benchmark States */}
                {benchmarkStates.map((bs) => (
                  <tr key={bs.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-4 py-3 font-medium text-slate-800 dark:text-slate-200">
                      <Link href={`/${template.categorySlug}/${bs.id}-${template.id}`} className="hover:text-indigo-600 dark:hover:text-indigo-400 hover:underline">
                        {bs.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{bs.hasIncomeTax ? bs.incomeTaxRate : "0% (None)"}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{bs.hasSalesTax ? `${bs.baseSalesTax}%` : "0%"}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{bs.effectivePropertyTaxRate}%</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">${(bs.medianHomeValue || 350000).toLocaleString()}</td>
                  </tr>
                ))}

                {/* US National Average */}
                <tr className="bg-slate-50/80 dark:bg-slate-800/50 font-medium text-slate-500">
                  <td className="px-4 py-3">US National Average</td>
                  <td className="px-4 py-3">4.50% (approx)</td>
                  <td className="px-4 py-3">5.10% (avg base)</td>
                  <td className="px-4 py-3">0.99%</td>
                  <td className="px-4 py-3">$412,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </SectionCard>

      {/* Programmatic Localized FAQ (Matches Schema.org FAQPage) */}
      <SectionCard id="faqs" className="mb-10">
        <SectionHead icon="fa-circle-question" title={`Frequently Asked Questions: ${h1Title}`} color="amber" />
        <div className="p-6 space-y-4">
          {template.faqTemplates.map((faq, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/80 hover:border-indigo-200 dark:hover:border-indigo-800/50 transition-colors"
            >
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-md bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 text-xs flex items-center justify-center flex-shrink-0 font-bold mt-0.5">
                  Q
                </span>
                <span>{fillTemplate(faq.question, state)}</span>
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-7.5">
                {fillTemplate(faq.answer, state)}
              </p>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Official State Agency & Authority Box */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-100 to-indigo-50 dark:from-slate-800 dark:to-indigo-950/40 border border-slate-200 dark:border-slate-700/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
        <div>
          <div className="text-xs font-bold text-slate-900 dark:text-slate-100 mb-1 flex items-center gap-2">
            <i className="fas fa-landmark text-indigo-600 dark:text-indigo-400" />
            Official Government Agency: {state.agencyName}
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            For official state tax forms, filing deadlines, payment portals, and statutory updates, visit the official state portal. This calculator is provided for informational and planning purposes.
          </p>
        </div>
        <a
          href={state.agencyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition-all shadow-sm flex items-center gap-2 flex-shrink-0"
        >
          <span>Visit {state.abbreviation} DOR</span>
          <i className="fas fa-external-link-alt text-[10px]" />
        </a>
      </div>

      {/* Related Internal Links Hub */}
      <SectionCard>
        <SectionHead icon="fa-link" title="Related Financial Calculators" color="emerald" />
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Same state other calculators */}
            <div>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-indigo-500" />
                Other {state.name} Calculators
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {otherSameStateCalculators.map((c) => (
                  <Link
                    key={c.id}
                    href={`/${c.categorySlug}/${state.id}-${c.id}`}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 transition-all text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2"
                  >
                    <i className={`fas ${c.icon} text-indigo-500 text-xs w-4`} />
                    <span className="truncate">{fillTemplate(c.nameTemplate, state)}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Same calculator in other states */}
            <div>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                <i className="fas fa-globe-americas text-indigo-500" />
                {template.nameTemplate.replace("{state} ", "")} in Other States
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {sameCalcAcrossStates.map((os) => (
                  <Link
                    key={os.id}
                    href={`/${template.categorySlug}/${os.id}-${template.id}`}
                    className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 transition-all text-xs font-medium text-slate-800 dark:text-slate-200 truncate"
                  >
                    {os.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
