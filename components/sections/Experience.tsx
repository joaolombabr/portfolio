import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { roles } from "@/content/experience";
import { education } from "@/content/education";

export function Experience() {
  return (
    <section id="experiencia" className="border-b border-border py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="./experiencia"
          title="Experiência"
          description="Ação → como → resultado — não uma lista do que eu era responsável por fazer."
        />

        <div className="space-y-10">
          {roles.map((role) => (
            <div key={role.company}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-foreground">
                  {role.role} <span className="text-accent-blue">— {role.company}</span>
                </h3>
                <span className="font-mono text-xs text-foreground-muted">{role.period}</span>
              </div>
              <p className="text-sm text-foreground-muted">{role.location}</p>

              <ul className="mt-4 space-y-2">
                {role.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2 text-sm text-foreground">
                    <span className="mt-0.5 text-accent-green">→</span>
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
          ))}
        </div>

        <div className="mt-14 grid gap-8 border-t border-border pt-10 sm:grid-cols-2">
          <div>
            <h3 className="font-mono text-sm text-accent-blue">Formação</h3>
            <p className="mt-2 text-sm text-foreground">
              {education.degree} — {education.institution}
            </p>
            <p className="text-sm text-foreground-muted">{education.period}</p>
            <p className="mt-4 text-sm text-foreground-muted">
              {education.languages.join(" · ")}
            </p>
          </div>
          <div>
            <h3 className="font-mono text-sm text-accent-blue">Certificações</h3>
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
