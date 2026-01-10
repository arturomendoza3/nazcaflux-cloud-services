/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0EA5E9',
          dark: '#0284C7',
        },
        dark: {
          DEFAULT: '#0F172A',
          lighter: '#1E293B',
        }
      },
    },
  },
  plugins: [],
}
