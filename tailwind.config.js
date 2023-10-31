/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      sm: "967px",
      sm: "1440px",
    },
    extend: {
      colors: {
        lightGreen: "hsl(122, 39%, 49%)",
        darkGray: "hsl(0, 0%, 30%)",
        lightBlack: "hsl(0, 0%, 44%)",
        darkFooter: "	hsl(200, 19%, 18%)",
        lightBlue: "hsl(216, 33%, 97%)",
        lightGray:"hsl(0, 0%, 27%)",
      },
    },
  },
  plugins: [],
};

