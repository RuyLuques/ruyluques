"use client";

import Image from "next/image";

interface AboutModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AboutModal({ open, onClose }: AboutModalProps) {
  if (!open) return null;

  const courses = [
    { name: "Marketing Digital", type: "Graduação", status: "Concluído" },
    { name: "Análise e Desenvolvimento de Sistemas", type: "Graduação", status: "Concluído" },
    { name: "Ciência de Dados", type: "Pós-graduação", status: "Cursando", schedule: "Noite", finish: "05/2026" },
    { name: "Robótica e Inteligência Artificial", type: "Pós-graduação", status: "Cursando", schedule: "Noite", finish: "05/2026" },
    { name: "CNH B", type: "Detran", status: "Cursando" },
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-start sm:items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl rounded-2xl bg-neutral-900 p-6 
                   max-h-[80vh] sm:max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-bold text-white">Formação</h2>

          <div className="w-full mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            {courses.map((course, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-lg border border-zinc-700 bg-neutral-800 p-3"
              >
                <span
                  className={`text-lg ${
                    course.status === "Concluído" ? "text-green-500" : "text-yellow-400"
                  }`}
                >
                  {course.status === "Concluído" ? "✅" : "⏳"}
                </span>
                <div className="flex flex-col">
                  <p className="text-white font-semibold">{course.name}</p>
                  <p className="text-zinc-400 text-xs">{course.type}</p>
                  {course.schedule && course.finish && (
                    <p className="text-zinc-400 text-xs italic">
                      {course.schedule} • Conclusão prevista: {course.finish}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <a
              href="/docs/ana-ruy.pdf"
              download="Ana Ruy - Analista de dados.pdf"
              className="rounded-lg bg-purple-700 px-6 py-2 text-white font-semibold transition hover:bg-purple-800"
            >
              Baixar Currículo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
