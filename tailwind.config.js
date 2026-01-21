/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-navy': '#0a1f3a',
        'light-palm': '#e0f2fe',
        'sand': '#f5e8c7',
        'logo-red': '#c8102e',
      },
    },
  },
  plugins: [],
}
