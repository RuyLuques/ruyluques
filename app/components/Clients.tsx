"use client";

import Image from "next/image";
import { useState } from "react";
import { Info } from "lucide-react";

const clients = [
  {
    name: "Alumni",
    logo: "/clients/alumni.png",
    desc: "Desenvolvimento de site institucional e melhorias de performance.",
  },
  {
    name: "Bihands",
    logo: "/clients/bihands.png",
    desc: "Suporte técnico.",
  },
  {
    name: "EcoDoctor",
    logo: "/clients/ecodoctor.png",
    desc: "Desenvolvimento de sistema ERP em Vue.js para gestão e automação de processos."
  },
  {
    name: "Felipe Leite",
    logo: "/clients/felipe-leite.png",
    desc: "Criação de site institucional.",
  },
  {
    name: "IFS",
    logo: "/clients/ifs.png",
    desc: "Instrutora de programação e marketing.",
  },
  {
    name: "Nibo",
    logo: "/clients/nibo.png",
    desc: "Desenvolvimento de site, hotsite, aplicativo, gestão de CRM, criação de materiais digitais de marketing, criação de documentações, dashboards, automação com excel e softwares. E Suporte técnico.",
  },
  {
    name: "Petlove",
    logo: "/clients/petlove.png",
    desc: "Endomarketing, assistente de eventos e desenvolvimento de ERP no produto VETUS.",
  },
  {
    name: "Sagrado Coração",
    logo: "/clients/sagrado-coracao.png",
    desc: "Suporte técnico no site institucional.",
  },
];

export default function Clients() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="mx-auto max-w-7xl px-5 py-10">
      <h2 className="mb-12 text-center text-3xl font-semibold">
        Clientes
      </h2>

      <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-5 items-center">
        {clients.map((client) => (
          <div
            key={client.name}
            className="relative flex justify-center"
          >
            {/* LOGO */}
            <Image
              src={client.logo}
              alt={client.name}
              width={70}
              height={70}
              className="rounded-2xl"
            />

            {/* BOTÃO FLUTUANTE */}
            <button
              onClick={() =>
                setOpen(open === client.name ? null : client.name)
              }
              className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-purple-700 text-white shadow hover:bg-purple-800"
              aria-label={`Detalhes sobre ${client.name}`}
            >
              <Info size={14} />
            </button>

            {/* POPUP */}
            {open === client.name && (
              <div className="absolute top-20 z-10 w-48 rounded-xl border bg-white p-4 text-sm text-zinc-700 shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
                <strong className="block mb-1 text-zinc-900 dark:text-zinc-100">
                  {client.name}
                </strong>
                {client.desc}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
