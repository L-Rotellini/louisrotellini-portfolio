"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useUi } from "@/components/UiProvider";
import { scrollToId } from "@/lib/scroll";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, RUN_GATE_EVENT } from "@/lib/site";
import { localizedHref, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";

type Command = { group: string; label: string; hint: string; act: () => void };

export default function CommandPalette({
  dict,
  copiedMsg,
  locale,
  home,
}: {
  dict: Dictionary["palette"];
  copiedMsg: string;
  locale: Locale;
  home: string;
}) {
  const { paletteOpen, setPaletteOpen, toggleAgentView, toast } = useUi();
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onHome = pathname === home || pathname === `${home}/`;

  const goto = useCallback(
    (id: string) => {
      if (onHome) {
        scrollToId(id);
      } else {
        router.push(`${home === "/" ? "/" : home}${id === "top" ? "" : `#${id}`}`);
      }
    },
    [onHome, router, home],
  );

  const copyEmail = useCallback(() => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(EMAIL)
        .then(() => toast(copiedMsg))
        .catch(() => toast(EMAIL));
    } else {
      toast(EMAIL);
    }
  }, [toast, copiedMsg]);

  const otherLocale: Locale = locale === "fr" ? "en" : "fr";

  const commands = useMemo<Command[]>(
    () => [
      { group: dict.groupGoto, label: dict.gotoTop, hint: "home", act: () => goto("top") },
      { group: dict.groupGoto, label: dict.gotoWork, hint: "01", act: () => goto("work") },
      { group: dict.groupGoto, label: dict.gotoLive, hint: "02", act: () => goto("live") },
      { group: dict.groupGoto, label: dict.gotoMachine, hint: "03", act: () => goto("machine") },
      { group: dict.groupGoto, label: dict.gotoApproach, hint: "04", act: () => goto("approach") },
      { group: dict.groupGoto, label: dict.gotoAbout, hint: "05", act: () => goto("about") },
      { group: dict.groupGoto, label: dict.gotoContact, hint: "06", act: () => goto("contact") },
      { group: dict.groupActions, label: dict.actAgent, hint: "◫", act: () => toggleAgentView() },
      {
        group: dict.groupActions,
        label: dict.actGate,
        hint: "▸",
        act: () => {
          goto("live");
          setTimeout(() => document.dispatchEvent(new CustomEvent(RUN_GATE_EVENT)), 500);
        },
      },
      { group: dict.groupActions, label: dict.actEmail, hint: "⧉", act: copyEmail },
      { group: dict.groupActions, label: dict.actGithub, hint: "↗", act: () => window.open(GITHUB_URL, "_blank") },
      { group: dict.groupActions, label: dict.actLinkedin, hint: "↗", act: () => window.open(LINKEDIN_URL, "_blank") },
      {
        group: dict.groupActions,
        label: dict.actLegal,
        hint: "→",
        act: () => router.push(localizedHref(locale, "/mentions-legales")),
      },
      {
        group: dict.groupActions,
        label: dict.actLang,
        hint: "⇄",
        act: () => router.push(localizedHref(otherLocale, "/") || "/"),
      },
    ],
    [dict, goto, copyEmail, toggleAgentView, router, locale, otherLocale],
  );

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return commands.filter((c) => c.label.toLowerCase().includes(q));
  }, [commands, query]);

  const close = useCallback(() => setPaletteOpen(false), [setPaletteOpen]);

  const run = useCallback(
    (i: number) => {
      const c = filtered[i];
      if (c) {
        close();
        c.act();
      }
    },
    [filtered, close],
  );

  /* ⌘K global + navigation clavier */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen(!paletteOpen);
        return;
      }
      if (!paletteOpen) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowDown") {
        e.preventDefault();
        setIndex((i) => (filtered.length ? (i + 1) % filtered.length : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setIndex((i) => (filtered.length ? (i - 1 + filtered.length) % filtered.length : 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        run(index);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [paletteOpen, filtered, index, run, close, setPaletteOpen]);

  useEffect(() => {
    if (paletteOpen) {
      setQuery("");
      setIndex(0);
      // focus après l'affichage
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [paletteOpen]);

  let lastGroup: string | null = null;

  return (
    <div className={`palette${paletteOpen ? " is-open" : ""}`} aria-hidden={!paletteOpen}>
      <div className="palette__bd" onClick={close}></div>
      <div className="palette__box" role="dialog" aria-label={dict.dialogAria}>
        <div className="palette__in">
          <span className="ic mono">⌕</span>
          <input
            ref={inputRef}
            type="text"
            placeholder={dict.placeholder}
            aria-label={dict.inputAria}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIndex(0);
            }}
          />
          <kbd>ESC</kbd>
        </div>
        <ul className="palette__list">
          {filtered.length === 0 && <li className="pcmd pcmd--empty mono">{dict.empty}</li>}
          {filtered.map((c, i) => {
            const showGroup = c.group !== lastGroup;
            lastGroup = c.group;
            return (
              <li key={`${c.group}-${c.label}`}>
                {showGroup && <div className="pgrp mono">{c.group}</div>}
                <div
                  className={`pcmd${i === index ? " is-sel" : ""}`}
                  onMouseEnter={() => setIndex(i)}
                  onClick={() => run(i)}
                >
                  <span>{c.label}</span>
                  <span className="pcmd__hint mono">{c.hint}</span>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="palette__foot mono">
          <span>
            <kbd>↑</kbd>
            <kbd>↓</kbd> {dict.footNav}
          </span>
          <span>
            <kbd>↵</kbd> {dict.footOpen}
          </span>
          <span>
            <kbd>esc</kbd> {dict.footClose}
          </span>
        </div>
      </div>
    </div>
  );
}
