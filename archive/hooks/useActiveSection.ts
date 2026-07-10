// src/hooks/useActiveSection.ts
"use client";

import { useEffect, useMemo, useState } from "react";

export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  // Mesure dynamique de la hauteur du header
  const rootMargin = useMemo(() => {
    if (typeof window === "undefined") return "-64px 0px -40% 0px";
    const header = document.querySelector<HTMLElement>("[data-header]");
    const h = header?.offsetHeight ?? 64; // 64px fallback (h-16)
    // On “occulte” le header : marge top négative = hauteur du header
    return `-${h}px 0px -40% 0px`;
  }, []);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Section la plus visible = active
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
        threshold: [0.2, 0.4, 0.6, 0.8], // plus robuste
        rootMargin,
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [ids, rootMargin]);

  return activeId;
}
