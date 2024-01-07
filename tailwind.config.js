/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./src/components/**/*.{html,js,ts,jsx,tsx}",
    "./src/layout/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient': 'linear-gradient(180deg,rgb(255,64,96)_0%,rgb(255,128,196)_52%,rgb(109,94,234)_100%)',
      },
      borderWidth: {
        '1': '1px',
      },
      borderImage: {
        'gradient': 'linear-gradient(to_bottom,rgb(255,64,96),rgb(255,128,196)_52%,rgb(109,94,234)_100%)',
      },
    },
    colors: {
      'primary': '#120a14',
      'secondary': '#ff4262',
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.border-image-gradient': {
          'border-image': 'var(--border-gradient) 1',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}