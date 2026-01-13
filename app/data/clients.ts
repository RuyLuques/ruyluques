import { Client } from "../types/client";

export const clients: Client[] = [
  {
    name: "Nibo",
    logo: "/clients/nibo.svg",
    role: "Estagiária | Analista de Sistemas N2",
    type: "CLT",
    desc: {
      period: "11/2023 - 07/2025",
      responsibilities: [
        "Atuação como Estagiária de Tecnologia com rápida progressão para Analista de Sistemas Nível 2, apoiando times de Marketing, Produto e Dados.",
        "Desenvolvimento e manutenção de aplicações web e mobile, com suporte a pipelines DevOps e monitoramento de sistemas em produção.",
        "Estruturação de fluxos internos, documentação técnica e criação de materiais de onboarding para novos colaboradores.",
        "Análise, tratamento e visualização de dados utilizando Excel avançado, Looker Studio e Metabase.",
        "Monitoramento de aplicações e automações com DataDog, identificando falhas, gargalos operacionais e oportunidades de melhoria."
      ],
      results: [
        "Escala da plataforma de aproximadamente 50 para mais de 700 aplicativos.",
        "Padronização de fluxos de dados entre times técnicos e de marketing, reduzindo retrabalho.",
        "Criação de dashboards operacionais e analíticos utilizados nas decisões diárias do time.",
        "Automação de rotinas críticas e monitoramento contínuo, reduzindo tempo de resposta a falhas.",
        "Redução do tempo de configuração de aplicativos de 1 dia para aproximadamente 5 minutos por app.",
        "Treinamento e suporte a novos colaboradores, acelerando o onboarding e fortalecendo a autonomia técnica do time."
      ],
      tags: ["Angular", "React", "React Native", "TypeScript", "CI/CD", "Pipeline", "Ionic", "Azure - pipeline", "Firebase", "OneSignal", "DataDog", "Google Console", "Apple Store", " Windows | MAC", "MetaBase", "Looker Studio",
        "HubSpot", "Documentação técnica", "Treinamento", "Suporte Técnico", "Jira", "UserPilot",
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
    role: "Programador WordPress",
    type: "Voluntário",
    desc: {
      period: "04/2022 - 04/2023",
      responsibilities: [
        "Atuação como Programador WordPress na ONG Alumni Canadá, vinculada ao Consulado do Canadá.",
        "Desenvolvimento e manutenção de soluções web utilizando WordPress.",
        "Planejamento e execução de projetos digitais em colaboração com equipes multidisciplinares.",
        "Adaptação de soluções técnicas às limitações de orçamento e infraestrutura típicas de organizações sem fins lucrativos."
      ],
      results: [
        "Entrega de soluções web funcionais para apoiar comunicação institucional e iniciativas da ONG.",
        "Participação ativa no planejamento e execução de projetos digitais do início ao fim.",
        "Desenvolvimento de autonomia técnica e tomada de decisão em ambiente de recursos limitados.",
        "Experiência prática em trabalho colaborativo com foco em impacto social e alcance institucional."
      ],
      tags: ["Planejamento", "Design", "WordPress", "Wix"]
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
        "Atuação em Endomarketing, apoiando o fortalecimento da cultura interna do time de tecnologia.",
        "Organização e suporte a eventos internos da área de tecnologia.",
        "Suporte técnico N1 no produto Convênio Saúde, realizando atendimento inicial e triagem de demandas.",
        "Desenvolvimento frontend para o produto VETUS, atuando na construção de interfaces web e melhorias de usabilidade."
      ],
      results: [
        "Apoio a iniciativas de endomarketing que aumentaram o engajamento e a integração do time de tecnologia.",
        "Contribuição para a organização de eventos internos fortalecendo comunicação e troca de conhecimento entre áreas.",
        "Atendimento técnico N1 garantindo resposta inicial rápida e melhor direcionamento de chamados.",
        "Participação no desenvolvimento de interfaces do produto VETUS, contribuindo para melhorias na experiência do usuário."
      ],
      tags: ["Endomarketing com o time de RH", "Desenvolvimento Frontend na Vetus", "Suporte N1 nos planos de saúde", "Assistente de eventos"]
    }
  },
];
