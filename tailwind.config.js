/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#006BA6',
        secondary: '#0496FF',
        accent: '#FFBC42',
        cta: '#D81159',
        highlight: '#005580',
        background: '#E6F3FB',
        'ink': '#06283D',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}