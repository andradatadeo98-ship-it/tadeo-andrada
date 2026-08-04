import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F7F4EE",
        ink: "#2F2A25",
        line: "#D9D2C8",
        muted: "#8E8478",
      },
      fontFamily: {
        sans: ["var(--font-body)", "sans-serif"],
      },
      transitionTimingFunction: {
        reveal: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      spacing: {
        18: "4.5rem",
        24: "6rem",
      },
    },
  },
  plugins: [],
};

export default config;
