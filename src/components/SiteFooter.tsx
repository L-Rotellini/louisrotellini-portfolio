"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useUi, ACCENTS } from "@/components/UiProvider";
import { localizedHref, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";

export default function SiteFooter({
  dict,
  locale,
}: {
  dict: Dictionary["footer"];
  locale: Locale;
}) {
  const { soundOn, toggleSound, accent, setAccent, blip } = useUi();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const accentLabels = [dict.accents.cobalt, dict.accents.orange, dict.accents.green, dict.accents.violet];

  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot__in">
          <span>
            {dict.rights} · <Link href={localizedHref(locale, "/mentions-legales")}>{dict.legal}</Link> ·{" "}
            {dict.madeFor}
          </span>
          <div className="foot__ctrls">
            <button
              className="soundbtn"
              aria-pressed={soundOn}
              onClick={() => {
                toggleSound();
                blip(660);
              }}
            >
              <span className="mono">♪</span> <span>{soundOn ? dict.soundOn : dict.soundOff}</span>
            </button>
            <div className="accents" role="group" aria-label={dict.accentAria}>
              {ACCENTS.map((hex, i) => (
                <button
                  key={hex}
                  className={mounted && accent === hex ? "is-on" : ""}
                  style={{ background: hex }}
                  aria-label={accentLabels[i]}
                  onClick={() => setAccent(hex)}
                ></button>
              ))}
            </div>
            <div className="seg" role="group" aria-label={dict.themeAria}>
              <button
                className={mounted && resolvedTheme === "light" ? "is-on" : ""}
                onClick={() => setTheme("light")}
              >
                {dict.themeLight}
              </button>
              <button
                className={mounted && resolvedTheme === "dark" ? "is-on" : ""}
                onClick={() => setTheme("dark")}
              >
                {dict.themeDark}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
