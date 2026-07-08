/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9C27B0',
        secondary: '#CE93D8',
        accent: '#FF4081',
        cta: '#FFD740',
        highlight: '#7B1FA2',
        background: '#F8EEFF',
        ink: '#2A1033',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}