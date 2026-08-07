/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#f7f9fc',
          100: '#eef2f7',
          200: '#e2e8f0',
        },
        ink: {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
          400: '#94a3b8',
        },
        ember: {
          400: '#70b5f9',
          500: '#4c8bf5',
          600: '#2f6fd4',
        },
        night: {
          DEFAULT: '#1b1f23',
          surface: '#1d2226',
          raised: '#283339',
          border: '#38434f',
          text: '#f3f6f8',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

