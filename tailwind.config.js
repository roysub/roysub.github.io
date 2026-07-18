/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        automation: {
          slate: '#0f172a',
          cyan: '#0ea5e9',
        },
      },
    },
  },
  plugins: [],
}

