import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { caseStudies, miniProjects } from "@/content/projects";

export function Projects() {
  return (
    <section id="projetos" className="border-b border-border py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Portfólio"
          title="Estudos de caso técnicos"
          description="Problema de negócio, decisão de arquitetura e o que quebrou em produção — não só uma lista de tecnologias."
        />

        <div className="space-y-6">
          {caseStudies.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-20">
          <p className="eyebrow">Outros projetos</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {miniProjects.map((project) => (
              <a
                key={project.slug}
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-border bg-background-elevated p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40"
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-semibold text-foreground">{project.name}</h4>
                  <span
                    aria-hidden
                    className="text-accent transition-transform group-hover:translate-x-0.5"
                  >
                    &#8599;
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
