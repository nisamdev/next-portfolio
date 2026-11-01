"use client";

import { useTheme } from "../lib/theme";

export const ThemeToggle = () => {
  const { toggleTheme } = useTheme();

  return (
    <button
      className="tbtn"
      type="button"
      aria-label="Toggle light and dark theme"
      onClick={toggleTheme}
    >
      light / dark
    </button>
  );
};
