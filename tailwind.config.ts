import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#05070C",
        surface: "#0B0E14",
        "surface-2": "#111623",
        neon: {
          amber: "#C9A45C",
          cyan: "#5CD6C0",
          violet: "#8B7CF6",
        },
        glass: "rgba(255,255,255,0.06)",
        "glass-border": "rgba(255,255,255,0.12)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 20% 20%, rgba(139,124,246,0.15), transparent 40%), radial-gradient(circle at 80% 0%, rgba(92,214,192,0.12), transparent 40%), radial-gradient(circle at 50% 100%, rgba(201,164,92,0.10), transparent 45%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.45)",
        "glow-amber": "0 0 40px rgba(201,164,92,0.25)",
        "glow-cyan": "0 0 40px rgba(92,214,192,0.2)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 22s linear infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
