/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#323C6F",
        secondary: "#FF5D6D",
      },
    },
    screens: {
      xl: { max: "2500px" },

      lg: { max: "1500px" },

      md: { max: "1000px" },

      sm: { max: "500px" },
    },
  },
  plugins: [],
};
