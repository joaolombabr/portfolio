import { Container } from "@/components/ui/Container";
import { localePath } from "@/content/shared";
import type { Content } from "@/types/content";

export function Header({ content }: { content: Content }) {
  const { ui, locale } = content;
  const otherLocale = locale === "en" ? "pt" : "en";

  const navItems = [
    { href: "#work", label: ui.nav.work },
    { href: "#principles", label: ui.nav.principles },
    { href: "#experience", label: ui.nav.experience },
    { href: "#stack", label: ui.nav.stack },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#top" className="text-base font-semibold tracking-tight text-foreground">
          jp<span className="text-accent">.</span>lomba
        </a>

        <nav className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-foreground-muted transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Plain <a>: each locale has its own root layout, so this is a full page load anyway. */}
          <a
            href={localePath[otherLocale]}
            hrefLang={otherLocale === "pt" ? "pt-BR" : "en"}
            aria-label={ui.switchLocale.ariaLabel}
            className="rounded-full border border-border px-3 py-2 font-mono text-xs text-foreground-muted transition-colors hover:border-accent hover:text-accent"
          >
            {ui.switchLocale.label}
          </a>
          <a
            href="#contact"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            {ui.nav.contact}
          </a>
        </div>
      </Container>
    </header>
  );
}
