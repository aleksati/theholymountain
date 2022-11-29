/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,jsx,tsx}",
    "./components/**/*.{html,js,jsx,tsx}",
    "./templates/**/*.{html,js,jsx,tsx}",
    "./hooks/**/*.{html,js,jsx,tsx}",
    "./layouts/**/*.{html,js,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      screens: {
        // sm: "100%",
        // md: "100%",
        // lg: "100%",
        // xl: "1280px",
        sm: "640px",
        md: "768px",
        lg: "1024px", // "100%",
        xl: "1280px",
      },
    },
    extend: {
      fontFamily: {
        source: ['"Jost"', "sans-serif"],
      },
      fontSize: {
        "size-header-big": ["3.75rem"], // text-6xl
        "size-header": ["2.25rem"], // text-4xl
        "size-title": ["1.875rem"], // text-3xl
        "size-regular": ["1.125rem"], //text-lg
        "size-small": ["1rem"], // text-xs
      }, // https://tailwindcss.com/docs/font-size
      backgroundColor: {
        "primary-light": "#fff",
        "secondary-light": "#F6F8FA",
        "ternary-light": "#e2e8f0", // ternary is used for buttons and card backgrounds. everything else than page backgriounds.
        "primary-dark": "#0F0F0F", //"#211F24", //"#292929", //"#030408" "#0F0F0F"
        "secondary-dark": "#0A192F", // #102c44c - old one
        "ternary-dark": "#2d3748", // ternary is used for buttons and card backgrounds. everything else than page backgriounds.
        "button-light": "#37BDF8",
        "button-dark": "#A258E9",
        "button-filter-light": "#ef4444", //"rgb(217, 56, 33)",
        "button-filter-dark": "rgb(50, 141, 120)",
      },
      colors: {
        // text colors
        "primary-light": "#000",
        "primary-dark": "#fff",
        secondary: "#8b949e", // for small/seondary text and active borders. old - #6b7280 "#8b949e"
        "secondary-skin-light": "#e0e0e0", // for inactive button borders and grid lines
        "secondary-skin-dark": "#2d2d2d",
      },
      keyframes: {
        // for the tooltip to appear after a given duration
        tooltip_show: {
          "0%": { visibility: "hidden", opacity: "0" },
          "15%": { visibility: "hidden", opacity: "0" },
          "50%": { visibility: "hidden", opacity: "0" },
          "100%": { visibility: "visible", opacity: "100" },
        },
      },
      animation: {
        tooltip_show: "tooltip_show .5s ease forwards", // specify the duration here.
      },
    },
  },
  variants: {
    extend: {
      width: ["hover"],
      animation: ["group-hover"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
