/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      brown: "#D87D4A",
      "light-brown": "#FBAF85",
      black: "#000000",
      white: "#FFFFFF",
      "light-grey": "#FAFAFA",
      grey: "#F1F1F1",
      "dark-grey": "#101010",
    },
  },
  plugins: [],
};
