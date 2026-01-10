"use client";

import ThemeToggle from "../../components/ui/ThemeToggle";
import Technologies from "../../components/shared/Technologies";

export default function Home() {
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
          gap-8
          px-4
          sm:px-6
          lg:px-8
          pt-32
          sm:pt-40
          pb-24
          sm:pb-32
          text-center
        "
            >
                <div className="absolute right-4 top-4 sm:right-6 sm:top-6">
                    <ThemeToggle />
                </div>
                <h1 className="max-w-3xl text-4xl font-bold py-8 tracking-tight sm:text-5xl"> Ana Ruy Luques </h1>
                <p className="max-w-xl text-base"> Analista de sistemas formada em <strong>análise e desenvolvimento de sistemas</strong>, pós-graduanda em <strong>dados</strong> e <strong>automação com IA</strong>. Mais de <strong>4 anos</strong> de experiência em <strong> operações e processos</strong>. Estou me especializando em <strong>dados</strong> e <strong>automação</strong>. </p>
                <div className="w-full flex justify-center mt-4">
                    <Technologies />
                </div>
            </section>
        </>
    );
}
