import type { StackCategory } from "@/types/content";

export const stack: StackCategory[] = [
  {
    label: "AI & automation",
    items: ["n8n", "OpenAI API (tool calling)", "Claude API", "LangChain", "RAG / pgvector", "MCP", "Agent evals", "Prompt engineering", "Pipefy"],
  },
  {
    label: "Backend & APIs",
    items: ["Python", "FastAPI", "Django", "Node.js", "Express", "Java / Spring Boot", "REST", "Webhooks", "JWT / OAuth"],
  },
  {
    label: "Data",
    items: ["SQL", "PostgreSQL", "MySQL", "MongoDB", "Redis", "Power BI"],
  },
  {
    label: "Infra & DevOps",
    items: ["Linux", "Docker", "Docker Compose", "Nginx", "GitHub Actions", "AWS (EC2, S3, Lambda)"],
  },
  {
    label: "Testing & quality",
    items: ["Pytest", "JUnit", "Jest", "Ruff", "Postman", "Code review"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
];
