import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { useConfig } from "./ConfigContext";
import type { ThemeConfig } from "../config/AppConfig";


interface ThemeContextValue {
  theme: ThemeConfig;
  themeName: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const config = useConfig();
  const themeNames = Object.keys(config.themes);
  const [themeName, setThemeName] = useState(config.defaultTheme);

  const theme = config.themes[themeName];

  useEffect(() => {
    const root = document.documentElement;
    const { colors, fontFamily, headingFontFamily } = theme;
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${camelToDash(key)}`, value);
    });
    root.style.setProperty("--font-body", fontFamily);
    root.style.setProperty("--font-heading", headingFontFamily);
    root.style.setProperty("--radius", theme.borderRadius);
    root.style.setProperty("--spacing-page", theme.spacing.page);
    root.style.setProperty("--spacing-section", theme.spacing.section);
    root.style.setProperty("--spacing-card", theme.spacing.card);
  }, [theme]);

  const toggleTheme = () => {
    const idx = themeNames.indexOf(themeName);
    setThemeName(themeNames[(idx + 1) % themeNames.length]);
  };

  return (
    <ThemeContext.Provider value={{ theme, themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};

function camelToDash(str: string) {
  return str.replace(/([A-Z])/g, "-$1").toLowerCase();
}
