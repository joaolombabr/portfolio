import type { Ui } from "@/types/content";

export const ui: Ui = {
  nav: { work: "Work", principles: "How I work", experience: "Experience", stack: "Stack", contact: "Contact" },
  switchLocale: { label: "PT", ariaLabel: "Ler em português" },
  menu: { open: "Open menu", close: "Close menu" },
  toolsBand: "Tools I ship to production with",
  heroPrimary: "See the work",
  heroSecondary: "Let's talk",
  resume: "Résumé (PDF)",
  arc: {
    eyebrow: "The through-line",
    title: "Incident → pattern → tool → proof",
    description:
      "Four public repositories that read in sequence: what broke in production, the rule it taught me, the tool that generalises it, and the evals that prove it before deploy.",
  },
  work: {
    eyebrow: "Case studies",
    title: "Production work",
    description:
      "Business problem, architecture decision and what broke in production — not a list of technologies. One open-source tool is in here because it came straight out of that work.",
  },
  otherProjects: "Other projects",
  principles: {
    eyebrow: "How I work",
    title: "Rules I learned the expensive way",
  },
  experience: {
    eyebrow: "Track record",
    title: "Experience",
  },
  stack: { eyebrow: "Tools", title: "Stack" },
  education: "Education & languages",
  certifications: "Certifications",
  status: { production: "In production", "in-progress": "In progress", "open-source": "Open source" },
  card: {
    problem: "Problem",
    solution: "Solution / architecture",
    impact: "Impact",
    readMore: "Read the full story",
    repo: "Repository",
    live: "Live site",
  },
  contact: {
    eyebrow: "Contact",
    titleLead: "Need someone to build — or fix — an AI automation that touches",
    titleAccent: "real money?",
    body: "Open to AI Automation Engineer, AI Engineer and integration roles — full-time or contract.",
    terms: [
      "Remote from Bahia, Brazil · UTC-3, overlaps US and EU hours",
      "Registered business entity · invoices in USD",
      "English: comfortable in live meetings",
    ],
    email: "Send an email",
  },
  footer: "Built with Next.js, TypeScript and Tailwind",
};
