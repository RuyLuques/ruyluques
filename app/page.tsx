"use client";

import Image from "next/image";
import ThemeToggle from "./components/ThemeToggle";
import Clients from "./components/Clients";
import Services from "./components/Services";
import Footer from "./components/Footer";
import { useTheme } from "./components/ThemeProvider";

export default function Home() {
  const { dark } = useTheme();

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
      </section>

      <Services />
      <Clients />
      <Footer />
    </>
  );
}
