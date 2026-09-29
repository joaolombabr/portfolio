import type { ArcStep, CaseStudy, Metric, MiniProject, ProjectStatus } from "@/types/project";

export type Locale = "en" | "pt";

export interface Site {
  role: string;
  location: string;
  /** <title> and meta description for this locale. */
  metaTitle: string;
  metaDescription: string;
  heroChip: string;
  /** Split so the second half can be set in the blue gradient. */
  heroHeadlineLead: string;
  heroHeadlineAccent: string;
  heroSubheadline: string;
  /** Numbers shown under the hero — every one must be verifiable in a public repo or the CV. */
  proof: Metric[];
}

export interface Principle {
  title: string;
  body: string;
}

export interface Role {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  stack: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  certifications: string[];
  languages: string[];
}

export interface StackCategory {
  label: string;
  items: string[];
}

export interface Heading {
  eyebrow: string;
  title: string;
  description?: string;
}

export interface Ui {
  nav: { work: string; principles: string; experience: string; stack: string; contact: string };
  /** Label of the link that switches to the *other* locale. */
  switchLocale: { label: string; ariaLabel: string };
  /** Accessible names of the full-screen menu button. */
  menu: { open: string; close: string };
  /** Caption above the scrolling band of tools under the hero. */
  toolsBand: string;
  heroPrimary: string;
  heroSecondary: string;
  /** Label of the résumé download; the file is shared.resume[locale]. */
  resume: string;
  arc: Heading;
  work: Heading;
  otherProjects: string;
  principles: Heading;
  experience: Heading;
  stack: Heading;
  education: string;
  certifications: string;
  status: Record<ProjectStatus, string>;
  card: { problem: string; solution: string; impact: string; readMore: string; repo: string; live: string };
  contact: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    body: string;
    terms: string[];
    email: string;
  };
  footer: string;
}

export interface Content {
  locale: Locale;
  site: Site;
  ui: Ui;
  arc: ArcStep[];
  caseStudies: CaseStudy[];
  miniProjects: MiniProject[];
  principles: Principle[];
  roles: Role[];
  education: Education;
  stack: StackCategory[];
}
