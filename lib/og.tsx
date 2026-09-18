import { ImageResponse } from "next/og";
import { getContent } from "@/content";
import { shared } from "@/content/shared";
import type { Locale } from "@/types/content";

export const ogSize = { width: 1200, height: 630 };

/**
 * Satori over-measures some words in Geist ("automations" gets a wide gap after it),
 * but lays out a single text node correctly. So every run of text is joined with
 * non-breaking spaces, and the headline is packed into whole lines up front.
 */
const nbsp = (text: string) => text.replace(/ /g, " ");

/** ~34 characters of Geist at 64px fill the 1056px content width. */
function packLines(text: string, maxChars = 34): string[] {
  const lines: string[] = [];
  for (const word of text.split(" ")) {
    const last = lines[lines.length - 1];
    if (last !== undefined && `${last} ${word}`.length <= maxChars) {
      lines[lines.length - 1] = `${last} ${word}`;
    } else {
      lines.push(word);
    }
  }
  return lines;
}

/**
 * The preview card LinkedIn, WhatsApp and job boards show when the link is pasted.
 * Mirrors the hero: black, one orange accent, the headline as the only large text.
 */
export function renderOgImage(locale: Locale) {
  const { site } = getContent(locale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: "#070707",
          backgroundImage: "radial-gradient(circle at 50% 0%, #3a1a05 0%, #070707 60%)",
          color: "#f4f4f4",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#9b9b9b" }}>
          <div style={{ display: "flex", color: "#f4f4f4", fontWeight: 700 }}>
            jp<span style={{ color: "#ff6a00" }}>.</span>lomba
          </div>
          <div style={{ display: "flex" }}>{nbsp(site.role)}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 34, color: "#9b9b9b" }}>{nbsp(shared.name)}</div>
          <div style={{ display: "flex", flexWrap: "wrap", columnGap: "0.26em", fontSize: 64, lineHeight: 1.1, marginTop: 16 }}>
            {packLines(site.heroHeadlineLead).map((line) => (
              <span key={line} style={{ flexShrink: 0 }}>
                {nbsp(line)}
              </span>
            ))}
            <span style={{ flexShrink: 0, color: "#ff6a00" }}>{nbsp(site.heroHeadlineAccent)}</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #2a2a2a",
            paddingTop: 28,
            fontSize: 24,
            color: "#9b9b9b",
          }}
        >
          <div style={{ display: "flex" }}>{shared.url.replace("https://", "")}</div>
          <div style={{ display: "flex", color: "#ffa05c" }}>{nbsp("n8n · Python · LLM agents · REST APIs")}</div>
        </div>
      </div>
    ),
    ogSize,
  );
}
