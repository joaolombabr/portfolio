import { Hero } from "@/components/sections/Hero";
import { Arc } from "@/components/sections/Arc";
import { Projects } from "@/components/sections/Projects";
import { Principles } from "@/components/sections/Principles";
import { Experience } from "@/components/sections/Experience";
import { Stack } from "@/components/sections/Stack";
import { Cta } from "@/components/sections/Cta";
import { getContent } from "@/content";
import { buildPersonJsonLd } from "@/lib/metadata";
import type { Locale } from "@/types/content";

/**
 * Section order follows how a recruiter skims: claim + proof numbers, the three-repo story
 * in one screen, then the depth (case studies), then how I work, then the record.
 */
export function HomePage({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const jsonLd = buildPersonJsonLd(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero content={content} />
      <Arc content={content} />
      <Projects content={content} />
      <Principles content={content} />
      <Experience content={content} />
      <Stack content={content} />
      <Cta content={content} />
    </>
  );
}
