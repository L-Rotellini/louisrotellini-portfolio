"use client";

import { useState } from "react";
import type { Product } from "@/data/products";
import type { Dictionary } from "@/i18n/dictionaries/fr";

export default function MachineSection({
  dict,
  products,
}: {
  dict: Dictionary["machine"];
  products: Product[];
}) {
  const [state, setState] = useState<"human" | "machine">("human");

  const count = (s: Product["status"]) => products.filter((p) => p.status === s).length;

  return (
    <section className="section" id="machine" data-tag="section#machine">
      <div className="wrap">
        <div className="mx">
          <div className="mx__lead reveal">
            <div className="eyebrow" style={{ marginBottom: 16 }}>
              <span className="n">{dict.num}</span> / {dict.label}
            </div>
            <h2>{dict.title}</h2>
            <p>{dict.intro}</p>
            <div className="mx__toggle" role="group" aria-label={dict.toggleAria}>
              <button className={state === "human" ? "is-on" : ""} onClick={() => setState("human")}>
                {dict.toggleHuman}
              </button>
              <button
                className={state === "machine" ? "is-on" : ""}
                onClick={() => setState("machine")}
              >
                {dict.toggleMachine}
              </button>
            </div>
          </div>
          <div
            className="mx__panel reveal"
            data-state={state}
            style={{ "--d": "80ms" } as React.CSSProperties}
          >
            <div className="mx__bar">
              <span className="d"></span>
              <span className="d"></span>
              <span className="d"></span> <span style={{ marginLeft: 6 }}>{dict.panelTitle}</span>
            </div>
            <div className="mx__body">
              <div className="mx__view mx__view--human">
                <div className="mxh__name">{dict.humanName}</div>
                <div className="mxh__role">{dict.humanRole}</div>
                <p className="mxh__bio">{dict.humanBio}</p>
                <div className="mxh__tags">
                  {dict.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mx__view mx__view--machine">
                <pre className="mxm">
                  <span className="c">{"// application/ld+json"}</span>
                  {"\n{\n  "}
                  <span className="k">&quot;@type&quot;</span>: <span className="s">&quot;Person&quot;</span>
                  {",\n  "}
                  <span className="k">&quot;name&quot;</span>: <span className="s">&quot;{dict.humanName}&quot;</span>
                  {",\n  "}
                  <span className="k">&quot;jobTitle&quot;</span>: <span className="s">&quot;{dict.humanRole}&quot;</span>
                  {",\n  "}
                  <span className="k">&quot;skills&quot;</span>: [<span className="s">&quot;Next.js&quot;</span>,{" "}
                  <span className="s">&quot;TypeScript&quot;</span>, <span className="s">&quot;LLM&quot;</span>,{" "}
                  <span className="s">&quot;RAG&quot;</span>]{",\n  "}
                  <span className="k">&quot;address&quot;</span>: <span className="s">&quot;Lille, FR&quot;</span>
                  {",\n  "}
                  <span className="k">&quot;products&quot;</span>: <span className="s">{products.length}</span>
                  {",\n  "}
                  <span className="k">&quot;shipped&quot;</span>: <span className="s">{count("shipped")}</span>,{" "}
                  <span className="k">&quot;prototype&quot;</span>: <span className="s">{count("prototype")}</span>,{" "}
                  <span className="k">&quot;{dict.jsonScopingKey}&quot;</span>:{" "}
                  <span className="s">{count("concept")}</span>
                  {"\n}"}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
