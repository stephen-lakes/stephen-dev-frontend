/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // extend: {},
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        cursive: ['"Pacifico"', "cursive"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        "no-scrollbar::-webkit--scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      });
    },
    require("daisyui"),
  ],
};
