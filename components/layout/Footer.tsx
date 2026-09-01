import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-center justify-between gap-3 text-sm text-foreground-muted sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {site.name}
        </p>
        <p className="text-xs">Next.js &middot; TypeScript &middot; Tailwind</p>
      </Container>
    </footer>
  );
}
