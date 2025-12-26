"use client";

import { useState } from "react";
import {
  Monitor,
  LayoutTemplate,
  Share2,
  Database,
  Book,
  Pen,
  Smartphone,
  Info,
} from "lucide-react";

const operationalanalyst = [
  {
    title: "Gestão de Redes Sociais",
    tag: ["Linkedin", "Instagram", "Whatsapp"],
    icon: Share2,
  },
  {
    title: "Blogs e Conteúdo",
    tag: ["WordPress", "Wix", "Copywriting"],
    icon: Monitor,
  },
  {
    title: "Design",
    tag: ["Figma", "Canva", "Miro"],
    icon: Pen,
  },
  {
    title: "Web site",
    tag: ["React", "Angular", "Firebase"],
    icon: LayoutTemplate,
  },
];

const specialistServices = [
  {
    title: "Análise de Dados",
    tag: ["Power BI", "Looker Studio", "Metabase", "SQL"],
    icon: Database,
  },
  {
    title: "RPA",
    tag: ["UiPath", "Power Automate", "Python", "n8n"],
    icon: Database,
  },
  {
    title: "Documentações",
    tag: ["Notion", "Confluence"],
    icon: Book,
  },
  {
    title: "Desenvolvedor Mobile",
    tag: [
      "Angular",
      "React",
      "Ionic",
      "React Native",
      "TypeScript",
      "Pipeline Whitelabel",
      "Firebase",
      "OneSignal",
      "Google Console",
      "App Store",
      "DeepLink",
      "C#",
      "Azure",
    ],
    icon: Smartphone,
  },
];

function ServiceGrid({ services }: { services: typeof operationalanalyst }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
      {services.map((service) => {
        const Icon = service.icon;

        return (
          <div
            key={service.title}
            className="rounded-2xl bg-white p-4 transition hover:shadow-lg border border-zinc-100"
          >
            <Icon className="mb-4 h-8 w-8 text-purple-700" />

            <h3 className="mb-2 text-sm font-semibold text-zinc-900">
              {service.title}
            </h3>

            <div className="flex flex-wrap gap-1">
              {service.tag.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-zinc-100 px-2 py-1 text-xs text-zinc-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Services() {
  const [open, setOpen] = useState(false);

  return (
    <section id="servicos" className="mx-auto max-w-7xl px-5 py-10">
      <h2 className="mb-16 text-center text-3xl font-semibold">
        Serviços
      </h2>

      <div className="mb-20">
        <div className="mb-8 flex items-center gap-2">
          <h3 className="text-2xl font-semibold">
            Especialista
          </h3>

          <button
            onClick={() => setOpen(!open)}
            className="text-purple-800 transition dark:hover:text-purple-500"
          >
            <Info className="h-5 w-5" />
          </button>
        </div>

        {open && (
          <div className="mb-8 rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700">
            Experiência prática em dados e automações, com aprofundamento técnico em andamento por meio de pós-graduação.
          </div>
        )}

        <ServiceGrid services={specialistServices} />
      </div>

      <div>
        <div className="mb-8 flex items-center gap-2">
          <h3 className="text-2xl font-semibold">
            Outros serviços
          </h3>

          <button
            onClick={() => setOpen(!open)}
            className="text-zinc-500 transition dark:hover:text-purple-500"
          >
            <Info className="h-5 w-5" />
          </button>
        </div>

        {open && (
          <div className="mb-8 rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700">
            Experiência prévia como analista operacional, que fortaleceu minha base técnica e prática para atuação como especialista.
          </div>
        )}

        <ServiceGrid services={operationalanalyst} />
      </div>
    </section>
  );
}