import {
  Briefcase,
  GraduationCap,
  HeartHandshake,
} from "lucide-react";

import { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "Mentoria e dicas de carreira",
    area: "Comunicação & Desenvolvimento de Carreira",
    type: "Social",
    description:
      "Atuei compartilhando dicas de carreira, vagas para iniciantes, estudos e mentorias no LinkedIn e Youtube como trabalho voluntário.",
    tags: ["Comunicação", "Currículo", "Carreira"],
    status: "2021 - 2025",
    icon: HeartHandshake,
    link: "https://www.youtube.com/@ruyluques",
  },
  {
    title: "Desenvolvedora Web",
    area: "Desenvolvimento Web & Plataformas Digitais",
    type: "Social",
    description:
      "Atuei como voluntária na ONG Alumni Canadá vinculada ao Consulado do Canadá, desenvolvendo soluções web e utilizando plataformas digitais.",
    tags: ["Fullstack", "WordPress", "Planejamento"],
    status: "2022 - 2023",
    icon: HeartHandshake,
    link: "https://alumnicanadabrasil.org/",
  },
  {
    title: "Projeto de Extensão | UNICV",
    area: "Projeto Acadêmico & Impacto Social",
    type: "Acadêmico",
    description:
      "Solução digital desenvolvida com foco em impacto social e acesso à informação.",
    tags: ["Web", "Dados", "Social"],
    status: "Em progresso",
    icon: GraduationCap,
    link: "#",
  },
  {
    title: "Desafio Técnico de Análise de Dados",
    area: "Dados & Business Intelligence",
    type: "Acadêmico",
    description:
      "Desenvolvi um projeto de ponta a ponta: da base de dados até os insights visuais...",
    tags: ["Excel", "Power BI", "Dados", "Dashboard"],
    status: "2025",
    icon: GraduationCap,
    link: "https://www.linkedin.com/posts/ruyluques_dataanalytics-powerbi-excel-activity-7341838532979638273-hm-h",
  },
  {
    title: "Protótipo Mobile para Empresa de Serviços Elétricos",
    area: "Protótipo Mobile & UX/UI Design",
    type: "Profissional",
    description:
      "Protótipo desenvolvido como freelance para uma empresa de serviços elétricos...",
    tags: ["Freelance", "UX/UI", "Mobile", "Gestão de Chamados"],
    status: "2025",
    icon: Briefcase,
    link: "https://www.linkedin.com/posts/ruyluques_freelancer-mobile-programaaexaeto-activity-7374882919888224256-PSBf",
  },
  {
    title: "Automação de Fluxo Interno com RPA",
    area: "Automação de Processos & RPA",
    type: "Profissional",
    description:
      "Automatizei um fluxo interno utilizando UiPath, reduzindo em 20% o tempo gasto...",
    tags: ["RPA", "Automação", "UiPath"],
    status: "2025",
    icon: Briefcase,
    link: "https://www.linkedin.com/posts/ruyluques_rpa-automaaexaeto-processos-activity-7335118963321769985-lj6z",
  },
  {
    title: "Freelance: Sistema de Registros em Python",
    area: "Backend & Automação de Dados",
    type: "Profissional",
    description:
      "Desenvolvi um pequeno sistema para um cliente que realizava de 200 a 400 registros...",
    tags: ["Python", "Freelance", "Backend", "XML"],
    status: "2024",
    icon: Briefcase,
    link: "https://www.linkedin.com/posts/ruyluques_javascript-python-tecnologia-activity-7150219344994623488-CFl7",
  },
  {
    title: "Projeto Fullstack em 2 Dias (React + Tailwind + NodeJS)",
    area: "Fullstack & Integrações",
    type: "Profissional",
    description:
      "Desenvolvi um projeto completo em 2 dias, com frontend, backend e integração de marketing...",
    tags: ["React", "Tailwind", "NodeJS", "Fullstack", "Marketing"],
    status: "2023",
    icon: Briefcase,
    link: "https://www.linkedin.com/posts/ruyluques_english-junior-juninhos-activity-7127042147433787392-T_KH",
  },
];
