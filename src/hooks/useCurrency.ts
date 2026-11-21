/**
 * Re-export the useCurrency hook from the context for convenient importing.
 *
 * Usage:
 *   import { useCurrency } from '@/hooks/useCurrency';
 *   const { currency, symbol, fmt, fmtShort, convert } = useCurrency();
 */
export { useCurrency } from '@/contexts/CurrencyContext';
