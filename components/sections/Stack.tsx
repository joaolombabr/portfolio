import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import type { Content } from "@/types/content";

export function Stack({ content }: { content: Content }) {
  const { ui, stack } = content;

  return (
    <section id="stack" className="border-b border-border py-24 sm:py-32">
      <Container>
        <SectionHeading {...ui.stack} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((category) => (
            <div key={category.label} className="rounded-2xl border border-border bg-background-elevated p-6">
              <h3 className="eyebrow">{category.label}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
