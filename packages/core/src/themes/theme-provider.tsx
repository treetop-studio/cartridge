import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { ThemeContextValue, ThemeName, Theme } from '@treetop-studio/cartridge/types/theme';
import { defaultTheme } from '@treetop-studio/cartridge/themes/default';
import { retroTheme } from '@treetop-studio/cartridge/themes/retro';  
import { glassmorphismTheme } from '@treetop-studio/cartridge/themes/glassmorphism';

const themes: Record<ThemeName, Theme> = {
  default: defaultTheme,
  retro: retroTheme,
  glassmorphism: glassmorphismTheme,
  minimal: defaultTheme // TODO: Create minimal theme
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: ThemeName;
  storageKey?: string;
}

export function ThemeProvider({ 
  children, 
  defaultTheme = 'default',
  storageKey = 'cartridge-theme'
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<ThemeName>(defaultTheme);

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored && stored in themes) {
      setThemeState(stored as ThemeName);
    }
  }, [storageKey]);

  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme);
    localStorage.setItem(storageKey, newTheme);
  };

  useEffect(() => {
    const currentTheme = themes[theme];
    const root = document.documentElement;
    
    // Apply CSS variables
    Object.entries(currentTheme.cssVariables).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    // Apply theme class for any additional styling
    root.className = root.className.replace(/theme-\w+/g, '');
    root.classList.add(`theme-${theme}`);
  }, [theme]);

  const value: ThemeContextValue = {
    theme,
    setTheme,
    themes
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}