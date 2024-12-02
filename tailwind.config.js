/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50', // Green shade for education
        secondary: '#FFC107', // Yellow for highlights
        brandDark: '#2C3E50', // Dark blue for background
      },
    },
  },
  
  plugins: [],
}