'use client';

import {
  createContext,
  useContext,
  ReactNode,
} from 'react';
import {
  CurrencyCode,
  formatCurrency,
  formatCurrencyShort,
} from '@/lib/currency';

// ─── Context Value ────────────────────────────────────────────────────────────

export interface CurrencyContextValue {
  /** Currently active currency code (standard USD) */
  currency: CurrencyCode;
  /** Symbol for the current currency ("$") */
  symbol: string;
  /** Locale string for the current currency ("en-US") */
  locale: string;
  /** Exchange rates (null since currency switching is disabled) */
  rates: null;
  /** Whether exchange rates are loading (always false) */
  isLoadingRates: boolean;
  /** No-op currency setter retained for interface compatibility */
  setCurrency: (code: CurrencyCode) => void;
  /** Format a number as currency ($) */
  fmt: (amount: number, decimals?: number) => string;
  /** Format a number as compact currency (e.g. $1.2K) */
  fmtShort: (amount: number) => string;
  /** Identity conversion function retained for interface compatibility */
  convert: (amount: number, from?: CurrencyCode, to?: CurrencyCode) => number;
}

const DEFAULT_CURRENCY_VALUE: CurrencyContextValue = {
  currency: 'USD',
  symbol: '$',
  locale: 'en-US',
  rates: null,
  isLoadingRates: false,
  setCurrency: () => {},
  fmt: (amount: number, decimals?: number) =>
    formatCurrency(amount, 'USD', decimals !== undefined ? { decimals } : undefined),
  fmtShort: (amount: number) => formatCurrencyShort(amount, 'USD'),
  convert: (amount: number) => amount,
};

const CurrencyContext = createContext<CurrencyContextValue>(DEFAULT_CURRENCY_VALUE);

// ─── Provider ─────────────────────────────────────────────────────────────────

export function CurrencyProvider({ children }: { children: ReactNode }) {
  return (
    <CurrencyContext.Provider value={DEFAULT_CURRENCY_VALUE}>
      {children}
    </CurrencyContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useCurrency() {
  return useContext(CurrencyContext);
}
