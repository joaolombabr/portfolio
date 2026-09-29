import { Container } from "@/components/ui/Container";
import { Menu } from "@/components/layout/Menu";
import { localePath, shared } from "@/content/shared";
import type { Content } from "@/types/content";

export function Header({ content }: { content: Content }) {
  const { ui, locale } = content;
  const otherLocale = locale === "en" ? "pt" : "en";

  const navItems = [
    { href: "#work", label: ui.nav.work },
    { href: "#principles", label: ui.nav.principles },
    { href: "#experience", label: ui.nav.experience },
    { href: "#stack", label: ui.nav.stack },
    { href: "#contact", label: ui.nav.contact },
  ];

  const socials = [
    { href: shared.github, label: "GitHub" },
    { href: shared.linkedin, label: "LinkedIn" },
    { href: shared.resume[locale], label: ui.resume },
    { href: "mailto:" + shared.email, label: shared.email },
  ];

  return (
    // No backdrop-filter on <header> itself: it would become the containing block of the
    // full-screen menu (position: fixed) and trap it inside the 72px bar.
    <header className="sticky top-0 z-40">
      <div aria-hidden className="absolute inset-0 border-b border-border/70 bg-white/75 backdrop-blur-md" />
      <Container className="flex h-[4.5rem] items-center justify-between gap-4">
        <a
          href="#top"
          className="relative z-[60] font-display text-sm font-semibold tracking-tight text-foreground"
        >
          jp<span className="text-accent-strong">.</span>lomba
        </a>

        <nav className="relative hidden gap-8 lg:flex">
          {navItems.slice(0, 4).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-wave text-sm text-foreground-muted transition-colors hover:text-foreground"
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
            className="relative z-[60] grid size-10 place-items-center rounded-full border border-border bg-white/70 font-mono text-xs text-foreground-muted transition-colors hover:border-accent hover:text-accent-strong"
          >
            {ui.switchLocale.label}
          </a>
          <a
            href="#contact"
            className="btn-primary z-[60] hidden rounded-full px-5 py-2.5 text-sm font-medium sm:inline-flex"
          >
            <span className="relative">{ui.nav.contact}</span>
          </a>
          <Menu items={navItems} labels={ui.menu} socials={socials} />
        </div>
      </Container>
    </header>
  );
}
