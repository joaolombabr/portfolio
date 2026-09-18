export type ProjectStatus = "production" | "in-progress";

export interface Metric {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  name: string;
  tagline: string;
  status: ProjectStatus;
  /** Two or three numbers a skimming reader takes away from the card. */
  metrics?: Metric[];
  problem: string;
  solution: string;
  impact: string[];
  /** Long-form paragraphs, collapsed behind "read the full story" so the card stays skimmable. */
  deepDive?: string[];
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
  featured: true;
}

export interface MiniProject {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  repoUrl?: string;
  featured: false;
}

/** One step of the incident → pattern → tool sequence across the public repos. */
export interface ArcStep {
  step: string;
  name: string;
  description: string;
  stack: string[];
  repoUrl: string;
}

export type Project = CaseStudy | MiniProject;
