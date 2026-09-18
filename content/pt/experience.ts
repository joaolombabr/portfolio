import type { Education, Principle, Role } from "@/types/content";

export const principles: Principle[] = [
  {
    title: "A prova mora fora do modelo",
    body: "Se um evento da conversa importa — uma pergunta feita, um pedido criado — a evidência tem que vir de um lugar onde o modelo não consegue escrever.",
  },
  {
    title: "Duas correções de prompt, depois código",
    body: "Quando um comportamento falha duas vezes pelo mesmo motivo depois de ajustar o prompt, a causa não está no prompt. Vira uma checagem determinística.",
  },
  {
    title: "Causa raiz antes da correção",
    body: "Separo entender de corrigir. Correção proposta antes de a causa estar provada com evidência é um chute com mensagem de commit.",
  },
  {
    title: "Quebre no clone",
    body: "Modos de falha — credencial inválida, host fora do ar, timeout — são testados numa cópia isolada, nunca no atendimento real nem com credencial compartilhada.",
  },
];

export const roles: Role[] = [
  {
    company: "Escalys",
    role: "Desenvolvedor de Automação de Processos & Integrações de IA (PJ)",
    period: "jun/2026 — atual",
    location: "Agência de branding, marketing e tecnologia · remoto",
    bullets: [
      "Arquitetei e mantenho uma malha de integrações via APIs REST e Webhooks (Pipefy → n8n → Asaas → WhatsApp) que sustenta uma operação com 11 pipes e 4 bases de dados.",
      "Desenvolvi agentes em Python com IA para classificação automática de documentos e extração estruturada de dados de PDFs, eliminando o tratamento manual pela equipe.",
      "Defini e documentei regras de negócio, validações e tratamento de dados em JSON para um fluxo crítico multi-sistema, reduzindo inconsistências entre as plataformas.",
      "Entrego sites e sistemas personalizados para empresas clientes, incluindo fluxos de venda que rodam dentro do WhatsApp.",
      "Valido dados com SQL em PostgreSQL; testo e documento APIs com Postman em toda a stack de integração.",
    ],
    stack: ["n8n", "Python", "Pipefy", "APIs REST", "Webhooks", "PostgreSQL", "Postman"],
  },
  {
    company: "Casa Clínica",
    role: "Generalista de TI / Suporte Técnico",
    period: "2023 — 2025",
    location: "Centro de educação em saúde animal · Cachoeira, BA · entrei como estagiário, fui efetivado",
    bullets: [
      "Responsável por toda a TI da organização: suporte a usuários, manutenção de hardware e software, infraestrutura e chamados do dia a dia.",
      "Dei aulas de informática para públicos variados, incluindo crianças e idosos — prática diária de explicar problema técnico em linguagem simples.",
      "Também cuidei do marketing e da presença digital, absorvendo toda a demanda de tecnologia da operação.",
    ],
    stack: ["Suporte de TI", "Hardware e software", "Infraestrutura", "Ensino"],
  },
  {
    company: "Freelancer",
    role: "Desenvolvedor Full Stack & Automação",
    period: "2022 — atual",
    location: "Projetos para clientes, acadêmicos e pessoais · remoto",
    bullets: [
      "Construí uma automação de pedidos e atendimento via WhatsApp para uma pizzaria, com tratamento de erros e teste do fluxo em produção.",
      "Dashboards e relatórios em Power BI na Iatec (FADBA, meio período) e para uma startup cliente, alimentados por consultas SQL e APIs REST.",
      "Aplicações web e APIs REST com autenticação JWT, validação e tratamento global de erros (React, TypeScript, Node.js, Python, FastAPI).",
      "Entreguei um app mobile e páginas de venda para uma loja de roupas, e um e-commerce de semijoias com automação de e-mail transacional em n8n.",
    ],
    stack: ["React", "TypeScript", "Node.js", "Python", "FastAPI", "Power BI", "Docker"],
  },
];

export const education: Education = {
  degree: "Tecnólogo em Gestão da Tecnologia da Informação",
  institution: "UNIAENE-FADBA",
  period: "2023 — 2025",
  certifications: [
    "Machine Learning — Microsoft, 2025",
    "Banco de Dados — Oracle, 2025",
    "Formação Cientista de Dados — Udemy, 2025",
    "Java Completo — Udemy, 2025",
  ],
  languages: ["Português — nativo", "Inglês — proficiência profissional (B2+), confortável em reunião ao vivo"],
};
