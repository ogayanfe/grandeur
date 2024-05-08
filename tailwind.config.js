const { addDynamicIconSelectors } = require("@iconify/tailwind");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: 'url("/hero.jpg")',
      },
      fontFamily: {
        hero: '"Poetsen One" ',
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};
