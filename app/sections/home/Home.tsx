"use client";

import { useState } from "react";
import ThemeToggle from "../../components/ui/ThemeToggle";
import Technologies from "../../components/shared/Technologies";
import EducationSection from "../../components/shared/EducationSection";

export default function Home() {
    const [openAbout, setOpenAbout] = useState(false);

    return (
        <>
            <section
                id="home"
                className="
            relative
            mx-auto
            flex
            max-w-7xl
            flex-col
            items-center
            gap-10
            px-6
            pt-40
            pb-32
            text-center
            "
            >
                <div className="absolute right-6 top-6">
                    <ThemeToggle />
                </div>

                <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
                    Ana Ruy Luques
                </h1>

                <p className="max-w-xl text-base">
                    Analista de sistemas formada em <strong>análise e desenvolvimento de sistemas</strong>,
                    pós-graduanda em <strong>dados</strong> e <strong>automação com IA</strong>.
                    Mais de <strong>4 anos</strong> de experiência em <strong> operações e processos</strong>.
                    Estou me especializando em <strong>dados</strong> e <strong>automação</strong>.
                </p>

                <Technologies />
            </section>
            <EducationSection />
        </>
    );
}
