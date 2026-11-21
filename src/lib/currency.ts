// ─── Currency Utilities (USD Standard) ────────────────────────────────────────

export type CurrencyCode = 'USD' | 'CAD' | 'GBP' | 'AUD' | 'EUR' | 'CHF' | 'SGD' | 'JPY';

export interface SupportedCurrency {
  code: CurrencyCode;
  symbol: string;
  name: string;
  country: string;
  locale: string;
  decimals: number;
}

export const DEFAULT_CURRENCY: SupportedCurrency = {
  code: 'USD',
  symbol: '$',
  name: 'US Dollar',
  country: 'United States',
  locale: 'en-US',
  decimals: 2,
};

/**
 * Format a number as currency using Intl.NumberFormat. Defaults to USD ($).
 */
export function formatCurrency(
  amount: number,
  currencyCode: CurrencyCode = 'USD',
  options?: { decimals?: number; compact?: boolean }
): string {
  if (!isFinite(amount) || isNaN(amount)) return '$0';

  const decimals = options?.decimals ?? 2;

  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
      ...(options?.compact ? { notation: 'compact', compactDisplay: 'short' } : {}),
    }).format(amount);
  } catch {
    return '$' + amount.toFixed(decimals);
  }
}

/**
 * Format currency in compact notation (e.g., $1.2K, $3.5M).
 */
export function formatCurrencyShort(amount: number, currencyCode: CurrencyCode = 'USD'): string {
  if (!isFinite(amount) || isNaN(amount)) return '$0';

  const abs = Math.abs(amount);

  if (abs >= 1_000_000_000) {
    return '$' + (amount / 1_000_000_000).toFixed(2) + 'B';
  }
  if (abs >= 1_000_000) {
    return '$' + (amount / 1_000_000).toFixed(2) + 'M';
  }
  if (abs >= 1_000) {
    return '$' + (amount / 1_000).toFixed(1) + 'K';
  }
  return formatCurrency(amount, currencyCode, { decimals: 0 });
}

/**
 * Get the symbol for a currency code.
 */
export function getCurrencySymbol(currencyCode: CurrencyCode = 'USD'): string {
  if (currencyCode === 'GBP') return '£';
  if (currencyCode === 'EUR') return '€';
  if (currencyCode === 'JPY') return '¥';
  return '$';
}

/**
 * Get the locale string for a currency code.
 */
export function getCurrencyLocale(currencyCode: CurrencyCode = 'USD'): string {
  return 'en-US';
}

/**
 * Get the currency info.
 */
export function getCurrencyInfo(currencyCode: CurrencyCode = 'USD'): SupportedCurrency {
  return DEFAULT_CURRENCY;
}
