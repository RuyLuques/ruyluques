"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      id="sobre"
      className="mx-auto max-w-7xl px-6 py-20"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">

        <Image
          src="/logo/ana-ruy.png"
          alt="foto de rosto da Ana Ruy Luques"
          width={140}
          height={140}
          className="rounded-full object-cover"
          priority
        />

        <h2 className="text-3xl font-bold sm:text-4xl">
          Ana Ruy Luques
        </h2>

        <p className="text-base font-medium text-neutral-700 dark:text-neutral-300">
          Analista de Sistemas · Desenvolvedora · Dados
        </p>

        <p className="max-w-3xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
          Analista de Sistemas com <strong>mais de 3 anos de experiência</strong>,
          atuando na transformação de gargalos operacionais em
          <strong> soluções digitais escaláveis</strong>.
          Trabalho conectando dados, tecnologia e times para apoiar
          decisões estratégicas e acelerar resultados.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 text-left text-sm text-neutral-600 dark:text-neutral-400 max-w-3xl">
          <p>📊 Dashboards e análises para tomada de decisão</p>
          <p>⚙️ Automação e otimização de processos operacionais</p>
          <p>📱 Gestão e publicação de aplicativos iOS e Android</p>
          <p>🧩 Organização de fluxos, documentação e treinamentos</p>
        </div>

        <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-500">
          Formação em <strong>Análise e Desenvolvimento de Sistemas</strong> ·
          Pós-graduação em andamento em <strong>Ciência de Dados</strong>
        </p>

        <p className="text-sm font-medium">
          📧 anaruyofc@gmail.com
        </p>
      </div>
    </section>
  );
}
