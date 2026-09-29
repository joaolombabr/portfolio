import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";
import { SkillPill } from "@/components/ui/SkillPill";
import type { Content } from "@/types/content";

export function Stack({ content }: { content: Content }) {
  const { ui, stack } = content;

  // Three moving rows, two categories each, alternating direction and speed.
  const rows = [0, 2, 4].map((start) => stack.slice(start, start + 2).flatMap((category) => category.items));

  return (
    <section id="stack" className="relative overflow-hidden border-b border-border py-24 sm:py-32">
      <div aria-hidden className="bg-halo pointer-events-none absolute inset-0 opacity-70" />

      <Container className="relative">
        <div className="reveal">
          <SectionHeading {...ui.stack} />
        </div>
      </Container>

      <div className="reveal relative space-y-1" style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
        {rows.map((items, index) => (
          <Marquee key={index} items={items} reverse={index % 2 === 1} duration={34 + index * 8} />
        ))}
      </div>

      <Container className="relative mt-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((category, index) => (
            <div
              key={category.label}
              className="reveal card-lift rounded-2xl border border-border bg-white/85 p-6"
              style={{ "--reveal-delay": `${(index % 3) * 90}ms` } as React.CSSProperties}
            >
              <h3 className="eyebrow">{category.label}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item, itemIndex) => (
                  <SkillPill key={item} label={item} index={index * 3 + itemIndex} size="sm" shine={false} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
