// Overlay EN des produits : uniquement les champs textuels localisés.
// La structure (stack, urls, status, images) vit dans products.ts.

import type { Product } from "@/data/products";

type ProductOverlay = Partial<
  Pick<
    Product,
    "name" | "domain" | "statusLabel" | "one" | "problem" | "approach" | "outcome" | "ops" | "kpi" | "focus" | "metric"
  > & { imageAlt: string }
>;

export const productsEn: Record<string, ProductOverlay> = {
  doctap: {
    domain: "Health · Docs",
    statusLabel: "Live in production",
    one: "Mobile PWA that turns photos of documents into clean, print-ready PDFs.",
    problem:
      "Digitize a document from a phone, without a native app or a heavy server, including sensitive documents (originally a home-care health context).",
    approach:
      "Two pipelines. Photos mode: 100% local, no data ever leaves the device. AI mode: only compressed images are sent for OCR; originals, crops and PDFs stay on the device, the server stores nothing.",
    outcome:
      "Designed and shipped to production solo. Privacy by design: deliberately refused a named patient vault to stay clear of French HDS health-data constraints.",
    ops:
      "Mandatory human check before any export or share. Configurable local retention (7 / 30 / 90 days), actually purged. Zero server-side storage (no database, no bucket), verified in the code.",
    kpi: "Measured PDF assembly: 3 to 20 ms for 1 to 12 pages, on-device · ~87 KB of shared JS.",
    metric: "In production · doctap.app",
    imageAlt: "DocTap: document capture and PDF assembly on mobile",
  },
  horizon: {
    domain: "Knowledge",
    statusLabel: "Working MVP",
    one: "Personal knowledge hub: multi-agent chat over a shared base of notes.",
    problem:
      "Query personal knowledge through specialized agents, without letting the model corrupt the base.",
    approach:
      "4 specialized agents, LLM routing on every message: a router classifies the query and assigns it to the right agent. RAG on pgvector (Voyage embeddings, cosine search), note scope bounded per agent.",
    outcome: "Reliability through architecture: the AI proposes, the human decides. Guaranteed at the code level.",
    ops:
      "API key strictly server-side, never exposed to the browser. Database access protected by Row Level Security (RLS); the browser client only uses the anonymous key. Zero automatic writes to the knowledge base: the AI can only propose, writes happen only after explicit human validation (guaranteed by design: the model's tools are unable to write).",
    kpi: "4 agents · LLM routing on every message · pgvector RAG 512d, HNSW index.",
    metric: "Working MVP",
    imageAlt: "Horizon: multi-agent chat over a knowledge base",
  },
  relancia: {
    domain: "SMB · Finance",
    statusLabel: "Prototype · online",
    one: "Invoice follow-up agent that writes reminders in the salesperson's own voice.",
    problem:
      "Chase an unpaid invoice without damaging the relationship: a generic reminder rings false.",
    approach:
      "Learns the tone from examples provided by the user, then generates in their voice. Subject and body fully editable before anything is sent.",
    outcome:
      "Prototype tested with a first real user (anonymized client). Mistral API (a European player), chosen to stay within a GDPR-friendly framework.",
    ops:
      "Zero automatic sending, no SMTP integration in the code: the app prepares a draft, the user reviews and sends it themselves from their webmail. Human-in-the-loop guaranteed.",
    kpi: "Zero automatic sending: no sending capability in the code.",
    metric: "Online · tested for real",
    imageAlt: "RelancIA: personalized invoice reminder editor",
  },
  scoring: {
    name: "Scoring engine",
    domain: "R&D",
    statusLabel: "Private project · R&D",
    one: "Reproducible scoring of items against defined evaluation rules.",
    problem:
      "An LLM hedges by default and avoids committing: hard to get a reliable, reproducible judgment out of it.",
    approach:
      "Hard, eliminatory rules imposed on the model as an evaluation grid, iterated until the ranking exactly matches the expected judgment.",
    outcome:
      "Reliability comes from the rules, not the model. My differentiator, applied. Deliberately built no-code.",
    metric: "Reliability through rules",
    imageAlt: "Scoring engine: item evaluation grid in Airtable",
  },
  rekap: {
    domain: "Pharma · Sales",
    statusLabel: "Product scoping",
    one: "Sales-visit preparation agent, in the pharmaceutical sector.",
    problem:
      "Before every visit, a sales rep spends twenty minutes gathering data scattered across a complex CRM.",
    approach:
      "Salesforce connection, generation of a PDF visit brief in under a minute. Currently at the spec + wireframe stage.",
    outcome:
      "End-to-end scoping: needs audit, business spec, business model, sequencing. Project carried by Antwork.",
    focus: "End-to-end scoping: needs audit · business spec · business model · sequencing.",
    metric: "Full scoping",
    imageAlt: "Rekap: sales visit brief generated as a PDF",
  },
};
