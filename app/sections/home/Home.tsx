"use client";

import { useState } from "react";
import ThemeToggle from "../../components/ui/ThemeToggle";
import Technologies from "../../components/shared/Technologies";
import QuickGuideModal from "../../components/shared/QuickGuideModal";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        id="home"
        className="
          relative mx-auto flex flex-col items-center justify-center
          min-h-screen gap-8 px-4 sm:px-6 lg:px-8
          pt-32 sm:pt-40 lg:pt-48 pb-24 sm:pb-32 text-center
        "
      >
        <div className="absolute right-4 top-4 sm:right-6 sm:top-6">
          <ThemeToggle />
        </div>

        <h1 className="max-w-3xl text-4xl font-bold py-8 tracking-tight sm:text-5xl">
          Ana Ruy Luques
        </h1>

        <p className="max-w-xl text-xl">
          Mais de <strong>4 anos</strong> de experiência em{" "}
          <strong>programação</strong>. Perfil{" "}
          <strong>analítico</strong> e <strong>híbrido</strong>.
        </p>

        <button
          onClick={() => setOpen(true)}
          className="
            mt-2 inline-flex items-center gap-2 rounded-full
            border px-5 py-2 text-sm font-medium
            hover:bg-muted transition
          "
          aria-label="Abrir guia rápido"
        >
          ⚡ Guia rápido para recrutadores
        </button>

        <div className="w-full flex justify-center mt-4">
          <Technologies />
        </div>
      </section>

      <QuickGuideModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
