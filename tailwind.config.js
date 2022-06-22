/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      xsm: "1px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1600px",
      xxxl: "1920px",
    },

    extend: {
      backgroundImage: {
        "hero-pattern": 'url("src/assets/patternpad (5).svg")',
        "hero-pattern-dark": 'url("src/assets/patternpad (7).svg")',

      },
    },
  },
  plugins: [],
};
