/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        uniform: "0 0 15px 1px",
      },
      colors: {
        customColor: "#845EC2",
        darkColor: "#191825",
        textColor: "#FAF3F0",
        htmlColor: "#DD4B25",
        cssColor: "#254BDD",
        tailwindColor: "#49ABB6",
        jsColor: "#F7E025",
        reactColor: "#1675e0",
        reduxColor: "#7248B6",
        achieveColor: "#845eb24d",
        contactCard: "#070707e6",
        svgColor: "#c8c8c81a",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
