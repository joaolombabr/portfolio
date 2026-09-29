"use client";

import { useEffect } from "react";

/**
 * Fades `.reveal` elements in the first time they scroll into view. One observer for the
 * whole page; the hidden starting state lives in globals.css under `html.js`.
 */
export function RevealObserver() {
  useEffect(() => {
    const targets = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return null;
}
