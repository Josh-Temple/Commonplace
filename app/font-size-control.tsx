"use client";

import { useEffect, useState } from "react";

type FontSize = "compact" | "standard" | "large";

const STORAGE_KEY = "lumen-font-size";
const OPTIONS: Array<{ value: FontSize; label: string; ariaLabel: string }> = [
  { value: "compact", label: "小", ariaLabel: "Use compact text size" },
  { value: "standard", label: "中", ariaLabel: "Use standard text size" },
  { value: "large", label: "大", ariaLabel: "Use large text size" },
];

function isFontSize(value: string | null): value is FontSize {
  return value === "compact" || value === "standard" || value === "large";
}

function applyFontSize(value: FontSize) {
  document.documentElement.dataset.fontSize = value;
}

export function FontSizeControl() {
  const [fontSize, setFontSize] = useState<FontSize>("compact");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const nextSize = isFontSize(stored) ? stored : "compact";
    applyFontSize(nextSize);
    setFontSize(nextSize);
  }, []);

  function updateFontSize(value: FontSize) {
    applyFontSize(value);
    window.localStorage.setItem(STORAGE_KEY, value);
    setFontSize(value);
  }

  return (
    <div className="font-size-control" aria-label="Font size setting">
      <span>文字</span>
      <div className="font-size-options" role="group" aria-label="Choose font size">
        {OPTIONS.map((option) => (
          <button
            key={option.value}
            type="button"
            aria-label={option.ariaLabel}
            aria-pressed={fontSize === option.value}
            onClick={() => updateFontSize(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
