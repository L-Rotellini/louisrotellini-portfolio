"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import projects from "@/data/projects";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PER_PAGE = 3;
const AUTOPLAY_MS = 7000;

// ✅ Variants qui utilisent `custom` (dir: 1 | -1)
const slideVariants: Variants = {
  enter: (d: 1 | -1) => ({ opacity: 0, x: 40 * d }),
  center: { opacity: 1, x: 0 },
  exit: (d: 1 | -1) => ({ opacity: 0, x: -40 * d }),
};

export default function ProjectSection() {
  const prefersReducedMotion = useReducedMotion();

  const totalPages = useMemo(() => Math.ceil(projects.length / PER_PAGE), [projects.length]);
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);

  const [containerHeight, setContainerHeight] = useState<number | undefined>(undefined);
  const pageRef = useRef<HTMLDivElement | null>(null);

  const timerRef = useRef<number | null>(null);
  const pausedRef = useRef(false);

  const goTo = (next: number, direction: 1 | -1) => {
    setDir(direction);
    setPage((next + totalPages) % totalPages);
  };

  useEffect(() => {
    if (prefersReducedMotion) return;
    const stop = () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
    const start = () => {
      stop();
      timerRef.current = window.setInterval(() => {
        if (!pausedRef.current) goTo(page + 1, 1);
      }, AUTOPLAY_MS);
    };

    const onVisibility = () => (pausedRef.current = document.hidden);
    const onBlur = () => (pausedRef.current = true);
    const onFocus = () => (pausedRef.current = false);

    start();
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("blur", onBlur);
    window.addEventListener("focus", onFocus);

    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("focus", onFocus);
    };
  }, [page, totalPages, prefersReducedMotion]);

  useEffect(() => {
    const measure = () => {
      if (!pageRef.current) return;
      const h = pageRef.current.offsetHeight;
      setContainerHeight((prev) => (prev ? Math.max(prev, h) : h));
    };
    measure();
    const onR = () => measure();
    window.addEventListener("resize", onR);
    return () => window.removeEventListener("resize", onR);
  }, [page]);

  const startIndex = page * PER_PAGE;
  const visible = projects.slice(startIndex, startIndex + PER_PAGE);

  const startX = useRef<number | null>(null);
  const onDown = (e: React.PointerEvent) => {
    pausedRef.current = true;
    startX.current = e.clientX;
  };
  const onUp = (e: React.PointerEvent) => {
    if (startX.current == null) return;
    const delta = e.clientX - startX.current;
    const TH = 80;
    if (delta < -TH) goTo(page + 1, 1);
    else if (delta > TH) goTo(page - 1, -1);
    startX.current = null;
    pausedRef.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") { e.preventDefault(); goTo(page + 1, 1); }
    if (e.key === "ArrowLeft")  { e.preventDefault(); goTo(page - 1, -1); }
    if (e.key === "Home")       { e.preventDefault(); goTo(0, -1); }
    if (e.key === "End")        { e.preventDefault(); goTo(totalPages - 1, 1); }
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      pausedRef.current = !pausedRef.current;
    }
  };

  const srRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!srRef.current) return;
    srRef.current.textContent = `Page ${page + 1} sur ${totalPages}`;
  }, [page, totalPages]);

  return (
    <div
      className="space-y-8 overflow-hidden"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      aria-labelledby="projets-title"
    >
      <h2 id="projets-title">Projets</h2>
      <div ref={srRef} aria-live="polite" className="sr-only" />

      <div
        className="relative select-none cursor-grab active:cursor-grabbing touch-pan-y"
        onPointerDown={onDown}
        onPointerUp={onUp}
        onKeyDown={onKeyDown}
        tabIndex={0}
        aria-roledescription="carrousel"
        aria-label="Projets"
        aria-live="off"
        // style={{ minHeight: containerHeight }}
      >
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={page}
            custom={dir}
            variants={slideVariants}                              
            initial={prefersReducedMotion ? false : "enter"}        
            animate={prefersReducedMotion ? { opacity: 1, x: 0 } : "center"}  
            exit={prefersReducedMotion ? undefined : "exit"}         
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            className="divide-y divide-[--surface-border]"
            ref={pageRef}
            id="carousel-viewport"
            aria-atomic="false"
            aria-live="off"
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

                  <ul className="mt-4 space-y-1 max-w-prose" role="list">
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
                          className="text-sm underline ml-1 hover-invert rounded px-1"
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
      <div className="flex justify-center gap-3 pt-4" role="tablist" aria-label="Pagination des projets">
        {Array.from({ length: totalPages }).map((_, i) => {
          const isActive = i === page;
          return (
            <motion.button
              key={i}
              layout
              aria-label={`Page ${i + 1} sur ${totalPages}`}
              aria-current={isActive ? "page" : undefined}
              role="tab"
              aria-controls="carousel-viewport"
              onClick={() => goTo(i, i > page ? 1 : -1)}
              onFocus={() => (pausedRef.current = true)}
              onBlur={() => (pausedRef.current = false)}
              className={[
                "relative h-2.5 appearance-none rounded-full border border-[--surface-border]",
                "transition-colors duration-300 cursor-pointer",
                isActive
                  ? "bg-[--foreground] border-[--foreground] w-8"
                  : "bg-transparent hover:bg-[--foreground]/20 w-2.5",
              ].join(" ")}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
