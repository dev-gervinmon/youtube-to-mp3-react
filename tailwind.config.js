/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          nerkoOne: ['Nerko One', 'sans-serif'],
          bebasNeue: ['Bebas Neue', 'sans-serif']
        }
    },
  },
  plugins: [],
}