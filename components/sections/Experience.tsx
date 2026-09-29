import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import type { Content } from "@/types/content";

export function Experience({ content }: { content: Content }) {
  const { ui, roles, education } = content;

  return (
    <section id="experience" className="border-b border-border py-24 sm:py-32">
      <Container>
        <div className="reveal">
          <SectionHeading {...ui.experience} />
        </div>

        <div className="space-y-12">
          {roles.map((role) => (
            <div key={role.company} className="reveal grid gap-4 sm:grid-cols-[11rem_1fr] sm:gap-8">
              <div>
                <p className="font-mono text-xs text-foreground-muted">{role.period}</p>
                <p className="mt-1 font-semibold text-accent-strong">{role.company}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground">{role.role}</h3>
                <p className="text-sm text-foreground-muted">{role.location}</p>

                <ul className="mt-4 space-y-2">
                  {role.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-foreground">
                      <span aria-hidden className="mt-0.5 text-accent-strong">
                        &rarr;
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {role.stack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-8 border-t border-border pt-10 sm:grid-cols-2">
          <div>
            <h3 className="eyebrow">{ui.education}</h3>
            <p className="mt-2 text-sm text-foreground">
              {education.degree} — {education.institution}
            </p>
            <p className="text-sm text-foreground-muted">{education.period}</p>
            <ul className="mt-4 space-y-1">
              {education.languages.map((language) => (
                <li key={language} className="text-sm text-foreground-muted">
                  {language}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="eyebrow">{ui.certifications}</h3>
            <ul className="mt-2 space-y-1">
              {education.certifications.map((cert) => (
                <li key={cert} className="text-sm text-foreground-muted">
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
