"use client";

import { useEffect, useRef } from "react";

/**
 * A soft ring that trails the pointer and swells over anything clickable. Mouse and
 * trackpad only — touch screens and reduced-motion users never mount the effect.
 * The native cursor stays visible; the ring is decoration, not a replacement.
 */
export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = ref.current;
    if (!ring) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let targetX = -100;
    let targetY = -100;
    let x = targetX;
    let y = targetY;
    let frame = 0;

    const tick = () => {
      x += (targetX - x) * 0.18;
      y += (targetY - y) * 0.18;
      ring.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      frame = requestAnimationFrame(tick);
    };

    const onMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      ring.style.opacity = "1";
      const interactive = (event.target as Element | null)?.closest("a, button, summary");
      ring.dataset.hover = interactive ? "true" : "false";
    };
    const onLeave = () => {
      ring.style.opacity = "0";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <div ref={ref} aria-hidden className="cursor-ring hidden opacity-0 [@media(pointer:fine)]:block" />;
}
