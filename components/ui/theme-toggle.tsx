
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";

export default function ThemeToggle() {
  // 1. Retrieve theme information
  const { theme, setTheme } = useTheme();

  // 2. Prevent hydration mismatch
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 3. Display a placeholder before mounting
  if (!mounted) {
    return (
      <button
        aria-label="Loading theme selector"
        className="h-10 w-10 rounded-lg border border-border"
      />
    );
  }

  // 4. Determine the appropriate icon
  const Icon =
    theme === "light"
      ? Sun
      : theme === "dark"
        ? Moon
        : Monitor;

  // 5. Cycle through themes
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Current theme: ${theme}. Click to change theme`}
      title={`Current theme: ${theme}`}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-foreground transition-colors hover:bg-background"
    >
      <Icon size={19} />
    </button>
  );
}
