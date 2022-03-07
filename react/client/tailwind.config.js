const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.gray,
      accent: colors.blue,
      white: colors.white,
      red: colors.red,
      green: colors.green,
    },
    extend: {
      gridTemplateColumns: {
        'mobile-menu': 'min-content auto',
      },
      borderRadius: {
        circle: '50%',
      },
      gridTemplateRows: {
        product: 'repeat(2, auto)',
      },
      maxWidth: {
        250: '250px',
      },
      height: {
        'hero-large': '28rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
