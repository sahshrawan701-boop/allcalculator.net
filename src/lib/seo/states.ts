/**
 * State-based SEO data and templates.
 *
 * Provides state information for generating state-specific
 * calculator pages (e.g., /california-tax-calculator).
 */

export interface USState {
  name: string;
  abbreviation: string;
  slug: string;
  hasIncomeTax: boolean;
  /** Top marginal income tax rate (%) — 0 for no-income-tax states */
  topIncomeTaxRate: number;
  /** State sales tax rate (%) */
  salesTaxRate: number;
  /** Average effective property tax rate (%) */
  propertyTaxRate: number;
  keyFacts: string[];
}

// ─── All 50 US States ───────────────────────────────────────────────────────

export const US_STATES: USState[] = [
  { name: 'Alabama', abbreviation: 'AL', slug: 'alabama', hasIncomeTax: true, topIncomeTaxRate: 5.0, salesTaxRate: 4.0, propertyTaxRate: 0.41, keyFacts: ['Flat income tax of 5%', 'Lowest property tax rates in the US'] },
  { name: 'Alaska', abbreviation: 'AK', slug: 'alaska', hasIncomeTax: false, topIncomeTaxRate: 0, salesTaxRate: 0, propertyTaxRate: 1.19, keyFacts: ['No state income tax', 'No state sales tax', 'Permanent Fund Dividend'] },
  { name: 'Arizona', abbreviation: 'AZ', slug: 'arizona', hasIncomeTax: true, topIncomeTaxRate: 2.5, salesTaxRate: 5.6, propertyTaxRate: 0.62, keyFacts: ['Flat income tax of 2.5%', 'Growing tech hub'] },
  { name: 'Arkansas', abbreviation: 'AR', slug: 'arkansas', hasIncomeTax: true, topIncomeTaxRate: 4.7, salesTaxRate: 6.5, propertyTaxRate: 0.62, keyFacts: ['Progressive income tax up to 4.7%', 'High sales tax rate'] },
  { name: 'California', abbreviation: 'CA', slug: 'california', hasIncomeTax: true, topIncomeTaxRate: 13.3, salesTaxRate: 7.25, propertyTaxRate: 0.74, keyFacts: ['Highest state income tax rate (13.3%)', 'Prop 13 limits property tax increases'] },
  { name: 'Colorado', abbreviation: 'CO', slug: 'colorado', hasIncomeTax: true, topIncomeTaxRate: 4.4, salesTaxRate: 2.9, propertyTaxRate: 0.51, keyFacts: ['Flat income tax of 4.4%', 'TABOR limits tax increases'] },
  { name: 'Connecticut', abbreviation: 'CT', slug: 'connecticut', hasIncomeTax: true, topIncomeTaxRate: 6.99, salesTaxRate: 6.35, propertyTaxRate: 2.14, keyFacts: ['Progressive income tax up to 6.99%', 'High property taxes'] },
  { name: 'Delaware', abbreviation: 'DE', slug: 'delaware', hasIncomeTax: true, topIncomeTaxRate: 6.6, salesTaxRate: 0, propertyTaxRate: 0.57, keyFacts: ['No sales tax', 'Progressive income tax up to 6.6%'] },
  { name: 'Florida', abbreviation: 'FL', slug: 'florida', hasIncomeTax: false, topIncomeTaxRate: 0, salesTaxRate: 6.0, propertyTaxRate: 0.89, keyFacts: ['No state income tax', 'Homestead exemption available', 'Tourism-funded economy'] },
  { name: 'Georgia', abbreviation: 'GA', slug: 'georgia', hasIncomeTax: true, topIncomeTaxRate: 5.49, salesTaxRate: 4.0, propertyTaxRate: 0.92, keyFacts: ['Flat income tax of 5.49%', 'Film industry tax credits'] },
  { name: 'Hawaii', abbreviation: 'HI', slug: 'hawaii', hasIncomeTax: true, topIncomeTaxRate: 11.0, salesTaxRate: 4.0, propertyTaxRate: 0.28, keyFacts: ['Second highest income tax (11%)', 'Lowest property tax rates'] },
  { name: 'Idaho', abbreviation: 'ID', slug: 'idaho', hasIncomeTax: true, topIncomeTaxRate: 5.8, salesTaxRate: 6.0, propertyTaxRate: 0.69, keyFacts: ['Flat income tax of 5.8%', 'No tax on groceries'] },
  { name: 'Illinois', abbreviation: 'IL', slug: 'illinois', hasIncomeTax: true, topIncomeTaxRate: 4.95, salesTaxRate: 6.25, propertyTaxRate: 2.27, keyFacts: ['Flat income tax of 4.95%', 'Second highest property taxes in the US'] },
  { name: 'Indiana', abbreviation: 'IN', slug: 'indiana', hasIncomeTax: true, topIncomeTaxRate: 3.05, salesTaxRate: 7.0, propertyTaxRate: 0.85, keyFacts: ['Flat income tax of 3.05%', 'County income taxes also apply'] },
  { name: 'Iowa', abbreviation: 'IA', slug: 'iowa', hasIncomeTax: true, topIncomeTaxRate: 3.8, salesTaxRate: 6.0, propertyTaxRate: 1.57, keyFacts: ['Flat income tax of 3.8%', 'Recently reformed tax brackets'] },
  { name: 'Kansas', abbreviation: 'KS', slug: 'kansas', hasIncomeTax: true, topIncomeTaxRate: 5.7, salesTaxRate: 6.5, propertyTaxRate: 1.41, keyFacts: ['Progressive income tax up to 5.7%', 'High combined sales tax rates'] },
  { name: 'Kentucky', abbreviation: 'KY', slug: 'kentucky', hasIncomeTax: true, topIncomeTaxRate: 4.0, salesTaxRate: 6.0, propertyTaxRate: 0.86, keyFacts: ['Flat income tax of 4.0%', 'Bourbon industry tax benefits'] },
  { name: 'Louisiana', abbreviation: 'LA', slug: 'louisiana', hasIncomeTax: true, topIncomeTaxRate: 4.25, salesTaxRate: 4.45, propertyTaxRate: 0.55, keyFacts: ['Progressive income tax up to 4.25%', 'Highest combined sales taxes'] },
  { name: 'Maine', abbreviation: 'ME', slug: 'maine', hasIncomeTax: true, topIncomeTaxRate: 7.15, salesTaxRate: 5.5, propertyTaxRate: 1.36, keyFacts: ['Progressive income tax up to 7.15%', 'Homestead exemption available'] },
  { name: 'Maryland', abbreviation: 'MD', slug: 'maryland', hasIncomeTax: true, topIncomeTaxRate: 5.75, salesTaxRate: 6.0, propertyTaxRate: 1.07, keyFacts: ['Progressive income tax up to 5.75%', 'Local county taxes also apply'] },
  { name: 'Massachusetts', abbreviation: 'MA', slug: 'massachusetts', hasIncomeTax: true, topIncomeTaxRate: 9.0, salesTaxRate: 6.25, propertyTaxRate: 1.23, keyFacts: ['Flat income tax of 5% + 4% surtax on income over $1M', 'Millionaire tax'] },
  { name: 'Michigan', abbreviation: 'MI', slug: 'michigan', hasIncomeTax: true, topIncomeTaxRate: 4.25, salesTaxRate: 6.0, propertyTaxRate: 1.54, keyFacts: ['Flat income tax of 4.25%', 'City income taxes in some areas'] },
  { name: 'Minnesota', abbreviation: 'MN', slug: 'minnesota', hasIncomeTax: true, topIncomeTaxRate: 9.85, salesTaxRate: 6.875, propertyTaxRate: 1.12, keyFacts: ['Progressive income tax up to 9.85%', 'Clothing exempt from sales tax'] },
  { name: 'Mississippi', abbreviation: 'MS', slug: 'mississippi', hasIncomeTax: true, topIncomeTaxRate: 5.0, salesTaxRate: 7.0, propertyTaxRate: 0.81, keyFacts: ['Flat income tax of 5%', 'High sales tax rate'] },
  { name: 'Missouri', abbreviation: 'MO', slug: 'missouri', hasIncomeTax: true, topIncomeTaxRate: 4.95, salesTaxRate: 4.225, propertyTaxRate: 0.97, keyFacts: ['Progressive income tax up to 4.95%', 'Local sales taxes vary widely'] },
  { name: 'Montana', abbreviation: 'MT', slug: 'montana', hasIncomeTax: true, topIncomeTaxRate: 5.9, salesTaxRate: 0, propertyTaxRate: 0.84, keyFacts: ['No sales tax', 'Progressive income tax up to 5.9%'] },
  { name: 'Nebraska', abbreviation: 'NE', slug: 'nebraska', hasIncomeTax: true, topIncomeTaxRate: 5.84, salesTaxRate: 5.5, propertyTaxRate: 1.73, keyFacts: ['Progressive income tax up to 5.84%', 'High property taxes'] },
  { name: 'Nevada', abbreviation: 'NV', slug: 'nevada', hasIncomeTax: false, topIncomeTaxRate: 0, salesTaxRate: 6.85, propertyTaxRate: 0.60, keyFacts: ['No state income tax', 'Tourism-funded economy', 'Growing tech sector'] },
  { name: 'New Hampshire', abbreviation: 'NH', slug: 'new-hampshire', hasIncomeTax: false, topIncomeTaxRate: 0, salesTaxRate: 0, propertyTaxRate: 2.18, keyFacts: ['No income tax on wages', 'No sales tax', 'Very high property taxes'] },
  { name: 'New Jersey', abbreviation: 'NJ', slug: 'new-jersey', hasIncomeTax: true, topIncomeTaxRate: 10.75, salesTaxRate: 6.625, propertyTaxRate: 2.49, keyFacts: ['Highest property taxes in the US', 'Progressive income tax up to 10.75%'] },
  { name: 'New Mexico', abbreviation: 'NM', slug: 'new-mexico', hasIncomeTax: true, topIncomeTaxRate: 5.9, salesTaxRate: 4.875, propertyTaxRate: 0.80, keyFacts: ['Progressive income tax up to 5.9%', 'Gross receipts tax instead of sales tax'] },
  { name: 'New York', abbreviation: 'NY', slug: 'new-york', hasIncomeTax: true, topIncomeTaxRate: 10.9, salesTaxRate: 4.0, propertyTaxRate: 1.72, keyFacts: ['Top income tax rate of 10.9%', 'NYC has additional city income tax', 'High cost of living'] },
  { name: 'North Carolina', abbreviation: 'NC', slug: 'north-carolina', hasIncomeTax: true, topIncomeTaxRate: 4.5, salesTaxRate: 4.75, propertyTaxRate: 0.84, keyFacts: ['Flat income tax of 4.5%', 'Growing finance and tech sectors'] },
  { name: 'North Dakota', abbreviation: 'ND', slug: 'north-dakota', hasIncomeTax: true, topIncomeTaxRate: 2.5, salesTaxRate: 5.0, propertyTaxRate: 0.98, keyFacts: ['Low flat income tax of 2.5%', 'Energy sector economy'] },
  { name: 'Ohio', abbreviation: 'OH', slug: 'ohio', hasIncomeTax: true, topIncomeTaxRate: 3.5, salesTaxRate: 5.75, propertyTaxRate: 1.56, keyFacts: ['Progressive income tax up to 3.5%', 'Local income taxes in many cities'] },
  { name: 'Oklahoma', abbreviation: 'OK', slug: 'oklahoma', hasIncomeTax: true, topIncomeTaxRate: 4.75, salesTaxRate: 4.5, propertyTaxRate: 0.90, keyFacts: ['Progressive income tax up to 4.75%', 'Oil and gas industry'] },
  { name: 'Oregon', abbreviation: 'OR', slug: 'oregon', hasIncomeTax: true, topIncomeTaxRate: 9.9, salesTaxRate: 0, propertyTaxRate: 0.97, keyFacts: ['No sales tax', 'High income tax up to 9.9%', 'Transit taxes in Portland'] },
  { name: 'Pennsylvania', abbreviation: 'PA', slug: 'pennsylvania', hasIncomeTax: true, topIncomeTaxRate: 3.07, salesTaxRate: 6.0, propertyTaxRate: 1.58, keyFacts: ['Flat income tax of 3.07%', 'Philadelphia has city wage tax'] },
  { name: 'Rhode Island', abbreviation: 'RI', slug: 'rhode-island', hasIncomeTax: true, topIncomeTaxRate: 5.99, salesTaxRate: 7.0, propertyTaxRate: 1.63, keyFacts: ['Progressive income tax up to 5.99%', 'High property taxes'] },
  { name: 'South Carolina', abbreviation: 'SC', slug: 'south-carolina', hasIncomeTax: true, topIncomeTaxRate: 6.4, salesTaxRate: 6.0, propertyTaxRate: 0.57, keyFacts: ['Progressive income tax up to 6.4%', 'Low property taxes'] },
  { name: 'South Dakota', abbreviation: 'SD', slug: 'south-dakota', hasIncomeTax: false, topIncomeTaxRate: 0, salesTaxRate: 4.2, propertyTaxRate: 1.28, keyFacts: ['No state income tax', 'Trust-friendly laws'] },
  { name: 'Tennessee', abbreviation: 'TN', slug: 'tennessee', hasIncomeTax: false, topIncomeTaxRate: 0, salesTaxRate: 7.0, propertyTaxRate: 0.71, keyFacts: ['No state income tax', 'High sales tax rate', 'Growing economy'] },
  { name: 'Texas', abbreviation: 'TX', slug: 'texas', hasIncomeTax: false, topIncomeTaxRate: 0, salesTaxRate: 6.25, propertyTaxRate: 1.80, keyFacts: ['No state income tax', 'High property taxes', 'Major corporate relocation destination'] },
  { name: 'Utah', abbreviation: 'UT', slug: 'utah', hasIncomeTax: true, topIncomeTaxRate: 4.65, salesTaxRate: 6.1, propertyTaxRate: 0.63, keyFacts: ['Flat income tax of 4.65%', 'Silicon Slopes tech hub'] },
  { name: 'Vermont', abbreviation: 'VT', slug: 'vermont', hasIncomeTax: true, topIncomeTaxRate: 8.75, salesTaxRate: 6.0, propertyTaxRate: 1.90, keyFacts: ['Progressive income tax up to 8.75%', 'High property taxes'] },
  { name: 'Virginia', abbreviation: 'VA', slug: 'virginia', hasIncomeTax: true, topIncomeTaxRate: 5.75, salesTaxRate: 5.3, propertyTaxRate: 0.82, keyFacts: ['Progressive income tax up to 5.75%', 'Large federal workforce'] },
  { name: 'Washington', abbreviation: 'WA', slug: 'washington', hasIncomeTax: false, topIncomeTaxRate: 0, salesTaxRate: 6.5, propertyTaxRate: 1.03, keyFacts: ['No state income tax', '7% capital gains tax on high earners', 'Major tech hub'] },
  { name: 'West Virginia', abbreviation: 'WV', slug: 'west-virginia', hasIncomeTax: true, topIncomeTaxRate: 5.12, salesTaxRate: 6.0, propertyTaxRate: 0.58, keyFacts: ['Progressive income tax up to 5.12%', 'Low cost of living'] },
  { name: 'Wisconsin', abbreviation: 'WI', slug: 'wisconsin', hasIncomeTax: true, topIncomeTaxRate: 7.65, salesTaxRate: 5.0, propertyTaxRate: 1.85, keyFacts: ['Progressive income tax up to 7.65%', 'High property taxes'] },
  { name: 'Wyoming', abbreviation: 'WY', slug: 'wyoming', hasIncomeTax: false, topIncomeTaxRate: 0, salesTaxRate: 4.0, propertyTaxRate: 0.61, keyFacts: ['No state income tax', 'No corporate income tax', 'Mineral-rich economy'] },
];

// ─── Helpers ────────────────────────────────────────────────────────────────

/**
 * Find a state by its slug.
 */
export function getStateBySlug(slug: string): USState | undefined {
  return US_STATES.find((s) => s.slug === slug);
}

/**
 * Find a state by abbreviation.
 */
export function getStateByAbbr(abbr: string): USState | undefined {
  return US_STATES.find((s) => s.abbreviation === abbr.toUpperCase());
}

/**
 * Get all states that have income tax.
 */
export function getIncomeTaskStates(): USState[] {
  return US_STATES.filter((s) => s.hasIncomeTax);
}

/**
 * Get all no-income-tax states.
 */
export function getNoIncomeTaxStates(): USState[] {
  return US_STATES.filter((s) => !s.hasIncomeTax);
}
