'use client';

import { useState, useEffect, type ReactNode } from 'react';
import { ThemeContext, type Theme } from './themeContext';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };
  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove('light', 'dark');

    root.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme }}
      data-testid="theme-provider"
    >
      {children}
    </ThemeContext.Provider>
  );
};

export type { Theme } from './themeContext';

export default ThemeProvider;
