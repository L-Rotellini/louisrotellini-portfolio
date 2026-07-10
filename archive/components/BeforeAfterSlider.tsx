"use client";

import { useState } from "react";
import Image from "next/image";

type BeforeAfterSliderProps = {
  before: string;
  after: string;
  alt?: string;
};

export default function BeforeAfterSlider({
  before,
  after,
  alt,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);

  return (
    <div className="rounded-[12px] overflow-hidden bg-[--paper] border border-[--rule]">
      <div className="flex items-center gap-2 px-4 h-[38px] bg-[--paper-2] border-b border-[--rule]">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[--rule-strong]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[--rule-strong]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[--rule-strong]" />
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-[--paper] border border-[--rule] rounded-md px-3 py-1 text-[11px] font-mono text-[--muted] max-w-md mx-auto" />
        </div>
      </div>

      <div className="relative aspect-video cursor-ew-resize select-none bg-[--paper]">
        <Image
          src={after}
          alt={`${alt ?? ""} après`}
          fill
          className="object-cover object-top"
          sizes="(min-width: 1024px) 900px, 100vw"
        />

        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={before}
            alt={`${alt ?? ""} avant`}
            fill
            className="object-cover object-top"
            sizes="(min-width: 1024px) 900px, 100vw"
          />
        </div>

        <div
          className="absolute top-0 bottom-0 w-px bg-[--paper] shadow-[0_0_0_1px_var(--rule-strong)]"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-[--paper] border border-[--rule-strong] rounded-full shadow-lg flex items-center justify-center">
            <svg
              className="w-4 h-4 text-[--ink]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              />
            </svg>
          </div>
        </div>

        <span className="absolute top-3 left-3 font-mono text-[10.5px] uppercase tracking-[0.12em] bg-[--ink]/85 text-[--paper] px-2.5 py-1 rounded-full">
          Avant
        </span>
        <span className="absolute top-3 right-3 font-mono text-[10.5px] uppercase tracking-[0.12em] bg-[--ink]/85 text-[--paper] px-2.5 py-1 rounded-full">
          Après
        </span>

        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
          aria-label="Comparer avant/après"
        />
      </div>
    </div>
  );
}
