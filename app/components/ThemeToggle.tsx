"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { dark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Alternar tema"
      className="rounded-full border p-2 transition hover:bg-zinc-100 dark:hover:bg-zinc-900"
    >
      {dark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
