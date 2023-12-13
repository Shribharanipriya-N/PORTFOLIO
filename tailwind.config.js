/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        geologica: ["Geologica", "sans-serif"],
        gruppo: ["Gruppo", "sans-serif"],
      },
    },
  },
  plugins: [],
}