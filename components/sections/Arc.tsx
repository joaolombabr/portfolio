import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import type { Content } from "@/types/content";

export function Arc({ content }: { content: Content }) {
  const { ui, arc } = content;

  return (
    <section id="arc" className="border-b border-border py-24 sm:py-28">
      <Container>
        <div className="reveal">
          <SectionHeading {...ui.arc} />
        </div>

        <ol className="grid gap-4 md:grid-cols-3">
          {arc.map((step, index) => (
            <li key={step.name} className="reveal relative" style={{ "--reveal-delay": `${index * 110}ms` } as React.CSSProperties}>
              <a
                href={step.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 card-lift"
              >
                <span className="eyebrow">{step.step}</span>
                <h3 className="mt-3 flex items-start justify-between gap-3 font-mono text-sm font-semibold text-foreground">
                  {step.name}
                  <span aria-hidden className="text-accent-strong transition-transform group-hover:translate-x-0.5">
                    &#8599;
                  </span>
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground-muted">
                  {step.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {step.stack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </a>
              {index < arc.length - 1 ? (
                <span
                  aria-hidden
                  className="absolute top-1/2 -right-5 z-10 hidden size-6 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-xs text-accent-strong md:flex"
                >
                  &rarr;
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
