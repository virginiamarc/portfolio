/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#1A1A1D",
        lightText: "#A0A0A8",
        boxBg: "#F8F8F8",
        designColor: "#CC55FF",
        accentPink: "#FF4EC0",
        accentPurple: "#8A3FFC",
        brandWhite: "#FFFFFF",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1E1E20, -10px -10px 19px #2C2C30",
      },
    },
  },
  plugins: [],
}
