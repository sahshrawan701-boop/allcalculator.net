/**
 * Programmatic FAQ generation for calculator pages.
 *
 * Generates category-specific FAQ content automatically.
 * Returns both the content array and matching FAQPage schema.
 */

import type { Calculator } from '@/data/calculators';
import { generateFAQSchema, type FAQItem } from './schemas';

// ─── Category FAQ Templates ────────────────────────────────────────────────

type FAQTemplate = (calcName: string, subject: string) => FAQItem[];

const MORTGAGE_FAQS: FAQTemplate = (calcName, subject) => [
  {
    question: `What is a ${calcName}?`,
    answer: `A ${calcName} is a free online tool that helps you estimate your ${subject.toLowerCase()} costs, monthly payments, and total interest over the life of your home loan. It uses standard mortgage formulas to provide instant, accurate results.`,
  },
  {
    question: `How does the ${calcName} work?`,
    answer: `Enter your home price, down payment, interest rate, and loan term. The calculator uses the standard amortization formula to compute your monthly payment, total interest paid, and generates an amortization schedule showing how each payment is split between principal and interest.`,
  },
  {
    question: `Is this ${calcName} accurate?`,
    answer: `Yes, our ${calcName} uses industry-standard financial formulas. However, actual costs may vary based on property taxes, insurance, PMI, HOA fees, and current market rates. The results should be used as estimates for planning purposes.`,
  },
  {
    question: `How to calculate ${subject.toLowerCase()} manually?`,
    answer: `The monthly payment formula is M = P[r(1+r)^n]/[(1+r)^n-1], where P is the loan principal, r is the monthly interest rate (annual rate ÷ 12), and n is the total number of payments. Our calculator automates this complex calculation for you.`,
  },
  {
    question: `What factors affect my ${subject.toLowerCase()} payment?`,
    answer: `Key factors include the loan amount, interest rate, loan term (15 vs 30 years), down payment size, property taxes, homeowners insurance, and Private Mortgage Insurance (PMI) if your down payment is less than 20%.`,
  },
];

const TAX_FAQS: FAQTemplate = (calcName, subject) => [
  {
    question: `What is a ${calcName}?`,
    answer: `A ${calcName} is a free online tool that helps you estimate your ${subject.toLowerCase()} liability based on your income, deductions, and filing status. It provides instant estimates to help you plan your finances.`,
  },
  {
    question: `How does the ${calcName} work?`,
    answer: `Enter your gross income, filing status, and applicable deductions or credits. The calculator applies current tax brackets and rates to estimate your total tax liability, effective tax rate, and potential refund or amount owed.`,
  },
  {
    question: `Is this ${calcName} accurate?`,
    answer: `Our ${calcName} uses current tax year brackets and standard rates. However, tax situations vary widely — complex deductions, credits, or state-specific rules may affect your actual liability. Consult a tax professional for official advice.`,
  },
  {
    question: `When should I use a ${calcName}?`,
    answer: `Use this calculator for tax planning throughout the year, estimating quarterly payments, comparing filing statuses, evaluating the impact of major financial decisions, or preparing for tax season.`,
  },
  {
    question: `How to reduce my ${subject.toLowerCase()} liability?`,
    answer: `Common strategies include maximizing deductions (standard or itemized), contributing to tax-advantaged accounts (401k, IRA, HSA), claiming eligible credits, and considering your filing status. Always consult a tax professional for personalized advice.`,
  },
];

const SALARY_FAQS: FAQTemplate = (calcName, subject) => [
  {
    question: `What is a ${calcName}?`,
    answer: `A ${calcName} is a free online tool that helps you convert between salary formats, estimate take-home pay, or compare compensation packages. It accounts for taxes, deductions, and benefits.`,
  },
  {
    question: `How does the ${calcName} work?`,
    answer: `Enter your salary or hourly rate, and the calculator converts between annual, monthly, biweekly, weekly, and hourly rates. It can also estimate tax withholdings and take-home pay based on your filing status and state.`,
  },
  {
    question: `Is this ${calcName} accurate?`,
    answer: `Our calculator uses standard conversion formulas and current tax rates. Actual take-home pay may vary based on pre-tax deductions, benefits, local taxes, and employer-specific withholding policies.`,
  },
  {
    question: `How to calculate ${subject.toLowerCase()} manually?`,
    answer: `To convert annual salary to hourly: divide by 2,080 (52 weeks × 40 hours). To convert hourly to annual: multiply by 2,080. For biweekly, divide annual by 26 pay periods. For monthly, divide by 12.`,
  },
];

const FINANCE_FAQS: FAQTemplate = (calcName, subject) => [
  {
    question: `What is a ${calcName}?`,
    answer: `A ${calcName} is a free online financial tool that helps you estimate ${subject.toLowerCase()} amounts, payments, or returns. It provides instant calculations to support your financial planning.`,
  },
  {
    question: `How does the ${calcName} work?`,
    answer: `Enter your financial details such as amounts, interest rates, and time periods. The calculator applies standard financial formulas to compute results like monthly payments, total interest, or projected growth.`,
  },
  {
    question: `Is this ${calcName} free to use?`,
    answer: `Yes, our ${calcName} is completely free with no registration required. Use it as many times as you need — all calculations run instantly in your browser.`,
  },
  {
    question: `Can I trust the results of this ${calcName}?`,
    answer: `Our calculator uses industry-standard financial formulas. Results are estimates meant for planning purposes. For major financial decisions, consider consulting with a qualified financial advisor.`,
  },
];

const HEALTH_FAQS: FAQTemplate = (calcName, subject) => [
  {
    question: `What is a ${calcName}?`,
    answer: `A ${calcName} is a free health and fitness tool that helps you estimate ${subject.toLowerCase()} based on your personal metrics. It uses clinically-recognized formulas to provide helpful estimates.`,
  },
  {
    question: `How accurate is the ${calcName}?`,
    answer: `Our ${calcName} uses peer-reviewed formulas and standard health metrics. However, individual results may vary. The calculations provide general estimates — consult a healthcare professional for personalized medical advice.`,
  },
  {
    question: `How often should I use this ${calcName}?`,
    answer: `For tracking purposes, using this calculator weekly or monthly can help you monitor changes in your ${subject.toLowerCase()}. Consistency in measurement conditions (time of day, hydration, etc.) improves accuracy.`,
  },
  {
    question: `Is this calculator suitable for everyone?`,
    answer: `This calculator is designed for general adult use. Results may not apply to children, pregnant individuals, athletes, or those with certain medical conditions. Always consult your healthcare provider for personalized guidance.`,
  },
];

const INVESTING_FAQS: FAQTemplate = (calcName, subject) => [
  {
    question: `What is a ${calcName}?`,
    answer: `A ${calcName} is a free online tool to help you estimate ${subject.toLowerCase()} returns, growth projections, or investment outcomes. It uses standard financial models to provide estimates.`,
  },
  {
    question: `How does the ${calcName} work?`,
    answer: `Enter your investment amount, expected return rate, and time horizon. The calculator applies compound interest or relevant financial formulas to project your portfolio's growth over time.`,
  },
  {
    question: `Are the projections guaranteed?`,
    answer: `No — all investment calculators provide estimates based on hypothetical returns. Actual investment performance depends on market conditions, fees, taxes, and other factors. Past performance does not guarantee future results.`,
  },
  {
    question: `How can I improve my ${subject.toLowerCase()} returns?`,
    answer: `Key strategies include starting early, investing consistently, diversifying your portfolio, minimizing fees, taking advantage of tax-advantaged accounts, and maintaining a long-term perspective.`,
  },
];

const GENERIC_FAQS: FAQTemplate = (calcName, subject) => [
  {
    question: `What is a ${calcName}?`,
    answer: `A ${calcName} is a free online tool that helps you calculate ${subject.toLowerCase()} quickly and accurately. Simply enter your values and get instant results — no signup required.`,
  },
  {
    question: `How does the ${calcName} work?`,
    answer: `Enter the required values into the input fields and the calculator will instantly compute the results using standard formulas. All calculations run in your browser for instant results.`,
  },
  {
    question: `Is this ${calcName} free?`,
    answer: `Yes, our ${calcName} is 100% free to use. There are no hidden fees, no registration required, and no limits on usage. Bookmark it for quick access anytime.`,
  },
  {
    question: `How accurate is this ${calcName}?`,
    answer: `Our ${calcName} uses well-established formulas and methods. Results are estimates intended for planning and educational purposes. For critical decisions, consult with a qualified professional.`,
  },
  {
    question: `Can I use this ${calcName} on my phone?`,
    answer: `Yes, our ${calcName} is fully responsive and works on all devices — desktop, tablet, and mobile. The interface adapts to your screen size for the best experience.`,
  },
];

// ─── Template Mapping ───────────────────────────────────────────────────────

const CATEGORY_FAQ_MAP: Record<string, FAQTemplate> = {
  Mortgage: MORTGAGE_FAQS,
  Finance: FINANCE_FAQS,
  Tax: TAX_FAQS,
  Salary: SALARY_FAQS,
  Investing: INVESTING_FAQS,
  Business: FINANCE_FAQS, // Business uses similar templates
  Health: HEALTH_FAQS,
  Education: GENERIC_FAQS,
  Math: GENERIC_FAQS,
  Technology: GENERIC_FAQS,
  Conversion: GENERIC_FAQS,
  Lifestyle: GENERIC_FAQS,
  Science: GENERIC_FAQS,
  Other: GENERIC_FAQS,
};

// ─── Public API ─────────────────────────────────────────────────────────────

/**
 * Extract the "subject" from a calculator name.
 * E.g., "Mortgage Calculator" → "Mortgage"
 */
function extractSubject(name: string): string {
  return name
    .replace(/\s*calculator\s*/gi, '')
    .replace(/\s*&\s*schedule\s*generator\s*/gi, '')
    .trim() || name;
}

/**
 * Generate FAQ content for a calculator page.
 */
export function generateCalculatorFAQs(calc: Calculator): FAQItem[] {
  const template = CATEGORY_FAQ_MAP[calc.parentCategoryId] ?? GENERIC_FAQS;
  const subject = extractSubject(calc.name);
  return template(calc.name, subject);
}

/**
 * Generate FAQ content AND matching FAQPage schema.
 */
export function generateFAQsWithSchema(calc: Calculator) {
  const faqs = generateCalculatorFAQs(calc);
  const schema = generateFAQSchema(faqs);
  return { faqs, schema };
}
