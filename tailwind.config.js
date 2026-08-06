/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfbf6',
          100: '#f7f1e6',
          200: '#efe6d3',
        },
        ink: {
          900: '#1b1710',
          800: '#26211a',
          700: '#3a332a',
          600: '#544a3d',
          400: '#8a7f6f',
        },
        ember: {
          400: '#f2a65a',
          500: '#e8814a',
          600: '#d1652f',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

