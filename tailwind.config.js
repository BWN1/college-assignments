const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
    colors: {
      white: colors.white,
      black: colors.black,
      red: colors.red,
      blue: colors.blue,
      green: colors.green,
      yellow: colors.yellow,
      sky: colors.sky,
      slate: colors.slate,
      gray: colors.gray,
    },
  },
  plugins: [],
};
