"use client";

import { 
  AcademicCapIcon, 
  GlobeAltIcon, 
  HeartIcon, 
  SparklesIcon, 
  UserGroupIcon, 
  MusicalNoteIcon,
  Squares2X2Icon,
  Cog6ToothIcon
} from "@heroicons/react/24/outline";
import { Leaf } from "lucide-react";

export default function About() {
  const hobbies = [
    { icon: GlobeAltIcon, label: "Viajar e sentir a brisa da praia", color: "bg-blue-100 text-blue-700" },
    { icon: HeartIcon, label: "Curtindo momentos com família e amigos", color: "bg-pink-100 text-pink-700" },
    { icon: Leaf, label: "Cuido de mais de 50 plantas, minha mini selva", color: "bg-green-100 text-green-700" },
    { icon: SparklesIcon, label: "Mãe de Pet", color: "bg-yellow-100 text-yellow-700" },
    { icon: MusicalNoteIcon, label: "Música: canto e toco instrumentos", color: "bg-purple-100 text-purple-700" },
    { icon: Squares2X2Icon, label: "Adoro jogos manuais que desafiam minha criatividade", color: "bg-orange-100 text-orange-700" },
    { icon: Cog6ToothIcon, label: "Trabalhar com tecnologia é o que mais amo", color: "bg-indigo-100 text-indigo-700" },
    { icon: UserGroupIcon, label: "Projetos que misturam organização e criatividade me divertem", color: "bg-teal-100 text-teal-700" },
  ];

  return (
    <section id="about" className="mx-auto max-w-4xl px-6 space-y-8">
      <h2 className="text-3xl font-bold text-center">Sobre mim</h2>
      <p className="max-w-xl mx-auto text-center text-base">
        Trabalho desde os <strong>14 anos. </strong> 
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
        {hobbies.map((hobby, idx) => {
          const Icon = hobby.icon;
          return (
            <div 
              key={idx} 
              className={`flex items-center gap-3 p-3 rounded-xl shadow-sm hover:shadow-md transition ${hobby.color}`}
            >
              <Icon className="w-6 h-6 flex-shrink-0" />
              <span className="text-sm font-medium">{hobby.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
