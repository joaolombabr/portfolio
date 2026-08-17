export interface Role {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  stack: string[];
}

export const roles: Role[] = [
  {
    company: "Escalys",
    role: "Desenvolvedor de Automação de Processos & Integrações de IA (PJ)",
    period: "jun/2026 — atual",
    location: "Cachoeira - BA | Remoto",
    bullets: [
      "Arquitetei e mantenho uma malha de integrações via APIs REST e Webhooks (Pipefy ↔ n8n ↔ Asaas ↔ WhatsApp) que sustenta uma operação com 11 pipes e 4 bases de dados.",
      "Desenvolvi agentes em Python com IA para classificação automática de documentos e extração estruturada de dados de PDFs, eliminando o tratamento manual pela equipe.",
      "Configurei e documentei regras de negócio, validações e tratamento de dados em JSON para um fluxo crítico multi-sistema, reduzindo inconsistências entre as plataformas integradas.",
      "Realizei consultas e validações de dados em PostgreSQL; testei e documentei APIs com Postman em toda a stack de integração.",
    ],
    stack: ["Python", "APIs REST", "Webhooks", "PostgreSQL", "Pipefy", "n8n", "JSON", "Postman"],
  },
  {
    company: "Freelancer / Autônomo",
    role: "Desenvolvedor Full Stack",
    period: "2022 — atual",
    location: "Projetos freelance, acadêmicos e pessoais | Remoto",
    bullets: [
      "Construí aplicações web e APIs REST com autenticação JWT, validação e tratamento de erros usando React, TypeScript, Node.js, Python e FastAPI.",
      "Entreguei automações com IA, incluindo fluxos de atendimento inteligente e processamento assíncrono via Webhooks.",
      "Apliquei Docker, AWS e CI/CD em projetos de produção, acadêmicos e freelance (incluindo GCP e Azure).",
      "Desenvolvi uma plataforma de e-commerce de joias com fluxo automatizado de cadastro de afiliadas construído em n8n.",
    ],
    stack: ["React", "Node.js", "TypeScript", "Python", "Java", "Spring Boot", "PostgreSQL", "MongoDB", "Docker"],
  },
];
