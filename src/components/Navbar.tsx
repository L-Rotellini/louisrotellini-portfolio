"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

const NAV_ITEMS = [
  { id: "projets", label: "Projets" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const logoSrc = currentTheme === "dark" ? "/logo-w.png" : "/logo-b.png";
  const activeId = useActiveSection(NAV_ITEMS.map((n) => n.id));

  return (
    <header
      data-header
      className="fixed top-0 left-0 w-full border-b border-[--surface-border] z-50"
    >
      {/* === HEADER ROW === */}
      <div className="mx-auto max-w-5xl px-4 md:px-6 flex items-center justify-between h-16">
        <Link href="/" scroll className="flex items-center gap-2">
          {mounted && (
            <Image
              key={logoSrc}
              src={logoSrc}
              alt="Louis Rotellini"
              width={36}
              height={36}
              priority
              className="transition-opacity duration-300"
            />
          )}
        </Link>

        <div className="flex items-center gap-4">
          {/* Navigation principale (desktop) */}
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <Link
                  key={item.id}
                  href={`/#${item.id}`}
                  scroll
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "relative inline-block py-2 transition-colors duration-200",
                    isActive
                      ? "text-[--foreground]"
                      : "text-[--muted] hover:text-[--foreground]",
                    "after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:bg-[--link-underline]",
                    "after:w-0 hover:after:w-full after:transition-[width] after:duration-300",
                    isActive ? "after:w-full" : "",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Toggle thème */}
          {mounted && (
            <button
              type="button"
              onClick={() =>
                setTheme(currentTheme === "dark" ? "light" : "dark")
              }
              aria-label="Basculer le thème"
              className="p-2 rounded-md border border-[--surface-border] hover:bg-[--foreground]/5 transition-colors"
            >
              {currentTheme === "dark" ? (
                <Sun className="size-4 transition-transform duration-200" />
              ) : (
                <Moon className="size-4 transition-transform duration-200" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* === NAV MOBILE === */}
      <nav
        className="sm:hidden -mx-2 overflow-x-auto border-t border-[--surface-border] bg-[--background]/95"
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
                    "whitespace-nowrap px-3 py-2 text-sm",
                    isActive
                      ? "border-[--foreground] text-[--foreground]"
                      : "border-[--surface-border] text-[--muted] hover:text-[--foreground]",
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
