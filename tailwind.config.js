/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#3B28CC",
        secondaryBlue: "#6656E1",
        primaryGrey: "#8E8E8E",
        primaryGreen: "#28CC42",
        primaryRed: "#CC2828",
      },
      backgroundImage:{
        "card-pattern": "url('/src/assets/cardBackground.svg')",
      }
    },
  },
  plugins: [],
};
