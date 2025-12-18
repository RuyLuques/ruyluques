"use client";

import Image from "next/image";
import { useState } from "react";
import Footer from "./components/Footer";
import Clients from "./components/Clients";
import Services from "./components/Services";
import AboutModal from "./components/AboutModal";
import ThemeToggle from "./components/ThemeToggle";
import Technologies from "./components/Technologies"; 
import { useTheme } from "./components/ThemeProvider";

export default function Home() {
  const { dark } = useTheme();
  const [openAbout, setOpenAbout] = useState(false);

  return (
    <>
      <section className="
        mx-auto
        flex
        max-w-7xl
        flex-col
        items-center
        gap-8
        px-6
        py-16
        text-center
      ">

        <div className="absolute right-6 top-6">
          <ThemeToggle />
        </div>

        <Image
          src={dark ? "/logo/img-white.ico" : "/logo/img-black.ico"}
          alt="Ruy Luques"
          width={56}
          height={56}
          priority
          className="opacity-90"
        />

        <h1 className="
          max-w-3xl
          text-4xl
          font-bold
          tracking-tight
          sm:text-5xl
        ">
          Transformo problemas reais em sistemas que funcionam
        </h1>

        <p className="max-w-xl text-sm text-neutral-500">
          Desenvolvimento de sistemas, automações e soluções digitais focadas em eficiência, dados e resultado.
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => setOpenAbout(true)}
            className="
              rounded-full
              border
              border-purple-700
              px-6
              py-3
              text-sm
              font-medium
              text-purple-700
              transition
              hover:bg-purple-700
              hover:text-white
            "
          >
            Sobre mim
          </button>
        </div>
      </section>

      <Services />
      <Clients />
      <Technologies/>
      <Footer />

      <AboutModal open={openAbout} onClose={() => setOpenAbout(false)} />
    </>
  );
}
