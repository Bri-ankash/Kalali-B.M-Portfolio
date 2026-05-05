"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const current = theme === "system" ? resolvedTheme : theme;

  return (
    <button
      onClick={() =>
        setTheme(current === "dark" ? "light" : "dark")
      }
      className="
        fixed top-6 right-6 z-50
        px-4 py-2 rounded-full
        bg-white/10 backdrop-blur
        border border-white/10
        text-sm
      "
    >
      {current === "dark" ? "Light" : "Dark"}
    </button>
  );
}
