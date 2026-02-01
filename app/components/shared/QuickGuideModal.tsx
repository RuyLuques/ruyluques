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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
            <div
                ref={modalRef}
                role="dialog"
                aria-modal="true"
                className="
  max-w-2xl w-full rounded-2xl
  bg-white text-gray-900
  p-6 shadow-xl text-left space-y-6
"
            >
                <header className="space-y-1">
                    <h2 className="text-2xl font-bold">👋 Guia rápido</h2>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm leading-relaxed">

                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold">🧠 Quem sou</h3>
                            <p>
                                Analista de Sistemas com <strong>4+ anos</strong>,
                                perfil <strong>híbrido (tech + negócio)</strong>,
                                focada em <strong>automação, dados e processos analíticos</strong>.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold">🎯 Objetivo</h3>
                            <p>
                                Ambientes orientados a <strong>dados</strong>,
                                <strong> automação</strong> e <strong>decisão bem fundamentada</strong>.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold">💡 Mentalidade</h3>
                            <p>
                                Não sei tudo, <strong>aprendo rápido</strong> e domino
                                <strong> arquitetura, conceitos e contexto</strong>,
                                não apenas ferramentas.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold">⚙️ Entregas técnicas</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>APIs REST e integração de sistemas</li>
                                <li>Automação (UiPath, n8n, Zapier)</li>
                                <li>Pipelines <strong>ETL / ELT</strong> e limpeza de dados</li>
                                <li>SQL para análise e validação</li>
                                <li>Dashboards para monitoramento contínuo</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold">📈 Atuação analítica</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Métricas e indicadores com o negócio</li>
                                <li>Tradução de demanda → solução técnica</li>
                                <li>Apoio direto à tomada de decisão</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold">🛠 Forma de atuação</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Documentação e padronização</li>
                                <li>Treinamento e suporte aos times</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <footer className="flex flex-col sm:flex-row justify-end gap-3">
                    <a
                        href="/docs/ana-ruy.pdf"
                        download
                        className="bg-yellow-500 inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium
                text-primary hover:bg-primary/10 transition"
                    >
                        Baixar currículo
                    </a>
                </footer>

            </div>
        </div>
    );
}
