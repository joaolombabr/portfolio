import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { stackCategories } from "@/content/stack";

export function Stack() {
  return (
    <section id="stack" className="border-b border-border py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Ferramentas" title="Stack tecnológica" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stackCategories.map((category) => (
            <div key={category.label} className="rounded-2xl border border-border bg-background-elevated p-6">
              <h3 className="eyebrow">
                {category.label}
              </h3>
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
