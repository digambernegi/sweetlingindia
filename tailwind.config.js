/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FFFEF9",
          100: "#FDFBF7",
          200: "#F9F5ED",
          300: "#F3EBD8",
          400: "#E8D9BB",
          500: "#D4C19C",
        },
        forest: {
          400: "#2D5A3D",
          500: "#1E3F2A",
          600: "#152B1C",
          700: "#0D1B11",
        },
        choco: {
          50: "#F7F2ED",
          100: "#E8D5C4",
          200: "#C9A87E",
          300: "#A87B4F",
          400: "#7A5230",
          500: "#5C3D1E",
          600: "#4A3018",
          700: "#3A2513",
          800: "#2A1A0D",
          900: "#1A1008",
        },
        crimson: {
          50: "#FFF0F0",
          100: "#FFD6D6",
          200: "#FFA3A3",
          300: "#FF5555",
          400: "#CC0000",
          500: "#990000",
          600: "#800000",
          700: "#660000",
          800: "#4D0000",
          900: "#330000",
        },
        amber: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#F2C94C",
          400: "#F59E0B",
          500: "#D97706",
          600: "#B45309",
        },
        success: {
          50: "#F0FDF4",
          500: "#22C55E",
          700: "#15803D",
        },
        warning: {
          50: "#FFFBEB",
          500: "#F59E0B",
          700: "#B45309",
        },
        error: {
          50: "#FFF0F0",
          500: "#EF4444",
          700: "#B91C1C",
        },
        neutral: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      fontFamily: {
        display: ['"Cookie"', "Georgia", "serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
        accent: ['"Dancing Script"', "cursive"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        card: "0 4px 18px rgba(58,37,19,0.04)",
        "card-hover": "0 3px 6px rgba(58,37,19,0.08)",
        crimson: "0 3px 6px rgba(153,0,0,0.35)",
        amber: "0 4px 20px rgba(242,201,76,0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-right": {
          "0%": { opacity: "0", transform: "translateX(-32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-left": {
          "0%": { opacity: "0", transform: "translateX(32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.95)", opacity: "0.7" },
          "70%": { transform: "scale(1.3)", opacity: "0" },
          "100%": { transform: "scale(1.3)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "fade-in": "fade-in 0.5s ease-out both",
        "scale-in": "scale-in 0.5s ease-out both",
        "slide-right": "slide-right 0.6s ease-out both",
        "slide-left": "slide-left 0.6s ease-out both",
        marquee: "marquee 24s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "pulse-ring": "pulse-ring 2s ease-out infinite",
      },
    },
  },
  plugins: [],
};
