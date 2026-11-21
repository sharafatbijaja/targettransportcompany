"use client";

import { useLayoutEffect, useRef } from "react";
import { useServerInsertedHTML } from "next/navigation";

const themeInitScript = `
  try {
    const savedTheme = localStorage.getItem("target-theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme =
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : systemPrefersDark
          ? "dark"
          : "light";
    document.documentElement.dataset.theme = theme;
  } catch {}
`;

export function ThemeInitScript() {
  const inserted = useRef(false);

  useServerInsertedHTML(() => {
    if (inserted.current) return null;
    inserted.current = true;
    return <script id="theme-init" dangerouslySetInnerHTML={{ __html: themeInitScript }} />;
  });

  useLayoutEffect(() => {
    try {
      const savedTheme = localStorage.getItem("target-theme");
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const theme =
        savedTheme === "light" || savedTheme === "dark"
          ? savedTheme
          : systemPrefersDark
            ? "dark"
            : "light";
      document.documentElement.dataset.theme = theme;
    } catch {}
  }, []);

  return null;
}
