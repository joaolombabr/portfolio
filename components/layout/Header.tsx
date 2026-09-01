import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

const NAV_ITEMS = [
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#stack", label: "Stack" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="#top" className="text-base font-semibold tracking-tight text-foreground">
          jp<span className="text-accent">.</span>lomba
        </Link>

        <nav className="hidden gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-foreground-muted transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
        >
          GitHub
        </a>
      </Container>
    </header>
  );
}
