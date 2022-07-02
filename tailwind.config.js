/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,jsx,tsx}",
    "./components/**/*.{html,js,jsx,tsx}",
    "./sections/**/*.{html,js,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "primary-light": "#fff",
        "secondary-light": "#f7fafc",
        "ternary-light": "#e2e8f0",
        "primary-dark": "#0d2438",
        "secondary-dark": "#102c44c", // #2d3748 - really nice for card backgrounds
        "ternary-dark": "#1e3951",
      },
      colors: {
        "primary-light": "#2d3748",
        "secondary-light": "#2d3748",
        "primary-dark": "#cbd5e0",
        "secondary-dark": "#cbd5e0",
      },
    },
  },
  plugins: [],
};
