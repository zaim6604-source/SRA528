/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E0115F',
        secondary: '#FF5C8A',
        accent: '#FFD700',
        cta: '#7B2D8E',
        highlight: '#B8004F',
        background: '#FFF0F4',
        ink: '#2E0A1C',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};