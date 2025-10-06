// src/components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const logoSrc = currentTheme === "dark" ? "/logo-w.png" : "/logo-b.png";

  return (
    <header className="surface fixed top-0 left-0 w-full border-b border-[--surface-border] bg-[--background]/80 backdrop-blur-sm z-50">
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
          {/* Ancres */}
          <nav className="hidden sm:flex items-center gap-4 text-sm text-[--muted]">
            <Link href="/#offre"   scroll className="hover:underline">Offre</Link>
            <Link href="/#projets" scroll className="hover:underline">Projets</Link>
            <Link href="/#skills"  scroll className="hover:underline">Compétences</Link>
            <Link href="/#contact" scroll className="hover:underline">Contact</Link>
          </nav>

          {/* Toggle thème */}
          {mounted && (
            <button
              type="button"
              onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
              aria-label="Basculer le thème"
              className="p-2 rounded-md border border-[--surface-border] hover:bg-[--foreground]/5 transition-colors"
            >
              {currentTheme === "dark"
                ? <Sun  className="size-4 transition-transform duration-200" />
                : <Moon className="size-4 transition-transform duration-200" />}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
