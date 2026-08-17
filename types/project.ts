export type ProjectStatus = "produção" | "em desenvolvimento" | "em finalização";

export interface CaseStudy {
  slug: string;
  name: string;
  tagline: string;
  status: ProjectStatus;
  problem: string;
  solution: string;
  stack: string[];
  impact: string[];
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

export type Project = CaseStudy | MiniProject;
