"use client";

import { useEffect, useState } from "react";

type FontSize = "compact" | "standard" | "large";

const STORAGE_KEY = "lumen-font-size";
const ORDER: FontSize[] = ["compact", "standard", "large"];
const LABELS: Record<FontSize, string> = {
  compact: "小さめ",
  standard: "標準",
  large: "大きめ",
};

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

  function cycleFontSize() {
    const nextSize = ORDER[(ORDER.indexOf(fontSize) + 1) % ORDER.length];
    applyFontSize(nextSize);
    window.localStorage.setItem(STORAGE_KEY, nextSize);
    setFontSize(nextSize);
  }

  return (
    <button
      type="button"
      className="font-size-control"
      aria-label={`文字サイズ: ${LABELS[fontSize]}。押すと変更します。`}
      title={`文字サイズ: ${LABELS[fontSize]}`}
      onClick={cycleFontSize}
    >
      Aa
    </button>
  );
}
