import type { ArcStep, CaseStudy, MiniProject } from "@/types/project";

export const arc: ArcStep[] = [
  {
    step: "01 · The incident",
    name: "yasmin-whatsapp-ai-agent",
    description:
      "Case study of a production AI ordering agent — the failures that only show up with real customers, and the deterministic guards that contained them. Guard code included.",
    stack: ["n8n", "OpenAI", "Redis", "REST APIs"],
    repoUrl: "https://github.com/joaolombabr/yasmin-whatsapp-ai-agent",
  },
  {
    step: "02 · The pattern",
    name: "n8n-production-patterns",
    description:
      "Sixteen patterns for running AI agents in n8n against real money, each traced to a specific incident — including how n8n actually executes, which the docs don't cover.",
    stack: ["n8n", "AI agents", "Redis"],
    repoUrl: "https://github.com/joaolombabr/n8n-production-patterns",
  },
  {
    step: "03 · The tool",
    name: "llm-tool-guard",
    description:
      "FastAPI service that sits between the agent and the irreversible action: a chain of deterministic guards, forwarded only if every one passes. 44 tests, CI on Python 3.11–3.13, Docker image.",
    stack: ["Python", "FastAPI", "Pytest", "Docker"],
    repoUrl: "https://github.com/joaolombabr/llm-tool-guard",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "yasmin-whatsapp-ai-agent",
    name: "Yasmin — WhatsApp AI ordering agent",
    tagline:
      "An LLM agent that creates real orders, with deterministic code guards that contain the model's own failure modes.",
    status: "production",
    metrics: [
      { value: "~100", label: "orders every two days" },
      { value: "12", label: "guards, each from a real incident" },
      { value: "3 + 1", label: "specialist agents + one validator voice" },
    ],
    problem:
      "A burger restaurant took WhatsApp orders by hand: someone read each chat and retyped the order into a separate system. Wiring the APIs was the easy part. The real problem was making a tool-calling LLM reliable enough to handle money — a hallucinated product ID or an unconfirmed payment method is not a cosmetic bug, it is a wrong order or lost revenue.",
    solution:
      "A multi-agent system in n8n: a thin orchestrator that routes through deterministic gates, domain specialists (orders, support, after-sales) with their own tools, and a final Validator that rewrites every reply in one voice. Logic lives in the specialist and voice lives in the Validator, so tuning tone never risks breaking order logic. Between the model and the vendor API sits a layer of code guards.",
    impact: [
      "Twelve deterministic guards, each born from a production incident — all rejecting with an actionable instruction for the agent, not an error code it would paraphrase badly to the customer.",
      "Root-caused invalid product IDs: the vendor API exposed an undocumented internal field with the same numeric shape as real IDs. Two prompt fixes had already failed; the fix was a code guard.",
      "Found a silent failure that had existed for months — one flow branch never wired — by auditing connections after every other hypothesis was ruled out with evidence.",
      "Reverse-engineered the vendor's undocumented pricing with real orders: two fields we sent were silently dropped, and the documented change field was a different one.",
      "An interceptor replaces the message whenever the agent announces an order that was never created. It has already caught a false confirmation live.",
      "Failure tests (invalid credentials, unreachable host) on isolated clones of the flow — graceful degradation proven without touching the live service.",
    ],
    deepDive: [
      "The principle that came out of it, and that I now apply by default: proof of a conversation event must live outside the model. Making a field required does not make the question happen. One order went out as credit for a customer who had said debit, because the model filled the required field with a plausible value. The fix was not a better prompt — the model's value is now ignored, and the payment method is derived from the customer's own words through a fixed mapping the agent cannot forge.",
      "The same idea moved a business event out of an LLM classifier's hands: tapping “Good” on the satisfaction survey was being classified as a greeting. It became an exact-match gate.",
      "On the vendor side, two real orders proved that the total and fee fields we sent were discarded and recalculated from the vendor's catalogue. The costliest failure mode of an undocumented API is the wrong field name that throws no error and simply does nothing. A delivery charge the platform would not let us register was solved by decoupling the billing zone from the real delivery location.",
    ],
    stack: ["n8n", "OpenAI (tool calling)", "WhatsApp API", "REST APIs", "Redis", "PostgreSQL", "Webhooks"],
    repoUrl: "https://github.com/joaolombabr/yasmin-whatsapp-ai-agent",
    featured: true,
  },
  {
    slug: "technical-report-reader",
    name: "Technical report reader — Pipefy automation",
    tagline: "From intake form to closed card, without anyone retyping a technical report.",
    status: "production",
    problem:
      "Companies that handle technical reports and product certificates — fuel and paraffin distributors, for instance — receive them in varied formats, and staff extracted characteristics, test method and specification by hand to fill different document types. Slow and error-prone.",
    solution:
      "At Escalys, I built a complete Pipefy pipe: an intake form, automatic extraction phases for the relevant data (product, document type, characteristics, method, specification), conditional automations per report type and a completion phase — all parametrised to the client's own rules, end to end.",
    impact: [
      "Removes manual data entry from technical reports and certificates.",
      "Configurable per document type and per required characteristic.",
      "In production, running a real document-triage operation at Escalys.",
    ],
    stack: ["Pipefy", "Workflow automation", "Document extraction", "AI agents", "JSON"],
    featured: true,
  },
  {
    slug: "transactional-email-n8n",
    name: "Transactional email automation — n8n",
    tagline: "Emails in the client's own visual identity, sent automatically by the flow.",
    status: "production",
    problem:
      "A jewelry store's website needed to answer every reseller sign-up form automatically, with an email that looked like the brand — not a generic form notification.",
    solution:
      "An n8n flow triggered by the sign-up form on the client's site, sending an HTML email template I designed with the brand's layout, colours and typography.",
    impact: [
      "Immediate, automatic reply to every form submitted on the site.",
      "On-brand email instead of a generic template.",
    ],
    stack: ["n8n", "HTML email", "Webhooks"],
    liveUrl: "https://valeriajoias.com",
    featured: true,
  },
];

export const miniProjects: MiniProject[] = [
  {
    slug: "atend-ia",
    name: "Atend IA",
    description:
      "Chatbot with context persistence and message processing, built for integration with support channels.",
    stack: ["FastAPI", "Claude API", "PostgreSQL", "Redis", "Docker"],
    repoUrl: "https://github.com/joaolombabr/atend-ia",
    featured: false,
  },
  {
    slug: "api-tarefas-spring",
    name: "Task REST API",
    description:
      "CRUD API with DTOs, validation, filters, global error handling and statistics endpoints.",
    stack: ["Java 17", "Spring Boot 3.2", "Spring Data JPA", "H2"],
    repoUrl: "https://github.com/joaolombabr/api-tarefas-spring",
    featured: false,
  },
];
