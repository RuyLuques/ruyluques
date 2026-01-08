"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeProvider";

export default function ThemeToggle() {
  const { dark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Alternar tema"
      className="rounded-full p-2 transition text-purple-700 hover:text-purple-500"
    >
      {dark ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
}
