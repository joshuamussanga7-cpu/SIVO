import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#080b14",
        panel: "#101522",
        cyan: "#65f2e2",
        violet: "#a78bfa",
      },
    },
  },
  plugins: [],
};

export default config;