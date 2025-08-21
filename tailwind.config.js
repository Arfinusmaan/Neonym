/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#a18080',
        secondary: '#5c5451',
        background: '#fffbf5',
      },
      fontFamily: {
        palanquin: ['Palanquin', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};