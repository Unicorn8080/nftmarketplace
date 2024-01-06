/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./src/components/**/*.{html,js,ts,jsx,tsx}",
    "./src/layout/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#120a14',
      'secondary': '#ff4262',
    }
  },
  plugins: [],
}