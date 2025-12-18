"use client";

import Image from "next/image";
import { useState } from "react";

interface AboutModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AboutModal({ open, onClose }: AboutModalProps) {
  const [showSkills, setShowSkills] = useState(false);
  const [showEducation, setShowEducation] = useState(false);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl rounded-2xl bg-neutral-900 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-xl font-bold text-white/70 hover:text-white"
          aria-label="Fechar"
        >
          ✕
        </button>

        <div className="flex flex-col items-center gap-4 text-center">
          <Image
            src="/logo/ana-ruy.png"
            alt="Ana Ruy Luques"
            width={90}
            height={90}
            className="rounded-full"
            priority
          />

          <h2 className="text-xl font-bold text-white">
            Ana Ruy Luques
          </h2>

          <p className="text-sm text-white/80">
            Programadora
          </p>

          <p className="text-sm leading-snug text-white/90">
            Programadora com <strong>mais de 5 anos de experiência</strong>,
            focada em criar <strong>soluções digitais escaláveis </strong>
            que automatizam processos e geram valor real.
          </p>

          <button
            onClick={() => setShowSkills(!showSkills)}
            className="text-sm font-medium text-purple-400 hover:underline"
          >
            {showSkills ? "Ocultar o que faço" : "Ver o que faço"}
          </button>

          {showSkills && (
            <div className="grid grid-cols-2 gap-2 text-left text-xs text-white/80">
              <p>📊 Análises e métricas</p>
              <p>⚙️ Automação de processos</p>
              <p>📱 Desenvolvimento de Sites</p>
              <p>🧩 Documentação e fluxos</p>
            </div>
          )}

          <button
            onClick={() => setShowEducation(!showEducation)}
            className="text-sm font-medium text-purple-400 hover:underline"
          >
            {showEducation ? "Ocultar formação" : "Ver formação acadêmica"}
          </button>

          {showEducation && (
            <div className="text-xs text-white/85 text-left">
              <p className="font-semibold mb-1">🎓 Graduação</p>
              <p className="ml-4">Marketing Digital</p>
              <p className="ml-4">Análise e Desenvolvimento de Sistemas</p>

              <p className="font-semibold mt-2 mb-1">🧠 Pós-graduação</p>
              <p className="ml-4">Ciência de Dados</p>
              <p className="ml-4">Robótica e Inteligência Artificial</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
