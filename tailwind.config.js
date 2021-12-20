module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      colors: {
        primary: {
          red: '#E53E51',
          pink: '#FFA494',
          blue: '#2955F4',
          aqua: '#32B0C7',
          navy: '#212339',
        },
      },
      textColor: [
        "selection"
      ],
      backgroundColor: [
        "selection"
      ],
    },
  },
  plugins: [
    require("tailwindcss-selection-variant"),
    require('@tailwindcss/line-clamp'),
  ],
}