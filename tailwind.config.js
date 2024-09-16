/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#27272A",
        secondary: "#37623A",
      },
      screens: {
        sm: "500px",
        md: "760px",
        xs: "400px",
        lg: "1000px",
        xl: "1150px",
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
      },
      backgroundImage: {
        // banner: "url('/assets/banner.webp')",
      },
    },
  },
  plugins: [],
});
