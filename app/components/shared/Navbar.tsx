"use client";

import Image from "next/image";
import { useState } from "react";
import ThemeToggle from "../ui/ThemeToggle";
import { useTheme } from "../context/ThemeProvider";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { dark } = useTheme();

  const linkClass =
    "transition-colors text-neutral-700 dark:text-neutral-100 hover:text-purple-700 dark:hover:text-purple-400";

  return (
    <header className="fixed top-0 z-50 w-full bg-black backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <Image
        src="/logo/img-white.ico"
        alt="logo escrito Ruy Luques"
        width={56}
        height={56}
        priority
        className="opacity-90"
      />

        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li>
            <a href="#home" className={linkClass}>
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className={linkClass}>
              Projetos
            </a>
          </li>
          <li>
            <a href="#experience" className={linkClass}>
              Experiência
            </a>
          </li>
          <li>
            <a href="#footer" className={linkClass}>
              Contato
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <button
            className="md:hidden flex items-center text-neutral-500 dark:text-neutral-300"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-white/90 dark:bg-neutral-950/90 backdrop-blur">
          <ul className="flex flex-col gap-4 px-6 py-4">
            <li>
              <a
                href="#home"
                className={linkClass + " block"}
                onClick={() => setOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={linkClass + " block"}
                onClick={() => setOpen(false)}
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className={linkClass + " block"}
                onClick={() => setOpen(false)}
              >
                Experiência
              </a>
            </li>
            <li>
              <a
                href="#footer"
                className={linkClass + " block"}
                onClick={() => setOpen(false)}
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
