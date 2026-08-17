export interface StackCategory {
  label: string;
  items: string[];
}

export const stackCategories: StackCategory[] = [
  {
    label: "IA & Automação",
    items: ["LangChain", "OpenAI API", "RAG / pgvector", "Agentes de IA", "Prompt Engineering", "n8n", "Pipefy"],
  },
  {
    label: "Back-end",
    items: ["Python", "FastAPI", "Node.js", "Express", "Java", "Spring Boot", "APIs REST", "Webhooks", "JWT"],
  },
  {
    label: "Front-end",
    items: ["React", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    label: "Dados",
    items: ["PostgreSQL", "pgvector", "MongoDB", "Redis", "Firebase"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS (EC2, S3, Lambda)", "Docker", "Docker Compose", "CI/CD"],
  },
];
