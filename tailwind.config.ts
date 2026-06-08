import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        ink: "var(--ink)",
        "ink-dim": "var(--ink-dim)",
        "ink-faint": "var(--ink-faint)",
        "ink-fainter": "var(--ink-fainter)",
        backend: "var(--backend)",
        hardware: "var(--hardware)",
        research: "var(--research)",
        project: "var(--project)",
      },
      fontFamily: {
        fraunces: ["var(--font-fraunces)", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
        body: ["var(--font-bricolage)", "sans-serif"],
      },
      animation: {
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "pulse-brand": "pulse-brand 2.5s ease-in-out infinite",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { transform: "scale(0.8)", opacity: "0.6" },
          "50%": { transform: "scale(2)", opacity: "0" },
        },
        "pulse-brand": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.2)", opacity: "0.6" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
