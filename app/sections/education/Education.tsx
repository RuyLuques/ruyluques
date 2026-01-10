"use client";

import { useState } from "react";
import { courses } from "../../data/education";
import { CheckCircle } from "lucide-react";

export default function Education() {
  const [filter, setFilter] = useState<"Todos" | "Cursando" | "Concluído">("Todos");

  const filteredCourses =
    filter === "Todos" ? courses : courses.filter(course => course.status === filter);

  const filters: ("Todos" | "Cursando" | "Concluído")[] = ["Todos", "Cursando", "Concluído"];

  return (
    <section id="education" className="mx-auto max-w-4xl px-5 py-10 space-y-10">
      <h2 className="mb-6 text-center text-3xl font-semibold">Educação & Formação</h2>

      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1 rounded-full text-sm font-medium transition
              ${filter === f ? "bg-purple-700 text-white" : "bg-zinc-200 text-zinc-700 hover:bg-zinc-300"}`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCourses.map((course, idx) => (
          <div
            key={idx}
            className="rounded-lg border border-zinc-200 bg-white p-3 text-zinc-900 shadow-sm hover:shadow-md transition flex flex-col gap-1"
          >
            <h3 className="text-sm font-semibold text-zinc-800">{course.name}</h3>

            <p className="text-[10px] text-zinc-500">
              {course.type} • {course.finish ?? "Em andamento"}
              {course.schedule && ` • ${course.schedule}`}
              {course.institution && ` • ${course.institution}`}
              {course.details && ` • ${course.details}`}
            </p>

            <div className="flex items-center gap-1">
              <CheckCircle
                size={14}
                className={course.status === "Concluído" ? "text-green-500" : "text-yellow-400"}
              />
              <span
                className={
                  course.status === "Concluído"
                    ? "text-green-500 font-semibold text-xs"
                    : "text-yellow-400 font-semibold text-xs"
                }
              >
                {course.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
