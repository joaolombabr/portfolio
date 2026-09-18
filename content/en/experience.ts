import type { Education, Principle, Role } from "@/types/content";

export const principles: Principle[] = [
  {
    title: "Proof lives outside the model",
    body: "If a conversation event matters — a question asked, an order created — the evidence has to come from somewhere the model cannot write to.",
  },
  {
    title: "Two prompt fixes, then code",
    body: "When a behaviour fails twice for the same reason after a prompt fix, the cause is not in the prompt. It becomes a deterministic check.",
  },
  {
    title: "Root cause before the fix",
    body: "I separate understanding from correcting. A fix proposed before the cause is proven with evidence is a guess with a commit message.",
  },
  {
    title: "Break it on a clone",
    body: "Failure modes — bad credentials, dead hosts, timeouts — are tested on an isolated copy, never on the live service or shared credentials.",
  },
];

export const roles: Role[] = [
  {
    company: "Escalys",
    role: "Process Automation & AI Integrations Engineer (contractor)",
    period: "Jun 2026 — present",
    location: "Branding, marketing and technology agency · remote",
    bullets: [
      "Architect and maintain a REST/webhook integration mesh (Pipefy → n8n → Asaas → WhatsApp) that runs an operation of 11 pipes and 4 databases.",
      "Built Python AI agents that classify documents and extract structured data from PDFs, removing manual handling by the team.",
      "Defined and documented business rules, validations and JSON data handling for a critical multi-system flow, cutting inconsistencies between platforms.",
      "Deliver custom websites and systems for client companies, including sales flows that run inside WhatsApp.",
      "Validate data with SQL on PostgreSQL; test and document APIs with Postman across the integration stack.",
    ],
    stack: ["n8n", "Python", "Pipefy", "REST APIs", "Webhooks", "PostgreSQL", "Postman"],
  },
  {
    company: "Casa Clínica",
    role: "IT Generalist / Technical Support",
    period: "2023 — 2025",
    location: "Animal health education center · Cachoeira, BA · started as intern, hired full-time",
    bullets: [
      "Owned all IT for the organization: user support, hardware and software maintenance, infrastructure and day-to-day tickets.",
      "Taught computing classes to mixed audiences, including children and elderly groups — daily practice explaining technical problems in plain language.",
      "Also covered marketing and digital presence, absorbing the operation's whole technology workload.",
    ],
    stack: ["IT support", "Hardware & software", "Infrastructure", "Teaching"],
  },
  {
    company: "Freelance",
    role: "Full Stack & Automation Developer",
    period: "2022 — present",
    location: "Client, academic and personal projects · remote",
    bullets: [
      "Built a WhatsApp ordering and customer-service automation for a pizzeria, including error handling and production flow testing.",
      "Power BI dashboards and reports at Iatec (FADBA, part-time) and for a startup client, fed by SQL queries and REST APIs.",
      "Web apps and REST APIs with JWT auth, validation and global error handling (React, TypeScript, Node.js, Python, FastAPI).",
      "Delivered a mobile app and sales pages for a clothing retailer, and a jewelry e-commerce site with transactional email automation in n8n.",
    ],
    stack: ["React", "TypeScript", "Node.js", "Python", "FastAPI", "Power BI", "Docker"],
  },
];

export const education: Education = {
  degree: "Technologist in Information Technology Management",
  institution: "UNIAENE-FADBA",
  period: "2023 — 2025",
  certifications: [
    "Machine Learning — Microsoft, 2025",
    "Databases — Oracle, 2025",
    "Data Science — Udemy, 2025",
    "Java — Udemy, 2025",
  ],
  languages: ["Portuguese — native", "English — professional working proficiency (B2+), comfortable in live meetings"],
};
