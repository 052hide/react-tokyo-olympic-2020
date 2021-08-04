/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: '360px',
      },
      gridTemplateRows: {
        modal: '3rem 1fr',
      },
      gridTemplateColumns: {
        flexFirst4rem: '3fr repeat(3, minmax(4rem, 1fr))',
        countryNameWithFlag: '4rem minmax(0, 1fr)',
      },
      colors: {
        gold: {
          default: '#887600',
        },
        silver: {
          default: '#657786',
        },
        bronze: {
          default: '#934020',
        },
      },
      minHeight: {
        '25vw': '25vw',
        '50vw': '50vw',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
