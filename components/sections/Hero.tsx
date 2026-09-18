import { Container } from "@/components/ui/Container";
import { shared } from "@/content/shared";
import type { Content } from "@/types/content";

export function Hero({ content }: { content: Content }) {
  const { site, ui } = content;

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border pt-28 pb-16 sm:pt-36 sm:pb-20"
    >
      <div className="bg-halo pointer-events-none absolute inset-0" aria-hidden />

      <Container className="relative text-center">
        <p className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-border bg-background-elevated px-4 py-1.5 text-xs tracking-wide text-foreground-muted">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden />
          {site.heroChip}
        </p>

        <h1
          className="animate-fade-in-up mx-auto mt-8 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-balance text-foreground sm:text-6xl lg:text-7xl"
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
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            {ui.heroPrimary}
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
              &rarr;
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-border bg-background-elevated px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            {ui.heroSecondary}
          </a>
          <a
            href={shared.resume[content.locale]}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-border bg-background-elevated px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            {ui.resume}
          </a>
        </div>

        <p
          className="animate-fade-in-up mt-10 text-xs text-foreground-muted"
          style={{ animationDelay: "320ms" }}
        >
          {site.role} &mdash; {site.location}
        </p>

        <dl
          className="animate-fade-in-up mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border text-left lg:grid-cols-4"
          style={{ animationDelay: "400ms" }}
        >
          {site.proof.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2 bg-background-elevated p-5 sm:p-6">
              <dt className="order-2 text-xs leading-relaxed text-foreground-muted sm:text-sm">
                {stat.label}
              </dt>
              <dd className="order-1 font-mono text-2xl font-semibold text-accent sm:text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
