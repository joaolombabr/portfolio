import type { Metadata } from "next";
import { getContent } from "@/content";
import { localePath, shared } from "@/content/shared";
import type { Locale } from "@/types/content";

const ogLocale: Record<Locale, string> = { en: "en_US", pt: "pt_BR" };

export function buildMetadata(locale: Locale): Metadata {
  const { site } = getContent(locale);
  const other: Locale = locale === "en" ? "pt" : "en";

  return {
    metadataBase: new URL(shared.url),
    title: site.metaTitle,
    description: site.metaDescription,
    authors: [{ name: shared.name, url: shared.url }],
    alternates: {
      canonical: localePath[locale],
      languages: { en: localePath.en, "pt-BR": localePath.pt, "x-default": localePath.en },
    },
    openGraph: {
      type: "profile",
      url: localePath[locale],
      siteName: shared.name,
      title: site.metaTitle,
      description: site.metaDescription,
      locale: ogLocale[locale],
      alternateLocale: ogLocale[other],
    },
    twitter: {
      card: "summary_large_image",
      title: site.metaTitle,
      description: site.metaDescription,
    },
  };
}

/** schema.org Person, so search engines and LinkedIn-style scrapers read the role and profiles directly. */
export function buildPersonJsonLd(locale: Locale) {
  const { site, stack } = getContent(locale);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: shared.name,
    jobTitle: site.role,
    url: shared.url + (localePath[locale] === "/" ? "" : localePath[locale]),
    email: `mailto:${shared.email}`,
    sameAs: [shared.github, shared.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cachoeira",
      addressRegion: "BA",
      addressCountry: "BR",
    },
    knowsAbout: stack.slice(0, 3).flatMap((category) => category.items),
  };
}
