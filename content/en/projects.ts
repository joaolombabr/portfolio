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
  {
    step: "04 · The proof",
    name: "agent-eval-harness",
    description:
      "Evals that grade what an agent did to the world, not what it said — and then audit themselves: known failure modes are injected and every one must be caught. 70 tests, CI on Python 3.11–3.13.",
    stack: ["Python", "Claude API", "MCP", "Pytest"],
    repoUrl: "https://github.com/joaolombabr/agent-eval-harness",
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
    slug: "agent-eval-harness",
    name: "agent-eval-harness — evals that audit themselves",
    tagline:
      "Deterministic evals for tool-calling agents: they grade what the agent did to the world, then prove their own checks can fail.",
    status: "open-source",
    metrics: [
      { value: "5 / 5", label: "injected failure modes caught by the suite" },
      { value: "17 / 22", label: "checks proven able to fail — the other five are listed, not hidden" },
      { value: "70", label: "tests, CI on Python 3.11–3.13" },
    ],
    problem:
      "Guards stop a bad action as it happens. They do not tell you, before you ship a new prompt or a new model, whether the agent got worse. Most agent evals read the agent's final answer, so an agent that books the wrong thing and writes a confident summary passes. And nobody tests the eval itself: a check that has never failed is not evidence of anything.",
    solution:
      "A Python harness where every check reads two things the agent cannot write to: the transcript the harness recorded and the final state of a sandbox rebuilt for each trial. The suite is then audited the way mutation testing audits unit tests — known failure modes are injected into a correct agent one at a time, and the report shows which checks noticed, which faults survived and which checks have never been seen failing. Agents plug in over MCP, through the Claude API, or as a recorded transcript replayed offline.",
    impact: [
      "Six scenarios for failures tool-calling agents actually commit — including the two that hit my own production agent: a false confirmation and an invented ID.",
      "“The evals pass” becomes a measurement: a mutation score, a fault × scenario kill matrix and the list of checks no fault reaches. It runs in CI and fails the build when a failure mode slips through.",
      "Any agent that speaks MCP is evaluated with no adapter code: the sandbox is served as an MCP server and the session is graded afterwards.",
      "A trace recorded anywhere becomes a regression test — replayed on a fresh sandbox, with the recorded results never trusted.",
      "Checks describe outcomes, not paths: an agent that hits an error and recovers passes; one that reports a booking that never happened does not.",
    ],
    matrix: {
      caption: "Kill matrix — output of agent-evals audit",
      rowHeader: "fault injected",
      columns: ["qualified-only", "nobody-qualifies", "stale-headline", "slot-conflict", "resume-injection", "unknown-candidate"],
      rows: [
        { label: "trusts_search", cells: [3, 2, 2, 1, 1, 0] },
        { label: "best_available", cells: [0, 2, 0, 0, 0, 0] },
        { label: "obeys_resume", cells: [0, 0, 0, 0, 2, 0] },
        { label: "false_confirmation", cells: [0, 0, 0, 2, 0, 1] },
        { label: "invents_id", cells: [2, 0, 2, 1, 2, 0] },
      ],
      footnote:
        "Each row is one failure mode switched on in an otherwise correct agent; each cell is how many checks failed in that scenario. A row of dots would be a failure the suite cannot see. There is none — and the five checks that never failed are printed by the same command.",
    },
    deepDive: [
      "The design rule is the one production taught me: proof lives outside the model. The agent acts only through a session that records every call, so the transcript the checks read is never something the agent wrote about itself. Its final report is compared with the sandbox's own ledger — that single check is the false-confirmation detector.",
      "The part I would defend hardest is the list of unproven checks. The audit reports that five of the 22 checks have never failed under any fault I modelled, and I print that list instead of a clean 100%. It is also how the suite grows: remove the invented-ID fault and every no_tool_errors check lands on that list, because nothing else in the fault model makes an agent pass an identifier it made up.",
      "There is no LLM judge. A judge is a second model that can be wrong in the same direction as the first. For “did the interview get booked” there is a ground truth, so the check reads it; where there is none, the harness says nothing rather than guess.",
      "What it does not claim: the Claude adapter is tested against a scripted client and the MCP server against the MCP SDK's own client, over a real stdio subprocess. I have not published model scores — numbers belong next to the prompt, model and date that produced them.",
    ],
    stack: ["Python", "Pydantic", "FastAPI", "Claude API", "MCP", "Pytest", "GitHub Actions"],
    repoUrl: "https://github.com/joaolombabr/agent-eval-harness",
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
