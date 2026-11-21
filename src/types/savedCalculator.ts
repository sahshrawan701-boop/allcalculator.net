export interface SavedCalculator {
  id: string;
  calculatorName: string;
  calculatorHref: string;
  calculatorIcon: string;
  category: string;
  inputs: Record<string, string | number | boolean>;
  results: Record<string, string | number | boolean>;
  savedAt: string;
}

export interface SavedCalculatorContextValue {
  savedCalculators: SavedCalculator[];
  saveCalculator: (calculator: Omit<SavedCalculator, 'id' | 'savedAt'>) => void;
  removeCalculator: (id: string) => void;
  clearAllCalculators: () => void;
  isCalculatorSaved: (calculatorHref: string) => boolean;
}
