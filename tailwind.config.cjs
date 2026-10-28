/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': 'var(--blue)',
        'purple': 'var(--purple)',
        'light-blue': 'var(--light-blue)',
      },
    },
  },
  plugins: [],
} 