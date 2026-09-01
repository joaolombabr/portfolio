import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export function Cta() {
  return (
    <section id="contato" className="py-24 sm:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-background-elevated px-6 py-16 text-center sm:px-12">
          <div className="bg-halo pointer-events-none absolute inset-0" aria-hidden />

          <div className="relative">
            <p className="eyebrow">Contato</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              Vamos conversar sobre <span className="accent-italic">IA aplicada</span> e
              automação?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-foreground-muted">
              Aberto a oportunidades como AI Engineer, Automation Engineer ou
              desenvolvedor com foco em integrações — remoto, CLT ou PJ.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href={"mailto:" + site.email}
                className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                Enviar e-mail
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                LinkedIn
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                GitHub
              </a>
            </div>

            <p className="mt-8 text-sm text-foreground-muted">{site.email}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
