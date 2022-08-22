module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '1/7': '7%',
        '1/93': '93%',
        '1/15': '15%',
        '1/85': '85%',
      },
      height: {
        '87/100': '87vh',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}