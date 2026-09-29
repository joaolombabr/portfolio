import { techIcon } from "@/lib/tech-icons";
import { cn } from "@/lib/utils";

/**
 * One skill: brand mark (or a spark when the tool has none) + label.
 * `index` staggers the sheen so a row of pills twinkles in sequence instead of all at once.
 */
export function SkillPill({
  label,
  index = 0,
  size = "md",
  shine = true,
}: {
  label: string;
  index?: number;
  size?: "sm" | "md";
  /** The travelling sheen; off for static grids, where dozens of idle sweeps cost frames for nothing. */
  shine?: boolean;
}) {
  const icon = techIcon(label);
  const style = {
    "--shine-delay": `${(index * 0.55) % 6}s`,
  } as React.CSSProperties;

  return (
    <span
      style={style}
      className={cn(
        shine && "shine",
        "skill-pill inline-flex shrink-0 items-center rounded-full border border-border bg-white font-medium whitespace-nowrap text-foreground",
        size === "md" ? "gap-2.5 px-5 py-2.5 text-sm" : "gap-2 px-3.5 py-1.5 text-xs",
      )}
    >
      {icon ? (
        <svg
          viewBox="0 0 24 24"
          aria-hidden
          className={cn("shrink-0 fill-accent-strong", size === "md" ? "size-4" : "size-3.5")}
        >
          <path d={icon.path} />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          aria-hidden
          className={cn("shrink-0 fill-accent", size === "md" ? "size-4" : "size-3.5")}
        >
          <path d="M12 0c.6 5.9 6.1 11.4 12 12-5.9.6-11.4 6.1-12 12-.6-5.9-6.1-11.4-12-12C5.9 11.4 11.4 5.9 12 0Z" />
        </svg>
      )}
      {label}
    </span>
  );
}
