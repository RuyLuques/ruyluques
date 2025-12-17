"use client";

import { createContext, useContext, useState } from "react";

type ThemeContextType = {
  dark: boolean;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggle: () => setDark(!dark),
      }}
    >
      <div
        className={`min-h-screen transition-colors duration-300 ${
          dark ? "bg-black text-zinc-100" : "bg-white text-zinc-900"
        }`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
