'use client';

import { createContext, useContext, useEffect, useState, useCallback, ReactNode, useRef } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'light',
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Check if dark class is already set by anti-FOUC script
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'light';
  });
  const hasInitialized = useRef(false);

  // Load theme from localStorage only after mount
  useEffect(() => {
    if (typeof window !== 'undefined' && !hasInitialized.current) {
      hasInitialized.current = true;
      const saved = localStorage.getItem('theme') as Theme | null;
      const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      const initialTheme = saved ?? preferred;
      
      setTheme(initialTheme);
      
      // Apply theme to DOM
      const root = document.documentElement;
      if (initialTheme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }, []);

  const applyTheme = useCallback((t: Theme) => {
    const root = document.documentElement;
    if (t === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    // Apply theme to DOM when theme changes
    applyTheme(theme);
  }, [theme, applyTheme]);

  const toggleTheme = useCallback(() => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    
    // Disable transitions for instant theme change
    document.body.classList.add('theme-changing');
    
    setTheme(next);
    applyTheme(next);
    
    // Only access localStorage on client
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', next);
    }
    
    // Re-enable transitions after a brief delay
    setTimeout(() => {
      document.body.classList.remove('theme-changing');
    }, 50);
  }, [theme, applyTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
