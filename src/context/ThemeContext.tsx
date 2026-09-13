import React, { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: 'dark' | 'light') => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Check saved preference or default to dark
    const saved = localStorage.getItem('vocashield_theme');
    if (saved) {
      return saved === 'dark';
    }
    return true; // Default dark
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('vocashield_theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('vocashield_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const setTheme = (theme: 'dark' | 'light') => {
    setIsDark(theme === 'dark');
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
