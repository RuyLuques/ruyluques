import {
  Monitor,
  LayoutTemplate,
  Share2,
  Database,
  Palette,
} from "lucide-react";

const services = [
  {
    title: "Gestão de Redes Sociais",
    description:
      "Liderança estratégica de conteúdo, presença digital e engajamento.",
    icon: Share2,
  },
  {
    title: "Sites Institucionais",
    description:
      "Sites profissionais, rápidos, responsivos e focados em conversão.",
    icon: LayoutTemplate,
  },
  {
    title: "Blogs e Conteúdo",
    description:
      "Estrutura de blog otimizada para SEO e autoridade digital.",
    icon: Monitor,
  },
  {
    title: "Sistemas e ERP",
    description:
      "Desenvolvimento de sistemas sob medida para gestão e automação.",
    icon: Database,
  },
  {
    title: "Design Digital",
    description:
      "Identidade visual, interfaces modernas e design funcional.",
    icon: Palette,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-7xl px-5 py-10">
      <h2 className="mb-14 text-center text-3xl font-semibold">
        Serviços
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="rounded-2xl bg-white p-8 transition hover:shadow-lg border border-zinc-100"
            >
              <Icon className="mb-4 h-8 w-8 text-purple-700"/>

              <h3 className="mb-2 text-xl text-zinc dark:text-zinc-900 font-semibold">
                {service.title}
              </h3>

              <p className="text-sm text-zinc dark:text-zinc-900">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
