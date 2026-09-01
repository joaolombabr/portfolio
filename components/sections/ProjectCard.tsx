import { Badge } from "@/components/ui/Badge";
import type { CaseStudy } from "@/types/project";

export function ProjectCard({ project }: { project: CaseStudy }) {
  return (
    <article className="rounded-2xl border border-border bg-background-elevated p-6 transition-colors hover:border-accent/40 sm:p-9">
      <span className="eyebrow">{project.status}</span>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
        {project.name}
      </h3>
      <p className="mt-3 max-w-2xl text-accent-muted">{project.tagline}</p>

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <div>
          <h4 className="eyebrow">Problema</h4>
          <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
            {project.problem}
          </p>
        </div>
        <div>
          <h4 className="eyebrow">Solução / Arquitetura</h4>
          <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
            {project.solution}
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-border bg-background p-5">
        <h4 className="eyebrow">Impacto</h4>
        <ul className="mt-3 space-y-2">
          {project.impact.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground">
              <span aria-hidden className="mt-0.5 shrink-0 text-accent">
                &rarr;
              </span>
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
        <div className="mt-8 flex flex-wrap gap-3">
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Repositório
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                &#8599;
              </span>
            </a>
          ) : null}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Ver online
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                &#8599;
              </span>
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
