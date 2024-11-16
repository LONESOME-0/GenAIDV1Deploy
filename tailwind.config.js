/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { sans: ['Noto Sans Thai', ...defaultTheme.fontFamily.sans], 

      },
      colors: {
        'ga-primary': '#00A4B6',
        'ga-secondary': '#FE6B57',
        'ga-bg': '#F6F6F6',
      },
    },
  },
  plugins: [],
}

