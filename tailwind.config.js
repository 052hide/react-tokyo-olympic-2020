module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        modalHeader: '3rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
