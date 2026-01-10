"use client";

import { useMemo, useState } from "react";

import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectType } from "../../types/project";

const FILTERS: (ProjectType | "Todos")[] = [
  "Todos",
  "Profissional",
  "Acadêmico",
  "Social",
];

function getProjectTimestamp(status?: string) {
  if (!status) return 0;

  if (status.toLowerCase().includes("progresso")) {
    return Number.MAX_SAFE_INTEGER;
  }

  const matches = status.match(/(\d{2}\/\d{4}|\d{4})/g);

  if (!matches || matches.length === 0) return 0;

  const last = matches[matches.length - 1];

  let month = 1;
  let year = 0;

  if (last.includes("/")) {
    const [m, y] = last.split("/");
    month = Number(m);
    year = Number(y);
  } else {
    year = Number(last);
  }

  return new Date(year, month - 1).getTime();
}

export default function Projects() {
  const [filter, setFilter] = useState<ProjectType | "Todos">("Todos");

  const filteredProjects = useMemo(() => {
    const list =
      filter === "Todos"
        ? projects
        : projects.filter((p) => p.type === filter);

    return [...list].sort(
      (a, b) =>
        getProjectTimestamp(b.status) -
        getProjectTimestamp(a.status)
    );
  }, [filter]);

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-10">
      <header className="mb-12 text-center">
       <h2 className="mb-12 text-center text-3xl font-semibold">
          Projetos
        </h2>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {FILTERS.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition
                ${
                  filter === item
                    ? "bg-purple-700 text-white"
                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                }`}
            >
              {item}
            </button>
          ))}
        </div>
      </header>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
