import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { caseStudies, miniProjects } from "@/content/projects";

export function Projects() {
  return (
    <section id="projetos" className="border-b border-border py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="./projetos"
          title="Estudos de caso técnicos"
          description="Problema de negócio, decisão de arquitetura e stack — não só uma lista de tecnologias."
        />

        <div className="space-y-6">
          {caseStudies.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-16">
          <h3 className="font-mono text-sm text-foreground-muted">
            Outros projetos
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {miniProjects.map((project) => (
              <a
                key={project.slug}
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-border p-5 transition-all hover:-translate-y-0.5 hover:border-accent-blue"
              >
                <h4 className="font-medium text-foreground">{project.name}</h4>
                <p className="mt-2 text-sm text-foreground-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
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
