import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-foreground-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="font-mono text-xs">
          Next.js · TypeScript · Tailwind
        </p>
      </Container>
    </footer>
  );
}
