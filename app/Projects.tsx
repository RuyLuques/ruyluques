"use client";

import {
  FolderGit2,
  GraduationCap,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    title: "Mentoria e dicas de carreira",
    description:
      "Atuei compartilhando dicas de carreira, vagas para iniciantes, estudos e mentorias no LinkedIn e Youtube como trabalho voluntário.",
    tags: ["Comunicação", "Currículo", "Carreira"],
    type: "Profissional",
    status: "2021 - 2025",
    icon: FolderGit2,
    link: "https://www.youtube.com/@ruyluques",
  },
  {
    title: "Desenvolvedora Web",
    description:
      "Atuei como voluntária na ONG Alumni Canadá vinculada ao Consulado do Canadá, desenvolvendo soluções web e utilizando plataformas digitais.",
    tags: ["Fullstack", "WordPress", "Planejamento"],
    type: "Profissional",
    status: "04/2022 - 04/2023",
    icon: FolderGit2,
    link: "https://alumnicanadabrasil.org/",
  },
  {
    title: "Projeto de Extensão | UNICV",
    description:
      "Solução digital desenvolvida com foco em impacto social e acesso à informação.",
    tags: ["Web", "Dados", "Social"],
    type: "Acadêmico",
    status: "Em progresso",
    icon: GraduationCap,
    link: "#"
  },
  {
    title: "Desafio Técnico de Análise de Dados",
    description:
      "Desenvolvi um projeto de ponta a ponta: da base de dados até os insights visuais. Transformei uma base bruta e inconsistente (diretamente do Excel) em informações financeiras claras e acionáveis sobre a performance de aplicativos. Ferramentas utilizadas: Excel (limpeza e tratamento de dados), Power BI Desktop (Power Query, DAX e dashboards interativos).",
    tags: ["Excel", "Power BI", "Dados", "Dashboard"],
    type: "Profissional",
    status: "2025",
    icon: FolderGit2,
    link: "https://www.linkedin.com/posts/ruyluques_dataanalytics-powerbi-excel-activity-7341838532979638273-hm-h?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZp7AYB0XYTySwcbP-PsaJuO96fjkXCIwQ",
  },
  {
    title: "Protótipo Mobile para Empresa de Serviços Elétricos",
    description:
      "Protótipo desenvolvido como freelance para uma empresa de serviços elétricos, com foco em facilitar o atendimento e a gestão de chamados. O projeto inclui fluxo de usuários, organização de chamados e otimização de processos internos, garantindo maior eficiência operacional.",
    tags: ["Freelance", "UX/UI", "Mobile", "Gestão de Chamados"],
    type: "Profissional",
    status: "2025",
    icon: FolderGit2,
    link: "https://www.linkedin.com/posts/ruyluques_freelancer-mobile-programaaexaeto-activity-7374882919888224256-PSBf?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZp7AYB0XYTySwcbP-PsaJuO96fjkXCIwQ",
  },
  {
    title: "Automação de Fluxo Interno com RPA",
    description:
      "Automatizei um fluxo interno utilizando UiPath, reduzindo em 20% o tempo gasto com tarefas manuais repetitivas. O projeto liberou horas para análises técnicas e melhorias operacionais. Já estou evoluindo o fluxo com integrações de APIs e soluções híbridas (RPA + backend) para cenários com dados distribuídos e múltiplas plataformas. Por envolver dados sensíveis, detalhes completos serão adaptados em breve para o portfólio pessoal.",
    tags: ["RPA", "Automação", "UiPath", "Eficiência Operacional"],
    type: "Profissional",
    status: "2025",
    icon: FolderGit2,
    link: "https://www.linkedin.com/posts/ruyluques_rpa-automaaexaeto-processos-activity-7335118963321769985-lj6z?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZp7AYB0XYTySwcbP-PsaJuO96fjkXCIwQ",
  },
  {
    title: "Freelance: Sistema de Registros em Python",
    description:
      "Desenvolvi um pequeno sistema para um cliente que realizava de 200 a 400 registros, salvando em XML de 10 em 10. Embora minha preferência fosse por JavaScript, utilizei Python pela primeira vez e entreguei uma solução funcional e adequada às necessidades do cliente. O design foi simples, atendendo ao que o cliente solicitou. Em breve o código será disponibilizado no GitHub.",
    tags: ["Python", "Freelance", "Backend", "XML"],
    type: "Profissional",
    status: "2025",
    icon: FolderGit2,
    link: "https://www.linkedin.com/posts/ruyluques_javascript-python-tecnologia-activity-7150219344994623488-CFl7?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZp7AYB0XYTySwcbP-PsaJuO96fjkXCIwQ",
  },
  {
    title: "Projeto Fullstack em 2 Dias (React + Tailwind + NodeJS)",
    description:
      "Desenvolvi um projeto completo em 2 dias, com frontend, backend e integração de marketing. O sistema possui 2 formulários autenticados, é 100% responsivo em 3 páginas, com todo conteúdo vindo de API. Inclui modelo de landing page, automação via Zapier (demonstrável manualmente), e testes simples com Cypress para validação de componentes. Design feito no Figma, focado no objetivo principal do projeto.",
    tags: ["React", "Tailwind", "NodeJS", "Fullstack", "Marketing", "Cypress"],
    type: "Profissional",
    status: "2025",
    icon: FolderGit2,
    link: "https://www.linkedin.com/posts/ruyluques_english-junior-juninhos-activity-7127042147433787392-T_KH?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZp7AYB0XYTySwcbP-PsaJuO96fjkXCIwQ",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-10">
      <h2 className="mb-16 text-center text-3xl font-semibold">
        Projetos
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const Icon = project.icon;

          return (
            <div
              key={project.title}
              className="
                flex
                flex-col
                justify-between
                rounded-2xl
                border
                border-zinc-100
                bg-white
                p-6
                transition
                hover:shadow-lg
              "
            >
              <div>
                <Icon className="mb-4 h-8 w-8 text-purple-700" />

                <span className="mb-2 inline-block text-xs font-medium text-purple-700">
                  {project.type}
                </span>

                <h3 className="mb-2 text-lg font-semibold text-zinc-900">
                  {project.title}
                </h3>

                <p className="mb-4 text-sm text-zinc-600">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-100 px-2 py-1 text-xs text-zinc-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.status && (
                  <span className="
                    inline-block
                    mt-2
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
              </div>

              <a
                href={project.link}
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  text-purple-700
                  transition
                  hover:underline
                "
                target="_blank"
              >
                Ver projeto
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
