"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { RUN_GATE_EVENT } from "@/lib/site";
import { GATE_MAX, INPUT_MAX, type GateResult } from "@/lib/gate";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";

type PanelState =
  | { kind: "empty" }
  | { kind: "loading" }
  | { kind: "limit" }
  | { kind: "throttled" }
  | { kind: "done"; result: GateResult };

export default function LiveGate({
  dict,
  locale,
}: {
  dict: Dictionary["live"];
  locale: Locale;
}) {
  const [input, setInput] = useState(dict.defaultInput);
  const [panel, setPanel] = useState<PanelState>({ kind: "empty" });
  const [disabled, setDisabled] = useState(false);
  const runs = useRef(0);
  const cooldown = useRef(false);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const runBtn = useRef<HTMLButtonElement | null>(null);

  const runGate = useCallback(async () => {
    const text = (inputRef.current?.value ?? "").trim();
    if (!text) {
      inputRef.current?.focus();
      return;
    }
    if (cooldown.current) return;
    if (runs.current >= GATE_MAX) {
      setPanel({ kind: "limit" });
      setDisabled(true);
      return;
    }
    runs.current++;
    cooldown.current = true;
    setDisabled(true);
    setPanel({ kind: "loading" });

    try {
      const res = await fetch("/api/gate", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ text: text.slice(0, INPUT_MAX), locale }),
      });
      if (res.status === 429) {
        setPanel({ kind: "throttled" });
      } else if (!res.ok) {
        throw new Error(String(res.status));
      } else {
        setPanel({ kind: "done", result: (await res.json()) as GateResult });
      }
    } catch {
      setPanel({ kind: "throttled" });
    } finally {
      cooldown.current = false;
      if (runs.current < GATE_MAX) setDisabled(false);
    }
  }, [locale]);

  /* Déclenchement depuis la palette ⌘K */
  useEffect(() => {
    const onRun = () => void runGate();
    document.addEventListener(RUN_GATE_EVENT, onRun);
    return () => document.removeEventListener(RUN_GATE_EVENT, onRun);
  }, [runGate]);

  /* Bouton magnétique */
  useEffect(() => {
    const el = runBtn.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px, ${
        (e.clientY - r.top - r.height / 2) * 0.28
      }px)`;
    };
    const leave = () => {
      el.style.transform = "";
    };
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);

  const pass = panel.kind === "done" && panel.result.verdict === "PASS";

  return (
    <section className="section" id="live" data-tag="section#live">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <div className="eyebrow" style={{ marginBottom: 14 }}>
              <span className="n">{dict.num}</span> / {dict.label}
            </div>
            <h2>{dict.title}</h2>
          </div>
          <p>{dict.intro}</p>
        </div>
        <div className="live reveal">
          <div className="live__controls">
            <div className="live__label" id="liveLabel">
              {dict.inputLabel}
            </div>
            <textarea
              id="liveInput"
              ref={inputRef}
              aria-labelledby="liveLabel"
              placeholder={dict.placeholder}
              value={input}
              maxLength={INPUT_MAX}
              onChange={(e) => setInput(e.target.value)}
            />
            <div className="live__examples">
              {dict.examples.map((ex) => (
                <button
                  key={ex.label}
                  className="ex"
                  onClick={() => {
                    setInput(ex.value);
                    inputRef.current?.focus();
                  }}
                >
                  {ex.label}
                </button>
              ))}
            </div>
            <button
              ref={runBtn}
              className="live__run magnetic"
              onClick={() => void runGate()}
              disabled={disabled}
            >
              {dict.run} <span className="mono">→</span>
            </button>
            <div className="live__note">{dict.note}</div>
          </div>
          <div className="live__panel" id="livePanel" aria-live="polite">
            {panel.kind === "empty" && <div className="live__empty">{dict.empty}</div>}
            {panel.kind === "loading" && (
              <div className="live__loading">
                <span className="spin"></span> {dict.loading}
              </div>
            )}
            {panel.kind === "limit" && <div className="live__empty">{dict.limitReached}</div>}
            {panel.kind === "throttled" && <div className="live__empty">{dict.throttled}</div>}
            {panel.kind === "done" && (
              <>
                <div className={`verdict ${pass ? "is-pass" : "is-fail"}`}>
                  <span className="verdict__b">{panel.result.verdict}</span>
                  <span className="verdict__s mono">
                    {dict.scoreWord} {panel.result.score}
                  </span>
                </div>
                <ul className="gaterules">
                  {panel.result.rules.map((r) => (
                    <li key={r.id} className={r.ok ? "ok" : "no"}>
                      <span className="gr__i">{r.ok ? "✓" : "✕"}</span>
                      <span className="gr__l">{dict.rules[r.id]}</span>
                      <span className={r.note ? "gr__n" : "gr__n mono"}>
                        {r.note || (r.ok ? dict.notePresent : dict.noteAbsent)}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="gate__rat">{pass ? dict.rationalePass : dict.rationaleFail}</p>
                <div className="gate__src mono">
                  {panel.result.source === "claude" ? dict.srcLive : dict.srcFallback}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
