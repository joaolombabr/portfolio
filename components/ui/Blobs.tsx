"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Blob = {
  className: string;
  /** How far (px) the blob drifts toward the pointer — nearer shapes move more. */
  depth: number;
  morph: number;
  float: number;
  colors?: [string, string, string];
};

const heroBlobs: Blob[] = [
  { className: "-top-36 -left-44 size-72 lg:-top-28 lg:-left-32 lg:size-[26rem]", depth: 28, morph: 18, float: 13 },
  {
    className: "top-20 -right-28 size-44 lg:-right-20 lg:size-72",
    depth: 40,
    morph: 14,
    float: 10,
    colors: ["#e8f6ff", "#9fdcfb", "#c9d2ff"],
  },
  {
    className: "-bottom-40 right-[8%] size-72 lg:size-[24rem]",
    depth: 22,
    morph: 20,
    float: 15,
    colors: ["#cdefff", "#7cc9f5", "#a8e6f0"],
  },
  {
    className: "bottom-40 left-[5%] size-12 lg:size-20",
    depth: 60,
    morph: 10,
    float: 8,
    colors: ["#ffffff", "#bfe6fb", "#9fdcfb"],
  },
  {
    className: "top-[16%] right-[16%] hidden size-10 xl:block",
    depth: 70,
    morph: 9,
    float: 7,
    colors: ["#ffffff", "#cdefff", "#b9c6ff"],
  },
];

/**
 * Glossy, slowly morphing shapes behind the hero — the same idea as a 3D scene, drawn with
 * layered gradients so it costs no WebGL. The pointer position is written to --mx/--my
 * (range -1..1) and each blob drifts by its own depth, giving a light parallax.
 */
export function Blobs({ className, blobs = heroBlobs }: { className?: string; blobs?: Blob[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || !window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        node.style.setProperty("--mx", String((event.clientX / window.innerWidth) * 2 - 1));
        node.style.setProperty("--my", String((event.clientY / window.innerHeight) * 2 - 1));
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {blobs.map((blob) => (
        <span
          key={blob.className}
          className={cn("blob", blob.className)}
          style={
            {
              "--depth": `${blob.depth}px`,
              "--morph": `${blob.morph}s`,
              "--float": `${blob.float}s`,
              ...(blob.colors
                ? { "--blob-a": blob.colors[0], "--blob-b": blob.colors[1], "--blob-c": blob.colors[2] }
                : {}),
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

export const menuBlobs: Blob[] = [
  { className: "-bottom-24 -right-20 size-80 sm:size-[26rem]", depth: 30, morph: 16, float: 12 },
  {
    className: "top-24 right-[18%] size-24",
    depth: 55,
    morph: 10,
    float: 8,
    colors: ["#ffffff", "#bfe6fb", "#9fdcfb"],
  },
  {
    className: "bottom-[18%] right-[40%] hidden size-14 md:block",
    depth: 70,
    morph: 9,
    float: 7,
    colors: ["#e8f6ff", "#9fdcfb", "#c9d2ff"],
  },
];
