import type { CaseStudy, MiniProject } from "@/types/project";

export const caseStudies: CaseStudy[] = [
  {
    slug: "whatsapp-n8n-loja-virtual",
    name: "Yasmin — Agente de IA para Pedidos via WhatsApp",
    tagline: "Um agente de IA que cria pedidos reais, com travas determinísticas em código para conter as falhas do próprio modelo.",
    status: "produção",
    problem:
      "Uma hamburgueria precisava atender pedidos pelo WhatsApp sem depender de um atendente lendo a conversa e digitando cada pedido à mão em um sistema à parte — processo lento e sujeito a erro humano. O desafio real não era conectar APIs: era manter um agente de IA com tool-calling confiável o suficiente para lidar com dinheiro e pedidos de clientes reais, incluindo os modos de falha do próprio modelo de linguagem. Um ID de produto alucinado, uma escolha não confirmada ou uma taxa de entrega que cai na zona errada não são bugs cosméticos — são pedido errado ou receita perdida.",
    solution:
      "Arquitetei um sistema multi-agente em n8n: um orquestrador fino que roteia por gates determinísticos, especialistas por domínio (pedidos, atendimento, pós-venda) com ferramentas próprias, e um Validador final que reescreve toda saída numa voz única — a lógica mora no especialista, a voz mora no Validador, então mexer no tom nunca arrisca quebrar a lógica de pedido. A parte difícil não foi a integração, foi conter em código as classes de erro que só aparecem em produção. O princípio que saiu disso e que hoje aplico por padrão: a prova de um evento de conversa tem que ser externa ao modelo. Exigir um campo não faz a pergunta acontecer — um pedido saiu marcado como crédito para um cliente que disse débito, porque o modelo preencheu o campo obrigatório com um valor plausível. A correção não foi reescrever o prompt: o valor que o modelo manda passou a ser ignorado, e o método é derivado da fala do cliente por mapeamento fixo, que o agente não consegue forjar. Também fiz engenharia reversa do modelo de precificação não documentado da API de terceiros — provando, com dois pedidos reais, que os campos de total e de taxa que enviamos são silenciosamente descartados e que o valor é recalculado pelo catálogo do fornecedor — e resolvi uma cobrança de entrega que a plataforma não permitia cadastrar, desacoplando a zona de cobrança da localidade real de entrega.",
    stack: ["n8n", "OpenAI (Agentes de IA)", "Engenharia Reversa de API", "APIs REST", "WhatsApp API", "Redis", "PostgreSQL", "Webhooks"],
    repoUrl: "https://github.com/joaolombabr/yasmin-whatsapp-ai-agent",
    impact: [
      "Doze travas determinísticas em código, cada uma nascida de um incidente real em produção — e todas rejeitando com uma instrução acionável para o agente, não com um código de erro que ele parafrasearia mal para o cliente",
      "Root-cause de uma falha silenciosa que existia havia meses (uma ramificação de fluxo nunca conectada) — encontrada por auditoria sistemática das conexões, depois que todas as outras hipóteses foram descartadas com evidência",
      "Engenharia reversa do modelo de precificação da API de terceiros, provada com pedidos reais: identifiquei que dois campos enviados eram descartados em silêncio e que o campo de troco documentado era outro — o modo de falha mais caro de API não documentada é o nome de campo errado que não dá erro, só não faz nada",
      "Interceptador que substitui a mensagem quando o agente anuncia um pedido que nunca foi criado — o modelo não é fonte de verdade sobre se algo aconteceu; já pegou uma confirmação falsa ao vivo",
      "Roteamento de evento de negócio tirado das mãos de um classificador LLM: o clique em 'Bom' na pesquisa de satisfação era classificado como saudação, e virou um gate de igualdade exata",
      "Bateria de testes de falha real (credencial inválida, host inalcançável) em clones isolados do fluxo, provando degradação graciosa sem risco de afetar o atendimento real",
      "Em produção, processando pedidos reais de ponta a ponta: combos com adicionais, entrega e retirada, dinheiro com troco, cartão e Pix, e taxa de entrega por zona",
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
