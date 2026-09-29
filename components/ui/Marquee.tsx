import { SkillPill } from "@/components/ui/SkillPill";
import { cn } from "@/lib/utils";

/**
 * Infinite, CSS-only ticker of skills. The list is rendered twice back to back and the pair
 * slides left by one copy's width, so the loop has no seam. The copy is aria-hidden: screen
 * readers hear each skill once. Pauses on hover; stops and wraps under reduced motion.
 */
export function Marquee({
  items,
  reverse = false,
  duration = 40,
  className,
}: {
  items: string[];
  reverse?: boolean;
  /** Seconds for one full loop — more items want more time to keep the same speed. */
  duration?: number;
  className?: string;
}) {
  const style = {
    "--duration": `${duration}s`,
    "--direction": reverse ? "reverse" : "normal",
  } as React.CSSProperties;

  return (
    <div className={cn("marquee py-3", className)} style={style}>
      {[false, true].map((isCopy) => (
        <ul key={String(isCopy)} className="marquee-track" aria-hidden={isCopy || undefined}>
          {items.map((item, index) => (
            <li key={item}>
              <SkillPill label={item} index={index} />
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
