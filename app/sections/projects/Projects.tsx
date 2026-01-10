"use client";

import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-10">
      <header className="mb-16 text-center">
        <h2 className="text-3xl font-semibold text-zinc-900">
          Projetos
        </h2>
        <p className="mt-3 text-sm text-zinc-600">
          Projetos profissionais, acadêmicos e iniciativas com impacto real
        </p>
      </header>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
