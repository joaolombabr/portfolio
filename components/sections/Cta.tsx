import { Container } from "@/components/ui/Container";
import { Blobs } from "@/components/ui/Blobs";
import { shared } from "@/content/shared";
import type { Content } from "@/types/content";

const ctaBlobs = [
  { className: "-top-20 -left-16 size-56", depth: 24, morph: 16, float: 12 },
  {
    className: "-right-10 -bottom-16 size-64",
    depth: 30,
    morph: 18,
    float: 14,
    colors: ["#cdefff", "#7cc9f5", "#c9d2ff"] as [string, string, string],
  },
];

export function Cta({ content }: { content: Content }) {
  const { contact, resume } = content.ui;

  const secondaryLinks = [
    { href: shared.resume[content.locale], label: resume },
    { href: shared.linkedin, label: "LinkedIn" },
    { href: shared.github, label: "GitHub" },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32">
      <Container>
        <div className="reveal relative overflow-hidden rounded-[2rem] border border-border bg-background-elevated px-6 py-20 text-center sm:px-12">
          <div className="bg-halo pointer-events-none absolute inset-0" aria-hidden />
          <Blobs blobs={ctaBlobs} className="opacity-80" />

          <div className="relative">
            <p className="eyebrow">{contact.eyebrow}</p>
            <h2 className="mx-auto mt-5 max-w-4xl font-display text-2xl leading-tight font-medium tracking-tight text-balance text-foreground uppercase sm:text-4xl">
              {contact.titleLead} <span className="accent-gradient">{contact.titleAccent}</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-foreground-muted">{contact.body}</p>

            <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
              {contact.terms.map((term) => (
                <li
                  key={term}
                  className="rounded-full border border-border bg-white/80 px-4 py-1.5 text-xs text-foreground-muted backdrop-blur"
                >
                  {term}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              <a
                href={"mailto:" + shared.email}
                className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
              >
                <span className="relative">{contact.email}</span>
                <span aria-hidden className="relative">
                  &rarr;
                </span>
              </a>
              {secondaryLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-wave inline-flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <span aria-hidden className="text-accent-strong">
                    &#8599;
                  </span>
                  {link.label}
                </a>
              ))}
            </div>

            <p className="mt-10 font-mono text-sm text-foreground-muted">{shared.email}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
