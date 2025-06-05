/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#46006e", // Tailwind's blue-500 
        secondary: "#019e98", // Tailwind's purple-500
        accent: "#fbbf24", // Tailwind's yellow-400
        neutral: "#374151", // Tailwind's gray-800
        "base-100": "#ffffff", // Tailwind's white
        info: "#3abff8", // Tailwind's cyan-400
        success: "#36d399", // Tailwind's green-400
        warning: "#fbbd23", // Tailwind's yellow-400
        error: "#f87272", // Tailwind's red-400
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
        mono: ["Menlo", "monospace"],
      },
      screens: {
        // Regular (min-width) breakpoints
        sm: "480px",      // small devices
        md: "768px",      // tablets
        lg: "1024px",     // laptops
        xl: "1280px",     // desktops
        "2xl": "1536px",  // large screens

        // Custom max-* breakpoints
        "max-sm": { max: "479px" },
        "max-md": { max: "767px" },
        "max-lg": { max: "1023px" },
        "max-xl": { max: "1279px" },
        "max-2xl": { max: "1535px" },
      },
    },
  },
  plugins: [],

  
});