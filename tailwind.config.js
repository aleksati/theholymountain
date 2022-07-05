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
        "size-header-big": ["3.75rem"], // text-6xl
        "size-header": ["2.25rem"], // text-4xl
        "size-title": ["1.875rem"], // text-3xl
        "size-regular": ["1.125rem"], //text-lg
        "size-small": ["0.75rem"], // text-xs
      }, // https://tailwindcss.com/docs/font-size
      backgroundColor: {
        "primary-light": "#fff",
        "secondary-light": "#F6F8FA",
        "ternary-light": "#e2e8f0", // ternary is used for buttons and card backgrounds. everything else than page backgriounds.
        "primary-dark": "#211F24", // #111827 - old one // Ny jævlig fin #211F24 fra snapshot.org
        "secondary-dark": "#0A192F", // #102c44c - old one
        "ternary-dark": "#2d3748", // ternary is used for buttons and card backgrounds. everything else than page backgriounds.
        "button-light": "#37BDF8",
        "button-dark": "#A258E9",
      },
      colors: {
        "primary-light": "#000", // for header and titles
        secondary: "#6b7280", // for text and small text
        "primary-dark": "#fff",
        // "secondary-dark": "#6b7280",
      },
      keyframes: {
        // for the tooltip to appear after a given duration
        tooltip_show: {
          "0%": { visibility: "hidden", opacity: "0" },
          "15%": { visibility: "hidden", opacity: "0" },
          "100%": { visibility: "visible", opacity: "100" },
        },
      },
      animation: {
        tooltip_show: "tooltip_show 6s ease forwards", // specify the duration here.
      },
    },
  },
  variants: {
    extend: {
      width: ["hover"],
      animation: ["group-hover"],
    },
  },
  plugins: [],
};
