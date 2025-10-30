/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "Inter",
          "Poppins",
          "system-ui",
          "sans-serif",
        ],
        heading: [
          "var(--font-poppins)",
          "Poppins",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        "atlas-night": "#05060F",
        "atlas-blue": "#1E65FF",
        "atlas-gold": "#F6C344",
        "atlas-slate": "#12172A",
        "atlas-slate-light": "#1B243F",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.25)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
