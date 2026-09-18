import { Container } from "@/components/ui/Container";
import { shared } from "@/content/shared";
import type { Content } from "@/types/content";

export function Footer({ content }: { content: Content }) {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-center justify-between gap-3 text-sm text-foreground-muted sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {shared.name}
        </p>
        <p className="text-xs">{content.ui.footer}</p>
      </Container>
    </footer>
  );
}
