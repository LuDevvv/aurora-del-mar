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
        // Primary palette - Aurora Blue
        primary: {
          50: "#E6F2FF",
          100: "#CCE5FF",
          200: "#99CCFF",
          300: "#66B2FF",
          400: "#3399FF",
          500: "#2D8BCB", // Main primary
          600: "#183C7C", // Darker primary
          700: "#122E5E",
          800: "#0C1F3F",
          900: "#060F1F",
          DEFAULT: "#2D8BCB",
          light: "#409EAB",
          dark: "#183C7C",
        },
        // Secondary palette - Aqua
        secondary: {
          50: "#E6FBFF",
          100: "#CCF7FF",
          200: "#99EFFF",
          300: "#66E7FF",
          400: "#33DFFF",
          500: "#01D1FC", // Main secondary
          600: "#00A8CC",
          700: "#007D99",
          800: "#005366",
          900: "#002A33",
          DEFAULT: "#01D1FC",
          light: "#33DFFF",
          dark: "#00A8CC",
        },
        // Accent palette - Teal
        accent: {
          50: "#E6F7F9",
          100: "#CCEEF3",
          200: "#99DDE7",
          300: "#66CCDB",
          400: "#33BBCF",
          500: "#409EAB", // Main accent
          600: "#337E89",
          700: "#265F67",
          800: "#1A3F44",
          900: "#0D2022",
          DEFAULT: "#409EAB",
          light: "#66CCDB",
          dark: "#337E89",
        },
        // Neutral grays
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-jost)", "Georgia", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #2D8BCB 0%, #183C7C 100%)",
        "gradient-secondary":
          "linear-gradient(135deg, #01D1FC 0%, #409EAB 100%)",
        "gradient-aurora":
          "linear-gradient(135deg, #183C7C 0%, #2D8BCB 40%, #409EAB 70%, #01D1FC 100%)",
      },
      boxShadow: {
        "primary-sm": "0 2px 4px rgba(24, 60, 124, 0.1)",
        "primary-md": "0 4px 6px rgba(24, 60, 124, 0.15)",
        "primary-lg": "0 10px 20px rgba(24, 60, 124, 0.2)",
        "secondary-sm": "0 2px 4px rgba(1, 209, 252, 0.1)",
        "secondary-md": "0 4px 6px rgba(1, 209, 252, 0.15)",
        "secondary-lg": "0 10px 20px rgba(1, 209, 252, 0.2)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-in": "slideIn 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
