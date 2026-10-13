import { Badge } from "@/components/ui/Badge";
import type { Ui } from "@/types/content";
import type { CaseStudy, KillMatrix as KillMatrixData } from "@/types/project";
import { cn } from "@/lib/utils";

function KillMatrix({ matrix }: { matrix: KillMatrixData }) {
  return (
    <figure className="mt-4 rounded-xl border border-border bg-background p-5">
      <figcaption className="eyebrow">{matrix.caption}</figcaption>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[620px] border-separate border-spacing-1 font-mono text-xs">
          <thead>
            <tr>
              <th scope="col" className="px-2 py-1 text-left font-normal text-foreground-muted">
                {matrix.rowHeader}
              </th>
              {matrix.columns.map((column) => (
                <th key={column} scope="col" className="px-1 py-1 text-center font-normal text-foreground-muted">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {matrix.rows.map((row) => (
              <tr key={row.label}>
                <th scope="row" className="whitespace-nowrap px-2 py-1.5 text-left font-semibold text-foreground">
                  {row.label}
                </th>
                {row.cells.map((count, index) => (
                  <td
                    key={matrix.columns[index]}
                    className={cn(
                      "rounded-md px-1 py-1.5 text-center",
                      count ? "bg-accent-muted font-semibold text-accent-strong" : "text-foreground-muted/50",
                    )}
                  >
                    {count || "·"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-foreground-muted">{matrix.footnote}</p>
    </figure>
  );
}

export function ProjectCard({ project, ui }: { project: CaseStudy; ui: Ui }) {
  return (
    <article className="reveal rounded-3xl border border-border bg-background-elevated p-6 card-lift sm:p-9">
      <span className="eyebrow inline-flex items-center gap-2">
        {project.status === "production" ? (
          <span className="size-1.5 rounded-full bg-accent" aria-hidden />
        ) : null}
        {ui.status[project.status]}
      </span>
      <h3 className="mt-3 font-display text-xl font-medium tracking-tight text-foreground sm:text-2xl">
        {project.name}
      </h3>
      <p className="mt-3 max-w-2xl text-accent-strong">{project.tagline}</p>

      {project.metrics?.length ? (
        <dl className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col gap-1 bg-background p-4">
              <dt className="order-2 text-xs text-foreground-muted">{metric.label}</dt>
              <dd className="order-1 font-mono text-xl font-semibold text-foreground">{metric.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <div>
          <h4 className="eyebrow">{ui.card.problem}</h4>
          <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
            {project.problem}
          </p>
        </div>
        <div>
          <h4 className="eyebrow">{ui.card.solution}</h4>
          <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
            {project.solution}
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-border bg-background p-5">
        <h4 className="eyebrow">{ui.card.impact}</h4>
        <ul className="mt-3 space-y-2">
          {project.impact.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground">
              <span aria-hidden className="mt-0.5 shrink-0 text-accent-strong">
                &rarr;
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {project.matrix ? <KillMatrix matrix={project.matrix} /> : null}

      {project.deepDive?.length ? (
        <details className="group mt-4 rounded-xl border border-border">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-medium text-foreground transition-colors hover:text-accent-strong">
            {ui.card.readMore}
            <span aria-hidden className="text-lg leading-none text-accent-strong transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="space-y-4 border-t border-border px-5 py-5">
            {project.deepDive.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-foreground-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </details>
      ) : null}

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
              className="group inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent-strong"
            >
              {ui.card.repo}
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
              className="group inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent-strong"
            >
              {ui.card.live}
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
