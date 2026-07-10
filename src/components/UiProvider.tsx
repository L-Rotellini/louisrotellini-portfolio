"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

export const ACCENTS = ["#1E48E6", "#E5602B", "#1F9D57", "#6D4AE0"] as const;
const DEFAULT_ACCENT = ACCENTS[0];

type UiContextValue = {
  accent: string;
  setAccent: (hex: string) => void;
  soundOn: boolean;
  toggleSound: () => void;
  agentView: boolean;
  toggleAgentView: () => void;
  paletteOpen: boolean;
  setPaletteOpen: (open: boolean) => void;
  toast: (msg: string) => void;
  blip: (freq?: number) => void;
};

const UiContext = createContext<UiContextValue | null>(null);

export function useUi() {
  const ctx = useContext(UiContext);
  if (!ctx) throw new Error("useUi must be used within <UiProvider>");
  return ctx;
}

export default function UiProvider({ children }: { children: ReactNode }) {
  const [accent, setAccentState] = useState<string>(DEFAULT_ACCENT);
  const [soundOn, setSoundOn] = useState(false);
  const [agentView, setAgentView] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [toastOn, setToastOn] = useState(false);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const audioCtx = useRef<AudioContext | null>(null);
  const soundRef = useRef(false);

  /* ----- accent (persisté) ----- */
  const applyAccent = useCallback((hex: string) => {
    document.documentElement.style.setProperty("--accent", hex);
  }, []);
  const setAccent = useCallback(
    (hex: string) => {
      setAccentState(hex);
      applyAccent(hex);
      try {
        localStorage.setItem("accent", hex);
      } catch {}
    },
    [applyAccent],
  );
  useEffect(() => {
    try {
      const saved = localStorage.getItem("accent");
      if (saved && (ACCENTS as readonly string[]).includes(saved)) {
        setAccentState(saved);
        applyAccent(saved);
      }
    } catch {}
  }, [applyAccent]);

  /* ----- son (opt-in, persisté) ----- */
  const blip = useCallback((freq?: number) => {
    if (!soundRef.current) return;
    try {
      audioCtx.current =
        audioCtx.current ||
        new (window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const ctx = audioCtx.current;
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      const t = ctx.currentTime;
      o.type = "sine";
      o.frequency.value = freq || 520;
      g.gain.setValueAtTime(0.045, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.08);
      o.connect(g);
      g.connect(ctx.destination);
      o.start(t);
      o.stop(t + 0.09);
    } catch {}
  }, []);
  const toggleSound = useCallback(() => {
    setSoundOn((on) => {
      const next = !on;
      soundRef.current = next;
      try {
        localStorage.setItem("sound", next ? "1" : "0");
      } catch {}
      return next;
    });
  }, []);
  useEffect(() => {
    try {
      if (localStorage.getItem("sound") === "1") {
        soundRef.current = true;
        setSoundOn(true);
      }
    } catch {}
  }, []);
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest?.("button,a,.card,.crow,.fbtn,.ex,.pcmd")) blip(500);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [blip]);

  /* ----- vue agent ----- */
  const toggleAgentView = useCallback(() => {
    setAgentView((on) => {
      const next = !on;
      document.documentElement.setAttribute("data-view", next ? "machine" : "human");
      if (next) window.scrollTo({ top: 0, behavior: "smooth" });
      return next;
    });
  }, []);

  /* ----- toast ----- */
  const toast = useCallback((msg: string) => {
    setToastMsg(msg);
    setToastOn(true);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastOn(false), 1700);
  }, []);

  /* ----- reveal au scroll (observer global, markup identique au handoff) ----- */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    const scan = (root: ParentNode) =>
      root.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
    scan(document);
    const mo = new MutationObserver((muts) => {
      for (const m of muts) {
        m.addedNodes.forEach((n) => {
          if (n.nodeType !== 1) return;
          const el = n as Element;
          if (el.classList.contains("reveal") && !el.classList.contains("in")) io.observe(el);
          scan(el);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return (
    <UiContext.Provider
      value={{
        accent,
        setAccent,
        soundOn,
        toggleSound,
        agentView,
        toggleAgentView,
        paletteOpen,
        setPaletteOpen,
        toast,
        blip,
      }}
    >
      {children}
      <div className="toast mono" aria-live="polite" data-on={toastOn || undefined} style={toastOn ? { opacity: 1, transform: "translate(-50%,0)" } : undefined}>
        {toastMsg}
      </div>
    </UiContext.Provider>
  );
}
