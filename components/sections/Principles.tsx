import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Content } from "@/types/content";

export function Principles({ content }: { content: Content }) {
  const { ui, principles } = content;

  return (
    <section id="principles" className="border-b border-border py-24 sm:py-32">
      <Container>
        <div className="reveal">
          <SectionHeading {...ui.principles} />
        </div>

        <ol className="reveal grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {principles.map((principle, index) => (
            <li key={principle.title} className="bg-background-elevated p-6 sm:p-8">
              <span className="font-mono text-xs text-accent-strong">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
                {principle.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{principle.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
