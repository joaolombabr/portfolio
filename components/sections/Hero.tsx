import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border py-24 sm:py-32"
    >
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-[36rem] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--accent-green) 0%, var(--accent-blue) 45%, transparent 70%)",
        }}
        aria-hidden
      />
      <Container className="relative">
        <p className="animate-fade-in-up font-mono text-sm text-accent-green">
          {site.role} — {site.location}
        </p>
        <h1
          className="animate-fade-in-up mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-5xl"
          style={{ animationDelay: "80ms" }}
        >
          {site.heroHeadline}
        </h1>
        <p
          className="animate-fade-in-up mt-6 max-w-2xl text-lg text-foreground-muted"
          style={{ animationDelay: "160ms" }}
        >
          {site.heroSubheadline}
        </p>
        <div
          className="animate-fade-in-up mt-10 flex flex-wrap gap-4"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#projetos"
            className="rounded-md bg-accent-green px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 hover:opacity-90"
          >
            Ver projetos
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent-blue hover:text-accent-blue"
          >
            Conectar no LinkedIn
          </a>
        </div>
      </Container>
    </section>
  );
}
