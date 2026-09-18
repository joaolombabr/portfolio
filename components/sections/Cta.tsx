import { Container } from "@/components/ui/Container";
import { shared } from "@/content/shared";
import type { Content } from "@/types/content";

export function Cta({ content }: { content: Content }) {
  const { contact } = content.ui;

  return (
    <section id="contact" className="py-24 sm:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-background-elevated px-6 py-16 text-center sm:px-12">
          <div className="bg-halo pointer-events-none absolute inset-0" aria-hidden />

          <div className="relative">
            <p className="eyebrow">{contact.eyebrow}</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-balance text-foreground sm:text-4xl">
              {contact.titleLead} <span className="accent-italic">{contact.titleAccent}</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-foreground-muted">{contact.body}</p>

            <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
              {contact.terms.map((term) => (
                <li
                  key={term}
                  className="rounded-full border border-border bg-background px-4 py-1.5 text-xs text-foreground-muted"
                >
                  {term}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href={"mailto:" + shared.email}
                className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                {contact.email}
              </a>
              <a
                href={shared.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                LinkedIn
              </a>
              <a
                href={shared.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                GitHub
              </a>
            </div>

            <p className="mt-8 font-mono text-sm text-foreground-muted">{shared.email}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
