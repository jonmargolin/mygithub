/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primmerGreen:"#F5F8FA"
      }
    },
  },
  plugins: [],
}

