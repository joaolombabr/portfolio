import {
  siClaude,
  siDjango,
  siDocker,
  siExpress,
  siFastapi,
  siGithubactions,
  siJest,
  siJsonwebtokens,
  siJunit5,
  siLangchain,
  siLinux,
  siMongodb,
  siMysql,
  siN8n,
  siNextdotjs,
  siNginx,
  siNodedotjs,
  siPostgresql,
  siPostman,
  siPytest,
  siPython,
  siReact,
  siRedis,
  siRuff,
  siSpringboot,
  siTailwindcss,
  siTypescript,
  type SimpleIcon,
} from "simple-icons";

/**
 * Stack labels are free text in content/<locale>/stack.ts, so icons are matched by keyword.
 * Order matters: the first rule whose keyword appears in the label wins
 * ("Docker Compose" → docker, "RAG / pgvector" → postgresql).
 * Labels with no brand mark (REST, Webhooks, Power BI, AWS…) fall back to a spark glyph.
 */
const rules: [string, SimpleIcon][] = [
  ["n8n", siN8n],
  ["claude", siClaude],
  ["langchain", siLangchain],
  ["pgvector", siPostgresql],
  ["postgres", siPostgresql],
  ["fastapi", siFastapi],
  ["django", siDjango],
  ["python", siPython],
  ["node", siNodedotjs],
  ["express", siExpress],
  ["spring", siSpringboot],
  ["jwt", siJsonwebtokens],
  ["mysql", siMysql],
  ["mongo", siMongodb],
  ["redis", siRedis],
  ["linux", siLinux],
  ["docker", siDocker],
  ["nginx", siNginx],
  ["github actions", siGithubactions],
  ["pytest", siPytest],
  ["junit", siJunit5],
  ["jest", siJest],
  ["ruff", siRuff],
  ["postman", siPostman],
  ["next", siNextdotjs],
  ["react", siReact],
  ["typescript", siTypescript],
  ["tailwind", siTailwindcss],
];

export function techIcon(label: string): SimpleIcon | undefined {
  const key = label.toLowerCase();
  return rules.find(([keyword]) => key.includes(keyword))?.[1];
}
