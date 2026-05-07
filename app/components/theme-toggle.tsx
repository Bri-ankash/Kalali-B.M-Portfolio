"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const current = theme === "system" ? resolvedTheme : theme;

  return (
    <button
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
      className="fixed top-6 right-6 z-50 w-10 h-10 rounded-full flex items-center justify-center border transition-all hover:scale-110"
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--card-border)",
        color: "var(--accent)",
        backdropFilter: "blur(8px)",
      }}
      aria-label="Toggle theme"
    >
      {current === "dark" ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
