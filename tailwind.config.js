/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C2185B',
        secondary: '#E91E8C',
        accent: '#7B68EE',
        cta: '#FFD23F',
        highlight: '#AD1457',
        background: '#FFF0F5',
        'berry-ink': '#3D0A24',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}