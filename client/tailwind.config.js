const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.gray,
      accent: colors.blue,
      white: colors.white,
    },
    extend: {
      gridTemplateColumns: {
        'mobile-menu': 'min-content auto',
      },
      borderRadius: {
        circle: '50%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
