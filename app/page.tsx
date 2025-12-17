"use client";

import Image from "next/image";
import { useState } from "react";
import ThemeToggle from "./components/ThemeToggle";
import AboutModal from "./components/AboutModal";
import Clients from "./components/Clients";
import Services from "./components/Services";
import Footer from "./components/Footer";
import { useTheme } from "./components/ThemeProvider";

export default function Home() {
  const { dark } = useTheme();
  const [openAbout, setOpenAbout] = useState(false);

  return (
    <>
      <section className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-6 text-center">

        <div className="self-end">
          <ThemeToggle />
        </div>

        <Image
          src={dark ? "/logo/img-white.ico" : "/logo/img-black.ico"}
          alt="Ruy Luques"
          width={48}
          height={48}
          priority
        />

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          Soluções digitais modernas e sob medida
        </h1>

        <button
          onClick={() => setOpenAbout(true)}
          className="
          rounded-full
          border
          border-purple-700
          px-6 py-3
          text-sm font-medium
          text-purple-700
          transition
          hover:bg-purple-700
          hover:text-white
          "
        >
          Quem é Ruy Luques?
        </button>

      </section>

      <Services />
      <Clients />
      <Footer />

      <AboutModal open={openAbout} onClose={() => setOpenAbout(false)} />
    </>
  );
}
