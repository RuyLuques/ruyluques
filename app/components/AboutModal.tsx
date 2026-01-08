"use client";

import Image from "next/image";

interface AboutModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AboutModal({ open, onClose }: AboutModalProps) {
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
        <div className="flex flex-col items-center gap-4 text-center">
          <Image
            src="/logo/ana-ruy.png"
            alt="Ana Ruy Luques"
            width={90}
            height={90}
            className="rounded-full"
            priority
          />

          <h2 className="text-xl font-bold text-white">Ana Ruy Luques</h2>

          <div className="grid grid-cols-2 gap-2 text-left text-xs text-white/80">
            <p>📊 Análises e métricas</p>
            <p>⚙️ Automação de processos</p>
            <p>📱 Desenvolvimento de Sites</p>
            <p>🧩 Documentação e fluxos</p>
          </div>

          <div className="text-xs text-white/85 text-left mt-4">
            <p className="font-semibold mb-1">🎓 Graduação</p>
            <p className="ml-4">Marketing Digital</p>
            <p className="ml-4">Análise e Desenvolvimento de Sistemas</p>

            <p className="font-semibold mt-2 mb-1">🧠 Pós-graduação</p>
            <p className="ml-4">Ciência de Dados</p>
            <p className="ml-4">Robótica e Inteligência Artificial</p>
          </div>
        </div>
      </div>
    </div>
  );
}
