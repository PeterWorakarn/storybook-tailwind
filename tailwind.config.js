module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
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
      }
    },
  },
  plugins: [],
}