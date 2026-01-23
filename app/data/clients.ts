import { Client } from "../types/client";

export const clients: Client[] = [
  {
    name: "Nibo",
    logo: "/clients/nibo.svg",
    role: "Analista de Sistemas | Automação e Produto",
    type: "CLT",
    desc: {
      period: "11/2023 - 07/2025",
      responsibilities: [
        "Desenvolvimento, configuração e publicação de aplicativos Android e iOS, atuando na sustentação e evolução do produto.",
        "Atuação como principal desenvolvedora e referência técnica, apoiando áreas de Tecnologia, Produto, Customer Success e Dados.",
        "Implementação de automações de processos com UiPath e Google Sheets, substituindo fluxos manuais operacionais.",
        "Monitoramento e rastreamento de bugs.",
        "Análise, limpeza, transformação e preparação de dados para uso operacional e analítico (ETL básico).",
        "Criação de dashboards operacionais e analíticos para apoio à tomada de decisão.",
        "Estruturação de documentação técnica e condução de treinamentos internos.",
        "Representação técnica do time em reuniões de alinhamento com áreas técnicas e de negócio."
      ],
      results: [
        "Escala do produto de aproximadamente 50 para mais de 900 aplicativos em produção.",
        "Redução do tempo de configuração de aplicativos de cerca de 30 minutos para aproximadamente 1 minuto por aplicativo.",
        "Aumento da eficiência operacional por meio da automação de processos críticos.",
        "Maior confiabilidade do produto com monitoramento contínuo e resposta rápida a incidentes.",
        "Padronização de fluxos técnicos e de dados entre áreas, reduzindo retrabalho.",
        "Capacitação de times internos por meio de documentação e treinamentos técnicos."
      ],
      tags: [
        "Android",
        "iOS",
        "Angular",
        "TypeScript",
        ".NET",
        "SQL",
        "UiPath",
        "Google Sheets",
        "APIs REST",
        "ETL básico",
        "Integração e transformação de dados",
        "Datadog",
        "Looker Studio",
        "Metabase",
        "Documentação técnica",
        "Treinamento",
        "Suporte técnico",
        "Produto",
        "RevOps",
        "Customer Success"
      ]
    }
  },
  {
    name: "Felipe Leite",
    logo: "/clients/felipe-leite.svg",
    role: "Programador WordPress",
    type: "PJ",
    desc: {
      period: "11/2025 - 12/2025",
      responsibilities: [
        "Atuação como freelancer no desenvolvimento de website para artista plástico utilizando a plataforma Wix.",
        "Criação e adaptação de layout com foco em design funcional, responsividade e navegação intuitiva.",
        "Organização de conteúdo visual e textual para melhor apresentação do portfólio artístico."
      ],
      results: [
        "Entrega de site funcional alinhado à identidade visual do artista.",
        "Melhoria da experiência de navegação em diferentes dispositivos.",
        "Experiência prática em levantamento de necessidades do cliente e tradução em solução digital."
      ],
      tags: ["Planejamento", "Design", "WordPress", "Wix"]
    }
  },
  {
    name: "Bihands",
    logo: "/clients/bihands.svg",
    role: "Suporte Técnico",
    type: "PJ",
    desc: {
      period: "12/2025",
      responsibilities: [
        "Atuação em suporte técnico a clientes, realizando atendimento remoto e resolução de incidentes.",
        "Instalação, configuração e suporte a softwares em ambiente de produção.",
        "Acesso remoto via AnyDesk para diagnóstico e correção de problemas técnicos."
      ],
      results: [
        "Atendimento direto a clientes, garantindo resolução rápida de demandas técnicas.",
        "Experiência prática com suporte remoto e troubleshooting em ambiente real.",
        "Desenvolvimento de agilidade na identificação e resolução de problemas técnicos."
      ],
      tags: ["Suporte Técnico", "AnyDask", "Rastreamento"]
    }
  },
  {
    name: "IFS",
    logo: "/clients/ifs.svg",
    role: "Instrutora de Informática",
    type: "PJ",
    desc: {
      period: "11/2023 - 12/2023",
      responsibilities: [
        "Atuação como Instrutora de Informática em parceria com a Caixa Econômica Federal.",
        "Planejamento e ministração de aulas práticas e treinamentos presenciais ao longo de 40 dias.",
        "Adaptação de conteúdo técnico para diferentes níveis de conhecimento dos alunos.",
        "Apoio individual aos participantes durante atividades práticas."
      ],
      results: [
        "Capacitação de alunos em fundamentos de informática, promovendo autonomia no uso de ferramentas digitais.",
        "Tradução de conceitos técnicos em linguagem acessível, aumentando o aproveitamento das aulas práticas.",
        "Desenvolvimento de habilidades de comunicação, didática e condução de turmas.",
        "Experiência prática em ensino técnico, reforçando capacidade de treinamento e onboarding em ambientes profissionais."
      ],
      tags: ["Planejamento", "Informática", "Programação", "Pacote Office", "Marca pessoal"]
    }
  },

  {
    name: "EcoDoctor",
    logo: "/clients/ecodoctor.svg",
    role: "Desenvolvedora Frontend",
    type: "PJ",
    desc: {
      period: "04/2023 - 06/2023",
      responsibilities: [
        "Atuação como Desenvolvedora Frontend em healthtech, trabalhando com Vue.js em software voltado para profissionais da saúde.",
        "Desenvolvimento e manutenção de funcionalidades do sistema, com foco em usabilidade e estabilidade.",
        "Criação e execução de testes unitários para validação de componentes e fluxos críticos.",
        "Colaboração com o time técnico na melhoria contínua da base de código."
      ],
      results: [
        "Contribuição direta para a evolução de funcionalidades do sistema utilizado por médicos.",
        "Melhoria na confiabilidade do frontend por meio da implementação de testes unitários.",
        "Experiência prática em ambiente de produto real, com entregas rápidas e aprendizado acelerado em curto período."
      ],
      tags: ["Vue", "Testes automatizados", "Testes unitários", "Lint + padrão de commit", "Design"]
    }
  },
  {
    name: "Alumni Canadá",
    logo: "/clients/alumni.svg",
    role: "Programadora WordPress",
    type: "Voluntário",
    desc: {
      period: "04/2022 - 04/2023",
      responsibilities: [
        "Atuação como Programadora WordPress na ONG Alumni Canadá, vinculada ao Consulado do Canadá.",
        "Desenvolvimento e manutenção de soluções web utilizando WordPress.",
        "Planejamento e execução de projetos digitais em colaboração com equipes multidisciplinares.",
        "Adaptação de soluções técnicas às limitações de orçamento e infraestrutura típicas de organizações sem fins lucrativos.",
        "Participação ativa no planejamento e execução de projetos digitais do início ao fim."
      ],
      results: [
        "Entrega de soluções web funcionais para apoiar a comunicação institucional e iniciativas da ONG.",
        "Aumento da autonomia técnica e da capacidade de tomada de decisão em ambiente de recursos limitados.",
        "Fortalecimento do trabalho colaborativo com foco em impacto social e alcance institucional."
      ],
      tags: [
        "WordPress",
        "Desenvolvimento Web",
        "Projetos Digitais",
        "Organizações sem fins lucrativos",
        "Autonomia técnica",
        "Trabalho colaborativo",
        "Impacto social"
      ]
    }
  },
  {
    name: "Petlove",
    logo: "/clients/petlove.svg",
    role: "Estagiária | Desenvolvedora Frontend",
    type: "CLT",
    desc: {
      period: "02/2022 - 02/2023",
      responsibilities: [
        "Apoio a iniciativas de endomarketing que aumentaram o engajamento e a integração do time de tecnologia.",
        "Automação de processos com UiPath para apoio a rotinas operacionais internas.",
        "Contribuição para a organização de eventos internos, fortalecendo a comunicação e a troca de conhecimento entre áreas.",
        "Atendimento técnico N1, garantindo resposta inicial rápida e melhor direcionamento de chamados.",
        "Participação no desenvolvimento de interfaces do produto VETUS, contribuindo para melhorias na experiência do usuário."
      ],
      results: [
        "Maior engajamento e integração do time de tecnologia por meio de iniciativas de endomarketing.",
        "Otimização de rotinas internas com automações utilizando UiPath.",
        "Fortalecimento da comunicação entre áreas por meio da organização de eventos internos.",
        "Melhoria no tempo de resposta e na triagem de chamados no atendimento técnico N1.",
        "Evolução da experiência do usuário no produto VETUS por meio de melhorias nas interfaces."
      ],
      tags: [
        "Endomarketing",
        "UiPath",
        "Automação de processos",
        "Atendimento N1",
        "Desenvolvimento Frontend",
        "UX/UI",
        "Eventos internos",
        "Comunicação entre áreas",
        "Produto VETUS"
      ]
    }
  }
];
