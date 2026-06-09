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
        paper: {
          50: "#FAF9F6",
          100: "#F5F2EB",
          200: "#E6DFD3",
          300: "#D4CBB8",
          400: "#BEB39B",
          500: "#A4977B",
          600: "#86795F",
          700: "#6B604A",
          800: "#504737",
          900: "#362F25",
          950: "#1C1813",
        },
        ink: {
          DEFAULT: "#0B0B0B",
          warm: "#181614",
          muted: "#4A453F",
          faint: "#968F85",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#EAD598",
          pale: "#F3E5AB",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-raleway)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
