import type { ProjectOverlay } from "./overlay";

// Traductions EN des produits IA (par id). Voir src/data/sideProjects.ts pour le FR.
export const sideProjectsEn: Record<string, ProjectOverlay> = {
  horizon: {
    title: "Horizon: AI-augmented personal knowledge hub",
    tagline: "AI-augmented personal knowledge hub · In progress (working MVP)",
    context:
      "A chat workspace where several domain-specialized AI agents share a common knowledge base. The architecture is built around one principle: the AI proposes, the human validates (the model never has write access to the base, zero drift). 'Altitude' visual direction.",
    status: "In progress (working MVP)",
    solutions: [
      "Agent router: selection with a confidence level, manual override possible",
      "RAG over embeddings to bring in the right context",
      "Streaming responses with source citations",
      "Editable artifacts in a canvas",
      "Pinned, centralized LLM models (a single value to change to migrate versions)",
      "API key strictly server-side, database access behind RLS",
      "Cost-first: web search off by default, cheapest model suited to each task, prompt cache preserved",
    ],
  },

  doctap: {
    title: "DocTap: Document capture and PDF formatting PWA",
    tagline:
      "Mobile-first PWA that turns document photos into clean, print-ready PDFs. Designed, built and deployed solo, driving Claude Code end to end.",
    context:
      "A mobile-first PWA that turns document photos into clean, print-ready PDFs. Two modes, two distinct technical pipelines: a 100% local Photos mode and an AI (OCR) mode that rebuilds a native text PDF, with human verification before generation.",
    status: "Live in public production",
    challenges: [
      "Scan documents from a phone without a native app or heavy server infrastructure",
      "Handle sensitive documents without ever compromising their confidentiality",
      "Make an inherently fallible AI output (OCR) reliable before any final generation",
    ],
    solutions: [
      "Two separate PDF pipelines depending on data sensitivity. Photos mode (100% local): capture, cropping, then assembly into A4 landscape, 2 photos per page, PDF generated in the browser, no data sent to a server",
      "AI mode (OCR): transcription of the document and reconstruction of a native, selectable and searchable text PDF, server-side",
      "Human-in-the-loop on the AI output: page-by-page human verification before generation, the transcription is never locked in without a chance to review it",
      "Robustness: a failed page is flagged and skipped rather than blocking the batch, real cancellation of in-flight requests, quota handling",
      "Privacy by design: local-first, deliberate refusal to store personal data, configurable local retention with automatic deletion",
      "LLM integration: Mistral API (vision model) for OCR, consistent with the French positioning and European compliance",
    ],
  },

  rekap: {
    title: "Rekap: AI agent for sales visit preparation",
    tagline:
      "A tool that automatically prepares field sales visits in the pharmaceutical sector: a visit brief PDF generated in under a minute, with no manual entry. A project framed end to end by directing AI.",
    context:
      "A tool that automatically prepares field sales visits in the pharmaceutical sector. It connects to the CRM, analyzes the data and generates a visit brief PDF in under a minute, with no manual entry: client identity, contract, revenue, history, margin calculation, alerts and AI-generated synthesis.",
    status: "Full product framing",
    challenges: [
      "Before each visit, a sales rep spends about twenty minutes collecting data scattered across several tabs and tools",
      "Margin calculations are done by hand, time-consuming and error-prone",
      "The useful data lives in a complex CRM, hard to aggregate quickly",
    ],
    solutions: [
      "Direct CRM connection, data analysis and generation of a visit brief PDF in under a minute, with no manual entry",
      "Complete brief: client identity, contract, revenue, activity history, automated margin calculation, alerts and AI-generated synthesis",
      "End-to-end product framing: needs audit, fine business specification, wireframe, business model. An example of product thinking, not just development",
      "Planned architecture: server-side PDF generation (@react-pdf/renderer), Mistral API for synthesis and alerts, CRM connection via API, sovereign hosting (France, GDPR-compliant)",
    ],
  },

  relancia: {
    title: "RelancIA: AI agent for personalized invoice follow-ups",
    tagline:
      "An agent that helps sales reps chase their unpaid invoices in their own voice, without breaking the client relationship. Designed and built by directing Claude Code.",
    context:
      "An agent that helps sales reps chase unpaid invoices without breaking the client relationship. It analyzes each rep's own writing style from their past emails, then generates follow-ups in their voice: the recipient feels the rep wrote it themselves.",
    status: "Working prototype, tested with a first real user",
    challenges: [
      "Chase an unpaid invoice without damaging the business relationship",
      "A generic follow-up rings false: it doesn't read like something the rep would write themselves",
      "Keep control over the final, editable message before any send",
    ],
    solutions: [
      "Analysis of past emails to learn each rep's individual tone, then generation in their voice: the recipient feels the rep wrote it themselves",
      "Style configuration through a library of examples, invoice info entry, automatic overdue calculation, suggested follow-up level (friendly, direct, firm)",
      "Editable and regenerable subject and body, direct opening in the mail client",
      "LLM integration: Mistral API (mistral-small-latest), API key strictly server-side, GDPR choice (European infrastructure)",
      "Controlled and measured cost, structured logging of consumption",
    ],
  },

  "assistant-tri-offres": {
    title: "Offer triage assistant: AI scoring and making an LLM's judgment reliable",
    tagline:
      "Automatic scoring tool that qualifies offers against defined criteria. Judgment reliability doesn't come from the model but from the firm, eliminatory rules imposed on it.",
    context:
      "An automatic scoring tool that qualifies offers against defined criteria. The core technical challenge: an LLM hedges by default and avoids committing. Judgment reliability doesn't come from the model but from the firm, eliminatory rules imposed on it.",
    status: "R&D tool",
    challenges: [
      "An LLM hedges by default and avoids committing: hard to get a reliable, reproducible judgment out of it",
      "Make the automatic triage match the expected judgment exactly, with no drift",
      "Qualify offers against defined criteria, consistently",
    ],
    solutions: [
      "Reliability from rules, not from the model: firm criteria and eliminatory conditions imposed on the LLM rather than blind trust",
      "Prompt iterated until the triage matched the expected judgment exactly, turning a hesitant LLM into a tool that commits",
      "Orchestration pipeline: n8n triggers the scoring, the Claude API evaluates, results are logged and usable in Airtable",
      "The reliability angle applied to scoring and automatic qualification",
    ],
  },
};

export default sideProjectsEn;
