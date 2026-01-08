"use client";

import Image from "next/image";
import { useState } from "react";
import { Info, X } from "lucide-react";

const clients = [
  {
    name: "Alumni",
    logo: "/clients/alumni.svg",
    desc: "Desenvolvimento de site institucional e melhorias de performance.",
  },
  {
    name: "Bihands",
    logo: "/clients/bihands.svg",
    desc: "Suporte técnico.",
  },
  {
    name: "EcoDoctor",
    logo: "/clients/ecodoctor.svg",
    desc: "Desenvolvimento de sistema ERP em Vue.js para gestão e automação de processos.",
  },
  {
    name: "Felipe Leite",
    logo: "/clients/felipe-leite.svg",
    desc: "Criação de site institucional.",
  },
  {
    name: "IFS",
    logo: "/clients/ifs.svg",
    desc: "Instrutora de programação e marketing.",
  },
  {
    name: "Nibo",
    logo: "/clients/nibo.svg",
    desc: "Desenvolvimento de sites, hotsites e aplicativos, gestão de CRM, dashboards, automações, documentação técnica, materiais digitais de marketing e suporte técnico.",
  },
  {
    name: "Petlove",
    logo: "/clients/petlove.svg",
    desc: "Endomarketing, assistente de eventos e desenvolvimento de ERP no produto VETUS.",
  },
  {
    name: "Sagrado Coração",
    logo: "/clients/sagrado-coracao.svg",
    desc: "Suporte técnico no site institucional.",
  },
];


export default function Clients() {
  const [activeClient, setActiveClient] = useState<typeof clients[0] | null>(null);

  return (
    <section className="mx-auto max-w-7xl px-5 py-10">
      <h2 className="mb-16 text-center text-3xl font-semibold">
        Clientes e experiências profissionais
      </h2>

      <div className="grid grid-cols-3 gap-10 sm:grid-cols-3 md:grid-cols-5">
        {clients.map((client) => (
          <div
            key={client.name}
            className="relative mx-auto flex flex-col items-center"
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={70}
              height={70}
              className="rounded-2xl"
            />

            <button
              onClick={() => setActiveClient(client)}
              className="absolute -right-4 -top-4 flex h-6 w-6 items-center justify-center text-purple-800 hover:text-purple-500"
              aria-label={`Detalhes sobre ${client.name}`}
            >
              <Info size={18} />
            </button>
          </div>
        ))}
      </div>

      {activeClient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setActiveClient(null)}
          />

          <div className="relative z-10 max-w-3xl rounded-2xl bg-white p-6 shadow-xl dark:bg-zinc-950">
            <button
              onClick={() => setActiveClient(null)}
              className="absolute right-4 top-4 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
              aria-label="Fechar"
            >
              <X size={18} />
            </button>

            <div className="flex flex-col items-center gap-4 text-center">
              <Image
                src={activeClient.logo}
                alt={activeClient.name}
                width={80}
                height={80}
                className="rounded-xl"
              />

              <h3 className="text-lg text-white font-semibold">
                {activeClient.name}
              </h3>

              <p className="text-sm text-white dark:text-zinc-300">
                {activeClient.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
