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
        "rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
