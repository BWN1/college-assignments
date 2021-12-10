const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}'],
  },
  darkMode: false,
  theme: {
    extend: {},
    colors: {
      black: colors.black,
      gray: colors.gray,
      green: colors.green,
      blue: colors.blue,
      red: colors.red,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
