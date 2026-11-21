'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SavedCalculator, SavedCalculatorContextValue } from '@/types/savedCalculator';

const SavedCalculatorContext = createContext<SavedCalculatorContextValue>({
  savedCalculators: [],
  saveCalculator: () => {},
  removeCalculator: () => {},
  clearAllCalculators: () => {},
  isCalculatorSaved: () => false,
});

const STORAGE_KEY = 'savedCalculators';

export function SavedCalculatorProvider({ children }: { children: ReactNode }) {
  const [savedCalculators, setSavedCalculators] = useState<SavedCalculator[]>([]);

  // Load saved calculators from localStorage on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setSavedCalculators(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Failed to load saved calculators:', error);
    }
  }, []);

  // Save to localStorage whenever savedCalculators changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedCalculators));
    } catch (error) {
      console.error('Failed to save calculators:', error);
    }
  }, [savedCalculators]);

  const saveCalculator = (calculator: Omit<SavedCalculator, 'id' | 'savedAt'>) => {
    const newCalculator: SavedCalculator = {
      ...calculator,
      id: `${calculator.calculatorHref}-${Date.now()}`,
      savedAt: new Date().toISOString(),
    };
    setSavedCalculators((prev) => [newCalculator, ...prev]);
  };

  const removeCalculator = (id: string) => {
    setSavedCalculators((prev) => prev.filter((calc) => calc.id !== id));
  };

  const clearAllCalculators = () => {
    setSavedCalculators([]);
  };

  const isCalculatorSaved = (calculatorHref: string) => {
    return savedCalculators.some((calc) => calc.calculatorHref === calculatorHref);
  };

  return (
    <SavedCalculatorContext.Provider
      value={{
        savedCalculators,
        saveCalculator,
        removeCalculator,
        clearAllCalculators,
        isCalculatorSaved,
      }}
    >
      {children}
    </SavedCalculatorContext.Provider>
  );
}

export function useSavedCalculators() {
  return useContext(SavedCalculatorContext);
}
