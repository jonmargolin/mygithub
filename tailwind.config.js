/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src'],
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primmerGreen:"#F5F8FA"
      }
    },
  },
  plugins: [],
}

