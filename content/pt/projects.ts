import type { ArcStep, CaseStudy, MiniProject } from "@/types/project";

export const arc: ArcStep[] = [
  {
    step: "01 · O incidente",
    name: "yasmin-whatsapp-ai-agent",
    description:
      "Estudo de caso de um agente de IA de pedidos em produção — as falhas que só aparecem com cliente real e as travas determinísticas que as contiveram. Código das travas incluído.",
    stack: ["n8n", "OpenAI", "Redis", "APIs REST"],
    repoUrl: "https://github.com/joaolombabr/yasmin-whatsapp-ai-agent",
  },
  {
    step: "02 · O padrão",
    name: "n8n-production-patterns",
    description:
      "Dezesseis padrões para rodar agentes de IA em n8n contra dinheiro real, cada um vindo de um incidente específico — incluindo como o n8n realmente executa, o que a documentação não conta.",
    stack: ["n8n", "Agentes de IA", "Redis"],
    repoUrl: "https://github.com/joaolombabr/n8n-production-patterns",
  },
  {
    step: "03 · A ferramenta",
    name: "llm-tool-guard",
    description:
      "Serviço FastAPI que fica entre o agente e a ação irreversível: uma cadeia de travas determinísticas, e só encaminha se todas passarem. 44 testes, CI em Python 3.11–3.13, imagem Docker.",
    stack: ["Python", "FastAPI", "Pytest", "Docker"],
    repoUrl: "https://github.com/joaolombabr/llm-tool-guard",
  },
  {
    step: "04 · A prova",
    name: "agent-eval-harness",
    description:
      "Avaliações que julgam o que o agente fez no mundo, não o que ele disse — e depois auditam a si mesmas: falhas conhecidas são injetadas e todas têm que ser pegas. 70 testes, CI em Python 3.11–3.13.",
    stack: ["Python", "Claude API", "MCP", "Pytest"],
    repoUrl: "https://github.com/joaolombabr/agent-eval-harness",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "yasmin-whatsapp-ai-agent",
    name: "Yasmin — agente de IA para pedidos via WhatsApp",
    tagline:
      "Um agente de IA que cria pedidos reais, com travas determinísticas em código para conter as falhas do próprio modelo.",
    status: "production",
    metrics: [
      { value: "~100", label: "pedidos a cada dois dias" },
      { value: "12", label: "travas, cada uma de um incidente real" },
      { value: "3 + 1", label: "agentes especialistas + um validador de voz" },
    ],
    problem:
      "Uma hamburgueria atendia pedidos pelo WhatsApp à mão: alguém lia cada conversa e redigitava o pedido em um sistema à parte. Conectar as APIs era a parte fácil. O problema real era manter um agente com tool-calling confiável o bastante para lidar com dinheiro — um ID de produto alucinado ou uma forma de pagamento não confirmada não é bug cosmético, é pedido errado ou receita perdida.",
    solution:
      "Um sistema multi-agente em n8n: um orquestrador fino que roteia por gates determinísticos, especialistas por domínio (pedidos, atendimento, pós-venda) com ferramentas próprias, e um Validador final que reescreve toda saída numa voz única. A lógica mora no especialista e a voz mora no Validador, então mexer no tom nunca arrisca quebrar a lógica de pedido. Entre o modelo e a API do fornecedor fica uma camada de travas em código.",
    impact: [
      "Doze travas determinísticas, cada uma nascida de um incidente em produção — todas rejeitando com uma instrução acionável para o agente, não com um código de erro que ele parafrasearia mal para o cliente.",
      "Causa raiz de IDs de produto inválidos: a API do fornecedor expunha um campo interno não documentado com o mesmo formato numérico dos IDs reais. Duas correções de prompt já tinham falhado; a solução foi uma trava em código.",
      "Encontrei uma falha silenciosa que existia havia meses — uma ramificação de fluxo nunca conectada — auditando as conexões depois de descartar todas as outras hipóteses com evidência.",
      "Engenharia reversa da precificação não documentada do fornecedor, com pedidos reais: dois campos que enviávamos eram descartados em silêncio, e o campo de troco documentado era outro.",
      "Um interceptador substitui a mensagem quando o agente anuncia um pedido que nunca foi criado. Já pegou uma confirmação falsa ao vivo.",
      "Testes de falha (credencial inválida, host inalcançável) em clones isolados do fluxo — degradação graciosa provada sem tocar no atendimento real.",
    ],
    deepDive: [
      "O princípio que saiu disso, e que hoje aplico por padrão: a prova de um evento de conversa tem que ser externa ao modelo. Exigir um campo não faz a pergunta acontecer. Um pedido saiu marcado como crédito para um cliente que tinha dito débito, porque o modelo preencheu o campo obrigatório com um valor plausível. A correção não foi reescrever o prompt — o valor que o modelo manda passou a ser ignorado, e a forma de pagamento é derivada da fala do cliente por mapeamento fixo, que o agente não consegue forjar.",
      "A mesma ideia tirou um evento de negócio das mãos de um classificador LLM: o clique em “Bom” na pesquisa de satisfação era classificado como saudação. Virou um gate de igualdade exata.",
      "Do lado do fornecedor, dois pedidos reais provaram que os campos de total e de taxa que enviávamos eram descartados e recalculados pelo catálogo dele. O modo de falha mais caro de API não documentada é o nome de campo errado que não dá erro, só não faz nada. Uma taxa de entrega que a plataforma não deixava cadastrar foi resolvida desacoplando a zona de cobrança da localidade real de entrega.",
    ],
    stack: ["n8n", "OpenAI (tool calling)", "WhatsApp API", "APIs REST", "Redis", "PostgreSQL", "Webhooks"],
    repoUrl: "https://github.com/joaolombabr/yasmin-whatsapp-ai-agent",
    featured: true,
  },
  {
    slug: "agent-eval-harness",
    name: "agent-eval-harness — avaliações que auditam a si mesmas",
    tagline:
      "Avaliações determinísticas para agentes com tool-calling: julgam o que o agente fez no mundo e depois provam que as próprias verificações conseguem falhar.",
    status: "open-source",
    metrics: [
      { value: "5 / 5", label: "modos de falha injetados que a suíte pega" },
      { value: "17 / 22", label: "verificações que já provaram que falham — as outras cinco são listadas, não escondidas" },
      { value: "70", label: "testes, CI em Python 3.11–3.13" },
    ],
    problem:
      "Travas barram uma ação ruim na hora em que ela acontece. Elas não dizem, antes de você subir um prompt novo ou um modelo novo, se o agente piorou. A maioria das avaliações de agente lê a resposta final dele, então um agente que agenda a coisa errada e escreve um resumo confiante passa. E ninguém testa a própria avaliação: uma verificação que nunca falhou não é evidência de nada.",
    solution:
      "Um harness em Python em que toda verificação lê duas coisas que o agente não consegue escrever: a transcrição gravada pelo harness e o estado final de um sandbox recriado a cada execução. Depois a suíte é auditada do jeito que teste de mutação audita teste unitário — falhas conhecidas são injetadas, uma por vez, em um agente correto, e o relatório mostra quais verificações perceberam, quais falhas escaparam e quais verificações nunca foram vistas falhando. O agente entra por MCP, pela API do Claude ou como uma transcrição gravada, reexecutada offline.",
    impact: [
      "Seis cenários para falhas que agentes com tool-calling realmente cometem — incluindo as duas que atingiram o meu agente em produção: uma confirmação falsa e um ID inventado.",
      "“As avaliações passam” vira medição: um mutation score, uma matriz falha × cenário e a lista de verificações que nenhuma falha alcança. Roda no CI e quebra o build quando um modo de falha escapa.",
      "Qualquer agente que fala MCP é avaliado sem código de adaptação: o sandbox é servido como servidor MCP e a sessão é corrigida depois.",
      "Uma transcrição gravada em qualquer lugar vira teste de regressão — reexecutada em um sandbox novo, sem nunca confiar nos resultados gravados.",
      "As verificações descrevem resultados, não caminhos: um agente que bate em um erro e se recupera passa; um que relata um agendamento que nunca aconteceu, não.",
    ],
    matrix: {
      caption: "Matriz de falhas — saída do agent-evals audit",
      rowHeader: "falha injetada",
      columns: ["qualified-only", "nobody-qualifies", "stale-headline", "slot-conflict", "resume-injection", "unknown-candidate"],
      rows: [
        { label: "trusts_search", cells: [3, 2, 2, 1, 1, 0] },
        { label: "best_available", cells: [0, 2, 0, 0, 0, 0] },
        { label: "obeys_resume", cells: [0, 0, 0, 0, 2, 0] },
        { label: "false_confirmation", cells: [0, 0, 0, 2, 0, 1] },
        { label: "invents_id", cells: [2, 0, 2, 1, 2, 0] },
      ],
      footnote:
        "Cada linha é um modo de falha ligado em um agente que, fora isso, está correto; cada célula é quantas verificações falharam naquele cenário. Uma linha só de pontos seria uma falha que a suíte não enxerga. Não há nenhuma — e as cinco verificações que nunca falharam são impressas pelo mesmo comando.",
    },
    deepDive: [
      "A regra de projeto é a que a produção me ensinou: a prova mora fora do modelo. O agente só age por uma sessão que grava cada chamada, então a transcrição que as verificações leem nunca é algo que o agente escreveu sobre si mesmo. O relatório final dele é comparado com o registro do próprio sandbox — essa única verificação é o detector de confirmação falsa.",
      "A parte que eu mais defendo é a lista de verificações não provadas. A auditoria informa que cinco das 22 verificações nunca falharam sob nenhuma falha que eu modelei, e eu imprimo essa lista em vez de um 100% limpo. É também como a suíte cresce: tire a falha de ID inventado e toda verificação no_tool_errors cai nessa lista, porque nada mais no modelo de falhas faz um agente passar um identificador que ele inventou.",
      "Não há LLM como juiz. Um juiz é um segundo modelo que pode errar na mesma direção do primeiro. Para “a entrevista foi agendada?” existe uma verdade verificável, então a verificação lê essa verdade; onde não existe, o harness prefere não dizer nada a chutar.",
      "O que ele não afirma: o adaptador do Claude é testado contra um cliente roteirizado e o servidor MCP contra o cliente do próprio SDK de MCP, em um subprocesso stdio de verdade. Não publiquei notas de modelo — número tem que ficar ao lado do prompt, do modelo e da data que o produziram.",
    ],
    stack: ["Python", "Pydantic", "FastAPI", "Claude API", "MCP", "Pytest", "GitHub Actions"],
    repoUrl: "https://github.com/joaolombabr/agent-eval-harness",
    featured: true,
  },
  {
    slug: "leitor-laudos-certificados",
    name: "Leitor de laudos e certificados — automação Pipefy",
    tagline: "Do formulário de entrada à conclusão do card, sem digitar laudo técnico à mão.",
    status: "production",
    problem:
      "Empresas que lidam com laudos e certificados técnicos de produtos — como distribuidoras de combustíveis e materiais parafínicos — recebem esses documentos em formatos variados e extraíam à mão características, método de ensaio e especificação para preencher diferentes tipos de documentação. Processo lento e sujeito a erro de digitação.",
    solution:
      "Na Escalys, configurei um pipe completo no Pipefy: formulário de entrada, fases de extração automática dos dados relevantes (produto, tipo de documento, características, método e especificação), automações condicionais por tipo de laudo e fase de conclusão — tudo parametrizado conforme as regras do cliente, do início ao fim.",
    impact: [
      "Elimina a digitação manual de dados de laudos e certificados técnicos.",
      "Configurável por tipo de documento e por característica exigida.",
      "Em produção, sustentando uma operação real de triagem de documentos na Escalys.",
    ],
    stack: ["Pipefy", "Automação de fluxo", "Extração de documentos", "Agentes de IA", "JSON"],
    featured: true,
  },
  {
    slug: "email-transacional-n8n",
    name: "E-mails transacionais — n8n",
    tagline: "E-mails no padrão visual do cliente, disparados automaticamente pelo fluxo.",
    status: "production",
    problem:
      "O site de uma loja de semijoias precisava responder automaticamente a quem preenchia o cadastro de revendedora, com um e-mail na identidade da marca — não um aviso de formulário genérico.",
    solution:
      "Um fluxo em n8n disparado pelo formulário no site da cliente, enviando um template de e-mail em HTML que desenhei com layout, cores e tipografia da marca.",
    impact: [
      "Resposta automática e imediata a cada formulário preenchido no site.",
      "E-mail com a identidade da marca, não um template genérico.",
    ],
    stack: ["n8n", "E-mail HTML", "Webhooks"],
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
    stack: ["FastAPI", "Claude API", "PostgreSQL", "Redis", "Docker"],
    repoUrl: "https://github.com/joaolombabr/atend-ia",
    featured: false,
  },
  {
    slug: "api-tarefas-spring",
    name: "API REST de tarefas",
    description:
      "API CRUD com DTOs, validações, filtros, tratamento global de erros e endpoints de estatísticas.",
    stack: ["Java 17", "Spring Boot 3.2", "Spring Data JPA", "H2"],
    repoUrl: "https://github.com/joaolombabr/api-tarefas-spring",
    featured: false,
  },
];
