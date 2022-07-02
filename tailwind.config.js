/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,jsx,tsx}",
    "./components/**/*.{html,js,jsx,tsx}",
    "./sections/**/*.{html,js,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      fontSize: {
        "size-header-big": ["6rem"], // text-8xl
        "size-header": ["3.75rem"], // text-6xl
        "size-title": ["2.25rem"], // text-4xl
        "size-regular": ["1.25rem"], //text-xl
        "size-small": ["0.875rem"], // text-sm
      }, // https://tailwindcss.com/docs/font-size
      backgroundColor: {
        "primary-light": "#fff",
        "secondary-light": "#F6F8FA",
        "ternary-light": "#e2e8f0", // ternary is used for buttons and card backgrounds. everything else than page backgriounds.
        "primary-dark": "#111827", // #0d2438 - old one
        "secondary-dark": "#0A192F", // #102c44c - old one
        "ternary-dark": "#2d3748", // ternary is used for buttons and card backgrounds. everything else than page backgriounds.
        "button-light": "#37BDF8",
        "button-dark": "#A258E9",
      },
      colors: {
        "primary-light": "#000", // for header and titles
        "secondary-light": "#2d3748", // for text and small text
        "primary-dark": "#fff",
        "secondary-dark": "#fff",
      },
    },
  },
  plugins: [],
};
