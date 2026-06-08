"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-8 h-8" />; // placeholder to prevent layout shift
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-1.5 rounded-full border border-[var(--hairline)] bg-transparent hover:bg-[rgba(128,128,128,0.08)] transition-all duration-300 group"
      aria-label="Toggle Theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="w-4 h-4 text-[var(--ink-dim)] group-hover:text-[var(--ink)] transition-colors" />
      ) : (
        <Moon className="w-4 h-4 text-[var(--ink-dim)] group-hover:text-[var(--ink)] transition-colors" />
      )}
    </button>
  );
}
