import {
  Briefcase,
  GraduationCap,
  HeartHandshake,
} from "lucide-react";

import { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "Projeto de Cultura & Integração – Time Tech (Petlove)",
    area: "Endomarketing",
    type: "Profissional",
    description:
      "Em 2022, atuei em um projeto em parceria com o time de Recursos Humanos voltado ao fortalecimento da cultura interna do time de tecnologia (dados, desenvolvimento, QA e design). O objetivo foi planejar e executar um encontro presencial para promover integração, senso de pertencimento e alinhamento cultural entre os colaboradores. Participei ativamente da organização ao longo de três dias de evento e, no último dia, fui responsável pela coordenação logística de dois ônibus, conduzindo colaboradores para visita ao novo Centro de Distribuição da empresa em Minas Gerais.",
    tags: [
      "Cultura Organizacional",
      "Eventos Corporativos",
      "Comunicação",
    ],
    status: "2022",
    icon: HeartHandshake,
    link: "#",
      images: [
    "/projects/evento-1.png",
    "/projects/evento-2.png",
    "/projects/cd-minas.png",
  ],
  },
  {
    title: "Mentoria e dicas de carreira",
    area: "Desenvolvimento de Carreira",
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
    area: "Tecnologia",
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
    area: "Tecnologia",
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
    area: "Dados & Bi",
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
    area: "Design",
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
    area: "Automação RPA",
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
    area: "Tecnologia",
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
    area: "Tecnologia",
    type: "Profissional",
    description:
      "Desenvolvi um projeto completo em 2 dias, com frontend, backend e integração de marketing...",
    tags: ["React", "Tailwind", "NodeJS", "Fullstack", "Marketing"],
    status: "2023",
    icon: Briefcase,
    link: "https://www.linkedin.com/posts/ruyluques_english-junior-juninhos-activity-7127042147433787392-T_KH",
  },
];
