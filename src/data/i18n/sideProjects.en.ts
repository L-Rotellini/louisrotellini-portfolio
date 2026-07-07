import type { ProjectOverlay } from "./overlay";

// Traductions EN des produits IA (par id). Voir src/data/sideProjects.ts pour le FR.
export const sideProjectsEn: Record<string, ProjectOverlay> = {
  horizon: {
    title: "Horizon — AI-augmented personal knowledge hub",
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
    tagline: "Document OCR PWA · Live in public production",
    context:
      "Web app that turns document photos into organized, searchable PDFs. Local-first storage, deployed on Vercel.",
    status: "MVP done",
    challenges: [
      "Scan paper documents without a native app or heavy server infrastructure",
      "Guarantee the confidentiality of the processed documents",
      "Enable search within PDFs generated from photos",
    ],
    solutions: [
      "Installable PWA with direct camera capture from the browser",
      "OCR pipeline to extract text and generate searchable PDFs",
      "Local-first storage: no data sent to a third-party server by default",
      "Vercel deployment for the static layer and the routes needed",
    ],
  },

  rekap: {
    tagline: "AI agent for sales teams · POC in framing",
    context:
      "AI agent that generates concise client briefs before sales visits. Cuts prep time by several minutes per visit.",
    status: "In development",
    challenges: [
      "Preparing a sales visit means aggregating scattered information",
      "Sales reps don't have time to dig through several tools before each meeting",
      "Summarize without losing important signals (history, points of attention)",
    ],
    solutions: [
      "AI agent orchestrating collection and synthesis into a single brief",
      "Short format, ready to read in 30 seconds before the visit",
      "Integration designed to fit into the teams' existing workflow",
    ],
  },

  relancia: {
    tagline: "Invoice follow-up agent · Prototype tested on a first case",
    context:
      "AI agent that automates chasing unpaid invoices for SMBs. Customizable tone, follow-up tracking.",
    status: "In development",
    challenges: [
      "Chasing unpaid invoices is time-consuming and often postponed",
      "The tone must adapt to the client profile and the age of the invoice",
      "Keep a clear record of follow-ups sent and replies received",
    ],
    solutions: [
      "AI agent that drafts the follow-up with a configurable tone",
      "Tracking of follow-ups sent and their status",
      "Designed for SMBs without a dedicated collections team",
    ],
  },
};

export default sideProjectsEn;
