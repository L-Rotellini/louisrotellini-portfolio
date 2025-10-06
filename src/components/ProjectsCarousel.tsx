// src/components/ProjectSection.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "@/data/projects";

const PER_PAGE = 3;
const AUTOPLAY_MS = 7000;

export default function ProjectSection() {
  const totalPages = useMemo(() => Math.ceil(projects.length / PER_PAGE), []);
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);

  // Hauteur verrouillée (max de ce qui a été vu)
  const [containerHeight, setContainerHeight] = useState<number | undefined>(undefined);
  const pageRef = useRef<HTMLDivElement | null>(null);

  // autoplay (pas d'animations carte par carte)
  const timerRef = useRef<number | null>(null);
  const pausedRef = useRef(false);

  const goTo = (next: number, direction: 1 | -1) => {
    setDir(direction);
    setPage((next + totalPages) % totalPages);
  };

  useEffect(() => {
    const start = () => {
      stop();
      timerRef.current = window.setInterval(() => {
        if (!pausedRef.current) goTo(page + 1, 1);
      }, AUTOPLAY_MS);
    };
    const stop = () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
    start();
    return stop;
  }, [page, totalPages]);

  // Mesure la hauteur de la page courante et garde la valeur max
  useEffect(() => {
    const measure = () => {
      if (!pageRef.current) return;
      const h = pageRef.current.offsetHeight;
      setContainerHeight((prev) => (prev ? Math.max(prev, h) : h));
    };
    measure();
    // re-mesure si fenêtre resize
    const onR = () => measure();
    window.addEventListener("resize", onR);
    return () => window.removeEventListener("resize", onR);
  }, [page]);

  // Données visibles
  const startIndex = page * PER_PAGE;
  const visible = projects.slice(startIndex, startIndex + PER_PAGE);

  // Drag (grab & slide)
  const startX = useRef<number | null>(null);
  const onDown = (e: React.PointerEvent) => (startX.current = e.clientX);
  const onUp = (e: React.PointerEvent) => {
    if (startX.current == null) return;
    const delta = e.clientX - startX.current;
    const TH = 80;
    if (delta < -TH) goTo(page + 1, 1);
    else if (delta > TH) goTo(page - 1, -1);
    startX.current = null;
  };

  return (
    <section
      id="projets"
      className="space-y-8 overflow-hidden"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <h2>Projets</h2>

      {/* Conteneur à hauteur fixe + curseur grab */}
      <div
        className="relative select-none cursor-grab active:cursor-grabbing touch-pan-y"
        onPointerDown={onDown}
        onPointerUp={onUp}
        style={{ height: containerHeight }} // ⚑ bloque la hauteur après mesure
      >
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={page}
            custom={dir}
            initial={(d: 1 | -1) => ({ opacity: 0, x: 40 * d })}
            animate={{ opacity: 1, x: 0 }}
            exit={(d: 1 | -1) => ({ opacity: 0, x: -40 * d })}
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            className="divide-y divide-[--surface-border]"
            ref={pageRef}
          >
            {visible.map((p, idx) => (
              <article key={p.brand + idx}>
                <div className="py-10 md:py-14">
                  <div className="flex items-baseline justify-between gap-6">
                    <h3 className="text-3xl md:text-[2.75rem] font-bold tracking-tight">
                      {p.brand}
                    </h3>
                    {p.period && (
                      <span className="text-sm text-[--muted] shrink-0">{p.period}</span>
                    )}
                  </div>

                  <div className="mt-2 text-sm uppercase tracking-wide text-[--muted]">
                    {p.role}
                  </div>

                  <ul className="mt-4 space-y-1 max-w-prose">
                    {p.details.map((d, i) => (
                      <li key={i} className="text-[15px]">
                        {d}
                      </li>
                    ))}
                  </ul>

                  {(p.stack?.length || p.link) && (
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      {p.stack?.map((t) => (
                        <span
                          key={t}
                          className="text-xs rounded-full border border-[--surface-border] px-2 py-1"
                        >
                          {t}
                        </span>
                      ))}
                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm underline ml-1"
                        >
                          Voir
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots : actif = noir (light) / blanc (dark) */}
      <div className="flex justify-center gap-2 pt-3">
        {Array.from({ length: totalPages }).map((_, i) => {
          const isActive = i === page;
          return (
            <button
              key={i}
              aria-label={`Page ${i + 1}`}
              onClick={() => goTo(i, i > page ? 1 : -1)}
              aria-current={isActive ? "page" : undefined}
              className="h-2.5 w-2.5 rounded-full appearance-none border transition-colors duration-200"
              style={{
                backgroundColor: isActive ? "var(--foreground)" : "transparent",
                borderColor: isActive ? "var(--foreground)" : "var(--surface-border)",
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
