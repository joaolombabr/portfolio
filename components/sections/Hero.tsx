import { Container } from "@/components/ui/Container";
import { Blobs } from "@/components/ui/Blobs";
import { Marquee } from "@/components/ui/Marquee";
import { shared } from "@/content/shared";
import type { Content } from "@/types/content";

export function Hero({ content }: { content: Content }) {
  const { site, ui, stack } = content;
  const tools = stack.flatMap((category) => category.items);

  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="bg-halo pointer-events-none absolute inset-0" aria-hidden />
      <Blobs />

      <Container className="relative pt-24 pb-14 text-center sm:pt-32 sm:pb-16">
        <p className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-4 py-1.5 text-xs tracking-wide text-foreground-muted backdrop-blur">
          <span className="relative flex size-2" aria-hidden>
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-accent-strong" />
          </span>
          {site.heroChip}
        </p>

        <p
          className="animate-fade-in-up mt-8 font-mono text-[0.7rem] tracking-[0.16em] text-foreground-muted uppercase sm:text-xs sm:tracking-[0.25em]"
          style={{ animationDelay: "60ms" }}
        >
          {shared.name} · {site.role}
        </p>

        <h1
          className="animate-fade-in-up mx-auto mt-5 max-w-5xl font-display text-[2rem] leading-[1.08] font-medium tracking-tight text-balance text-foreground uppercase sm:text-5xl lg:text-[4.1rem]"
          style={{ animationDelay: "120ms" }}
        >
          {site.heroHeadlineLead}{" "}
          <span className="accent-gradient">{site.heroHeadlineAccent}</span>
        </h1>

        <p
          className="animate-fade-in-up mx-auto mt-8 max-w-2xl text-base leading-relaxed text-foreground-muted sm:text-lg"
          style={{ animationDelay: "200ms" }}
        >
          {site.heroSubheadline}
        </p>

        <div
          className="animate-fade-in-up mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
          style={{ animationDelay: "280ms" }}
        >
          <a href="#work" className="btn-primary group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold">
            <span className="relative">{ui.heroPrimary}</span>
            <span aria-hidden className="relative transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
          <a href="#contact" className="link-wave inline-flex items-center gap-2 text-sm font-medium text-foreground">
            <span aria-hidden className="text-accent-strong">
              &rarr;
            </span>
            {ui.heroSecondary}
          </a>
          <a
            href={shared.resume[content.locale]}
            target="_blank"
            rel="noreferrer"
            className="link-wave inline-flex items-center gap-2 text-sm font-medium text-foreground"
          >
            <span aria-hidden className="text-accent-strong">
              &#8599;
            </span>
            {ui.resume}
          </a>
        </div>

        <p
          className="animate-fade-in-up mt-8 text-xs text-foreground-muted"
          style={{ animationDelay: "340ms" }}
        >
          {site.location}
        </p>

        <dl
          className="animate-fade-in-up mt-14 grid grid-cols-2 gap-3 text-left lg:grid-cols-4"
          style={{ animationDelay: "420ms" }}
        >
          {site.proof.map((stat) => (
            <div
              key={stat.label}
              className="card-lift flex flex-col gap-2 rounded-2xl border border-border bg-white/80 p-5 sm:p-6"
            >
              <dt className="order-2 text-xs leading-relaxed text-foreground-muted sm:text-sm">{stat.label}</dt>
              <dd className="order-1 font-display text-2xl font-medium text-accent-strong sm:text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>

      <div className="relative border-t border-border/80 bg-white/70 py-5">
        <p className="eyebrow mb-2 text-center">{ui.toolsBand}</p>
        <Marquee items={tools} duration={70} />
      </div>
    </section>
  );
}
