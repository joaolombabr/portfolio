export type ProjectStatus = "production" | "in-progress" | "open-source";

export interface Metric {
  value: string;
  label: string;
}

/** A small fault × scenario grid; each cell is how many checks failed. Zero renders as a dot. */
export interface KillMatrix {
  caption: string;
  rowHeader: string;
  columns: string[];
  rows: { label: string; cells: number[] }[];
  footnote: string;
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
  /** Shown under the impact list when the result is better read as a table than as prose. */
  matrix?: KillMatrix;
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

/** One step of the incident → pattern → tool → proof sequence across the public repos. */
export interface ArcStep {
  step: string;
  name: string;
  description: string;
  stack: string[];
  repoUrl: string;
}

export type Project = CaseStudy | MiniProject;
