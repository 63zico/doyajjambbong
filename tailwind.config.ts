import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        soy: "#1c1816",
        cream: "#fff4df",
        bone: "#fffaf0",
        chili: "#c5161d",
        flame: "#f24b2e",
        brass: "#d7a13d"
      },
      boxShadow: {
        glow: "0 20px 60px rgba(197, 22, 29, 0.24)"
      }
    }
  },
  plugins: []
};

export default config;
