"use client";

import { useEffect, useRef } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function QuickGuideModal({ open, onClose }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    }

    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex justify-center px-4 py-6">
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        className="
          w-full max-w-2xl
          max-h-[90vh]
          bg-white text-gray-900
          rounded-2xl shadow-xl
          flex flex-col
        "
      >
        <header className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold">Guia rápido</h2>

          <button
            onClick={onClose}
            aria-label="Fechar modal"
            className="
              rounded-md p-2
              text-gray-500 hover:text-gray-900
              hover:bg-gray-100
              focus:outline-none focus:ring-2 focus:ring-primary
            "
          >
            ✕
          </button>
        </header>

        <div
          className="
            flex-1 overflow-y-auto
            p-6
            grid grid-cols-1 md:grid-cols-2 gap-6
            text-sm leading-relaxed
            overscroll-contain
          "
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">🧠 Quem sou</h3>
              <p>
               Tenho 26 anos, moro em Sergipe, casada, tenho 4 gatos e muitas plantinhas.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">🎯 Objetivo</h3>
              <p>
                Ambientes orientados a <strong>dados</strong>,{" "}
                <strong>automação</strong> e{" "}
                <strong>decisão bem fundamentada</strong>.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">💡 Mentalidade</h3>
              <p>
                Não sei tudo, <strong>aprendo rápido</strong> e domino{" "}
                <strong>arquitetura, conceitos e contexto</strong>.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">⚙️ Entregas técnicas</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>APIs REST e integração de sistemas</li>
                <li>Automação (UiPath, n8n, Zapier)</li>
                <li>Pipelines ETL / ELT</li>
                <li>SQL para análise e validação</li>
                <li>Dashboards de monitoramento</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">📈 Atuação analítica</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Métricas com o negócio</li>
                <li>Tradução demanda → solução</li>
                <li>Apoio à tomada de decisão</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">🛠 Forma de atuação</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Documentação e padrão</li>
                <li>Treinamento e suporte</li>
              </ul>
            </div>
          </div>
        </div>

        <footer className="p-6 border-t flex justify-end">
          <a
            href="/docs/ana-ruy.pdf"
            download
            className="bg-yellow-500 rounded-lg px-4 py-2 text-sm font-medium hover:opacity-90"
          >
            Baixar currículo
          </a>
        </footer>
      </div>
    </div>
  );
}
