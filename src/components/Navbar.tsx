"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

const NAV_ITEMS = [
  { id: "projets", label: "Projets" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const activeId = useActiveSection(NAV_ITEMS.map((n) => n.id));

  return (
    <header
      data-header
      className="fixed top-0 left-0 w-full border-b border-[--rule] z-50 bg-[color-mix(in_oklab,var(--paper)_78%,transparent)]"
    >
      <div className="mx-auto max-w-[1080px] px-8 flex items-center justify-between h-[60px]">
        <Link
          href="/"
          scroll
          className="font-mono text-[13px] font-medium tracking-[-0.01em] text-[--ink]"
          aria-label="Louis Rotellini — accueil"
        >
          LR
        </Link>

        <div className="flex items-center gap-7">
          <nav className="hidden sm:flex items-center gap-7 font-mono text-[12px]">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <Link
                  key={item.id}
                  href={`/#${item.id}`}
                  scroll
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "relative inline-block py-[6px] transition-colors duration-200",
                    isActive
                      ? "text-[--ink]"
                      : "text-[--muted] hover:text-[--ink]",
                    "after:absolute after:left-0 after:-bottom-[2px] after:h-[1px] after:bg-[--ink]",
                    "after:w-0 hover:after:w-full after:transition-[width] after:duration-300",
                    isActive ? "after:w-full" : "",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {mounted && (
            <button
              type="button"
              onClick={() =>
                setTheme(currentTheme === "dark" ? "light" : "dark")
              }
              aria-label="Basculer le thème"
              className="w-8 h-8 rounded-full border border-[--rule-strong] inline-flex items-center justify-center text-[--ink] hover:bg-[--paper-2] transition-colors"
            >
              {currentTheme === "dark" ? (
                <Sun className="size-3.5" />
              ) : (
                <Moon className="size-3.5" />
              )}
            </button>
          )}
        </div>
      </div>

      <nav
        className="sm:hidden overflow-x-auto border-t border-[--rule]"
        aria-label="Navigation mobile"
      >
        <ul className="flex items-center gap-2 px-4 py-2 justify-center">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <Link
                  href={`/#${item.id}`}
                  scroll
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "whitespace-nowrap px-3 py-2 font-mono text-[12px]",
                    isActive
                      ? "text-[--ink]"
                      : "text-[--muted] hover:text-[--ink]",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
