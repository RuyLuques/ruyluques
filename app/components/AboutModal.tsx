"use client";

import Image from "next/image";

interface AboutModalProps {
    open: boolean;
    onClose: () => void;
}

export default function AboutModal({ open, onClose }: AboutModalProps) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
            onClick={onClose}

        >
            <div className="relative w-full max-w-3xl rounded-2xl bg-neutral-900 p-6"
                onClick={(e) => e.stopPropagation()}

            >

                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-xl font-bold text-white/70 hover:text-white"
                >
                    ✕
                </button>

                <div className="flex flex-col items-center gap-4 text-center">

                    <Image
                        src="/logo/ana-ruy.png"
                        alt="Ana Ruy Luques"
                        width={100}
                        height={100}
                        className="rounded-full"
                        priority
                    />

                    <h2 className="text-xl font-bold text-white">
                        Ana Ruy Luques
                    </h2>

                    <p className="text-sm text-white/80">
                        Programadora
                    </p>

                    <p className="text-sm leading-snug text-white/90 max-w-2xl">
                        Programadora com <strong>mais de 5 anos de experiência</strong>,
                        desenvolvendo <strong>soluções digitais escaláveis</strong> que
                        reduzem retrabalho, automatizam processos e transformam
                        necessidades de negócio em sistemas funcionais.
                        Atualmente me especializo em <strong>dados</strong>,
                        aplicando tecnologia para apoiar decisões e gerar valor real.
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-left text-xs text-white/80 max-w-2xl">
                        <p>📊 Análises e métricas</p>
                        <p>⚙️ Automação de processos</p>
                        <p>📱 Desenvolvimento de Sites</p>
                        <p>🧩 Documentação e fluxos</p>
                    </div>

                    <div className="mt-1 text-xs text-white/85 max-w-2xl text-left">
                        <p className="mb-1 text-center font-semibold text-white py-3">
                            Formação Acadêmica
                        </p>

                        <div className="mb-1">
                            <p className="flex items-center gap-2 font-medium text-white">
                                🎓 Graduação
                            </p>
                            <p className="ml-6">
                                Marketing Digital
                            </p>
                            <p className="ml-6">
                                Análise e Desenvolvimento de Sistemas
                            </p>
                        </div>

                        <div>
                            <p className="flex items-center gap-2 font-medium text-white">
                                🧠 Pós-graduação
                            </p>
                            <p className="ml-6">
                                Ciência de Dados
                            </p>
                            <p className="ml-6">
                                Robótica e Inteligência Artificial
                            </p>
                        </div>
                    </div>


                    <p className="text-xs font-medium text-white">
                        📧 ruyluques@hotmail.com
                    </p>
                </div>
            </div>
        </div>
    );
}
