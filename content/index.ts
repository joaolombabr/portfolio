import type { Content, Locale } from "@/types/content";
import * as enSite from "@/content/en/site";
import * as enUi from "@/content/en/ui";
import * as enProjects from "@/content/en/projects";
import * as enExperience from "@/content/en/experience";
import * as enStack from "@/content/en/stack";
import * as ptSite from "@/content/pt/site";
import * as ptUi from "@/content/pt/ui";
import * as ptProjects from "@/content/pt/projects";
import * as ptExperience from "@/content/pt/experience";
import * as ptStack from "@/content/pt/stack";

/**
 * Both locales are typed against the same `Content` shape, so a section added in one
 * language and forgotten in the other fails the build instead of shipping half-translated.
 */
const content: Record<Locale, Content> = {
  en: {
    locale: "en",
    site: enSite.site,
    ui: enUi.ui,
    ...enProjects,
    ...enExperience,
    stack: enStack.stack,
  },
  pt: {
    locale: "pt",
    site: ptSite.site,
    ui: ptUi.ui,
    ...ptProjects,
    ...ptExperience,
    stack: ptStack.stack,
  },
};

export function getContent(locale: Locale): Content {
  return content[locale];
}
