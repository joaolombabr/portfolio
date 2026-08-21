import type { CaseStudy, MiniProject } from "@/types/project";

export const caseStudies: CaseStudy[] = [
  {
    slug: "whatsapp-n8n-loja-virtual",
    name: "Yasmin — Agente de IA para Pedidos via WhatsApp",
    tagline: "Um agente de IA que cria pedidos reais, com guardas de código para conter as próprias falhas do modelo.",
    status: "produção",
    problem:
      "Uma loja virtual precisava atender pedidos via WhatsApp sem depender de um atendente lendo e digitando cada pedido manualmente em um sistema à parte — processo lento e sujeito a erro humano. O desafio real não era só conectar APIs: era manter um agente de IA com tool-calling confiável o suficiente para lidar com dinheiro e pedidos de clientes reais, incluindo os próprios modos de falha do modelo de linguagem.",
    solution:
      "Arquitetei um agente de IA (OpenAI + orquestração via n8n) que interpreta a conversa no WhatsApp, decide quando consultar cardápio, montar itens/combos/extras e criar o pedido via API REST de terceiros, com memória de curto prazo em Redis e notificação de status pelo mesmo canal. A parte mais difícil não foi a integração — foi conter, com validação determinística em código, as classes de erro que só aparecem em produção: uma investigação de causa-raiz revelou que o modelo às vezes 'inventava' IDs de produto porque a API do fornecedor expõe, sem documentar, um campo interno com o mesmo formato numérico dos IDs reais. Em vez de tentar resolver isso só no texto do prompt (o que já havia falhado), implementei guardas de código que validam cada pedido contra o cardápio real antes de qualquer chamada externa — incluindo uma guarda que exige confirmação real de clique do cliente antes de aceitar a escolha de um item, para eliminar um caso específico de alucinação do modelo.",
    stack: ["n8n", "OpenAI (Agentes de IA)", "APIs REST", "WhatsApp API", "Redis", "PostgreSQL", "JSON", "Webhooks"],
    repoUrl: "https://github.com/joaolombabr/yasmin-whatsapp-ai-agent",
    impact: [
      "Root-cause de uma falha silenciosa que existia havia meses em produção (uma ramificação de fluxo nunca conectada) — encontrada por auditoria sistemática, não por tentativa e erro",
      "Engenharia reversa de uma regra de precificação não documentada da API de terceiros, para montar pedidos complexos (combos) corretamente sem suporte oficial",
      "Guardas determinísticas de código eliminaram uma classe inteira de alucinação do modelo (IDs inventados, escolhas não confirmadas) — sem precisar de mais uma iteração de prompt",
      "Bateria própria de testes de falha real (credencial inválida, timeout de rede) em cópias isoladas do fluxo, para provar degradação graciosa sem arriscar o atendimento real",
      "Em produção, processando pedidos reais de clientes via WhatsApp",
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
