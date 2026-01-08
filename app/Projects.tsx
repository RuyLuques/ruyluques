"use client";

import {
  FolderGit2,
  GraduationCap,
  HeartHandshake,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    title: "Mentoria e dicas de carreira",
    description:
      "Atuei compartilhando dicas de carreira, vagas para iniciantes, estudos e mentorias no LinkedIn como trabalho voluntário.",
    tags: ["Comunicação", "Currículo", "Carreira"],
    type: "Profissional",
    icon: FolderGit2,
    link: "#",
  },
  {
    title: "Desenvolvedora Web – Alumni Canadá",
    description:
      "Atuei como voluntária na ONG vinculada ao Consulado do Canadá, desenvolvendo soluções web e utilizando plataformas digitais.",
    tags: ["Fullstack", "WordPress", "Planejamento"],
    type: "Profissional",
    icon: FolderGit2,
    link: "#",
  },
  {
    title: "Projeto de Extensão – Inclusão Digital",
    description:
      "Solução digital desenvolvida com foco em impacto social e acesso à informação.",
    tags: ["Web", "Dados", "Social"],
    type: "Acadêmico",
    icon: GraduationCap,
    link: "#"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-10">
      <h2 className="mb-16 text-center text-3xl font-semibold">
        Projetos
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const Icon = project.icon;

          return (
            <div
              key={project.title}
              className="
                flex
                flex-col
                justify-between
                rounded-2xl
                border
                border-zinc-100
                bg-white
                p-6
                transition
                hover:shadow-lg
              "
            >
              <div>
                <Icon className="mb-4 h-8 w-8 text-purple-700" />

                <span className="mb-2 inline-block text-xs font-medium text-purple-700">
                  {project.type}
                </span>

                <h3 className="mb-2 text-lg font-semibold text-zinc-900">
                  {project.title}
                </h3>

                <p className="mb-4 text-sm text-zinc-600">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-100 px-2 py-1 text-xs text-zinc-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.link}
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  text-purple-700
                  transition
                  hover:underline
                "
              >
                Ver projeto
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
