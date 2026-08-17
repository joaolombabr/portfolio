import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "rounded-full border border-border bg-background-elevated px-2.5 py-1 font-mono text-xs text-foreground-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
