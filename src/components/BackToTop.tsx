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
      className="fixed bottom-20 right-6 z-[60] rounded-full border border-[--surface-border] bg-[--background]/80 backdrop-blur px-3 py-2 text-sm shadow-sm hover:bg-[--foreground]/5 transition-colors cursor-pointer hover-invert"
      aria-label="Revenir en haut"
      title="Revenir en haut"
    >
      ↑ Haut
    </button>
  );
}
