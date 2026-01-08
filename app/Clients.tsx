"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Client {
  name: string;
  logo: string;
  role?: string;
  type?: "CLT" | "PJ" | "Voluntário" | "Temporário";
  desc: string | { period: string; responsibilities: string[]; results?: string[] };
}

const clients: Client[] = [
  {
    name: "Ruy Luques",
    logo: "/clients/ruy.svg",
    role: "Freelancer",
    type: "PJ",
    desc: {
      period: "08/2025 - atual",
      responsibilities: [
        "Atualmente sou freelancer.",
      ]
    }
  },
  {
    name: "Nibo",
    logo: "/clients/nibo.svg",
    role: "Estagiária | Desenvolvedora Frontend",
    type: "CLT",
    desc: {
      period: "14/11/2023 - 25/07/2025",
      responsibilities: [
        "Estagiária de tecnologia, apoiando o time de marketing na criação de produtos digitais e CRM.",
        "Analista de Sistemas Nível 2, atuando com desenvolvimento web, mobile e DevOps.",
        "Gestão de fluxos internos, documentação técnica e treinamento de novos colaboradores.",
        "Análise de dados e dashboards com Excel, Looker Studio e Metabase.",
        "Levantamento e tratamento de dados de aplicativos novos e ativos.",
        "Automação de processos e monitoramento de sistemas via DataDog."
      ],
      results: [
        "Expansão da plataforma de 50 apps para mais de 700 apps.",
        "Aprimoramento de processos internos e fluxo de dados.",
        "Entrega simultânea de desenvolvimento e análise de dados com valor para o cliente final.",
        "Treinamento de novos colaboradores e fortalecimento da cultura de conhecimento."
      ]
    }
  },
  {
    name: "Petlove",
    logo: "/clients/petlove.svg",
    role: "Estagiária | Desenvolvedora Frontend",
    type: "CLT",
    desc: {
      period: "02/2022 - 02/2023",
      responsibilities: [
        "Endomarketing: fortalecimento da cultura interna do time de tecnologia.",
        "Assistente de eventos: organização de eventos internos (com fotos).",
        "Suporte técnico N1: atendimento no produto Convênio Saúde.",
        "Desenvolvimento frontend: interfaces web para o produto VETUS."
      ]
    }
  },
  {
    name: "IFS",
    logo: "/clients/ifs.svg",
    role: "Instrutora de Informática e Programação",
    type: "Temporário",
    desc: {
      period: "11/2023 - 12/2023",
      responsibilities: [
        "Instrutora de Informática em parceria com a Caixa Econômica Federal.",
        "Ministração de aulas práticas e treinamentos durante 40 dias."
      ]
    }
  },
  {
    name: "Sagrado Coração",
    logo: "/clients/sagrado-coracao.svg",
    role: "Suporte Técnico",
    type: "CLT",
    desc: {
      period: "11/2024",
      responsibilities: ["Suporte técnico no site institucional."]
    }
  },
  {
    name: "Alumni",
    logo: "/clients/alumni.svg",
    role: "Desenvolvedora Frontend",
    type: "Voluntário",
    desc: {
      period: "04/2022 - 04/2023",
      responsibilities: [
        "Desenvolvedora Web voluntária na ONG Alumni Canadá, vinculada ao Consulado do Canadá.",
        "Desenvolvimento de soluções web e utilização de plataformas digitais.",
        "Fullstack development com WordPress.",
        "Planejamento de projetos digitais e colaboração em equipe."
      ]
    }
  },
  {
    name: "Felipe Leite",
    logo: "/clients/felipe-leite.svg",
    role: "Desenvolvedora Frontend",
    type: "PJ",
    desc: {
      period: "11/2025 - 12/2025",
      responsibilities: [
        "Freelancer desenvolvendo website para artista plástico.",
        "Implementação de layouts responsivos e melhorias de performance."
      ]
    }
  },
  {
    name: "EcoDoctor",
    logo: "/clients/ecodoctor.svg",
    role: "Desenvolvedora Frontend",
    type: "PJ",
    desc: {
      period: "04/2023 - 06/2023",
      responsibilities: [
        "Desenvolvimento em Vue.js para software de médicos.",
        "Criação e execução de testes unitários.",
        "Apoio na manutenção e melhoria de funcionalidades do sistema."
      ]
    }
  },
  {
    name: "Bihands",
    logo: "/clients/bihands.svg",
    role: "Suporte Técnico",
    type: "Temporário",
    desc: {
      period: "12/2025",
      responsibilities: [
        "Suporte técnico a clientes.",
        "Instalação e configuração de software.",
        "Acesso remoto via AnyDesk para suporte."
      ]
    }
  },
];

export default function Clients() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-7xl px-5 py-10">
      <h2 className="mb-16 text-center text-3xl font-bold">
        Clientes e experiências profissionais
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {clients.map((client, index) => (
          <div
            key={client.name}
            className="bg-white rounded-xl shadow p-5 flex flex-col items-center transition hover:shadow-lg"
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={80}
              height={80}
              className="rounded-xl mb-3"
            />

            <h3 className="text-sm text-zinc-500 dark:text-zinc-400 text-center mb-2">
              {client.role}
            </h3>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white text-center">
              {client.name}
            </h3>

            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="mt-3 flex items-center gap-2 text-zinc-700 font-medium hover:text-purple-500"
            >
              {openIndex === index ? "Ocultar detalhes" : "Ver detalhes"}
              {openIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            {openIndex === index && (
              <div className="mt-4 w-full text-left text-sm text-zinc-700 space-y-3">
                {typeof client.desc === "string" ? (
                  <p className="leading-relaxed">{client.desc}</p>
                ) : (
                  <>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="inline-block bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full text-xs font-semibold">
                        {client.desc.period}
                      </span>
                      {client.type && (
                        <span className="inline-block bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-semibold">
                          {client.type}
                        </span>
                      )}
                    </div>

                    <div>
                      <p className="font-semibold text-zinc-700">Responsabilidades:</p>
                      <ul className="list-disc list-inside ml-5 space-y-1 leading-relaxed text-zinc-700">
                        {client.desc.responsibilities.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {client.desc.results && (
                      <div>
                        <p className="font-semibold text-zinc-700">Resultados:</p>
                        <ul className="list-disc list-inside ml-5 space-y-1 leading-relaxed text-zinc-700">
                          {client.desc.results.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
