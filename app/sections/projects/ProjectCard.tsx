"use client";

import { useState } from "react";
import {
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import { Project } from "../../types/project";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const Icon = project.icon;

  const shortDescription =
    project.description.length > 80
      ? project.description.slice(0, 80) + "..."
      : project.description;

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-zinc-100 bg-white p-6 transition hover:shadow-lg">
      <div>
        <Icon className="mb-4 h-8 w-8 text-purple-700" />

        <span className="text-xs font-medium text-purple-700">
          {project.type}
        </span>

        <h3 className="mt-2 text-lg font-semibold text-zinc-900">
          {project.title}
        </h3>

        {project.area && (
          <p className="mt-1 text-sm font-medium text-zinc-500">
            {project.area}
          </p>
        )}

        {project.status && (
          <span
            className="
              mt-2
              inline-block
              rounded-full
              bg-yellow-100
              px-2.5
              py-1
              text-xs
              font-semibold
              text-yellow-700
            "
          >
            {project.status}
          </span>
        )}

        <p className="mt-3 text-sm text-zinc-600">
          {expanded ? project.description : shortDescription}
        </p>

        {project.description.length > 80 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-purple-700 hover:underline"
          >
            {expanded ? "Exibir menos" : "Exibir detalhes"}
            {expanded ? (
              <ChevronUp className="h-3 w-3" />
            ) : (
              <ChevronDown className="h-3 w-3" />
            )}
          </button>
        )}

        {expanded && project.tags && (
          <div className="mt-3 flex flex-wrap gap-1">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-100 px-2 py-1 text-xs text-zinc-700"
              >
                {tag}
              </span>
            ))}
          </div>


        )}

        {expanded && project.images && (
          <div className="mt-4 grid grid-cols-3 gap-2">
            {project.images.map((img, index) => (
              <div
                key={index}
                className="relative h-24 w-full overflow-hidden rounded-lg"
              >
                <Image
                  src={img}
                  alt={`${project.title} - imagem ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}

      </div>

      <a
        href={project.link}
        target="_blank"
        download
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-purple-700 hover:underline"
      >
        Abrir PDF
      </a>

    </div>
  );
}
