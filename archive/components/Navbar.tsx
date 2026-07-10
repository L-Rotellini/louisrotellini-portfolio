"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";
import LanguageSwitcher from "./LanguageSwitcher";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";

type Props = {
  locale: Locale;
  dict: Dictionary["nav"];
  home: string;
};

export default function Navbar({ locale, dict, home }: Props) {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  const navItems = [
    { id: "projets", label: dict.projets },
    { id: "contact", label: dict.contact },
  ];
  const activeId = useActiveSection(navItems.map((n) => n.id));
  const anchor = (id: string) => `${home}#${id}`;

  return (
    <header
      data-header
      className="fixed top-0 left-0 w-full border-b border-[--rule] z-50 bg-[color-mix(in_oklab,var(--paper)_78%,transparent)]"
    >
      <div className="mx-auto max-w-[1080px] px-8 flex items-center justify-between h-[60px]">
        <Link
          href={home}
          scroll
          className="font-mono text-[13px] font-medium tracking-[-0.01em] text-[--ink]"
          aria-label={dict.homeAria}
        >
          LR
        </Link>

        <div className="flex items-center gap-7">
          <nav className="hidden sm:flex items-center gap-7 font-mono text-[12px]">
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <Link
                  key={item.id}
                  href={anchor(item.id)}
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

          <LanguageSwitcher
            locale={locale}
            label={dict.switchLabel}
            ariaLabel={dict.switchAria}
          />

          {mounted && (
            <button
              type="button"
              onClick={() =>
                setTheme(currentTheme === "dark" ? "light" : "dark")
              }
              aria-label={dict.themeToggle}
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
        aria-label={dict.mobileNav}
      >
        <ul className="flex items-center gap-2 px-4 py-2 justify-center">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <Link
                  href={anchor(item.id)}
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
