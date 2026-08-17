import { Badge } from "@/components/ui/Badge";
import type { CaseStudy } from "@/types/project";

export function ProjectCard({ project }: { project: CaseStudy }) {
  return (
    <article className="rounded-lg border border-border bg-background-elevated p-6 transition-colors hover:border-accent-green/40 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
        <span className="font-mono text-xs text-foreground-muted">
          {project.status}
        </span>
      </div>
      <p className="mt-2 text-accent-blue">{project.tagline}</p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <h4 className="font-mono text-xs uppercase tracking-wide text-foreground-muted">
            Problema
          </h4>
          <p className="mt-2 text-sm text-foreground">{project.problem}</p>
        </div>
        <div>
          <h4 className="font-mono text-xs uppercase tracking-wide text-foreground-muted">
            Solução / Arquitetura
          </h4>
          <p className="mt-2 text-sm text-foreground">{project.solution}</p>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="font-mono text-xs uppercase tracking-wide text-foreground-muted">
          Impacto
        </h4>
        <ul className="mt-2 space-y-1">
          {project.impact.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-foreground">
              <span className="text-accent-green">→</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      {project.repoUrl || project.liveUrl ? (
        <div className="mt-6 flex gap-4 text-sm">
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-accent-green hover:underline"
            >
              Repositório →
            </a>
          ) : null}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-accent-blue hover:underline"
            >
              Demo →
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
