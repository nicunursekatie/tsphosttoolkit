/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'teal': {
          DEFAULT: '#236383',
          dark: '#007e8c',
          light: '#47b3cb',
          50: '#f0f9fa',
        },
        'gold': {
          DEFAULT: '#fbad3f',
        },
        'crimson': {
          DEFAULT: '#a31c41',
        },
        'teal-100': '#cce7ed',
      },
    },
  },
  plugins: [],
}
