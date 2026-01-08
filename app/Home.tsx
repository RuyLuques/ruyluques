    "use client";

    import { useState } from "react";
    import ThemeToggle from "./components/ui/ThemeToggle";
    import AboutModal from "./components/AboutModal";
import Technologies from "./components/shared/Technologies";

    export default function HomeSection() {
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
                        Dados e automação para soluções reais
                    </h1>

                    <p className="max-w-xl text-base text-neutral-500">
                        Construí minha base ao longo de mais de 4 anos atuando em operações.
                        Hoje, direciono minha carreira para a especialização em dados e automação, com foco em evolução técnica, consistência e projetos aplicados.
                    </p>

                    <div className="flex gap-4">
                        <button
                            onClick={() => setOpenAbout(true)}
                            className="
                rounded-full
                border
                border-purple-700
                px-8
                py-3
                text-sm
                font-medium
                text-purple-700
                transition
                hover:bg-purple-700
                hover:text-white
                "
                        >
                            Sobre mim
                        </button>
                    </div>

                    <Technologies />

                </section>

                <AboutModal open={openAbout} onClose={() => setOpenAbout(false)} />
            </>
        );
    }
