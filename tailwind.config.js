const { addDynamicIconSelectors } = require("@iconify/tailwind");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "linear-gradient(to right, rgba(240,240,240,0.8), rgba(255,255,255,0.8)),url(common-bg.svg)",
      },
      fontFamily: {
        hero: '"Poetsen One" ',
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};
