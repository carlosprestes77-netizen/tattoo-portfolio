import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ink: {
          black: "#0B0B0B",
          dark: "#141414",
          charcoal: "#1C1C1E",
        },
        gold: {
          accent: "#D4AF37",
          muted: "#C5A880",
          light: "#EAD598",
        },
        blood: {
          accent: "#8B0000",
          bright: "#A30000",
          muted: "#5A0000",
        },
        text: {
          white: "#F5F5F7",
          muted: "#9E9E9E",
        }
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
