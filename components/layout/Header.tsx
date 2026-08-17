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
      <Container className="flex h-16 items-center justify-between">
        <Link href="#top" className="font-mono text-sm text-foreground">
          jp<span className="text-accent-green">.</span>lomba
        </Link>
        <nav className="hidden gap-6 sm:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-foreground-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-border px-3 py-1.5 text-sm text-foreground transition-colors hover:border-accent-green hover:text-accent-green"
        >
          GitHub
        </a>
      </Container>
    </header>
  );
}
