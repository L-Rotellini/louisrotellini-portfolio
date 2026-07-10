"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 500);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-6 z-[60] rounded-full border border-[--rule-strong] bg-[--paper]/85 backdrop-blur px-3 py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[--ink] hover:bg-[--ink] hover:text-[--paper] hover:border-[--ink] transition-colors cursor-pointer"
      aria-label="Revenir en haut"
      title="Revenir en haut"
    >
      ↑ Haut
    </button>
  );
}
