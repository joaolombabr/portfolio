"use client";

import { useEffect, useState } from "react";
import { Blobs, menuBlobs } from "@/components/ui/Blobs";
import { cn } from "@/lib/utils";

type NavItem = { href: string; label: string };

/**
 * The nine-dot button and the full-screen menu it opens: big numbered links over the same
 * glossy shapes as the hero. Closes on Escape, on a link click, and locks page scroll while open.
 */
export function Menu({
  items,
  labels,
  socials,
}: {
  items: NavItem[];
  labels: { open: string; close: string };
  socials: NavItem[];
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="site-menu"
        aria-label={open ? labels.close : labels.open}
        className="group relative z-[60] grid size-10 place-items-center rounded-full border border-border bg-white/70 transition-colors hover:border-accent"
      >
        {open ? (
          <svg viewBox="0 0 24 24" aria-hidden className="size-5 stroke-foreground" strokeWidth={1.8}>
            <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
          </svg>
        ) : (
          <span aria-hidden className="grid grid-cols-3 gap-[3px]">
            {Array.from({ length: 9 }, (_, index) => (
              <span
                key={index}
                className="size-[4px] rounded-full bg-foreground transition-colors duration-300 group-hover:bg-accent-strong"
                style={{ transitionDelay: `${index * 25}ms` }}
              />
            ))}
          </span>
        )}
      </button>

      <div
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label={labels.open}
        hidden={!open}
        className="fixed inset-0 z-50 overflow-y-auto bg-white/90 backdrop-blur-xl"
      >
        <Blobs blobs={menuBlobs} />
        <nav className="relative mx-auto flex min-h-full w-full max-w-6xl flex-col justify-center px-6 pt-28 pb-16">
          <ol className="space-y-2 sm:space-y-3">
            {items.map((item, index) => (
              <li key={item.href} className="menu-item" style={{ animationDelay: `${80 + index * 70}ms` }}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-4 sm:gap-6"
                >
                  <span className="font-mono text-xs text-foreground-muted sm:text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={cn(
                      "font-display text-4xl font-medium tracking-tight text-foreground uppercase transition-all duration-500 sm:text-6xl lg:text-7xl",
                      "group-hover:translate-x-3 group-hover:text-accent-strong",
                    )}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ol>

          <ul
            className="menu-item mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm"
            style={{ animationDelay: `${120 + items.length * 70}ms` }}
          >
            {socials.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="link-wave inline-flex items-center gap-1.5 text-foreground"
                >
                  <span aria-hidden className="text-accent-strong">
                    &#8599;
                  </span>
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
