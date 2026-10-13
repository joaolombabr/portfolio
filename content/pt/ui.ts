import type { Ui } from "@/types/content";

export const ui: Ui = {
  nav: { work: "Projetos", principles: "Como trabalho", experience: "Experiência", stack: "Stack", contact: "Contato" },
  switchLocale: { label: "EN", ariaLabel: "Read in English" },
  menu: { open: "Abrir menu", close: "Fechar menu" },
  toolsBand: "Ferramentas que eu coloco em produção",
  heroPrimary: "Ver projetos",
  heroSecondary: "Falar comigo",
  resume: "Currículo (PDF)",
  arc: {
    eyebrow: "O fio condutor",
    title: "Incidente → padrão → ferramenta → prova",
    description:
      "Quatro repositórios públicos que se leem em sequência: o que quebrou em produção, a regra que isso me ensinou, a ferramenta que a generaliza e as avaliações que provam isso antes do deploy.",
  },
  work: {
    eyebrow: "Estudos de caso",
    title: "Trabalho em produção",
    description:
      "Problema de negócio, decisão de arquitetura e o que quebrou em produção — não só uma lista de tecnologias. Uma ferramenta open source está aqui porque saiu direto desse trabalho.",
  },
  otherProjects: "Outros projetos",
  principles: {
    eyebrow: "Como trabalho",
    title: "Regras que aprendi do jeito caro",
  },
  experience: {
    eyebrow: "Trajetória",
    title: "Experiência",
  },
  stack: { eyebrow: "Ferramentas", title: "Stack" },
  education: "Formação e idiomas",
  certifications: "Certificações",
  status: { production: "Em produção", "in-progress": "Em desenvolvimento", "open-source": "Código aberto" },
  card: {
    problem: "Problema",
    solution: "Solução / arquitetura",
    impact: "Impacto",
    readMore: "Ler a história completa",
    repo: "Repositório",
    live: "Ver online",
  },
  contact: {
    eyebrow: "Contato",
    titleLead: "Precisa de alguém para construir — ou consertar — uma automação com IA que lida com",
    titleAccent: "dinheiro de verdade?",
    body: "Aberto a vagas de Engenheiro de Automação com IA, Engenheiro de IA e integrações — CLT, PJ ou contrato internacional.",
    terms: [
      "Remoto de Cachoeira, BA · UTC-3",
      "CNPJ ativo · emito nota no Brasil e fatura em dólar",
      "Inglês: confortável em reunião ao vivo",
    ],
    email: "Enviar e-mail",
  },
  footer: "Feito com Next.js, TypeScript e Tailwind",
};
