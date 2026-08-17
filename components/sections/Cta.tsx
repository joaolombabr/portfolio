import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export function Cta() {
  return (
    <section id="contato" className="py-20 sm:py-28">
      <Container className="text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Vamos conversar sobre IA aplicada e automação?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-foreground-muted">
          Aberto a oportunidades como AI Engineer, Automation Engineer ou
          AI-focused Full Stack Developer — remoto, CLT ou PJ.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-accent-green px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            LinkedIn
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent-blue hover:text-accent-blue"
          >
            GitHub
          </a>
          <a
            href={`mailto:${site.email}`}
            className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent-blue hover:text-accent-blue"
          >
            {site.email}
          </a>
        </div>
      </Container>
    </section>
  );
}
