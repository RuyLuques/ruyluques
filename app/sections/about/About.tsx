"use client";

import {
    GlobeAltIcon,
    HeartIcon,
    SparklesIcon,
    Cog6ToothIcon,
    MusicalNoteIcon,
    Squares2X2Icon,
} from "@heroicons/react/24/outline";
import { Leaf } from "lucide-react";

export default function About() {
const hobbies = [
    { icon: GlobeAltIcon, label: "Adoro viajar e sentir a brisa da praia", color: "bg-blue-100 text-blue-700" },
    { icon: HeartIcon, label: "Momentos com família e amigos são sagrados", color: "bg-pink-100 text-pink-700" },
    { icon: Leaf, label: "Cuido de mais de 50 plantas, minha selva particular", color: "bg-green-100 text-green-700" },
    { icon: SparklesIcon, label: "Sou mãe de 5 gatos e participo de uma ONG de resgate animal", color: "bg-yellow-100 text-yellow-700" },
    { icon: MusicalNoteIcon, label: "Música é vida: canto e toco instrumentos", color: "bg-purple-100 text-purple-700" },
    { icon: Squares2X2Icon, label: "Adoro jogos manuais que desafiam minha criatividade", color: "bg-orange-100 text-orange-700" },
    { icon: Cog6ToothIcon, label: "Exploro automação e ferramentas de tecnologia", color: "bg-indigo-100 text-indigo-700" },
    { icon: SparklesIcon, label: "Curto criar pequenas experiências DIY e projetos manuais", color: "bg-teal-100 text-teal-700" },
];

    return (
        <section id="about" className="mx-auto max-w-4xl px-6 space-y-8">
            <h2 className="text-3xl font-bold text-center">Sobre mim</h2>
            <p className="max-w-xl mx-auto text-center text-base">
                Sou <strong>Ana Ruy Luques</strong>, Analista de Sistemas apaixonada por <strong>dados</strong> e <strong>automação com IA</strong>, vivendo em <strong>Estância, Sergipe</strong>.
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
