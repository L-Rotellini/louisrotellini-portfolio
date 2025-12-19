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
    <div className="rounded-xl overflow-hidden border border-[--surface-border] bg-[#1a1a1a]">
      {/* Browser bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#2d2d2d] border-b border-[#3d3d3d]">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#27ca40]" />
        </div>

        <div className="flex-1 mx-4">
          <div className="bg-[#1e1e1e] rounded-md px-3 py-1 text-xs text-gray-500 max-w-md">
            {/* volontairement vide : style only */}
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="relative aspect-video cursor-ew-resize select-none">
        {/* After image (background) */}
        <Image
          src={after}
          alt={`${alt ?? ""} après`}
          fill
          className="object-cover object-top"
        />

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={before}
            alt={`${alt ?? ""} avant`}
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          {/* Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
            <svg
              className="w-5 h-5 text-gray-800"
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

        {/* Labels */}
        <span className="absolute top-4 left-4 text-xs font-medium bg-black/70 text-white px-3 py-1.5 rounded-full">
          Avant
        </span>
        <span className="absolute top-4 right-4 text-xs font-medium bg-black/70 text-white px-3 py-1.5 rounded-full">
          Après
        </span>

        {/* Invisible slider input */}
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
        />
      </div>
    </div>
  );
}
