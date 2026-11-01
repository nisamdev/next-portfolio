"use client";

export const useTheme = () => {
  const toggleTheme = () => {
    const root = document.documentElement;
    const current = root.getAttribute("data-theme");
    const isDark = current
      ? current === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    const next = isDark ? "light" : "dark";

    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be blocked; the theme still applies for this page view
    }
  };

  return { toggleTheme };
};
