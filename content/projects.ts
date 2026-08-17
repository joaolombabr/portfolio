import type { CaseStudy, MiniProject } from "@/types/project";

export const caseStudies: CaseStudy[] = [
  {
    slug: "whatsapp-n8n-loja-virtual",
    name: "Integração WhatsApp–API–n8n para Loja Virtual",
    tagline: "Do pedido no WhatsApp à notificação de status, sem intervenção manual.",
    status: "em finalização",
    problem:
      "Uma loja virtual precisava atender pedidos via WhatsApp sem depender de um atendente lendo e digitando cada pedido manualmente em um sistema à parte — processo lento e sujeito a erro humano.",
    solution:
      "Arquitetei um fluxo ponta a ponta em n8n que recebe a mensagem via WhatsApp API, orquestra chamadas a APIs REST da loja, normaliza e valida o payload JSON entre os serviços, cria o pedido no sistema de origem e devolve notificações de status ao cliente pelo mesmo canal.",
    stack: ["n8n", "APIs REST", "WhatsApp API", "JSON", "Webhooks", "Redis"],
    impact: [
      "Elimina o registro manual de pedidos recebidos por WhatsApp",
      "Fluxo único cobre pedido → validação → criação → notificação de status",
      "Desenhado para reuso em outros catálogos/lojas com a mesma arquitetura",
    ],
    featured: true,
  },
  {
    slug: "leitor-laudos-certificados",
    name: "Leitor de Laudos e Certificados — Automação Pipefy",
    tagline: "Do formulário de entrada à conclusão do card, sem digitar laudo técnico à mão.",
    status: "produção",
    problem:
      "Empresas que lidam com laudos e certificados técnicos de produtos — como distribuidoras de combustíveis e materiais parafínicos — recebem esses documentos em formatos variados e precisam extrair manualmente características, método de ensaio e especificação para preencher diferentes tipos de documentação. Processo lento e sujeito a erro de digitação.",
    solution:
      "Configurei, na Escalys, um pipe completo no Pipefy: formulário inicial de entrada do documento, fases de extração automática dos dados relevantes (produto, tipo de documento, características, método e especificação), automações condicionais por tipo de laudo e fase de conclusão — tudo parametrizado conforme as regras específicas do cliente, do início ao fim do fluxo.",
    stack: ["Pipefy", "Automação de Fluxo", "Extração de Documentos", "Agentes de IA", "JSON"],
    impact: [
      "Elimina a digitação manual de dados de laudos e certificados técnicos",
      "Fluxo configurável por tipo de documento e característica exigida pelo cliente",
      "Em produção, sustentando uma operação real de triagem de documentos na Escalys",
    ],
    featured: true,
  },
  {
    slug: "email-transacional-n8n",
    name: "Automação de E-mails Transacionais — n8n",
    tagline: "E-mails no padrão visual do cliente, disparados automaticamente pelo fluxo.",
    status: "produção",
    problem:
      "O site de uma loja de semijoias precisava responder automaticamente a quem preenchia o formulário de cadastro de revendedora, com um e-mail que refletisse a identidade visual da marca — não um aviso de formulário genérico e fora do padrão.",
    solution:
      "Construí um fluxo em n8n que dispara ao preenchimento do formulário no site da cliente, e desenhei um template de e-mail em HTML com layout, cores e tipografia da marca para o envio automático da resposta.",
    stack: ["n8n", "HTML", "E-mail Transacional", "Webhooks"],
    impact: [
      "Resposta automática e imediata a cada formulário preenchido no site",
      "E-mail com identidade visual da marca, não um template genérico",
    ],
    liveUrl: "https://valeriajoias.com",
    featured: true,
  },
];

export const miniProjects: MiniProject[] = [
  {
    slug: "atend-ia",
    name: "Atend IA",
    description:
      "Chatbot com persistência de contexto e processamento de mensagens, arquitetado para integração com canais de atendimento.",
    stack: ["FastAPI", "Claude LLM", "PostgreSQL", "Redis", "Docker"],
    repoUrl: "https://github.com/joaolombabr/atend-ia",
    featured: false,
  },
  {
    slug: "api-tarefas-spring",
    name: "API REST de Tarefas",
    description:
      "API CRUD com DTOs, validações, filtros, tratamento global de erros e endpoints de estatísticas.",
    stack: ["Java 17", "Spring Boot 3.2", "Spring Data JPA", "H2"],
    repoUrl: "https://github.com/joaolombabr/api-tarefas-spring",
    featured: false,
  },
];
