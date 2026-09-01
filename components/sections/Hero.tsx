import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border py-28 sm:py-40"
    >
      <div className="bg-halo pointer-events-none absolute inset-0" aria-hidden />

      <Container className="relative text-center">
        <p className="animate-fade-in-up inline-flex items-center rounded-full border border-border bg-background-elevated px-4 py-1.5 text-xs tracking-wide text-foreground-muted">
          {site.heroChip}
        </p>

        <h1
          className="animate-fade-in-up mx-auto mt-8 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          {site.heroHeadlineLead}{" "}
          <span className="accent-italic">{site.heroHeadlineAccent}</span>
        </h1>

        <p
          className="animate-fade-in-up mx-auto mt-8 max-w-2xl text-base text-foreground-muted sm:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          {site.heroSubheadline}
        </p>

        <div
          className="animate-fade-in-up mt-10 flex flex-wrap justify-center gap-3"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#projetos"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            Ver projetos
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
              &rarr;
            </span>
          </a>
          <a
            href="#contato"
            className="inline-flex items-center rounded-full border border-border bg-background-elevated px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Falar comigo
          </a>
        </div>

        <p
          className="animate-fade-in-up mt-10 text-xs text-foreground-muted"
          style={{ animationDelay: "320ms" }}
        >
          {site.role} &mdash; {site.location}
        </p>
      </Container>
    </section>
  );
}
