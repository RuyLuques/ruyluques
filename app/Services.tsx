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
    title: "DevOps / Cloud",
    tag: ["Azure", "Firebase", "AWS EC2", "AWS S3", "VPC", "CI/CD", "GitLab CI", "Jenkins", "Bitbucket Pipelines"],
    icon: LayoutTemplate,
  },
  {
    title: "Documentação",
    tag: ["Notion", "Confluence", "Miro", "Treinamentos internos"],
    icon: LayoutTemplate,
  },
    {
    title: "Web",
    tag: ["React", "Angular", "Vue", "API", "TypeScript", "JavaScript", "C#"],
    icon: LayoutTemplate,
  },
  {
    title: "Mobile",
    tag: ["Ionic", "React Native", "Google Play", "App Store", "OneSignal"],
    icon: LayoutTemplate,
  },
  {
    title: "Marketing Digital",
    tag: ["HubSpot", "UserPilot", "Endomarketing", "G4", "Gestão de Redes Sociais"],
    icon: LayoutTemplate,
  },
  {
    title: "Suporte / Infra",
    tag: ["Windows", "Linux (Ubuntu)", "macOS", "Monitoramento de bugs (DataDog)"],
    icon: Info,
  },
  {
    title: "Design",
    tag: ["Figma", "Canva", "Miro", "UX/UI"],
    icon: Pen,
  },
  {
    title: "Blogs e Conteúdo",
    tag: ["WordPress", "Wix", "Copywriting", "SEO"],
    icon: Monitor,
  },
];

const specialistServices = [
    {
    title: "Banco de Dados",
    tag: ["SQL", "Power BI", "Looker Studio", "Metabase", "Databricks"],
    icon: Database,
  },
  {
    title: "Automação / RPA",
    tag: ["RPA", "UiPath", "Power Automate", "n8n", "Zapier", "Python + Selenium", "Shell Script"],
    icon: Share2,
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

      <div className="mb-20">
        <h2 className="mb-16 text-center text-3xl font-semibold">
          Experiências
        </h2>

        <div className="mb-8 flex items-center gap-2">
          <h3 className="text-2xl font-semibold">
            Especialização em andamento
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