module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        modal: '3rem 1fr',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
