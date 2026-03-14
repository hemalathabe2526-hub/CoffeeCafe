import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      white: "#ffffff",
      transparent: "transparent",
      "coffee-brown": "#4B2E2B",
      "coffee-latte": "#F5E6D3",
      "coffee-roast": "#2A1B16",
      "coffee-caramel": "#C8A27C",
      "coffee-cream": "#FBF6EE",
      "coffee-sand": "#EDE1D5",
    },
    extend: {
      boxShadow: {
        soft: "0 14px 40px rgba(0, 0, 0, 0.16)",
        glow: "0 0 0 8px rgba(200, 162, 124, 0.18)",
      },
      borderRadius: {
        xl: "1.5rem",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        steam: {
          "0%": { transform: "translateY(0) scale(0.88)", opacity: "0.2" },
          "50%": { opacity: "0.8" },
          "100%": { transform: "translateY(-140%) scale(1.08)", opacity: "0" },
        },
      },
      animation: {
        steam: "steam 3.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
